import _ from 'lodash';
import rangeSlider, { type RangeSlider } from 'range-slider-input';
import rangeSliderStyles from 'range-slider-input/dist/style.css?inline';
import Swal, { type SweetAlertOptions } from 'sweetalert2-neutral';
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
 * Validates the beginning page number, ensuring it's within the valid range.
 * @param {number} valBegin - The beginning page number to validate.
 * @param {number} endPage - The ending page number.
 * @param {RangeSlider} rs - The RangeSlider instance.
 * @returns {number} The validated beginning page number.
 */
function validateMin(valBegin: number, endPage: number, rs: RangeSlider): number {
  let val = valBegin;
  if (Number.isNaN(val) || val < rs.min()) {
    val = rs.min();
  } else if (val > rs.max()) {
    val = rs.max();
  } else if (val > endPage) {
    val = endPage;
  }

  return val;
}

/**
 * Validates the ending page number, ensuring it's within the valid range.
 * @param {number} valEnd - The ending page number to validate.
 * @param {number} beginPage - The beginning page number.
 * @param {RangeSlider} rs - The RangeSlider instance.
 * @returns {number} The validated ending page number.
 */
function validateMax(valEnd: number, beginPage: number, rs: RangeSlider): number {
  let val = valEnd;
  if (Number.isNaN(val) || val > rs.max()) {
    val = rs.max();
  } else if (val < rs.min()) {
    val = rs.min();
  } else if (val < beginPage) {
    val = beginPage;
  }

  return val;
}

/**
 * Shows a prompt to the user to select the beginning and ending pages for the manga.
 * @param {ISite} site - The site configuration object.
 * @param {number} [begin=1] - The initial beginning page number.
 * @returns {Promise<void>}
 */
async function lateStart(site: ISite, begin = 1): Promise<void> {
  const manga = await site.run();
  logScript('LateStart');
  let beginPage = begin;
  let endPage = manga.pages;
  const options: SweetAlertOptions = {
    title: getLocaleString('STARTING'),

    html: html`
      ${getLocaleString('CHOOSE_BEGINNING')}
      <div id="pageInputGroup">
        <div id="pageInputs">
          <input
            type="number"
            id="pageBegin"
            class="pageInput"
            min="1"
            inputmode="numeric"
            pattern="[0-9]*"
            max="${manga.pages}"
            value="${beginPage}"
          />
          -
          <input
            type="number"
            id="pageEnd"
            class="pageInput"
            min="1"
            inputmode="numeric"
            pattern="[0-9]*"
            max="${manga.pages}"
            value="${endPage}"
          />
        </div>
        <div id="pagesSlider"></div>
      </div>
    `,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    icon: 'question',
    didOpen() {
      const pageBeginInput = document.querySelector<HTMLInputElement>('#pageBegin');
      const pageEndInput = document.querySelector<HTMLInputElement>('#pageEnd');
      const inputSlider = document.getElementById('pagesSlider');
      if (inputSlider) {
        const rangeSliderElement = rangeSlider(inputSlider, {
          min: 1,
          max: manga.pages,
          value: [beginPage, endPage],
          onInput(value, userInteraction) {
            if (userInteraction) {
              [beginPage, endPage] = value;
              if (pageBeginInput) {
                pageBeginInput.value = beginPage.toString();
              }

              if (pageEndInput) {
                pageEndInput.value = endPage.toString();
              }
            }
          },
        });

        function changedInput() {
          if (
            (pageBeginInput && pageBeginInput.value === '') ||
            (pageEndInput && pageEndInput.value === '')
          ) {
            return;
          }

          const valBegin = validateMin(
            parseInt(pageBeginInput?.value ?? '0', 10),
            endPage,
            rangeSliderElement,
          );
          const valEnd = validateMax(
            parseInt(pageEndInput?.value ?? '0', 10),
            beginPage,
            rangeSliderElement,
          );
          if (pageBeginInput) pageBeginInput.value = valBegin.toString();
          if (pageEndInput) pageEndInput.value = valEnd.toString();
          beginPage = valBegin;
          endPage = valEnd;
          rangeSliderElement.value([valBegin, valEnd]);
        }

        const observerEvent = _.debounce(changedInput, 600);
        ['change', 'mouseup', 'keyup', 'touchend'].forEach(event => {
          pageBeginInput?.addEventListener(event, observerEvent);
          pageEndInput?.addEventListener(event, observerEvent);
        });
      }
    },
  };
  Swal.fire(options).then(result => {
    if (result.value) {
      logScript(`Choice: ${beginPage} - ${endPage}`);
      manga.begin = beginPage;
      manga.pages = endPage;
      formatPage(manga).then(() => logScript('Page loaded'));
    } else {
      logScript(result.dismiss);
    }
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
  button.onclick = () => {
    lateStart(site, beginning).catch(logScript);
  };

  document.body.appendChild(button);

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(startButton + rangeSliderStyles));
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
