import { getAppStateValue } from '../../core/settings.ts';
import { scrollToElement } from './common';

/**
 * Event handler for the "Go to Page" dropdown selector.
 * It reads the selected page number and scrolls to the corresponding page element.
 * @param {Event} event - The change event from the `<select>` element.
 */
export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}

/**
 * Event handler for clicking a page thumbnail in the navigation bar.
 * It scrolls to the corresponding page element.
 * @param {number} target - The page number to navigate to.
 */
export function clickThumbnail(target: number) {
  scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${target}`));
}
