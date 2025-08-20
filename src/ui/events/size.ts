import { getSettingsValue, setSettingsValue } from '../../core/settings';
import { applyZoom } from './zoom.ts';

/**
 * Event handler to zoom in on an individual page by a percentage step.
 * @param {Event} event - The click event from the zoom-in button.
 */
export function buttonZoomIn(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, index);
}

/**
 * Event handler to zoom out on an individual page by a percentage step.
 * @param {Event} event - The click event from the zoom-out button.
 */
export function buttonZoomOut(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, index);
}

/**
 * Event handler to restore the zoom of an individual page to 100%.
 * @param {Event} event - The click event from the restore zoom button.
 */
export function buttonRestoreZoom(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  applyZoom('percent', 100, index);
}

/**
 * Event handler to fit an individual page to the screen width.
 * @param {Event} event - The click event from the fit-to-width button.
 */
export function buttonZoomWidth(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  applyZoom('width', 0, index);
}

/**
 * Event handler to fit an individual page to the screen height.
 * @param {Event} event - The click event from the fit-to-height button.
 */
export function buttonZoomHeight(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  setSettingsValue('zoomMode', 'height');
  applyZoom('height', 0, index);
}
