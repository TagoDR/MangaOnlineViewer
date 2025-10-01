import {
  changeSettingsValue,
  getLocaleString,
  saveSettingsValue,
  toggleLocalSettings,
} from '../../core/settings';
import type { HeaderMode, LoadMode, NavbarMode } from '../../types';
import { replaceStyleSheet } from '../../utils/css';

import { showInfoDialog } from '../components/Dialog.ts';

/**
 * Event handler to change the settings scope between global and site-specific (local).
 * @param {Event} event - The change event from the scope selector.
 */
export function changeSettingsScope(event: Event) {
  const scope = (event.currentTarget as HTMLInputElement).value;
  toggleLocalSettings(scope === 'true');
}

/**
 * Event handler to change and save the application's language.
 * @param {Event} event - The change event from the locale selector.
 */
export function changeLocale(event: Event) {
  const locale = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('locale', locale);
}

/**
 * Event handler to change and save the default load mode for the viewer.
 * @param {Event} event - The change event from the load mode selector.
 */
export function changeLoadMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('loadMode', mode as LoadMode);
}

/**
 * Event handler to toggle and save the 'fit width if oversized' setting.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkFitWidthOversize(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('fitWidthIfOversize', checked);
}

/**
 * Event handler to change and save the navigation bar's type/position.
 * @param {Event} event - The change event from the navbar type selector.
 */
export function changeNavbarType(event: Event) {
  const navbarType = (event.currentTarget as HTMLInputElement).value as NavbarMode;
  saveSettingsValue('navbar', navbarType);
}

/**
 * Event handler to toggle and save the 'enable comments' setting.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkEnableComments(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('enableComments', checked);
}

/**
 * Event handler to toggle and save the 'enable pagination' setting.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkPagination(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('pagination', checked);
}

/**
 * Event handler to toggle and save the 'auto download' setting. Shows an informational popup when enabled.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkAutoDownload(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('downloadZip', checked);
  if (checked) {
    showInfoDialog({
      title: getLocaleString('ATTENTION'),
      html: getLocaleString('AUTO_DOWNLOAD'),
      timer: 10000,
      icon: 'info',
    });
  }
}

/**
 * Event handler to toggle and save the 'lazy load' setting. Shows a warning popup when enabled.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkLazyLoad(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('lazyLoadImages', checked);
  if (checked) {
    showInfoDialog({
      title: getLocaleString('WARNING'),
      html: getLocaleString('LAZY_LOAD'),
      icon: 'warning',
    });
  }
}

/**
 * Event handler to change and save the lazy load starting page.
 * @param {Event} event - The change event from the range input.
 */
export function changeLazyStart(event: Event) {
  const start = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('lazyStart', parseInt(start, 10));
}

/**
 * Event handler to change and save the page loading speed (throttle timer). Shows a warning for high speeds.
 * @param {Event} event - The change event from the range input.
 */
export function changePagesPerSecond(event: Event) {
  const timer = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('throttlePageLoad', timer);
  if (timer < 100) {
    showInfoDialog({
      title: getLocaleString('SPEED_WARNING'),
      html: getLocaleString('SPEED_WARNING_MESSAGE'),
      icon: 'warning',
    });
  }
}

/**
 * Event handler to change and save the zoom step value.
 * @param {Event} event - The change event from the range input.
 */
export function changeZoomStep(event: Event) {
  const step = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('zoomStep', parseInt(step, 10));
}

/**
 * Event handler to change and save the minimum zoom value. Also injects a stylesheet to apply the rule.
 * @param {Event} event - The input event from the range input.
 */
export function changeMinZoom(event: Event) {
  const min = (event.currentTarget as HTMLInputElement).value;
  replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
  saveSettingsValue('minZoom', parseInt(min, 10));
}

/**
 * Event handler to toggle and save the 'hide page controls' setting.
 * @param {Event} event - The change event from the checkbox.
 */
export function checkHideImageControls(event: CustomEvent) {
  const checked = event.detail.checked;
  saveSettingsValue('hidePageControls', checked);
}

/**
 * Event handler to change and save the header behavior type.
 * @param {Event} event - The change event from the header type selector.
 */
export function changeHeaderType(event: Event) {
  const headerType = (event.currentTarget as HTMLInputElement).value as HeaderMode;
  saveSettingsValue('header', headerType);
}

/**
 * Event handler to change and save the auto-scroll speed.
 * @param {Event} event - The change event from the range input.
 */
export function changeScrollHeight(event: Event) {
  const { value } = event.currentTarget as HTMLInputElement;
  saveSettingsValue('scrollHeight', parseInt(value, 10));
}

export function changeAutoScrollSpeed(sign: 1 | -1) {
  changeSettingsValue('scrollHeight', v => {
    const speed = v + sign * 25;
    if (speed <= 0) return 0;
    const max = Math.ceil(window.innerHeight / 200) * 100;
    if (speed >= max) return max;
    return speed;
  });
}
