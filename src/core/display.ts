import { IManga } from '../types/IManga';
import { head } from './reader';
import { logScript, setValueGM } from '../utils/tampermonkey';
import { controls, setKeyDownEvents } from './events';
import { loadManga } from './page';
import { isNothing } from '../utils/checks';
import { settings } from './settings';
import { body } from './components/App';

export default function display(manga: IManga, begin: number) {
  window.stop();
  if (manga.before !== undefined) {
    manga.before();
  }
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga, begin);
  document.body.className = '';
  document.body.removeAttribute('style');
  // document.documentElement.innerHTML = reader(manga, begin);
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      controls();
      setKeyDownEvents();
      setTimeout(() => {
        window.scrollTo(0, 0);
        loadManga(manga, begin);
      }, 50);
      // Clear used Bookmarks
      if (!isNothing(settings.bookmarks.filter((el) => el.url === window.location.href))) {
        logScript(`Bookmark Removed ${window.location.href}`);
        settings.bookmarks = settings.bookmarks.filter((el) => el.url !== window.location.href);
        setValueGM('Bookmarks', JSON.stringify(settings.bookmarks));
      }
    } catch (e) {
      logScript(e);
    }
  }, 50);
  if (manga.after !== undefined) {
    manga.after();
  }
}
