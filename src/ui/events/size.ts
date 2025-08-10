import { getSettingsValue } from '../../core/settings';
import { applyZoom } from './zoom.ts';

export function buttonZoomIn(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, index);
}

export function buttonZoomOut(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const img = button.closest('.MangaPage')?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, index);
}

export function buttonRestoreZoom(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  applyZoom('percent', 100, index);
}

export function buttonZoomWidth(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  applyZoom('width', 0, index);
}

export function buttonZoomHeight(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  applyZoom('height', 0, index);
}
