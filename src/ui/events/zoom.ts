import { getSettingsValue, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';
import { logScript } from '../../utils/tampermonkey.ts';

// After pages load apply default Zoom
export function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('zoomValue'),
  index?: number,
) {
  logScript('Zoom', mode, value, index);
  setSettingsValue('zoomMode', mode);
  setSettingsValue('zoomValue', value);
}

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    applyZoom(mode, value);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
    setSettingsValue('zoomValue', ratio);
    applyZoom('percent', ratio);
  };
}

export function changeDefaultZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
  applyZoom(target);
}

export function changeDefaultZoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
  applyZoom('percent', target);
}

export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
}
