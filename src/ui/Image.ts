import { blobToDataURL } from 'blob-util';
import {
  appState,
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
} from '../core/settings';
import {
  type IManga,
  type IMangaImages,
  type IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
} from '../types';
import { getElementAttribute } from '../utils/request';
import sequence from '../utils/sequence';
import { logScript, logScriptVerbose } from '../utils/tampermonkey';
import { isBase64ImageUrl, isObjectURL } from '../utils/urls';
import { waitForFunc } from '../utils/waitFor.ts';
import { removeURLBookmark } from './events/bookmarks';

// Corrects urls
function normalizeUrl(url: string): string {
  if (url) {
    let uri = url.trim();
    if (uri.startsWith('//')) {
      uri = `https:${uri}`;
    }

    return uri;
  }
  return '';
}

// Adds an image to the place-holder div
async function addImg(manga: IMangaImages, index: number, imageSrc: string, position: number = 0) {
  setTimeout(
    async () => {
      let src = normalizeUrl(imageSrc);
      if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
        src = await fetch(src, manga.fetchOptions)
          .then(resp => resp.blob())
          .then(blob => blobToDataURL(blob));
      }
      changeAppStateValue('images', images => {
        return { ...images, [index]: { src } };
      });
      logScriptVerbose('Loaded Image:', index, 'Source:', src);
    },
    (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
  );
  if (manga.pages === index) removeURLBookmark();
}

// Adds a page to the place-holder div
async function addPage(manga: IMangaPages, index: number, pageUrl: string, position: number = 0) {
  setTimeout(
    async () => {
      const imageSrc = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
      if (imageSrc) {
        const src = normalizeUrl(imageSrc);
        changeAppStateValue('images', images => {
          return { ...images, [index]: { src } };
        });
        logScript(`Loaded Page: `, index, ' Source: ', src);
      }
    },
    (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
  );
  if (manga.pages === position) removeURLBookmark();
}

// Use a list of pages to fill the viewer
function loadMangaPages(begin: number, manga: IMangaPages) {
  sequence(manga.pages, begin)
    .filter(
      (_index, position) =>
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        position <= getSettingsValue('lazyStart'),
    )
    .forEach((index, position) => {
      addPage(manga, index, manga.listPages[index - 1], position);
    });
}

// Use a list of images to fill the viewer
function loadMangaImages(begin: number, manga: IMangaImages) {
  sequence(manga.pages, begin)
    .filter(
      (_index, position) =>
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        position <= getSettingsValue('lazyStart'),
    )
    .forEach((index, position) => {
      addImg(manga, index, manga.listImages[index - 1], position);
    });
}

// Entry point for loading hte Manga pages
export default async function loadImages() {
  await waitForFunc(() => getAppStateValue('manga') !== undefined);
  const manga = getAppStateValue('manga') as IManga;
  const begin = manga.begin ?? 1;
  logScriptVerbose('Loading Images');
  logScriptVerbose(
    `Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`,
  );
  logScriptVerbose(
    `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
  );

  if (isImagesManga(manga)) {
    logScriptVerbose('Method: Images:', manga.listImages);
    loadMangaImages(begin, manga);
  } else if (isPagesManga(manga)) {
    logScriptVerbose('Method: Pages:', manga.listPages);
    loadMangaPages(begin, manga);
  } else if (isBruteforceManga(manga)) {
    logScriptVerbose('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      loadImages(list: string[]) {
        loadMangaImages(begin, { ...manga, listImages: list });
      },
      loadPages(list: string[], img: string, lazyAttr: string | undefined) {
        loadMangaPages(begin, {
          ...manga,
          listPages: list,
          img,
          lazyAttr,
        });
      },
      wait: getSettingsValue('throttlePageLoad'),
    });
  } else {
    logScript('No Loading Method Found');
  }

  appState.listen((value, oldValue, changedKey) => {
    if (changedKey === 'currentPage' && value.currentPage > oldValue.currentPage) {
      for (let i = value.currentPage; i < value.currentPage + 5; i++) {
        if (value.images[i] !== undefined) continue;
        if (isImagesManga(manga)) {
          addImg(manga, i, manga.listImages[i - 1]);
        } else if (isPagesManga(manga)) {
          addPage(manga, i, manga.listPages[i - 1]);
        }
      }
    }
  });
}
