import { logScript } from './tampermonkey';
import { waitForAtb, waitWithTimer } from './waitFor';

/**
 * A last-resort method to scrape image URLs by simulating user interaction.
 * This function should only be used when image URLs are not readily available in the page source and must be discovered through interaction, such as clicking a "next" button.
 * It programmatically clicks a "next" button to navigate through pages and extracts the image source from a target element on each page.
 * An overlay is added to prevent user interaction during the process.
 *
 * @param {() => void} resetPosition - A function to reset the scroll position or state before starting.
 * @param {number} quantPages - The total number of pages to scrape.
 * @param {string} nextSelector - The CSS selector for the "next page" button.
 * @param {string} targetSelector - The CSS selector for the container element where the image appears.
 * @param {string} [imageSelector='img'] - The CSS selector for the image element within the target container.
 * @param {string} [imageAttribute='src'] - The attribute on the image element that holds the URL.
 * @returns {Promise<string[]>} A promise that resolves with an array of the scraped image URLs.
 */
export async function bruteforce(
  resetPosition: () => void,
  quantPages: number,
  nextSelector: string,
  targetSelector: string,
  imageSelector: string = 'img',
  imageAttribute: string = 'src',
): Promise<string[]> {
  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
  );
  document.body.append(div);
  resetPosition();

  const next = document.querySelector(nextSelector);
  const target = document.querySelector<HTMLDivElement>(targetSelector);
  const src: string[] = [];
  for (let i = 1; i <= quantPages; i += 1) {
    src[i - 1] = await waitWithTimer(
      waitForAtb(imageSelector, imageAttribute, target ?? document.body),
      100,
    );
    target?.querySelector(imageSelector)?.removeAttribute(imageAttribute);
    next?.dispatchEvent(new Event('click'));
  }
  return src;
}

/**
 * Converts a blob URL to a self-contained data URL.
 * Very useful for offline stability and portability of blob-based images.
 *
 * @param blobUrl - The blob URL to convert.
 * @returns A promise that resolves to the data URL or the original blob URL on failure.
 */
export async function blobUrlToDataUrl(blobUrl: string): Promise<string> {
  try {
    const res = await fetch(blobUrl);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.error(`Failed to convert blob URL ${blobUrl} to data URL:`, e);
    return blobUrl;
  }
}

/**
 * A brute-force method that scrolls page-by-page sequentially, waiting for each image to load
 * and descramble before collecting its source. Shows a progress overlay during the process.
 *
 * @param expectedPagesCount - The total number of pages to collect.
 * @param isReaderImage - A predicate to identify if an image element is a reader page.
 * @param isValidSource - A predicate to check if the image has loaded a valid (descrambled) source.
 * @returns A promise resolving to an array of collected image URLs (with blob URLs converted to data URLs).
 */
export async function bruteforceScroll(
  expectedPagesCount: number,
  isReaderImage: (img: HTMLImageElement) => boolean,
  isValidSource: (src: string) => boolean,
): Promise<string[]> {
  const overlay = document.createElement('div');
  overlay.style.cssText =
    'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;';
  overlay.innerHTML = `
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const updateProgress = (collected: number, total: number) => {
    const pct = total > 0 ? Math.round((collected / total) * 100) : 0;
    const textEl = document.getElementById('mov-loading-text');
    const barEl = document.getElementById('mov-loading-bar');
    if (textEl)
      textEl.textContent = `Scrolling and waiting for pages to load: ${collected} / ${total || '?'}`;
    if (barEl) barEl.style.width = total > 0 ? `${pct}%` : '50%';
  };

  updateProgress(0, expectedPagesCount);

  const origScrollY = window.scrollY;
  const collectedUrls: string[] = [];

  try {
    for (let i = 0; i < expectedPagesCount; i++) {
      let imgElement: HTMLImageElement | null = null;
      let elapsedImage = 0;

      while (elapsedImage < 5000) {
        const imgElements = [...document.querySelectorAll('img')] as HTMLImageElement[];
        const readerImages = imgElements.filter(isReaderImage);

        if (readerImages[i]) {
          imgElement = readerImages[i];
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        elapsedImage += 100;
      }

      if (!imgElement) {
        logScript(`Failed to find image element for page ${i + 1}`);
        continue;
      }

      imgElement.scrollIntoView({ behavior: 'auto', block: 'center' });

      let elapsedLoad = 0;
      let validSrc = '';
      while (elapsedLoad < 5000) {
        const src = imgElement.src || imgElement.getAttribute('src') || '';
        if (src && isValidSource(src) && (imgElement.naturalWidth > 250 || imgElement.complete)) {
          const w = imgElement.naturalWidth || imgElement.width || 0;
          if (w === 0 || w >= 250) {
            validSrc = src;
            break;
          }
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        elapsedLoad += 100;
      }

      if (validSrc) {
        collectedUrls.push(validSrc);
      } else {
        logScript(`Timeout waiting for image ${i + 1} to load`);
        collectedUrls.push(imgElement.src || imgElement.getAttribute('src') || '');
      }

      updateProgress(collectedUrls.length, expectedPagesCount);
    }
  } finally {
    window.scrollTo(0, origScrollY);
    overlay.remove();
  }

  if (collectedUrls.length === 0) {
    throw new Error('No images collected from the page');
  }

  return await Promise.all(
    collectedUrls.map(async url => {
      if (url.startsWith('blob:')) {
        return await blobUrlToDataUrl(url);
      }
      return url;
    }),
  );
}
