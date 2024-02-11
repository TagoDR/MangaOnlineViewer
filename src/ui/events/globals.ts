import { logScript } from '../../utils/tampermonkey';
import generateZip from '../../core/download';
import { addEvent } from './common';

export function buttonStartDownload(event: Event) {
  const button = event.currentTarget as HTMLInputElement;
  if (button.classList.contains('loading')) {
    return;
  }

  logScript('Downloading Chapter');
  button.classList.add('loading');
  generateZip().catch((err) => logScript('Error downloading chapter', err));
}

export function buttonGlobalHideImageControls() {
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
}

function buttonRedirectURL(back: boolean = false) {
  return (event: Event) => {
    const element = event.target as HTMLElement;
    const url = element.getAttribute('value') ?? element.getAttribute('href');
    if ((event as MouseEvent).button !== 1 && !(event as MouseEvent).ctrlKey) {
      event.preventDefault();
      if (url) {
        window.location.href = url;
      } else if (back) {
        window.history.back();
      }
    }
  };
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

function globals() {
  document.querySelector('#download')?.addEventListener('click', buttonStartDownload);
  document.querySelector('#pageControls')?.addEventListener('click', buttonGlobalHideImageControls);
  document.querySelector('#next')?.addEventListener('click', buttonRedirectURL());
  document.querySelector('#prev')?.addEventListener('click', buttonRedirectURL());
  document.querySelector('#series')?.addEventListener('click', buttonRedirectURL(true));
  document.querySelector('#CommentsButton')?.addEventListener('click', buttonCommentsOpen);
  document.querySelector('#CommentsColorScheme')?.addEventListener('click', changeCommentsColor);
  document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonCommentsClose));
  document.querySelector('#Overlay')?.addEventListener('click', buttonCommentsClose);
}

export default globals;
