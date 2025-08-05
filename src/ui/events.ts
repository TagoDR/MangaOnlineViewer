import { getDevice } from '../utils/tampermonkey';
import autoscroll from './events/autoscroll';
import headroom from './events/headroom';
import keybindings from './events/keybindings';
import panels from './events/panels';

let setupEvents = false;

// Controls for the extra features added to the sites
function events() {
  if (!setupEvents) {
    headroom(100);
    keybindings();
    window.addEventListener('resize', () => {
      const reader = document.querySelector('#MangaOnlineViewer');
      reader?.classList.remove('mobile', 'tablet', 'desktop');
      reader?.classList.add(getDevice());
    });
    setupEvents = true;
  }
  panels();
  autoscroll();
}

export default events;
