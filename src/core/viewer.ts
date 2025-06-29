import type { IManga } from '../types';
import display from '../ui';
import { logScript, logScriptVerbose } from '../utils/tampermonkey';
import { waitForFunc, waitWithTimeout } from '../utils/waitFor';
import { getSettingsValue } from './settings';

async function captureComments() {
  if (!getSettingsValue('enableComments')) return null;
  let comments = document.querySelector('#disqus_thread, #fb-comments');
  if (comments) {
    logScript(`Waiting to Comments to load`, comments);
    window.scrollTo(0, document.body.scrollHeight);
    await waitWithTimeout(
      waitForFunc(() => {
        comments = document.querySelector('#disqus_thread, #fb-comments');
        const iframe = comments?.querySelector<HTMLIFrameElement>(
          'iframe:not(#indicator-north, #indicator-south)',
        );
        return (
          iframe?.contentWindow?.document.readyState === 'complete' &&
          !!iframe?.contentWindow?.document?.body?.textContent?.length
        );
      }),
    );
    if (comments.children.length) {
      logScript(`Got Comments`, comments);
    } else {
      logScript(`Timeout Comments`);
    }
  }
  window.scrollTo(0, 0);
  return comments;
}

export default async function viewer(manga: IManga) {
  if (manga.before !== undefined) {
    logScriptVerbose(`Executing Preparation`);
    await manga.before(manga.begin ?? 0);
  }
  if (getSettingsValue('enableComments') && !manga.comments) {
    manga.comments = await captureComments();
  }
  setTimeout(() => {
    try {
      display(manga);
    } catch (e) {
      logScript(e);
    }
  }, 50);
}
