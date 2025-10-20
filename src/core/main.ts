import type { IManga, ISite } from '../types';
import {
  getBrowser,
  getDevice,
  getEngine,
  getInfoGM,
  logScript,
  logScriptVerbose,
} from '../utils/tampermonkey';
import { runSiteTests } from './check';
import { getSettingsValue, isBookmarked } from './settings';
import { allowUpload } from './upload';
import '../ui';
import type App from '../ui/App.ts';
import externalCSS from '../ui/styles/externalStyle.ts';
import { wrapStyle } from '../utils/css.ts';

/**
 * Captures the comments section (Disqus or Facebook) from the page.
 * It scrolls to the bottom of the page to trigger the lazy-loading of comments,
 * then waits for the comment iframe to fully load.
 * @returns {Promise<Element | null>} A promise that resolves with the comments element, or null if not found or disabled.
 */
async function captureComments(): Promise<Element | null> {
  if (!getSettingsValue('enableComments')) return null;
  const comments = document.querySelector('#disqus_thread, #fb-comments');
  if (comments) {
    logScript('Waiting for Comments to load', comments);
    window.scrollTo(0, document.body.scrollHeight);

    await new Promise<void>(resolve => {
      const observer = new MutationObserver(() => {
        const iframe = comments.querySelector<HTMLIFrameElement>(
          'iframe:not(#indicator-north, #indicator-south)',
        );
        if (
          iframe?.contentWindow?.document.readyState === 'complete' &&
          !!iframe?.contentWindow?.document.body?.textContent?.length
        ) {
          observer.disconnect();
          resolve();
        }
      });
      observer.observe(comments, { childList: true, subtree: true });

      // Also resolve after a timeout, in case the comments never load.
      setTimeout(() => {
        observer.disconnect();
        resolve();
      }, 10000); // 10 seconds timeout
    });

    if (comments.children.length) {
      logScript('Got Comments', comments);
    } else {
      logScript('Timeout Comments');
    }
  }
  window.scrollTo(0, 0);
  return comments;
}

/**
 * Prepares the page to display the manga viewer.
 * @param {[ISite, IManga]} siteMangaTuple - A tuple containing the site and manga objects.
 * @param {ISite} siteMangaTuple[0] - The site configuration object.
 * @param {IManga} siteMangaTuple[1] - The manga data object.
 * @returns {Promise<void>}
 */
export async function preparePage([site, manga]: [ISite | undefined, IManga]): Promise<void> {
  logScript(`Found Pages: ${manga.pages} in ${site?.name}`);
  if (!manga.title) {
    manga.title = document.querySelector('title')?.textContent?.trim();
  }
  manga.begin = isBookmarked() ?? manga.begin ?? 1;
  if (manga.before !== undefined) {
    logScriptVerbose(`Executing Preparation`);
    await manga.before(manga.begin ?? 0);
  }
  if (getSettingsValue('enableComments') && !manga.comments) {
    manga.comments = await captureComments();
  }
  document.head.innerHTML += wrapStyle('externals', externalCSS);
  const viewer = document.createElement('manga-online-viewer') as App;
  viewer.loadMode = site?.start ?? getSettingsValue('loadMode');
  viewer.manga = manga;
  document.body.appendChild(viewer);
}

/**
 * Main script entry point. Finds the current site, runs tests, and starts the viewer.
 * @param {ISite[]} sites - An array of supported site configurations.
 * @returns {Promise<void>}
 */
async function start(sites: ISite[]): Promise<void> {
  logScript(
    `Starting ${getInfoGM.script.name} ${
      getInfoGM.script.version
    } on ${getDevice()} ${getBrowser()} with ${getEngine()}`,
  );
  if (allowUpload()) return;
  logScript(sites.length, 'Known Manga Sites:', sites);
  const foundSites = sites.filter((s: ISite) => s.url.test(window.location.href));
  logScript(foundSites.length, 'Found sites:', foundSites);

  const sitePromises = foundSites.map(async (site): Promise<[ISite, IManga]> => {
    logScript(`Testing site: ${site.name}`);
    await runSiteTests(site);
    const manga = await site.run();
    if (manga.pages > 0) {
      return [site, manga];
    }
    throw new Error(`${site.name} found ${manga.pages} pages`);
  });

  try {
    const result = await Promise.any(sitePromises);
    preparePage(result);
  } catch (error) {
    if (error instanceof AggregateError) {
      logScript('All sites failed to run:');
      for (const err of error.errors) {
        logScript(err.message);
      }
    } else {
      logScript('An unexpected error occurred:', error);
    }
  }
}

export default start;
