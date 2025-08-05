import { applyZoom } from '../page';
import { scrollToElement } from './common';

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
