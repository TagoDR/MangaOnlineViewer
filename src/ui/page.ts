import { blobToDataURL } from 'blob-util';
import imagesLoaded from 'imagesloaded';
import NProgress from 'nprogress';
import { getSettingsValue } from '../core/settings';
import {
  type IManga,
  type IMangaImages,
  type IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
  type ZoomMode,
} from '../types';
import { html } from '../utils/code-tag';
import lazyLoad from '../utils/lazyLoad';
import { getElementAttribute } from '../utils/request';
import sequence from '../utils/sequence';
import { logScript } from '../utils/tampermonkey';
import { isBase64ImageUrl, isObjectURL } from '../utils/urls';
import { removeURLBookmark } from './events/bookmarks';
import { updateHeaderType } from './events/options.ts';

// After pages load apply default Zoom
function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('defaultZoom'),
  pages = '.PageContent img',
) {
  const globalZoomVal = document.querySelector('#ZoomVal');
  const zoom = document.querySelector<HTMLInputElement>('#Zoom');
  if (globalZoomVal) {
    if (zoom && mode === 'percent') {
      globalZoomVal.textContent = `${value}%`;
      zoom.value = value.toString();
    } else {
      globalZoomVal.textContent = mode as string;
    }
  }
  if (mode === 'height') {
    updateHeaderType('click');
  } else {
    updateHeaderType(getSettingsValue('header'));
  }
  const pg = [...document.querySelectorAll<HTMLImageElement>(pages)];
  pg.forEach((img) => {
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.removeAttribute('style');
    if (mode === 'width') {
      // Fit width
      img.style.width = `${window.innerWidth}px`;
    } else if (mode === 'height') {
      // Fit height
      const nextHeight = window.innerHeight + (getSettingsValue('showThumbnails') ? -29 : 0);
      img.style.height = `${nextHeight}px`;
      img.style.minWidth = 'unset';
    } else if (mode === 'percent' && value >= 0 && value !== 100) {
      img.style.width = `${img.naturalWidth * (value / 100)}px`;
    }
  });
}

function invalidateImageCache(src: string, repeat: number) {
  const url = src.replace(/[?&]forceReload=\d+$/, '');
  const symbol = !url.includes('?') ? '?' : '&';
  return `${url + symbol}forceReload=${repeat}`;
}

function getRepeatValue(src: string | undefined): number {
  let repeat = 1;
  const cache = src?.match(/forceReload=(\d+)$/);
  if (cache?.at(1)) {
    repeat = parseInt(cache[1], 10) + 1;
  }

  return repeat;
}

// Force reload the image
function reloadImage(img: HTMLImageElement) {
  const src = img.getAttribute('src');
  if (!src) {
    return;
  }
  img.removeAttribute('src');
  if (isBase64ImageUrl(src) || isObjectURL(src)) {
    img.setAttribute('src', src);
  } else {
    img.setAttribute('src', invalidateImageCache(src, getRepeatValue(src)));
  }
}

function onImagesDone() {
  logScript('Images Loading Complete');
  if (getSettingsValue('downloadZip')) {
    document.getElementById('download')?.dispatchEvent(new Event('click'));
  }

  document.getElementById('download')?.classList.remove('disabled');
}

function updateProgress() {
  const total = document.querySelectorAll('.PageContent .PageImg').length;
  const loaded = document.querySelectorAll('.PageContent .PageImg.imgLoaded').length;
  const percentage = Math.floor((loaded / total) * 100);
  const title = document.querySelector('title');
  if (title) {
    title.innerHTML = html`(${percentage}%) ${document.querySelector('#MangaTitle')?.textContent}`;
  }

  document.querySelectorAll('#Counters i, #NavigationCounters i').forEach((ele) => {
    ele.textContent = loaded.toString();
  });
  NProgress.configure({
    showSpinner: false,
  }).set(loaded / total);
  logScript(`Progress: ${percentage}%`);
  if (loaded === total) {
    onImagesDone();
  }
}

export const applyLastGlobalZoom = (pages = '.PageContent img') => {
  const zoomVal = document.querySelector('#ZoomVal')?.textContent?.trim();
  if (zoomVal?.match(/^\d+%$/)) {
    applyZoom('percent', parseInt(zoomVal, 10), pages);
  } else {
    applyZoom(zoomVal as ZoomMode, 100, pages);
  }
};

function onImagesSuccess() {
  return (instance: ImagesLoaded.ImagesLoaded) => {
    instance.images.forEach((image) => {
      image.img.classList.add('imgLoaded');
      image.img.classList.remove('imgBroken');
      const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
      const thumb = document.getElementById(thumbId);
      thumb?.classList.remove('imgBroken');
      if (thumb) {
        thumb.setAttribute('src', image.img.getAttribute('src') ?? '');
      }
      applyLastGlobalZoom(`#${image.img.id}`);
      updateProgress();
    });
  };
}

function onImagesFail(manga: IManga) {
  return (instance: ImagesLoaded.ImagesLoaded) => {
    instance.images.forEach((image) => {
      image.img.classList.add('imgBroken');
      const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
      const thumb = document.getElementById(thumbId);
      thumb?.classList.add('imgBroken');
      const src = image.img.getAttribute('src');
      if (src && getRepeatValue(src) <= getSettingsValue('maxReload')) {
        setTimeout(async () => {
          if (manga.reload) {
            const id = parseInt(`0${/\d+/.exec(image.img.id)}`, 10);
            const alt = await manga.reload(id);
            image.img.setAttribute('src', alt);
          } else {
            reloadImage(image.img);
          }
          if (image.img.parentElement) {
            const imgLoad = imagesLoaded(image.img.parentElement);
            imgLoad.on('done', onImagesSuccess());
            imgLoad.on('fail', onImagesFail(manga));
          }
        }, 2000);
      } else {
        // image.img.closest('.MangaPage')?.classList.add('hide');
      }
    });
  };
}

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
function addImg(manga: IMangaImages, index: number, imageSrc: string, position: number) {
  const relativePosition = position - (manga.begin ?? 0);
  let src = normalizeUrl(imageSrc);
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (
      !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
      relativePosition <= getSettingsValue('lazyStart')
    ) {
      setTimeout(
        async () => {
          if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
            src = await fetch(src, manga.fetchOptions)
              .then((resp) => resp.blob())
              .then((blob) => blobToDataURL(blob));
          }
          if (img.parentElement) {
            const imgLoad = imagesLoaded(img.parentElement);
            imgLoad.on('done', onImagesSuccess());
            imgLoad.on('fail', onImagesFail(manga));
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
          if (img.parentElement) {
            const imgLoad = imagesLoaded(img.parentElement);
            imgLoad.on('done', onImagesSuccess());
            imgLoad.on('fail', onImagesFail(manga));
            logScript('Lazy Image: ', index, ' Source: ', img.getAttribute('src'));
          }
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
    const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
    if (src && img) {
      img.style.width = 'auto';
      if (img.parentElement) {
        const imgLoad = imagesLoaded(img.parentElement);
        imgLoad.on('done', onImagesSuccess());
        imgLoad.on('fail', onImagesFail(manga));
      }
      img.setAttribute('src', src);
      logScript(`${lazy && 'Lazy '}Page: `, index, ' Source: ', img.getAttribute('src'));
    }
  };
}

// Adds a page to the place-holder div
async function addPage(manga: IMangaPages, index: number, pageUrl: string, position: number) {
  const relativePosition = position - (manga.begin ?? 0);
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
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

export { loadManga, applyZoom, reloadImage };
