import {
  logScript,
  // logScriptComposable,
} from './browser';
import {
  settings,
} from './settings';
import {
  mapIndexed,
} from './utils';

function normalizeUrl(url) {
  let uri = url.trim();
  if (uri.startsWith('//')) {
    uri = `http:${uri}`;
  }
  return uri;
}

// Adds an image to the place-holder div
function addImg(index, src) {
  const url = normalizeUrl(src);
  logScript('Image:', index, 'Source:', url);
  $(`#PageImg${index}`).attr('src', url).parent().slideToggle();
  $(`#ThumbNailImg${index}`).attr('src', url);
  return index;
}

function getPage(url, wait = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logScript(`Getting page: ${url}`);
      $.ajax({
        type: 'GET',
        url,
        dataType: 'html',
        async: true,
        success: html => resolve(html),
      });
    }, wait);
  });
}

const loadMangaPages = (manga, begin) =>
  mapIndexed(
    (url, index) => (index >= begin ? getPage(url,
      (manga.timer || settings.Timer) * (index - begin))
      .then(response => addImg(index + 1, $(response).find(manga.img).attr('src'))) : null),
    manga.listPages);

function getImages(src, wait = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(src);
    }, wait);
  });
}

const loadMangaImages = (manga, begin) =>
  mapIndexed(
    (src, index) => (index >= begin ? getImages(src,
      (manga.timer || settings.Timer) * (index - begin))
      .then(response =>
        addImg(index + 1, response)) : null),
    manga.listImages);

function loadManga(manga, begin = 0) {
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || settings.Timer || 'Default(1000)'}`);
  if (manga.listPages !== undefined) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(manga, begin);
  } else if (manga.listImages !== undefined) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(manga, begin);
  } else {
    logScript('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      loadMangaImages,
      loadMangaPages,
      getPage,
      getImages,
    });
  }
}

// Force reload the image
function reloadImage(img) {
  const src = img.attr('src');
  img.removeAttr('src');
  setTimeout(() => {
    img.attr('src', src);
  }, 500);
}

// After pages load apply default Zoom
function applyZoom(page, newZoom) {
  const zoom = newZoom || settings.Zoom;
  const pages = page || '.PageContent img';
  $(pages).each((index, value) =>
    $(value)
      .width(zoom === 1000 ? $('html').width() : $(value).prop('naturalWidth') * (zoom / 100)));
}

// Checks if all images loaded correctly
function checkImagesLoaded() {
  const images = $('.PageContent img').get();
  const total = images.length;
  const missing = images.filter(item => $(item).prop('naturalWidth') === 0);
  const loaded = images.filter(item => $(item).prop('naturalWidth') !== 0);
  loaded.filter(item => $(item).attr('width') === undefined)
    .forEach(item => applyZoom($(item)));
  missing.forEach(item => reloadImage($(item)));
  NProgress.configure({
    showSpinner: false,
  }).set(loaded.length / total);
  $('#Counters i, #NavigationCounters i').html(loaded.length);
  logScript(`Progress: ${(loaded.length / total) * 100}%`);
  if (loaded.length < total) {
    setTimeout(checkImagesLoaded, 5000);
  } else {
    logScript('Images Loading Complete');
    $('.download').attr('href', '#download');
    logScript('Download Avaliable');
    if (settings.DownloadZip) {
      $('#blob').click();
    }
  }
}

export {
  loadManga,
  checkImagesLoaded,
  applyZoom,
  reloadImage,
  getPage,
};
