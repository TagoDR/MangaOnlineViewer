import { logScript } from '../../utils/tampermonkey';
import generateZip from '../download';

function globals() {
  // Download starter
  function startDownload(event: Event) {
    const button = event.currentTarget as HTMLInputElement;
    logScript('Downloading Chapter');
    button.disabled = true;
    button.classList.add('loading');
    generateZip();
  }
  document.querySelector('.download')?.addEventListener('click', startDownload);

  // Show/hide Image Controls Button
  function globalHideImageControls() {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  }
  document.querySelector('#pageControls')?.addEventListener('click', globalHideImageControls);
}

export default globals;
