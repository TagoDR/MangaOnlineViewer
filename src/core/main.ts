import type { IManga, ISite } from '../types';
import { themesCSS } from '../ui/themes.ts';
import { createLateStartButton, initialPrompt, lateStart } from '../utils/dialog';
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
 * Handles the click event for the "Late Start" button.
 * When clicked, it initiates the manga loading process after a delay,
 * allowing the user to specify a starting page.
 */
function clickLateStart(site: ISite) {
  return async () => {
    try {
      const mangaData = await site.run();
      const res = await lateStart(mangaData.pages, mangaData.begin ?? 1);
      const newManga = { ...mangaData, begin: res.begin, pages: res.end };
      formatPage(newManga).then(() => logScript('Page loaded'));
    } catch (e) {
      if (e instanceof Error) {
        logScript(e.message);
      }
    }
  };
}

/**
 * Shows a popup to wait for the manga to load, with an option to start immediately or cancel.
 * @param {ISite} site - The site configuration object.
 * @param {IManga} manga - The manga data object.
 */
function showWaitPopup(site: ISite, manga: IManga): void {
  initialPrompt(3000)
    .then(() => {
      formatPage(manga).then(() => logScript('Page loaded'));
    })
    .catch(error => {
      logScript(error.message);
      createLateStartButton(clickLateStart(site));
    });
}

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

  switch (site.start ?? getSettingsValue('loadMode')) {
    case 'never':
      createLateStartButton(clickLateStart(site));
      break;
    case 'always':
      formatPage(manga).then(() => logScript('Page loaded'));
      break;
    // case 'wait':
    default:
      showWaitPopup(site, manga);
      break;
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
  const styles = document.createElement('style');
  styles.appendChild(document.createTextNode(themesCSS()));
  document.body.appendChild(styles);
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
