import { getUserSettings, updateSettings } from '../../core/settings';
import type { ViewMode } from '../../types';
import {
  scrollToElement,
  transformScrollToHorizontal,
  transformScrollToHorizontalReverse,
} from './common';
import { changeGlobalZoom } from './zoom';

export function updateViewMode(mode: string) {
  return () => {
    const chapter = document.querySelector<HTMLElement>('#Chapter');
    const header = document.querySelector('#Header');
    chapter?.classList.remove('Vertical');
    chapter?.classList.remove('WebComic');
    chapter?.classList.remove('FluidLTR');
    chapter?.classList.remove('FluidRTL');
    chapter?.classList.add(mode);
    header!.className = '';
    chapter?.removeEventListener('wheel', transformScrollToHorizontal);
    chapter?.removeEventListener('wheel', transformScrollToHorizontalReverse);
    if (mode === 'FluidLTR' || mode === 'FluidRTL') {
      header?.classList.add('none');
      changeGlobalZoom('height')();
      scrollToElement(chapter!);
      chapter?.addEventListener(
        'wheel',
        mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
      );
    } else {
      header!.className = getUserSettings().header;
      changeGlobalZoom(100)();
    }
  };
}

export function changeViewMode(event: Event) {
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
