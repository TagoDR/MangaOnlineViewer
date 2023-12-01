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
    const ele = document.querySelector<HTMLElement>('#Chapter');
    ele?.classList.remove('Vertical');
    ele?.classList.remove('WebComic');
    ele?.classList.remove('FluidLTR');
    ele?.classList.remove('FluidRTL');
    ele?.classList.add(mode);
    document.querySelector('#Header')!.className = '';
    ele?.removeEventListener('wheel', transformScrollToHorizontal);
    ele?.removeEventListener('wheel', transformScrollToHorizontalReverse);
    if (mode === 'FluidLTR' || mode === 'FluidRTL') {
      document.querySelector('#Header')?.classList.add('none');
      changeGlobalZoom('height')();
      scrollToElement(ele!);
      ele?.addEventListener(
        'wheel',
        mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
      );
    } else {
      document.querySelector('#Header')!.className = getUserSettings().header;
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
