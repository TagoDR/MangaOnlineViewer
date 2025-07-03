import Swal from 'sweetalert2';
import {
  getLocaleString,
  getSettingsValue,
  resetSettings,
  saveSettingsValue,
  toggleLocalSettings,
} from '../../core/settings';
import type { HeaderMode, LoadMode } from '../../types';
import { replaceStyleSheet } from '../../utils/css';
import { applyZoom } from '../page';
import { addEvent } from './common';
import { buttonSettingsOpen } from './panels';

export function buttonResetSettings() {
  resetSettings();
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.removeAttribute('locale');
  buttonSettingsOpen();
}

export function changeSettingsScope(event: Event) {
  const scope = event.currentTarget as HTMLInputElement;
  toggleLocalSettings(scope.value === 'true');
  buttonSettingsOpen();
}

export function changeLocale(event: Event) {
  const locale = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('locale', locale);
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.setAttribute('locale', locale);
  elem?.dispatchEvent(new Event('hydrate'));
  buttonSettingsOpen();
}

export function changeLoadMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('loadMode', mode as LoadMode);
}

export function checkFitWidthOversize(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize', checked);
  saveSettingsValue('fitWidthIfOversize', checked);
}

export function checkVerticalSeparator(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  document.querySelector('#Chapter')?.classList.toggle('separator', checked);
  saveSettingsValue('verticalSeparator', checked);
}

export function checkShowThumbnails(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  document.querySelector('#Navigation')?.classList.toggle('disabled', !checked);
  saveSettingsValue('showThumbnails', checked);
  applyZoom();
}

export function checkEnableComments(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  document.querySelector('#CommentsButton')?.classList.toggle('disabled', !checked);
  saveSettingsValue('enableComments', checked);
  applyZoom();
}

export function changeAutoDownload(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  saveSettingsValue('downloadZip', checked);
  if (checked) {
    Swal.fire({
      title: getLocaleString('ATTENTION'),
      text: getLocaleString('AUTO_DOWNLOAD'),
      timer: 10000,
      icon: 'info',
    });
  }
}

export function checkLazyLoad(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  saveSettingsValue('lazyLoadImages', checked);
  const start = document.querySelector<HTMLDivElement>('.lazyStart');
  start?.classList.toggle('show', getSettingsValue('lazyLoadImages'));
  if (checked) {
    Swal.fire({
      title: getLocaleString('WARNING'),
      html: getLocaleString('LAZY_LOAD'),
      icon: 'warning',
    });
  }
}

export function changeLazyStart(event: Event) {
  const start = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('lazyStart', parseInt(start, 10));
}

export function changePagesPerSecond(event: Event) {
  const timer = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('throttlePageLoad', timer);
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
  saveSettingsValue('zoomStep', parseInt(step, 10));
}

export function changeMinZoom(event: Event) {
  const min = (event.currentTarget as HTMLInputElement).value;
  replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
  saveSettingsValue('minZoom', parseInt(min, 10));
}

export function checkHideImageControls(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls', checked);
  saveSettingsValue('hidePageControls', checked);
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
  saveSettingsValue('header', headerType);
}

export function changeScrollHeight(event: Event) {
  const { value } = event.currentTarget as HTMLInputElement;
  saveSettingsValue('scrollHeight', parseInt(value, 10));
}

function options() {
  // Reset Reader Settings
  document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
  // Change Settings Scope
  document
    .querySelectorAll('#SettingsScope input[type=radio]')
    .forEach(addEvent('change', changeSettingsScope));
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
