import { logScript } from '../../utils/tampermonkey';
import generateZip from '../download';

function startDownload(event: Event) {
  const button = event.currentTarget as HTMLInputElement;
  if (button.classList.contains('loading')) return;
  logScript('Downloading Chapter');
  button.classList.add('loading');
  generateZip();
}

function globalHideImageControls() {
  document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
}

function redirect(event: Event) {
  const element = event.target as HTMLElement;
  const url = element.getAttribute('value') || element.getAttribute('href');
  if (url) window.location.href = url;
}

function globals() {
  document.querySelector('#download')?.addEventListener('click', startDownload);
  document.querySelector('#pageControls')?.addEventListener('click', globalHideImageControls);
  document.querySelector('#next')?.addEventListener('click', redirect);
  document.querySelector('#prev')?.addEventListener('click', redirect);
}

export default globals;
