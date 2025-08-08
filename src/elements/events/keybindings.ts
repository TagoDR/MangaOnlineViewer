import hotkeys from 'hotkeys-js';
import _ from 'lodash';
import {
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
  setSettingsValue,
} from '../../core/settings';
import { changeGlobalZoom, changeZoomByStep } from './zoom';

function setScroll(sign: 1 | -1) {
  const nextpage = (getAppStateValue('currentPage') ?? 1) + sign;
  if (
    nextpage > (getAppStateValue('manga')?.pages ?? 1) ||
    nextpage < (getAppStateValue('manga')?.begin ?? 1)
  )
    return;
  setAppStateValue('scrollToPage', nextpage);
}

const actions: Record<string, () => void> = {
  SCROLL_UP() {
    setScroll(-1);
  },
  SCROLL_DOWN() {
    setScroll(+1);
  },
  NEXT_CHAPTER() {
    setAppStateValue('link', 'next');
  },
  PREVIOUS_CHAPTER() {
    setAppStateValue('link', 'prev');
  },
  ENLARGE() {
    changeZoomByStep(1);
  },
  REDUCE() {
    changeZoomByStep(-1);
  },
  RESTORE() {
    changeGlobalZoom('percent');
  },
  FIT_WIDTH() {
    changeGlobalZoom('width');
  },
  FIT_HEIGHT() {
    changeGlobalZoom('height');
  },
  SETTINGS() {
    changeAppStateValue('panel', v => (v === 'settings' ? 'none' : 'settings'));
  },
  VIEW_MODE_WEBCOMIC() {
    setSettingsValue('viewMode', 'WebComic');
  },
  VIEW_MODE_VERTICAL() {
    setSettingsValue('viewMode', 'Vertical');
  },
  VIEW_MODE_LEFT() {
    setSettingsValue('viewMode', 'FluidLTR');
  },
  VIEW_MODE_RIGHT() {
    setSettingsValue('viewMode', 'FluidRTL');
  },
  SCROLL_START() {
    changeAppStateValue('autoScroll', b => !b);
  },
};

// Clean key press configurations and set some when specified
function keybindings() {
  document.onkeydown = null;
  document.onkeyup = null;
  window.onkeydown = null;
  window.onkeyup = null;
  window.onload = null;
  document.body.onload = null;
  hotkeys.unbind();
  Object.keys(getSettingsValue('keybinds')).forEach(key => {
    hotkeys(
      getSettingsValue('keybinds')[key]?.join(',') ?? '',
      _.throttle(event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        actions[key]();
      }, 100),
    );
  });
}

export default keybindings;
