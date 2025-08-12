import { setAppStateValue } from '../core/settings.ts';
import { getDevice } from '../utils/tampermonkey';
import autoscroll from './events/autoscroll';
import trackCurrentPage from './events/currentpage';
import headroom from './events/headroom';
import keybindings from './events/keybindings';

// Controls for the extra features added to the sites
function events() {
  headroom();
  keybindings();
  window.addEventListener('resize', () => {
    setAppStateValue('device', getDevice());
  });
  autoscroll();
  trackCurrentPage();
}

export default events;
