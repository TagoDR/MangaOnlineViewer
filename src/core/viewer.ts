import Swal, { SweetAlertOptions } from 'sweetalert2';
import rangeSlider, { RangeSlider } from 'range-slider-input';
import rangeSliderStyles from 'range-slider-input/dist/style.css?inline';
import _ from 'lodash';
import { getBrowser, getEngine, getInfoGM, logScript } from '../utils/tampermonkey';
import { IManga, ISite } from '../types';
import formatPage from './display';
import { getLocaleString, isBookmarked, useSettings } from './settings';
import sweetalertStyle from './styles/externalStyle';
import startButton from './styles/startButton.css?inline';
import { testAttribute, testElement, testFunc, testTime, testVariable } from './check';

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
    // language=html
    html: `
      ${getLocaleString('CHOOSE_BEGINNING')}
      <div id='pageInputGroup'>
        <div id='pageInputs'>
          <input type='number' id='pageBegin' class='pageInput' min='1' inputmode='numeric'
                 pattern='[0-9]*' max='${manga.pages}' value='${beginPage}' />
          - <input type='number' id='pageEnd' class='pageInput' min='1' inputmode='numeric'
                   pattern='[0-9]*' max='${manga.pages}' value='${endPage}' />
        </div>
        <div id='pagesSlider'></div>
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
            if (pageBeginInput) pageBeginInput.value = beginPage.toString();
            if (pageEndInput) pageEndInput.value = endPage.toString();
          }
        },
      });

      function changedInput() {
        if (pageBeginInput!.value === '' || pageEndInput!.value === '') return;
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

      const observerEvent = _.debounce(changedInput, 300);
      ['change', 'mouseup', 'keyup', 'touchend'].forEach((event) => {
        pageBeginInput?.addEventListener(event, observerEvent);
        pageEndInput?.addEventListener(event, observerEvent);
      });
    },
  };
  Swal.fire(options)
    .then((result) => {
      if (result.value) {
        logScript(`Choice: ${beginPage} - ${endPage}`);
        manga.begin = beginPage;
        manga.pages = endPage;
        formatPage(manga).catch(logScript);
      } else {
        logScript(result.dismiss);
      }
    })
    .catch(logScript);
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
    html: `${
      manga.begin > 1 ? `${getLocaleString('RESUME')}${manga.begin}.<br/>` : ''
    }${getLocaleString('WAITING')}`,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    timer: 3000,
  })
    .then((result) => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        formatPage(manga).catch(logScript);
      } else {
        createLateStartButton(site, manga.begin);
        logScript(result.dismiss);
      }
    })
    .catch(logScript);
}

// Organize the site adding place-holders for the manga pages
async function preparePage(site: ISite) {
  const manga = await site.run();
  logScript(`Found Pages: ${manga.pages}`);
  if (manga.pages <= 0) return;
  manga.begin = isBookmarked() ?? manga.begin ?? 1;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(sweetalertStyle));
  document.body.appendChild(style);
  const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  W.MOV = (startPage?: number, endPage?: number) => {
    if (startPage !== undefined) manga.begin = startPage;
    if (endPage !== undefined) manga.pages = endPage;
    formatPage(manga).catch(logScript);
  };
  switch (site.start ?? useSettings()?.loadMode) {
    case 'never':
      createLateStartButton(site, manga.begin);
      break;
    case 'always':
      formatPage(manga).catch(logScript);
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
  logScript(`${sites.length} Known Manga Sites, Looking for a match...`);

  const site = sites.find((s: ISite) => s.url.test(window.location.href));
  if (site) {
    logScript(`Found site: ${site.name}`);
    await Promise.all([
      testTime(site),
      testElement(site),
      testAttribute(site),
      testVariable(site),
      testFunc(site),
    ]).then(() => preparePage(site).catch(logScript));
  } else {
    logScript(`Sorry, didnt find any valid site`);
  }
}

export default start;
