import { updateSettings, useSettings } from '../settings';
import { applyZoom } from '../page';
import { ZoomMode } from '../../types';

function changeGlobalZoom(value: number | ZoomMode) {
  return () => applyZoom(value);
}

function changeZoomByStep(sign: number = 1) {
  return () => applyZoom(useSettings().zoom + useSettings().zoomStep * sign);
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

  // Setting for Zoom Mode Selector
  function changeDefaultZoom(event: Event) {
    const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateSettings({ zoom: target });
    changeGlobalZoom(target)();
  }

  document.querySelector('#DefaultZoom')?.addEventListener('change', changeDefaultZoom);

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
