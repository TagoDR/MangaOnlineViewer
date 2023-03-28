import Swal, { SweetAlertOptions } from 'sweetalert2';
// @ts-ignore
import RangeInputSlider from 'range-input-slider';
import { getBrowser, getEngine, getInfoGM, logScript } from '../utils/tampermonkey';
import { IManga, ISite } from '../types';
import formatPage from './display';
import { getLocaleString, isBookmarked, useSettings } from './settings';
import sweetalertStyle from './styles/externalStyle';
import startButton from './styles/startButton.css?inline';
import { testAttribute, testElement, testFunc, testVariable } from './check';

async function lateStart(site: ISite, begin = 1) {
  const manga = await site.run();
  logScript('LateStart');
  let beginPage = begin || 1;
  let endPage = manga.pages;
  const options: SweetAlertOptions = {
    title: getLocaleString('STARTING'),
    html: `
    ${getLocaleString('CHOOSE_BEGINNING')}
    <span id='pagesValues'>${begin} - ${endPage}</span>
    <div id='pagesSlider' style='display: flex; justify-content: center;align-content: center;'></div>
    `,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    icon: 'question',
    didOpen() {
      const Slider = new RangeInputSlider(document.getElementById('pagesSlider'), {
        minPoint: beginPage,
        maxPoint: endPage,
        min: 1,
        max: manga.pages,
        onValueChangeStop(newValues: any) {
          const el = document.getElementById('pagesValues');
          beginPage = newValues.min;
          endPage = newValues.max;
          if (el) {
            el.innerText = `${beginPage} - ${endPage}`;
          }
        },
        onValueChange(newValues: any) {
          const el = document.getElementById('pagesValues');
          beginPage = newValues.min;
          endPage = newValues.max;
          if (el) {
            el.innerText = `${newValues.min} - ${newValues.max}`;
          }
        },
        serifs: [
          { position: 0, html: '1' },
          { position: 100, html: `${manga.pages}` },
        ],
      });
      Slider.init();
    },
  };
  Swal.fire(options).then((result) => {
    if (result.value) {
      logScript(`Choice: ${beginPage} - ${endPage}`);
      manga.begin = beginPage;
      manga.pages = endPage;
      formatPage(manga);
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
    lateStart(site, beginning);
  };
  document.body.appendChild(button);

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(startButton));
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
  }).then((result) => {
    if (result.value || result.dismiss === Swal.DismissReason.timer) {
      formatPage(manga);
    } else {
      createLateStartButton(site, manga.begin);
      logScript(result.dismiss);
    }
  });
}

// Organize the site adding place-holders for the manga pages
async function preparePage(site: ISite) {
  const manga = await site.run();
  logScript(`Found Pages: ${manga.pages}`);
  if (manga.pages <= 0) return;
  manga.begin = isBookmarked() || manga.begin || 1;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(sweetalertStyle));
  document.body.appendChild(style);
  const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  W.MOV = (startPage?: number, endPage?: number) => {
    if (startPage !== undefined) manga.begin = startPage;
    if (endPage !== undefined) manga.pages = endPage;
    formatPage(manga);
  };
  switch (site.start ?? useSettings()?.loadMode) {
    case 'never':
      createLateStartButton(site, manga.begin);
      break;
    case 'always':
      formatPage(manga);
      break;
    case 'wait':
    default:
      showWaitPopup(site, manga);
      break;
  }
}

// Wait for something on the site to be ready before executing the script
function waitExec(site: ISite, waitElapsed: number = 0) {
  if (
    waitElapsed < (site.waitMax || 5000) &&
    (testAttribute(site) || testElement(site) || testVariable(site) || testFunc(site))
  ) {
    setTimeout(() => {
      waitExec(site, waitElapsed + (site.waitStep || 1000));
    }, site.waitStep || 1000);
    return;
  }
  preparePage(site);
}

// Script Entry point
function start(sites: ISite[]) {
  logScript(
    `Starting ${getInfoGM.script.name} ${
      getInfoGM.script.version
    } on ${getBrowser()} with ${getEngine()}`,
  );
  logScript(`${sites.length} Known Manga Sites, Looking for a match...`);

  const site = sites.find((s: ISite) => s.url.test(window.location.href));
  if (site) {
    logScript(`Found site: ${site.name}`);
    waitExec(site);
  } else {
    logScript(`Sorry, didnt find any valid site`);
  }
}

export default start;
