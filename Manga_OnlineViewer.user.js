// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Localhost, Asura
// Scans,Flame Scans, ComiCastle, DisasterScans, Dynasty-Scans, FoOlSlide, Funmanga, HatigarmScans,
// KomiRaw, Leitor, LHTranslation, MangaHaus,Isekai Scan,Comic
// Kiba,Zinmanga,mangatx,Toonily,Mngazuki,ReaperScans, MangaDex, MangaDoom, MangaFreak, MangaFox,
// MangaHere, MangaHub, MangaInn, MangaKakalot,MangaNelo, MangaLyght, MangaNato, MangaPark,
// MangaSee,Manga4life, MangaTown, NineManga, RawDevart, ReadComicsOnline, ReadManga Today,
// SenManga(Raw), TuMangaOnline, UnionMangas, Batoto @version 2022.06.16 @license MIT @grant
// GM_getValue
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
// @include /http:\/\/127.0.0.1:8080\/index.htm/
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
        prev: chapter
          .eq(
            chapter.index(
              chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`),
            ) + 1,
          )
          .attr('href'),
        next: chapter
          .eq(
            chapter.index(
              chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`),
            ) - 1,
          )
          .attr('href'),
        listPages: Array(num)
          .fill(null)
          .map((_, i) => url + (i + 1)),
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
        title: $('.chapter-title').attr('title')?.trim(),
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
        ?.match(/[&?]token=(\w+)&?/i)[1];
      const idRelease = $('script[src*=token]')
        .attr('src')
        ?.match(/[&?]id_release=(\d+)&?/i)[1];
      let api = { images: [] };
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
    name: [
      'MangaHaus',
      'Isekai Scan',
      'Comic Kiba',
      'Zinmanga',
      'mangatx',
      'Toonily',
      'Mngazuki',
      'ReaperScans',
    ],
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
        listImages: src.map(
          (i) => $(i).attr('src') || $(i).attr('data-src') || $(i).attr('data-full-url'),
        ),
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
      let server;
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
        listImages: server.chapter.data.map(
          (img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`,
        ),
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
          return (
            (i < 31 ? '' : charFromPosition(parseInt(`${i / 31}`, 10))) +
            (i % 31 > 35 ? String.fromCharCode((i % 31) + 29) : (i % 31).toString(36))
          );
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
      const src = Array(W.imagecount)
        .fill(null)
        .map((_, i) => {
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
          return (
            (i < 31 ? '' : charFromPosition(parseInt(`${i / 31}`, 10))) +
            (i % 31 > 35 ? String.fromCharCode((i % 31) + 29) : (i % 31).toString(36))
          );
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
      const src = Array(W.imagecount)
        .fill(null)
        .map((_, i) => {
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
      let api;
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
      const images = Object.values(JSON.parse(api.data.chapter.pages.toString()));
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
      const url = `${$("form[name='pageSelector1']").attr('action')}?ch=${chapter
        .val()
        ?.toString()
        .replace(' ', '+')}&page=`;
      const num = $('.selectpage option').length;
      const origin = $('div.entry h1 a');
      return {
        title: origin.text().trim(),
        series: origin.attr('href'),
        pages: num,
        prev: `${W.location.pathname}?ch=${chapter.prev().val()}`.replace(' ', '+'),
        next: `${W.location.pathname}?ch=${chapter.next().val()}`.replace(' ', '+'),
        listPages: Array(num)
          .fill(null)
          .map((_, i) => url + (i + 1)),
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
        listImages: Array(parseInt(CurChapter.Page, 10))
          .fill(null)
          .map((_, i) => src.replace(/-\d\d\d.png/, `-${String(`000${i + 1}`).slice(-3)}.png`)),
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
        listPages: Array(num)
          .fill(null)
          .map((_, i) => `${url}/${i + 1}/`),
        img: '#picture',
        before() {
          // Todo: remake
          // $('body')
          //   .contents()
          //   .filter(() => this.nodeType === 3)
          //   .remove();
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
      const num =
        $('#viewer-pages-select:first option').get().length || $('.img-container img').get().length;
      return {
        title: $('title').text().trim(),
        series: $('a[title="Volver"]').attr('href'),
        pages: num,
        prev: $('.chapter-prev a').attr('href'),
        next: $('.chapter-next a').attr('href'),
        listPages: Array(num)
          .fill(null)
          .map((_, i) => W.location.href.replace(/\/[0-9]+$/, `/${i + 1}`)),
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

  // == Localhost =====================================================================================
  var localhost = {
    name: 'Localhost',
    url: /http:\/\/127.0.0.1:8080\/index.htm/,
    homepage: 'http://127.0.0.1:8080/index.html',
    language: ['Portuguese'],
    category: 'manga',
    run() {
      return {
        title: 'Manga Loaded',
        series: '',
        pages: 2,
        begin: 0,
        prev: '',
        next: '?next',
        listPages: [
          // 'http://127.0.0.1:3000/images/920x600-Ad-Page.png',
          'http://127.0.0.1:3000/images/985x1400-Normal-Page.png',
          'http://127.0.0.1:3000/images/1970x1400-Double-Page.png',
          // 'http://127.0.0.1:3000/images/500x700-Small-Page.png',
          // 'http://127.0.0.1:3000/images/300x500-Tiny-Page.png',
          // 'http://127.0.0.1:3000/images/100x150-Thumbnail.png',
          // 'http://127.0.0.1:3000/images/800x11755-WebComic.png',
        ],
      };
    },
  };

  const sites = [
    localhost,
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
  const getInfoGM =
    typeof GM_info !== 'undefined'
      ? GM_info
      : {
          scriptHandler: 'Console',
          script: {
            name: 'Debug',
            version: 'Testing',
          },
        };
  // Replacement function for GM_getValue allowing for debugging in console
  function getValueGM(name, defaultValue = null) {
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

  // See
  // https://stackoverflow.com/questions/27487828/how-to-detect-if-a-userscript-is-installed-from-the-chrome-store
  function getEngine() {
    return `${getInfoGM.scriptHandler || 'Greasemonkey'} ${getInfoGM.script.version}`;
  }

  const isMobile = W.matchMedia('screen and (max-width: 1024px)').matches;

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
          ? global
          : typeof self !== 'undefined'
            ? self
            : {};

  var jquery_minicolors = { exports: {} };

  var jquery = { exports: {} };

  var hasRequiredJquery;

  function requireJquery() {
    if (hasRequiredJquery) return jquery.exports;
    hasRequiredJquery = 1;
    (function (module) {
      (function (global, factory) {
        {
          module.exports = global.document
            ? factory(global, true)
            : function (w) {
              if (!w.document) {
                throw new Error('jQuery requires a window with a document');
              }
              return factory(w);
            };
        }
      })(typeof window !== 'undefined' ? window : commonjsGlobal, function (window, noGlobal) {
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat
          ? function (array) {
            return arr.flat.call(array);
          }
          : function (array) {
            return arr.concat.apply([], array);
          };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction(obj) {
          return (
            typeof obj === 'function' &&
            typeof obj.nodeType !== 'number' &&
            typeof obj.item !== 'function'
          );
        };
        var isWindow = function isWindow(obj) {
          return obj != null && obj === obj.window;
        };
        var document = window.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true,
        };

        function DOMEval(code, node, doc) {
          doc = doc || document;
          var i,
            val,
            script = doc.createElement('script');
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || (node.getAttribute && node.getAttribute(i));
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }

        function toType(obj) {
          if (obj == null) {
            return obj + '';
          }
          return typeof obj === 'object' || typeof obj === 'function'
            ? class2type[toString.call(obj)] || 'object'
            : typeof obj;
        }

        var version = '3.6.0',
          jQuery = function (selector, context) {
            return new jQuery.fn.init(selector, context);
          };
        jQuery.fn = jQuery.prototype = {
          jquery: version,
          constructor: jQuery,
          length: 0,
          toArray: function () {
            return slice.call(this);
          },
          get: function (num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function (elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function (callback) {
            return jQuery.each(this, callback);
          },
          map: function (callback) {
            return this.pushStack(
              jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
              }),
            );
          },
          slice: function () {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              jQuery.grep(this, function (_elem, i) {
                return (i + 1) % 2;
              }),
            );
          },
          odd: function () {
            return this.pushStack(
              jQuery.grep(this, function (_elem, i) {
                return i % 2;
              }),
            );
          },
          eq: function (i) {
            var len = this.length,
              j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: push,
          sort: arr.sort,
          splice: arr.splice,
        };
        jQuery.extend = jQuery.fn.extend = function () {
          var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
          if (typeof target === 'boolean') {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== 'object' && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === '__proto__' || target === copy) {
                  continue;
                }
                if (
                  deep &&
                  copy &&
                  (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
                ) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          expando: 'jQuery' + (version + Math.random()).replace(/\D/g, ''),
          isReady: true,
          error: function (msg) {
            throw new Error(msg);
          },
          noop: function () {},
          isPlainObject: function (obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== '[object Object]') {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
            return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function (obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function (code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function (obj, callback) {
            var length,
              i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function (arr, results) {
            var ret = results || [];
            if (arr != null) {
              if (isArrayLike(Object(arr))) {
                jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
              } else {
                push.call(ret, arr);
              }
            }
            return ret;
          },
          inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
          },
          merge: function (first, second) {
            var len = +second.length,
              j = 0,
              i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function (elems, callback, invert) {
            var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function (elems, callback, arg) {
            var length,
              value,
              i = 0,
              ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support: support,
        });
        if (typeof Symbol === 'function') {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
          function (_i, name) {
            class2type['[object ' + name + ']'] = name.toLowerCase();
          },
        );

        function isArrayLike(obj) {
          var length = !!obj && 'length' in obj && obj.length,
            type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return (
            type === 'array' ||
            length === 0 ||
            (typeof length === 'number' && length > 0 && length - 1 in obj)
          );
        }

        var Sizzle = (function (window) {
          var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,
            setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            rbuggyMatches,
            matches,
            contains,
            expando = 'sizzle' + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            nonnativeSelectorCache = createCache(),
            sortOrder = function (a, b) {
              if (a === b) {
                hasDuplicate = true;
              }
              return 0;
            },
            hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            pushNative = arr.push,
            push = arr.push,
            slice = arr.slice,
            indexOf = function (list, elem) {
              var i = 0,
                len = list.length;
              for (; i < len; i++) {
                if (list[i] === elem) {
                  return i;
                }
              }
              return -1;
            },
            booleans =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|' +
              'ismap|loop|multiple|open|readonly|required|scoped',
            whitespace = '[\\x20\\t\\r\\n\\f]',
            identifier =
              '(?:\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            attributes =
              '\\[' +
              whitespace +
              '*(' +
              identifier +
              ')(?:' +
              whitespace +
              '*([*^$|!~]?=)' +
              whitespace +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              identifier +
              '))|)' +
              whitespace +
              '*\\]',
            pseudos =
              ':(' +
              identifier +
              ')(?:\\((' +
              '(\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|' +
              '((?:\\\\.|[^\\\\()[\\]]|' +
              attributes +
              ')*)|' +
              '.*' +
              ')\\)|)',
            rwhitespace = new RegExp(whitespace + '+', 'g'),
            rtrim = new RegExp(
              '^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$',
              'g',
            ),
            rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'),
            rcombinators = new RegExp(
              '^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace + '*',
            ),
            rdescend = new RegExp(whitespace + '|>'),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp('^' + identifier + '$'),
            matchExpr = {
              ID: new RegExp('^#(' + identifier + ')'),
              CLASS: new RegExp('^\\.(' + identifier + ')'),
              TAG: new RegExp('^(' + identifier + '|[*])'),
              ATTR: new RegExp('^' + attributes),
              PSEUDO: new RegExp('^' + pseudos),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                whitespace +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                whitespace +
                '*(?:([+-]|)' +
                whitespace +
                '*(\\d+)|))' +
                whitespace +
                '*\\)|)',
                'i',
              ),
              bool: new RegExp('^(?:' + booleans + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                whitespace +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                whitespace +
                '*((?:-\\d)?\\d*)' +
                whitespace +
                '*\\)|)(?=[^-]|$)',
                'i',
              ),
            },
            rhtml = /HTML$/i,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            runescape = new RegExp(
              '\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\([^\\r\\n\\f])',
              'g',
            ),
            funescape = function (escape, nonHex) {
              var high = '0x' + escape.slice(1) - 0x10000;
              return nonHex
                ? nonHex
                : high < 0
                  ? String.fromCharCode(high + 0x10000)
                  : String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
            },
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function (ch, asCodePoint) {
              if (asCodePoint) {
                if (ch === '\0') {
                  return '\uFFFD';
                }
                return ch.slice(0, -1) + '\\' + ch.charCodeAt(ch.length - 1).toString(16) + ' ';
              }
              return '\\' + ch;
            },
            unloadHandler = function () {
              setDocument();
            },
            inDisabledFieldset = addCombinator(
              function (elem) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === 'fieldset';
              },
              { dir: 'parentNode', next: 'legend' },
            );
          try {
            push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push = {
              apply: arr.length
                ? function (target, els) {
                  pushNative.apply(target, slice.call(els));
                }
                : function (target, els) {
                  var j = target.length,
                    i = 0;
                  while ((target[j++] = els[i++])) {}
                  target.length = j - 1;
                },
            };
          }

          function Sizzle(selector, context, results, seed) {
            var m,
              i,
              elem,
              nid,
              match,
              groups,
              newSelector,
              newContext = context && context.ownerDocument,
              nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (
              typeof selector !== 'string' ||
              !selector ||
              (nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
            ) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                  if ((m = match[1])) {
                    if (nodeType === 9) {
                      if ((elem = context.getElementById(m))) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (
                        newContext &&
                        (elem = newContext.getElementById(m)) &&
                        contains(context, elem) &&
                        elem.id === m
                      ) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if (
                    (m = match[3]) &&
                    support.getElementsByClassName &&
                    context.getElementsByClassName
                  ) {
                    push.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (
                  support.qsa &&
                  !nonnativeSelectorCache[selector + ' '] &&
                  (!rbuggyQSA || !rbuggyQSA.test(selector)) &&
                  (nodeType !== 1 || context.nodeName.toLowerCase() !== 'object')
                ) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext =
                      (rsibling.test(selector) && testContext(context.parentNode)) || context;
                    if (newContext !== context || !support.scope) {
                      if ((nid = context.getAttribute('id'))) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute('id', (nid = expando));
                      }
                    }
                    groups = tokenize(selector);
                    i = groups.length;
                    while (i--) {
                      groups[i] = (nid ? '#' + nid : ':scope') + ' ' + toSelector(groups[i]);
                    }
                    newSelector = groups.join(',');
                  }
                  try {
                    push.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute('id');
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim, '$1'), context, results, seed);
          }

          function createCache() {
            var keys = [];

            function cache(key, value) {
              if (keys.push(key + ' ') > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return (cache[key + ' '] = value);
            }

            return cache;
          }

          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }

          function assert(fn) {
            var el = document.createElement('fieldset');
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }

          function addHandle(attrs, handler) {
            var arr = attrs.split('|'),
              i = arr.length;
            while (i--) {
              Expr.attrHandle[arr[i]] = handler;
            }
          }

          function siblingCheck(a, b) {
            var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while ((cur = cur.nextSibling)) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }

          function createInputPseudo(type) {
            return function (elem) {
              var name = elem.nodeName.toLowerCase();
              return name === 'input' && elem.type === type;
            };
          }

          function createButtonPseudo(type) {
            return function (elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === 'input' || name === 'button') && elem.type === type;
            };
          }

          function createDisabledPseudo(disabled) {
            return function (elem) {
              if ('form' in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ('label' in elem) {
                    if ('label' in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return (
                    elem.isDisabled === disabled ||
                    (elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled)
                  );
                }
                return elem.disabled === disabled;
              } else if ('label' in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }

          function createPositionalPseudo(fn) {
            return markFunction(function (argument) {
              argument = +argument;
              return markFunction(function (seed, matches) {
                var j,
                  matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length;
                while (i--) {
                  if (seed[(j = matchIndexes[i])]) {
                    seed[j] = !(matches[j] = seed[j]);
                  }
                }
              });
            });
          }

          function testContext(context) {
            return context && typeof context.getElementsByTagName !== 'undefined' && context;
          }

          support = Sizzle.support = {};
          isXML = Sizzle.isXML = function (elem) {
            var namespace = elem && elem.namespaceURI,
              docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml.test(namespace || (docElem && docElem.nodeName) || 'HTML');
          };
          setDocument = Sizzle.setDocument = function (node) {
            var hasCompare,
              subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
              return document;
            }
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            if (
              preferredDoc != document &&
              (subWindow = document.defaultView) &&
              subWindow.top !== subWindow
            ) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener('unload', unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent('onunload', unloadHandler);
              }
            }
            support.scope = assert(function (el) {
              docElem.appendChild(el).appendChild(document.createElement('div'));
              return (
                typeof el.querySelectorAll !== 'undefined' &&
                !el.querySelectorAll(':scope fieldset div').length
              );
            });
            support.attributes = assert(function (el) {
              el.className = 'i';
              return !el.getAttribute('className');
            });
            support.getElementsByTagName = assert(function (el) {
              el.appendChild(document.createComment(''));
              return !el.getElementsByTagName('*').length;
            });
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            support.getById = assert(function (el) {
              docElem.appendChild(el).id = expando;
              return !document.getElementsByName || !document.getElementsByName(expando).length;
            });
            if (support.getById) {
              Expr.filter['ID'] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                  return elem.getAttribute('id') === attrId;
                };
              };
              Expr.find['ID'] = function (id, context) {
                if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter['ID'] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                  var node =
                    typeof elem.getAttributeNode !== 'undefined' && elem.getAttributeNode('id');
                  return node && node.value === attrId;
                };
              };
              Expr.find['ID'] = function (id, context) {
                if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
                  var node,
                    i,
                    elems,
                    elem = context.getElementById(id);
                  if (elem) {
                    node = elem.getAttributeNode('id');
                    if (node && node.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i = 0;
                    while ((elem = elems[i++])) {
                      node = elem.getAttributeNode('id');
                      if (node && node.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find['TAG'] = support.getElementsByTagName
              ? function (tag, context) {
                if (typeof context.getElementsByTagName !== 'undefined') {
                  return context.getElementsByTagName(tag);
                } else if (support.qsa) {
                  return context.querySelectorAll(tag);
                }
              }
              : function (tag, context) {
                var elem,
                  tmp = [],
                  i = 0,
                  results = context.getElementsByTagName(tag);
                if (tag === '*') {
                  while ((elem = results[i++])) {
                    if (elem.nodeType === 1) {
                      tmp.push(elem);
                    }
                  }
                  return tmp;
                }
                return results;
              };
            Expr.find['CLASS'] =
              support.getElementsByClassName &&
              function (className, context) {
                if (typeof context.getElementsByClassName !== 'undefined' && documentIsHTML) {
                  return context.getElementsByClassName(className);
                }
              };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if ((support.qsa = rnative.test(document.querySelectorAll))) {
              assert(function (el) {
                var input;
                docElem.appendChild(el).innerHTML =
                  '<a id=\'' +
                  expando +
                  '\'></a>' +
                  '<select id=\'' +
                  expando +
                  '-\r\\\' msallowcapture=\'\'>' +
                  '<option selected=\'\'></option></select>';
                if (el.querySelectorAll('[msallowcapture^=\'\']').length) {
                  rbuggyQSA.push('[*^$]=' + whitespace + '*(?:\'\'|"")');
                }
                if (!el.querySelectorAll('[selected]').length) {
                  rbuggyQSA.push('\\[' + whitespace + '*(?:value|' + booleans + ')');
                }
                if (!el.querySelectorAll('[id~=' + expando + '-]').length) {
                  rbuggyQSA.push('~=');
                }
                input = document.createElement('input');
                input.setAttribute('name', '');
                el.appendChild(input);
                if (!el.querySelectorAll('[name=\'\']').length) {
                  rbuggyQSA.push(
                    '\\[' + whitespace + '*name' + whitespace + '*=' + whitespace + '*(?:\'\'|"")',
                  );
                }
                if (!el.querySelectorAll(':checked').length) {
                  rbuggyQSA.push(':checked');
                }
                if (!el.querySelectorAll('a#' + expando + '+*').length) {
                  rbuggyQSA.push('.#.+[+~]');
                }
                el.querySelectorAll('\\\f');
                rbuggyQSA.push('[\\r\\n\\f]');
              });
              assert(function (el) {
                el.innerHTML =
                  '<a href=\'\' disabled=\'disabled\'></a>' +
                  '<select disabled=\'disabled\'><option/></select>';
                var input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                el.appendChild(input).setAttribute('name', 'D');
                if (el.querySelectorAll('[name=d]').length) {
                  rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?=');
                }
                if (el.querySelectorAll(':enabled').length !== 2) {
                  rbuggyQSA.push(':enabled', ':disabled');
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(':disabled').length !== 2) {
                  rbuggyQSA.push(':enabled', ':disabled');
                }
                el.querySelectorAll('*,:x');
                rbuggyQSA.push(',.*:');
              });
            }
            if (
              (support.matchesSelector = rnative.test(
                (matches =
                  docElem.matches ||
                  docElem.webkitMatchesSelector ||
                  docElem.mozMatchesSelector ||
                  docElem.oMatchesSelector ||
                  docElem.msMatchesSelector),
              ))
            ) {
              assert(function (el) {
                support.disconnectedMatch = matches.call(el, '*');
                matches.call(el, '[s!=\'\']:x');
                rbuggyMatches.push('!=', pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains =
              hasCompare || rnative.test(docElem.contains)
                ? function (a, b) {
                  var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                  return (
                    a === bup ||
                    !!(
                      bup &&
                      bup.nodeType === 1 &&
                      (adown.contains
                        ? adown.contains(bup)
                        : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16)
                    )
                  );
                }
                : function (a, b) {
                  if (b) {
                    while ((b = b.parentNode)) {
                      if (b === a) {
                        return true;
                      }
                    }
                  }
                  return false;
                };
            sortOrder = hasCompare
              ? function (a, b) {
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                  return compare;
                }
                compare =
                  (a.ownerDocument || a) == (b.ownerDocument || b)
                    ? a.compareDocumentPosition(b)
                    : 1;
                if (
                  compare & 1 ||
                  (!support.sortDetached && b.compareDocumentPosition(a) === compare)
                ) {
                  if (
                    a == document ||
                    (a.ownerDocument == preferredDoc && contains(preferredDoc, a))
                  ) {
                    return -1;
                  }
                  if (
                    b == document ||
                    (b.ownerDocument == preferredDoc && contains(preferredDoc, b))
                  ) {
                    return 1;
                  }
                  return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
              }
              : function (a, b) {
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }
                var cur,
                  i = 0,
                  aup = a.parentNode,
                  bup = b.parentNode,
                  ap = [a],
                  bp = [b];
                if (!aup || !bup) {
                  return a == document
                    ? -1
                    : b == document
                      ? 1
                      : aup
                        ? -1
                        : bup
                          ? 1
                          : sortInput
                            ? indexOf(sortInput, a) - indexOf(sortInput, b)
                            : 0;
                } else if (aup === bup) {
                  return siblingCheck(a, b);
                }
                cur = a;
                while ((cur = cur.parentNode)) {
                  ap.unshift(cur);
                }
                cur = b;
                while ((cur = cur.parentNode)) {
                  bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                  i++;
                }
                return i
                  ? siblingCheck(ap[i], bp[i])
                  : ap[i] == preferredDoc
                    ? -1
                    : bp[i] == preferredDoc
                      ? 1
                      : 0;
              };
            return document;
          };
          Sizzle.matches = function (expr, elements) {
            return Sizzle(expr, null, null, elements);
          };
          Sizzle.matchesSelector = function (elem, expr) {
            setDocument(elem);
            if (
              support.matchesSelector &&
              documentIsHTML &&
              !nonnativeSelectorCache[expr + ' '] &&
              (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
              (!rbuggyQSA || !rbuggyQSA.test(expr))
            ) {
              try {
                var ret = matches.call(elem, expr);
                if (
                  ret ||
                  support.disconnectedMatch ||
                  (elem.document && elem.document.nodeType !== 11)
                ) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle(expr, document, null, [elem]).length > 0;
          };
          Sizzle.contains = function (context, elem) {
            if ((context.ownerDocument || context) != document) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle.attr = function (elem, name) {
            if ((elem.ownerDocument || elem) != document) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()],
              val =
                fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                  ? fn(elem, name, !documentIsHTML)
                  : undefined;
            return val !== undefined
              ? val
              : support.attributes || !documentIsHTML
                ? elem.getAttribute(name)
                : (val = elem.getAttributeNode(name)) && val.specified
                  ? val.value
                  : null;
          };
          Sizzle.escape = function (sel) {
            return (sel + '').replace(rcssescape, fcssescape);
          };
          Sizzle.error = function (msg) {
            throw new Error('Syntax error, unrecognized expression: ' + msg);
          };
          Sizzle.uniqueSort = function (results) {
            var elem,
              duplicates = [],
              j = 0,
              i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while ((elem = results[i++])) {
                if (elem === results[i]) {
                  j = duplicates.push(i);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle.getText = function (elem) {
            var node,
              ret = '',
              i = 0,
              nodeType = elem.nodeType;
            if (!nodeType) {
              while ((node = elem[i++])) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === 'string') {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: true },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: true },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || '').replace(runescape, funescape);
                if (match[2] === '~=') {
                  match[3] = ' ' + match[3] + ' ';
                }
                return match.slice(0, 4);
              },
              CHILD: function (match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === 'nth') {
                  if (!match[3]) {
                    Sizzle.error(match[0]);
                  }
                  match[4] = +(match[4]
                    ? match[5] + (match[6] || 1)
                    : 2 * (match[3] === 'even' || match[3] === 'odd'));
                  match[5] = +(match[7] + match[8] || match[3] === 'odd');
                } else if (match[3]) {
                  Sizzle.error(match[0]);
                }
                return match;
              },
              PSEUDO: function (match) {
                var excess,
                  unquoted = !match[6] && match[2];
                if (matchExpr['CHILD'].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || '';
                } else if (
                  unquoted &&
                  rpseudo.test(unquoted) &&
                  (excess = tokenize(unquoted, true)) &&
                  (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)
                ) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              },
            },
            filter: {
              TAG: function (nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === '*'
                  ? function () {
                    return true;
                  }
                  : function (elem) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                  };
              },
              CLASS: function (className) {
                var pattern = classCache[className + ' '];
                return (
                  pattern ||
                  ((pattern = new RegExp(
                      '(^|' + whitespace + ')' + className + '(' + whitespace + '|$)',
                    )) &&
                    classCache(className, function (elem) {
                      return pattern.test(
                        (typeof elem.className === 'string' && elem.className) ||
                        (typeof elem.getAttribute !== 'undefined' &&
                          elem.getAttribute('class')) ||
                        '',
                      );
                    }))
                );
              },
              ATTR: function (name, operator, check) {
                return function (elem) {
                  var result = Sizzle.attr(elem, name);
                  if (result == null) {
                    return operator === '!=';
                  }
                  if (!operator) {
                    return true;
                  }
                  result += '';
                  return operator === '='
                    ? result === check
                    : operator === '!='
                      ? result !== check
                      : operator === '^='
                        ? check && result.indexOf(check) === 0
                        : operator === '*='
                          ? check && result.indexOf(check) > -1
                          : operator === '$='
                            ? check && result.slice(-check.length) === check
                            : operator === '~='
                              ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1
                              : operator === '|='
                                ? result === check || result.slice(0,
                                check.length + 1) === check + '-'
                                : false;
                };
              },
              CHILD: function (type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== 'nth',
                  forward = type.slice(-4) !== 'last',
                  ofType = what === 'of-type';
                return first === 1 && last === 0
                  ? function (elem) {
                    return !!elem.parentNode;
                  }
                  : function (elem, _context, xml) {
                    var cache,
                      uniqueCache,
                      outerCache,
                      node,
                      nodeIndex,
                      start,
                      dir = simple !== forward ? 'nextSibling' : 'previousSibling',
                      parent = elem.parentNode,
                      name = ofType && elem.nodeName.toLowerCase(),
                      useCache = !xml && !ofType,
                      diff = false;
                    if (parent) {
                      if (simple) {
                        while (dir) {
                          node = elem;
                          while ((node = node[dir])) {
                            if (
                              ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1
                            ) {
                              return false;
                            }
                          }
                          start = dir = type === 'only' && !start && 'nextSibling';
                        }
                        return true;
                      }
                      start = [forward ? parent.firstChild : parent.lastChild];
                      if (forward && useCache) {
                        node = parent;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache =
                          outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex && cache[2];
                        node = nodeIndex && parent.childNodes[nodeIndex];
                        while (
                          (node =
                            (++nodeIndex && node && node[dir]) ||
                            (diff = nodeIndex = 0) ||
                            start.pop())
                          ) {
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                        }
                      } else {
                        if (useCache) {
                          node = elem;
                          outerCache = node[expando] || (node[expando] = {});
                          uniqueCache =
                            outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          cache = uniqueCache[type] || [];
                          nodeIndex = cache[0] === dirruns && cache[1];
                          diff = nodeIndex;
                        }
                        if (diff === false) {
                          while (
                            (node =
                              (++nodeIndex && node && node[dir]) ||
                              (diff = nodeIndex = 0) ||
                              start.pop())
                            ) {
                            if (
                              (ofType
                                ? node.nodeName.toLowerCase() === name
                                : node.nodeType === 1) &&
                              ++diff
                            ) {
                              if (useCache) {
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache =
                                  outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                uniqueCache[type] = [dirruns, diff];
                              }
                              if (node === elem) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      diff -= last;
                      return diff === first || (diff % first === 0 && diff / first >= 0);
                    }
                  };
              },
              PSEUDO: function (pseudo, argument) {
                var args,
                  fn =
                    Expr.pseudos[pseudo] ||
                    Expr.setFilters[pseudo.toLowerCase()] ||
                    Sizzle.error('unsupported pseudo: ' + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, '', argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                    ? markFunction(function (seed, matches) {
                      var idx,
                        matched = fn(seed, argument),
                        i = matched.length;
                      while (i--) {
                        idx = indexOf(seed, matched[i]);
                        seed[idx] = !(matches[idx] = matched[i]);
                      }
                    })
                    : function (elem) {
                      return fn(elem, 0, args);
                    };
                }
                return fn;
              },
            },
            pseudos: {
              not: markFunction(function (selector) {
                var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, '$1'));
                return matcher[expando]
                  ? markFunction(function (seed, matches, _context, xml) {
                    var elem,
                      unmatched = matcher(seed, null, xml, []),
                      i = seed.length;
                    while (i--) {
                      if ((elem = unmatched[i])) {
                        seed[i] = !(matches[i] = elem);
                      }
                    }
                  })
                  : function (elem, _context, xml) {
                    input[0] = elem;
                    matcher(input, null, xml, results);
                    input[0] = null;
                    return !results.pop();
                  };
              }),
              has: markFunction(function (selector) {
                return function (elem) {
                  return Sizzle(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function (text) {
                text = text.replace(runescape, funescape);
                return function (elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              lang: markFunction(function (lang) {
                if (!ridentifier.test(lang || '')) {
                  Sizzle.error('unsupported lang: ' + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function (elem) {
                  var elemLang;
                  do {
                    if (
                      (elemLang = documentIsHTML
                        ? elem.lang
                        : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))
                    ) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              target: function (elem) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function (elem) {
                return elem === docElem;
              },
              focus: function (elem) {
                return (
                  elem === document.activeElement &&
                  (!document.hasFocus || document.hasFocus()) &&
                  !!(elem.type || elem.href || ~elem.tabIndex)
                );
              },
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function (elem) {
                var nodeName = elem.nodeName.toLowerCase();
                return (
                  (nodeName === 'input' && !!elem.checked) ||
                  (nodeName === 'option' && !!elem.selected)
                );
              },
              selected: function (elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              empty: function (elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function (elem) {
                return !Expr.pseudos['empty'](elem);
              },
              header: function (elem) {
                return rheader.test(elem.nodeName);
              },
              input: function (elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function (elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === 'input' && elem.type === 'button') || name === 'button';
              },
              text: function (elem) {
                var attr;
                return (
                  elem.nodeName.toLowerCase() === 'input' &&
                  elem.type === 'text' &&
                  ((attr = elem.getAttribute('type')) == null || attr.toLowerCase() === 'text')
                );
              },
              first: createPositionalPseudo(function () {
                return [0];
              }),
              last: createPositionalPseudo(function (_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function (matchIndexes, length) {
                var i = 0;
                for (; i < length; i += 2) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function (matchIndexes, length) {
                var i = 1;
                for (; i < length; i += 2) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i >= 0;) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; ++i < length;) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),
            },
          };
          Expr.pseudos['nth'] = Expr.pseudos['eq'];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }

          function setFilters() {}

          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle.tokenize = function (selector, parseOnly) {
            var matched,
              match,
              tokens,
              type,
              soFar,
              groups,
              preFilters,
              cached = tokenCache[selector + ' '];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push((tokens = []));
              }
              matched = false;
              if ((match = rcombinators.exec(soFar))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim, ' '),
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if (
                  (match = matchExpr[type].exec(soFar)) &&
                  (!preFilters[type] || (match = preFilters[type](match)))
                ) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type: type,
                    matches: match,
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly
              ? soFar.length
              : soFar
                ? Sizzle.error(selector)
                : tokenCache(selector, groups).slice(0);
          };

          function toSelector(tokens) {
            var i = 0,
              len = tokens.length,
              selector = '';
            for (; i < len; i++) {
              selector += tokens[i].value;
            }
            return selector;
          }

          function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === 'parentNode',
              doneName = done++;
            return combinator.first
              ? function (elem, context, xml) {
                while ((elem = elem[dir])) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
              : function (elem, context, xml) {
                var oldCache,
                  uniqueCache,
                  outerCache,
                  newCache = [dirruns, doneName];
                if (xml) {
                  while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                      if (skip && skip === elem.nodeName.toLowerCase()) {
                        elem = elem[dir] || elem;
                      } else if (
                        (oldCache = uniqueCache[key]) &&
                        oldCache[0] === dirruns &&
                        oldCache[1] === doneName
                      ) {
                        return (newCache[2] = oldCache[2]);
                      } else {
                        uniqueCache[key] = newCache;
                        if ((newCache[2] = matcher(elem, context, xml))) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              };
          }

          function elementMatcher(matchers) {
            return matchers.length > 1
              ? function (elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                  if (!matchers[i](elem, context, xml)) {
                    return false;
                  }
                }
                return true;
              }
              : matchers[0];
          }

          function multipleContexts(selector, contexts, results) {
            var i = 0,
              len = contexts.length;
            for (; i < len; i++) {
              Sizzle(selector, contexts[i], results);
            }
            return results;
          }

          function condense(unmatched, map, filter, context, xml) {
            var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;
            for (; i < len; i++) {
              if ((elem = unmatched[i])) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i);
                  }
                }
              }
            }
            return newUnmatched;
          }

          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function (seed, results, context, xml) {
              var temp,
                i,
                elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
                elems =
                  seed ||
                  multipleContexts(selector || '*', context.nodeType ? [context] : context, []),
                matcherIn =
                  preFilter && (seed || !selector)
                    ? condense(elems, preMap, preFilter, context, xml)
                    : elems,
                matcherOut = matcher
                  ? postFinder || (seed ? preFilter : preexisting || postFilter)
                    ? []
                    : results
                  : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i = temp.length;
                while (i--) {
                  if ((elem = temp[i])) {
                    matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i = matcherOut.length;
                    while (i--) {
                      if ((elem = matcherOut[i])) {
                        temp.push((matcherIn[i] = elem));
                      }
                    }
                    postFinder(null, (matcherOut = []), temp, xml);
                  }
                  i = matcherOut.length;
                  while (i--) {
                    if (
                      (elem = matcherOut[i]) &&
                      (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1
                    ) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results
                    ? matcherOut.splice(preexisting, matcherOut.length)
                    : matcherOut,
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push.apply(results, matcherOut);
                }
              }
            });
          }

          function matcherFromTokens(tokens) {
            var checkContext,
              matcher,
              j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[' '],
              i = leadingRelative ? 1 : 0,
              matchContext = addCombinator(
                function (elem) {
                  return elem === checkContext;
                },
                implicitRelative,
                true,
              ),
              matchAnyContext = addCombinator(
                function (elem) {
                  return indexOf(checkContext, elem) > -1;
                },
                implicitRelative,
                true,
              ),
              matchers = [
                function (elem, context, xml) {
                  var ret =
                    (!leadingRelative && (xml || context !== outermostContext)) ||
                    ((checkContext = context).nodeType
                      ? matchContext(elem, context, xml)
                      : matchAnyContext(elem, context, xml));
                  checkContext = null;
                  return ret;
                },
              ];
            for (; i < len; i++) {
              if ((matcher = Expr.relative[tokens[i].type])) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                if (matcher[expando]) {
                  j = ++i;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i > 1 && elementMatcher(matchers),
                    i > 1 &&
                    toSelector(
                      tokens
                        .slice(0, i - 1)
                        .concat({ value: tokens[i - 2].type === ' ' ? '*' : '' }),
                    ).replace(rtrim, '$1'),
                    matcher,
                    i < j && matcherFromTokens(tokens.slice(i, j)),
                    j < len && matcherFromTokens((tokens = tokens.slice(j))),
                    j < len && toSelector(tokens),
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }

          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function (seed, context, xml, results, outermost) {
                var elem,
                  j,
                  matcher,
                  matchedCount = 0,
                  i = '0',
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  elems = seed || (byElement && Expr.find['TAG']('*', outermost)),
                  dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                  len = elems.length;
                if (outermost) {
                  outermostContext = context == document || context || outermost;
                }
                for (; i !== len && (elem = elems[i]) != null; i++) {
                  if (byElement && elem) {
                    j = 0;
                    if (!context && elem.ownerDocument != document) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while ((matcher = elementMatchers[j++])) {
                      if (matcher(elem, context || document, xml)) {
                        results.push(elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }
                  if (bySet) {
                    if ((elem = !matcher && elem)) {
                      matchedCount--;
                    }
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                  j = 0;
                  while ((matcher = setMatchers[j++])) {
                    matcher(unmatched, setMatched, context, xml);
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i--) {
                        if (!(unmatched[i] || setMatched[i])) {
                          setMatched[i] = pop.call(results);
                        }
                      }
                    }
                    setMatched = condense(setMatched);
                  }
                  push.apply(results, setMatched);
                  if (
                    outermost &&
                    !seed &&
                    setMatched.length > 0 &&
                    matchedCount + setMatchers.length > 1
                  ) {
                    Sizzle.uniqueSort(results);
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }
                return unmatched;
              };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }

          compile = Sizzle.compile = function (selector, match) {
            var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + ' '];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i = match.length;
              while (i--) {
                cached = matcherFromTokens(match[i]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers),
              );
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle.select = function (selector, context, results, seed) {
            var i,
              tokens,
              token,
              type,
              find,
              compiled = typeof selector === 'function' && selector,
              match = !seed && tokenize((selector = compiled.selector || selector));
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (
                tokens.length > 2 &&
                (token = tokens[0]).type === 'ID' &&
                context.nodeType === 9 &&
                documentIsHTML &&
                Expr.relative[tokens[1].type]
              ) {
                context = (Expr.find['ID'](
                  token.matches[0].replace(runescape, funescape),
                  context,
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i = matchExpr['needsContext'].test(selector) ? 0 : tokens.length;
              while (i--) {
                token = tokens[i];
                if (Expr.relative[(type = token.type)]) {
                  break;
                }
                if ((find = Expr.find[type])) {
                  if (
                    (seed = find(
                      token.matches[0].replace(runescape, funescape),
                      (rsibling.test(tokens[0].type) && testContext(context.parentNode)) || context,
                    ))
                  ) {
                    tokens.splice(i, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || (rsibling.test(selector) && testContext(context.parentNode)) || context,
            );
            return results;
          };
          support.sortStable = expando.split('').sort(sortOrder).join('') === expando;
          support.detectDuplicates = !!hasDuplicate;
          setDocument();
          support.sortDetached = assert(function (el) {
            return el.compareDocumentPosition(document.createElement('fieldset')) & 1;
          });
          if (
            !assert(function (el) {
              el.innerHTML = '<a href=\'#\'></a>';
              return el.firstChild.getAttribute('href') === '#';
            })
          ) {
            addHandle('type|href|height|width', function (elem, name, isXML) {
              if (!isXML) {
                return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2);
              }
            });
          }
          if (
            !support.attributes ||
            !assert(function (el) {
              el.innerHTML = '<input/>';
              el.firstChild.setAttribute('value', '');
              return el.firstChild.getAttribute('value') === '';
            })
          ) {
            addHandle('value', function (elem, _name, isXML) {
              if (!isXML && elem.nodeName.toLowerCase() === 'input') {
                return elem.defaultValue;
              }
            });
          }
          if (
            !assert(function (el) {
              return el.getAttribute('disabled') == null;
            })
          ) {
            addHandle(booleans, function (elem, name, isXML) {
              var val;
              if (!isXML) {
                return elem[name] === true
                  ? name.toLowerCase()
                  : (val = elem.getAttributeNode(name)) && val.specified
                    ? val.value
                    : null;
              }
            });
          }
          return Sizzle;
        })(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[':'] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function (elem, dir, until) {
          var matched = [],
            truncate = until !== undefined;
          while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function (n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;

        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }

        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
              return (elem === qualifier) !== not;
            });
          }
          if (typeof qualifier !== 'string') {
            return jQuery.grep(elements, function (elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }

        jQuery.filter = function (expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ':not(' + expr + ')';
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(
            expr,
            jQuery.grep(elems, function (elem) {
              return elem.nodeType === 1;
            }),
          );
        };
        jQuery.fn.extend({
          find: function (selector) {
            var i,
              ret,
              len = this.length,
              self = this;
            if (typeof selector !== 'string') {
              return this.pushStack(
                jQuery(selector).filter(function () {
                  for (i = 0; i < len; i++) {
                    if (jQuery.contains(self[i], this)) {
                      return true;
                    }
                  }
                }),
              );
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function (selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function (selector) {
            return !!winnow(
              this,
              typeof selector === 'string' && rneedsContext.test(selector)
                ? jQuery(selector)
                : selector || [],
              false,
            ).length;
          },
        });
        var rootjQuery,
          rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          init = (jQuery.fn.init = function (selector, context, root) {
            var match, elem;
            if (!selector) {
              return this;
            }
            root = root || rootjQuery;
            if (typeof selector === 'string') {
              if (
                selector[0] === '<' &&
                selector[selector.length - 1] === '>' &&
                selector.length >= 3
              ) {
                match = [null, selector, null];
              } else {
                match = rquickExpr.exec(selector);
              }
              if (match && (match[1] || !context)) {
                if (match[1]) {
                  context = context instanceof jQuery ? context[0] : context;
                  jQuery.merge(
                    this,
                    jQuery.parseHTML(
                      match[1],
                      context && context.nodeType ? context.ownerDocument || context : document,
                      true,
                    ),
                  );
                  if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                    for (match in context) {
                      if (isFunction(this[match])) {
                        this[match](context[match]);
                      } else {
                        this.attr(match, context[match]);
                      }
                    }
                  }
                  return this;
                } else {
                  elem = document.getElementById(match[2]);
                  if (elem) {
                    this[0] = elem;
                    this.length = 1;
                  }
                  return this;
                }
              } else if (!context || context.jquery) {
                return (context || root).find(selector);
              } else {
                return this.constructor(context).find(selector);
              }
            } else if (selector.nodeType) {
              this[0] = selector;
              this.length = 1;
              return this;
            } else if (isFunction(selector)) {
              return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
          });
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
          guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true,
          };
        jQuery.fn.extend({
          has: function (target) {
            var targets = jQuery(target, this),
              l = targets.length;
            return this.filter(function () {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function (selectors, context) {
            var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== 'string' && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (
                    cur.nodeType < 11 &&
                    (targets
                      ? targets.index(cur) > -1
                      : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))
                  ) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          index: function (elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === 'string') {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
          },
          add: function (selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))),
            );
          },
          addBack: function (selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          },
        });

        function sibling(cur, dir) {
          while ((cur = cur[dir]) && cur.nodeType !== 1) {}
          return cur;
        }

        jQuery.each(
          {
            parent: function (elem) {
              var parent = elem.parentNode;
              return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function (elem) {
              return dir(elem, 'parentNode');
            },
            parentsUntil: function (elem, _i, until) {
              return dir(elem, 'parentNode', until);
            },
            next: function (elem) {
              return sibling(elem, 'nextSibling');
            },
            prev: function (elem) {
              return sibling(elem, 'previousSibling');
            },
            nextAll: function (elem) {
              return dir(elem, 'nextSibling');
            },
            prevAll: function (elem) {
              return dir(elem, 'previousSibling');
            },
            nextUntil: function (elem, _i, until) {
              return dir(elem, 'nextSibling', until);
            },
            prevUntil: function (elem, _i, until) {
              return dir(elem, 'previousSibling', until);
            },
            siblings: function (elem) {
              return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function (elem) {
              return siblings(elem.firstChild);
            },
            contents: function (elem) {
              if (elem.contentDocument != null && getProto(elem.contentDocument)) {
                return elem.contentDocument;
              }
              if (nodeName(elem, 'template')) {
                elem = elem.content || elem;
              }
              return jQuery.merge([], elem.childNodes);
            },
          },
          function (name, fn) {
            jQuery.fn[name] = function (until, selector) {
              var matched = jQuery.map(this, fn, until);
              if (name.slice(-5) !== 'Until') {
                selector = until;
              }
              if (selector && typeof selector === 'string') {
                matched = jQuery.filter(selector, matched);
              }
              if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                  jQuery.uniqueSort(matched);
                }
                if (rparentsprev.test(name)) {
                  matched.reverse();
                }
              }
              return this.pushStack(matched);
            };
          },
        );
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
            object[flag] = true;
          });
          return object;
        }

        jQuery.Callbacks = function (options) {
          options =
            typeof options === 'string' ? createOptions(options) : jQuery.extend({}, options);
          var firing,
            memory,
            fired,
            locked,
            list = [],
            queue = [],
            firingIndex = -1,
            fire = function () {
              locked = locked || options.once;
              fired = firing = true;
              for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                  if (
                    list[firingIndex].apply(memory[0], memory[1]) === false &&
                    options.stopOnFalse
                  ) {
                    firingIndex = list.length;
                    memory = false;
                  }
                }
              }
              if (!options.memory) {
                memory = false;
              }
              firing = false;
              if (locked) {
                if (memory) {
                  list = [];
                } else {
                  list = '';
                }
              }
            },
            self = {
              add: function () {
                if (list) {
                  if (memory && !firing) {
                    firingIndex = list.length - 1;
                    queue.push(memory);
                  }
                  (function add(args) {
                    jQuery.each(args, function (_, arg) {
                      if (isFunction(arg)) {
                        if (!options.unique || !self.has(arg)) {
                          list.push(arg);
                        }
                      } else if (arg && arg.length && toType(arg) !== 'string') {
                        add(arg);
                      }
                    });
                  })(arguments);
                  if (memory && !firing) {
                    fire();
                  }
                }
                return this;
              },
              remove: function () {
                jQuery.each(arguments, function (_, arg) {
                  var index;
                  while ((index = jQuery.inArray(arg, list, index)) > -1) {
                    list.splice(index, 1);
                    if (index <= firingIndex) {
                      firingIndex--;
                    }
                  }
                });
                return this;
              },
              has: function (fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
              },
              empty: function () {
                if (list) {
                  list = [];
                }
                return this;
              },
              disable: function () {
                locked = queue = [];
                list = memory = '';
                return this;
              },
              disabled: function () {
                return !list;
              },
              lock: function () {
                locked = queue = [];
                if (!memory && !firing) {
                  list = memory = '';
                }
                return this;
              },
              locked: function () {
                return !!locked;
              },
              fireWith: function (context, args) {
                if (!locked) {
                  args = args || [];
                  args = [context, args.slice ? args.slice() : args];
                  queue.push(args);
                  if (!firing) {
                    fire();
                  }
                }
                return this;
              },
              fire: function () {
                self.fireWith(this, arguments);
                return this;
              },
              fired: function () {
                return !!fired;
              },
            };
          return self;
        };

        function Identity(v) {
          return v;
        }

        function Thrower(ex) {
          throw ex;
        }

        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction((method = value.promise))) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction((method = value.then))) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(undefined, [value].slice(noValue));
            }
          } catch (value) {
            reject.apply(undefined, [value]);
          }
        }

        jQuery.extend({
          Deferred: function (func) {
            var tuples = [
                ['notify', 'progress', jQuery.Callbacks('memory'), jQuery.Callbacks('memory'), 2],
                [
                  'resolve',
                  'done',
                  jQuery.Callbacks('once memory'),
                  jQuery.Callbacks('once memory'),
                  0,
                  'resolved',
                ],
                [
                  'reject',
                  'fail',
                  jQuery.Callbacks('once memory'),
                  jQuery.Callbacks('once memory'),
                  1,
                  'rejected',
                ],
              ],
              state = 'pending',
              promise = {
                state: function () {
                  return state;
                },
                always: function () {
                  deferred.done(arguments).fail(arguments);
                  return this;
                },
                catch: function (fn) {
                  return promise.then(null, fn);
                },
                pipe: function () {
                  var fns = arguments;
                  return jQuery
                    .Deferred(function (newDefer) {
                      jQuery.each(tuples, function (_i, tuple) {
                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                        deferred[tuple[1]](function () {
                          var returned = fn && fn.apply(this, arguments);
                          if (returned && isFunction(returned.promise)) {
                            returned
                              .promise()
                              .progress(newDefer.notify)
                              .done(newDefer.resolve)
                              .fail(newDefer.reject);
                          } else {
                            newDefer[tuple[0] + 'With'](this, fn ? [returned] : arguments);
                          }
                        });
                      });
                      fns = null;
                    })
                    .promise();
                },
                then: function (onFulfilled, onRejected, onProgress) {
                  var maxDepth = 0;

                  function resolve(depth, deferred, handler, special) {
                    return function () {
                      var that = this,
                        args = arguments,
                        mightThrow = function () {
                          var returned, then;
                          if (depth < maxDepth) {
                            return;
                          }
                          returned = handler.apply(that, args);
                          if (returned === deferred.promise()) {
                            throw new TypeError('Thenable self-resolution');
                          }
                          then =
                            returned &&
                            (typeof returned === 'object' || typeof returned === 'function') &&
                            returned.then;
                          if (isFunction(then)) {
                            if (special) {
                              then.call(
                                returned,
                                resolve(maxDepth, deferred, Identity, special),
                                resolve(maxDepth, deferred, Thrower, special),
                              );
                            } else {
                              maxDepth++;
                              then.call(
                                returned,
                                resolve(maxDepth, deferred, Identity, special),
                                resolve(maxDepth, deferred, Thrower, special),
                                resolve(maxDepth, deferred, Identity, deferred.notifyWith),
                              );
                            }
                          } else {
                            if (handler !== Identity) {
                              that = undefined;
                              args = [returned];
                            }
                            (special || deferred.resolveWith)(that, args);
                          }
                        },
                        process = special
                          ? mightThrow
                          : function () {
                            try {
                              mightThrow();
                            } catch (e) {
                              if (jQuery.Deferred.exceptionHook) {
                                jQuery.Deferred.exceptionHook(e, process.stackTrace);
                              }
                              if (depth + 1 >= maxDepth) {
                                if (handler !== Thrower) {
                                  that = undefined;
                                  args = [e];
                                }
                                deferred.rejectWith(that, args);
                              }
                            }
                          };
                      if (depth) {
                        process();
                      } else {
                        if (jQuery.Deferred.getStackHook) {
                          process.stackTrace = jQuery.Deferred.getStackHook();
                        }
                        window.setTimeout(process);
                      }
                    };
                  }

                  return jQuery
                    .Deferred(function (newDefer) {
                      tuples[0][3].add(
                        resolve(
                          0,
                          newDefer,
                          isFunction(onProgress) ? onProgress : Identity,
                          newDefer.notifyWith,
                        ),
                      );
                      tuples[1][3].add(
                        resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity),
                      );
                      tuples[2][3].add(
                        resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower),
                      );
                    })
                    .promise();
                },
                promise: function (obj) {
                  return obj != null ? jQuery.extend(obj, promise) : promise;
                },
              },
              deferred = {};
            jQuery.each(tuples, function (i, tuple) {
              var list = tuple[2],
                stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function () {
                    state = stateString;
                  },
                  tuples[3 - i][2].disable,
                  tuples[3 - i][3].disable,
                  tuples[0][2].lock,
                  tuples[0][3].lock,
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function () {
                deferred[tuple[0] + 'With'](this === deferred ? undefined : this, arguments);
                return this;
              };
              deferred[tuple[0] + 'With'] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function (singleValue) {
            var remaining = arguments.length,
              i = remaining,
              resolveContexts = Array(i),
              resolveValues = slice.call(arguments),
              primary = jQuery.Deferred(),
              updateFunc = function (i) {
                return function (value) {
                  resolveContexts[i] = this;
                  resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                  if (!--remaining) {
                    primary.resolveWith(resolveContexts, resolveValues);
                  }
                };
              };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining,
              );
              if (
                primary.state() === 'pending' ||
                isFunction(resolveValues[i] && resolveValues[i].then)
              ) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          },
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function (error, stack) {
          if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
            window.console.warn('jQuery.Deferred exception: ' + error.message, error.stack, stack);
          }
        };
        jQuery.readyException = function (error) {
          window.setTimeout(function () {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function (fn) {
          readyList.then(fn).catch(function (error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          isReady: false,
          readyWait: 1,
          ready: function (wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document, [jQuery]);
          },
        });
        jQuery.ready.then = readyList.then;

        function completed() {
          document.removeEventListener('DOMContentLoaded', completed);
          window.removeEventListener('load', completed);
          jQuery.ready();
        }

        if (
          document.readyState === 'complete' ||
          (document.readyState !== 'loading' && !document.documentElement.doScroll)
        ) {
          window.setTimeout(jQuery.ready);
        } else {
          document.addEventListener('DOMContentLoaded', completed);
          window.addEventListener('load', completed);
        }
        var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0,
            len = elems.length,
            bulk = key == null;
          if (toType(key) === 'object') {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function (elem, _key, value) {
                  return bulk.call(jQuery(elem), value);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/,
          rdashAlpha = /-([a-z])/g;

        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }

        function camelCase(string) {
          return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
        }

        var acceptData = function (owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };

        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }

        Data.uid = 1;
        Data.prototype = {
          cache: function (owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value: value,
                    configurable: true,
                  });
                }
              }
            }
            return value;
          },
          set: function (owner, data, value) {
            var prop,
              cache = this.cache(owner);
            if (typeof data === 'string') {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function (owner, key) {
            return key === undefined
              ? this.cache(owner)
              : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function (owner, key, value) {
            if (key === undefined || (key && typeof key === 'string' && value === undefined)) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key;
          },
          remove: function (owner, key) {
            var i,
              cache = owner[this.expando];
            if (cache === undefined) {
              return;
            }
            if (key !== undefined) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === undefined || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = undefined;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function (owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
          },
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          rmultiDash = /[A-Z]/g;

        function getData(data) {
          if (data === 'true') {
            return true;
          }
          if (data === 'false') {
            return false;
          }
          if (data === 'null') {
            return null;
          }
          if (data === +data + '') {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }

        function dataAttr(elem, key, data) {
          var name;
          if (data === undefined && elem.nodeType === 1) {
            name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === 'string') {
              try {
                data = getData(data);
              } catch (e) {}
              dataUser.set(elem, key, data);
            } else {
              data = undefined;
            }
          }
          return data;
        }

        jQuery.extend({
          hasData: function (elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function (elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function (elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function (elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function (elem, name) {
            dataPriv.remove(elem, name);
          },
        });
        jQuery.fn.extend({
          data: function (key, value) {
            var i,
              name,
              data,
              elem = this[0],
              attrs = elem && elem.attributes;
            if (key === undefined) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, 'hasDataAttrs')) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf('data-') === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, 'hasDataAttrs', true);
                }
              }
              return data;
            }
            if (typeof key === 'object') {
              return this.each(function () {
                dataUser.set(this, key);
              });
            }
            return access(
              this,
              function (value) {
                var data;
                if (elem && value === undefined) {
                  data = dataUser.get(elem, key);
                  if (data !== undefined) {
                    return data;
                  }
                  data = dataAttr(elem, key);
                  if (data !== undefined) {
                    return data;
                  }
                  return;
                }
                this.each(function () {
                  dataUser.set(this, key, value);
                });
              },
              null,
              value,
              arguments.length > 1,
              null,
              true,
            );
          },
          removeData: function (key) {
            return this.each(function () {
              dataUser.remove(this, key);
            });
          },
        });
        jQuery.extend({
          queue: function (elem, type, data) {
            var queue;
            if (elem) {
              type = (type || 'fx') + 'queue';
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function (elem, type) {
            type = type || 'fx';
            var queue = jQuery.queue(elem, type),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks(elem, type),
              next = function () {
                jQuery.dequeue(elem, type);
              };
            if (fn === 'inprogress') {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === 'fx') {
                queue.unshift('inprogress');
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function (elem, type) {
            var key = type + 'queueHooks';
            return (
              dataPriv.get(elem, key) ||
              dataPriv.access(elem, key, {
                empty: jQuery.Callbacks('once memory').add(function () {
                  dataPriv.remove(elem, [type + 'queue', key]);
                }),
              })
            );
          },
        });
        jQuery.fn.extend({
          queue: function (type, data) {
            var setter = 2;
            if (typeof type !== 'string') {
              data = type;
              type = 'fx';
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === undefined
              ? this
              : this.each(function () {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === 'fx' && queue[0] !== 'inprogress') {
                  jQuery.dequeue(this, type);
                }
              });
          },
          dequeue: function (type) {
            return this.each(function () {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function (type) {
            return this.queue(type || 'fx', []);
          },
          promise: function (type, obj) {
            var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function () {
                if (!--count) {
                  defer.resolveWith(elements, [elements]);
                }
              };
            if (typeof type !== 'string') {
              obj = type;
              type = undefined;
            }
            type = type || 'fx';
            while (i--) {
              tmp = dataPriv.get(elements[i], type + 'queueHooks');
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          },
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i');
        var cssExpand = ['Top', 'Right', 'Bottom', 'Left'];
        var documentElement = document.documentElement;
        var isAttached = function (elem) {
            return jQuery.contains(elem.ownerDocument, elem);
          },
          composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function (elem) {
            return (
              jQuery.contains(elem.ownerDocument, elem) ||
              elem.getRootNode(composed) === elem.ownerDocument
            );
          };
        }
        var isHiddenWithinTree = function (elem, el) {
          elem = el || elem;
          return (
            elem.style.display === 'none' ||
            (elem.style.display === '' &&
              isAttached(elem) &&
              jQuery.css(elem, 'display') === 'none')
          );
        };

        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted,
            scale,
            maxIterations = 20,
            currentValue = tween
              ? function () {
                return tween.cur();
              }
              : function () {
                return jQuery.css(elem, prop, '');
              },
            initial = currentValue(),
            unit = (valueParts && valueParts[3]) || (jQuery.cssNumber[prop] ? '' : 'px'),
            initialInUnit =
              elem.nodeType &&
              (jQuery.cssNumber[prop] || (unit !== 'px' && +initial)) &&
              rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1]
              ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
              : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }

        var defaultDisplayMap = {};

        function getDefaultDisplay(elem) {
          var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName));
          display = jQuery.css(temp, 'display');
          temp.parentNode.removeChild(temp);
          if (display === 'none') {
            display = 'block';
          }
          defaultDisplayMap[nodeName] = display;
          return display;
        }

        function showHide(elements, show) {
          var display,
            elem,
            values = [],
            index = 0,
            length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === 'none') {
                values[index] = dataPriv.get(elem, 'display') || null;
                if (!values[index]) {
                  elem.style.display = '';
                }
              }
              if (elem.style.display === '' && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== 'none') {
                values[index] = 'none';
                dataPriv.set(elem, 'display', display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }

        jQuery.fn.extend({
          show: function () {
            return showHide(this, true);
          },
          hide: function () {
            return showHide(this);
          },
          toggle: function (state) {
            if (typeof state === 'boolean') {
              return state ? this.show() : this.hide();
            }
            return this.each(function () {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          },
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
          var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement('div')),
            input = document.createElement('input');
          input.setAttribute('type', 'radio');
          input.setAttribute('checked', 'checked');
          input.setAttribute('name', 't');
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = '<textarea>x</textarea>';
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = '<option></option>';
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, '<select multiple=\'multiple\'>', '</select>'];
        }

        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== 'undefined') {
            ret = context.getElementsByTagName(tag || '*');
          } else if (typeof context.querySelectorAll !== 'undefined') {
            ret = context.querySelectorAll(tag || '*');
          } else {
            ret = [];
          }
          if (tag === undefined || (tag && nodeName(context, tag))) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }

        function setGlobalEval(elems, refElements) {
          var i = 0,
            l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              'globalEval',
              !refElements || dataPriv.get(refElements[i], 'globalEval'),
            );
          }
        }

        var rhtml = /<|&#?\w+;/;

        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem,
            tmp,
            tag,
            wrap,
            attached,
            j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === 'object') {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement('div'));
                tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = '';
              }
            }
          }
          fragment.textContent = '';
          i = 0;
          while ((elem = nodes[i++])) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), 'script');
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while ((elem = tmp[j++])) {
                if (rscriptType.test(elem.type || '')) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }

        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

        function returnTrue() {
          return true;
        }

        function returnFalse() {
          return false;
        }

        function expectSync(elem, type) {
          return (elem === safeActiveElement()) === (type === 'focus');
        }

        function safeActiveElement() {
          try {
            return document.activeElement;
          } catch (err) {}
        }

        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === 'object') {
            if (typeof selector !== 'string') {
              data = data || selector;
              selector = undefined;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined;
          } else if (fn == null) {
            if (typeof selector === 'string') {
              fn = data;
              data = undefined;
            } else {
              fn = data;
              data = selector;
              selector = undefined;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function (event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function () {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }

        jQuery.event = {
          global: {},
          add: function (elem, types, handler, data, selector) {
            var handleObjIn,
              eventHandle,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function (e) {
                return typeof jQuery !== 'undefined' && jQuery.event.triggered !== e.type
                  ? jQuery.event.dispatch.apply(elem, arguments)
                  : undefined;
              };
            }
            types = (types || '').match(rnothtmlwhite) || [''];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || '').split('.').sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend(
                {
                  type: type,
                  origType: origType,
                  data: data,
                  handler: handler,
                  guid: handler.guid,
                  selector: selector,
                  needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                  namespace: namespaces.join('.'),
                },
                handleObjIn,
              );
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (
                  !special.setup ||
                  special.setup.call(elem, data, namespaces, eventHandle) === false
                ) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          remove: function (elem, types, handler, selector, mappedTypes) {
            var j,
              origCount,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || '').match(rnothtmlwhite) || [''];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || '').split('.').sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)');
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if (
                  (mappedTypes || origType === handleObj.origType) &&
                  (!handler || handler.guid === handleObj.guid) &&
                  (!tmp || tmp.test(handleObj.namespace)) &&
                  (!selector ||
                    selector === handleObj.selector ||
                    (selector === '**' && handleObj.selector))
                ) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (
                  !special.teardown ||
                  special.teardown.call(elem, namespaces, elemData.handle) === false
                ) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, 'handle events');
            }
          },
          dispatch: function (nativeEvent) {
            var i,
              j,
              ret,
              matched,
              handleObj,
              handlerQueue,
              args = new Array(arguments.length),
              event = jQuery.event.fix(nativeEvent),
              handlers = (dataPriv.get(this, 'events') || Object.create(null))[event.type] || [],
              special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while (
                (handleObj = matched.handlers[j++]) &&
                !event.isImmediatePropagationStopped()
                ) {
                if (
                  !event.rnamespace ||
                  handleObj.namespace === false ||
                  event.rnamespace.test(handleObj.namespace)
                ) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = (
                    (jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler
                  ).apply(matched.elem, args);
                  if (ret !== undefined) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function (event, handlers) {
            var i,
              handleObj,
              sel,
              matchedHandlers,
              matchedSelectors,
              handlerQueue = [],
              delegateCount = handlers.delegateCount,
              cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === 'click' && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === 'click' && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + ' ';
                    if (matchedSelectors[sel] === undefined) {
                      matchedSelectors[sel] = handleObj.needsContext
                        ? jQuery(sel, this).index(cur) > -1
                        : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function (name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook)
                ? function () {
                  if (this.originalEvent) {
                    return hook(this.originalEvent);
                  }
                }
                : function () {
                  if (this.originalEvent) {
                    return this.originalEvent[name];
                  }
                },
              set: function (value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value: value,
                });
              },
            });
          },
          fix: function (originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true,
            },
            click: {
              setup: function (data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, 'input')) {
                  leverageNative(el, 'click', returnTrue);
                }
                return false;
              },
              trigger: function (data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, 'input')) {
                  leverageNative(el, 'click');
                }
                return true;
              },
              _default: function (event) {
                var target = event.target;
                return (
                  (rcheckableType.test(target.type) &&
                    target.click &&
                    nodeName(target, 'input') &&
                    dataPriv.get(target, 'click')) ||
                  nodeName(target, 'a')
                );
              },
            },
            beforeunload: {
              postDispatch: function (event) {
                if (event.result !== undefined && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              },
            },
          },
        };

        function leverageNative(el, type, expectSync) {
          if (!expectSync) {
            if (dataPriv.get(el, type) === undefined) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function (event) {
              var notAsync,
                result,
                saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery.event.trigger(
                    jQuery.extend(saved[0], jQuery.Event.prototype),
                    saved.slice(1),
                    this,
                  ),
                });
                event.stopImmediatePropagation();
              }
            },
          });
        }

        jQuery.removeEvent = function (elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function (src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented =
              src.defaultPrevented ||
              (src.defaultPrevented === undefined && src.returnValue === false)
                ? returnTrue
                : returnFalse;
            this.target =
              src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = (src && src.timeStamp) || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          },
        };
        jQuery.each(
          {
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            code: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: true,
          },
          jQuery.event.addProp,
        );
        jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (type, delegateType) {
          jQuery.event.special[type] = {
            setup: function () {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function () {
              leverageNative(this, type);
              return true;
            },
            _default: function () {
              return true;
            },
            delegateType: delegateType,
          };
        });
        jQuery.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (orig, fix) {
            jQuery.event.special[orig] = {
              delegateType: fix,
              bindType: fix,
              handle: function (event) {
                var ret,
                  target = this,
                  related = event.relatedTarget,
                  handleObj = event.handleObj;
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                  event.type = handleObj.origType;
                  ret = handleObj.handler.apply(this, arguments);
                  event.type = fix;
                }
                return ret;
              },
            };
          },
        );
        jQuery.fn.extend({
          on: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace
                  ? handleObj.origType + '.' + handleObj.namespace
                  : handleObj.origType,
                handleObj.selector,
                handleObj.handler,
              );
              return this;
            }
            if (typeof types === 'object') {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === 'function') {
              fn = selector;
              selector = undefined;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function () {
              jQuery.event.remove(this, types, fn, selector);
            });
          },
        });
        var rnoInnerhtml = /<script|<style|<link/i,
          rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
          rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function manipulationTarget(elem, content) {
          if (
            nodeName(elem, 'table') &&
            nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr')
          ) {
            return jQuery(elem).children('tbody')[0] || elem;
          }
          return elem;
        }

        function disableScript(elem) {
          elem.type = (elem.getAttribute('type') !== null) + '/' + elem.type;
          return elem;
        }

        function restoreScript(elem) {
          if ((elem.type || '').slice(0, 5) === 'true/') {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute('type');
          }
          return elem;
        }

        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, 'handle events');
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }

        function fixInput(src, dest) {
          var nodeName = dest.nodeName.toLowerCase();
          if (nodeName === 'input' && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName === 'input' || nodeName === 'textarea') {
            dest.defaultValue = src.defaultValue;
          }
        }

        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment,
            first,
            scripts,
            hasScripts,
            node,
            doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value);
          if (
            valueIsFunction ||
            (l > 1 && typeof value === 'string' && !support.checkClone && rchecked.test(value))
          ) {
            return collection.each(function (index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, 'script'));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (
                    rscriptType.test(node.type || '') &&
                    !dataPriv.access(node, 'globalEval') &&
                    jQuery.contains(doc, node)
                  ) {
                    if (node.src && (node.type || '').toLowerCase() !== 'module') {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(
                          node.src,
                          {
                            nonce: node.nonce || node.getAttribute('nonce'),
                          },
                          doc,
                        );
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ''), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }

        function remove(elem, selector, keepData) {
          var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, 'script'));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }

        jQuery.extend({
          htmlPrefilter: function (html) {
            return html;
          },
          clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var i,
              l,
              srcElements,
              destElements,
              clone = elem.cloneNode(true),
              inPage = isAttached(elem);
            if (
              !support.noCloneChecked &&
              (elem.nodeType === 1 || elem.nodeType === 11) &&
              !jQuery.isXMLDoc(elem)
            ) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, 'script');
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
            }
            return clone;
          },
          cleanData: function (elems) {
            var data,
              elem,
              type,
              special = jQuery.event.special,
              i = 0;
            for (; (elem = elems[i]) !== undefined; i++) {
              if (acceptData(elem)) {
                if ((data = elem[dataPriv.expando])) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = undefined;
                }
              }
            }
          },
        });
        jQuery.fn.extend({
          detach: function (selector) {
            return remove(this, selector, true);
          },
          remove: function (selector) {
            return remove(this, selector);
          },
          text: function (value) {
            return access(
              this,
              function (value) {
                return value === undefined
                  ? jQuery.text(this)
                  : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                      this.textContent = value;
                    }
                  });
              },
              null,
              value,
              arguments.length,
            );
          },
          append: function () {
            return domManip(this, arguments, function (elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function () {
            return domManip(this, arguments, function (elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function () {
            return domManip(this, arguments, function (elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function () {
            return domManip(this, arguments, function (elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function () {
            var elem,
              i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = '';
              }
            }
            return this;
          },
          clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function () {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function (value) {
            return access(
              this,
              function (value) {
                var elem = this[0] || {},
                  i = 0,
                  l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                  return elem.innerHTML;
                }
                if (
                  typeof value === 'string' &&
                  !rnoInnerhtml.test(value) &&
                  !wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]
                ) {
                  value = jQuery.htmlPrefilter(value);
                  try {
                    for (; i < l; i++) {
                      elem = this[i] || {};
                      if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.innerHTML = value;
                      }
                    }
                    elem = 0;
                  } catch (e) {}
                }
                if (elem) {
                  this.empty().append(value);
                }
              },
              null,
              value,
              arguments.length,
            );
          },
          replaceWith: function () {
            var ignored = [];
            return domManip(
              this,
              arguments,
              function (elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                  jQuery.cleanData(getAll(this));
                  if (parent) {
                    parent.replaceChild(elem, this);
                  }
                }
              },
              ignored,
            );
          },
        });
        jQuery.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (name, original) {
            jQuery.fn[name] = function (selector) {
              var elems,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;
              for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
              }
              return this.pushStack(ret);
            };
          },
        );
        var rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i');
        var getStyles = function (elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function (elem, options, callback) {
          var ret,
            name,
            old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join('|'), 'i');
        (function () {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText =
              'position:absolute;left:-11111px;width:60px;' + 'margin-top:1px;padding:0;border:0';
            div.style.cssText =
              'position:relative;display:block;box-sizing:border-box;overflow:scroll;' +
              'margin:auto;border:1px;padding:1px;' +
              'width:60%;top:1%';
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== '1%';
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = '60%';
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = 'absolute';
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }

          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }

          var pixelPositionVal,
            boxSizingReliableVal,
            scrollboxSizeVal,
            pixelBoxStylesVal,
            reliableTrDimensionsVal,
            reliableMarginLeftVal,
            container = document.createElement('div'),
            div = document.createElement('div');
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = 'content-box';
          div.cloneNode(true).style.backgroundClip = '';
          support.clearCloneStyle = div.style.backgroundClip === 'content-box';
          jQuery.extend(support, {
            boxSizingReliable: function () {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function () {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function () {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function () {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function () {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function () {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document.createElement('table');
                tr = document.createElement('tr');
                trChild = document.createElement('div');
                table.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate';
                tr.style.cssText = 'border:1px solid';
                tr.style.height = '1px';
                trChild.style.height = '9px';
                trChild.style.display = 'block';
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window.getComputedStyle(tr);
                reliableTrDimensionsVal =
                  parseInt(trStyle.height, 10) +
                  parseInt(trStyle.borderTopWidth, 10) +
                  parseInt(trStyle.borderBottomWidth, 10) ===
                  tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            },
          });
        })();

        function curCSS(elem, name, computed) {
          var width,
            minWidth,
            maxWidth,
            ret,
            style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === '' && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== undefined ? ret + '' : ret;
        }

        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function () {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            },
          };
        }

        var cssPrefixes = ['Webkit', 'Moz', 'ms'],
          emptyStyle = document.createElement('div').style,
          vendorProps = {};

        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }

        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return (vendorProps[name] = vendorPropName(name) || name);
        }

        var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
          rcustomProp = /^--/,
          cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' },
          cssNormalTransform = {
            letterSpacing: '0',
            fontWeight: '400',
          };

        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || 'px') : value;
        }

        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === 'width' ? 1 : 0,
            extra = 0,
            delta = 0;
          if (box === (isBorderBox ? 'border' : 'content')) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === 'margin') {
              delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
              if (box !== 'padding') {
                delta += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
              } else {
                extra += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
              }
            } else {
              if (box === 'content') {
                delta -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
              }
              if (box !== 'margin') {
                delta -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta +=
              Math.max(
                0,
                Math.ceil(
                  elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
                  computedVal -
                  delta -
                  extra -
                  0.5,
                ),
              ) || 0;
          }
          return delta;
        }

        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem),
            boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox =
              boxSizingNeeded && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
            valueIsBorderBox = isBorderBox,
            val = curCSS(elem, dimension, styles),
            offsetProp = 'offset' + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = 'auto';
          }
          if (
            ((!support.boxSizingReliable() && isBorderBox) ||
              (!support.reliableTrDimensions() && nodeName(elem, 'tr')) ||
              val === 'auto' ||
              (!parseFloat(val) && jQuery.css(elem, 'display', false, styles) === 'inline')) &&
            elem.getClientRects().length
          ) {
            isBorderBox = jQuery.css(elem, 'boxSizing', false, styles) === 'border-box';
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return (
            val +
            boxModelAdjustment(
              elem,
              dimension,
              extra || (isBorderBox ? 'border' : 'content'),
              valueIsBorderBox,
              styles,
              val,
            ) +
            'px'
          );
        }

        jQuery.extend({
          cssHooks: {
            opacity: {
              get: function (elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, 'opacity');
                  return ret === '' ? '1' : ret;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true,
          },
          cssProps: {},
          style: function (elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret,
              type,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name),
              style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
              type = typeof value;
              if (type === 'string' && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = 'number';
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === 'number' && !isCustomProp) {
                value += (ret && ret[3]) || (jQuery.cssNumber[origName] ? '' : 'px');
              }
              if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
                style[name] = 'inherit';
              }
              if (
                !hooks ||
                !('set' in hooks) ||
                (value = hooks.set(elem, value, extra)) !== undefined
              ) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                return ret;
              }
              return style[name];
            }
          },
          css: function (elem, name, extra, styles) {
            var val,
              num,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && 'get' in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
              val = curCSS(elem, name, styles);
            }
            if (val === 'normal' && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === '' || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          },
        });
        jQuery.each(['height', 'width'], function (_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function (elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, 'display')) &&
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width)
                  ? swap(elem, cssShow, function () {
                    return getWidthOrHeight(elem, dimension, extra);
                  })
                  : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function (elem, value, extra) {
              var matches,
                styles = getStyles(elem),
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === 'absolute',
                boxSizingNeeded = scrollboxSizeBuggy || extra,
                isBorderBox =
                  boxSizingNeeded && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
                subtract = extra
                  ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles)
                  : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
                  parseFloat(styles[dimension]) -
                  boxModelAdjustment(elem, dimension, 'border', false, styles) -
                  0.5,
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || 'px') !== 'px') {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            },
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function (elem, computed) {
            if (computed) {
              return (
                (parseFloat(curCSS(elem, 'marginLeft')) ||
                  elem.getBoundingClientRect().left -
                  swap(elem, { marginLeft: 0 }, function () {
                    return elem.getBoundingClientRect().left;
                  })) + 'px'
              );
            }
          },
        );
        jQuery.each(
          {
            margin: '',
            padding: '',
            border: 'Width',
          },
          function (prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
              expand: function (value) {
                var i = 0,
                  expanded = {},
                  parts = typeof value === 'string' ? value.split(' ') : [value];
                for (; i < 4; i++) {
                  expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
              },
            };
            if (prefix !== 'margin') {
              jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
          },
        );
        jQuery.fn.extend({
          css: function (name, value) {
            return access(
              this,
              function (elem, name, value) {
                var styles,
                  len,
                  map = {},
                  i = 0;
                if (Array.isArray(name)) {
                  styles = getStyles(elem);
                  len = name.length;
                  for (; i < len; i++) {
                    map[name[i]] = jQuery.css(elem, name[i], false, styles);
                  }
                  return map;
                }
                return value !== undefined
                  ? jQuery.style(elem, name, value)
                  : jQuery.css(elem, name);
              },
              name,
              value,
              arguments.length > 1,
            );
          },
        });

        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }

        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
          },
          cur: function () {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function (percent) {
            var eased,
              hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration,
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          },
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function (tween) {
              var result;
              if (
                tween.elem.nodeType !== 1 ||
                (tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null)
              ) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, '');
              return !result || result === 'auto' ? 0 : result;
            },
            set: function (tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (
                tween.elem.nodeType === 1 &&
                (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)
              ) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            },
          },
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          },
        };
        jQuery.easing = {
          linear: function (p) {
            return p;
          },
          swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: 'swing',
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow,
          inProgress,
          rfxtypes = /^(?:toggle|show|hide)$/,
          rrun = /queueHooks$/;

        function schedule() {
          if (inProgress) {
            if (document.hidden === false && window.requestAnimationFrame) {
              window.requestAnimationFrame(schedule);
            } else {
              window.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }

        function createFxNow() {
          window.setTimeout(function () {
            fxNow = undefined;
          });
          return (fxNow = Date.now());
        }

        function genFx(type, includeWidth) {
          var which,
            i = 0,
            attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs['margin' + which] = attrs['padding' + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }

        function createTween(value, prop, animation) {
          var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners['*']),
            index = 0,
            length = collection.length;
          for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {
              return tween;
            }
          }
        }

        function defaultPrefilter(elem, props, opts) {
          var prop,
            value,
            toggle,
            hooks,
            oldfire,
            propTween,
            restoreDisplay,
            display,
            isBox = 'width' in props || 'height' in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, 'fxshow');
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, 'fx');
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function () {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function () {
              anim.always(function () {
                hooks.unqueued--;
                if (!jQuery.queue(elem, 'fx').length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === 'toggle';
              if (value === (hidden ? 'hide' : 'show')) {
                if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, 'display');
            }
            display = jQuery.css(elem, 'display');
            if (display === 'none') {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, 'display');
                showHide([elem]);
              }
            }
            if (display === 'inline' || (display === 'inline-block' && restoreDisplay != null)) {
              if (jQuery.css(elem, 'float') === 'none') {
                if (!propTween) {
                  anim.done(function () {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === 'none' ? '' : display;
                  }
                }
                style.display = 'inline-block';
              }
            }
          }
          if (opts.overflow) {
            style.overflow = 'hidden';
            anim.always(function () {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ('hidden' in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, 'fxshow', { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function () {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, 'fxshow');
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }

        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && 'expand' in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }

        function Animation(elem, properties, options) {
          var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {
              delete tick.elem;
            }),
            tick = function () {
              if (stopped) {
                return false;
              }
              var currentTime = fxNow || createFxNow(),
                remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                temp = remaining / animation.duration || 0,
                percent = 1 - temp,
                index = 0,
                length = animation.tweens.length;
              for (; index < length; index++) {
                animation.tweens[index].run(percent);
              }
              deferred.notifyWith(elem, [animation, percent, remaining]);
              if (percent < 1 && length) {
                return remaining;
              }
              if (!length) {
                deferred.notifyWith(elem, [animation, 1, 0]);
              }
              deferred.resolveWith(elem, [animation]);
              return false;
            },
            animation = deferred.promise({
              elem: elem,
              props: jQuery.extend({}, properties),
              opts: jQuery.extend(
                true,
                {
                  specialEasing: {},
                  easing: jQuery.easing._default,
                },
                options,
              ),
              originalProperties: properties,
              originalOptions: options,
              startTime: fxNow || createFxNow(),
              duration: options.duration,
              tweens: [],
              createTween: function (prop, end) {
                var tween = jQuery.Tween(
                  elem,
                  animation.opts,
                  prop,
                  end,
                  animation.opts.specialEasing[prop] || animation.opts.easing,
                );
                animation.tweens.push(tween);
                return tween;
              },
              stop: function (gotoEnd) {
                var index = 0,
                  length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                  return this;
                }
                stopped = true;
                for (; index < length; index++) {
                  animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                  deferred.notifyWith(elem, [animation, 1, 0]);
                  deferred.resolveWith(elem, [animation, gotoEnd]);
                } else {
                  deferred.rejectWith(elem, [animation, gotoEnd]);
                }
                return this;
              },
            }),
            props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                  result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation
            .progress(animation.opts.progress)
            .done(animation.opts.done, animation.opts.complete)
            .fail(animation.opts.fail)
            .always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem: elem,
              anim: animation,
              queue: animation.opts.queue,
            }),
          );
          return animation;
        }

        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            '*': [
              function (prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
              },
            ],
          },
          tweener: function (props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ['*'];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop,
              index = 0,
              length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function (callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          },
        });
        jQuery.speed = function (speed, easing, fn) {
          var opt =
            speed && typeof speed === 'object'
              ? jQuery.extend({}, speed)
              : {
                complete: fn || (!fn && easing) || (isFunction(speed) && speed),
                duration: speed,
                easing: (fn && easing) || (easing && !isFunction(easing) && easing),
              };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== 'number') {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = 'fx';
          }
          opt.old = opt.complete;
          opt.complete = function () {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function (speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: to }, speed, easing, callback);
          },
          animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
              optall = jQuery.speed(speed, easing, callback),
              doAnimation = function () {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || dataPriv.get(this, 'finish')) {
                  anim.stop(true);
                }
              };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false
              ? this.each(doAnimation)
              : this.queue(optall.queue, doAnimation);
          },
          stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== 'string') {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = undefined;
            }
            if (clearQueue) {
              this.queue(type || 'fx', []);
            }
            return this.each(function () {
              var dequeue = true,
                index = type != null && type + 'queueHooks',
                timers = jQuery.timers,
                data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--;) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function (type) {
            if (type !== false) {
              type = type || 'fx';
            }
            return this.each(function () {
              var index,
                data = dataPriv.get(this),
                queue = data[type + 'queue'],
                hooks = data[type + 'queueHooks'],
                timers = jQuery.timers,
                length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--;) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          },
        });
        jQuery.each(['toggle', 'show', 'hide'], function (_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === 'boolean'
              ? cssFn.apply(this, arguments)
              : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each(
          {
            slideDown: genFx('show'),
            slideUp: genFx('hide'),
            slideToggle: genFx('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (name, props) {
            jQuery.fn[name] = function (speed, easing, callback) {
              return this.animate(props, speed, easing, callback);
            };
          },
        );
        jQuery.timers = [];
        jQuery.fx.tick = function () {
          var timer,
            i = 0,
            timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = undefined;
        };
        jQuery.fx.timer = function (timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function () {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function () {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400,
        };
        jQuery.fn.delay = function (time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || 'fx';
          return this.queue(type, function (next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function () {
              window.clearTimeout(timeout);
            };
          });
        };
        (function () {
          var input = document.createElement('input'),
            select = document.createElement('select'),
            opt = select.appendChild(document.createElement('option'));
          input.type = 'checkbox';
          support.checkOn = input.value !== '';
          support.optSelected = opt.selected;
          input = document.createElement('input');
          input.value = 't';
          input.type = 'radio';
          support.radioValue = input.value === 't';
        })();
        var boolHook,
          attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function (name) {
            return this.each(function () {
              jQuery.removeAttr(this, name);
            });
          },
        });
        jQuery.extend({
          attr: function (elem, name, value) {
            var ret,
              hooks,
              nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === 'undefined') {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks =
                jQuery.attrHooks[name.toLowerCase()] ||
                (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }
            if (value !== undefined) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
              }
              elem.setAttribute(name, value + '');
              return value;
            }
            if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? undefined : ret;
          },
          attrHooks: {
            type: {
              set: function (elem, value) {
                if (!support.radioValue && value === 'radio' && nodeName(elem, 'input')) {
                  var val = elem.value;
                  elem.setAttribute('type', value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              },
            },
          },
          removeAttr: function (elem, value) {
            var name,
              i = 0,
              attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while ((name = attrNames[i++])) {
                elem.removeAttribute(name);
              }
            }
          },
        });
        boolHook = {
          set: function (elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          },
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function (elem, name, isXML) {
            var ret,
              handle,
              lowercaseName = name.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i,
          rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function (name) {
            return this.each(function () {
              delete this[jQuery.propFix[name] || name];
            });
          },
        });
        jQuery.extend({
          prop: function (elem, name, value) {
            var ret,
              hooks,
              nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
              if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
              }
              return (elem[name] = value);
            }
            if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function (elem) {
                var tabindex = jQuery.find.attr(elem, 'tabindex');
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (
                  rfocusable.test(elem.nodeName) ||
                  (rclickable.test(elem.nodeName) && elem.href)
                ) {
                  return 0;
                }
                return -1;
              },
            },
          },
          propFix: {
            for: 'htmlFor',
            class: 'className',
          },
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function (elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function (elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            },
          };
        }
        jQuery.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            jQuery.propFix[this.toLowerCase()] = this;
          },
        );

        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(' ');
        }

        function getClass(elem) {
          return (elem.getAttribute && elem.getAttribute('class')) || '';
        }

        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === 'string') {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }

        jQuery.fn.extend({
          addClass: function (value) {
            var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;
            if (isFunction(value)) {
              return this.each(function (j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classes = classesToArray(value);
            if (classes.length) {
              while ((elem = this[i++])) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';
                if (cur) {
                  j = 0;
                  while ((clazz = classes[j++])) {
                    if (cur.indexOf(' ' + clazz + ' ') < 0) {
                      cur += clazz + ' ';
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute('class', finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function (value) {
            var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;
            if (isFunction(value)) {
              return this.each(function (j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr('class', '');
            }
            classes = classesToArray(value);
            if (classes.length) {
              while ((elem = this[i++])) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';
                if (cur) {
                  j = 0;
                  while ((clazz = classes[j++])) {
                    while (cur.indexOf(' ' + clazz + ' ') > -1) {
                      cur = cur.replace(' ' + clazz + ' ', ' ');
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute('class', finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function (value, stateVal) {
            var type = typeof value,
              isValidValue = type === 'string' || Array.isArray(value);
            if (typeof stateVal === 'boolean' && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
              return this.each(function (i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
              });
            }
            return this.each(function () {
              var className, i, self, classNames;
              if (isValidValue) {
                i = 0;
                self = jQuery(this);
                classNames = classesToArray(value);
                while ((className = classNames[i++])) {
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === undefined || type === 'boolean') {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, '__className__', className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    'class',
                    className || value === false ? '' : dataPriv.get(this, '__className__') || '',
                  );
                }
              }
            });
          },
          hasClass: function (selector) {
            var className,
              elem,
              i = 0;
            className = ' ' + selector + ' ';
            while ((elem = this[i++])) {
              if (
                elem.nodeType === 1 &&
                (' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1
              ) {
                return true;
              }
            }
            return false;
          },
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function (value) {
            var hooks,
              ret,
              valueIsFunction,
              elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && 'get' in hooks && (ret = hooks.get(elem, 'value')) !== undefined) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === 'string') {
                  return ret.replace(rreturn, '');
                }
                return ret == null ? '' : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function (i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = '';
              } else if (typeof val === 'number') {
                val += '';
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function (value) {
                  return value == null ? '' : value + '';
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
                this.value = val;
              }
            });
          },
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function (elem) {
                var val = jQuery.find.attr(elem, 'value');
                return val != null ? val : stripAndCollapse(jQuery.text(elem));
              },
            },
            select: {
              get: function (elem) {
                var value,
                  option,
                  i,
                  options = elem.options,
                  index = elem.selectedIndex,
                  one = elem.type === 'select-one',
                  values = one ? null : [],
                  max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if (
                    (option.selected || i === index) &&
                    !option.disabled &&
                    (!option.parentNode.disabled || !nodeName(option.parentNode, 'optgroup'))
                  ) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function (elem, value) {
                var optionSet,
                  option,
                  options = elem.options,
                  values = jQuery.makeArray(value),
                  i = options.length;
                while (i--) {
                  option = options[i];
                  if (
                    (option.selected =
                      jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1)
                  ) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              },
            },
          },
        });
        jQuery.each(['radio', 'checkbox'], function () {
          jQuery.valHooks[this] = {
            set: function (elem, value) {
              if (Array.isArray(value)) {
                return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
              }
            },
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
              return elem.getAttribute('value') === null ? 'on' : elem.value;
            };
          }
        });
        support.focusin = 'onfocusin' in window;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
          stopPropagationCallback = function (e) {
            e.stopPropagation();
          };
        jQuery.extend(jQuery.event, {
          trigger: function (event, data, elem, onlyHandlers) {
            var i,
              cur,
              tmp,
              bubbleType,
              ontype,
              handle,
              special,
              lastElement,
              eventPath = [elem || document],
              type = hasOwn.call(event, 'type') ? event.type : event,
              namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : [];
            cur = lastElement = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf('.') > -1) {
              namespaces = type.split('.');
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(':') < 0 && 'on' + type;
            event = event[jQuery.expando]
              ? event
              : new jQuery.Event(type, typeof event === 'object' && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join('.');
            event.rnamespace = event.namespace
              ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null;
            event.result = undefined;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle =
                (dataPriv.get(cur, 'events') || Object.create(null))[event.type] &&
                dataPriv.get(cur, 'handle');
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if (
                (!special._default || special._default.apply(eventPath.pop(), data) === false) &&
                acceptData(elem)
              ) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = undefined;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function (type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
              type: type,
              isSimulated: true,
            });
            jQuery.event.trigger(e, null, elem);
          },
        });
        jQuery.fn.extend({
          trigger: function (type, data) {
            return this.each(function () {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          },
        });
        if (!support.focusin) {
          jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) {
            var handler = function (event) {
              jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
              setup: function () {
                var doc = this.ownerDocument || this.document || this,
                  attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function () {
                var doc = this.ownerDocument || this.document || this,
                  attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              },
            };
          });
        }
        var location = window.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function (data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== 'string') {
            return null;
          }
          try {
            xml = new window.DOMParser().parseFromString(data, 'text/xml');
          } catch (e) {}
          parserErrorElem = xml && xml.getElementsByTagName('parsererror')[0];
          if (!xml || parserErrorElem) {
            jQuery.error(
              'Invalid XML: ' +
              (parserErrorElem
                ? jQuery
                  .map(parserErrorElem.childNodes, function (el) {
                    return el.textContent;
                  })
                  .join('\n')
                : data),
            );
          }
          return xml;
        };
        var rbracket = /\[\]$/,
          rCRLF = /\r?\n/g,
          rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
          rsubmittable = /^(?:input|select|textarea|keygen)/i;

        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function (i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
                  v,
                  traditional,
                  add,
                );
              }
            });
          } else if (!traditional && toType(obj) === 'object') {
            for (name in obj) {
              buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }

        jQuery.param = function (a, traditional) {
          var prefix,
            s = [],
            add = function (key, valueOrFunction) {
              var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
              s[s.length] =
                encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value);
            };
          if (a == null) {
            return '';
          }
          if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
            jQuery.each(a, function () {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join('&');
        };
        jQuery.fn.extend({
          serialize: function () {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var elements = jQuery.prop(this, 'elements');
              return elements ? jQuery.makeArray(elements) : this;
            })
              .filter(function () {
                var type = this.type;
                return (
                  this.name &&
                  !jQuery(this).is(':disabled') &&
                  rsubmittable.test(this.nodeName) &&
                  !rsubmitterTypes.test(type) &&
                  (this.checked || !rcheckableType.test(type))
                );
              })
              .map(function (_i, elem) {
                var val = jQuery(this).val();
                if (val == null) {
                  return null;
                }
                if (Array.isArray(val)) {
                  return jQuery.map(val, function (val) {
                    return { name: elem.name, value: val.replace(rCRLF, '\r\n') };
                  });
                }
                return { name: elem.name, value: val.replace(rCRLF, '\r\n') };
              })
              .get();
          },
        });
        var r20 = /%20/g,
          rhash = /#.*$/,
          rantiCache = /([?&])_=[^&]*/,
          rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          rnoContent = /^(?:GET|HEAD)$/,
          rprotocol = /^\/\//,
          prefilters = {},
          transports = {},
          allTypes = '*/'.concat('*'),
          originAnchor = document.createElement('a');
        originAnchor.href = location.href;

        function addToPrefiltersOrTransports(structure) {
          return function (dataTypeExpression, func) {
            if (typeof dataTypeExpression !== 'string') {
              func = dataTypeExpression;
              dataTypeExpression = '*';
            }
            var dataType,
              i = 0,
              dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while ((dataType = dataTypes[i++])) {
                if (dataType[0] === '+') {
                  dataType = dataType.slice(1) || '*';
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {},
            seekingTransport = structure === transports;

          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (
                typeof dataTypeOrTransport === 'string' &&
                !seekingTransport &&
                !inspected[dataTypeOrTransport]
              ) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }

          return inspect(options.dataTypes[0]) || (!inspected['*'] && inspect('*'));
        }

        function ajaxExtend(target, src) {
          var key,
            deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== undefined) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct,
            type,
            finalDataType,
            firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;
          while (dataTypes[0] === '*') {
            dataTypes.shift();
            if (ct === undefined) {
              ct = s.mimeType || jqXHR.getResponseHeader('Content-Type');
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2,
            current,
            conv,
            tmp,
            prev,
            converters = {},
            dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === '*') {
                current = prev;
              } else if (prev !== '*' && prev !== current) {
                conv = converters[prev + ' ' + current] || converters['* ' + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(' ');
                    if (tmp[1] === current) {
                      conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: 'parsererror',
                        error: conv ? e : 'No conversion from ' + prev + ' to ' + current,
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: 'success', data: response };
        }

        jQuery.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: 'GET',
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': allTypes,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/,
            },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON',
            },
            converters: {
              '* text': String,
              'text html': true,
              'text json': JSON.parse,
              'text xml': jQuery.parseXML,
            },
            flatOptions: {
              url: true,
              context: true,
            },
          },
          ajaxSetup: function (target, settings) {
            return settings
              ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
              : ajaxExtend(jQuery.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function (url, options) {
            if (typeof url === 'object') {
              options = url;
              url = undefined;
            }
            options = options || {};
            var transport,
              cacheURL,
              responseHeadersString,
              responseHeaders,
              timeoutTimer,
              urlAnchor,
              completed,
              fireGlobals,
              i,
              uncached,
              s = jQuery.ajaxSetup({}, options),
              callbackContext = s.context || s,
              globalEventContext =
                s.context && (callbackContext.nodeType || callbackContext.jquery)
                  ? jQuery(callbackContext)
                  : jQuery.event,
              deferred = jQuery.Deferred(),
              completeDeferred = jQuery.Callbacks('once memory'),
              statusCode = s.statusCode || {},
              requestHeaders = {},
              requestHeadersNames = {},
              strAbort = 'canceled',
              jqXHR = {
                readyState: 0,
                getResponseHeader: function (key) {
                  var match;
                  if (completed) {
                    if (!responseHeaders) {
                      responseHeaders = {};
                      while ((match = rheaders.exec(responseHeadersString))) {
                        responseHeaders[match[1].toLowerCase() + ' '] = (
                          responseHeaders[match[1].toLowerCase() + ' '] || []
                        ).concat(match[2]);
                      }
                    }
                    match = responseHeaders[key.toLowerCase() + ' '];
                  }
                  return match == null ? null : match.join(', ');
                },
                getAllResponseHeaders: function () {
                  return completed ? responseHeadersString : null;
                },
                setRequestHeader: function (name, value) {
                  if (completed == null) {
                    name = requestHeadersNames[name.toLowerCase()] =
                      requestHeadersNames[name.toLowerCase()] || name;
                    requestHeaders[name] = value;
                  }
                  return this;
                },
                overrideMimeType: function (type) {
                  if (completed == null) {
                    s.mimeType = type;
                  }
                  return this;
                },
                statusCode: function (map) {
                  var code;
                  if (map) {
                    if (completed) {
                      jqXHR.always(map[jqXHR.status]);
                    } else {
                      for (code in map) {
                        statusCode[code] = [statusCode[code], map[code]];
                      }
                    }
                  }
                  return this;
                },
                abort: function (statusText) {
                  var finalText = statusText || strAbort;
                  if (transport) {
                    transport.abort(finalText);
                  }
                  done(0, finalText);
                  return this;
                },
              };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + '').replace(
              rprotocol,
              location.protocol + '//',
            );
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || '*').toLowerCase().match(rnothtmlwhite) || [''];
            if (s.crossDomain == null) {
              urlAnchor = document.createElement('a');
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain =
                  originAnchor.protocol + '//' + originAnchor.host !==
                  urlAnchor.protocol + '//' + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== 'string') {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger('ajaxStart');
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, '');
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === 'string')) {
                cacheURL += (rquery.test(cacheURL) ? '&' : '?') + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, '$1');
                uncached = (rquery.test(cacheURL) ? '&' : '?') + '_=' + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (
              s.data &&
              s.processData &&
              (s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0
            ) {
              s.data = s.data.replace(r20, '+');
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL]);
              }
            }
            if ((s.data && s.hasContent && s.contentType !== false) || options.contentType) {
              jqXHR.setRequestHeader('Content-Type', s.contentType);
            }
            jqXHR.setRequestHeader(
              'Accept',
              s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                ? s.accepts[s.dataTypes[0]] +
                (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
                : s.accepts['*'],
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (
              s.beforeSend &&
              (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)
            ) {
              return jqXHR.abort();
            }
            strAbort = 'abort';
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, 'No Transport');
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger('ajaxSend', [jqXHR, s]);
              }
              if (completed) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window.setTimeout(function () {
                  jqXHR.abort('timeout');
                }, s.timeout);
              }
              try {
                completed = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed) {
                  throw e;
                }
                done(-1, e);
              }
            }

            function done(status, nativeStatusText, responses, headers) {
              var isSuccess,
                success,
                error,
                response,
                modified,
                statusText = nativeStatusText;
              if (completed) {
                return;
              }
              completed = true;
              if (timeoutTimer) {
                window.clearTimeout(timeoutTimer);
              }
              transport = undefined;
              responseHeadersString = headers || '';
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = (status >= 200 && status < 300) || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (
                !isSuccess &&
                jQuery.inArray('script', s.dataTypes) > -1 &&
                jQuery.inArray('json', s.dataTypes) < 0
              ) {
                s.converters['text script'] = function () {};
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader('Last-Modified');
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader('etag');
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === 'HEAD') {
                  statusText = 'nocontent';
                } else if (status === 304) {
                  statusText = 'notmodified';
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = 'error';
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + '';
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = undefined;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [
                  jqXHR,
                  s,
                  isSuccess ? success : error,
                ]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger('ajaxComplete', [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger('ajaxStop');
                }
              }
            }

            return jqXHR;
          },
          getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, 'json');
          },
          getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, 'script');
          },
        });
        jQuery.each(['get', 'post'], function (_i, method) {
          jQuery[method] = function (url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = undefined;
            }
            return jQuery.ajax(
              jQuery.extend(
                {
                  url: url,
                  type: method,
                  dataType: type,
                  data: data,
                  success: callback,
                },
                jQuery.isPlainObject(url) && url,
              ),
            );
          };
        });
        jQuery.ajaxPrefilter(function (s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === 'content-type') {
              s.contentType = s.headers[i] || '';
            }
          }
        });
        jQuery._evalUrl = function (url, options, doc) {
          return jQuery.ajax({
            url: url,
            type: 'GET',
            dataType: 'script',
            cache: true,
            async: false,
            global: false,
            converters: {
              'text script': function () {},
            },
            dataFilter: function (response) {
              jQuery.globalEval(response, options, doc);
            },
          });
        };
        jQuery.fn.extend({
          wrapAll: function (html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap
                .map(function () {
                  var elem = this;
                  while (elem.firstElementChild) {
                    elem = elem.firstElementChild;
                  }
                  return elem;
                })
                .append(this);
            }
            return this;
          },
          wrapInner: function (html) {
            if (isFunction(html)) {
              return this.each(function (i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function () {
              var self = jQuery(this),
                contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function (html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function (i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function (selector) {
            this.parent(selector)
              .not('body')
              .each(function () {
                jQuery(this).replaceWith(this.childNodes);
              });
            return this;
          },
        });
        jQuery.expr.pseudos.hidden = function (elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function (elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function () {
          try {
            return new window.XMLHttpRequest();
          } catch (e) {}
        };
        var xhrSuccessStatus = {
            0: 200,
            1223: 204,
          },
          xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && 'withCredentials' in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function (options) {
          var callback, errorCallback;
          if (support.cors || (xhrSupported && !options.crossDomain)) {
            return {
              send: function (headers, complete) {
                var i,
                  xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password,
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers['X-Requested-With']) {
                  headers['X-Requested-With'] = 'XMLHttpRequest';
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function (type) {
                  return function () {
                    if (callback) {
                      callback =
                        errorCallback =
                          xhr.onload =
                            xhr.onerror =
                              xhr.onabort =
                                xhr.ontimeout =
                                  xhr.onreadystatechange =
                                    null;
                      if (type === 'abort') {
                        xhr.abort();
                      } else if (type === 'error') {
                        if (typeof xhr.status !== 'number') {
                          complete(0, 'error');
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          (xhr.responseType || 'text') !== 'text' ||
                          typeof xhr.responseText !== 'string'
                            ? { binary: xhr.response }
                            : { text: xhr.responseText },
                          xhr.getAllResponseHeaders(),
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback('error');
                if (xhr.onabort !== undefined) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                      window.setTimeout(function () {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback('abort');
                try {
                  xhr.send((options.hasContent && options.data) || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function () {
                if (callback) {
                  callback();
                }
              },
            };
          }
        });
        jQuery.ajaxPrefilter(function (s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, ' +
              'application/ecmascript, application/x-ecmascript',
          },
          contents: {
            script: /\b(?:java|ecma)script\b/,
          },
          converters: {
            'text script': function (text) {
              jQuery.globalEval(text);
              return text;
            },
          },
        });
        jQuery.ajaxPrefilter('script', function (s) {
          if (s.cache === undefined) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = 'GET';
          }
        });
        jQuery.ajaxTransport('script', function (s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function (_, complete) {
                script = jQuery('<script>')
                  .attr(s.scriptAttrs || {})
                  .prop({ charset: s.scriptCharset, src: s.url })
                  .on(
                    'load error',
                    (callback = function (evt) {
                      script.remove();
                      callback = null;
                      if (evt) {
                        complete(evt.type === 'error' ? 404 : 200, evt.type);
                      }
                    }),
                  );
                document.head.appendChild(script[0]);
              },
              abort: function () {
                if (callback) {
                  callback();
                }
              },
            };
          }
        });
        var oldCallbacks = [],
          rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function () {
            var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce.guid++;
            this[callback] = true;
            return callback;
          },
        });
        jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
          var callbackName,
            overwritten,
            responseContainer,
            jsonProp =
              s.jsonp !== false &&
              (rjsonp.test(s.url)
                ? 'url'
                : typeof s.data === 'string' &&
                (s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                rjsonp.test(s.data) &&
                'data');
          if (jsonProp || s.dataTypes[0] === 'jsonp') {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
              ? s.jsonpCallback()
              : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName;
            }
            s.converters['script json'] = function () {
              if (!responseContainer) {
                jQuery.error(callbackName + ' was not called');
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = 'json';
            overwritten = window[callbackName];
            window[callbackName] = function () {
              responseContainer = arguments;
            };
            jqXHR.always(function () {
              if (overwritten === undefined) {
                jQuery(window).removeProp(callbackName);
              } else {
                window[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = undefined;
            });
            return 'script';
          }
        });
        support.createHTMLDocument = (function () {
          var body = document.implementation.createHTMLDocument('').body;
          body.innerHTML = '<form></form><form></form>';
          return body.childNodes.length === 2;
        })();
        jQuery.parseHTML = function (data, context, keepScripts) {
          if (typeof data !== 'string') {
            return [];
          }
          if (typeof context === 'boolean') {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document.implementation.createHTMLDocument('');
              base = context.createElement('base');
              base.href = document.location.href;
              context.head.appendChild(base);
            } else {
              context = document;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function (url, params, callback) {
          var selector,
            type,
            response,
            self = this,
            off = url.indexOf(' ');
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = undefined;
          } else if (params && typeof params === 'object') {
            type = 'POST';
          }
          if (self.length > 0) {
            jQuery
              .ajax({
                url: url,
                type: type || 'GET',
                dataType: 'html',
                data: params,
              })
              .done(function (responseText) {
                response = arguments;
                self.html(
                  selector
                    ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector)
                    : responseText,
                );
              })
              .always(
                callback &&
                function (jqXHR, status) {
                  self.each(function () {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                  });
                },
              );
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function (elem) {
          return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function (elem, options, i) {
            var curPosition,
              curLeft,
              curCSSTop,
              curTop,
              curOffset,
              curCSSLeft,
              calculatePosition,
              position = jQuery.css(elem, 'position'),
              curElem = jQuery(elem),
              props = {};
            if (position === 'static') {
              elem.style.position = 'relative';
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, 'top');
            curCSSLeft = jQuery.css(elem, 'left');
            calculatePosition =
              (position === 'absolute' || position === 'fixed') &&
              (curCSSTop + curCSSLeft).indexOf('auto') > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ('using' in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          },
        };
        jQuery.fn.extend({
          offset: function (options) {
            if (arguments.length) {
              return options === undefined
                ? this
                : this.each(function (i) {
                  jQuery.offset.setOffset(this, options, i);
                });
            }
            var rect,
              win,
              elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset,
            };
          },
          position: function () {
            if (!this[0]) {
              return;
            }
            var offsetParent,
              offset,
              doc,
              elem = this[0],
              parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, 'position') === 'fixed') {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (
                offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                jQuery.css(offsetParent, 'position') === 'static'
                ) {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, 'borderTopWidth', true);
                parentOffset.left += jQuery.css(offsetParent, 'borderLeftWidth', true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
              left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true),
            };
          },
          offsetParent: function () {
            return this.map(function () {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, 'position') === 'static') {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          },
        });
        jQuery.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (method, prop) {
            var top = 'pageYOffset' === prop;
            jQuery.fn[method] = function (val) {
              return access(
                this,
                function (elem, method, val) {
                  var win;
                  if (isWindow(elem)) {
                    win = elem;
                  } else if (elem.nodeType === 9) {
                    win = elem.defaultView;
                  }
                  if (val === undefined) {
                    return win ? win[prop] : elem[method];
                  }
                  if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                  } else {
                    elem[method] = val;
                  }
                },
                method,
                val,
                arguments.length,
              );
            };
          },
        );
        jQuery.each(['top', 'left'], function (_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed;
            }
          });
        });
        jQuery.each({ Height: 'height', Width: 'width' }, function (name, type) {
          jQuery.each(
            {
              padding: 'inner' + name,
              content: type,
              '': 'outer' + name,
            },
            function (defaultExtra, funcName) {
              jQuery.fn[funcName] = function (margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean'),
                  extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border');
                return access(
                  this,
                  function (elem, type, value) {
                    var doc;
                    if (isWindow(elem)) {
                      return funcName.indexOf('outer') === 0
                        ? elem['inner' + name]
                        : elem.document.documentElement['client' + name];
                    }
                    if (elem.nodeType === 9) {
                      doc = elem.documentElement;
                      return Math.max(
                        elem.body['scroll' + name],
                        doc['scroll' + name],
                        elem.body['offset' + name],
                        doc['offset' + name],
                        doc['client' + name],
                      );
                    }
                    return value === undefined
                      ? jQuery.css(elem, type, extra)
                      : jQuery.style(elem, type, value, extra);
                  },
                  type,
                  chainable ? margin : undefined,
                  chainable,
                );
              };
            },
          );
        });
        jQuery.each(
          ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
          function (_i, type) {
            jQuery.fn[type] = function (fn) {
              return this.on(type, fn);
            };
          },
        );
        jQuery.fn.extend({
          bind: function (types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function (types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function (selector, types, fn) {
            return arguments.length === 1
              ? this.off(selector, '**')
              : this.off(types, selector || '**', fn);
          },
          hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          },
        });
        jQuery.each(
          (
            'blur focus focusin focusout resize scroll click dblclick ' +
            'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
            'change select submit keydown keypress keyup contextmenu'
          ).split(' '),
          function (_i, name) {
            jQuery.fn[name] = function (data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          },
        );
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function (fn, context) {
          var tmp, args, proxy;
          if (typeof context === 'string') {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return undefined;
          }
          args = slice.call(arguments, 2);
          proxy = function () {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function (hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function (obj) {
          var type = jQuery.type(obj);
          return (type === 'number' || type === 'string') && !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function (text) {
          return text == null ? '' : (text + '').replace(rtrim, '');
        };
        var _jQuery = window.jQuery,
          _$ = window.$;
        jQuery.noConflict = function (deep) {
          if (window.$ === jQuery) {
            window.$ = _$;
          }
          if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === 'undefined') {
          window.jQuery = window.$ = jQuery;
        }
        return jQuery;
      });
    })(jquery);
    return jquery.exports;
  }

  (function (module, exports) {
    (function (factory) {
      {
        module.exports = factory(requireJquery());
      }
    })(function ($) {
      $.minicolors = {
        defaults: {
          animationSpeed: 50,
          animationEasing: 'swing',
          change: null,
          changeDelay: 0,
          control: 'hue',
          dataUris: true,
          defaultValue: '',
          hide: null,
          hideSpeed: 100,
          inline: false,
          letterCase: 'lowercase',
          opacity: false,
          position: 'bottom left',
          show: null,
          showSpeed: 100,
          theme: 'default',
        },
      };
      $.extend($.fn, {
        minicolors: function (method, data) {
          switch (method) {
            case 'destroy':
              $(this).each(function () {
                destroy($(this));
              });
              return $(this);
            case 'hide':
              hide();
              return $(this);
            case 'opacity':
              if (data === undefined) {
                return $(this).attr('data-opacity');
              } else {
                $(this).each(function () {
                  updateFromInput($(this).attr('data-opacity', data));
                });
              }
              return $(this);
            case 'rgbObject':
              return rgbObject($(this));
            case 'rgbString':
            case 'rgbaString':
              return rgbString($(this), method === 'rgbaString');
            case 'settings':
              if (data === undefined) {
                return $(this).data('minicolors-settings');
              } else {
                $(this).each(function () {
                  var settings = $(this).data('minicolors-settings') || {};
                  destroy($(this));
                  $(this).minicolors($.extend(true, settings, data));
                });
              }
              return $(this);
            case 'show':
              show($(this).eq(0));
              return $(this);
            case 'value':
              if (data === undefined) {
                return $(this).val();
              } else {
                $(this).each(function () {
                  updateFromInput($(this).val(data));
                });
              }
              return $(this);
            default:
              if (method !== 'create') data = method;
              $(this).each(function () {
                init($(this), data);
              });
              return $(this);
          }
        },
      });

      function init(input, settings) {
        var minicolors = $('<div class="minicolors" />'),
          defaults = $.minicolors.defaults;
        if (input.data('minicolors-initialized')) return;
        settings = $.extend(true, {}, defaults, settings);
        minicolors
          .addClass('minicolors-theme-' + settings.theme)
          .toggleClass('minicolors-with-opacity', settings.opacity)
          .toggleClass('minicolors-no-data-uris', settings.dataUris !== true);
        if (settings.position !== undefined) {
          $.each(settings.position.split(' '), function () {
            minicolors.addClass('minicolors-position-' + this);
          });
        }
        input
          .addClass('minicolors-input')
          .data('minicolors-initialized', false)
          .data('minicolors-settings', settings)
          .prop('size', 7)
          .wrap(minicolors)
          .after(
            '<div class="minicolors-panel minicolors-slider-' +
            settings.control +
            '">' +
            '<div class="minicolors-slider minicolors-sprite">' +
            '<div class="minicolors-picker"></div>' +
            '</div>' +
            '<div class="minicolors-opacity-slider minicolors-sprite">' +
            '<div class="minicolors-picker"></div>' +
            '</div>' +
            '<div class="minicolors-grid minicolors-sprite">' +
            '<div class="minicolors-grid-inner"></div>' +
            '<div class="minicolors-picker"><div></div></div>' +
            '</div>' +
            '</div>',
          );
        if (!settings.inline) {
          input.after(
            '<span class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></span>',
          );
          input.next('.minicolors-swatch').on('click', function (event) {
            event.preventDefault();
            input.focus();
          });
        }
        input
          .parent()
          .find('.minicolors-panel')
          .on('selectstart', function () {
            return false;
          })
          .end();
        if (settings.inline) input.parent().addClass('minicolors-inline');
        updateFromInput(input, false);
        input.data('minicolors-initialized', true);
      }

      function destroy(input) {
        var minicolors = input.parent();
        input
          .removeData('minicolors-initialized')
          .removeData('minicolors-settings')
          .removeProp('size')
          .removeClass('minicolors-input');
        minicolors.before(input).remove();
      }

      function show(input) {
        var minicolors = input.parent(),
          panel = minicolors.find('.minicolors-panel'),
          settings = input.data('minicolors-settings');
        if (
          !input.data('minicolors-initialized') ||
          input.prop('disabled') ||
          minicolors.hasClass('minicolors-inline') ||
          minicolors.hasClass('minicolors-focus')
        ) {
          return;
        }
        hide();
        minicolors.addClass('minicolors-focus');
        panel.stop(true, true).fadeIn(settings.showSpeed, function () {
          if (settings.show) settings.show.call(input.get(0));
        });
      }

      function hide() {
        $('.minicolors-focus').each(function () {
          var minicolors = $(this),
            input = minicolors.find('.minicolors-input'),
            panel = minicolors.find('.minicolors-panel'),
            settings = input.data('minicolors-settings');
          panel.fadeOut(settings.hideSpeed, function () {
            if (settings.hide) settings.hide.call(input.get(0));
            minicolors.removeClass('minicolors-focus');
          });
        });
      }

      function move(target, event, animate) {
        var input = target.parents('.minicolors').find('.minicolors-input'),
          settings = input.data('minicolors-settings'),
          picker = target.find('[class$=-picker]'),
          offsetX = target.offset().left,
          offsetY = target.offset().top,
          x = Math.round(event.pageX - offsetX),
          y = Math.round(event.pageY - offsetY),
          duration = animate ? settings.animationSpeed : 0,
          wx,
          wy,
          r,
          phi;
        if (event.originalEvent.changedTouches) {
          x = event.originalEvent.changedTouches[0].pageX - offsetX;
          y = event.originalEvent.changedTouches[0].pageY - offsetY;
        }
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > target.width()) x = target.width();
        if (y > target.height()) y = target.height();
        if (
          target.parent().is('.minicolors-slider-wheel') &&
          picker.parent().is('.minicolors-grid')
        ) {
          wx = 75 - x;
          wy = 75 - y;
          r = Math.sqrt(wx * wx + wy * wy);
          phi = Math.atan2(wy, wx);
          if (phi < 0) phi += Math.PI * 2;
          if (r > 75) {
            r = 75;
            x = 75 - 75 * Math.cos(phi);
            y = 75 - 75 * Math.sin(phi);
          }
          x = Math.round(x);
          y = Math.round(y);
        }
        if (target.is('.minicolors-grid')) {
          picker.stop(true).animate(
            {
              top: y + 'px',
              left: x + 'px',
            },
            duration,
            settings.animationEasing,
            function () {
              updateFromControl(input, target);
            },
          );
        } else {
          picker.stop(true).animate(
            {
              top: y + 'px',
            },
            duration,
            settings.animationEasing,
            function () {
              updateFromControl(input, target);
            },
          );
        }
      }

      function updateFromControl(input, target) {
        function getCoords(picker, container) {
          var left, top;
          if (!picker.length || !container) return null;
          left = picker.offset().left;
          top = picker.offset().top;
          return {
            x: left - container.offset().left + picker.outerWidth() / 2,
            y: top - container.offset().top + picker.outerHeight() / 2,
          };
        }

        var hue,
          saturation,
          brightness,
          x,
          y,
          r,
          phi,
          hex = input.val(),
          opacity = input.attr('data-opacity'),
          minicolors = input.parent(),
          settings = input.data('minicolors-settings'),
          swatch = minicolors.find('.minicolors-swatch'),
          grid = minicolors.find('.minicolors-grid'),
          slider = minicolors.find('.minicolors-slider'),
          opacitySlider = minicolors.find('.minicolors-opacity-slider'),
          gridPicker = grid.find('[class$=-picker]'),
          sliderPicker = slider.find('[class$=-picker]'),
          opacityPicker = opacitySlider.find('[class$=-picker]'),
          gridPos = getCoords(gridPicker, grid),
          sliderPos = getCoords(sliderPicker, slider),
          opacityPos = getCoords(opacityPicker, opacitySlider);
        if (target.is('.minicolors-grid, .minicolors-slider')) {
          switch (settings.control) {
            case 'wheel':
              x = grid.width() / 2 - gridPos.x;
              y = grid.height() / 2 - gridPos.y;
              r = Math.sqrt(x * x + y * y);
              phi = Math.atan2(y, x);
              if (phi < 0) phi += Math.PI * 2;
              if (r > 75) {
                r = 75;
                gridPos.x = 69 - 75 * Math.cos(phi);
                gridPos.y = 69 - 75 * Math.sin(phi);
              }
              saturation = keepWithin(r / 0.75, 0, 100);
              hue = keepWithin((phi * 180) / Math.PI, 0, 360);
              brightness = keepWithin(
                100 - Math.floor(sliderPos.y * (100 / slider.height())),
                0,
                100,
              );
              hex = hsb2hex({
                h: hue,
                s: saturation,
                b: brightness,
              });
              slider.css('backgroundColor', hsb2hex({ h: hue, s: saturation, b: 100 }));
              break;
            case 'saturation':
              hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
              saturation = keepWithin(
                100 - Math.floor(sliderPos.y * (100 / slider.height())),
                0,
                100,
              );
              brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
              hex = hsb2hex({
                h: hue,
                s: saturation,
                b: brightness,
              });
              slider.css('backgroundColor', hsb2hex({ h: hue, s: 100, b: brightness }));
              minicolors.find('.minicolors-grid-inner').css('opacity', saturation / 100);
              break;
            case 'brightness':
              hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
              saturation = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
              brightness = keepWithin(
                100 - Math.floor(sliderPos.y * (100 / slider.height())),
                0,
                100,
              );
              hex = hsb2hex({
                h: hue,
                s: saturation,
                b: brightness,
              });
              slider.css('backgroundColor', hsb2hex({ h: hue, s: saturation, b: 100 }));
              minicolors.find('.minicolors-grid-inner').css('opacity', 1 - brightness / 100);
              break;
            default:
              hue = keepWithin(360 - parseInt(sliderPos.y * (360 / slider.height()), 10), 0, 360);
              saturation = keepWithin(Math.floor(gridPos.x * (100 / grid.width())), 0, 100);
              brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
              hex = hsb2hex({
                h: hue,
                s: saturation,
                b: brightness,
              });
              grid.css('backgroundColor', hsb2hex({ h: hue, s: 100, b: 100 }));
              break;
          }
          input.val(convertCase(hex, settings.letterCase));
        }
        if (target.is('.minicolors-opacity-slider')) {
          if (settings.opacity) {
            opacity = parseFloat(1 - opacityPos.y / opacitySlider.height()).toFixed(2);
          } else {
            opacity = 1;
          }
          if (settings.opacity) input.attr('data-opacity', opacity);
        }
        swatch.find('SPAN').css({
          backgroundColor: hex,
          opacity: opacity,
        });
        doChange(input, hex, opacity);
      }

      function updateFromInput(input, preserveInputValue) {
        var hex,
          hsb,
          opacity,
          x,
          y,
          r,
          phi,
          minicolors = input.parent(),
          settings = input.data('minicolors-settings'),
          swatch = minicolors.find('.minicolors-swatch'),
          grid = minicolors.find('.minicolors-grid'),
          slider = minicolors.find('.minicolors-slider'),
          opacitySlider = minicolors.find('.minicolors-opacity-slider'),
          gridPicker = grid.find('[class$=-picker]'),
          sliderPicker = slider.find('[class$=-picker]'),
          opacityPicker = opacitySlider.find('[class$=-picker]');
        hex = convertCase(parseHex(input.val(), true), settings.letterCase);
        if (!hex) {
          hex = convertCase(parseHex(settings.defaultValue, true), settings.letterCase);
        }
        hsb = hex2hsb(hex);
        if (!preserveInputValue) input.val(hex);
        if (settings.opacity) {
          opacity =
            input.attr('data-opacity') === ''
              ? 1
              : keepWithin(parseFloat(input.attr('data-opacity')).toFixed(2), 0, 1);
          if (isNaN(opacity)) opacity = 1;
          input.attr('data-opacity', opacity);
          swatch.find('SPAN').css('opacity', opacity);
          y = keepWithin(
            opacitySlider.height() - opacitySlider.height() * opacity,
            0,
            opacitySlider.height(),
          );
          opacityPicker.css('top', y + 'px');
        }
        swatch.find('SPAN').css('backgroundColor', hex);
        switch (settings.control) {
          case 'wheel':
            r = keepWithin(Math.ceil(hsb.s * 0.75), 0, grid.height() / 2);
            phi = (hsb.h * Math.PI) / 180;
            x = keepWithin(75 - Math.cos(phi) * r, 0, grid.width());
            y = keepWithin(75 - Math.sin(phi) * r, 0, grid.height());
            gridPicker.css({
              top: y + 'px',
              left: x + 'px',
            });
            y = 150 - hsb.b / (100 / grid.height());
            if (hex === '') y = 0;
            sliderPicker.css('top', y + 'px');
            slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: hsb.s, b: 100 }));
            break;
          case 'saturation':
            x = keepWithin((5 * hsb.h) / 12, 0, 150);
            y = keepWithin(
              grid.height() - Math.ceil(hsb.b / (100 / grid.height())),
              0,
              grid.height(),
            );
            gridPicker.css({
              top: y + 'px',
              left: x + 'px',
            });
            y = keepWithin(slider.height() - hsb.s * (slider.height() / 100), 0, slider.height());
            sliderPicker.css('top', y + 'px');
            slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: 100, b: hsb.b }));
            minicolors.find('.minicolors-grid-inner').css('opacity', hsb.s / 100);
            break;
          case 'brightness':
            x = keepWithin((5 * hsb.h) / 12, 0, 150);
            y = keepWithin(
              grid.height() - Math.ceil(hsb.s / (100 / grid.height())),
              0,
              grid.height(),
            );
            gridPicker.css({
              top: y + 'px',
              left: x + 'px',
            });
            y = keepWithin(slider.height() - hsb.b * (slider.height() / 100), 0, slider.height());
            sliderPicker.css('top', y + 'px');
            slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: hsb.s, b: 100 }));
            minicolors.find('.minicolors-grid-inner').css('opacity', 1 - hsb.b / 100);
            break;
          default:
            x = keepWithin(Math.ceil(hsb.s / (100 / grid.width())), 0, grid.width());
            y = keepWithin(
              grid.height() - Math.ceil(hsb.b / (100 / grid.height())),
              0,
              grid.height(),
            );
            gridPicker.css({
              top: y + 'px',
              left: x + 'px',
            });
            y = keepWithin(slider.height() - hsb.h / (360 / slider.height()), 0, slider.height());
            sliderPicker.css('top', y + 'px');
            grid.css('backgroundColor', hsb2hex({ h: hsb.h, s: 100, b: 100 }));
            break;
        }
        if (input.data('minicolors-initialized')) {
          doChange(input, hex, opacity);
        }
      }

      function doChange(input, hex, opacity) {
        var settings = input.data('minicolors-settings'),
          lastChange = input.data('minicolors-lastChange');
        if (!lastChange || lastChange.hex !== hex || lastChange.opacity !== opacity) {
          input.data('minicolors-lastChange', {
            hex: hex,
            opacity: opacity,
          });
          if (settings.change) {
            if (settings.changeDelay) {
              clearTimeout(input.data('minicolors-changeTimeout'));
              input.data(
                'minicolors-changeTimeout',
                setTimeout(function () {
                  settings.change.call(input.get(0), hex, opacity);
                }, settings.changeDelay),
              );
            } else {
              settings.change.call(input.get(0), hex, opacity);
            }
          }
          input.trigger('change').trigger('input');
        }
      }

      function rgbObject(input) {
        var hex = parseHex($(input).val(), true),
          rgb = hex2rgb(hex),
          opacity = $(input).attr('data-opacity');
        if (!rgb) return null;
        if (opacity !== undefined) $.extend(rgb, { a: parseFloat(opacity) });
        return rgb;
      }

      function rgbString(input, alpha) {
        var hex = parseHex($(input).val(), true),
          rgb = hex2rgb(hex),
          opacity = $(input).attr('data-opacity');
        if (!rgb) return null;
        if (opacity === undefined) opacity = 1;
        if (alpha) {
          return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + parseFloat(opacity) + ')';
        } else {
          return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
        }
      }

      function convertCase(string, letterCase) {
        return letterCase === 'uppercase' ? string.toUpperCase() : string.toLowerCase();
      }

      function parseHex(string, expand) {
        string = string.replace(/[^A-F0-9]/gi, '');
        if (string.length !== 3 && string.length !== 6) return '';
        if (string.length === 3 && expand) {
          string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
        }
        return '#' + string;
      }

      function keepWithin(value, min, max) {
        if (value < min) value = min;
        if (value > max) value = max;
        return value;
      }

      function hsb2rgb(hsb) {
        var rgb = {};
        var h = Math.round(hsb.h);
        var s = Math.round((hsb.s * 255) / 100);
        var v = Math.round((hsb.b * 255) / 100);
        if (s === 0) {
          rgb.r = rgb.g = rgb.b = v;
        } else {
          var t1 = v;
          var t2 = ((255 - s) * v) / 255;
          var t3 = ((t1 - t2) * (h % 60)) / 60;
          if (h === 360) h = 0;
          if (h < 60) {
            rgb.r = t1;
            rgb.b = t2;
            rgb.g = t2 + t3;
          } else if (h < 120) {
            rgb.g = t1;
            rgb.b = t2;
            rgb.r = t1 - t3;
          } else if (h < 180) {
            rgb.g = t1;
            rgb.r = t2;
            rgb.b = t2 + t3;
          } else if (h < 240) {
            rgb.b = t1;
            rgb.r = t2;
            rgb.g = t1 - t3;
          } else if (h < 300) {
            rgb.b = t1;
            rgb.g = t2;
            rgb.r = t2 + t3;
          } else if (h < 360) {
            rgb.r = t1;
            rgb.g = t2;
            rgb.b = t1 - t3;
          } else {
            rgb.r = 0;
            rgb.g = 0;
            rgb.b = 0;
          }
        }
        return {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b),
        };
      }

      function rgb2hex(rgb) {
        var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
        $.each(hex, function (nr, val) {
          if (val.length === 1) hex[nr] = '0' + val;
        });
        return '#' + hex.join('');
      }

      function hsb2hex(hsb) {
        return rgb2hex(hsb2rgb(hsb));
      }

      function hex2hsb(hex) {
        var hsb = rgb2hsb(hex2rgb(hex));
        if (hsb.s === 0) hsb.h = 360;
        return hsb;
      }

      function rgb2hsb(rgb) {
        var hsb = { h: 0, s: 0, b: 0 };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        hsb.s = max !== 0 ? (255 * delta) / max : 0;
        if (hsb.s !== 0) {
          if (rgb.r === max) {
            hsb.h = (rgb.g - rgb.b) / delta;
          } else if (rgb.g === max) {
            hsb.h = 2 + (rgb.b - rgb.r) / delta;
          } else {
            hsb.h = 4 + (rgb.r - rgb.g) / delta;
          }
        } else {
          hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
          hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
      }

      function hex2rgb(hex) {
        hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
        return {
          r: hex >> 16,
          g: (hex & 0x00ff00) >> 8,
          b: hex & 0x0000ff,
        };
      }

      $(document)
        .on('mousedown.minicolors touchstart.minicolors', function (event) {
          if (!$(event.target).parents().add(event.target).hasClass('minicolors')) {
            hide();
          }
        })
        .on(
          'mousedown.minicolors touchstart.minicolors',
          '.minicolors-grid, .minicolors-slider, .minicolors-opacity-slider',
          function (event) {
            var target = $(this);
            event.preventDefault();
            $(document).data('minicolors-target', target);
            move(target, event, true);
          },
        )
        .on('mousemove.minicolors touchmove.minicolors', function (event) {
          var target = $(document).data('minicolors-target');
          if (target) move(target, event);
        })
        .on('mouseup.minicolors touchend.minicolors', function () {
          $(this).removeData('minicolors-target');
        })
        .on('mousedown.minicolors touchstart.minicolors', '.minicolors-swatch', function (event) {
          var input = $(this).parent().find('.minicolors-input');
          event.preventDefault();
          show(input);
        })
        .on('focus.minicolors', '.minicolors-input', function () {
          var input = $(this);
          if (!input.data('minicolors-initialized')) return;
          show(input);
        })
        .on('blur.minicolors', '.minicolors-input', function () {
          var input = $(this),
            settings = input.data('minicolors-settings');
          if (!input.data('minicolors-initialized')) return;
          input.val(parseHex(input.val(), true));
          if (input.val() === '') input.val(parseHex(settings.defaultValue, true));
          input.val(convertCase(input.val(), settings.letterCase));
        })
        .on('keydown.minicolors', '.minicolors-input', function (event) {
          var input = $(this);
          if (!input.data('minicolors-initialized')) return;
          switch (event.keyCode) {
            case 9:
              hide();
              break;
            case 13:
            case 27:
              hide();
              input.blur();
              break;
          }
        })
        .on('keyup.minicolors', '.minicolors-input', function () {
          var input = $(this);
          if (!input.data('minicolors-initialized')) return;
          updateFromInput(input, true);
        })
        .on('paste.minicolors', '.minicolors-input', function () {
          var input = $(this);
          if (!input.data('minicolors-initialized')) return;
          setTimeout(function () {
            updateFromInput(input, true);
          }, 1);
        });
    });
  })(jquery_minicolors);

  const cache = {
    zip: JSZip,
    downloadFiles: 0,
    Data: {},
  };
  const getExtension = (mimeType) =>
    ((/image\/(?<ext>jpe?g|png|webp)/.exec(mimeType) || {}).groups || {}).ext || '' || 'png';
  const getFilename = (name, index, total, ext) =>
    `${name}${(index + 1)
      .toString()
      .padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace('jpeg', 'jpg')}`;
  // Generate Zip File for download
  function generateZip() {
    // Source:
    // http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
    if (cache.downloadFiles === 0) {
      const filenameRegex = /^(?<name>.*?)(?<index>\d+)\.(?<ext>\w+)$/;
      const images = $('.MangaPage img');
      const filenames = (() => {
        const result = [];
        for (let i = 0; i < images.length; i += 1) {
          const $img = $(images[i]);
          const filename = $img.attr('src')?.split(/[?#]/)[0].split('/').pop() ?? '';
          const match = filenameRegex.exec(filename);
          if (!match) break;
          const fixedFilename = getFilename(
            match.groups?.name,
            match.groups?.index,
            images.length,
            match.groups?.ext,
          );
          if (result.length > 0 && fixedFilename <= result[result.length - 1]) break;
          result.push(fixedFilename);
        }
        if (result.length < images.length) return [];
        return result;
      })();
      images.get().forEach((value, index) => {
        const img = $(value);
        const src = img.attr('src') ?? '';
        const base64 = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/.exec(src);
        if (base64) {
          const filename = getFilename(
            'Page ',
            index,
            images.length,
            getExtension(base64.groups?.mimeType),
          );
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
                const filename =
                  filenames[index] ||
                  getFilename('Page ', index, images.length, getExtension(request.response.type));
                cache.zip.file(filename, request.response, {
                  base64: true,
                  createFolders: true,
                  compression: 'DEFLATE',
                });
                logScript(
                  `${filename} Added to Zip as Base64 Image, From: ${src}, Data:`,
                  request.response,
                );
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
            blobLink.href = window.URL.createObjectURL(content);
            logScript('Download Ready');
            $('#blob')[0].click();
          });
      } catch (e) {
        logScript(e);
        // blobLink.innerHTML += ' (not supported on this browser)';
      }
    }
  }

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
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABflJREFUeNrEl21sU+cVx3++10mcV0PKutBYSbyaMMiSxnYLGAKGJqwbbEMlTBVoX9hQdqc17MPWRSvaKk3ZJo1Pk7opfEGTqklbG5K2ostGZASZs4Q0ISFloQ00jg02kDomifPi++a7DzYsRA2jKLRHOnrulZ5H53f+z3mec6/JMAy+SDM/7ERJktzpx2stLS3TKwVgWk4BSZIygQbgEOCx2WwARKNREolECGgFjl8tH7y14gCSJG0C/rJ9+3aHy+WitLSUubk5NE0jLy+PWCxGf38/nZ2dC8DPr5YPvr5oeWYa+gBQlH4PA+3AG8DCAwEkSdoLvHXo0KHs4uJifD4f4+PjLCRkCgryMYsiVquV3bt3A9DT00NfX9/rV8sHGwEH8NbmdVurnXYX+ZYCBFFgavYOl4JD9I52B4B9wAefCiBJ0kbg3w0NDdbJyUna29vZ970juKsqWJ2bhQCous6tW7fxdf6TwsJCtmzZwunTp/EPd/0iVPrhyy9u/m7x5vVbiC5MEE/MoOoqFsHCqqxCRkL/4e33T8WAzcC1TwM4d+DAAa/ZbOba+HW++a3vULzGCoBupNxIe3xunu6ucyTmZqioqOCXba9oNTu2mbdW1DA2NYqiqny/4mUA/nDht2iqwro1G/ko/CH/uPTeWaAWQFgU3FNWVuatrq6mvb2d7bt28VQ6uJYEWQdZS41KEsxZObg9Xrq6upicjzKbP2V+oXoPwekxZEVGVZV7iSlyAlmWuRTqp9JWyZMFX34eqFx6DF9yOp309vaydccuymw2TOnMlSQsaKAmU9kDmE1gycllz4sv0Tnwd551bCK2EGUuMcuRyp/cV1ev7Pg1AMfe+TG3pyKUriljYub288AHwqJ5bpvNxujoKI7y9YgCJI1UUFlPAcQVmExAQkuBYYCjfCPhyetYs63MK/MoirLskZNlmZn5aXIzc0ifkPsUKMrPz2dqaorVhYWYSAHclT+uwIySyjzDBJkCCAJYV69GndeYlecwGaAoMse7foWqqrxa+zsAmtokVFVBU1VERBaUBYDp+2oA0HVdRxRFNE3DMFIAugGzSgpAT6aA1GRaAUDXdHLVAsYnxrCIOcjp/ZblxKIakFEUBUVVWZVbyI07NwD8SxUIxWKx9UVFRdyKhCmxFYORljsJopAak4CxqBZuRq5TsqqMG6LK5eAwjifWMxTsR1NVfvbmEVRNRVNVNF2j2r6J2/EJwndufAT0LFWgJxgM4na7ef9CD2oyVXyCCbLMaclNqcDJ1PYDcHmonw0bNvB127d5u+9UMjoTpcrmIicjB0WRURWFnMxcNq2rwRAMTl96Vwd+COhLAf585swZxW63o8kJznS8R9IA0QRZImSLqTGZ/N+CXv85ro4MU1VVRfTjGE9En/rjmxf+Gh4KDvH02q+yx72fvc/tp+orzxGIBTg10PoJsB84v9xN+Cev1/sjj8fDiRMnqHjGze69+xDFDGQd5lWYThf55fPvMHzhPAcPHiQSidDR0RFoamqyB0Jj/Gbg1ePAN0RBrDSZTGi6NpIO+hrwybK9QJIkK/Cvurq6So/Hg8/n4+NAkK894yInvwBNh6n4HNeuDPOlAgt1dXVEIhFaW1uVlpaWzEAgQDgcBuC1vp+a0o1IXNqA/l8zKgY6tm3bVllbW8vExAQjIyPE43EALBYLDoeDtWvXMjAwgM/nm21qasoDsNvt+P1+jh49Sn19PWez3zU9ajvOA34PNHi9XrGkpISMjAwEQUDTNG7evMmVK1cIhUJ+m81WA7Bz504Aampq6O7uprGxkfr6eo4dO2Z6pA+SNEgJ8APAC+SlJVWAAeBvLS0tZwGam5sNgLa2NhobGzl8+PDDQxiGsSLudDqNu37y5EnDMAzD7/cbTqfTaG5uNpZbt2IAjwqxogCPArHiAJ8V4rEAfBaIxwbwsBCPFWA5CMDqdDoNwzAefA+slLlcrntBBgcHnwQ60nfKs8Ln8f938eLFxRfROaDY6XRWGoahPPYtuFdskA2MAcN35f/ctuBBJvAF238HAAh3fBXMlW3pAAAAAElFTkSuQmCC',
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
      'data:image/png;base64,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',
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
    const isEmptyObject = (a) => {
      if (!Array.isArray(a)) {
        // it's an Object, not an Array
        const hasNonempty = Object.keys(a).some((element) => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      // check if array is really not empty as JS thinks at least one element should be non-empty
      return !a.some((element) => !isNothing(element));
    };
    return (
      // eslint-disable-next-line eqeqeq
      value == false ||
      value === 0 ||
      typeof value === 'undefined' ||
      value == null ||
      (typeof value === 'object' && isEmptyObject(value))
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
      index >= begin
        ? delayAdd(url, (manga.timer || settings.Timer) * (index - begin)).then((response) =>
            addPage(manga, index + 1, response),
          )
        : null,
    );
  }
  // use a list of images to fill the viewer
  function loadMangaImages(begin, manga) {
    return manga.listImages?.map((src, index) =>
      index >= begin
        ? delayAdd(src, (manga.timer || settings.Timer) * (index - begin)).then((response) =>
            addImg(index + 1, response),
          )
        : null,
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
      [
        'Full_Custom',
        settings.CustomThemeBody,
        settings.CustomThemeText,
        settings.CustomThemeLines,
        settings.CustomThemePanel,
        settings.CustomThemeButton,
      ],
    ];
  }
  const themes = loadThemes();
  const themesSelector = themes.map(
    (theme) =>
      `<option value='${theme[0]}' ${
        settings.Theme === theme[0] ? 'selected' : ''
      }>${theme[0].replace('_', ' ')}</option>`,
  );
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
            $('.ChapterControl:first .next').trigger('click');
            break;
          case 'ArrowLeft':
          case 'Comma':
          case 'KeyA':
          case 'Numpad4':
            $('.ChapterControl:first .prev').trigger('click');
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
      $('#Chapter')
        .removeClass('WebComic')
        .removeClass('FluidLTR')
        .removeClass('FluidRTL')
        .addClass(mode);
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
      $('#blob').trigger('click');
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
      const num = parseInt(
        $(event.target).parents('.MangaPage').find('.PageFunctions span').text(),
        10,
      );
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
        settings.Theme !== 'Custom_Dark' && settings.Theme !== 'Custom_Light'
          ? 'style="display: none;"'
          : ''
      }><br/>-Base:<input id='CustomThemeHue' value='${
    settings.CustomTheme
  }' class='colorpicker CustomTheme'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Body:<input id='CustomThemeHueBody' value='${
    settings.CustomThemeBody
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Text:<input id='CustomThemeHueText' value=${
    settings.CustomThemeText
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Lines:<input id='CustomThemeHueLines' value='${
    settings.CustomThemeLines
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Painels:<input id='CustomThemeHuePanel' value='${
    settings.CustomThemePanel
  }' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Buttons:<input id='CustomThemeHueButton' value='${
    settings.CustomThemeButton
  }' class='colorpicker FullCustom'></span>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='normal' ${
        settings.loadMode === 'normal' ? 'selected' : ''
      }>Normal(Wait 3 sec)</option>
      <option value='always' ${
        settings.loadMode === 'always' ? 'selected' : ''
      }>Always(Immediately)</option>
      <option value='never' ${
        settings.loadMode === 'never' ? 'selected' : ''
      }>Never(Manually)</option>
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
    <input type='range' value='${
      settings.zoomStep
    }' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'>
    <output id='zoomStepVal'>${settings.zoomStep}</output>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${
        settings.viewMode === 'WebComic' ? 'selected' : ''
      }>WebComic</option>
      <option value='FluidLTR' ${
        settings.viewMode === 'FluidLTR' ? 'selected' : ''
      }>Left to Right</option>
      <option value='FluidRTL' ${
        settings.viewMode === 'FluidRTL' ? 'selected' : ''
      }>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${
      settings.FitWidthIfOversize ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${
      settings.ShowThumbnails ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${
      settings.lazyLoadImages ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyStart'>Lazy Start From Page (between 5 and 100):<br/>
    <input type='range' value='${
      settings.lazyStart
    }' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'>
    <output id='lazyStartVal'>${settings.lazyStart}</output>
  </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${
      settings.DownloadZip ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${
      settings.hidePageControls ? 'checked' : ''
    }>
  </span>
</div>`;
  const chapterControl = (id) => (manga) =>
    `<div id='${id}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='W.location="${
      manga.prev || ''
    }";W.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='W.location="${
      manga.next || ''
    }";W.location.reload();'>Next</a>
</div>`;
  const chapterControlTop = chapterControl('ChapterControlTop');
  const chapterControlBottom = chapterControl('ChapterControlBottom');
  const title = (manga) =>
    `<div class='ViewerTitle'><br/><a id='series' href='${manga.series}'><i>${manga.title}</i><br/>(Return to Chapter List)</a></div>`;
  // Add Pages Place-holders
  const listPages = (times) =>
    Array(times)
      .fill(null)
      .map(
        (_, index) => `
<div id='Page${index + 1}' class='MangaPage'>
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
  const listOptions = (times) =>
    Array(times)
      .fill(null)
      .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);
  const listThumbnails = (times) =>
    Array(times)
      .fill(null)
      .map(
        (_, index) =>
          `<div id='Thumbnail${index + 1}' class='Thumbnail'><img id='ThumbnailImg${
            index + 1
          }' alt='ThumbnailImg${index + 1}' src=''/><span>${index + 1}</span></div>`,
      );
  const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer' class='${settings.Theme} ${isMobile ? 'mobile' : ''} ${
    settings.hidePageControls ? 'hideControls' : ''
  }'>
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
  <div id='Chapter' class='${settings.FitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${
    settings.viewMode
  }'>
    ${listPages(manga.pages).slice(begin).join('')}
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${panel}
  ${controls}
  ${htmlKeybinds}
  <div id='Navigation' class='panel ${settings.ShowThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLabel'>
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' /><i>0</i> of <b>${
    manga.pages
  }</b> Pages Loaded
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
  <meta charset='UTF-8'>
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
      $('head').append(` ${externalScripts.join('\n')}
        ${externalCSS.join('\n')}
       <style type='text/css'>#mov {position: fixed;left: 50%;transform: translateX(-50%);top: 0;z-index: 1000000;border-radius: .25em;font-size: 1.5em;cursor: pointer;display: inline-block;margin: .3125em;padding: .625em 2em;box-shadow: none;font-weight: 500;color: #FFF;background: rgb(102, 83, 146);border: 1px #FFF;}</style>`);
      W.mov = (b) => lateStart(site, b || beginning);
      switch (site.start || settings.loadMode) {
        case 'never':
          $('body').append('<button id="mov" onclick=mov()>Start MangaOnlineViewer</button>');
          break;
        case 'always':
          formatPage(manga, 0);
          break;
        case 'normal':
        default:
          Swal.fire({
            title: 'Starting<br>MangaOnlineViewer',
            html: `${
              beginning > 1 ? `Resuming reading from Page ${beginning}.<br/>` : ''
            }Please wait, 3 seconds...`,
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
    logScript(
      `Starting ${getInfoGM.script.name} ${
        getInfoGM.script.version
      } on ${getBrowser()} with ${getEngine()}`,
      getInfoGM,
    );
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
        const wait = $(site.waitEle);
        logScript(`Waiting for ${site.waitEle} = ${wait}`);
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
