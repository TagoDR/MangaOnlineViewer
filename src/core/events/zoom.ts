import { updateSettings, useSettings } from '../settings';
import { applyZoom } from '../page';

export function updateZoomPercent(percent: number | string = useSettings().zoom) {
  const target = document.querySelector('#ZoomPercent');
  if (target) {
    target.textContent = percent.toString();
  }
}

function changeGlobalZoom(value: number) {
  return () => {
    useSettings().zoom = value;
    updateZoomPercent();
    applyZoom();
  };
}

function changeZoomByStep(sign: number = 1) {
  return () => {
    useSettings().zoom = useSettings().zoom + useSettings().zoomStep * sign;
    updateZoomPercent();
    applyZoom();
  };
}

function zoom() {
  // Global Default Zoom Selector
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
  document.querySelector('#fitWidth')?.addEventListener('click', changeGlobalZoom(1000));
  // Global Fit height Button
  document.querySelector('#fitHeight')?.addEventListener('click', changeGlobalZoom(-1000));
}

export default zoom;
