import { applyZoom } from '../page';
import scrollToElement from './common';

export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  applyZoom();
  scrollToElement(document.querySelector<HTMLElement>(`#Page${target}`)!);
}
export function clickThumbnail(elem: Element) {
  elem.addEventListener('click', (event) => {
    applyZoom();
    scrollToElement(
      document.querySelector<HTMLElement>(
        `#Page${(event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')
          ?.textContent}`,
      )!,
    );
  });
}
export function transformScrollToHorizontal(this: HTMLElement, event: Event) {
  if (!(event as WheelEvent).deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft +=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}
function navigation() {
  // Goto Navigation Selector
  document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
  // Thumbnail Navigation
  document.querySelectorAll('.Thumbnail')?.forEach(clickThumbnail);
  // Convert Vertical Scroll To Horizontal
  document.querySelector('#Thumbnails')?.addEventListener('wheel', transformScrollToHorizontal);
}

export default navigation;
