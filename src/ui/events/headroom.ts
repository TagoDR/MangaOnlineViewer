import _ from 'lodash';
import { changeAppStateValue, getSettingsValue, setAppStateValue } from '../../core/settings';

/**
 * Event handler to toggle the header's visibility when in 'click' mode.
 */
export function buttonHeaderClick() {
  if (getSettingsValue('header') === 'click') {
    changeAppStateValue('headerVisible', v => !v);
  }
}

/**
 * Checks if the mouse cursor is within a specified rectangular region at the top-left of the screen.
 * @param {MouseEvent} event - The mouse event containing the cursor coordinates.
 * @param {number} headerWidth - The width of the region to check.
 * @param {number} headerHeight - The height of the region to check.
 * @returns {boolean} `true` if the mouse is inside the region, `false` otherwise.
 */
export function isMouseInsideRegion(
  event: MouseEvent,
  headerWidth: number,
  headerHeight: number,
): boolean {
  return (
    event.clientX >= 0 &&
    event.clientX <= headerWidth &&
    event.clientY >= 0 &&
    event.clientY <= headerHeight
  );
}

/**
 * Event handler to control header visibility in 'hover' mode.
 * The header is shown if the mouse is in the top portion of the screen or if the page is scrolled to the top.
 * @param {MouseEvent} event - The mouse move event.
 */
export function headerHover(event: MouseEvent) {
  if (getSettingsValue('header') === 'hover') {
    setAppStateValue(
      'headerVisible',
      isMouseInsideRegion(event, window.innerWidth, 150) || window.scrollY <= 100,
    );
  }
}

let prevOffset = 0;
const showEnd = 100;

/**
 * Toggles the header's visibility based on the scroll direction and position.
 * This is the core logic for the 'scroll' header mode.
 */
export function toggleScrollDirection() {
  const { scrollY } = window;
  if (
    showEnd &&
    getSettingsValue('zoomMode') !== 'height' &&
    scrollY + window.innerHeight + showEnd > document.body.scrollHeight
  ) {
    // Show header if near the end of the page
    setAppStateValue('headerVisible', true);
  } else if (scrollY > prevOffset && scrollY > 50) {
    // Hide header on scroll down
    setAppStateValue('headerVisible', false);
  } else if (scrollY < prevOffset && scrollY > 50) {
    // Show header on scroll up
    setAppStateValue('headerVisible', true);
  } else if (scrollY <= 100) {
    // Always show header if near the top
    setAppStateValue('headerVisible', true);
  } else {
    setAppStateValue('headerVisible', false);
  }

  prevOffset = scrollY;
}

/**
 * Initializes the header visibility logic by attaching throttled scroll and mousemove event listeners.
 * This setup is often referred to as "headroom.js" behavior.
 */
function headroom() {
  window.addEventListener('scroll', _.throttle(toggleScrollDirection, 300));
  window.addEventListener('mousemove', _.throttle(headerHover, 300));
}

export default headroom;
