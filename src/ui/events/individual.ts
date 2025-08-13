import NProgress from 'nprogress';
import {
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
} from '../../core/settings.ts';
import { isEmpty } from '../../utils/checks.ts';
import { logScript } from '../../utils/tampermonkey.ts';
import { isBase64ImageUrl, isObjectURL } from '../../utils/urls.ts';
import { buttonStartDownload } from './globals.ts';

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

function realoadImage(index: number, img: HTMLImageElement) {
  logScript(`Reloading Page ${index}`, img);
  const src = getAppStateValue('images')?.[index]?.src;
  if (!src) return;
  const repeat = getRepeatValue(src);
  if (repeat > 5) return;
  img?.removeAttribute('src');
  if (isBase64ImageUrl(src) || isObjectURL(src)) {
    img?.setAttribute('src', src);
  } else {
    img?.setAttribute('src', invalidateImageCache(src, repeat));
  }
}

export function buttonReloadPage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  realoadImage(index, img);
}

export function buttonHidePage(event: Event): void {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement;
  img.classList.toggle('hide');
}

export function imageLoaded(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  img.classList.add('imgLoaded');
  img.classList.remove('imgBroken');
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  const image = getAppStateValue('images')?.[index];
  if (image) {
    setAppStateValue('images', {
      ...getAppStateValue('images'),
      [index]: {
        ...image,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      },
    });
  }
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Set canvas size to the natural image size for full quality
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  }
  // Try to get base64 data URL (may fail for cross-origin images)
  let dataUrl: string | undefined;
  try {
    dataUrl = canvas.toDataURL('image/png');
  } catch (e) {
    // Ignore CORS-tainted canvas
    dataUrl = undefined;
  }

  if (image) {
    setAppStateValue('images', {
      ...getAppStateValue('images'),
      [index]: {
        ...image,
        base64: dataUrl ?? image.base64,
      },
    });
  }

  changeAppStateValue('loaded', n => n + 1);
  const loaded = getAppStateValue('loaded') ?? 0;
  const total =
    (getAppStateValue('manga')?.pages ?? 1) - ((getAppStateValue('manga')?.begin ?? 1) - 1);
  const percentage = loaded / total;
  NProgress.configure({
    showSpinner: false,
  }).set(percentage);
  if (loaded === total) {
    logScript('Images Loading Complete');
    if (getSettingsValue('downloadZip')) buttonStartDownload();
  }
}

export function imageLoadError(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  if (isEmpty(img.getAttribute('src'))) return;
  img.classList.add('imgBroken');
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  realoadImage(index, img);
}
