import { sanitizeUrl } from '@braintree/sanitize-url';
import generateZip from '../../core/download';
import { getSettingsValue, setAppStateValue, setSettingsValue } from '../../core/settings.ts';
import { logScript } from '../../utils/tampermonkey';

export function buttonStartDownload() {
  setAppStateValue('download', 'working');
  logScript('Downloading Chapter');
  generateZip()
    .then(() => logScript('Downloading Successful'))
    .catch(err => logScript('Error downloading chapter', err))
    .finally(() => setAppStateValue('download', 'available'));
}

export function buttonGlobalHideImageControls() {
  setSettingsValue('hidePageControls', !getSettingsValue('hidePageControls'));
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
