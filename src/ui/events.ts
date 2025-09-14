import { setAppStateValue } from '../core/settings.ts';
import { getDevice } from '../utils/tampermonkey';
import autoscroll from './events/autoscroll';
import trackCurrentPage from './events/currentpage';
import keybindings from './events/keybindings';

/**
 * Initializes all global event listeners for the application.
 * This function sets up headroom for the header, keyboard shortcuts,
 * auto-scrolling, current page tracking, and responsive device detection on resize.
 */
function events() {
  keybindings();
  window.addEventListener('resize', () => {
    setAppStateValue('device', getDevice());
  });
  autoscroll();
  trackCurrentPage();
}

export default events;
