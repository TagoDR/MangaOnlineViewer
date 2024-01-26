import bookmarks from './events/bookmarks';
import globals from './events/globals';
import headroom from './events/headroom';
import keybindings from './events/keybindings';
import individual from './events/individual';
import navigation from './events/navigation';
import options from './events/options';
import panels from './events/panels';
import size from './events/size';
import theming from './events/theming';
import viewMode from './events/viewmode';
import zoom from './events/zoom';
import autoscroll from './events/autoscroll';
import { getDevice } from '../utils/tampermonkey';

let setupEvents = false;

// Controls for the extra features added to the sites
function events() {
  if (!setupEvents) {
    headroom(100);
    keybindings();
    individual();
    size();
    window.addEventListener('resize', () => {
      const reader = document.querySelector('#MangaOnlineViewer');
      ['mobile', 'tablet', 'desktop'].forEach((c) => reader?.classList.remove(c));
      reader?.classList.add(getDevice());
    });
    setupEvents = true;
  }
  bookmarks();
  globals();
  navigation();
  options();
  panels();
  theming();
  viewMode();
  zoom();
  autoscroll();
}

export default events;
