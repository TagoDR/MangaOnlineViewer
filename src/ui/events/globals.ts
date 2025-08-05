import { sanitizeUrl } from '@braintree/sanitize-url';
import generateZip from '../../core/download';
import { logScript } from '../../utils/tampermonkey';

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
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
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
  document.querySelector('#CommentsPanel')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonCommentsClose() {
  document.querySelector('#CommentsPanel')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function changeCommentsColor() {
  const elem = document.querySelector('#CommentsArea');
  elem?.classList.toggle('light');
  elem?.classList.toggle('dark');
}
