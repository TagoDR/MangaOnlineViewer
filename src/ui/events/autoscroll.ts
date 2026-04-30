/**
 * @file This module contains the logic for the auto-scrolling feature.
 * It provides functions to start, stop, and intelligently pause/resume scrolling
 * based on user interaction (e.g., manual scrolling via the mouse wheel).
 */

import _ from 'lodash';
import { getAppStateValue, getSettingsValue, setAppStateValue } from '../../core/settings';
import { logScript } from '../../utils/tampermonkey';

/**
 * The core scrolling animation loop.
 * It checks the current view mode to determine the scroll direction (vertical or horizontal)
 * and scrolls the appropriate container by the amount specified in the settings.
 * The loop continues via `requestAnimationFrame` as long as `scrollActive` is true.
 * @internal
 */
function scroll() {
  const chapterElement = getAppStateValue('chapter').value;
  if (getSettingsValue('viewMode').startsWith('Fluid')) {
    const scrollDirection = getSettingsValue('viewMode') === 'FluidRTL' ? -1 : 1;
    chapterElement?.scrollBy({
      top: 0,
      left: getSettingsValue('scrollHeight') * scrollDirection,
      behavior: 'smooth',
    });
    // Stop scrolling if we've reached the end horizontally
    if (
      chapterElement &&
      chapterElement.scrollLeft + chapterElement.clientWidth >= chapterElement.scrollWidth - 2
    ) {
      setAppStateValue('autoScroll', false);
      logScript('Finished auto scroll');
    }
  } else {
    window.scrollBy({
      top: getSettingsValue('scrollHeight'),
      left: 0,
      behavior: 'smooth',
    });
    // Stop scrolling if we've reached the bottom of the page
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      setAppStateValue('autoScroll', false);
      logScript('Finished auto scroll');
    }
  }
  if (getAppStateValue('autoScroll')) {
    requestAnimationFrame(scroll);
  }
}

/**
 * Toggles the auto-scroll feature on or off.
 * It updates the UI state of the control button and starts or stops the `scroll` animation loop.
 */
export function toggleAutoScroll() {
  if (getAppStateValue('autoScroll')) {
    setAppStateValue('autoScroll', false);
    logScript('Stopped auto scroll');
  } else {
    setAppStateValue('autoScroll', true);
    requestAnimationFrame(scroll);
    logScript('Start auto scroll');
  }
}

let resume = false;
const debounceAutoScroll = _.debounce(() => {
  toggleAutoScroll();
  resume = false;
}, 500);

/**
 * Handles manual scroll events (e.g., from a mouse wheel) to intelligently pause and resume auto-scrolling.
 * If auto-scroll is active, it pauses it. It then uses a debounce function to resume scrolling after the user stops.
 */
export function manualScroll() {
  if (!resume && getAppStateValue('autoScroll')) {
    toggleAutoScroll();
    resume = true;
  }
  if (resume && !getAppStateValue('autoScroll')) {
    debounceAutoScroll();
  }
}

/**
 * Initializes the auto-scroll feature by attaching a throttled event listener for the `wheel` event.
 */
function autoscroll() {
  window.addEventListener('wheel', _.throttle(manualScroll, 500));
}

export default autoscroll;
