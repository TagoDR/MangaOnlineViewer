import { sanitizeUrl } from '@braintree/sanitize-url';
import generateZip from '../../core/download';
import { changeSettingsValue, getAppStateValue, setAppStateValue } from '../../core/settings.ts';
import { logScript } from '../../utils/tampermonkey';

/**
 * Event handler to initiate the download of the chapter as a ZIP file.
 * It checks if a download is already in progress to prevent multiple downloads.
 */
export function buttonStartDownload() {
  if (getAppStateValue('download') === 'working') return;
  logScript('Downloading Chapter');
  generateZip().catch(err => logScript('Error downloading chapter', err));
}

/**
 * Event handler to toggle the visibility of the individual page controls globally.
 */
export function buttonGlobalHideImageControls() {
  changeSettingsValue('hidePageControls', b => !b);
}

/**
 * Event handler for clickable elements that should redirect the browser.
 * It handles normal clicks, as well as Ctrl+Click and middle-mouse clicks for opening in a new tab.
 * It also includes a special case for the 'series' link to navigate back in history.
 * @param {Event} event - The click event.
 */
export function buttonRedirectURL(event: Event) {
  const element = event.target as HTMLElement;
  const url = element.getAttribute('value') ?? element.getAttribute('href');
  if ((event as MouseEvent).button !== 1 && !(event as MouseEvent).ctrlKey) {
    if (url && url !== '#') {
      window.location.href = sanitizeUrl(url);
    } else if (element.id === 'series') {
      window.history.back();
    }
  }
}

/**
 * Event handler to open the comments panel.
 */
export function buttonCommentsOpen() {
  setAppStateValue('panel', 'comments');
}

/**
 * Event handler to toggle the color scheme of the comments panel.
 * It toggles 'light' and 'dark' classes on the parent element of the button.
 * @param {MouseEvent} e - The click event.
 */
export function changeCommentsColor(e: MouseEvent) {
  const elem = (e.currentTarget as HTMLElement).parentElement;
  elem?.classList.toggle('light');
  elem?.classList.toggle('dark');
}
