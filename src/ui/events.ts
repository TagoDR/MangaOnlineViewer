import { getDevice } from '../utils/tampermonkey';
import autoscroll from './events/autoscroll';
import headroom from './events/headroom';
import keybindings from './events/keybindings';
import panels from './events/panels';
import trackCurrentPage from './events/currentpage';
import { setAppStateValue } from '../core/settings.ts';

// Controls for the extra features added to the sites
function events() {
  headroom(100);
  keybindings();
  window.addEventListener('resize', () => {
    setAppStateValue('device', getDevice());
  });
  panels();
  autoscroll();
  trackCurrentPage();
}

export default events;
