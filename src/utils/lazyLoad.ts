import { blobToDataURL } from 'blob-util';
import _ from 'lodash';
import { logScript } from './tampermonkey';
import { isBase64ImageUrl, isObjectURL } from './urls';

/**
 * Defines the configuration options for the lazy loader.
 */
type ILazyOptions = {
  /** The distance (in pixels) from the viewport edge at which to start loading images. */
  threshold: number;
  /** The time (in milliseconds) to wait before re-checking for images to load after a scroll/resize event. */
  throttle: number;
  /** The HTML attribute on the image element that contains the lazy-load source URL. */
  lazyAttribute: string;
  /** The HTML attribute to which the lazy-load source URL will be applied (e.g., 'src'). */
  targetAttribute: string;
};

/**
 * The default settings for the lazy loader.
 * @internal
 */
const settings: ILazyOptions = {
  threshold: 2000,
  throttle: 500,
  lazyAttribute: 'data-src',
  targetAttribute: 'src',
};

/**
 * Represents an item that is scheduled to be lazy-loaded.
 * @internal
 */
type LazyItem = {
  /** The image element to be lazy-loaded. */
  element: HTMLImageElement;
  /** A callback function to execute after the image has been loaded. */
  callback: (element: HTMLImageElement) => void | Promise<void>;
  /** Optional `fetch` options to use when retrieving the image, if it's not a data URL or blob. */
  fetchOptions?: RequestInit;
};

/**
 * A list of all elements currently scheduled for lazy loading.
 * @internal
 */
let listElements: LazyItem[] = [];
/**
 * A flag to ensure that global event listeners are only set up once.
 * @internal
 */
let setup = false;

/**
 * Checks if an element is within the viewport or close to it, based on the configured threshold.
 * @internal
 * @param {LazyItem} value - The lazy load item to check.
 * @returns {boolean} `true` if the element is in view, `false` otherwise.
 */
function filterInView(value: LazyItem): boolean {
  const { element } = value;
  const rect = element.getBoundingClientRect();
  const target = (window.innerHeight || document.documentElement.clientHeight) + settings.threshold;
  return rect.top <= target || rect.bottom <= target;
}

/**
 * Loads the image source for a given lazy item and executes its callback.
 * It handles fetching remote images and converting them to data URLs if necessary.
 * @internal
 * @param {LazyItem} item - The lazy load item to process.
 */
async function showElement(item: LazyItem) {
  let value = item.element.getAttribute(settings.lazyAttribute) ?? '';
  if (value) {
    if (!isObjectURL(value) && !isBase64ImageUrl(value) && item.fetchOptions) {
      value = await fetch(value, item.fetchOptions)
        .then(resp => resp.blob())
        .then(blob => blobToDataURL(blob));
    }
    item.element.setAttribute(settings.targetAttribute, value);
  }

  item.callback(item.element)?.catch(logScript);
}

/**
 * Checks the list of lazy-load elements, identifies which are in view, loads them,
 * and removes them from the pending list.
 * @internal
 */
function executeCheck() {
  const inView = listElements.filter(filterInView);
  listElements = listElements.filter(item => !inView.includes(item));
  inView.forEach(showElement);
}

/**
 * A throttled version of `executeCheck` to prevent performance issues on frequent scroll/resize events.
 * @internal
 */
const observerEvent = _.throttle(executeCheck, settings.throttle);

/**
 * Registers an image element for lazy loading.
 * When the element is close to the viewport, its `src` attribute will be set from the `data-src` attribute.
 * @param {HTMLImageElement} element - The image element to lazy-load.
 * @param {(element: HTMLImageElement) => void | Promise<void>} callback - A function to call after the image has been loaded.
 * @param {RequestInit} [fetchOptions] - Optional `fetch` options for retrieving the image.
 */
function lazyLoad(
  element: HTMLImageElement,
  callback: (element: HTMLImageElement) => void | Promise<void>,
  fetchOptions?: RequestInit,
): void {
  if (!setup) {
    window.addEventListener('scroll', observerEvent, {
      passive: true,
    });
    window.addEventListener('touchmove', observerEvent, {
      passive: true,
    });
    window.addEventListener('resize', observerEvent, {
      passive: true,
    });
    setup = true;
  }

  listElements.push({ element, callback, fetchOptions });
  observerEvent();
}

export default lazyLoad;
