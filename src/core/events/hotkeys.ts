import { logScript } from '../../utils/tampermonkey';
import { useSettings } from '../settings';
import { scrollToElement } from './common';
import { KeyBinding } from '../../types';

const doClick = (selector: string) =>
  document.querySelector(selector)?.dispatchEvent(new Event('click'));

function doScrolling(sign: 1 | -1) {
  if (useSettings().zoomMode === 'height') {
    // Fit height
    const pages = [...document.querySelectorAll<HTMLElement>('.MangaPage')];
    const distance = pages.map((element) => Math.abs(element.offsetTop - window.scrollY));
    const currentPage = distance.findIndex((d) => d <= 5);
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

interface IKeyBindings extends KeyBinding {
  action: () => void;
}

export const keybinds: IKeyBindings[] = [
  {
    name: 'SCROLL_UP',
    keys: ['ArrowUp', 'KeyW', 'Numpad8'],
    action() {
      doScrolling(-1);
    },
  },
  {
    name: 'SCROLL_DOWN',
    keys: ['ArrowDown', 'KeyS', 'Numpad2'],
    action() {
      doScrolling(1);
    },
  },
  {
    name: 'NEXT_CHAPTER',
    keys: ['ArrowRight', 'Period', 'KeyD', 'Numpad6'],
    action() {
      doClick('#next');
    },
  },
  {
    name: 'PREVIOUS_CHAPTER',
    keys: ['ArrowLeft', 'Comma', 'KeyA', 'Numpad4'],
    action() {
      doClick('#prev');
    },
  },
  {
    name: 'ENLARGE',
    keys: ['Equal', 'NumpadAdd', 'KeyE'],
    action() {
      doClick('#enlarge');
    },
  },
  {
    name: 'REDUCE',
    keys: ['Minus', 'NumpadSubtract', 'KeyQ'],
    action() {
      doClick('#reduce');
    },
  },
  {
    name: 'RESTORE',
    keys: ['Digit9', 'NumpadDivide', 'KeyR'],
    action() {
      doClick('#restore');
    },
  },
  {
    name: 'FIT_WIDTH',
    keys: ['Digit0', 'NumpadMultiply', 'KeyF'],
    action() {
      doClick('#fitWidth');
    },
  },
  {
    name: 'FIT_HEIGHT',
    keys: ['KeyH'],
    action() {
      doClick('#fitHeight');
    },
  },
  {
    name: 'SETTINGS',
    keys: ['Slash', 'Numpad5', 'KeyX'],
    action() {
      doClick('#settings');
    },
  },
  {
    name: 'VIEW_MODE_WEBCOMIC',
    keys: ['KeyC'],
    action() {
      doClick('#webComic');
    },
  },
  {
    name: 'VIEW_MODE_VERTICAL',
    keys: ['KeyV'],
    action() {
      doClick('#verticalMode');
    },
  },
  {
    name: 'VIEW_MODE_LEFT',
    keys: ['KeyN'],
    action() {
      doClick('#rtlMode');
    },
  },
  {
    name: 'VIEW_MODE_RIGHT',
    keys: ['KeyB'],
    action() {
      doClick('#ltrMode');
    },
  },
];

function processKey(e: KeyboardEvent) {
  if (
    e.ctrlKey ||
    e.altKey ||
    e.shiftKey ||
    e.metaKey ||
    !keybinds.flatMap((kb) => kb.keys).some((i) => i === e.code) ||
    !useSettings()
      .keybinds?.flatMap((kb) => kb.keys)
      .some((i) => i === e.code)
  ) {
    return true;
  }
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  const custom = useSettings().keybinds?.find((kb) => kb.keys.some((key) => key === e.code))?.name;
  const keyBindings =
    keybinds.find((kb) => kb.name === custom) ??
    keybinds.find((kb) => kb.keys.some((key) => key === e.code));
  logScript('Keyboard:', e.code, /* ' Event:', e, */ 'Entry', keyBindings);
  keyBindings?.action();
  return false;
}

// Clean key press configurations and set some when specified
function hotkeys() {
  document.onkeydown = null;
  document.onkeyup = null;
  document.onkeypress = null;
  window.onkeydown = null;
  window.onkeyup = null;
  window.onkeypress = null;
  window.onload = null;
  document.body.onload = null;
  document.addEventListener('keydown', processKey);
}

export default hotkeys;
