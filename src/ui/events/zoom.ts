import { getSettingsValue, setSettingsValue } from '../../core/settings';
import { applyZoom } from '../page';
import type { ZoomMode } from '../../types';
import { updateHeaderType } from './options';

export function changeGlobalZoom(value: number | ZoomMode) {
  return () => {
    if (typeof value !== 'number') {
      setSettingsValue('zoomMode', value);
    } else {
      setSettingsValue('zoomMode', 'percent');
    }
    if (value === 'height') {
      updateHeaderType('click');
    } else {
      updateHeaderType(getSettingsValue('header'));
    }

    const globalZoomVal = document.querySelector('#ZoomVal');
    if (Number.isInteger(value)) {
      globalZoomVal!.textContent = `${value}%`;
      document.querySelector<HTMLInputElement>('#Zoom')!.value = value.toString();
    } else {
      globalZoomVal!.textContent = value as string;
    }
    applyZoom(value);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const globalZoom = document.querySelector<HTMLInputElement>('#Zoom');
    const ratio = parseInt(globalZoom!.value, 10) + sign * getSettingsValue('zoomStep');
    globalZoom!.value = ratio.toString();
    globalZoom?.dispatchEvent(new Event('input', { bubbles: true }));
  };
}

export function changeDefaultZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  setSettingsValue('zoomMode', target);
  changeGlobalZoom(target)();
  const percent = document.querySelector<HTMLDivElement>('.DefaultZoom');
  if (getSettingsValue('zoomMode') === 'percent') {
    percent?.classList.add('show');
  } else {
    percent?.classList.remove('show');
  }
}

export function changeDefaultZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  setSettingsValue('defaultZoom', target);
  changeGlobalZoom(target)();
}

export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  changeGlobalZoom(target)();
  document.querySelector('#ZoomVal')!.textContent = `${target}%`;
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
  document.querySelector('#restore')?.addEventListener('click', changeGlobalZoom(100));
  // Global Fit Width Button
  document.querySelector('#fitWidth')?.addEventListener('click', changeGlobalZoom('width'));
  // Global Fit height Button
  document.querySelector('#fitHeight')?.addEventListener('click', changeGlobalZoom('height'));
}

export default zoom;
