import Swal from 'sweetalert2';
import { getLocaleString, saveSettingsValue, toggleLocalSettings } from '../../core/settings';
import type { HeaderMode, LoadMode, NavbarMode } from '../../types';
import { replaceStyleSheet } from '../../utils/css';

export function changeSettingsScope(event: Event) {
  const scope = (event.currentTarget as HTMLInputElement).value;
  toggleLocalSettings(scope === 'true');
}

export function changeLocale(event: Event) {
  const locale = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('locale', locale);
}

export function changeLoadMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('loadMode', mode as LoadMode);
}

export function checkFitWidthOversize(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  saveSettingsValue('fitWidthIfOversize', checked);
}

export function changeNavbarType(event: Event) {
  const navbarType = (event.currentTarget as HTMLInputElement).value as NavbarMode;
  saveSettingsValue('navbar', navbarType);
}

export function checkEnableComments(event: Event) {
  const checked = (event.currentTarget as HTMLInputElement).checked;
  saveSettingsValue('enableComments', checked);
}

export function checkAutoDownload(event: Event) {
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
  saveSettingsValue('hidePageControls', checked);
}

export function changeHeaderType(event: Event) {
  const headerType = (event.currentTarget as HTMLInputElement).value as HeaderMode;
  saveSettingsValue('header', headerType);
}

export function changeScrollHeight(event: Event) {
  const { value } = event.currentTarget as HTMLInputElement;
  saveSettingsValue('scrollHeight', parseInt(value, 10));
}
