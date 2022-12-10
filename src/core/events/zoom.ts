import { updateSettings, useSettings } from '../settings';
import { applyZoom } from '../page';
import { ZoomMode } from '../../types';

function changeGlobalZoom(value: number | ZoomMode) {
  return () => {
    if (typeof value !== 'number') {
      useSettings().zoomMode = value;
    } else {
      useSettings().zoomMode = 'percent';
    }
    const globalZoomVal = document.querySelector('#ZoomVal');
    globalZoomVal!.textContent = Number.isInteger(value) ? `${value}%` : (value as string);
    applyZoom(value);
  };
}

function changeZoomByStep(sign: number = 1) {
  return () => {
    const globalZoom = document.querySelector<HTMLInputElement>('#Zoom');
    const ratio = parseInt(globalZoom!.value, 10) + sign * useSettings().zoomStep;
    globalZoom!.value = ratio.toString();
    globalZoom?.dispatchEvent(new Event('input', { bubbles: true }));
  };
}

function zoom() {
  // Setting for Zoom Percent
  function changeDefaultZoomMode(event: Event) {
    const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
    updateSettings({ zoomMode: target });
    changeGlobalZoom(target)();
    const percent = document.querySelector<HTMLDivElement>('.DefaultZoom');
    if (useSettings().zoomMode === 'percent') {
      percent?.classList.add('show');
    } else {
      percent?.classList.remove('show');
    }
  }

  document.querySelector('#DefaultZoomMode')?.addEventListener('change', changeDefaultZoomMode);

  // Setting for Zoom Mode Range slider
  function changeDefaultZoom(event: Event) {
    const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateSettings({ defaultZoom: target });
    changeGlobalZoom(target)();
  }

  document.querySelector('#DefaultZoom')?.addEventListener('input', changeDefaultZoom);

  // Zoom Range Slider
  function changeZoom(event: Event) {
    const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    changeGlobalZoom(target)();
    document.querySelector('#ZoomVal')!.textContent = `${target}%`;
  }

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
