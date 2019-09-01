import { logScript } from './browser';
import { settings } from './settings';
import { mapIndexed } from './utils';

function normalizeUrl(url) {
  let uri = url.trim();
  if (uri.startsWith('//')) {
    uri = `https:${uri}`;
  }
  return uri;
}

// Adds an image to the place-holder div
function addImg(index, src) {
  const url = normalizeUrl(src);
  if (!settings.lazyLoadImages) {
    logScript('Loaded Image:', index, 'Source:', url);
    $(`#PageImg${index}`).attr('src', url).parent().slideToggle();
    $(`#ThumbnailImg${index}`).attr('src', url);
  } else {
    $(`#PageImg${index}`)
      .attr('data-src', url)
      .unveil({
        offset: 500,
        throttle: 1000,
        // http://zhongdeliu.github.io/placeholder-image/
        placeholder: 'data:image/png;base64,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',
      })
      .on('loaded.unveil', () => {
        logScript('Unveiled Image:', index, 'Source:', url);
      })
      .parent()
      .slideToggle();
    $(`#ThumbnailImg${index}`)
      .attr('data-src', url)
      .unveil({
        offset: 0,
        throttle: 500,
        // http://png-pixel.com/
        placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
      }).on('loaded.unveil', () => {
        logScript('Unveiled Thumbnail:', index);
      });
  }
  return index;
}

function addImgAlt(index, altsrc) {
  const url = normalizeUrl(altsrc);
  logScript('Image:', index, 'Alternative Source:', url);
  if (altsrc !== '') {
    $(`#PageImg${index}`).attr('altsrc', url);
    $(`#ThumbnailImg${index}`).attr('onerror', `this.src='${url}';this.onerror=null;`);
  }
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
        success: (html) => resolve(html),
        // retryCount and retryLimit will let you retry a determined number of times
        retryCount: 0,
        retryLimit: 10,
        // retryTimeout limits the total time retrying (in milliseconds)
        retryTimeout: 10000,
        // timeout for each request
        timeout: 1000,
        // created tells when this request was created
        created: Date.now(),
        error() {
          this.retryCount += 1;
          if (this.retryCount <= this.retryLimit && Date.now() - this.created < this.retryTimeout) {
            logScript(`Retrying Getting page: ${url}`);
            $.ajax(this);
          } else {
            logScript(`Failed Getting page: ${url}`);
          }
        },
      });
    }, wait);
  });
}

const loadMangaPages = (begin, manga) => mapIndexed(
  (url, index) => (index >= begin ? getPage(url,
    (manga.timer || settings.Timer) * (index - begin))
    .then((response) => addImg(index + 1, $(response).find(manga.img).attr('src'))) : null),
  manga.listPages,
);

function getImages(src, wait = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(src);
    }, wait);
  });
}

const loadMangaImages = (begin, manga) => mapIndexed(
  (src, index) => (index >= begin ? getImages(src,
    (manga.timer || settings.Timer) * (index - begin))
    .then((response) => addImg(index + 1, response)) : null),
  manga.listImages,
);

const loadMangaImagesAlt = (begin, manga) => mapIndexed(
  (src, index) => (index >= begin ? addImgAlt(index + 1, src) : null),
  manga.listImagesAlt,
);

function loadManga(manga, begin = 1) {
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || settings.Timer || 'Default(1000)'}`);
  if (manga.listPages !== undefined) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(begin - 1, manga);
  } else if (manga.listImages !== undefined) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(begin - 1, manga);
    if (manga.listImagesAlt !== undefined) {
      loadMangaImagesAlt(begin - 1, manga);
    }
  } else {
    logScript('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      loadMangaImages: R.curry(loadMangaImages)(begin - 1),
      loadMangaPages: R.curry(loadMangaPages)(begin - 1),
      getPage,
      getImages,
      wait: settings.timer,
    });
  }
}

// Force reload the image
function reloadImage(img) {
  const src = img.attr('src');
  const altsrc = img.attr('altsrc');
  if (src !== undefined) {
    if (altsrc !== undefined) {
      img.removeAttr('src');
      img.removeAttr('altsrc');
      setTimeout(() => {
        img.attr('src', altsrc);
        img.attr('altsrc', src);
      }, 500);
    } else {
      img.removeAttr('src');
      setTimeout(() => {
        img.attr('src', src);
      }, 500);
    }
  }
}

// After pages load apply default Zoom
function applyZoom(page, newZoom) {
  const zoom = newZoom || settings.Zoom;
  const pages = page || '.PageContent img';
  $(pages).each((index, value) => $(value)
    .width(zoom === 1000 ? $('html').width() : $(value).prop('naturalWidth') * (zoom / 100)));
}

// Checks if all images loaded correctly
function checkImagesLoaded(manga) {
  if (settings.lazyLoadImages) {
    logScript('Download NOT Available with Lazy Load Images');
    return;
  }
  const images = $('.PageContent img').get();
  const total = images.length;
  const missing = images.filter((item) => $(item).prop('naturalWidth') === 0);
  const loaded = images.filter((item) => $(item).prop('naturalWidth') !== 0);
  loaded.filter((item) => $(item).attr('width') === undefined)
    .forEach((item) => applyZoom($(item)));
  missing.forEach((item) => reloadImage($(item)));
  NProgress.configure({
    showSpinner: false,
  }).set(loaded.length / total);
  $('#Counters i, #NavigationCounters i').html(loaded.length);
  logScript(`Progress: ${Math.floor((loaded.length / total) * 100)}%`);
  $('title').html(`(${Math.floor((loaded.length / total) * 100)}%) ${manga.title}`);
  if (loaded.length < total) {
    setTimeout(() => checkImagesLoaded(manga), 5000);
  } else {
    logScript('Images Loading Complete');
    // $('title').html(manga.title);
    $('.download').attr('href', '#download');
    logScript('Download Available');
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
