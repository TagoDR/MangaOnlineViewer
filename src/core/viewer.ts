import type { IManga } from '../types';
import { logScript, logScriptVerbose } from '../utils/tampermonkey';
import { getUserSettings } from './settings';
import display from '../ui';
import { cleanUpElement } from '../utils/cleanup';
import { isEmpty } from '../utils/checks';
import { waitWithTimeout } from '../utils/waitFor';

async function captureComments() {
  if (!getUserSettings().enableComments) return null;
  const comments = document.querySelector('#disqus_thread, #fb-comments');
  if (comments) {
    logScript(`Waiting to Comments to load`, comments);
    window.scrollTo(0, document.body.scrollHeight);
    const load = await waitWithTimeout((): boolean => {
      const iframe = comments?.querySelector<HTMLIFrameElement>(
        'iframe:not(#indicator-north, #indicator-south)',
      );
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
    logScriptVerbose(`Executing Preparation`);
    await manga.before(manga.begin);
  }
  if (getUserSettings().enableComments && !manga.comments) {
    manga.comments = await captureComments();
    logScriptVerbose(`Comments Captured`);
  }
  setTimeout(() => {
    try {
      cleanUpElement(document.documentElement, document.head, document.body);
      window.scrollTo(0, 0);
      logScriptVerbose(`Page Cleaned Up`);
      display(manga);
    } catch (e) {
      logScript(e);
    }
  }, 50);
}
