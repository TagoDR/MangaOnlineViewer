import Swal, { SweetAlertOptions } from 'sweetalert2';
import { getBrowser, getEngine, getInfoGM, logScript, logScriptC, setValueGM } from './browser.js';
import { controls, setKeyDownEvents } from './events.js';
import { loadManga } from './page.js';
import reader from './reader.js';
import { settings } from './settings.js';
import { isNothing } from './utils.js';
import { IManga, ISite } from './interfaces.js';
import { externalCSS, externalScripts } from './externals.js';

function formatPage(manga: IManga, begin = 0) {
  W.stop();
  if (manga.before !== undefined) {
    manga.before();
  }
  document.documentElement.innerHTML = reader(manga, begin);
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      controls();
      setKeyDownEvents();
      setTimeout(() => {
        $(window).scrollTop(0);
        loadManga(manga, begin);
      }, 50);
      // Clear used Bookmarks
      if (!isNothing(settings.bookmarks.filter((el) => el.url === W.location.href))) {
        logScript(`Bookmark Removed ${W.location.href}`);
        settings.bookmarks = settings.bookmarks.filter((el) => el.url !== W.location.href);
        setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
      }
    } catch (e) {
      logScript(e);
    }
  }, 50);
  if (manga.after !== undefined) {
    manga.after();
  }
}

function lateStart(site: ISite, begin = 1) {
  const manga = site.run();
  logScript('LateStart');
  const options: SweetAlertOptions = {
    title: 'Starting<br>MangaOnlineViewer',
    input: 'range',
    inputAttributes: {
      min: '1',
      max: manga.pages.toString(),
      step: '1',
    },
    inputValue: begin,
    text: 'Choose the Page to start from:',
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

// Organize the site adding place-holders for the manga pages
function preparePage(site: ISite, manga: IManga, begin = 0) {
  logScript(`Found ${manga.pages} pages`);
  if (manga.pages > 0) {
    let beginning = begin;
    if (beginning === 0) {
      beginning = settings?.bookmarks?.find((b) => b.url === W.location.href)?.page || 0;
    }
    $('head').append(
      ` ${externalScripts.join('\n')}
        ${externalCSS.join('\n')}
       <style type='text/css'>#mov {position: fixed;left: 50%;transform: translateX(-50%);top: 0;z-index: 1000000;border-radius: .25em;font-size: 1.5em;cursor: pointer;display: inline-block;margin: .3125em;padding: .625em 2em;box-shadow: none;font-weight: 500;color: #FFF;background: rgb(102, 83, 146);border: 1px #FFF;}</style>`,
    );
    W.mov = (b: number) => lateStart(site, b || beginning);
    switch (site.start || settings.loadMode) {
      case 'never':
        $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
        break;
      case 'always':
        formatPage(manga);
        break;
      case 'normal':
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
            $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
            logScript(result.dismiss);
          }
        });
        break;
    }
  }
}

// Script Entry point
function start(sites: ISite[]) {
  logScript(
    `Starting ${getInfoGM.script.name} ${
      getInfoGM.script.version
    } on ${getBrowser()} with ${getEngine()}`,
    getInfoGM,
  );
  // W.InfoGM = getInfoGM;
  logScript(`${sites.length} Known Manga Sites`);
  let waitElapsed = 0;

  // Wait for something on the site to be ready before executing the script
  function waitExec(site: ISite) {
    if (site.waitMax !== undefined) {
      if (waitElapsed >= site.waitMax) {
        preparePage(site, site.run());
        return;
      }
    }
    if (site.waitAttr !== undefined) {
      const wait = $(site.waitAttr[0]).attr(site.waitAttr[1]);
      logScript(`Waiting for ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
      if (isNothing(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    if (site.waitEle !== undefined) {
      const wait = $(site.waitEle);
      logScript(`Waiting for ${site.waitEle} = ${wait}`);
      if (isNothing(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    if (site.waitVar !== undefined) {
      const wait = W[site.waitVar];
      logScript(`Waiting for ${site.waitVar} = ${wait}`);
      if (isNothing(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    preparePage(site, site.run());
  }

  logScript('Looking for a match...');

  function test(list: ISite[]) {
    return list
      .filter((site: ISite) => site.url.test(W.location.href))
      .map(logScriptC('Site Found:'))
      .map(waitExec);
  }

  test(sites);
}

export default start;
