// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Asura Scans,Flame Scans, ComiCastle, DisasterScans, Dynasty-Scans, FoOlSlide, Funmanga, HatigarmScans, KomiRaw, Leitor, LHTranslation, MangaHaus,Isekai Scan,Comic Kiba,Zinmanga,mangatx,Toonily,Mngazuki,ReaperScans, MangaDex, MangaDoom, MangaFreak, MangaFox, MangaHere, MangaHub, MangaInn, MangaKakalot,MangaNelo, MangaLyght, MangaNato, MangaPark, MangaSee,Manga4life, MangaTown, NineManga, RawDevart, ReadComicsOnline, ReadManga Today, SenManga(Raw), TuMangaOnline, UnionMangas, Batoto
// @version 2022.05-20
// @license MIT
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js
// @include /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/
// @include /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?hatigarmscanz.net\/comics\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?(komiraw).com\/.+\/.+/
// @include /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/.+\/(manga|series)\/.+\/.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/
// @include /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include /https?:\/\/(www.)?fanfox.net\/manga\/.+\/.+\//
// @include /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/
// @include /https?:\/\/(www.)?(manganelo|mangakakalot).com\/chapter\/.+\/.+/
// @include /https?:\/\/manga.lyght.net\/series\/.+\.html/
// @include /https?:\/\/(www.)?(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+/
// @include /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/
// @include /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/
// @include /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/
// @include /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==

(function () {
  'use strict';

  var W = typeof unsafeWindow === 'undefined' ? window : unsafeWindow;

  /* global $:readonly, JSZip:readonly ,NProgress:readonly , jscolor:readonly , ColorScheme:readonly , Swal:readonly */

  // == AsuraScans and FlameScans ====================================================================
  var asurasflamecans = {
    name: ['Asura Scans', 'Flame Scans'],
    url: /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/,
    homepage: ['https://www.asurascans.com/', 'https://flamescans.org/'],
    language: ['English'],
    category: 'manga',
    waitEle: '#chapter option:eq(1)',
    waitMax: 5000,
    run() {
      const chapter = $('#chapter option:selected');
      const images = $('#readerarea p img').get();
      return {
        title: $('.entry-title').text().trim(),
        series: $('.allc a').attr('href'),
        pages: images.length,
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        listImages: images.map((i) => $(i).attr('src')),
      };
    },
  };

  // == Batoto =======================================================================================
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
        pages: num,
        prev: $('.nav-prev a').attr('href'),
        next: $('.nav-next a').attr('href'),
        listImages: $('.page-img')
          .get()
          .map((i) => $(i).attr('src')),
      };
    },
  };

  // == ComiCastle ===================================================================================
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
        pages: url.length,
        prev: chapter.find(':selected').prev().val(),
        next: chapter.find(':selected').next().val(),
        listPages: url.map((item) => $(item).val()),
        img: '.chapter-img',
      };
    },
  };

  // == DisasterScans ================================================================================
  var disasterscans = {
    name: 'DisasterScans',
    url: /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/,
    homepage: 'https://disasterscans.com/',
    language: ['English'],
    category: 'manga',
    run() {
      return {
        title: $('#chapter-heading').text(),
        series: W.mangaNav.mangaUrl,
        pages: W.chapter_preloaded_images.length,
        prev: $('select.single-chapter-select option:selected').next().val(),
        next: $('select.single-chapter-select option:selected').prev().val(),
        listImages: W.chapter_preloaded_images,
      };
    },
  };

  // == DynastyScans =================================================================================
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
        pages: W.pages.length,
        prev: $('#prev_link').attr('href'),
        next: $('#next_link').attr('href'),
        listImages: W.pages.map((x) => x.image),
      };
    },
  };

  // == FoOlSlide ====================================================================================
  var foolslide = {
    name: 'FoOlSlide',
    url: /^(?!.*jaiminisbox).*\/read\/.+/,
    homepage: '',
    language: ['English'],
    obs: 'Any Scanlator site that uses FoOLSlide',
    category: 'manga',
    run() {
      const temp = `${W.location.href.slice(0, W.location.href.lastIndexOf('/'))}/`;
      const url = temp.match(/page\/$/) ? temp : `${temp}page/`;
      const num = $('.topbar_right .dropdown li').length;
      const chapter = $('.topbar_left .dropdown_parent:last ul li a');
      return {
        title: $('title').text().trim(),
        series: $('div.tbtitle div.text a:first').attr('href'),
        pages: num,
        prev: chapter.eq(chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) + 1).attr('href'),
        next: chapter.eq(chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) - 1).attr('href'),
        listPages: [...Array(num).keys()].map((i) => url + (i + 1)),
        img: 'img.open',
      };
    },
  };

  // == ReadManga.Today ==============================================================================
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
        pages: url.length,
        prev: chapter.next('option').val(),
        next: chapter.prev('option').val(),
        listPages: url.map((item) => $(item).val()),
        img: '.img-responsive',
      };
    },
  };

  // == HatigarmScans  ===============================================================================
  var hatigarmscans = {
    name: 'HatigarmScans',
    url: /https?:\/\/(www.)?hatigarmscanz.net\/comics\/.+\/.+\/.+/,
    homepage: 'https://hatigarmscanz.net/home',
    language: ['English'],
    category: 'manga',
    waitVar: 'chapterPages',
    run() {
      return {
        title: $('.page-section-title').text().trim(),
        series: $('div.heading + a').attr('href'),
        pages: W.chapterPages.length,
        prev: $('.container div div a:eq(0)').attr('href'),
        next: $('.container div div a:eq(1)').attr('href'),
        listImages: W.chapterPages,
      };
    },
  };

  // == KomiRaw ===================================================================================
  var komiraw = {
    name: 'KomiRaw',
    url: /https?:\/\/(www.)?(komiraw).com\/.+\/.+/,
    homepage: 'https://komiraw.com/',
    language: ['English'],
    category: 'manga',
    timer: 4000,
    run() {
      const images = $('img.chapter-img').get();
      return {
        title: $('.chapter-title').attr('title').trim(),
        series: $('#boxtopchap a').attr('href'),
        pages: images.length,
        prev: $('#chapter-nav-bot #prev_chap').attr('href'),
        next: $('#chapter-nav-bot #next_chap').attr('href'),
        listImages: images.map((i) => $(i).attr('src')),
      };
    },
  };

  // == Leitor =======================================================================================
  var leitor = {
    name: 'Leitor',
    url: /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/,
    homepage: 'https://leitor.net/',
    language: ['Portuguese'],
    category: 'manga',
    run() {
      const token = $('script[src*=token]')
        .attr('src')
        .match(/[&?]token=(\w+)&?/i)[1];
      const idRelease = $('script[src*=token]')
        .attr('src')
        .match(/[&?]id_release=(\d+)&?/i)[1];
      let api = null;
      const url = `https://leitor.net/leitor/pages/${idRelease}.json?key=${token}`;
      $.ajax({
        type: 'GET',
        url,
        async: false,
        success(res) {
          api = res;
        },
      });
      return {
        title: $('title').text().trim(),
        series: $('.series-cover a').attr('href'),
        pages: api.images.length,
        prev: $('.chapter-list .selected').next().find('a').attr('href'),
        next: $('.chapter-list .selected').prev().find('a').attr('href'),
        listImages: api.images,
      };
    },
  };

  // == LHTranslation ================================================================================
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
        pages: $('img.chapter-img').length,
        prev: $('.form-control option:selected').next().val(),
        next: $('.form-control option:selected').prev().val(),
        listImages: $('img.chapter-img')
          .get()
          .map((item) => $(item).attr('src')),
      };
    },
  };

  // == Madara WordPress Plugin ======================================================================
  // https://themeforest.net/item/madara-wordpress-theme-for-manga/20849828
  var madarawp = {
    name: ['MangaHaus', 'Isekai Scan', 'Comic Kiba', 'Zinmanga', 'mangatx', 'Toonily', 'Mngazuki', 'ReaperScans'],
    url: /https?:\/\/.+\/(manga|series)\/.+\/.+/,
    homepage: [
      'https://manhuaus.com',
      'https://isekaiscan.com/',
      'https://comickiba.com/',
      'https://zinmanga.com/',
      'https://mangatx.com/',
      'https://toonily.net/',
      'https://mangazuki.me/',
      'https://reaperscans.com/',
    ],
    language: ['English'],
    obs: 'Any Site that uses Madara Wordpress Plugin',
    category: 'manga',
    run() {
      const src = $('.wp-manga-chapter-img, .blocks-gallery-item img').get();
      return {
        title: $('#chapter-heading').text().trim(),
        series: $('.breadcrumb li a:last').attr('href'),
        pages: src.length,
        prev: $('.prev_page:first').attr('href'),
        next: $('.next_page:first').attr('href'),
        listImages: src.map((i) => $(i).attr('src') || $(i).attr('data-src') || $(i).attr('data-full-url')),
      };
    },
  };

  // == MangaDex =====================================================================================
  var mangadex = {
    name: 'MangaDex',
    url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
    homepage: 'https://mangadex.org/',
    language: ['English'],
    category: 'manga',
    waitEle: "a[href^='/chapter/']",
    run() {
      let server = null;
      const chapterId = W.location.pathname.match(/\/chapter\/([^/]+)(\/[0-9]+)?/)[1];
      const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
      $.ajax({
        type: 'GET',
        url: home,
        async: false,
        success(res) {
          server = res;
        },
      });
      return {
        title: $('title').text().replace(' - MangaDex', ''),
        series: $("a[href^='/title/']:last").attr('href'),
        pages: server.chapter.data.length,
        prev: $("a[href^='/chapter/']").eq(1).attr('href'),
        next: $("a[href^='/chapter/']").eq(0).attr('href'),
        listImages: server.chapter.data.map((img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`),
      };
    },
  };

  // == MangaDoom ====================================================================================
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
        pages: url.length,
        prev: chapter.next().val(),
        next: chapter.prev().val(),
        listPages: url.map((item) => $(item).val()),
        img: 'img.img-responsive',
      };
    },
  };

  // == MangaFox =====================================================================================
  var mangafox = {
    name: 'MangaFox',
    url: /https?:\/\/(www.)?fanfox.net\/manga\/.+\/.+\//,
    homepage: 'http://fanfox.net/',
    language: ['English'],
    category: 'manga',
    run() {
      function decode(data, page) {
        const toBeEval = data.match(/'[^']*'/g)[5].replace(/'/g, '');
        const keyWords = data
          .match(/'[^']*'/g)[6]
          .replace(/'/g, '')
          .split('|');
        function charFromPosition(i) {
          return (i < 31 ? '' : charFromPosition(parseInt(i / 31, 10))) + (i % 31 > 35 ? String.fromCharCode((i % 31) + 29) : (i % 31).toString(36));
        }
        const replacingValues = {};
        keyWords.forEach((ele, i) => {
          replacingValues[charFromPosition(i)] = ele || charFromPosition(i);
        });
        const res = toBeEval.replace(/\b\w+\b/g, (y) => replacingValues[y]);
        return (
          res.match(/pix="([^;]+)";/)[1] + // eslint-disable-line no-useless-escape
          res.match(/pvalue=\["([^,]+)","([^,\]]+)"/)[page === 0 ? 1 : 2]
        ); // eslint-disable-line no-useless-escape
      }
      const src = [...Array(W.imagecount).keys()].map((i) => {
        let img = '';
        $.ajax({
          url: 'chapterfun.ashx',
          async: false,
          data: { cid: W.chapterid, page: i, key: $('#dm5_key').val() },
        }).done((data) => {
          img = decode(data, i);
        }); // eslint-disable-line no-eval
        return img;
      });
      return {
        title: $('.reader-header-title div:first').text().trim(),
        series: $('.reader-header-title a').attr('href'),
        pages: W.imagecount,
        prev: W.prechapterurl,
        next: W.nextchapterurl,
        listImages: src,
      };
    },
  };

  // == MangaFreak ===================================================================================
  var mangafreak = {
    name: 'MangaFreak',
    url: /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/,
    homepage: 'https://mangafreak.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const images = $('.mySlides img').get();
      return {
        title: $('title').text().trim(),
        series: $('.title a').attr('href'),
        pages: images.length,
        prev: $('.chapter_list select option:selected').prev().val(),
        next: $('.chapter_list select option:selected').next().val(),
        listImages: images.map((i) => $(i).attr('src')),
      };
    },
  };

  // == MangaHere ====================================================================================
  var mangahere = {
    name: 'MangaHere',
    url: /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/,
    homepage: 'http://www.mangahere.cc/',
    language: ['English'],
    category: 'manga',
    run() {
      function decode(data, page) {
        const toBeEval = data.match(/'[^']*'/g)[5].replace(/'/g, '');
        const keyWords = data
          .match(/'[^']*'/g)[6]
          .replace(/'/g, '')
          .split('|');
        function charFromPosition(i) {
          return (i < 31 ? '' : charFromPosition(parseInt(i / 31, 10))) + (i % 31 > 35 ? String.fromCharCode((i % 31) + 29) : (i % 31).toString(36));
        }
        const replacingValues = {};
        keyWords.forEach((ele, i) => {
          replacingValues[charFromPosition(i)] = ele || charFromPosition(i);
        });
        const res = toBeEval.replace(/\b\w+\b/g, (y) => replacingValues[y]);
        return (
          res.match(/pix="([^;]+)";/)[1] + // eslint-disable-line no-useless-escape
          res.match(/pvalue=\["([^,]+)","([^,\]]+)"/)[page === 0 ? 1 : 2]
        ); // eslint-disable-line no-useless-escape
      }
      const src = [...Array(W.imagecount).keys()].map((i) => {
        let img = '';
        $.ajax({
          url: 'chapterfun.ashx',
          async: false,
          data: { cid: W.chapterid, page: i, key: $('#dm5_key').val() },
        }).done((data) => {
          img = decode(data, i);
        }); // eslint-disable-line no-eval
        return img;
      });
      return {
        title: $('.reader-header-title div:first').text().trim(),
        series: $('.reader-header-title a').attr('href'),
        pages: W.imagecount,
        prev: W.prechapterurl,
        next: W.nextchapterurl,
        listImages: src,
      };
    },
  };

  // == MangaHub =====================================================================================
  var mangahub = {
    name: 'MangaHub',
    url: /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/,
    homepage: 'https://mangahub.io/',
    language: ['English'],
    category: 'manga',
    waitEle: '#select-chapter',
    run() {
      let api = null;
      const slug = W.CURRENT_MANGA_SLUG || W.location.pathname.split('/')[2];
      const number = W.location.pathname.split('/')[3].replace('chapter-', '');
      const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
      $.ajax({
        type: 'POST',
        url: 'https://api.mghubcdn.com/graphql',
        data,
        async: false,
        success(res) {
          api = res;
        },
      });
      const images = Object.values(JSON.parse(api.data.chapter.pages));
      return {
        title: $('#mangareader h3').text().trim(),
        series: $('#mangareader a:first').attr('href'),
        pages: images.length,
        prev: $('.previous a').attr('href'),
        next: $('.next a').attr('href'),
        listImages: images.map((i) => `https://img.mghubcdn.com/file/imghub/${i}`),
      };
    },
  };

  // == MangaInn  ====================================================================================
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
        pages: W.images.length,
        prev: W.prev_chapter_url,
        next: W.next_chapter_url,
        listImages: W.images.map((i) => i.url),
      };
    },
  };

  // == MangaKakalot =================================================================================
  var mangakakalot = {
    name: ['MangaKakalot', 'MangaNelo'],
    url: /https?:\/\/(www.)?(manganelo|mangakakalot).com\/chapter\/.+\/.+/,
    homepage: ['https://mangakakalot.com/page', 'http://www.manganelo.com/'],
    language: ['English'],
    category: 'manga',
    run() {
      const images = $('#vungdoc img, .container-chapter-reader img').get();
      return {
        title: $('.info-top-chapter h2, .panel-chapter-info-top h1').text().trim(),
        series: $('span a[title]').eq(1).attr('href'),
        pages: images.length,
        prev: $('.navi-change-chapter-btn-prev:first, .next:first').attr('href'),
        next: $('.navi-change-chapter-btn-next:first, .back:first').attr('href'),
        listImages: images.map((i) => $(i).attr('src')),
      };
    },
  };

  // == MangaLyght ===================================================================================
  var mangalyght = {
    name: 'MangaLyght',
    url: /https?:\/\/manga.lyght.net\/series\/.+\.html/,
    homepage: 'http://manga.lyght.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const chapter = $('.selectchapter option:selected');
      const url = `${$("form[name='pageSelector1']").attr('action')}?ch=${chapter.val().replace(' ', '+')}&page=`;
      const num = $('.selectpage option').length;
      const origin = $('div.entry h1 a');
      return {
        title: origin.text().trim(),
        series: origin.attr('href'),
        pages: num,
        prev: `${W.location.pathname}?ch=${chapter.prev().val()}`.replace(' ', '+'),
        next: `${W.location.pathname}?ch=${chapter.next().val()}`.replace(' ', '+'),
        listPages: [...Array(num).keys()].map((i) => url + (i + 1)),
        img: '#mainimage',
      };
    },
  };

  // == MangaNato ====================================================================================
  var manganato = {
    name: 'MangaNato',
    url: /https?:\/\/(www.)?(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+/,
    homepage: 'http://www.manganato.com/',
    language: ['English'],
    category: 'manga',
    run() {
      const images = $('#vungdoc img, .container-chapter-reader img').get();
      return {
        title: $('.info-top-chapter h2, .panel-chapter-info-top h1').text().trim(),
        series: $('span a[title]').eq(1).attr('href'),
        pages: images.length,
        prev: $('.navi-change-chapter-btn-prev:first, .next:first').attr('href'),
        next: $('.navi-change-chapter-btn-next:first, .back:first').attr('href'),
        listImages: images.map((i) => $(i).attr('src')),
      };
    },
  };

  /* eslint-disable no-undef */
  // == MangaPark ====================================================================================
  var mangapark = {
    name: 'MangaPark',
    url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/,
    homepage: 'http://mangapark.net/',
    language: ['English'],
    category: 'manga',
    run() {
      const pass = JSON.parse(CryptoJS.AES.decrypt(amWord, amPass).toString(CryptoJS.enc.Utf8));
      return {
        // eslint-disable-next-line camelcase
        title: `${amSub_name} - ${mpEpi_name}`,
        series: currSubUrl,
        pages: imgPathLis.length,
        prev: prevEpiUrl,
        next: nextEpiUrl,
        listImages: imgPathLis.map((i, index) => `${imgCdnHost + i}?${pass[index]}`),
      };
    },
  };

  // == MangaSee =====================================================================================
  var mangasee = {
    name: ['MangaSee', 'Manga4life'],
    url: /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/,
    homepage: ['https://mangasee123.com/', 'https://manga4life.com/'],
    language: ['English'],
    category: 'manga',
    waitAttr: ['.img-fluid', 'src'],
    run() {
      const src = $('.img-fluid').attr('src');
      const CurChapter = JSON.parse(
        $('script')
          .text()
          .match(/CurChapter = ({.+});/)[1],
      );
      const CHAPTERS = JSON.parse(
        $('script')
          .text()
          .match(/CHAPTERS = (\[{.+}]);/)[1],
      );
      const CurChapterIndex = CHAPTERS.findIndex((chap) => chap.Chapter === CurChapter.Chapter);
      function ChapterURLEncode(reference) {
        let ChapterString = CHAPTERS[CurChapterIndex + reference];
        if (ChapterString === undefined) {
          return '#';
        }
        ChapterString = ChapterString.Chapter;
        let Index = '';
        const IndexString = ChapterString.substring(0, 1);
        if (IndexString !== '1') {
          Index = `-index-${IndexString}`;
        }
        const Chapter = parseInt(ChapterString.slice(1, -1), 10);
        let Odd = '';
        const OddString = ChapterString[ChapterString.length - 1];
        if (OddString !== '0') {
          Odd = `.${OddString}`;
        }
        return W.location.href.replace(/-chapter-.+/, `-chapter-${Chapter}${Odd}${Index}.html`);
      }
      return {
        title: $('title')
          .text()
          .replace(/ Page .+/, ''),
        series: $('.MainContainer a:first').attr('href'),
        pages: CurChapter.Page,
        prev: ChapterURLEncode(-1),
        next: ChapterURLEncode(+1),
        listImages: [...Array(parseInt(CurChapter.Page, 10)).keys()].map((i) => src.replace(/-\d\d\d.png/, `-${String(`000${i + 1}`).slice(-3)}.png`)),
      };
    },
  };

  // == MangaTown ====================================================================================
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
        pages: num.length,
        prev: chapter.prev().val(),
        next: chapter.next().val(),
        listPages: num.map((item) => $(item).val()),
        img: '#image',
      };
    },
  };

  // == NineManga ====================================================================================
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
        pages: $('#page:first option').length,
        prev: $('.chnav a:first').attr('href'),
        next: $('.chnav a:eq(1)').attr('href'),
        listPages: $('#page:first option')
          .get()
          .map((item) => $(item).val()),
        img: '.manga_pic',
      };
    },
  };

  // == RawDevart  ===================================================================================
  var rawdevart = {
    name: 'RawDevart',
    url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
    homepage: 'https://rawdevart.com',
    language: ['Original'],
    category: 'manga',
    waitVar: 'rconfig',
    waitEle: '#chapter-list select',
    run() {
      return {
        title: W.rconfig.chapterTitle,
        series: W.rconfig.prefix,
        pages: $('#img-container img').get().length,
        prev: $('#chapter-list option:selected').next().val(),
        next: $('#chapter-list option:selected').prev().val(),
        listImages: $('#img-container img')
          .get()
          .map((item) => $(item).attr('data-src') || $(item).attr('src')),
      };
    },
  };

  // == ReadComicsOnline =============================================================================
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
        pages: W.pages.length,
        prev: W.prev_chapter,
        next: W.next_chapter,
        listImages: $('#all img')
          .get()
          .map((i) => $(i).attr('data-src')),
      };
    },
  };

  // == ReadManga.Today ==============================================================================
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
        pages: W.images.length,
        prev: W.prev_chapter_url,
        next: W.next_chapter_url,
        listImages: W.images.map((i) => i.url),
      };
    },
  };

  // == SenManga =====================================================================================
  var senmanga = {
    name: 'SenManga(Raw)',
    url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
    homepage: 'http://raw.senmanga.com/',
    language: ['Original'],
    category: 'manga',
    run() {
      const url = `/${W.location.pathname.split('/')[1]}/${W.location.pathname.split('/')[2]}`;
      const num = parseInt($("select[name='page'] option:last").val(), 10);
      const chapter = $('select[name="chapter"] option:selected');
      const origin = $('.title a');
      return {
        title: $('.title').text().trim(),
        series: origin.attr('href'),
        pages: num,
        prev: origin.attr('href') + chapter.next().val(),
        next: origin.attr('href') + chapter.prev().val(),
        listPages: [...Array(num).keys()].map((i) => `${url}/${i + 1}/`),
        img: '#picture',
        before() {
          $('body')
            .contents()
            .filter(() => this.nodeType === 3)
            .remove();
        },
      };
    },
  };

  // == TMOFans ==================================================================================
  var tmofans = {
    name: 'TuMangaOnline',
    url: /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/,
    homepage: 'https://lectortmo.com/',
    language: ['Spanish'],
    category: 'manga',
    run() {
      const num = $('#viewer-pages-select:first option').get().length || $('.img-container img').get().length;
      return {
        title: $('title').text().trim(),
        series: $('a[title="Volver"]').attr('href'),
        pages: num,
        prev: $('.chapter-prev a').attr('href'),
        next: $('.chapter-next a').attr('href'),
        listPages: [...Array(num).keys()].map((i) => W.location.href.replace(/\/[0-9]+$/, `/${i + 1}`)),
        listImages: $('.img-container img')
          .get()
          .map((item) => $(item).attr('data-src')),
        img: '#viewer-container img, .viewer-page',
      };
    },
  };

  // == UnionMangas =================================================================================
  var unionmangas = {
    name: 'UnionMangas',
    url: /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/,
    homepage: 'https://unionleitor.top/',
    language: ['Portuguese'],
    category: 'manga',
    run() {
      return {
        title: $('.titulo-leitura').text().trim(),
        series: $('.breadcrumbs a:last').attr('href'),
        pages: $('#paginas option').get().length,
        prev: `/leitor/${$('#mangaUrl').text()}/${$('.listCap:selected').prev().val()}`,
        next: `/leitor/${$('#mangaUrl').text()}/${$('.listCap:selected').prev().next()}`,
        listImages: $('.img-manga')
          .get()
          .map((i) => $(i).attr('src')),
      };
    },
  };

  const sites = [
    asurasflamecans,
    comicastle,
    disasterscans,
    dysnatyscans,
    foolslide,
    funmanga,
    hatigarmscans,
    // jaiminisbox, [Broken, Dead?]
    // japscan, Todo: Fix
    // kissmanga, [Broken, Dead?]
    komiraw,
    leitor,
    lhtranslation,
    madarawp,
    mangadex,
    mangadoom,
    mangafreak,
    mangafox,
    // mangago, [Weak? Not Safe?]
    mangahere,
    // mangahost, [Broken, Dead?]
    mangahub,
    mangainn,
    mangakakalot,
    mangalyght,
    manganato,
    mangapark,
    // mangareader, [RIP]
    mangasee,
    mangatown,
    ninemanga,
    rawdevart,
    readcomicsonline,
    readmangatoday,
    senmanga,
    // tenmanga, [Not Safe?]
    // thespectrum, [Broken, Dead?]
    tmofans,
    unionmangas,
    // wpmanga, Todo: Fix
    batoto,
  ];

  const consolePrefix = 'SweetAlert2:';
  const uniqueArray = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const toArray = (nodeList) => Array.prototype.slice.call(nodeList);
  const warn = (message) => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };
  const error = (message) => {
    console.error(`${consolePrefix} ${message}`);
  };
  const previousWarnOnceMessages = [];
  const warnOnce = (message) => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
  };
  const callIfFunction = (arg) => (typeof arg === 'function' ? arg() : arg);
  const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === 'function';
  const asPromise = (arg) => (hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg));
  const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show',
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide',
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
  };
  const updatableParams = [
    'allowEscapeKey',
    'allowOutsideClick',
    'background',
    'buttonsStyling',
    'cancelButtonAriaLabel',
    'cancelButtonColor',
    'cancelButtonText',
    'closeButtonAriaLabel',
    'closeButtonHtml',
    'color',
    'confirmButtonAriaLabel',
    'confirmButtonColor',
    'confirmButtonText',
    'currentProgressStep',
    'customClass',
    'denyButtonAriaLabel',
    'denyButtonColor',
    'denyButtonText',
    'didClose',
    'didDestroy',
    'footer',
    'hideClass',
    'html',
    'icon',
    'iconColor',
    'iconHtml',
    'imageAlt',
    'imageHeight',
    'imageUrl',
    'imageWidth',
    'preConfirm',
    'preDeny',
    'progressSteps',
    'returnFocus',
    'reverseButtons',
    'showCancelButton',
    'showCloseButton',
    'showConfirmButton',
    'showDenyButton',
    'text',
    'title',
    'titleText',
    'willClose',
  ];
  const deprecatedParams = {};
  const toastIncompatibleParams = [
    'allowOutsideClick',
    'allowEnterKey',
    'backdrop',
    'focusConfirm',
    'focusDeny',
    'focusCancel',
    'returnFocus',
    'heightAuto',
    'keydownListenerCapture',
  ];
  const isValidParameter = (paramName) => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  const isUpdatableParameter = (paramName) => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  const isDeprecatedParameter = (paramName) => {
    return deprecatedParams[paramName];
  };
  const checkIfParamIsValid = (param) => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };
  const checkIfToastParamIsValid = (param) => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };
  const checkIfParamIsDeprecated = (param) => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  const showWarningsForParams = (params) => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  const prefix = (items) => {
    const result = {};
    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }
    return result;
  };
  const swalClasses = prefix([
    'container',
    'shown',
    'height-auto',
    'iosfix',
    'popup',
    'modal',
    'no-backdrop',
    'no-transition',
    'toast',
    'toast-shown',
    'show',
    'hide',
    'close',
    'title',
    'html-container',
    'actions',
    'confirm',
    'deny',
    'cancel',
    'default-outline',
    'footer',
    'icon',
    'icon-content',
    'image',
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'label',
    'textarea',
    'inputerror',
    'input-label',
    'validation-message',
    'progress-steps',
    'active-progress-step',
    'progress-step',
    'progress-step-line',
    'loader',
    'loading',
    'styled',
    'top',
    'top-start',
    'top-end',
    'top-left',
    'top-right',
    'center',
    'center-start',
    'center-end',
    'center-left',
    'center-right',
    'bottom',
    'bottom-start',
    'bottom-end',
    'bottom-left',
    'bottom-right',
    'grow-row',
    'grow-column',
    'grow-fullscreen',
    'rtl',
    'timer-progress-bar',
    'timer-progress-bar-container',
    'scrollbar-measure',
    'icon-success',
    'icon-warning',
    'icon-info',
    'icon-question',
    'icon-error',
    'no-war',
  ]);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
  const elementBySelector = (selectorString) => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  const elementByClass = (className) => {
    return elementBySelector(`.${className}`);
  };
  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps$1 = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
  const getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
  const getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close);
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter((el) => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el) => isVisible$1(el));
  };
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null,
  };
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      toArray(parsed.querySelector('head').childNodes).forEach((child) => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach((child) => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };
  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach((className) => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
      }
      addClass(elem, params.customClass[className]);
    }
  };
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return (
          popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) ||
          popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`)
        );
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };
  const focusInput = (input) => {
    input.focus();
    if (input.type !== 'file') {
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach((className) => {
      if (Array.isArray(target)) {
        target.forEach((elem) => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getDirectChildByClass = (elem, className) => {
    const childNodes = toArray(elem.childNodes);
    for (let i = 0; i < childNodes.length; i++) {
      if (hasClass(childNodes[i], className)) {
        return childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = (elem, display = 'flex') => {
    elem.style.display = display;
  };
  const hide = (elem) => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);
    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  };
  const isVisible$1 = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
  const hasCssAnimation = (elem) => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = (timerProgressBarWidth / timerProgressBarFullWidth) * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  const restoreActiveElement = (returnFocus) => {
    return new Promise((resolve) => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT);
      window.scrollTo(x, y);
    });
  };

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(`.${swalClasses.range} input`);
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      range.nextSibling.value = range.value;
    };
  };
  const getTarget = (target) => (typeof target === 'string' ? document.querySelector(target) : target);
  const setupAccessibility = (params) => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  const setupRTL = (targetElement) => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  const init = (params) => {
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
    noWarMessageForRussians(container, params);
  };
  const noWarMessageForRussians = (container, params) => {
    if (params.toast) {
      return;
    }
    const message = getRandomElement([
      {
        text: 'ШВАРЦЕНЕГГЕР обратился <br> к РУССКОМУ НАРОДУ о войне',
        youtubeId: 'fWClXZd9c78',
      },
      {
        text: 'РУССКИЙ ПАТРИОТ <br> открыл главную тайну спецоперации',
        youtubeId: '_RjBNkn88yA',
      },
      {
        text: 'ГЕРОЙ НОВОРОССИИ СТРЕЛКОВ <br> дал оценку ходу спецоперации',
        youtubeId: 'yUmzQT4C8JY',
      },
      {
        text: 'ФИНСКИЙ ДРУГ РОССИИ <br> говорит ПО-РУССКИ о спецоперации',
        youtubeId: 'hkCYb6edUrQ',
      },
    ]);
    if (navigator.language === 'ru' && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
      const noWar = document.createElement('div');
      noWar.className = swalClasses['no-war'];
      setInnerHtml(noWar, `<a href="https://www.youtube.com/watch?v=${message.youtubeId}" target="_blank">${message.text}</a>`);
      container.appendChild(noWar);
      container.style.paddingTop = '4em';
    }
  };

  const parseHtmlToContainer = (param, target) => {
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } else if (typeof param === 'object') {
      handleObject(param, target);
    } else if (param) {
      setInnerHtml(target, param);
    }
  };
  const handleObject = (param, target) => {
    if (param.jquery) {
      handleJqueryElem(target, param);
    } else {
      setInnerHtml(target, param.toString());
    }
  };
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    if (isNodeEnv()) {
      return false;
    }
    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      animation: 'animationend',
    };
    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }
    return false;
  })();

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }
    applyCustomClass(actions, params, 'actions');
    renderButtons(actions, loader, params);
    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  function renderButton(button, buttonType, params) {
    toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`]);
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]);
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
    addClass(button, params[`${buttonType}ButtonClass`]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = `grow-${grow}`;
      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);
    applyCustomClass(container, params, 'container');
  };

  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
  };

  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach((inputClass) => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      setAttributes(inputClass, params.inputAttributes);
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      setCustomClass(params);
    }
  };
  const showInput = (params) => {
    if (!renderInputType[params.input]) {
      return error(
        `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`,
      );
    }
    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);
    setTimeout(() => {
      focusInput(input);
    });
  };
  const removeAttributes = (input) => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  const setCustomClass = (params) => {
    const inputContainer = getInputContainer(params.input);
    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  const getInputContainer = (inputType) => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };
  const renderInputType = {};
  renderInputType.text =
    renderInputType.email =
    renderInputType.password =
    renderInputType.number =
    renderInputType.tel =
    renderInputType.url =
      (input, params) => {
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
      };
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };
  renderInputType.radio = (radio) => {
    radio.textContent = '';
    return radio;
  };
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    setTimeout(() => {
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            getPopup().style.width = null;
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style'],
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer');
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }
    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml);
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (innerParams && params.icon === innerParams.icon) {
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      return hide(icon);
    }
    show(icon);
    setContent(icon, params);
    applyStyles(icon, params);
    addClass(icon, params.showClass.icon);
  };
  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }
    addClass(icon, iconTypes[params.icon]);
    setColor(icon, params);
    adjustSuccessIconBackgroundColor();
    applyCustomClass(icon, params, 'icon');
  };
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
  const setContent = (icon, params) => {
    icon.textContent = '';
    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, successIconHtml);
    } else if (params.icon === 'error') {
      setInnerHtml(icon, errorIconHtml);
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i',
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  const iconContent = (content) => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  const renderImage = (instance, params) => {
    const image = getImage();
    if (!params.imageUrl) {
      return hide(image);
    }
    show(image, '');
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps$1();
    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  const createStepElement = (step) => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  const createLineElement = (params) => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }
    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }
    applyNumericalStyle(popup, 'padding', params.padding);
    if (params.color) {
      popup.style.color = params.color;
    }
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());
    addClasses$1(popup, params);
  };
  const addClasses$1 = (popup, params) => {
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer',
  });

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach((el) => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach((el) => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = (params) => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(
      getSwalParams(templateContent),
      getSwalButtons(templateContent),
      getSwalImage(templateContent),
      getSwalIcon(templateContent),
      getSwalInput(templateContent),
      getSwalStringParams(templateContent, swalStringParams),
    );
    return result;
  };
  const getSwalParams = (templateContent) => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach((param) => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }
      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  const getSwalButtons = (templateContent) => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach((button) => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  const getSwalImage = (templateContent) => {
    const result = {};
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };
  const getSwalIcon = (templateContent) => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };
  const getSwalInput = (templateContent) => {
    const result = {};
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    const inputOptions = templateContent.querySelectorAll('swal-input-option');
    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach((option) => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };
  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };
  const showWarningsForElements = (templateContent) => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(templateContent.children).forEach((el) => {
      const tagName = el.tagName.toLowerCase();
      if (allowedElements.indexOf(tagName) === -1) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };
  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach((attribute) => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([
          `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
          `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`,
        ]);
      }
    });
  };

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)
        ? Promise.resolve()
        : Promise.resolve(validationMessage || 'Invalid URL');
    },
  };

  function setDefaultInputValidators(params) {
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach((key) => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  function validateCustomTargetElement(params) {
    if (!params.target || (typeof params.target === 'string' && !document.querySelector(params.target)) || (typeof params.target !== 'string' && !params.target.appendChild)) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  function setParameters(params) {
    setDefaultInputValidators(params);
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn(
        'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
          'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
          'https://sweetalert2.github.io/#ajax-request',
      );
    }
    validateCustomTargetElement(params);
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }
    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }

  const fixScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      return;
    }
    if (document.body.scrollHeight > window.innerHeight) {
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = `${states.previousBodyPadding}px`;
      states.previousBodyPadding = null;
    }
  };

  const iOSfix = () => {
    const iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    if (iOSSafari) {
      const bottomPanelHeight = 44;
      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
      }
    }
  };
  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    container.ontouchstart = (e) => {
      preventTouchMove = shouldPreventTouchMove(e);
    };
    container.ontouchmove = (e) => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };
  const shouldPreventTouchMove = (event) => {
    const target = event.target;
    const container = getContainer();
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA' && !(isScrollable(getHtmlContainer()) && getHtmlContainer().contains(target))) {
      return true;
    }
    return false;
  };
  const isStylus = (event) => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  const isZoom = (event) => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  const openPopup = (params) => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    removeClass(container, swalClasses['no-transition']);
  };
  const swalOpenAnimationFinished = (event) => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    }
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      addClass(popup, params.showClass.popup);
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT);
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const showLoading = (buttonToReplace) => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }
    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };
  const getCheckboxValue = (input) => (input.checked ? 1 : 0);
  const getRadioValue = (input) => (input.checked ? input.value : null);
  const getFileValue = (input) => (input.files.length ? (input.getAttribute('multiple') !== null ? input.files : input.files[0]) : null);
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    const processInputOptions = (inputOptions) => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then((inputOptions) => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue)
      .then((inputValue) => {
        input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`;
        show(input);
        input.focus();
        instance.hideLoading();
      })
      .catch((err) => {
        error(`Error in inputValue promise: ${err}`);
        input.value = '';
        show(input);
        input.focus();
        instance.hideLoading();
      });
  };
  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);
      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };
      inputOptions.forEach((inputOption) => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1];
        if (Array.isArray(optionLabel)) {
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false;
          select.appendChild(optgroup);
          optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
        } else {
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach((inputOption) => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;
        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }
        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');
      if (radios.length) {
        radios[0].focus();
      }
    },
  };
  const formatInputOptions = (inputOptions) => {
    const result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach((key) => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };
  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  function hideLoading() {
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = (domCache) => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };

  const isVisible = () => {
    return isVisible$1(getPopup());
  };
  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  const clickDeny = () => getDenyButton() && getDenyButton().click();
  const clickCancel = () => getCancelButton() && getCancelButton().click();

  const removeKeydownHandler = (globalState) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture,
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = (e) => keydownHandler(instance, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture,
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length) {
      index = index + increment;
      if (index === focusableElements.length) {
        index = 0;
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      return focusableElements[index].focus();
    }
    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams) {
      return;
    }
    if (e.isComposing || e.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    }
    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  const handleEnter = (instance, e, innerParams) => {
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return;
      }
      clickConfirm();
      e.preventDefault();
    }
  };
  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }
    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } else {
      setFocus(innerParams, btnIndex, -1);
    }
    e.stopPropagation();
    e.preventDefault();
  };
  const handleArrows = (key) => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (isVisible$1(buttonToFocus) && buttonToFocus instanceof HTMLButtonElement) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise()) {
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }
  const triggerClosePopup = (instance) => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = (instance) => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance);
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };
  const prepareResolveValue = (resolveValue) => {
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
      };
    }
    return Object.assign(
      {
        isConfirmed: false,
        isDenied: false,
        isDismissed: false,
      },
      resolveValue,
    );
  };
  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer();
    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach((button) => {
      domCache[button].disabled = disabled;
    });
  }
  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }
    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true,
      },
    });
  }
  const filterValidParams = (params) => {
    const validUpdatableParams = {};
    Object.keys(params).forEach((param) => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this);
      return;
    }
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }
  const disposeSwal = (instance) => {
    disposeWeakMaps(instance);
    delete instance.params;
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    delete globalState.currentInstance;
  };
  const disposeWeakMaps = (instance) => {
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage,
    getProgressSteps: getProgressSteps,
    update: update,
    _destroy: _destroy,
  });

  const handleConfirmButtonClick = (instance) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = (instance) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      return error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
    }
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then((validationMessage) => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true);
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise
        .then((preDenyValue) => {
          if (preDenyValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            instance.closePopup({ isDenied: true, value: typeof preDenyValue === 'undefined' ? value : preDenyValue });
          }
        })
        .catch((error) => rejectWith(instance || undefined, error));
    } else {
      instance.closePopup({ isDenied: true, value });
    }
  };
  const succeedWith = (instance, value) => {
    instance.closePopup({ isConfirmed: true, value });
  };
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true);
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise
        .then((preConfirmValue) => {
          if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
          }
        })
        .catch((error) => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      handleModalMousedown(domCache);
      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };
  const handleToastClick = (instance, domCache, dismissWith) => {
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };
  const isAnyButtonShown = (innerParams) => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };
  let ignoreOutsideClick = false;
  const handleModalMousedown = (domCache) => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined;
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleContainerMousedown = (domCache) => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined;
        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = (e) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = (elem) => typeof elem === 'object' && elem.jquery;
  const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = (args) => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  function fire(...args) {
    const Swal = this;
    return new Swal(...args);
  }

  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    return MixinSwal;
  }

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  const increaseTimer = (n) => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = (event) => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({ template });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    isVisible: isVisible,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler,
  });

  let currentInstance;
  class SweetAlert {
    constructor(...args) {
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true,
        },
      });
      const promise = this._main(this.params);
      privateProps.promise.set(this, promise);
    }
    _main(userParams, mixinParams = {}) {
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        globalState.currentInstance._destroy();
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = this;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(this);
      render(this, innerParams);
      privateProps.innerParams.set(this, innerParams);
      return swalPromise(this, domCache, innerParams);
    }
    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }
    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }
  }
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      const dismissWith = (dismiss) => {
        instance.closePopup({ isDismissed: true, dismiss });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);
      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);
      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);
      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);
      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  const populateDomCache = (instance) => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps$1(),
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };
  Object.assign(SweetAlert.prototype, instanceMethods);
  Object.assign(SweetAlert, staticMethods);
  Object.keys(instanceMethods).forEach((key) => {
    SweetAlert[key] = function (...args) {
      if (currentInstance) {
        return currentInstance[key](...args);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.14';

  const Swal = SweetAlert;
  Swal.default = Swal;

  /* eslint-disable camelcase */
  // Encapsulation for the console
  function logScript(...text) {
    // eslint-disable-next-line no-console
    console.log('MangaOnlineViewer: ', ...text);
    return text;
  }
  // Compose console output
  const logScriptC = (x) => (y) => logScript(x, y)[1];
  // Replacement function for GM_info allowing for debugging in console
  const getInfoGM = GM_info || {
    scriptHandler: 'Console',
    script: {
      name: 'Debug',
      version: 'Testing',
    },
  };
  // Replacement function for GM_getValue allowing for debugging in console
  function getValueGM(name, defaultValue) {
    if (typeof GM_getValue !== 'undefined') return GM_getValue(name, defaultValue);
    logScript('Getting: ', name, '=', defaultValue);
    return defaultValue;
  }
  // Replacement function for GM_setValue allowing for debugging in console
  function setValueGM(name, value) {
    if (typeof GM_setValue !== 'undefined') return String(GM_setValue(name, value));
    logScript('Getting: ', name, '=', value);
    return String(value);
  }
  // See https://stackoverflow.com/a/2401861/331508 for optional browser sniffing code.
  function getBrowser() {
    const ua = navigator.userAgent;
    let tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return `IE ${tem[1] || ''}`;
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
  // See https://stackoverflow.com/questions/27487828/how-to-detect-if-a-userscript-is-installed-from-the-chrome-store
  function getEngine() {
    return `${getInfoGM.scriptHandler || 'Greasemonkey'} ${getInfoGM.script.version}`;
  }
  const isMobile = W.matchMedia('screen and (max-width: 1024px)').matches;

  const cache = {
    zip: new JSZip(),
    downloadFiles: 0,
    Data: {},
  };
  const getExtension = (mimeType) => ((/image\/(?<ext>jpe?g|png|webp)/.exec(mimeType) || {}).groups || {}).ext || '' || 'png';
  const getFilename = (name, index, total, ext) => `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace('jpeg', 'jpg')}`;
  // Generate Zip File for download
  function generateZip() {
    // Source: http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
    if (cache.downloadFiles === 0) {
      const filenameRegex = /^(?<name>.*?)(?<index>\d+)\.(?<ext>\w+)$/;
      const images = $('.MangaPage img');
      const filenames = (() => {
        const result = [];
        for (let i = 0; i < images.length; i += 1) {
          const img = $(images[i]);
          const filename = img.attr('src').split(/[?#]/)[0].split('/').pop();
          const match = filenameRegex.exec(filename);
          if (!match) break;
          const { name, index, ext } = match.groups;
          const fixedFilename = getFilename(name, index, images.length, ext);
          if (result.length > 0 && fixedFilename <= result[result.length - 1]) break;
          result.push(fixedFilename);
        }
        if (result.length < images.length) return [];
        return result;
      })();
      images.get().forEach((value, index) => {
        const img = $(value);
        const src = img.attr('src');
        const base64 = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/.exec(src);
        if (base64) {
          const filename = getFilename('Page ', index, images.length, getExtension(base64.groups.mimeType));
          cache.zip.file(filename, base64.groups.data, {
            base64: true,
            createFolders: true,
          });
          logScript(`${filename} Added to Zip from Base64 Image, From: ${src}`);
          cache.downloadFiles += 1;
        } else {
          try {
            GM_xmlhttpRequest({
              method: 'GET',
              url: src,
              overrideMimeType: 'text/plain; charset=x-user-defined',
              responseType: 'blob',
              onload(request) {
                const filename = filenames[index] || getFilename('Page ', index, images.length, getExtension(request.response.type));
                cache.zip.file(filename, request.response, {
                  base64: true,
                  createFolders: true,
                  compression: 'DEFLATE',
                });
                logScript(`${filename} Added to Zip as Base64 Image, From: ${src}, Data:`, request.response);
                cache.downloadFiles += 1;
              },
            });
          } catch (e) {
            logScript(e);
          }
        }
      });
    }
    const total = parseInt($('#Counters').find('b').text(), 10);
    if (cache.downloadFiles < total) {
      logScript(`Waiting for Files to Download ${cache.downloadFiles} of ${total}`);
      setTimeout(generateZip, 2000);
    } else {
      const blobLink = document.getElementById('blob');
      try {
        blobLink.download = `${$('#series i').first().text().trim()}.zip`;
        cache.zip
          .generateAsync({
            type: 'blob',
          })
          .then((content) => {
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

  var commonjsGlobal =
    typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var nprogress = { exports: {} };

  (function (module, exports) {
    (function (root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {
      var NProgress = {};
      NProgress.version = '0.2.0';
      var Settings = (NProgress.settings = {
        minimum: 0.08,
        easing: 'ease',
        positionUsing: '',
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: 'body',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
      });
      NProgress.configure = function (options) {
        var key, value;
        for (key in options) {
          value = options[key];
          if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
      };
      NProgress.status = null;
      NProgress.set = function (n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = n === 1 ? null : n;
        var progress = NProgress.render(!started),
          bar = progress.querySelector(Settings.barSelector),
          speed = Settings.speed,
          ease = Settings.easing;
        progress.offsetWidth;
        queue(function (next) {
          if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
          css(bar, barPositionCSS(n, speed, ease));
          if (n === 1) {
            css(progress, {
              transition: 'none',
              opacity: 1,
            });
            progress.offsetWidth;
            setTimeout(function () {
              css(progress, {
                transition: 'all ' + speed + 'ms linear',
                opacity: 0,
              });
              setTimeout(function () {
                NProgress.remove();
                next();
              }, speed);
            }, speed);
          } else {
            setTimeout(next, speed);
          }
        });
        return this;
      };
      NProgress.isStarted = function () {
        return typeof NProgress.status === 'number';
      };
      NProgress.start = function () {
        if (!NProgress.status) NProgress.set(0);
        var work = function () {
          setTimeout(function () {
            if (!NProgress.status) return;
            NProgress.trickle();
            work();
          }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
      };
      NProgress.done = function (force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
      };
      NProgress.inc = function (amount) {
        var n = NProgress.status;
        if (!n) {
          return NProgress.start();
        } else {
          if (typeof amount !== 'number') {
            amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
          }
          n = clamp(n + amount, 0, 0.994);
          return NProgress.set(n);
        }
      };
      NProgress.trickle = function () {
        return NProgress.inc(Math.random() * Settings.trickleRate);
      };
      (function () {
        var initial = 0,
          current = 0;
        NProgress.promise = function ($promise) {
          if (!$promise || $promise.state() === 'resolved') {
            return this;
          }
          if (current === 0) {
            NProgress.start();
          }
          initial++;
          current++;
          $promise.always(function () {
            current--;
            if (current === 0) {
              initial = 0;
              NProgress.done();
            } else {
              NProgress.set((initial - current) / initial);
            }
          });
          return this;
        };
      })();
      NProgress.render = function (fromStart) {
        if (NProgress.isRendered()) return document.getElementById('nprogress');
        addClass(document.documentElement, 'nprogress-busy');
        var progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector),
          perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
          parent = document.querySelector(Settings.parent),
          spinner;
        css(bar, {
          transition: 'all 0 linear',
          transform: 'translate3d(' + perc + '%,0,0)',
        });
        if (!Settings.showSpinner) {
          spinner = progress.querySelector(Settings.spinnerSelector);
          spinner && removeElement(spinner);
        }
        if (parent != document.body) {
          addClass(parent, 'nprogress-custom-parent');
        }
        parent.appendChild(progress);
        return progress;
      };
      NProgress.remove = function () {
        removeClass(document.documentElement, 'nprogress-busy');
        removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
        var progress = document.getElementById('nprogress');
        progress && removeElement(progress);
      };
      NProgress.isRendered = function () {
        return !!document.getElementById('nprogress');
      };
      NProgress.getPositioningCSS = function () {
        var bodyStyle = document.body.style;
        var vendorPrefix =
          'WebkitTransform' in bodyStyle ? 'Webkit' : 'MozTransform' in bodyStyle ? 'Moz' : 'msTransform' in bodyStyle ? 'ms' : 'OTransform' in bodyStyle ? 'O' : '';
        if (vendorPrefix + 'Perspective' in bodyStyle) {
          return 'translate3d';
        } else if (vendorPrefix + 'Transform' in bodyStyle) {
          return 'translate';
        } else {
          return 'margin';
        }
      };
      function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
      }
      function toBarPerc(n) {
        return (-1 + n) * 100;
      }
      function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === 'translate3d') {
          barCSS = { transform: 'translate3d(' + toBarPerc(n) + '%,0,0)' };
        } else if (Settings.positionUsing === 'translate') {
          barCSS = { transform: 'translate(' + toBarPerc(n) + '%,0)' };
        } else {
          barCSS = { 'margin-left': toBarPerc(n) + '%' };
        }
        barCSS.transition = 'all ' + speed + 'ms ' + ease;
        return barCSS;
      }
      var queue = (function () {
        var pending = [];
        function next() {
          var fn = pending.shift();
          if (fn) {
            fn(next);
          }
        }
        return function (fn) {
          pending.push(fn);
          if (pending.length == 1) next();
        };
      })();
      var css = (function () {
        var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
          cssProps = {};
        function camelCase(string) {
          return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
            return letter.toUpperCase();
          });
        }
        function getVendorProp(name) {
          var style = document.body.style;
          if (name in style) return name;
          var i = cssPrefixes.length,
            capName = name.charAt(0).toUpperCase() + name.slice(1),
            vendorName;
          while (i--) {
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style) return vendorName;
          }
          return name;
        }
        function getStyleProp(name) {
          name = camelCase(name);
          return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
          prop = getStyleProp(prop);
          element.style[prop] = value;
        }
        return function (element, properties) {
          var args = arguments,
            prop,
            value;
          if (args.length == 2) {
            for (prop in properties) {
              value = properties[prop];
              if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
          } else {
            applyCss(element, args[1], args[2]);
          }
        };
      })();
      function hasClass(element, name) {
        var list = typeof element == 'string' ? element : classList(element);
        return list.indexOf(' ' + name + ' ') >= 0;
      }
      function addClass(element, name) {
        var oldList = classList(element),
          newList = oldList + name;
        if (hasClass(oldList, name)) return;
        element.className = newList.substring(1);
      }
      function removeClass(element, name) {
        var oldList = classList(element),
          newList;
        if (!hasClass(element, name)) return;
        newList = oldList.replace(' ' + name + ' ', ' ');
        element.className = newList.substring(1, newList.length - 1);
      }
      function classList(element) {
        return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
      }
      function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      return NProgress;
    });
  })(nprogress);
  var NProgress = nprogress.exports;

  // Configuration
  const settings = {
    Theme: getValueGM('MangaTheme', 'Light'),
    CustomTheme: getValueGM('MangaCustomTheme', '#3d0099'),
    CustomThemeBody: getValueGM('MangaCustomThemeBody', '#000000'),
    CustomThemeText: getValueGM('MangaCustomThemeText', '#ffffff'),
    CustomThemeLines: getValueGM('MangaCustomThemeLines', '#666666'),
    CustomThemePanel: getValueGM('MangaCustomThemePanel', '#333333'),
    CustomThemeButton: getValueGM('MangaCustomThemeButton', '#282828'),
    FitWidthIfOversize: getValueGM('MangaFitWidthIfOversize', true),
    ShowThumbnails: getValueGM('MangaShowThumbnails', true),
    DownloadZip: getValueGM('MangaDownloadZip', false),
    Timer: getValueGM('MangaTimer', 1000),
    Zoom: getValueGM('MangaZoom', 100),
    zoomStep: getValueGM('MangaZoomStep', 25),
    loadMode: getValueGM('MangaLoadMode', 'normal'),
    viewMode: getValueGM('MangaViewMode', ''),
    bookmarks: JSON.parse(getValueGM('MangaBookmarks', '[]')),
    lazyLoadImages: getValueGM('MangaLazyLoadImages', false),
    lazyStart: getValueGM('MangaLazyStart', 50),
    hidePageControls: getValueGM('MangaHidePageControls', false),
  };
  // Force Settings for mobile
  if (isMobile) {
    settings.lazyLoadImages = true;
    settings.lazyStart = parseInt(getValueGM('MangaLazyStart', 5), 10);
    settings.FitWidthIfOversize = true;
    settings.ShowThumbnails = false;
    settings.viewMode = '';
  }
  // Clear old Bookmarks
  const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
  settings.bookmarks = settings.bookmarks.filter((el) => Date.now() - el.date < bookmarkTimeLimit);
  setValueGM('MangaBookmarks', JSON.stringify(settings.bookmarks));
  // Icons in Base64 format
  // Source: http://www.iconarchive.com/show/farm-fresh-icons-by-fatcow.html
  // Source: http://www.iconarchive.com/show/oxygen-icons-by-oxygen-icons.org.7.html
  // Source: http://www.iconarchive.com/show/ivista-2-icons-by-gakuseisean.html
  const icon = {
    enlarge:
      'data:image/png;base64,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',
    reduce:
      'data:image/png;base64,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%3D%3D',
    restore:
      'data:image/png;base64,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%3D',
    fitWidth:
      'data:image/png;base64,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',
    fitHeight:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEV0lEQVR42sWWXWgcVRTHz8zsZj8jWkGw4oNWgghNH6wPLYpJ1hYfFKko+GbriqEiQq0+9MO2vohCqoIvfRAlgi/6oqKI1CbRWm01rUyirUuaZJPdlSSQTfdjZna+djxnNhNnd+98VFEvXObeGeb+f/d/z733cPA/F87dSafTqVgstgnrvyKmaRqYplleW1uTmABYtjZUdUpTVfzCtT52Phlt1kDub06JCALE4/F+hJj2AuivVqtiXZLwX45ZW+O22jMrAH23tEN2Dey8sywgZ1Op1DYEmPIGqNVESZJtAZ5fF3Zm7YJYqnLw1jcWjDzBt4l3CbtKT08PpJJJf4BavS7Ksuw7c+p99BPASQT45ajAXCLW4NFoFJJBAHUCUJRu+90uYFMsAbx/zoLXHhVgU9ojPhgAiUQiAECSRMUDwHbC1X/njAUHHuLZgdrRtygIIxFIxOP+ABIBNBqhAE6dtWD/g8LGIJw7CBkxILR2QQCALIsNH4ANCOyPnrdg707hLzgfcQcAd4I/gEwAeA74ATgQH09a8NR9fJuolzgVnudDACiKqIYAoPr5lAWPbeO7hL0gCAC3oj+AQgB4ZAaJUz19xYLd9/CBwtcH0GiIGssBxrlwbg7g/i1cl7AXCL0PBMAAtB3gfcQnJiY2fpifn4dsNhvKgdAAmq63jmIPgPHxcRgcHLTbY2NjkMlkQjuAh1EAgKqKOsUArhcLggoBDAwM2GtK7aGhIU/hzneBACoBrDvgVBJyBqNKtufzeSisWXD7TVxoB8IDGIan/W6RsVwTMncLoYSvC8BAAFsQZ867hDufX06b8Eh/hCnebDYxBbDsNj2dwysedBDhDrABeI/Zu5+fTBrw5PZImzgJU6UxUGgDhJaREyJw4w29/gDaOoDjQNsd0AHw4Y86PL2zp02c4odyP7pPFKVhty2rCQLehOVqfXXH9nt3mKYxEwjAr+8CzmcJTn2rw/6BnjZxusorlSpg4gm1Wg3oXomieCyRkLPP7NtbLBQ+xZxD9wUg64Lsp/L2aQ1e2h2zLSZoyqTK5TIsFgo2QCqZgs2bb8VbkDeHh4efv3z5ygerq6u6W/BvA+gmwMjXKrzycBx4MG3Lr12rQOmPEhQQ4PE9exBKp7Z18OWDRy5OXhopFot6h54/QOf+d0O8950G757R4PtDaUhEDMBEBpaWlmFhcRFMdGPXrowNcvzE8TcunL9w7OrV2S5xXwAnBrwAzs6Y8PoXKnx1IGkHGqbzKFiE/MICbLnzDujtTVso/ubkzxeP5XI5pjgbQNdFsyMIWetv4BKM/qBD9oEoUP5A9i+g+NLyMvT13WUePnzo6K/Tv52cnZ31FP9HAPQ0mphmcZYNUKlUbPslpaGcePXIi3Nz86OlUslXnAWwlQ4J2lJeGU7niUc7QNUNqNUlmP49V37h2X3PraysfIa7wQgS7wLAWd+M4reF+ZE5GMfJiWQyL0tSKHGWA/95+RN8q4s/S0hajQAAAABJRU5ErkJggg==',
    reload:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4XrXQa0xTdxgG8Pd/es6x2JbL2iINtCQdAkvAuOAwBMKMfiBZJGWMYQIx68plwwEbUfACeIlGyJbQVYMxsjGGZkHDIFZHIBurboOQESgLldaISMu6cmprSi/0cnp6TL8IiSb9tN+H5+OTJw/8r/rHVgCgAr7qmZKoLown7y3rgiMnf4aY2q/roeP6Aio/9RtZc/F33kedMw0lx3WnDzcP88pbhmE7DLb5dcYKc4+cmG2DfXva5D5qecFe0JuD3Wa7T+XYxOp8RNIhQZIfK+8Yeb1gdMEFhDgR1xoDBxxhUuOkUY+XxVq9GPnFBmLzvDhK93B31lu58sxnkAOl6gmIwqNx1eCDD3P2waUHf+Q7gsEOGoWkDArq6YjfhyfFZ0X4vEyaA5gHMfsZv/f9t+z9T6hwLvNqgWnZAicmx/mrNluR3W7+208ZVLRtXpnEed6YmCn6E0Q7vGGOf3bTtXbNaTZO25aMEceKCV4p674Dn3yvEyi6bhfkHW0XjrIsFKon4NPhxYT83qmz0vPa07tqr7ybuL8qLq1uEF4jEUuh9KQaiqubUXF1E6hnLaCZ+5dT1TsWv+ezb8QJB1VkG8tCTDcWKfjBQOHKSUpeol1TFfb99fGe1qtEkfoefD4wB19PPI1v/k4nrzg3QNRotFsnqkaWgAcvsIePPRlOGi9x0JjCFwplRdxhdXZKKpEpyyVJMk5KebwKT4ixUVbTEAMZsHWi1Q5GysE1WV21z9b8lxxr3kN+q18IG/wD/3l3n11YYTSrtsCPLqe7aNNpX/yyryvkWP4HolA0pGf6gSWmMCxYUYloUTfQWDoKM4AAsRiLIlwcC6UIgrNCZLnsNmoncZ4ofP+mZqsgStY0CCzji8ciu08hmtfIBNZXI3TQirGEm2AC8wJ2/Zc485AxCHxGP6+DN5LV3gJZ3VB2uuruT2mV3yoTi6tTxIX1wuR3PiDeazMACTFIlC2QWnOOk1rVWSApOyaXKBoglpfB+En628ogAgAAAABJRU5ErkJggg%3D%3D',
    zoomIn:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZXQu2tTYRjH8e9535OTmDQxaZuYU6NNi9a7CaiQSczmWBGKm0WHLkL9DxTETSkF0YqD1kEUvCJI6yBxUiTVqPUKLa1JJfZiehLTkzQ3h1htQBB/08sLz+e5KKzKmXMXgk1O16lyuRJ0N7cemJv9lpifn0/ksrnhK4NnY/wlcuUxcPn6gKPJeVNv2xhuD24OtrT4aXK1+NfYHeHFbLa3o2uXe/zls9G/AucvXRtwujwnd+/ey7auLvR1PrwtHvR1Xta3BViqOjCM75HOLduD7149f9AAXBy+Ha5Uqtf27Y3Q2R7AqqlIqSAVBVUKbFYNn7eV5HdBcWku3NG14+mHxIupFUDMpJL9fn0D7YH1lCoK+QKUynD07CRCAaFAs8vKntBOmv2bsdrs/asnEJUq4TZdR5UKDiustYMUUDRzmMtQAwTgb3bh14NYNK17NaDmzULYscaGFPXCI6cnKZo5CmaOQ/0jFMwsDy/1oKoKrR4XFovWcEQ19yM/ZWSNoCo3IBW4faYTgP3HRnhy5SDVGmTy9VVUKbBqlgZAmEtLicmpaaSoISWovyYpmFmEAEX582eaBppFJhqAUml5MP7qNV/Ts6gSpKx3G7vVg1CgWoVSBbI/8mTmviAUBhuAu8MXYkZm4f6Ne4+YXcjULy9AAWo1MJdhYdHg8cgdPr2Nk/oYb5hAAmzaFho1DGPr64+TW/PFMlbNSiZXYN4wmfgyw/j4Sz6/f4PHViWdTh+JRqOj8Xg8DfVGv9Nz/GSv2+3pd3s84SanE01KqrVKorxcHNzZ4SOdTl+NxWIUi8VFXdejQ0NDiQbgX+nr6+sNhUK/EbvdHpX/LvuTsbGxRCAQmI5EIt2pVMqWTCYP/xewgvh8vmmv19s9MTFx4ifGBwN4Ure0EAAAAABJRU5ErkJggg%3D%3D',
    zoomOut:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jZWQTUsbURiFz9w7mYmOSfNhYkZjjVJTba0J1EKW8R8IBXEpdOGmoP+gBemuRQJSCV1Uuyhd2C8KhXSVrlqK0bGkrS4MamJNNRonMZmJSSZdxFgHBOmBy3u5cJ733MPgnKYfz3paTOYHlUrVY7G1Bvf3/kiZTEbK5/ILz0KPorhAtHGZCb+YEVpMr8T2q/4uT6/HbnehxWx3NTUJ/qNcbrzbe8sSX/4SuRDwZG5+xmS2Tg0ODqHf64XY5oTDboXY5kBHuxtFTYAsHwZ6rt/w/Fj5+l4HeLqw6K9Wtfk7QwH0dLnBcywoZUAZBiwlMPIcnI5WJA8JSsV9f7f35udf0rfNBoDspJKTLrETXe4OlKsMCipQrgAMA5DTYzPzuO0bgM3VC97YPHk+Aalq8LeLIljKQOCBK80AJUChBCgnQA0AAeCymeESPTBw3Mh5AFtQVL/QZAQldePYwwRKSh6qkkdJOYaq5PBhbhQsy6DVaobBwOlKZPPHhU05J3tY2gnKAIvTPQAArQZoWn1mC/WvsJSA5ww6AFGKRSmxuQVKaqAUYE+TUAYgpN5F401RZHAGKukA5fJJaGllFb/Te2ApQOlpeaQ+NQ0oV4HccQHZ/W0QBiEd4M3CbFTOHrx7+fYj9g6yZ2YGQK1WL/LgSManyGusx5eQWlvSJaAAcK3fF5FluW91LdFXKFXAczyyeRUZWUFiewfx+DLWf36Hjdewu7s7FgwGI7FYLA3UF51p9N7UuMVinbRYrX6TyQQDpdBqValyUgoNdDuRTqefR6NRqKp6JIricDgclnSAyzQxMTHu8/nOIIIgDNPLbf8Ui8Ukt9u9FQgERlKplDGZTN79L0AD4nQ6txwOx8jGxsb9vyYg/nmG24G2AAAAAElFTkSuQmCC',
    zoomRestore:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVR4Xp2SW0iTYRjH/5/fYdtnTc0jrhPW0Dwt7HC3mZBeKF1pbVoO26V3RkK3URcqiLBADRxEXZR2o9LuDAaKeSHOw1ZuRdBhTs3cNL9tbt/29m6gqASBP/jB8168fx6e50FHR0eb1Wp9PjAwMJS0v79/aHBw0NbV1fWiurr6Av5Hc3PzbXKAQCBAnE4nsdvtpLe3N2Qyme7W19fnVVVV8fgXra2t9wglFouR5eVl4nA4SDAYJHvE4/HE1OSkq6WlxczzfAaOkMayrAKUiYn3cLncMBgM8K1vYnbxIz55v2B6doEprdSV9XR399TV1d0CIBwKoChBYdk01NbehNv7FcHtPziVnQ3CKxCJxjDhmMYJdVa+xdL2QBTFs4cCqFw4HIbX+xlqtRo//GvIzc9HFDx2EgK2IMLj/42ZuXkY9IZiGlB8NECIRqNITxeRhBMU8EsEHzeicK2F8TPEYEVi8GP1F3Jy80SO43IAMHsBXLImhCCwGQAt8G1lHf7vEviTWal3PCFDIXA4f7oQ66v+CB327qEOGAYQBAEZGWr4fD6Ua89BlgKAHIHA0/DwDs5nqXCl4hLG39lXJGnHA4DsdwBCwPMcWI7H6OgYzGYz0pUiphY+YXMjhJIzBbhxVY/ZmQ/o6+uTI5HdNBzEct/SGYmEydLiIrHZbOSZ1ZqqSVwmSf5sBcn42Bi5dv06KSoqInTtSwAq9odIQCDLMra2t6DRFILlWLwZHsaDh53JM8fjJ0/hnJ+HrrICoVAoodfrywG8pl7e2wKbHIRWq4VOp0NDQwNMRiOampqojTAa76Rsb2+HJElzHo8HNTU1ZSqV6hWAEoZenkmrvfhIqVTy2IMACUJSBcMwKelneWTk7UvaRalGo7FkZmbC7XY34hiUUa1UG7Ucx0BBzaMWUMW/uh49keTZSXYAAAAASUVORK5CYII%3D',
    zoomWidth:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4XqWSX0hTbRjAn/ecdSbbNJdFK/p3tTAvXI4IwrwJ6vtEqK819abIG1GCYRcFs+FNXdS+z82tP1ARpX7VVUVoYgWl07oItH8KUcHUxf7Y5v667exse3rfEUsxr/rBw3k453l/D895XmI2m3dJkqQGilwuj25YX2FGgFpCuApEhGw2G+QITCdT6QZRFJEQAkvhKisrr1RVVY3Q53OFQjGcTqebjxmObjMYDMqmxkal8djR7YhYX6pSuZhwBQ6HYw4RpcHBAan7v3/ziWQK/7Z7kJFIxPGv7jkMR6LodPRgj912x2KxQFdXVzHAbrfPIqW/rw8XQiFsuu7Djvte9M8H0fPNi6f/n8XDlz0YDC1gZ6f5lc1mY2eKIYOf8DyB9l4vfIqoYMaPYPiaBkYuD5AUJWi9HYfdcqG0rKwMlv6HoiBPC6+d2ARtdxOgKefhwpG1wCY+PxgDd0CCWy2bwWoVI5FIlDbjVgrWCAJEowtgN5bDuScZUClKCp2CyTjcbNkA8ej3rChmwjzJQy6HwCA0iiqtVgsvR8Ygk4rBxQYOovFFiC2mwGlUQSIWgkePB5J0zVU8yZUCEuConOeWCHQ6Hej1ehh1jUE4HCl0RzqX1+eD4eGnyPOykuPG+i0YfO+XcXgij2T5CIgI1dXVLIGhoaHiOyZSq9Ugzb/1ZKWdOw7otspdHyZu5Mr1OSq5y1Yxg4i5TCaDLBhut3tZeDwebG0/ZbW21Uw6THvj7+6dwauW5rSz2/qPDCk5Cr2yhXFoChqN5tdV5TjgeR54QhSX+idrLCf3BJ65RsnB/bXKkenJXiZghwrxG4o75whCKAHgmvi8sU6v9Y9PffGVKDUVMtpBTovWwOoUJIIglLD8ozsND1+/0Tg79o0LXH5AFggEHphMJgUASLAKAmVqauoFyxfFPLQdWgc1dYbaOuNZIGyEP+EHsrF5Hxph5xoAAAAASUVORK5CYII%3D',
    hide: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrUk8FKAlEUhu9oqRQ2JCG0UBgNWijWQkFhiAqaXERLceE21+16A1+gRQshCFy5MGiTCROBguEqzGkVI0kgumihOKQw3f4zOL2Aqw58MHPv+f9zzr0zAuecLRIOtmAsbCAgrIf5KGtgHyggBHzzvC+ggxp4AiNbZxsIMDh1u91niqJs5XI5v6Zpq41Gw0WbsizPIpHIpFQqDWu12vt0Oi1Cd0d1aQQPOE8kEhf1el2uVCrbpmmuBwIB12RiMAIiF63RHuVQLmksrdPpTKPq42AwmBqGwQlVVTlFsXjNZfmAK8oJR1fc3qdc0pB2CS7ZZDLpQ/uu2WxmzVUoFFDZZJeXV9Z7OBxln59vzN6nXNKgUJYMblqt1vpoNNr2IChBkiSmqk2WSh1ZAo/HzZaXpT+DbwQ0H6R1OhyOfrfb/Wk2m2Y8Ht8QRdGLeZmmvbJQaIeJog/VNXZ4uGcZ67rez+fz9ziLW7oVAXPYV5FEA8fpdDqayWSivV5vs91ue6liLBYbB4PBfrlc7lSr1Q4aeMDyM52TbWB/FysgAnaBH3jn62MwBC9AA4b97Qj//19Y2OBXgAEA3HnRUkre/J0AAAAASUVORK5CYII%3D',
    settings:
      'data:image/png;base64,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%3D',
    menu: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqUlEQVR4XqWTPWtUQRhGz/vO7HWDYNJaWyz5FSJEgoWlYCGInaClCGpI4geC1mJjIWshqGn9CGwQf4TmJo0/wRRK1Jt7H+eOO8VCsIgHHjjD8MDMy4ydfLD57cfvdqFphZjFAB3mBgM3jldhjxOr73RU5lM3Np0A+Fp/BjcMw62PeL7jXBm1AMlDdil5bayeX6TvRkRmvBsJbikD3CPQUIUDXuwGAConuwTBBYCAyJRLyyOCQYxw7ZHx5KZ4tbnDhaURABuTbS4uLSLBm+QFB8ty/bExDHD1ofH0hqAFU0voyHF1ZFcKohDL7Me3xeVUHt8STQvRyFcaOJni6j0YGUEElaPwckVIEAAPUAVjOCBTHCU3oxCLvp7UuDnBI+4BOGAYnY2tGoBjUxeiKi2AuTtv1fNrmi5l+T5qJT2b1PoppfT+Jft+9m319N0yRM7dNSrg7D3jw4oAMHU45Fin7AHww4a4tSbOrBsf10UHWHmyZDC37ALC7AxUPJcBvGwimHUsl6As/usv9N0413z/NL/2/nTTdnSigP3jO5oZg2D0XQNOAQscjb0/9SM6Il0maJIAAAAASUVORK5CYII%3D',
    webComic:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVR42rWXaW4aQRCFayDs4IDZ7Bi83CGHyPLDMDiRZYRygRwmV4hQkCWbYbO5RDhBZMkLJGGzwezrkOo2xIEwhA7tJz0hesT019XV1YUA09KeSFL3wO+Hq+sbEASBehWNRiPq3Z1tOI3F4J0o6nC4N3k++3YbAtwRgGwuByqVaqXJJ5JlGbwezwRgHYcqSgCuEylaOPCL8P1HHgFWW/0jwAi2XmwggIQAATcOFZUBogggilAoFlcO/0RkC9wuF5xKCBBYEqBUvuUK4HTY2QAq1SqXySeyWa1sALVanSvA2pqFDaDRbHIFMJtMbADtdpsrgMFgYAPodvv4dcRpegF0Os2SAJJUIIWIFA9MX07zC7SojQvRYoBoPF4Q9/c5rXxaUiIBAZ9vIYDzczicNpvNL2Wyep4RQDcajcyHUOgNjpSUANbQ22gHWs05AEN0GX2DrikBPEMb0bo5z1YVCWcX3UIPlADUyVTqU38w+Eiv0f+aQ6AvJUkn+nxTV+88zQKYo7FYHX+48nIH/T7EUyly7BZCzAI48BiWyDG8vLqmybPsPtBoYdT2dncgHIlA6OgIer0eJM7O4P0CCMU6kM3mHjoiBgCybV6vB74cH8PbV6/Ban2OBa0LyfNzRQjlhuRnnh4dFpGju7W5AREECJD7pN4Au32dRiKJkZi3HYqlOF9gb0gIwKbbRSMQPDyELk7cbrVpJEhOpNLpvxJTuSEplZkBaOPhdMDXTAa+XVzQl5OtkYdDCAWDgFUWcHv/0ROOAW4rd7B8BjwCGPQGMBoNc58z3YbV+3umyf+EmCfmjqiOCcRFD7UJLBYzG0Cz1eIDMJbJaGQD6HQ6XAH0ej0bQL/f43kbg0ajZQMYDmXFhGIHEECtVrEBEPEEIFoGwIbeG38+hUgBuoQFhUiLNqE1TwRAWm3yh+N3Kf4FvfygMCu2Xp8AAAAASUVORK5CYII%3D',
    bookmark:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4T5WTW0iTARiGnzl/TadLnUGpebgRDU2zg2YQmBdBJHYwNUHyhGIFURdaCJnQhUpUF2EoHqE8VZB4E0QlhaampmZZVprzUEpz859u0/3OGFGUaeB3/b4PH+/7fTL+M4dDNyTJgaZeU+1aMtl//LInt1O7sSwQfaZ2J7C8mnZNgL9K2P2m/3EHpimC9ySED2l4tS5AUXZUaU5JbSbGYYqzU8pyaz5mrQegGm0tG/LeFe3G/GfULeUzPsca/QHNSojsYLBzrI+fn4e9naBUubm6OCkULv6+m7bFpJzez+IszI+AtovmurvPh4ZN7+YMyzqNiG5BkomjWmlSlhDpXlRRfj1HEZgMGAAjLImgVYNhDPSfYLYXDG9BFEG0AZmCeZ2Z9OpvxdYQZYEeQlrlzQtFEXEZKvR6MEzBwjSIg6BpA50VYAKjAwjutH+QNGnV47mDk0uVv1twhn038qJvpWYlh9qYjTDT+dNsGAWTGRYdsci9qHph6j1fOXJWL9FqzWNljZ51lyOaE4967kDdAmY9LFpgwR4UPtR3Ob0+WdwZA0z8CvOfO3h61as3KnQmBL0JJDmY7WHRAWxdeDau7DtwpTv0zyb+Amx1JWjgmkuPUjAK4ACuASDZwaQazEuIdq7moLz+sDEtA6tucDxMyLx/TlWK3JavRjfLpdrpmmXkFMZ7nNoi6GyspriSiawHPYayVQHlSRsb0w+5n2h4aXx/sWGq4Mv3pXqr0NddnliYsDk/Ya9DQMUjzb2MO9r41QDKh5nKjqY+qa2qw1AAqFdcnXdquGN+bIgQeaRsNhwQV7bg5GzLdr1EO2BZ40ttnG2J0Ev0A3NWzQ/Exfbo5qJ4cQAAAABJRU5ErkJggg==',
    pictureRight:
      'data:image/png;base64,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',
    pictureDown:
      'data:image/png;base64,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',
    pictureLeft:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAPNQTFRF////NFCKNFCKNFCKNFCKNFCKNFCKNFCKNFCKNlOIN1OMOFKHOVKHOViGOleFOliEOlqFPFiRPVmSPlqTQFuRQFyUQVuRQlySX4ayYXukYZo6YnylY32nY4q2ZX+pZmZmZ4GrZ5pAaYOtaoOuapC8bJG5bYarbZC3bZRXcatKcpfDcq5Vd6hMeZKzeZ/Lepu+erpPgINWgKDDgpu+hqbKh4tBiaXUir1ljK3Rj8VjkrPWlazCla3Clq7Dl67Dmns1n7vnoM19objJo7rMp77RrMLWsMfbsMnxtMvftdSst83iv9X4zt72059U1+P24er4////p0NnjQAAAAh0Uk5TADPW6err7O3/ygvKAAAA+ElEQVQ4y+XS2VLCMBSA4SqKQcAFXCCIiK0sIhjWGFygZSm1pfT9n4YT2lJSYRhv9b8932SbSNIfqbCrNXC2twGGPzq97IWBoapqAFA9FQKGyhjDARjd3QgA5pTSKg7A+D4uAkoJ8QC6TmdHrcnDyYEPdN1gfF7FOg99fGmvSmfaPvKBacIOfI5NHtLKmbzy3JjJUQ9YlsX4BthahbTMCvS/5UMX2FCz223abt4KbzP52FthAQ3m88HCDb1/ak9whseIf4YXiIMir1JB52clfovo+poEwhDxq13BOySk3YDAS94WRCAKlLtwwkAQsSRxfvEf9v2o/9ASO2Fiip5S95oAAAAASUVORK5CYII=',
    controls:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAH2klEQVR42q1Xe1BU1xn/3btvFljEBeQdJFDtTB41JJrGVEMeKphUO51OpxPTpnVM0zgtTU06rYaXaNo0TqcZ2z8ypWlnkqEhMW3VJRpEQnRAQV1MwADuAvJeWEHd5bHP2++c3YW9y5rQaQ583HvOPed8v/P7XgcBgDK9su7fXkEsliQJt23Slw1/wVreBIiCACX8puHSom004A2MAnEplSduVT35AO0hQRQX9gttGQ5MCqmSwvphAwtr5LDYU6VQoOx4K2ylm+Op6wgBSDJW1I3X/nAjCg+bAQ0hUIgERIRaSYhFgZ70zvr0rqQxDb2rlIG+SkHfaWMVnyfweSp68r6omN9DRXtuztXj6bc/wfXyomTSOxECkJxYXmereWYjnj7SDZ1SwRfQvpwyhcioC76HnvTCiBL5vOB3Bi74zsfEhXf6JUUCnv2GETsIwFRFUQotH58HYCg12Y7tfAx1V6cQqxL5gkh3kPiPnPpwu0jyLkKbS/wvMOP1Y2t+IoqrG+Cs2CIHoN9nsjn3F2HSBWhVCC6Rb8gA+SW5/W/ja/wAzJdEYWEvlx8w0JiyvAG+isfkAHR7TbaZqiL8/aNOTp0gCIsQ+EgeTJcWQETXDYE0K8knLFYrOjqvwG63cycWBAnxej1avUacOvRS6vT09NgiAO80dEGlUnAQ4Y0p9RCCBzMYEGFe2aIAFET4fD7UmT5EjD4GBQVrkJ+XFzIe3C4Xei1WnGpswujoSP6fD79hkQGobepBp3WMHE+UAyAEX89LIwAimjqGSY+w+PgEacPdWag98gHSVqThkcJv4fOuHgwODnFGmWSkp2P1qjwC4sab1X+T9leU6WQA3v/kKnx+iYegEHY6P1HIQK3LVsA55+MeHck9WzM40I+eHgu2b38KjR+f4WywcRedvL+vj8JVpMN44PH6KDyUqCwvS5QB+OCsJWCCYOiEEgo3AXnx2mwl9QOeFQ6Q9RQUvjX/fB9PPP4oRsbGMTE+zpUryB+6u3vw/HM/gdFohFB6Gtj/6JagE/bJABxtseIzi43HfnhjrNxFJlibrUbj5SEOMBwBA1G4JgeH/vgn/PY3L+M/R01cMROVSoWOjg78dNdOJCcnQfXKCXirtqwKApiWATjW0kvK/IFICDcBAVAQZevu0MIx6wmyEz5DgCFOj9+/fgg/3/0znG46wyOBKddoNDCbL+GF53ZheZIRmn11cB8ojgzD4wSgGKbWPkqjykUMMABuZoIcXVCdEKmfUrQaB3/3Gn71YgnqT52GWq0m0UCrVaO1tQ2/2P08DAkJxMBJYmBzdAAn266h/eooBxDJwD35ZIKVMWgwD0KUMRCY8/j9uXjj8F+wedMmjJEPuNwuOr2aM9By7hxe+mUJtDothPJGoKIwOoD6i/3kbFGigAAoqfiszY0NmCBMuRCsA/GxelS/9Q8U3HcfEuikfb39UJBDMxYo5tHS3MyBa5mTE1sCmfTVg1UaGYCGSwOkSMGKoczG5BbcBOvujOMRIQSzPNuQhRYzW+2RfyElLQN33XM3Pv20E7ccDhji47gjqokJrUZLQmZRqXF9chI17743eegPr+bKADRdHsTF7pFFiYhFwZqvkQlyDag3D8xXxi0F2VRBO3Giy4adORIqv/sw2i5fwdRNB5zTTmRmZEAfowPhD1ZVkZjpxfm2C5Qtj29vbzd/zAFoCcAsAThDIebmyWOxEyqJsgfyDZie8fBaH0NV88dHP0dmyh1wSCo0WYaQI42hZKUXTrcfzefOQ0OOODM7Cz3VADf5xK2pSVjj8lD/+p5HvF5vL21tkwE4+9lQwP4RxYgVEy/VgnVUThk3SrLjjnfNSE/OQoJhGdpHb1CNENHS04PvxY0h0daJPb9+mSjX8WJkJ8oZE5mZmRDJCaWKwlzaZpiVBxmAZpbnBRFRiiGlVQnrVxvZDQM7asxITcpEfmoSTlrs5Bd+eChD3qA0fbm9GTcPbIVPUBNo/3zhYqQqWWhSIvJURdwHQgDOXxmJCiA0sWBVCp6puYCU5RnIT0vCR5YJ7h8eP6v3AgbsE9C5r8NcsgEet5d/CzV2M1IxZ9xrguvg1ugA2q6M8ptECEAIB7uiaUheu3QNyw3peOjOVNR2jmGONIeUW0eGkSg60fbCen5cD50+/FbFnJBl06gAQlFwqWuUB3ZIMQPCFuooB7x4qgerslfim7kB5bOk2cvCk6jvHujDCo0b53ZvCGwp+aNQyK8r0O0zYe5ABIDYV0w2R2URbtd+8E4rMpIzsWl1Kv5qDpyc8hWJiN6hfmTF+FC/6yEspcWV1sG5P6IWGMtM1odzk2LZqaT5AhsoyZOzbtyflYVt92bTye0Yd7roPwqRKPbBOtgHx4wT96Yvg5YSkoto99/mvsYU6Sh6zvZOOO0VxbnhABJIckiWYfF9VBWz99iHjSVbUX3RDhsp9wWVW65ZMDd90z5csW0HzfMs6fiBgJoi6SO5EQJA92DoSdRRFixLLDN1vfVsEaovjNDpyLkoL1uuXYVrxmEfKn/q2zRnhGRmiQBYc5NMh0ALXzLZmLTn7fd+tGn9RocQj56xm2TzXnjnpq+T8ifpez+J/X9gIKppvqjFkaxcse/IMUETk8lvQu6ZgeHK73z/q1C+FABKkkQSupDDEBy7hQDt/7fypQBgjflIDBZ8hNlw5qtQztp/AYMqbqxdRoZoAAAAAElFTkSuQmCC',
  };

  /**
   * Checks if a JavaScript value is empty
   * @example
   * isEmpty(null) // true
   * isEmpty(undefined) // true
   * isEmpty([]) // true
   * isEmpty({}) // true
   * isEmpty("") // true
   * isEmpty(false) // false
   * isEmpty(0) // false
   * isEmpty([{},{"0":false},{"":0},{"0":0}]) // false
   * isEmpty(42) // false
   * isEmpty([{"":1},{"0":1}]) // false
   * @param {any} value - item to test
   * @returns {boolean} true if empty, otherwise false
   */
  /**
   * Checks if value is nothing. Deep-checks arrays and objects
   * @example
   * isNothing(null) // true
   * isNothing(undefined) // true
   * isNothing([]) // true
   * isNothing({}) // true
   * isNothing("") // true
   * isNothing(false) // true
   * isNothing(0) // true
   * isNothing([{},{"0":false},{"":0},{"0":0}]) // true
   * isNothing(42) // false
   * isNothing([{"":1},{"0":1}]) // false
   * @param {any} value - item to test
   * @returns {boolean} true if nothing, otherwise false
   */
  function isNothing(value) {
    function isEmptyObject(a) {
      if (!Array.isArray(a)) {
        // it's an Object, not an Array
        const hasNonempty = Object.keys(a).some((element) => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      // check if array is really not empty as JS thinks at least one element should be non-empty
      return !a.some((element) => !isNothing(element));
    }
    return (
      // eslint-disable-next-line eqeqeq
      value == false || value === 0 || typeof value === 'undefined' || value == null || (typeof value === 'object' && isEmptyObject(value))
    );
  }

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
        });
      }, wait);
    });
  }
  // After pages load apply default Zoom
  function applyZoom(pages = '.PageContent img', zoom = settings.Zoom) {
    const $pages = typeof pages === 'string' ? $(pages) : pages;
    $pages.each((index, value) => {
      $(value).removeAttr('width').removeAttr('height').removeAttr('style');
      if (zoom === 1000) {
        $(value).width(window.innerWidth);
      } else if (zoom === -1000) {
        $(value).height(window.innerHeight + ($('#Navigation').hasClass('disabled') ? 0 : -34) + ($('#Chapter').hasClass('WebComic') ? 0 : -35));
      } else {
        $(value).width($(value).prop('naturalWidth') * (zoom / 100));
      }
    });
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
  function onImagesProgress(imgLoad, image) {
    const $item = $(image.img);
    if (image.isLoaded) {
      $item.addClass('imgLoaded');
      $item.removeClass('imgBroken');
      const thumb = $item.attr('id').replace('PageImg', 'ThumbnailImg');
      $(`#${thumb}`)
        .attr('src', $item.attr('src'))
        .on('load', () => applyZoom($item));
    } else {
      $item.addClass('imgBroken');
      reloadImage($item);
      $item.parent().imagesLoaded().progress(onImagesProgress);
    }
    updateProgress();
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
  function addPage(manga, index, pageUrl) {
    if (!settings.lazyLoadImages || index < settings.lazyStart) {
      getHtml(pageUrl).then((response) => {
        const src = normalizeUrl(
          $(response)
            .find(manga.img)
            .attr(manga.lazyAttr ?? 'src'),
        );
        $(`#PageImg${index}`).attr('src', src);
        $(`#PageImg${index}`).parent().imagesLoaded().progress(onImagesProgress);
        logScript('Loaded Page:', index, 'Source:', src);
      });
    } else {
      $(`#PageImg${index}`)
        .attr('data-src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')
        .unveil({
          offset: 2000,
        })
        .on('loaded.unveil', () => {
          getHtml(pageUrl).then((response) => {
            const src = normalizeUrl(
              $(response)
                .find(manga.img)
                .attr(manga.lazyAttr ?? 'src'),
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
  function delayAdd(src, wait = settings.Timer) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(src);
      }, wait);
    });
  }
  // use a list of pages to fill the viewer
  function loadMangaPages(begin, manga) {
    return manga.listPages?.map((url, index) =>
      index >= begin ? delayAdd(url, (manga.timer || settings.Timer) * (index - begin)).then((response) => addPage(manga, index + 1, response)) : null,
    );
  }
  // use a list of images to fill the viewer
  function loadMangaImages(begin, manga) {
    return manga.listImages?.map((src, index) =>
      index >= begin ? delayAdd(src, (manga.timer || settings.Timer) * (index - begin)).then((response) => addImg(index + 1, response)) : null,
    );
  }
  // Entry point for loading hte Manga pages
  function loadManga(manga, begin = 1) {
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

  var colorScheme = { exports: {} };

  (function (module) {
    (function () {
      var ColorScheme,
        slice = [].slice;
      ColorScheme = (function () {
        var clone, l, len, ref, typeIsArray, word;
        typeIsArray =
          Array.isArray ||
          function (value) {
            return {}.toString.call(value) === '[object Array]';
          };
        ColorScheme.SCHEMES = {};
        ref = 'mono monochromatic contrast triade tetrade analogic'.split(/\s+/);
        for (l = 0, len = ref.length; l < len; l++) {
          word = ref[l];
          ColorScheme.SCHEMES[word] = true;
        }
        ColorScheme.PRESETS = {
          default: [-1, -1, 1, -0.7, 0.25, 1, 0.5, 1],
          pastel: [0.5, -0.9, 0.5, 0.5, 0.1, 0.9, 0.75, 0.75],
          soft: [0.3, -0.8, 0.3, 0.5, 0.1, 0.9, 0.5, 0.75],
          light: [0.25, 1, 0.5, 0.75, 0.1, 1, 0.5, 1],
          hard: [1, -1, 1, -0.6, 0.1, 1, 0.6, 1],
          pale: [0.1, -0.85, 0.1, 0.5, 0.1, 1, 0.1, 0.75],
        };
        ColorScheme.COLOR_WHEEL = {
          0: [255, 0, 0, 100],
          15: [255, 51, 0, 100],
          30: [255, 102, 0, 100],
          45: [255, 128, 0, 100],
          60: [255, 153, 0, 100],
          75: [255, 178, 0, 100],
          90: [255, 204, 0, 100],
          105: [255, 229, 0, 100],
          120: [255, 255, 0, 100],
          135: [204, 255, 0, 100],
          150: [153, 255, 0, 100],
          165: [51, 255, 0, 100],
          180: [0, 204, 0, 80],
          195: [0, 178, 102, 70],
          210: [0, 153, 153, 60],
          225: [0, 102, 178, 70],
          240: [0, 51, 204, 80],
          255: [25, 25, 178, 70],
          270: [51, 0, 153, 60],
          285: [64, 0, 153, 60],
          300: [102, 0, 153, 60],
          315: [153, 0, 153, 60],
          330: [204, 0, 153, 80],
          345: [229, 0, 102, 90],
        };
        function ColorScheme() {
          var colors, m;
          colors = [];
          for (m = 1; m <= 4; m++) {
            colors.push(new ColorScheme.mutablecolor(60));
          }
          this.col = colors;
          this._scheme = 'mono';
          this._distance = 0.5;
          this._web_safe = false;
          this._add_complement = false;
        }
        ColorScheme.prototype.colors = function () {
          var dispatch, h, i, j, m, n, output, ref1, used_colors;
          used_colors = 1;
          h = this.col[0].get_hue();
          dispatch = {
            mono: (function (_this) {
              return function () {};
            })(),
            contrast: (function (_this) {
              return function () {
                used_colors = 2;
                _this.col[1].set_hue(h);
                return _this.col[1].rotate(180);
              };
            })(this),
            triade: (function (_this) {
              return function () {
                var dif;
                used_colors = 3;
                dif = 60 * _this._distance;
                _this.col[1].set_hue(h);
                _this.col[1].rotate(180 - dif);
                _this.col[2].set_hue(h);
                return _this.col[2].rotate(180 + dif);
              };
            })(this),
            tetrade: (function (_this) {
              return function () {
                var dif;
                used_colors = 4;
                dif = 90 * _this._distance;
                _this.col[1].set_hue(h);
                _this.col[1].rotate(180);
                _this.col[2].set_hue(h);
                _this.col[2].rotate(180 + dif);
                _this.col[3].set_hue(h);
                return _this.col[3].rotate(dif);
              };
            })(this),
            analogic: (function (_this) {
              return function () {
                var dif;
                used_colors = _this._add_complement ? 4 : 3;
                dif = 60 * _this._distance;
                _this.col[1].set_hue(h);
                _this.col[1].rotate(dif);
                _this.col[2].set_hue(h);
                _this.col[2].rotate(360 - dif);
                _this.col[3].set_hue(h);
                return _this.col[3].rotate(180);
              };
            })(this),
          };
          dispatch['monochromatic'] = dispatch['mono'];
          if (dispatch[this._scheme] != null) {
            dispatch[this._scheme]();
          } else {
            throw 'Unknown color scheme name: ' + this._scheme;
          }
          output = [];
          for (i = m = 0, ref1 = used_colors - 1; 0 <= ref1 ? m <= ref1 : m >= ref1; i = 0 <= ref1 ? ++m : --m) {
            for (j = n = 0; n <= 3; j = ++n) {
              output[i * 4 + j] = this.col[i].get_hex(this._web_safe, j);
            }
          }
          return output;
        };
        ColorScheme.prototype.colorset = function () {
          var flat_colors, grouped_colors;
          flat_colors = clone(this.colors());
          grouped_colors = [];
          while (flat_colors.length > 0) {
            grouped_colors.push(flat_colors.splice(0, 4));
          }
          return grouped_colors;
        };
        ColorScheme.prototype.from_hue = function (h) {
          if (h == null) {
            throw 'from_hue needs an argument';
          }
          this.col[0].set_hue(h);
          return this;
        };
        ColorScheme.prototype.rgb2ryb = function () {
          var blue, green, iN, maxgreen, maxyellow, red, rgb, white, yellow;
          rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (rgb[0] != null && typeIsArray(rgb[0])) {
            rgb = rgb[0];
          }
          (red = rgb[0]), (green = rgb[1]), (blue = rgb[2]);
          white = Math.min(red, green, blue);
          red -= white;
          green -= white;
          blue -= white;
          maxgreen = Math.max(red, green, blue);
          yellow = Math.min(red, green);
          red -= yellow;
          green -= yellow;
          if (blue > 0 && green > 0) {
            blue /= 2;
            green /= 2;
          }
          yellow += green;
          blue += green;
          maxyellow = Math.max(red, yellow, blue);
          if (maxyellow > 0) {
            iN = maxgreen / maxyellow;
            red *= iN;
            yellow *= iN;
            blue *= iN;
          }
          red += white;
          yellow += white;
          blue += white;
          return [Math.floor(red), Math.floor(yellow), Math.floor(blue)];
        };
        ColorScheme.prototype.rgb2hsv = function () {
          var b, d, g, h, max, min, r, rgb, s, v;
          rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (rgb[0] != null && typeIsArray(rgb[0])) {
            rgb = rgb[0];
          }
          (r = rgb[0]), (g = rgb[1]), (b = rgb[2]);
          r /= 255;
          g /= 255;
          b /= 255;
          min = Math.min.apply(Math, [r, g, b]);
          max = Math.max.apply(Math, [r, g, b]);
          d = max - min;
          v = max;
          if (d > 0) {
            s = d / max;
          } else {
            return [0, 0, v];
          }
          h = r === max ? (g - b) / d : g === max ? 2 + (b - r) / d : 4 + (r - g) / d;
          h *= 60;
          h %= 360;
          return [h, s, v];
        };
        ColorScheme.prototype.rgbToHsv = function () {
          var b, d, g, h, max, min, r, rgb, s, v;
          rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (rgb[0] != null && typeIsArray(rgb[0])) {
            rgb = rgb[0];
          }
          (r = rgb[0]), (g = rgb[1]), (b = rgb[2]);
          r /= 255;
          g /= 255;
          b /= 255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          h = void 0;
          s = void 0;
          v = max;
          d = max - min;
          s = max === 0 ? 0 : d / max;
          if (max === min) {
            h = 0;
          } else {
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
            }
            h /= 6;
          }
          return [h, s, v];
        };
        ColorScheme.prototype.from_hex = function (hex) {
          var b, g, h, hsv, num, r, ref1, ref2, rgbcap, s, v;
          if (hex == null) {
            throw 'from_hex needs an argument';
          }
          if (!/^([0-9A-F]{2}){3}$/im.test(hex)) {
            throw 'from_hex(' + hex + ') - argument must be in the form of RRGGBB';
          }
          rgbcap = /(..)(..)(..)/.exec(hex).slice(1, 4);
          (ref1 = (function () {
            var len1, m, results;
            results = [];
            for (m = 0, len1 = rgbcap.length; m < len1; m++) {
              num = rgbcap[m];
              results.push(parseInt(num, 16));
            }
            return results;
          })()),
            (r = ref1[0]),
            (g = ref1[1]),
            (b = ref1[2]);
          (ref2 = this.rgb2ryb([r, g, b])), (r = ref2[0]), (g = ref2[1]), (b = ref2[2]);
          hsv = this.rgbToHsv(r, g, b);
          h = null;
          s = null;
          v = null;
          h = hsv[0];
          s = hsv[1];
          v = hsv[2];
          this.from_hue(h * 360);
          this._set_variant_preset([s, v, s, v * 0.7, s * 0.25, 1, s * 0.5, 1]);
          return this;
        };
        ColorScheme.prototype.add_complement = function (b) {
          if (b == null) {
            throw 'add_complement needs an argument';
          }
          this._add_complement = b;
          return this;
        };
        ColorScheme.prototype.web_safe = function (b) {
          if (b == null) {
            throw 'web_safe needs an argument';
          }
          this._web_safe = b;
          return this;
        };
        ColorScheme.prototype.distance = function (d) {
          if (d == null) {
            throw 'distance needs an argument';
          }
          if (d < 0) {
            throw 'distance(' + d + ') - argument must be >= 0';
          }
          if (d > 1) {
            throw 'distance(' + d + ') - argument must be <= 1';
          }
          this._distance = d;
          return this;
        };
        ColorScheme.prototype.scheme = function (name) {
          if (name == null) {
            return this._scheme;
          } else {
            if (ColorScheme.SCHEMES[name] == null) {
              throw "'" + name + "' isn't a valid scheme name";
            }
            this._scheme = name;
            return this;
          }
        };
        ColorScheme.prototype.variation = function (v) {
          if (v == null) {
            throw 'variation needs an argument';
          }
          if (ColorScheme.PRESETS[v] == null) {
            throw "'$v' isn't a valid variation name";
          }
          this._set_variant_preset(ColorScheme.PRESETS[v]);
          return this;
        };
        ColorScheme.prototype._set_variant_preset = function (p) {
          var i, m, results;
          results = [];
          for (i = m = 0; m <= 3; i = ++m) {
            results.push(this.col[i].set_variant_preset(p));
          }
          return results;
        };
        clone = function (obj) {
          var flags, key, newInstance;
          if (obj == null || typeof obj !== 'object') {
            return obj;
          }
          if (obj instanceof Date) {
            return new Date(obj.getTime());
          }
          if (obj instanceof RegExp) {
            flags = '';
            if (obj.global != null) {
              flags += 'g';
            }
            if (obj.ignoreCase != null) {
              flags += 'i';
            }
            if (obj.multiline != null) {
              flags += 'm';
            }
            if (obj.sticky != null) {
              flags += 'y';
            }
            return new RegExp(obj.source, flags);
          }
          newInstance = new obj.constructor();
          for (key in obj) {
            newInstance[key] = clone(obj[key]);
          }
          return newInstance;
        };
        ColorScheme.mutablecolor = (function () {
          mutablecolor.prototype.hue = 0;
          mutablecolor.prototype.saturation = [];
          mutablecolor.prototype.value = [];
          mutablecolor.prototype.base_red = 0;
          mutablecolor.prototype.base_green = 0;
          mutablecolor.prototype.base_saturation = 0;
          mutablecolor.prototype.base_value = 0;
          function mutablecolor(hue) {
            if (hue == null) {
              throw 'No hue specified';
            }
            this.saturation = [];
            this.value = [];
            this.base_red = 0;
            this.base_green = 0;
            this.base_blue = 0;
            this.base_saturation = 0;
            this.base_value = 0;
            this.set_hue(hue);
            this.set_variant_preset(ColorScheme.PRESETS['default']);
          }
          mutablecolor.prototype.get_hue = function () {
            return this.hue;
          };
          mutablecolor.prototype.set_hue = function (h) {
            var avrg, color, colorset1, colorset2, d, derivative1, derivative2, en, i, k;
            avrg = function (a, b, k) {
              return a + Math.round((b - a) * k);
            };
            this.hue = Math.round(h % 360);
            d = (this.hue % 15) + (this.hue - Math.floor(this.hue));
            k = d / 15;
            derivative1 = this.hue - Math.floor(d);
            derivative2 = (derivative1 + 15) % 360;
            if (derivative1 === 360) {
              derivative1 = 0;
            }
            if (derivative2 === 360) {
              derivative2 = 0;
            }
            colorset1 = ColorScheme.COLOR_WHEEL[derivative1];
            colorset2 = ColorScheme.COLOR_WHEEL[derivative2];
            en = {
              red: 0,
              green: 1,
              blue: 2,
              value: 3,
            };
            for (color in en) {
              i = en[color];
              this['base_' + color] = avrg(colorset1[i], colorset2[i], k);
            }
            this.base_saturation = avrg(100, 100, k) / 100;
            return (this.base_value /= 100);
          };
          mutablecolor.prototype.rotate = function (angle) {
            var newhue;
            newhue = (this.hue + angle) % 360;
            return this.set_hue(newhue);
          };
          mutablecolor.prototype.get_saturation = function (variation) {
            var s, x;
            x = this.saturation[variation];
            s = x < 0 ? -x * this.base_saturation : x;
            if (s > 1) {
              s = 1;
            }
            if (s < 0) {
              s = 0;
            }
            return s;
          };
          mutablecolor.prototype.get_value = function (variation) {
            var v, x;
            x = this.value[variation];
            v = x < 0 ? -x * this.base_value : x;
            if (v > 1) {
              v = 1;
            }
            if (v < 0) {
              v = 0;
            }
            return v;
          };
          mutablecolor.prototype.set_variant = function (variation, s, v) {
            this.saturation[variation] = s;
            return (this.value[variation] = v);
          };
          mutablecolor.prototype.set_variant_preset = function (p) {
            var i, m, results;
            results = [];
            for (i = m = 0; m <= 3; i = ++m) {
              results.push(this.set_variant(i, p[2 * i], p[2 * i + 1]));
            }
            return results;
          };
          mutablecolor.prototype.get_hex = function (web_safe, variation) {
            var c, color, formatted, i, k, len1, len2, m, max, n, ref1, rgb, rgbVal, s, str, v;
            max = Math.max.apply(
              Math,
              function () {
                var len1, m, ref1, results;
                ref1 = ['red', 'green', 'blue'];
                results = [];
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  color = ref1[m];
                  results.push(this['base_' + color]);
                }
                return results;
              }.call(this),
            );
            Math.min.apply(
              Math,
              function () {
                var len1, m, ref1, results;
                ref1 = ['red', 'green', 'blue'];
                results = [];
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  color = ref1[m];
                  results.push(this['base_' + color]);
                }
                return results;
              }.call(this),
            );
            v = (variation < 0 ? this.base_value : this.get_value(variation)) * 255;
            s = variation < 0 ? this.base_saturation : this.get_saturation(variation);
            k = max > 0 ? v / max : 0;
            rgb = [];
            ref1 = ['red', 'green', 'blue'];
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              color = ref1[m];
              rgbVal = Math.min.apply(Math, [255, Math.round(v - (v - this['base_' + color] * k) * s)]);
              rgb.push(rgbVal);
            }
            if (web_safe) {
              rgb = (function () {
                var len2, n, results;
                results = [];
                for (n = 0, len2 = rgb.length; n < len2; n++) {
                  c = rgb[n];
                  results.push(Math.round(c / 51) * 51);
                }
                return results;
              })();
            }
            formatted = '';
            for (n = 0, len2 = rgb.length; n < len2; n++) {
              i = rgb[n];
              str = i.toString(16);
              if (str.length < 2) {
                str = '0' + str;
              }
              formatted += str;
            }
            return formatted;
          };
          return mutablecolor;
        })();
        return ColorScheme;
      })();
      if (module !== null && module.exports != null) {
        module.exports = ColorScheme;
      } else {
        {
          window.ColorScheme = ColorScheme;
        }
      }
    }.call(commonjsGlobal));
  })(colorScheme);
  var ColorScheme = colorScheme.exports;

  const scheme = new ColorScheme().scheme('mono').variation('default');
  // Add custom Themes to the page
  function addTheme(theme) {
    return `<style type='text/css' name='${theme[0]}'>
  .${theme[0]} .controlLabel, .${theme[0]} .ViewerTitle, .${theme[0]}, .PageFunctions a.visible, .${theme[0]} a, .${theme[0]} a:link, .${theme[0]} a:visited, .${theme[0]} a:active, .${theme[0]} a:focus{ text-decoration:none; color: ${theme[2]};}
  .${theme[0]} {background-repeat: repeat;background-position: 0 0;background-image: none;background-color: ${theme[1]};background-attachment: scroll;}
  .${theme[0]} #ImageOptions #menu .menuOuterArrow {border-left-width: 10px;border-left-style: solid;border-left-color: ${theme[4]};}
  .${theme[0]} #ImageOptions #menu .menuInnerArrow {border-left-width: 5px;border-left-style: solid;border-left-color: ${theme[1]};}
  .${theme[0]} .PageFunctions { border: 1px solid ${theme[3]}; border-bottom: medium none; border-left: medium none; border-right: medium none;}
  /*.${theme[0]} #Chapter { border: 1px solid ${theme[3]}; border-top: medium none; border-left: medium none; border-right: medium none;}*/
  .${theme[0]} .PageFunctions > span, .${theme[0]} .Thumbnail span {background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .panel {background: none repeat scroll 0 0 ${theme[4]}; border: thin solid ${theme[3]};}
  .${theme[0]} .PageContent, .${theme[0]} .Thumbnail img { outline: 2px solid ${theme[3]}; background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .ChapterControl a { border: 1px solid ${theme[3]}; background-color: ${theme[5]};
  </style>`;
  }
  function addCustomTheme(color) {
    const bg = scheme.from_hex(color.replace('#', '')).colors();
    return (
      addTheme(['Custom_Dark', '#000000', `#${bg[2]}`, `#${bg[3]}`, `#${bg[0]}`, `#${bg[1]}`]) +
      addTheme(['Custom_Light', '#eeeeec', `#${bg[3]}`, `#${bg[2]}`, `#${bg[0]}`, `#${bg[1]}`])
    );
  }
  function addFullCustomTheme(body, text, lines, panel, buttons) {
    return addTheme(['Full_Custom', body, text, lines, panel, buttons]);
  }
  function loadThemes() {
    const bg = scheme.from_hex(settings.CustomTheme.replace('#', '')).colors();
    return [
      //   1-body       2-text       3-lines     4-panel     5-buttons
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
      ['Custom_Dark', '#000000', `#${bg[2]}`, `#${bg[3]}`, `#${bg[0]}`, `#${bg[1]}`],
      ['Custom_Light', '#eeeeec', `#${bg[3]}`, `#${bg[2]}`, `#${bg[0]}`, `#${bg[1]}`],
      ['Full_Custom', settings.CustomThemeBody, settings.CustomThemeText, settings.CustomThemeLines, settings.CustomThemePanel, settings.CustomThemeButton],
    ];
  }
  const themes = loadThemes();
  const themesSelector = themes.map((theme) => `<option value='${theme[0]}' ${settings.Theme === theme[0] ? 'selected' : ''}>${theme[0].replace('_', ' ')}</option>`);
  const themesCSS = themes.map(addTheme).join('');

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
      if (
        !e.originalEvent.ctrlKey &&
        !e.originalEvent.altKey &&
        !e.originalEvent.shiftKey &&
        !e.originalEvent.metaKey &&
        $.inArray(a, [
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
        ]) !== -1
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        switch (a) {
          case 'ArrowUp':
          case 'KeyW':
          case 'Numpad8':
            if (settings.Zoom === -1000) {
              const next = $('.MangaPage')
                .get()
                .map((item) => $(item).offset().top - $(window).scrollTop())
                .findIndex((element) => element > 10);
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
              const next = $('.MangaPage')
                .get()
                .map((item) => $(item).offset().top - $(window).scrollTop())
                .findIndex((element) => element > 10);
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
            $('.ChapterControl:first .next')[0].trigger('click');
            break;
          case 'ArrowLeft':
          case 'Comma':
          case 'KeyA':
          case 'Numpad4':
            $('.ChapterControl:first .prev')[0].trigger('click');
            break;
          case 'Equal':
          case 'NumpadAdd':
          case 'KeyE':
            $('#enlarge').trigger('click');
            break;
          case 'Minus':
          case 'NumpadSubtract':
          case 'KeyQ':
            $('#reduce').trigger('click');
            break;
          case 'Digit9':
          case 'NumpadDivide':
          case 'KeyR':
            $('#restore').trigger('click');
            break;
          case 'Digit0':
          case 'NumpadMultiply':
          case 'KeyF':
            $('#fitWidth').trigger('click');
            break;
          case 'Slash':
          case 'Numpad5':
          case 'KeyX':
            $('#settings').trigger('click');
            break;
          case 'KeyC':
            $('#webComic').trigger('click');
            break;
          case 'KeyV':
            $('#verticalMode').trigger('click');
            break;
          case 'KeyN':
            $('#rtlMode').trigger('click');
            break;
          case 'KeyB':
            $('#ltrMode').trigger('click');
            break;
        }
        return false;
      }
      return true;
    }
    $(document).on('keydown', processKey);
  }
  // Controls for the extra features added to the sites
  function controls$1() {
    // Size Controls
    $('#enlarge').on('click', () => {
      settings.Zoom += settings.zoomStep;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#reduce').on('click', () => {
      settings.Zoom -= settings.zoomStep;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#restore').on('click', () => {
      settings.Zoom = 100;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#fitWidth').on('click', () => {
      settings.Zoom = 1000;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#fitHeight').on('click', () => {
      settings.Zoom = -1000;
      $('#Zoom b').html(settings.Zoom);
      applyZoom();
    });
    $('#zoomStep').on('change', (event) => {
      const step = $(event.target).val();
      setValueGM('MangaZoomStep', parseInt(step, 10));
      logScript(`zoomStep: ${getValueGM('MangaZoomStep')}`);
    });
    // WebComic View Mode
    $('#webComic').on('click', () => {
      $('#Chapter').addClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL');
      applyZoom();
    });
    // Fluid LTR View Mode
    $('#ltrMode').on('click', () => {
      $('#Chapter').removeClass('WebComic').addClass('FluidLTR').removeClass('FluidRTL');
      applyZoom();
    });
    // Fluid RTL View Mode
    $('#rtlMode').on('click', () => {
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').addClass('FluidRTL');
      applyZoom();
    });
    // Vertical View Mode
    $('#verticalMode').on('click', () => {
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL');
      applyZoom();
    });
    $('#fitIfOversize').on('change', (event) => {
      $('#Chapter').toggleClass('fitWidthIfOversize');
      if ($(event.target).is(':checked')) {
        setValueGM('MangaFitWidthIfOversize', true);
      } else {
        setValueGM('MangaFitWidthIfOversize', false);
      }
      logScript(`fitIfOversize: ${getValueGM('MangaFitWidthIfOversize')}`);
    });
    $('#viewMode').on('change', (event) => {
      const mode = $(event.target).val();
      $('#Chapter').removeClass('WebComic').removeClass('FluidLTR').removeClass('FluidRTL').addClass(mode);
      setValueGM('MangaViewMode', mode);
      logScript(`ViewMode: ${getValueGM('MangaViewMode')}`);
      applyZoom();
    });
    $('#loadMode').on('change', (event) => {
      const mode = $(event.target).val();
      setValueGM('MangaLoadMode', mode);
      logScript(`MangaLoadMode: ${getValueGM('MangaLoadMode')}`);
    });
    $('#showThumbnails').on('change', (event) => {
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
    $('#downloadZip').on('change', (event) => {
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
    $('.download').on('click', () => {
      logScript('Downloading Chapter');
      $('#blob')[0].trigger('click');
    });
    $('#lazyLoadImages').on('change', (event) => {
      if ($(event.target).is(':checked')) {
        setValueGM('MangaLazyLoadImages', true);
        Swal.fire({
          title: 'Warning',
          html: `Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>
               Suggestion: <span style="color:red;font-weight:bold">Disable Thumbnails</span> to save Bandwidth/Memory.`,
          icon: 'warning',
        });
      } else {
        setValueGM('MangaLazyLoadImages', false);
      }
      logScript(`MangaLazyLoadImages: ${getValueGM('MangaLazyLoadImages')}`);
    });
    $('#lazyStart').on('change', (event) => {
      const start = $(event.target).val();
      setValueGM('MangaLazyStart', start);
      logScript(`lazyStart: ${getValueGM('MangaLazyStart')}`);
    });
    $('#PagesPerSecond').on('change', (event) => {
      setValueGM('MangaTimer', parseInt($(event.target).val(), 10));
      logScript(`MangaTimer: ${getValueGM('MangaTimer')}`);
    });
    $('#DefaultZoom').on('change', (event) => {
      settings.Zoom = parseInt($(event.target).val(), 10);
      $('#Zoom b').html(settings.Zoom);
      setValueGM('MangaZoom', parseInt(settings.Zoom, 10));
      logScript(`MangaZoom: ${getValueGM('MangaZoom')}`);
      applyZoom();
    });
    // Toggle Controls
    $('#pageControls').on('click', () => {
      $('#MangaOnlineViewer').toggleClass('hideControls');
    });
    $('#hidePageControls').on('change', (event) => {
      $('#MangaOnlineViewer').toggleClass('hideControls');
      if ($(event.target).is(':checked')) {
        setValueGM('MangaHidePageControls', true);
      } else {
        setValueGM('MangaHidePageControls', false);
      }
      logScript(`MangaHidePageControls: ${getValueGM('MangaHidePageControls')}`);
    });
    // Theme Control
    $('#ThemeSelector').on('change', (event) => {
      const target = $(event.target);
      $('#MangaOnlineViewer , body').removeClass().addClass(target.val());
      logScript('MangaTheme', target.val());
      setValueGM('MangaTheme', target.val());
      if (target.val() === 'Custom_Dark' || target.val() === 'Custom_Light') {
        $('.CustomTheme').show();
      } else {
        $('.CustomTheme').hide();
      }
      if (target.val() === 'Full_Custom') {
        $('.FullCustom').show();
      } else {
        $('.FullCustom').hide();
      }
    });
    // try {
    //   jscolor.presets.default = {
    //     position: 'right',
    //     format: 'hex',
    //     palette: [
    //       '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26',
    //       '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
    //       '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d',
    //       '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
    //     ],
    //     // paletteCols: 12,
    //     hideOnPaletteClick: true,
    //     closeButton: true,
    //     shadow: false,
    //     alphaChannel: false,
    //     paletteSetsAlpha: false,
    //   };
    //   jscolor.install();
    // } catch (e) {
    //   logScript(e);
    // }
    $('INPUT.colorpicker').minicolors();
    $('#CustomThemeHue').on('change', (event) => {
      const target = $(event.target).val();
      logScript(`CustomTheme: ${target}`);
      $('style[title="Custom_Light"], style[title="Custom_Dark"]').remove();
      $('head').append(addCustomTheme(target));
      setValueGM('MangaCustomTheme', target);
      logScript(`MangaCustomTheme: ${getValueGM('MangaCustomTheme')}`);
    });
    $('.FullCustom').on('change', () => {
      logScript(
        'FullCustomTheme: ',
        $('#CustomThemeHueBody').val(),
        $('#CustomThemeHueText').val(),
        $('#CustomThemeHueLines').val(),
        $('#CustomThemeHuePanel').val(),
        $('#CustomThemeHueButton').val(),
      );
      $('style[title="Full_Custom"]').remove();
      $('head').append(
        addFullCustomTheme(
          $('#CustomThemeHueBody').val(),
          $('#CustomThemeHueText').val(),
          $('#CustomThemeHueLines').val(),
          $('#CustomThemeHuePanel').val(),
          $('#CustomThemeHueButton').val(),
        ),
      );
      setValueGM('MangaCustomThemeBody', $('#CustomThemeHueBody').val());
      setValueGM('MangaCustomThemeText', $('#CustomThemeHueText').val());
      setValueGM('MangaCustomThemeLines', $('#CustomThemeHueLines').val());
      setValueGM('MangaCustomThemePanel', $('#CustomThemeHuePanel').val());
      setValueGM('MangaCustomThemeButton', $('#CustomThemeHueButton').val());
    });
    $('#gotoPage').on('change', (event) => {
      applyZoom();
      scrollToElement($(`#Page${$(event.target).val()}`));
    });
    $('.Thumbnail').on('click', (event) => {
      applyZoom();
      scrollToElement($(`#Page${$(event.currentTarget).find('span').html()}`));
    });
    // Settings Control
    $('#settings').on('click', () => {
      $('#ViewerControls').slideToggle();
      $('#ViewerShortcuts').slideToggle();
      $('#ImageOptions').toggleClass('settingsOpen');
      $('#Navigation').toggleClass('visible');
    });
    // Individual Page functions
    // Bookmark Page to resume reading
    $('.Bookmark').on('click', (event) => {
      const num = parseInt($(event.target).parents('.MangaPage').find('.PageFunctions span').text(), 10);
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
    $('.Reload').on('click', (event) => {
      reloadImage($(event.target).parents('.MangaPage').find('.PageContent img'));
    });
    // ZoomIn
    $('.ZoomIn').on('click', (event) => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      const ratio = (img.width() / img.prop('naturalWidth')) * (100 + settings.zoomStep);
      applyZoom(img, ratio);
    });
    // ZoomOut
    $('.ZoomOut').on('click', (event) => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      const ratio = (img.width() / img.prop('naturalWidth')) * (100 - settings.zoomStep);
      applyZoom(img, ratio);
    });
    // ZoomRestore
    $('.ZoomRestore').on('click', () => {
      $('.PageContent img').removeAttr('width');
    });
    // ZoomWidth
    $('.ZoomWidth').on('click', (event) => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      applyZoom(img, 1000);
    });
    // ZoomHeight
    $('.ZoomHeight').on('click', (event) => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent img');
      applyZoom(img, -1000);
    });
    // Hide
    $('.Hide').on('click', (event) => {
      const img = $(event.target).parents('.MangaPage').find('.PageContent');
      img.slideToggle('slow');
    });
  }

  var htmlKeybinds =
    'export default `<div id="ViewerShortcuts" class="panel" style="display:none"><kbd class="dark">Numpad 5</kbd>/<kbd class="dark">/</kbd>: Open Settings<br><kbd class="dark">Numpad +</kbd>/<kbd class="dark">=</kbd>: Global Zoom in pages (enlarge)<br><kbd class="dark">Numpad -</kbd>/<kbd class="dark">-</kbd>: Global Zoom out pages (reduce)<br><kbd class="dark">Numpad /</kbd>/<kbd class="dark">9</kbd>: Global Restore pages to original<br><kbd class="dark">Numpad *</kbd>/<kbd class="dark">0</kbd>: Global Fit window width<br><kbd class="dark">V</kbd>: Vertical Mode<br><kbd class="dark">C</kbd>: WebComic Mode<br><kbd class="dark">N</kbd>: Right to Left Mode<br><kbd class="dark">B</kbd>: Left to Right Mode<br><kbd class="dark">→</kbd>/<kbd class="dark">D</kbd>/<kbd class="dark">Numpad 6</kbd>/<kbd class="dark">.</kbd> : Next Chapter<br><kbd class="dark">←</kbd>/<kbd class="dark">A</kbd>/<kbd class="dark">Numpad 4</kbd>/<kbd class="dark">,</kbd> : Previous Chapter<br><kbd class="dark">↑</kbd>/<kbd class="dark">W</kbd>/<kbd class="dark">Numpad 8</kbd>: Scroll Up<br><kbd class="dark">↓</kbd>/<kbd class="dark">S</kbd>/<kbd class="dark">Numpad 2</kbd>: Scroll Down<br></div>`; //# sourceMappingURL=keybinds.js.map';

  var cssStyles =
    "export default `html { font-size: 100%; } body { margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333; background-color: #FFF; padding: 0; } a { color: #08C; text-decoration: none; } img { height: auto; max-width: 100%; vertical-align: middle; border: 0 none; } #nprogress .bar { background: #29d; position: fixed; z-index: 1031; top: 0; left: 0; width: 100%; height: 4px; } #MangaOnlineViewer { width: 100%; height: 100%; padding-bottom: 100px; min-height: 1080px; } #MangaOnlineViewer #Chapter { text-align: center; margin: 25px auto 0; display: block; } #MangaOnlineViewer #Chapter.WebComic .PageFunctions { position: relative; margin-bottom: -23px; } #MangaOnlineViewer #Chapter.WebComic .PageContent { margin-bottom: 0; line-height: 0; } #MangaOnlineViewer #Chapter.FluidLTR .MangaPage { width: auto; } #MangaOnlineViewer #Chapter.FluidRTL .MangaPage { width: auto; } #MangaOnlineViewer #Chapter.FluidLTR { direction: ltr; } #MangaOnlineViewer #Chapter.FluidRTL { direction: rtl; } #MangaOnlineViewer #ViewerControls { padding: 8px; position: fixed; top: 0; left: 405px; width: auto; display: none; } #MangaOnlineViewer #ViewerShortcuts { padding: 8px; position: fixed; top: 65px; left: 0; } #MangaOnlineViewer #ViewerControls .controlLabel { display: list-item; list-style: none; } #MangaOnlineViewer select { height: 20px; padding: 0; margin-bottom: 5px; } #MangaOnlineViewer .controlButton { cursor: pointer; border: 0 none; } #MangaOnlineViewer #ImageOptions { left: 0; position: absolute; top: 0; width: 405px; } #MangaOnlineViewer #ImageOptions .panel { padding: 5px; position: inherit; } #MangaOnlineViewer #ImageOptions:hover { position: fixed; } #MangaOnlineViewer #ImageOptions.settingsOpen { position: fixed; } #MangaOnlineViewer #ImageOptions #menu { position: fixed; height: 64px; width: 200px; top: 0; } #MangaOnlineViewer #ImageOptions #Zoom { position: absolute; left: 18px; bottom: -65px; } #MangaOnlineViewer .MangaPage { width: 100%; display: inline-block; text-align: center; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px; } #MangaOnlineViewer .PageContent { margin: 0 0 15px; text-align: center; display: inline-block; } #MangaOnlineViewer .PageContent img[src=\"\"], #MangaOnlineViewer .PageContent img:not([src]) { width: 500px; height: 750px; display: inline-block; } #MangaOnlineViewer #gotoPage { width: 35px; } #MangaOnlineViewer #ThemeSelector { width: 110px; } #MangaOnlineViewer .ChapterControl { margin-right: 120px; margin-top: 1px; float: right; } #MangaOnlineViewer .ChapterControl a { display: inline-block; width: 80px; height: 25px; text-align: center; margin-left: 3px; margin-bottom: -1px; } #MangaOnlineViewer .ChapterControl a[href='#'], #MangaOnlineViewer .ChapterControl a[href=''] { visibility: hidden } #MangaOnlineViewer .ViewerTitle { display: block; text-align: center; height: 35px; } #MangaOnlineViewer #Counters { position: absolute; right: 10px; top: 10px; } #MangaOnlineViewer .PageFunctions { font-family: monospace; font-size: 10pt; padding-right: 120px; text-align: right } #MangaOnlineViewer .PageFunctions > span { min-width: 20px; text-align: center; display: inline-block; padding: 2px 10px } #MangaOnlineViewer .PageFunctions > a { height: 16px; width: 16px; padding: 10px; } #MangaOnlineViewer .PageFunctions a { opacity: 0.2; } #MangaOnlineViewer .PageFunctions:hover a { opacity: 1; } #MangaOnlineViewer.hideControls .PageFunctions { display: none; visibility: hidden; } #MangaOnlineViewer #NavigationCounters { margin-top: 5px; width: 100%; } #MangaOnlineViewer #Navigation { bottom: -180px; height: 190px; overflow-x: hidden; overflow-y: hidden; padding-bottom: 20px; position: fixed; white-space: nowrap; width: 100%; text-align: center; } #MangaOnlineViewer #Navigation #Thumbnails { overflow-x: auto; overflow-y: hidden; } #MangaOnlineViewer #Navigation:hover { bottom: 0; } #MangaOnlineViewer #Navigation.disabled { display: none; } #MangaOnlineViewer #Navigation.visible { bottom: 0; } #MangaOnlineViewer #Navigation .Thumbnail { display: inline-block; height: 150px; margin: 0 5px; position: relative; } #MangaOnlineViewer #Navigation .Thumbnail span { display: block; opacity: 0.8; position: relative; top: -30px; width: 100%; } #MangaOnlineViewer #Navigation .Thumbnail img { align-content: center; cursor: pointer; display: inline-block; margin-bottom: -10px; margin-top: 10px; max-height: 150px; min-height: 150px; min-width: 80px; max-width: 160px; } #MangaOnlineViewer #Navigation .nav { transform: rotate(-90deg); } #MangaOnlineViewer #ImageOptions .menuOuterArrow { width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid blue; display: inline-block; position: absolute; bottom: 0; } #MangaOnlineViewer #ImageOptions .menuInnerArrow { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid white; left: -10px; position: absolute; top: -5px; display: inline-block; } #MangaOnlineViewer.mobile * { float: none !important; } #MangaOnlineViewer.mobile #Navigation { display: none; } #MangaOnlineViewer.mobile .PageFunctions { padding: 0; } #MangaOnlineViewer.mobile .PageFunctions a:not(.Bookmark) { display: none; } #MangaOnlineViewer.mobile .PageFunctions a.Bookmark { opacity: 1; } #MangaOnlineViewer.mobile .PageFunctions span { right: 0; position: inherit; text-align: center; } #MangaOnlineViewer.mobile .PageContent { margin: 0; width: 100%; } #MangaOnlineViewer.mobile .PageContent img { width: 100% !important; } #MangaOnlineViewer.mobile .fitWidthIfOversize .PageContent img { max-width: 100%; } #MangaOnlineViewer.mobile #ImageOptions img:not(#settings) { display: none; } #MangaOnlineViewer.mobile #ViewerShortcuts { display: none !important; } #MangaOnlineViewer.mobile #ViewerControls { padding: 8px; position: fixed; top: 0; left: 45px; width: auto; } #MangaOnlineViewer.mobile #ViewerControls span.DefaultZoom, #MangaOnlineViewer.mobile #ViewerControls span.viewMode, #MangaOnlineViewer.mobile #ViewerControls span.fitIfOversize, #MangaOnlineViewer.mobile #ViewerControls span.showThumbnails, #MangaOnlineViewer.mobile #ViewerControls span.lazyLoadImages, #MangaOnlineViewer.mobile #ViewerControls span.downloadZip { display: none; } #MangaOnlineViewer.mobile #ViewerControls { padding: 8px; position: fixed; top: 0; left: 45px; width: auto; } #MangaOnlineViewer.mobile #ImageOptions #menu { display: none; } #MangaOnlineViewer.mobile #ImageOptions #Zoom { display: none; } #MangaOnlineViewer.mobile .ViewerTitle { height: auto; } #MangaOnlineViewer.mobile .ChapterControl { margin: 10px; display: block; text-align: center; } #MangaOnlineViewer.mobile .ChapterControl .download { display: none; } #MangaOnlineViewer.mobile #Counters { position: inherit; text-align: center; margin: 10px; } #MangaOnlineViewer.mobile #Chapter { margin: 5px auto 0; } #MangaOnlineViewer .fitWidthIfOversize .PageContent img { max-width: 100%; } #MangaOnlineViewer .minicolors-theme-default .minicolors-swatch { top: 2px; left: 2px; } `; //# sourceMappingURL=styles.js.map";

  const externalScripts = [
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js" integrity="sha512-amNoSoOK3jIKx6qlDrv36P4M/h7vc6CHwiBU3XG9/1LW0ZSNe8E3iZL1tPG/VnfCrVrZc2Zv47FIJ7fyDX4DMA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.js" integrity="sha512-OgIASmUioEN3o3gYIAxYUeW4G5FWdhORLq0p7UhTM6Xrm5XGY4IrSDM3uYTCNh4ik4V8BX0NaX9/Z/VMqigCzg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js" integrity="sha256-B00tEEtJRbA9gas0viRdqVPI81EuZG+kYU978/alKt8=" crossorigin="anonymous"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" integrity="sha512-kfs3Dt9u9YcOiIt4rNcPUzdyNNO9sVGQPiZsub7ywg6lRW5KuK1m145ImrFHe3LMWXHndoKo2YRXWy8rnOcSKg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js" integrity="sha512-vBqPkpOdZM0O7YezzE8xaoUdyt4Z2d+gLrY0AMvmNPLdLuNzvreTopyuaM9/FiRzHs1bwWzYDJgH6STcuNXpqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  ];
  externalScripts.map((script) => {
    const find = script.match(/src="(.+?)"/);
    return find ? find[1] : '';
  });
  const externalCSS = [
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />',
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css" integrity="sha256-a/1ebfXeoX0xLUcQCJLQsm6APQNBwrm03/XFcvW7xAI=" crossorigin="anonymous">',
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.css" integrity="sha512-R9EM3xazxo9xyo8pz3IMTw7SIO1qKnG1Vs3yJnVApYhqDwemdSJJbcd5KROicK87kRiFksOhhtW/s2c4Mdjrwg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css" integrity="sha512-BVeRnUOL0G7d4gXmj+0VxpoiQuEibKQtlkclADKvCdNrESs0LA6+H8s1lU455VqWFtHBfF/pKDGw/CMat2hqOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
  ];

  const panel = `<div id='ImageOptions'>
  <div id='menu'>
    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>
  </div>
  <div class='panel'>
    <img id='enlarge' alt='Enlarge' title='Enlarge' src='${icon.enlarge}' class='controlButton' />
    <img id='restore' alt='Restore' title='Restore' src='${icon.restore}' class='controlButton' />
    <img id='reduce' alt='Reduce' title='Reduce' src='${icon.reduce}' class='controlButton' />
    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='${icon.fitWidth}' class='controlButton' />
    <img id='fitHeight' alt='Fit Height' title='Fit Height' src='${icon.fitHeight}' class='controlButton' />
    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='${icon.webComic}' class='controlButton' />
    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='${icon.pictureLeft}' class='controlButton'/>
    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='${icon.pictureDown}' class='controlButton'/>
    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='${icon.pictureRight}' class='controlButton'/>
    <img id='pageControls' alt='Toggle Page Controls' title='Toggle Page Controls' src='${icon.controls}' class='controlButton'/>
    <img id='settings' alt='settings' title='settings' src='${icon.settings}' class='controlButton' />
  </div>
  <div id='Zoom' class='controlLabel'>Zoom: <b>${settings.Zoom}</b> %</div>
</div>`;
  const controls = `<div id='ViewerControls' class='panel'>
  <span class='controlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <span class='CustomTheme' ${
        settings.Theme !== 'Custom_Dark' && settings.Theme !== 'Custom_Light' ? 'style="display: none;"' : ''
      }><br/>-Base:<input id='CustomThemeHue' value='${settings.CustomTheme}' class='colorpicker CustomTheme'></span>
      <span class='FullCustom' ${settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''}><br/>-Body:<input id='CustomThemeHueBody' value='${
    settings.CustomThemeBody
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''}><br/>-Text:<input id='CustomThemeHueText' value=${
    settings.CustomThemeText
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''}><br/>-Lines:<input id='CustomThemeHueLines' value='${
    settings.CustomThemeLines
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''}><br/>-Painels:<input id='CustomThemeHuePanel' value='${
    settings.CustomThemePanel
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''}><br/>-Buttons:<input id='CustomThemeHueButton' value='${
    settings.CustomThemeButton
  }' class='colorpicker FullCustom'></span>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='normal' ${settings.loadMode === 'normal' ? 'selected' : ''}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings.loadMode === 'always' ? 'selected' : ''}>Always(Immediately)</option>
      <option value='never' ${settings.loadMode === 'never' ? 'selected' : ''}>Never(Manually)</option>
    </select>
  </span>
  <span class='controlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${settings.Timer === 3000 ? 'selected' : ''}>0.3(Slow)</option>
      <option value='2000' ${settings.Timer === 2000 ? 'selected' : ''}>0.5</option>
      <option value='1000' ${settings.Timer === 1000 ? 'selected' : ''}>01(Normal)</option>
      <option value='500' ${settings.Timer === 500 ? 'selected' : ''}>02</option>
      <option value='250' ${settings.Timer === 250 ? 'selected' : ''}>04(Fast)</option>
      <option value='125' ${settings.Timer === 125 ? 'selected' : ''}>08</option>
      <option value='100' ${settings.Timer === 100 ? 'selected' : ''}>10(Extreme)</option>
    </select>
  </span>
  <span class='controlLabel DefaultZoom'>Default Zoom:
    <select id='DefaultZoom'>
      <option value='50' ${settings.Zoom === 50 ? 'selected' : ''}>50%</option>
      <option value='75' ${settings.Zoom === 75 ? 'selected' : ''}>75%</option>
      <option value='100' ${settings.Zoom === 100 ? 'selected' : ''}>100%</option>
      <option value='125' ${settings.Zoom === 125 ? 'selected' : ''}>125%</option>
      <option value='150' ${settings.Zoom === 150 ? 'selected' : ''}>150%</option>
      <option value='175' ${settings.Zoom === 175 ? 'selected' : ''}>175%</option>
      <option value='200' ${settings.Zoom === 200 ? 'selected' : ''}>200%</option>
      <option value='1000' ${settings.Zoom === 1000 ? 'selected' : ''}>Fit Width</option>
      <option value='-1000' ${settings.Zoom === -1000 ? 'selected' : ''}>Fit Height</option>
    </select>
  </span>
  <span class='controlLabel zoomStep'>Zoom Change Step (between 5 and 50): <br/>
    <input type='range' value='${settings.zoomStep}' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput="zoomStepVal.value = this.value">
    <output id="zoomStepVal">${settings.zoomStep}</output>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${settings.viewMode === 'WebComic' ? 'selected' : ''}>WebComic</option>
      <option value='FluidLTR' ${settings.viewMode === 'FluidLTR' ? 'selected' : ''}>Left to Right</option>
      <option value='FluidRTL' ${settings.viewMode === 'FluidRTL' ? 'selected' : ''}>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${settings.FitWidthIfOversize ? 'checked' : ''}>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${settings.ShowThumbnails ? 'checked' : ''}>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${settings.lazyLoadImages ? 'checked' : ''}>
   </span>
   <span class='controlLabel lazyStart'>Lazy Start From Page (between 5 and 100):<br/>
    <input type='range' value='${settings.lazyStart}' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput="lazyStartVal.value = this.value">
    <output id="lazyStartVal">${settings.lazyStart}</output>
  </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${settings.DownloadZip ? 'checked' : ''}>
  </span>
  <span class='controlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${settings.hidePageControls ? 'checked' : ''}>
  </span>
</div>`;
  const chapterControl = (id) => (manga) =>
    `<div id='${id}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='W.location="${manga.prev || ''}";W.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='W.location="${manga.next || ''}";W.location.reload();'>Next</a>
</div>`;
  const chapterControlTop = chapterControl('ChapterControlTop');
  const chapterControlBottom = chapterControl('ChapterControlBottom');
  const title = (manga) => `<div class='ViewerTitle'><br/><a id='series' href='${manga.series}'><i>${manga.title}</i><br/>(Return to Chapter List)</a></div>`;
  // Add Pages Place-holders
  const listPages = (times) =>
    [...Array(times).keys()].map(
      (index) => `<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <a class='Bookmark controlButton' title='Bookmark'></a>
    <a class='ZoomIn controlButton' title='Zoom In'></a>
    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>
    <a class='ZoomOut controlButton' title='Zoom Out'></a>
    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>
    <a class='ZoomHeight controlButton' title='Zoom to Height'></a>
    <a class='Hide controlButton' title='Hide'></a>
    <a class='Reload controlButton' title='Reload'></a>
    <span>${index + 1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${index + 1}' alt='PageImg${index + 1}' />
  </div>
</div>`,
    );
  const listOptions = (times) => [...Array(times).keys()].map((index) => `<option value='${index + 1}'>${index + 1}</option>`);
  const listThumbnails = (times) =>
    [...Array(times).keys()].map(
      (index) => `<div id='Thumbnail${index + 1}' class='Thumbnail'><img id='ThumbnailImg${index + 1}' alt='ThumbnailImg${index + 1}' src=''/><span>${index + 1}</span></div>`,
    );
  const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer' class='${settings.Theme} ${isMobile ? 'mobile' : ''} ${settings.hidePageControls ? 'hideControls' : ''}'>
  ${title(manga)}
  <div id='Counters' class='controlLabel'>
    <i>0</i> of <b>${manga.pages}</b> Pages Loaded
    <span class='controlLabel'>Go to Page:</span>
    <select id='gotoPage'>
      <option selected>#</option>
      ${listOptions(manga.pages).slice(begin).join('')}
    </select>
  </div>
  ${chapterControlTop(manga)}
  <div id='Chapter' class='${settings.FitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${settings.viewMode}'>
    ${listPages(manga.pages).slice(begin).join('')}
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${panel}
  ${controls}
  ${htmlKeybinds}
  <div id='Navigation' class='panel ${settings.ShowThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLabel'>
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' /><i>0</i> of <b>${manga.pages}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.pages).slice(begin).join('')}
    </div>
  </div>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;
  // Inject CSS for this script
  const readerCSS = `<style type='text/css'>
${cssStyles}
#MangaOnlineViewer .PageFunctions .Bookmark {background: url('${icon.bookmark}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Reload {background: url('${icon.reload}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Hide {background: url('${icon.hide}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('${icon.zoomIn}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('${icon.zoomOut}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('${icon.zoomRestore}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomHeight {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
</style>`;
  function reader(manga, begin = 0) {
    return `
<head>
  <title>${manga.title}</title>
  <meta charset="UTF-8">
  ${externalScripts.join('\n')}
  ${externalCSS.join('\n')}
  ${readerCSS}
  ${themesCSS}
</head>
<body class='${settings.Theme}'>
  ${body(manga, begin > 0 ? begin - 1 : 0)}
</body>`;
  }

  function formatPage(manga, begin = 0) {
    W.stop();
    if (manga.before !== undefined) {
      manga.before();
    }
    document.documentElement.innerHTML = reader(manga, begin);
    logScript('Rebuilding Site');
    setTimeout(() => {
      try {
        controls$1();
        setKeyDownEvents();
        setTimeout(() => {
          $(window).scrollTop(0);
          loadManga(manga, begin);
        }, 50);
        // Clear used Bookmarks
        if (!isNothing(settings.bookmarks.filter((el) => el.url === W.location.href))) {
          logScript(`Bookmark Removed ${W.location.href}`);
          settings.bookmarks = settings.bookmarks.filter((el) => el.url !== W.location.href);
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
  function lateStart(site, begin = 1) {
    const manga = site.run();
    logScript('LateStart');
    const options = {
      title: 'Starting<br>MangaOnlineViewer',
      input: 'range',
      inputAttributes: {
        min: '1',
        max: manga.pages.toString(),
        step: '1',
      },
      inputValue: begin,
      text: 'Choose the Page to start from:',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      icon: 'question',
    };
    Swal.fire(options).then((result) => {
      if (result.value) {
        logScript(`Choice: ${result.value}`);
        formatPage(manga, result.value);
      } else {
        logScript(result.dismiss);
      }
    });
  }
  // Organize the site adding place-holders for the manga pages
  function preparePage(site, manga, begin = 0) {
    logScript(`Found ${manga.pages} pages`);
    if (manga.pages > 0) {
      let beginning = begin;
      if (beginning === 0) {
        beginning = settings?.bookmarks?.find((b) => b.url === W.location.href)?.page || 0;
      }
      $('head').append(
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />',
        '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.9.0/dist/sweetalert2.min.js" integrity="sha256-uvgSxlcEyGRDRvqW8sxcM/sPEBYiIeL+EW8XKL96iQ4=" crossorigin="anonymous"></script>',
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@10.9.0/dist/sweetalert2.min.css" integrity="sha256-Ow4lbGxscUvJwGnorLyGwVYv0KkeIG6+5CAmR8zuRJw=" crossorigin="anonymous">',
        '<style type="text/css">#mov {position: fixed;left: 50%;transform: translateX(-50%);top: 0;z-index: 1000000;border-radius: .25em;font-size: 1.5em;cursor: pointer;display: inline-block;margin: .3125em;padding: .625em 2em;box-shadow: none;font-weight: 500;color: #FFF;background: rgb(102, 83, 146);border: 1px #FFF;}</style>',
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      W.mov = (b) => lateStart(site, b || beginning);
      switch (site.start || settings.loadMode) {
        case 'never':
          $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
          break;
        case 'always':
          formatPage(manga);
          break;
        case 'normal':
        default:
          Swal.fire({
            title: 'Starting<br>MangaOnlineViewer',
            html: `${beginning > 1 ? `Resuming reading from Page ${beginning}.<br/>` : ''}Please wait, 3 seconds...`,
            showCancelButton: true,
            cancelButtonColor: '#d33',
            reverseButtons: true,
            timer: 3000,
          }).then((result) => {
            if (result.value || result.dismiss === Swal.DismissReason.timer) {
              formatPage(manga, beginning);
            } else {
              $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
              logScript(result.dismiss);
            }
          });
          break;
      }
    }
  }
  // Script Entry point
  function start(sites) {
    logScript(`Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`, getInfoGM);
    // W.InfoGM = getInfoGM;
    logScript(`${sites.length} Known Manga Sites`);
    let waitElapsed = 0;
    // Wait for something on the site to be ready before executing the script
    function waitExec(site) {
      if (site.waitMax !== undefined) {
        if (waitElapsed >= site.waitMax) {
          preparePage(site, site.run());
          return;
        }
      }
      if (site.waitAttr !== undefined) {
        const wait = $(site.waitAttr[0]).attr(site.waitAttr[1]);
        logScript(`Waiting for ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
        if (isNothing(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      if (site.waitEle !== undefined) {
        const wait = $(site.waitEle).get();
        logScript(`Waiting for ${site.waitEle} = ${`${wait}`}`);
        if (isNothing(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      if (site.waitVar !== undefined) {
        const wait = W[site.waitVar];
        logScript(`Waiting for ${site.waitVar} = ${wait}`);
        if (isNothing(wait)) {
          setTimeout(() => {
            waitExec(site);
          }, site.waitStep || 1000);
          waitElapsed += site.waitStep || 1000;
          return;
        }
      }
      preparePage(site, site.run());
    }
    logScript('Looking for a match...');
    function test(list) {
      return list
        .filter((site) => site.url.test(W.location.href))
        .map(logScriptC('Site Found:'))
        .map(waitExec);
    }
    test(sites);
  }

  start(sites);
})();
