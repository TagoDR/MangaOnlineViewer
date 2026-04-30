import { refreshSettings, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';
import { applyZoom } from './zoom.ts';

/**
 * Returns a function that updates the current view mode in the application state.
 * When switching to a 'Fluid' mode, it also enforces specific zoom and header settings for a better experience.
 * When switching away from a 'Fluid' mode, it reverts those settings to their original values.
 * @param {ViewMode} mode - The view mode to switch to.
 * @returns {() => void} A function to be used as an event handler.
 */
export function updateViewMode(mode: ViewMode) {
  return () => {
    setSettingsValue('viewMode', mode);
    if (mode.startsWith('Fluid')) {
      setSettingsValue('zoomMode', 'height');
      setSettingsValue('header', 'click');
    } else {
      // Revert to the user's saved preferences when leaving fluid mode
      refreshSettings('zoomMode');
      refreshSettings('zoomValue');
      refreshSettings('header');
    }
    applyZoom();
  };
}

/**
 * Event handler to change and persist the default view mode from the settings panel.
 * It saves the new mode and then applies it to the current session.
 * @param {Event} event - The change event from the view mode selector.
 */
export function changeDefaultViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  saveSettingsValue('viewMode', mode);
  updateViewMode(mode)();
}
