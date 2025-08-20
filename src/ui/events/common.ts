import { getAppStateValue, getSettingsValue } from '../../core/settings.ts';

/**
 * Scrolls the view to a specific element.
 * The scrolling behavior adapts based on the current view mode:
 * - In 'Fluid' modes, it scrolls the internal `#Chapter` container.
 * - In other modes, it scrolls the main window.
 * @param {HTMLElement | undefined | null} ele - The element to scroll into view.
 */
export function scrollToElement(ele: HTMLElement | undefined | null) {
  if (getSettingsValue('viewMode').startsWith('Fluid')) {
    getAppStateValue('render')
      ?.querySelector('#Chapter')
      ?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  } else {
    window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  }
}

/**
 * A higher-order function that returns a new function to add an event listener to an element.
 * @param {string} ev - The name of the event to listen for (e.g., 'click').
 * @param {(e: Event) => void} fn - The event handler function.
 * @returns {(elem: Element) => void} A function that takes an element and attaches the event listener to it.
 */
export function addEvent(ev: string, fn: (e: Event) => void) {
  return (elem: Element) => elem.addEventListener(ev, fn);
}

/**
 * An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling.
 * This is used for Left-to-Right (LTR) fluid reading modes.
 * @param {WheelEvent} event - The wheel event.
 */
export function transformScrollToHorizontal(event: WheelEvent) {
  if (!event.deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

/**
 * An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling in the reverse direction.
 * This is used for Right-to-Left (RTL) fluid reading modes.
 * @param {WheelEvent} event - The wheel event.
 */
export function transformScrollToHorizontalReverse(event: WheelEvent) {
  if (!event.deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft -= event.deltaY - event.deltaX;
  event.preventDefault();
}
