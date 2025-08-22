import { waitForAtb, waitWithTimer } from './waitFor';

/**
 * A last-resort method to scrape image URLs by simulating user interaction.
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
