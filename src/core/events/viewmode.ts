import { applyZoom } from '../page';
import { updateSettings } from '../settings';
import { ViewMode } from '../../types';

export function updateViewMode(mode: string) {
  return () => {
    document.querySelector('#Chapter')?.classList.remove('Vertical');
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    document.querySelector('#Chapter')?.classList.add(mode);
    applyZoom();
  };
}

function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value;
  updateViewMode(mode)();
  updateSettings({ viewMode: mode as ViewMode });
}

function viewMode() {
  // Default View mode Selector
  document.querySelector('#viewMode')?.addEventListener('change', changeViewMode);
  // WebComic View Mode Button
  document.querySelector('#webComic')?.addEventListener('click', updateViewMode('WebComic'));
  // Fluid LTR View Mode Button
  document.querySelector('#ltrMode')?.addEventListener('click', updateViewMode('FluidLTR'));
  // Fluid RTL View Mode Button
  document.querySelector('#rtlMode')?.addEventListener('click', updateViewMode('FluidRTL'));
  // Vertical View Mode Button
  document.querySelector('#verticalMode')?.addEventListener('click', updateViewMode('Vertical'));
}

export default viewMode;
