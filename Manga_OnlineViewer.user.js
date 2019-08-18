// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Batoto, ComiCastle, ReadComicsOnline, Dynasty-Scans, EatManga, Easy Going Scans, FoOlSlide, KissManga, MangaDoom, MangaFox, MangaGo, MangaHere, MangaInn, MangaLyght, MangaPark, MangaReader,MangaPanda, MangaStream, MangaTown, NineManga, ReadManga Today, SenManga(Raw), TenManga, TheSpectrum, MangaDeep, Funmanga, UnionMangas, MangaHost, Hoc Vien Truyen Tranh, JaiminisBox, MangaDex, HatigarmScans, MangaRock, MangaNelo, LHTranslation, JapScan.To
// @version 14.6.0
// @license MIT
// @date 2019-08-17
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdn.jsdelivr.net/npm/sweetalert2@8.16.0/dist/sweetalert2.all.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @include /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /https?:\/\/(www.)?eatmanga.me\/Manga-Scan\/.+\/.+\//
// @include /https?:\/\/read.egscans.com\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/
// @include /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?fanfox.net\/manga\/.+\/.+\//
// @include /https?:\/\/(www.)?mangago.me\/read-manga\/.+\/.+/
// @include /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/
// @include /https?:\/\/manga.lyght.net\/series\/.+\.html/
// @include /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter)\/.+\/.+/
// @include /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/
// @include /https?:\/\/(www.)?(mangastream|readms)(.net|.com)\/r.*\/.+/
// @include /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?tenmanga.com\/chapter\/.+/
// @include /https?:\/\/view.thespectrum.net\/.+/
// @include /https?:\/\/(www.)?(mangadeep).com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?unionmangas.net\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?mangahost.net\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?hocvientruyentranh.com\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?jaiminisbox.com\/reader\/read\/.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?hatigarmscans.net\/manga\/.+\/.+(\/[0-9]*)?/
// @include /https?:\/\/(www.)?mangarock.com\/manga\/.+\/chapter\/.+/
// @include /https?:\/\/(www.)?manganelo.com\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/(www.)?japscan.to\/lecture-en-ligne\/.+\/.+/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// @exclude /https?:\/\/(www.)?hentainexus.com\/.+/
// @exclude /https?:\/\/hentai.cafe\/.+/
// ==/UserScript==

(function() {
  'use strict';

  var W = (typeof unsafeWindow === undefined) ? window : unsafeWindow;

  var batoto = {
    name: 'Batoto',
    url: /https?:\/\/(www.)?bato.to\/chapter.*/,
    homepage: 'http://bato.to/',
    language: ['English'],
    category: 'manga',
    run() {
      const num = $('#viewer .item').length;
      return {
        title: $('.nav-title a').text(),
        series: $('.nav-title a').attr('href'),
        quant: num,
        prev: $('.nav-prev a').attr('href'),
        next: $('.nav-next a').attr('href'),
        listImages: $('.page-img').get().map(i => $(i).attr('src'))
      };
    }
  };

  var comicastle = {
    name: 'ComiCastle',
    url: /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/,
    homepage: 'http://www.comicastle.org/',
    language: ['English'],
    category: 'comic',
    run() {
      const url = $('.form-control:last option').get();
      const chapter = $('.form-control:first option');
      return {
        title: chapter.find(':selected').text(),
        series: $('.navbar-header a').attr('href'),
        quant: url.length,
        prev: chapter.find(':selected').prev().val(),
        next: chapter.find(':selected').next().val(),
        listPages: url.map(item => $(item).val()),
        img: '.chapter-img'
      };
    }
  };

  var dysnatyscans = {
    name: 'Dynasty-Scans',
    url: /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/,
    homepage: 'https://dynasty-scans.com/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: $('#chapter-title').text(),
        series: '#',
        quant: W.pages.length,
        prev: $('#prev_link').attr('href'),
        next: $('#next_link').attr('href'),
        listImages: W.pages.map(x => x.image)
      };
    }
  };

  var eatmanga = {
    name: 'EatManga',
    url: /https?:\/\/(www.)?eatmanga.me\/Manga-Scan\/.+\/.+\//,
    homepage: 'http://eatmanga.me/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('#top_chapter_list option:selected');
      return {
        title: $('#main_content h1').text().split(',')[0].trim(),
        series: $('ul#crumbs li a:eq(2)').attr('href'),
        quant: $('select#pages option:last').html(),
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        listPages: $('select#pages option').get().map(item => $(item).val()),
        img: '#eatmanga_image , #eatmanga_image_big'
      };
    }
  };

  var egscans = {
    name: 'Easy Going Scans',
    url: /https?:\/\/read.egscans.com\/.+/,
    homepage: 'http://read.egscans.com/',
    language: ['English'],
    category: 'manga',
    waitVar: 'img_url',
    run() {
      const src = W.img_url.slice(1);
      return {
        title: $('select[name="manga"] option:selected').text().trim(),
        series: '#',
        quant: src.length,
        prev: "../".concat(W.prev_chap),
        next: "../".concat(W.next_chap),
        listImages: src.map(encodeURI).map(x => "../".concat(x))
      };
    }
  };

  var foolslide = {
    name: 'FoOlSlide',
    url: /^(?!.*jaiminisbox).*\/read\/.+/,
    homepage: '',
    language: ['English'],
    obs: 'Any Scanlator site that uses FoOLSlide',
    category: 'manga',
    run() {
      const temp = "".concat(W.location.href.substr(0, W.location.href.lastIndexOf('/')), "/");
      const url = temp.match(/page\/$/) ? temp : "".concat(temp, "page/");
      const num = $('.topbar_right .dropdown li').length;
      const chapter = $('.topbar_left .dropdown_parent:last ul li a');
      return {
        title: $('title').text().trim(),
        series: $('div.tbtitle div.text a:first').attr('href'),
        quant: num,
        prev: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname.replace(/page.+/, ''), "']"))) + 1).attr('href'),
        next: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname.replace(/page.+/, ''), "']"))) - 1).attr('href'),
        listPages: [...Array(num).keys()].map(i => url + (i + 1)),
        img: 'img.open'
      };
    }
  };

  var funmanga = {
    name: 'Funmanga',
    url: /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/,
    homepage: 'http://funmanga.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('.extra-buttons select:first option:selected');
      const url = $('.widget-heading select option').get().slice(1);
      return {
        title: $('title').text().trim(),
        series: $('h5.widget-heading a:first').attr('href'),
        quant: url.length,
        prev: chapter.next('option').val(),
        next: chapter.prev('option').val(),
        listPages: url.map(item => $(item).val()),
        img: '.img-responsive'
      };
    }
  };

  var hatigarmscans = {
    name: 'HatigarmScans',
    url: /https?:\/\/(www.)?hatigarmscans.net\/manga\/.+\/.+(\/[0-9]*)?/,
    homepage: 'https://www.hatigarmscans.net//',
    language: ['English'],
    category: 'manga',
    run() {
      const src = $('.scan-page').attr('src');
      const url = src.substring(0, src.lastIndexOf('/') + 1);
      return {
        title: W.title.replace(/ - Page .+/, '').trim(),
        series: W.base_url.substring(0, W.base_url.lastIndexOf('/') + 1),
        quant: W.pages.length,
        prev: W.next_chapter,
        next: W.prev_chapter,
        listImages: W.pages.map(i => url + i.page_image)
      };
    }
  };

  var hocvien = {
    name: 'Hoc Vien Truyen Tranh',
    url: /https?:\/\/(www.)?hocvientruyentranh.com\/chapter\/.+\/.+/,
    homepage: 'http://hocvientruyentranh.com/',
    language: ['Vietnamese'],
    category: 'manga',
    run() {
      const src = $('.manga-container img').get();
      return {
        title: $('.chapters-dropdown option:selected').text().trim(),
        series: $('.theNavi a').attr('href'),
        quant: src.length,
        prev: $('.top-nav a:first').attr('href'),
        next: $('.top-nav a:last').attr('href'),
        listImages: src.map(item => $(item).attr('src'))
      };
    }
  };

  var jaiminisbox = {
    name: 'JaiminisBox',
    url: /https?:\/\/(www.)?jaiminisbox.com\/reader\/read\/.+/,
    homepage: 'https://jaiminisbox.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('.topbar_left .dropdown_parent:last ul li a');
      return {
        title: $('title').text().trim(),
        series: $('div.tbtitle div.text a:first').attr('href'),
        quant: W.pages.length,
        prev: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname.replace(/page.+/, ''), "']"))) + 1).attr('href'),
        next: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname.replace(/page.+/, ''), "']"))) - 1).attr('href'),
        listImages: W.pages.map(i => i.url)
      };
    }
  };

  var japscan = {
    name: 'JapScan.To',
    url: /https?:\/\/(www.)?japscan.to\/lecture-en-ligne\/.+\/.+/,
    homepage: 'https://www.japscan.to/',
    language: ['French'],
    category: 'manga',
    waitAttr: ['#image img', 'src'],
    run() {
      const src = $('#image img').attr('src').replace(/\/[0-9]+\.[a-z]+$/, '/');
      return {
        title: $('.container h1').text(),
        series: $('.breadcrumb a:last').attr('href'),
        quant: $('#pages option').get().length,
        prev: $('.card-body span + a:first').attr('href'),
        next: $('.card-body span + a:last').attr('href'),
        listImages: $('#pages option').get().map(item => src + $(item).attr('data-img'))
      };
    }
  };

  var kissmanga = {
    name: 'KissManga',
    url: /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/,
    homepage: 'http://kissmanga.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('.selectChapter option:selected');
      const url = W.location.href.replace(/[^/]+$/, '');
      return {
        title: $('title').text().replace('Read manga', '').replace('online in high quality', '').trim(),
        series: $('#navsubbar a').attr('href'),
        quant: W.lstImages.length,
        prev: url + chapter.prev().val(),
        next: url + chapter.next().val(),
        listImages: W.lstImages
      };
    }
  };

  var lhtranslation = {
    name: 'LHTranslation',
    url: /https?:\/\/(www.)?lhtranslation.net\/read.+/,
    homepage: 'http://lhtranslation.net/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: $('.chapter-img.tieude font').text(),
        series: $('.navbar-brand.manga-name').attr('href'),
        quant: $('img.chapter-img').length,
        prev: $('.form-control option:selected').next().val(),
        next: $('.form-control option:selected').prev().val(),
        listImages: $('img.chapter-img').get().map(item => $(item).attr('src'))
      };
    }
  };

  var mangadex = {
    name: 'MangaDex',
    url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
    homepage: 'https://mangadex.org/',
    language: ['English'],
    category: 'manga',
    waitEle: '.total-pages',
    waitAttr: ['.reader-image-wrapper img', 'src'],
    run() {
      let api = null;
      const url = "https://mangadex.org/api/chapter/".concat(W.location.pathname.match(/[0-9]+/)[0]);
      $.ajax({
        type: 'GET',
        url,
        async: false,
        success(res) {
          api = res;
        }
      });
      return {
        title: $('title').text().replace(' - MangaDex', ''),
        series: $('.manga-link').attr('href'),
        quant: api.page_array.length,
        prev: $('.chapter-link-left').attr('href'),
        next: $('.chapter-link-right').attr('href'),
        listImages: api.page_array.map(img => "".concat(api.server + api.hash, "/").concat(img))
      };
    }
  };

  var mangadoom = {
    name: 'MangaDoom',
    url: /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/,
    homepage: 'https://mngdoom.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const url = $('.selectPage:first option').get();
      const chapter = $('.chapterSelect:first option:selected');
      return {
        title: $('.widget-heading > div > div:first').text().trim(),
        series: $('.widget-heading a').attr('href'),
        quant: url.length,
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        listPages: url.map(item => $(item).val()),
        img: 'img.img-responsive'
      };
    }
  };

  var mangafox = {
    name: 'MangaFox',
    url: /https?:\/\/(www.)?fanfox.net\/manga\/.+\/.+\//,
    homepage: 'http://fanfox.net/',
    language: ['English'],
    category: 'manga',
    run() {
      function decode(data, page) {
        const toBeEval = data.match(/'[^']*'/g)[5].replace(/'/g, '');
        const keyWords = data.match(/'[^']*'/g)[6].replace(/'/g, '').split('|');

        function charFromPosition(i) {
          return (i < 31 ? '' : charFromPosition(parseInt(i / 31, 10))) + (i % 31 > 35 ? String.fromCharCode(i % 31 + 29) : (i % 31).toString(36));
        }
        const replacingValues = {};
        keyWords.forEach((ele, i) => {
          replacingValues[charFromPosition(i)] = ele || charFromPosition(i);
        });
        const res = toBeEval.replace(new RegExp(/\b\w+\b/, 'g'), y => replacingValues[y]);
        return res.match(/pix=\"([^;]+)\";/)[1] +
          res.match(/pvalue=\[\"([^,]+)\",\"([^,\]]+)\"/)[page === 0 ? 1 : 2];
      }
      const src = [...Array(W.imagecount).keys()].map(i => {
        let img = '';
        $.ajax({
          url: 'chapterfun.ashx',
          async: false,
          data: {
            cid: W.chapterid,
            page: i,
            key: $('#dm5_key').val()
          }
        }).done(data => {
          img = decode(data, i);
        });
        return img;
      });
      return {
        title: $('.reader-header-title div:first').text().trim(),
        series: $('.reader-header-title a').attr('href'),
        quant: W.imagecount,
        prev: W.prechapterurl,
        next: W.nextchapterurl,
        listImages: src
      };
    }
  };

  var mangago = {
    name: 'MangaGo',
    url: /https?:\/\/(www.)?mangago.me\/read-manga\/.+\/.+/,
    homepage: 'http://www.mangago.me/',
    language: ['English'],
    category: 'manga',
    run() {
      const origin = $('#series');
      return {
        title: origin.text(),
        series: origin.attr('href'),
        quant: $('.page a:first').text().replace(/page 1 of /, ''),
        prev: $('.readtips p:eq(4) a:first').attr('href'),
        next: $('.readtips p:eq(3) a:first').attr('href'),
        listPages: $('.page a').get().map(item => $(item).attr('href')),
        img: '#page1'
      };
    }
  };

  var mangahere = {
    name: 'MangaHere',
    url: /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/,
    homepage: 'http://www.mangahere.cc/',
    language: ['English'],
    category: 'manga',
    run() {
      const num = $('.right select:first option').length - 1;
      const chapter = $('.reader_tip a');
      return {
        title: $('.title h1').text(),
        series: $('div.title h2 a').attr('href'),
        quant: num,
        prev: chapter.eq(-1).attr('href'),
        next: chapter.eq(-2).attr('href'),
        listPages: [''].concat([...Array(num - 1).keys()].map(i => "".concat(i + 2, ".html"))),
        img: 'img#image'
      };
    }
  };

  var mangahost = {
    name: 'MangaHost',
    url: /https?:\/\/(www.)?mangahost.net\/manga\/.+\/.+/,
    homepage: 'https://mangahost.net/',
    language: ['Portuguese'],
    category: 'manga',
    run() {
      const url = W.location.href + (W.location.href.lastIndexOf('/') !== W.location.href.length - 1 ? '/' : '');
      const chapter = $('.viewerChapter:first option:selected');
      const num = parseInt($('.viewerPage:first option:last').html(), 10);
      const manga = {
        title: $('.breadcrumb li:eq(3)').text().trim(),
        series: $('.breadcrumb li:eq(2) a').attr('href'),
        quant: num,
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        img: '.image-content img'
      };
      if ($('.read-slideshow img').get().length === 0) {
        manga.listPages = [...Array(num).keys()].map(i => url + (i + 1));
      } else {
        manga.listImages = $('.read-slideshow img').get().map(item => $(item).attr('src'));
      }
      return manga;
    }
  };

  var mangainn = {
    name: 'MangaInn',
    url: /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/,
    homepage: 'http://www.mangainn.net/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: W.chapter_page_title.trim(),
        series: W.manga_url,
        quant: W.images.length,
        prev: W.prev_chapter_url,
        next: W.next_chapter_url,
        listImages: W.images.map(i => i.url)
      };
    }
  };

  var mangalyght = {
    name: 'MangaLyght',
    url: /https?:\/\/manga.lyght.net\/series\/.+\.html/,
    homepage: 'http://manga.lyght.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('.selectchapter option:selected');
      const url = "".concat($('form[name=\'pageSelector1\']').attr('action'), "?ch=").concat(chapter.val().replace(' ', '+'), "&page=");
      const num = $('.selectpage option').length;
      const origin = $('div.entry h1 a');
      return {
        title: origin.text().trim(),
        series: origin.attr('href'),
        quant: num,
        prev: "".concat(W.location.pathname, "?ch=").concat(chapter.prev().val()).replace(' ', '+'),
        next: "".concat(W.location.pathname, "?ch=").concat(chapter.next().val()).replace(' ', '+'),
        listPages: [...Array(num).keys()].map(i => url + (i + 1)),
        img: '#mainimage'
      };
    }
  };

  var manganelo = {
    name: 'MangaNelo',
    url: /https?:\/\/(www.)?manganelo.com\/chapter\/.+\/.+/,
    homepage: 'http://www.manganelo.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const images = $('#vungdoc img').get();
      return {
        title: $('.info-top-chapter h2').text().trim(),
        series: $('.rdfa-breadcrumb a span[itemprop="title"]').eq(1).parent().attr('href'),
        quant: images.length,
        prev: $('.btn-navigation-chap a:eq(0)').attr('href'),
        next: $('.btn-navigation-chap a:eq(1)').attr('href'),
        listImages: images.map(i => $(i).attr('src'))
      };
    }
  };

  var mangapark = {
    name: 'MangaPark',
    url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter)\/.+\/.+/,
    homepage: 'http://mangapark.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const img = $('.img-link img').get();
      return {
        title: $('.loc a:first, h4 a').text().trim(),
        series: $('.loc a:first, h4 a').attr('href'),
        quant: W.pages || img.length,
        prev: W._prev_link || $('span:contains(◀ Prev Chapter):first').parent('a').attr('href'),
        next: W._next_link || $('span:contains(Next Chapter ▶):first').parent('a').attr('href'),
        listImages: W.images || img.map(i => {
          if ($(i).hasClass('lazy')) {
            return $(i).attr('data-src');
          }
          return $(i).attr('src');
        }),
        before() {
          if (W.location.href.search(/\/1$/) !== -1) {
            W.location.href = W.location.href.replace('/1', '');
          }
        }
      };
    }
  };

  var mangareader = {
    name: ['MangaReader', 'MangaPanda'],
    url: /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/,
    homepage: ['http://www.mangareader.net/', 'http://www.mangapanda.com/'],
    language: ['English'],
    category: 'manga',
    run() {
      const url = W.location.href + (W.location.href.lastIndexOf('/') !== W.location.href.length - 1 ? '/' : '');
      const num = parseInt($('select#pageMenu option:last').html(), 10);
      const chapter = $('#mangainfo_bas a');
      return {
        title: $('#mangainfo h1').text(),
        series: $('#mangainfo a').attr('href'),
        quant: num,
        prev: chapter.last().attr('href'),
        next: chapter.first().attr('href'),
        listPages: [...Array(num).keys()].map(i => url + (i + 1), num),
        img: 'img#img',
        before() {
          if (W.location.pathname.match(/\/.+\/.+\/chapter-[0-9]+.*/)) {
            const path = W.location.pathname.split('/');
            W.location.pathname = "/".concat(path[2], "/").concat(path[3].match(/[0-9]+/));
          } else if (W.location.search) {
            W.location.href = W.location.pathname;
          }
        }
      };
    }
  };

  var mangarock = {
    name: 'MangaRock',
    url: /https?:\/\/(www.)?mangarock.com\/manga\/.+\/chapter\/.+/,
    homepage: 'https://mangarock.com/',
    language: ['English'],
    category: 'manga',
    waitAttr: ['a[title]', 'href'],
    run() {
      let api = null;
      const url = "https://api.mangarockhd.com/query/web401/pages?oid=".concat(W.location.pathname.match(/mrs-chapter-[0-9]+/)[0]);
      $.ajax({
        type: 'GET',
        url,
        async: false,
        success(res) {
          api = res;
        }
      });

      function decode(t) {
        const s = ['length'];
        const e = new Uint8Array(t[s[0]] + 15);
        const n = t[s[0]] + 7;
        e[0] = 82;
        e[1] = 73;
        e[2] = 70;
        e[3] = 70;
        e[7] = n >> 24 & 255;
        e[6] = n >> 16 & 255;
        e[5] = n >> 8 & 255;
        e[4] = 255 & n;
        e[8] = 87;
        e[9] = 69;
        e[10] = 66;
        e[11] = 80;
        e[12] = 86;
        e[13] = 80;
        e[14] = 56;
        for (let r = 0; r < t[s[0]]; r += 1) e[r + 15] = 101 ^ t[r];
        return e;
      }

      function process(mri) {
        const image = decode(new Uint8Array(mri));
        const e = [];
        for (let n = 0; n < image.length; n += 32768) {
          e.push(String.fromCharCode.apply(null, image.subarray(n, n + 32768)));
        }
        return "data:image/webp;base64,".concat(btoa(e.join('')));
      }

      function getMRI(index, src, e) {
        setTimeout(() => {
          GM_xmlhttpRequest({
            method: 'GET',
            url: src,
            overrideMimeType: 'text/plain; charset=x-user-defined',
            responseType: 'arraybuffer',
            onload(request) {
              e.addImg(index, process(request.response));
            }
          });
        }, e.wait * (index - e.begin));
      }
      return {
        title: $('title').text().trim(),
        series: $('a[title]').attr('href'),
        quant: api.data.length,
        prev: $('select:first option:selected').prev().val(),
        next: $('select:first option:selected').next().val(),
        bruteForce(e) {
          for (let i = 0; i < api.data.length; i += 1) {
            if (i >= e.begin - 1) {
              getMRI(i + 1, api.data[i], e);
            }
          }
        }
      };
    }
  };

  var mangastream = {
    name: 'MangaStream',
    url: /https?:\/\/(www.)?(mangastream|readms)(.net|.com)\/r.*\/.+/,
    homepage: 'http://mangastream.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const url = W.location.href.substring(0, W.location.href.lastIndexOf('/') + 1);
      const num = parseInt($('div.controls div.btn-group ul.dropdown-menu li:last').text().match(/[0-9]+/), 10);
      const chapter = $('.controls .dropdown-menu:first a');
      return {
        title: $('.btn:eq(0)').text().trim(),
        series: $('div.controls div.btn-group ul.dropdown-menu:first li a:last').attr('href'),
        quant: num,
        prev: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname, "']"))) + 1).attr('href'),
        next: chapter.eq(chapter.index(chapter.filter("[href*='".concat(W.location.pathname, "']"))) - 1).attr('href'),
        listPages: [...Array(num).keys()].map(i => url + (i + 1)),
        img: 'img#manga-page'
      };
    }
  };

  var mangatown = {
    name: 'MangaTown',
    url: /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/,
    homepage: 'http://www.mangatown.com/',
    language: ['English'],
    category: 'manga',
    waitEle: '#top_chapter_list option',
    waitMax: 5000,
    run() {
      const num = $('.page_select select:first option').get().slice(0, -1);
      const chapter = $('#top_chapter_list option').eq(W.current_chapter_index);
      return {
        title: $('.title h1').text(),
        series: $('.title h2 a').attr('href'),
        quant: num.length,
        prev: chapter.prev().val(),
        next: chapter.next().val(),
        listPages: num.map(item => $(item).val()),
        img: '#image'
      };
    }
  };

  var ninemanga = {
    name: 'NineManga',
    url: /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,
    homepage: 'http://ninemanga.com/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: $('.tip a:first').text(),
        series: $('.subgiude a:eq(1)').attr('href'),
        quant: $('#page:first option').length,
        prev: $('.chnav a:first').attr('href'),
        next: $('.chnav a:eq(1)').attr('href'),
        listPages: $('#page:first option').get().map(item => $(item).val()),
        img: '.manga_pic'
      };
    }
  };

  var readcomicsonline = {
    name: 'ReadComicsOnline',
    url: /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/,
    homepage: 'http://readcomicsonline.ru/',
    language: ['English'],
    category: 'comic',
    run() {
      return {
        title: W.title.replace(/ - Page [0-9]+/, ''),
        series: $('div.pager-cnt a:first').attr('href'),
        quant: W.pages.length,
        prev: W.prev_chapter,
        next: W.next_chapter,
        listImages: $('#all img').get().map(i => $(i).attr('data-src'))
      };
    }
  };

  var readmangatoday = {
    name: 'ReadManga Today',
    url: /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/,
    homepage: 'http://www.readmng.com/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: W.chapter_page_title.trim(),
        series: W.manga_url,
        quant: W.images.length,
        prev: W.prev_chapter_url,
        next: W.next_chapter_url,
        listImages: W.images.map(i => i.url)
      };
    }
  };

  var senmanga = {
    name: 'SenManga(Raw)',
    url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
    homepage: 'http://raw.senmanga.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const url = "/".concat(W.location.pathname.split('/')[1], "/").concat(W.location.pathname.split('/')[2]);
      const num = parseInt($('select[name=\'page\'] option:last').val(), 10);
      const chapter = $('select[name="chapter"] option:selected');
      const origin = $('.title a');
      return {
        title: $('.title').text().trim(),
        series: origin.attr('href'),
        quant: num,
        prev: origin.attr('href') + chapter.next().val(),
        next: origin.attr('href') + chapter.prev().val(),
        listPages: [...Array(num).keys()].map(i => "".concat(url, "/").concat(i + 1, "/")),
        img: '#picture',
        before() {
          $('body').contents().filter(() => this.nodeType === 3).remove();
        }
      };
    }
  };

  var tenmanga = {
    name: 'TenManga',
    url: /https?:\/\/(www.)?tenmanga.com\/chapter\/.+/,
    homepage: 'http://www.tenmanga.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const url = $('.sl-page:first option').get();
      const chapter = $('.sl-chap:first option:selected');
      return {
        title: $('.read-page  a:eq(2)').text().replace('»', '').trim(),
        series: $('.read-page a:eq(1)').attr('href'),
        quant: url.length,
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        listPages: url.map(item => $(item).val()),
        img: '.manga_pic'
      };
    }
  };

  var thespectrum = {
    name: 'TheSpectrum',
    url: /https?:\/\/view.thespectrum.net\/.+/,
    homepage: 'http://www.thespectrum.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const url = "".concat(W.location.pathname, "?").concat($('form').serialize().substring(0, $('form').serialize().lastIndexOf('=')));
      const num = $('.selectpage option').length;
      const chapter = $('.selectchapter option:selected');
      return {
        title: $('.viewerLabel:eq(1)').text(),
        series: '#',
        quant: num,
        prev: "".concat(W.location.pathname, "?ch=").concat(chapter.prev().val()),
        next: "".concat(W.location.pathname, "?ch=").concat(chapter.next().val()),
        listPages: [...Array(num).keys()].map(i => "".concat(url, "=").concat(i + 1)),
        img: '#imgContainer img'
      };
    }
  };

  var unionmangas = {
    name: 'UnionMangas',
    url: /https?:\/\/(www.)?unionmangas.net\/leitor\/.+\/.+/,
    homepage: 'http://unionmangas.net/',
    language: ['Portuguese'],
    category: 'manga',
    run() {
      const origin = $('#topo h1 a');
      const chapter = $('#cap_manga1 option:selected');
      const src = $('.item img.real').get();
      return {
        title: origin.text(),
        series: origin.attr('href'),
        quant: $('.selectPage:first option').length,
        prev: chapter.prev().val(),
        next: chapter.next().val(),
        listImages: [$(src[0]).attr('src')].concat(src.splice(1).map(item => $(item).attr('data-lazy')))
      };
    }
  };

  var wpmanga = {
    name: ['MangaDeep'],
    url: /https?:\/\/(www.)?(mangadeep).com\/.+\/[0-9]+/,
    homepage: ['http://mangadeep.com/'],
    language: ['English'],
    category: 'manga',
    run() {
      const url = "/".concat(W.location.pathname.split('/')[1], "/").concat(W.location.pathname.split('/')[2]);
      const num = parseInt($('select.cbo_wpm_pag:first option:last').html(), 10);
      const chapter = $('.cbo_wpm_chp option:selected');
      const key = $('.cbo_wpm_chp').attr('onchange').replace(/W.location.href='/, '');
      return {
        title: $('.wpm_pag h1').text().trim(),
        series: $('h1.ttl a').attr('href'),
        quant: num,
        prev: key.replace(/'.+/, chapter.next().val()),
        next: key.replace(/'.+/, chapter.prev().val()),
        listPages: [...Array(num).keys()].map(i => "".concat(url, "/").concat(i + 1, "/")),
        img: 'img.manga-page , .prw > a img, .prw a img'
      };
    }
  };

  var sites = [batoto, comicastle, readcomicsonline, dysnatyscans, eatmanga, egscans, foolslide, kissmanga, mangadoom, mangafox, mangago, mangahere, mangainn, mangalyght, mangapark, mangareader, mangastream, mangatown, ninemanga, readmangatoday, senmanga, tenmanga, thespectrum, wpmanga, funmanga, unionmangas, mangahost, hocvien, jaiminisbox, mangadex, hatigarmscans, mangarock, manganelo, lhtranslation, japscan];

  function logScript(...text) {
    console.log('MangaOnlineViewer:', ...text);
    return text;
  }
  const logScriptC = R.curry((x, y) => logScript(x, y)[1]);

  function logClear(...text) {
    console.clear();
    logScript(...text);
  }
  const removeValueGM = GM_deleteValue || (name => logScript('Removing: ', name));
  const getInfoGM = GM_info || {
    scriptHandler: 'Console',
    script: {
      name: 'Debug',
      version: 'Testing'
    }
  };
  const getValueGM = GM_getValue || ((name, defaultValue = null) => logScript('Getting: ', name, '=', defaultValue)[3]);
  const setValueGM = GM_setValue || ((name, value) => logScript('Getting: ', name, '=', value));

  function getBrowser() {
    const ua = navigator.userAgent;
    let tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE ".concat(tem[1] || '');
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem !== null) {
        return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    tem = ua.match(/version\/(\d+)/i);
    if (tem !== null) {
      M.splice(1, 1, tem[1]);
    }
    return M.join(' ');
  }

  function getEngine() {
    return "".concat(getInfoGM.scriptHandler || 'Greasemonkey', " ").concat(getInfoGM.version);
  }

  const cache = {
    zip: new JSZip(),
    downloadFiles: 0,
    Data: {}
  };

  function generateZip() {
    if (cache.downloadFiles === 0) {
      $('.MangaPage img').get().forEach((value, index) => {
        const img = $(value);
        const src = img.attr('src');
        const ext = src.substring(0, 20).match(/jpg|png|webp/ig) || ['png'];
        const filename = "Page ".concat(String("000".concat(index + 1)).slice(-3), ".").concat(ext[0]);
        if (src.indexOf('base64') > -1) {
          let base64 = src.replace('data:image/png;base64,', '');
          const i = base64.indexOf(',');
          if (i !== -1) {
            base64 = base64.substring(i + 1, base64.length);
          }
          cache.zip.file(filename, base64, {
            base64: true,
            createFolders: true
          });
          logScript("".concat(filename, " Added to Zip from Base64 Image, From: ").concat(src));
          cache.downloadFiles += 1;
        } else {
          try {
            GM_xmlhttpRequest({
              method: 'GET',
              url: src,
              overrideMimeType: 'text/plain; charset=x-user-defined',
              responseType: 'blob',
              onload(request) {
                cache.zip.file(filename, request.response, {
                  base64: true,
                  createFolders: true,
                  compression: 'DEFLATE'
                });
                logScript("".concat(filename, " Added to Zip as Base64 Image, From: ").concat(src, ", Data:"), request.response);
                cache.downloadFiles += 1;
              }
            });
          } catch (e) {
            logScript(e);
          }
        }
      });
    }
    const total = parseInt($('#Counters').find('b').text(), 10);
    if (cache.downloadFiles < total) {
      logScript("Waiting for Files to Download ".concat(cache.downloadFiles, " of ").concat(total));
      setTimeout(generateZip, 2000);
    } else {
      const blobLink = document.getElementById('blob');
      try {
        blobLink.download = "".concat($('title').text().trim(), ".zip");
        cache.zip.generateAsync({
          type: 'blob'
        }).then(content => {
          blobLink.href = W.URL.createObjectURL(content);
          logScript('Download Ready');
          $('#blob')[0].click();
        });
      } catch (e) {
        logScript(e);
        blobLink.innerHTML += ' (not supported on this browser)';
      }
    }
  }

  if (typeof getValueGM('MangaFitWidthIfOversized') === 'string') {
    setValueGM('MangaFitWidthIfOversized', true);
    setValueGM('MangaShowThumbnails', true);
    setValueGM('MangaDownloadZip', false);
    setValueGM('MangaAlwaysLoad', false);
  }
  if (typeof getValueGM('MangaZoom') === 'string') {
    setValueGM('MangaTimer', 1000);
    setValueGM('MangaZoom', 100);
  }
  removeValueGM('MangaAlwaysWebComic');
  removeValueGM('MangaAlwaysLoad');
  removeValueGM('MangaTheme:');
  const settings = {
    Theme: getValueGM('MangaTheme', 'Light'),
    CustomTheme: getValueGM('MangaCustomTheme', '3d0099'),
    FitWidthIfOversized: getValueGM('MangaFitWidthIfOversized', true),
    ShowThumbnails: getValueGM('MangaShowThumbnails', true),
    DownloadZip: getValueGM('MangaDownloadZip', false),
    Timer: getValueGM('MangaTimer', 1000),
    Zoom: getValueGM('MangaZoom', 100),
    loadMode: getValueGM('MangaLoadMode', 'normal'),
    viewMode: getValueGM('MangaViewMode', ''),
    bookmarks: JSON.parse(getValueGM('MangaBookmarks', '[]')),
    lazyLoadImages: getValueGM('MangaLazyLoadImages', false)
  };
  const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12;
  settings.bookmarks = settings.bookmarks.filter(el => Date.now() - el.date < bookmarkTimeLimit);
  setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
  const icon = {
    enlage: 'data:image/png;base64,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',
    reduce: 'data:image/png;base64,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%3D%3D',
    restore: 'data:image/png;base64,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%3D',
    fitwidth: 'data:image/png;base64,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',
    reload: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4XrXQa0xTdxgG8Pd/es6x2JbL2iINtCQdAkvAuOAwBMKMfiBZJGWMYQIx68plwwEbUfACeIlGyJbQVYMxsjGGZkHDIFZHIBurboOQESgLldaISMu6cmprSi/0cnp6TL8IiSb9tN+H5+OTJw/8r/rHVgCgAr7qmZKoLown7y3rgiMnf4aY2q/roeP6Aio/9RtZc/F33kedMw0lx3WnDzcP88pbhmE7DLb5dcYKc4+cmG2DfXva5D5qecFe0JuD3Wa7T+XYxOp8RNIhQZIfK+8Yeb1gdMEFhDgR1xoDBxxhUuOkUY+XxVq9GPnFBmLzvDhK93B31lu58sxnkAOl6gmIwqNx1eCDD3P2waUHf+Q7gsEOGoWkDArq6YjfhyfFZ0X4vEyaA5gHMfsZv/f9t+z9T6hwLvNqgWnZAicmx/mrNluR3W7+208ZVLRtXpnEed6YmCn6E0Q7vGGOf3bTtXbNaTZO25aMEceKCV4p674Dn3yvEyi6bhfkHW0XjrIsFKon4NPhxYT83qmz0vPa07tqr7ybuL8qLq1uEF4jEUuh9KQaiqubUXF1E6hnLaCZ+5dT1TsWv+ezb8QJB1VkG8tCTDcWKfjBQOHKSUpeol1TFfb99fGe1qtEkfoefD4wB19PPI1v/k4nrzg3QNRotFsnqkaWgAcvsIePPRlOGi9x0JjCFwplRdxhdXZKKpEpyyVJMk5KebwKT4ixUVbTEAMZsHWi1Q5GysE1WV21z9b8lxxr3kN+q18IG/wD/3l3n11YYTSrtsCPLqe7aNNpX/yyryvkWP4HolA0pGf6gSWmMCxYUYloUTfQWDoKM4AAsRiLIlwcC6UIgrNCZLnsNmoncZ4ofP+mZqsgStY0CCzji8ciu08hmtfIBNZXI3TQirGEm2AC8wJ2/Zc485AxCHxGP6+DN5LV3gJZ3VB2uuruT2mV3yoTi6tTxIX1wuR3PiDeazMACTFIlC2QWnOOk1rVWSApOyaXKBoglpfB+En628ogAgAAAABJRU5ErkJggg%3D%3D',
    zoomin: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZXQu2tTYRjH8e9535OTmDQxaZuYU6NNi9a7CaiQSczmWBGKm0WHLkL9DxTETSkF0YqD1kEUvCJI6yBxUiTVqPUKLa1JJfZiehLTkzQ3h1htQBB/08sLz+e5KKzKmXMXgk1O16lyuRJ0N7cemJv9lpifn0/ksrnhK4NnY/wlcuUxcPn6gKPJeVNv2xhuD24OtrT4aXK1+NfYHeHFbLa3o2uXe/zls9G/AucvXRtwujwnd+/ey7auLvR1PrwtHvR1Xta3BViqOjCM75HOLduD7149f9AAXBy+Ha5Uqtf27Y3Q2R7AqqlIqSAVBVUKbFYNn7eV5HdBcWku3NG14+mHxIupFUDMpJL9fn0D7YH1lCoK+QKUynD07CRCAaFAs8vKntBOmv2bsdrs/asnEJUq4TZdR5UKDiustYMUUDRzmMtQAwTgb3bh14NYNK17NaDmzULYscaGFPXCI6cnKZo5CmaOQ/0jFMwsDy/1oKoKrR4XFovWcEQ19yM/ZWSNoCo3IBW4faYTgP3HRnhy5SDVGmTy9VVUKbBqlgZAmEtLicmpaaSoISWovyYpmFmEAEX582eaBppFJhqAUml5MP7qNV/Ts6gSpKx3G7vVg1CgWoVSBbI/8mTmviAUBhuAu8MXYkZm4f6Ne4+YXcjULy9AAWo1MJdhYdHg8cgdPr2Nk/oYb5hAAmzaFho1DGPr64+TW/PFMlbNSiZXYN4wmfgyw/j4Sz6/f4PHViWdTh+JRqOj8Xg8DfVGv9Nz/GSv2+3pd3s84SanE01KqrVKorxcHNzZ4SOdTl+NxWIUi8VFXdejQ0NDiQbgX+nr6+sNhUK/EbvdHpX/LvuTsbGxRCAQmI5EIt2pVMqWTCYP/xewgvh8vmmv19s9MTFx4ifGBwN4Ure0EAAAAABJRU5ErkJggg%3D%3D',
    zoomout: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jZWQTUsbURiFz9w7mYmOSfNhYkZjjVJTba0J1EKW8R8IBXEpdOGmoP+gBemuRQJSCV1Uuyhd2C8KhXSVrlqK0bGkrS4MamJNNRonMZmJSSZdxFgHBOmBy3u5cJ733MPgnKYfz3paTOYHlUrVY7G1Bvf3/kiZTEbK5/ILz0KPorhAtHGZCb+YEVpMr8T2q/4uT6/HbnehxWx3NTUJ/qNcbrzbe8sSX/4SuRDwZG5+xmS2Tg0ODqHf64XY5oTDboXY5kBHuxtFTYAsHwZ6rt/w/Fj5+l4HeLqw6K9Wtfk7QwH0dLnBcywoZUAZBiwlMPIcnI5WJA8JSsV9f7f35udf0rfNBoDspJKTLrETXe4OlKsMCipQrgAMA5DTYzPzuO0bgM3VC97YPHk+Aalq8LeLIljKQOCBK80AJUChBCgnQA0AAeCymeESPTBw3Mh5AFtQVL/QZAQldePYwwRKSh6qkkdJOYaq5PBhbhQsy6DVaobBwOlKZPPHhU05J3tY2gnKAIvTPQAArQZoWn1mC/WvsJSA5ww6AFGKRSmxuQVKaqAUYE+TUAYgpN5F401RZHAGKukA5fJJaGllFb/Te2ApQOlpeaQ+NQ0oV4HccQHZ/W0QBiEd4M3CbFTOHrx7+fYj9g6yZ2YGQK1WL/LgSManyGusx5eQWlvSJaAAcK3fF5FluW91LdFXKFXAczyyeRUZWUFiewfx+DLWf36Hjdewu7s7FgwGI7FYLA3UF51p9N7UuMVinbRYrX6TyQQDpdBqValyUgoNdDuRTqefR6NRqKp6JIricDgclnSAyzQxMTHu8/nOIIIgDNPLbf8Ui8Ukt9u9FQgERlKplDGZTN79L0AD4nQ6txwOx8jGxsb9vyYg/nmG24G2AAAAAElFTkSuQmCC',
    zoomrestore: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVR4Xp2SW0iTYRjH/5/fYdtnTc0jrhPW0Dwt7HC3mZBeKF1pbVoO26V3RkK3URcqiLBADRxEXZR2o9LuDAaKeSHOw1ZuRdBhTs3cNL9tbt/29m6gqASBP/jB8168fx6e50FHR0eb1Wp9PjAwMJS0v79/aHBw0NbV1fWiurr6Av5Hc3PzbXKAQCBAnE4nsdvtpLe3N2Qyme7W19fnVVVV8fgXra2t9wglFouR5eVl4nA4SDAYJHvE4/HE1OSkq6WlxczzfAaOkMayrAKUiYn3cLncMBgM8K1vYnbxIz55v2B6doEprdSV9XR399TV1d0CIBwKoChBYdk01NbehNv7FcHtPziVnQ3CKxCJxjDhmMYJdVa+xdL2QBTFs4cCqFw4HIbX+xlqtRo//GvIzc9HFDx2EgK2IMLj/42ZuXkY9IZiGlB8NECIRqNITxeRhBMU8EsEHzeicK2F8TPEYEVi8GP1F3Jy80SO43IAMHsBXLImhCCwGQAt8G1lHf7vEviTWal3PCFDIXA4f7oQ66v+CB327qEOGAYQBAEZGWr4fD6Ua89BlgKAHIHA0/DwDs5nqXCl4hLG39lXJGnHA4DsdwBCwPMcWI7H6OgYzGYz0pUiphY+YXMjhJIzBbhxVY/ZmQ/o6+uTI5HdNBzEct/SGYmEydLiIrHZbOSZ1ZqqSVwmSf5sBcn42Bi5dv06KSoqInTtSwAq9odIQCDLMra2t6DRFILlWLwZHsaDh53JM8fjJ0/hnJ+HrrICoVAoodfrywG8pl7e2wKbHIRWq4VOp0NDQwNMRiOampqojTAa76Rsb2+HJElzHo8HNTU1ZSqV6hWAEoZenkmrvfhIqVTy2IMACUJSBcMwKelneWTk7UvaRalGo7FkZmbC7XY34hiUUa1UG7Ucx0BBzaMWUMW/uh49keTZSXYAAAAASUVORK5CYII%3D',
    zoomwidth: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4XqWSX0hTbRjAn/ecdSbbNJdFK/p3tTAvXI4IwrwJ6vtEqK819abIG1GCYRcFs+FNXdS+z82tP1ARpX7VVUVoYgWl07oItH8KUcHUxf7Y5v667exse3rfEUsxr/rBw3k453l/D895XmI2m3dJkqQGilwuj25YX2FGgFpCuApEhGw2G+QITCdT6QZRFJEQAkvhKisrr1RVVY3Q53OFQjGcTqebjxmObjMYDMqmxkal8djR7YhYX6pSuZhwBQ6HYw4RpcHBAan7v3/ziWQK/7Z7kJFIxPGv7jkMR6LodPRgj912x2KxQFdXVzHAbrfPIqW/rw8XQiFsuu7Djvte9M8H0fPNi6f/n8XDlz0YDC1gZ6f5lc1mY2eKIYOf8DyB9l4vfIqoYMaPYPiaBkYuD5AUJWi9HYfdcqG0rKwMlv6HoiBPC6+d2ARtdxOgKefhwpG1wCY+PxgDd0CCWy2bwWoVI5FIlDbjVgrWCAJEowtgN5bDuScZUClKCp2CyTjcbNkA8ej3rChmwjzJQy6HwCA0iiqtVgsvR8Ygk4rBxQYOovFFiC2mwGlUQSIWgkePB5J0zVU8yZUCEuConOeWCHQ6Hej1ehh1jUE4HCl0RzqX1+eD4eGnyPOykuPG+i0YfO+XcXgij2T5CIgI1dXVLIGhoaHiOyZSq9Ugzb/1ZKWdOw7otspdHyZu5Mr1OSq5y1Yxg4i5TCaDLBhut3tZeDwebG0/ZbW21Uw6THvj7+6dwauW5rSz2/qPDCk5Cr2yhXFoChqN5tdV5TjgeR54QhSX+idrLCf3BJ65RsnB/bXKkenJXiZghwrxG4o75whCKAHgmvi8sU6v9Y9PffGVKDUVMtpBTovWwOoUJIIglLD8ozsND1+/0Tg79o0LXH5AFggEHphMJgUASLAKAmVqauoFyxfFPLQdWgc1dYbaOuNZIGyEP+EHsrF5Hxph5xoAAAAASUVORK5CYII%3D',
    hide: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrUk8FKAlEUhu9oqRQ2JCG0UBgNWijWQkFhiAqaXERLceE21+16A1+gRQshCFy5MGiTCROBguEqzGkVI0kgumihOKQw3f4zOL2Aqw58MHPv+f9zzr0zAuecLRIOtmAsbCAgrIf5KGtgHyggBHzzvC+ggxp4AiNbZxsIMDh1u91niqJs5XI5v6Zpq41Gw0WbsizPIpHIpFQqDWu12vt0Oi1Cd0d1aQQPOE8kEhf1el2uVCrbpmmuBwIB12RiMAIiF63RHuVQLmksrdPpTKPq42AwmBqGwQlVVTlFsXjNZfmAK8oJR1fc3qdc0pB2CS7ZZDLpQ/uu2WxmzVUoFFDZZJeXV9Z7OBxln59vzN6nXNKgUJYMblqt1vpoNNr2IChBkiSmqk2WSh1ZAo/HzZaXpT+DbwQ0H6R1OhyOfrfb/Wk2m2Y8Ht8QRdGLeZmmvbJQaIeJog/VNXZ4uGcZ67rez+fz9ziLW7oVAXPYV5FEA8fpdDqayWSivV5vs91ue6liLBYbB4PBfrlc7lSr1Q4aeMDyM52TbWB/FysgAnaBH3jn62MwBC9AA4b97Qj//19Y2OBXgAEA3HnRUkre/J0AAAAASUVORK5CYII%3D',
    settings: 'data:image/png;base64,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%3D',
    menu: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqUlEQVR4XqWTPWtUQRhGz/vO7HWDYNJaWyz5FSJEgoWlYCGInaClCGpI4geC1mJjIWshqGn9CGwQf4TmJo0/wRRK1Jt7H+eOO8VCsIgHHjjD8MDMy4ydfLD57cfvdqFphZjFAB3mBgM3jldhjxOr73RU5lM3Np0A+Fp/BjcMw62PeL7jXBm1AMlDdil5bayeX6TvRkRmvBsJbikD3CPQUIUDXuwGAConuwTBBYCAyJRLyyOCQYxw7ZHx5KZ4tbnDhaURABuTbS4uLSLBm+QFB8ty/bExDHD1ofH0hqAFU0voyHF1ZFcKohDL7Me3xeVUHt8STQvRyFcaOJni6j0YGUEElaPwckVIEAAPUAVjOCBTHCU3oxCLvp7UuDnBI+4BOGAYnY2tGoBjUxeiKi2AuTtv1fNrmi5l+T5qJT2b1PoppfT+Jft+9m319N0yRM7dNSrg7D3jw4oAMHU45Fin7AHww4a4tSbOrBsf10UHWHmyZDC37ALC7AxUPJcBvGwimHUsl6As/usv9N0413z/NL/2/nTTdnSigP3jO5oZg2D0XQNOAQscjb0/9SM6Il0maJIAAAAASUVORK5CYII%3D',
    webcomic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVR42rWXaW4aQRCFayDs4IDZ7Bi83CGHyPLDMDiRZYRygRwmV4hQkCWbYbO5RDhBZMkLJGGzwezrkOo2xIEwhA7tJz0hesT019XV1YUA09KeSFL3wO+Hq+sbEASBehWNRiPq3Z1tOI3F4J0o6nC4N3k++3YbAtwRgGwuByqVaqXJJ5JlGbwezwRgHYcqSgCuEylaOPCL8P1HHgFWW/0jwAi2XmwggIQAATcOFZUBogggilAoFlcO/0RkC9wuF5xKCBBYEqBUvuUK4HTY2QAq1SqXySeyWa1sALVanSvA2pqFDaDRbHIFMJtMbADtdpsrgMFgYAPodvv4dcRpegF0Os2SAJJUIIWIFA9MX07zC7SojQvRYoBoPF4Q9/c5rXxaUiIBAZ9vIYDzczicNpvNL2Wyep4RQDcajcyHUOgNjpSUANbQ22gHWs05AEN0GX2DrikBPEMb0bo5z1YVCWcX3UIPlADUyVTqU38w+Eiv0f+aQ6AvJUkn+nxTV+88zQKYo7FYHX+48nIH/T7EUyly7BZCzAI48BiWyDG8vLqmybPsPtBoYdT2dncgHIlA6OgIer0eJM7O4P0CCMU6kM3mHjoiBgCybV6vB74cH8PbV6/Ban2OBa0LyfNzRQjlhuRnnh4dFpGju7W5AREECJD7pN4Au32dRiKJkZi3HYqlOF9gb0gIwKbbRSMQPDyELk7cbrVpJEhOpNLpvxJTuSEplZkBaOPhdMDXTAa+XVzQl5OtkYdDCAWDgFUWcHv/0ROOAW4rd7B8BjwCGPQGMBoNc58z3YbV+3umyf+EmCfmjqiOCcRFD7UJLBYzG0Cz1eIDMJbJaGQD6HQ6XAH0ej0bQL/f43kbg0ajZQMYDmXFhGIHEECtVrEBEPEEIFoGwIbeG38+hUgBuoQFhUiLNqE1TwRAWm3yh+N3Kf4FvfygMCu2Xp8AAAAASUVORK5CYII%3D',
    bookmark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4T5WTW0iTARiGnzl/TadLnUGpebgRDU2zg2YQmBdBJHYwNUHyhGIFURdaCJnQhUpUF2EoHqE8VZB4E0QlhaampmZZVprzUEpz859u0/3OGFGUaeB3/b4PH+/7fTL+M4dDNyTJgaZeU+1aMtl//LInt1O7sSwQfaZ2J7C8mnZNgL9K2P2m/3EHpimC9ySED2l4tS5AUXZUaU5JbSbGYYqzU8pyaz5mrQegGm0tG/LeFe3G/GfULeUzPsca/QHNSojsYLBzrI+fn4e9naBUubm6OCkULv6+m7bFpJzez+IszI+AtovmurvPh4ZN7+YMyzqNiG5BkomjWmlSlhDpXlRRfj1HEZgMGAAjLImgVYNhDPSfYLYXDG9BFEG0AZmCeZ2Z9OpvxdYQZYEeQlrlzQtFEXEZKvR6MEzBwjSIg6BpA50VYAKjAwjutH+QNGnV47mDk0uVv1twhn038qJvpWYlh9qYjTDT+dNsGAWTGRYdsci9qHph6j1fOXJWL9FqzWNljZ51lyOaE4967kDdAmY9LFpgwR4UPtR3Ob0+WdwZA0z8CvOfO3h61as3KnQmBL0JJDmY7WHRAWxdeDau7DtwpTv0zyb+Amx1JWjgmkuPUjAK4ACuASDZwaQazEuIdq7moLz+sDEtA6tucDxMyLx/TlWK3JavRjfLpdrpmmXkFMZ7nNoi6GyspriSiawHPYayVQHlSRsb0w+5n2h4aXx/sWGq4Mv3pXqr0NddnliYsDk/Ya9DQMUjzb2MO9r41QDKh5nKjqY+qa2qw1AAqFdcnXdquGN+bIgQeaRsNhwQV7bg5GzLdr1EO2BZ40ttnG2J0Ev0A3NWzQ/Exfbo5qJ4cQAAAABJRU5ErkJggg==',
    pictureright: 'data:image/png;base64,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',
    picturedown: 'data:image/png;base64,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',
    pictureleft: 'data:image/png;base64,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'
  };

  const isEmpty = R.either(R.either(R.isNil, R.isEmpty), R.either(x => R.length(x) === 0, x => x === 0));
  const mapIndexed = R.addIndex(R.map);

  function normalizeUrl(url) {
    let uri = url.trim();
    if (uri.startsWith('//')) {
      uri = "https:".concat(uri);
    }
    return uri;
  }

  function addImg(index, src) {
    const url = normalizeUrl(src);
    if (index <= 2 || !settings.lazyLoadImages) {
      logScript('Loaded Image:', index, 'Source:', url);
      $("#PageImg".concat(index)).attr('src', url).parent().slideToggle();
      $("#ThumbnailImg".concat(index)).attr('src', url);
    } else {
      $("#PageImg".concat(index)).attr('data-src', url).parent().slideToggle();
      $("#ThumbnailImg".concat(index)).attr('data-src', url);
      $("#PageImg".concat(index)).unveil({
        offset: 500,
        throttle: 500,
        placeholder: 'http://placehold.it/1000x500'
      }).on('loaded.unveil', () => {
        logScript('Unveiled Image:', index, 'Source:', url);
      });
      $("#ThumbnailImg".concat(index)).unveil({
        offset: 0,
        throttle: 500,
        placeholder: 'http://placehold.it/100x150'
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
      $("#PageImg".concat(index)).attr('altsrc', url);
      $("#ThumbnailImg".concat(index)).attr('onerror', "this.src='".concat(url, "';this.onerror=null;"));
    }
    return index;
  }

  function getPage(url, wait = settings.Timer) {
    return new Promise(resolve => {
      setTimeout(() => {
        logScript("Getting page: ".concat(url));
        $.ajax({
          type: 'GET',
          url,
          dataType: 'html',
          async: true,
          success: html => resolve(html),
          retryCount: 0,
          retryLimit: 10,
          retryTimeout: 10000,
          timeout: 1000,
          created: Date.now(),
          error() {
            this.retryCount += 1;
            if (this.retryCount <= this.retryLimit && Date.now() - this.created < this.retryTimeout) {
              logScript("Retrying Getting page: ".concat(url));
              $.ajax(this);
            } else {
              logScript("Failed Getting page: ".concat(url));
            }
          }
        });
      }, wait);
    });
  }
  const loadMangaPages = (begin, manga) => mapIndexed((url, index) => index >= begin ? getPage(url, (manga.timer || settings.Timer) * (index - begin)).then(response => addImg(index + 1, $(response).find(manga.img).attr('src'))) : null, manga.listPages);

  function getImages(src, wait = settings.Timer) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(src);
      }, wait);
    });
  }
  const loadMangaImages = (begin, manga) => mapIndexed((src, index) => index >= begin ? getImages(src, (manga.timer || settings.Timer) * (index - begin)).then(response => addImg(index + 1, response)) : null, manga.listImages);
  const loadMangaImagesAlt = (begin, manga) => mapIndexed((src, index) => index >= begin ? addImgAlt(index + 1, src) : null, manga.listImagesAlt);

  function loadManga(manga, begin = 1) {
    logScript('Loading Images');
    logScript("Intervals: ".concat(manga.timer || settings.Timer || 'Default(1000)'));
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
        wait: settings.timer
      });
    }
  }

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

  function applyZoom(page, newZoom) {
    const zoom = newZoom || settings.Zoom;
    const pages = page || '.PageContent img';
    $(pages).each((index, value) => $(value).width(zoom === 1000 ? $('html').width() : $(value).prop('naturalWidth') * (zoom / 100)));
  }

  function checkImagesLoaded(manga) {
    if (settings.lazyLoadImages) {
      logScript('Download NOT Available with Lazy Load Images');
      return;
    }
    const images = $('.PageContent img').get();
    const total = images.length;
    const missing = images.filter(item => $(item).prop('naturalWidth') === 0);
    const loaded = images.filter(item => $(item).prop('naturalWidth') !== 0);
    loaded.filter(item => $(item).attr('width') === undefined).forEach(item => applyZoom($(item)));
    missing.forEach(item => reloadImage($(item)));
    NProgress.configure({
      showSpinner: false
    }).set(loaded.length / total);
    $('#Counters i, #NavigationCounters i').html(loaded.length);
    logScript("Progress: ".concat(Math.floor(loaded.length / total * 100), "%"));
    $('title').html("(".concat(Math.floor(loaded.length / total * 100), "%) ").concat(manga.title));
    if (loaded.length < total) {
      setTimeout(() => checkImagesLoaded(manga), 5000);
    } else {
      logScript('Images Loading Complete');
      $('.download').attr('href', '#download');
      logScript('Download Available');
      if (settings.DownloadZip) {
        $('#blob').click();
      }
    }
  }

  const scheme = new ColorScheme().scheme('mono').variation('default');

  function addTheme(theme) {
    return "<style type='text/css' name='".concat(theme[0], "'>\n  .").concat(theme[0], " .controlLabel, .").concat(theme[0], " .ViewerTitle, .").concat(theme[0], ", .PageFunctions a.visible, .").concat(theme[0], " a, .").concat(theme[0], " a:link, .").concat(theme[0], " a:visited, .").concat(theme[0], " a:active, .").concat(theme[0], " a:focus{ text-decoration:none; color: ").concat(theme[2], ";}\n  .").concat(theme[0], " {background-repeat: repeat;background-position: 0 0;background-image: none;background-color: ").concat(theme[1], ";background-attachment: scroll;}\n  .").concat(theme[0], " #ImageOptions #menu .menuOuterArrow {border-left-width: 10px;border-left-style: solid;border-left-color: ").concat(theme[4], ";}\n  .").concat(theme[0], " #ImageOptions #menu .menuInnerArrow {border-left-width: 5px;border-left-style: solid;border-left-color: ").concat(theme[1], ";}\n  .").concat(theme[0], " .PageFunctions { border: 1px solid ").concat(theme[3], "; border-bottom: medium none; border-left: medium none; border-right: medium none;}\n  /*.").concat(theme[0], " #Chapter { border: 1px solid ").concat(theme[3], "; border-top: medium none; border-left: medium none; border-right: medium none;}*/\n  .").concat(theme[0], " .PageFunctions > span, .").concat(theme[0], " .Thumbnail span {background: none repeat scroll 0 0 ").concat(theme[4], ";}\n  .").concat(theme[0], " .painel {background: none repeat scroll 0 0 ").concat(theme[4], "; border: thin solid ").concat(theme[3], ";}\n  .").concat(theme[0], " .PageContent, .").concat(theme[0], " .Thumbnail img { outline: 2px solid ").concat(theme[3], "; background: none repeat scroll 0 0 ").concat(theme[4], ";}\n  .").concat(theme[0], " .ChapterControl a { border: 1px solid ").concat(theme[3], "; background-color: ").concat(theme[5], ";\n  </style>");
  }

  function addCustomTheme(color) {
    const bg = scheme.from_hex(color).colors();
    return addTheme(['Custom_Dark', '#000000', "#".concat(bg[2]), "#".concat(bg[3]), "#".concat(bg[0]), "#".concat(bg[1])]) + addTheme(['Custom_Light', '#eeeeec', "#".concat(bg[3]), "#".concat(bg[2]), "#".concat(bg[0]), "#".concat(bg[1])]);
  }

  function loadThemes() {
    const bg = scheme.from_hex(settings.CustomTheme).colors();
    return [
      ['Dark', '#000000', '#ffffff', '#666666', '#333333', '#282828'],
      ['Light', '#eeeeec', '#2e3436', '#888a85', '#babdb6', '#c8cec2'],
      ['Clear', '#ffffff', '#2e3436', '#888a85', '#eeeeec', '#d3d7cf'],
      ['Dark_Blue', '#000000', '#91a0b0', '#586980', '#3e4b5b', '#222c3b'],
      ['Tango_Blue', '#000000', '#82a0bf', '#3d669b', '#304c77', '#102747'],
      ['Lime', '#000000', '#8abd59', '#608d34', '#38531f', '#233413'],
      ['Plum', '#000000', '#ad7fa8', '#75507b', '#49324d', '#311b37'],
      ['Light_Plum', '#eeeeec', '#5c3566', '#9b71a2', '#ad7fa8', '#d2b8ce'],
      ['Earthy', '#000000', '#ffffff', '#693d3d', '#46211a', '#683327'],
      ['Cool_Blues', '#000000', '#c4dfe6', '#66a5ad', '#07575b', '#003b46'],
      ['Custom_Dark', '#000000', "#".concat(bg[2]), "#".concat(bg[3]), "#".concat(bg[0]), "#".concat(bg[1])],
      ['Custom_Light', '#eeeeec', "#".concat(bg[3]), "#".concat(bg[2]), "#".concat(bg[0]), "#".concat(bg[1])]
    ];
  }
  const themes = loadThemes();
  const themesSelector = R.map(theme => "<option value='".concat(theme[0], "' ").concat(settings.Theme === theme[0] ? 'selected' : '', ">").concat(theme[0].replace('_', ' '), "</option>"), themes);
  const themesCSS = R.map(theme => addTheme(theme), themes).join('');

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
      logScript("Keybinds error: ".concat(e));
    }

    function processKey(e) {
      const a = e.keyCode || e.which;
      if ($.inArray(a, [39, 46, 190, 37, 44, 188, 43, 107, 61, 45, 109, 42, 106, 56, 104, 53, 101]) !== -1) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        switch (a) {
          case 39:
          case 46:
          case 190:
            $('.ChapterControl:first .next')[0].click();
            break;
          case 37:
          case 44:
          case 188:
            $('.ChapterControl:first .prev')[0].click();
            break;
          case 43:
          case 107:
          case 61:
            $('#enlarge').click();
            break;
          case 45:
          case 109:
            $('#reduce').click();
            break;
          case 42:
          case 106:
          case 56:
          case 104:
            $('#restore').click();
            break;
          case 53:
          case 101:
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

  function controls() {
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
      $('.PageContent img').removeAttr('width').removeAttr('style');
    });
    $('#fitwidth').click(() => {
      settings.Zoom = 1000;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#webcomic').click(() => {
      $('#Chapter').addClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL');
    });
    $('#ltrmode').click(() => {
      $('#Chapter').removeClass('WebComic').addClass('FluidLTR').removeClass('FluidRTL');
    });
    $('#rtlmode').click(() => {
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').addClass('FluidRTL');
    });
    $('#verticalmode').click(() => {
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL');
    });
    $('#fitIfOversized').change(event => {
      $('#Chapter').toggleClass('fitWidthIfOversized');
      if ($(event.target).is(':checked')) {
        setValueGM('MangaFitWidthIfOversized', true);
      } else {
        setValueGM('MangaFitWidthIfOversized', false);
      }
      logScript("fitIfOversized: ".concat(getValueGM('MangaFitWidthIfOversized')));
    });
    $('#viewMode').change(event => {
      const mode = $(event.target).val();
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL').addClass(mode);
      setValueGM('MangaViewMode', mode);
      logScript("ViewMode: ".concat(getValueGM('MangaViewMode')));
    });
    $('#loadMode').change(event => {
      const mode = $(event.target).val();
      setValueGM('MangaLoadMode', mode);
      logScript("MangaLoadMode: ".concat(getValueGM('MangaLoadMode')));
    });
    $('#showThumbnails').change(event => {
      $('#Navigation').toggleClass('disabled');
      if ($(event.target).is(':checked')) {
        setValueGM('MangaShowThumbnails', true);
      } else {
        setValueGM('MangaShowThumbnails', false);
      }
      logScript("MangaShowThumbnails: ".concat(getValueGM('MangaShowThumbnails')));
    });
    $('#downloadZip').change(event => {
      if ($(event.target).is(':checked')) {
        setValueGM('MangaDownloadZip', true);
        Swal.fire({
          title: 'Attention',
          text: 'Next time a chapter finish loading you will be prompted to save automatically',
          timer: 10000,
          type: 'info'
        });
      } else {
        setValueGM('MangaDownloadZip', false);
      }
      logScript("MangaDownloadZip: ".concat(getValueGM('MangaDownloadZip')));
    });
    $('#blob').one('click', generateZip);
    $('.download').click(() => {
      logScript('Downloading Chapter');
      $('#blob')[0].click();
    });
    $('#lazyLoadImages').change(event => {
      if ($(event.target).is(':checked')) {
        setValueGM('MangaLazyLoadImages', true);
        Swal.fire({
          title: 'Warning',
          html: 'Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>' + 'Suggestion: <span style="color:red;font:bold">Disable Thumbnails</span> to save Bandwidth/Memory.',
          type: 'warning'
        });
      } else {
        setValueGM('MangaLazyLoadImages', false);
      }
      logScript("MangaLazyLoadImages: ".concat(getValueGM('MangaLazyLoadImages')));
    });
    $('#PagesPerSecond').change(event => {
      setValueGM('MangaTimer', parseInt($(event.target).val(), 10));
      logScript("MangaTimer: ".concat(getValueGM('MangaTimer')));
    });
    $('#DefaultZoom').change(event => {
      settings.Zoom = parseInt($(event.target).val(), 10);
      $('#Zoom b').html(settings.Zoom);
      setValueGM('MangaZoom', settings.Zoom);
      logScript("MangaZoom: ".concat(getValueGM('MangaZoom')));
      applyZoom();
    });
    $('#ThemeSelector').change(event => {
      const target = $(event.target);
      $('#MangaOnlineViewer , body').removeClass().addClass(target.val());
      logScript('MangaTheme', target.val());
      setValueGM('MangaTheme', target.val());
      logScript("MangaTheme: ".concat(getValueGM('MangaTheme')));
      if (target.val() === 'Custom_Dark' || target.val() === 'Custom_Light') {
        $('#CustomThemeHue').show();
      } else {
        $('#CustomThemeHue').hide();
      }
    });
    jscolor(document.getElementById('CustomThemeHue'));
    $('#CustomThemeHue').change(event => {
      const target = $(event.target).val();
      logScript("CustomTheme: #".concat(target));
      $('style[title="Custom_Light"], style[title="Custom_Dark"]').remove();
      $('head').append(addCustomTheme(target));
      setValueGM('MangaCustomTheme', target);
      logScript("MangaCustomTheme: ".concat(getValueGM('MangaCustomTheme')));
    });

    function scrollToElement(ele) {
      $(W).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
    }
    $('#gotoPage').bind('change', event => {
      scrollToElement($("#Page".concat($(event.target).val())));
    });
    $('.Thumbnail').bind('click', event => {
      scrollToElement($("#Page".concat($(event.currentTarget).find('span').html())));
    });
    $('#settings').click(() => {
      $('#ViewerControls').slideToggle();
      $('#ViewerShortcuts').slideToggle();
      $('#ImageOptions').toggleClass('settingsOpen');
      $('#Navigation').toggleClass('visible');
    });
    $('.Bookmark').click(event => {
      const num = parseInt($(event.target).parents('.MangaPage').find('.PageFunctions span').text(), 10);
      const mark = {
        url: W.location.href,
        page: num,
        date: Date.now()
      };
      const found = settings.bookmarks.filter(el => el.url === mark.url).length > 0;
      settings.bookmarks = settings.bookmarks.filter(el => el.url !== mark.url);
      if (found) {
        Swal.fire({
          title: 'Bookmark Removed',
          timer: 10000,
          type: 'error'
        });
      } else {
        settings.bookmarks.push(mark);
        Swal.fire({
          title: 'Saved Bookmark',
          html: "Next time you open this chapter it will resume from:<h4>Page ".concat(num, "</h4>(Only <i>ONCE</i> per Bookmark, will be removed after a year unused)"),
          type: 'success'
        });
      }
      setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
      logScript("MangaBookmarks: ".concat(getValueGM('MangaBookmarks')));
    });
    $('.Reload').click(event => {
      reloadImage($(event.target).parents('.MangaPage').find('.PageContent img'));
    });
    $('.ZoomIn').click(event => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      const ratio = img.width() / img.prop('naturalWidth') * 1.25 * 100;
      applyZoom(img, ratio);
    });
    $('.ZoomOut').click(event => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      const ratio = img.width() / img.prop('naturalWidth') * 0.75 * 100;
      applyZoom(img, ratio);
    });
    $('.ZoomRestore').click(() => {
      $('.PageContent img').removeAttr('width');
    });
    $('.ZoomWidth').click(event => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      applyZoom(img, 1000);
    });
    $('.Hide').click(event => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent');
      img.slideToggle('slow');
    });
  }

  const painel = "<div id='ImageOptions'>\n  <div id='menu'>\n    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>\n  </div>\n  <div class='painel'>\n    <img id='enlarge' alt='Enlarge' title='Enlarge' src='".concat(icon.enlage, "' class='controlButton' />\n    <img id='restore' alt='Restore' title='Restore' src='").concat(icon.restore, "' class='controlButton' />\n    <img id='reduce' alt='Reduce' title='Reduce' src='").concat(icon.reduce, "' class='controlButton' />\n    <img id='fitwidth' alt='Fit Width' title='Fit Width' src='").concat(icon.fitwidth, "' class='controlButton' />\n    <img id='webcomic' alt='Web Comic Mode' title='Web Comic Mode' src='").concat(icon.webcomic, "' class='controlButton' />\n    <img id='ltrmode' alt='Left to Right Mode' title='Left to Right Mode' src='").concat(icon.pictureleft, "' class='controlButton'/>\n    <img id='verticalmode' alt='Vertical Mode' title='Vertical Mode' src='").concat(icon.picturedown, "' class='controlButton'/>\n    <img id='rtlmode' alt='Right to Left Mode' title='Right to Left Mode' src='").concat(icon.pictureright, "' class='controlButton'/>\n    <img id='settings' alt='settings' title='settings' src='").concat(icon.settings, "' class='controlButton' />\n  </div>\n  <div id='Zoom' class='controlLabel'>Zoom: <b>").concat(settings.Zoom, "</b> %</div>\n</div>");
  const shortcuts = "<div id='ViewerShortcuts' class='painel' style='display: none;'>\n  <span class='key'>+</span> or <span class='key'>=</span> : Global Zoom in pages (enlarge)<br/>\n  <span class='key'>-</span> : Global Zoom out pages (reduce)<br/>\n  <span class='key'>*</span> or <span class='key'>8</span> : Global Restore pages to original<br/>\n  <span class='key'>5</span> : Global Fit window width<br/>\n  <span class='key'>Arrow Right</span> or <span class='key'>.</span> : Next Chapter<br/>\n  <span class='key'>Arrow Left</span> or <span class='key'>,</span> : Previous Chapter<br/>\n</div>";
  const controls$1 = "<div id='ViewerControls' class='painel' style='display: none;'>\n  <span class='controlLabel'>Theme:\n    <input id='CustomThemeHue' class='jscolor' value='".concat(settings.CustomTheme, "' ").concat(settings.Theme !== 'Custom_Dark' && settings.Theme !== 'Custom_Light' ? 'style="display: none;"' : '', "'>\n    <select id='ThemeSelector'>\n      ").concat(themesSelector, "\n    </select>\n  </span>\n  <span class='controlLabel'>Default Load Mode:\n    <select id='loadMode'>\n      <option value='normal' ").concat(settings.loadMode === 'normal' ? 'selected' : '', ">Normal(Wait 3 sec)</option>\n      <option value='always' ").concat(settings.loadMode === 'always' ? 'selected' : '', ">Always(Immediately)</option>\n      <option value='never' ").concat(settings.loadMode === 'never' ? 'selected' : '', ">Never(Manually)</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Pages/Second:\n    <select id='PagesPerSecond'>\n      <option value='3000' ").concat(settings.Timer === 3000 ? 'selected' : '', ">0.3(Slow)</option>\n      <option value='2000' ").concat(settings.Timer === 2000 ? 'selected' : '', ">0.5</option>\n      <option value='1000' ").concat(settings.Timer === 1000 ? 'selected' : '', ">01(Normal)</option>\n      <option value='500' ").concat(settings.Timer === 500 ? 'selected' : '', ">02</option>\n      <option value='250' ").concat(settings.Timer === 250 ? 'selected' : '', ">04(Fast)</option>\n      <option value='125' ").concat(settings.Timer === 125 ? 'selected' : '', ">08</option>\n      <option value='100' ").concat(settings.Timer === 100 ? 'selected' : '', ">10(Extreme)</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Default Zoom:\n    <select id='DefaultZoom'>\n      <option value='50' ").concat(settings.Zoom === 50 ? 'selected' : '', ">50%</option>\n      <option value='75' ").concat(settings.Zoom === 75 ? 'selected' : '', ">75%</option>\n      <option value='100' ").concat(settings.Zoom === 100 ? 'selected' : '', ">100%</option>\n      <option value='125' ").concat(settings.Zoom === 125 ? 'selected' : '', ">125%</option>\n      <option value='150' ").concat(settings.Zoom === 150 ? 'selected' : '', ">150%</option>\n      <option value='175' ").concat(settings.Zoom === 175 ? 'selected' : '', ">175%</option>\n      <option value='200' ").concat(settings.Zoom === 200 ? 'selected' : '', ">200%</option>\n      <option value='1000' ").concat(settings.Zoom === 1000 ? 'selected' : '', ">Fit Width</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Default View Mode:\n    <select id='viewMode'>\n      <option value='' ").concat(settings.viewMode === '' ? 'selected' : '', ">Vertical</option>\n      <option value='WebComic' ").concat(settings.viewMode === 'WebComic' ? 'selected' : '', ">WebComic</option>\n      <option value='FluidLTR' ").concat(settings.viewMode === 'FluidLTR' ? 'selected' : '', ">Left to Right</option>\n      <option value='FluidRTL' ").concat(settings.viewMode === 'FluidRTL' ? 'selected' : '', ">Right to Left</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Fit Width if Oversized:\n    <input type='checkbox' value='true' name='fitIfOversized' id='fitIfOversized' ").concat(settings.FitWidthIfOversized ? 'checked' : '', ">\n  </span>\n  <span class='controlLabel'>Show Thumbnails:\n    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ").concat(settings.ShowThumbnails ? 'checked' : '', ">\n   </span>\n   <span class='controlLabel'>Lazy Load Images:\n    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ").concat(settings.lazyLoadImages ? 'checked' : '', ">\n   </span>\n  <span class='controlLabel'>Download Images as Zip Automatically:\n    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ").concat(settings.DownloadZip ? 'checked' : '', ">\n  </span>\n</div>");
  const chapterControl = R.curry((id, target, manga) => "<div id='".concat(id, "' class='ChapterControl'>\n    <a id='bottom' href='#").concat(target, "' style='display: none;'>Bottom</a>\n    <a href='#' class='download'>Download</a>\n    <a class='prev' id='prev' href='").concat(manga.prev || '', "' onclick='W.location=\"").concat(manga.prev || '', "\";W.location.reload();'>Previous</a>\n    <a class='next' id='next' href='").concat(manga.next || '', "' onclick='W.location=\"").concat(manga.next || '', "\";W.location.reload();'>Next</a>\n</div>"));
  const chapterControlTop = chapterControl('ChapterControlTop', 'ChapterControlBottom');
  const chapterControlBottom = chapterControl('ChapterControlBottom', 'MangaOnlineViewer');
  const title = manga => "<div class='ViewerTitle'><br/><a id='series' href='".concat(manga.series, "'>").concat(manga.title, "<br/>(Return to Chapter List)</a></div>");
  const listPages = R.times(index => "<div id='Page".concat(index + 1, "' class='MangaPage'>\n  <div class='PageFunctions'>\n    <a class='Bookmark controlButton' title='Bookmark'></a>\n    <a class='ZoomIn controlButton' title='Zoom In'></a>\n    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>\n    <a class='ZoomOut controlButton' title='Zoom Out'></a>\n    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>\n    <a class='Hide controlButton' title='Hide'></a>\n    <a class='Reload controlButton' title='Reload'></a>\n    <span>").concat(index + 1, "</span>\n  </div>\n  <div class='PageContent' style='display: none;'>\n    <img id='PageImg").concat(index + 1, "' alt='PageImg").concat(index + 1, "' />\n  </div>\n</div>"));
  const listOptions = R.times(index => "<option value='".concat(index + 1, "'>").concat(index + 1, "</option>"));
  const listThumbnails = R.times(index => "<div id='Thumbnail".concat(index + 1, "' class='Thumbnail'><img id='ThumbnailImg").concat(index + 1, "' alt='ThumbnailImg").concat(index + 1, "' src=''/><span>").concat(index + 1, "</span></div>"));
  const body = (manga, begin = 0) => "<div id='MangaOnlineViewer' class='".concat(settings.Theme, "' style='min-height: 1080px;'>\n  ").concat(title(manga), "\n  ").concat(chapterControlTop(manga), "\n  <div id='Chapter' align='center' class='").concat(settings.FitWidthIfOversized === true ? 'fitWidthIfOversized' : '', " ").concat(settings.viewMode, "'>\n    ").concat(listPages(manga.quant).slice(begin).join(''), "    \n  </div>\n  ").concat(title(manga), "\n  ").concat(chapterControlBottom(manga), "\n  ").concat(painel, "    \n  ").concat(controls$1, "\n  ").concat(shortcuts, "    \n  <div id='Counters' class='controlLabel'>\n    <i>0</i> of <b>").concat(manga.quant, "</b> Pages Loaded \n    <span class='controlLabel'>Go to Page:</span>\n    <select id='gotoPage'>\n      <option selected>#</option>\n      ").concat(listOptions(manga.quant).slice(begin).join(''), "\n    </select>\n  </div>\n  <div id='Navigation' align='center' class='painel ").concat(settings.ShowThumbnails ? '' : 'disabled', "'>\n    <div id='NavigationCounters' class='controlLabel'>\n      <img alt='Thumbnails' title='Thumbnails' src='").concat(icon.menu, "' class='nav' /><i>0</i> of <b>").concat(manga.quant, "</b> Pages Loaded\n    </div>\n    <div id='Thumbnails'>\n      ").concat(listThumbnails(manga.quant).slice(begin).join(''), "\n    </div>\n  </div>\n  <a href='#' id='blob' style='display: none;'>Download</a>\n</div>");
  const readerCSS = "<style type='text/css'>html{font-size:100%}\nbody{margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#333;background-color:#FFF;padding:0}\na{color:#08C;text-decoration:none}\nimg{height:auto;max-width:100%;vertical-align:middle;border:0 none}\n/*button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}\nbutton,input{line-height:normal}\nlabel,input,button,select,textarea{font-size:14px;font-weight:normal;line-height:20px}\ninput,button,select,textarea{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}\nselect,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{display:inline-block;height:20px;padding:4px 6px;margin-bottom:10px;font-size:14px;line-height:20px;color:#555;vertical-align:middle;border-radius:4px 4px 4px 4px}\ninput:not([type='checkbox']),textarea,.uneditable-input{width:206px}\ntextarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{background-color:#FFF;border:1px solid #CCC;box-shadow:0 1px 1px rgba(0,0,0,0.075) inset;transition:border .2s linear 0,box-shadow .2s linear 0}\ninput,textarea,.uneditable-input{margin-left:0}*/\n#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px;}\n.key{display:inline-block;min-width:1em;padding:.2em .3em;font:400 .85em/1 'Lucida Grande',Lucida,Arial,sans-serif;text-align:center;text-decoration:none;-moz-border-radius:.3em;-webkit-border-radius:.3em;border-radius:.3em;border:none;cursor:default;-moz-user-select:none;-webkit-user-select:none;user-select:none}\n.key[title]{cursor:help}\n.key, .dark-keys,.dark-keys .key,.key.dark{background:#505050;background:-moz-linear-gradient(top,#3c3c3c,#505050);background:-webkit-gradient(linear,left top,left bottom,from(#3c3c3c),to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-moz-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3)}\n.light-keys,.light-keys .key,.key.light{background:#fafafa;background:-moz-linear-gradient(top,#d2d2d2,#fff);background:-webkit-gradient(linear,left top,left bottom,from(#d2d2d2),to(#fff));color:#323232;text-shadow:0 0 2px #fff;-moz-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9);-webkit-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9);box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9)}\n#MangaOnlineViewer{width:100%;height:100%;padding-bottom: 100px;}\n#MangaOnlineViewer #Chapter{text-align:center;margin: 25px auto 0;display:block;}\n#MangaOnlineViewer #Chapter.WebComic .PageFunctions {position: relative;}\n#MangaOnlineViewer #Chapter.WebComic .PageContent {margin-top: -23px; margin-bottom: 0;}\n#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {width: auto;}\n#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {width: auto;}\n#MangaOnlineViewer #Chapter.FluidLTR {direction: ltr;}\n#MangaOnlineViewer #Chapter.FluidRTL {direction: rtl;}\n#MangaOnlineViewer #ViewerControls{padding: 8px;position:fixed;top:0;left:332px;width:auto;}\n#MangaOnlineViewer #ViewerShortcuts{padding: 8px;position:fixed;top:65px;left:0;}\n#ViewerControls .controlLabel {display: list-item; list-style: none;}\n#MangaOnlineViewer select{height:20px;padding:0;margin-bottom:5px}\n#MangaOnlineViewer .controlButton{cursor:pointer;border:0 none;}\n#MangaOnlineViewer #ImageOptions {left: 0;position: absolute;top: 0;width: 332px;}\n#MangaOnlineViewer #ImageOptions .painel {padding:4.5px;position: inherit;}\n#MangaOnlineViewer #ImageOptions:hover {position:fixed;}\n#MangaOnlineViewer #ImageOptions.settingsOpen {position:fixed;}\n#MangaOnlineViewer #ImageOptions #menu {position:fixed;height: 64px;width: 200px;top: 0;}\n#MangaOnlineViewer #ImageOptions #Zoom {position:absolute;left: 18px;bottom: -65px;}\n#MangaOnlineViewer .MangaPage{width:100%;display:inline-block;text-align:center;align:center;transform: translate3d(0, 0, 0);backface-visibility: hidden;perspective: 1000px;-webkit-backface-visibility: hidden;-webkit-perspective: 1000px;-moz-transform: translate3d(0, 0, 0);-moz-backface-visibility: hidden;-moz-perspective: 1000px;}\n#MangaOnlineViewer .PageContent{margin:0 0 15px;text-align:center;display:inline-block}\n#MangaOnlineViewer #gotoPage{width:35px;}\n#MangaOnlineViewer #ThemeSelector{width:110px;}\n#MangaOnlineViewer .ChapterControl{-moz-user-select:none;-webkit-user-select: none;margin-right:120px;margin-top: 1px;float: right;}\n#MangaOnlineViewer .ChapterControl a{display:inline-block;width: 80px;height:25px;text-align:center;margin-left: 3px;margin-bottom: -1px;}\n#MangaOnlineViewer .ChapterControl a[href='#'],#MangaOnlineViewer .ChapterControl a[href='']{visibility:hidden}\n#MangaOnlineViewer .ViewerTitle{display: block;text-align: center;height:35px;}\n#MangaOnlineViewer #Counters {position: absolute;right: 10px;top: 10px;}\n#MangaOnlineViewer .PageFunctions{-moz-user-select:none;-webkit-user-select: none;font-family:monospace;font-size:10pt;padding-right:120px;text-align:right}\n#MangaOnlineViewer .PageFunctions>span{min-width:20px;text-align:center;display:inline-block;padding:2px 10px}\n#MangaOnlineViewer .PageFunctions > a {height: 16px;width: 16px; padding: 10px;}\n#MangaOnlineViewer .PageFunctions a{opacity:0.2}\n#MangaOnlineViewer .PageFunctions:hover a{opacity:1}\n#MangaOnlineViewer #NavigationCounters {margin-top: 5px;width: 100%;}\n#MangaOnlineViewer #Navigation {bottom: -180px;height: 190px;overflow-x: hidden;overflow-y: hidden;padding-bottom: 20px;position: fixed;white-space: nowrap;width: 100%;}\n#MangaOnlineViewer #Navigation #Thumbnails {overflow-x:auto;overflow-y: hidden;}\n#MangaOnlineViewer #Navigation:hover {bottom: 0;}\n#MangaOnlineViewer #Navigation.disabled {display: none;}\n#MangaOnlineViewer #Navigation.visible {bottom: 0;}\n#MangaOnlineViewer #Navigation .Thumbnail {display: inline-block;height: 150px;margin: 0 5px;position: relative;}\n#MangaOnlineViewer #Navigation .Thumbnail span {display: block;opacity: 0.8;position: relative;top: -30px;width: 100%;}\n#MangaOnlineViewer #Navigation .Thumbnail img {align-content: center;cursor: pointer;display: inline-block;margin-bottom: -10px;margin-top: 10px;max-height: 150px;min-height: 150px;min-width: 100px;}\n#MangaOnlineViewer #Navigation .nav {transform: rotate(-90deg);;}\n#MangaOnlineViewer #ImageOptions .menuOuterArrow  {width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left:10px solid blue;display: inline-block;position: absolute;bottom: 0;}\n#MangaOnlineViewer #ImageOptions .menuInnerArrow {width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left:5px solid white;left: -10px;position: absolute;top: -5px;display: inline-block;}\n#MangaOnlineViewer .fitWidthIfOversized .PageContent img { max-width: ".concat($(window).width(), "px;}\n#MangaOnlineViewer .PageFunctions .Bookmark {background: url('").concat(icon.bookmark, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .Reload {background: url('").concat(icon.reload, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .Hide {background: url('").concat(icon.hide, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('").concat(icon.zoomin, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('").concat(icon.zoomout, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('").concat(icon.zoomrestore, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('").concat(icon.zoomwidth, "') no-repeat scroll center center transparent;}\n</style>");
  const externalScripts = ['<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js" integrity="sha256-gy5W5/rXWluWXFRvMWFFMVhocfpBe7Tf4SW2WMfjs4E=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>', '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.0/dist/sweetalert2.all.min.js" integrity="sha256-7BOWXe6DFHEYnigBpBMkb0N31LYs/lltF8wa5O9Othw=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js" integrity="sha256-CJWfUCeP3jLdUMVNUll6yQx37gh9AKmXTRxvRf7jzro=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js" integrity="sha256-43x9r7YRdZpZqTjDT5E0Vfrxn1ajIZLyYWtfAXsargA=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js" integrity="sha256-7QS1cHsH75h3IFgrFKsdhmKHHpWqF82sb/9vNLqcqs0=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js" integrity="sha256-B00tEEtJRbA9gas0viRdqVPI81EuZG+kYU978/alKt8=" crossorigin="anonymous"></script>'];
  const externalCSS = ['<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.0/dist/sweetalert2.min.css" integrity="sha256-zfoprrAG5QCLwEZhI7DWYoqRWYaVYxdjd0mEF3Hl9k0=" crossorigin="anonymous">', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />'];

  function reader(manga, begin = 0) {
    return "\n<head>\n  <title>".concat(manga.title, "</title>\n  <meta charset=\"UTF-8\">\n  ").concat(externalScripts.join('\n'), "\n  ").concat(externalCSS.join('\n'), "\n  ").concat(readerCSS, "\n  ").concat(themesCSS, "\n</head>\n<body class='").concat(settings.Theme, "'>\n  ").concat(body(manga, begin > 0 ? begin - 1 : 0), "\n</body>");
  }

  function formatPage(manga, begin) {
    W.stop();
    if (manga.before !== undefined) {
      manga.before();
    }
    document.documentElement.innerHTML = reader(manga, begin);
    logClear('Rebuilding Site');
    setTimeout(() => {
      try {
        controls(manga);
        setKeyDownEvents(manga);
        checkImagesLoaded(manga);
        setTimeout(() => {
          $('body').scrollTo(0);
          loadManga(manga, begin);
        }, 50);
        if (!isEmpty(settings.bookmarks.filter(el => el.url === W.location.href))) {
          logScript("Bookmark Removed ".concat(W.location.href));
          settings.bookmarks = settings.bookmarks.filter(el => el.url !== W.location.href);
          setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
        }
      } catch (e) {
        logScript(e);
      }
    }, 50);
    if (manga.after !== undefined) {
      manga.after();
    }
  }

  function lateStart(manga, begin = 1) {
    logScript('LateStart');
    Swal.fire({
      title: 'Starting MangaOnlineViewer',
      input: 'range',
      inputAttributes: {
        min: 1,
        max: manga.quant,
        step: 1
      },
      inputValue: begin,
      text: 'Choose the Page to start from:',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      type: 'question'
    }).then(result => {
      if (result.value) {
        logScript("Choice: ".concat(result.value));
        formatPage(manga, result.value);
      } else {
        logScript(result.dismiss);
      }
    });
  }

  function preparePage(manga, begin = 0) {
    logScript("Found ".concat(manga.quant, " pages"));
    if (manga.quant > 0) {
      let beginnig = begin;
      if (beginnig === 0) {
        beginnig = settings.bookmarks
          .filter(x => x.url === W.location.href).map(x => x.page)[0] || 0;
      }
      $('head').append('<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.0/dist/sweetalert2.all.min.js" integrity="sha256-7BOWXe6DFHEYnigBpBMkb0N31LYs/lltF8wa5O9Othw=" crossorigin="anonymous"></script>');
      $('head').append("<style type='text/css'>\n#mov {\nposition: fixed;\nleft: 50%;\ntransform: translateX(-50%);\ntop: 0;\nz-index: 1000;\nborder-radius: .25em;\nfont-size: 1.5em;\ncursor: pointer;\ndisplay: inline-block;\nmargin: .3125em;\npadding: .625em 2em;\nbox-shadow: none;\nfont-weight: 500;\ncolor: #FFF;\nbackground: rgb(102, 83, 146);\nborder: 1px #FFF;\n}\n</style>");
      W.mov = b => lateStart(manga, b || beginnig);
      switch (settings.loadMode) {
        case 'never':
          $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
          break;
        default:
        case 'normal':
          Swal.fire({
            title: 'Starting MangaOnlineViewer',
            html: "".concat(beginnig > 1 ? "Resuming reading from Page ".concat(beginnig, ".<br/>") : '', "Please wait, 3 seconds..."),
            showCancelButton: true,
            cancelButtonColor: '#d33',
            reverseButtons: true,
            timer: 3000
          }).then(result => {
            if (result.value || result.dismiss === Swal.DismissReason.timer) {
              formatPage(manga, beginnig);
            } else {
              $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
              logScript(result.dismiss);
            }
          });
          break;
        case 'always':
          formatPage(manga);
          break;
      }
    }
  }

  function start(sites) {
    logScript("Starting ".concat(getInfoGM.script.name, " ").concat(getInfoGM.script.version, " on ").concat(getBrowser(), " with ").concat(getEngine()));
    W.InfoGM = getInfoGM;
    logScript("".concat(sites.length, " Known Manga Sites"));
    let waitElapsed = 0;

    function waitExec(site) {
      let wait = '';
      if (site.waitMax !== undefined) {
        if (waitElapsed >= site.waitMax) {
          preparePage(site.run());
          return;
        }
      }
      if (site.waitAttr !== undefined) {
        wait = $(site.waitAttr[0]).attr(site.waitAttr[1]);
        logScript("Wating for ".concat(site.waitAttr[1], " of ").concat(site.waitAttr[0], " = ").concat(wait));
        if (wait === undefined || isEmpty(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      if (site.waitEle !== undefined) {
        wait = $(site.waitEle).get();
        logScript("Wating for ".concat(site.waitEle, " = ", "".concat(wait)));
        if (wait === undefined || isEmpty(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      if (site.waitVar !== undefined) {
        wait = W[site.waitVar];
        logScript("Wating for ".concat(site.waitVar, " = ").concat(wait));
        if (isEmpty(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      preparePage(site.run());
    }
    logScript('Looking for a match...');
    const test = R.compose(R.map(waitExec), R.map(logScriptC('Site Found:')), R.filter(x => R.test(x.url, W.location.href)));
    test(sites);
  }

  start(sites);

}());