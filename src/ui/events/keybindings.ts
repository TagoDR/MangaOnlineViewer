import hotkeys from 'hotkeys-js';
import _ from 'lodash';
import { logScript } from '../../utils/tampermonkey';
import { getUserSettings } from '../../core/settings';
import { scrollToElement } from './common';

const doClick = (selector: string) =>
  document.querySelector(selector)?.dispatchEvent(new Event('click'));

function doScrolling(sign: 1 | -1) {
  const chapter = document.querySelector<HTMLElement>('#Chapter');
  if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
    const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
    chapter.scrollBy({
      left: (window.innerWidth / 2) * sign * scrollDirection,
      behavior: 'smooth',
    });
  } else if (getUserSettings().zoomMode === 'height') {
    // Fit height
    const pages = [...document.querySelectorAll<HTMLElement>('.MangaPage')];
    const distance = pages.map((element) => Math.abs(element.offsetTop - window.scrollY));
    const currentPage = _.indexOf(distance, _.min(distance));
    const target = currentPage + sign;
    const header = document.querySelector<HTMLDivElement>('#Header')!;
    if (target < 0) {
      scrollToElement(header);
    } else if (target >= pages.length) {
      header.classList.add('headroom-end');
    } else {
      logScript(`Current array page ${currentPage},`, `Scrolling to page ${target}`);
      scrollToElement(pages.at(target));
    }
  } else {
    window.scrollBy({
      top: (sign * window.innerHeight) / 2,
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
  Object.keys(getUserSettings().keybinds).forEach((key) => {
    hotkeys(
      getUserSettings().keybinds[key]?.join(',') ?? '',
      _.throttle((event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        actions[key]();
      }, 100),
    );
  });
}

export default keybindings;
