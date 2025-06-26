// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL
// https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL
// https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues @namespace
// https://github.com/TagoDR @description   Shows all pages at once in online view for these sites:
// Asura Scans, Batoto, BilibiliComics, Comick, Dynasty-Scans, Flame Comics, Ikigai Mangas -
// EltaNews, Ikigai Mangas - Ajaco, KuManga, LeerCapitulo, LHTranslation, Local Files, M440,
// MangaBuddy, MangaDemon, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot,
// NeloManga, MangaNato, Natomanga, MangaOni, Mangareader, MangaToons, ManhwaWeb, MangaGeko.com,
// MangaGeko.cc, NineAnime, OlympusBiblioteca, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod @version       2025.06.26 @license       MIT @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png @run-at        document-end @grant         unsafeWindow @grant         GM_getValue @grant         GM_setValue @grant         GM_listValues @grant         GM_deleteValue @grant         GM_xmlhttpRequest @grant         GM_addValueChangeListener @noframes      on @connect       * @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.14/dist/hotkeys.min.js @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/ @include       /https?:\/\/(www\.)?(\w(ba)?to|readtoto|batocomic|comiko|battwo|batotoo|batotwo).(to|com|net|org)\/(chapter|title).*/ @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/ @include       /https?:\/\/(www\.)?comick.io\/.+/ @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/ @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/ @include       /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/ @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/ @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/ @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/ @include       /(file:\/\/\/.+(index)?.html)/ @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/ @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/ @include       /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/ @include       /https?:\/\/(www\.)?mangadex.org/ @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/ @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/ @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato).(com|gg).*\/chapter.+/ @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/ @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/ @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/ @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/ @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/ @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/ @include       /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/ @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/ @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/ @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/ @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/ @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/ @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/ @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/ @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/ @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod)[^/]*\/.+/ @include       /^(?!.*jaiminisbox).*\/read\/.+/ @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/ @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/ @exclude       /https?:\/\/(www\.)?pururin.io\/.+/ ==/UserScript==
!function () {
  'use strict';
  const e = {
    eq: (e, t) => e.textContent?.trim() === t,
    starts: (e, t) => !!e.textContent?.trim()?.startsWith(t),
    ends: (e, t) => !!e.textContent?.trim()?.endsWith(t),
  };

  function t(t, n, a) {
    const o = e[a];
    if (!o) throw new Error(`Invalid matcherKey: ${a}`);
    return [...document.querySelectorAll(t)].filter(
      e => Array.isArray(n) ? n.some(t => o(e, t)) : o(e, n));
  }

  function n(e, n, a) {return t(e, n, a)?.[0];}

  function a(e, t, a, o = 'a') {
    const r = n(e, t, a);
    return r?.closest(o) ?? null;
  }

  const o = (e, n) => t(e, n, 'eq'),
    r = (e, t, n = 'a') => a(e, t, 'eq', n),
    i = (e, t, n = 'a') => a(e, t, 'starts', n),
    l = (e, t, n = 'a') => a(e, t, 'ends', n);

  function s(e) {
    return null == e || void 0 === e || 'string' == typeof e && '' === e || Array.isArray(
      e) && 0 === e.length || 'object' == typeof e && 0 === Object.keys(e).length;
  }

  function c(e) {
    const t = e => {
      if (!Array.isArray(e)) {
        return !Object.keys(e).some(t => !c(e[t])) && t(Object.keys(e));
      }
      return !e.some(e => e instanceof Promise || !c(e));
    };
    return !e || 0 === e || s(e) || 'object' == typeof e && t(e);
  }

  function u(e, t = 250) {
    return new Promise(n => {const a = setInterval(() => {e() && (clearInterval(a), n(!0));}, t);});
  }

  function h(e = 1e3, t = !0) {return new Promise(n => {setTimeout(() => n(t), e);});}

  const m = {
      name: 'Asura Scans',
      url: /https?:\/\/(www.)?(asuracomic).(net)\/.+/,
      homepage: 'https://asuracomic.net/',
      language: ['English'],
      category: 'manga',
      waitEle: 'img[alt*="chapter"]',
      waitTime: 2e3,
      run() {
        const e = [...document.querySelectorAll('img[alt*="chapter"]')],
          t = n('p', 'All chapters are in', 'starts');
        return {
          title: t?.previousSibling?.textContent?.trim(),
          series: t?.querySelector('a')?.getAttribute('href'),
          pages: e.length,
          prev: r('h2', 'Prev', 'a')?.getAttribute('href'),
          next: r('h2', 'Next', 'a')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('src')),
          async before() {
            document.querySelectorAll('button.absolute').forEach(
              e => e.dispatchEvent(new Event('click', { bubbles: !0 }))), await h(1e3);
          },
        };
      },
    },
    p = {
      name: 'Batoto',
      url: /https?:\/\/(www\.)?(\w(ba)?to|readtoto|batocomic|comiko|battwo|batotoo|batotwo).(to|com|net|org)\/(chapter|title).*/,
      homepage: 'https://rentry.co/batoto',
      language: ['English'],
      category: 'manga',
      waitEle: 'div[name="image-item"] img, .page-img',
      run() {
        if (window.location.pathname.startsWith('/title')) {
          '?load=2' !== window.location.search && (window.location.search = '?load=2');
          const e = [...document.querySelectorAll('div[name="image-item"] img')];
          return {
            title: document.querySelector('h6')?.textContent?.trim(),
            series: document.querySelector('h3 a')?.getAttribute('href'),
            pages: e.length,
            prev: l('span', 'Prev Chapter', 'a')?.getAttribute('href'),
            next: i('span', 'Next Chapter', 'a')?.getAttribute('href'),
            listImages: e.map(e => e.getAttribute('src')),
          };
        }
        const e = [...document.querySelectorAll('.page-img')];
        return {
          title: document.querySelector('.nav-title a')?.textContent?.trim(),
          series: document.querySelector('.nav-title a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
          next: document.querySelector('.nav-next a')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('src')),
        };
      },
    },
    g = {
      name: 'BilibiliComics',
      url: /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,
      homepage: 'https://www.bilibilicomics.net/',
      language: ['English'],
      category: 'manga',
      waitEle: '#__NUXT_DATA__',
      async run() {
        const e = JSON.parse(document.querySelector('#__NUXT_DATA__')?.innerHTML ?? '').filter(
          e => 'string' == typeof e && /.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(e));
        return {
          title: document.querySelector('.chapterTitle')?.textContent?.trim(),
          series: document.querySelector('.book-name')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelectorAll('.pre-next-btns').item(0)?.getAttribute('href'),
          next: document.querySelectorAll('.pre-next-btns').item(2)?.getAttribute('href'),
          listImages: e.map(e => `https://static.comicfans.io/${e}`),
        };
      },
    };

  function f() {
    const e = document.querySelector('#comments-container');
    if (!e) return null;
    const t = [...document.styleSheets].filter(
      e => !e.href || e.href.startsWith(window.location.origin)).map(
      e => [...e.cssRules]?.map(({ cssText: e }) => e)?.join('\n') ?? '');
    e.classList.remove('blur-sm');
    const n = document.createElement('div'),
      a = n.attachShadow({ mode: 'open' }),
      o = document.createElement('div');
    o.appendChild(e), a.appendChild(o);
    const r = document.createElement('style');
    return r.textContent = t.join('\n'), a.appendChild(r), n;
  }

  const w = {
      name: 'Comick',
      url: /https?:\/\/(www\.)?comick.io\/.+/,
      homepage: 'https://comick.io/',
      language: ['English'],
      category: 'manga',
      waitFunc: () => /\/([^/]+)-chapter.+$/.test(window.location.pathname),
      waitEle: '#__NEXT_DATA__',
      waitTime: 3e3,
      run() {
        const e = JSON.parse(
            document.getElementById('__NEXT_DATA__')?.innerHTML ?? '')?.props?.pageProps,
          t = e?.chapter?.md_images?.map(e => `https://meo.comick.pictures/${e?.b2key}`);
        return {
          title: e?.seoTitle ?? `${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,
          series: `/comic/${e?.chapter?.md_comics?.slug}`,
          pages: t?.length,
          prev: e?.prev?.href,
          next: e?.next?.href,
          listImages: t,
          comments: f(),
        };
      },
    },
    b = {
      name: 'Dynasty-Scans',
      url: /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,
      homepage: 'https://dynasty-scans.com/',
      language: ['English'],
      category: 'manga',
      run: () => ({
        title: document.querySelector('#chapter-title')?.textContent?.trim(),
        series: document.querySelector('#chapter-title a')?.getAttribute('href'),
        pages: unsafeWindow.pages.length,
        prev: document.querySelector('#prev_link')?.getAttribute('href'),
        next: document.querySelector('#next_link')?.getAttribute('href'),
        listImages: unsafeWindow.pages.map(e => e.image),
      }),
    },
    v = {
      name: ['FoOlSlide', 'Kireicake'],
      url: /^(?!.*jaiminisbox).*\/read\/.+/,
      homepage: ['https://github.com/saintly2k/FoOlSlideX', 'https://reader.kireicake.com'],
      language: ['English'],
      obs: 'Any Site that uses FoOLSlide',
      category: 'manga',
      waitEle: 'img.open',
      run() {
        const e = [
            ...document.querySelectorAll('.topbar_left .dropdown_parent:last-of-type li'),
          ],
          t = e.findIndex(e => {
            const t = e.querySelector('a')?.getAttribute('href');
            return !!t && window.location.href.startsWith(t);
          }),
          n = [...document.querySelectorAll('.topbar_right .dropdown li')],
          a = [...document.querySelectorAll('.inner img:not(.open)')],
          o = a.length > 1 ? a.length : n.length;
        return {
          title: e.at(t)?.querySelector('a')?.textContent?.trim() ?? document.querySelector(
            'title')?.textContent?.trim(),
          series: document.querySelector('div.tbtitle div.text a')?.getAttribute('href'),
          pages: o,
          prev: e.at(t + 1)?.querySelector('a')?.getAttribute('href'),
          next: e.at(t - 1)?.querySelector('a')?.getAttribute('href'),
          listPages: a.length > 1 ? null : Array(o).fill(0).map(
            (e, t) => `${window.location.href.replace(/\/\d+$/, '')}/${t + 1}`),
          listImages: a.length > 1 ? a.map(e => e.getAttribute('src')) : null,
          img: 'img.open',
        };
      },
    },
    y = {
      name: 'Flame Comics',
      url: /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,
      homepage: 'https://flamecomics.xyz/',
      language: ['English'],
      category: 'manga',
      run: function () {
        const e = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? ''),
          t = e?.props?.pageProps?.chapter,
          n = Object.keys(t?.images).map(
            e => `https://cdn.flamecomics.xyz/series/${t?.series_id}/${t?.token}/${t?.images?.[e]?.name}`);
        return {
          title: `${t?.title} ${t?.chapter}`,
          series: `../${t?.series_id}`,
          pages: n.length,
          prev: e?.props?.pageProps?.previous,
          next: e?.props?.pageProps?.next,
          listImages: n,
        };
      },
    },
    E = {
      name: ['Ikigai Mangas - EltaNews', 'Ikigai Mangas - Ajaco'],
      url: /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/,
      homepage: ['https://visorikigai.eltanews.com/', 'https://visorikigai.ajaco.net/'],
      language: ['Spanish'],
      category: 'manga',
      run() {
        const e = document.querySelector('script[type="qwik/json"]')?.textContent?.match(
          /http[^'"]+webp/gi);
        return {
          title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
          pages: e?.length,
          prev: r('span', 'Siguiente')?.getAttribute('href'),
          next: r('span', 'Anterior')?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    S = {
      name: 'KuManga',
      url: /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,
      homepage: 'https://www.kumanga.com/',
      language: ['Spanish'],
      category: 'manga',
      run() {
        const e = document.querySelectorAll('select').item(1).querySelector('option[selected]');
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('h2 a')?.getAttribute('href'),
          pages: unsafeWindow.pUrl.length,
          prev: `/manga/leer/${e?.previousElementSibling?.getAttribute('value')}`,
          next: `/manga/leer/${e?.nextElementSibling?.getAttribute('value')}`,
          listImages: unsafeWindow.pUrl.map(e => e.imgURL),
        };
      },
    },
    O = {
      name: 'LeerCapitulo',
      url: /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,
      homepage: 'https://www.leercapitulo.co/',
      language: ['Spanish'],
      category: 'manga',
      waitEle: '#page_select',
      run() {
        const e = [...document.querySelectorAll('#page_select option')].map(
          e => e.getAttribute('value'));
        return {
          title: document.querySelector('h1')?.textContent?.trim(),
          series: document.querySelector('.chapter-title a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.pre')?.getAttribute('href'),
          next: document.querySelector('.next')?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    k = {
      name: 'LHTranslation',
      url: /https?:\/\/(www\.)?lhtranslation.net\/read.+/,
      homepage: 'https://lhtranslation.net/',
      language: ['English'],
      category: 'manga',
      run() {
        const e = document.querySelector('.form-control option:checked'),
          t = [...document.querySelectorAll('img.chapter-img')];
        return {
          title: document.querySelector('.chapter-img.tieude font')?.textContent?.trim(),
          series: document.querySelector('.navbar-brand.manga-name')?.getAttribute('href'),
          pages: t.length,
          prev: e?.nextElementSibling?.getAttribute('value'),
          next: e?.previousElementSibling?.getAttribute('value'),
          listImages: t.map(e => e.getAttribute('src')),
        };
      },
    },
    M = (e, ...t) => 0 === t.length ? e[0] : String.raw({ raw: e }, ...t),
    A = M,
    x = M,
    T = {
      dark: {
        name: 'dark',
        50: '#C1C2C5',
        100: '#A6A7AB',
        200: '#909296',
        300: '#5c5f66',
        400: '#373A40',
        500: '#2C2E33',
        600: '#25262b',
        700: '#1A1B1E',
        800: '#141517',
        900: '#101113',
      },
      gray: {
        name: 'gray',
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      red: {
        name: 'red',
        50: '#fff5f5',
        100: '#ffe3e3',
        200: '#ffc9c9',
        300: '#ffa8a8',
        400: '#ff8787',
        500: '#ff6b6b',
        600: '#fa5252',
        700: '#f03e3e',
        800: '#e03131',
        900: '#c92a2a',
      },
      wine: {
        name: 'wine',
        50: '#FCE9E8',
        100: '#F8C2BF',
        200: '#F39A96',
        300: '#EE736D',
        400: '#E94C44',
        500: '#E5241A',
        600: '#B71D15',
        700: '#891610',
        800: '#5B0F0B',
        900: '#2E0705',
      },
      pink: {
        name: 'pink',
        50: '#fff0f6',
        100: '#ffdeeb',
        200: '#fcc2d7',
        300: '#faa2c1',
        400: '#f783ac',
        500: '#f06595',
        600: '#e64980',
        700: '#d6336c',
        800: '#c2255c',
        900: '#a61e4d',
      },
      grape: {
        name: 'grape',
        50: '#f8f0fc',
        100: '#f3d9fa',
        200: '#eebefa',
        300: '#e599f7',
        400: '#da77f2',
        500: '#cc5de8',
        600: '#be4bdb',
        700: '#ae3ec9',
        800: '#9c36b5',
        900: '#862e9c',
      },
      violet: {
        name: 'violet',
        50: '#f3f0ff',
        100: '#e5dbff',
        200: '#d0bfff',
        300: '#b197fc',
        400: '#9775fa',
        500: '#845ef7',
        600: '#7950f2',
        700: '#7048e8',
        800: '#6741d9',
        900: '#5f3dc4',
      },
      purple: {
        name: 'purple',
        50: '#EFEAFB',
        100: '#D3C3F4',
        200: '#B69DEC',
        300: '#9976E5',
        400: '#7D4FDD',
        500: '#6029D6',
        600: '#4D21AB',
        700: '#3A1980',
        800: '#261056',
        900: '#13082B',
      },
      indigo: {
        name: 'indigo',
        50: '#edf2ff',
        100: '#dbe4ff',
        200: '#bac8ff',
        300: '#91a7ff',
        400: '#748ffc',
        500: '#5c7cfa',
        600: '#4c6ef5',
        700: '#4263eb',
        800: '#3b5bdb',
        900: '#364fc7',
      },
      blue: {
        name: 'blue',
        50: '#e7f5ff',
        100: '#d0ebff',
        200: '#a5d8ff',
        300: '#74c0fc',
        400: '#4dabf7',
        500: '#339af0',
        600: '#228be6',
        700: '#1c7ed6',
        800: '#1971c2',
        900: '#1864ab',
      },
      darkblue: {
        name: 'darkblue',
        50: '#E8F4F9',
        100: '#D9DEE9',
        200: '#B7C2DA',
        300: '#6482C0',
        400: '#4267B2',
        500: '#385898',
        600: '#314E89',
        700: '#29487D',
        800: '#223B67',
        900: '#1E355B',
      },
      cyan: {
        name: 'cyan',
        50: '#e3fafc',
        100: '#c5f6fa',
        200: '#99e9f2',
        300: '#66d9e8',
        400: '#3bc9db',
        500: '#22b8cf',
        600: '#15aabf',
        700: '#1098ad',
        800: '#0c8599',
        900: '#0b7285',
      },
      teal: {
        name: 'teal',
        50: '#e6fcf5',
        100: '#c3fae8',
        200: '#96f2d7',
        300: '#63e6be',
        400: '#38d9a9',
        500: '#20c997',
        600: '#12b886',
        700: '#0ca678',
        800: '#099268',
        900: '#087f5b',
      },
      green: {
        name: 'green',
        50: '#ebfbee',
        100: '#d3f9d8',
        200: '#b2f2bb',
        300: '#8ce99a',
        400: '#69db7c',
        500: '#51cf66',
        600: '#40c057',
        700: '#37b24d',
        800: '#2f9e44',
        900: '#2b8a3e',
      },
      darkgreen: {
        name: 'darkgreen',
        50: '#cad4cf',
        100: '#b0bfb8',
        200: '#97aba1',
        300: '#7f978b',
        400: '#678376',
        500: '#4f7061',
        600: '#263e3a',
        700: '#1c2e2b',
        800: '#152320',
        900: '#0b2017',
      },
      moss: {
        name: 'moss',
        50: '#f1f8f4',
        100: '#e3eee7',
        200: '#c2ddcb',
        300: '#9ecbad',
        400: '#80bc93',
        500: '#6db383',
        600: '#62af7a',
        700: '#519968',
        800: '#46885b',
        900: '#183321',
      },
      greener: {
        name: 'greener',
        50: '#EDF7ED',
        100: '#CEE9CD',
        200: '#AEDBAE',
        300: '#8FCD8E',
        400: '#6FBF6E',
        500: '#4FB14E',
        600: '#408E3E',
        700: '#306A2F',
        800: '#20471F',
        900: '#102310',
      },
      lime: {
        name: 'lime',
        50: '#f4fce3',
        100: '#e9fac8',
        200: '#d8f5a2',
        300: '#c0eb75',
        400: '#a9e34b',
        500: '#94d82d',
        600: '#82c91e',
        700: '#74b816',
        800: '#66a80f',
        900: '#5c940d',
      },
      yellow: {
        name: 'yellow',
        50: '#fff9db',
        100: '#fff3bf',
        200: '#ffec99',
        300: '#ffe066',
        400: '#ffd43b',
        500: '#fcc419',
        600: '#fab005',
        700: '#f59f00',
        800: '#f08c00',
        900: '#e67700',
      },
      golden: {
        name: 'golden',
        50: '#FDF9E7',
        100: '#FAEDBC',
        200: '#F7E191',
        300: '#F4D666',
        400: '#F1CA3C',
        500: '#EEBF11',
        600: '#BF990D',
        700: '#8F720A',
        800: '#5F4C07',
        900: '#302603',
      },
      orange: {
        name: 'orange',
        50: '#fff4e6',
        100: '#ffe8cc',
        200: '#ffd8a8',
        300: '#ffc078',
        400: '#ffa94d',
        500: '#ff922b',
        600: '#fd7e14',
        700: '#f76707',
        800: '#e8590c',
        900: '#d9480f',
      },
    };

  function L(e) {
    const t = tinycolor(e);
    return function (e, t) {return e.l = t, tinycolor(e).toHexString();}(t.toHsl(),
      t.isDark() ? 95 : 10);
  }

  function C(e) {
    const t = e.replace(/[\t\n\r]/gim, '').replace(/\s\s+/g, ' ');
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g, '%28').replace(
      /\)/g, '%29')}`;
  }

  const I = e => e % 100 == 0 ? 15 : e % 50 == 0 ? 10 : e % 25 == 0 ? 5 : 2.5;

  function R(e, t, n = '#0F1C3F', a = '#ECEAD9') {
    const o = function (e, t, n, a) {
      let o = '';
      for (let r = 0; r <= e; r += 5) {
        o += A` <line x1="${r}" y1="0" x2="${r}" y2="${I(
          r)}" />`, 0 !== r && r % 50 == 0 && (o += A` <text
          x="${r}"
          y="25"
          text-anchor="middle"
          font-size="${I(r)}px"
        >
          ${r}
        </text>`);
      }
      for (let r = 0; r <= t; r += 5) {
        o += A` <line x1="0" y1="${r}" x2="${I(
          r)}" y2="${r}" />`, 0 !== r && r % 50 == 0 && (o += A` <text
          x="25"
          y="${r}"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="${I(r)}px"
        >
          ${r}
        </text>`);
      }
      return A` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${e}"
      height="${t}"
      viewBox="0 0 ${e} ${t}"
    >
      <rect width="${e}" height="${t}" fill="${n}" />
      <text
        fill="${a}"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="30"
        dy="10.5"
        font-weight="bold"
        x="50%"
        y="50%"
        text-anchor="middle"
      >
        ${e}x${t}
      </text>
      <g
        stroke-width="1"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="10px"
        font-weight="100"
        fill="${a}"
        stroke="${a}"
      >
        ${o}
      </g>
    </svg>`;
    }(e, t, n, a);
    return C(o);
  }

  const B = Object.values(T).map(e => e[900]),
    P = [400, 600, 900, 1200, 1400, 1600, 1970],
    H = [600, 800, 1e3, 1200, 1400, 2e3, 2600];

  function N() {
    const e = Math.floor(Math.random() * P.length),
      t = Math.floor(Math.random() * H.length),
      n = Math.floor(Math.random() * B.length);
    return R(P[e], H[t], B[n]);
  }

  const D = {
      name: 'Local Files',
      url: /(file:\/\/\/.+(index)?.html)/,
      homepage: '/index.html?raw=1',
      language: ['Raw'],
      category: 'manga',
      run() {
        const e = parseInt(/\d+/.exec(window.location.search)?.toString() ?? '5', 10),
          t = document.createElement('div');
        return t.innerHTML = Array(100).fill('Testing Comment<br/>').join(''), {
          title: 'Placeholder Manga Loaded',
          series: '?reload',
          pages: e,
          begin: 1,
          prev: '?pages=50',
          next: '?pages=1',
          listImages: [
            R(1970, 1400, '#2D1657'),
            R(985, 1400, '#152C55'),
            R(985, 1400, '#7A1420'),
            R(985, 1400, '#0F5B30'),
            R(1970, 1400, '#806D15'),
            ...Array(e).fill(0).map(N),
          ],
          comments: t,
        };
      },
    },
    V = {
      name: 'M440',
      url: /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,
      homepage: 'https://m440.in/',
      language: ['Spanish'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('#all img')],
          t = document.querySelector('#chapter-list li.active');
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('#navbar-collapse-1 ul:nth-child(2) a')?.getAttribute(
            'href'),
          pages: e.length,
          prev: t?.nextElementSibling?.firstElementChild?.getAttribute('href'),
          next: t?.previousElementSibling?.firstElementChild?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('data-src')),
        };
      },
    },
    q = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;

  function G() {
    return [
      ...document.querySelectorAll(
        '.wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img'),
    ].map(e => [...e.attributes].filter(
      e => /.*(src|url).*/i.test(e.name) && !/^.*(blank|lazy|load).*$/.test(e.value)).find(
      e => q.test(e.value))?.value ?? e?.getAttribute('src'));
  }

  const z = {
      name: [
        'Madara WordPress Plugin',
        'MangaHaus',
        'Isekai Scan',
        'Comic Kiba',
        'Zinmanga',
        'mangatx',
        'Toonily',
        'Mngazuki',
        'JaiminisBox',
        'DisasterScans',
        'ManhuaPlus',
        'TopManhua',
        'NovelMic',
        'Reset-Scans',
        'LeviatanScans',
        'Dragon Tea',
        'SetsuScans',
        'ToonGod',
      ],
      url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,
      homepage: [
        'https://mangabooth.com/',
        'https://manhuaus.com',
        'https://isekaiscan.com/',
        'https://comickiba.com/',
        'https://zinmanga.com/',
        'https://mangatx.com/',
        'https://toonily.net/',
        'https://mangazuki.me/',
        'https://jaiminisbox.net',
        'https://disasterscans.com/',
        'https://manhuaplus.org/',
        'https://www.topmanhua.com/',
        'https://novelmic.com/',
        'https://reset-scans.com/',
        'https://leviatanscans.com/',
        'https://dragontea.ink/',
        'https://setsuscans.com/',
        'https://toongod.org/home/',
      ],
      language: ['English'],
      obs: 'Any Site that uses Madara WordPress Plugin',
      category: 'manga',
      waitFunc: () => {
        const e = G();
        return e.length > 0 && e.every(e => e && q.test(e));
      },
      run() {
        const e = G();
        return {
          title: document.querySelector('#chapter-heading')?.textContent?.trim(),
          series: (document.querySelector('.breadcrumb li:nth-child(3) a') ?? document.querySelector(
            '.breadcrumb li:nth-child(2) a'))?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.prev_page')?.getAttribute('href'),
          next: document.querySelector('.next_page')?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    U = {
      name: 'MangaBuddy',
      url: /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,
      homepage: 'https://mangabuddy.com/',
      language: ['English'],
      category: 'manga',
      waitVar: 'chapImages',
      run() {
        const e = unsafeWindow.chapImages.split(',').map(
          e => new URL(e).pathname.replace('/res/', 'https://sb.mbcdn.xyz/'));
        return {
          title: document.querySelector('.chapter-info')?.textContent?.trim(),
          series: document.querySelector('#breadcrumbs-container div:nth-child(2) a')?.getAttribute(
            'href'),
          pages: e.length,
          prev: document.querySelector('a.prev')?.getAttribute('href'),
          next: document.querySelector('a.next')?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    F = {
      name: 'MangaDemon',
      url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
      homepage: 'https://demonicscans.org/',
      language: ['English'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('.imgholder')];
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('h1 a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.prevchap')?.getAttribute('href'),
          next: document.querySelector('.nextchap')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('data-src') || e.getAttribute('src')),
        };
      },
    },
    j = {
      name: 'MangaDex',
      url: /https?:\/\/(www\.)?mangadex.org/,
      homepage: 'https://mangadex.org/',
      language: ['English'],
      category: 'manga',
      waitEle: '#chapter-selector a',
      async run() {
        const e = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1),
          t = `https://api.mangadex.org/at-home/server/${e}`,
          n = await fetch(t).then(async e => e.json()),
          a = n.chapter.data,
          o = document.querySelectorAll('#chapter-selector a');
        return {
          title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
          series: document.querySelector('a.text-primary[href^=\'/title/\']')?.getAttribute('href'),
          pages: a.length,
          prev: o?.item(0)?.getAttribute('href'),
          next: o?.item(1)?.getAttribute('href'),
          listImages: a.map(e => `${n.baseUrl}/data/${n.chapter.hash}/${e}`),
        };
      },
    },
    W = {
      name: ['MangaFox', 'MangaHere'],
      url: /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
      homepage: ['https://fanfox.net/', 'https://www.mangahere.cc/'],
      language: ['English'],
      category: 'manga',
      waitVar: 'chapterid',
      async run() {
        const e = document.querySelector('#dm5_key')?.getAttribute('value'),
          t = { method: 'GET', headers: { 'Content-Type': 'text/plain' } },
          n = Array(unsafeWindow.imagecount).fill(0).map(async (n, a) => {
            const o = `chapterfun.ashx?cid=${unsafeWindow.chapterid ?? unsafeWindow.chapter_id}&page=${a}&key=${e}`,
              r = await fetch(o, t).then(async e => e.text());
            return (0, eval)(r), d;
          }),
          a = await Promise.all(n);
        return {
          title: document.querySelector('.reader-header-title div')?.textContent?.trim(),
          series: document.querySelector('.reader-header-title a')?.getAttribute('href'),
          pages: unsafeWindow.imagecount,
          prev: unsafeWindow.prechapterurl,
          next: unsafeWindow.nextchapterurl,
          listImages: a.map((e, t) => e[0 === t ? 0 : 1]),
        };
      },
    },
    Z = {
      name: 'Mangago',
      url: /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,
      homepage: 'https://www.mangago.me/',
      language: ['English'],
      category: 'manga',
      waitVar: 'imgsrcs',
      run() {
        const e = CryptoJS.enc.Hex.parse('e11adc3949ba59abbe56e057f20f883e'),
          t = {
            iv: CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef'),
            padding: CryptoJS.pad.ZeroPadding,
          },
          n = CryptoJS.AES.decrypt(unsafeWindow.imgsrcs, e, t).toString(CryptoJS.enc.Utf8).split(
            ',');
        return {
          title: `${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,
          series: unsafeWindow.mid,
          pages: unsafeWindow.total_pages,
          prev: document.querySelector('.recom p:nth-child(5) a')?.getAttribute('href'),
          next: unsafeWindow.next_c_url,
          listImages: n,
          before() {n.some(e => '' === e) && document.querySelector('#nform')?.submit();},
        };
      },
    },
    K = {
      name: 'MangaHub',
      url: /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,
      homepage: 'https://mangahub.io/',
      language: ['English'],
      category: 'manga',
      waitEle: '#select-chapter',
      async run() {
        const e = {
            query: `{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG ?? window.location.pathname.split(
              '/')[2]}",number:${window.location.pathname.split('/')[3].replace('chapter-',
              '')}){pages}}`,
          },
          t = {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {
              'Content-Type': 'application/json',
              'x-mhub-access': function (e) {
                const t = new RegExp(`${e}=([^;]+)`).exec(document.cookie);
                return null != t ? decodeURIComponent(t[1]) : null;
              }('mhub_access') ?? '',
            },
          },
          n = await fetch('https://api.mghcdn.com/graphql', t).then(async e => e.json()),
          a = JSON.parse(n?.data.chapter.pages.toString());
        return {
          title: document.querySelector('#mangareader h3')?.textContent?.trim(),
          series: document.querySelector('#mangareader a')?.getAttribute('href'),
          pages: a.i.length,
          prev: document.querySelector('.previous a')?.getAttribute('href'),
          next: document.querySelector('.next a')?.getAttribute('href'),
          listImages: a.i.map(e => `https://imgx.mghcdn.com/${a.p + e}`),
        };
      },
    },
    Y = {
      name: ['MangaKakalot', 'NeloManga ', 'MangaNato', 'Natomanga'],
      url: /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato).(com|gg).*\/chapter.+/,
      homepage: [
        'https://mangakakalot.gg/',
        'https://www.nelomanga.com/',
        'https://www.manganato.gg/',
        'https://www.natomanga.com/',
      ],
      language: ['English'],
      category: 'manga',
      run() {
        const e = [
          ...document.querySelectorAll('#vungdoc img, .container-chapter-reader img'),
        ];
        return {
          title: document.querySelector(
            '.info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1')?.textContent?.trim(),
          series: document.querySelectorAll('span a[title]').item(1).getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.navi-change-chapter-btn-prev, .next')?.getAttribute(
            'href'),
          next: document.querySelector('.navi-change-chapter-btn-next, .back')?.getAttribute(
            'href'),
          listImages: e.map(e => e.getAttribute('src')),
        };
      },
    },
    X = {
      name: 'MangaOni',
      url: /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,
      homepage: 'https://manga-oni.com/',
      language: ['Spanish'],
      category: 'manga',
      run() {
        document.querySelector('#c_list')?.dispatchEvent(new Event('mouseover'));
        const e = document.querySelector('#c_list option:checked'),
          t = [...document.querySelectorAll('#slider img')];
        return {
          title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
          pages: t?.length,
          prev: e?.nextElementSibling?.getAttribute('value'),
          next: e?.previousElementSibling?.getAttribute('value'),
          listImages: t.map(e => e.getAttribute('data-src') ?? e.getAttribute('src')),
        };
      },
    },
    J = {
      name: 'Mangareader',
      url: /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,
      homepage: 'https://mangareader.to',
      language: ['English'],
      category: 'manga',
      obs: 'Some galleries will not be usable',
      waitEle: '.ds-image, .iv-card',
      async run() {
        const e = document.querySelector('.chapter-item.active'),
          t = [...document.querySelectorAll('.ds-image[data-url], .iv-card[data-url]')].map(
            async e => {
              const t = e.getAttribute('data-url');
              return t && e.classList.contains('shuffled') ? (await imgReverser(t)).toDataURL() : t;
            });
        return {
          title: document.querySelector('.hr-manga h2')?.textContent?.trim(),
          series: document.querySelector('.hr-manga')?.getAttribute('href'),
          pages: t.length,
          prev: e?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
          next: e?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
          listImages: await Promise.all(t),
        };
      },
    },
    Q = {
      name: [
        'MangaStream WordPress Plugin',
        'Realm Oasis',
        'Voids-Scans',
        'Luminous Scans',
        'Shimada Scans',
        'Night Scans',
        'Manhwa-Freak',
        'OzulScansEn',
        'CypherScans',
        'MangaGalaxy',
        'LuaScans',
        'Drake Scans',
        'Rizzfables',
        'NovatoScans',
        'TresDaos',
        'Lectormiau',
        'NTRGod',
      ],
      url: /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod)[^/]*\/.+/,
      homepage: [
        'https://themesia.com/mangastream-wordpress-theme/',
        'https://realmoasis.com/',
        'https://void-scans.com/',
        'https://luminous-scans.com/',
        'https://shimadascans.com/',
        'https://night-scans.com/',
        'https://freakcomic.com/',
        'https://ozulscansen.com/',
        'https://cypherscans.xyz/',
        'https://mangagalaxy.me/',
        'https://luascans.com/',
        'https://drake-scans.com/',
        'https://rizzfables.com/',
        'https://www.novatoscans.top/',
        'https://tresdaos.com',
        'https://zonamiau.com/',
        'https://ntrgod.com/',
      ],
      language: ['English', 'Spanish'],
      category: 'manga',
      waitEle: ':where(#chapter, #nPL_select) option:nth-child(2)',
      run() {
        const e = [
          ...document.querySelectorAll(
            ':where(#readerarea, .check-box) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])'),
        ];
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector(':where(.allc, .tac) a')?.getAttribute(
            'href') ?? document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute(
            'href'),
          pages: e.length,
          prev: o(':where(.nextprev, .inner_nPL) a', ['Prev', 'Anterior'])?.[0]?.getAttribute(
            'href'),
          next: o(':where(.nextprev, .inner_nPL) a', ['Next', 'Siguiente'])?.[0]?.getAttribute(
            'href'),
          listImages: e.map(
            e => e.getAttribute('data-src') ?? e.getAttribute('data-lazy-src') ?? e.getAttribute(
              'src')),
        };
      },
    };
  const ee = [
    m,
    p,
    g,
    w,
    b,
    y,
    E,
    S,
    O,
    k,
    D,
    V,
    U,
    F,
    j,
    W,
    Z,
    K,
    Y,
    X,
    J,
    {
      name: 'MangaToons',
      url: /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,
      homepage: 'https://mangatoon.mobi/',
      language: ['English'],
      category: 'manga',
      waitEle: '.pictures img:not(.cover)',
      run() {
        const e = [...document.querySelectorAll('.pictures img:not(.cover)')];
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('.top-left a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.page-icons-prev')?.getAttribute('href'),
          next: document.querySelector('.page-icons-next')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('data-src')),
        };
      },
    },
    {
      name: 'ManhwaWeb',
      url: /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,
      homepage: 'https://manhwaweb.com/',
      language: ['Spanish'],
      category: 'manga',
      async run() {
        const e = window.location.pathname.replace('/leer', ''),
          t = await fetch(
            `https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(
            async e => e.json()),
          n = await fetch(
            `https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(
            async e => e.json());
        return {
          title: `${t.name} ${t.chapter.chapter}`,
          series: [...document.querySelectorAll('div')].filter(
            e => 'Episodios' === e.textContent)?.[0]?.parentElement?.getAttribute('href'),
          pages: t.chapter.img.length,
          prev: n.chapterAnterior.replace(t._id, t.real_id),
          next: n.chapterSiguiente.replace(t._id, t.real_id),
          listImages: t.chapter.img,
        };
      },
    },
    {
      name: ['MangaGeko.com', 'MangaGeko.cc'],
      url: /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,
      homepage: ['https://www.mgeko.com/', 'https://www.mgeko.cc/'],
      language: ['English'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('#chapter-reader img')];
        return {
          title: document.querySelector('.titles')?.textContent?.trim(),
          series: document.querySelector('.titles a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.chnav.prev')?.getAttribute('href'),
          next: document.querySelector('.chnav.next')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('src')),
        };
      },
    },
    {
      name: 'NineAnime',
      url: /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,
      homepage: 'https://www.nineanime.com/',
      language: ['English'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('.sl-page option')],
          t = document.querySelector('.mangaread-pagenav select option[selected]');
        return {
          title: `${document.querySelector(
            '.title h1')?.textContent?.trim()}/${document.querySelector(
            '.title h2')?.textContent?.trim()}`,
          series: document.querySelector('.title a:has(h2)')?.getAttribute('href'),
          pages: e.length,
          prev: t?.nextElementSibling?.getAttribute('value'),
          next: t?.previousElementSibling?.getAttribute('value'),
          listPages: e.map(e => e.getAttribute('value')),
          img: '.manga_pic',
        };
      },
    },
    {
      name: 'OlympusBiblioteca',
      url: /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,
      homepage: 'https://olympusbiblioteca.com/',
      language: ['Spanish'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('section img.w-full.h-full')];
        return {
          title: document.querySelector('title')?.textContent?.replace(/\|.+/, '').trim(),
          series: document.querySelector('h1')?.closest('a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('a[name="capitulo anterior"]')?.getAttribute('href'),
          next: document.querySelector('a[name="capitulo siguiente"]')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('src')),
        };
      },
    },
    {
      name: 'ReadComicsOnline',
      url: /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,
      homepage: 'https://readcomicsonline.ru/',
      language: ['English'],
      category: 'comic',
      run() {
        const e = [...document.querySelectorAll('#all img')];
        return {
          title: unsafeWindow.title.replace(/ - Page \d+/, ''),
          series: document.querySelector('div.pager-cnt a')?.getAttribute('href'),
          pages: unsafeWindow.pages.length,
          prev: unsafeWindow.prev_chapter,
          next: unsafeWindow.next_chapter,
          listImages: e.map(e => e.getAttribute('data-src')),
        };
      },
    },
    {
      name: 'ReaperScans',
      url: /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,
      homepage: 'https://reaperscans.com/',
      language: ['English'],
      category: 'manga',
      waitEle: '#content .container img:not(.rounded)',
      run() {
        const e = [...document.querySelectorAll('#content .container img:not(.rounded)')];
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('button .fa-house')?.closest('a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('.fa-chevron-left')?.closest('a')?.getAttribute('href'),
          next: document.querySelector('.fa-chevron-right')?.closest('a')?.getAttribute('href'),
          listImages: e.map(e => e.getAttribute('data-src') || e.getAttribute('src')),
        };
      },
    },
    {
      name: 'TuMangaOnline',
      url: /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,
      homepage: 'https://lectortmo.com/',
      language: ['Spanish'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('.img-container img, .viewer-container img')],
          t = [
            ...document.querySelectorAll(
              'div.container:nth-child(4) select#viewer-pages-select option'),
          ],
          n = e.length > 1 ? e.length : t.length;
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('a[title="Volver"]')?.getAttribute('href'),
          pages: n,
          prev: document.querySelector('.chapter-prev a')?.getAttribute('href'),
          next: document.querySelector('.chapter-next a')?.getAttribute('href'), ...e.length > 1 ? {
            listImages: e.map(e => $(e).attr('data-src')),
          } : {
            listPages: Array(t.length).fill(0).map(
              (e, t) => `${window.location.href.replace(/\/\d+$/, '')}/${t + 1}`),
            img: '#viewer-container img, .viewer-page',
          },
        };
      },
    },
    {
      name: 'WebNovel',
      url: /https?:\/\/(www\.)?webnovel.com\/comic\/.+/,
      homepage: 'https://www.webnovel.com/',
      language: ['English'],
      category: 'manga',
      waitVar: 'g_data',
      run() {
        const e = unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(e => e.url);
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: './',
          pages: e.length,
          prev: `${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,
          next: `${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,
          listImages: e,
        };
      },
    },
    {
      name: 'WebToons',
      url: /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,
      homepage: 'https://www.webtoons.com/',
      language: ['English'],
      category: 'manga',
      run() {
        const e = [...document.querySelectorAll('#_imageList img')];
        return {
          title: document.querySelector('.subj_info')?.textContent?.trim(),
          series: document.querySelector('.subj_info a')?.getAttribute('href'),
          pages: e.length,
          prev: document.querySelector('._prevEpisode')?.getAttribute('href'),
          next: document.querySelector('._nextEpisode')?.getAttribute('href'),
          listImages: e.map(
            e => e.getAttribute('data-url') ?? e.getAttribute('data-src') ?? e.getAttribute('src')),
        };
      },
    },
    {
      name: 'WeebCentral',
      url: /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,
      homepage: 'https://weebcentral.com/',
      language: ['English'],
      category: 'manga',
      waitEle: 'main section .maw-w-full',
      async run() {
        const e = [...document.querySelectorAll('main section .maw-w-full')].map(
            e => e.getAttribute('src')),
          t = await fetch(
            document.querySelector('main section a + button')?.getAttribute('hx-get') ?? '').then(
            e => e.text()),
          n = (new DOMParser).parseFromString(t, 'text/html');
        return {
          title: document.querySelector('title')?.textContent?.replace(/ | .+/, '').trim(),
          series: document.querySelector('main section a')?.getAttribute('href'),
          pages: e.length,
          prev: n.querySelector('#selected_chapter')?.nextElementSibling?.getAttribute('href'),
          next: n.querySelector('#selected_chapter')?.previousElementSibling?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    {
      name: 'Vortex Scans',
      url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
      homepage: 'https://vortexscans.org/',
      language: ['English'],
      category: 'manga',
      waitVar: '__next_f',
      waitFunc: () => unsafeWindow.__next_f.find(e => /images/.test(e?.[1]))?.length > 0,
      run() {
        const e = unsafeWindow.__next_f.find(e => /images/.test(e?.[1]))?.[1],
          t = e.slice(e.indexOf('images')).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g);
        return {
          title: document.querySelector('time')?.closest('div')?.querySelector(
            'div')?.textContent?.trim(),
          series: document.querySelector('time')?.closest('a')?.getAttribute('href'),
          pages: t?.length,
          prev: r('button', 'Prev', 'a')?.getAttribute('href'),
          next: r('button', 'Next', 'a')?.getAttribute('href'),
          listImages: t,
        };
      },
    },
    {
      name: 'ZeroScans',
      url: /https?:\/\/(www\.)?zscans.com\/comics\/.+/,
      homepage: 'https://zscans.com/',
      language: ['English'],
      category: 'manga',
      waitVar: '__ZEROSCANS__',
      run() {
        const e = unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,
          t = document.querySelectorAll('.v-btn--router');
        return {
          title: document.querySelector('title')?.textContent?.trim(),
          series: document.querySelector('.v-breadcrumbs li:nth-child(2) + a')?.getAttribute(
            'href'),
          pages: e.length,
          prev: t[0]?.getAttribute('href'),
          next: t[1]?.getAttribute('href'),
          listImages: e,
        };
      },
    },
    Q,
    v,
    z,
  ];

  function te(...e) {return console.log('MangaOnlineViewer: ', ...e), e;}

  function ne(...e) {
    return ['dev', 'development'].includes('main') && console.info('MangaOnlineViewer: ', ...e), e;
  }

  function ae(e) {
    'undefined' != typeof GM_deleteValue ? GM_deleteValue(e) : te('Fake Removing: ', e);
  }

  const oe = 'undefined' != typeof GM_info ? GM_info : {
    scriptHandler: 'Console',
    script: { name: 'Debug', version: 'Testing' },
  };

  function re(e, t = null) {
    const n = function (e, t = null) {
      return 'undefined' != typeof GM_getValue ? GM_getValue(e, t) : (te('Fake Getting: ', e, ' = ',
        t), t);
    }(e, t);
    return 'string' == typeof n ? JSON.parse(n) : n;
  }

  function ie(e, t) {
    return 'undefined' != typeof GM_setValue ? (GM_setValue(e, t), t.toString()) : (te(
      'Fake Setting: ', e, ' = ', t), String(t));
  }

  function le(e) {return ie('settings', e);}

  function se(e) {return ie(window.location.hostname, e);}

  const ce = bowser.getParser(window.navigator.userAgent),
    ue = () => {
      const e = ce.getPlatformType(!0);
      return 'mobile' === e || window.matchMedia(
        'screen and (max-width: 600px)').matches ? 'mobile' : 'tablet' === e || window.matchMedia(
        'screen and (max-width: 992px)').matches ? 'tablet' : 'desktop';
    },
    de = (e, t = 'settings') => {
      if ('undefined' != typeof GM_addValueChangeListener) {
        try {
          return GM_addValueChangeListener(t, (t, n, a, o) => {o && e(a);});
        } finally {}
      }
    };
  var he = Array.isArray,
    me = Array.prototype.indexOf,
    pe = Array.from,
    ge = Object.defineProperty,
    fe = Object.getOwnPropertyDescriptor,
    we = Object.getOwnPropertyDescriptors,
    be = Object.prototype,
    ve = Array.prototype,
    ye = Object.getPrototypeOf,
    Ee = Object.isExtensible;
  const Se = () => {};

  function Oe(e) {return e();}

  function ke(e) {for (var t = 0; t < e.length; t++) e[t]();}

  const Me = 32,
    _e = 64,
    Ae = 256,
    xe = 512,
    Te = 1024,
    Le = 2048,
    Ce = 4096,
    Ie = 8192,
    Re = 16384,
    Be = 65536,
    Pe = 1 << 18,
    He = 1 << 20,
    Ne = 1 << 21,
    De = Symbol('$state'),
    Ve = Symbol('');
  let qe = [];

  function Ge() {
    var e = qe;
    qe = [], ke(e);
  }

  function ze(e) {return e === this.v;}

  function Ue(e,
    t) {return e != e ? t == t : e !== t || null !== e && 'object' == typeof e || 'function' == typeof e;}

  function $e(e) {return !Ue(e, this.v);}

  let Fe = !1;
  const je = Symbol();
  let We = null;

  function Ze(e) {We = e;}

  function Ke(e, t = !1, n) {
    var a = We = {
      p: We,
      c: null,
      d: !1,
      e: null,
      m: !1,
      s: e,
      x: null,
      l: null,
    };
    Fe && !t && (We.l = { s: null, u: null, r1: [], r2: it(!1) }), ln(() => {a.d = !0;});
  }

  function Ye(e) {
    const t = We;
    if (null !== t) {
      const e = t.e;
      if (null !== e) {
        var n = It, a = Tt;
        t.e = null;
        try {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            Rt(r.effect), Ct(r.reaction), cn(r.fn);
          }
        } finally {Rt(n), Ct(a);}
      }
      We = t.p, t.m = !0;
    }
    return {};
  }

  function Xe() {return !Fe || null !== We && null === We.l;}

  function Je(e) {
    if ('object' != typeof e || null === e || De in e) return e;
    const t = ye(e);
    if (t !== be && t !== ve) return e;
    var n = new Map, a = he(e), o = lt(0), r = Tt, i = e => {
      var t = Tt;
      Ct(r);
      var n = e();
      return Ct(t), n;
    };
    return a && n.set('length', lt(e.length)), new Proxy(e, {
      defineProperty(e, t, a) {
        'value' in a && !1 !== a.configurable && !1 !== a.enumerable && !1 !== a.writable || function () {
          throw new Error('https://svelte.dev/e/state_descriptors_fixed');
        }();
        var o = n.get(t);
        return void 0 === o ? o = i(() => {
          var e = lt(a.value);
          return n.set(t, e), e;
        }) : ct(o, a.value, !0), !0;
      },
      deleteProperty(e, t) {
        var r = n.get(t);
        if (void 0 === r) {
          if (t in e) {
            const e = i(() => lt(je));
            n.set(t, e), Qe(o);
          }
        } else {
          if (a && 'string' == typeof t) {
            var l = n.get('length'), s = Number(t);
            Number.isInteger(s) && s < l.v && ct(l, s);
          }
          ct(r, je), Qe(o);
        }
        return !0;
      },
      get(t, a, o) {
        if (a === De) return e;
        var r = n.get(a), l = a in t;
        if (void 0 !== r || l && !fe(t, a)?.writable || (r = i(() => lt(Je(l ? t[a] : je))), n.set(
          a, r)), void 0 !== r) {
          var s = Qt(r);
          return s === je ? void 0 : s;
        }
        return Reflect.get(t, a, o);
      },
      getOwnPropertyDescriptor(e, t) {
        var a = Reflect.getOwnPropertyDescriptor(e, t);
        if (a && 'value' in a) {
          var o = n.get(t);
          o && (a.value = Qt(o));
        } else if (void 0 === a) {
          var r = n.get(t), i = r?.v;
          if (void 0 !== r && i !== je) {
            return {
              enumerable: !0,
              configurable: !0,
              value: i,
              writable: !0,
            };
          }
        }
        return a;
      },
      has(e, t) {
        if (t === De) return !0;
        var a = n.get(t), o = void 0 !== a && a.v !== je || Reflect.has(e, t);
        if ((void 0 !== a || null !== It && (!o || fe(e, t)?.writable)) && (void 0 === a && (a = i(
          () => lt(o ? Je(e[t]) : je)), n.set(t, a)), Qt(a) === je)) {
          return !1;
        }
        return o;
      },
      set(e, t, r, l) {
        var s = n.get(t), c = t in e;
        if (a && 'length' === t) {
          for (var u = r; u < s.v; u += 1) {
            var d = n.get(u + '');
            void 0 !== d ? ct(d, je) : u in e && (d = i(() => lt(je)), n.set(u + '', d));
          }
        }
        void 0 === s ? c && !fe(e, t)?.writable || (ct(s = i(() => lt(void 0)), Je(r)), n.set(t,
          s)) : (c = s.v !== je, ct(s, i(() => Je(r))));
        var h = Reflect.getOwnPropertyDescriptor(e, t);
        if (h?.set && h.set.call(l, r), !c) {
          if (a && 'string' == typeof t) {
            var m = n.get('length'), p = Number(t);
            Number.isInteger(p) && p >= m.v && ct(m, p + 1);
          }
          Qe(o);
        }
        return !0;
      },
      ownKeys(e) {
        Qt(o);
        var t = Reflect.ownKeys(e).filter(e => {
          var t = n.get(e);
          return void 0 === t || t.v !== je;
        });
        for (var [a, r] of n) r.v === je || a in e || t.push(a);
        return t;
      },
      setPrototypeOf() {
        !function () {
          throw new Error('https://svelte.dev/e/state_prototype_fixed');
        }();
      },
    });
  }

  function Qe(e, t = 1) {ct(e, e.v + t);}

  function et(e) {
    var t = 2050, n = null !== Tt && 2 & Tt.f ? Tt : null;
    null === It || null !== n && 0 !== (n.f & Ae) ? t |= Ae : It.f |= He;
    return {
      ctx: We,
      deps: null,
      effects: null,
      equals: ze,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: n ?? It,
    };
  }

  function tt(e) {
    const t = et(e);
    return t.equals = $e, t;
  }

  function nt(e) {
    var t = e.effects;
    if (null !== t) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) fn(t[n]);
    }
  }

  function at(e) {
    var t, n = It;
    Rt(function (e) {
      for (var t = e.parent; null !== t;) {
        if (!(2 & t.f)) return t;
        t = t.parent;
      }
      return null;
    }(e));
    try {nt(e), t = $t(e);} finally {Rt(n);}
    return t;
  }

  function ot(e) {
    var t = at(e);
    (e.equals(t) || (e.v = t, e.wv = Gt()), _t) || nn(e,
      !qt && 0 === (e.f & Ae) || null === e.deps ? Te : Ce);
  }

  const rt = new Map;

  function it(e, t) {return { f: 0, v: e, reactions: null, equals: ze, rv: 0, wv: 0 };}

  function lt(e, t) {
    const n = it(e);
    var a;
    return a = n, null !== Tt && Tt.f & Ne && (null === Bt ? Bt = [Tt, [a]] : Bt[1].push(a)), n;
  }

  function st(e, t = !1, n = !0) {
    const a = it(e);
    return t || (a.equals = $e), Fe && n && null !== We && null !== We.l && (We.l.s ??= []).push(
      a), a;
  }

  function ct(e, t, n = !1) {
    return null === Tt || Lt && 0 === (Tt.f & Pe) || !Xe() || !(262162 & Tt.f) || Bt?.[1].includes(
      e) && Bt[0] === Tt || function () {
      throw new Error('https://svelte.dev/e/state_unsafe_mutation');
    }(), ut(e, n ? Je(t) : t);
  }

  function ut(e, t) {
    if (!e.equals(t)) {
      var n = e.v;
      _t ? rt.set(e, t) : rt.set(e, n), e.v = t, 2 & e.f && (0 !== (e.f & Le) && at(e), nn(e,
        0 === (e.f & Ae) ? Te : Ce)), e.wv = Gt(), dt(e,
        Le), !Xe() || null === It || 0 === (It.f & Te) || 96 & It.f || (null === Nt ? function (e) {Nt = e;}(
        [e]) : Nt.push(e));
    }
    return t;
  }

  function dt(e, t) {
    var n = e.reactions;
    if (null !== n) {
      for (var a = Xe(), o = n.length, r = 0; r < o; r++) {
        var i = n[r], l = i.f;
        0 === (l & Le) && ((a || i !== It) && (nn(i, t), 1280 & l && (2 & l ? dt(i, Ce) : Xt(i))));
      }
    }
  }

  var ht, mt, pt, gt;

  function ft(e = '') {return document.createTextNode(e);}

  function wt(e) {return pt.call(e);}

  function bt(e) {return gt.call(e);}

  function vt(e, t) {return wt(e);}

  function yt(e, t) {
    var n = wt(e);
    return n instanceof Comment && '' === n.data ? bt(n) : n;
  }

  function Et(e, t = 1, n = !1) {
    let a = e;
    for (; t--;) a = bt(a);
    return a;
  }

  function St(e, t) {
    for (; null !== t;) {
      if (128 & t.f) try {return void t.fn(e);} catch {}
      t = t.parent;
    }
    throw e;
  }

  let Ot = !1, kt = null, Mt = !1, _t = !1;

  function At(e) {_t = e;}

  let xt = [], Tt = null, Lt = !1;

  function Ct(e) {Tt = e;}

  let It = null;

  function Rt(e) {It = e;}

  let Bt = null;
  let Pt = null, Ht = 0, Nt = null;
  let Dt = 1, Vt = 0, qt = !1;

  function Gt() {return ++Dt;}

  function zt(e) {
    var t = e.f;
    if (0 !== (t & Le)) return !0;
    if (0 !== (t & Ce)) {
      var n = e.deps, a = 0 !== (t & Ae);
      if (null !== n) {
        var o, r, i = 0 !== (t & xe), l = a && null !== It && !qt, s = n.length;
        if (i || l) {
          var c = e, u = c.parent;
          for (o = 0; o < s; o++) {
            r = n[o], !i && r?.reactions?.includes(
              c) || (r.reactions ??= []).push(c);
          }
          i && (c.f ^= xe), l && null !== u && 0 === (u.f & Ae) && (c.f ^= Ae);
        }
        for (o = 0; o < s; o++) if (zt(r = n[o]) && ot(r), r.wv > e.wv) return !0;
      }
      a && (null === It || qt) || nn(e, Te);
    }
    return !1;
  }

  function Ut(e, t, n = !0) {
    var a = e.reactions;
    if (null !== a) {
      for (var o = 0; o < a.length; o++) {
        var r = a[o];
        Bt?.[1].includes(e) && Bt[0] === Tt || (2 & r.f ? Ut(r, t, !1) : t === r && (n ? nn(r,
          Le) : 0 !== (r.f & Te) && nn(r, Ce), Xt(r)));
      }
    }
  }

  function $t(e) {
    var t = Pt, n = Ht, a = Nt, o = Tt, r = qt, i = Bt, l = We, s = Lt, c = e.f;
    Pt = null, Ht = 0, Nt = null, qt = 0 !== (c & Ae) && (Lt || !Mt || null === Tt), Tt = 96 & c ? null : e, Bt = null, Ze(
      e.ctx), Lt = !1, Vt++, e.f |= Ne;
    try {
      var u = (0, e.fn)(), d = e.deps;
      if (null !== Pt) {
        var h;
        if (jt(e,
          Ht), null !== d && Ht > 0) {
          for (d.length = Ht + Pt.length, h = 0; h < Pt.length; h++) d[Ht + h] = Pt[h];
        } else {
          e.deps = d = Pt;
        }
        if (!qt) for (h = Ht; h < d.length; h++) (d[h].reactions ??= []).push(e);
      } else {
        null !== d && Ht < d.length && (jt(e, Ht), d.length = Ht);
      }
      if (Xe() && null !== Nt && !Lt && null !== d && !(6146 & e.f)) {
        for (h = 0; h < Nt.length; h++) {
          Ut(
            Nt[h], e);
        }
      }
      return null !== o && o !== e && (Vt++, null !== Nt && (null === a ? a = Nt : a.push(
        ...Nt))), u;
    } catch (m) {
      !function (e) {
        var t = It;
        if (32768 & t.f) {
          St(e, t);
        } else {
          if (!(128 & t.f)) throw e;
          t.fn(e);
        }
      }(m);
    } finally {Pt = t, Ht = n, Nt = a, Tt = o, qt = r, Bt = i, Ze(l), Lt = s, e.f ^= Ne;}
  }

  function Ft(e, t) {
    let n = t.reactions;
    if (null !== n) {
      var a = me.call(n, e);
      if (-1 !== a) {
        var o = n.length - 1;
        0 === o ? n = t.reactions = null : (n[a] = n[o], n.pop());
      }
    }
    null === n && 2 & t.f && (null === Pt || !Pt.includes(t)) && (nn(t,
      Ce), 768 & t.f || (t.f ^= xe), nt(t), jt(t, 0));
  }

  function jt(e, t) {
    var n = e.deps;
    if (null !== n) for (var a = t; a < n.length; a++) Ft(e, n[a]);
  }

  function Wt(e) {
    var t = e.f;
    if (0 === (t & Re)) {
      nn(e, Te);
      var n = It, a = Mt;
      It = e, Mt = !0;
      try {
        16 & t ? function (e) {
          var t = e.first;
          for (; null !== t;) {
            var n = t.next;
            0 === (t.f & Me) && fn(t), t = n;
          }
        }(e) : gn(e), pn(e);
        var o = $t(e);
        e.teardown = 'function' == typeof o ? o : null, e.wv = Dt;
      } finally {Mt = a, It = n;}
    }
  }

  function Zt() {
    try {
      !function () {
        throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
      }();
    } catch (e) {
      if (null === kt) throw e;
      St(e, kt);
    }
  }

  function Kt() {
    var e = Mt;
    try {
      var t = 0;
      for (Mt = !0; xt.length > 0;) {
        t++ > 1e3 && Zt();
        var n = xt, a = n.length;
        xt = [];
        for (var o = 0; o < a; o++) {Yt(Jt(n[o]));}
        rt.clear();
      }
    } finally {Ot = !1, Mt = e, kt = null;}
  }

  function Yt(e) {
    var t = e.length;
    if (0 !== t) {
      for (var n = 0; n < t; n++) {
        var a = e[n];
        24576 & a.f || zt(a) && (Wt(
          a), null === a.deps && null === a.first && null === a.nodes_start && (null === a.teardown ? wn(
          a) : a.fn = null));
      }
    }
  }

  function Xt(e) {
    Ot || (Ot = !0, queueMicrotask(Kt));
    for (var t = kt = e; null !== t.parent;) {
      var n = (t = t.parent).f;
      if (96 & n) {
        if (0 === (n & Te)) return;
        t.f ^= Te;
      }
    }
    xt.push(t);
  }

  function Jt(e) {
    for (var t = [], n = e; null !== n;) {
      var a = n.f, o = !!(96 & a);
      if (!(o && 0 !== (a & Te)) && 0 === (a & Ie)) {
        4 & a ? t.push(n) : o ? n.f ^= Te : zt(n) && Wt(n);
        var r = n.first;
        if (null !== r) {
          n = r;
          continue;
        }
      }
      var i = n.parent;
      for (n = n.next; null === n && null !== i;) n = i.next, i = i.parent;
    }
    return t;
  }

  function Qt(e) {
    var t = !!(2 & e.f);
    if (null === Tt || Lt) {
      if (t && null === e.deps && null === e.effects) {
        var n = e,
          a = n.parent;
        null !== a && 0 === (a.f & Ae) && (n.f ^= Ae);
      }
    } else if (!Bt?.[1].includes(e) || Bt[0] !== Tt) {
      var o = Tt.deps;
      e.rv < Vt && (e.rv = Vt, null === Pt && null !== o && o[Ht] === e ? Ht++ : null === Pt ? Pt = [e] : qt && Pt.includes(
        e) || Pt.push(e));
    }
    return t && zt(n = e) && ot(n), _t && rt.has(e) ? rt.get(e) : e.v;
  }

  function en(e) {
    var t = Lt;
    try {return Lt = !0, e();} finally {Lt = t;}
  }

  const tn = -7169;

  function nn(e, t) {e.f = e.f & tn | t;}

  function an(e, t = new Set) {
    if (!('object' != typeof e || null === e || e instanceof EventTarget || t.has(e))) {
      t.add(e), e instanceof Date && e.getTime();
      for (let o in e) try {an(e[o], t);} catch (n) {}
      const a = ye(e);
      if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
        const t = we(a);
        for (let a in t) {
          const o = t[a].get;
          if (o) try {o.call(e);} catch (n) {}
        }
      }
    }
  }

  function on(e) {
    null === It && null === Tt && function () {
      throw new Error('https://svelte.dev/e/effect_orphan');
    }(), null !== Tt && 0 !== (Tt.f & Ae) && null === It && function () {
      throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
    }(), _t && function () {throw new Error('https://svelte.dev/e/effect_in_teardown');}();
  }

  function rn(e, t, n, a = !0) {
    var o = It,
      r = {
        ctx: We,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: e | Le,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: o,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0,
      };
    if (n) try {Wt(r), r.f |= 32768;} catch (l) {throw fn(r), l;} else null !== t && Xt(r);
    if (!(n && null === r.deps && null === r.first && null === r.nodes_start && null === r.teardown && !(1048704 & r.f)) && a && (null !== o && function (e,
      t) {
      var n = t.last;
      null === n ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
    }(r, o), null !== Tt && 2 & Tt.f)) {
      var i = Tt;
      (i.effects ??= []).push(r);
    }
    return r;
  }

  function ln(e) {
    const t = rn(8, null, !1);
    return nn(t, Te), t.teardown = e, t;
  }

  function sn(e) {
    if (on(), !(null !== It && 0 !== (It.f & Me) && null !== We && !We.m)) return cn(e);
    var t = We;
    (t.e ??= []).push({ fn: e, effect: It, reaction: Tt });
  }

  function cn(e) {return rn(4, e, !1);}

  function un(e) {return rn(8, e, !0);}

  function dn(e, t = [], n = et) {
    const a = t.map(n);
    return hn(() => e(...a.map(Qt)));
  }

  function hn(e, t = 0) {return rn(24 | t, e, !0);}

  function mn(e, t = !0) {return rn(40, e, !0, t);}

  function pn(e) {
    var t = e.teardown;
    if (null !== t) {
      const e = _t, n = Tt;
      At(!0), Ct(null);
      try {t.call(null);} finally {At(e), Ct(n);}
    }
  }

  function gn(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; null !== n;) {
      var a = n.next;
      0 !== (n.f & _e) ? n.parent = null : fn(n, t), n = a;
    }
  }

  function fn(e, t = !0) {
    var n = !1;
    (t || 524288 & e.f) && null !== e.nodes_start && null !== e.nodes_end && (!function (e, t) {
      for (; null !== e;) {
        var n = e === t ? null : bt(e);
        e.remove(), e = n;
      }
    }(e.nodes_start, e.nodes_end), n = !0), gn(e, t && !n), jt(e, 0), nn(e, Re);
    var a = e.transitions;
    if (null !== a) for (const r of a) r.stop();
    pn(e);
    var o = e.parent;
    null !== o && null !== o.first && wn(
      e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
  }

  function wn(e) {
    var t = e.parent, n = e.prev, a = e.next;
    null !== n && (n.next = a), null !== a && (a.prev = n), null !== t && (t.first === e && (t.first = a), t.last === e && (t.last = n));
  }

  function bn(e, t) {
    var n = [];
    yn(e, n, !0), vn(n, () => {fn(e), t && t();});
  }

  function vn(e, t) {
    var n = e.length;
    if (n > 0) {
      var a = () => --n || t();
      for (var o of e) o.out(a);
    } else {
      t();
    }
  }

  function yn(e, t, n) {
    if (0 === (e.f & Ie)) {
      if (e.f ^= Ie, null !== e.transitions) {
        for (const a of e.transitions) {
          (a.is_global || n) && t.push(
            a);
        }
      }
      for (var a = e.first; null !== a;) {
        var o = a.next;
        yn(a, t, !!(0 !== (a.f & Be) || 0 !== (a.f & Me)) && n), a = o;
      }
    }
  }

  function En(e) {Sn(e, !0);}

  function Sn(e, t) {
    if (0 !== (e.f & Ie)) {
      e.f ^= Ie;
      for (var n = e.first; null !== n;) {
        var a = n.next;
        Sn(n, !!(0 !== (n.f & Be) || 0 !== (n.f & Me)) && t), n = a;
      }
      if (null !== e.transitions) for (const n of e.transitions) (n.is_global || t) && n.in();
    }
  }

  const On = ['touchstart', 'touchmove'];

  function kn(e) {return On.includes(e);}

  let Mn = !1;

  function _n(e, t, n, a = n) {
    e.addEventListener(t, () => function (e) {
      var t = Tt, n = It;
      Ct(null), Rt(null);
      try {return e();} finally {Ct(t), Rt(n);}
    }(n));
    const o = e.__on_r;
    e.__on_r = o ? () => {o(), a(!0);} : () => a(!0), Mn || (Mn = !0, document.addEventListener(
      'reset', e => {
        Promise.resolve().then(
          () => {if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();});
      }, { capture: !0 }));
  }

  const An = new Set, xn = new Set;

  function Tn(e) {
    for (var t = 0; t < e.length; t++) An.add(e[t]);
    for (var n of xn) n(e);
  }

  function Ln(e) {
    var t = this,
      n = t.ownerDocument,
      a = e.type,
      o = e.composedPath?.() || [],
      r = o[0] || e.target,
      i = 0,
      l = e.__root;
    if (l) {
      var s = o.indexOf(l);
      if (-1 !== s && (t === document || t === window)) return void (e.__root = t);
      var c = o.indexOf(t);
      if (-1 === c) return;
      s <= c && (i = s);
    }
    if ((r = o[i] || e.target) !== t) {
      ge(e, 'currentTarget', { configurable: !0, get: () => r || n });
      var u = Tt, d = It;
      Ct(null), Rt(null);
      try {
        for (var h, m = []; null !== r;) {
          var p = r.assignedSlot || r.parentNode || r.host || null;
          try {
            var g = r['__' + a];
            if (null != g && (!r.disabled || e.target === r)) {
              if (he(g)) {
                var [f, ...w] = g;
                f.apply(r, [e, ...w]);
              } else {
                g.call(r, e);
              }
            }
          } catch (b) {h ? m.push(b) : h = b;}
          if (e.cancelBubble || p === t || null === p) break;
          r = p;
        }
        if (h) {
          for (let e of m) queueMicrotask(() => {throw e;});
          throw h;
        }
      } finally {e.__root = t, delete e.currentTarget, Ct(u), Rt(d);}
    }
  }

  function Cn(e) {
    var t = document.createElement('template');
    return t.innerHTML = e.replaceAll('<!>', '\x3c!----\x3e'), t.content;
  }

  function In(e, t) {
    var n = It;
    null === n.nodes_start && (n.nodes_start = e, n.nodes_end = t);
  }

  function Rn(e, t) {
    var n, a = !!(1 & t), o = !!(2 & t), r = !e.startsWith('<!>');
    return () => {
      void 0 === n && (n = Cn(r ? e : '<!>' + e), a || (n = wt(n)));
      var t = o || mt ? document.importNode(n, !0) : n.cloneNode(!0);
      a ? In(wt(t), t.lastChild) : In(t, t);
      return t;
    };
  }

  function Bn(e, t) {
    return function (e, t, n = 'svg') {
      var a,
        o = `<${n}>${e.startsWith('<!>') ? '<!>' + e : e}</${n}>`;
      return () => {
        if (!a) {
          var e = wt(Cn(o));
          a = wt(e);
        }
        var t = a.cloneNode(!0);
        return In(t, t), t;
      };
    }(e, 0, 'svg');
  }

  function Pn() {
    var e = document.createDocumentFragment(),
      t = document.createComment(''),
      n = ft();
    return e.append(t, n), In(t, n), e;
  }

  function Hn(e, t) {null !== e && e.before(t);}

  function Nn(e, t) {
    var n = null == t ? '' : 'object' == typeof t ? t + '' : t;
    n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + '');
  }

  function Dn(e, t) {
    return function (e,
      { target: t, anchor: n, props: a = {}, events: o, context: r, intro: i = !0 }) {
      !function () {
        if (void 0 === ht) {
          ht = window, mt = /Firefox/.test(navigator.userAgent);
          var e = Element.prototype, t = Node.prototype, n = Text.prototype;
          pt = fe(t, 'firstChild').get, gt = fe(t, 'nextSibling').get, Ee(
            e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ee(
            n) && (n.__t = void 0);
        }
      }();
      var l = new Set, s = e => {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          if (!l.has(a)) {
            l.add(a);
            var o = kn(a);
            t.addEventListener(a, Ln, { passive: o });
            var r = Vn.get(a);
            void 0 === r ? (document.addEventListener(a, Ln, { passive: o }), Vn.set(a,
              1)) : Vn.set(a, r + 1);
          }
        }
      };
      s(pe(An)), xn.add(s);
      var c = void 0, u = function (e) {
        const t = rn(_e, e, !0);
        return (e = {}) => new Promise(
          n => {e.outro ? bn(t, () => {fn(t), n(void 0);}) : (fn(t), n(void 0));});
      }(() => {
        var i = n ?? t.appendChild(ft());
        return mn(() => {
          r && (Ke({}), We.c = r);
          o && (a.$$events = o), c = e(i, a) || {}, r && Ye();
        }), () => {
          for (var e of l) {
            t.removeEventListener(e, Ln);
            var a = Vn.get(e);
            0 === --a ? (document.removeEventListener(e, Ln), Vn.delete(e)) : Vn.set(e, a);
          }
          xn.delete(s), i !== n && i.parentNode?.removeChild(i);
        };
      });
      return qn.set(c, u), c;
    }(e, t);
  }

  const Vn = new Map;
  let qn = new WeakMap;

  function Gn(e, t, [n, a] = [0, 0]) {
    var o = e, r = null, i = null, l = je, s = !1;
    const c = (e, t = !0) => {s = !0, u(t, e);},
      u = (e, t) => {
        l !== (l = e) && (l ? (r ? En(r) : t && (r = mn(() => t(o))), i && bn(i,
          () => {i = null;})) : (i ? En(i) : t && (i = mn(() => t(o, [n + 1, a]))), r && bn(r,
          () => {r = null;})));
      };
    hn(() => {s = !1, t(c), s || u(null, null);}, n > 0 ? Be : 0);
  }

  function zn(e, t) {return t;}

  function Un(e, t, n, a, o, r = null) {
    var i = e, l = { flags: t, items: new Map, first: null };
    !(4 & t) || (i = e.appendChild(ft()));
    var s = null, c = !1, u = tt(() => {
      var e = n();
      return he(e) ? e : null == e ? [] : pe(e);
    });
    hn(() => {
      var e = Qt(u), d = e.length;
      c && 0 === d || (c = 0 === d, function (e, t, n, a, o, r, i) {
        var l,
          s,
          c,
          u,
          d,
          h,
          m = !!(8 & o),
          p = !!(3 & o),
          g = e.length,
          f = t.items,
          w = t.first,
          b = w,
          v = null,
          y = [],
          E = [];
        if (m) {
          for (h = 0; h < g; h += 1) {
            u = r(c = e[h], h), void 0 !== (d = f.get(
              u)) && (d.a?.measure(), (s ??= new Set).add(d));
          }
        }
        for (h = 0; h < g; h += 1) {
          if (u = r(c = e[h], h), void 0 !== (d = f.get(u))) {
            if (p && $n(d, c, h, o), 0 !== (d.e.f & Ie) && (En(
              d.e), m && (d.a?.unfix(), (s ??= new Set).delete(d))), d !== b) {
              if (void 0 !== l && l.has(d)) {
                if (y.length < E.length) {
                  var S, O = E[0];
                  v = O.prev;
                  var k = y[0], M = y[y.length - 1];
                  for (S = 0; S < y.length; S += 1) jn(y[S], O, n);
                  for (S = 0; S < E.length; S += 1) l.delete(E[S]);
                  Wn(t, k.prev, M.next), Wn(t, v, k), Wn(t, M,
                    O), b = O, v = M, h -= 1, y = [], E = [];
                } else {
                  l.delete(d), jn(d, b, n), Wn(t, d.prev, d.next), Wn(t, d,
                    null === v ? t.first : v.next), Wn(t, v, d), v = d;
                }
                continue;
              }
              for (y = [], E = []; null !== b && b.k !== u;) {
                0 === (b.e.f & Ie) && (l ??= new Set).add(
                  b), E.push(b), b = b.next;
              }
              if (null === b) continue;
              d = b;
            }
            y.push(d), v = d, b = d.next;
          } else {
            v = Fn(b ? b.e.nodes_start : n, t, v, null === v ? t.first : v.next, c, u, h, a, o,
              i), f.set(u, v), y = [], E = [], b = v.next;
          }
        }
        if (null !== b || void 0 !== l) {
          for (var _ = void 0 === l ? [] : pe(l); null !== b;) {
            0 === (b.e.f & Ie) && _.push(
              b), b = b.next;
          }
          var A = _.length;
          if (A > 0) {
            var x = 4 & o && 0 === g ? n : null;
            if (m) {
              for (h = 0; h < A; h += 1) _[h].a?.measure();
              for (h = 0; h < A; h += 1) _[h].a?.fix();
            }
            !function (e, t, n, a) {
              for (var o = [], r = t.length, i = 0; i < r; i++) yn(t[i].e, o, !0);
              var l = r > 0 && 0 === o.length && null !== n;
              if (l) {
                var s = n.parentNode;
                s.textContent = '', s.append(n), a.clear(), Wn(e, t[0].prev, t[r - 1].next);
              }
              vn(o, () => {
                for (var n = 0; n < r; n++) {
                  var o = t[n];
                  l || (a.delete(o.k), Wn(e, o.prev, o.next)), fn(o.e, !l);
                }
              });
            }(t, _, x, f);
          }
        }
        m && (T = () => {if (void 0 !== s) for (d of s) d.a?.apply();}, 0 === qe.length && queueMicrotask(
          Ge), qe.push(T));
        var T;
        It.first = t.first && t.first.e, It.last = v && v.e;
      }(e, l, i, o, t, a, n), null !== r && (0 === d ? s ? En(s) : s = mn(
        () => r(i)) : null !== s && bn(s, () => {s = null;})), Qt(u));
    });
  }

  function $n(e, t, n, a) {1 & a && ut(e.v, t), 2 & a ? ut(e.i, n) : e.i = n;}

  function Fn(e, t, n, a, o, r, i, l, s, c) {
    var u = !!(1 & s) ? !(16 & s) ? st(o, !1, !1) : it(o) : o,
      d = 2 & s ? it(i) : i,
      h = { i: d, v: u, k: r, a: null, e: null, prev: n, next: a };
    try {
      return h.e = mn(() => l(e, u, d, c),
        false), h.e.prev = n && n.e, h.e.next = a && a.e, null === n ? t.first = h : (n.next = h, n.e.next = h.e), null !== a && (a.prev = h, a.e.prev = h.e), h;
    } finally {}
  }

  function jn(e, t, n) {
    for (var a = e.next ? e.next.e.nodes_start : n, o = t ? t.e.nodes_start : n, r = e.e.nodes_start; r !== a;) {
      var i = bt(r);
      o.before(r), r = i;
    }
  }

  function Wn(e, t,
    n) {null === t ? e.first = n : (t.next = n, t.e.next = n && n.e), null !== n && (n.prev = t, n.e.prev = t && t.e);}

  function Zn(e) {
    var t, n, a = '';
    if ('string' == typeof e || 'number' == typeof e) {
      a += e;
    } else if ('object' == typeof e) {
      if (Array.isArray(
        e)) {
        var o = e.length;
        for (t = 0; t < o; t++) e[t] && (n = Zn(e[t])) && (a && (a += ' '), a += n);
      } else {
        for (n in e) e[n] && (a && (a += ' '), a += n);
      }
    }
    return a;
  }

  function Kn(e) {
    return 'object' == typeof e ? function () {
      for (var e, t, n = 0, a = '', o = arguments.length; n < o; n++) {
        (e = arguments[n]) && (t = Zn(
          e)) && (a && (a += ' '), a += t);
      }
      return a;
    }(e) : e ?? '';
  }

  function Yn(e, t, n, a, o, r) {
    var i = e.__className;
    if (i !== n || void 0 === i) {
      var l = function (e) {
        var t = null == e ? '' : '' + e;
        return '' === t ? null : t;
      }(n);
      null == l ? e.removeAttribute('class') : e.className = l, e.__className = n;
    }
    return r;
  }

  const Xn = Symbol('is custom element'), Jn = Symbol('is html');

  function Qn(e, t) {
    var n = aa(e);
    n.value !== (n.value = t ?? void 0) && (e.value !== t || 0 === t && 'PROGRESS' === e.nodeName) && (e.value = t ?? '');
  }

  function ea(e, t) {
    var n = aa(e);
    n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
  }

  function ta(e, t) {
    t ? e.hasAttribute('selected') || e.setAttribute('selected', '') : e.removeAttribute('selected');
  }

  function na(e, t, n, a) {
    var o = aa(e);
    o[t] !== (o[t] = n) && ('loading' === t && (e[Ve] = n), null == n ? e.removeAttribute(
      t) : 'string' != typeof n && function (e) {
      var t, n = oa.get(e.nodeName);
      if (n) return n;
      oa.set(e.nodeName, n = []);
      var a = e, o = Element.prototype;
      for (; o !== a;) {
        for (var r in t = we(a)) t[r].set && n.push(r);
        a = ye(a);
      }
      return n;
    }(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }

  function aa(e) {
    return e.__attributes ??= {
      [Xn]: e.nodeName.includes('-'),
      [Jn]: 'http://www.w3.org/1999/xhtml' === e.namespaceURI,
    };
  }

  var oa = new Map;

  function ra(e, t, n = t) {
    var a = Xe();
    _n(e, 'input', o => {
      var r = o ? e.defaultValue : e.value;
      if (r = ia(e) ? la(r) : r, n(r), a && r !== (r = t())) {
        var i = e.selectionStart,
          l = e.selectionEnd;
        e.value = r ?? '', null !== l && (e.selectionStart = i, e.selectionEnd = Math.min(l,
          e.value.length));
      }
    }), null == en(t) && e.value && n(ia(e) ? la(e.value) : e.value), un(() => {
      var n = t();
      ia(e) && n === la(
        e.value) || ('date' !== e.type || n || e.value) && n !== e.value && (e.value = n ?? '');
    });
  }

  function ia(e) {
    var t = e.type;
    return 'number' === t || 'range' === t;
  }

  function la(e) {return '' === e ? null : +e;}

  function sa(e = !1) {
    const t = We, n = t.l.u;
    if (!n) return;
    let a = () => function (e) {
      if ('object' == typeof e && e && !(e instanceof EventTarget)) {
        if (De in e) {
          an(
            e);
        } else if (!Array.isArray(e)) {
          for (let t in e) {
            const n = e[t];
            'object' == typeof n && n && De in n && an(n);
          }
        }
      }
    }(t.s);
    if (e) {
      let e = 0, n = {};
      const o = et(() => {
        let a = !1;
        const o = t.s;
        for (const e in o) o[e] !== n[e] && (n[e] = o[e], a = !0);
        return a && e++, e;
      });
      a = () => Qt(o);
    }
    var o;
    n.b.length && (o = () => {ca(t, a), ke(n.b);}, on(), un(o)), sn(() => {
      const e = en(() => n.m.map(Oe));
      return () => {for (const t of e) 'function' == typeof t && t();};
    }), n.a.length && sn(() => {ca(t, a), ke(n.a);});
  }

  function ca(e, t) {
    if (e.l.s) for (const n of e.l.s) Qt(n);
    t();
  }

  let ua = Symbol();

  function da(e, t, n) {
    const a = n[t] ??= { store: null, source: st(void 0), unsubscribe: Se };
    if (a.store !== e && !(ua in n)) {
      if (a.unsubscribe(), a.store = e ?? null, null == e) {
        a.source.v = void 0, a.unsubscribe = Se;
      } else {
        var o = !0;
        a.unsubscribe = ga(e, e => {o ? a.source.v = e : ct(a.source, e);}), o = !1;
      }
    }
    return e && ua in n ? va(e) : Qt(a.source);
  }

  function ha() {
    const e = {};
    return [
      e, function () {
        ln(() => {
          for (var t in e) {e[t].unsubscribe();}
          ge(e, ua, { enumerable: !1, value: !0 });
        });
      },
    ];
  }

  function ma(e, t, n) {return e.set(n), t;}

  function pa(e, t, n, a) {
    var o;
    o = e[t];
    var r = a, i = !0, l = () => (i && (i = !1, r = a), r);
    return void 0 === o && void 0 !== a && (o = l()), () => {
      var n = e[t];
      return void 0 === n ? l() : (i = !0, n);
    };
  }

  function ga(e, t, n) {
    if (null == e) return t(void 0), n && n(void 0), Se;
    const a = en(() => e.subscribe(t, n));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }

  const fa = [];

  function wa(e, t = Se) {
    let n = null;
    const a = new Set;

    function o(t) {
      if (Ue(e, t) && (e = t, n)) {
        const t = !fa.length;
        for (const n of a) n[1](), fa.push(n, e);
        if (t) {
          for (let e = 0; e < fa.length; e += 2) fa[e][0](fa[e + 1]);
          fa.length = 0;
        }
      }
    }

    function r(t) {o(t(e));}

    return {
      set: o, update: r, subscribe: function (i, l = Se) {
        const s = [i, l];
        return a.add(s), 1 === a.size && (n = t(o, r) || Se), i(e), () => {
          a.delete(s), 0 === a.size && n && (n(), n = null);
        };
      },
    };
  }

  function ba(e, t, n) {
    const a = !Array.isArray(e), o = a ? [e] : e;
    if (!o.every(Boolean)) throw new Error('derived() expects stores as input, got a falsy value');
    const r = t.length < 2;
    return function (e, t) {return { subscribe: wa(e, t).subscribe };}(n, (e, n) => {
      let i = !1;
      const l = [];
      let s = 0, c = Se;
      const u = () => {
        if (s) return;
        c();
        const o = t(a ? l[0] : l, e, n);
        r ? e(o) : c = 'function' == typeof o ? o : Se;
      }, d = o.map((e, t) => ga(e, e => {l[t] = e, s &= ~(1 << t), i && u();}, () => {s |= 1 << t;}));
      return i = !0, u(), function () {ke(d), c(), i = !1;};
    });
  }

  function va(e) {
    let t;
    return ga(e, e => t = e)(), t;
  }

  var ya,
    Ea,
    Sa = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};

  function Oa(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
  }

  var ka = function () {
    if (Ea) return ya;
    Ea = 1;
    var e = function (e) {
      return function (e) {return !!e && 'object' == typeof e;}(e) && !function (e) {
        var n = Object.prototype.toString.call(e);
        return '[object RegExp]' === n || '[object Date]' === n || function (e) {return e.$$typeof === t;}(
          e);
      }(e);
    }, t = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;

    function n(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? l((n = e, Array.isArray(n) ? [] : {}), e,
        t) : e;
      var n;
    }

    function a(e, t, a) {return e.concat(t).map(function (e) {return n(e, a);});}

    function o(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(
          function (t) {return Object.propertyIsEnumerable.call(e, t);}) : [];
      }(e));
    }

    function r(e, t) {try {return t in e;} catch (_) {return !1;}}

    function i(e, t, a) {
      var i = {};
      return a.isMergeableObject(e) && o(e).forEach(function (t) {i[t] = n(e[t], a);}), o(t).forEach(
        function (o) {
          (function (e, t) {
            return r(e, t) && !(Object.hasOwnProperty.call(e,
              t) && Object.propertyIsEnumerable.call(e, t));
          })(e, o) || (r(e, o) && a.isMergeableObject(t[o]) ? i[o] = function (e, t) {
            if (!t.customMerge) return l;
            var n = t.customMerge(e);
            return 'function' == typeof n ? n : l;
          }(o, a)(e[o], t[o], a) : i[o] = n(t[o], a));
        }), i;
    }

    function l(t, o, r) {
      (r = r || {}).arrayMerge = r.arrayMerge || a, r.isMergeableObject = r.isMergeableObject || e, r.cloneUnlessOtherwiseSpecified = n;
      var l = Array.isArray(o);
      return l === Array.isArray(t) ? l ? r.arrayMerge(t, o, r) : i(t, o, r) : n(o, r);
    }

    return l.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error('first argument should be an array');
      return e.reduce(function (e, n) {return l(e, n, t);}, {});
    }, ya = l;
  }();
  const Ma = Oa(ka);
  var _a = function (e, t) {
    return _a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e,
      t) {e.__proto__ = t;} || function (e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }, _a(e, t);
  };

  function Aa(e, t) {
    if ('function' != typeof t && null !== t) {
      throw new TypeError(
        'Class extends value ' + String(t) + ' is not a constructor or null');
    }

    function n() {this.constructor = e;}

    _a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
  }

  var xa = function () {
    return xa = Object.assign || function (e) {
      for (var t, n = 1, a = arguments.length; n < a; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(
            t, o) && (e[o] = t[o]);
        }
      }
      return e;
    }, xa.apply(this, arguments);
  };

  function Ta(e, t, n) {
    if (n || 2 === arguments.length) {
      for (var a, o = 0, r = t.length; o < r; o++) {
        !a && o in t || (a || (a = Array.prototype.slice.call(
          t, 0, o)), a[o] = t[o]);
      }
    }
    return e.concat(a || Array.prototype.slice.call(t));
  }

  function La(e, t) {
    var n = t && t.cache ? t.cache : qa, a = t && t.serializer ? t.serializer : Da;
    return (t && t.strategy ? t.strategy : Ba)(e, { cache: n, serializer: a });
  }

  function Ca(e, t, n, a) {
    var o,
      r = null == (o = a) || 'number' == typeof o || 'boolean' == typeof o ? a : n(a),
      i = t.get(r);
    return void 0 === i && (i = e.call(this, a), t.set(r, i)), i;
  }

  function Ia(e, t, n) {
    var a = Array.prototype.slice.call(arguments, 3), o = n(a), r = t.get(o);
    return void 0 === r && (r = e.apply(this, a), t.set(o, r)), r;
  }

  function Ra(e, t, n, a, o) {return n.bind(t, e, a, o);}

  function Ba(e, t) {return Ra(e, this, 1 === e.length ? Ca : Ia, t.cache.create(), t.serializer);}

  'function' == typeof SuppressedError && SuppressedError;
  var Pa,
    Ha,
    Na,
    Da = function () {return JSON.stringify(arguments);},
    Va = function () {
      function e() {this.cache = Object.create(null);}

      return e.prototype.get = function (e) {return this.cache[e];}, e.prototype.set = function (e,
        t) {this.cache[e] = t;}, e;
    }(),
    qa = { create: function () {return new Va;} },
    Ga = { variadic: function (e, t) {return Ra(e, this, Ia, t.cache.create(), t.serializer);} };

  function za(e) {return e.type === Ha.literal;}

  function Ua(e) {return e.type === Ha.argument;}

  function $a(e) {return e.type === Ha.number;}

  function Fa(e) {return e.type === Ha.date;}

  function ja(e) {return e.type === Ha.time;}

  function Wa(e) {return e.type === Ha.select;}

  function Za(e) {return e.type === Ha.plural;}

  function Ka(e) {return e.type === Ha.pound;}

  function Ya(e) {return e.type === Ha.tag;}

  function Xa(e) {return !(!e || 'object' != typeof e || e.type !== Na.number);}

  function Ja(e) {return !(!e || 'object' != typeof e || e.type !== Na.dateTime);}

  !function (e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = 'EXPECT_ARGUMENT_CLOSING_BRACE', e[e.EMPTY_ARGUMENT = 2] = 'EMPTY_ARGUMENT', e[e.MALFORMED_ARGUMENT = 3] = 'MALFORMED_ARGUMENT', e[e.EXPECT_ARGUMENT_TYPE = 4] = 'EXPECT_ARGUMENT_TYPE', e[e.INVALID_ARGUMENT_TYPE = 5] = 'INVALID_ARGUMENT_TYPE', e[e.EXPECT_ARGUMENT_STYLE = 6] = 'EXPECT_ARGUMENT_STYLE', e[e.INVALID_NUMBER_SKELETON = 7] = 'INVALID_NUMBER_SKELETON', e[e.INVALID_DATE_TIME_SKELETON = 8] = 'INVALID_DATE_TIME_SKELETON', e[e.EXPECT_NUMBER_SKELETON = 9] = 'EXPECT_NUMBER_SKELETON', e[e.EXPECT_DATE_TIME_SKELETON = 10] = 'EXPECT_DATE_TIME_SKELETON', e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE', e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = 'EXPECT_SELECT_ARGUMENT_OPTIONS', e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = 'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE', e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = 'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE', e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = 'EXPECT_SELECT_ARGUMENT_SELECTOR', e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR', e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = 'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT', e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT', e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = 'INVALID_PLURAL_ARGUMENT_SELECTOR', e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = 'DUPLICATE_PLURAL_ARGUMENT_SELECTOR', e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = 'DUPLICATE_SELECT_ARGUMENT_SELECTOR', e[e.MISSING_OTHER_CLAUSE = 22] = 'MISSING_OTHER_CLAUSE', e[e.INVALID_TAG = 23] = 'INVALID_TAG', e[e.INVALID_TAG_NAME = 25] = 'INVALID_TAG_NAME', e[e.UNMATCHED_CLOSING_TAG = 26] = 'UNMATCHED_CLOSING_TAG', e[e.UNCLOSED_TAG = 27] = 'UNCLOSED_TAG';
  }(Pa || (Pa = {})), function (e) {e[e.literal = 0] = 'literal', e[e.argument = 1] = 'argument', e[e.number = 2] = 'number', e[e.date = 3] = 'date', e[e.time = 4] = 'time', e[e.select = 5] = 'select', e[e.plural = 6] = 'plural', e[e.pound = 7] = 'pound', e[e.tag = 8] = 'tag';}(
    Ha || (Ha = {})), function (e) {e[e.number = 0] = 'number', e[e.dateTime = 1] = 'dateTime';}(
    Na || (Na = {}));
  var Qa = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    eo = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

  function to(e) {
    var t = {};
    return e.replace(eo, function (e) {
      var n = e.length;
      switch (e[0]) {
        case'G':
          t.era = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
          break;
        case'y':
          t.year = 2 === n ? '2-digit' : 'numeric';
          break;
        case'Y':
        case'u':
        case'U':
        case'r':
          throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
        case'q':
        case'Q':
          throw new RangeError('`q/Q` (quarter) patterns are not supported');
        case'M':
        case'L':
          t.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][n - 1];
          break;
        case'w':
        case'W':
          throw new RangeError('`w/W` (week) patterns are not supported');
        case'd':
          t.day = ['numeric', '2-digit'][n - 1];
          break;
        case'D':
        case'F':
        case'g':
          throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
        case'E':
          t.weekday = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
          break;
        case'e':
          if (n < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
          t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
          break;
        case'c':
          if (n < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
          t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
          break;
        case'a':
          t.hour12 = !0;
          break;
        case'b':
        case'B':
          throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
        case'h':
          t.hourCycle = 'h12', t.hour = ['numeric', '2-digit'][n - 1];
          break;
        case'H':
          t.hourCycle = 'h23', t.hour = ['numeric', '2-digit'][n - 1];
          break;
        case'K':
          t.hourCycle = 'h11', t.hour = ['numeric', '2-digit'][n - 1];
          break;
        case'k':
          t.hourCycle = 'h24', t.hour = ['numeric', '2-digit'][n - 1];
          break;
        case'j':
        case'J':
        case'C':
          throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
        case'm':
          t.minute = ['numeric', '2-digit'][n - 1];
          break;
        case's':
          t.second = ['numeric', '2-digit'][n - 1];
          break;
        case'S':
        case'A':
          throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
        case'z':
          t.timeZoneName = n < 4 ? 'short' : 'long';
          break;
        case'Z':
        case'O':
        case'v':
        case'V':
        case'X':
        case'x':
          throw new RangeError(
            '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
      }
      return '';
    }), t;
  }

  var no = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

  function ao(e) {return e.replace(/^(.*?)-/, '');}

  var oo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    ro = /^(@+)?(\+|#+)?[rs]?$/g,
    io = /(\*)(0+)|(#+)(0+)|(0+)/g,
    lo = /^(0+)$/;

  function so(e) {
    var t = {};
    return 'r' === e[e.length - 1] ? t.roundingPriority = 'morePrecision' : 's' === e[e.length - 1] && (t.roundingPriority = 'lessPrecision'), e.replace(
      ro, function (e, n,
        a) {return 'string' != typeof a ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : '+' === a ? t.minimumSignificantDigits = n.length : '#' === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ('string' == typeof a ? a.length : 0)), '';}), t;
  }

  function co(e) {
    switch (e) {
      case'sign-auto':
        return { signDisplay: 'auto' };
      case'sign-accounting':
      case'()':
        return { currencySign: 'accounting' };
      case'sign-always':
      case'+!':
        return { signDisplay: 'always' };
      case'sign-accounting-always':
      case'()!':
        return { signDisplay: 'always', currencySign: 'accounting' };
      case'sign-except-zero':
      case'+?':
        return { signDisplay: 'exceptZero' };
      case'sign-accounting-except-zero':
      case'()?':
        return { signDisplay: 'exceptZero', currencySign: 'accounting' };
      case'sign-never':
      case'+_':
        return { signDisplay: 'never' };
    }
  }

  function uo(e) {
    var t;
    if ('E' === e[0] && 'E' === e[1] ? (t = { notation: 'engineering' }, e = e.slice(
      2)) : 'E' === e[0] && (t = { notation: 'scientific' }, e = e.slice(1)), t) {
      var n = e.slice(0, 2);
      if ('+!' === n ? (t.signDisplay = 'always', e = e.slice(
        2)) : '+?' === n && (t.signDisplay = 'exceptZero', e = e.slice(2)), !lo.test(
        e)) {
        throw new Error('Malformed concise eng/scientific notation');
      }
      t.minimumIntegerDigits = e.length;
    }
    return t;
  }

  function ho(e) {
    var t = co(e);
    return t || {};
  }

  function mo(e) {
    for (var t = {}, n = 0, a = e; n < a.length; n++) {
      var o = a[n];
      switch (o.stem) {
        case'percent':
        case'%':
          t.style = 'percent';
          continue;
        case'%x100':
          t.style = 'percent', t.scale = 100;
          continue;
        case'currency':
          t.style = 'currency', t.currency = o.options[0];
          continue;
        case'group-off':
        case',_':
          t.useGrouping = !1;
          continue;
        case'precision-integer':
        case'.':
          t.maximumFractionDigits = 0;
          continue;
        case'measure-unit':
        case'unit':
          t.style = 'unit', t.unit = ao(o.options[0]);
          continue;
        case'compact-short':
        case'K':
          t.notation = 'compact', t.compactDisplay = 'short';
          continue;
        case'compact-long':
        case'KK':
          t.notation = 'compact', t.compactDisplay = 'long';
          continue;
        case'scientific':
          t = xa(xa(xa({}, t), { notation: 'scientific' }),
            o.options.reduce(function (e, t) {return xa(xa({}, e), ho(t));}, {}));
          continue;
        case'engineering':
          t = xa(xa(xa({}, t), { notation: 'engineering' }),
            o.options.reduce(function (e, t) {return xa(xa({}, e), ho(t));}, {}));
          continue;
        case'notation-simple':
          t.notation = 'standard';
          continue;
        case'unit-width-narrow':
          t.currencyDisplay = 'narrowSymbol', t.unitDisplay = 'narrow';
          continue;
        case'unit-width-short':
          t.currencyDisplay = 'code', t.unitDisplay = 'short';
          continue;
        case'unit-width-full-name':
          t.currencyDisplay = 'name', t.unitDisplay = 'long';
          continue;
        case'unit-width-iso-code':
          t.currencyDisplay = 'symbol';
          continue;
        case'scale':
          t.scale = parseFloat(o.options[0]);
          continue;
        case'rounding-mode-floor':
          t.roundingMode = 'floor';
          continue;
        case'rounding-mode-ceiling':
          t.roundingMode = 'ceil';
          continue;
        case'rounding-mode-down':
          t.roundingMode = 'trunc';
          continue;
        case'rounding-mode-up':
          t.roundingMode = 'expand';
          continue;
        case'rounding-mode-half-even':
          t.roundingMode = 'halfEven';
          continue;
        case'rounding-mode-half-down':
          t.roundingMode = 'halfTrunc';
          continue;
        case'rounding-mode-half-up':
          t.roundingMode = 'halfExpand';
          continue;
        case'integer-width':
          if (o.options.length > 1) {
            throw new RangeError(
              'integer-width stems only accept a single optional option');
          }
          o.options[0].replace(io, function (e, n, a, o, r, i) {
            if (n) {
              t.minimumIntegerDigits = a.length;
            } else {
              if (o && r) throw new Error('We currently do not support maximum integer digits');
              if (i) throw new Error('We currently do not support exact integer digits');
            }
            return '';
          });
          continue;
      }
      if (lo.test(o.stem)) {
        t.minimumIntegerDigits = o.stem.length;
      } else if (oo.test(o.stem)) {
        if (o.options.length > 1) {
          throw new RangeError(
            'Fraction-precision stems only accept a single optional option');
        }
        o.stem.replace(oo, function (e, n, a, o, r,
          i) {return '*' === a ? t.minimumFractionDigits = n.length : o && '#' === o[0] ? t.maximumFractionDigits = o.length : r && i ? (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length + i.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), '';});
        var r = o.options[0];
        'w' === r ? t = xa(xa({}, t), { trailingZeroDisplay: 'stripIfInteger' }) : r && (t = xa(
          xa({}, t), so(r)));
      } else if (ro.test(o.stem)) {
        t = xa(xa({}, t), so(o.stem));
      } else {
        var i = co(o.stem);
        i && (t = xa(xa({}, t), i));
        var l = uo(o.stem);
        l && (t = xa(xa({}, t), l));
      }
    }
    return t;
  }

  var po, go = {
    '001': ['H', 'h'],
    419: ['h', 'H', 'hB', 'hb'],
    AC: ['H', 'h', 'hb', 'hB'],
    AD: ['H', 'hB'],
    AE: ['h', 'hB', 'hb', 'H'],
    AF: ['H', 'hb', 'hB', 'h'],
    AG: ['h', 'hb', 'H', 'hB'],
    AI: ['H', 'h', 'hb', 'hB'],
    AL: ['h', 'H', 'hB'],
    AM: ['H', 'hB'],
    AO: ['H', 'hB'],
    AR: ['h', 'H', 'hB', 'hb'],
    AS: ['h', 'H'],
    AT: ['H', 'hB'],
    AU: ['h', 'hb', 'H', 'hB'],
    AW: ['H', 'hB'],
    AX: ['H'],
    AZ: ['H', 'hB', 'h'],
    BA: ['H', 'hB', 'h'],
    BB: ['h', 'hb', 'H', 'hB'],
    BD: ['h', 'hB', 'H'],
    BE: ['H', 'hB'],
    BF: ['H', 'hB'],
    BG: ['H', 'hB', 'h'],
    BH: ['h', 'hB', 'hb', 'H'],
    BI: ['H', 'h'],
    BJ: ['H', 'hB'],
    BL: ['H', 'hB'],
    BM: ['h', 'hb', 'H', 'hB'],
    BN: ['hb', 'hB', 'h', 'H'],
    BO: ['h', 'H', 'hB', 'hb'],
    BQ: ['H'],
    BR: ['H', 'hB'],
    BS: ['h', 'hb', 'H', 'hB'],
    BT: ['h', 'H'],
    BW: ['H', 'h', 'hb', 'hB'],
    BY: ['H', 'h'],
    BZ: ['H', 'h', 'hb', 'hB'],
    CA: ['h', 'hb', 'H', 'hB'],
    CC: ['H', 'h', 'hb', 'hB'],
    CD: ['hB', 'H'],
    CF: ['H', 'h', 'hB'],
    CG: ['H', 'hB'],
    CH: ['H', 'hB', 'h'],
    CI: ['H', 'hB'],
    CK: ['H', 'h', 'hb', 'hB'],
    CL: ['h', 'H', 'hB', 'hb'],
    CM: ['H', 'h', 'hB'],
    CN: ['H', 'hB', 'hb', 'h'],
    CO: ['h', 'H', 'hB', 'hb'],
    CP: ['H'],
    CR: ['h', 'H', 'hB', 'hb'],
    CU: ['h', 'H', 'hB', 'hb'],
    CV: ['H', 'hB'],
    CW: ['H', 'hB'],
    CX: ['H', 'h', 'hb', 'hB'],
    CY: ['h', 'H', 'hb', 'hB'],
    CZ: ['H'],
    DE: ['H', 'hB'],
    DG: ['H', 'h', 'hb', 'hB'],
    DJ: ['h', 'H'],
    DK: ['H'],
    DM: ['h', 'hb', 'H', 'hB'],
    DO: ['h', 'H', 'hB', 'hb'],
    DZ: ['h', 'hB', 'hb', 'H'],
    EA: ['H', 'h', 'hB', 'hb'],
    EC: ['h', 'H', 'hB', 'hb'],
    EE: ['H', 'hB'],
    EG: ['h', 'hB', 'hb', 'H'],
    EH: ['h', 'hB', 'hb', 'H'],
    ER: ['h', 'H'],
    ES: ['H', 'hB', 'h', 'hb'],
    ET: ['hB', 'hb', 'h', 'H'],
    FI: ['H'],
    FJ: ['h', 'hb', 'H', 'hB'],
    FK: ['H', 'h', 'hb', 'hB'],
    FM: ['h', 'hb', 'H', 'hB'],
    FO: ['H', 'h'],
    FR: ['H', 'hB'],
    GA: ['H', 'hB'],
    GB: ['H', 'h', 'hb', 'hB'],
    GD: ['h', 'hb', 'H', 'hB'],
    GE: ['H', 'hB', 'h'],
    GF: ['H', 'hB'],
    GG: ['H', 'h', 'hb', 'hB'],
    GH: ['h', 'H'],
    GI: ['H', 'h', 'hb', 'hB'],
    GL: ['H', 'h'],
    GM: ['h', 'hb', 'H', 'hB'],
    GN: ['H', 'hB'],
    GP: ['H', 'hB'],
    GQ: ['H', 'hB', 'h', 'hb'],
    GR: ['h', 'H', 'hb', 'hB'],
    GT: ['h', 'H', 'hB', 'hb'],
    GU: ['h', 'hb', 'H', 'hB'],
    GW: ['H', 'hB'],
    GY: ['h', 'hb', 'H', 'hB'],
    HK: ['h', 'hB', 'hb', 'H'],
    HN: ['h', 'H', 'hB', 'hb'],
    HR: ['H', 'hB'],
    HU: ['H', 'h'],
    IC: ['H', 'h', 'hB', 'hb'],
    ID: ['H'],
    IE: ['H', 'h', 'hb', 'hB'],
    IL: ['H', 'hB'],
    IM: ['H', 'h', 'hb', 'hB'],
    IN: ['h', 'H'],
    IO: ['H', 'h', 'hb', 'hB'],
    IQ: ['h', 'hB', 'hb', 'H'],
    IR: ['hB', 'H'],
    IS: ['H'],
    IT: ['H', 'hB'],
    JE: ['H', 'h', 'hb', 'hB'],
    JM: ['h', 'hb', 'H', 'hB'],
    JO: ['h', 'hB', 'hb', 'H'],
    JP: ['H', 'K', 'h'],
    KE: ['hB', 'hb', 'H', 'h'],
    KG: ['H', 'h', 'hB', 'hb'],
    KH: ['hB', 'h', 'H', 'hb'],
    KI: ['h', 'hb', 'H', 'hB'],
    KM: ['H', 'h', 'hB', 'hb'],
    KN: ['h', 'hb', 'H', 'hB'],
    KP: ['h', 'H', 'hB', 'hb'],
    KR: ['h', 'H', 'hB', 'hb'],
    KW: ['h', 'hB', 'hb', 'H'],
    KY: ['h', 'hb', 'H', 'hB'],
    KZ: ['H', 'hB'],
    LA: ['H', 'hb', 'hB', 'h'],
    LB: ['h', 'hB', 'hb', 'H'],
    LC: ['h', 'hb', 'H', 'hB'],
    LI: ['H', 'hB', 'h'],
    LK: ['H', 'h', 'hB', 'hb'],
    LR: ['h', 'hb', 'H', 'hB'],
    LS: ['h', 'H'],
    LT: ['H', 'h', 'hb', 'hB'],
    LU: ['H', 'h', 'hB'],
    LV: ['H', 'hB', 'hb', 'h'],
    LY: ['h', 'hB', 'hb', 'H'],
    MA: ['H', 'h', 'hB', 'hb'],
    MC: ['H', 'hB'],
    MD: ['H', 'hB'],
    ME: ['H', 'hB', 'h'],
    MF: ['H', 'hB'],
    MG: ['H', 'h'],
    MH: ['h', 'hb', 'H', 'hB'],
    MK: ['H', 'h', 'hb', 'hB'],
    ML: ['H'],
    MM: ['hB', 'hb', 'H', 'h'],
    MN: ['H', 'h', 'hb', 'hB'],
    MO: ['h', 'hB', 'hb', 'H'],
    MP: ['h', 'hb', 'H', 'hB'],
    MQ: ['H', 'hB'],
    MR: ['h', 'hB', 'hb', 'H'],
    MS: ['H', 'h', 'hb', 'hB'],
    MT: ['H', 'h'],
    MU: ['H', 'h'],
    MV: ['H', 'h'],
    MW: ['h', 'hb', 'H', 'hB'],
    MX: ['h', 'H', 'hB', 'hb'],
    MY: ['hb', 'hB', 'h', 'H'],
    MZ: ['H', 'hB'],
    NA: ['h', 'H', 'hB', 'hb'],
    NC: ['H', 'hB'],
    NE: ['H'],
    NF: ['H', 'h', 'hb', 'hB'],
    NG: ['H', 'h', 'hb', 'hB'],
    NI: ['h', 'H', 'hB', 'hb'],
    NL: ['H', 'hB'],
    NO: ['H', 'h'],
    NP: ['H', 'h', 'hB'],
    NR: ['H', 'h', 'hb', 'hB'],
    NU: ['H', 'h', 'hb', 'hB'],
    NZ: ['h', 'hb', 'H', 'hB'],
    OM: ['h', 'hB', 'hb', 'H'],
    PA: ['h', 'H', 'hB', 'hb'],
    PE: ['h', 'H', 'hB', 'hb'],
    PF: ['H', 'h', 'hB'],
    PG: ['h', 'H'],
    PH: ['h', 'hB', 'hb', 'H'],
    PK: ['h', 'hB', 'H'],
    PL: ['H', 'h'],
    PM: ['H', 'hB'],
    PN: ['H', 'h', 'hb', 'hB'],
    PR: ['h', 'H', 'hB', 'hb'],
    PS: ['h', 'hB', 'hb', 'H'],
    PT: ['H', 'hB'],
    PW: ['h', 'H'],
    PY: ['h', 'H', 'hB', 'hb'],
    QA: ['h', 'hB', 'hb', 'H'],
    RE: ['H', 'hB'],
    RO: ['H', 'hB'],
    RS: ['H', 'hB', 'h'],
    RU: ['H'],
    RW: ['H', 'h'],
    SA: ['h', 'hB', 'hb', 'H'],
    SB: ['h', 'hb', 'H', 'hB'],
    SC: ['H', 'h', 'hB'],
    SD: ['h', 'hB', 'hb', 'H'],
    SE: ['H'],
    SG: ['h', 'hb', 'H', 'hB'],
    SH: ['H', 'h', 'hb', 'hB'],
    SI: ['H', 'hB'],
    SJ: ['H'],
    SK: ['H'],
    SL: ['h', 'hb', 'H', 'hB'],
    SM: ['H', 'h', 'hB'],
    SN: ['H', 'h', 'hB'],
    SO: ['h', 'H'],
    SR: ['H', 'hB'],
    SS: ['h', 'hb', 'H', 'hB'],
    ST: ['H', 'hB'],
    SV: ['h', 'H', 'hB', 'hb'],
    SX: ['H', 'h', 'hb', 'hB'],
    SY: ['h', 'hB', 'hb', 'H'],
    SZ: ['h', 'hb', 'H', 'hB'],
    TA: ['H', 'h', 'hb', 'hB'],
    TC: ['h', 'hb', 'H', 'hB'],
    TD: ['h', 'H', 'hB'],
    TF: ['H', 'h', 'hB'],
    TG: ['H', 'hB'],
    TH: ['H', 'h'],
    TJ: ['H', 'h'],
    TL: ['H', 'hB', 'hb', 'h'],
    TM: ['H', 'h'],
    TN: ['h', 'hB', 'hb', 'H'],
    TO: ['h', 'H'],
    TR: ['H', 'hB'],
    TT: ['h', 'hb', 'H', 'hB'],
    TW: ['hB', 'hb', 'h', 'H'],
    TZ: ['hB', 'hb', 'H', 'h'],
    UA: ['H', 'hB', 'h'],
    UG: ['hB', 'hb', 'H', 'h'],
    UM: ['h', 'hb', 'H', 'hB'],
    US: ['h', 'hb', 'H', 'hB'],
    UY: ['h', 'H', 'hB', 'hb'],
    UZ: ['H', 'hB', 'h'],
    VA: ['H', 'h', 'hB'],
    VC: ['h', 'hb', 'H', 'hB'],
    VE: ['h', 'H', 'hB', 'hb'],
    VG: ['h', 'hb', 'H', 'hB'],
    VI: ['h', 'hb', 'H', 'hB'],
    VN: ['H', 'h'],
    VU: ['h', 'H'],
    WF: ['H', 'hB'],
    WS: ['h', 'H'],
    XK: ['H', 'hB', 'h'],
    YE: ['h', 'hB', 'hb', 'H'],
    YT: ['H', 'hB'],
    ZA: ['H', 'h', 'hb', 'hB'],
    ZM: ['h', 'hb', 'H', 'hB'],
    ZW: ['H', 'h'],
    'af-ZA': ['H', 'h', 'hB', 'hb'],
    'ar-001': ['h', 'hB', 'hb', 'H'],
    'ca-ES': ['H', 'h', 'hB'],
    'en-001': ['h', 'hb', 'H', 'hB'],
    'en-HK': ['h', 'hb', 'H', 'hB'],
    'en-IL': ['H', 'h', 'hb', 'hB'],
    'en-MY': ['h', 'hb', 'H', 'hB'],
    'es-BR': ['H', 'h', 'hB', 'hb'],
    'es-ES': ['H', 'h', 'hB', 'hb'],
    'es-GQ': ['H', 'h', 'hB', 'hb'],
    'fr-CA': ['H', 'h', 'hB'],
    'gl-ES': ['H', 'h', 'hB'],
    'gu-IN': ['hB', 'hb', 'h', 'H'],
    'hi-IN': ['hB', 'h', 'H'],
    'it-CH': ['H', 'h', 'hB'],
    'it-IT': ['H', 'h', 'hB'],
    'kn-IN': ['hB', 'h', 'H'],
    'ml-IN': ['hB', 'h', 'H'],
    'mr-IN': ['hB', 'hb', 'h', 'H'],
    'pa-IN': ['hB', 'hb', 'h', 'H'],
    'ta-IN': ['hB', 'h', 'hb', 'H'],
    'te-IN': ['hB', 'h', 'H'],
    'zu-ZA': ['H', 'hB', 'hb', 'h'],
  };

  function fo(e) {
    var t = e.hourCycle;
    if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) {
      switch (t) {
        case'h24':
          return 'k';
        case'h23':
          return 'H';
        case'h12':
          return 'h';
        case'h11':
          return 'K';
        default:
          throw new Error('Invalid hourCycle');
      }
    }
    var n, a = e.language;
    return 'root' !== a && (n = e.maximize().region), (go[n || ''] || go[a || ''] || go[''.concat(a,
      '-001')] || go['001'])[0];
  }

  var wo = new RegExp('^'.concat(Qa.source, '*')), bo = new RegExp(''.concat(Qa.source, '*$'));

  function vo(e, t) {return { start: e, end: t };}

  var yo = !!String.prototype.startsWith && '_a'.startsWith('a', 1),
    Eo = !!String.fromCodePoint,
    So = !!Object.fromEntries,
    Oo = !!String.prototype.codePointAt,
    ko = !!String.prototype.trimStart,
    Mo = !!String.prototype.trimEnd,
    _o = !!Number.isSafeInteger ? Number.isSafeInteger : function (e) {
      return 'number' == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(
        e) <= 9007199254740991;
    },
    Ao = !0;
  try {
    Ao = 'a' === (null === (po = Po('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu').exec(
      'a')) || void 0 === po ? void 0 : po[0]);
  } catch (_) {Ao = !1;}
  var xo,
    To = yo ? function (e, t, n) {return e.startsWith(t, n);} : function (e, t, n) {
      return e.slice(n, n + t.length) === t;
    },
    Lo = Eo ? String.fromCodePoint : function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n, a = '', o = e.length, r = 0; o > r;) {
        if ((n = e[r++]) > 1114111) throw RangeError(n + ' is not a valid code point');
        a += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10),
          n % 1024 + 56320);
      }
      return a;
    },
    Co = So ? Object.fromEntries : function (e) {
      for (var t = {}, n = 0, a = e; n < a.length; n++) {
        var o = a[n],
          r = o[0],
          i = o[1];
        t[r] = i;
      }
      return t;
    },
    Io = Oo ? function (e, t) {return e.codePointAt(t);} : function (e, t) {
      var n = e.length;
      if (!(t < 0 || t >= n)) {
        var a, o = e.charCodeAt(t);
        return o < 55296 || o > 56319 || t + 1 === n || (a = e.charCodeAt(
          t + 1)) < 56320 || a > 57343 ? o : a - 56320 + (o - 55296 << 10) + 65536;
      }
    },
    Ro = ko ? function (e) {return e.trimStart();} : function (e) {return e.replace(wo, '');},
    Bo = Mo ? function (e) {return e.trimEnd();} : function (e) {return e.replace(bo, '');};

  function Po(e, t) {return new RegExp(e, t);}

  if (Ao) {
    var Ho = Po('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    xo = function (e, t) {
      var n;
      return Ho.lastIndex = t, null !== (n = Ho.exec(e)[1]) && void 0 !== n ? n : '';
    };
  } else {
    xo = function (e, t) {
      for (var n = []; ;) {
        var a = Io(e, t);
        if (void 0 === a || Go(a) || zo(a)) break;
        n.push(a), t += a >= 65536 ? 2 : 1;
      }
      return Lo.apply(void 0, n);
    };
  }
  var No, Do = function () {
    function e(e, t) {
      void 0 === t && (t = {}), this.message = e, this.position = {
        offset: 0,
        line: 1,
        column: 1,
      }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
    }

    return e.prototype.parse = function () {
      if (0 !== this.offset()) throw Error('parser can only be used once');
      return this.parseMessage(0, '', !1);
    }, e.prototype.parseMessage = function (e, t, n) {
      for (var a = []; !this.isEOF();) {
        var o = this.char();
        if (123 === o) {
          if ((r = this.parseArgument(e, n)).err) return r;
          a.push(r.val);
        } else {
          if (125 === o && e > 0) break;
          if (35 !== o || 'plural' !== t && 'selectordinal' !== t) {
            if (60 === o && !this.ignoreTag && 47 === this.peek()) {
              if (n) break;
              return this.error(Pa.UNMATCHED_CLOSING_TAG,
                vo(this.clonePosition(), this.clonePosition()));
            }
            if (60 === o && !this.ignoreTag && Vo(this.peek() || 0)) {
              if ((r = this.parseTag(e, t)).err) return r;
              a.push(r.val);
            } else {
              var r;
              if ((r = this.parseLiteral(e, t)).err) return r;
              a.push(r.val);
            }
          } else {
            var i = this.clonePosition();
            this.bump(), a.push({ type: Ha.pound, location: vo(i, this.clonePosition()) });
          }
        }
      }
      return { val: a, err: null };
    }, e.prototype.parseTag = function (e, t) {
      var n = this.clonePosition();
      this.bump();
      var a = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf('/>')) {
        return {
          val: {
            type: Ha.literal,
            value: '<'.concat(a, '/>'),
            location: vo(n, this.clonePosition()),
          }, err: null,
        };
      }
      if (this.bumpIf('>')) {
        var o = this.parseMessage(e + 1, t, !0);
        if (o.err) return o;
        var r = o.val, i = this.clonePosition();
        if (this.bumpIf('</')) {
          if (this.isEOF() || !Vo(this.char())) {
            return this.error(Pa.INVALID_TAG,
              vo(i, this.clonePosition()));
          }
          var l = this.clonePosition();
          return a !== this.parseTagName() ? this.error(Pa.UNMATCHED_CLOSING_TAG,
            vo(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf('>') ? {
            val: {
              type: Ha.tag,
              value: a,
              children: r,
              location: vo(n, this.clonePosition()),
            }, err: null,
          } : this.error(Pa.INVALID_TAG, vo(i, this.clonePosition())));
        }
        return this.error(Pa.UNCLOSED_TAG, vo(n, this.clonePosition()));
      }
      return this.error(Pa.INVALID_TAG, vo(n, this.clonePosition()));
    }, e.prototype.parseTagName = function () {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && qo(this.char());) this.bump();
      return this.message.slice(e, this.offset());
    }, e.prototype.parseLiteral = function (e, t) {
      for (var n = this.clonePosition(), a = ''; ;) {
        var o = this.tryParseQuote(t);
        if (o) {
          a += o;
        } else {
          var r = this.tryParseUnquoted(e, t);
          if (r) {
            a += r;
          } else {
            var i = this.tryParseLeftAngleBracket();
            if (!i) break;
            a += i;
          }
        }
      }
      var l = vo(n, this.clonePosition());
      return { val: { type: Ha.literal, value: a, location: l }, err: null };
    }, e.prototype.tryParseLeftAngleBracket = function () {
      return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Vo(
        e = this.peek() || 0) || 47 === e) ? null : (this.bump(), '<');
      var e;
    }, e.prototype.tryParseQuote = function (e) {
      if (this.isEOF() || 39 !== this.char()) return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), '\'';
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if ('plural' === e || 'selectordinal' === e) break;
          return null;
        default:
          return null;
      }
      this.bump();
      var t = [this.char()];
      for (this.bump(); !this.isEOF();) {
        var n = this.char();
        if (39 === n) {
          if (39 !== this.peek()) {
            this.bump();
            break;
          }
          t.push(39), this.bump();
        } else {
          t.push(n);
        }
        this.bump();
      }
      return Lo.apply(void 0, t);
    }, e.prototype.tryParseUnquoted = function (e, t) {
      if (this.isEOF()) return null;
      var n = this.char();
      return 60 === n || 123 === n || 35 === n && ('plural' === t || 'selectordinal' === t) || 125 === n && e > 0 ? null : (this.bump(), Lo(
        n));
    }, e.prototype.parseArgument = function (e, t) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF()) {
        return this.error(
          Pa.EXPECT_ARGUMENT_CLOSING_BRACE, vo(n, this.clonePosition()));
      }
      if (125 === this.char()) {
        return this.bump(), this.error(Pa.EMPTY_ARGUMENT,
          vo(n, this.clonePosition()));
      }
      var a = this.parseIdentifierIfPossible().value;
      if (!a) return this.error(Pa.MALFORMED_ARGUMENT, vo(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF()) {
        return this.error(Pa.EXPECT_ARGUMENT_CLOSING_BRACE,
          vo(n, this.clonePosition()));
      }
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ha.argument,
              value: a,
              location: vo(n, this.clonePosition()),
            }, err: null,
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(
            Pa.EXPECT_ARGUMENT_CLOSING_BRACE,
            vo(n, this.clonePosition())) : this.parseArgumentOptions(e, t, a, n);
        default:
          return this.error(Pa.MALFORMED_ARGUMENT, vo(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function () {
      var e = this.clonePosition(),
        t = this.offset(),
        n = xo(this.message, t),
        a = t + n.length;
      return this.bumpTo(a), { value: n, location: vo(e, this.clonePosition()) };
    }, e.prototype.parseArgumentOptions = function (e, t, n, a) {
      var o,
        r = this.clonePosition(),
        i = this.parseIdentifierIfPossible().value,
        l = this.clonePosition();
      switch (i) {
        case'':
          return this.error(Pa.EXPECT_ARGUMENT_TYPE, vo(r, l));
        case'number':
        case'date':
        case'time':
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(',')) {
            this.bumpSpace();
            var c = this.clonePosition();
            if ((w = this.parseSimpleArgStyleIfPossible()).err) return w;
            if (0 === (m = Bo(w.val)).length) {
              return this.error(Pa.EXPECT_ARGUMENT_STYLE,
                vo(this.clonePosition(), this.clonePosition()));
            }
            s = { style: m, styleLocation: vo(c, this.clonePosition()) };
          }
          if ((b = this.tryParseArgumentClose(a)).err) return b;
          var u = vo(a, this.clonePosition());
          if (s && To(null == s ? void 0 : s.style, '::', 0)) {
            var d = Ro(s.style.slice(2));
            if ('number' === i) {
              return (w = this.parseNumberSkeletonFromString(d,
                s.styleLocation)).err ? w : {
                val: {
                  type: Ha.number,
                  value: n,
                  location: u,
                  style: w.val,
                }, err: null,
              };
            }
            if (0 === d.length) return this.error(Pa.EXPECT_DATE_TIME_SKELETON, u);
            var h = d;
            this.locale && (h = function (e, t) {
              for (var n = '', a = 0; a < e.length; a++) {
                var o = e.charAt(a);
                if ('j' === o) {
                  for (var r = 0; a + 1 < e.length && e.charAt(a + 1) === o;) r++, a++;
                  var i = 1 + (1 & r), l = r < 2 ? 1 : 3 + (r >> 1), s = fo(t);
                  for ('H' != s && 'k' != s || (l = 0); l-- > 0;) n += 'a';
                  for (; i-- > 0;) n = s + n;
                } else {
                  n += 'J' === o ? 'H' : o;
                }
              }
              return n;
            }(d, this.locale));
            var m = {
              type: Na.dateTime,
              pattern: h,
              location: s.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? to(h) : {},
            };
            return {
              val: {
                type: 'date' === i ? Ha.date : Ha.time,
                value: n,
                location: u,
                style: m,
              }, err: null,
            };
          }
          return {
            val: {
              type: 'number' === i ? Ha.number : 'date' === i ? Ha.date : Ha.time,
              value: n,
              location: u,
              style: null !== (o = null == s ? void 0 : s.style) && void 0 !== o ? o : null,
            }, err: null,
          };
        case'plural':
        case'selectordinal':
        case'select':
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(',')) {
            return this.error(
              Pa.EXPECT_SELECT_ARGUMENT_OPTIONS, vo(p, xa({}, p)));
          }
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), f = 0;
          if ('select' !== i && 'offset' === g.value) {
            if (!this.bumpIf(':')) {
              return this.error(Pa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                vo(this.clonePosition(), this.clonePosition()));
            }
            var w;
            if (this.bumpSpace(), (w = this.tryParseDecimalInteger(
              Pa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              Pa.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) {
              return w;
            }
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), f = w.val;
          }
          var b, v = this.tryParsePluralOrSelectOptions(e, i, t, g);
          if (v.err) return v;
          if ((b = this.tryParseArgumentClose(a)).err) return b;
          var y = vo(a, this.clonePosition());
          return 'select' === i ? {
            val: {
              type: Ha.select,
              value: n,
              options: Co(v.val),
              location: y,
            }, err: null,
          } : {
            val: {
              type: Ha.plural,
              value: n,
              options: Co(v.val),
              offset: f,
              pluralType: 'plural' === i ? 'cardinal' : 'ordinal',
              location: y,
            }, err: null,
          };
        default:
          return this.error(Pa.INVALID_ARGUMENT_TYPE, vo(r, l));
      }
    }, e.prototype.tryParseArgumentClose = function (e) {
      return this.isEOF() || 125 !== this.char() ? this.error(Pa.EXPECT_ARGUMENT_CLOSING_BRACE,
        vo(e, this.clonePosition())) : (this.bump(), {
        val: !0,
        err: null,
      });
    }, e.prototype.parseSimpleArgStyleIfPossible = function () {
      for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
        switch (this.char()) {
          case 39:
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil('\'')) {
              return this.error(Pa.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                vo(n, this.clonePosition()));
            }
            this.bump();
            break;
          case 123:
            e += 1, this.bump();
            break;
          case 125:
            if (!(e > 0)) return { val: this.message.slice(t.offset, this.offset()), err: null };
            e -= 1;
            break;
          default:
            this.bump();
        }
      }
      return { val: this.message.slice(t.offset, this.offset()), err: null };
    }, e.prototype.parseNumberSkeletonFromString = function (e, t) {
      var n = [];
      try {
        n = function (e) {
          if (0 === e.length) throw new Error('Number skeleton cannot be empty');
          for (var t = [], n = 0, a = e.split(no).filter(
            function (e) {return e.length > 0;}); n < a.length; n++) {
            var o = a[n].split('/');
            if (0 === o.length) throw new Error('Invalid number skeleton');
            for (var r = o[0], i = o.slice(
              1), l = 0, s = i; l < s.length; l++) {
              if (0 === s[l].length) {
                throw new Error(
                  'Invalid number skeleton');
              }
            }
            t.push({ stem: r, options: i });
          }
          return t;
        }(e);
      } catch (a) {return this.error(Pa.INVALID_NUMBER_SKELETON, t);}
      return {
        val: {
          type: Na.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? mo(n) : {},
        }, err: null,
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, a) {
      for (var o, r = !1, i = [], l = new Set, s = a.value, c = a.location; ;) {
        if (0 === s.length) {
          var u = this.clonePosition();
          if ('select' === t || !this.bumpIf('=')) break;
          var d = this.tryParseDecimalInteger(Pa.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            Pa.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (d.err) return d;
          c = vo(u, this.clonePosition()), s = this.message.slice(u.offset, this.offset());
        }
        if (l.has(s)) {
          return this.error(
            'select' === t ? Pa.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Pa.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
            c);
        }
        'other' === s && (r = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf('{')) {
          return this.error(
            'select' === t ? Pa.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Pa.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
            vo(this.clonePosition(), this.clonePosition()));
        }
        var m = this.parseMessage(e + 1, t, n);
        if (m.err) return m;
        var p = this.tryParseArgumentClose(h);
        if (p.err) return p;
        i.push([s, { value: m.val, location: vo(h, this.clonePosition()) }]), l.add(
          s), this.bumpSpace(), s = (o = this.parseIdentifierIfPossible()).value, c = o.location;
      }
      return 0 === i.length ? this.error(
        'select' === t ? Pa.EXPECT_SELECT_ARGUMENT_SELECTOR : Pa.EXPECT_PLURAL_ARGUMENT_SELECTOR,
        vo(this.clonePosition(),
          this.clonePosition())) : this.requiresOtherClause && !r ? this.error(
        Pa.MISSING_OTHER_CLAUSE, vo(this.clonePosition(), this.clonePosition())) : {
        val: i,
        err: null,
      };
    }, e.prototype.tryParseDecimalInteger = function (e, t) {
      var n = 1, a = this.clonePosition();
      this.bumpIf('+') || this.bumpIf('-') && (n = -1);
      for (var o = !1, r = 0; !this.isEOF();) {
        var i = this.char();
        if (!(i >= 48 && i <= 57)) break;
        o = !0, r = 10 * r + (i - 48), this.bump();
      }
      var l = vo(a, this.clonePosition());
      return o ? _o(r *= n) ? { val: r, err: null } : this.error(t, l) : this.error(e, l);
    }, e.prototype.offset = function () {return this.position.offset;}, e.prototype.isEOF = function () {return this.offset() === this.message.length;}, e.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column,
      };
    }, e.prototype.char = function () {
      var e = this.position.offset;
      if (e >= this.message.length) throw Error('out of bound');
      var t = Io(this.message, e);
      if (void 0 === t) {
        throw Error(
          'Offset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
      }
      return t;
    }, e.prototype.error = function (e, t) {
      return {
        val: null,
        err: { kind: e, message: this.message, location: t },
      };
    }, e.prototype.bump = function () {
      if (!this.isEOF()) {
        var e = this.char();
        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function (e) {
      if (To(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++) this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function (e) {
      var t = this.offset(), n = this.message.indexOf(e, t);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function (e) {
      if (this.offset() > e) {
        throw Error(
          'targetOffset '.concat(e, ' must be greater than or equal to the current offset ').concat(
            this.offset()));
      }
      for (e = Math.min(e, this.message.length); ;) {
        var t = this.offset();
        if (t === e) break;
        if (t > e) {
          throw Error(
            'targetOffset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
        }
        if (this.bump(), this.isEOF()) break;
      }
    }, e.prototype.bumpSpace = function () {
      for (; !this.isEOF() && Go(this.char());) this.bump();
    }, e.prototype.peek = function () {
      if (this.isEOF()) return null;
      var e = this.char(), t = this.offset(), n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
      return null != n ? n : null;
    }, e;
  }();

  function Vo(e) {return e >= 97 && e <= 122 || e >= 65 && e <= 90;}

  function qo(e) {return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;}

  function Go(e) {return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;}

  function zo(e) {
    return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094;
  }

  function Uo(e) {
    e.forEach(function (e) {
      if (delete e.location, Wa(e) || Za(
        e)) {
        for (var t in e.options) delete e.options[t].location, Uo(e.options[t].value);
      } else {
        $a(
          e) && Xa(e.style) || (Fa(e) || ja(e)) && Ja(e.style) ? delete e.style.location : Ya(
          e) && Uo(e.children);
      }
    });
  }

  function $o(e, t) {
    void 0 === t && (t = {}), t = xa({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
    var n = new Do(e, t).parse();
    if (n.err) {
      var a = SyntaxError(Pa[n.err.kind]);
      throw a.location = n.err.location, a.originalMessage = n.err.message, a;
    }
    return (null == t ? void 0 : t.captureLocation) || Uo(n.val), n.val;
  }

  !function (e) {e.MISSING_VALUE = 'MISSING_VALUE', e.INVALID_VALUE = 'INVALID_VALUE', e.MISSING_INTL_API = 'MISSING_INTL_API';}(
    No || (No = {}));
  var Fo,
    jo = function (e) {
      function t(t, n, a) {
        var o = e.call(this, t) || this;
        return o.code = n, o.originalMessage = a, o;
      }

      return Aa(t, e), t.prototype.toString = function () {
        return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
      }, t;
    }(Error),
    Wo = function (e) {
      function t(t, n, a, o) {
        return e.call(this,
          'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(
            Object.keys(a).join('", "'), '"'), No.INVALID_VALUE, o) || this;
      }

      return Aa(t, e), t;
    }(jo),
    Zo = function (e) {
      function t(t, n, a) {
        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n),
          No.INVALID_VALUE, a) || this;
      }

      return Aa(t, e), t;
    }(jo),
    Ko = function (e) {
      function t(t, n) {
        return e.call(this, 'The intl string context variable "'.concat(t,
          '" was not provided to the string "').concat(n, '"'), No.MISSING_VALUE, n) || this;
      }

      return Aa(t, e), t;
    }(jo);

  function Yo(e) {return 'function' == typeof e;}

  function Xo(e, t, n, a, o, r, i) {
    if (1 === e.length && za(e[0])) return [{ type: Fo.literal, value: e[0].value }];
    for (var l = [], s = 0, c = e; s < c.length; s++) {
      var u = c[s];
      if (za(u)) {
        l.push({ type: Fo.literal, value: u.value });
      } else if (Ka(
        u)) {
        'number' == typeof r && l.push(
          { type: Fo.literal, value: n.getNumberFormat(t).format(r) });
      } else {
        var d = u.value;
        if (!o || !(d in o)) throw new Ko(d, i);
        var h = o[d];
        if (Ua(
          u)) {
          h && 'string' != typeof h && 'number' != typeof h || (h = 'string' == typeof h || 'number' == typeof h ? String(
            h) : ''), l.push(
            { type: 'string' == typeof h ? Fo.literal : Fo.object, value: h });
        } else if (Fa(u)) {
          var m = 'string' == typeof u.style ? a.date[u.style] : Ja(
            u.style) ? u.style.parsedOptions : void 0;
          l.push({ type: Fo.literal, value: n.getDateTimeFormat(t, m).format(h) });
        } else if (ja(u)) {
          m = 'string' == typeof u.style ? a.time[u.style] : Ja(
            u.style) ? u.style.parsedOptions : a.time.medium;
          l.push({ type: Fo.literal, value: n.getDateTimeFormat(t, m).format(h) });
        } else if ($a(u)) {
          (m = 'string' == typeof u.style ? a.number[u.style] : Xa(
            u.style) ? u.style.parsedOptions : void 0) && m.scale && (h *= m.scale || 1), l.push(
            { type: Fo.literal, value: n.getNumberFormat(t, m).format(h) });
        } else {
          if (Ya(u)) {
            var p = u.children, g = u.value, f = o[g];
            if (!Yo(f)) throw new Zo(g, 'function', i);
            var w = f(Xo(p, t, n, a, o, r).map(function (e) {return e.value;}));
            Array.isArray(w) || (w = [w]), l.push.apply(l, w.map(function (e) {
              return {
                type: 'string' == typeof e ? Fo.literal : Fo.object,
                value: e,
              };
            }));
          }
          if (Wa(u)) {
            if (!(b = u.options[h] || u.options.other)) {
              throw new Wo(u.value, h,
                Object.keys(u.options), i);
            }
            l.push.apply(l, Xo(b.value, t, n, a, o));
          } else if (Za(u)) {
            var b;
            if (!(b = u.options['='.concat(h)])) {
              if (!Intl.PluralRules) {
                throw new jo(
                  'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                  No.MISSING_INTL_API, i);
              }
              var v = n.getPluralRules(t, { type: u.pluralType }).select(h - (u.offset || 0));
              b = u.options[v] || u.options.other;
            }
            if (!b) throw new Wo(u.value, h, Object.keys(u.options), i);
            l.push.apply(l, Xo(b.value, t, n, a, o, h - (u.offset || 0)));
          } else {
            ;
          }
        }
      }
    }
    return function (e) {
      return e.length < 2 ? e : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return n && n.type === Fo.literal && t.type === Fo.literal ? n.value += t.value : e.push(
          t), e;
      }, []);
    }(l);
  }

  function Jo(e, t) {
    return t ? Object.keys(e).reduce(function (n, a) {
      var o, r;
      return n[a] = (o = e[a], (r = t[a]) ? xa(xa(xa({}, o || {}), r || {}),
        Object.keys(o).reduce(function (e, t) {return e[t] = xa(xa({}, o[t]), r[t] || {}), e;},
          {})) : o), n;
    }, xa({}, e)) : e;
  }

  function Qo(e) {
    return {
      create: function () {
        return {
          get: function (t) {return e[t];},
          set: function (t, n) {e[t] = n;},
        };
      },
    };
  }

  !function (e) {e[e.literal = 0] = 'literal', e[e.object = 1] = 'object';}(Fo || (Fo = {}));
  var er = function () {
    function e(t, n, a, o) {
      void 0 === n && (n = e.defaultLocale);
      var r, i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {},
      }, this.format = function (e) {
        var t = i.formatToParts(e);
        if (1 === t.length) return t[0].value;
        var n = t.reduce(function (e, t) {
          return e.length && t.type === Fo.literal && 'string' == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(
            t.value), e;
        }, []);
        return n.length <= 1 ? n[0] || '' : n;
      }, this.formatToParts = function (e) {
        return Xo(i.ast, i.locales, i.formatters, i.formats, e, void 0, i.message);
      }, this.resolvedOptions = function () {
        var e;
        return {
          locale: (null === (e = i.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(
            i.locales)[0],
        };
      }, this.getAst = function () {return i.ast;}, this.locales = n, this.resolvedLocale = e.resolveLocale(
        n), 'string' == typeof t) {
        if (this.message = t, !e.__parse) {
          throw new TypeError(
            'IntlMessageFormat.__parse must be set to process `message` of type `string`');
        }
        var l = o || {};
        l.formatters;
        var s = function (e, t) {
          var n = {};
          for (var a in e) {
            Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(
              a) < 0 && (n[a] = e[a]);
          }
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (a = Object.getOwnPropertySymbols(e); o < a.length; o++) {
              t.indexOf(
                a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e,
                a[o]) && (n[a[o]] = e[a[o]]);
            }
          }
          return n;
        }(l, ['formatters']);
        this.ast = e.__parse(t, xa(xa({}, s), { locale: this.resolvedLocale }));
      } else {
        this.ast = t;
      }
      if (!Array.isArray(this.ast)) {
        throw new TypeError(
          'A message must be provided as a String or AST.');
      }
      this.formats = Jo(e.formats,
        a), this.formatters = o && o.formatters || (void 0 === (r = this.formatterCache) && (r = {
        number: {},
        dateTime: {},
        pluralRules: {},
      }), {
        getNumberFormat: La(function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(e, Ta([void 0], t, !1)));
        }, { cache: Qo(r.number), strategy: Ga.variadic }),
        getDateTimeFormat: La(function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(e, Ta([void 0], t, !1)));
        }, { cache: Qo(r.dateTime), strategy: Ga.variadic }),
        getPluralRules: La(function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(e, Ta([void 0], t, !1)));
        }, { cache: Qo(r.pluralRules), strategy: Ga.variadic }),
      });
    }

    return Object.defineProperty(e, 'defaultLocale', {
      get: function () {return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale;},
      enumerable: !1,
      configurable: !0,
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function (e) {
      if (void 0 !== Intl.Locale) {
        var t = Intl.NumberFormat.supportedLocalesOf(e);
        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(
          'string' == typeof e ? e : e[0]);
      }
    }, e.__parse = $o, e.formats = {
      number: {
        integer: { maximumFractionDigits: 0 },
        currency: { style: 'currency' },
        percent: { style: 'percent' },
      },
      date: {
        short: { month: 'numeric', day: 'numeric', year: '2-digit' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
        full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
      },
      time: {
        short: { hour: 'numeric', minute: 'numeric' },
        medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
        long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
        full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
      },
    }, e;
  }();
  const tr = {},
    nr = (e, t, n) => n ? (t in tr || (tr[t] = {}), e in tr[t] || (tr[t][e] = n), n) : n,
    ar = (e, t) => {
      if (null == t) return;
      if (t in tr && e in tr[t]) return tr[t][e];
      const n = Ir(t);
      for (let a = 0; a < n.length; a++) {
        const o = lr(n[a], e);
        if (o) return nr(e, t, o);
      }
    };
  let or;
  const rr = wa({});

  function ir(e) {return e in or;}

  function lr(e, t) {
    if (!ir(e)) return null;
    const n = function (e) {return or[e] || null;}(e);
    return function (e, t) {
      if (null == t) return;
      if (t in e) return e[t];
      const n = t.split('.');
      let a = e;
      for (let o = 0; o < n.length; o++) {
        if ('object' == typeof a) {
          if (o > 0) {
            const e = n.slice(o, n.length).join('.');
            if (e in a) {
              a = a[e];
              break;
            }
          }
          a = a[n[o]];
        } else {
          a = void 0;
        }
      }
      return a;
    }(n, t);
  }

  function sr(e, ...t) {delete tr[e], rr.update(n => (n[e] = Ma.all([n[e] || {}, ...t]), n));}

  ba([rr], ([e]) => Object.keys(e)), rr.subscribe(e => or = e);
  const cr = {};

  function ur(e) {return cr[e];}

  function dr(e) {
    return null != e && Ir(e).some(e => {
      var t;
      return null == (t = ur(e)) ? void 0 : t.size;
    });
  }

  function hr(e, t) {
    const n = Promise.all(t.map(
      t => (function (e, t) {cr[e].delete(t), 0 === cr[e].size && delete cr[e];}(e, t), t().then(
        e => e.default || e))));
    return n.then(t => sr(e, ...t));
  }

  const mr = {};

  function pr(e) {
    if (!dr(e)) return e in mr ? mr[e] : Promise.resolve();
    const t = function (e) {
      return Ir(e).map(e => {
        const t = ur(e);
        return [e, t ? [...t] : []];
      }).filter(([, e]) => e.length > 0);
    }(e);
    return mr[e] = Promise.all(t.map(([e, t]) => hr(e, t))).then(() => {
      if (dr(e)) return pr(e);
      delete mr[e];
    }), mr[e];
  }

  var gr = Object.getOwnPropertySymbols,
    fr = Object.prototype.hasOwnProperty,
    wr = Object.prototype.propertyIsEnumerable;

  function br({ locale: e, id: t }) {
    console.warn(`[svelte-i18n] The message "${t}" was not found in "${Ir(e).join('", "')}".${dr(
      Rr()) ? '\n\nNote: there are at least one loader still registered to this locale that wasn\'t executed.' : ''}`);
  }

  const vr = {
    fallbackLocale: null,
    loadingDelay: 200,
    formats: {
      number: {
        scientific: { notation: 'scientific' },
        engineering: { notation: 'engineering' },
        compactLong: { notation: 'compact', compactDisplay: 'long' },
        compactShort: { notation: 'compact', compactDisplay: 'short' },
      },
      date: {
        short: { month: 'numeric', day: 'numeric', year: '2-digit' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
        full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
      },
      time: {
        short: { hour: 'numeric', minute: 'numeric' },
        medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
        long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
        full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
      },
    },
    warnOnMissingMessages: !0,
    handleMissingMessage: void 0,
    ignoreTag: !0,
  };

  function yr() {return vr;}

  const Er = wa(!1);
  var Sr = Object.defineProperty,
    Or = Object.defineProperties,
    kr = Object.getOwnPropertyDescriptors,
    Mr = Object.getOwnPropertySymbols,
    _r = Object.prototype.hasOwnProperty,
    Ar = Object.prototype.propertyIsEnumerable,
    xr = (e, t, n) => t in e ? Sr(e, t,
      { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
  let Tr;
  const Lr = wa(null);

  function Cr(e) {return e.split('-').map((e, t, n) => n.slice(0, t + 1).join('-')).reverse();}

  function Ir(e, t = yr().fallbackLocale) {
    const n = Cr(e);
    return t ? [...new Set([...n, ...Cr(t)])] : n;
  }

  function Rr() {return null != Tr ? Tr : void 0;}

  Lr.subscribe(e => {
    Tr = null != e ? e : void 0, 'undefined' != typeof window && null != e && document.documentElement.setAttribute(
      'lang', e);
  });
  const Br = (Pr = ((e, t) => {
    for (var n in t || (t = {})) _r.call(t, n) && xr(e, n, t[n]);
    if (Mr) for (var n of Mr(t)) Ar.call(t, n) && xr(e, n, t[n]);
    return e;
  })({}, Lr), Or(Pr, kr({
    set: e => {
      if (e && function (e) {
        if (null == e) return;
        const t = Ir(e);
        for (let n = 0; n < t.length; n++) {
          const e = t[n];
          if (ir(e)) return e;
        }
      }(e) && dr(e)) {
        const { loadingDelay: t } = yr();
        let n;
        return 'undefined' != typeof window && null != Rr() && t ? n = window.setTimeout(
          () => Er.set(!0), t) : Er.set(!0), pr(e).then(() => {Lr.set(e);}).finally(
          () => {clearTimeout(n), Er.set(!1);});
      }
      return Lr.set(e);
    },
  })));
  var Pr;
  const Hr = e => {
    const t = Object.create(null);
    return n => {
      const a = JSON.stringify(n);
      return a in t ? t[a] : t[a] = e(n);
    };
  };
  var Nr = Object.defineProperty,
    Dr = Object.getOwnPropertySymbols,
    Vr = Object.prototype.hasOwnProperty,
    qr = Object.prototype.propertyIsEnumerable,
    Gr = (e, t, n) => t in e ? Nr(e, t,
      { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    zr = (e, t) => {
      for (var n in t || (t = {})) Vr.call(t, n) && Gr(e, n, t[n]);
      if (Dr) for (var n of Dr(t)) qr.call(t, n) && Gr(e, n, t[n]);
      return e;
    },
    Ur = (e, t) => {
      var n = {};
      for (var a in e) Vr.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
      if (null != e && Dr) for (var a of Dr(e)) t.indexOf(a) < 0 && qr.call(e, a) && (n[a] = e[a]);
      return n;
    };
  const $r = (e, t) => {
      const { formats: n } = yr();
      if (e in n && t in n[e]) return n[e][t];
      throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
    },
    Fr = Hr(e => {
      var t = e, { locale: n, format: a } = t, o = Ur(t, ['locale', 'format']);
      if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
      return a && (o = $r('number', a)), new Intl.NumberFormat(n, o);
    }),
    jr = Hr(e => {
      var t = e, { locale: n, format: a } = t, o = Ur(t, ['locale', 'format']);
      if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
      return a ? o = $r('date', a) : 0 === Object.keys(o).length && (o = $r('date',
        'short')), new Intl.DateTimeFormat(n, o);
    }),
    Wr = Hr(e => {
      var t = e, { locale: n, format: a } = t, o = Ur(t, ['locale', 'format']);
      if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
      return a ? o = $r('time', a) : 0 === Object.keys(o).length && (o = $r('time',
        'short')), new Intl.DateTimeFormat(n, o);
    }),
    Zr = Hr((e, t = Rr()) => new er(e, t, yr().formats, { ignoreTag: yr().ignoreTag })),
    Kr = (e, t = {}) => {
      var n, a, o, r;
      let i = t;
      'object' == typeof e && (i = e, e = i.id);
      const { values: l, locale: s = Rr(), default: c } = i;
      if (null == s) {
        throw new Error(
          '[svelte-i18n] Cannot format a message without first setting the initial locale.');
      }
      let u = ar(e, s);
      if (u) {
        if ('string' != typeof u) {
          return console.warn(
            `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), u;
        }
      } else {
        u = null != (r = null != (o = null == (a = (n = yr()).handleMissingMessage) ? void 0 : a.call(
          n, { locale: s, id: e, defaultValue: c })) ? o : c) ? r : e;
      }
      if (!l) return u;
      let d = u;
      try {d = Zr(u, s).format(l);} catch (h) {
        h instanceof Error && console.warn(`[svelte-i18n] Message "${e}" has syntax error:`,
          h.message);
      }
      return d;
    },
    Yr = (e, t) => ((e = {}) => {
      var t = e, { locale: n = Rr() } = t, a = Ur(t, ['locale']);
      return Wr(zr({ locale: n }, a));
    })(t).format(e),
    Xr = (e, t) => ((e = {}) => {
      var t = e, { locale: n = Rr() } = t, a = Ur(t, ['locale']);
      return jr(zr({ locale: n }, a));
    })(t).format(e),
    Jr = (e, t) => ((e = {}) => {
      var t = e, { locale: n = Rr() } = t, a = Ur(t, ['locale']);
      return Fr(zr({ locale: n }, a));
    })(t).format(e),
    Qr = (e, t = Rr()) => ar(e, t),
    ei = ba([Br, rr], () => Kr);
  ba([Br], () => Yr), ba([Br], () => Xr), ba([Br], () => Jr), ba([Br, rr], () => Qr);
  const ti = (e, t) => {
      const n = (e, t) => _.transform(e, (e, a, o) => {
        _.isEqual(a, t[o]) || (_.isArray(a) ? e[o] = _.difference(a, t[o]) : _.isObject(
          a) && _.isObject(t[o]) ? e[o] = n(a, t[o]) : e[o] = a);
      });
      return n(e, t);
    },
    ni = [
      {
        ID: 'en_US',
        NAME: 'English (US)',
        STARTING: 'Starting<br>Manga OnlineViewer',
        RESUME: 'Resuming reading from Page ',
        WAITING: 'Please wait, 3 seconds...',
        CHOOSE_BEGINNING: 'Choose the Page to start from:',
        BUTTON_START: 'Start Manga OnlineViewer',
        SETTINGS: 'Settings',
        LANGUAGE: 'Language',
        COLOR_SCHEME: 'Color Scheme',
        THEME: 'Theme',
        THEME_COLOR: 'Color',
        THEME_HUE: 'Color Hue',
        THEME_SHADE: 'Color Shade',
        DEFAULT_LOAD_MODE: 'Default Load Mode',
        LOAD_MODE_NORMAL: 'Normal(Wait 3 sec)',
        LOAD_MODE_ALWAYS: 'Always(Immediately)',
        LOAD_MODE_NEVER: 'Never(Manually)',
        LOAD_SPEED: 'Load Speed Pages/Second',
        DEFAULT_ZOOM: 'Default Zoom (between 5 and 200)',
        DEFAULT_ZOOM_MODE: 'Default Zoom Mode',
        MINIMUM_ZOOM: 'Minimum Zoom relative to the width of screen (between 30 and 100)',
        ZOOM_STEP: 'Zoom Change Step (between 5 and 50)',
        DEFAULT_VIEW_MODE: 'Default View Mode',
        VIEW_MODE_VERTICAL: 'Vertical',
        VIEW_MODE_LEFT: 'Left to Right',
        VIEW_MODE_RIGHT: 'Right to Left',
        VIEW_MODE_WEBCOMIC: 'WebComic',
        FIT_WIDTH_OVERSIZED: 'Fit Width if Oversized',
        SHOW_THUMBNAILS: 'Show Thumbnails',
        ENABLE_COMMENTS: 'Capture Comments (When available)',
        HIDE_CONTROLS: 'Always Hide Page Controls',
        HEADER_TYPE: 'Change Header Type',
        HEADER_HOVER: 'Hover',
        HEADER_SCROLL: 'Scroll',
        HEADER_CLICK: 'Click',
        HEADER_FIXED: 'Fixed',
        HEADER_SIMPLE: 'Simple',
        BUTTON_DOWNLOAD: 'Download',
        DOWNLOAD_ZIP: 'Download Zip file',
        DOWNLOAD_IMAGES: 'Download Images as Zip Automatically',
        BUTTON_NEXT: 'Next',
        NEXT_CHAPTER: 'Next Chapter',
        BUTTON_PREVIOUS: 'Previous',
        PREVIOUS_CHAPTER: 'Previous Chapter',
        BOOKMARKS: 'Bookmarks',
        BOOKMARK: 'Bookmark',
        BOOKMARK_REMOVED: 'Bookmark Removed',
        BOOKMARK_SAVED: 'Bookmark Saved',
        BOOKMARK_MESSAGE: 'Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)',
        KEYBINDINGS: 'Keybindings',
        EDIT_KEYBINDS: 'Edit KeyBindings',
        SAVE_KEYBINDS: 'Save KeyBindings',
        BUTTON_EDIT: 'Edit',
        BUTTON_SAVE: 'Save',
        KEYBIND_RULES: '\n    <h3>Supported Keys</h3>\n    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>\n    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>\n    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ',
        ATTENTION: 'Attention',
        WARNING: 'Warning',
        BUTTON_RESET_SETTINGS: 'Reset Settings',
        SETTINGS_RESET: 'Settings have been reset, reload the page to take effect',
        LANGUAGE_CHANGED: 'Language has been changed, reload the page to take effect',
        AUTO_DOWNLOAD: 'Next time a chapter finish loading you will be prompted to save automatically',
        LAZY_LOAD: 'Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style=\'color:red;font-weight:bold\'>Disable Thumbnails</span> to save Bandwidth/Memory.',
        LAZY_LOAD_IMAGES_ENABLE: 'Enable Lazy Load Images',
        LAZY_LOAD_IMAGES: 'Lazy Start From Page (between 5 and 100)',
        RETURN_CHAPTER_LIST: 'Return to Chapter List',
        PAGES_LOADED: 'Pages Loaded',
        GO_TO_PAGE: 'Go to Page',
        ENLARGE: 'Enlarge',
        RESTORE: 'Restore',
        REDUCE: 'Restore',
        FIT_WIDTH: 'Fit Width',
        FIT_HEIGHT: 'Fit Height',
        PERCENT: 'Percent',
        TOGGLE_CONTROLS: 'Toggle page controls',
        ZOOM_IN: 'Zoom In',
        ZOOM_OUT: 'Zoom Out',
        ZOOM_RESET: 'Zoom Reset',
        ZOOM_WIDTH: 'Zoom to Width',
        ZOOM_HEIGHT: 'Zoom to Height',
        HIDE: 'Hide',
        RELOAD: 'Reload',
        SLOWLY: 'Slowly',
        NORMAL: 'Normal',
        FAST: 'Fast',
        EXTREME: 'Extreme',
        ALL_PAGES: 'All Pages',
        SPEED_WARNING: 'Loading Speed too High',
        SPEED_WARNING_MESSAGE: 'This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!',
        SCROLL_UP: 'Scroll Up',
        SCROLL_DOWN: 'Scroll Down',
        CLOSE: 'Close',
        LIST_EMPTY: 'List Empty',
        DISPLAY_COMMENTS: 'Display Comments',
        COMMENTS: 'Comments Section',
        SCROLL_START: 'Toggle Auto Scroll',
        AUTO_SCROLL_HEIGHT: 'Auto Scroll Speed in Pixels',
        VERTICAL_SEPARATOR: 'Show Vertical Separators',
        END: 'End',
        SCOPE: 'Scope',
        GLOBAL: 'Global',
        GENERAL: 'General',
        LOADING: 'Loading',
        ZOOM: 'Zoom',
        OTHERS: 'Others',
      }, {
        ID: 'es_ES',
        NAME: 'Español (ES)',
        STARTING: 'Iniciando<br>Manga OnlineViewer',
        RESUME: 'Continuando lectura desde la Página ',
        WAITING: 'Por favor espere, 3 segundos...',
        CHOOSE_BEGINNING: 'Elija la página en la que comenzar:',
        BUTTON_START: 'Iniciar Manga OnlineViewer',
        SETTINGS: 'Ajustes',
        LANGUAGE: 'Idioma',
        COLOR_SCHEME: 'Esquema de color',
        THEME: 'Tema',
        THEME_COLOR: 'Color',
        THEME_HUE: 'Matiz del color',
        THEME_SHADE: 'Saturación del color',
        DEFAULT_LOAD_MODE: 'Modo de carga por defecto',
        LOAD_MODE_NORMAL: 'Normal (Espera 3s)',
        LOAD_MODE_ALWAYS: 'Siempre (Inmediatamente)',
        LOAD_MODE_NEVER: 'Nunca (Manualmente)',
        LOAD_SPEED: 'Velocidad carga página/segundo',
        DEFAULT_ZOOM: 'Zoom por defecto (entre 5 y 200)',
        DEFAULT_ZOOM_MODE: 'Modo de zoom por defecto',
        MINIMUM_ZOOM: 'Zoom mínimo relativo al ancho de la pantalla',
        ZOOM_STEP: 'Paso entre cambios de zoom (entre 5 y 50)',
        DEFAULT_VIEW_MODE: 'Modo de visualización por defecto',
        VIEW_MODE_VERTICAL: 'Vertical',
        VIEW_MODE_LEFT: 'Izquierda a derecha',
        VIEW_MODE_RIGHT: 'Derecha a izquierda',
        VIEW_MODE_WEBCOMIC: 'WebComic',
        FIT_WIDTH_OVERSIZED: 'Ajustar ancho si es demasiado grande',
        SHOW_THUMBNAILS: 'Mostrar miniaturas',
        ENABLE_COMMENTS: 'Capturar comentarios (cuando esté disponible)',
        HIDE_CONTROLS: 'Ocultar siempre la barra de controles',
        HEADER_TYPE: 'Cambiar tipo de cabecera',
        HEADER_HOVER: 'Pasar por encima',
        HEADER_SCROLL: 'Desplazamiento',
        HEADER_CLICK: 'Hacer click',
        HEADER_FIXED: 'Fijo',
        HEADER_SIMPLE: 'Sencillo',
        BUTTON_DOWNLOAD: 'Descargar',
        DOWNLOAD_ZIP: 'Descargar fichero Zip',
        DOWNLOAD_IMAGES: 'Autodescargar imágenes como Zip',
        BUTTON_NEXT: 'Siguiente',
        NEXT_CHAPTER: 'Siguiente capítulo',
        BUTTON_PREVIOUS: 'Anterior',
        PREVIOUS_CHAPTER: 'Capítulo anterior',
        BOOKMARKS: 'Marcadores',
        BOOKMARK: 'Marcador',
        BOOKMARK_REMOVED: 'Marcador eliminado',
        BOOKMARK_SAVED: 'Marcador guardado',
        BOOKMARK_MESSAGE: 'La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)',
        KEYBINDINGS: 'Atajos de teclado',
        EDIT_KEYBINDS: 'Editar atajos',
        SAVE_KEYBINDS: 'Guardar atajos',
        BUTTON_EDIT: 'Editar',
        BUTTON_SAVE: 'Guardar',
        KEYBIND_RULES: '\n    <h3>Teclas soportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>\n    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>\n    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ',
        ATTENTION: 'Atención',
        WARNING: 'Alerta',
        BUTTON_RESET_SETTINGS: 'Reiniciar ajustes(Reset Settings)',
        SETTINGS_RESET: 'Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto',
        LANGUAGE_CHANGED: 'Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto',
        AUTO_DOWNLOAD: 'La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente',
        LAZY_LOAD: 'La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style=\'color:red;font-weight:bold\'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.',
        LAZY_LOAD_IMAGES_ENABLE: 'Habilitar carga de imágenes diferida',
        LAZY_LOAD_IMAGES: 'Empezar carga diferida a partir de la página (entre 5 y 100)',
        RETURN_CHAPTER_LIST: 'Regresar a la lista de capítulos',
        PAGES_LOADED: 'Páginas cargadas',
        GO_TO_PAGE: 'Ir a página',
        ENLARGE: 'Agrandar',
        RESTORE: 'Restaurar',
        REDUCE: 'Reducir',
        FIT_WIDTH: 'Ajustar al ancho',
        FIT_HEIGHT: 'Ajustar al alto',
        PERCENT: 'Porcentual',
        TOGGLE_CONTROLS: 'Alternar controles de página',
        ZOOM_IN: 'Acercar',
        ZOOM_OUT: 'Alejar',
        ZOOM_RESET: 'Restablecer zoom',
        ZOOM_WIDTH: 'Zoom al ancho',
        ZOOM_HEIGHT: 'Zoom al alto',
        HIDE: 'Ocultar',
        RELOAD: 'Recargar',
        SLOWLY: 'Lento',
        NORMAL: 'Normal',
        FAST: 'Rápido',
        EXTREME: 'Extremo',
        ALL_PAGES: 'Todas las páginas',
        SPEED_WARNING: 'Velocidad de carga muy alta',
        SPEED_WARNING_MESSAGE: 'No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!',
        SCROLL_UP: 'Desplazar arriba',
        SCROLL_DOWN: 'Desplazar abajo',
        CLOSE: 'Cerrar',
        LIST_EMPTY: 'Lista vacía',
        DISPLAY_COMMENTS: 'Mostrar comentarios',
        COMMENTS: 'Sección de comentarios',
        SCROLL_START: 'Alternar desplazamiento automático',
        AUTO_SCROLL_HEIGHT: 'Velocidad de desplazamiento automático en píxeles',
        VERTICAL_SEPARATOR: 'Mostrar separadores verticales',
        END: 'Fin',
        SCOPE: 'Alcance',
        GLOBAL: 'Global',
        GENERAL: 'General',
        LOADING: 'Carga',
        ZOOM: 'Zoom',
        OTHERS: 'Otros',
      }, {
        ID: 'pt_BR',
        NAME: 'Portugues (Brasil)',
        STARTING: 'Iniciando<br>Manga OnlineViewer',
        RESUME: 'Continuando leitura na Pagina ',
        WAITING: 'Por Favor espere, 3 segundos...',
        CHOOSE_BEGINNING: 'Escolha a pagina de onde começar:',
        BUTTON_START: 'Iniciar Manga OnlineViewer',
        SETTINGS: 'Configurações',
        LANGUAGE: 'Idioma',
        COLOR_SCHEME: 'Esquema de Color',
        THEME: 'Tema',
        THEME_COLOR: 'Cor',
        THEME_HUE: 'Tom da Cor',
        THEME_SHADE: 'Saturação da Cor',
        DEFAULT_LOAD_MODE: 'Forma de Carregamento Padrão',
        LOAD_MODE_NORMAL: 'Normal(Esperando 3 sec)',
        LOAD_MODE_ALWAYS: 'Sempre(Imediatamente)',
        LOAD_MODE_NEVER: 'Nunca(Manualmente)',
        LOAD_SPEED: 'Velocidade de Carregamento Paginas/Segundo',
        DEFAULT_ZOOM: 'Zoom padrão (entre 5 e 200)',
        DEFAULT_ZOOM_MODE: 'Modo de Zoom padrão',
        MINIMUM_ZOOM: 'Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)',
        ZOOM_STEP: 'Precisão da Mudança do Zoom (entre 5 e 50)',
        DEFAULT_VIEW_MODE: 'Modo de Visualização Padrão',
        VIEW_MODE_VERTICAL: 'Vertical',
        VIEW_MODE_LEFT: 'Esquerda para Direita',
        VIEW_MODE_RIGHT: 'Direita para Esquerda',
        VIEW_MODE_WEBCOMIC: 'WebComic',
        FIT_WIDTH_OVERSIZED: 'Encher a tela se grande demais',
        SHOW_THUMBNAILS: 'Mostra Miniaturas',
        ENABLE_COMMENTS: 'Capturar comentários (quando disponível)',
        HIDE_CONTROLS: 'Sempre esconder controles das paginas',
        HEADER_TYPE: 'Mudar Tipo de Cabeçalho',
        HEADER_HOVER: 'Passar por perto',
        HEADER_SCROLL: 'Rolagem do Mouse',
        HEADER_CLICK: 'Click',
        HEADER_FIXED: 'Fixo',
        HEADER_SIMPLE: 'Simples',
        BUTTON_DOWNLOAD: 'Download',
        DOWNLOAD_ZIP: 'Baixar arquivo Zip',
        DOWNLOAD_IMAGES: 'Download das Imagens como Zip Automaticamente',
        BUTTON_NEXT: 'Proximo',
        NEXT_CHAPTER: 'Proximo Capitulo',
        BUTTON_PREVIOUS: 'Anterior',
        PREVIOUS_CHAPTER: 'Capitulo Anterior',
        BOOKMARKS: 'Marca paginas',
        BOOKMARK: 'Marcar pagina',
        BOOKMARK_REMOVED: 'Marca pagina Removido',
        BOOKMARK_SAVED: 'Marca pagina Salvo',
        BOOKMARK_MESSAGE: 'Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)',
        KEYBINDINGS: 'Atalhos',
        EDIT_KEYBINDS: 'Editar Atalhos',
        SAVE_KEYBINDS: 'Salvar Atalhos',
        BUTTON_EDIT: 'Editar',
        BUTTON_SAVE: 'Salvar',
        KEYBIND_RULES: '\n    <h3>Teclas Suportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>\n    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>\n    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ',
        ATTENTION: 'Atenção',
        WARNING: 'Alerta',
        BUTTON_RESET_SETTINGS: 'Limpar Configurações(Reset Settings)',
        SETTINGS_RESET: 'Configurações foram limpas, recarregue o site para efetivar a alteração',
        LANGUAGE_CHANGED: 'Idioma foi alterado, recarregue o site para efetivar a alteração',
        AUTO_DOWNLOAD: 'Proxima vez que abrir um capitulo download iniciara automaticamente',
        LAZY_LOAD: 'Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style=\'color:red;font-weight:bold\'>Desative Miniaturas</span> para economizar memoria e cota de internet.',
        LAZY_LOAD_IMAGES_ENABLE: 'Ativar Carregamento de imagens preguiçoso',
        LAZY_LOAD_IMAGES: 'Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)',
        RETURN_CHAPTER_LIST: 'Voltar a lista de Capitulos',
        PAGES_LOADED: 'Paginas Carregadas',
        GO_TO_PAGE: 'Pular para',
        ENLARGE: 'Aumentar',
        RESTORE: 'Restaurar',
        REDUCE: 'Diminuir',
        FIT_WIDTH: 'Preencher Largura',
        FIT_HEIGHT: 'Preencher Altura ',
        PERCENT: 'Percentual',
        TOGGLE_CONTROLS: 'Mostar controles de pagina',
        ZOOM_IN: 'Mais Zoom',
        ZOOM_OUT: 'Menos Zoom',
        ZOOM_RESET: 'Resetar Zoom',
        ZOOM_WIDTH: 'Zoom para Largura',
        ZOOM_HEIGHT: 'Zoom para Altura',
        HIDE: 'Esconder',
        RELOAD: 'Recarregar',
        SLOWLY: 'Devagar',
        NORMAL: 'Normal',
        FAST: 'Rapido',
        EXTREME: 'Extremo',
        ALL_PAGES: 'Todas as Paginas',
        SPEED_WARNING: 'Velocidade de Carregamento muito alta',
        SPEED_WARNING_MESSAGE: 'Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!',
        SCROLL_UP: 'Subir Pagina',
        SCROLL_DOWN: 'Descer Pagina',
        CLOSE: 'Fechar',
        LIST_EMPTY: 'Lista Vazia',
        DISPLAY_COMMENTS: 'Mostar Comentarios',
        COMMENTS: 'Seção de comentários',
        SCROLL_START: 'Ativar Rolagem Automatica',
        AUTO_SCROLL_HEIGHT: 'Velocidade da Rolagem Automatica em Pixels',
        VERTICAL_SEPARATOR: 'Mostrar Separadores Verticais',
        END: 'Fin',
        SCOPE: 'Escopo',
        GLOBAL: 'Global',
        GENERAL: 'Geral',
        LOADING: 'Carregamento',
        ZOOM: 'Zoom',
        OTHERS: 'Outros',
      }, {
        ID: 'zh_CN',
        NAME: '中文 (简体)',
        STARTING: '正在启动<br>Manga OnlineViewer',
        RESUME: '从页面继续阅读 ',
        WAITING: '请等待3秒钟...',
        CHOOSE_BEGINNING: '选择要开始的页数:',
        BUTTON_START: '启动Manga OnlineViewer',
        SETTINGS: '设置',
        LANGUAGE: '语言',
        COLOR_SCHEME: '配色方案',
        THEME: '主题',
        THEME_COLOR: '颜色',
        THEME_HUE: '色相',
        THEME_SHADE: '色度',
        DEFAULT_LOAD_MODE: '默认加载模式',
        LOAD_MODE_NORMAL: '等待模式(等待3秒自动加载 )',
        LOAD_MODE_ALWAYS: '自动模式(无需等待)',
        LOAD_MODE_NEVER: '手动模式(点击启动)',
        LOAD_SPEED: '加载速度页数/秒',
        DEFAULT_ZOOM: '默认缩放 (最小 5 最大 200)',
        DEFAULT_ZOOM_MODE: '默认缩放模式',
        MINIMUM_ZOOM: '相对于屏幕宽度的最小缩放 (最小 30 最大 100)',
        ZOOM_STEP: '缩放级别 (最小 5 最大 50)',
        DEFAULT_VIEW_MODE: '默认视图模式',
        VIEW_MODE_VERTICAL: '垂直有缝',
        VIEW_MODE_LEFT: '从左到右',
        VIEW_MODE_RIGHT: '从右到左',
        VIEW_MODE_WEBCOMIC: '垂直无缝',
        FIT_WIDTH_OVERSIZED: '如果尺寸过大、则适合宽度',
        SHOW_THUMBNAILS: '显示缩略图',
        ENABLE_COMMENTS: '捕获评论（如果可用）',
        HIDE_CONTROLS: '始终隐藏页面控件',
        HEADER_TYPE: '更改标题显示方式',
        HEADER_HOVER: '悬停',
        HEADER_SCROLL: '滚动',
        HEADER_CLICK: '点击',
        HEADER_FIXED: '固定',
        HEADER_SIMPLE: '简单',
        BUTTON_DOWNLOAD: '下载',
        DOWNLOAD_ZIP: '下载压缩文件',
        DOWNLOAD_IMAGES: '自动将图片下载成ZIP',
        BUTTON_NEXT: '下一页',
        NEXT_CHAPTER: '下一章',
        BUTTON_PREVIOUS: '上一页',
        PREVIOUS_CHAPTER: '上一章',
        BOOKMARKS: '书签',
        BOOKMARK: 'Bookmark',
        BOOKMARK_REMOVED: '删除书签',
        BOOKMARK_SAVED: '保存书签',
        BOOKMARK_MESSAGE: '下次打开本章时，将从:<h4>页码 ##num##</h4>(<i>仅一次</i> 每个书签)',
        KEYBINDINGS: '快捷键',
        EDIT_KEYBINDS: '编辑键绑定',
        SAVE_KEYBINDS: '保存键绑定',
        BUTTON_EDIT: '编辑',
        BUTTON_SAVE: '救',
        KEYBIND_RULES: '\n    <h3>支持的密钥</h3>\n    允许的修饰符: shift, option, alt, ctrl, control, command. </br>\n    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>\n    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ',
        ATTENTION: '注意',
        WARNING: '警告',
        BUTTON_RESET_SETTINGS: '重置设置(Reset Settings)',
        SETTINGS_RESET: '设置已重置、重新加载页面才能生效',
        LANGUAGE_CHANGED: '语言已更改、重新加载页面才能生效',
        AUTO_DOWNLOAD: '下次章节加载完成时、系统将提示您自动保存',
        LAZY_LOAD: '延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style=\'color:red;font-weight:bold\'>禁用缩略图</span> 以节省流量和内存.',
        LAZY_LOAD_IMAGES_ENABLE: '启用延迟加载图像',
        LAZY_LOAD_IMAGES: '惰性加载从页面 (最小 5 最大 100)',
        RETURN_CHAPTER_LIST: '返回章节列表',
        PAGES_LOADED: '已加载的页数',
        GO_TO_PAGE: '转到页数',
        ENLARGE: '放大',
        RESTORE: '还原',
        REDUCE: '缩小',
        FIT_WIDTH: '适合宽度',
        FIT_HEIGHT: '适合高度',
        PERCENT: '百分之',
        TOGGLE_CONTROLS: '显示隐藏页面控件',
        ZOOM_IN: '放大',
        ZOOM_OUT: '缩小',
        ZOOM_RESET: '还原',
        ZOOM_WIDTH: '适合宽度',
        ZOOM_HEIGHT: '适合高度',
        HIDE: '显示隐藏页面控件',
        RELOAD: '重新加载',
        SLOWLY: '慢速',
        NORMAL: '正常',
        FAST: '快速',
        EXTREME: '极端',
        ALL_PAGES: '所有页面',
        SPEED_WARNING: '加载速度过高',
        SPEED_WARNING_MESSAGE: '不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!',
        SCROLL_UP: '向上滚动',
        SCROLL_DOWN: '向下滚动',
        CLOSE: '关闭',
        LIST_EMPTY: '没有收藏书签',
        DISPLAY_COMMENTS: '显示注释',
        COMMENTS: '评论部分',
        SCROLL_START: '切换自动滚动',
        AUTO_SCROLL_HEIGHT: '自动滚动速度（以像素为单位）',
        VERTICAL_SEPARATOR: '显示垂直分隔符',
        END: '结尾',
        SCOPE: '范围',
        GLOBAL: '全球',
        GENERAL: '常规',
        LOADING: '装载',
        ZOOM: '缩放',
        OTHERS: '别人',
      },
    ],
    ai = {
      enabled: !0,
      locale: 'en_US',
      theme: 'darkblue',
      customTheme: '#004526',
      themeShade: 600,
      colorScheme: 'dark',
      fitWidthIfOversize: !0,
      showThumbnails: !0,
      enableComments: !0,
      downloadZip: !1,
      verticalSeparator: !1,
      throttlePageLoad: 1e3,
      zoomMode: 'percent',
      defaultZoom: 100,
      zoomStep: 25,
      minZoom: 30,
      loadMode: 'wait',
      viewMode: 'WebComic',
      bookmarks: [],
      lazyLoadImages: !1,
      lazyStart: 50,
      hidePageControls: !1,
      header: 'hover',
      maxReload: 5,
      scrollHeight: 20,
      keybinds: {
        SCROLL_UP: ['up', 'W', 'num_8'],
        SCROLL_DOWN: ['down', 'S', 'num_2'],
        NEXT_CHAPTER: ['right', '/', 'D', 'num_6'],
        PREVIOUS_CHAPTER: ['left', ';', 'A', 'num_4'],
        ENLARGE: ['-', 'num_add', 'E'],
        REDUCE: ['=', 'num_subtract', 'Q'],
        RESTORE: ['9', 'num_divide', 'R'],
        FIT_WIDTH: ['0', 'num_multiply', 'F'],
        FIT_HEIGHT: ['H'],
        SETTINGS: ['num_divide', 'num_5', 'X'],
        VIEW_MODE_WEBCOMIC: ['C'],
        VIEW_MODE_VERTICAL: ['V'],
        VIEW_MODE_LEFT: ['N'],
        VIEW_MODE_RIGHT: ['B'],
        SCROLL_START: ['space'],
      },
    };

  function oi(e = !0) {
    return 'mobile' !== ue() && 'tablet' !== ue() ? {
      ...ai,
      enabled: e,
      theme: e ? 'darkblue' : 'darkgreen',
    } : _.defaultsDeep({
      lazyLoadImages: !0,
      fitWidthIfOversize: !0,
      showThumbnails: !1,
      viewMode: 'WebComic',
      header: 'click',
    }, { ...ai, enabled: e, theme: e ? 'darkblue' : 'darkgreen' });
  }

  let ri = _.defaultsDeep(function (e) {return re('settings', e);}(oi()), oi()),
    ii = _.defaultsDeep(function (e) {return re(window.location.hostname, e);}(oi(!1)), oi(!1));
  const li = wa(ii ?? ri);
  var si, ci;
  ni.forEach(e => sr(e.ID, e)), function (e) {
    const t = e, { formats: n } = t,
      a = ((e, t) => {
        var n = {};
        for (var a in e) fr.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && gr) {
          for (var a of gr(e)) {
            t.indexOf(a) < 0 && wr.call(e,
              a) && (n[a] = e[a]);
          }
        }
        return n;
      })(t, ['formats']);
    let o = e.fallbackLocale;
    if (e.initialLocale) {
      try {
        er.resolveLocale(e.initialLocale) && (o = e.initialLocale);
      } catch (r) {
        console.warn(`[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`);
      }
    }
    a.warnOnMissingMessages && (delete a.warnOnMissingMessages, null == a.handleMissingMessage ? a.handleMissingMessage = br : console.warn(
      '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(
      vr, a, { initialLocale: o }), n && ('number' in n && Object.assign(vr.formats.number,
      n.number), 'date' in n && Object.assign(vr.formats.date,
      n.date), 'time' in n && Object.assign(vr.formats.time, n.time)), Br.set(o);
  }({
    fallbackLocale: 'en_US',
    initialLocale: va(li).locale,
  }), si = 'MOVSettings', ci = function (e = null) {
    ne('Global Settings', e ? ri[e] : ri), ne('Local Settings', e ? ii[e] : ii);
  }, 'undefined' != typeof unsafeWindow && (unsafeWindow[si] = ci), window[si] = ci;
  const ui = () => !0 === ii?.enabled;

  function di(e) {return ui() ? ii[e] : ri[e];}

  function hi(e, t) {
    ui() && !['locale', 'bookmarks'].includes(e) ? (ii[e] = t, se(ti(ii, oi(!1)))) : (ri[e] = t, le(
      ti(ri, oi())));
  }

  function mi(e, t) {
    ui() ? (ii[e] = t(ii[e]), se(ti(ii, oi(!1)))) : (ri[e] = t(ri[e]), le(ti(ri, oi())));
  }

  function pi(e) {
    const t = ni.find(e => e.ID === di('locale'));
    return t?.[e] ? t[e] : ni?.at(1)?.[e] ? ni[1][e] : `##MISSING_STRING_${e.toLocaleUpperCase()}##`;
  }

  function gi(e = window.location.href) {return ri.bookmarks.find(t => t.url === e)?.page;}

  de(e => {
    const t = _.defaultsDeep(e, oi()), n = ri ? ti(t, ri) : t;
    c(n) || (te('Imported Global Settings', n), ri = t, document.getElementById(
      'MangaOnlineViewer')?.dispatchEvent(new Event('hydrate')));
  }, 'settings'), de(e => {
    const t = _.defaultsDeep(e, oi(!1)), n = ii ? ti(t, ii) : t;
    c(n) || (te('Imported Local Settings', n), ii = t, document.getElementById(
      'MangaOnlineViewer')?.dispatchEvent(new Event('hydrate')));
  }, window.location.hostname);
  'undefined' != typeof window && ((window.__svelte ??= {}).v ??= new Set).add('5'), Fe = !0;
  var fi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path><path d="M18 14v7"></path><path d="M18 3v7"></path><path d="M15 18l3 3l3 -3"></path><path d="M15 6l3 -3l3 3"></path></svg>');

  function wi(e) {Hn(e, fi());}

  var bi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path><path d="M10 18h-7"></path><path d="M21 18h-7"></path><path d="M6 15l-3 3l3 3"></path><path d="M18 15l3 3l-3 3"></path></svg>');

  function vi(e) {Hn(e, bi());}

  var yi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"></path></svg>');

  function Ei(e) {Hn(e, yi());}

  var Si = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"></path><path d="M3 3l18 18"></path></svg>');

  function Oi(e) {Hn(e, Si());}

  var ki = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>');
  var Mi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path><path d="M3 3l18 18"></path></svg>');
  var _i = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path></svg>');
  var Ai = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M8 8l4 4"></path><path d="M12 8l-4 4"></path><path d="M21 21l-6 -6"></path></svg>');
  var xi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M7 10l6 0"></path><path d="M10 7l0 6"></path><path d="M21 21l-6 -6"></path></svg>');
  var Ti = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M7 10l6 0"></path><path d="M21 21l-6 -6"></path></svg>');
  var Li = Rn(
    '<div class="MangaPage"><div class="PageFunctions"><button class="Bookmark ControlButton"><!> <!></button> <button class="ZoomIn ControlButton"><!></button> <button class="ZoomRestore ControlButton"><!></button> <button class="ZoomOut ControlButton"><!></button> <button class="ZoomWidth ControlButton"><!></button> <button class="ZoomHeight ControlButton"><!></button> <button class="Hide ControlButton"><!> <!></button> <button class="Reload ControlButton"><!></button> <span class="PageIndex"> </span></div> <div class="PageContent"><img alt="" class="PageImg"/></div></div>');

  function Ci(e, t) {
    Ke(t, !0);
    const [n, a] = ha(), o = () => da(ei, '$getLocaleString', n), r = pa(t, 'src', 0, '');
    var i = Li(), l = vt(i), s = vt(l), c = vt(s);
    Ei(c), Oi(Et(c, 2));
    var u = Et(s, 2);
    !function (e) {Hn(e, xi());}(vt(u));
    var d = Et(u, 2);
    !function (e) {Hn(e, Ai());}(vt(d));
    var h = Et(d, 2);
    !function (e) {Hn(e, Ti());}(vt(h));
    var m = Et(h, 2);
    vi(vt(m));
    var p = Et(m, 2);
    wi(vt(p));
    var g = Et(p, 2), f = vt(g);
    !function (e) {Hn(e, ki());}(f), function (e) {Hn(e, Mi());}(Et(f, 2));
    var w = Et(g, 2);
    !function (e) {Hn(e, _i());}(vt(w));
    var b = vt(Et(w, 2)), v = vt(Et(l, 2));
    dn((e, n, a, o, l, c, f, y) => {
      na(i, 'id', `Page${t.index ?? ''}`), na(s, 'title', e), na(u, 'title', n), na(d, 'title',
        a), na(h, 'title', o), na(m, 'title', l), na(p, 'title', c), na(g, 'title', f), na(w,
        'title', y), Nn(b, t.index), na(v, 'id', `PageImg${t.index ?? ''}`), na(v, 'src', r());
    }, [
      () => o()('BOOKMARK'),
      () => o()('ZOOM_IN'),
      () => o()('ZOOM_RESET'),
      () => o()('ZOOM_OUT'),
      () => o()('ZOOM_WIDTH'),
      () => o()('ZOOM_HEIGHT'),
      () => o()('HIDE'),
      () => o()('RELOAD'),
    ]), Hn(e, i), Ye(), a();
  }

  var Ii = Rn('<main id="Chapter"></main>');
  var Ri = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path><path d="M18 4v17"></path><path d="M15 18l3 3l3 -3"></path></svg>');
  var Bi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"></path><path d="M20 18h-17"></path><path d="M6 15l-3 3l3 3"></path></svg>');
  var Pi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"></path><path d="M4 18h17"></path><path d="M18 15l3 3l-3 3"></path></svg>');
  var Hi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path></svg>');
  var Ni = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path></svg>');
  var Di = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"></path><path d="M11 3h5a3 3 0 0 1 3 3v11"></path></svg>');
  var Vi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M12 17v-6"></path><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path></svg>');
  var qi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M6 10l0 .01"></path><path d="M10 10l0 .01"></path><path d="M14 10l0 .01"></path><path d="M18 10l0 .01"></path><path d="M6 14l0 .01"></path><path d="M18 14l0 .01"></path><path d="M10 14l4 .01"></path></svg>');
  var Gi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 6h9"></path><path d="M11 12h9"></path><path d="M12 18h8"></path><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path><path d="M6 10v-6l-2 2"></path></svg>');
  var zi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3a9 9 0 1 0 9 9"></path></svg>');
  var Ui = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>');
  var $i = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path></svg>');
  var Fi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 13v4"></path><path d="M13 15h4"></path><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M22 22l-3 -3"></path><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M3 11v-1"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path><path d="M10 3h1"></path><path d="M15 3h1a2 2 0 0 1 2 2v1"></path></svg>');
  var ji = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 17l-2.5 -2.5"></path><path d="M10 5l2 -2l2 2"></path><path d="M19 10l2 2l-2 2"></path><path d="M5 10l-2 2l2 2"></path><path d="M10 19l2 2l2 -2"></path></svg>');
  var Wi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 15h4"></path><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M22 22l-3 -3"></path><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M3 11v-1"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path><path d="M10 3h1"></path><path d="M15 3h1a2 2 0 0 1 2 2v1"></path></svg>');
  var Zi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"></path><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M16 12h-8"></path></svg>');
  var Ki = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path></svg>');
  var Yi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>');
  var Xi = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>');
  var Ji = Rn('<option> </option>'),
    Qi = Rn(
      '<div id="menu"><!></div> <header id="Header"><aside id="GlobalFunctions"><span><button id="enlarge" class="ControlButton"><!></button> <button id="restore" class="ControlButton"><!></button> <button id="reduce" class="ControlButton"><!></button> <button id="fitWidth" class="ControlButton"><!></button> <button id="fitHeight" class="ControlButton"><!></button> <button id="keybindings" class="ControlButton"><!></button> <button id="AutoScroll" class="ControlButton phones"><!> <!></button></span> <span><button id="ltrMode" class="ControlButton"><!></button> <button id="verticalMode" class="ControlButton tablets"><!></button> <button id="webComic" class="ControlButton tablets"><!></button> <button id="rtlMode" class="ControlButton"><!></button> <button id="pageControls" class="ControlButton tablets"><!></button> <button id="bookmarks" class="ControlButton tablets"><!></button> <button id="settings" class="ControlButton tablets phones"><!></button></span> <span id="ZoomSlider"><output id="ZoomVal" class="RangeValue" for="Zoom"> </output> <input type="range" name="Zoom" id="Zoom" min="1" max="200"/></span></aside> <div class="ViewerTitle"><h1 id="MangaTitle"> </h1> <a id="series"> </a></div> <nav id="ChapterNavigation"><div id="Counters" class="ControlLabel"> <i>0</i> / <b> </b> <span class="ControlLabel"> </span> <select id="gotoPage"><option selected>#</option><!></select></div> <div id="ChapterControl" class="ChapterControl"><button id="CommentsButton"><!> </button> <button id="download" class="NavigationControlButton ControlButton disabled" type="button"><!> <!> </button> <a id="prev" class="NavigationControlButton ControlButton" type="button"><!> </a> <a id="next" class="NavigationControlButton ControlButton" type="button"> <!></a></div></nav></header>',
      1);

  function el(e, t) {
    Ke(t, !0);
    const [n, a] = ha(), o = () => da(li, '$settings', n), r = () => da(ei, '$getLocaleString', n);
    var i = Qi(), l = yt(i);
    !function (e) {Hn(e, Ui());}(vt(l));
    var s = Et(l, 2), c = vt(s), u = vt(c), d = vt(u);
    !function (e) {Hn(e, Fi());}(vt(d));
    var h = Et(d, 2);
    !function (e) {Hn(e, ji());}(vt(h));
    var m = Et(h, 2);
    !function (e) {Hn(e, Wi());}(vt(m));
    var p = Et(m, 2);
    vi(vt(p));
    var g = Et(p, 2);
    wi(vt(g));
    var f = Et(g, 2);
    !function (e) {Hn(e, qi());}(vt(f));
    var w = Et(f, 2), b = vt(w);
    !function (e) {Hn(e, Yi());}(b), function (e) {Hn(e, Ki());}(Et(b, 2));
    var v = Et(u, 2), y = vt(v);
    !function (e) {Hn(e, Pi());}(vt(y));
    var E = Et(y, 2);
    !function (e) {Hn(e, Ri());}(vt(E));
    var S = Et(E, 2);
    !function (e) {Hn(e, Zi());}(vt(S));
    var O = Et(S, 2);
    !function (e) {Hn(e, Bi());}(vt(O));
    var k = Et(O, 2);
    !function (e) {Hn(e, Gi());}(vt(k));
    var M = Et(k, 2);
    !function (e) {Hn(e, Di());}(vt(M));
    var _ = Et(M, 2);
    !function (e) {Hn(e, $i());}(vt(_));
    var A = vt(Et(v, 2)),
      x = vt(A),
      T = Et(A, 2),
      L = Et(c, 2),
      C = vt(L),
      I = vt(C),
      R = Et(C, 2),
      B = vt(R),
      P = vt(Et(L, 2)),
      H = vt(P),
      N = Et(H, 3),
      D = vt(N),
      V = Et(N, 2),
      q = vt(V),
      G = Et(V, 2);
    Un(Et(vt(G)), 17, () => Array.from(Array(t.manga.pages + 1).keys()).slice(t.manga.begin), zn,
      (e, t) => {
        var n = Ji(), a = {}, o = vt(n);
        dn(() => {a !== (a = Qt(t)) && (n.value = (n.__value = Qt(t)) ?? ''), Nn(o, Qt(t));}), Hn(e,
          n);
      });
    var z = vt(Et(P, 2)), U = vt(z);
    !function (e) {Hn(e, Xi());}(U);
    var $ = Et(U), F = Et(z, 2), j = vt(F);
    !function (e) {Hn(e, Vi());}(j);
    var W = Et(j, 2);
    !function (e) {Hn(e, zi());}(W);
    var Z = Et(W), K = Et(F, 2), Y = vt(K);
    !function (e) {Hn(e, Hi());}(Y);
    var X = Et(Y), J = Et(K, 2), Q = vt(J);
    !function (e) {Hn(e, Ni());}(Et(Q)), dn(
      (e, n, a, r, i, l, c, u, b, v, A, L, C, P, N, V, G, U, j, W, Y, ee, te, ne, ae) => {
        Yn(s, 0, `${o().header ?? ''} headroom-top`), na(d, 'title', e), na(h, 'title', n), na(m,
          'title', a), na(p, 'title', r), na(g, 'title', i), na(f, 'title', l), na(w, 'title',
          c), na(y, 'title', u), na(E, 'title', b), na(S, 'title', v), na(O, 'title', A), na(k,
          'title', L), na(M, 'title', C), na(_, 'title', P), Nn(x, `${o().defaultZoom ?? ''}%`), Qn(
          T, o().defaultZoom), Nn(I, t.manga.title), na(R, 'href', t.manga.series), Nn(B,
          `(${N ?? ''})`), Nn(H, `${V ?? ''}: `), Nn(D,
          t.manga.begin > 1 ? t.manga.pages - (t.manga.begin - 1) : t.manga.pages), Nn(q,
          `${G ?? ''}:`), Yn(z, 0,
          'NavigationControlButton ControlButton ' + (t.manga.comments ? '' : 'disabled')), na(z,
          'title', U), Nn($, ` ${j ?? ''}`), na(F, 'title', W), Nn(Z, ` ${Y ?? ''}`), na(K, 'href',
          t.manga.prev ?? ''), na(K, 'title', ee), Nn(X, ` ${te ?? ''}`), na(J, 'href',
          t.manga.next ?? ''), na(J, 'title', ne), Nn(Q, `${ae ?? ''} `);
      }, [
        () => r()('ENLARGE'),
        () => r()('RESTORE'),
        () => r()('REDUCE'),
        () => r()('FIT_WIDTH'),
        () => r()('FIT_HEIGHT'),
        () => r()('KEYBINDINGS'),
        () => r()('SCROLL_START'),
        () => r()('VIEW_MODE_LEFT'),
        () => r()('VIEW_MODE_VERTICAL'),
        () => r()('VIEW_MODE_WEBCOMIC'),
        () => r()('VIEW_MODE_RIGHT'),
        () => r()('TOGGLE_CONTROLS'),
        () => r()('BOOKMARKS'),
        () => r()('SETTINGS'),
        () => r()('RETURN_CHAPTER_LIST'),
        () => r()('PAGES_LOADED'),
        () => r()('GO_TO_PAGE'),
        () => r()('DISPLAY_COMMENTS'),
        () => r()('DISPLAY_COMMENTS'),
        () => r()('DOWNLOAD_ZIP'),
        () => r()('BUTTON_DOWNLOAD'),
        () => r()('PREVIOUS_CHAPTER'),
        () => r()('BUTTON_PREVIOUS'),
        () => r()('NEXT_CHAPTER'),
        () => r()('BUTTON_NEXT'),
      ]), Hn(e, i), Ye(), a();
  }

  var tl = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>');

  function nl(e) {Hn(e, tl());}

  var al = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>');
  var ol = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>');
  var rl = Rn(
      '<div class="BookmarkItem"><span class="bookmarkColumnLarge"><span class="bookmarkName"> </span> <br/> <a class="bookmarkURl" target="_blank"> </a></span> <span class="bookmarkColumnSmall"><span class="bookmarkDate"> </span> <br/> <span class="bookmarkPage"> </span></span> <span class="bookmarkFunctions"><a target="_blank"><button class="ControlButton open" title="Open Bookmark" type="button"><!></button></a> <button class="ControlButton erase" title="Delete Bookmark" type="button"><!></button></span></div>'),
    il = Rn(
      '<div id="BookmarksPanel" class="panel"><button id="CloseBookmarks" class="closeButton"><!></button> <button class="Bookmark simpleButton"><!> <!></button> <h2> </h2> <div id="BookmarksList"><!></div></div>');

  function ll(e, t) {
    Ke(t, !1);
    const [n, a] = ha(), o = () => da(ei, '$getLocaleString', n), r = () => da(li, '$settings', n);
    sa();
    var i = il(), l = vt(i);
    nl(vt(l));
    var c = Et(l, 2), u = vt(c);
    Ei(u), Oi(Et(u, 2));
    var d = Et(c, 2),
      h = vt(d),
      m = vt(Et(d, 2)),
      p = e => {
        var t = function (e = '') {
          var t = ft(e + '');
          return In(t, t), t;
        }();
        dn(e => Nn(t, e), [() => o()('LIST_EMPTY')], tt), Hn(e, t);
      },
      g = e => {
        var t = Pn();
        Un(yt(t), 1, () => r().bookmarks, zn, (e, t, n) => {
          var a = rl();
          na(a, 'id', `Bookmark${n + 1}`);
          var o = vt(a),
            r = vt(o),
            i = vt(r),
            l = Et(r, 4),
            s = vt(l),
            c = Et(o, 2),
            u = vt(c),
            d = vt(u),
            h = vt(Et(u, 4)),
            m = vt(Et(c, 2)),
            p = vt(m);
          !function (e) {Hn(e, al());}(vt(p));
          var g = Et(m, 2);
          !function (e) {Hn(e, ol());}(vt(g)), dn(e => {
            Nn(i, Qt(t).name), na(l, 'href', Qt(t).url), Nn(s, Qt(t).url), Nn(d, e), Nn(h,
              `Page: ${Qt(t).page ?? ''}`), na(m, 'href', Qt(t).url), Qn(g, Qt(t).url);
          }, [() => new Date(Qt(t).date).toISOString().slice(0, 10)], tt), Hn(e, a);
        }), Hn(e, t);
      };
    Gn(m, e => {s(r().bookmarks) ? e(p) : e(g, !1);}), dn(
      (e, t, n) => {na(l, 'title', e), na(c, 'title', `$${t ?? ''}`), Nn(h, n);},
      [() => o()('CLOSE'), () => o()('BOOKMARK'), () => o()('BOOKMARKS')], tt), Hn(e, i), Ye(), a();
  }

  var sl = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>');

  function cl(e) {Hn(e, sl());}

  var ul = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>');

  function dl(e) {Hn(e, ul());}

  var hl = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>');
  var ml = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>');

  function pl(e) {Hn(e, ml());}

  function gl(e) {Br.set(e.target.value);}

  var fl = Rn('<option> </option>'),
    wl = Rn('<span><!></span>'),
    bl = Rn(
      '<div id="SettingsPanel" class="panel"><h2> </h2> <button id="CloseSettings" class="closeButton"><!></button> <button id="ResetSettings" class="ControlButton"> </button> <div class="ControlLabel locale"> <select id="locale"></select></div> <div id="ThemeSection"><div class="ControlLabel ColorSchemeSelector"> <button id="ColorScheme" class="ControlButton"><!> <!></button></div> <div class="ControlLabel ThemeSelector"> <span title="custom"><!> <!></span> <!></div> <div id="Hue"> <input id="CustomThemeHue" type="color" class="colorpicker CustomTheme"/></div> <div id="Shade"><span> <output id="themeShadeVal" class="RangeValue" for="themeShade"> </output></span> <input type="range" name="ThemeShade" id="ThemeShade" min="100" max="900" step="100"/></div></div> <div class="ControlLabel loadMode"> <select id="loadMode"><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel PagesPerSecond"> <select id="PagesPerSecond"><option> </option><option>0.5</option><option> </option><option>02</option><option> </option><option>08</option><option> </option><option> </option></select></div> <div class="ControlLabel DefaultZoomMode"> <select id="DefaultZoomMode"><option> </option><option> </option><option> </option></select></div> <div><span> <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom"> </output></span> <input type="range" name="DefaultZoom" id="DefaultZoom" min="5" max="200" step="5" list="tickmarks"/> <datalist id="tickmarks"><option>5</option><option>25</option><option>50</option><option>75</option><option>100</option><option>125</option><option>150</option><option>175</option><option>200</option></datalist></div> <div class="ControlLabel minZoom"><span> <output id="minZoomVal" class="RangeValue" for="minZoom"> </output></span> <input type="range" name="minZoom" id="minZoom" min="30" max="100" step="10"/></div> <div class="ControlLabel zoomStep"><span> <output id="zoomStepVal" class="RangeValue" for="zoomStep"> </output></span> <input type="range" name="zoomStep" id="zoomStep" min="5" max="50" step="5"/></div> <div class="ControlLabel viewMode"> <select id="viewMode"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel fitIfOversize"> <input type="checkbox" value="true" name="fitIfOversize" id="fitIfOversize"/></div> <div class="ControlLabel showThumbnails"> <input type="checkbox" value="true" name="showThumbnails" id="showThumbnails"/></div> <div class="ControlLabel lazyLoadImages"> <input type="checkbox" value="true" name="lazyLoadImages" id="lazyLoadImages"/></div> <div><span> <output id="lazyStartVal" for="lazyStart"> </output></span> <input type="range" name="lazyStart" id="lazyStart" min="5" max="100" step="5"/></div> <div class="ControlLabel downloadZip"> <input type="checkbox" value="false" name="downloadZip" id="downloadZip"/></div> <div class="ControlLabel hidePageControls"> <input type="checkbox" value="false" name="hidePageControls" id="hidePageControls"/></div> <div class="ControlLabel headerType"> <select id="headerType"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel autoScroll"><span> <output id="scrollHeightVal" for="scrollHeight"> </output>px</span> <input type="range" name="scrollHeight" id="scrollHeight" min="1" max="100" step="1"/></div></div>');

  function vl(e, t) {
    Ke(t, !1);
    const [n, a] = ha(), o = () => da(ei, '$getLocaleString', n), r = () => da(li, '$settings', n);
    sa();
    var i = bl(), l = vt(i), s = vt(l), c = Et(l, 2);
    nl(vt(c));
    var u = Et(c, 2), d = vt(u), h = Et(u, 2), m = vt(h), p = Et(m);
    p.__change = [gl], Un(p, 5, () => ni, zn, (e, t) => {
      var n = fl(), a = {}, o = vt(n);
      dn(() => {
        a !== (a = Qt(t).ID) && (n.value = (n.__value = Qt(t).ID) ?? ''), ta(n,
          r().locale === Qt(t).ID), Nn(o, Qt(t).NAME);
      }), Hn(e, n);
    });
    var g = Et(h, 2), f = vt(g), w = vt(f), b = vt(Et(w));
    cl(b), dl(Et(b, 2));
    var v = Et(f, 2), y = vt(v), E = Et(y), S = vt(E);
    !function (e) {Hn(e, hl());}(S), pl(Et(S, 2)), Un(Et(E, 2), 1,
      () => [...Object.keys(T).map(e => T[e].name)], zn, (e, t) => {
        var n = wl();
        pl(vt(n)), dn(() => {
          Yn(n, 0, `${Qt(t) ?? ''} ThemeRadio ${r().theme === Qt(t) ? 'selected' : ''}`), na(n,
            'title', Qt(t));
        }), Hn(e, n);
      });
    var O = Et(v, 2),
      k = vt(O),
      M = Et(k),
      _ = Et(O, 2),
      A = vt(_),
      x = vt(A),
      L = vt(Et(x)),
      C = Et(A, 2),
      I = Et(g, 2),
      R = vt(I),
      B = vt(Et(R));
    B.value = B.__value = 'wait';
    var P = vt(B), H = Et(B);
    H.value = H.__value = 'always';
    var N = vt(H), D = Et(H);
    D.value = D.__value = 'never';
    var V = vt(D), q = Et(I, 2), G = vt(q), z = vt(Et(G));
    z.value = z.__value = '3000';
    var U = vt(z), $ = Et(z);
    $.value = $.__value = '2000';
    var F = Et($);
    F.value = F.__value = '1000';
    var j = vt(F), W = Et(F);
    W.value = W.__value = '500';
    var Z = Et(W);
    Z.value = Z.__value = '250';
    var K = vt(Z), Y = Et(Z);
    Y.value = Y.__value = '125';
    var X = Et(Y);
    X.value = X.__value = '100';
    var J = vt(X), Q = Et(X);
    Q.value = Q.__value = '1';
    var ee = vt(Q), te = Et(q, 2), ne = vt(te), ae = vt(Et(ne));
    ae.value = ae.__value = 'percent';
    var oe = vt(ae), re = Et(ae);
    re.value = re.__value = 'width';
    var ie = vt(re), le = Et(re);
    le.value = le.__value = 'height';
    var se = vt(le),
      ce = Et(te, 2),
      ue = vt(ce),
      de = vt(ue),
      he = vt(Et(de)),
      me = Et(ue, 2),
      pe = vt(Et(me, 2));
    pe.value = pe.__value = '5';
    var ge = Et(pe);
    ge.value = ge.__value = '25';
    var fe = Et(ge);
    fe.value = fe.__value = '50';
    var we = Et(fe);
    we.value = we.__value = '75';
    var be = Et(we);
    be.value = be.__value = '100';
    var ve = Et(be);
    ve.value = ve.__value = '125';
    var ye = Et(ve);
    ye.value = ye.__value = '150';
    var Ee = Et(ye);
    Ee.value = Ee.__value = '175';
    var Se = Et(Ee);
    Se.value = Se.__value = '200';
    var Oe = Et(ce, 2),
      ke = vt(Oe),
      Me = vt(ke),
      _e = vt(Et(Me)),
      Ae = Et(ke, 2),
      xe = Et(Oe, 2),
      Te = vt(xe),
      Le = vt(Te),
      Ce = vt(Et(Le)),
      Ie = Et(Te, 2),
      Re = Et(xe, 2),
      Be = vt(Re),
      Pe = vt(Et(Be));
    Pe.value = Pe.__value = 'Vertical';
    var He = vt(Pe), Ne = Et(Pe);
    Ne.value = Ne.__value = 'WebComic';
    var De = vt(Ne), Ve = Et(Ne);
    Ve.value = Ve.__value = 'FluidLTR';
    var qe = vt(Ve), Ge = Et(Ve);
    Ge.value = Ge.__value = 'FluidRTL';
    var ze = vt(Ge),
      Ue = Et(Re, 2),
      $e = vt(Ue),
      Fe = Et($e),
      je = Et(Ue, 2),
      We = vt(je),
      Ze = Et(We),
      Xe = Et(je, 2),
      Je = vt(Xe),
      Qe = Et(Je),
      et = Et(Xe, 2),
      nt = vt(et),
      at = vt(nt),
      ot = vt(Et(at)),
      rt = Et(nt, 2),
      it = Et(et, 2),
      lt = vt(it),
      st = Et(lt),
      ct = Et(it, 2),
      ut = vt(ct),
      dt = Et(ut),
      ht = Et(ct, 2),
      mt = vt(ht),
      pt = vt(Et(mt));
    pt.value = pt.__value = 'hover';
    var gt = vt(pt), ft = Et(pt);
    ft.value = ft.__value = 'scroll';
    var wt = vt(ft), bt = Et(ft);
    bt.value = bt.__value = 'click';
    var yt = vt(bt), St = Et(bt);
    St.value = St.__value = 'fixed';
    var Ot = vt(St), kt = vt(Et(ht, 2)), Mt = vt(kt), _t = vt(Et(Mt)), At = Et(kt, 2);
    dn((e, t, n, a, o, i, l, u, h, p, g, f, b, v, S, A, T, C, I, q, te, ue, me, pe, ge, fe, we, be,
      ve, ye, Ee, Se, Oe, ke, Ae, xe, Te, Ie, Re, Ue, je, Ke, Ye, Xe) => {
      Nn(s, e), na(c, 'title', t), Nn(d, n), Nn(m, `${a ?? ''} `), Nn(w, `${o ?? ''} `), Nn(y,
        `${i ?? ''} `), Yn(E, 0,
        'custom ThemeRadio ' + ('custom' === r().theme ? 'selected' : '')), Yn(O, 0,
        `ControlLabel CustomTheme ControlLabelItem\n          ${l ?? ''}`), Nn(k,
        `${u ?? ''} `), Qn(M, r().customTheme), Yn(_, 0,
        `ControlLabel CustomTheme ControlLabelItem\n          ${h ?? ''}`), Nn(x,
        `${p ?? ''} `), Nn(L, r().themeShade), Nn(R, `${g ?? ''} `), ta(B,
        'wait' === r().loadMode), Nn(P, f), ta(H, 'always' === r().loadMode), Nn(N, b), ta(D,
        'never' === r().loadMode), Nn(V, v), Nn(G, `${S ?? ''} `), ta(z,
        3e3 === r().throttlePageLoad), Nn(U, `0.3(${A ?? ''})`), ta($,
        2e3 === r().throttlePageLoad), ta(F, 1e3 === r().throttlePageLoad), Nn(j,
        `01(${T ?? ''})`), ta(W, 500 === r().throttlePageLoad), ta(Z,
        250 === r().throttlePageLoad), Nn(K, `04(${C ?? ''})`), ta(Y,
        125 === r().throttlePageLoad), ta(X, 100 === r().throttlePageLoad), Nn(J,
        `10(${I ?? ''})`), ta(Q, 1 === r().throttlePageLoad), Nn(ee, q), Nn(ne, `${te ?? ''} `), ta(
        ae, 'percent' === r().zoomMode), Nn(oe, ue), ta(re, 'width' === r().zoomMode), Nn(ie,
        me), ta(le, 'height' === r().zoomMode), Nn(se, pe), Yn(ce, 0,
        'ControlLabel DefaultZoom ControlLabelItem\n        ' + ('percent' === r().zoomMode ? 'show' : '')), Nn(
        de, `${ge ?? ''} `), Nn(he, `${r().defaultZoom ?? ''}%`), Nn(Me, `${fe ?? ''} `), Nn(_e,
        `${r().minZoom ?? ''}%`), Nn(Le, `${we ?? ''} `), Nn(Ce, `${r().zoomStep ?? ''}%`), Nn(Be,
        `${be ?? ''} `), ta(Pe, 'Vertical' === r().viewMode), Nn(He, ve), ta(Ne,
        'WebComic' === r().viewMode), Nn(De, ye), ta(Ve, 'FluidLTR' === r().viewMode), Nn(qe,
        Ee), ta(Ge, 'FluidRTL' === r().viewMode), Nn(ze, Se), Nn($e, `${Oe ?? ''} `), ea(Fe,
        r().fitWidthIfOversize), Nn(We, `${ke ?? ''} `), ea(Ze, r().showThumbnails), Nn(Je,
        `${Ae ?? ''} `), ea(Qe, r().lazyLoadImages), Yn(et, 0,
        `ControlLabel lazyStart ControlLabelItem\n        ${r().lazyLoadImages ? 'show' : ''}\n    `), Nn(
        at, `${xe ?? ''} `), Nn(ot, r().lazyStart), Nn(lt, `${Te ?? ''} `), ea(st,
        r().downloadZip), Nn(ut, `${Ie ?? ''} `), ea(dt, r().hidePageControls), Nn(mt,
        `${Re ?? ''} `), ta(pt, 'hover' === r().header), Nn(gt, Ue), ta(ft,
        'scroll' === r().header), Nn(wt, je), ta(bt, 'click' === r().header), Nn(yt, Ke), ta(St,
        'fixed' === r().header), Nn(Ot, Ye), Nn(Mt, `${Xe ?? ''} `), Nn(_t, r().scrollHeight);
    }, [
      () => o()('SETTINGS'),
      () => o()('CLOSE'),
      () => o()('BUTTON_RESET_SETTINGS'),
      () => o()('LANGUAGE'),
      () => o()('COLOR_SCHEME'),
      () => o()('THEME'),
      () => r().theme.startsWith('custom') ? 'show' : '',
      () => o()('THEME_HUE'),
      () => r().theme.startsWith('custom') ? '' : 'show',
      () => o()('THEME_SHADE'),
      () => o()('DEFAULT_LOAD_MODE'),
      () => o()('LOAD_MODE_NORMAL'),
      () => o()('LOAD_MODE_ALWAYS'),
      () => o()('LOAD_MODE_NEVER'),
      () => o()('LOAD_SPEED'),
      () => o()('SLOWLY'),
      () => o()('NORMAL'),
      () => o()('FAST'),
      () => o()('EXTREME'),
      () => o()('ALL_PAGES'),
      () => o()('DEFAULT_ZOOM_MODE'),
      () => o()('PERCENT'),
      () => o()('FIT_WIDTH'),
      () => o()('FIT_HEIGHT'),
      () => o()('DEFAULT_ZOOM'),
      () => o()('MINIMUM_ZOOM'),
      () => o()('ZOOM_STEP'),
      () => o()('DEFAULT_VIEW_MODE'),
      () => o()('VIEW_MODE_VERTICAL'),
      () => o()('VIEW_MODE_WEBCOMIC'),
      () => o()('VIEW_MODE_LEFT'),
      () => o()('VIEW_MODE_RIGHT'),
      () => o()('FIT_WIDTH_OVERSIZED'),
      () => o()('SHOW_THUMBNAILS'),
      () => o()('LAZY_LOAD_IMAGES_ENABLE'),
      () => o()('LAZY_LOAD_IMAGES'),
      () => o()('DOWNLOAD_IMAGES'),
      () => o()('HIDE_CONTROLS'),
      () => o()('HEADER_TYPE'),
      () => o()('HEADER_HOVER'),
      () => o()('HEADER_SCROLL'),
      () => o()('HEADER_CLICK'),
      () => o()('HEADER_FIXED'),
      () => o()('AUTO_SCROLL_HEIGHT'),
    ], tt), ra(C, () => r().themeShade, e => ma(li, en(r).themeShade = e, en(r))), ra(me,
      () => r().defaultZoom, e => ma(li, en(r).defaultZoom = e, en(r))), ra(Ae, () => r().minZoom,
      e => ma(li, en(r).minZoom = e, en(r))), ra(Ie, () => r().zoomStep,
      e => ma(li, en(r).zoomStep = e, en(r))), ra(rt, () => r().lazyStart,
      e => ma(li, en(r).lazyStart = e, en(r))), ra(At, () => r().scrollHeight,
      e => ma(li, en(r).scrollHeight = e, en(r))), Hn(e, i), Ye(), a();
  }

  Tn(['change']);
  var yl = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path></svg>');
  var El = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M14 4l0 4l-6 0l0 -4"></path></svg>');

  function Sl(e, t) {ct(t, !Qt(t));}

  var Ol = Rn('<kbd class="dark"> </kbd>'),
    kl = Rn('<span> </span> <span><!></span>', 1),
    Ml = Rn('<label> </label> <input type="text" class="KeybindInput"/>', 1),
    _l = Rn('<!> <div id="HotKeysRules"> </div>', 1),
    Al = Rn(
      '<div id="KeybindingsPanel" class="panel"><h2> </h2> <button id="CloseKeybindings" class="closeButton"><!></button> <div class="controls"><button id="EditKeybindings" class="ControlButton" type="button"><!> </button> <button id="SaveKeybindings" class="ControlButton hidden" type="button"><!> </button></div> <div id="KeybindingsList"><!></div></div>');

  function xl(e, t) {
    Ke(t, !0);
    const [n, a] = ha(), o = () => da(ei, '$getLocaleString', n), r = () => da(li, '$settings', n);
    let i = lt(!1);
    var l = Al(), s = vt(l), c = vt(s), u = Et(s, 2);
    nl(vt(u));
    var d = Et(u, 2), h = vt(d);
    h.__click = [Sl, i];
    var m = vt(h);
    !function (e) {Hn(e, yl());}(m);
    var p = Et(m), g = Et(h, 2);
    g.__click = [Sl, i];
    var f = vt(g);
    !function (e) {Hn(e, El());}(f);
    var w = Et(f), b = vt(Et(d, 2)), v = e => {
      var t = Pn();
      Un(yt(t), 1, () => Object.keys(r().keybinds), zn, (e, t) => {
        var n = kl(), a = yt(n), i = vt(a), l = vt(Et(a, 2)), s = e => {
          var n = Pn();
          Un(yt(n), 1, () => r().keybinds[Qt(t)] || [], zn, (e, t) => {
            var n = Ol(), a = vt(n);
            dn(() => Nn(a, Qt(t))), Hn(e, n);
          }), Hn(e, n);
        };
        Gn(l, e => {r().keybinds[Qt(t)] && e(s);}), dn(e => Nn(i, `${e ?? ''}:`),
          [() => o()(Qt(t))]), Hn(e, n);
      }), Hn(e, t);
    }, y = e => {
      var t = _l(), n = yt(t);
      Un(n, 1, () => Object.keys(r().keybinds), zn, (e, t) => {
        var n = Ml(), a = yt(n), i = vt(a), l = Et(a, 2);
        dn((e, n) => {
          na(a, 'for', Qt(t)), Nn(i, `${e ?? ''}:`), na(l, 'id', Qt(t)), na(l, 'name', Qt(t)), Qn(l,
            n);
        }, [() => o()(Qt(t)), () => r().keybinds[Qt(t)]?.join(' , ') ?? '']), Hn(e, n);
      });
      var a = vt(Et(n, 2));
      dn(e => Nn(a, e), [() => o()('KEYBIND_RULES')]), Hn(e, t);
    };
    Gn(b, e => {Qt(i) ? e(y, !1) : e(v);}), dn((e, t, n, a, o, r) => {
      Nn(c, e), na(u, 'title', t), na(h, 'title', n), Nn(p, ` ${a ?? ''}`), na(g, 'title', o), Nn(w,
        ` ${r ?? ''}`);
    }, [
      () => o()('KEYBINDINGS'),
      () => o()('CLOSE'),
      () => o()('EDIT_KEYBINDS'),
      () => o()('BUTTON_EDIT'),
      () => o()('SAVE_KEYBINDS'),
      () => o()('BUTTON_SAVE'),
    ]), Hn(e, l), Ye(), a();
  }

  Tn(['click']);
  var Tl = Rn(
    '<div class="Thumbnail"><img alt="" class="ThumbnailImg"/> <span class="ThumbnailIndex"> </span></div>');
  var Ll = Bn(
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>');
  var Cl = Rn(
    '<nav id="Navigation"><div id="NavigationCounters" class="ControlLabel"><!> <i>0</i> / <b> </b> </div> <div id="Thumbnails"></div></nav>');

  function Il(e, t) {
    Ke(t, !0);
    const [n, a] = ha();
    var o = Cl(), r = vt(o), i = vt(r);
    !function (e) {Hn(e, Ll());}(i);
    var l = Et(i, 4), s = vt(l), c = Et(l);
    Un(Et(r, 2), 21, () => Array.from(Array(t.manga.pages + 1).keys()).slice(t.manga.begin), zn,
      (e, t) => {
        !function (e, t) {
          const n = pa(t, 'src', 0, '');
          var a = Tl(), o = vt(a), r = vt(Et(o, 2));
          dn(() => {
            na(a, 'id', `Thumbnail${t.index ?? ''}`), na(o, 'id',
              `ThumbnailImg${t.index ?? ''}`), na(o, 'src', n()), Nn(r, t.index);
          }), Hn(e, a);
        }(e, { get index() {return Qt(t);} });
      }), dn(e => {
      Yn(o, 0, 'panel ' + (da(li, '$settings', n).showThumbnails ? '' : 'disabled')), Nn(s,
        t.manga.begin > 1 ? t.manga.pages - (t.manga.begin - 1) : t.manga.pages), Nn(c,
        ` ${e ?? ''}`);
    }, [() => da(ei, '$getLocaleString', n)('PAGES_LOADED')]), Hn(e, o), Ye(), a();
  }

  var Rl = Rn(
    '<section id="CommentsPanel" class="panel"><button id="CloseComments" class="closeButton"><!></button> <h2> </h2> <div id="CommentsArea"></div> <button id="CommentsColorScheme" class="simpleButton ColorScheme"><!> <!></button></section>');

  function Bl(e, t) {
    Ke(t, !0);
    const [n, a] = ha(), o = () => da(ei, '$getLocaleString', n);
    var r = Rl(), i = vt(r);
    nl(vt(i));
    var l = Et(i, 2), s = vt(l), c = Et(l, 2), u = vt(Et(c, 2));
    cl(u), dl(Et(u, 2)), dn(
      (e, t) => {na(i, 'title', e), Nn(s, t), Yn(c, 0, Kn(da(li, '$settings', n).colorScheme));},
      [() => o()('CLOSE'), () => o()('COMMENTS')]), Hn(e, r), Ye(), a();
  }

  var Pl = Rn(
    '<div id="MangaOnlineViewer"><!> <!> <!> <div id="Overlay" class="overlay"></div> <!> <!> <!> <!></div>');

  function Hl(e, t) {
    Ke(t, !0);
    const [n, a] = ha(), o = () => da(li, '$settings', n);
    var r = Pl(), i = vt(r);
    el(i, { get manga() {return t.manga;} });
    var l = Et(i, 2);
    !function (e, t) {
      Ke(t, !0);
      const [n, a] = ha(), o = () => da(li, '$settings', n);
      var r = Ii();
      Un(r, 21, () => Array.from(Array(t.manga.pages + 1).keys()).slice(t.manga.begin), zn,
        (e, t) => {Ci(e, { get index() {return Qt(t);} });}), dn(() => Yn(r, 0,
        `${o().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}\n      ${o().viewMode ?? ''}`)), Hn(
        e, r), Ye(), a();
    }(l, { get manga() {return t.manga;} });
    var s = Et(l, 2);
    Il(s, { get manga() {return t.manga;} });
    var c = Et(s, 4);
    Bl(c, { get manga() {return t.manga;} });
    var u = Et(c, 2);
    vl(u, {});
    var d = Et(u, 2);
    xl(d, {}), ll(Et(d, 2), {}), dn((e, t) => {
      Yn(r, 0,
        `${o().colorScheme ?? ''}\n        ${o().hidePageControls ? 'hideControls' : ''}\n        ${e ?? ''}\n        ${t ?? ''}`), na(
        r, 'data-theme', o().theme);
    }, [() => gi() ? 'bookmarked' : '', ue]), Hn(e, r), Ye(), a();
  }

  const Nl = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <path d="M15 8h.01" />\r\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\r\n</svg>\r\n\r\n\r\n',
    Dl = x`
    :root,
    .dark {
      --theme-body-background: ${T.dark[600]};
      --theme-body-text-color: ${T.dark[50]};
      --theme-text-color: ${T.dark[50]};
      --theme-primary-color: ${T.dark[700]};
      --theme-primary-text-color: ${T.dark[50]};
      --theme-background-color: ${T.dark[600]};
      --theme-hightlight-color: ${T.dark[500]};
      --theme-border-color: ${T.dark[400]};
    }

    .light {
      --theme-body-background: ${T.gray[50]};
      --theme-body-text-color: ${T.gray[900]};
      --theme-text-color: ${T.gray[900]};
      --theme-primary-color: ${T.gray[300]};
      --theme-primary-text-color: ${T.gray[900]};
      --theme-background-color: ${T.gray[50]};
      --theme-hightlight-color: ${T.gray[500]};
      --theme-border-color: ${T.gray[100]};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${C(Nl)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${C(Nl)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${C(
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24"\r\n     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\r\n     stroke-linecap="round" stroke-linejoin="round">\r\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n    <path d="M15 8h.01"/>\r\n    <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/>\r\n    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>\r\n    <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/>\r\n    <path d="M3 3l18 18" color="orange"/>\r\n</svg>\r\n\r\n\r\n')}');
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${C(
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />\r\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n\r\n\r\n')}");*/
    }

    ${'html{font-size:100%}body{margin:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:var(--theme-body-text-color);background-color:var(--theme-body-background);padding:0}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{height:auto;vertical-align:middle;border:0 none}'}
    ${':root{--theme-body-background: #25262b;--theme-body-text-color: #c1c2c5;--theme-text-color: #c1c2c5;--theme-primary-color: #1a1b1e;--theme-primary-text-color: #c1c2c5;--theme-background-color: #25262b;--theme-hightlight-color: #2c2e33;--theme-border-color: #373a40}#MangaOnlineViewer{text-decoration:none;color:var(--theme-body-text-color);background-color:var(--theme-body-background)}#MangaOnlineViewer #Chapter{display:grid;grid-template-columns:repeat(1,1fr);min-width:225px}#MangaOnlineViewer #Chapter.Vertical:has(+#Navigation:not(.disabled)),#MangaOnlineViewer #Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#MangaOnlineViewer #Chapter.Vertical .PageContent{margin-bottom:8px;margin-top:8px}#MangaOnlineViewer .closeButton{width:fit-content;height:fit-content;position:absolute;right:10px;top:10px}#MangaOnlineViewer .overlay{position:fixed;display:none;width:100%;height:100%;inset:0;background-color:#00000080;z-index:950;cursor:pointer}#MangaOnlineViewer .overlay.visible{display:block}#MangaOnlineViewer select{height:20px;margin:2px}#MangaOnlineViewer .ControlButton,#MangaOnlineViewer .simpleButton{cursor:pointer;border-radius:5px;border-width:1px;border-style:solid;padding:2px;min-height:32px;color:var(--theme-primary-text-color);background-color:var(--theme-primary-color);border-color:var(--theme-border-color)}#MangaOnlineViewer .ControlButton:active,#MangaOnlineViewer .ControlButton:hover{opacity:.8}#MangaOnlineViewer .simpleButton{font-size:initial;min-width:32px}#MangaOnlineViewer .panel .simpleButton{position:absolute;top:10px;left:10px}#MangaOnlineViewer .panel{padding:5px;position:inherit;border-radius:5px;background-color:var(--theme-background-color)}#MangaOnlineViewer :not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{max-width:100%;object-fit:contain}#MangaOnlineViewer .ControlButton.hidden,#MangaOnlineViewer.light #ColorScheme>.icon-tabler-sun,#MangaOnlineViewer.dark #ColorScheme>.icon-tabler-moon,#MangaOnlineViewer .light+#CommentsColorScheme>.icon-tabler-sun,#MangaOnlineViewer .dark+#CommentsColorScheme>.icon-tabler-moon,#MangaOnlineViewer .ChapterControl #download.loading>.icon-tabler-file-download,#MangaOnlineViewer .ChapterControl #download:not(.loading)>.icon-tabler-loader-2,#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide>.icon-tabler-eye-off,#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide>.icon-tabler-eye,#MangaOnlineViewer.bookmarked .Bookmark>.icon-tabler-bookmark,#MangaOnlineViewer:not(.bookmarked) .Bookmark>.icon-tabler-bookmark-off,#MangaOnlineViewer #AutoScroll.running>.icon-tabler-player-play,#MangaOnlineViewer #AutoScroll:not(.running)>.icon-tabler-player-pause{display:none}#MangaOnlineViewer.hideControls .PageFunctions{visibility:hidden}'}
  ${'#MangaOnlineViewer #gotoPage{min-width:35px}#MangaOnlineViewer #Header{display:flex;justify-content:space-between;align-items:center;flex-flow:row nowrap;transition:transform .3s ease-in;position:sticky;top:0;left:0;right:0;background-color:inherit;z-index:900}#MangaOnlineViewer #Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%);position:sticky;top:0}to{transform:translateY(0);position:sticky;top:0}}#MangaOnlineViewer #Header:not(.visible,.headroom-top,.fixed,.simple){animation:headroom .3s ease-in reverse;transform:translateY(-100%);position:sticky;top:0}#MangaOnlineViewer #Header.click:has(+#Chapter.FluidLTR,+#Chapter.FluidRTL){position:fixed;padding-left:40px;top:-100%}#MangaOnlineViewer #Header.scroll.headroom-hide{animation:none;transform:translateY(-100%);position:sticky;top:0}#MangaOnlineViewer #Header.scroll.headroom-show,#MangaOnlineViewer #Header.headroom-end,#MangaOnlineViewer #Header.click:has(+#Chapter.FluidLTR,+#Chapter.FluidRTL).visible,#MangaOnlineViewer #Header.visible{animation:headroom .3s ease-in;transform:translateY(0);position:sticky;top:0}#MangaOnlineViewer #Header.headroom-top{animation:none}#MangaOnlineViewer #Header.fixed{position:sticky;animation:none;top:0;transform:translateY(0)}#MangaOnlineViewer #Header.simple{position:static;animation:none;top:0;transform:translateY(0)}#MangaOnlineViewer #menu{position:fixed;z-index:1;color:var(--theme-body-text-color);height:40px;width:40px}#MangaOnlineViewer #menu .icon-tabler{position:relative;top:4px;left:4px;height:32px;width:32px;stroke-width:1.25}#MangaOnlineViewer #menu:not(.click,.hover),#MangaOnlineViewer #menu.hide{display:none}#MangaOnlineViewer #menu.click{z-index:901}#MangaOnlineViewer #MangaTitle{padding:2px;margin:0;font-size:1.2rem;font-weight:400}#MangaOnlineViewer #GlobalFunctions{display:flex;gap:3px;padding:3px 3px 3px 0;flex-wrap:wrap;width:300px;z-index:100}#MangaOnlineViewer #GlobalFunctions span,#MangaOnlineViewer .ChapterControl span{display:flex;flex-wrap:nowrap;justify-content:space-evenly}#MangaOnlineViewer .ChapterControl span{flex-grow:1}#MangaOnlineViewer .ChapterControl span>*{flex-basis:50%}#MangaOnlineViewer #ScrollControl .icon-tabler,#MangaOnlineViewer #GlobalFunctions .icon-tabler{width:25px;height:25px}#MangaOnlineViewer #GlobalFunctions #ZoomSlider{display:flex;align-items:center}#MangaOnlineViewer #GlobalFunctions #Zoom{margin:2px 5px;width:160px}#MangaOnlineViewer #GlobalFunctions #ZoomVal{width:40px;display:inline-block;color:var(--theme-primary-text-color);line-height:20px;text-align:center;border-radius:3px;background:var(--theme-primary-color);padding:2px 5px}#MangaOnlineViewer #ChapterNavigation{display:flex;flex-flow:column nowrap;justify-content:center;align-items:end;padding:5px;max-width:350px}#MangaOnlineViewer #Counters{padding-right:5px}#MangaOnlineViewer #ChapterControl{display:flex}#MangaOnlineViewer #ChapterControl .NavigationControlButton{display:inline-flex;margin:2px;justify-content:center;align-items:center;padding:3px;gap:.5em}#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler{flex-shrink:0;align-self:center;width:1rem;height:1rem}#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="#"],#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=""],#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=undefined]{visibility:hidden}#MangaOnlineViewer #ChapterControl #download.loading{cursor:not-allowed;pointer-events:none;opacity:.6}#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled{pointer-events:none;filter:grayscale(.9)}#MangaOnlineViewer .ViewerTitle{text-align:center;min-height:60px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:5px;flex-basis:60%}'}
  ${'.icon-tabler{height:1rem;width:1rem;vertical-align:sub}.icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3){color:#ff0}.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3){color:#28ffbf}.icon-tabler-arrow-autofit-left>:nth-child(n+3){color:#28ffbf}.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2){color:orange}.icon-tabler-bookmark>*{color:orange}.icon-tabler-bookmark-off>*{color:orange}.icon-tabler-bookmark-off>:nth-child(3){color:red}.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>*{color:silver}.icon-tabler-photo-off>*{color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3){color:#adff2f}'}
  ${'#MangaOnlineViewer #KeybindingsPanel{padding:10px;position:fixed;top:0;right:0;bottom:0;transition:transform .3s ease-in-out;transform:translate(100%);line-height:1.5em;z-index:1000;overflow-y:auto;width:360px;max-width:100vw}#MangaOnlineViewer #KeybindingsPanel.visible{transform:translate(0);display:block}#MangaOnlineViewer #KeybindingsPanel #KeybindingsList{display:grid;grid-template-columns:1fr 2fr;gap:5px}#MangaOnlineViewer #KeybindingsPanel .ControlButton{margin-left:3px;justify-content:center;align-items:center;padding:5px 10px;gap:.5em}#MangaOnlineViewer #KeybindingsPanel label{display:ruby}#MangaOnlineViewer #KeybindingsPanel input{display:inline-block;width:100%}#MangaOnlineViewer #KeybindingsPanel #HotKeysRules{grid-column:span 2}'}
  ${'#MangaOnlineViewer .MangaPage{width:100%;display:inline-block;text-align:center;line-height:0;min-height:22px;min-width:100%}#MangaOnlineViewer .PageContent{text-align:center;display:inline-block;overflow-x:auto;max-width:100%;transition:all .3s ease-in-out;height:100%;overflow-y:hidden}#MangaOnlineViewer .MangaPage.hide .PageContent{height:0}#MangaOnlineViewer .PageContent .PageImg[src=""],#MangaOnlineViewer .PageContent .PageImg:not([src]){width:40vw;height:80vh;display:inline-block;background-position:center;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color)}#MangaOnlineViewer .PageContent .PageImg.imgBroken{width:40vw;height:80vh;display:inline-block;background-position:center;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color)}#MangaOnlineViewer .PageFunctions{font-family:monospace;display:flex;justify-content:flex-end;align-items:center;margin:0;padding:0;gap:3px;position:absolute;right:0}#MangaOnlineViewer .PageFunctions>.PageIndex{background-color:var(--theme-primary-color);color:var(--theme-primary-text-color);min-width:20px;text-align:center;display:inline-block;padding:3px 5px;line-height:1rem;border-radius:5px}#MangaOnlineViewer .PageFunctions .ControlButton{padding:3px;display:flex;justify-content:center;align-items:center;margin:0;border-width:0;min-height:auto;opacity:.5}#MangaOnlineViewer .PageFunctions:hover .ControlButton{opacity:1}#MangaOnlineViewer .PageFunctions .ControlButton:hover{opacity:.9}#MangaOnlineViewer #Chapter.Vertical .separator{display:flex;align-items:center;text-align:center;font-style:italic}#MangaOnlineViewer #Chapter.Vertical .separator:before,#MangaOnlineViewer #Chapter.Vertical .separator:after{content:"";flex:1;border-bottom:1px solid var(--theme-text-color)}#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#MangaOnlineViewer #Chapter:not(.separator) .separator,#MangaOnlineViewer #Chapter:not(.Vertical) .separator{display:none}'}
  ${'#MangaOnlineViewer #Chapter.FluidLTR,#MangaOnlineViewer #Chapter.FluidRTL{display:flex;overflow-x:auto;min-width:auto;.ZoomWidth{display:none}.PageImg{min-width:unset}.MangaPage{width:initial;min-width:fit-content;position:relative;max-height:100%}.MangaPage.DoublePage{grid-column:span 2}}#MangaOnlineViewer #Chapter.FluidLTR{flex-direction:row;.MangaPage .PageFunctions{right:auto;left:0;direction:rtl}}#MangaOnlineViewer #Chapter.FluidRTL{flex-direction:row-reverse}'}
  ${'#MangaOnlineViewer #SettingsPanel{color:var(--theme-text-color);padding:10px;position:fixed;top:0;left:0;bottom:0;z-index:1000;transition:transform .3s ease-in,background-color .3s linear;transform:translate(-100%);display:flex;flex-flow:column;gap:5px;overflow-y:auto;max-width:100vw;width:308px}#MangaOnlineViewer #SettingsPanel.visible{transform:translate(0)}#MangaOnlineViewer #SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);padding:3px;border-radius:10px}#MangaOnlineViewer #SettingsPanel .ControlLabel{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;padding:2px}#MangaOnlineViewer #SettingsPanel .ControlLabelItem{display:flex;align-items:center;justify-content:space-between}#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show){display:none}#MangaOnlineViewer #SettingsPanel input[type=range]{width:100%}#MangaOnlineViewer #SettingsPanel .RangeValue{display:inline-block;color:var(--theme-primary-text-color);line-height:20px;text-align:center;border-radius:3px;background:var(--theme-primary-color);padding:2px 5px;margin-left:8px}#MangaOnlineViewer #SettingsPanel datalist{display:flex;flex-direction:column;justify-content:space-between;align-items:center;writing-mode:vertical-lr;width:100%}#MangaOnlineViewer #SettingsPanel datalist option{padding:0}#MangaOnlineViewer .ThemeRadio{border:1px solid var(--theme-text-color);color:var(--theme-primary-text-color);background-color:var(--theme-primary-color);height:20px;width:20px;border-radius:50%;padding:1px;margin:2px 5px;position:relative}#MangaOnlineViewer .ThemeRadio svg{position:absolute;top:15%;right:15%}#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check{display:inline}#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check{display:none}#MangaOnlineViewer #ThemeSelector{width:110px}#MangaOnlineViewer #Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#MangaOnlineViewer .radio-inputs{position:relative;display:flex;flex-wrap:wrap;border-radius:.5rem;background-color:var(--theme-border-color);color:var(--theme-text-color);box-sizing:border-box;box-shadow:0 0 0 1px #0000000f;padding:.25rem;width:300px;font-size:14px}#MangaOnlineViewer .radio-inputs .radio{flex:1 1 auto;text-align:center}#MangaOnlineViewer .radio-inputs .radio input{display:none}#MangaOnlineViewer .radio-inputs .radio .name .icon{margin:0 .5rem}#MangaOnlineViewer .radio-inputs .radio .name{display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:.5rem;border:none;padding:.5rem 0;color:var(--theme-text-color);background-color:var(--theme-border-color);transition:all .15s ease-in-out}#MangaOnlineViewer .radio-inputs .radio input:checked+.name{background-color:var(--theme-primary-color);color:var(--theme-primary-text-color);font-weight:600}#MangaOnlineViewer #ColorScheme{padding:5px;min-height:28px;min-width:28px}#MangaOnlineViewer .toggler{width:36px}#MangaOnlineViewer .toggler input{display:none}#MangaOnlineViewer .toggler label{display:block;position:relative;width:36px;height:18px;border:1px solid #d6d6d6;border-radius:36px;background:#e4e8e8;cursor:pointer}#MangaOnlineViewer .toggler label:after{display:block;border-radius:100%;background-color:#d7062a;content:"";animation-name:toggler-size;animation-duration:.15s;animation-timing-function:ease-out;animation-direction:normal;animation-iteration-count:1;animation-play-state:running}#MangaOnlineViewer .toggler label:after,.toggler label .toggler-on,.toggler label .toggler-off{position:absolute;top:9px;left:25%;width:16px;height:16px;transform:translateY(-50%) translate(-50%);transition:left .15s ease-in-out,background-color .2s ease-out,width .15s ease-in-out,height .15s ease-in-out,opacity .15s ease-in-out}#MangaOnlineViewer .toggler input:checked+label:after,.toggler input:checked+label .toggler-on,.toggler input:checked+label .toggler-off{left:75%}#MangaOnlineViewer .toggler input:checked+label:after{background-color:#50ac5d;animation-name:toggler-size2}#MangaOnlineViewer .toggler .toggler-on,.toggler .toggler-off{opacity:1;z-index:2}#MangaOnlineViewer .toggler input:checked+label .toggler-off,.toggler input:not(:checked)+label .toggler-on{width:0;height:0;opacity:0}#MangaOnlineViewer .toggler .path{fill:none;stroke:#fefefe;stroke-width:7px;stroke-linecap:round;stroke-miterlimit:10}#MangaOnlineViewer @keyframes toggler-size{0%,100%{width:26px;height:26px}50%{width:20px;height:20px}}#MangaOnlineViewer @keyframes toggler-size2{0%,100%{width:26px;height:26px}50%{width:20px;height:20px}}'}
  ${'#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]){width:100px;height:150px;display:inline-block;background-position:center;background-repeat:no-repeat;background-size:20%}#MangaOnlineViewer #NavigationCounters{margin:5px;width:100%;line-height:1rem}#MangaOnlineViewer #Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);bottom:-180px;height:185px;overflow-x:hidden;overflow-y:hidden;padding-bottom:20px;position:fixed;white-space:nowrap;width:100%;text-align:center;transition:transform .3s ease-in,background-color .3s linear;border-bottom-left-radius:0;border-bottom-right-radius:0;line-height:0}#MangaOnlineViewer #Navigation #Thumbnails{overflow-x:auto;overflow-y:hidden;margin-right:10px}#MangaOnlineViewer #Navigation:hover{transform:translateY(-180px)}#MangaOnlineViewer #Navigation.disabled{display:none}#MangaOnlineViewer #Navigation.visible{transform:translateY(-180px)}#MangaOnlineViewer #Navigation .Thumbnail{display:inline-block;height:150px;margin:0 5px;border:1px solid var(--theme-primary-color)}#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);display:block;opacity:.8;position:relative;bottom:25%;width:100%;line-height:1rem}#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg{cursor:pointer;display:inline-block;max-height:150px;min-height:150px;min-width:80px;max-width:160px}'}
  ${'#MangaOnlineViewer #BookmarksPanel{position:fixed;top:10%;width:50%;left:25%;right:25%;text-align:center;max-height:70%;transition:transform .3s ease-in-out;transform:scaleY(0);z-index:1000}#MangaOnlineViewer #BookmarksPanel.visible{transform:scaleY(1);display:block}#MangaOnlineViewer #BookmarksList{padding:0 15px;overflow:auto;max-height:60vh}#MangaOnlineViewer #BookmarksList .BookmarkItem{display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:2px}#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge{flex-basis:90%}#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall{width:90px}#MangaOnlineViewer #BookmarksList .bookmarkFunctions{width:75px}#MangaOnlineViewer #BookmarksList .bookmarkURl{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex-basis:55%}'}
  ${'#MangaOnlineViewer #CommentsPanel{position:static;width:90%;height:0;top:5%;left:5%;text-align:center;transition:transform .3s ease-in-out;transform:scaleY(0);z-index:1000;overflow-y:initial;background-color:var(--theme-body-background);opacity:0}#MangaOnlineViewer #CommentsPanel.visible{position:fixed;height:90%;transform:scaleY(1);display:flex;justify-content:center;align-items:center;flex-direction:column;opacity:1}#MangaOnlineViewer #CommentsArea{overflow-y:auto;overscroll-behavior:contain;height:100%;width:100%;background-color:var(--theme-body-background)}'}
  ${'#MangaOnlineViewer.mobile #Header,#MangaOnlineViewer.tablet #Header{display:flex;flex-direction:row;flex-wrap:wrap}#MangaOnlineViewer.mobile .ViewerTitle,#MangaOnlineViewer.tablet .ViewerTitle{order:1;min-height:auto;padding:0;margin:0;flex-grow:1;flex-shrink:1;flex-basis:100%}#MangaOnlineViewer.mobile #GlobalFunctions,#MangaOnlineViewer.tablet #GlobalFunctions{width:auto;order:2;padding:5px}#MangaOnlineViewer.mobile #ChapterNavigation,#MangaOnlineViewer.tablet #ChapterNavigation{order:3}#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets,.phones),#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets,.phones){display:none}#MangaOnlineViewer.mobile #Header{flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}#MangaOnlineViewer.mobile #Header.click+#Chapter:not(.webcomic,.vertical){position:sticky}#MangaOnlineViewer.mobile #MangaTitle{word-wrap:anywhere}#MangaOnlineViewer.mobile .ViewerTitle{order:1;margin-top:0;height:auto;padding:0}#MangaOnlineViewer.mobile #GlobalFunctions{order:2;padding:0;width:auto;flex-basis:35px}#MangaOnlineViewer.mobile #ChapterNavigation{order:3;width:min-content;min-width:205px}#MangaOnlineViewer.mobile .ChapterControl{flex-direction:row;flex-wrap:wrap}#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton{flex-grow:1}#MangaOnlineViewer.mobile .PageFunctions{padding:0}#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark{opacity:1}#MangaOnlineViewer.mobile #Navigation,#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,#MangaOnlineViewer.mobile #SettingsPanel .minZoom,#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,#MangaOnlineViewer.mobile #SettingsPanel .headerType,#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,#MangaOnlineViewer.mobile #KeybindingsPanel,#MangaOnlineViewer.mobile .ChapterControl .download,#MangaOnlineViewer.mobile #Counters{display:none}'}
  ${'@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.animate-spin-reverse{-webkit-animation:spin-reverse 1s linear infinite;animation:spin-reverse 1s linear infinite}'}
  `;

  function Vl(e, t) {
    if (!document.querySelector(`#${e}`)) {
      (document.head ?? document.querySelector('head')).appendChild(function (e, t) {
        const n = document.createElement('style');
        return n.id = e, n.appendChild(document.createTextNode(t)), n;
      }(e, t));
    }
  }

  function ql(e, t) {
    !function (e) {
      document.querySelectorAll(`style[id="${e}"]`).forEach(e => {e.remove();});
    }(e), Vl(e, t);
  }

  function Gl(e, t) {
    return A`
      <style type="text/css" id="${e}">
        ${t}
      </style>
    `;
  }

  function zl(e, t, n) {
    return x`
      .ThemeRadio.${e}, #MangaOnlineViewer[data-theme='${e}'] {
        --theme-primary-color: ${t};
        --theme-primary-text-color: ${n};
      }
    `;
  }

  function Ul(e) {return zl(e.name, e[di('themeShade')], di('themeShade') < 500 ? e[900] : e[50]);}

  function $l(e) {return zl('custom', e, L(e));}

  const Fl = () => Object.values(T);
  const jl = Fl().map(function (e) {return Gl(e.name, Ul(e));}).join('') + Gl('custom',
    $l(di('customTheme'))), Wl = [
    '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}',
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px #00000013,0 1px 2px #00000013,1px 2px 4px #00000013,1px 3px 8px #00000013,2px 4px 16px #00000013;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:.5em 0 0;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:#0006}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(#0000001a,#0000001a)}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(#0003,#0003)}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px #7066e080}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px #dc374180}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px #6e788180}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px #6496c880}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:#0003}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px #6496c880}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px #0000000f,0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px #0000000f,0 0 0 3px #6496c880}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message:before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0)}}@-webkit-keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}to{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}to{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotate(45deg);opacity:0}25%{transform:rotate(-25deg);opacity:.4}50%{transform:rotate(15deg);opacity:.8}75%{transform:rotate(-5deg);opacity:1}to{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotate(45deg);opacity:0}25%{transform:rotate(-25deg);opacity:.4}50%{transform:rotate(15deg);opacity:.8}75%{transform:rotate(-5deg);opacity:1}to{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px #0006}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translate(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translate(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}',
    '#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px}#pagesSlider{margin:10px 0}#pageInputs{display:flex;gap:5px;align-items:center;justify-content:center}#swal2-html-container .pageInput{border:1px darkblue dashed;border-radius:5px;text-align:center;background-color:#f0f8ff;color:#000;max-width:40%}#swal2-title{color:navy}button.swal2-styled{position:inherit;transform:inherit}',
    '#nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translateY(-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}',
    'kbd,.key{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:.3em .4em .2em .3em;font-style:normal;font-family:Lucida Grande,Lucida,Arial,sans-serif;text-align:center;text-decoration:none;border-radius:.3em;border:none;background-color:#505050;background-color:gradient(linear,left top,left bottom,from(#3c3c3c),to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;font-size:.85em;line-height:1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:.3em .4em .2em .3em;font-style:normal;font-family:Lucida Grande,Lucida,Arial,sans-serif;text-align:center;text-decoration:none;border-radius:.3em;border:none;background-color:#505050;background-color:gradient(linear,left top,left bottom,from(#3c3c3c),to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:.3em .4em .2em .3em;font-style:normal;font-family:Lucida Grande,Lucida,Arial,sans-serif;text-align:center;text-decoration:none;border-radius:.3em;border:none;background-color:#fafafa;background-color:gradient(linear,left top,left bottom,from(#d2d2d2),to(#ffffff));color:#323232;text-shadow:0 0 2px #ffffff;-webkit-box-shadow:inset 0 0 1px #ffffff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9);box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{display:inline;display:inline-block;white-space:nowrap;min-width:1em;font-style:normal;font-family:Lucida Grande,Lucida,Arial,sans-serif;text-align:center;text-decoration:none;border:none;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.4;color:#242729;text-shadow:0 1px 0 #FFF;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.27272727em;-webkit-box-shadow:0 1px 0 rgba(12,13,14,.2),0 0 0 2px #FFF inset;box-shadow:0 1px #0c0d0e33,0 0 0 2px #fff inset}kbd.github,.github-keys kbd,.key.github,.github-keys .key{display:inline;display:inline-block;white-space:nowrap;min-width:1em;font-style:normal;font-family:Lucida Grande,Lucida,Arial,sans-serif;text-align:center;text-decoration:none;border:none;padding:.27272727em .45454545em;font-size:68.75%;line-height:.90909091;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:solid 1px #c6cbd1;border-bottom-color:#959da5;border-radius:.27272727em;-webkit-box-shadow:inset 0 -1px 0 #959da5;box-shadow:inset 0 -1px #959da5;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;-webkit-box-sizing:border-box;box-sizing:border-box;text-shadow:none}',
  ].join('\n');

  async function Zl(e) {
    return async function (e, t) {
      return new Promise(n => {
        te('Fetching page: ', e), fetch(e).then(async e => e.text()).then(e => {
          const a = (new DOMParser).parseFromString(e, t);
          n(a);
        }).catch(e => {te('Failed to fetch page: ', e);});
      });
    }(e, 'text/html');
  }

  const Kl = /^blob:(.+?)\/(.+)$/;

  function Yl(e) {return e.slice(e.indexOf(';base64,') + 8);}

  function Xl(e) {return /^data:image\/(png|jpg|jpeg|gif);base64,/.test(e);}

  function Jl(e) {return Kl.test(e);}

  function Ql(e) {
    const t = e.split('?')[0].split('/').pop(), n = t?.match(/\.[A-Za-z]{2,4}$/);
    return n ? n[0].slice(1) : '';
  }

  const es = e => {
    switch (e.substring(e.indexOf('/') + 1, e.indexOf(';base64'))) {
      case'/':
        return 'jpg';
      case'R':
        return 'gif';
      case'U':
        return 'webp';
      default:
        return 'png';
    }
  }, ts = 2e3, ns = 500, as = 'data-src', os = 'src';
  let rs = [], is = !1;

  function ls(e) {
    const { element: t } = e,
      n = t.getBoundingClientRect(),
      a = (window.innerHeight || document.documentElement.clientHeight) + ts;
    return n.top <= a || n.bottom <= a;
  }

  async function ss(e) {
    let t = e.element.getAttribute(as) ?? '';
    t && (Jl(t) || Xl(t) || !e.fetchOptions || (t = await fetch(t, e.fetchOptions).then(
      e => e.blob()).then(e => blobUtil.blobToDataURL(e))), e.element.setAttribute(os,
      t)), e.callback(e.element)?.catch(te);
  }

  const cs = _.throttle(function () {
    const e = rs.filter(ls);
    rs = rs.filter(e => !ls(e)), e.forEach(ss);
  }, ns);

  function us(e, t, n) {
    is || (window.addEventListener('scroll', cs, { passive: !0 }), window.addEventListener(
      'touchmove', cs, { passive: !0 }), window.addEventListener('resize', cs,
      { passive: !0 }), is = !0), rs.push({ element: e, callback: t, fetchOptions: n }), cs();
  }

  function ds(e, t = 1) {return Array(e).fill(0).map((e, t) => t + 1).filter(e => e >= t);}

  function hs() {
    const e = document.getElementById('BookmarksList');
    e && (e.innerHTML = (s(di('bookmarks')) ? [pi('LIST_EMPTY')] : di('bookmarks').map((e, t) => A`
        <div id="Bookmark${t + 1}" class="BookmarkItem">
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${e.name}</span>
            <br />
            <a class="bookmarkURl" href="${e.url}" target="_blank">${e.url}</a>
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(e.date).toISOString().slice(0, 10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${e.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a class="" href="${e.url}" target="_blank">
              <button class="ControlButton open" title="Open Bookmark" type="button">
                ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\r\n  <path d="M11 13l9 -9" />\r\n  <path d="M15 4h5v5" />\r\n</svg>\r\n\r\n\r\n'}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${e.url}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <path d="M4 7l16 0" />\r\n  <path d="M10 11l0 6" />\r\n  <path d="M14 11l0 6" />\r\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\r\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\r\n</svg>\r\n\r\n\r\n'}
            </button>
          </span>
        </div>
      `)).join(''));
  }

  function ms(e) {
    const t = document.querySelector('#Chapter');
    t?.classList.contains('FluidLTR') || t?.classList.contains('FluidRTL') ? t?.scroll(
      e?.offsetLeft ?? 0, e?.offsetTop ?? 0) : window?.scroll(e?.offsetLeft ?? 0, e?.offsetTop ?? 0);
  }

  function ps(e, t) {return n => n.addEventListener(e, t);}

  function gs(e) {e.deltaY && (e.currentTarget.scrollLeft += e.deltaY + e.deltaX, e.preventDefault());}

  function fs(e) {e.deltaY && (e.currentTarget.scrollLeft -= e.deltaY + e.deltaX, e.preventDefault());}

  function ws() {
    document.querySelector('#BookmarksPanel')?.classList.remove('visible'), document.querySelector(
      '#Overlay')?.classList.remove('visible');
  }

  function bs(e = window.location.href) {
    c(gi(e)) || (te(`Bookmark Removed ${e}`), mi('bookmarks',
      t => t.filter(t => t.url !== e)), e === window.location.href && document.querySelector(
      '#MangaOnlineViewer')?.classList.remove('bookmarked'));
  }

  function vs(e) {
    const t = e.currentTarget.value;
    te(`Bookmark Removed ${t}`), Swal.fire(
      { title: pi('BOOKMARK_REMOVED'), timer: 1e4, icon: 'error' }), bs(
      t), hs(), document.querySelectorAll('.bookmarkFunctions .erase')?.forEach(ps('click', vs));
  }

  function ys() {
    hs(), document.querySelectorAll('.bookmarkFunctions .erase')?.forEach(
      ps('click', vs)), document.querySelector('#BookmarksPanel')?.classList.add(
      'visible'), document.querySelector('#Overlay')?.classList.add('visible');
  }

  function Es(e) {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    const t = [...document.querySelectorAll('.MangaPage')].map(
        e => Math.abs(e.offsetTop - window.scrollY)),
      n = parseInt(e.currentTarget.parentElement?.querySelector('.PageIndex')?.textContent ?? '0',
        10) || t.indexOf(Math.min(...t)) + 1,
      a = {
        name: document.querySelector('title')?.textContent?.trim().replace(/^\(\d+%\) */, '') ?? '',
        url: window.location.href,
        page: n,
        date: (new Date).toISOString().slice(0, 10),
      };
    gi(a.url) ? (mi('bookmarks', e => e.filter(e => e.url !== a.url)), Swal.fire(
      { title: pi('BOOKMARK_REMOVED'), timer: 1e4, icon: 'error' })) : (mi('bookmarks',
      e => [...e, a]), Swal.fire({
      title: pi('BOOKMARK_SAVED'),
      html: pi('BOOKMARK_SAVED').replace('##NUM##', n.toString()),
      icon: 'success',
    })), hs(), document.querySelectorAll('.bookmarkFunctions .erase')?.forEach(ps('click', vs));
  }

  function Ss(e = di('zoomMode'), t = '.PageContent img') {
    [
      ...document.querySelectorAll(t),
    ].forEach(t => {
      if (t.removeAttribute('width'), t.removeAttribute('height'), t.removeAttribute(
        'style'), 'width' === e) {
        t.style.width = `${window.innerWidth}px`;
      } else if ('height' === e) {
        const e = window.innerHeight + (di('showThumbnails') ? -29 : 0);
        t.style.height = `${e}px`, t.style.minWidth = 'unset';
      } else {
        'percent' === e ? t.style.width = t.naturalWidth * (di(
          'defaultZoom') / 100) + 'px' : e >= 0 && 100 !== e && (t.style.width = t.naturalWidth * (e / 100) + 'px');
      }
    });
  }

  function Os(e) {
    let t = 1;
    const n = e?.match(/forceReload=(\d+)$/);
    return n?.at(1) && (t = parseInt(n[1], 10) + 1), t;
  }

  function ks(e) {
    const t = e.getAttribute('src');
    t && (e.removeAttribute('src'), Xl(t) || Jl(t) ? e.setAttribute('src', t) : e.setAttribute(
      'src', function (e, t) {
        const n = e.replace(/[?&]forceReload=\d+$/, ''),
          a = n.includes('?') ? '&' : '?';
        return `${n + a}forceReload=${t}`;
      }(t, Os(t))));
  }

  function Ms() {
    const e = document.querySelectorAll('.PageContent .PageImg').length,
      t = document.querySelectorAll('.PageContent .PageImg.imgLoaded').length,
      n = Math.floor(t / e * 100),
      a = document.querySelector('title');
    a && (a.innerHTML = A`(${n}%) ${document.querySelector(
      '#MangaTitle')?.textContent}`), document.querySelectorAll(
      '#Counters i, #NavigationCounters i').forEach(
      e => {e.textContent = t.toString();}), NProgress.configure({ showSpinner: !1 }).set(t / e), te(
      `Progress: ${n}%`), t === e && (te('Images Loading Complete'), di(
      'downloadZip') && document.getElementById('download')?.dispatchEvent(
      new Event('click')), document.getElementById('download')?.classList.remove('disabled'));
  }

  function _s() {
    return e => {
      e.images.forEach(e => {
        e.img.classList.add('imgLoaded'), e.img.classList.remove('imgBroken');
        const t = e.img.id.replace('PageImg', 'ThumbnailImg'), n = document.getElementById(t);
        n?.classList.remove('imgBroken'), n && n.setAttribute('src',
          e.img.getAttribute('src')), ((e = '.PageContent img') => {
          const t = document.querySelector('#ZoomVal')?.textContent?.trim();
          t?.match(/^\d+%$/) ? Ss(parseInt(t, 10), e) : Ss(t, e);
        })(`#${e.img.id}`), Ms();
      });
    };
  }

  function As(e) {
    return t => {
      t.images.forEach(t => {
        t.img.classList.add('imgBroken');
        const n = t.img.id.replace('PageImg', 'ThumbnailImg'), a = document.getElementById(n);
        a?.classList.add('imgBroken');
        const o = t.img.getAttribute('src');
        o && Os(o) <= di('maxReload') && setTimeout(async () => {
          if (e.reload) {
            const n = parseInt(`0${/\d+/.exec(t.img.id)}`, 10),
              a = await e.reload(n);
            t.img.setAttribute('src', a);
          } else {
            ks(t.img);
          }
          const n = imagesLoaded(t.img.parentElement);
          n.on('done', _s()), n.on('fail', As(e));
        }, 2e3);
      });
    };
  }

  function xs(e) {
    if (e) {
      let t = e.trim();
      return t.startsWith('//') && (t = `https:${t}`), t;
    }
    return '';
  }

  function Ts(e, t, n, a) {
    const o = a - e.begin;
    let r = xs(n);
    const i = document.querySelector(`#PageImg${t}`);
    i && (!(e.lazy ?? di('lazyLoadImages')) || o <= di('lazyStart') ? setTimeout(async () => {
      Jl(r) || Xl(r) || !e.fetchOptions || (r = await fetch(r, e.fetchOptions).then(
        e => e.blob()).then(e => blobUtil.blobToDataURL(e)));
      const n = imagesLoaded(i.parentElement);
      n.on('done', _s()), n.on('fail', As(e)), i.setAttribute('src', r), te('Loaded Image:', t,
        'Source:', r);
    }, (e.timer ?? di('throttlePageLoad')) * o) : (i.setAttribute('data-src', xs(r)), us(i, () => {
      const n = imagesLoaded(i.parentElement);
      n.on('done', _s()), n.on('fail', As(e)), te('Lazy Image: ', t, ' Source: ',
        i.getAttribute('src'));
    }, e.fetchOptions)), e.pages === a && bs());
  }

  function Ls(e, t, n, a) {
    return async () => {
      const o = await async function (e, t, n) {
        return Zl(e).then(e => e.querySelector(t)?.getAttribute(n));
      }(n, e.img, e.lazyAttr ?? 'src'), r = document.querySelector(`#PageImg${t}`);
      if (o && r) {
        r.style.width = 'auto';
        const n = imagesLoaded(r.parentElement);
        n.on('done', _s()), n.on('fail', As(e)), r.setAttribute('src', o), te(
          `${a && 'Lazy '}Page: `, t, ' Source: ', r.getAttribute('src'));
      }
    };
  }

  function Cs(e, t) {
    ds(t.pages, e).forEach((e, n) => {
      (async function (e, t, n, a) {
        const o = a - e.begin,
          r = document.querySelector(`#PageImg${t}`);
        r && (!(e.lazy ?? di('lazyLoadImages')) || o <= di('lazyStart') ? setTimeout(
          () => {Ls(e, t, n, !1)().catch(te);},
          (e.timer ?? di('throttlePageLoad')) * o) : (r.setAttribute('data-src',
          'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='), us(
          r, Ls(e, t, n, !0))), e.pages === a && bs());
      })(t, e, t.listPages[e - 1], n).catch(te);
    });
  }

  function Is(e, t) {ds(t.pages, e).forEach((e, n) => {Ts(t, e, t.listImages[e - 1], n);});}

  function Rs(e, t = 1) {
    te('Loading Images'), te(
      `Intervals: ${e.timer ?? di('throttlePageLoad') ?? 'Default(1000)'}`), te(
      `Lazy: ${e.lazy ?? di('lazyLoadImages')}, Starting from: ${di(
        'lazyStart')}`), !function (e) {return 'listImages' in e && !c(e.listImages);}(
      e) ? !function (e) {return 'listPages' in e && !c(e.listPages);}(
      e) ? !function (e) {return 'bruteForce' in e && !c(e.bruteForce);}(e) ? te(
      'No Loading Method Found') : (te('Method: Brute Force'), e.bruteForce({
      begin: t,
      addImg: Ts,
      loadImages(n) {Is(t, { ...e, listImages: n });},
      loadPages(n, a, o) {Cs(t, { ...e, listPages: n, img: a, lazyAttr: o });},
      wait: di('throttlePageLoad'),
    })) : (te('Method: Pages:', e.listPages), Cs(t, e)) : (te('Method: Images:', e.listImages), Is(
      t, e));
  }

  var Bs, Ps = { exports: {} };
  var Hs, Ns = (Bs || (Bs = 1, Hs = Ps, function () {
    function e(e, t) {
      return void 0 === t ? t = { autoBom: !1 } : 'object' != typeof t && (console.warn(
        'Deprecated: Expected third argument to be a object'), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
        e.type) ? new Blob(['\ufeff', e], { type: e.type }) : e;
    }

    function t(e, t, n) {
      var a = new XMLHttpRequest;
      a.open('GET', e), a.responseType = 'blob', a.onload = function () {
        i(a.response, t, n);
      }, a.onerror = function () {console.error('could not download file');}, a.send();
    }

    function n(e) {
      var t = new XMLHttpRequest;
      t.open('HEAD', e, !1);
      try {t.send();} catch (e) {}
      return 200 <= t.status && 299 >= t.status;
    }

    function a(e) {
      try {
        e.dispatchEvent(new MouseEvent('click'));
      } catch (t) {
        var n = document.createEvent('MouseEvents');
        n.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0,
          null), e.dispatchEvent(n);
      }
    }

    var o = 'object' == typeof window && window.window === window ? window : 'object' == typeof self && self.self === self ? self : 'object' == typeof Sa && Sa.global === Sa ? Sa : void 0,
      r = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(
        navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      i = o.saveAs || ('object' != typeof window || window !== o ? function () {} : 'download' in HTMLAnchorElement.prototype && !r ? function (e,
        r, i) {
        var l = o.URL || o.webkitURL, s = document.createElement('a');
        r = r || e.name || 'download', s.download = r, s.rel = 'noopener', 'string' == typeof e ? (s.href = e, s.origin === location.origin ? a(
          s) : n(s.href) ? t(e, r, i) : a(s, s.target = '_blank')) : (s.href = l.createObjectURL(
          e), setTimeout(function () {l.revokeObjectURL(s.href);}, 4e4), setTimeout(
          function () {a(s);}, 0));
      } : 'msSaveOrOpenBlob' in navigator ? function (o, r, i) {
        if (r = r || o.name || 'download', 'string' != typeof o) {
          navigator.msSaveOrOpenBlob(e(o, i),
            r);
        } else if (n(o)) {
          t(o, r, i);
        } else {
          var l = document.createElement('a');
          l.href = o, l.target = '_blank', setTimeout(function () {a(l);});
        }
      } : function (e, n, a, i) {
        if ((i = i || open('',
          '_blank')) && (i.document.title = i.document.body.innerText = 'downloading...'), 'string' == typeof e) {
          return t(
            e, n, a);
        }
        var l = 'application/octet-stream' === e.type,
          s = /constructor/i.test(o.HTMLElement) || o.safari,
          c = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((c || l && s || r) && 'undefined' != typeof FileReader) {
          var u = new FileReader;
          u.onloadend = function () {
            var e = u.result;
            e = c ? e : e.replace(/^data:[^;]*;/,
              'data:attachment/file;'), i ? i.location.href = e : location = e, i = null;
          }, u.readAsDataURL(e);
        } else {
          var d = o.URL || o.webkitURL, h = d.createObjectURL(e);
          i ? i.location = h : location.href = h, i = null, setTimeout(
            function () {d.revokeObjectURL(h);}, 4e4);
        }
      });
    o.saveAs = i.saveAs = i, Hs.exports = i;
  }()), Ps.exports);
  let Ds;
  const Vs = (e, t, n, a) => `${e}${(t + 1).toString().padStart(Math.floor(Math.log10(n)) + 1,
    '0')}.${a.replace('jpeg', 'jpg')}`;

  async function qs(e, t, n) {
    const a = e.getAttribute('src') ?? e.getAttribute('data-src') ?? '';
    if (Jl(a)) throw new Error('Image source unusable');
    return Xl(a) ? Promise.resolve(
      { name: Vs('Page-', t, n.length, es(a)), data: Yl(a) ?? '' }) : new Promise(e => {
      var o;
      (async function (e) {
        return new Promise((t, n) => {
          te(`Getting Image data: ${e}`), GM_xmlhttpRequest({
            method: 'GET',
            url: e,
            headers: { referer: window.location.host, origin: window.location.host },
            responseType: 'blob',
            onload(e) {200 !== e.status && n(e), t(e);},
          });
        });
      })(a).then(o => {e({ name: Vs('Page-', t, n.length, Ql(a)), data: o.response });}).catch(
        (o = 'Image not Available', e => te(o, e)[1]));
    });
  }

  function Gs(e) {
    te(`${e.name} Added to Zip from Base64 Image`), Ds.file(e.name, e.data,
      { base64: !0, createFolders: !0, compression: 'DEFLATE' });
  }

  var zs, Us, $s = {}, Fs = {};
  var js = function () {
    if (Us) return $s;
    Us = 1, Object.defineProperty($s, '__esModule', { value: !0 }), $s.sanitizeUrl = void 0;
    var e = (zs || (zs = 1, Object.defineProperty(Fs, '__esModule',
      { value: !0 }), Fs.BLANK_URL = Fs.relativeFirstCharacters = Fs.whitespaceEscapeCharsRegex = Fs.urlSchemeRegex = Fs.ctrlCharactersRegex = Fs.htmlCtrlEntityRegex = Fs.htmlEntitiesRegex = Fs.invalidProtocolRegex = void 0, Fs.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Fs.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Fs.htmlCtrlEntityRegex = /&(newline|tab);/gi, Fs.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Fs.urlSchemeRegex = /^.+(:|&colon;)/gim, Fs.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Fs.relativeFirstCharacters = [
      '.',
      '/',
    ], Fs.BLANK_URL = 'about:blank'), Fs);

    function t(t) {
      return t.replace(e.ctrlCharactersRegex, '').replace(e.htmlEntitiesRegex,
        function (e, t) {return String.fromCharCode(t);});
    }

    function n(e) {try {return decodeURIComponent(e);} catch (t) {return e;}}

    return $s.sanitizeUrl = function (a) {
      if (!a) return e.BLANK_URL;
      var o, r = n(a.trim());
      do {
        o = (r = n(
          r = t(r).replace(e.htmlCtrlEntityRegex, '').replace(e.ctrlCharactersRegex, '').replace(
            e.whitespaceEscapeCharsRegex, '').trim())).match(e.ctrlCharactersRegex) || r.match(
          e.htmlEntitiesRegex) || r.match(e.htmlCtrlEntityRegex) || r.match(
          e.whitespaceEscapeCharsRegex);
      } while (o && o.length > 0);
      var i = r;
      if (!i) return e.BLANK_URL;
      if (function (t) {return e.relativeFirstCharacters.indexOf(t[0]) > -1;}(i)) return i;
      var l = i.trimStart(), s = l.match(e.urlSchemeRegex);
      if (!s) return i;
      var c = s[0].toLowerCase().trim();
      if (e.invalidProtocolRegex.test(c)) return e.BLANK_URL;
      var u = l.replace(/\\/g, '/');
      if ('mailto:' === c || c.includes('://')) return u;
      if ('http:' === c || 'https:' === c) {
        if (!function (e) {return URL.canParse(e);}(u)) return e.BLANK_URL;
        var d = new URL(u);
        return d.protocol = d.protocol.toLowerCase(), d.hostname = d.hostname.toLowerCase(), d.toString();
      }
      return u;
    }, $s;
  }();

  function Ws(e) {
    const t = e.currentTarget;
    t.classList.contains('loading') || (te('Downloading Chapter'), t.classList.add(
      'loading'), async function () {
      Ds = new JSZip;
      const e = [...document.querySelectorAll('.PageImg')];
      Promise.all(e.map(qs)).then(e => {
        e.forEach(Gs), te('Generating Zip'), Ds.generateAsync({ type: 'blob' }).then(e => {
          te('Download Ready');
          const t = `${document.querySelector('#MangaTitle')?.textContent?.trim()}.zip`;
          Ns.saveAs(e, t, { autoBom: !1 }), document.getElementById('download')?.classList.remove(
            'loading');
        }).catch(te);
      }).catch(e => te('One or more images couldn\'t be Downloaded', e));
    }().catch(e => te('Error downloading chapter', e)));
  }

  function Zs() {document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');}

  function Ks(e) {
    const t = e.target, n = t.getAttribute('value') ?? t.getAttribute('href');
    1 === e.button || e.ctrlKey || (n && '#' !== n ? window.location.href = js.sanitizeUrl(
      n) : 'series' === t.id && window.history.back());
  }

  function Ys() {
    document.querySelector('#CommentsPanel')?.classList.add('visible'), document.querySelector(
      '#Overlay')?.classList.add('visible');
  }

  function Xs() {
    document.querySelector('#CommentsPanel')?.classList.remove('visible'), document.querySelector(
      '#Overlay')?.classList.remove('visible');
  }

  function Js() {
    const e = document.querySelector('#CommentsArea');
    e?.classList.toggle('light'), e?.classList.toggle('dark');
  }

  const Qs = e => document.querySelector(e)?.dispatchEvent(new Event('click'));

  function ec(e) {
    const t = document.querySelector('#Chapter');
    if (t?.classList.contains('FluidLTR') || t?.classList.contains('FluidRTL')) {
      const n = t.classList.contains('FluidRTL') ? -1 : 1;
      t.scrollBy({ left: .8 * window.innerWidth * e * n, behavior: 'smooth' });
    } else if ('height' === di('zoomMode')) {
      const t = [...document.querySelectorAll('.MangaPage')],
        n = t.map(e => Math.abs(e.offsetTop - window.scrollY)),
        a = _.indexOf(n, _.min(n)),
        o = a + e,
        r = document.querySelector('#Header');
      o < 0 ? ms(r) : o >= t.length ? r.classList.add('headroom-end') : (te(
        `Current array page ${a},`, `Scrolling to page ${o}`), ms(t.at(o)));
    } else {
      window.scrollBy({ top: .8 * window.innerHeight * e, behavior: 'smooth' });
    }
  }

  const tc = {
    SCROLL_UP() {ec(-1);},
    SCROLL_DOWN() {ec(1);},
    NEXT_CHAPTER() {Qs('#next');},
    PREVIOUS_CHAPTER() {Qs('#prev');},
    ENLARGE() {Qs('#enlarge');},
    REDUCE() {Qs('#reduce');},
    RESTORE() {Qs('#restore');},
    FIT_WIDTH() {Qs('#fitWidth');},
    FIT_HEIGHT() {Qs('#fitHeight');},
    SETTINGS() {Qs('#settings');},
    VIEW_MODE_WEBCOMIC() {Qs('#webComic');},
    VIEW_MODE_VERTICAL() {Qs('#verticalMode');},
    VIEW_MODE_LEFT() {Qs('#rtlMode');},
    VIEW_MODE_RIGHT() {Qs('#ltrMode');},
    SCROLL_START() {Qs('#AutoScroll');},
  };

  function nc() {
    document.onkeydown = null, document.onkeyup = null, window.onkeydown = null, window.onkeyup = null, window.onload = null, document.body.onload = null, hotkeys.unbind(), Object.keys(
      di('keybinds')).forEach(e => {
      hotkeys(di('keybinds')[e]?.join(',') ?? '', _.throttle(
        t => {t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), tc[e]();}, 100));
    });
  }

  function ac(e) {
    const t = e.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    ks(t);
  }

  function oc(e) {
    const t = e.currentTarget.parentElement?.parentElement;
    t.classList.toggle('hide');
  }

  function rc(e) {
    const t = e.currentTarget.value;
    Ss(), ms(document.querySelector(`#Page${t}`));
  }

  function ic(e) {
    Ss(), ms(document.querySelector(
      `#Page${e.currentTarget.querySelector('.ThumbnailIndex')?.textContent}`));
  }

  const lc = () => {
    const e = di('keybinds');
    return Object.keys(e).map(t => {
      const n = e[t]?.length ? e[t]?.map(e => A`<kbd class="dark">${e}</kbd>`).join(' / ') : '';
      return A`<span>${pi(t)}:</span> <span>${n}</span>`;
    });
  };

  function sc() {
    const e = document.querySelector('#Header');
    e?.classList.contains('click') && e?.classList.toggle('visible');
  }

  function cc(e) {
    const t = document.querySelector('#Header');
    t?.classList.contains('hover') && (!function (e, t,
      n) {return e.clientX >= 0 && e.clientX <= t && e.clientY >= 0 && e.clientY <= n;}(e,
      t.clientWidth, t.clientHeight) ? (document.querySelector('#menu')?.classList.remove(
      'hide'), t?.classList.remove('visible')) : (document.querySelector('#menu')?.classList.add(
      'hide'), t?.classList.add('visible')));
  }

  function uc() {
    document.querySelector('#SettingsPanel')?.classList.add('visible'), document.querySelector(
      '#Navigation')?.classList.add('visible'), document.querySelector('#Header')?.classList.add(
      'visible'), document.querySelector('#Overlay')?.classList.add('visible');
  }

  function dc() {
    document.querySelector('#SettingsPanel')?.classList.remove('visible'), document.querySelector(
      '#Navigation')?.classList.remove('visible'), document.querySelector(
      '#Header')?.classList.remove('visible'), document.querySelector('#Overlay')?.classList.remove(
      'visible');
  }

  function hc() {
    document.querySelector('#KeybindingsList').innerHTML = lc().join('\n'), document.querySelector(
      '#SaveKeybindings')?.classList.add('hidden'), document.querySelector(
      '#EditKeybindings')?.classList.remove('hidden'), document.querySelector(
      '#KeybindingsPanel')?.classList.add('visible'), document.querySelector(
      '#Overlay')?.classList.add('visible');
  }

  function mc() {
    document.querySelector('#SaveKeybindings')?.classList.add('hidden'), document.querySelector(
      '#EditKeybindings')?.classList.remove('hidden'), document.querySelector(
      '#KeybindingsPanel')?.classList.remove('visible'), document.querySelector(
      '#Overlay')?.classList.remove('visible');
  }

  function pc() {
    const e = di('keybinds');
    Object.keys(di('keybinds')).forEach(t => {
      const n = document.querySelector(`#${t}`)?.value.split(',')?.map(e => e.trim());
      e[t] = c(n) ? void 0 : n;
    }), hi('keybinds', e), document.querySelector('#KeybindingsList').innerHTML = lc().join(
      '\n'), document.querySelector('#SaveKeybindings')?.classList.add(
      'hidden'), document.querySelector('#EditKeybindings')?.classList.remove('hidden'), nc();
  }

  function gc() {
    document.querySelector('#KeybindingsList').innerHTML = Object.keys(di('keybinds')).map(
      e => A`<label for="${e}">${pi(e)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${e}"
              name="${e}"
              value="${di('keybinds')[e]?.join(' , ') ?? ''}"
            />`).concat(A` <div id="HotKeysRules">${pi('KEYBIND_RULES')}</div>`).join(
      '\n'), document.querySelector('#SaveKeybindings')?.classList.remove(
      'hidden'), document.querySelector('#EditKeybindings')?.classList.add('hidden');
  }

  function fc() {
    document.querySelector('#menu')?.addEventListener('click', sc), document.addEventListener(
      'mousemove', _.throttle(cc, 300)), document.querySelector('#settings')?.addEventListener(
      'click', function (e, t, n, a) {
        return () => {
          const o = document.querySelector(e)?.className.includes(t);
          o ? a() : n();
        };
      }('#SettingsPanel', 'visible', uc, dc)), document.querySelectorAll('.closeButton')?.forEach(
      ps('click', dc)), document.querySelector('#Overlay')?.addEventListener('click',
      dc), document.querySelector('#keybindings')?.addEventListener('click',
      hc), document.querySelectorAll('.closeButton')?.forEach(
      ps('click', mc)), document.querySelector('#Overlay')?.addEventListener('click',
      mc), document.querySelector('#EditKeybindings')?.addEventListener('click',
      gc), document.querySelector('#SaveKeybindings')?.addEventListener('click', pc);
  }

  function wc() {
    ui() ? (ae(window.location.hostname), ii = oi(!1)) : (ae(
      'settings'), ri = oi()), document.getElementById('MangaOnlineViewer')?.dispatchEvent(
      new Event('hydrate'));
    const e = document.getElementById('MangaOnlineViewer');
    e?.removeAttribute('locale'), uc();
  }

  function bc(e) {
    !function (e = !1) {
      e ? (ii ? ii.enabled = !0 : ii = { ...ri }, se(ti(ii, oi(!1))), te(
        'Local Settings Enabled')) : (ui() && (ii.enabled = !1), se(ti(ii, oi(!1))), te(
        'Local Settings Disabled')), document.getElementById('MangaOnlineViewer')?.dispatchEvent(
        new Event('hydrate')), ui();
    }('true' === e.currentTarget.value), uc();
  }

  function vc(e) {
    const t = e.currentTarget.value;
    hi('locale', t);
    const n = document.getElementById('MangaOnlineViewer');
    n?.setAttribute('locale', t), n?.dispatchEvent(new Event('hydrate')), uc();
  }

  function yc(e) {hi('loadMode', e.currentTarget.value);}

  function Ec(e) {
    const t = e.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize', t), hi(
      'fitWidthIfOversize', t);
  }

  function Sc(e) {
    const t = e.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('separator', t), hi('verticalSeparator', t);
  }

  function Oc(e) {
    const t = e.currentTarget.checked;
    document.querySelector('#Navigation')?.classList.toggle('disabled', !t), hi('showThumbnails',
      t), Ss();
  }

  function kc(e) {
    const t = e.currentTarget.checked;
    document.querySelector('#CommentsButton')?.classList.toggle('disabled', !t), hi(
      'enableComments', t), Ss();
  }

  function Mc(e) {
    const t = e.currentTarget.checked;
    hi('downloadZip', t), t && Swal.fire(
      { title: pi('ATTENTION'), text: pi('AUTO_DOWNLOAD'), timer: 1e4, icon: 'info' });
  }

  function _c(e) {
    const t = e.currentTarget.checked;
    hi('lazyLoadImages', t);
    const n = document.querySelector('.lazyStart');
    n?.classList.toggle('show', di('lazyLoadImages')), t && Swal.fire(
      { title: pi('WARNING'), html: pi('LAZY_LOAD'), icon: 'warning' });
  }

  function Ac(e) {
    const t = e.currentTarget.value;
    hi('lazyStart', parseInt(t, 10));
  }

  function xc(e) {
    const t = parseInt(e.currentTarget.value, 10);
    hi('throttlePageLoad', t), t < 100 && Swal.fire(
      { title: pi('SPEED_WARNING'), html: pi('SPEED_WARNING_MESSAGE'), icon: 'warning' });
  }

  function Tc(e) {
    const t = e.currentTarget.value;
    hi('zoomStep', parseInt(t, 10));
  }

  function Lc(e) {
    const t = e.currentTarget.value;
    ql('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`), hi('minZoom',
      parseInt(t, 10));
  }

  function Cc(e) {
    const t = e.currentTarget.checked;
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls', t), hi(
      'hidePageControls', t);
  }

  function Ic(e) {
    const t = document.querySelector('#Header');
    if (!t?.classList.contains(e)) {
      const n = document.querySelector('#menu');
      t?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple',
        'visible'), n?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple',
        'hide'), t?.classList.add(e), n?.classList.add(e);
    }
  }

  function Rc(e) {
    const t = e.currentTarget.value;
    Ic(t), hi('header', t);
  }

  function Bc(e) {
    const { value: t } = e.currentTarget;
    hi('scrollHeight', parseInt(t, 10));
  }

  function Pc(e) {
    const t = e.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    Ss(t.width / t.naturalWidth * (100 + di('zoomStep')), `#${t.getAttribute('id')}`);
  }

  function Hc(e) {
    const t = e.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    Ss(t.width / t.naturalWidth * (100 - di('zoomStep')), `#${t.getAttribute('id')}`);
  }

  function Nc() {document.querySelector('.PageContent .PageImg')?.removeAttribute('width');}

  function Dc(e) {
    const t = e.currentTarget.parentElement?.parentElement,
      n = t?.querySelector('.PageImg');
    Ss('width', `#${n.getAttribute('id')}`), t?.classList.toggle('DoublePage');
  }

  function Vc(e) {
    const t = e.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    Ss('height', `#${t.getAttribute('id')}`);
  }

  function qc() {
    const e = 'dark' === di('colorScheme');
    hi('colorScheme', e ? 'light' : 'dark');
    const t = document.getElementById('MangaOnlineViewer');
    t?.classList.remove(e ? 'dark' : 'light'), t?.classList.add(di('colorScheme'));
  }

  function Gc(e) {
    const t = e.currentTarget;
    [...document.querySelectorAll('.ThemeRadio')].forEach(
      e => {e.classList.remove('selected');}), t.classList.add('selected'), document.getElementById(
      'MangaOnlineViewer')?.setAttribute('data-theme', t.title), hi('theme', t.title);
    const n = document.querySelector('#Hue'), a = document.querySelector('#Shade');
    t.title.startsWith('custom') ? (n?.classList.add('show'), a?.classList.remove(
      'show')) : (n?.classList.remove('show'), a?.classList.add('show'));
  }

  function zc(e) {
    const t = e.currentTarget.value;
    hi('customTheme', t), ql('custom', $l(t));
  }

  function Uc(e) {
    hi('themeShade', parseInt(e.currentTarget.value, 10)), Fl().forEach(
      e => {ql(e.name, Ul(e));}), ql('custom', $l(di('customTheme')));
  }

  function $c(e) {
    return () => {
      hi('zoomMode', 'number' != typeof e ? e : 'percent'), Ic(
        'height' === e ? 'click' : di('header'));
      const t = document.querySelector('#ZoomVal');
      Number.isInteger(e) ? (t.textContent = `${e}%`, document.querySelector(
        '#Zoom').value = e.toString()) : t.textContent = e, Ss(e);
    };
  }

  function Fc(e = 1) {
    return () => {
      const t = document.querySelector('#Zoom'),
        n = parseInt(t.value, 10) + e * di('zoomStep');
      t.value = n.toString(), t?.dispatchEvent(new Event('input', { bubbles: !0 }));
    };
  }

  function jc(e) {
    const t = e.currentTarget.value;
    hi('zoomMode', t), $c(t)();
    const n = document.querySelector('.DefaultZoom');
    n?.classList.toggle('show', 'percent' === t);
  }

  function Wc(e) {
    const t = parseInt(e.currentTarget.value, 10);
    hi('defaultZoom', t), $c(t)();
  }

  function Zc(e) {
    const t = parseInt(e.currentTarget.value, 10);
    $c(t)(), document.querySelector('#ZoomVal').textContent = `${t}%`;
  }

  function Kc(e) {
    const t = document.querySelector('#Chapter');
    document.querySelector('#Header')?.classList.remove('visible'), document.querySelector(
      '#menu')?.classList.remove('hide'), $c('height')(), ms(t), t?.addEventListener('wheel',
      'FluidLTR' === e ? gs : fs);
  }

  function Yc(e) {
    return () => {
      const t = document.querySelector('#Chapter');
      t?.classList.remove('Vertical', 'WebComic', 'FluidLTR', 'FluidRTL'), t?.classList.add(
        e), t?.removeEventListener('wheel', gs), t?.removeEventListener('wheel',
        fs), 'FluidLTR' === e || 'FluidRTL' === e ? Kc(e) : (document.querySelector(
        '#Header').className = di('header'), document.querySelector('#menu').className = di(
        'header'), $c(100)());
    };
  }

  function Xc(e) {
    const t = e.currentTarget.value;
    Yc(t)(), hi('viewMode', t);
  }

  let Jc = !1;

  function Qc() {
    const e = document.querySelector('#Chapter');
    if (e?.classList.contains('FluidLTR') || e?.classList.contains('FluidRTL')) {
      const t = e.classList.contains('FluidRTL') ? -1 : 1;
      e?.scrollBy({ top: 0, left: di('scrollHeight') * t, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: di('scrollHeight'), left: 0, behavior: 'smooth' });
    }
    document.querySelector('#Header')?.classList.contains(
      'headroom-end') && (Jc = !1, document.querySelector('#ScrollControl')?.classList.remove(
      'running'), te('Finished auto scroll')), Jc && requestAnimationFrame(Qc);
  }

  function eu() {
    const e = document.querySelector('#AutoScroll');
    Jc ? (Jc = !1, e?.classList.remove('running'), te(
      'Stopped auto scroll')) : (Jc = !0, requestAnimationFrame(Qc), e?.classList.add(
      'running'), te('Start auto scroll'));
  }

  let tu = !1;
  const nu = _.debounce(() => {eu(), tu = !1;}, 500);

  function au() {!tu && Jc && (eu(), tu = !0), tu && !Jc && nu();}

  let ou = !1;

  function ru() {
    ou || (!function (e = 0) {
      let t = 0;
      const n = e => {
        const t = document.querySelector('#Header');
        t.classList.remove('headroom-end', 'headroom-hide', 'headroom-show',
          'headroom-top'), e && t.classList.add(`headroom-${e}`);
      };
      window.addEventListener('scroll', _.debounce(function () {
        const { scrollY: a } = window;
        e && 'height' !== di(
          'zoomMode') && a + window.innerHeight + e > document.body.scrollHeight ? n('end') : n(
          a > t && a > 50 ? 'hide' : a < t && a > 50 ? 'show' : a <= 100 ? 'top' : ''), t = a;
      }, 50));
    }(100), nc(), document.querySelectorAll('.Reload')?.forEach(
      ps('click', ac)), document.querySelectorAll('.Hide')?.forEach(
      ps('click', oc)), document.querySelectorAll('.ZoomIn')?.forEach(
      ps('click', Pc)), document.querySelectorAll('.ZoomOut')?.forEach(
      ps('click', Hc)), document.querySelectorAll('.ZoomRestore')?.forEach(
      ps('click', Nc)), document.querySelectorAll('.ZoomWidth')?.forEach(
      ps('click', Dc)), document.querySelectorAll('.ZoomHeight')?.forEach(
      ps('click', Vc)), window.addEventListener('resize', () => {
      const e = document.querySelector('#MangaOnlineViewer');
      e?.classList.remove('mobile', 'tablet', 'desktop'), e?.classList.add(ue());
    }), ou = !0), document.querySelector('#bookmarks')?.addEventListener('click',
      ys), document.querySelectorAll('.closeButton')?.forEach(
      ps('click', ws)), document.querySelector('#Overlay')?.addEventListener('click',
      ws), document.querySelectorAll('.bookmarkFunctions .erase')?.forEach(
      ps('click', vs)), document.querySelectorAll('.Bookmark')?.forEach(
      ps('click', Es)), document.querySelector('.AddBookmark')?.addEventListener('click',
      Es), document.querySelector('#download')?.addEventListener('click',
      Ws), document.querySelector('#pageControls')?.addEventListener('click',
      Zs), document.querySelector('#next')?.addEventListener('click', Ks), document.querySelector(
      '#prev')?.addEventListener('click', Ks), document.querySelector('#series')?.addEventListener(
      'click', Ks), document.querySelector('#CommentsButton')?.addEventListener('click',
      Ys), document.querySelector('#CommentsColorScheme')?.addEventListener('click',
      Js), document.querySelectorAll('.closeButton')?.forEach(
      ps('click', Xs)), document.querySelector('#Overlay')?.addEventListener('click',
      Xs), document.querySelector('#gotoPage')?.addEventListener('change',
      rc), document.querySelectorAll('.Thumbnail')?.forEach(
      ps('click', ic)), document.querySelector('#Thumbnails')?.addEventListener('wheel',
      gs), document.querySelector('#ResetSettings')?.addEventListener('click',
      wc), document.querySelectorAll('#SettingsScope input[type=radio]').forEach(
      ps('change', bc)), document.querySelector('#locale')?.addEventListener('change',
      vc), document.querySelector('#fitIfOversize')?.addEventListener('change',
      Ec), document.querySelector('#verticalSeparator')?.addEventListener('change',
      Sc), document.querySelector('#loadMode')?.addEventListener('change',
      yc), document.querySelector('#showThumbnails')?.addEventListener('change',
      Oc), document.querySelector('#enableComments')?.addEventListener('change',
      kc), document.querySelector('#downloadZip')?.addEventListener('change',
      Mc), document.querySelector('#lazyLoadImages')?.addEventListener('change',
      _c), document.querySelector('#lazyStart')?.addEventListener('change',
      Ac), document.querySelector('#PagesPerSecond')?.addEventListener('change',
      xc), document.querySelector('#zoomStep')?.addEventListener('change',
      Tc), document.querySelector('#minZoom')?.addEventListener('input',
      Lc), document.querySelector('#hidePageControls')?.addEventListener('change',
      Cc), document.querySelector('#headerType')?.addEventListener('change',
      Rc), document.querySelector('#scrollHeight')?.addEventListener('change',
      Bc), fc(), document.querySelector('#ColorScheme')?.addEventListener('click',
      qc), document.querySelectorAll('.ThemeRadio').forEach(
      ps('click', Gc)), document.querySelector('#CustomThemeHue')?.addEventListener('change',
      zc), document.querySelector('#ThemeShade')?.addEventListener('input',
      Uc), document.querySelector('#viewMode')?.addEventListener('change',
      Xc), document.querySelector('#webComic')?.addEventListener('click',
      Yc('WebComic')), document.querySelector('#ltrMode')?.addEventListener('click',
      Yc('FluidLTR')), document.querySelector('#rtlMode')?.addEventListener('click',
      Yc('FluidRTL')), document.querySelector('#verticalMode')?.addEventListener('click',
      Yc('Vertical')), 'FluidLTR' !== di('viewMode') && 'FluidRTL' !== di('viewMode') || Kc(
      di('viewMode')), document.querySelector('#DefaultZoomMode')?.addEventListener('change',
      jc), document.querySelector('#DefaultZoom')?.addEventListener('input',
      Wc), document.querySelector('#Zoom')?.addEventListener('input', Zc), document.querySelector(
      '#enlarge')?.addEventListener('click', Fc()), document.querySelector(
      '#reduce')?.addEventListener('click', Fc(-1)), document.querySelector(
      '#restore')?.addEventListener('click', $c(100)), document.querySelector(
      '#fitWidth')?.addEventListener('click', $c('width')), document.querySelector(
      '#fitHeight')?.addEventListener('click', $c('height')), window.addEventListener('wheel',
      _.throttle(au, 500)), document.querySelector('#AutoScroll')?.addEventListener('click', eu);
  }

  function iu(e) {
    if (!e || !e.parentNode) return e;
    const t = e.cloneNode(!0);
    return e.parentNode.replaceChild(t, e), t;
  }

  const lu = e => {e.getAttributeNames().forEach(t => e?.removeAttribute(t));};

  function su(e) {
    ((...e) => {e?.forEach(lu), e?.forEach(iu);})(document.documentElement, document.head,
      document.body), window.scrollTo(0, 0), ne(
      'Page Cleaned Up'), document.head.innerHTML = function (e) {
      return A`
      <title>${e.title}</title>
      <meta charset="UTF-8" />
      ${Gl('externals', Wl)} ${Gl('reader', Dl)} ${jl}
      ${Gl('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${di('minZoom')}vw;}`)}
    `;
    }(e), document.body.innerHTML = '<div id="MOV"></div>', Dn(Hl,
      { target: document.getElementById('MOV'), props: { manga: e } }), ru(), Rs(e,
      0), e.comments && document.querySelector('#CommentsArea')?.append(e.comments);
  }

  async function cu() {
    if (!di('enableComments')) return null;
    let e = document.querySelector('#disqus_thread, #fb-comments');
    return e && (te('Waiting to Comments to load', e), window.scrollTo(0,
      document.body.scrollHeight), await async function (e, t = 5e3) {
      return Promise.race([e, h(t, !1)]);
    }(u(() => {
      e = document.querySelector('#disqus_thread, #fb-comments');
      const t = e?.querySelector('iframe:not(#indicator-north, #indicator-south)');
      return 'complete' === t?.contentWindow?.document.readyState && t?.contentWindow?.document?.body?.textContent?.length;
    })), e.children.length ? te('Got Comments', e) : te('Timeout Comments')), window.scrollTo(0,
      0), e;
  }

  async function uu(e) {
    void 0 !== e.before && (ne('Executing Preparation'), await e.before(e.begin)), di(
      'enableComments') && !e.comments && (e.comments = await cu()), setTimeout(
      () => {try {su(e);} catch (t) {te(t);}}, 50);
  }

  async function du(e) {
    if (void 0 !== e.waitAttr) {
      te(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]}`);
      const t = await function (e, t, n = document.body) {
        return new Promise(a => {
          if (n.querySelector(e)?.getAttribute(t)) {
            return void a(
              n.querySelector(e)?.getAttribute(t) ?? '');
          }
          const o = new MutationObserver(() => {
            n.querySelector(e)?.getAttribute(t) && (a(
              n.querySelector(e)?.getAttribute(t) ?? ''), o.disconnect());
          });
          o.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [t] });
        });
      }(e.waitAttr[0], e.waitAttr[1]);
      te(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${t}`);
    }
  }

  async function hu(e) {
    if (void 0 !== e.waitEle) {
      te(`Waiting for Element ${e.waitEle}`);
      const t = await function (e, t = document.body) {
        return new Promise(n => {
          if (document.querySelector(e)) return void n(document.querySelector(e));
          const a = new MutationObserver(
            () => {document.querySelector(e) && (n(document.querySelector(e)), a.disconnect());});
          a.observe(t, { childList: !0, subtree: !0, attributes: !0 });
        });
      }(e.waitEle);
      te(`Found Element ${e.waitEle} = `, t);
    }
  }

  async function mu(e) {
    if (void 0 !== e.waitVar) {
      te(`Waiting for Variable ${e.waitVar}`);
      const t = await function (e, t = document.body) {
        return new Promise(n => {
          if (!c(unsafeWindow[e])) return void n(unsafeWindow[e]);
          const a = new MutationObserver(
            () => {c(unsafeWindow[e]) || (n(unsafeWindow[e]), a.disconnect());});
          a.observe(t, { childList: !0, subtree: !0, attributes: !0 });
        });
      }(e.waitVar);
      te(`Found Variable ${e.waitVar} = ${t}`);
    }
  }

  async function pu(e) {
    if (void 0 !== e.waitFunc) {
      te(`Waiting to pass Function check ${e.waitFunc}`);
      const t = await u(e.waitFunc);
      te(`Found Function check ${e.waitFunc} = ${t}`);
    }
  }

  async function gu(e) {
    void 0 !== e.waitTime && (te(`Waiting to for ${e.waitTime} milliseconds`), await new Promise(
      t => {setTimeout(t, e.waitTime);}), te('Continuing after timer'));
  }

  const fu = [
      'image/apng',
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/svg+xml',
      'image/tiff',
      'image/webp',
      'image/x-icon',
    ],
    wu = /.(png|jpg|jpeg|gif|bmp|webp)$/i,
    bu = (e, t) => e.localeCompare(t, navigator.languages[0] || navigator.language,
      { numeric: !0, ignorePunctuation: !0 });

  function vu(e) {return fu.includes(e.type);}

  const yu = e => {
    const t = new Uint8Array(e), n = new Blob([t.buffer]);
    return URL.createObjectURL(n);
  };

  function Eu(e, t) {
    uu({
      title: e,
      series: '?reload',
      pages: t.length,
      begin: 1,
      prev: '#',
      next: '#',
      lazy: !1,
      listImages: t,
    }).then(() => te('Page loaded'));
  }

  async function Su(e) {
    const t = await async function (e) {
      const t = await JSZip.loadAsync(e),
        n = t.filter((e, t) => !t.dir && wu.test(t.name)).sort((e, t) => bu(e.name, t.name));
      return te('Files in zip:', t.files), Promise.all(n.map(e => e.async('arraybuffer').then(yu)));
    }(e);
    Eu('string' == typeof e ? e : e.name, t);
  }

  function Ou(e) {
    const t = e.target,
      n = Array.from(t.files).filter(vu).sort(
        (e, t) => bu(e.webkitRelativePath || e.name, t.webkitRelativePath || t.name));
    te('Local Files: ', n, n.map(e => e.webkitRelativePath || e.name)), t.files?.[0] && Eu(
      t.files[0].webkitRelativePath.split('/')[0] || 'Local Images', n.map(URL.createObjectURL));
  }

  async function ku(e, t = 1) {
    const n = await e.run();
    te('LateStart');
    let a = t, o = n.pages;
    const r = {
      title: pi('STARTING'),
      html: A`
        ${pi('CHOOSE_BEGINNING')}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${n.pages}"
              value="${a}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${n.pages}"
              value="${o}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,
      showCancelButton: !0,
      cancelButtonColor: '#d33',
      reverseButtons: !0,
      icon: 'question',
      didOpen() {
        const e = document.querySelector('#pageBegin'),
          t = document.querySelector('#pageEnd'),
          r = rangeSlider(document.getElementById('pagesSlider'), {
            min: 1,
            max: n.pages,
            value: [a, o],
            onInput(n, r) {
              r && ([
                a,
                o,
              ] = n, e && (e.value = a.toString()), t && (t.value = o.toString()));
            },
          });
        const i = _.debounce(function () {
          if ('' === e.value || '' === t.value) return;
          const n = function (e, t, n) {
            let a = e;
            return Number.isNaN(
              a) || a < n.min() ? a = n.min() : a > n.max() ? a = n.max() : a > t && (a = t), a;
          }(parseInt(e.value, 10), o, r), i = function (e, t, n) {
            let a = e;
            return Number.isNaN(
              a) || a > n.max() ? a = n.max() : a < n.min() ? a = n.min() : a < t && (a = t), a;
          }(parseInt(t.value, 10), a, r);
          e.value = n.toString(), t.value = i.toString(), a = n, o = i, r.value([n, i]);
        }, 600);
        ['change', 'mouseup', 'keyup', 'touchend'].forEach(
          n => {e?.addEventListener(n, i), t?.addEventListener(n, i);});
      },
    };
    Swal.fire(r).then(e => {
      e.value ? (te(`Choice: ${a} - ${o}`), n.begin = a, n.pages = o, uu(n).then(
        () => te('Page loaded'))) : te(e.dismiss);
    });
  }

  function Mu(e, t) {
    const n = document.createElement('button');
    n.innerText = pi('BUTTON_START'), n.id = 'StartMOV', n.onclick = () => {
      ku(e, t).catch(te);
    }, document.body.appendChild(n);
    const a = document.createElement('style');
    a.appendChild(document.createTextNode(
      '#StartMOV{all:revert;backface-visibility:hidden;font-size:2rem;color:#fff;cursor:pointer;margin:0 auto;padding:.5rem 1rem;text-align:center;border:none;border-radius:10px;min-height:50px;width:80%;position:fixed;right:0;left:0;bottom:0;z-index:105000;transition:all .4s ease-in-out;background-size:300% 100%;background-image:linear-gradient(to right,#667eea,#764ba2,#6b8dd6,#8e37d7);box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}.range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px #2196f380}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translateY(-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}')), document.head.appendChild(
      a), te('Start Button added to page', n);
  }

  async function _u([e, t]) {
    te(`Found Pages: ${t.pages} in ${e.name}`), t.title || (t.title = document.querySelector(
      'title')?.textContent?.trim()), t.begin = gi() ?? t.begin ?? 1;
    const n = document.createElement('style');
    switch (n.appendChild(document.createTextNode(Wl)), document.body.appendChild(
      n), unsafeWindow.MOV = (e, n) => {
      void 0 !== e && (t.begin = e), void 0 !== n && (t.pages = n), uu(t).then(
        () => te('Page loaded'));
    }, e.start ?? di('loadMode')) {
      case'never':
        Mu(e, t.begin);
        break;
      case'always':
        uu(t).then(() => te('Page loaded'));
        break;
      default:
        !function (e, t) {
          Swal.fire({
            title: pi("STARTING"),
            html: A`${t.begin > 1 ? `${pi("RESUME")}${t.begin}.<br/>` : ""}${pi("WAITING")}`,
            showCancelButton: !0,
            cancelButtonColor: "#d33",
            reverseButtons: !0,
            timer: 3e3
          }).then(n => {
            n.value || n.dismiss === Swal.DismissReason.timer ? uu(t).then(
              () => te("Page loaded")) : (Mu(e, t.begin), te(n.dismiss))
          })
        }(e, t)
    }
  }

  (async function (e) {
    if (te(`Starting ${oe.script.name} ${oe.script.version} on ${ue()} ${function () {
      let e;
      const t = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(
        navigator.userAgent) ?? [];
      if (/trident/i.test(t[1])) {
        return e = /\brv[ :]+(\d+)/g.exec(
          navigator.userAgent) ?? [], `IE ${e[1] ?? ""}`;
      }
      if ("Chrome" === t[1] && (e = /\b(OPR|Edge)\/(\d+)/.exec(
        navigator.userAgent), null !== e)) {
        return e.slice(1).join(" ").replace("OPR", "Opera");
      }
      const n = [t[1], t[2]];
      return e = /version\/(\d+)/i.exec(navigator.userAgent), null !== e && n.splice(1, 1,
        e[1]), n.join(" ")
    }()} with ${oe.scriptHandler ?? "Greasemonkey"}`), D.url.test(
      window.location.href) && (document.querySelector(
      "#MangaOnlineViewer, #LocalTest") && (document.querySelector("#LocalTest")?.setAttribute(
      "style", "display:none"), document.querySelector("#file")?.addEventListener("change", e => {
      const t = e.target;
      t.files?.[0] && Su(t.files[0])
    }), document.querySelector("#folder")?.addEventListener("change", Ou), document.querySelector(
      "#images")?.addEventListener("change", Ou), te("Waiting for zip/images upload")), 1)) {
      return;
    }
    te(e.length, "Known Manga Sites:", e);
    const t = e.filter(e => e.url.test(window.location.href));
    te(t.length, "Found sites:", t);
    const n = t.map(async e => (te(`Testing site: ${e.name}`), new Promise((t, n) => {
      Promise.all([gu(e), hu(e), du(e), mu(e), pu(e)]).then(async () => e.run()).then(
        a => a.pages > 0 ? t([e, a]) : n(new Error(`${e.name} found ${a.pages} pages`)))
    })));
    Promise.race(n.map((e, t) => e.then(() => t))).then(e => {
      n.forEach((n, a) => {a !== e && te(`Failed/Skipped: ${t[a].name}`)}), n[e].then(e => {_u(e)})
    })
  })(ee).catch(te)
}();
