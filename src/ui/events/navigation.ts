import { applyZoom } from '../page';
import scrollToElement from './common';

function navigation() {
  // Goto Navigation Selector
  function selectGoToPage(event: Event) {
    const target = (event.currentTarget as HTMLOptionElement).value;
    applyZoom();
    scrollToElement(document.querySelector<HTMLElement>(`#Page${target}`)!);
  }

  document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);

  // Thumbnail Navigation
  function clickThumbnail(elem: Element) {
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

  document.querySelectorAll('.Thumbnail')?.forEach(clickThumbnail);

  function transformScrollToHorizontal(this: HTMLElement, event: Event) {
    if (!(event as WheelEvent).deltaY) {
      return;
    }

    (event.currentTarget as Element).scrollLeft +=
      (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
    event.preventDefault();
  }

  document.querySelector('#Thumbnails')?.addEventListener('wheel', transformScrollToHorizontal);
}

export default navigation;
