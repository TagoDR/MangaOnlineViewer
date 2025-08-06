import { getSettingsValue, saveSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';
import { applyZoom } from '../page';

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    applyZoom(mode, value);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const globalZoom = document.querySelector<HTMLInputElement>('#Zoom');
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
  const percent = document.querySelector<HTMLDivElement>('.zoomValue');
  percent?.classList.toggle('show', target === 'percent');
}

export function changezoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
  applyZoom('percent', target);
}

export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
  const zoomVal = document.querySelector('#ZoomVal');
  if (zoomVal) zoomVal.textContent = `${target}%`;
}
