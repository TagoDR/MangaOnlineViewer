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
