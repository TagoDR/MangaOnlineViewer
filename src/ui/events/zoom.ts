import { getSettingsValue, saveSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';
import { applyZoom } from '../page';

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('defaultZoom')) {
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

export function changeDefaultZoomMode(event: Event | React.ChangeEvent) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
  applyZoom(target);
  const percent = document.querySelector<HTMLDivElement>('.DefaultZoom');
  percent?.classList.toggle('show', target === 'percent');
}

export function changeDefaultZoom(event: Event | React.FormEvent) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('defaultZoom', target);
  applyZoom('percent', target);
}

export function changeZoom(event: Event | React.FormEvent) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
  const zoomVal = document.querySelector('#ZoomVal');
  if (zoomVal) zoomVal.textContent = `${target}%`;
}

function zoom() {
  // Setting for Zoom Percent
  document.querySelector('#DefaultZoomMode')?.addEventListener('change', changeDefaultZoomMode);
  // Setting for Zoom Mode Range slider
  document.querySelector('#DefaultZoom')?.addEventListener('input', changeDefaultZoom);
  // Zoom Range Slider
  document.querySelector('#Zoom')?.addEventListener('input', changeZoom);
  // Global Zoom In Button
  document.querySelector('#enlarge')?.addEventListener('click', changeZoomByStep());
  // Global Zoom Out Button
  document.querySelector('#reduce')?.addEventListener('click', changeZoomByStep(-1));
  // Global Zoom Restore Button
  document.querySelector('#restore')?.addEventListener('click', changeGlobalZoom('percent'));
  // Global Fit Width Button
  document.querySelector('#fitWidth')?.addEventListener('click', changeGlobalZoom('width'));
  // Global Fit height Button
  document.querySelector('#fitHeight')?.addEventListener('click', changeGlobalZoom('height'));
}

export default zoom;
