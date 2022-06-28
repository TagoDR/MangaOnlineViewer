/**
 * Interface for the settings
 */
interface ILazyOptions {
  threshold: number;
  throttle: number;
  lazyAttribute: string;
  targetAttribute: string;
}

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
interface LazyItem {
  element: HTMLImageElement;
  callback: (element: HTMLImageElement) => void;
}

/**
 * List of elements that will be lazy loaded
 */
let listElements: LazyItem[] = [];

/**
 * Check if the image ins nearing the viewport, so it needs to load.
 * @param value
 */
function filterInView(value: LazyItem) {
  const { element } = value;
  if (!element.offsetParent) return false;
  const ele = element.offsetParent as HTMLElement;
  const top = ele.offsetTop + element.height >= window.scrollY - settings.threshold;
  const bottom = ele.offsetTop <= window.scrollY + window.innerHeight + settings.threshold;
  return top && bottom;
}

/**
 * Execute the loading of the image
 * @param item
 */
function showElement(item: LazyItem) {
  const value = item.element.getAttribute(settings.lazyAttribute);
  if (value) item.element.setAttribute(settings.targetAttribute, value);
  item.callback(item.element);
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
 * Throttle controller
 */
let wait: NodeJS.Timeout | undefined;
/**
 * Function responsible for observing the screen move/change
 */
function observerEvent() {
  if (listElements.length === 0) {
    window.removeEventListener('scroll', observerEvent);
    window.removeEventListener('touchmove', observerEvent);
    window.removeEventListener('resize', observerEvent);
    // console.info('All items lazy loaded');
    return;
  }
  if (wait) {
    return;
  }
  executeCheck();

  wait = setTimeout(() => {
    wait = undefined;
  }, settings.throttle);
}

/**
 * Simple lazy loading for images.
 * Add an image element to a list, wait for it to be close to appearing on screen then load its 'src' from 'data-src'
 * then call a callback function.
 * @param element
 * @param callback
 */
function lazyLoad(element: HTMLImageElement, callback: (element: HTMLImageElement) => void): void {
  if (listElements.length === 0) {
    // console.info('Initializing lazy load');
    window.addEventListener('scroll', observerEvent, {
      passive: true,
    });
    window.addEventListener('touchmove', observerEvent, {
      passive: true,
    });
    window.addEventListener('resize', observerEvent, {
      passive: true,
    });
  }
  listElements.push({ element, callback });
}
export default lazyLoad;
