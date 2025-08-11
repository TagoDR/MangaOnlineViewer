import { refreshSettings, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';

export function updateViewMode(mode: ViewMode) {
  return () => {
    setSettingsValue('viewMode', mode);
    if (mode.startsWith('Fluid')) {
      setSettingsValue('zoomMode', 'height');
      setSettingsValue('header', 'click');
    } else {
      refreshSettings('zoomMode');
      refreshSettings('zoomValue');
      refreshSettings('header');
    }
  };
}

export function changeDefaultViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  saveSettingsValue('viewMode', mode);
  updateViewMode(mode)();
}
