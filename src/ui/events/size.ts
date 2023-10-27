import { getUserSettings } from '../../core/settings';
import { applyZoom } from '../page';

export function buttonZoomIn(elem: Element) {
  elem.addEventListener('click', (event) => {
    const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
      '.PageImg',
    ) as HTMLImageElement;
    const ratio = (img.width / img.naturalWidth) * (100 + getUserSettings().zoomStep);
    applyZoom(ratio, `#${img.getAttribute('id')}`);
  });
}
export function buttonZoomOut(elem: Element) {
  elem.addEventListener('click', (event) => {
    const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
      '.PageImg',
    ) as HTMLImageElement;
    const ratio = (img.width / img.naturalWidth) * (100 - getUserSettings().zoomStep);
    applyZoom(ratio, `#${img.getAttribute('id')}`);
  });
}
export function buttonRestoreZoom(elem: Element) {
  elem.addEventListener('click', () => {
    document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
  });
}
export function buttonZoomWidth(elem: Element) {
  elem.addEventListener('click', (event) => {
    const page = (event.currentTarget as HTMLElement).parentElement?.parentElement;
    const img = page?.querySelector('.PageImg') as HTMLImageElement;
    applyZoom('width', `#${img.getAttribute('id')}`);
    page?.classList.toggle('DoublePage');
  });
}
export function buttonZoomHeight(elem: Element): void {
  elem.addEventListener('click', (event) => {
    const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
      '.PageImg',
    ) as HTMLImageElement;
    applyZoom('height', `#${img.getAttribute('id')}`);
  });
}
function size() {
  // ZoomIn
  document.querySelectorAll('.ZoomIn')?.forEach(buttonZoomIn);
  // ZoomOut
  document.querySelectorAll('.ZoomOut')?.forEach(buttonZoomOut);
  // ZoomRestore
  document.querySelectorAll('.ZoomRestore')?.forEach(buttonRestoreZoom);
  // ZoomWidth
  document.querySelectorAll('.ZoomWidth')?.forEach(buttonZoomWidth);
  // ZoomHeight
  document.querySelectorAll('.ZoomHeight')?.forEach(buttonZoomHeight);
}

export default size;
