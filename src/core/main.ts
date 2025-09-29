import 'toolcool-range-slider';
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-marks.min';
import Swal, { type SweetAlertOptions } from 'sweetalert2-neutral';
import type { RangeSlider } from 'toolcool-range-slider';
import type { IManga, ISite } from '../types';
import sweetalertStyle from '../ui/styles/externalStyle.ts';
import startButton from '../ui/styles/startButton.css?inline';
import { html } from '../utils/code-tag';
import {
  getBrowser,
  getDevice,
  getEngine,
  getInfoGM,
  giveToWindow,
  logScript,
} from '../utils/tampermonkey';
import { testAttribute, testElement, testFunc, testTime, testVariable } from './check';
import { getLocaleString, getSettingsValue, isBookmarked } from './settings';
import { allowUpload } from './upload';
import formatPage from './viewer';

/**
 * Shows a prompt to the user to select the beginning and ending pages for the manga.
 * @param {IManga} manga - The manga configuration object.
 * @param {number} [begin=1] - The initial beginning page number.
 * @returns {Promise<void>}
 */
export function lateStart(
  manga: IManga,
  begin = 1,
): Promise<{ begin: number; end: number } | null> {
  logScript('LateStart');
  let beginPage = begin;
  let endPage = manga.pages;
  return new Promise(resolve => {
    const options: SweetAlertOptions = {
      title: getLocaleString('STARTING'),

      html: html`
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div id="pageInputGroup">
          <tc-range-slider
            id="pagesSlider"
            min="1"
            max="${manga.pages}"
            round="0"
            step="1"
            value1="${beginPage}"
            value2="${endPage}"
            marks="true"
            marks-count="${Math.ceil(manga.pages / 10)}"
            marks-values-count="${Math.ceil(manga.pages / 5)}"
            generate-labels="true"
            slider-width="100%"
            range-dragging="true"
            pointers-overlap="false"
          ></tc-range-slider>
        </div>
      `,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      icon: 'question',
      didOpen() {
        const slider = document.querySelector<RangeSlider>('#pagesSlider');
        slider?.addEventListener('change', (evt: Event) => {
          const detail = (evt as CustomEvent).detail;
          [beginPage, endPage] = [detail.value1, detail.value2];
        });
      },
    };
    Swal.fire(options).then(result => {
      if (result.value) {
        logScript(`Choice: ${beginPage} - ${endPage}`);
        resolve({ begin: beginPage, end: endPage });
      } else {
        logScript(result.dismiss);
        resolve(null);
      }
    });
  });
}

/**
 * Creates and injects a button to start the manga viewer.
 * @param {ISite} site - The site configuration object.
 * @param {number} beginning - The beginning page number.
 */
function createLateStartButton(site: ISite, beginning: number): void {
  const button = document.createElement('button');
  button.innerText = getLocaleString('BUTTON_START');
  button.id = 'StartMOV';
  button.onclick = async () => {
    const manga = await site.run();
    lateStart(manga, beginning)
      .then(res => {
        if (res) {
          const newManga = { ...manga, begin: res.begin, pages: res.end };
          formatPage(newManga).then(() => logScript('Page loaded'));
        }
      })
      .catch(logScript);
  };

  document.body.appendChild(button);

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(startButton));
  document.head.appendChild(style);
  logScript('Start Button added to page', button);
}

/**
 * Shows a popup to wait for the manga to load, with an option to start immediately or cancel.
 * @param {ISite} site - The site configuration object.
 * @param {IManga} manga - The manga data object.
 */
function showWaitPopup(site: ISite, manga: IManga): void {
  Swal.fire({
    title: getLocaleString('STARTING'),
    html: html`${
      manga.begin && manga.begin > 1 ? `${getLocaleString('RESUME')}${manga.begin}.<br/>` : ''
    }${getLocaleString('WAITING')}`,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    timer: 3000,
  }).then(result => {
    if (result.value || result.dismiss === Swal.DismissReason.timer) {
      formatPage(manga).then(() => logScript('Page loaded'));
    } else {
      createLateStartButton(site, manga.begin ?? 0);
      logScript(result.dismiss);
    }
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
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(sweetalertStyle));
  document.body.appendChild(style);
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
      createLateStartButton(site, manga.begin);
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
