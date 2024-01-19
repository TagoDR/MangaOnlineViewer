import type { IManga } from '../types';
import { logScript } from '../utils/tampermonkey';
import { clearBookmark } from './settings';
import display from '../ui';
import { cleanUpElement } from '../utils/cleanup';
import { until } from './check';

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  manga.comments = document.querySelector('#disqus_thread, #fb-comments');
  if (manga.comments) {
    logScript(`Waiting to Comments to load`, manga.comments);
    await until((): boolean => {
      const iframe = manga.comments?.querySelector<HTMLIFrameElement>('iframe');
      return (
        iframe !== undefined &&
        (iframe?.contentDocument !== undefined || iframe?.contentWindow?.document !== undefined)
      );
    });
  }
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
