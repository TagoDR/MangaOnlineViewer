import Swal, { SweetAlertOptions } from 'sweetalert2';
import { getBrowser, getEngine, getInfoGM, logScript } from '../utils/tampermonkey';
import { IManga, ISite } from '../types';
import { isNothing } from '../utils/checks';
import formatPage from './format';
import { settings } from './settings';
import sweetalertStyle from './components/sweetalertStyle.js';

async function lateStart(site: ISite, begin = 1) {
  const manga = await site.run();
  logScript('LateStart');
  const options: SweetAlertOptions = {
    title: 'Starting<br>MangaOnlineViewer',
    input: 'range',
    inputAttributes: {
      min: '1',
      max: manga.pages.toString(),
      step: '1',
    },
    inputValue: begin || 1,
    text: 'Choose the Page to start from:',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    reverseButtons: true,
    icon: 'question',
  };
  Swal.fire(options).then((result) => {
    if (result.value) {
      logScript(`Choice: ${result.value}`);
      formatPage(manga, result.value - 1);
    } else {
      logScript(result.dismiss);
    }
  });
}
function createLateStartButton(site: ISite, beginning: number) {
  const button = document.createElement('button');
  button.innerText = 'Start MangaOnlineViewer';
  button.id = 'StartMOV';
  button.onclick = () => {
    lateStart(site, beginning);
  };
  document.body.appendChild(button);
  const css = `
#StartMOV {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    padding: 10px 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10000;
}

#StartMOV:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
    outline: none;
}

`;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  logScript('Start Button added to page', button);
}
// Organize the site adding place-holders for the manga pages
function preparePage(site: ISite, manga: IManga, begin = 0) {
  logScript(`Found Pages: ${manga.pages}`);
  if (manga.pages > 0) {
    let beginning = begin;
    if (beginning === 0) {
      beginning = settings?.bookmarks?.find((b) => b.url === window.location.href)?.page || 0;
    }
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    // window.mov = (b: number) => lateStart(site, b || beginning);
    switch (site.start || settings?.loadMode) {
      case 'never':
        createLateStartButton(site, beginning);
        break;
      case 'always':
        formatPage(manga, 0);
        break;
      case 'wait':
      default:
        Swal.fire({
          title: 'Starting<br>MangaOnlineViewer',
          html: `${
            beginning > 1 ? `Resuming reading from Page ${beginning}.<br/>` : ''
          }Please wait, 3 seconds...`,
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
    // getInfoGM,
  );
  // window.InfoGM = getInfoGM;
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
