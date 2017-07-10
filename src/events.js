import {
  applyZoom,
  reloadImage,
} from './page';
import {
  addCustomTheme,
} from './themes';
import generateZip from './download';
import {
  getValueGM,
  logScript,
  setValueGM,
} from './browser';
import {
  settings,
} from './settings';

// Clean key press configurations and set some when specified
function setKeyDownEvents() {
  try {
    $(document).unbind('keyup keydown keypress onload');
    $(W).unbind('keyup keydown keypress onload');
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
    const a = e.keyCode || e.which;
    if ($.inArray(a, [
      39, 46, 190, 37, 44, 188, 43, 107, 61,
      45, 109, 42, 106, 56, 104, 53, 101,
    ]) !== -1) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      switch (a) {
        case 39: // down:right
        case 46: // press:right / down:.
        case 190: // press:.
          $('.ChapterControl:first .next')[0].click();
          break;
        case 37: // down:left
        case 44: // press:left / down:,
        case 188: // press:,
          $('.ChapterControl:first .prev')[0].click();
          break;
        case 43: // +
        case 107: // numpad+
        case 61: // =
          $('#enlarge').click();
          break;
        case 45: // -
        case 109: // numpad-
          $('#reduce').click();
          break;
        case 42: // 5
        case 106: // numpad5
        case 56: // 8
        case 104: // numpad8
          $('#restore').click();
          break;
        case 53: // *
        case 101: // numpad*
          $('#fitwidth').click();
          break;
        default:
          break;
      }
      return false;
    }
    return true;
  }

  if (navigator.userAgent.match(/mozilla/i)) {
    $(document).keypress(processKey);
  } else {
    $(document).keydown(processKey);
  }
}
// Controls for the extra features added to the sites
function controls() {
  // Size Controls
  $('#enlarge').click(() => {
    settings.Zoom += 25;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#reduce').click(() => {
    settings.Zoom -= 25;
    $('#Zoom b').html(settings.Zoom);
    applyZoom();
  });
  $('#restore').click(() => {
    settings.Zoom = 100;
    $('#Zoom b').html(settings.Zoom);
    $('.PageContent img').removeAttr('width');
  });
  $('#fitwidth').click(() => {
    settings.Zoom = 1000;
    $('#Zoom b').html(settings.Zoom);
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
  $('#alwaysLoad').change((event) => {
    if ($(event.target).is(':checked')) {
      setValueGM('MangaAlwaysLoad', true);
    } else {
      setValueGM('MangaAlwaysLoad', false);
    }
    logScript(`alwaysLoad: ${getValueGM('MangaAlwaysLoad')}`);
  });
  $('#showThumbnails').change((event) => {
    $('#Navigation').toggleClass('disabled');
    if ($(event.target).is(':checked')) {
      setValueGM('MangaShowThumbnails', true);
    } else {
      setValueGM('MangaShowThumbnails', false);
    }
    logScript(`showThumbnails: ${getValueGM('MangaShowThumbnails')}`);
  });
  // Download
  $('#downloadZip').change((event) => {
    if ($(event.target).is(':checked')) {
      setValueGM('MangaDownloadZip', true);
      swal({
        title: 'Attention',
        text: 'Next time a chapter finish loading you will be promted to save automatically',
        timer: 10000,
        type: 'info',
        confirmButtonText: 'OK',
      });
    } else {
      setValueGM('MangaDownloadZip', false);
    }
    logScript(`downloadZip: ${getValueGM('MangaDownloadZip')}`);
  });
  $('#blob').one('click', generateZip);
  $('.download').click($('#blob')[0].click);
  $('#PagesPerSecond').change((event) => {
    setValueGM('MangaTimer', $(event.target).val());
  });
  $('#DefaultZoom').change((event) => {
    settings.Zoom = $(event.target).val();
    $('#Zoom b').html(settings.Zoom);
    setValueGM('MangaZoom', settings.Zoom);
    applyZoom();
  });
  // Theme Control
  $('#ThemeSelector').change((event) => {
    const target = $(event.target);
    $('#MangaOnlineViewer , body').removeClass().addClass(target.val());
    setValueGM('MangaTheme:', target.val());
    if (target.val() === 'Custom_Dark' || target.val() === 'Custom_Light') {
      $('#CustomThemeHue').show();
    } else {
      $('#CustomThemeHue').hide();
    }
  });
  jscolor(document.getElementById('CustomThemeHue'));
  $('#CustomThemeHue').change((event) => {
    const target = $(event.target).val();
    logScript(`CustomTheme: #${target}`);
    $('style[title="Custom_Light"], style[title="Custom_Dark"]').remove();
    $('head').append(addCustomTheme(target));
    setValueGM('MangaCustomTheme', target);
  });
  // Goto Page and ThumbNails
  function scrollToElement(ele) {
    $(W).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
  }

  $('#gotoPage').bind('change', (event) => {
    scrollToElement($(`#Page${$(event.target).val()}`));
  });
  $('.ThumbNail').bind('click', (event) => {
    scrollToElement($(`#Page${$(event.target).find('span').html()}`));
  });
  // Settings Control
  $('#settings').click(() => {
    $('#ViewerControls').slideToggle();
    $('#ViewerShortcuts').slideToggle();
    $('#ImageOptions').toggleClass('settingsOpen');
    $('#Navigation').toggleClass('visible');
  });
  // Individual Page functions
  // Reload Page
  $('.Reload').click((event) => {
    reloadImage($(event.target).parents('.MangaPage').find('.PageContent img'));
  });
  // ZoomIn
  $('.ZoomIn').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    const ratio = (img.width() / img.prop('naturalWidth')) * 1.25 * 100;
    applyZoom(img, ratio);
  });
  // ZoomOut
  $('.ZoomOut').click((event) => {
    const img = $(event.target).parents('.MangaPage').find('.PageContent img');
    const ratio = (img.width() / img.prop('naturalWidth')) * 0.75 * 100;
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
