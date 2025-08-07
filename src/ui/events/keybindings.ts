import hotkeys from 'hotkeys-js';
import _ from 'lodash';
import { getAppStateValue, getSettingsValue } from '../../core/settings';
import { logScript } from '../../utils/tampermonkey';
import { scrollToElement } from './common';

const doClick = (selector: string) =>
  getAppStateValue('render')?.querySelector(selector)?.dispatchEvent(new Event('click'));

function doScrolling(sign: 1 | -1) {
  const viewMode = getSettingsValue('viewMode');
  const zoomMode = getSettingsValue('zoomMode');
  logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
  if (viewMode.startsWith('Fluid')) {
    const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
    getAppStateValue('render')
      ?.querySelector<HTMLElement>('#Chapter')
      ?.scrollBy({
        left: 0.8 * window.innerWidth * sign * scrollDirection,
        behavior: 'smooth',
      });
  } else if (zoomMode === 'height') {
    // Fit height
    const pages = [
      ...(getAppStateValue('render')?.querySelectorAll<HTMLElement>('.MangaPage') ?? []),
    ];
    const distance = pages.map(element => Math.abs(element.offsetTop - window.scrollY));
    const currentPage = _.indexOf(distance, _.min(distance));
    const target = currentPage + sign;
    const header = getAppStateValue('render')?.querySelector<HTMLDivElement>('#Header');
    if (header && target < 0) {
      scrollToElement(header);
    } else if (header && target >= pages.length) {
      return;
    } else {
      logScript(`Current array page ${currentPage},`, `Scrolling to page ${target}`);
      scrollToElement(pages.at(target));
    }
  } else {
    window.scrollBy({
      top: 0.8 * window.innerHeight * sign,
      behavior: 'smooth',
    });
  }
}

const actions: Record<string, () => void> = {
  SCROLL_UP() {
    doScrolling(-1);
  },
  SCROLL_DOWN() {
    doScrolling(1);
  },
  NEXT_CHAPTER() {
    doClick('#next');
  },
  PREVIOUS_CHAPTER() {
    doClick('#prev');
  },
  ENLARGE() {
    doClick('#enlarge');
  },
  REDUCE() {
    doClick('#reduce');
  },
  RESTORE() {
    doClick('#restore');
  },
  FIT_WIDTH() {
    doClick('#fitWidth');
  },
  FIT_HEIGHT() {
    doClick('#fitHeight');
  },
  SETTINGS() {
    doClick('#settings');
  },
  VIEW_MODE_WEBCOMIC() {
    doClick('#webComic');
  },
  VIEW_MODE_VERTICAL() {
    doClick('#verticalMode');
  },
  VIEW_MODE_LEFT() {
    doClick('#rtlMode');
  },
  VIEW_MODE_RIGHT() {
    doClick('#ltrMode');
  },
  SCROLL_START() {
    doClick('#AutoScroll');
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
