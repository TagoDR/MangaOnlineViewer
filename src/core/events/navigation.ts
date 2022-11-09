import { applyZoom } from '../page';
import { scrollToElement } from './common';

function navigation() {
  // Goto Navigation Selector
  function selectGoToPage(event: Event) {
    const target = (event.currentTarget as HTMLOptionElement).value;
    applyZoom();
    scrollToElement(document.querySelector(`#Page${target}`) as HTMLElement);
  }

  document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);

  // Thumbnail Navigation
  function clickThumbnail(elem: Element) {
    return elem.addEventListener('click', (event) => {
      applyZoom();
      scrollToElement(
        document.querySelector(
          `#Page${
            (event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')?.textContent
          }`,
        ) as HTMLElement,
      );
    });
  }

  document.querySelectorAll('.Thumbnail')?.forEach(clickThumbnail);
}

export default navigation;
