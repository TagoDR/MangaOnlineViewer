import { blobToDataURL } from 'blob-util';
import {
  type IManga,
  type IMangaImages,
  type IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
  type PageStatus,
} from '../types';
import { removeURLBookmark } from '../ui/events/bookmarks.ts';
import { applyZoom } from '../ui/events/zoom.ts';
import { getElementAttribute } from '../utils/request.ts';
import sequence from '../utils/sequence.ts';
import { logScript, logScriptVerbose } from '../utils/tampermonkey.ts';
import { waitForFunc } from '../utils/waitFor.ts';
import { appState, changeImage, getAppStateValue, getSettingsValue } from './settings.ts';
import { WorkerPool } from './WorkerPool.ts';

let pool: WorkerPool;

/**
 * Normalizes a URL by trimming whitespace and ensuring it starts with a protocol.
 * @param {string} url - The URL to normalize.
 * @returns {string} The normalized URL.
 */
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

/**
 * Fetches an image, converts it to a data URL, and adds it to the application state.
 * @param {IMangaImages | IMangaPages} manga - The manga object with image loading configurations.
 * @param {number} index - The page number of the image.
 * @param {string} imageSrc - The source URL of the image.
 */
async function addImg(manga: IMangaImages | IMangaPages, index: number, imageSrc: string) {
  const image = getAppStateValue('images')?.[index];
  if (image?.status && image.status !== 'pending') return;
  changeImage(index, () => ({ status: 'loading' }));
  pool.add(async () => {
    let src = normalizeUrl(imageSrc);
    let blob: Blob | undefined;
    let status: PageStatus = 'loaded';
    try {
      const response = await fetch(src, (manga as IMangaImages).fetchOptions);
      if (response.ok) {
        blob = await response.blob();
        src = await blobToDataURL(blob);
      } else {
        status = 'error';
      }
    } catch (e) {
      logScript('Failed to fetch image', e);
      status = 'error';
    }
    changeImage(index, () => ({ src, blob, status }));
    logScriptVerbose('Loaded Image:', index, 'Source:', src);
  });
  if (manga.pages === index) removeURLBookmark();
}

/**
 * Fetches a page URL to find the image source within it, then adds the image to the application state.
 * @param {IMangaPages} manga - The manga object with page loading configurations.
 * @param {number} index - The page number.
 * @param {string} pageUrl - The URL of the page containing the image.
 */
async function addPage(manga: IMangaPages, index: number, pageUrl: string) {
  const image = getAppStateValue('images')?.[index];
  if (image?.status && image.status !== 'pending') return;
  changeImage(index, () => ({ status: 'loading' }));
  pool.add(async () => {
    try {
      const imageSrc = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
      if (imageSrc) {
        changeImage(index, () => ({ status: 'pending' }));
        await addImg(manga, index, imageSrc);
      } else {
        changeImage(index, () => ({ status: 'error' }));
      }
    } catch (e) {
      logScript('Failed to get page attribute', e);
      changeImage(index, () => ({ status: 'error' }));
    }
  });
}

/**
 * Loads a manga by fetching individual page URLs and extracting the image source from each.
 * @param {number} begin - The starting page number.
 * @param {IMangaPages} manga - The manga object with a list of page URLs.
 */
function loadMangaPages(begin: number, manga: IMangaPages) {
  sequence(manga.pages, begin)
    .filter(
      (_index, position) =>
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        position <= getSettingsValue('lazyStart'),
    )
    .forEach(index => {
      addPage(manga, index, manga.listPages[index - 1]);
    });
}

/**
 * Loads a manga from a direct list of image URLs.
 * @param {number} begin - The starting page number.
 * @param {IMangaImages} manga - The manga object with a list of image URLs.
 */
function loadMangaImages(begin: number, manga: IMangaImages) {
  sequence(manga.pages, begin)
    .filter(
      (_index, position) =>
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        position <= getSettingsValue('lazyStart'),
    )
    .forEach(index => {
      addImg(manga, index, manga.listImages[index - 1]);
    });
}

/**
 * The main entry point for loading manga images based on the detected loading strategy.
 * It determines whether to load from a list of images, a list of pages, or use a brute-force method.
 * It also sets up a listener to lazy-load subsequent images as the user scrolls.
 * @returns {Promise<void>}
 */
export default async function loadImages() {
  await waitForFunc(() => getAppStateValue('manga') !== undefined);
  const manga = getAppStateValue('manga') as IManga;
  const begin = manga.begin ?? 1;
  pool = new WorkerPool(getSettingsValue('loadSpeed'), manga.timer);
  logScriptVerbose('Loading Images');
  logScriptVerbose(`Speed: ${getSettingsValue('loadSpeed')}`);
  logScriptVerbose(
    `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
  );
  applyZoom();

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
      wait: 0,
    });
  } else {
    logScript('No Loading Method Found');
  }

  // Lazy load images as the user scrolls
  appState.listen((value, oldValue, changedKey) => {
    if (changedKey === 'currentPage' && value.currentPage > oldValue.currentPage) {
      for (let i = value.currentPage; i < Math.min(value.currentPage + 5, manga.pages + 1); i++) {
        if (value.images?.[i]?.src !== undefined || value.images?.[i]?.status === 'loading') {
          continue;
        }
        if (isImagesManga(manga)) {
          addImg(manga, i, manga.listImages[i - 1]);
        } else if (isPagesManga(manga)) {
          addPage(manga, i, manga.listPages[i - 1]);
        }
      }
    }
  });
}
