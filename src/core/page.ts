import NProgress from 'nprogress';
import imagesLoaded from 'imagesloaded';
import { logScript } from '../utils/tampermonkey';
import { settings } from './settings';
import {
  IManga,
  IMangaImages,
  IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
} from '../types';
import { getElementAttribute } from '../utils/request';
import lazyLoad from '../utils/lazyLoad.js';

// After pages load apply default Zoom
function applyZoom(pages: string = '.PageContent img', zoom = settings.zoom) {
  const pg = [...document.querySelectorAll<HTMLImageElement>(pages)];
  pg.forEach((value) => {
    const img = value;
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.removeAttribute('style');
    if (zoom === 1000) {
      img.style.width = `${window.innerWidth}px`;
    } else if (zoom === -1000) {
      const nav = document.querySelector('#Navigation')?.classList.contains('disabled');
      const chap = document.querySelector('#Chapter')?.classList.contains('WebComic');
      const nextHeight = window.innerHeight + (nav ? 0 : -34) + (chap ? 0 : -35);
      img.style.height = `${nextHeight}px`;
    } else {
      img.style.width = `${img.naturalWidth * (zoom / 100)}px`;
    }
  });
}

// Force reload the image
function reloadImage(img: HTMLImageElement) {
  const src = img.getAttribute('src');
  if (src) {
    img.removeAttribute('src');
    setTimeout(() => {
      img.setAttribute('src', src);
    }, 500);
  }
}

function onImagesDone() {
  logScript('Images Loading Complete');
  if (!settings.lazyLoadImages) {
    document.querySelector('.download')?.setAttribute('href', '#download');
    logScript('Download Available');
    if (settings.downloadZip) {
      document.querySelector('#blob')?.dispatchEvent(new Event('click'));
    }
  }
}

function updateProgress() {
  const total = document.querySelectorAll('.PageContent .PageImg').length;
  const loaded = document.querySelectorAll('.PageContent .PageImg.imgLoaded').length;
  const percentage = Math.floor((loaded / total) * 100);
  const title = document.querySelector('title');
  if (title) {
    title.innerHTML = `(${percentage}%) ${document.querySelector('#MangaTitle')?.textContent}`;
  }
  document.querySelectorAll('#Counters i, #NavigationCounters i').forEach((ele) => {
    ele.textContent = loaded.toString();
  });
  NProgress.configure({
    showSpinner: false,
  }).set(loaded / total);
  logScript(`Progress: ${percentage}%`);
  if (loaded === total) onImagesDone();
}

// change class if the image is loaded or broken
function onImagesProgress(
  instance: ImagesLoaded.ImagesLoaded,
  image?: {
    img: HTMLImageElement;
    isLoaded: boolean;
  },
): void {
  if (image) {
    if (image.isLoaded) {
      image.img.classList.add('imgLoaded');
      image.img.classList.remove('imgBroken');
      image.img.getAttribute('id');
      const thumbId = image.img.getAttribute('id')!.replace('PageImg', 'ThumbnailImg');
      const thumb = document.getElementById(thumbId);
      if (thumb) {
        thumb.onload = () => applyZoom(`#${image.img.getAttribute('id')}`);
        thumb.setAttribute('src', image.img.getAttribute('src')!);
      }
    } else {
      image.img.classList.add('imgBroken');
      reloadImage(image.img);
      const imgLoad = imagesLoaded(image.img.parentElement!);
      imgLoad.on('progress', onImagesProgress);
    }
  }
  updateProgress();
}

// Corrects urls
function normalizeUrl(url: string = ''): string {
  let uri = url.trim();
  if (uri.startsWith('//')) {
    uri = `https:${uri}`;
  }
  return uri;
}

// Adds an image to the place-holder div
function addImg(index: number, imageSrc: string) {
  const src = normalizeUrl(imageSrc);
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (!settings.lazyLoadImages || index < settings.lazyStart) {
      img.setAttribute('src', src);
      img.setAttribute('src', src);
      const imgLoad = imagesLoaded(img.parentElement!);
      imgLoad.on('progress', onImagesProgress);
      logScript('Loaded Image:', index, 'Source:', src);
    } else {
      img.setAttribute('data-src', src);

      lazyLoad(img, () => {
        const imgLoad = imagesLoaded(img.parentElement!);
        imgLoad.on('progress', onImagesProgress);
        logScript('Lazy Image: ', index, ' Source: ', img.getAttribute('src'));
      });
    }
  }
}

function findPage(manga: IMangaPages, index: number, pageUrl: string, lazy: boolean) {
  return async () => {
    const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
    const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
    if (src && img) {
      img.setAttribute('src', src);
      img.style.width = 'auto';
      const imgLoad = imagesLoaded(img.parentElement!);
      imgLoad.on('progress', onImagesProgress);
      logScript(`${lazy && 'Lazy '}Page: `, index, ' Source: ', img.getAttribute('src'));
    }
  };
}

// Adds a page to the place-holder div
async function addPage(manga: IMangaPages, index: number, pageUrl: string) {
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (!settings.lazyLoadImages || index < settings.lazyStart) {
      await findPage(manga, index, pageUrl, false)();
    } else {
      img.setAttribute(
        'data-src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      );
      lazyLoad(img, findPage(manga, index, pageUrl, false));
    }
  }
}

// daley the use of an url/src
function delayAdd(src: string, wait: number = settings.throttlePageLoad) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(src);
    }, wait);
  });
}

// use a list of pages to fill the viewer
function loadMangaPages(begin: number, manga: IMangaPages) {
  return manga.listPages?.map((url, index) =>
    index >= begin
      ? delayAdd(url, (manga.timer || settings.throttlePageLoad) * (index - begin)).then(
          (response) => addPage(manga, index + 1, response as string),
        )
      : null,
  );
}

// use a list of images to fill the viewer
function loadMangaImages(begin: number, manga: IMangaImages) {
  return manga.listImages?.map((src, index) =>
    index >= begin
      ? delayAdd(src, (manga.timer || settings.throttlePageLoad) * (index - begin)).then(
          (response) => addImg(index + 1, response as string),
        )
      : null,
  );
}

// Entry point for loading hte Manga pages
function loadManga(manga: IManga, begin = 1) {
  settings.lazyLoadImages = manga.lazy || settings.lazyLoadImages;
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || settings.throttlePageLoad || 'Default(1000)'}`);
  logScript(`Lazy: ${settings.lazyLoadImages}`);
  if (settings.lazyLoadImages) {
    logScript('Download may not work with Lazy Loading Images');
  }
  if (isImagesManga(manga)) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(begin - 1, manga);
  } else if (isPagesManga(manga)) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(begin - 1, manga);
  } else if (isBruteforceManga(manga)) {
    logScript('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      loadImages: (list: string[]) => loadMangaImages(begin - 1, { ...manga, listImages: list }),
      loadPages: (list: string[], img: string, lazyAttr: string | undefined) =>
        loadMangaPages(begin - 1, {
          ...manga,
          listPages: list,
          img,
          lazyAttr,
        }),
      wait: settings.throttlePageLoad,
    });
  }
}

export { loadManga, applyZoom, reloadImage };
