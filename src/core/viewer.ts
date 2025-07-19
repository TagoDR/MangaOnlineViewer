import render from '../react';
import type { IManga } from '../types';
import display from '../ui';
import { logScript, logScriptVerbose } from '../utils/tampermonkey';
import { waitForFunc, waitWithTimeout } from '../utils/waitFor';
import { getSettingsValue } from './settings';

/**
 * Captures the comments section (Disqus or Facebook) from the page.
 * It scrolls to the bottom of the page to trigger the lazy-loading of comments,
 * then waits for the comment iframe to fully load.
 * @returns {Promise<Element | null>} A promise that resolves with the comments element, or null if not found or disabled.
 */
async function captureComments(): Promise<Element | null> {
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

/**
 * Initializes and starts the manga viewer.
 * It executes any pre-display actions, captures comments if enabled, and then renders the viewer UI.
 * @param {IManga} manga - The manga object containing all necessary data for the viewer.
 * @returns {Promise<void>}
 */
export default async function viewer(manga: IManga): Promise<void> {
  if (manga.before !== undefined) {
    logScriptVerbose(`Executing Preparation`);
    await manga.before(manga.begin ?? 0);
  }
  if (getSettingsValue('enableComments') && !manga.comments) {
    manga.comments = await captureComments();
  }
  // Use a timeout to ensure the page has time to reflow before rendering the viewer.
  setTimeout(() => {
    try {
      render(manga);
      (unsafeWindow ?? window).MOVLegacy = () => display(manga);
    } catch (e) {
      logScript(e);
    }
  }, 50);
}
