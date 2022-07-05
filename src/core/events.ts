import Swal from 'sweetalert2';
import { getValueGM, logScript, setValueGM } from '../utils/tampermonkey';
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
    // $(document).off('keyup');
    // $(document).off('keydown');
    // $(document).off('keypress');
    // $(document).off('onload');
    // $(window).off('keyup');
    // $(window).off('keydown');
    // $(window).off('keypress');
    // $(window).off('onload');
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
  // Size Controls
  // Global Zoom In Button
  document.querySelector('#enlarge')?.addEventListener('click', () => {
    settings.zoom += settings.zoomStep;
    updateZoomPercent();
    applyZoom();
  });
  // Global Zoom Out Button
  document.querySelector('#reduce')?.addEventListener('click', () => {
    settings.zoom -= settings.zoomStep;
    updateZoomPercent();
    applyZoom();
  });
  // Global Zoomm Restore Button
  document.querySelector('#restore')?.addEventListener('click', () => {
    settings.zoom = 100;
    updateZoomPercent();
    applyZoom();
  });
  // Global Fit Width Button
  document.querySelector('#fitWidth')?.addEventListener('click', () => {
    settings.zoom = 1000;
    updateZoomPercent();
    applyZoom();
  });
  // Global Fit height Button
  document.querySelector('#fitHeight')?.addEventListener('click', () => {
    settings.zoom = -1000;
    updateZoomPercent();
    applyZoom();
  });
  // Zoom Step Slider
  document.querySelector('#zoomStep')?.addEventListener('change', (event) => {
    const step = (event.currentTarget as HTMLInputElement).value;
    setValueGM('ZoomStep', parseInt(step, 10));
    logScript(`ZoomStep: ${getValueGM('ZoomStep')}`);
  });
  // Min Zoom Slider
  document.querySelector('#minZoom')?.addEventListener('change', (event) => {
    const min = (event.currentTarget as HTMLInputElement).value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    setValueGM('MinZoom', parseInt(min, 10));
    logScript(`MinZoom: ${getValueGM('MinZoom')}`);
  });
  // WebComic View Mode Button
  document.querySelector('#webComic')?.addEventListener('click', () => {
    document.querySelector('#Chapter')?.classList.add('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  });
  // Fluid LTR View Mode Button
  document.querySelector('#ltrMode')?.addEventListener('click', () => {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.add('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  });
  // Fluid RTL View Mode Button
  document.querySelector('#rtlMode')?.addEventListener('click', () => {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.add('FluidRTL');
    applyZoom();
  });
  // Vertical View Mode Button
  document.querySelector('#verticalMode')?.addEventListener('click', () => {
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    applyZoom();
  });
  // Image Fit width if Oversized Toggle
  document.querySelector('#fitIfOversize')?.addEventListener('change', (event) => {
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('FitWidthIfOversize', true);
    } else {
      setValueGM('FitWidthIfOversize', false);
    }
    logScript(`fitIfOversize: ${getValueGM('FitWidthIfOversize')}`);
  });
  // Default View mode Selector
  document.querySelector('#viewMode')?.addEventListener('change', (event) => {
    const mode = (event.currentTarget as HTMLInputElement).value;
    document.querySelector('#Chapter')?.classList.remove('WebComic');
    document.querySelector('#Chapter')?.classList.remove('FluidLTR');
    document.querySelector('#Chapter')?.classList.remove('FluidRTL');
    document.querySelector('#Chapter')?.classList.add(mode);
    setValueGM('ViewMode', mode);
    logScript(`ViewMode: ${getValueGM('ViewMode')}`);
    applyZoom();
  });
  // Start/Load mode Selector
  document.querySelector('#loadMode')?.addEventListener('change', (event) => {
    const mode = (event.currentTarget as HTMLInputElement).value;
    setValueGM('LoadMode', mode);
    logScript(`MangaLoadMode: ${getValueGM('LoadMode')}`);
  });
  // Show Thumbnail Toggle
  document.querySelector('#showThumbnails')?.addEventListener('change', (event) => {
    document.querySelector('#Navigation')?.classList.toggle('disabled');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('ShowThumbnails', true);
    } else {
      setValueGM('ShowThumbnails', false);
    }
    logScript(`MangaShowThumbnails: ${getValueGM('ShowThumbnails')}`);
    applyZoom();
  });
  // Download auto start toggle
  document.querySelector('#downloadZip')?.addEventListener('change', (event) => {
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
  });
  // Download starter
  document.querySelector('#blob')?.addEventListener('click', generateZip, { once: true });
  document.querySelector('.download')?.addEventListener('click', () => {
    logScript('Downloading Chapter');
    document.querySelector('#blob')?.dispatchEvent(new Event('click'));
  });
  // Lazy load Toggle
  document.querySelector('#lazyLoadImages')?.addEventListener('change', (event) => {
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
  });
  // Lazy load starting point Slider
  document.querySelector('#lazyStart')?.addEventListener('change', (event) => {
    const start = (event.currentTarget as HTMLInputElement).value;
    setValueGM('LazyStart', start);
    logScript(`lazyStart: ${getValueGM('LazyStart')}`);
  });
  // Images load speed Selector
  document.querySelector('#PagesPerSecond')?.addEventListener('change', (event) => {
    setValueGM('Timer', parseInt((event.currentTarget as HTMLInputElement).value, 10));
    logScript(`MangaTimer: ${getValueGM('Timer')}`);
  });
  // Global Default Zoom Selector
  document.querySelector('#DefaultZoom')?.addEventListener('change', (event) => {
    settings.zoom = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateZoomPercent();
    setValueGM('Zoom', parseInt(settings.zoom.toString(), 10));
    logScript(`MangaZoom: ${getValueGM('Zoom')}`);
    applyZoom();
  });
  // Show/hide Image Controls Button
  document.querySelector('#pageControls')?.addEventListener('click', () => {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  });
  // Show/hide Image Controls Toggle
  document.querySelector('#hidePageControls')?.addEventListener('change', (event) => {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('HidePageControls', true);
    } else {
      setValueGM('HidePageControls', false);
    }
    logScript(`MangaHidePageControls: ${getValueGM('HidePageControls')}`);
  });
  // Sticky Header or MouseOverMenu Toggle
  document.querySelector('#mouseOverMenu')?.addEventListener('change', (event) => {
    document.querySelector('#Header')?.classList.toggle('mouseOverMenu');
    if ((event.currentTarget as HTMLInputElement).checked) {
      setValueGM('MouseOverMenu', true);
    } else {
      setValueGM('MouseOverMenu', false);
    }
    logScript(`MangaHidePageControls: ${getValueGM('MouseOverMenu')}`);
  });
  // Theme Control Selector
  document.querySelector('#ThemeSelector')?.addEventListener('change', (event) => {
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
  });
  // Light/Dark Custom theme Color Input
  document.querySelector('#CustomThemeHue')?.addEventListener('change', (event) => {
    const target = (event.currentTarget as HTMLInputElement).value;
    logScript(`CustomTheme: ${target}`);
    addCustomTheme(target);
    setValueGM('CustomTheme', target);
    logScript(`MangaCustomTheme: ${getValueGM('CustomTheme')}`);
  });
  // Full Custom theme Color Input
  document.querySelectorAll('.colorpicker.FullCustom')?.forEach((input) =>
    input.addEventListener('change', () => {
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
    }),
  );
  // Goto Navigation Selector
  document.querySelector('#gotoPage')?.addEventListener('change', (event) => {
    console.info(event);
    applyZoom();
    scrollToElement(
      document.querySelector(
        `#Page${(event.target as HTMLSelectElement).selectedIndex}`,
      ) as HTMLElement,
    );
  });
  // Thumbnail Navigation
  document.querySelectorAll('.Thumbnail')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      applyZoom();
      scrollToElement(
        document.querySelector(
          `#Page${
            (event.currentTarget as HTMLElement).querySelector('.ThumbnailIndex')?.textContent
          }`,
        ) as HTMLElement,
      );
    }),
  );
  // Settings Control
  document.querySelector('#settings')?.addEventListener('click', () => {
    document.querySelector('#ViewerControls')?.classList.toggle('visible');
    document.querySelector('#ViewerShortcuts')?.classList.toggle('visible');
    document.querySelector('#ImageOptions')?.classList.toggle('settingsOpen');
    document.querySelector('#Navigation')?.classList.toggle('visible');
    document.querySelector('#Header')?.classList.toggle('visible');
  });
  // Individual Page functions
  // Bookmark Page to resume reading
  document.querySelectorAll('.Bookmark')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
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
    }),
  );
  // Reload Page
  document.querySelectorAll('.Reload')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      reloadImage(img);
    }),
  );
  // ZoomIn
  document.querySelectorAll('.ZoomIn')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 + settings.zoomStep);
      applyZoom(`#${img.getAttribute('id')}`, ratio);
    }),
  );
  // ZoomOut
  document.querySelectorAll('.ZoomOut')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      const ratio = (img.width / img.naturalWidth) * (100 - settings.zoomStep);
      applyZoom(`#${img.getAttribute('id')}`, ratio);
    }),
  );
  // ZoomRestore
  document.querySelectorAll('.ZoomRestore')?.forEach((elem) =>
    elem.addEventListener('click', () => {
      document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
    }),
  );
  // ZoomWidth
  document.querySelectorAll('.ZoomWidth')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      applyZoom(`#${img.getAttribute('id')}`, 1000);
    }),
  );
  // ZoomHeight
  document.querySelectorAll('.ZoomHeight')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      applyZoom(`#${img.getAttribute('id')}`, -1000);
    }),
  );
  // Hide
  document.querySelectorAll('.Hide')?.forEach((elem) =>
    elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageContent')!;
      img.classList.toggle('hide');
    }),
  );

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
