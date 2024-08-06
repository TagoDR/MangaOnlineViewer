import Swal, { type SweetAlertOptions } from 'sweetalert2';
import rangeSlider, { type RangeSlider } from 'range-slider-input';
import rangeSliderStyles from 'range-slider-input/dist/style.css?inline';
import _ from 'lodash';
import { html } from '../utils/code-tag';
import { getBrowser, getEngine, getInfoGM, logScript } from '../utils/tampermonkey';
import type { IManga, ISite } from '../types';
import formatPage from './viewer';
import { getLocaleString, getUserSettings, isBookmarked } from './settings';
import sweetalertStyle from '../ui/styles/externalStyle';
import startButton from '../ui/styles/startButton.css?inline';
import { testAttribute, testElement, testFunc, testTime, testVariable } from './check';
import { allowUpload } from './upload';

function validateMin(valBegin: number, endPage: number, rs: RangeSlider) {
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

function validateMax(valEnd: number, beginPage: number, rs: RangeSlider) {
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

async function lateStart(site: ISite, begin = 1) {
  const manga = await site.run();
  logScript('LateStart');
  let beginPage = begin;
  let endPage = manga.pages;
  const options: SweetAlertOptions = {
    title: getLocaleString('STARTING'),
    // Language=html
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
      const rangeSliderElement = rangeSlider(document.getElementById('pagesSlider')!, {
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
        if (pageBeginInput!.value === '' || pageEndInput!.value === '') {
          return;
        }

        const valBegin = validateMin(
          parseInt(pageBeginInput!.value, 10),
          endPage,
          rangeSliderElement,
        );
        const valEnd = validateMax(
          parseInt(pageEndInput!.value, 10),
          beginPage,
          rangeSliderElement,
        );
        pageBeginInput!.value = valBegin.toString();
        pageEndInput!.value = valEnd.toString();
        beginPage = valBegin;
        endPage = valEnd;
        rangeSliderElement.value([valBegin, valEnd]);
      }

      const observerEvent = _.debounce(changedInput, 600);
      ['change', 'mouseup', 'keyup', 'touchend'].forEach((event) => {
        pageBeginInput?.addEventListener(event, observerEvent);
        pageEndInput?.addEventListener(event, observerEvent);
      });
    },
  };
  Swal.fire(options).then((result) => {
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

function createLateStartButton(site: ISite, beginning: number) {
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

function showWaitPopup(site: ISite, manga: IManga) {
  Swal.fire({
    title: getLocaleString('STARTING'),
    html: html`${manga.begin > 1
      ? `${getLocaleString('RESUME')}${manga.begin}.<br/>`
      : ''}${getLocaleString('WAITING')}`,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    timer: 3000,
  }).then((result) => {
    if (result.value || result.dismiss === Swal.DismissReason.timer) {
      formatPage(manga).then(() => logScript('Page loaded'));
    } else {
      createLateStartButton(site, manga.begin);
      logScript(result.dismiss);
    }
  });
}

// Organize the site adding place-holders for the manga pages
async function preparePage([site, manga]: [ISite, IManga]) {
  logScript(`Found Pages: ${manga.pages} in ${site.name}`);
  if (!manga.title) {
    manga.title = document.querySelector('title')?.textContent?.trim();
  }

  manga.begin = isBookmarked() ?? manga.begin ?? 1;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(sweetalertStyle));
  document.body.appendChild(style);
  unsafeWindow.MOV = (startPage?: number, endPage?: number) => {
    if (startPage !== undefined) {
      manga.begin = startPage;
    }

    if (endPage !== undefined) {
      manga.pages = endPage;
    }

    formatPage(manga).then(() => logScript('Page loaded'));
  };

  switch (site.start ?? getUserSettings()?.loadMode) {
    case 'never':
      createLateStartButton(site, manga.begin);
      break;
    case 'always':
      formatPage(manga).then(() => logScript('Page loaded'));
      break;
    case 'wait':
    default:
      showWaitPopup(site, manga);
      break;
  }
}

// Script Entry point
async function start(sites: ISite[]) {
  logScript(
    `Starting ${getInfoGM.script.name} ${
      getInfoGM.script.version
    } on ${getBrowser()} with ${getEngine()}`,
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
        .then((manga) =>
          manga.pages > 0
            ? resolve([site, manga])
            : reject(new Error(`${site.name} found ${manga.pages} pages`)),
        );
    });
  });
  Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
    (fastestIndex) => {
      testedSites.forEach((_promise, i) => {
        if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
      });
      testedSites[fastestIndex].then((result) => {
        preparePage(result);
      });
    },
  );
}

export default start;
