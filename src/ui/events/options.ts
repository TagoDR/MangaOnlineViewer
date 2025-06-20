import Swal from 'sweetalert2';
import {
  getLocaleString,
  getSettingsValue,
  resetSettings,
  setSettingsValue, toggleLocalSettings,
} from '../../core/settings';
import type { HeaderMode, LoadMode } from '../../types';
import { applyZoom } from '../page';
import { replaceStyleSheet } from '../../utils/css';
import { addEvent } from './common';
import { buttonSettingsOpen } from './panels';

export function buttonResetSettings() {
  resetSettings();
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.removeAttribute('locale');
  buttonSettingsOpen();
}

export function changeSettingsScope(event: Event) {
  const scope = (event.currentTarget as HTMLInputElement);
  toggleLocalSettings(scope.value === 'true');
  buttonSettingsOpen();
}

export function changeLocale(event: Event) {
  const locale = (event.currentTarget as HTMLInputElement).value;
  setSettingsValue('locale', locale);
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.setAttribute('locale', locale);
  elem?.dispatchEvent(new Event('hydrate'));
}

export function changeLoadMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  setSettingsValue('loadMode', mode as LoadMode);
}

export function checkFitWidthOversize(event: Event) {
  document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
  setSettingsValue('fitWidthIfOversize', (event.currentTarget as HTMLInputElement).checked);
}

export function checkVerticalSeparator(event: Event) {
  document.querySelector('#Chapter')?.classList.toggle('separator');
  setSettingsValue('verticalSeparator', (event.currentTarget as HTMLInputElement).checked);
}

export function checkShowThumbnails(event: Event) {
  document.querySelector('#Navigation')?.classList.toggle('disabled');
  setSettingsValue('showThumbnails', (event.currentTarget as HTMLInputElement).checked);
  applyZoom();
}

export function checkEnableComments(event: Event) {
  document.querySelector('#CommentsButton')?.classList.toggle('disabled');
  setSettingsValue('enableComments', (event.currentTarget as HTMLInputElement).checked);
  applyZoom();
}

export function changeAutoDownload(event: Event) {
  setSettingsValue('downloadZip', (event.currentTarget as HTMLInputElement).checked);
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
  setSettingsValue('lazyLoadImages', (event.currentTarget as HTMLInputElement).checked);
  const start = document.querySelector<HTMLDivElement>('.lazyStart');
  if (getSettingsValue('lazyLoadImages')) {
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
  setSettingsValue('lazyStart', parseInt(start, 10));
}

export function changePagesPerSecond(event: Event) {
  const timer = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  setSettingsValue('throttlePageLoad', timer);
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
  setSettingsValue('zoomStep', parseInt(step, 10));
}

export function changeMinZoom(event: Event) {
  const min = (event.currentTarget as HTMLInputElement).value;
  replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
  setSettingsValue('minZoom', parseInt(min, 10));
}

export function checkHideImageControls(event: Event) {
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  setSettingsValue('hidePageControls', (event.currentTarget as HTMLInputElement).checked);
}

export function updateHeaderType(mode: HeaderMode) {
  const header = document.querySelector('#Header');
  if (!header?.classList.contains(mode)) {
    const menu = document.querySelector('#menu');
    header?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'visible');
    menu?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'hide');
    header?.classList.add(mode);
    menu?.classList.add(mode);
  }
}

function changeHeaderType(event: Event) {
  const headerType = (event.currentTarget as HTMLInputElement).value as HeaderMode;
  updateHeaderType(headerType);
  setSettingsValue('header', headerType);
}

export function changeScrollHeight(event: Event) {
  const { value } = event.currentTarget as HTMLInputElement;
  setSettingsValue('scrollHeight', parseInt(value, 10));
}

function options() {
  // Reset Reader Settings
  document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
  // Change Settings Scope
  document.querySelectorAll('#SettingsScope input[type=radio]').forEach(addEvent('change', changeSettingsScope))
  // Change Locale
  document.querySelector('#locale')?.addEventListener('change', changeLocale);
  // Image Fit width if Oversize Toggle
  document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
  // Vertical Separator Toggle
  document.querySelector('#verticalSeparator')?.addEventListener('change', checkVerticalSeparator);
  // Start/Load mode Selector
  document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
  // Show Thumbnail Toggle
  document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
  // Enable Comments Toggle
  document.querySelector('#enableComments')?.addEventListener('change', checkEnableComments);
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
  // Change Auto Scroll Percent
  document.querySelector('#scrollHeight')?.addEventListener('change', changeScrollHeight);
}

export default options;
