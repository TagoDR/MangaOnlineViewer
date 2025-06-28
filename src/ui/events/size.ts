import { getSettingsValue } from '../../core/settings';
import { applyZoom } from '../page';
import { addEvent } from './common';

export function buttonZoomIn(event: Event) {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
    '.PageImg',
  ) as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
  applyZoom(ratio, `#${img.getAttribute('id')}`);
}

export function buttonZoomOut(event: Event) {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
    '.PageImg',
  ) as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
  applyZoom(ratio, `#${img.getAttribute('id')}`);
}

export function buttonRestoreZoom() {
  document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
}

export function buttonZoomWidth(event: Event) {
  const page = (event.currentTarget as HTMLElement).parentElement?.parentElement;
  const img = page?.querySelector('.PageImg') as HTMLImageElement;
  applyZoom('width', `#${img.getAttribute('id')}`);
  page?.classList.toggle('DoublePage');
}

export function buttonZoomHeight(event: Event): void {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
    '.PageImg',
  ) as HTMLImageElement;
  applyZoom('height', `#${img.getAttribute('id')}`);
}

function size() {
  // ZoomIn
  document.querySelectorAll('.ZoomIn')?.forEach(addEvent('click', buttonZoomIn));
  // ZoomOut
  document.querySelectorAll('.ZoomOut')?.forEach(addEvent('click', buttonZoomOut));
  // ZoomRestore
  document.querySelectorAll('.ZoomRestore')?.forEach(addEvent('click', buttonRestoreZoom));
  // ZoomWidth
  document.querySelectorAll('.ZoomWidth')?.forEach(addEvent('click', buttonZoomWidth));
  // ZoomHeight
  document.querySelectorAll('.ZoomHeight')?.forEach(addEvent('click', buttonZoomHeight));
}

export default size;
