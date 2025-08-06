import { sanitizeUrl } from '@braintree/sanitize-url';
import generateZip from '../../core/download';
import { logScript } from '../../utils/tampermonkey';
import { getAppStateValue, setAppStateValue, setSettingsValue } from '../../core/settings.ts';

export function buttonStartDownload(event: Event) {
  const button = event.currentTarget as HTMLInputElement;
  if (button.classList.contains('loading')) {
    return;
  }

  logScript('Downloading Chapter');
  button.classList.add('loading');
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

export function changeCommentsColor() {
  const elem = getAppStateValue('render')?.querySelector('#CommentsArea');
  elem?.classList.toggle('light');
  elem?.classList.toggle('dark');
}
