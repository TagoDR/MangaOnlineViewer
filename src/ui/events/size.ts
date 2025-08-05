import { getSettingsValue } from '../../core/settings';
import { applyZoom } from '../page';

export function buttonZoomIn(event: Event) {
  const img = (event.currentTarget as HTMLElement)
    .closest('.MangaPage')
    ?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
}

export function buttonZoomOut(event: Event) {
  const img = (event.currentTarget as HTMLElement)
    .closest('.MangaPage')
    ?.querySelector('.PageImg') as HTMLImageElement;
  const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
  applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
}

export function buttonRestoreZoom(event: Event) {
  const img = (event.currentTarget as HTMLElement)
    .closest('.MangaPage')
    ?.querySelector('.PageImg') as HTMLImageElement;
  img.removeAttribute('width');
  img.removeAttribute('style');
}

export function buttonZoomWidth(event: Event) {
  const page = (event.currentTarget as HTMLElement).closest('.MangaPage');
  const img = page?.querySelector('.PageImg') as HTMLImageElement;
  applyZoom('width', 0, `#${img.getAttribute('id')}`);
  page?.classList.toggle('DoublePage');
}

export function buttonZoomHeight(event: Event): void {
  const img = (event.currentTarget as HTMLElement)
    .closest('.MangaPage')
    ?.querySelector('.PageImg') as HTMLImageElement;
  applyZoom('height', 0, `#${img.getAttribute('id')}`);
}
