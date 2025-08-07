import {
  getAppStateValue,
  getSettingsValue,
  saveSettingsValue,
  setSettingsValue,
} from '../../core/settings';
import type { ZoomMode } from '../../types';
import { applyZoom } from '../page';

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    applyZoom(mode, value);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const globalZoom = getAppStateValue('render')?.querySelector<HTMLInputElement>('#Zoom');
    if (globalZoom) {
      const ratio = parseInt(globalZoom.value, 10) + sign * getSettingsValue('zoomStep');
      globalZoom.value = ratio.toString();
      globalZoom.dispatchEvent(new Event('input', { bubbles: true }));
    }
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
