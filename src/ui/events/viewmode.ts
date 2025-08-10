import { setSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';
import { applyZoom } from './zoom.ts';

export function updateViewMode(mode: ViewMode) {
  return () => {
    if (mode.startsWith('Fluid')) {
      setSettingsValue('viewMode', mode);
      setSettingsValue('zoomMode', 'height');
      setSettingsValue('header', 'click');
    } else {
      applyZoom();
    }
  };
}

export function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  updateViewMode(mode)();
}
