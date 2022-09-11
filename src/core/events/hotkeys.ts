import { logScript } from '../../utils/tampermonkey';
import { useSettings } from '../settings';
import { scrollToElement } from './common';

const doClick = (selector: string) =>
  document.querySelector(selector)?.dispatchEvent(new Event('click'));

function processKey(e: KeyboardEvent) {
  const a = e.code;
  const usedKeys = [
    'KeyW',
    'Numpad8',
    'KeyS',
    'Numpad2',
    'ArrowRight',
    'Period',
    'KeyD',
    'Numpad6',
    'ArrowLeft',
    'Comma',
    'KeyA',
    'Numpad4',
    'Equal',
    'NumpadAdd',
    'KeyE',
    'Minus',
    'NumpadSubtract',
    'KeyQ',
    'Digit9',
    'NumpadDivide',
    'KeyR',
    'Digit0',
    'NumpadMultiply',
    'KeyF',
    'Slash',
    'Numpad5',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
  ];
  if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && usedKeys.some((i) => i === a)) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    logScript('Keyboard:', a, ' Event:', e);
    switch (a) {
      case 'ArrowUp':
      case 'KeyW':
      case 'Numpad8':
        if (useSettings().zoom === -1000) {
          const currentPage = [...document.querySelectorAll<HTMLElement>('.MangaPage')].findIndex(
            (element) => element.offsetTop - window.scrollY > 10,
          );
          scrollToElement(document.querySelector<HTMLElement>(`#Page${currentPage - 1}`));
        } else {
          window.scrollBy({
            top: -window.innerHeight / 2,
            behavior: 'smooth',
          });
        }
        break;
      case 'ArrowDown':
      case 'KeyS':
      case 'Numpad2':
        if (useSettings().zoom === -1000) {
          const currentPage = [...document.querySelectorAll<HTMLElement>('.MangaPage')].findIndex(
            (element) => element.offsetTop - window.scrollY > 10,
          );
          scrollToElement(document.querySelector<HTMLElement>(`#Page${currentPage + 1}`));
        } else {
          window.scrollBy({
            top: window.innerHeight / 2,
            behavior: 'smooth',
          });
        }
        break;
      case 'ArrowRight':
      case 'Period':
      case 'KeyD':
      case 'Numpad6':
        doClick('#next');
        break;
      case 'ArrowLeft':
      case 'Comma':
      case 'KeyA':
      case 'Numpad4':
        doClick('#prev');
        break;
      case 'Equal':
      case 'NumpadAdd':
      case 'KeyE':
        doClick('#enlarge');
        break;
      case 'Minus':
      case 'NumpadSubtract':
      case 'KeyQ':
        doClick('#reduce');
        break;
      case 'Digit9':
      case 'NumpadDivide':
      case 'KeyR':
        doClick('#restore');
        break;
      case 'Digit0':
      case 'NumpadMultiply':
      case 'KeyF':
        doClick('#fitWidth');
        break;
      case 'Slash':
      case 'Numpad5':
      case 'KeyX':
        doClick('#settings');
        break;
      case 'KeyC':
        doClick('#webComic');
        break;
      case 'KeyV':
        doClick('#verticalMode');
        break;
      case 'KeyN':
        doClick('#rtlMode');
        break;
      case 'KeyB':
        doClick('#ltrMode');
        break;
      default:
        break;
    }
    return false;
  }
  return true;
}

// Clean key press configurations and set some when specified
function hotkeys() {
  document.onkeydown = null;
  window.onkeydown = null;
  window.onload = null;
  document.body.onload = null;
  document.addEventListener('keydown', processKey);
}

export default hotkeys;
