import { getValueGM, logScript, setValueGM } from './browser';
import generateZip from './download';
import { applyZoom, reloadImage } from './page';
import { settings } from './settings';
import { addCustomTheme } from './themes';

// Goto Page and Thumbnails
function scrollToElement(ele) {
  $(W).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
}

// Clean key press configurations and set some when specified
function setKeyDownEvents() {
  try {
    $(document).off('keyup');
    $(document).off('keydown');
    $(document).off('keypress');
    $(document).off('onload');
    $(W).off('keyup');
    $(W).off('keydown');
    $(W).off('keypress');
    $(W).off('onload');
    document.onkeydown = null;
    document.onkeypress = null;
    W.onkeydown = null;
    W.onkeypress = null;
    W.onload = null;
    document.body.onload = null;
  } catch (e) {
    logScript(`Keybinds error: ${e}`);
  }

  function processKey(e) {
    const a = e.originalEvent.code;
    if (!e.originalEvent.ctrlKey
      && !e.originalEvent.altKey
      && !e.originalEvent.shiftKey
      && !e.originalEvent.metaKey
      && $.inArray(a,
        [
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
        ]) !== -1) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      switch (a) {
        case 'ArrowUp':
        case 'KeyW':
        case 'Numpad8':
          if (settings.Zoom === -1000) {
            const next = $('.MangaPage').get().map((item) => $(item).offset().top - $(window)
              .scrollTop()).findIndex((element) => element > 10);
            scrollToElement($('.MangaPage').eq(next - 2));
          } else {
            window.scrollBy({
              top: -$(window).height() / 2,
              behavior: 'smooth',
            });
          }
          break;
        case 'ArrowDown':
        case 'KeyS':
        case 'Numpad2':
          if (settings.Zoom === -1000) {
            const next = $('.MangaPage').get().map((item) => $(item).offset().top - $(window)
              .scrollTop()).findIndex((element) => element > 10);
            scrollToElement($('.MangaPage').eq(next));
          } else {
            window.scrollBy({
              top: $(window).height() / 2,
              behavior: 'smooth',
            });
          }
          break;
        case 'ArrowRight':
        case 'Period':
        case 'KeyD':
        case 'Numpad6':
          $('.ChapterControl:first .next')[0].click();
          break;
        case 'ArrowLeft':
        case 'Comma':
        case 'KeyA':
        case 'Numpad4':
          $('.ChapterControl:first .prev')[0].click();
          break;
        case 'Equal':
        case 'NumpadAdd':
        case 'KeyE':
          $('#enlarge').click();
          break;
        case 'Minus':
        case 'NumpadSubtract':
        case 'KeyQ':
          $('#reduce').click();
          break;
        case 'Digit9':
        case 'NumpadDivide':
        case 'KeyR':
          $('#restore').click();
          break;
        case 'Digit0':
        case 'NumpadMultiply':
        case 'KeyF':
          $('#fitWidth').click();
          break;
        case 'Slash':
        case 'Numpad5':
        case 'KeyX':
          $('#settings').click();
          break;
        default:
          break;
      }
      return false;
    }
    return true;
  }

  $(document).keydown(processKey);
}

// Controls for the extra features added to the sites
function controls() {
  // Size Controls
  $('#enlarge').click(() => {
    settings.Zoom += settings.zoomStep;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#reduce').click(() => {
    settings.Zoom -= settings.zoomStep;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#restore').click(() => {
    settings.Zoom = 100;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#fitWidth').click(() => {
    settings.Zoom = 1000;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#fitHeight').click(() => {
    settings.Zoom = -1000;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#zoomStep').change((event) => {
    const step = $(event.target).val();
    setValueGM('MangaZoomStep', parseInt(step, 10));
    logScript(`zoomStep: ${getValueGM('MangaZoomStep')}`);
  });
  // WebComic View Mode
  $('#webComic').click(() => {
    $('#Chapter').addClass('WebComic')
      .removeClass('FluidLTR')
      .removeClass('FluidRTL');
    applyZoom();
  });
  // Fluid LTR View Mode
  $('#ltrMode').click(() => {
    $('#Chapter').removeClass('WebComic')
      .addClass('FluidLTR')
      .removeClass('FluidRTL');
    applyZoom();
  });
  // Fluid RTL View Mode
  $('#rtlMode').click(() => {
    $('#Chapter').removeClass('WebComic')
      .removeClass('FluidLTR')
      .addClass('FluidRTL');
    applyZoom();
  });
  // Vertical View Mode
  $('#verticalMode').click(() => {
    $('#Chapter').removeClass('WebComic')
      .removeClass('FluidLTR')
      .removeClass('FluidRTL');
    applyZoom();
  });
  $('#fitIfOversized').change((event) => {
    $('#Chapter').toggleClass('fitWidthIfOversized');
    if ($(event.target).is(':checked')) {
      setValueGM('MangaFitWidthIfOversized', true);
    } else {
      setValueGM('MangaFitWidthIfOversized', false);
    }
    logScript(`fitIfOversized: ${getValueGM('MangaFitWidthIfOversized')}`);
  });
  $('#viewMode').change((event) => {
    const mode = $(event.target).val();
    $('#Chapter').removeClass('WebComic')
      .removeClass('FluidLTR')
      .removeClass('FluidRTL')
      .addClass(mode);
    setValueGM('MangaViewMode', mode);
    logScript(`ViewMode: ${getValueGM('MangaViewMode')}`);
    applyZoom();
  });
  $('#loadMode').change((event) => {
    const mode = $(event.target).val();
    setValueGM('MangaLoadMode', mode);
    logScript(`MangaLoadMode: ${getValueGM('MangaLoadMode')}`);
  });
  $('#showThumbnails').change((event) => {
    $('#Navigation').toggleClass('disabled');
    if ($(event.target).is(':checked')) {
      setValueGM('MangaShowThumbnails', true);
    } else {
      setValueGM('MangaShowThumbnails', false);
    }
    logScript(`MangaShowThumbnails: ${getValueGM('MangaShowThumbnails')}`);
    applyZoom();
  });
  // Download
  $('#downloadZip').change((event) => {
    if ($(event.target).is(':checked')) {
      setValueGM('MangaDownloadZip', true);
      Swal.fire({
        title: 'Attention',
        text: 'Next time a chapter finish loading you will be prompted to save automatically',
        timer: 10000,
        icon: 'info',
      });
    } else {
      setValueGM('MangaDownloadZip', false);
    }
    logScript(`MangaDownloadZip: ${getValueGM('MangaDownloadZip')}`);
  });
  $('#blob').one('click', generateZip);
  $('.download').click(() => {
    logScript('Downloading Chapter');
    $('#blob')[0].click();
  });
  $('#lazyLoadImages').change((event) => {
    if ($(event.target).is(':checked')) {
      setValueGM('MangaLazyLoadImages', true);
      Swal.fire({
        title: 'Warning',
        html: 'Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>'
          + 'Suggestion: <span style="color:red;font:bold">Disable Thumbnails</span> to save Bandwidth/Memory.',
        icon: 'warning',
      });
    } else {
      setValueGM('MangaLazyLoadImages', false);
    }
    logScript(`MangaLazyLoadImages: ${getValueGM('MangaLazyLoadImages')}`);
  });
  $('#lazyStart').change((event) => {
    const start = $(event.target).val();
    setValueGM('MangaLazyStart', start);
    logScript(`lazyStart: ${getValueGM('MangaLazyStart')}`);
  });
  $('#PagesPerSecond').change((event) => {
    setValueGM('MangaTimer', parseInt($(event.target).val(), 10));
    logScript(`MangaTimer: ${getValueGM('MangaTimer')}`);
  });
  $('#DefaultZoom').change((event) => {
    settings.Zoom = parseInt($(event.target).val(), 10);
    $('#Zoom b').html(settings.Zoom);
    setValueGM('MangaZoom', parseInt(settings.Zoom, 10));
    logScript(`MangaZoom: ${getValueGM('MangaZoom')}`);
    applyZoom();
  });
  // Toggle Controls
  $('#pageControls').click(() => {
    $('#MangaOnlineViewer').toggleClass('hideControls');
  });
  $('#hidePageControls').change((event) => {
    $('#MangaOnlineViewer').toggleClass('hideControls');
    if ($(event.target).is(':checked')) {
      setValueGM('MangaHidePageControls', true);
    } else {
      setValueGM('MangaHidePageControls', false);
    }
    logScript(`MangaHidePageControls: ${getValueGM('MangaHidePageControls')}`);
  });
  // Theme Control
  $('#ThemeSelector').change((event) => {
    const target = $(event.target);
    $('#MangaOnlineViewer , body').removeClass().addClass(target.val());
    logScript('MangaTheme', target.val());
    setValueGM('MangaTheme', target.val());
    logScript(`MangaTheme: ${getValueGM('MangaTheme')}`);
    if (target.val() === 'Custom_Dark' || target.val() === 'Custom_Light') {
      $('#CustomThemeHue').show();
    } else {
      $('#CustomThemeHue').hide();
    }
  });
  try {
    jscolor(document.getElementById('CustomThemeHue'));
  } catch (e) {
    logScript(e);
  }
  $('#CustomThemeHue').change((event) => {
    const target = $(event.target).val();
    logScript(`CustomTheme: #${target}`);
    $('style[title="Custom_Light"], style[title="Custom_Dark"]').remove();
    $('head').append(addCustomTheme(target));
    setValueGM('MangaCustomTheme', target);
    logScript(`MangaCustomTheme: ${getValueGM('MangaCustomTheme')}`);
  });

  $('#gotoPage').bind('change', (event) => {
    applyZoom();
    scrollToElement($(`#Page${$(event.target).val()}`));
  });
  $('.Thumbnail').bind('click', (event) => {
    applyZoom();
    scrollToElement($(`#Page${$(event.currentTarget).find('span').html()}`));
  });
  // Settings Control
  $('#settings').click(() => {
    $('#ViewerControls').slideToggle();
    $('#ViewerShortcuts').slideToggle();
    $('#ImageOptions').toggleClass('settingsOpen');
    $('#Navigation').toggleClass('visible');
  });
  // Individual Page functions
  // Bookmark Page to resume reading
  $('.Bookmark').click((event) => {
    const num = parseInt($(event.target).parents('.MangaPage').find('.PageFunctions span').text(),
      10);
    const mark = {
      url: W.location.href,
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
    setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
    logScript(`MangaBookmarks: ${getValueGM('MangaBookmarks')}`);
  });
  // Reload Page
  $('.Reload').click((event) => {
    reloadImage($(event.target).parents('.MangaPage').find('.PageContent img'));
  });
  // ZoomIn
  $('.ZoomIn').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    const ratio = (img.width() / img.prop('naturalWidth')) * (100 + settings.zoomStep);
    applyZoom(img, ratio);
  });
  // ZoomOut
  $('.ZoomOut').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    const ratio = (img.width() / img.prop('naturalWidth')) * (100 - settings.zoomStep);
    applyZoom(img, ratio);
  });
  // ZoomRestore
  $('.ZoomRestore').click(() => {
    $('.PageContent img').removeAttr('width');
  });
  // ZoomWidth
  $('.ZoomWidth').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    applyZoom(img, 1000);
  });
  // ZoomHeight
  $('.ZoomHeight').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    applyZoom(img, -1000);
  });
  // Hide
  $('.Hide').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent');
    img.slideToggle('slow');
  });
}

export {
  controls,
  setKeyDownEvents,
};
