import { getUserSettings, updateSettings } from '../../core/settings';
import type { ViewMode } from '../../types';
import {
  scrollToElement,
  transformScrollToHorizontal,
  transformScrollToHorizontalReverse,
} from './common';
import { changeGlobalZoom } from './zoom';

function setupFluid(mode: ViewMode) {
  const chapter = document.querySelector<HTMLElement>('#Chapter');
  document.querySelector('#Header')?.classList.remove('visible');
  document.querySelector('#menu')?.classList.remove('hide');
  changeGlobalZoom('height')();
  // document.querySelectorAll('.PageContent img').forEach((i) => i.removeAttribute('style'));
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
      document.querySelector('#Header')!.className = getUserSettings().header;
      document.querySelector('#menu')!.className = getUserSettings().header;
      changeGlobalZoom(100)();
    }
  };
}

export function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  updateViewMode(mode)();
  updateSettings({ viewMode: mode });
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
  if (getUserSettings().viewMode === 'FluidLTR' || getUserSettings().viewMode === 'FluidRTL') {
    setupFluid(getUserSettings().viewMode);
  }
}

export default viewMode;
