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
import { updateViewMode } from './viewmode.ts';
import { changeGlobalZoom, changeZoomByStep } from './zoom.ts';

/**
 * Handles the logic for scrolling the page up or down.
 * The behavior changes based on the current view and zoom modes to provide an intuitive experience.
 * @internal
 * @param {1 | -1} sign - The direction of the scroll (-1 for up, 1 for down).
 */
function doScrolling(sign: 1 | -1) {
  const viewMode = getSettingsValue('viewMode');
  const zoomMode = getSettingsValue('zoomMode');
  logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
  if (viewMode.startsWith('Fluid')) {
    // In fluid modes, scroll horizontally.
    const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
    getAppStateValue('chapter').value?.scrollBy({
      left: 0.8 * window.innerWidth * sign * scrollDirection,
      behavior: 'smooth',
    });
  } else if (zoomMode === 'height') {
    // In 'Fit Height' mode, scroll page by page.
    const currentPage = getAppStateValue('currentPage');
    const target = currentPage + sign;
    if (target < 0) {
      setAppStateValue('scrollToPage', 0);
    } else if (target > (getAppStateValue('manga')?.pages ?? 1)) {
      // Do nothing if at the end
    } else {
      setAppStateValue('scrollToPage', target);
    }
  } else {
    // In all other vertical modes, scroll by a percentage of the viewport height.
    window.scrollBy({
      top: 0.8 * window.innerHeight * sign,
      behavior: 'smooth',
    });
  }
}

/**
 * Redirects the browser to a given URL.
 * If the URL is null, undefined, or '#', it navigates back in the browser history.
 * @param {string | undefined | null} url - The URL to redirect to.
 */
function redirectUrl(url: string | undefined | null) {
  if (url && url !== '#') {
    window.location.href = sanitizeUrl(url);
  } else {
    window.history.back();
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
    redirectUrl(getAppStateValue('manga')?.next);
  },
  PREVIOUS_CHAPTER() {
    redirectUrl(getAppStateValue('manga')?.prev);
  },
  RETURN_CHAPTER_LIST() {
    redirectUrl(getAppStateValue('manga')?.series);
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
