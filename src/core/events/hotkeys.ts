import { logScript } from '../../utils/tampermonkey';
import { useSettings } from '../settings';
import { scrollToElement } from './common';

const doClick = (selector: string) =>
  document.querySelector(selector)?.dispatchEvent(new Event('click'));

function doScrolling(sign: 1 | -1) {
  if (useSettings().zoom === -1000) {
    const currentPage = [...document.querySelectorAll<HTMLElement>('.MangaPage')].findIndex(
      (element) => element.offsetTop - window.scrollY > 10,
    );
    scrollToElement(document.querySelector<HTMLElement>(`#Page${currentPage + sign}`));
  } else {
    window.scrollBy({
      top: (sign * window.innerHeight) / 2,
      behavior: 'smooth',
    });
  }
}

interface IKeyBindings {
  name: string;
  keys: string[];
  action: () => void;
}

export const keybinds: IKeyBindings[] = [
  {
    name: 'Scroll Up',
    keys: ['ArrowUp', 'KeyW', 'Numpad8'],
    action() {
      doScrolling(-1);
    },
  },
  {
    name: 'Scroll Down',
    keys: ['ArrowDown', 'KeyS', 'Numpad2'],
    action() {
      doScrolling(1);
    },
  },
  {
    name: 'Next Chapter',
    keys: ['ArrowRight', 'Period', 'KeyD', 'Numpad6'],
    action() {
      doClick('#next');
    },
  },
  {
    name: 'Prev Chapter',
    keys: ['ArrowLeft', 'Comma', 'KeyA', 'Numpad4'],
    action() {
      doClick('#prev');
    },
  },
  {
    name: 'Zoom Enlarge',
    keys: ['Equal', 'NumpadAdd', 'KeyE'],
    action() {
      doClick('#enlarge');
    },
  },
  {
    name: 'Zoom Reduce',
    keys: ['Minus', 'NumpadSubtract', 'KeyQ'],
    action() {
      doClick('#reduce');
    },
  },
  {
    name: 'Zoom Restore',
    keys: ['Digit9', 'NumpadDivide', 'KeyR'],
    action() {
      doClick('#restore');
    },
  },
  {
    name: 'Zoom Fit Width',
    keys: ['Digit0', 'NumpadMultiply', 'KeyF'],
    action() {
      doClick('#fitWidth');
    },
  },
  {
    name: 'Zoom Fit Height',
    keys: ['KeyH'],
    action() {
      doClick('#fitHeight');
    },
  },
  {
    name: 'Open Settings',
    keys: ['Slash', 'Numpad5', 'KeyX'],
    action() {
      doClick('#settings');
    },
  },
  {
    name: 'View Mode WebComic',
    keys: ['KeyC'],
    action() {
      doClick('#webComic');
    },
  },
  {
    name: 'View Mode Vertical',
    keys: ['KeyV'],
    action() {
      doClick('#verticalMode');
    },
  },
  {
    name: 'View Mode Left to Right',
    keys: ['KeyN'],
    action() {
      doClick('#rtlMode');
    },
  },
  {
    name: 'View Mode Right to Left',
    keys: ['KeyB'],
    action() {
      doClick('#ltrMode');
    },
  },
];

const usedKeys = keybinds.flatMap((kb) => kb.keys);

function processKey(e: KeyboardEvent) {
  if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || !usedKeys.some((i) => i === e.code))
    return true;
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  const keyBindings = keybinds.find((kb) => kb.keys.some((key) => key === e.code));
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
