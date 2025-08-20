import { getSettingsValue, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';
import { logScript } from '../../utils/tampermonkey.ts';

/**
 * Applies a new zoom level to the viewer. This function updates the application's reactive state,
 * which in turn causes the images to re-render with the new zoom settings.
 * @param {ZoomMode} [mode=getSettingsValue('zoomMode')] - The zoom mode to apply ('percent', 'width', or 'height').
 * @param {number} [value=getSettingsValue('zoomValue')] - The zoom value (e.g., a percentage).
 * @param {number} [index] - An optional page index. If provided, the zoom may be applied only to a specific page (logic handled by the component).
 */
export function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('zoomValue'),
  index?: number,
) {
  logScript('Zoom', mode, value, index);
  setSettingsValue('zoomMode', mode);
  setSettingsValue('zoomValue', value);
}

/**
 * Returns an event handler function that changes the global zoom settings.
 * @param {ZoomMode} mode - The zoom mode to set.
 * @param {number} [value=getSettingsValue('zoomValue')] - The zoom value to set.
 * @returns {() => void} An event handler function.
 */
export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
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
    setSettingsValue('zoomValue', ratio);
    applyZoom('percent', ratio);
  };
}

/**
 * Event handler to change and persist the default zoom mode from a settings panel.
 * @param {Event} event - The change event from the input control.
 */
export function changeDefaultZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
  applyZoom(target);
}

/**
 * Event handler to change and persist the default zoom value from a settings panel.
 * @param {Event} event - The change event from the range input.
 */
export function changeDefaultZoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
  applyZoom('percent', target);
}

/**
 * Event handler for the main zoom slider in the header to change the current zoom percentage.
 * @param {Event} event - The input event from the range slider.
 */
export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
}
