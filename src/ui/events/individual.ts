import _ from 'lodash';
import NProgress from 'nprogress';
import {
  changeImage,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
} from '../../core/settings.ts';
import { isEmpty } from '../../utils/checks.ts';
import { logScript } from '../../utils/tampermonkey.ts';
import { isBase64ImageUrl, isObjectURL } from '../../utils/urls.ts';
import { buttonStartDownload } from './globals.ts';
import { calculatePageZoom } from './zoom.ts';

/**
 * Appends a cache-busting query parameter to a URL.
 * @internal
 * @param {string} src - The original image source URL.
 * @param {number} repeat - The current reload attempt number.
 * @returns {string} The new URL with the `forceReload` parameter.
 */
function invalidateImageCache(src: string, repeat: number): string {
  const url = src.replace(/[?&]forceReload=\d+$/, '');
  const symbol = !url.includes('?') ? '?' : '&';
  return `${url + symbol}forceReload=${repeat}`;
}

/**
 * Attempts to reload a broken image with a cache-busting parameter.
 * It will only attempt to reload up to 5 times.
 * @internal
 * @param {number} index - The page index of the image to reload.
 * @param {HTMLImageElement} img - The `<img>` element to reload.
 */
function reloadImage(index: number, img: HTMLImageElement) {
  const images = getAppStateValue('images');
  const image = images?.[index];
  if (!image?.src) return;

  const repeat = (image.reload ?? 0) + 1;
  if (repeat > getSettingsValue('maxReload')) {
    logScript(`Stopped reloading Page ${index} after ${repeat} attempts`);
    return;
  }

  logScript(`Reloading Page ${index} (Attempt ${repeat})`, img);

  img?.removeAttribute('src');
  if (isBase64ImageUrl(image.src) || isObjectURL(image.src)) {
    changeImage(index, () => ({ reload: repeat }));
    img?.setAttribute('src', image.src);
  } else {
    const src = invalidateImageCache(image.src, repeat);
    changeImage(index, () => ({ reload: repeat, src }));
    img?.setAttribute('src', src);
  }
}

/**
 * Event handler for the reload button on an individual page.
 * @param {Event} event - The click event from the reload button.
 */
export function buttonReloadPage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = getAppStateValue('images')?.[index]?.ref?.value;
  if (img) {
    reloadImage(index, img);
  }
}

/**
 * Event handler for the hide button on an individual page, which toggles the visibility of the page container.
 * @param {Event} event - The click event from the hide button.
 */
export function buttonHidePage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  changeImage(index, image => ({ hide: !image.hide }));
}

/**
 * Event handler for when an image successfully loads.
 * It updates the application state with the image's dimensions, attempts to create a blob for downloading,
 * and updates the overall loading progress bar.
 * @param {Event} event - The load event from an `<img>` element.
 */
export function imageLoaded(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  changeImage(index, _image => ({
    ...calculatePageZoom({
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    }),
    status: 'loaded',
    doublePage: img.naturalWidth > img.naturalHeight,
  }));

  const manga = getAppStateValue('manga');
  const images = getAppStateValue('images') || {};
  const loaded = _.keys(images).filter(key => {
    const idx = parseInt(key, 10);
    return (
      idx >= (manga?.begin ?? 1) && idx <= (manga?.pages ?? 1) && images[idx]?.status === 'loaded'
    );
  }).length;
  const total = (manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1);
  const percentage = Math.floor((loaded / total) * 100);
  document.title = `(${percentage}%) ${getAppStateValue('manga')?.title}`;
  NProgress.configure({
    showSpinner: false,
  }).set(loaded / total);
  logScript(`Progress: ${percentage}%`);
  if (loaded === total) {
    logScript('Images Loading Complete');
    setAppStateValue('download', 'available');
    if (getSettingsValue('downloadZip')) buttonStartDownload();
  }
}

/**
 * Event handler for when an image fails to load.
 * It marks the image as broken and attempts to reload it.
 * @param {Event} event - The error event from an `<img>` element.
 */
export function imageLoadError(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  if (isEmpty(img.getAttribute('src'))) return;
  const index = parseInt(img.id.replace('PageImg', ''), 10);
  changeImage(index, () => ({ status: 'error' }));
  reloadImage(index, img);
}
