/**
 * @file This module contains the logic for the auto-scrolling feature.
 * It provides functions to start, stop, and intelligently pause/resume scrolling
 * based on user interaction (e.g., manual scrolling via the mouse wheel).
 */

import _ from 'lodash';
import { getAppStateValue, getSettingsValue } from '../../core/settings';
import { logScript } from '../../utils/tampermonkey';

/** A flag to indicate if the auto-scroll loop is currently active. */
let scrollActive = false;

/**
 * The core scrolling animation loop.
 * It checks the current view mode to determine the scroll direction (vertical or horizontal)
 * and scrolls the appropriate container by the amount specified in the settings.
 * The loop continues via `requestAnimationFrame` as long as `scrollActive` is true.
 * @internal
 */
function scroll() {
  const chapter = getAppStateValue('render')?.querySelector<HTMLElement>('#Chapter');
  if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
    const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
    chapter?.scrollBy({
      top: 0,
      left: getSettingsValue('scrollHeight') * scrollDirection,
      behavior: 'smooth',
    });
  } else {
    window.scrollBy({
      top: getSettingsValue('scrollHeight'),
      left: 0,
      behavior: 'smooth',
    });
  }
  if (getAppStateValue('render')?.querySelector('#Header')?.classList.contains('headroom-end')) {
    scrollActive = false;
    getAppStateValue('render')?.querySelector('#ScrollControl')?.classList.remove('running');
    logScript('Finished auto scroll');
  }
  if (scrollActive) {
    requestAnimationFrame(scroll);
  }
}

/**
 * Toggles the auto-scroll feature on or off.
 * It updates the UI state of the control button and starts or stops the `scroll` animation loop.
 */
export function toggleAutoScroll() {
  const control = getAppStateValue('render')?.querySelector('#AutoScroll');
  if (scrollActive) {
    scrollActive = false;
    control?.classList.remove('running');
    logScript('Stopped auto scroll');
  } else {
    scrollActive = true;
    requestAnimationFrame(scroll);
    control?.classList.add('running');
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
  if (!resume && scrollActive) {
    toggleAutoScroll();
    resume = true;
  }
  if (resume && !scrollActive) {
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
