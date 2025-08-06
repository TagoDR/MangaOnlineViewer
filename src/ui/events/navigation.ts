import { applyZoom } from '../page';
import { scrollToElement } from './common';
import { getAppStateValue } from '../../core/settings.ts';

export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  applyZoom();
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}

export function clickThumbnail(event: Event) {
  applyZoom();
  scrollToElement(
    getAppStateValue('render')?.querySelector<HTMLElement>(
      `#Page${(event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')?.textContent}`,
    ),
  );
}
