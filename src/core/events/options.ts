import Swal from 'sweetalert2';
import { resetSettings, updateSettings } from '../settings';
import { Header, LoadMode } from '../../types';
import { applyZoom } from '../page';
import { replaceStyleSheet } from '../../utils/css';

function options() {
  // Reset Reader Settings
  function buttonResetSettings() {
    resetSettings();
    Swal.fire({
      title: 'Attention',
      text: 'Settings have been reset, reload the page to take effect',
      timer: 10000,
      icon: 'info',
    });
  }
  document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);

  // Image Fit width if Oversize Toggle
  function checkFitWidthOversize(event: Event) {
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
    updateSettings({ fitWidthIfOversize: (event.currentTarget as HTMLInputElement).checked });
  }
  document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);

  // Start/Load mode Selector
  function changeLoadMode(event: Event) {
    const mode = (event.currentTarget as HTMLInputElement).value;
    updateSettings({ loadMode: mode as LoadMode });
  }
  document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);

  // Show Thumbnail Toggle
  function checkShowThumbnails(event: Event) {
    document.querySelector('#Navigation')?.classList.toggle('disabled');
    updateSettings({ showThumbnails: (event.currentTarget as HTMLInputElement).checked });
    applyZoom();
  }
  document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);

  // Download auto start toggle
  function changeAutoDownload(event: Event) {
    updateSettings({ downloadZip: (event.currentTarget as HTMLInputElement).checked });
    if ((event.currentTarget as HTMLInputElement).checked) {
      Swal.fire({
        title: 'Attention',
        text: 'Next time a chapter finish loading you will be prompted to save automatically',
        timer: 10000,
        icon: 'info',
      });
    }
  }
  document.querySelector('#downloadZip')?.addEventListener('change', changeAutoDownload);

  // Lazy load Toggle
  function checkLazyLoad(event: Event) {
    updateSettings({ lazyLoadImages: (event.currentTarget as HTMLInputElement).checked });
    if ((event.currentTarget as HTMLInputElement).checked) {
      Swal.fire({
        title: 'Warning',
        html: `Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>
               Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.`,
        icon: 'warning',
      });
    }
  }
  document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);

  // Lazy load starting point Slider
  function changeLazyStart(event: Event) {
    const start = (event.currentTarget as HTMLInputElement).value;
    updateSettings({ lazyStart: parseInt(start, 10) });
  }
  document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);

  // Images load speed Selector
  function changePagesPerSecond(event: Event) {
    const timer = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateSettings({ throttlePageLoad: timer });
  }
  document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);

  // Zoom Step Slider
  function changeZoomStep(event: Event) {
    const step = (event.currentTarget as HTMLInputElement).value;
    updateSettings({ zoomStep: parseInt(step, 10) });
  }
  document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);

  // Min Zoom Slider
  function changeMinZoom(event: Event) {
    const min = (event.currentTarget as HTMLInputElement).value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    updateSettings({ minZoom: parseInt(min, 10) });
  }
  document.querySelector('#minZoom')?.addEventListener('change', changeMinZoom);

  // Show/hide Image Controls Toggle
  function checkHideImageControls(event: Event) {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
    updateSettings({ hidePageControls: (event.currentTarget as HTMLInputElement).checked });
  }
  document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);

  // Change Header Type
  function changeHeaderType(event: Event) {
    document.querySelector('#Header')!.className = '';
    const headerType = (event.currentTarget as HTMLInputElement).value;
    document.querySelector('#Header')?.classList.add(headerType);
    updateSettings({ header: headerType as Header });
  }
  document.querySelector('#headerType')?.addEventListener('change', changeHeaderType);
}

export default options;
