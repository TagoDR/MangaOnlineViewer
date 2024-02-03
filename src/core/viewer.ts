import type { IManga } from '../types';
import { logScript } from '../utils/tampermonkey';
import { clearBookmark } from './settings';
import display from '../ui';
import { cleanUpElement } from '../utils/cleanup';
import { untilTimeout } from './check';
import { isEmpty } from '../utils/checks';

async function captureComments() {
  const comments = document.querySelector('#disqus_thread, #fb-comments');
  if (comments) {
    logScript(`Waiting to Comments to load`, comments);
    window.scrollTo(0, document.body.scrollHeight);
    const load = await untilTimeout((): boolean => {
      const iframe = comments?.querySelector<HTMLIFrameElement>('iframe');
      return (
        iframe !== undefined &&
        !isEmpty(iframe?.src) &&
        (iframe?.contentDocument !== undefined || iframe?.contentWindow?.document !== undefined)
      );
    }, 5000);
    window.scrollTo(0, 0);
    if (!load) logScript(`Timeout Comments`, comments);
  }
  return comments;
}

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  manga.comments = await captureComments();
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
