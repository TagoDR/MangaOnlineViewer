import {
  appState,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
} from '../../core/settings.ts';

/**
 * Scrolls the view to a specific element.
 * The scrolling behavior adapts based on the current view mode:
 * - In 'Fluid' modes, it scrolls the internal `#Chapter` container.
 * - In other modes, it scrolls the main window.
 * @param {HTMLElement | undefined | null} ele - The element to scroll into view.
 */
function scrollToElement(ele: HTMLElement | undefined | null) {
  if (!ele) return;
  const viewMode = getSettingsValue('viewMode');
  if (viewMode.startsWith('Fluid')) {
    const container = getAppStateValue('chapter').value;
    if (container) {
      const rect = ele.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      container.scrollBy({
        left: rect.left - containerRect.left,
        top: rect.top - containerRect.top,
        behavior: 'instant',
      });
    }
  } else {
    const rect = ele.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      behavior: 'instant',
    });
  }
}

/**
 * Listens for changes to the `scrollToPage` app state value.
 * When `scrollToPage` is set (and not undefined initially), it scrolls to the specified page.
 */
appState.listen((value, _oldValue, changedKey) => {
  if (changedKey === 'scrollToPage' && value.scrollToPage !== undefined) {
    if (value.scrollToPage <= 0) {
      window.scrollTo(0, 0);
    } else {
      scrollToElement(getAppStateValue('images')?.[value.scrollToPage]?.ref?.value);
    }
    setTimeout(() => setAppStateValue('scrollToPage', undefined), 10);
  }
});

/**
 * Event handler for the "Go to Page" dropdown selector.
 * It reads the selected page number and scrolls to the corresponding page element.
 * @param {Event} event - The change event from the `<select>` element.
 */
export function selectGoToPage(event: Event) {
  const target = (event.currentTarget as HTMLOptionElement).value;
  setAppStateValue('scrollToPage', parseInt(target, 10));
}

/**
 * Event handler for clicking a page thumbnail in the navigation bar.
 * It scrolls to the corresponding page element.
 * @param {number} target - The page number to navigate to.
 */
export function clickThumbnail(target: number) {
  setAppStateValue('scrollToPage', target);
}
