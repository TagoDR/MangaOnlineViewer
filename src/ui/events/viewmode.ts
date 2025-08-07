import { getAppStateValue, setSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';
import { applyZoom } from '../page';
import {
  scrollToElement,
  transformScrollToHorizontal,
  transformScrollToHorizontalReverse,
} from './common';

export function updateViewMode(mode: ViewMode) {
  return () => {
    const chapter = getAppStateValue('render')?.querySelector<HTMLElement>('#Chapter');
    chapter?.removeEventListener('wheel', transformScrollToHorizontal);
    chapter?.removeEventListener('wheel', transformScrollToHorizontalReverse);
    if (mode === 'FluidLTR' || mode === 'FluidRTL') {
      scrollToElement(chapter);
      setSettingsValue('zoomMode', 'height');
      applyZoom('height');
      chapter?.addEventListener(
        'wheel',
        mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
      );
    } else {
      applyZoom();
    }
  };
}

export function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  updateViewMode(mode)();
}
