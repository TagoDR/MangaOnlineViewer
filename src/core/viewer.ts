import type { IManga } from '../types';
import { logScript } from '../utils/tampermonkey';
import { clearBookmark } from './settings';
import display from '../svelte';

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  manga.comments = document.querySelector('#disqus_thread, #fb-comments');
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      [document.documentElement, document.head, document.body].forEach((element: HTMLElement) => {
        element.getAttributeNames().forEach((attr) => {
          element.removeAttribute(attr);
        });
      });
      window.scrollTo(0, 0);
      display(manga);
    } catch (e) {
      logScript(e);
    } finally {
      clearBookmark();
    }
  }, 50);
}
