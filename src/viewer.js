import {
  getBrowser,
  getEngine,
  getInfoGM,
  logScript,
  logScriptC,
} from './browser';
import {
  settings,
} from './settings';
import reader from './reader';
import {
  loadManga,
  checkImagesLoaded,
} from './page';
import {
  controls,
  setKeyDownEvents,
} from './events';
import {
  isEmpty,
} from './utils';

// Organize the site adding place holders for the manga pages
function formatPage(manga, begin = 0) {
  logScript(`Found ${manga.quant} pages`);
  if (manga.quant > 0) {
    settings.starting = begin || settings.bookmarks// [manga.name]
      .filter(x => x.url === location.href)
      .map(x => x.page)[0] || 0;
    let cancel = false;
    if (!settings.alwaysLoad) {
      $('head')
        .append(
          '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.5/sweetalert2.min.css" integrity="sha256-0AEO0dmdWUZ8e17VwaCiLJ1k8VlFQq2jGRetjpVCr34=" crossorigin="anonymous" />');
      swal({
        title: 'Starting MangaOnlineViewer',
        text: `${settings.starting
        > 1 ? `Resuming reading from Page ${settings.starting}.\n` : ''}Please wait, 3 seconds...`,
        showCancelButton: false,
        confirmButtonText: 'No, cancel!',
        confirmButtonColor: '#DD6B55',
        closeOnConfirm: true,
      }).then((isConfirm) => {
        cancel = isConfirm;
        W.mov = starting => formatPage(manga, starting);
      });
    }
    setTimeout(() => {
      W.stop();
      if (cancel) {
        logScript('Aborted');
        return;
      }
      if (manga.before !== undefined) {
        manga.before();
      }
      document.documentElement.innerHTML = reader(manga, settings.starting);
      setTimeout(() => {
        try {
          controls(manga);
          setKeyDownEvents(manga);
          checkImagesLoaded(manga);
          logScript('Site rebuild done');
          setTimeout(() => {
            $('body').scrollTo(0);
            loadManga(manga, settings.starting);
          }, 50);
        } catch (e) {
          logScript(e);
        }
      }, 50);
      if (manga.after !== undefined) {
        manga.after();
      }
    }, settings.alwaysLoad ? 50 : 3000);
  }
}

// Script Entry point
function start(sites) {
  logScript(
    `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`);
  W.InfoGM = getInfoGM;
  logScript(`${sites.length} Known Manga Sites`);
  let waitElapsed = 0;

  // Wait for something on the site to be ready before executing the script
  function waitExec(site) {
    let wait = '';
    if (site.waitMax !== undefined) {
      if (waitElapsed >= site.waitMax) {
        formatPage(site.run());
        return;
      }
    }
    if (site.waitAttr !== undefined) {
      wait = $(site.waitAttr[0]).attr(site.waitAttr[1]);
      logScript(`Wating for ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
      if (wait === undefined || isEmpty(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    if (site.waitEle !== undefined) {
      wait = $(site.waitEle).get();
      logScript(`Wating for ${site.waitEle} = ${`${wait}`}`);
      if (wait === undefined || isEmpty(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    if (site.waitVar !== undefined) {
      wait = W[site.waitVar];
      logScript(`Wating for ${site.waitVar} = ${wait}`);
      if (isEmpty(wait)) {
        setTimeout(() => {
          waitExec(site);
        }, site.waitStep || 1000);
        waitElapsed += site.waitStep || 1000;
        return;
      }
    }
    formatPage(site.run());
  }

  logScript('Looking for a match...');
  const test = R.compose(R.map(waitExec),
    R.map(logScriptC('Site Found:')),
    R.filter(x => R.test(x.url, location.href)));
  test(sites);
}

// eslint-disable-next-line import/prefer-default-export
export { start };
