import { applyZoom } from '../page.ts';
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
}

export default navigation;
