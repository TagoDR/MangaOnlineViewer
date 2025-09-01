import NProgress from 'nprogress';
import { changeAppStateValue, getAppStateValue, getSettingsValue } from '../../core/settings.ts';
import { isEmpty } from '../../utils/checks.ts';
import { logScript } from '../../utils/tampermonkey.ts';
import { isBase64ImageUrl, isObjectURL } from '../../utils/urls.ts';
import { buttonStartDownload } from './globals.ts';

/**
 * Appends a cache-busting query parameter to a URL.
 * @internal
 * @param {string} src - The original image source URL.
 * @param {number} repeat - The current reload attempt number.
 * @returns {string} The new URL with the `forceReload` parameter.
 */
function invalidateImageCache(src: string, repeat: number): string {
  const url = src.replace(/[?&]forceReload=\d+$/, '');
  const symbol = !url.includes('?') ? '?' : '&';
  return `${url + symbol}forceReload=${repeat}`;
}

/**
 * Extracts the current reload attempt number from a URL's query string.
 * @internal
 * @param {string | undefined} src - The image source URL.
 * @returns {number} The next repeat value, defaulting to 1.
 */
function getRepeatValue(src: string | undefined): number {
  let repeat = 1;
  const cache = src?.match(/forceReload=(\d+)$/);
  if (cache?.at(1)) {
    repeat = parseInt(cache[1], 10) + 1;
  }
  return repeat;
}

/**
 * Attempts to reload a broken image with a cache-busting parameter.
 * It will only attempt to reload up to 5 times.
 * @internal
 * @param {number} index - The page index of the image to reload.
 * @param {HTMLImageElement} img - The `<img>` element to reload.
 */
function reloadImage(index: number, img: HTMLImageElement) {
  logScript(`Reloading Page ${index}`, img);
  const src = getAppStateValue('images')?.[index]?.src;
  if (!src) return;
  const repeat = getRepeatValue(src);
  if (repeat > getSettingsValue('maxReload')) return;
  img?.removeAttribute('src');
  if (isBase64ImageUrl(src) || isObjectURL(src)) {
    img?.setAttribute('src', src);
  } else {
    img?.setAttribute('src', invalidateImageCache(src, repeat));
  }
}

/**
 * Event handler for the reload button on an individual page.
 * @param {Event} event - The click event from the reload button.
 */
export function buttonReloadPage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  reloadImage(index, img);
}

/**
 * Event handler for the hide button on an individual page, which toggles the visibility of the page container.
 * @param {Event} event - The click event from the hide button.
 */
export function buttonHidePage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  changeImage(index, image => ({ hide: !image.hide }));
}

/**
 * Event handler for when an image successfully loads.
 * It updates the application state with the image's dimensions, attempts to create a blob for downloading,
 * and updates the overall loading progress bar.
 * @param {Event} event - The load event from an `<img>` element.
 */
export function imageLoaded(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  img.classList.add('imgLoaded');
  img.classList.remove('imgBroken');
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  changeAppStateValue('images', images => {
    return {
      ...images,
      [index]: {
        ...images?.[index],
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      },
    };
  });

  // Draw onto an offscreen canvas and try to get a Blob
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        if (!blob) return; // CORS tainted or failed
        changeAppStateValue('images', images => {
          return { ...images, [index]: { ...images?.[index], blob } };
        });
      }, 'image/png');
    }
  } catch (e) {
    console.error('Failed to transforme image to blob: ', e, ' for page ', index);
    // Ignore failures (e.g., CORS tainted). We still proceed with progress updates.
  }

  changeAppStateValue('loaded', n => n + 1);
  const loaded = getAppStateValue('loaded') ?? 0;
  const total =
    (getAppStateValue('manga')?.pages ?? 1) - ((getAppStateValue('manga')?.begin ?? 1) - 1);
  const percentage = loaded / total;
  NProgress.configure({
    showSpinner: false,
  }).set(percentage);
  if (loaded === total) {
    logScript('Images Loading Complete');
    if (getSettingsValue('downloadZip')) buttonStartDownload();
  }
}

/**
 * Event handler for when an image fails to load.
 * It marks the image as broken and attempts to reload it.
 * @param {Event} event - The error event from an `<img>` element.
 */
export function imageLoadError(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  if (isEmpty(img.getAttribute('src'))) return;
  img.classList.add('imgBroken');
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  reloadImage(index, img);
}
