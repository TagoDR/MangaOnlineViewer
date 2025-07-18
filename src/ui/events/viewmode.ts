import { getSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';
import { applyZoom } from '../page';
import {
  scrollToElement,
  transformScrollToHorizontal,
  transformScrollToHorizontalReverse,
} from './common';

function setupFluid(mode: ViewMode) {
  const chapter = document.querySelector<HTMLElement>('#Chapter');
  document.querySelector('#Header')?.classList.remove('visible');
  document.querySelector('#menu')?.classList.remove('hide');
  applyZoom('height');
  scrollToElement(chapter);
  chapter?.addEventListener(
    'wheel',
    mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
  );
}

export function updateViewMode(mode: ViewMode) {
  return () => {
    const chapter = document.querySelector<HTMLElement>('#Chapter');
    chapter?.classList.remove('Vertical', 'WebComic', 'FluidLTR', 'FluidRTL');
    chapter?.classList.add(mode);
    chapter?.removeEventListener('wheel', transformScrollToHorizontal);
    chapter?.removeEventListener('wheel', transformScrollToHorizontalReverse);
    if (mode === 'FluidLTR' || mode === 'FluidRTL') {
      setupFluid(mode);
    } else {
      const headerClass = getSettingsValue('header');
      const header = document.querySelector<HTMLElement>('#Header');
      if (header) header.className = headerClass;
      const menu = document.querySelector<HTMLElement>('#menu');
      if (menu) menu.className = headerClass;
      applyZoom();
    }
  };
}

export function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  updateViewMode(mode)();
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
  if (getSettingsValue('viewMode') === 'FluidLTR' || getSettingsValue('viewMode') === 'FluidRTL') {
    setupFluid(getSettingsValue('viewMode'));
  }
}

export default viewMode;
