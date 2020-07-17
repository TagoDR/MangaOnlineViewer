import { logScript } from './browser';
import { settings } from './settings';
import { isEmpty, mapIndexed } from './utils';

// Get html pages content
function getHtml(url, wait = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logScript(`Getting page: ${url}`);
      $.ajax({
        type: 'GET',
        url,
        dataType: 'html',
        async: true,
        success: (html) => {
          logScript(`Got page: ${url}`);
          resolve(html);
        },
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

// After pages load apply default Zoom
function applyZoom(page, newZoom) {
  const zoom = newZoom || settings.Zoom;
  const pages = page || '.PageContent img';
  $(pages).each((index, value) => {
    $(value).removeAttr('width')
      .removeAttr('height')
      .removeAttr('style');
    if (zoom === 1000) {
      $(value).width($(window).width());
    } else if (zoom === -1000) {
      $(value).height($(window).height()
        + ($('#Navigation').hasClass('disabled') ? 0 : -34)
        + ($('#Chapter').hasClass('WebComic') ? 0 : -35));
    } else {
      $(value).width($(value).prop('naturalWidth') * (zoom / 100));
    }
  });
}

// Corrects urls
function normalizeUrl(url) {
  let uri = url.trim();
  if (uri.startsWith('//')) {
    uri = `https:${uri}`;
  }
  return uri;
}

// Adds an image to the place-holder div
function addImg(index, imageSrc) {
  const src = normalizeUrl(imageSrc);
  if (!settings.lazyLoadImages && index < 100) {
    logScript('Loaded Image:', index, 'Source:', src);
    $(`#PageImg${index}`).attr('src', src);
    $(`#ThumbnailImg${index}`).attr('src', src);
  } else {
    $(`#PageImg${index}`)
      .attr('data-src', src)
      .unveil({
        offset: 1000,
        throttle: 1000,
      })
      .on('loaded.unveil', () => {
        logScript('Unveiled Image:', index, 'Source:', $(`#PageImg${index}`).removeAttr('class')
          .attr('src'));
        applyZoom(`#PageImg${index}`);
      });
    $(`#ThumbnailImg${index}`)
      .attr('data-src', src)
      .unveil({
        offset: 100,
        throttle: 1000,
        container: $('#Thumbnails'),
      }).on('loaded.unveil', () => {
        logScript('Unveiled Thumbnail:', index);
      });
  }
  return index;
}

// Adds an page to the place-holder div
function addPage(manga, index, pageUrl) {
  if (!settings.lazyLoadImages && index < 50) {
    getHtml(pageUrl)
      .then((response) => {
        const src = normalizeUrl($(response).find(manga.img).attr(manga.lazyAttr || 'src'));
        $(`#PageImg${index}`).attr('src', src).removeAttr('style');
        $(`#ThumbnailImg${index}`).attr('src', src);
        logScript('Loaded Image:', index, 'Source:', src);
      });
  } else {
    $(`#PageImg${index}`)
      .attr('data-src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')
      .unveil({
        offset: 3000,
        throttle: 1000,
      })
      .on('loaded.unveil', () => {
        getHtml(pageUrl)
          .then((response) => {
            const src = normalizeUrl($(response).find(manga.img).attr(manga.lazyAttr || 'src'));
            $(`#PageImg${index}`).attr('src', src);
            $(`#ThumbnailImg${index}`).attr('src', src);
            logScript('Unveiled Image:', index, 'Source:', $(`#PageImg${index}`).removeAttr('class')
              .attr('src'));
            applyZoom(`#PageImg${index}`);
          });
      });
  }
  return index;
}

// daley the use of a url/src
function delayAdd(src, wait = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(src);
    }, wait);
  });
}

// use a list of pages to fill the viewer
const loadMangaPages = (begin, manga) => mapIndexed(
  (url, index) => (index >= begin ? delayAdd(url,
    (manga.timer || settings.Timer) * (index - begin))
    .then((response) => addPage(manga, index + 1, response)) : null),
  manga.listPages,
);

// use a list of images to fill the viewer
const loadMangaImages = (begin, manga) => mapIndexed(
  (src, index) => (index >= begin ? delayAdd(src,
    (manga.timer || settings.Timer) * (index - begin))
    .then((response) => addImg(index + 1, response)) : null),
  manga.listImages,
);

// Entry point for loading hte Manga pages
function loadManga(manga, begin = 1) {
  settings.lazyLoadImages = manga.lazy || settings.lazyLoadImages;
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || settings.Timer || 'Default(1000)'}`);
  logScript(`Lazy: ${settings.lazyLoadImages}`);
  if (!isEmpty(manga.listImages)) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(begin - 1, manga);
  } else if (!isEmpty(manga.listPages)) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(begin - 1, manga);
  } else {
    logScript('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      addPage: R.curry(addPage)(manga),
      loadMangaImages: R.curry(loadMangaImages)(begin - 1),
      loadMangaPages: R.curry(loadMangaPages)(begin - 1),
      getHtml,
      wait: settings.timer,
    });
  }
}

// Force reload the image
function reloadImage(img) {
  const src = img.attr('src');
  if (src !== undefined) {
    img.removeAttr('src');
    setTimeout(() => {
      img.attr('src', src);
    }, 500);
  }
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
};
