import { getAppStateValue } from '../../core/settings.ts';
import { scrollToElement } from './common';

export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}

export function clickThumbnail(event: Event) {
  const target = parseInt((event.currentTarget as HTMLElement).id.replace('ThumbnailImg', ''), 10);
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}
