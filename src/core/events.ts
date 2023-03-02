import bookmarks from './events/bookmarks';
import globals from './events/globals';
import headroom from './events/headroom';
import keybindings from './events/keybindings';
import individual from './events/individual';
import navigation from './events/navigation';
import options from './events/options';
import panels from './events/panels.js';
import size from './events/size';
import theming from './events/theming';
import viewMode from './events/viewmode';
import zoom from './events/zoom';

// Controls for the extra features added to the sites
function events() {
  bookmarks();
  globals();
  headroom(100);
  keybindings();
  individual();
  navigation();
  options();
  panels();
  size();
  theming();
  viewMode();
  zoom();
}

export default events;
