import Swal, { SweetAlertOptions } from 'sweetalert2';
import { getBrowser, getEngine, getInfoGM, logScript } from '../utils/tampermonkey';
import { IManga, ISite } from '../types';
import { isNothing } from '../utils/checks';
import display from './display';
import { getLocaleString, useSettings } from './settings';
import sweetalertStyle from './components/externalStyle';
import { startButton } from './components/styles.js';

async function formatPage(manga: IManga, begin = 0) {
  display(manga, begin);
}

async function lateStart(site: ISite, begin = 1) {
  const manga = await site.run();
  logScript('LateStart');
  const options: SweetAlertOptions = {
    title: getLocaleString('STARTING'),
    input: 'range',
    inputAttributes: {
      min: '1',
      max: manga.pages.toString(),
      step: '1',
    },
    inputValue: begin || 1,
    text: getLocaleString('CHOOSE_BEGINNING'),
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    icon: 'question',
  };
  Swal.fire(options).then((result) => {
    if (result.value) {
      logScript(`Choice: ${result.value}`);
      formatPage(manga, result.value);
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

// Organize the site adding place-holders for the manga pages
function preparePage(site: ISite, manga: IManga, begin = 0) {
  logScript(`Found Pages: ${manga.pages}`);
  if (manga.pages > 0) {
    let beginning = begin;
    if (beginning <= 1) {
      beginning = useSettings()?.bookmarks?.find((b) => b.url === window.location.href)?.page || 1;
    }
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    switch (site.start || useSettings()?.loadMode) {
      case 'never':
        createLateStartButton(site, beginning);
        break;
      case 'always':
        formatPage(manga, 0);
        break;
      case 'wait':
      default:
        Swal.fire({
          title: getLocaleString('STARTING'),
          html: `${
            beginning > 1 ? `${getLocaleString('RESUME')}${beginning}.<br/>` : ''
          }${getLocaleString('WAITING')}`,
          showCancelButton: true,
          cancelButtonColor: '#d33',
          reverseButtons: true,
          timer: 3000,
        }).then((result) => {
          if (result.value || result.dismiss === Swal.DismissReason.timer) {
            formatPage(manga, beginning);
          } else {
            createLateStartButton(site, beginning);
            logScript(result.dismiss);
          }
        });
        break;
    }
  }
}

// Wait for something on the site to be ready before executing the script
async function waitExec(site: ISite, waitElapsed: number = 0) {
  if (waitElapsed >= (site.waitMax || 5000)) {
    preparePage(site, await site.run());
    return;
  }
  if (site.waitAttr !== undefined) {
    const wait = document.querySelector(site.waitAttr[0])?.getAttribute(site.waitAttr[1]);
    if (isNothing(wait)) {
      logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
      setTimeout(() => {
        waitExec(site, waitElapsed + (site.waitStep || 1000));
      }, site.waitStep || 1000);
      return;
    }
    logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
  }
  if (site.waitEle !== undefined) {
    const wait = document.querySelector(site.waitEle);
    if (isNothing(wait?.tagName)) {
      logScript(`Waiting for Element ${site.waitEle} = `, wait);
      setTimeout(() => {
        waitExec(site, waitElapsed + (site.waitStep || 1000));
      }, site.waitStep || 1000);
      return;
    }
    logScript(`Found Element ${site.waitEle} = `, wait);
  }
  if (site.waitVar !== undefined) {
    const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const wait = W[site.waitVar as any];
    if (isNothing(wait)) {
      logScript(`Waiting for Variable ${site.waitVar} = ${wait}`);
      setTimeout(() => {
        waitExec(site, waitElapsed + (site.waitStep || 1000));
      }, site.waitStep || 1000);
      return;
    }
    logScript(`Found Variable ${site.waitVar} = ${wait}`);
  }
  preparePage(site, await site.run());
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
