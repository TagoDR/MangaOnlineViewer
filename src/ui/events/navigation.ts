import { getAppStateValue } from '../../core/settings.ts';
import { scrollToElement } from './common';

export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}

export function clickThumbnail(target: number) {
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}
