import Swal from 'sweetalert2';
import { getListGM, getValueGM, logScript, removeValueGM, setValueGM } from '../utils/tampermonkey';
import generateZip from './download';
import { applyZoom, reloadImage } from './page';
import { settings } from './settings';
import { addCustomTheme, addFullCustomTheme } from './themes';
import { IBookmark } from '../types';
import { replaceStyleSheet } from '../utils/css.js';

// Goto Page and Thumbnails
function scrollToElement(ele: HTMLElement | undefined) {
  window.scroll(0, ele?.offsetTop || 0);
}

// Clean key press configurations and set some when specified
function setKeyDownEvents() {
  try {
    document.onkeydown = null;
    document.onkeypress = null;
    window.onkeydown = null;
    window.onkeypress = null;
    window.onload = null;
    document.body.onload = null;
  } catch (e) {
    logScript(`Keybinds error: ${e}`);
  }

  function processKey(e: KeyboardEvent) {
    const a = e.code;
    const usedKeys = [
      'KeyW',
      'Numpad8',
      'KeyS',
      'Numpad2',
      'ArrowRight',
      'Period',
      'KeyD',
      'Numpad6',
      'ArrowLeft',
      'Comma',
      'KeyA',
      'Numpad4',
      'Equal',
      'NumpadAdd',
      'KeyE',
      'Minus',
      'NumpadSubtract',
      'KeyQ',
      'Digit9',
      'NumpadDivide',
      'KeyR',
      'Digit0',
      'NumpadMultiply',
      'KeyF',
      'Slash',
      'Numpad5',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
    ];
    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && usedKeys.some((i) => i === a)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      logScript('Keyboard:', a, ' Event:', e);
      switch (a) {
        case 'ArrowUp':
        case 'KeyW':
        case 'Numpad8':
          if (settings.zoom === -1000) {
            const next = [...document.querySelectorAll<HTMLElement>('.MangaPage')].find(
              (element) => element.offsetTop - window.scrollY > 10,
            );
            scrollToElement(next?.previousElementSibling as HTMLElement);
          } else {
            window.scrollBy({
              top: -window.innerHeight / 2,
              behavior: 'smooth',
            });
          }
          break;
        case 'ArrowDown':
        case 'KeyS':
        case 'Numpad2':
          if (settings.zoom === -1000) {
            const next = [...document.querySelectorAll<HTMLElement>('.MangaPage')].find(
              (element) => element.offsetTop - window.scrollY > 10,
            );
            scrollToElement(next as HTMLElement);
          } else {
            window.scrollBy({
              top: window.innerHeight / 2,
              behavior: 'smooth',
            });
          }
          break;
        case 'ArrowRight':
        case 'Period':
        case 'KeyD':
        case 'Numpad6':
          logScript('Click next');
          document.querySelector<HTMLAnchorElement>('#next')?.click();
          break;
        case 'ArrowLeft':
        case 'Comma':
        case 'KeyA':
        case 'Numpad4':
          document.querySelector<HTMLAnchorElement>('#prev')?.click();
          break;
        case 'Equal':
        case 'NumpadAdd':
        case 'KeyE':
          document.querySelector('#enlarge')?.dispatchEvent(new Event('click'));
          break;
        case 'Minus':
        case 'NumpadSubtract':
        case 'KeyQ':
          document.querySelector('#reduce')?.dispatchEvent(new Event('click'));
          break;
        case 'Digit9':
        case 'NumpadDivide':
        case 'KeyR':
          document.querySelector('#restore')?.dispatchEvent(new Event('click'));
          break;
        case 'Digit0':
        case 'NumpadMultiply':
        case 'KeyF':
          document.querySelector('#fitWidth')?.dispatchEvent(new Event('click'));
          break;
        case 'Slash':
        case 'Numpad5':
        case 'KeyX':
          document.querySelector('#settings')?.dispatchEvent(new Event('click'));
          break;
        case 'KeyC':
          document.querySelector('#webComic')?.dispatchEvent(new Event('click'));
          break;
        case 'KeyV':
          document.querySelector('#verticalMode')?.dispatchEvent(new Event('click'));
          break;
        case 'KeyN':
          document.querySelector('#rtlMode')?.dispatchEvent(new Event('click'));
          break;
        case 'KeyB':
          document.querySelector('#ltrMode')?.dispatchEvent(new Event('click'));
          break;
        default:
          break;
      }
      return false;
    }
    return true;
  }
  document.addEventListener('keydown', processKey);
}

function updateZoomPercent(percent: number | string = settings.zoom) {
  const zoom = document.querySelector('#ZoomPercent');
  if (zoom) {
    zoom.textContent = percent.toString();
  }
}

// Controls for the extra features added to the sites
function controls() {
  // Settings Control
  function buttonSettings() {
    document.querySelector('#ViewerControls')?.classList.toggle('visible');
    document.querySelector('#ViewerShortcuts')?.classList.toggle('visible');
    document.querySelector('#ImageOptions')?.classList.toggle('settingsOpen');
    document.querySelector('#Navigation')?.classList.toggle('visible');
    document.querySelector('#Header')?.classList.toggle('visible');
  }
  document.querySelector('#settings')?.addEventListener('click', buttonSettings);
  // Size Controls
  // Global Zoom In Button
  function buttonGlobalZoomIn() {
    settings.zoom += settings.zoomStep;
    updateZoomPercent();
    applyZoom();
  }
  document.querySelector('#enlarge')?.addEventListener('click', buttonGlobalZoomIn);
  // Global Zoom Out Button
  function buttonGlobalZoomOut() {
    settings.zoom -= settings.zoomStep;
    updateZoomPercent();
    applyZoom();
  }
  document.querySelector('#reduce')?.addEventListener('click', buttonGlobalZoomOut);
  // Global Zoom Restore Button
  function buttonGlobalRestoreZoom() {
    settings.zoom = 100;
    updateZoomPercent();
    applyZoom();
  }
  document.querySelector('#restore')?.addEventListener('click', buttonGlobalRestoreZoom);
  // Global Fit Width Button
  function buttonGlobalFitWidth() {
    settings.zoom = 1000;
    updateZoomPercent();
    applyZoom();
  }
  document.querySelector('#fitWidth')?.addEventListener('click', buttonGlobalFitWidth);
  // Global Fit height Button
  function buttonGlobalFitHeight() {
    settings.zoom = -1000;
    updateZoomPercent();
    applyZoom();
  }
  document.querySelector('#fitHeight')?.addEventListener('click', buttonGlobalFitHeight);
  // WebComic View Mode Button
  function buttonWebComicMode() {
    document.querySelector('#Chapter')?.classList.add('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  }
  document.querySelector('#webComic')?.addEventListener('click', buttonWebComicMode);
  // Fluid LTR View Mode Button
  function buttonLtrMode() {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.add('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  }
  document.querySelector('#ltrMode')?.addEventListener('click', buttonLtrMode);
  // Fluid RTL View Mode Button
  function buttonRtlMode() {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.add('FluidRTL');
    applyZoom();
  }
  document.querySelector('#rtlMode')?.addEventListener('click', buttonRtlMode);
  // Vertical View Mode Button
  function buttonVerticalMode() {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  }
  document.querySelector('#verticalMode')?.addEventListener('click', buttonVerticalMode);
  // Image Fit width if Oversize Toggle
  function checkFitWidthOversize(event: Event) {
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('FitWidthIfOversize', true);
    } else {
      setValueGM('FitWidthIfOversize', false);
    }
    logScript(`fitIfOversize: ${getValueGM('FitWidthIfOversize')}`);
  }
  document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
  // Default View mode Selector
  function changeViewMode(event: Event) {
    const mode = (event.currentTarget as HTMLInputElement).value;
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    document.querySelector('#Chapter')?.classList.add(mode);
    setValueGM('ViewMode', mode);
    logScript(`ViewMode: ${getValueGM('ViewMode')}`);
    applyZoom();
  }
  document.querySelector('#viewMode')?.addEventListener('change', changeViewMode);
  // Start/Load mode Selector
  function changeLoadMode(event: Event) {
    const mode = (event.currentTarget as HTMLInputElement).value;
    setValueGM('LoadMode', mode);
    logScript(`MangaLoadMode: ${getValueGM('LoadMode')}`);
  }
  document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
  // Show Thumbnail Toggle
  function checkShowThumbnails(event: Event) {
    document.querySelector('#Navigation')?.classList.toggle('disabled');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('ShowThumbnails', true);
    } else {
      setValueGM('ShowThumbnails', false);
    }
    logScript(`MangaShowThumbnails: ${getValueGM('ShowThumbnails')}`);
    applyZoom();
  }
  document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
  // Download auto start toggle
  function changeAutoDownload(event: Event) {
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('DownloadZip', true);
      Swal.fire({
        title: 'Attention',
        text: 'Next time a chapter finish loading you will be prompted to save automatically',
        timer: 10000,
        icon: 'info',
      });
    } else {
      setValueGM('DownloadZip', false);
    }
    logScript(`MangaDownloadZip: ${getValueGM('DownloadZip')}`);
  }
  document.querySelector('#downloadZip')?.addEventListener('change', changeAutoDownload);
  // Download starter
  document.querySelector('#blob')?.addEventListener('click', generateZip, { once: true });
  document.querySelector('.download')?.addEventListener('click', () => {
    logScript('Downloading Chapter');
    document.querySelector('#blob')?.dispatchEvent(new Event('click'));
  });
  // Lazy load Toggle
  function checkLazyLoad(event: Event) {
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('LazyLoadImages', true);
      Swal.fire({
        title: 'Warning',
        html: `Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>
               Suggestion: <span style="color:red;font-weight:bold">Disable Thumbnails</span> to save Bandwidth/Memory.`,
        icon: 'warning',
      });
    } else {
      setValueGM('LazyLoadImages', false);
    }
    logScript(`MangaLazyLoadImages: ${getValueGM('LazyLoadImages')}`);
  }
  document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);
  // Lazy load starting point Slider
  function changeLazyStart(event: Event) {
    const start = (event.currentTarget as HTMLInputElement).value;
    setValueGM('LazyStart', start);
    logScript(`lazyStart: ${getValueGM('LazyStart')}`);
  }
  document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);
  // Images load speed Selector
  function changePagesPerSecond(event: Event) {
    setValueGM('Timer', parseInt((event.currentTarget as HTMLInputElement).value, 10));
    logScript(`MangaTimer: ${getValueGM('Timer')}`);
  }
  document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);
  // Global Default Zoom Selector
  function changeDefaultZoom(event: Event) {
    settings.zoom = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateZoomPercent();
    setValueGM('Zoom', parseInt(settings.zoom.toString(), 10));
    logScript(`MangaZoom: ${getValueGM('Zoom')}`);
    applyZoom();
  }
  document.querySelector('#DefaultZoom')?.addEventListener('change', changeDefaultZoom);
  // Zoom Step Slider
  function changeZoomStep(event: Event) {
    const step = (event.currentTarget as HTMLInputElement).value;
    setValueGM('ZoomStep', parseInt(step, 10));
    logScript(`ZoomStep: ${getValueGM('ZoomStep')}`);
  }
  document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);
  // Min Zoom Slider
  function changeMinZoom(event: Event) {
    const min = (event.currentTarget as HTMLInputElement).value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    setValueGM('MinZoom', parseInt(min, 10));
    logScript(`MinZoom: ${getValueGM('MinZoom')}`);
  }
  document.querySelector('#minZoom')?.addEventListener('change', changeMinZoom);
  // Show/hide Image Controls Button
  function globalHideImageControls() {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  }
  document.querySelector('#pageControls')?.addEventListener('click', globalHideImageControls);
  // Show/hide Image Controls Toggle
  function checkHideImageControls(event: Event) {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('HidePageControls', true);
    } else {
      setValueGM('HidePageControls', false);
    }
    logScript(`MangaHidePageControls: ${getValueGM('HidePageControls')}`);
  }
  document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);
  // Sticky Header or MouseOverMenu Toggle
  function checkMouseOverMenu(event: Event) {
    document.querySelector('#Header')?.classList.toggle('mouseOverMenu');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('MouseOverMenu', true);
    } else {
      setValueGM('MouseOverMenu', false);
    }
    logScript(`MangaHidePageControls: ${getValueGM('MouseOverMenu')}`);
  }
  document.querySelector('#mouseOverMenu')?.addEventListener('change', checkMouseOverMenu);
  // Theme Control Selector
  function changeTheme(event: Event) {
    const target = (event.currentTarget as HTMLInputElement).value;
    [...document.querySelectorAll('#MangaOnlineViewer , body')].forEach((elem) => {
      elem.className = '';
      elem.classList.add((event.currentTarget as HTMLInputElement).value);
    });
    logScript('Theme', target);
    setValueGM('Theme', target);
    const ct = [...document.querySelectorAll<HTMLDivElement>('.CustomTheme')];
    if (target === 'Custom_Dark' || target === 'Custom_Light') {
      ct.forEach((elem) => {
        elem.classList.add('show');
      });
    } else {
      ct.forEach((elem) => {
        elem.classList.remove('show');
      });
    }
    const fc = [...document.querySelectorAll<HTMLDivElement>('.FullCustom')];
    if (target === 'Full_Custom') {
      fc.forEach((elem) => {
        elem.classList.add('show');
      });
    } else {
      fc.forEach((elem) => {
        elem.classList.remove('show');
      });
    }
  }
  document.querySelector('#ThemeSelector')?.addEventListener('change', changeTheme);
  // Light/Dark Custom theme Color Input
  function changeCustomTheme(event: Event) {
    const target = (event.currentTarget as HTMLInputElement).value;
    logScript(`CustomTheme: ${target}`);
    addCustomTheme(target);
    setValueGM('CustomTheme', target);
    logScript(`MangaCustomTheme: ${getValueGM('CustomTheme')}`);
  }
  document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
  // Full Custom theme Color Input
  function changeFullCustomTheme(input: Element) {
    return input.addEventListener('change', () => {
      logScript(
        'FullCustomTheme: ',
        document.querySelector<HTMLInputElement>('#CustomThemeHueBody')?.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueText')?.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueLines')?.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHuePanel')?.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueButton')?.value,
      );
      addFullCustomTheme(
        document.querySelector<HTMLInputElement>('#CustomThemeHueBody')!.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueText')!.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueLines')!.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHuePanel')!.value,
        document.querySelector<HTMLInputElement>('#CustomThemeHueButton')!.value,
      );
      setValueGM(
        'CustomThemeBody',
        document.querySelector<HTMLInputElement>('#CustomThemeHueBody')!.value,
      );
      setValueGM(
        'CustomThemeText',
        document.querySelector<HTMLInputElement>('#CustomThemeHueText')!.value,
      );
      setValueGM(
        'CustomThemeLines',
        document.querySelector<HTMLInputElement>('#CustomThemeHueLines')!.value,
      );
      setValueGM(
        'CustomThemePanel',
        document.querySelector<HTMLInputElement>('#CustomThemeHuePanel')!.value,
      );
      setValueGM(
        'CustomThemeButton',
        document.querySelector<HTMLInputElement>('#CustomThemeHueButton')!.value,
      );
    });
  }
  document.querySelectorAll('.colorpicker.FullCustom')?.forEach(changeFullCustomTheme);
  // Goto Navigation Selector
  function selectGoToPage(event: Event) {
    applyZoom();
    scrollToElement(
      document.querySelector(
        `#Page${(event.target as HTMLSelectElement).selectedIndex}`,
      ) as HTMLElement,
    );
  }
  document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
  // Thumbnail Navigation
  function clickThumbnail(elem: Element) {
    return elem.addEventListener('click', (event) => {
      applyZoom();
      scrollToElement(
        document.querySelector(
          `#Page${
            (event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')?.textContent
          }`,
        ) as HTMLElement,
      );
    });
  }
  document.querySelectorAll('.Thumbnail')?.forEach(clickThumbnail);

  // Individual Page functions
  // Bookmark Page to resume reading
  function buttonBookmark(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const num = parseInt(
        (event.currentTarget as HTMLElement).parentElement?.querySelector('.PageIndex')
          ?.textContent || '0',
        10,
      );
      const mark: IBookmark = {
        url: window.location.href,
        page: num,
        date: Date.now(),
      };
      const found = settings.bookmarks.filter((el) => el.url === mark.url).length > 0;
      settings.bookmarks = settings.bookmarks.filter((el) => el.url !== mark.url);
      if (found) {
        Swal.fire({
          title: 'Bookmark Removed',
          timer: 10000,
          icon: 'error',
        });
      } else {
        settings.bookmarks.push(mark);
        Swal.fire({
          title: 'Saved Bookmark',
          html: `Next time you open this chapter it will resume from:<h4>Page ${num}</h4>(Only <i>ONCE</i> per Bookmark, will be removed after a year unused)`,
          icon: 'success',
        });
      }
      setValueGM('Bookmarks', JSON.stringify(settings.bookmarks));
      logScript(`MangaBookmarks: ${getValueGM('Bookmarks')}`);
    });
  }
  document.querySelectorAll('.Bookmark')?.forEach(buttonBookmark);
  // Reload Page
  function buttonReloadPage(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      reloadImage(img);
    });
  }
  document.querySelectorAll('.Reload')?.forEach(buttonReloadPage);
  // ZoomIn
  function buttonZoomIn(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 + settings.zoomStep);
      applyZoom(`#${img.getAttribute('id')}`, ratio);
    });
  }
  document.querySelectorAll('.ZoomIn')?.forEach(buttonZoomIn);
  // ZoomOut
  function buttonZoomOut(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 - settings.zoomStep);
      applyZoom(`#${img.getAttribute('id')}`, ratio);
    });
  }
  document.querySelectorAll('.ZoomOut')?.forEach(buttonZoomOut);
  // ZoomRestore
  function buttonRestoreZoom(elem: Element) {
    return elem.addEventListener('click', () => {
      document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
    });
  }
  document.querySelectorAll('.ZoomRestore')?.forEach(buttonRestoreZoom);
  // ZoomWidth
  function buttonZoomWidth(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      applyZoom(`#${img.getAttribute('id')}`, 1000);
    });
  }
  document.querySelectorAll('.ZoomWidth')?.forEach(buttonZoomWidth);
  // ZoomHeight
  function buttonZoomHeight(elem: Element): void {
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      applyZoom(`#${img.getAttribute('id')}`, -1000);
    });
  }
  document.querySelectorAll('.ZoomHeight')?.forEach(buttonZoomHeight);
  // Hide
  function buttonHidePage(elem: Element): void {
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageContent')!;
      img.classList.toggle('hide');
    });
  }
  document.querySelectorAll('.Hide')?.forEach(buttonHidePage);
  // Reset Reader Settings
  function buttonResetSettings() {
    getListGM().forEach((setting) => removeValueGM(setting));
    Swal.fire({
      title: 'Attention',
      text: 'Settings have been reset, reload the page to take effect',
      timer: 10000,
      icon: 'info',
    });
  }
  document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);

  /**
   * Changes header class when scrolling up or down to show/hide it
   * @param showEnd [default 0]px from end of the screen to show header
   */
  function useScrollDirection(showEnd = 0) {
    let prevOffset = 0;
    const header = document.querySelector<HTMLDivElement>('#Header')!;
    const setScrollDirection = (classSuffix: string) => {
      header.classList.remove('scroll-end');
      header.classList.remove('scroll-hide');
      header.classList.remove('scroll-show');
      if (classSuffix) header.classList.add(`scroll-${classSuffix}`);
    };

    function toggleScrollDirection() {
      const { scrollY } = window;
      if (showEnd && scrollY + window.innerHeight + showEnd > document.body.offsetHeight) {
        setScrollDirection('end');
      } else if (scrollY > prevOffset && scrollY > 50) {
        setScrollDirection('hide');
      } else if (scrollY < prevOffset && scrollY > 50) {
        setScrollDirection('show');
      } else {
        setScrollDirection('');
      }
      prevOffset = scrollY;
    }

    window.addEventListener('scroll', toggleScrollDirection);
  }

  useScrollDirection(100);
}

export { controls, setKeyDownEvents };
