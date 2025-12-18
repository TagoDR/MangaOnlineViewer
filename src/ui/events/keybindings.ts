import { sanitizeUrl } from '@braintree/sanitize-url';
import hotkeys from 'hotkeys-js';
import _ from 'lodash';
import {
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
} from '../../core/settings';
import { logScript } from '../../utils/tampermonkey';
import { toggleAutoScroll } from './autoscroll.ts';
import { changeAutoScrollSpeed } from './options.ts';
import { updateViewMode } from './viewmode.ts';
import { changeGlobalZoom, changeZoomByStep } from './zoom.ts';

/**
 * Handles the logic for scrolling the page up or down.
 * The behavior changes based on the current view and zoom modes to provide an intuitive experience.
 * @internal
 * @param {1 | -1} sign - The direction of the scroll (-1 for up, 1 for down).
 */
function scrollFluid(sign: 1 | -1) {
  const viewMode = getSettingsValue('viewMode');
  const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
  getAppStateValue('chapter').value?.scrollBy({
    left: 0.8 * window.innerWidth * sign * scrollDirection,
    behavior: 'smooth',
  });
}

function scrollPage(sign: 1 | -1) {
  const currentPage = getAppStateValue('currentPage');
  const target = currentPage + sign;
  if (target < 0) {
    setAppStateValue('scrollToPage', 0);
  } else if (target > (getAppStateValue('manga')?.pages ?? 1)) {
    // Do nothing if at the end
  } else {
    setAppStateValue('scrollToPage', target);
  }
}

function scrollVertical(sign: 1 | -1) {
  window.scrollBy({
    top: 0.8 * window.innerHeight * sign,
    behavior: 'smooth',
  });
}

function doScrolling(sign: 1 | -1) {
  const viewMode = getSettingsValue('viewMode');
  const zoomMode = getSettingsValue('zoomMode');
  logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
  if (viewMode.startsWith('Fluid')) {
    scrollFluid(sign);
  } else if (zoomMode === 'height') {
    scrollPage(sign);
  } else {
    scrollVertical(sign);
  }
}

/**
 * Redirects the browser to a given URL.
 * If the URL is null, undefined, or '#', it navigates back in the browser history.
 * @param type
 */
export function redirectUrl(type: 'next' | 'prev' | 'series') {
  const url = getAppStateValue('manga')?.[type];
  if (url && url !== '#') {
    location.href = sanitizeUrl(url);
  } else if (type !== 'next') {
    history.back();
  }
}

/**
 * A mapping of keybinding identifiers to their corresponding action functions.
 * @internal
 */
const actions: Record<string, () => void> = {
  SCROLL_UP() {
    doScrolling(-1);
  },
  SCROLL_DOWN() {
    doScrolling(1);
  },
  NEXT_CHAPTER() {
    redirectUrl('next');
  },
  PREVIOUS_CHAPTER() {
    redirectUrl('prev');
  },
  RETURN_CHAPTER_LIST() {
    redirectUrl('series');
  },
  ENLARGE() {
    changeZoomByStep(1)();
  },
  REDUCE() {
    changeZoomByStep(-1)();
  },
  RESTORE() {
    changeGlobalZoom('percent', 100)();
  },
  FIT_WIDTH() {
    changeGlobalZoom('width')();
  },
  FIT_HEIGHT() {
    changeGlobalZoom('height')();
  },
  SETTINGS() {
    changeAppStateValue('panel', p => (p === 'none' ? 'settings' : 'none'));
  },
  VIEW_MODE_WEBCOMIC() {
    updateViewMode('WebComic')();
  },
  VIEW_MODE_VERTICAL() {
    updateViewMode('Vertical')();
  },
  VIEW_MODE_LEFT() {
    updateViewMode('FluidRTL')();
  },
  VIEW_MODE_RIGHT() {
    updateViewMode('FluidLTR')();
  },
  SCROLL_START() {
    toggleAutoScroll();
  },
  INCREASE_SPEED() {
    changeAutoScrollSpeed(1);
  },
  DECREASE_SPEED() {
    changeAutoScrollSpeed(-1);
  },
};

/**
 * Initializes the keybinding system.
 * It first unbinds all existing hotkeys to prevent conflicts, then re-binds them
 * based on the current user settings. Each keybinding is throttled to prevent rapid firing.
 */
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
