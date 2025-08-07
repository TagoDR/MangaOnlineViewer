import { blobToDataURL } from 'blob-util';
import {
  getAppStateValue,
  getSettingsValue,
  refreshSettings,
  setSettingsValue,
} from '../core/settings';
import {
  type IManga,
  type IMangaImages,
  type IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
  type ZoomMode,
} from '../types';
import lazyLoad from '../utils/lazyLoad';
import { getElementAttribute } from '../utils/request';
import sequence from '../utils/sequence';
import { logScript } from '../utils/tampermonkey';
import { isBase64ImageUrl, isObjectURL } from '../utils/urls';
import { waitForFunc } from '../utils/waitFor.ts';
import { removeURLBookmark } from './events/bookmarks';

// After pages load apply default Zoom
function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('zoomValue'),
  pages = '.PageContent img',
) {
  const globalZoomVal = getAppStateValue('render')?.querySelector('#ZoomVal');
  const zoom = getAppStateValue('render')?.querySelector<HTMLInputElement>('#Zoom');
  if (globalZoomVal) {
    if (zoom && mode === 'percent') {
      globalZoomVal.textContent = `${value}%`;
      zoom.value = value.toString();
    } else {
      globalZoomVal.textContent = mode as string;
    }
  }
  if (mode === 'height') {
    setSettingsValue('header', 'click');
  } else {
    setSettingsValue('header', 'click');
    refreshSettings('header');
  }
  const pg = [...(getAppStateValue('render')?.querySelectorAll<HTMLImageElement>(pages) ?? [])];
  pg.forEach(img => {
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.removeAttribute('style');
    if (mode === 'width') {
      // Fit width
      img.style.width = `${window.innerWidth}px`;
    } else if (mode === 'height') {
      // Fit height
      const nextHeight = window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -29 : 0);
      img.style.height = `${nextHeight}px`;
      img.style.minWidth = 'unset';
    } else if (mode === 'percent' && value >= 0 && value !== 100) {
      img.style.width = `${img.naturalWidth * (value / 100)}px`;
    }
  });
}

export const applyLastGlobalZoom = (pages = '.PageContent img') => {
  const zoomVal = getAppStateValue('render')?.querySelector('#ZoomVal')?.textContent?.trim();
  if (zoomVal?.match(/^\d+%$/)) {
    applyZoom('percent', parseInt(zoomVal, 10), pages);
  } else {
    applyZoom(zoomVal as ZoomMode, 100, pages);
  }
};

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
async function addImg(manga: IMangaImages, index: number, imageSrc: string, position: number) {
  await waitForFunc(() => getAppStateValue('render') !== undefined);
  const relativePosition = position - (manga.begin ?? 0);
  let src = normalizeUrl(imageSrc);
  const img = getAppStateValue('render')?.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (
      !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
      relativePosition <= getSettingsValue('lazyStart')
    ) {
      setTimeout(
        async () => {
          if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
            src = await fetch(src, manga.fetchOptions)
              .then(resp => resp.blob())
              .then(blob => blobToDataURL(blob));
          }
          img.setAttribute('src', src);
          logScript('Loaded Image:', index, 'Source:', src);
        },
        (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition,
      );
    } else {
      img.setAttribute('data-src', normalizeUrl(src));

      lazyLoad(
        img,
        () => {
          logScript('Lazy Image: ', index, ' Source: ', img.getAttribute('src'));
        },
        manga.fetchOptions,
      );
    }
    if (manga.pages === position) removeURLBookmark();
  }
}

function findPage(
  manga: IMangaPages,
  index: number,
  pageUrl: string,
  lazy: boolean,
): () => Promise<void> {
  return async () => {
    const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
    const img = getAppStateValue('render')?.querySelector<HTMLImageElement>(`#PageImg${index}`);
    if (src && img) {
      img.style.width = 'auto';
      img.setAttribute('src', src);
      logScript(`${lazy && 'Lazy '}Page: `, index, ' Source: ', img.getAttribute('src'));
    }
  };
}

// Adds a page to the place-holder div
async function addPage(manga: IMangaPages, index: number, pageUrl: string, position: number) {
  const relativePosition = position - (manga.begin ?? 0);
  const img = getAppStateValue('render')?.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (
      !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
      relativePosition <= getSettingsValue('lazyStart')
    ) {
      setTimeout(
        () => {
          findPage(manga, index, pageUrl, false)().catch(logScript);
        },
        (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition,
      );
    } else {
      img.setAttribute(
        'data-src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      );
      lazyLoad(img, findPage(manga, index, pageUrl, true));
    }
    if (manga.pages === position) removeURLBookmark();
  }
}

// Use a list of pages to fill the viewer
function loadMangaPages(begin: number, manga: IMangaPages) {
  sequence(manga.pages, begin).forEach((index, position) => {
    addPage(manga, index, manga.listPages[index - 1], position).catch(logScript);
  });
}

// Use a list of images to fill the viewer
function loadMangaImages(begin: number, manga: IMangaImages) {
  sequence(manga.pages, begin).forEach((index, position) => {
    addImg(manga, index, manga.listImages[index - 1], position);
  });
}

// Entry point for loading hte Manga pages
function loadManga(manga: IManga, begin = 1) {
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`);
  logScript(
    `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
  );
  if (isImagesManga(manga)) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(begin, manga);
  } else if (isPagesManga(manga)) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(begin, manga);
  } else if (isBruteforceManga(manga)) {
    logScript('Method: Brute Force');
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
}

export { loadManga, applyZoom };
