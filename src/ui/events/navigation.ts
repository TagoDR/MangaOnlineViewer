import { applyZoom } from '../page';
import { addEvent, scrollToElement, transformScrollToHorizontal } from './common';

export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  applyZoom();
  scrollToElement(document.querySelector<HTMLElement>(`#Page${target}`));
}

export function clickThumbnail(event: Event) {
  applyZoom();
  scrollToElement(
    document.querySelector<HTMLElement>(
      `#Page${(event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')?.textContent}`,
    ),
  );
}

function navigation() {
  // Goto Navigation Selector
  document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
  // Thumbnail Navigation
  document.querySelectorAll('.Thumbnail')?.forEach(addEvent('click', clickThumbnail));
  // Convert Vertical Scroll To Horizontal
  document.querySelector('#Thumbnails')?.addEventListener('wheel', transformScrollToHorizontal);
}

export default navigation;
