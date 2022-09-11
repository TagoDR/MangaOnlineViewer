import NProgress from 'nprogress';
import imagesLoaded from 'imagesloaded';
import { logScript } from '../utils/tampermonkey';
import { useSettings } from './settings';
import {
  IManga,
  IMangaImages,
  IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
} from '../types';
import { getElementAttribute } from '../utils/request';
import lazyLoad from '../utils/lazyLoad';
import sequence from '../utils/sequence';

// After pages load apply default Zoom
function applyZoom(pages: string = '.PageContent img', zoom = useSettings().zoom) {
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
      const nextHeight = window.innerHeight + (nav ? 0 : -30) + (chap ? 0 : -35);
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
  if (!useSettings().lazyLoadImages) {
    document.querySelector('.download')?.setAttribute('href', '#download');
    logScript('Download Available');
    if (useSettings().downloadZip) {
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
  _instance: ImagesLoaded.ImagesLoaded,
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
function addImg(manga: IMangaImages, index: number, imageSrc: string, position: number) {
  const src = normalizeUrl(imageSrc);
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (!useSettings().lazyLoadImages || position <= useSettings().lazyStart) {
      setTimeout(() => {
        img.setAttribute('src', src);
        const imgLoad = imagesLoaded(img.parentElement!);
        imgLoad.on('progress', onImagesProgress);
        logScript('Loaded Image:', index, 'Source:', src);
      }, (manga.timer || useSettings().throttlePageLoad) * position);
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
async function addPage(manga: IMangaPages, index: number, pageUrl: string, position: number) {
  const img = document.querySelector<HTMLImageElement>(`#PageImg${index}`);
  if (img) {
    if (!useSettings().lazyLoadImages || position <= useSettings().lazyStart) {
      setTimeout(() => {
        findPage(manga, index, pageUrl, false)();
      }, (manga.timer || useSettings().throttlePageLoad) * position);
    } else {
      img.setAttribute(
        'data-src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      );
      lazyLoad(img, findPage(manga, index, pageUrl, true));
    }
  }
}

// use a list of pages to fill the viewer
function loadMangaPages(begin: number, manga: IMangaPages) {
  sequence(manga.pages, begin).forEach((index, position) =>
    addPage(manga, index, manga.listPages[index - 1], position),
  );
}

// use a list of images to fill the viewer
function loadMangaImages(begin: number, manga: IMangaImages) {
  sequence(manga.pages, begin).forEach((index, position) =>
    addImg(manga, index, manga.listImages[index - 1], position),
  );
}

// Entry point for loading hte Manga pages
function loadManga(manga: IManga, begin = 1) {
  useSettings().lazyLoadImages = manga.lazy || useSettings().lazyLoadImages;
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || useSettings().throttlePageLoad || 'Default(1000)'}`);
  logScript(`Lazy: ${useSettings().lazyLoadImages}, Starting from: ${useSettings().lazyStart}`);
  if (useSettings().lazyLoadImages) {
    logScript('Download may not work with Lazy Loading Images');
  }
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
      loadImages: (list: string[]) => loadMangaImages(begin, { ...manga, listImages: list }),
      loadPages: (list: string[], img: string, lazyAttr: string | undefined) =>
        loadMangaPages(begin, {
          ...manga,
          listPages: list,
          img,
          lazyAttr,
        }),
      wait: useSettings().throttlePageLoad,
    });
  }
}

export { loadManga, applyZoom, reloadImage };
