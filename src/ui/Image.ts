import { blobToDataURL } from 'blob-util';
import {
  appState,
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
} from '../core/settings.ts';
import {
  type IManga,
  type IMangaImages,
  type IMangaPages,
  isBruteforceManga,
  isImagesManga,
  isPagesManga,
} from '../types';
import { getElementAttribute } from '../utils/request.ts';
import sequence from '../utils/sequence.ts';
import { logScript } from '../utils/tampermonkey.ts';
import { isBase64ImageUrl, isObjectURL } from '../utils/urls.ts';

// Normalize and fix protocol-less URLs
function normalizeUrl(url: string): string {
  if (!url) return '';
  let uri = url.trim();
  if (uri.startsWith('//')) uri = `https:${uri}`;
  return uri;
}

// Pending lazy images (index -> { src, fetchOptions })
let pending: Record<number, { src: string; fetchOptions?: RequestInit }> = {};
let subscribed = false;

function ensureSubscription() {
  if (subscribed) return;
  subscribed = true;
  appState.listen((value, _old, changedKey) => {
    if (changedKey !== 'currentPage') return;
    const cp = value.currentPage;
    // Release any pending whose index is within 3 pages ahead
    Object.keys(pending)
      .map(k => parseInt(k, 10))
      .filter(idx => !Number.isNaN(idx) && cp >= idx - 3)
      .sort((a, b) => a - b)
      .forEach(idx => {
        const item = pending[idx];
        if (!item) return;
        void setImageInStore(idx, item.src, item.fetchOptions);
        delete pending[idx];
      });
  });
}

// Update appState.images for a given page index
async function setImageInStore(index: number, src: string, fetchOptions?: RequestInit) {
  let finalSrc = normalizeUrl(src);
  try {
    if (!isObjectURL(finalSrc) && !isBase64ImageUrl(finalSrc) && fetchOptions) {
      finalSrc = await fetch(finalSrc, fetchOptions)
        .then(resp => resp.blob())
        .then(blob => blobToDataURL(blob));
    }
  } catch (e) {
    logScript('Failed to fetch image as data URL for index', index, e);
  }

  changeAppStateValue('images', images => ({
    ...(images || {}),
    [index]: finalSrc,
  }));

  logScript('Image set', { index, src: finalSrc });
}

function maybeDefer(
  index: number,
  src: string,
  fetchOptions: RequestInit | undefined,
  relativePos: number,
) {
  const lazy = getSettingsValue('lazyLoadImages');
  const lazyStart = getSettingsValue('lazyStart');
  if (lazy && relativePos > lazyStart) {
    pending[index] = { src, fetchOptions };
    return true;
  }
  return false;
}

async function addImg(manga: IMangaImages, index: number, imageSrc: string, position: number) {
  const relativePosition = position - (manga.begin ?? 0);
  const delay = (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition;
  // Lazy gating: defer setting src if beyond lazyStart
  if (maybeDefer(index, imageSrc, manga.fetchOptions, relativePosition)) {
    return;
  }
  setTimeout(
    () => {
      void setImageInStore(index, imageSrc, manga.fetchOptions);
      if (manga.pages === position) {
        // optional: could trigger bookmark cleanup here if used elsewhere
      }
    },
    Math.max(0, delay),
  );
}

async function resolvePageImageSrc(
  manga: IMangaPages,
  pageUrl: string,
): Promise<string | undefined> {
  const attr = manga.lazyAttr ?? 'src';
  const src = await getElementAttribute(pageUrl, manga.img, attr);
  return src ? normalizeUrl(src) : undefined;
}

async function addPage(manga: IMangaPages, index: number, pageUrl: string, position: number) {
  const relativePosition = position - (manga.begin ?? 0);
  const delay = (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition;
  setTimeout(
    async () => {
      const src = await resolvePageImageSrc(manga, pageUrl);
      if (src) {
        if (!maybeDefer(index, src, undefined, relativePosition)) {
          await setImageInStore(index, src);
          logScript('Page image resolved', { index, src });
        }
      }
    },
    Math.max(0, delay),
  );
}

function loadMangaPages(begin: number, manga: IMangaPages) {
  sequence(manga.pages, begin).forEach((index, position) => {
    void addPage(manga, index, manga.listPages[index - 1], position);
  });
}

function loadMangaImages(begin: number, manga: IMangaImages) {
  sequence(manga.pages, begin).forEach((index, position) => {
    void addImg(manga, index, manga.listImages[index - 1], position);
  });
}

// Entry point: uses appState.manga if not provided
function loadManga(mangaParam?: IManga, beginParam?: number) {
  const manga = mangaParam ?? (getAppStateValue('manga') as IManga | undefined);
  if (!manga) {
    logScript('No manga found in appState to load.');
    return;
  }
  const begin = beginParam ?? manga.begin ?? 1;

  // Reset images, counters, and pending before loading
  setAppStateValue('images', {});
  setAppStateValue('loaded', 0);
  pending = {};
  ensureSubscription();

  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`);

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

export { loadManga };
