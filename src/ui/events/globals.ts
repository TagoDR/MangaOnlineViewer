import { logScript } from '../../utils/tampermonkey';
import generateZip from '../../core/download';

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

function buttonRedirectURL(event: Event) {
  const element = event.target as HTMLElement;
  const url = element.getAttribute('value') ?? element.getAttribute('href');
  if (url) {
    window.location.href = url;
  } else {
    window.history.back();
  }
}
export function buttonCommentsOpen() {
  document.getElementById('CommentsArea')?.classList.toggle('hide');
  document.querySelector('#CommentsButton')?.remove();
}

function globals() {
  document.querySelector('#download')?.addEventListener('click', buttonStartDownload);
  document.querySelector('#pageControls')?.addEventListener('click', buttonGlobalHideImageControls);
  document.querySelector('#next')?.addEventListener('click', buttonRedirectURL);
  document.querySelector('#prev')?.addEventListener('click', buttonRedirectURL);
  document.querySelector('#series')?.addEventListener('click', buttonRedirectURL);
  document.querySelector('#CommentsButton')?.addEventListener('click', buttonCommentsOpen);
}

export default globals;
