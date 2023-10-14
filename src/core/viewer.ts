import type { IManga } from '../types';
import { logScript } from '../utils/tampermonkey';
import { clearBookmark } from './settings';
import display from '../ui';
import { cleanUpElement } from '../utils/cleanup';

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  manga.comments = document.querySelector('#disqus_thread, #fb-comments');
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      cleanUpElement(document.documentElement, document.head, document.body);
      window.scrollTo(0, 0);
      display(manga);
    } catch (e) {
      logScript(e);
    } finally {
      clearBookmark();
    }
  }, 50);
}
