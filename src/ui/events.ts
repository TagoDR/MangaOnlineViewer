import bookmarks from './events/bookmarks.ts';
import globals from './events/globals.ts';
import headroom from './events/headroom.ts';
import keybindings from './events/keybindings.ts';
import individual from './events/individual.ts';
import navigation from './events/navigation.ts';
import options from './events/options.ts';
import panels from './events/panels.ts';
import size from './events/size.ts';
import theming from './events/theming.ts';
import viewMode from './events/viewmode.ts';
import zoom from './events/zoom.ts';

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
