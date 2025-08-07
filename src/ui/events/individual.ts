import NProgress from 'nprogress';
import { changeAppStateValue, getAppStateValue, getSettingsValue } from '../../core/settings.ts';
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

export function buttonReloadPage(event: Event): void {
  const index = (event.currentTarget as HTMLButtonElement).value;
  const img = getAppStateValue('render')?.querySelector<HTMLImageElement>(`#PageImg${index}`);
  const src = img?.getAttribute('src');
  if (!src) {
    return;
  }
  const repeat = getRepeatValue(src);
  if (repeat > 5) return;
  img?.removeAttribute('src');
  if (isBase64ImageUrl(src) || isObjectURL(src)) {
    img?.setAttribute('src', src);
  } else {
    img?.setAttribute('src', invalidateImageCache(src, repeat));
  }
  logScript(`Reloading Page ${index}`);
}

export function buttonHidePage(event: Event): void {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement;
  img.classList.toggle('hide');
}

export function imageLoaded(event: Event): void {
  (event.currentTarget as HTMLImageElement).classList.add('imgLoaded');
  (event.currentTarget as HTMLImageElement).classList.remove('imgBroken');
  const loaded = getAppStateValue('loaded') ?? 0;
  const total =
    (getAppStateValue('manga')?.pages ?? 1) - (getAppStateValue('manga')?.begin ?? 1) - 1;
  const percentage = Math.floor((loaded / total) * 100);
  changeAppStateValue('loaded', n => n + 1);
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
  img.classList.add('imgBroken');
  buttonReloadPage(event);
}
