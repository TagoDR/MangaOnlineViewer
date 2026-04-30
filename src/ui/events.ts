import _ from 'lodash';
import { getAppStateValue, setAppStateValue } from '../core/settings.ts';
import { getDevice } from '../utils/tampermonkey.ts';
import { waitForFunc } from '../utils/waitFor.ts';
import autoscroll from './events/autoscroll';
import trackCurrentPage from './events/currentpage';
import keybindings from './events/keybindings';
import { applyZoom } from './events/zoom.ts';

/**
 * Event handler for window resize and orientation change events.
 * It recalculates the zoom to ensure the content fits the new window dimensions.
 */
export const updateOnResize = _.debounce(() => {
  setAppStateValue('device', getDevice());
  applyZoom();
}, 200);

/**
 * Initializes all global event listeners for the application.
 * This function sets up headroom for the header, keyboard shortcuts,
 * auto-scrolling, current page tracking, and responsive device detection on resize.
 */
async function events() {
  await waitForFunc(() => getAppStateValue('manga') !== undefined);
  keybindings();
  window.addEventListener('resize', updateOnResize);
  window.addEventListener('orientationchange', updateOnResize);
  autoscroll();
  trackCurrentPage();
}

export default events;
