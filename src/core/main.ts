import type { IManga, ISite } from '../types';
import { displayStartup } from '../ui/Startup.ts';
import {
  getBrowser,
  getDevice,
  getEngine,
  getInfoGM,
  giveToWindow,
  logScript,
} from '../utils/tampermonkey';
import { testAttribute, testElement, testFunc, testTime, testVariable } from './check';
import { getSettingsValue, isBookmarked } from './settings';
import { allowUpload } from './upload';
import formatPage from './viewer';

/**
 * Prepares the page to display the manga viewer.
 * @param {[ISite, IManga]} siteMangaTuple - A tuple containing the site and manga objects.
 * @param {ISite} siteMangaTuple[0] - The site configuration object.
 * @param {IManga} siteMangaTuple[1] - The manga data object.
 * @returns {Promise<void>}
 */
export async function preparePage([site, manga]: [ISite, IManga]): Promise<void> {
  logScript(`Found Pages: ${manga.pages} in ${site.name}`);
  if (!manga.title) {
    manga.title = document.querySelector('title')?.textContent?.trim();
  }

  manga.begin = isBookmarked() ?? manga.begin ?? 1;
  giveToWindow('MOV', (startPage?: number, endPage?: number) => {
    if (startPage !== undefined) {
      manga.begin = startPage;
    }

    if (endPage !== undefined) {
      manga.pages = endPage;
    }

    formatPage(manga).then(() => logScript('Page loaded'));
  });

  const loadMode = site.start ?? getSettingsValue('loadMode');
  if (loadMode === 'always') {
    formatPage(manga).then(() => logScript('Page loaded'));
    return;
  }

  const initialStatus = loadMode === 'never' ? 'late-start-prompt' : 'initial-prompt';
  try {
    const result = await displayStartup(manga.pages, manga.begin ?? 1, 3000, initialStatus);
    if (result) {
      const newManga = { ...manga, begin: result.begin, pages: result.end };
      formatPage(newManga).then(() => logScript('Page loaded'));
    } else {
      formatPage(manga).then(() => logScript('Page loaded'));
    }
  } catch (error) {
    if (error instanceof Error) {
      logScript(error.message);
    }
  }
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
  const testedSites = foundSites.map(async (site): Promise<[ISite, IManga]> => {
    logScript(`Testing site: ${site.name}`);
    return new Promise((resolve, reject) => {
      Promise.all([
        testTime(site),
        testElement(site),
        testAttribute(site),
        testVariable(site),
        testFunc(site),
      ])
        .then(async () => site.run())
        .then(manga =>
          manga.pages > 0
            ? resolve([site, manga])
            : reject(new Error(`${site.name} found ${manga.pages} pages`)),
        );
    });
  });
  Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
    fastestIndex => {
      testedSites.forEach((_promise, i) => {
        if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
      });
      testedSites[fastestIndex].then(result => {
        preparePage(result);
      });
    },
  );
}

export default start;
