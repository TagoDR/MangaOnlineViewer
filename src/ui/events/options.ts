import Swal from 'sweetalert2';
import {
  getLocaleString,
  getUserSettings,
  resetSettings,
  updateSettings,
} from '../../core/settings';
import type { HeaderMode, LoadMode } from '../../types';
import { applyZoom } from '../page';
import { replaceStyleSheet } from '../../utils/css';

export function buttonResetSettings() {
  // const msg: SweetAlertOptions = {
  //   title: getLocaleString('ATTENTION'),
  //   text: getLocaleString('SETTINGS_RESET'),
  //   timer: 10000,
  //   icon: 'info',
  // };
  resetSettings();
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.removeAttribute('locale');
  elem?.dispatchEvent(new Event('locale'));
  // Swal.fire(msg);
}
export function changeLocale(event: Event) {
  const locale = (event.currentTarget as HTMLInputElement).value;
  updateSettings({ locale });
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.setAttribute('locale', locale);
  elem?.dispatchEvent(new Event('locale'));
  // Swal.fire({
  //   title: getLocaleString('ATTENTION'),
  //   text: getLocaleString('LANGUAGE_CHANGED'),
  //   timer: 10000,
  //   icon: 'info',
  // });
}
export function changeLoadMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  updateSettings({ loadMode: mode as LoadMode });
}
export function checkFitWidthOversize(event: Event) {
  document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
  updateSettings({ fitWidthIfOversize: (event.currentTarget as HTMLInputElement).checked });
}
export function checkShowThumbnails(event: Event) {
  document.querySelector('#Navigation')?.classList.toggle('disabled');
  updateSettings({ showThumbnails: (event.currentTarget as HTMLInputElement).checked });
  applyZoom();
}
export function changeAutoDownload(event: Event) {
  updateSettings({ downloadZip: (event.currentTarget as HTMLInputElement).checked });
  if ((event.currentTarget as HTMLInputElement).checked) {
    Swal.fire({
      title: getLocaleString('ATTENTION'),
      text: getLocaleString('AUTO_DOWNLOAD'),
      timer: 10000,
      icon: 'info',
    });
  }
}
export function checkLazyLoad(event: Event) {
  updateSettings({ lazyLoadImages: (event.currentTarget as HTMLInputElement).checked });
  const start = document.querySelector<HTMLDivElement>('.lazyStart');
  if (getUserSettings().lazyLoadImages) {
    start?.classList.add('show');
  } else {
    start?.classList.remove('show');
  }

  if ((event.currentTarget as HTMLInputElement).checked) {
    Swal.fire({
      title: getLocaleString('WARNING'),
      html: getLocaleString('LAZY_LOAD'),
      icon: 'warning',
    });
  }
}
export function changeLazyStart(event: Event) {
  const start = (event.currentTarget as HTMLInputElement).value;
  updateSettings({ lazyStart: parseInt(start, 10) });
}
export function changePagesPerSecond(event: Event) {
  const timer = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  updateSettings({ throttlePageLoad: timer });
  if (timer < 100) {
    Swal.fire({
      title: getLocaleString('SPEED_WARNING'),
      html: getLocaleString('SPEED_WARNING_MESSAGE'),
      icon: 'warning',
    });
  }
}
export function changeZoomStep(event: Event) {
  const step = (event.currentTarget as HTMLInputElement).value;
  updateSettings({ zoomStep: parseInt(step, 10) });
}
export function changeMinZoom(event: Event) {
  const min = (event.currentTarget as HTMLInputElement).value;
  replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
  updateSettings({ minZoom: parseInt(min, 10) });
}
export function checkHideImageControls(event: Event) {
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  updateSettings({ hidePageControls: (event.currentTarget as HTMLInputElement).checked });
}
export function changeHeaderType(event: Event) {
  document.querySelector('#Header')!.className = '';
  const headerType = (event.currentTarget as HTMLInputElement).value;
  document.querySelector('#Header')?.classList.add(headerType);
  updateSettings({ header: headerType as HeaderMode });
}
function options() {
  // Reset Reader Settings
  document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
  // Change Locale
  document.querySelector('#locale')?.addEventListener('change', changeLocale);
  // Image Fit width if Oversize Toggle
  document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
  // Start/Load mode Selector
  document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
  // Show Thumbnail Toggle
  document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
  // Download auto start toggle
  document.querySelector('#downloadZip')?.addEventListener('change', changeAutoDownload);
  // Lazy load Toggle
  document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);
  // Lazy load starting point Slider
  document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);
  // Images load speed Selector
  document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);
  // Zoom Step Slider
  document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);
  // Min Zoom Slider
  document.querySelector('#minZoom')?.addEventListener('input', changeMinZoom);
  // Show/hide Image Controls Toggle
  document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);
  // Change Header Type
  document.querySelector('#headerType')?.addEventListener('change', changeHeaderType);
}

export default options;
