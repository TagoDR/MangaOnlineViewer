import { getSettingsValue, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', mode === 'percent' ? value : 100);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const globalZoom = getSettingsValue('zoomValue');
    const ratio = globalZoom + sign * getSettingsValue('zoomStep');
    setSettingsValue('zoomValue', ratio);
  };
}

export function changeZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
  setSettingsValue('zoomMode', target);
}

export function changeZoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
}

export function slideZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  setSettingsValue('zoomValue', target);
}

export function changeMinZoom(event: Event) {
  const min = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('minZoom', parseInt(min, 10));
}
