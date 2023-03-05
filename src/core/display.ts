import { IManga } from '../types/IManga';
import head from './reader';
import body from './components/App';
import { logScript } from '../utils/tampermonkey';
import events from './events';
import { loadManga } from './page';

export default function display(manga: IManga) {
  window.stop();
  if (manga.before !== undefined) {
    manga.before();
  }
  [document.documentElement, document.head, document.body].forEach((element: HTMLElement) => {
    element.getAttributeNames().forEach((attr) => element.removeAttribute(attr));
  });
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga, manga.begin);
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      events();
      setTimeout(() => {
        window.scrollTo(0, 0);
        loadManga(manga, manga.begin);
      }, 50);
    } catch (e) {
      logScript(e);
    }
  }, 50);
  if (manga.after !== undefined) {
    manga.after();
  }
}
