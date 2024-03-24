import type { IManga } from '../types';
import { logScript } from '../utils/tampermonkey';
import { getUserSettings } from './settings';
import display from '../ui';
import { cleanUpElement } from '../utils/cleanup';
import { untilTimeout } from './check';
import { isEmpty } from '../utils/checks';

async function captureComments() {
  if (!getUserSettings().enableComments) return null;
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
    if (!load) logScript(`Timeout Comments`, comments);
  }
  window.scrollTo(0, 0);
  return comments;
}

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  if (!manga.comments) manga.comments = await captureComments();
  setTimeout(() => {
    try {
      cleanUpElement(document.documentElement, document.head, document.body);
      window.scrollTo(0, 0);
      display(manga);
    } catch (e) {
      logScript(e);
    }
  }, 50);
}
