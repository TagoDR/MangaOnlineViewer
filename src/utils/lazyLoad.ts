/**
 * Interface for the settings
 */
import _ from 'lodash';
import blobUtil from 'blob-util';
import { logScript } from './tampermonkey';

type ILazyOptions = {
  threshold: number;
  throttle: number;
  lazyAttribute: string;
  targetAttribute: string;
};

/**
 * Settings the lazy load will obey
 */
const settings: ILazyOptions = {
  threshold: 2000,
  throttle: 500,
  lazyAttribute: 'data-src',
  targetAttribute: 'src',
};

/**
 * Interface for the lazy elements
 */
type LazyItem = {
  element: HTMLImageElement;
  callback: (element: HTMLImageElement) => void | Promise<void>;
  fetchOptions?: RequestInit;
};

/**
 * List of elements that will be lazy loaded
 */
let listElements: LazyItem[] = [];
let setup = false;

/**
 * Check if the image ins nearing the viewport, so it needs to load.
 * https://stackoverflow.com/a/70476497/2453148
 * @param value
 */
function filterInView(value: LazyItem) {
  const { element } = value;
  const rect = element.getBoundingClientRect();
  const target = (window.innerHeight || document.documentElement.clientHeight) + settings.threshold;
  return rect.top <= target || rect.bottom <= target;
}

/**
 * Execute the loading of the image
 * @param item
 */
async function showElement(item: LazyItem) {
  let value = item.element.getAttribute(settings.lazyAttribute);
  if (value && item.fetchOptions) {
    value = await fetch(value, item.fetchOptions)
      .then((resp) => resp.blob())
      .then((blob) => blobUtil.blobToDataURL(blob));
  }
  if (value) {
    item.element.setAttribute(settings.targetAttribute, value);
  }

  item.callback(item.element)?.catch(logScript);
}

/**
 * Lookup images that should be loaded, and update the current list
 */
function executeCheck() {
  const inView = listElements.filter(filterInView);
  listElements = listElements.filter((item) => !filterInView(item));
  inView.forEach(showElement);
}

/**
 * Function responsible for observing the screen move/change
 */
const observerEvent = _.throttle(executeCheck, settings.throttle);

/**
 * Simple lazy loading for images.
 * Add an image element to a list, wait for it to be close to appearing on screen then load its
 * 'src' from 'data-src' then call a callback function.
 * @param element
 * @param callback
 * @fetch fetchOptions
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
