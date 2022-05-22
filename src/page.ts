import * as NProgress from 'nprogress';
import { logScript } from './browser.js';
import { settings } from './settings.js';
import { isNothing } from './utils.js';
import AjaxSettings = JQuery.AjaxSettings;
import { IManga } from './interfaces.js';

// Get html pages content
function getHtml(url: string, wait: number = settings.Timer) {
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
        // retryTimeout limits the next retry (in milliseconds)
        retryWait: 10000,
        // timeout for each request
        timeout: 1000,
        // created tells when this request was created
        created: Date.now(),
        error() {
          this.retryCount += 1;
          if (this.retryCount <= this.retryLimit) {
            logScript(`Retrying Getting page: ${url}`);
            setTimeout(() => {
              $.ajax(this);
            }, this.retryWait);
          } else {
            logScript(`Failed Getting page: ${url}`);
          }
        },
      } as AjaxSettings);
    }, wait);
  });
}

// After pages load apply default Zoom
function applyZoom(pages: string | JQuery = '.PageContent img', zoom = settings.Zoom) {
  const $pages = typeof pages === 'string' ? $(pages) : pages;
  $pages.each((index, value) => {
    $(value).removeAttr('width').removeAttr('height').removeAttr('style');
    if (zoom === 1000) {
      $(value).width(window.innerWidth);
    } else if (zoom === -1000) {
      $(value).height(
        window.innerHeight +
          ($('#Navigation').hasClass('disabled') ? 0 : -34) +
          ($('#Chapter').hasClass('WebComic') ? 0 : -35),
      );
    } else {
      $(value).width($(value).prop('naturalWidth') * (zoom / 100));
    }
  });
}

// Force reload the image
function reloadImage(img: JQuery) {
  const src = img.attr('src');
  if (src !== undefined) {
    img.removeAttr('src');
    setTimeout(() => {
      img.attr('src', src);
    }, 500);
  }
}

function onImagesDone() {
  logScript('Images Loading Complete');
  if (!settings.lazyLoadImages) {
    $('.download').attr('href', '#download');
    logScript('Download Available');
    if (settings.DownloadZip) {
      $('#blob').trigger('click');
    }
  }
}

function updateProgress() {
  const total = $('.PageContent img').get().length;
  const loaded = $('.PageContent img.imgLoaded').get().length;
  const percentage = Math.floor((loaded / total) * 100);
  $('title').html(`(${percentage}%) ${$('#series i').first().text()}`);
  $('#Counters i, #NavigationCounters i').html(loaded.toString());
  NProgress.configure({
    showSpinner: false,
  }).set(loaded / total);
  logScript(`Progress: ${percentage}%`);
  if (loaded === total) onImagesDone();
}

// change class if the image is loaded or broken
function onImagesProgress(imgLoad: JQuery, image) {
  const $item = $(image.img);
  if (image.isLoaded) {
    $item.addClass('imgLoaded');
    $item.removeClass('imgBroken');
    const thumb = $item!.attr('id')!.replace('PageImg', 'ThumbnailImg');
    $(`#${thumb}`)
      .attr('src', $item.attr('src')!)
      .on('load', () => applyZoom($item));
  } else {
    $item.addClass('imgBroken');
    reloadImage($item);
    $item.parent().imagesLoaded().progress(onImagesProgress);
  }
  updateProgress();
}

// Corrects urls
function normalizeUrl(url: string): string {
  let uri = url.trim();
  if (uri.startsWith('//')) {
    uri = `https:${uri}`;
  }
  return uri;
}

// Adds an image to the place-holder div
function addImg(index: number, imageSrc: string): number {
  const src = normalizeUrl(imageSrc);
  if (!settings.lazyLoadImages || index < settings.lazyStart) {
    $(`#PageImg${index}`).attr('src', src);
    $(`#PageImg${index}`).parent().imagesLoaded().progress(onImagesProgress);
    logScript('Loaded Image:', index, 'Source:', src);
  } else {
    $(`#PageImg${index}`)
      .attr('data-src', src)
      .unveil({
        offset: 1000,
      })
      .on('loaded.unveil', () => {
        $(`#PageImg${index}`).parent().imagesLoaded().progress(onImagesProgress);
        logScript('Unveiled Image: ', index, ' Source: ', $(`#PageImg${index}`).attr('src'));
      });
  }
  return index;
}

// Adds a page to the place-holder div
function addPage(manga: IManga, index: number, pageUrl: string): number {
  if (!settings.lazyLoadImages || index < settings.lazyStart) {
    getHtml(pageUrl).then((response) => {
      const src = normalizeUrl(
        $(response as string)
          .find(manga.img!)
          .attr(manga.lazyAttr ?? 'src') as string,
      );
      $(`#PageImg${index}`).attr('src', src);
      $(`#PageImg${index}`).parent().imagesLoaded().progress(onImagesProgress);
      logScript('Loaded Page:', index, 'Source:', src);
    });
  } else {
    $(`#PageImg${index}`)
      .attr(
        'data-src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      )
      .unveil({
        offset: 2000,
      })
      .on('loaded.unveil', () => {
        getHtml(pageUrl).then((response) => {
          const src = normalizeUrl(
            $(response as string)
              .find(manga.img!)
              .attr(manga.lazyAttr ?? 'src') as string,
          );
          $(`#PageImg${index}`).attr('src', src).width('auto');
          $(`#PageImg${index}`).parent().imagesLoaded().progress(onImagesProgress);
          logScript('Unveiled Page: ', index, ' Source: ', $(`#PageImg${index}`).attr('src'));
        });
      });
  }
  return index;
}

// daley the use of an url/src
function delayAdd(src: string, wait: number = settings.Timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(src);
    }, wait);
  });
}

// use a list of pages to fill the viewer
function loadMangaPages(begin: number, manga: IManga) {
  return manga.listPages?.map((url, index) =>
    index >= begin
      ? delayAdd(url, (manga.timer || settings.Timer) * (index - begin)).then((response) =>
          addPage(manga, index + 1, response as string),
        )
      : null,
  );
}

// use a list of images to fill the viewer
function loadMangaImages(begin: number, manga: IManga) {
  return manga.listImages?.map((src, index) =>
    index >= begin
      ? delayAdd(src, (manga.timer || settings.Timer) * (index - begin)).then((response) =>
          addImg(index + 1, response as string),
        )
      : null,
  );
}

// Entry point for loading hte Manga pages
function loadManga(manga: IManga, begin = 1) {
  settings.lazyLoadImages = manga.lazy || settings.lazyLoadImages;
  logScript('Loading Images');
  logScript(`Intervals: ${manga.timer || settings.Timer || 'Default(1000)'}`);
  logScript(`Lazy: ${settings.lazyLoadImages}`);
  if (settings.lazyLoadImages) {
    logScript('Download may not work with Lazy Loading Images');
  }
  if (!isNothing(manga.listImages)) {
    logScript('Method: Images:', manga.listImages);
    loadMangaImages(begin - 1, manga);
  } else if (!isNothing(manga.listPages)) {
    logScript('Method: Pages:', manga.listPages);
    loadMangaPages(begin - 1, manga);
  } else if (manga.bruteForce !== undefined) {
    logScript('Method: Brute Force');
    manga.bruteForce({
      begin,
      addImg,
      addPage: (index, pageUrl) => addPage(manga, index, pageUrl),
      loadMangaImages: (m) => loadMangaImages(begin - 1, m),
      loadMangaPages: (m) => loadMangaPages(begin - 1, m),
      getHtml,
      wait: settings.Timer,
    });
  }
}

export { loadManga, applyZoom, reloadImage };
