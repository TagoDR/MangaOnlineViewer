import {
  getAppStateValue,
  getSettingsValue,
  refreshSettings,
  saveSettingsValue,
  setAppStateValue,
  setSettingsValue,
} from '../../core/settings';
import type { Page, ZoomMode } from '../../types';
import { logScript } from '../../utils/tampermonkey.ts';

/**
 * Applies a new zoom level to the viewer. This function updates the application's reactive state,
 * which in turn causes the images to re-render with the new zoom settings.
 * @param {ZoomMode} [mode=getSettingsValue('zoomMode')] - The zoom mode to apply ('percent', 'width', or 'height').
 * @param {number} [value=getSettingsValue('zoomValue')] - The zoom value (e.g., a percentage).
 */
export function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('zoomValue'),
) {
  logScript('Zoom', mode, value);
  setSettingsValue('zoomMode', mode);
  setSettingsValue('zoomValue', value);
  if (mode === 'height') {
    // setSettingsValue('header', 'click');
    setAppStateValue('headerVisible', false);
    setAppStateValue('headroom', 'hide');
    setAppStateValue('scrollToPage', getAppStateValue('currentPage'));
  } else {
    // Revert to the user's saved preferences when leaving fluid mode
    refreshSettings('header');
  }
  const nextWidth =
    window.innerWidth +
    (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right' ? -34 : 0);
  const nextHeight = window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -34 : 0);
  const images = getAppStateValue('images');
  const manga = getAppStateValue('manga');
  const newImages: Record<number, Page> = {};
  for (let i = manga?.begin ?? 1; i < (manga?.pages ?? 1); i++) {
    const page = { ...images?.[i] };
    if (mode === 'width') {
      // Fit width
      page.width = nextWidth;
      page.height = undefined;
    } else if (mode === 'height') {
      // Fit height
      page.width = undefined;
      page.height = nextHeight;
    } else if (mode === 'percent') {
      page.width = page.naturalWidth ? page.naturalWidth * (value / 100) : undefined;
      page.height = undefined;
    }
    newImages[i] = page;
  }
  setAppStateValue('images', newImages);
}

/**
 * Returns an event handler function that changes the global zoom settings.
 * @param {ZoomMode} mode - The zoom mode to set.
 * @param {number} [value=getSettingsValue('zoomValue')] - The zoom value to set.
 * @returns {() => void} An event handler function.
 */
export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    applyZoom(mode, value);
  };
}

/**
 * Returns an event handler function that changes the zoom by a predefined step.
 * @param {number} [sign=1] - The direction of the zoom change (1 for zoom in, -1 for zoom out).
 * @returns {() => void} An event handler function.
 */
export function changeZoomByStep(sign = 1) {
  return () => {
    const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
    if (ratio > 0 && ratio < 500) applyZoom('percent', ratio);
  };
}

/**
 * Event handler to change and persist the default zoom mode from a settings panel.
 * @param {Event} event - The change event from the input control.
 */
export function changeDefaultZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
}

/**
 * Event handler to change and persist the default zoom value from a settings panel.
 * @param {Event} event - The change event from the range input.
 */
export function changeDefaultZoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
}

/**
 * Event handler for the main zoom slider in the header to change the current zoom percentage.
 * @param {Event} event - The input event from the range slider.
 */
export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
}
