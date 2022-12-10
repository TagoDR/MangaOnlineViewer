import { useSettings } from '../settings';
import { applyZoom } from '../page';

function size() {
  // ZoomIn
  function buttonZoomIn(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 + useSettings().zoomStep);
      applyZoom(ratio, `#${img.getAttribute('id')}`);
    });
  }

  document.querySelectorAll('.ZoomIn')?.forEach(buttonZoomIn);

  // ZoomOut
  function buttonZoomOut(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 - useSettings().zoomStep);
      applyZoom(ratio, `#${img.getAttribute('id')}`);
    });
  }

  document.querySelectorAll('.ZoomOut')?.forEach(buttonZoomOut);

  // ZoomRestore
  function buttonRestoreZoom(elem: Element) {
    return elem.addEventListener('click', () => {
      document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
    });
  }

  document.querySelectorAll('.ZoomRestore')?.forEach(buttonRestoreZoom);

  // ZoomWidth
  function buttonZoomWidth(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const page = (event.currentTarget as HTMLElement).parentElement?.parentElement;
      const img: HTMLImageElement = page?.querySelector('.PageImg')!;
      applyZoom('width', `#${img.getAttribute('id')}`);
      page?.classList.toggle('DoublePage');
    });
  }

  document.querySelectorAll('.ZoomWidth')?.forEach(buttonZoomWidth);

  // ZoomHeight
  function buttonZoomHeight(elem: Element): void {
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      applyZoom('height', `#${img.getAttribute('id')}`);
    });
  }

  document.querySelectorAll('.ZoomHeight')?.forEach(buttonZoomHeight);
}

export default size;
