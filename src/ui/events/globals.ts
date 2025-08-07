import { sanitizeUrl } from '@braintree/sanitize-url';
import generateZip from '../../core/download';
import { getAppStateValue, setAppStateValue, setSettingsValue } from '../../core/settings.ts';
import { logScript } from '../../utils/tampermonkey';

import ClickEvent = JQuery.ClickEvent;

export function buttonStartDownload() {
  if (getAppStateValue('download') === 'working') return;
  logScript('Downloading Chapter');
  generateZip().catch(err => logScript('Error downloading chapter', err));
}

export function buttonGlobalHideImageControls() {
  setSettingsValue('hidePageControls', true);
}

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

export function buttonCommentsOpen() {
  setAppStateValue('panel', 'comments');
}

export function changeCommentsColor(e: ClickEvent) {
  const elem = e.currentTarget.parentElement;
  elem?.classList.toggle('light');
  elem?.classList.toggle('dark');
}
