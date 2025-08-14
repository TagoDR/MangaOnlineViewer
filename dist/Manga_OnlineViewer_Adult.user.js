// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2025.08.14
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function () {
  'use strict';

  function isEmpty(value) {
    return (
      value === null || // Check for null
      typeof value === 'undefined' ||
      value === void 0 || // Check for undefined
      (typeof value === 'string' && value === '') || // Check for empty string
      (Array.isArray(value) && value.length === 0) || // Check for empty array
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }
  function isNothing(value) {
    const isEmptyObject = a => {
      if (!Array.isArray(a)) {
        const hasNonempty = Object.keys(a).some(element => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      return !a.some(element => element instanceof Promise || !isNothing(element));
    };
    return (
      !value || value === 0 || isEmpty(value) || (typeof value === 'object' && isEmptyObject(value))
    );
  }

  function isImagesManga(manga) {
    return 'listImages' in manga && !isNothing(manga.listImages);
  }
  function isPagesManga(manga) {
    return 'listPages' in manga && !isNothing(manga.listPages);
  }
  function isBruteforceManga(manga) {
    return 'bruteForce' in manga && !isNothing(manga.bruteForce);
  }

  var Language = /* @__PURE__ */ (Language2 => {
    Language2['ENGLISH'] = 'English';
    Language2['SPANISH'] = 'Spanish';
    Language2['PORTUGUESE'] = 'Portuguese';
    Language2['CHINESE'] = 'Chinese';
    Language2['RAW'] = 'Raw';
    return Language2;
  })(Language || {});
  var Category = /* @__PURE__ */ (Category2 => {
    Category2['MANGA'] = 'manga';
    Category2['COMIC'] = 'comic';
    Category2['HENTAI'] = 'hentai';
    return Category2;
  })(Category || {});

  function isKey(obj, key) {
    return key in obj;
  }

  const threehentai = {
    name: ['3Hentai', 'HentaiVox'],
    url: /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,
    homepage: ['https://3hentai.net/', 'https://hentaivox.com/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'readerPages',
    run() {
      return {
        title: unsafeWindow.readerPages.title.replace(/- Page.+/, '').trim(),
        series: unsafeWindow.readerPages.baseUri.replace('%s', ''),
        pages: unsafeWindow.readerPages.lastPage,
        prev: '#',
        next: '#',
        listImages: Object.keys(unsafeWindow.readerPages.pages).map(img =>
          unsafeWindow.readerPages.baseUriImg.replace('%s', unsafeWindow.readerPages.pages[img].f),
        ),
      };
    },
  };

  function waitForElm(selector, target = document.body) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        return;
      }
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForFunc(fn, timer = 250) {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (fn()) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, timer);
    });
  }
  function waitForAtb(selector, attribute, target = document.body) {
    return new Promise(resolve => {
      if (target.querySelector(selector)?.getAttribute(attribute)) {
        resolve(target.querySelector(selector)?.getAttribute(attribute) ?? '');
        return;
      }
      const observer = new MutationObserver(() => {
        if (target.querySelector(selector)?.getAttribute(attribute)) {
          resolve(target.querySelector(selector)?.getAttribute(attribute) ?? '');
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [attribute],
      });
    });
  }
  function waitForVar(name, target = document.body) {
    return new Promise(resolve => {
      if (!isNothing(unsafeWindow[name])) {
        resolve(unsafeWindow[name]);
        return;
      }
      const observer = new MutationObserver(() => {
        if (!isNothing(unsafeWindow[name])) {
          resolve(unsafeWindow[name]);
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForTimer(millis = 1e3, result = true) {
    return new Promise(resolve => {
      setTimeout(() => resolve(result), millis);
    });
  }
  async function waitWithTimer(promise, timer = 1e3) {
    return (await Promise.all([promise, waitForTimer(timer)]))[0];
  }
  async function waitWithTimeout(promise, timeout = 5e3) {
    return Promise.race([promise, waitForTimer(timeout, false)]);
  }

  async function bruteforce(
    resetPosition,
    quantPages,
    nextSelector,
    targetSelector,
    imageSelector = 'img',
    imageAttribute = 'src',
  ) {
    const div = document.createElement('div');
    div.setAttribute(
      'style',
      'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
    );
    document.body.append(div);
    resetPosition();
    const next = document.querySelector(nextSelector);
    const target = document.querySelector(targetSelector);
    const src = [];
    for (let i = 1; i <= quantPages; i += 1) {
      src[i - 1] = await waitWithTimer(
        waitForAtb(imageSelector, imageAttribute, target ?? document.body),
        100,
      );
      target?.querySelector(imageSelector)?.removeAttribute(imageAttribute);
      next?.dispatchEvent(new Event('click'));
    }
    return src;
  }

  const eightMuses = {
    name: ['8Muses.com', '8Muses.io'],
    obs: 'Slow start, bruteforce may be required',
    url: /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,
    homepage: ['https://comics.8muses.com/', 'https://8muses.io/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const img = unsafeWindow.link_images?.slice(1, unsafeWindow.link_images.length) ?? [];
      const count = document
        .querySelector('link[rel="last"]')
        ?.getAttribute('href')
        ?.match(/\d+$/)
        ?.at(0);
      const num = img?.length ?? parseInt(count ?? '0', 10);
      const manga = {
        title: [...document.querySelectorAll('.top-menu-breadcrumb li:not(:last-child)')]
          .map(e => e?.textContent?.trim())
          .join('/'),
        series: document
          .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
          ?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        lazy: false,
        timer: 10,
        listImages: img,
        async before() {
          if (!unsafeWindow.link_images?.length) {
            manga.listImages = await bruteforce(
              () => {
                const prev = document.querySelector('.page-prev');
                while (
                  document.querySelector('.c-dropdown-toggle')?.textContent?.match(/\d+/)?.at(0) !==
                  '1'
                ) {
                  prev?.dispatchEvent(new Event('click'));
                }
              },
              num,
              '.page-next',
              '.p-picture',
              '.photo img',
              'src',
            );
          }
        },
      };
      return manga;
    },
  };

  const ninehentai = {
    name: '9Hentai',
    url: /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,
    homepage: 'https://9hentai.so',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['#jumpPageModal input', 'max'],
    async run() {
      const data = { id: parseInt(/\d+/.exec(window.location.pathname)?.at(0) ?? '0', 10) };
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const api = await fetch('/api/getBookByID', options).then(async res => res.json());
      return {
        title: api.results.title,
        series: `/g/${api.results.id}/`,
        pages: api.results.total_page,
        prev: '#',
        next: '#',
        listImages: Array(api.results.total_page)
          .fill(0)
          .map(
            (_, i) =>
              `${api.results.image_server.replace('.com', '.so') + api.results.id}/${i + 1}.jpg`,
          ),
      };
    },
  };

  const akumamoe = {
    name: 'AkumaMoe',
    url: /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,
    homepage: 'https://akuma.moe',
    language: [Language.RAW],
    category: Category.HENTAI,
    waitFunc: () =>
      unsafeWindow.img_lst?.length ===
      document.querySelectorAll('.reader-nav:first-child .nav-select option')?.length,
    async run() {
      return {
        title: document
          .querySelector('h1.sr-only')
          ?.textContent?.trim()
          .replace(/^Reading /, ''),
        series: `https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,
        pages: unsafeWindow.img_lst.length,
        prev: '#',
        next: '#',
        listImages: unsafeWindow.img_lst.map(img => `${unsafeWindow.img_prt}/${img}`),
      };
    },
  };

  const bestporncomix = {
    name: 'BestPornComix',
    url: /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,
    homepage: 'https://www.bestporncomix.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitTime: 5e3,
    run() {
      const images = [...document.querySelectorAll('figure a')];
      return {
        title: document.querySelector('h1.entry-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('href') ?? ''),
      };
    },
  };

  const doujinmoe = {
    name: 'DoujinMoeNM',
    url: /https?:\/\/(www\.)?doujins.com\/.+/,
    homepage: 'https://doujins.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.doujin',
    run() {
      const images = [...document.querySelectorAll('.doujin')];
      return {
        title: document.querySelector('.folder-title a:last-child')?.textContent?.trim(),
        series: document.querySelector('.folder-title a:nth-last-child(2)')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('data-file') ?? ''),
      };
    },
  };

  const dragontranslation = {
    name: 'Dragon Translation',
    url: /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,
    homepage: 'https://dragontranslation.net/es',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: '#chapter_imgs img',
    run() {
      const images = [...document.querySelectorAll('#chapter_imgs img')]
        .map(img => img.getAttribute('src') ?? '')
        .filter(src => src && src !== '/discord2.jpg');
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        series: document.querySelector('h2 + div a')?.getAttribute('href'),
        pages: images.length,
        prev: document
          .querySelector('.fa-chevron-circle-left')
          ?.parentElement?.getAttribute('href'),
        next: document
          .querySelector('.fa-chevron-circle-right')
          ?.parentElement?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const exhentai = {
    name: ['ExHentai', 'e-Hentai'],
    url: /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
    homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
    language: [Language.ENGLISH],
    obs: 'May get your IP Banned, use with moderation',
    category: Category.HENTAI,
    async run() {
      const num = parseInt(
        document.querySelector('.sn div span:nth-child(2)')?.textContent ?? '0',
        10,
      );
      const maxGalley = Math.ceil(num / 20);
      const gallery = document
        .querySelector('.sb a')
        ?.getAttribute('href')
        ?.replace(/\?p=\d+/, '');
      const fetchBlocks = Array(maxGalley)
        .fill(0)
        .map(async (_, galleryId) =>
          fetch(`${gallery}?p=${galleryId}`)
            .then(async res => res.text())
            .then(html => new DOMParser().parseFromString(html, 'text/html')),
        );
      const data = await Promise.all(fetchBlocks);
      const pages = data.flatMap(html =>
        [...html.querySelectorAll('#gdt a')].map(item => item.getAttribute('href') ?? ''),
      );
      return {
        title: document.querySelector('#i1 h1')?.textContent?.trim(),
        series: gallery,
        pages: num,
        begin: parseInt(document.querySelector('div#i2 span')?.textContent ?? '1', 10),
        prev: '#',
        next: '#',
        listPages: pages,
        img: '#img',
        lazy: true,
        async reload(page) {
          const oldUrl = `${pages[page - 1]}`;
          const slug = await fetch(oldUrl)
            .then(res => res.text())
            .then(html => /nl\('([\d-]+)'\)/.exec(html)?.[1]);
          const newUrl = `${oldUrl}${oldUrl.indexOf('?') ? '&' : '?'}nl=${slug}`;
          return fetch(newUrl)
            .then(res => res.text())
            .then(
              html =>
                new DOMParser()
                  ?.parseFromString(html, 'text/html')
                  ?.querySelector('#img')
                  ?.getAttribute('src') ?? '',
            );
        },
      };
    },
  };

  const freeadultcomix = {
    name: 'FreeAdultComix',
    url: /https?:\/\/(www\.)?freeadultcomix.com\/.+/,
    homepage: 'https://www.freeadultcomix.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitTime: 5e3,
    run() {
      const images = [...document.querySelectorAll('.foto img')];
      return {
        title: document.querySelector('.post-conteudo h1')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const fsicomics = {
    name: 'FSIComics',
    url: /https?:\/\/(www\.)?fsicomics.com\/.+/,
    homepage: 'https://fsicomics.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images = [...document.querySelectorAll('.wp-block-gallery img')];
      return {
        title: document.querySelector('.s-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('data-large-file') ?? ''),
      };
    },
  };

  const gntai = {
    name: 'GNTAI.net',
    url: /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,
    homepage: 'https://www.gntai.net/',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const images =
        document
          .querySelector('#main > script')
          ?.innerHTML.match(/var pages = [^;]+/)
          ?.at(0)
          ?.toString()
          .match(/https?[^"]+/g) ?? [];
      return {
        title: document.querySelector('.entry-header h1')?.textContent?.trim(),
        pages: images?.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const hentai2read = {
    name: 'Hentai2Read',
    url: /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,
    homepage: 'https://hentai2read.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      return {
        title: document.querySelector('.reader-left-text')?.textContent?.trim(),
        series: unsafeWindow.gData.mainURL,
        pages: unsafeWindow.gData.images.length,
        prev: unsafeWindow.gData.previousURL,
        next: unsafeWindow.gData.nextURL,
        listImages: unsafeWindow.gData.images.map(i => `https://static.hentaicdn.com/hentai${i}`),
      };
    },
  };

  const hentaiera = {
    name: 'HentaiEra',
    url: /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,
    homepage: 'https://hentaiera.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '0', 10);
      return {
        title: document
          .querySelector('h1')
          ?.textContent?.trim()
          .replace(/ - Page .+$/, ''),
        series: document.querySelector('.return_btn ')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listPages: Array(num)
          .fill(0)
          .map((_, i) => window.location.href.replace(/\/\d*\/?$/, `/${i + 1}`)),
        img: '#gimg',
        lazyAttr: 'data-src',
      };
    },
  };

  const hentaiforce = {
    name: 'HentaiForce',
    url: /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,
    homepage: 'https://hentaiforce.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      return {
        title: document
          .querySelector('h1')
          ?.textContent?.trim()
          .replace(/ - Page .+$/, ''),
        series: document.querySelector('.reader-go-back ')?.getAttribute('href'),
        pages: unsafeWindow.readerPages.lastPage,
        prev: '#',
        next: '#',
        listImages: Array(unsafeWindow.readerPages.lastPage)
          .fill(0)
          .map((_, i) =>
            unsafeWindow.readerPages.baseUriImg
              .replace('%c', unsafeWindow.readerPages.pages[i + 1].l)
              .replace('%s', unsafeWindow.readerPages.pages[i + 1].f),
          ),
      };
    },
  };

  const objectURLRegex = /^blob:(.+?)\/(.+)$/;
  function getDataFromBase64(src) {
    return src.slice(src.indexOf(';base64,') + 8);
  }
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif);base64,/;
    return base64Pattern.test(imageUrl);
  }
  function isObjectURL(url) {
    return objectURLRegex.test(url);
  }
  function getExtension(url) {
    const parts = url.split('?');
    const filename = parts[0].split('/').pop();
    const extensionMatch = filename?.match(/\.[A-Za-z]{2,4}$/);
    return extensionMatch ? extensionMatch[0].slice(1) : '';
  }
  const getExtensionBase64 = base64 => {
    const c = base64.substring(base64.indexOf('/') + 1, base64.indexOf(';base64'));
    switch (c) {
      case '/':
        return 'jpg';
      case 'R':
        return 'gif';
      case 'U':
        return 'webp';
      // case 'i':
      default:
        return 'png';
    }
  };
  function extensionByCode(c) {
    switch (c) {
      case 'p':
        return 'png';
      case 'b':
        return 'bmp';
      case 'g':
        return 'gif';
      case 'w':
        return 'webp';
      // case 'j':
      default:
        return 'jpg';
    }
  }

  const hentaifox = {
    name: 'HentaiFox',
    url: /https?:\/\/(www\.)?hentaifox.com\/g\/.+/,
    homepage: 'https://www.hentaifox.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'g_th',
    waitFunc: () => document.querySelector('#gimg')?.classList.contains('loaded') ?? false,
    run() {
      const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '', 10);
      const src =
        document
          .querySelector('#gimg')
          ?.getAttribute('src')
          ?.replace(/\d+.\w+$/, '') ?? '';
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/ - Page .+/, '')
          .trim(),
        series: document.querySelector('.browse_buttons a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map((_, i) => `${src + (i + 1)}.${extensionByCode(unsafeWindow.g_th[i + 1][0])}`),
      };
    },
  };

  const hentaihand = {
    name: ['HentaiHand', 'nHentai.com'],
    url: /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,
    homepage: ['https://hentaihand.com/', 'https://nhentai.com'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.reader img',
    run() {
      const images = [...document.querySelectorAll('.reader img')];
      return {
        title: document.querySelector('.reader-header h5')?.textContent?.trim(),
        series: document.querySelector('.reader-header h5 a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(
          img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
        ),
      };
    },
  };

  const hentaihere = {
    name: 'HentaIHere',
    url: /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,
    homepage: 'https://www.hentaihere.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'rff_imageList',
    run() {
      const src = document
        .querySelector('#arf-reader-img')
        ?.getAttribute('src')
        ?.replace(/\d.+/, '');
      return {
        title: unsafeWindow.rff_pageTitle.replace(/.+\|/, '').trim(),
        series: unsafeWindow.rff_thisManga,
        pages: unsafeWindow.rff_imageList.length,
        prev: unsafeWindow.rff_previousChapter,
        next: unsafeWindow.rff_nextChapter,
        listImages: unsafeWindow.rff_imageList.map(img => src + img),
      };
    },
  };

  const hentainexus = {
    name: 'HentaiNexus',
    url: /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,
    homepage: 'https://hentainexus.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images =
        unsafeWindow.pageData?.map(i => i.image) ?? unsafeWindow.images?.map(i => i.url);
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/^\[[\d/]+\]/, '')
          .trim(),
        series: document.querySelector('#returnGalleryFooter a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const hentalk = {
    name: 'HenTalk',
    url: /https?:\/\/(www.)?hentalk.pw/,
    homepage: 'https://hentalk.pw/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const cdn = 'https://hentalk.pw';
      const api = await fetch(
        `${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`,
      )
        .then(async res => res.json())
        .then(j => j.nodes[2].data);
      const gallery = api?.[api.find(e => e?.gallery)?.gallery];
      const slug = api?.[gallery?.hash] || api?.[api.find(e => e?.hash && e?.id).hash];
      const images = api?.[gallery.images].map(i => api[i]).map(i => api[i.filename]);
      return {
        title: api?.[gallery.title],
        series: window.location.href.replace(/read\/.+/, ''),
        pages: images?.length,
        prev: '#',
        next: '#',
        listImages: images?.map(src => `${cdn}/image/${slug}/${src}`),
      };
    },
  };

  const hitomi = {
    name: 'Hitomi',
    url: /https?:\/\/hitomi.la\/reader\/.+/,
    homepage: 'https://hitomi.la/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['#comicImages img', 'src'],
    waitVar: 'galleryinfo',
    run() {
      return {
        title: document.querySelector('title')?.textContent?.replace('| Hitomi.la', '').trim(),
        series: document.querySelector('.brand')?.getAttribute('href'),
        pages: unsafeWindow.galleryinfo.files.length,
        prev: '#',
        next: '#',
        listImages: unsafeWindow.galleryinfo.files.map(file =>
          unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo, file, 'webp'),
        ),
      };
    },
  };

  const imhentai = {
    name: 'Imhentai',
    url: /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,
    homepage: 'https://imhentai.xxx/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'g_th',
    async run() {
      const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
      const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
      const num = parseInt(document.querySelector('#pages')?.getAttribute('value') ?? '', 10);
      const randomServer = await waitForVar('random_server');
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.return_btn')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map(
            (_, i) =>
              `//${randomServer}/${imageDir}/${galleryId}/${i + 1}.${extensionByCode(
                unsafeWindow.g_th[i + 1][0],
              )}`,
          ),
      };
    },
  };

  const kingcomix = {
    name: ['KingComix', 'Chochox', 'Comics18'],
    url: /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,
    homepage: ['https://kingcomix.com/', 'https://chochox.com/porno/', 'https://comics18.org/'],
    language: [Language.ENGLISH, Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const src = [
        ...document.querySelectorAll('figure img, .entry-content img:not(a img), .wp-content img'),
      ];
      return {
        title: document.querySelector('h1.singleTitle-h1')?.textContent?.trim(),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src.map(
          img =>
            img.getAttribute('data-src') ??
            img.getAttribute('data-full-url') ??
            img.getAttribute('data-lazy-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const luscious = {
    name: 'Luscious',
    url: /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,
    homepage: 'https://luscious.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.album-info div',
    async run() {
      const num = parseInt(
        document
          .querySelector('input[name="page_number"] + span')
          ?.textContent?.match(/\d+/)
          ?.pop() ?? '0',
        10,
      );
      const totalBlocks = Math.ceil(num / 50);
      const id = parseInt(
        document
          .querySelector('.album-heading a')
          ?.getAttribute('href')
          ?.match(/\d+\//)
          ?.toString() ?? '0',
        10,
      );
      const query =
        '&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20';
      const fetchBlocks = Array(totalBlocks)
        .fill(0)
        .map(async (_, block) => {
          const url = `https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${id}"}],"display":"position","items_per_page":50,"page":${block + 1}}}${query}`;
          return GM.xmlHttpRequest({
            method: 'GET',
            url,
          }).then(res => JSON.parse(res.responseText));
        });
      const data = await Promise.all(fetchBlocks);
      const images = data.flatMap(res =>
        res.data.picture.list.items.map(img => img.url_to_original),
      );
      return {
        title: document.querySelector('.album-heading a')?.textContent?.trim(),
        series: document.querySelector('.album-heading a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;
  function findImages() {
    return [
      ...document.querySelectorAll(
        '.wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img',
      ),
    ].map(img => {
      const attrs = [...img.attributes].filter(
        attr => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|load).*$/.test(attr.value),
      );
      if (attrs.length === 0) return '';
      return (
        attrs.find(attr => imageRegex.test(attr.value))?.value ?? img?.getAttribute('src') ?? ''
      );
    });
  }
  const madarawp = {
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
    language: [Language.ENGLISH],
    obs: 'Any Site that uses Madara WordPress Plugin',
    category: Category.MANGA,
    waitFunc: () => {
      const images = findImages();
      return images.length > 0 && images.every(s => s && imageRegex.test(s));
    },
    run() {
      const images = findImages();
      return {
        title: document.querySelector('#chapter-heading')?.textContent?.trim(),
        series: (
          document.querySelector('.breadcrumb li:nth-child(3) a') ??
          document.querySelector('.breadcrumb li:nth-child(2) a')
        )?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.prev_page')?.getAttribute('href'),
        next: document.querySelector('.next_page')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const madarawph = {
    ...madarawp,
    name: ['Madara WordPress Plugin', 'AllPornComic', 'Manytoon', 'Manga District'],
    url: /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,
    homepage: [
      '#',
      'https://allporncomic.com/',
      'https://manytoon.com/',
      'https://mangadistrict.com/',
    ],
    category: Category.HENTAI,
  };

  const multporn = {
    name: 'MultPorn',
    url: /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,
    homepage: 'https://multporn.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    // WaitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
    async run() {
      const url =
        document.head.textContent
          ?.match(/"configUrl":"(.+?)",/)
          ?.at(1)
          ?.replaceAll('\\', '') ?? '';
      const api = await fetch(url)
        .then(async res => res.text())
        .then(html => new DOMParser().parseFromString(html, 'text/xml'));
      const images = [...api.querySelectorAll('image')];
      return {
        title: document.querySelector('#page-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('imageURL') ?? ''),
      };
    },
  };

  const myhentaigallery = {
    name: 'MyHentaiGallery',
    url: /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,
    homepage: 'https://www.myhentaigallery.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const lastPage = document
        .getElementById('js__pagination__next')
        ?.parentElement?.previousElementSibling?.querySelector('a');
      const num = parseInt(lastPage?.textContent ?? '', 10);
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.back-to-gallery a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listPages: Array(num)
          .fill(0)
          .map((_, i) => window.location.href.replace(/\/\d+$/, `/${i + 1}`)),
        img: '.gallery-slide img',
      };
    },
  };

  const nhentainet = {
    name: ['nHentai.net', 'nHentai.xxx', 'lhentai'],
    url: /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,
    homepage: ['https://nhentai.net/', 'https://nhentai.xxx/', 'https://lhentai.com/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const num = parseInt(document.querySelector('.num-pages')?.textContent ?? '', 10);
      const src = document
        .querySelector('#image-container img')
        ?.getAttribute('src')
        ?.replace(/\d+.\w+$/, '');
      const ext = unsafeWindow._gallery?.images?.pages?.map(i => extensionByCode(i.t));
      return {
        title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
        series: document.querySelector('.go-back')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map((_, i) => `${src}${i + 1}.${ext[i]}`),
      };
    },
  };

  const porncomicshd = {
    name: 'PornComicsHD',
    url: /https?:\/\/(www\.)?porncomicshd.com\/es.*/,
    homepage: 'https://porncomicshd.com/es',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: 'app-comic-reader img',
    async run() {
      const img = [...document.querySelectorAll('app-comic-reader img')];
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        pages: img.length,
        prev: '#',
        next: '#',
        lazy: false,
        listImages: img.map(i => i.getAttribute('src') ?? ''),
      };
    },
  };

  const pururin = {
    name: 'Pururin',
    url: /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,
    homepage: 'https://pururin.me/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['.img-viewer img', 'src'],
    run() {
      const src = document.querySelector('.img-viewer img')?.getAttribute('src') ?? '';
      const num = [...document.querySelectorAll('.img-select option')];
      return {
        title: document.querySelector('.title')?.textContent?.trim(),
        series: document.querySelector('.breadcrumb-item:nth-child(4) a')?.getAttribute('href'),
        pages: num.length,
        prev: '#',
        next: '#',
        listImages: num.map((_, i) => src.replace(/\/\d+\./, `/${i + 1}.`)),
      };
    },
  };

  const schalenetwork = {
    name: 'SchaleNetwork',
    url: /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,
    homepage: 'https://schale.network/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: 'nav select option',
    async run() {
      const gallery = history.state.memo.gallery;
      const size = gallery.resolution;
      const { base, entries } = history.state.memo.data;
      const src = entries.map(image => `${base}/${image.path}?w=${size}`);
      return {
        title: gallery.title,
        series: `/g/${gallery.id}/${gallery.key}/`,
        pages: src.length,
        prev: '#',
        next: '#',
        fetchOptions: {
          method: 'GET',
          redirect: 'follow',
        },
        listImages: src,
      };
    },
  };

  const simplyhentai = {
    name: 'Simply-Hentai',
    url: /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,
    homepage: 'https://simply-hentai.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '#__NEXT_DATA__',
    async run() {
      const json = JSON.parse(document.querySelector('#__NEXT_DATA__')?.innerHTML ?? '');
      const images = json.props.pageProps.data.pages.map(img => img.sizes.full);
      return {
        title: document.querySelector('.content-headline a')?.textContent?.trim(),
        series: document.querySelector('.content-headline a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const tmohhentai = {
    name: 'TMOHentai',
    url: /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,
    homepage: 'https://tmohentai.com/',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const src = [...document.querySelectorAll('.content-image')].map(
        i => i.getAttribute('data-original') ?? i.getAttribute('src') ?? '',
      );
      return {
        before() {
          if (window.location.pathname.includes('paginated')) {
            window.location.pathname = window.location.pathname.replace(/paginated.*/, 'cascade');
          }
        },
        title: document.querySelector('.reader-title')?.textContent?.trim(),
        series: document.querySelector('.nav-justified li a')?.getAttribute('href'),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src,
      };
    },
  };

  const tsumino = {
    name: 'Tsumino',
    url: /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,
    homepage: 'https://tsumino.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const dataopt = document.querySelector('#image-container')?.getAttribute('data-opt');
      const datacdn = document.querySelector('#image-container')?.getAttribute('data-cdn') ?? '';
      const url = `https://www.tsumino.com/Read/Load?q=${dataopt}`;
      const api = await fetch(url).then(async res => res.json());
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/.+Read/, '')
          .trim(),
        series: api.reader_start_url,
        pages: api.reader_page_total,
        prev: '#',
        next: '#',
        listImages: Array(api.reader_page_total)
          .fill(0)
          .map((_, i) => datacdn.replace('[PAGE]', `${i + 1}`)),
      };
    },
  };

  const vercomicsporno = {
    name: ['vermangasporno', 'vercomicsporno'],
    url: /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,
    homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: 'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
    run() {
      const images = [
        ...document.querySelectorAll(
          'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
        ),
      ];
      return {
        title: document.querySelector('h1.titl, title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(
          img =>
            img.getAttribute('data-lazy-src') ??
            img.getAttribute('data-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const wnacg = {
    name: 'wnacg',
    url: /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,
    homepage: 'https://wnacg.com/',
    language: [Language.ENGLISH, Language.RAW, Language.CHINESE],
    category: Category.HENTAI,
    run() {
      const pages = [...document.querySelectorAll('.pageselect option')];
      return {
        title: document.querySelector('.bread a:last-of-type')?.textContent?.trim(),
        pages: pages.length,
        prev: '#',
        next: '#',
        listPages: pages.map(page => window.location.pathname.replace(/\d+/, page.value)),
        img: '#picarea',
      };
    },
  };

  const xlecxone = {
    name: 'XlecxOne',
    url: /https?:\/\/(www\.)?xlecx.one\/.+/,
    homepage: 'https://xlecx.one/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const src = [
        ...new Set(
          [...document.querySelectorAll('article .page__text img , article #content-2 img')].map(
            img =>
              img.getAttribute('data-src') ??
              img.getAttribute('data-srce') ??
              img.closest('a')?.getAttribute('href') ??
              img.getAttribute('src') ??
              '',
          ),
        ),
      ];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src,
      };
    },
  };

  const xyzcomics = {
    name: 'xyzcomics',
    url: /https?:\/\/(www\.)?xyzcomics.com\/.+/,
    homepage: 'https://xyzcomics.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images = [...document.querySelectorAll('.jig-link')];
      return {
        title: document.querySelector('.entry-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('href') ?? ''),
      };
    },
  };

  const yabai = {
    name: 'Yabai',
    url: /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,
    homepage: 'https://yabai.si/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const num = document.querySelectorAll('nav select option').length;
      const manga = {
        title: document.querySelector('title')?.textContent?.trim(),
        series: '../',
        pages: num,
        prev: '#',
        next: '#',
        listImages: [''],
        async before() {
          manga.listImages = await bruteforce(
            () => {
              const item = document.querySelector('select option');
              if (item) item.selected = true;
              document.querySelector('select')?.dispatchEvent(new Event('change'));
            },
            num,
            'button[title="Next"]',
            'h1 + div',
            'img.mx-auto',
            'src',
          );
        },
      };
      return manga;
    },
  };

  const sites = [
    akumamoe,
    bestporncomix,
    doujinmoe,
    dragontranslation,
    eightMuses,
    exhentai,
    fsicomics,
    freeadultcomix,
    gntai,
    hentai2read,
    hentaiera,
    hentaiforce,
    hentaifox,
    hentaihand,
    hentaihere,
    hentainexus,
    hentalk,
    hitomi,
    imhentai,
    kingcomix,
    luscious,
    multporn,
    myhentaigallery,
    nhentainet,
    ninehentai,
    porncomicshd,
    pururin,
    schalenetwork,
    simplyhentai,
    tmohhentai,
    threehentai,
    tsumino,
    vercomicsporno,
    wnacg,
    xlecxone,
    xyzcomics,
    yabai,
    madarawph,
    // Must be at the end because is a generic check
  ];

  const rangeSliderStyles =
    '.range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}';

  const keyscss =
    '/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */';

  const normalize$1 =
    '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n';

  const nprogress =
    '/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n';

  const sweetalert =
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}';

  const fix =
    '#nprogress .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\n#pagesSlider {\n  margin: 10px 0;\n}\n\n#pageInputs {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n}\n\n#swal2-html-container .pageInput {\n  border: 1px darkblue dashed;\n  border-radius: 5px;\n  text-align: center;\n  background-color: aliceblue;\n  color: black;\n  max-width: 40%;\n}\n\n#swal2-title {\n  color: navy;\n}\n\nbutton.swal2-styled {\n  position: inherit;\n  transform: inherit;\n}\n';

  const sweetalertStyle = [normalize$1, sweetalert, fix, nprogress, keyscss].join('\n');

  const startButton =
    '#StartMOV {\n  all: revert;\n  backface-visibility: hidden;\n  font-size: 2rem;\n  color: #fff;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border: none;\n  border-radius: 10px;\n  min-height: 50px;\n  width: 80%;\n  position: fixed;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 105000;\n  transition: all 0.4s ease-in-out;\n  background-size: 300% 100%;\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n}\n\n#StartMOV:hover {\n  background-position: 100% 0;\n  transition: all 0.4s ease-in-out;\n}\n\n#StartMOV:focus {\n  outline: none;\n}\n';

  const concatenateTemplateLiteralTag = (raw, ...keys) =>
    keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html = concatenateTemplateLiteralTag;
  const css = concatenateTemplateLiteralTag;

  function giveToWindow(key, content) {
    if (typeof unsafeWindow !== 'undefined') unsafeWindow[key] = content;
    if (typeof window !== 'undefined') {
      window[key] = content;
    }
  }
  function logScript(...text) {
    console.log('MangaOnlineViewer: ', ...text);
    return text;
  }
  function logScriptVerbose(...text) {
    if (['dev', 'development'].includes('adult')) console.info('MangaOnlineViewer: ', ...text);
    return text;
  }
  const logScriptC = x => y => logScript(x, y)[1];
  function removeValueGM(name) {
    if (typeof GM_deleteValue !== 'undefined') {
      GM_deleteValue(name);
    } else {
      logScriptVerbose('Fake Removing: ', name);
    }
  }
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
  function getValueGM(name, defaultValue = null) {
    if (typeof GM_getValue !== 'undefined') {
      return GM_getValue(name, defaultValue);
    }
    logScriptVerbose('Fake Getting: ', name, ' = ', defaultValue);
    return defaultValue;
  }
  function getJsonGM(name, defaultValue = null) {
    const result = getValueGM(name, defaultValue);
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
  function getGlobalSettings(defaultSettings) {
    return getJsonGM('settings', defaultSettings);
  }
  function getLocalSettings(defaultSettings) {
    return getJsonGM(window.location.hostname, defaultSettings);
  }
  function setValueGM(name, value) {
    if (typeof GM_setValue !== 'undefined') {
      GM_setValue(name, value);
      logScript('Setting: ', name, ' = ', value);
      return value.toString();
    } else {
      logScriptVerbose('Fake Setting: ', name, ' = ', value);
      return String(value);
    }
  }
  function setGlobalSettings(value) {
    return setValueGM('settings', value);
  }
  function setLocalSettings(value) {
    return setValueGM(window.location.hostname, value);
  }
  function getBrowser() {
    let tem;
    const M =
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent) ??
      [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(navigator.userAgent) ?? [];
      return `IE ${tem[1] ?? ''}`;
    }
    if (M[1] === 'Chrome') {
      tem = /\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent);
      if (tem !== null) {
        return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
    }
    const tempM = [M[1], M[2]];
    tem = /version\/(\d+)/i.exec(navigator.userAgent);
    if (tem !== null) {
      tempM.splice(1, 1, tem[1]);
    }
    return tempM.join(' ');
  }
  function getEngine() {
    return getInfoGM.scriptHandler ?? 'Greasemonkey';
  }
  const parser = bowser.getParser(window.navigator.userAgent);
  const getDevice = () => {
    const device = parser.getPlatformType(true);
    if (device === 'mobile' || window.matchMedia('screen and (max-width: 600px)').matches) {
      return 'mobile';
    }
    if (device === 'tablet' || window.matchMedia('screen and (max-width: 992px)').matches) {
      return 'tablet';
    }
    return 'desktop';
  };
  const isMobile = () => getDevice() === 'mobile' || getDevice() === 'tablet';
  const settingsChangeListener = (fn, gmValue = 'settings') => {
    if (typeof GM_addValueChangeListener !== 'undefined') {
      try {
        return GM_addValueChangeListener(gmValue, (_name, _oldValue, newValue, remote) => {
          if (remote) fn(newValue);
        });
      } finally {
      }
    }
  };

  async function testAttribute(site) {
    if (site.waitAttr !== void 0) {
      logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]}`);
      const wait = await waitForAtb(site.waitAttr[0], site.waitAttr[1]);
      logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
    }
  }
  async function testElement(site) {
    if (site.waitEle !== void 0) {
      logScript(`Waiting for Element ${site.waitEle}`);
      const wait = await waitForElm(site.waitEle);
      logScript(`Found Element ${site.waitEle} = `, wait);
    }
  }
  async function testVariable(site) {
    if (site.waitVar !== void 0) {
      logScript(`Waiting for Variable ${site.waitVar}`);
      const wait = await waitForVar(site.waitVar);
      logScript(`Found Variable ${site.waitVar} = ${wait}`);
    }
  }
  async function testFunc(site) {
    if (site.waitFunc !== void 0) {
      logScript(`Waiting to pass Function check ${site.waitFunc}`);
      const wait = await waitForFunc(site.waitFunc);
      logScript(`Found Function check ${site.waitFunc} = ${wait}`);
    }
  }
  async function testTime(site) {
    if (site.waitTime !== void 0) {
      logScript(`Waiting to for ${site.waitTime} milliseconds`);
      await new Promise(resolve => {
        setTimeout(resolve, site.waitTime);
      });
      logScript('Continuing after timer');
    }
  }

  let listenerQueue = [];
  let lqIndex = 0;
  const QUEUE_ITEMS_PER_LISTENER = 4;
  let epoch = 0;
  let atom = initialValue => {
    let listeners = [];
    let $atom = {
      get() {
        if (!$atom.lc) {
          $atom.listen(() => {})();
        }
        return $atom.value;
      },
      lc: 0,
      listen(listener) {
        $atom.lc = listeners.push(listener);
        return () => {
          for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length; ) {
            if (listenerQueue[i] === listener) {
              listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
            } else {
              i += QUEUE_ITEMS_PER_LISTENER;
            }
          }
          let index = listeners.indexOf(listener);
          if (~index) {
            listeners.splice(index, 1);
            if (!--$atom.lc) $atom.off();
          }
        };
      },
      notify(oldValue, changedKey) {
        epoch++;
        let runListenerQueue = !listenerQueue.length;
        for (let listener of listeners) {
          listenerQueue.push(listener, $atom.value, oldValue, changedKey);
        }
        if (runListenerQueue) {
          for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) {
            listenerQueue[lqIndex](
              listenerQueue[lqIndex + 1],
              listenerQueue[lqIndex + 2],
              listenerQueue[lqIndex + 3],
            );
          }
          listenerQueue.length = 0;
        }
      },
      /* It will be called on last listener unsubscribing.
         We will redefine it in onMount and onStop. */
      off() {},
      set(newValue) {
        let oldValue = $atom.value;
        if (oldValue !== newValue) {
          $atom.value = newValue;
          $atom.notify(oldValue);
        }
      },
      subscribe(listener) {
        let unbind = $atom.listen(listener);
        listener($atom.value);
        return unbind;
      },
      value: initialValue,
    };
    return $atom;
  };

  const MOUNT = 5;
  const UNMOUNT = 6;
  const REVERT_MUTATION = 10;
  let on = (object, listener, eventKey, mutateStore) => {
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
      object.events[eventKey + REVERT_MUTATION] = mutateStore(eventProps => {
        object.events[eventKey].reduceRight((event, l) => (l(event), event), {
          shared: {},
          ...eventProps,
        });
      });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return () => {
      let currentListeners = object.events[eventKey];
      let index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
      if (!currentListeners.length) {
        delete object.events[eventKey];
        object.events[eventKey + REVERT_MUTATION]();
        delete object.events[eventKey + REVERT_MUTATION];
      }
    };
  };
  let STORE_UNMOUNT_DELAY = 1e3;
  let onMount = ($store, initialize) => {
    let listener = payload => {
      let destroy = initialize(payload);
      if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, runListeners => {
      let originListen = $store.listen;
      $store.listen = (...args) => {
        if (!$store.lc && !$store.active) {
          $store.active = true;
          runListeners();
        }
        return originListen(...args);
      };
      let originOff = $store.off;
      $store.events[UNMOUNT] = [];
      $store.off = () => {
        originOff();
        setTimeout(() => {
          if ($store.active && !$store.lc) {
            $store.active = false;
            for (let destroy of $store.events[UNMOUNT]) destroy();
            $store.events[UNMOUNT] = [];
          }
        }, STORE_UNMOUNT_DELAY);
      };
      return () => {
        $store.listen = originListen;
        $store.off = originOff;
      };
    });
  };

  let computedStore = (stores, cb, batched) => {
    if (!Array.isArray(stores)) stores = [stores];

    let previousArgs;
    let currentEpoch;
    let set = () => {
      if (currentEpoch === epoch) return;
      currentEpoch = epoch;
      let args = stores.map($store => $store.get());
      if (!previousArgs || args.some((arg, i) => arg !== previousArgs[i])) {
        previousArgs = args;
        let value = cb(...args);
        if (value && value.then && value.t) {
          value.then(asyncValue => {
            if (previousArgs === args) {
              // Prevent a stale set
              $computed.set(asyncValue);
            }
          });
        } else {
          $computed.set(value);
          currentEpoch = epoch;
        }
      }
    };
    let $computed = atom(undefined);
    let get = $computed.get;
    $computed.get = () => {
      set();
      return get();
    };
    let run = set;

    onMount($computed, () => {
      let unbinds = stores.map($store => $store.listen(run));
      set();
      return () => {
        for (let unbind of unbinds) unbind();
      };
    });

    return $computed;
  };

  let computed = (stores, fn) => computedStore(stores, fn);

  const de_DE = {
    ID: 'de_DE',
    NAME: 'Deutsch',
    STARTING: 'Starte<br>Manga OnlineViewer',
    RESUME: 'Fortsetzen ab Seite ',
    WAITING: 'Bitte warten, 3 Sekunden...',
    CHOOSE_BEGINNING: 'Wähle die Startseite:',
    BUTTON_START: 'Manga OnlineViewer starten',
    SETTINGS: 'Einstellungen',
    LANGUAGE: 'Sprache',
    COLOR_SCHEME: 'Farbschema',
    THEME: 'Design',
    THEME_COLOR: 'Farbe',
    THEME_HUE: 'Farbton',
    THEME_SHADE: 'Schattierung',
    DEFAULT_LOAD_MODE: 'Standard-Lademodus',
    LOAD_MODE_NORMAL: 'Normal (3 Sek. warten)',
    LOAD_MODE_ALWAYS: 'Immer (sofort)',
    LOAD_MODE_NEVER: 'Nie (manuell)',
    LOAD_SPEED: 'Ladegeschwindigkeit Seiten/Sekunde',
    DEFAULT_ZOOM: 'Standard-Zoom (zwischen 5 und 200)',
    DEFAULT_ZOOM_MODE: 'Standard-Zoommodus',
    MINIMUM_ZOOM: 'Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)',
    ZOOM_STEP: 'Zoom-Schrittgröße (zwischen 5 und 50)',
    DEFAULT_VIEW_MODE: 'Standard-Ansichtsmodus',
    VIEW_MODE_VERTICAL: 'Vertikal',
    VIEW_MODE_LEFT: 'Links nach Rechts',
    VIEW_MODE_RIGHT: 'Rechts nach Links',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Breite anpassen bei Übergröße',
    SHOW_THUMBNAILS: 'Miniaturansichten anzeigen',
    ENABLE_COMMENTS: 'Kommentare erfassen (wenn verfügbar)',
    HIDE_CONTROLS: 'Seitensteuerung immer ausblenden',
    HEADER_TYPE: 'Kopfbereichstyp ändern',
    HEADER_HOVER: 'Hover',
    HEADER_SCROLL: 'Scrollen',
    HEADER_CLICK: 'Klicken',
    HEADER_FIXED: 'Fixiert',
    HEADER_SIMPLE: 'Einfach',
    BUTTON_DOWNLOAD: 'Herunterladen',
    DOWNLOAD_ZIP: 'Zip-Datei herunterladen',
    DOWNLOAD_IMAGES: 'Bilder automatisch als Zip herunterladen',
    BUTTON_NEXT: 'Weiter',
    NEXT_CHAPTER: 'Nächstes Kapitel',
    BUTTON_PREVIOUS: 'Zurück',
    PREVIOUS_CHAPTER: 'Vorheriges Kapitel',
    BOOKMARKS: 'Lesezeichen',
    BOOKMARK: 'Lesezeichen',
    BOOKMARK_REMOVED: 'Lesezeichen entfernt',
    BOOKMARK_SAVED: 'Lesezeichen gespeichert',
    BOOKMARK_MESSAGE:
      'Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt:<h4>Seite ##num##</h4>(Nur <i>EINMAL</i> pro Lesezeichen)',
    KEYBINDINGS: 'Tastenkürzel',
    EDIT_KEYBINDS: 'Tastenkürzel bearbeiten',
    SAVE_KEYBINDS: 'Tastenkürzel speichern',
    BUTTON_EDIT: 'Bearbeiten',
    BUTTON_SAVE: 'Speichern',
    KEYBIND_RULES: `
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. </br>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,
    ATTENTION: 'Achtung',
    WARNING: 'Warnung',
    BUTTON_RESET_SETTINGS: 'Einstellungen zurücksetzen(Reset Settings)',
    SETTINGS_RESET: 'Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden',
    LANGUAGE_CHANGED: 'Die Sprache wurde geändert, bitte Seite neu laden',
    AUTO_DOWNLOAD:
      'Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest',
    LAZY_LOAD:
      "Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",
    LAZY_LOAD_IMAGES_ENABLE: 'Lazy Load Bilder aktivieren',
    LAZY_LOAD_IMAGES: 'Lazy Start ab Seite (zwischen 5 und 100)',
    RETURN_CHAPTER_LIST: 'Zur Kapitelübersicht zurückkehren',
    PAGES_LOADED: 'Seiten geladen',
    GO_TO_PAGE: 'Gehe zu Seite',
    ENLARGE: 'Vergrößern',
    RESTORE: 'Wiederherstellen',
    REDUCE: 'Wiederherstellen',
    FIT_WIDTH: 'Breite anpassen',
    FIT_HEIGHT: 'Höhe anpassen',
    PERCENT: 'Prozent',
    TOGGLE_CONTROLS: 'Seitensteuerung umschalten',
    ZOOM_IN: 'Hineinzoomen',
    ZOOM_OUT: 'Herauszoomen',
    ZOOM_RESET: 'Zoom zurücksetzen',
    ZOOM_WIDTH: 'Auf Breite zoomen',
    ZOOM_HEIGHT: 'Auf Höhe zoomen',
    HIDE: 'Ausblenden',
    RELOAD: 'Neu laden',
    SLOWLY: 'Langsam',
    NORMAL: 'Normal',
    FAST: 'Schnell',
    EXTREME: 'Extrem',
    ALL_PAGES: 'Alle Seiten',
    SPEED_WARNING: 'Ladegeschwindigkeit zu hoch',
    SPEED_WARNING_MESSAGE:
      'Diese Geschwindigkeit wird nicht empfohlen.<br> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br> Bitte mit Vorsicht verwenden!',
    SCROLL_UP: 'Nach oben scrollen',
    SCROLL_DOWN: 'Nach unten scrollen',
    CLOSE: 'Schließen',
    LIST_EMPTY: 'Liste leer',
    DISPLAY_COMMENTS: 'Kommentare anzeigen',
    COMMENTS: 'Kommentarbereich',
    SCROLL_START: 'Auto-Scroll umschalten',
    AUTO_SCROLL_HEIGHT: 'Auto-Scroll-Geschwindigkeit in Pixel',
    VERTICAL_SEPARATOR: 'Vertikale Trenner anzeigen',
    END: 'Ende',
    SCOPE: 'Bereich',
    GLOBAL: 'Global',
    GENERAL: 'Allgemein',
    LOADING: 'Lädt',
    ZOOM: 'Zoom',
    OTHERS: 'Sonstiges',
  };

  const en_US = {
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
    BOOKMARK_MESSAGE:
      'Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)',
    KEYBINDINGS: 'Keybindings',
    EDIT_KEYBINDS: 'Edit KeyBindings',
    SAVE_KEYBINDS: 'Save KeyBindings',
    BUTTON_EDIT: 'Edit',
    BUTTON_SAVE: 'Save',
    KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Attention',
    WARNING: 'Warning',
    BUTTON_RESET_SETTINGS: 'Reset Settings',
    SETTINGS_RESET: 'Settings have been reset, reload the page to take effect',
    LANGUAGE_CHANGED: 'Language has been changed, reload the page to take effect',
    AUTO_DOWNLOAD: 'Next time a chapter finish loading you will be prompted to save automatically',
    LAZY_LOAD:
      "Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",
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
    SPEED_WARNING_MESSAGE:
      'This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!',
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
  };

  const es_ES = {
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
    BOOKMARK_MESSAGE:
      'La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)',
    KEYBINDINGS: 'Atajos de teclado',
    EDIT_KEYBINDS: 'Editar atajos',
    SAVE_KEYBINDS: 'Guardar atajos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Guardar',
    KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atención',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Reiniciar ajustes(Reset Settings)',
    SETTINGS_RESET:
      'Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto',
    LANGUAGE_CHANGED: 'Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto',
    AUTO_DOWNLOAD:
      'La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente',
    LAZY_LOAD:
      "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
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
    SPEED_WARNING_MESSAGE:
      'No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!',
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
  };

  const pt_BR = {
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
    BOOKMARK_MESSAGE:
      'Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)',
    KEYBINDINGS: 'Atalhos',
    EDIT_KEYBINDS: 'Editar Atalhos',
    SAVE_KEYBINDS: 'Salvar Atalhos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Salvar',
    KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atenção',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Limpar Configurações(Reset Settings)',
    SETTINGS_RESET: 'Configurações foram limpas, recarregue o site para efetivar a alteração',
    LANGUAGE_CHANGED: 'Idioma foi alterado, recarregue o site para efetivar a alteração',
    AUTO_DOWNLOAD: 'Proxima vez que abrir um capitulo download iniciara automaticamente',
    LAZY_LOAD:
      "Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",
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
    SPEED_WARNING_MESSAGE:
      'Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!',
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
  };

  const zh_CN = {
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
    KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. </br>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: '注意',
    WARNING: '警告',
    BUTTON_RESET_SETTINGS: '重置设置(Reset Settings)',
    SETTINGS_RESET: '设置已重置、重新加载页面才能生效',
    LANGUAGE_CHANGED: '语言已更改、重新加载页面才能生效',
    AUTO_DOWNLOAD: '下次章节加载完成时、系统将提示您自动保存',
    LAZY_LOAD:
      "延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",
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
    SPEED_WARNING_MESSAGE:
      '不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!',
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
  };

  const locales = [en_US, es_ES, pt_BR, zh_CN, de_DE];

  const settings$2 = {
    threshold: 2e3,
    throttle: 500,
    lazyAttribute: 'data-src',
    targetAttribute: 'src',
  };
  let listElements = [];
  let setup = false;
  function filterInView(value) {
    const { element } = value;
    const rect = element.getBoundingClientRect();
    const target =
      (window.innerHeight || document.documentElement.clientHeight) + settings$2.threshold;
    return rect.top <= target || rect.bottom <= target;
  }
  async function showElement(item) {
    let value = item.element.getAttribute(settings$2.lazyAttribute) ?? '';
    if (value) {
      if (!isObjectURL(value) && !isBase64ImageUrl(value) && item.fetchOptions) {
        value = await fetch(value, item.fetchOptions)
          .then(resp => resp.blob())
          .then(blob => blobUtil.blobToDataURL(blob));
      }
      item.element.setAttribute(settings$2.targetAttribute, value);
    }
    item.callback(item.element)?.catch(logScript);
  }
  function executeCheck() {
    const inView = listElements.filter(filterInView);
    listElements = listElements.filter(item => !filterInView(item));
    inView.forEach(showElement);
  }
  const observerEvent = _.throttle(executeCheck, settings$2.throttle);
  function lazyLoad$1(element, callback, fetchOptions) {
    if (!setup) {
      window.addEventListener('scroll', observerEvent, {
        passive: true,
      });
      window.addEventListener('touchmove', observerEvent, {
        passive: true,
      });
      window.addEventListener('resize', observerEvent, {
        passive: true,
      });
      setup = true;
    }
    listElements.push({ element, callback, fetchOptions });
    observerEvent();
  }

  async function fetchText(url, format) {
    return new Promise(resolve => {
      logScript('Fetching page: ', url);
      fetch(url)
        .then(async response =>
          // When the page is loaded convert it to text
          response.text(),
        )
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, format);
          resolve(doc);
        })
        .catch(err => {
          logScript('Failed to fetch page: ', err);
        });
    });
  }
  async function fetchHtml(url) {
    return fetchText(url, 'text/html');
  }
  async function getElementAttribute(url, selector, attribute) {
    return fetchHtml(url).then(doc => doc.querySelector(selector)?.getAttribute(attribute));
  }

  function indexList(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
  }

  const IconArrowAutofitDown =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/>\n  <path d="M18 4v17"/>\n  <path d="M15 18l3 3l3 -3"/>\n</svg>\n';

  const IconArrowAutofitHeight =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/>\n  <path d="M18 14v7"/>\n  <path d="M18 3v7"/>\n  <path d="M15 18l3 3l3 -3"/>\n  <path d="M15 6l3 -3l3 3"/>\n</svg>\n';

  const IconArrowAutofitLeft =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/>\n  <path d="M20 18h-17"/>\n  <path d="M6 15l-3 3l3 3"/>\n</svg>\n';

  const IconArrowAutofitRight =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/>\n  <path d="M4 18h17"/>\n  <path d="M18 15l3 3l-3 3"/>\n</svg>\n';

  const IconArrowAutofitWidth =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/>\n  <path d="M10 18h-7"/>\n  <path d="M21 18h-7"/>\n  <path d="M6 15l-3 3l3 3"/>\n  <path d="M18 15l3 3l-3 3"/>\n</svg>\n';

  const IconArrowBigLeft =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/>\n</svg>\n';

  const IconArrowBigRight =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/>\n</svg>\n';

  const IconBookmark =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/>\n</svg>\n';

  const IconBookmarkOff =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/>\n  <path d="M3 3l18 18"/>\n</svg>\n';

  const IconBookmarks =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/>\n  <path d="M11 3h5a3 3 0 0 1 3 3v11"/>\n</svg>\n';

  const IconCategory =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 4h6v6h-6z"/>\n  <path d="M14 4h6v6h-6z"/>\n  <path d="M4 14h6v6h-6z"/>\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>\n</svg>\n';

  const IconCheck =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check toggler-on" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M5 12l5 5l10 -10"/>\n</svg>\n';

  const IconDeviceFloppy =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/>\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>\n  <path d="M14 4l0 4l-6 0l0 -4"/>\n</svg>\n';

  const IconExternalLink =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/>\n  <path d="M11 13l9 -9"/>\n  <path d="M15 4h5v5"/>\n</svg>\n';

  const IconEye =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>\n</svg>\n';

  const IconEyeOff =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/>\n  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/>\n  <path d="M3 3l18 18"/>\n</svg>\n';

  const IconFileDownload =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M14 3v4a1 1 0 0 0 1 1h4"/>\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>\n  <path d="M12 17v-6"/>\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/>\n</svg>\n';

  const IconKeyboard =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/>\n  <path d="M6 10l0 .01"/>\n  <path d="M10 10l0 .01"/>\n  <path d="M14 10l0 .01"/>\n  <path d="M18 10l0 .01"/>\n  <path d="M6 14l0 .01"/>\n  <path d="M18 14l0 .01"/>\n  <path d="M10 14l4 .01"/>\n</svg>\n';

  const IconListNumbers =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M11 6h9"/>\n  <path d="M11 12h9"/>\n  <path d="M12 18h8"/>\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/>\n  <path d="M6 10v-6l-2 2"/>\n</svg>\n';

  const IconLoader2 =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 3a9 9 0 1 0 9 9"/>\n</svg>\n';

  const IconLocationCog =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\n     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\n     class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/>\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>\n  <path d="M19.001 15.5v1.5"/>\n  <path d="M19.001 21v1.5"/>\n  <path d="M22.032 17.25l-1.299 .75"/>\n  <path d="M17.27 20l-1.3 .75"/>\n  <path d="M15.97 17.25l1.3 .75"/>\n  <path d="M20.733 20l1.3 .75"/>\n</svg>\n';

  const IconMenu2 =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 6l16 0"/>\n  <path d="M4 12l16 0"/>\n  <path d="M4 18l16 0"/>\n</svg>\n';

  const IconMessage =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M8 9h8"/>\n  <path d="M8 13h6"/>\n  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>\n</svg>\n';

  const IconMoon =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>\n</svg>\n';

  const IconPalette =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/>\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>\n</svg>\n';

  const IconPencil =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/>\n  <path d="M13.5 6.5l4 4"/>\n</svg>\n';

  const IconPhoto =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 8h.01"/>\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/>\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>\n</svg>\n';

  const IconPhotoOff =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24"\n     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n     stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 8h.01"/>\n  <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/>\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/>\n  <path d="M3 3l18 18" color="orange"/>\n</svg>\n';

  const IconPlayerPause =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/>\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/>\n</svg>\n';

  const IconPlayerPlay =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M7 4v16l13 -8z"/>\n</svg>\n';

  const IconRefresh =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/>\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>\n</svg>\n';

  const IconSettings =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>\n</svg>\n';

  const IconSettingsOff =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\n     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\n     class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/>\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/>\n  <path d="M3 3l18 18"/>\n</svg>\n';

  const IconSpacingVertical =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/>\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/>\n  <path d="M16 12h-8"/>\n</svg>\n';

  const IconSun =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>\n  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>\n</svg>\n';

  const IconTrash =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 7l16 0"/>\n  <path d="M10 11l0 6"/>\n  <path d="M14 11l0 6"/>\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>\n</svg>\n';

  const IconWorldCog =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\n     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\n     class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M21 12a9 9 0 1 0 -8.979 9"/>\n  <path d="M3.6 9h16.8"/>\n  <path d="M3.6 15h8.9"/>\n  <path d="M11.5 3a17 17 0 0 0 0 18"/>\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/>\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>\n  <path d="M19.001 15.5v1.5"/>\n  <path d="M19.001 21v1.5"/>\n  <path d="M22.032 17.25l-1.299 .75"/>\n  <path d="M17.27 20l-1.3 .75"/>\n  <path d="M15.97 17.25l1.3 .75"/>\n  <path d="M20.733 20l1.3 .75"/>\n</svg>\n';

  const IconX =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x toggler-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M18 6l-12 12"/>\n  <path d="M6 6l12 12"/>\n</svg>\n';

  const IconZoomCancel =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>\n  <path d="M8 8l4 4"/>\n  <path d="M12 8l-4 4"/>\n  <path d="M21 21l-6 -6"/>\n</svg>\n';

  const IconZoomIn =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>\n  <path d="M7 10l6 0"/>\n  <path d="M10 7l0 6"/>\n  <path d="M21 21l-6 -6"/>\n</svg>\n';

  const IconZoomInArea =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 13v4"/>\n  <path d="M13 15h4"/>\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/>\n  <path d="M22 22l-3 -3"/>\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/>\n  <path d="M3 11v-1"/>\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1"/>\n  <path d="M10 3h1"/>\n  <path d="M15 3h1a2 2 0 0 1 2 2v1"/>\n</svg>\n';

  const IconZoomOut =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>\n  <path d="M7 10l6 0"/>\n  <path d="M21 21l-6 -6"/>\n</svg>\n';

  const IconZoomOutArea =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M13 15h4"/>\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/>\n  <path d="M22 22l-3 -3"/>\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/>\n  <path d="M3 11v-1"/>\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1"/>\n  <path d="M10 3h1"/>\n  <path d="M15 3h1a2 2 0 0 1 2 2v1"/>\n</svg>\n';

  const IconZoomPan =
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>\n  <path d="M17 17l-2.5 -2.5"/>\n  <path d="M10 5l2 -2l2 2"/>\n  <path d="M19 10l2 2l-2 2"/>\n  <path d="M5 10l-2 2l2 2"/>\n  <path d="M10 19l2 2l2 -2"/>\n</svg>\n';

  const listBookmarks = () => {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }
    return getSettingsValue('bookmarks').map(
      (mark, index) => html`
        <div id="Bookmark${index + 1}" class="BookmarkItem">
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${mark.name}</span>
            <br />
            <a class="bookmarkURl" href="${mark.url}" target="_blank">${mark.url}</a>
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(mark.date).toISOString().slice(0, 10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${mark.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a class="" href="${mark.url}" target="_blank">
              <button class="ControlButton open" title="Open Bookmark" type="button">
                ${IconExternalLink}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${mark.url}"
            >
              ${IconTrash}
            </button>
          </span>
        </div>
      `,
    );
  };
  const BookmarkPanel = () => html`
    <div id="BookmarksPanel" class="panel">
      <button id="CloseBookmarks" class="closeButton" title="${getLocaleString('CLOSE')}">
        ${IconX}
      </button>
      <button class="Bookmark simpleButton" title="${getLocaleString('BOOKMARK')}">
        ${IconBookmark} ${IconBookmarkOff}
      </button>
      <h2>${getLocaleString('BOOKMARKS')}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;
  function reloadBookmarks() {
    const list = document.getElementById('BookmarksList');
    if (list) {
      list.innerHTML = listBookmarks().join('');
    }
  }

  function scrollToElement(ele) {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      chapter?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
  }
  function addEvent(ev, fn) {
    return elem => elem.addEventListener(ev, fn);
  }
  function transformScrollToHorizontal(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  function transformScrollToHorizontalReverse(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft -= event.deltaY + event.deltaX;
    event.preventDefault();
  }

  function buttonBookmarksClose() {
    document.querySelector('#BookmarksPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      changeSettingsValue('bookmarks', b => b.filter(el => el.url !== url));
      if (url === window.location.href) {
        document.querySelector('#MangaOnlineViewer')?.classList.remove('bookmarked');
      }
    }
  }
  function buttonEraseBookmarks(event) {
    const target = event.currentTarget.value;
    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: getLocaleString('BOOKMARK_REMOVED'),
      timer: 1e4,
      icon: 'error',
    });
    removeURLBookmark(target);
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
  }
  function buttonBookmarksOpen() {
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
    document.querySelector('#BookmarksPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonBookmark(event) {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    const pagesDistance = [...document.querySelectorAll('.MangaPage')].map(element =>
      Math.abs(element.offsetTop - window.scrollY),
    );
    const currentPage = parseInt(
      event.currentTarget.parentElement?.querySelector('.PageIndex')?.textContent ?? '0',
      10,
    );
    const num = currentPage || pagesDistance.indexOf(Math.min(...pagesDistance)) + 1;
    const mark = {
      name:
        document
          .querySelector('title')
          ?.textContent?.trim()
          .replace(/^\(\d+%\) */, '') ?? '',
      url: window.location.href,
      page: num,
      date: /* @__PURE__ */ new Date().toISOString().slice(0, 10),
    };
    if (isBookmarked(mark.url)) {
      changeSettingsValue('bookmarks', b => b.filter(el => el.url !== mark.url));
      Swal.fire({
        title: getLocaleString('BOOKMARK_REMOVED'),
        timer: 1e4,
        icon: 'error',
      });
    } else {
      changeSettingsValue('bookmarks', b => [...b, mark]);
      Swal.fire({
        title: getLocaleString('BOOKMARK_SAVED'),
        html: getLocaleString('BOOKMARK_SAVED').replace('##NUM##', num.toString()),
        icon: 'success',
      });
    }
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
  }
  function bookmarks$1() {
    document.querySelector('#bookmarks')?.addEventListener('click', buttonBookmarksOpen);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonBookmarksClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonBookmarksClose);
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
    document.querySelectorAll('.Bookmark')?.forEach(addEvent('click', buttonBookmark));
    document.querySelector('.AddBookmark')?.addEventListener('click', buttonBookmark);
  }

  function createStyleElement(id, content) {
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(content));
    return style;
  }
  function appendStyleSheet(id, content) {
    if (!document.querySelector(`#${id}`)) {
      const head = document.head ?? document.querySelector('head');
      head.appendChild(createStyleElement(id, content));
    }
  }
  function removeStyleSheet(id) {
    document.querySelectorAll(`style[id="${id}"]`).forEach(elem => {
      elem.remove();
    });
  }
  function replaceStyleSheet(id, content) {
    removeStyleSheet(id);
    appendStyleSheet(id, content);
  }
  function wrapStyle(id, css) {
    return html`
      <style id="${id}">
        ${css}
      </style>
    `;
  }

  function buttonResetSettings() {
    resetSettings();
    const elem = document.getElementById('MangaOnlineViewer');
    elem?.removeAttribute('locale');
  }
  function changeSettingsScope(event) {
    const scope = event.currentTarget.value;
    toggleLocalSettings(scope === 'true');
  }
  function changeLocale(event) {
    const locale = event.currentTarget.value;
    saveSettingsValue('locale', locale);
    const elem = document.getElementById('MangaOnlineViewer');
    elem?.setAttribute('locale', locale);
  }
  function changeLoadMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('loadMode', mode);
  }
  function checkFitWidthOversize(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize', checked);
    saveSettingsValue('fitWidthIfOversize', checked);
  }
  function checkVerticalSeparator(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('separator', checked);
    saveSettingsValue('verticalSeparator', checked);
  }
  function checkShowThumbnails(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Navigation')?.classList.toggle('disabled', !checked);
    saveSettingsValue('showThumbnails', checked);
    applyZoom();
  }
  function checkEnableComments(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#CommentsButton')?.classList.toggle('disabled', !checked);
    saveSettingsValue('enableComments', checked);
    applyZoom();
  }
  function checkAutoDownload(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('downloadZip', checked);
    if (checked) {
      Swal.fire({
        title: getLocaleString('ATTENTION'),
        text: getLocaleString('AUTO_DOWNLOAD'),
        timer: 1e4,
        icon: 'info',
      });
    }
  }
  function checkLazyLoad(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('lazyLoadImages', checked);
    const start = document.querySelector('.lazyStart');
    start?.classList.toggle('show', getSettingsValue('lazyLoadImages'));
    if (checked) {
      Swal.fire({
        title: getLocaleString('WARNING'),
        html: getLocaleString('LAZY_LOAD'),
        icon: 'warning',
      });
    }
  }
  function changeLazyStart(event) {
    const start = event.currentTarget.value;
    saveSettingsValue('lazyStart', parseInt(start, 10));
  }
  function changePagesPerSecond(event) {
    const timer = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('throttlePageLoad', timer);
    if (timer < 100) {
      Swal.fire({
        title: getLocaleString('SPEED_WARNING'),
        html: getLocaleString('SPEED_WARNING_MESSAGE'),
        icon: 'warning',
      });
    }
  }
  function changeZoomStep(event) {
    const step = event.currentTarget.value;
    saveSettingsValue('zoomStep', parseInt(step, 10));
  }
  function changeMinZoom(event) {
    const min = event.currentTarget.value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    saveSettingsValue('minZoom', parseInt(min, 10));
  }
  function checkHideImageControls(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls', checked);
    saveSettingsValue('hidePageControls', checked);
  }
  function updateHeaderType(mode) {
    const header = document.querySelector('#Header');
    if (!header?.classList.contains(mode)) {
      const menu = document.querySelector('#menu');
      header?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'visible');
      menu?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'hide');
      header?.classList.add(mode);
      menu?.classList.add(mode);
    }
  }
  function changeHeaderType(event) {
    const headerType = event.currentTarget.value;
    updateHeaderType(headerType);
    saveSettingsValue('header', headerType);
  }
  function changeScrollHeight(event) {
    const { value } = event.currentTarget;
    saveSettingsValue('scrollHeight', parseInt(value, 10));
  }
  function options() {
    document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
    document
      .querySelectorAll('#SettingsScope input[type=radio]')
      .forEach(addEvent('change', changeSettingsScope));
    document.querySelector('#locale')?.addEventListener('change', changeLocale);
    document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
    document
      .querySelector('#verticalSeparator')
      ?.addEventListener('change', checkVerticalSeparator);
    document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
    document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
    document.querySelector('#enableComments')?.addEventListener('change', checkEnableComments);
    document.querySelector('#downloadZip')?.addEventListener('change', checkAutoDownload);
    document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);
    document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);
    document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);
    document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);
    document.querySelector('#minZoom')?.addEventListener('input', changeMinZoom);
    document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);
    document.querySelector('#headerType')?.addEventListener('change', changeHeaderType);
    document.querySelector('#scrollHeight')?.addEventListener('change', changeScrollHeight);
  }

  function applyZoom(
    mode = getSettingsValue('zoomMode'),
    value = getSettingsValue('defaultZoom'),
    pages = '.PageContent img',
  ) {
    const globalZoomVal = document.querySelector('#ZoomVal');
    const zoom = document.querySelector('#Zoom');
    if (globalZoomVal) {
      if (zoom && mode === 'percent') {
        globalZoomVal.textContent = `${value}%`;
        zoom.value = value.toString();
      } else {
        globalZoomVal.textContent = mode;
      }
    }
    if (mode === 'height') {
      updateHeaderType('click');
    } else {
      updateHeaderType(getSettingsValue('header'));
    }
    const pg = [...document.querySelectorAll(pages)];
    pg.forEach(img => {
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.removeAttribute('style');
      if (mode === 'width') {
        img.style.width = `${window.innerWidth}px`;
      } else if (mode === 'height') {
        const nextHeight = window.innerHeight + (getSettingsValue('showThumbnails') ? -29 : 0);
        img.style.height = `${nextHeight}px`;
        img.style.minWidth = 'unset';
      } else if (mode === 'percent' && value >= 0 && value !== 100) {
        img.style.width = `${img.naturalWidth * (value / 100)}px`;
      }
    });
  }
  function invalidateImageCache(src, repeat) {
    const url = src.replace(/[?&]forceReload=\d+$/, '');
    const symbol = !url.includes('?') ? '?' : '&';
    return `${url + symbol}forceReload=${repeat}`;
  }
  function getRepeatValue(src) {
    let repeat = 1;
    const cache = src?.match(/forceReload=(\d+)$/);
    if (cache?.at(1)) {
      repeat = parseInt(cache[1], 10) + 1;
    }
    return repeat;
  }
  function reloadImage(img) {
    const src = img.getAttribute('src');
    if (!src) {
      return;
    }
    img.removeAttribute('src');
    if (isBase64ImageUrl(src) || isObjectURL(src)) {
      img.setAttribute('src', src);
    } else {
      img.setAttribute('src', invalidateImageCache(src, getRepeatValue(src)));
    }
  }
  function onImagesDone() {
    logScript('Images Loading Complete');
    if (getSettingsValue('downloadZip')) {
      document.getElementById('download')?.dispatchEvent(new Event('click'));
    }
    document.getElementById('download')?.classList.remove('disabled');
  }
  function updateProgress() {
    const total = document.querySelectorAll('.PageContent .PageImg').length;
    const loaded = document.querySelectorAll('.PageContent .PageImg.imgLoaded').length;
    const percentage = Math.floor((loaded / total) * 100);
    const title = document.querySelector('title');
    if (title) {
      title.innerHTML = html`(${percentage}%) ${document.querySelector('#MangaTitle')?.textContent}`;
    }
    document.querySelectorAll('#Counters i, #NavigationCounters i').forEach(ele => {
      ele.textContent = loaded.toString();
    });
    NProgress.configure({
      showSpinner: false,
    }).set(loaded / total);
    logScript(`Progress: ${percentage}%`);
    if (loaded === total) {
      onImagesDone();
    }
  }
  const applyLastGlobalZoom = (pages = '.PageContent img') => {
    const zoomVal = document.querySelector('#ZoomVal')?.textContent?.trim();
    if (zoomVal?.match(/^\d+%$/)) {
      applyZoom('percent', parseInt(zoomVal, 10), pages);
    } else {
      applyZoom(zoomVal, 100, pages);
    }
  };
  function onImagesSuccess() {
    return instance => {
      instance.images.forEach(image => {
        image.img.classList.add('imgLoaded');
        image.img.classList.remove('imgBroken');
        const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
        const thumb = document.getElementById(thumbId);
        thumb?.classList.remove('imgBroken');
        if (thumb) {
          thumb.setAttribute('src', image.img.getAttribute('src') ?? '');
        }
        applyLastGlobalZoom(`#${image.img.id}`);
        updateProgress();
      });
    };
  }
  function onImagesFail(manga) {
    return instance => {
      instance.images.forEach(image => {
        image.img.classList.add('imgBroken');
        const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
        const thumb = document.getElementById(thumbId);
        thumb?.classList.add('imgBroken');
        const src = image.img.getAttribute('src');
        if (src && getRepeatValue(src) <= getSettingsValue('maxReload')) {
          setTimeout(async () => {
            if (manga.reload) {
              const id = parseInt(`0${/\d+/.exec(image.img.id)}`, 10);
              const alt = await manga.reload(id);
              image.img.setAttribute('src', alt);
            } else {
              reloadImage(image.img);
            }
            if (image.img.parentElement) {
              const imgLoad = imagesLoaded(image.img.parentElement);
              imgLoad.on('done', onImagesSuccess());
              imgLoad.on('fail', onImagesFail(manga));
            }
          }, 2e3);
        }
      });
    };
  }
  function normalizeUrl(url) {
    if (url) {
      let uri = url.trim();
      if (uri.startsWith('//')) {
        uri = `https:${uri}`;
      }
      return uri;
    }
    return '';
  }
  function addImg(manga, index, imageSrc, position) {
    const relativePosition = position - (manga.begin ?? 0);
    let src = normalizeUrl(imageSrc);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        relativePosition <= getSettingsValue('lazyStart')
      ) {
        setTimeout(
          async () => {
            if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
              src = await fetch(src, manga.fetchOptions)
                .then(resp => resp.blob())
                .then(blob => blobUtil.blobToDataURL(blob));
            }
            if (img.parentElement) {
              const imgLoad = imagesLoaded(img.parentElement);
              imgLoad.on('done', onImagesSuccess());
              imgLoad.on('fail', onImagesFail(manga));
            }
            img.setAttribute('src', src);
            logScript('Loaded Image:', index, 'Source:', src);
          },
          (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition,
        );
      } else {
        img.setAttribute('data-src', normalizeUrl(src));
        lazyLoad$1(
          img,
          () => {
            if (img.parentElement) {
              const imgLoad = imagesLoaded(img.parentElement);
              imgLoad.on('done', onImagesSuccess());
              imgLoad.on('fail', onImagesFail(manga));
              logScript('Lazy Image: ', index, ' Source: ', img.getAttribute('src'));
            }
          },
          manga.fetchOptions,
        );
      }
      if (manga.pages === position) removeURLBookmark();
    }
  }
  function findPage(manga, index, pageUrl, lazy) {
    return async () => {
      const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
      const img = document.querySelector(`#PageImg${index}`);
      if (src && img) {
        img.style.width = 'auto';
        if (img.parentElement) {
          const imgLoad = imagesLoaded(img.parentElement);
          imgLoad.on('done', onImagesSuccess());
          imgLoad.on('fail', onImagesFail(manga));
        }
        img.setAttribute('src', src);
        logScript(`${lazy && 'Lazy '}Page: `, index, ' Source: ', img.getAttribute('src'));
      }
    };
  }
  async function addPage(manga, index, pageUrl, position) {
    const relativePosition = position - (manga.begin ?? 0);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        relativePosition <= getSettingsValue('lazyStart')
      ) {
        setTimeout(
          () => {
            findPage(manga, index, pageUrl, false)().catch(logScript);
          },
          (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition,
        );
      } else {
        img.setAttribute(
          'data-src',
          'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        );
        lazyLoad$1(img, findPage(manga, index, pageUrl, true));
      }
      if (manga.pages === position) removeURLBookmark();
    }
  }
  function loadMangaPages(begin, manga) {
    indexList(manga.pages, begin).forEach((index, position) => {
      addPage(manga, index, manga.listPages[index - 1], position).catch(logScript);
    });
  }
  function loadMangaImages(begin, manga) {
    indexList(manga.pages, begin).forEach((index, position) => {
      addImg(manga, index, manga.listImages[index - 1], position);
    });
  }
  function loadManga(manga, begin = 1) {
    logScript('Loading Images');
    logScript(
      `Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`,
    );
    logScript(
      `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
    );
    if (isImagesManga(manga)) {
      logScript('Method: Images:', manga.listImages);
      loadMangaImages(begin, manga);
    } else if (isPagesManga(manga)) {
      logScript('Method: Pages:', manga.listPages);
      loadMangaPages(begin, manga);
    } else if (isBruteforceManga(manga)) {
      logScript('Method: Brute Force');
      manga.bruteForce({
        begin,
        addImg,
        loadImages(list) {
          loadMangaImages(begin, { ...manga, listImages: list });
        },
        loadPages(list, img, lazyAttr) {
          loadMangaPages(begin, {
            ...manga,
            listPages: list,
            img,
            lazyAttr,
          });
        },
        wait: getSettingsValue('throttlePageLoad'),
      });
    } else {
      logScript('No Loading Method Found');
    }
  }

  const diffObj = (changed, original) => {
    const changes = (object, base) =>
      _.transform(
        object,
        (result, value, key) => {
          if (!_.isEqual(value, base[key])) {
            if (_.isArray(value)) {
              result[key] = _.difference(value, base[key]);
            } else if (_.isObject(value) && _.isObject(base[key])) {
              result[key] = changes(value, base[key]);
            } else {
              result[key] = value;
            }
          }
        },
        /* Omit accumulator */
      );
    return changes(changed, original);
  };

  const defaultSettings = {
    enabled: true,
    locale: 'en_US',
    theme: 'darkblue',
    customTheme: '#004526',
    themeShade: 600,
    colorScheme: 'dark',
    fitWidthIfOversize: true,
    showThumbnails: true,
    enableComments: true,
    downloadZip: false,
    verticalSeparator: false,
    throttlePageLoad: 1e3,
    zoomMode: 'percent',
    defaultZoom: 100,
    zoomStep: 25,
    minZoom: 30,
    loadMode: 'wait',
    viewMode: 'WebComic',
    bookmarks: [],
    lazyLoadImages: false,
    lazyStart: 50,
    hidePageControls: false,
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
  const mobileSettings = {
    lazyLoadImages: true,
    fitWidthIfOversize: true,
    showThumbnails: false,
    viewMode: 'WebComic',
    header: 'click',
  };
  function getDefault(global = true) {
    return !isMobile()
      ? { ...defaultSettings, enabled: global, theme: global ? 'darkblue' : 'darkgreen' }
      : _.defaultsDeep(mobileSettings, {
          ...defaultSettings,
          enabled: global,
          theme: global ? 'darkblue' : 'darkgreen',
        });
  }
  let globalSettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
  let localSettings = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
  const isSettingsLocal = () => localSettings?.enabled === true;
  const settings$1 = atom(isSettingsLocal() ? localSettings : globalSettings);
  computed(settings$1, current => locales.find(l => l.ID === current.locale) ?? locales[1]);
  function refresh() {
    if (isSettingsLocal()) {
      settings$1.set({ ...localSettings });
    } else {
      settings$1.set({ ...globalSettings });
    }
  }
  function syncGlobalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault());
    const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Global Settings', diff);
      globalSettings = newSettings;
      refresh();
      applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
    }
  }
  settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');
  function syncLocalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault(false));
    const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Local Settings', diff);
      localSettings = newSettings;
      refresh();
      applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
    }
  }
  settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);
  function getSettingsValue(key) {
    if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
      return localSettings[key];
    }
    return globalSettings[key];
  }
  function setSettingsValue(key, value) {
    if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
      localSettings = { ...localSettings, [key]: value };
    } else {
      globalSettings = { ...globalSettings, [key]: value };
    }
    settings$1.set({ ...settings$1.get(), [key]: value });
  }
  function saveSettingsValue(key, value) {
    setSettingsValue(key, value);
    if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
      const alter = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
      setLocalSettings(diffObj(alter, getDefault(false)));
    } else {
      const alter = {
        ..._.defaultsDeep(getGlobalSettings(getDefault()), getDefault()),
        [key]: value,
      };
      setGlobalSettings(diffObj(alter, getDefault()));
    }
  }
  function changeSettingsValue(key, fn) {
    const newValue = fn(
      isSettingsLocal() && !['locale', 'bookmarks'].includes(key)
        ? localSettings[key]
        : globalSettings[key],
    );
    saveSettingsValue(key, newValue);
    settings$1.set({ ...settings$1.get(), [key]: newValue });
  }
  function getLocaleString(name) {
    const locale2 = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
    if (isKey(locale2, name)) return locale2?.[name] ?? locales[1]?.[name];
    return `##MISSING_STRING_${name}##`;
  }
  function resetSettings() {
    if (isSettingsLocal()) {
      removeValueGM(window.location.hostname);
      localSettings = getDefault(false);
    } else {
      removeValueGM('settings');
      globalSettings = getDefault();
    }
    logScript('Settings Reset');
    refresh();
  }
  function toggleLocalSettings(activate = false) {
    localSettings.enabled = activate;
    setLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
    refresh();
    return isSettingsLocal();
  }
  function isBookmarked(url = window.location.href) {
    return globalSettings.bookmarks.find(el => el.url === url)?.page;
  }
  function showSettings(key = null) {
    logScriptVerbose(
      'Current Settings (Local:',
      isSettingsLocal(),
      ') ',
      key ? settings$1.get()[key] : settings$1.get(),
      '\nGlobal Settings',
      key ? globalSettings[key] : globalSettings,
      '\nLocal Settings',
      key ? localSettings[key] : localSettings,
    );
  }
  giveToWindow('MOVSettings', showSettings);

  const colors = {
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
  const darkest = 10;
  const lightest = 95;
  function setLightness(hsl, lightness) {
    hsl.l = lightness;
    return tinycolor(hsl).toHexString();
  }
  function getTextColor(hex) {
    const color = tinycolor(hex);
    const hsl = color.toHsl();
    return setLightness(hsl, color.isDark() ? lightest : darkest);
  }

  function svgToUrl(str) {
    const cleaned = str.replace(/[\t\n\r]/gim, '').replace(/\s\s+/g, ' ');
    const encoded = encodeURIComponent(cleaned).replace(/\(/g, '%28').replace(/\)/g, '%29');
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
  }
  Object.values(colors).map(i => i['900']);

  const localhost = {
    url: /(file:\/\/\/.+(index)?.html)/,
    language: [Language.RAW],
    category: Category.MANGA,
  };

  function removeAllEventListeners(element) {
    if (!element || !element.parentNode) {
      return element;
    }
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    return newElement;
  }
  const removeAttributes = element => {
    element.getAttributeNames().forEach(attr => element?.removeAttribute(attr));
  };
  const cleanUpElement = (...elements) => {
    elements?.forEach(removeAttributes);
    elements?.forEach(removeAllEventListeners);
  };

  let scrollActive = false;
  function scroll() {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
      chapter?.scrollBy({
        top: 0,
        left: getSettingsValue('scrollHeight') * scrollDirection,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: getSettingsValue('scrollHeight'),
        left: 0,
        behavior: 'smooth',
      });
    }
    if (document.querySelector('#Header')?.classList.contains('headroom-end')) {
      scrollActive = false;
      document.querySelector('#ScrollControl')?.classList.remove('running');
      logScript('Finished auto scroll');
    }
    if (scrollActive) {
      requestAnimationFrame(scroll);
    }
  }
  function toggleAutoScroll() {
    const control = document.querySelector('#AutoScroll');
    if (scrollActive) {
      scrollActive = false;
      control?.classList.remove('running');
      logScript('Stopped auto scroll');
    } else {
      scrollActive = true;
      requestAnimationFrame(scroll);
      control?.classList.add('running');
      logScript('Start auto scroll');
    }
  }
  let resume = false;
  const debounceAutoScroll = _.debounce(() => {
    toggleAutoScroll();
    resume = false;
  }, 500);
  function manualScroll() {
    if (!resume && scrollActive) {
      toggleAutoScroll();
      resume = true;
    }
    if (resume && !scrollActive) {
      debounceAutoScroll();
    }
  }
  function autoscroll() {
    window.addEventListener('wheel', _.throttle(manualScroll, 500));
    document.querySelector('#AutoScroll')?.addEventListener('click', toggleAutoScroll);
  }

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

  var dist = {};

  var constants = {};

  var hasRequiredConstants;

  function requireConstants() {
    if (hasRequiredConstants) return constants;
    hasRequiredConstants = 1;
    Object.defineProperty(constants, '__esModule', { value: true });
    constants.BLANK_URL =
      constants.relativeFirstCharacters =
      constants.whitespaceEscapeCharsRegex =
      constants.urlSchemeRegex =
      constants.ctrlCharactersRegex =
      constants.htmlCtrlEntityRegex =
      constants.htmlEntitiesRegex =
      constants.invalidProtocolRegex =
        void 0;
    constants.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    constants.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    constants.htmlCtrlEntityRegex = /&(newline|tab);/gi;
    constants.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    constants.urlSchemeRegex = /^.+(:|&colon;)/gim;
    constants.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
    constants.relativeFirstCharacters = ['.', '/'];
    constants.BLANK_URL = 'about:blank';
    return constants;
  }

  var hasRequiredDist;

  function requireDist() {
    if (hasRequiredDist) return dist;
    hasRequiredDist = 1;
    Object.defineProperty(dist, '__esModule', { value: true });
    dist.sanitizeUrl = void 0;
    var constants_1 = requireConstants();
    function isRelativeUrlWithoutProtocol(url) {
      return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function decodeHtmlCharacters(str) {
      var removedNullByte = str.replace(constants_1.ctrlCharactersRegex, '');
      return removedNullByte.replace(constants_1.htmlEntitiesRegex, function (match, dec) {
        return String.fromCharCode(dec);
      });
    }
    function isValidUrl(url) {
      return URL.canParse(url);
    }
    function decodeURI(uri) {
      try {
        return decodeURIComponent(uri);
      } catch (e) {
        // Ignoring error
        // It is possible that the URI contains a `%` not associated
        // with URI/URL-encoding.
        return uri;
      }
    }
    function sanitizeUrl(url) {
      if (!url) {
        return constants_1.BLANK_URL;
      }
      var charsToDecode;
      var decodedUrl = decodeURI(url.trim());
      do {
        decodedUrl = decodeHtmlCharacters(decodedUrl)
          .replace(constants_1.htmlCtrlEntityRegex, '')
          .replace(constants_1.ctrlCharactersRegex, '')
          .replace(constants_1.whitespaceEscapeCharsRegex, '')
          .trim();
        decodedUrl = decodeURI(decodedUrl);
        charsToDecode =
          decodedUrl.match(constants_1.ctrlCharactersRegex) ||
          decodedUrl.match(constants_1.htmlEntitiesRegex) ||
          decodedUrl.match(constants_1.htmlCtrlEntityRegex) ||
          decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);
      } while (charsToDecode && charsToDecode.length > 0);
      var sanitizedUrl = decodedUrl;
      if (!sanitizedUrl) {
        return constants_1.BLANK_URL;
      }
      if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
      }
      // Remove any leading whitespace before checking the URL scheme
      var trimmedUrl = sanitizedUrl.trimStart();
      var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return sanitizedUrl;
      }
      var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();
      if (constants_1.invalidProtocolRegex.test(urlScheme)) {
        return constants_1.BLANK_URL;
      }
      var backSanitized = trimmedUrl.replace(/\\/g, '/');
      // Handle special cases for mailto: and custom deep-link protocols
      if (urlScheme === 'mailto:' || urlScheme.includes('://')) {
        return backSanitized;
      }
      // For http and https URLs, perform additional validation
      if (urlScheme === 'http:' || urlScheme === 'https:') {
        if (!isValidUrl(backSanitized)) {
          return constants_1.BLANK_URL;
        }
        var url_1 = new URL(backSanitized);
        url_1.protocol = url_1.protocol.toLowerCase();
        url_1.hostname = url_1.hostname.toLowerCase();
        return url_1.toString();
      }
      return backSanitized;
    }
    dist.sanitizeUrl = sanitizeUrl;
    return dist;
  }

  var distExports = requireDist();

  var FileSaver_min$1 = { exports: {} };

  var FileSaver_min = FileSaver_min$1.exports;

  var hasRequiredFileSaver_min;

  function requireFileSaver_min() {
    if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
    hasRequiredFileSaver_min = 1;
    (function (module, exports) {
      (function (a, b) {
        b();
      })(FileSaver_min, function () {
        function b(a, b) {
          return (
            'undefined' == typeof b
              ? (b = { autoBom: false })
              : 'object' != typeof b &&
                (console.warn('Deprecated: Expected third argument to be a object'),
                (b = { autoBom: !b })),
            b.autoBom &&
            /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
              a.type,
            )
              ? new Blob(['\uFEFF', a], { type: a.type })
              : a
          );
        }
        function c(a, b, c) {
          var d = new XMLHttpRequest();
          (d.open('GET', a),
            (d.responseType = 'blob'),
            (d.onload = function () {
              g(d.response, b, c);
            }),
            (d.onerror = function () {
              console.error('could not download file');
            }),
            d.send());
        }
        function d(a) {
          var b = new XMLHttpRequest();
          b.open('HEAD', a, false);
          try {
            b.send();
          } catch (a) {}
          return 200 <= b.status && 299 >= b.status;
        }
        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent('click'));
          } catch (c) {
            var b = document.createEvent('MouseEvents');
            (b.initMouseEvent(
              'click',
              true,
              true,
              window,
              0,
              0,
              0,
              80,
              20,
              false,
              false,
              false,
              false,
              0,
              null,
            ),
              a.dispatchEvent(b));
          }
        }
        var f =
            'object' == typeof window && window.window === window
              ? window
              : 'object' == typeof self && self.self === self
                ? self
                : 'object' == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal
                  ? commonjsGlobal
                  : void 0,
          a =
            f.navigator &&
            /Macintosh/.test(navigator.userAgent) &&
            /AppleWebKit/.test(navigator.userAgent) &&
            !/Safari/.test(navigator.userAgent),
          g =
            f.saveAs ||
            ('object' != typeof window || window !== f
              ? function () {}
              : 'download' in HTMLAnchorElement.prototype && !a
                ? function (b, g, h) {
                    var i = f.URL || f.webkitURL,
                      j = document.createElement('a');
                    ((g = g || b.name || 'download'),
                      (j.download = g),
                      (j.rel = 'noopener'),
                      'string' == typeof b
                        ? ((j.href = b),
                          j.origin === location.origin
                            ? e(j)
                            : d(j.href)
                              ? c(b, g, h)
                              : e(j, (j.target = '_blank')))
                        : ((j.href = i.createObjectURL(b)),
                          setTimeout(function () {
                            i.revokeObjectURL(j.href);
                          }, 4e4),
                          setTimeout(function () {
                            e(j);
                          }, 0)));
                  }
                : 'msSaveOrOpenBlob' in navigator
                  ? function (f, g, h) {
                      if (((g = g || f.name || 'download'), 'string' != typeof f))
                        navigator.msSaveOrOpenBlob(b(f, h), g);
                      else if (d(f)) c(f, g, h);
                      else {
                        var i = document.createElement('a');
                        ((i.href = f),
                          (i.target = '_blank'),
                          setTimeout(function () {
                            e(i);
                          }));
                      }
                    }
                  : function (b, d, e, g) {
                      if (
                        ((g = g || open('', '_blank')),
                        g && (g.document.title = g.document.body.innerText = 'downloading...'),
                        'string' == typeof b)
                      )
                        return c(b, d, e);
                      var h = 'application/octet-stream' === b.type,
                        i = /constructor/i.test(f.HTMLElement) || f.safari,
                        j = /CriOS\/[\d]+/.test(navigator.userAgent);
                      if ((j || (h && i) || a) && 'undefined' != typeof FileReader) {
                        var k = new FileReader();
                        ((k.onloadend = function () {
                          var a = k.result;
                          ((a = j ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                            g ? (g.location.href = a) : (location = a),
                            (g = null));
                        }),
                          k.readAsDataURL(b));
                      } else {
                        var l = f.URL || f.webkitURL,
                          m = l.createObjectURL(b);
                        (g ? (g.location = m) : (location.href = m),
                          (g = null),
                          setTimeout(function () {
                            l.revokeObjectURL(m);
                          }, 4e4));
                      }
                    });
        ((f.saveAs = g.saveAs = g), (module.exports = g));
      });
    })(FileSaver_min$1);
    return FileSaver_min$1.exports;
  }

  var FileSaver_minExports = requireFileSaver_min();

  let zip;
  const getFilename = (name, index, total, ext) =>
    `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace(
      'jpeg',
      'jpg',
    )}`;
  async function getImage(src) {
    return new Promise((resolve, reject) => {
      logScript(`Getting Image data: ${src}`);
      GM_xmlhttpRequest({
        method: 'GET',
        url: src,
        headers: { referer: window.location.host, origin: window.location.host },
        responseType: 'blob',
        onload(response) {
          if (response.status !== 200) {
            reject(response);
          }
          resolve(response);
        },
      });
    });
  }
  async function getImageData(img, index, array) {
    const src = img.getAttribute('src') ?? img.getAttribute('data-src') ?? '';
    if (isObjectURL(src)) {
      throw new Error('Image source unusable');
    }
    if (isBase64ImageUrl(src)) {
      return Promise.resolve({
        name: getFilename('Page-', index, array.length, getExtensionBase64(src)),
        data: getDataFromBase64(src) ?? '',
      });
    }
    return new Promise(resolve => {
      getImage(src)
        .then(res => {
          resolve({
            name: getFilename('Page-', index, array.length, getExtension(src)),
            data: res.response,
          });
        })
        .catch(logScriptC('Image not Available'));
    });
  }
  function addZip(img) {
    logScript(`${img.name} Added to Zip from Base64 Image`);
    zip.file(img.name, img.data, {
      base64: true,
      createFolders: true,
      compression: 'DEFLATE',
    });
  }
  async function generateZip() {
    zip = new JSZip();
    const images = [...document.querySelectorAll('.PageImg')];
    Promise.all(images.map(getImageData))
      .then(data => {
        data.forEach(addZip);
        logScript('Generating Zip');
        zip
          .generateAsync(
            {
              type: 'blob',
            },
            // LogScript, progress
          )
          .then(content => {
            logScript('Download Ready');
            const zipName = `${document.querySelector('#MangaTitle')?.textContent?.trim()}.zip`;
            FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
            document.getElementById('download')?.classList.remove('loading');
          })
          .catch(logScript);
      })
      .catch(msg => logScript("One or more images couldn't be Downloaded", msg));
  }

  function buttonStartDownload(event) {
    const button = event.currentTarget;
    if (button.classList.contains('loading')) {
      return;
    }
    logScript('Downloading Chapter');
    button.classList.add('loading');
    generateZip().catch(err => logScript('Error downloading chapter', err));
  }
  function buttonGlobalHideImageControls() {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
  }
  function buttonRedirectURL(event) {
    const element = event.target;
    const url = element.getAttribute('value') ?? element.getAttribute('href');
    if (event.button !== 1 && !event.ctrlKey) {
      if (url && url !== '#') {
        window.location.href = distExports.sanitizeUrl(url);
      } else if (element.id === 'series') {
        window.history.back();
      }
    }
  }
  function buttonCommentsOpen() {
    document.querySelector('#CommentsPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonCommentsClose() {
    document.querySelector('#CommentsPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function changeCommentsColor() {
    const elem = document.querySelector('#CommentsArea');
    elem?.classList.toggle('light');
    elem?.classList.toggle('dark');
  }
  function globals() {
    document.querySelector('#download')?.addEventListener('click', buttonStartDownload);
    document
      .querySelector('#pageControls')
      ?.addEventListener('click', buttonGlobalHideImageControls);
    document.querySelector('#next')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#prev')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#series')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#CommentsButton')?.addEventListener('click', buttonCommentsOpen);
    document.querySelector('#CommentsColorScheme')?.addEventListener('click', changeCommentsColor);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonCommentsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonCommentsClose);
  }

  let prevOffset = 0;
  let showEnd = 0;
  const setScrollDirection = classSuffix => {
    const header = document.querySelector('#Header');
    if (!header) return;
    header.classList.remove('headroom-end', 'headroom-hide', 'headroom-show', 'headroom-top');
    if (classSuffix) {
      header.classList.add(`headroom-${classSuffix}`);
    }
  };
  function toggleScrollDirection() {
    const { scrollY } = window;
    if (
      showEnd &&
      getSettingsValue('zoomMode') !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.scrollHeight
    ) {
      setScrollDirection('end');
    } else if (scrollY > prevOffset && scrollY > 50) {
      setScrollDirection('hide');
    } else if (scrollY < prevOffset && scrollY > 50) {
      setScrollDirection('show');
    } else if (scrollY <= 100) {
      setScrollDirection('top');
    } else {
      setScrollDirection('');
    }
    prevOffset = scrollY;
  }
  function headroom(pixelsToShowEnd = 0) {
    showEnd = pixelsToShowEnd;
    window.addEventListener('scroll', _.debounce(toggleScrollDirection, 50));
  }

  function buttonReloadPage(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    reloadImage(img);
  }
  function buttonHidePage(event) {
    const img = event.currentTarget.parentElement?.parentElement;
    img.classList.toggle('hide');
  }
  function individual() {
    document.querySelectorAll('.Reload')?.forEach(addEvent('click', buttonReloadPage));
    document.querySelectorAll('.Hide')?.forEach(addEvent('click', buttonHidePage));
  }

  const doClick = selector => document.querySelector(selector)?.dispatchEvent(new Event('click'));
  function doScrolling(sign) {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
      chapter.scrollBy({
        left: 0.8 * window.innerWidth * sign * scrollDirection,
        behavior: 'smooth',
      });
    } else if (getSettingsValue('zoomMode') === 'height') {
      const pages = [...document.querySelectorAll('.MangaPage')];
      const distance = pages.map(element => Math.abs(element.offsetTop - window.scrollY));
      const currentPage = _.indexOf(distance, _.min(distance));
      const target = currentPage + sign;
      const header = document.querySelector('#Header');
      if (header && target < 0) {
        scrollToElement(header);
      } else if (header && target >= pages.length) {
        header.classList.add('headroom-end');
      } else {
        logScript(`Current array page ${currentPage},`, `Scrolling to page ${target}`);
        scrollToElement(pages.at(target));
      }
    } else {
      window.scrollBy({
        top: 0.8 * window.innerHeight * sign,
        behavior: 'smooth',
      });
    }
  }
  const actions = {
    SCROLL_UP() {
      doScrolling(-1);
    },
    SCROLL_DOWN() {
      doScrolling(1);
    },
    NEXT_CHAPTER() {
      doClick('#next');
    },
    PREVIOUS_CHAPTER() {
      doClick('#prev');
    },
    ENLARGE() {
      doClick('#enlarge');
    },
    REDUCE() {
      doClick('#reduce');
    },
    RESTORE() {
      doClick('#restore');
    },
    FIT_WIDTH() {
      doClick('#fitWidth');
    },
    FIT_HEIGHT() {
      doClick('#fitHeight');
    },
    SETTINGS() {
      doClick('#settings');
    },
    VIEW_MODE_WEBCOMIC() {
      doClick('#webComic');
    },
    VIEW_MODE_VERTICAL() {
      doClick('#verticalMode');
    },
    VIEW_MODE_LEFT() {
      doClick('#rtlMode');
    },
    VIEW_MODE_RIGHT() {
      doClick('#ltrMode');
    },
    SCROLL_START() {
      doClick('#AutoScroll');
    },
  };
  function keybindings$1() {
    document.onkeydown = null;
    document.onkeyup = null;
    window.onkeydown = null;
    window.onkeyup = null;
    window.onload = null;
    document.body.onload = null;
    hotkeys.unbind();
    Object.keys(getSettingsValue('keybinds')).forEach(key => {
      hotkeys(
        getSettingsValue('keybinds')[key]?.join(',') ?? '',
        _.throttle(event => {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          actions[key]();
        }, 100),
      );
    });
  }

  function selectGoToPage(event) {
    const target = event.currentTarget.value;
    applyZoom();
    scrollToElement(document.querySelector(`#Page${target}`));
  }
  function clickThumbnail(event) {
    applyZoom();
    scrollToElement(
      document.querySelector(
        `#Page${event.currentTarget.querySelector('.ThumbnailIndex')?.textContent}`,
      ),
    );
  }
  function navigation() {
    document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
    document.querySelectorAll('.Thumbnail')?.forEach(addEvent('click', clickThumbnail));
    document.querySelector('#Thumbnails')?.addEventListener('wheel', transformScrollToHorizontal);
  }

  const keybindList = () => {
    const keybinds = getSettingsValue('keybinds');
    return Object.keys(keybinds).map(kb => {
      const keys = keybinds[kb]?.length
        ? keybinds[kb]?.map(key => html`<kbd class="dark">${key}</kbd>`).join(' / ')
        : '';
      return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
    });
  };
  const keybindEditor = () =>
    Object.keys(getSettingsValue('keybinds'))
      .map(
        kb =>
          html`<label for="${kb}">${getLocaleString(kb)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${kb}"
              name="${kb}"
              value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
            />`,
      )
      .concat(html` <div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);
  const KeybindingsPanel = () => html`
    <div id="KeybindingsPanel" class="panel">
      <h2>${getLocaleString('KEYBINDINGS')}</h2>
      <button id="CloseKeybindings" class="closeButton" title="${getLocaleString('CLOSE')}">
        ${IconX}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${getLocaleString('EDIT_KEYBINDS')}"
        >
          ${IconPencil} ${getLocaleString('BUTTON_EDIT')}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${getLocaleString('SAVE_KEYBINDS')}"
        >
          ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
        </button>
      </div>
      <div id="KeybindingsList">${keybindList().join('\n')}</div>
    </div>
  `;

  function toggleFunction(selector, classname, open, close) {
    return () => {
      const isOpen = document.querySelector(selector)?.className.includes(classname);
      if (isOpen) {
        close();
      } else {
        open();
      }
    };
  }
  function buttonHeaderClick() {
    const header = document.querySelector('#Header');
    if (header?.classList.contains('click')) {
      header?.classList.toggle('visible');
    }
  }
  function isMouseInsideRegion(event, headerWidth, headerHeight) {
    return (
      event.clientX >= 0 &&
      event.clientX <= headerWidth &&
      event.clientY >= 0 &&
      event.clientY <= headerHeight
    );
  }
  function headerHover(event) {
    const header = document.querySelector('#Header');
    if (header?.classList.contains('hover')) {
      if (isMouseInsideRegion(event, header.clientWidth, header.clientHeight)) {
        document.querySelector('#menu')?.classList.add('hide');
        header?.classList.add('visible');
      } else {
        document.querySelector('#menu')?.classList.remove('hide');
        header?.classList.remove('visible');
      }
    }
  }
  function buttonSettingsOpen() {
    document.querySelector('#SettingsPanel')?.classList.add('visible');
    document.querySelector('#Navigation')?.classList.add('visible');
    document.querySelector('#Header')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonSettingsClose() {
    document.querySelector('#SettingsPanel')?.classList.remove('visible');
    document.querySelector('#Navigation')?.classList.remove('visible');
    document.querySelector('#Header')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function buttonKeybindingsOpen() {
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    document.querySelector('#KeybindingsPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonKeybindingsClose() {
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    document.querySelector('#KeybindingsPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function saveKeybindings() {
    const newkeybinds = getSettingsValue('keybinds');
    Object.keys(getSettingsValue('keybinds')).forEach(kb => {
      const keys = document
        .querySelector(`#${kb}`)
        ?.value.split(',')
        ?.map(value => value.trim());
      newkeybinds[kb] = isNothing(keys) ? void 0 : keys;
    });
    saveSettingsValue('keybinds', newkeybinds);
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    keybindings$1();
  }
  function editKeybindings() {
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindEditor().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
    document.querySelector('#EditKeybindings')?.classList.add('hidden');
  }
  function panels() {
    document.querySelector('#menu')?.addEventListener('click', buttonHeaderClick);
    document.addEventListener('mousemove', _.throttle(headerHover, 300));
    document
      .querySelector('#settings')
      ?.addEventListener(
        'click',
        toggleFunction('#SettingsPanel', 'visible', buttonSettingsOpen, buttonSettingsClose),
      );
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonSettingsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonSettingsClose);
    document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindingsOpen);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonKeybindingsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonKeybindingsClose);
    document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
    document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
  }

  function buttonZoomIn(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
    applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
  }
  function buttonZoomOut(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
    applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
  }
  function buttonRestoreZoom() {
    document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
  }
  function buttonZoomWidth(event) {
    const page = event.currentTarget.parentElement?.parentElement;
    const img = page?.querySelector('.PageImg');
    applyZoom('width', 0, `#${img.getAttribute('id')}`);
    page?.classList.toggle('DoublePage');
  }
  function buttonZoomHeight(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    applyZoom('height', 0, `#${img.getAttribute('id')}`);
  }
  function size() {
    document.querySelectorAll('.ZoomIn')?.forEach(addEvent('click', buttonZoomIn));
    document.querySelectorAll('.ZoomOut')?.forEach(addEvent('click', buttonZoomOut));
    document.querySelectorAll('.ZoomRestore')?.forEach(addEvent('click', buttonRestoreZoom));
    document.querySelectorAll('.ZoomWidth')?.forEach(addEvent('click', buttonZoomWidth));
    document.querySelectorAll('.ZoomHeight')?.forEach(addEvent('click', buttonZoomHeight));
  }

  function generateThemeCSS(name, primary, text) {
    return css`
      .ThemeRadio.${name}, [data-theme='${name}'] {
        --theme-primary-color: ${primary};
        --theme-primary-text-color: ${text};
      }
    `;
  }
  function getNormalThemeCSS(theme) {
    return generateThemeCSS(
      theme.name,
      theme[getSettingsValue('themeShade')],
      getSettingsValue('themeShade') < 500 ? theme['900'] : theme['50'],
    );
  }
  function getCustomThemeCSS(hex) {
    return generateThemeCSS('custom', hex, getTextColor(hex));
  }
  function addTheme(theme) {
    return wrapStyle(theme.name, getNormalThemeCSS(theme));
  }
  const themes = () => Object.values(colors);
  function refreshThemes() {
    themes().forEach(theme => {
      replaceStyleSheet(theme.name, getNormalThemeCSS(theme));
    });
    replaceStyleSheet('custom', getCustomThemeCSS(getSettingsValue('customTheme')));
  }
  const themesCSS =
    themes().map(addTheme).join('') +
    wrapStyle('custom', getCustomThemeCSS(getSettingsValue('customTheme')));

  function changeColorScheme() {
    const isDark = getSettingsValue('colorScheme') === 'dark';
    saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
    document.documentElement.classList.remove(isDark ? 'dark' : 'light');
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
  }
  function buttonSelectTheme(event) {
    const target = event.currentTarget;
    saveSettingsValue('theme', target.title);
  }
  function changeCustomTheme(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('customTheme', target);
  }
  function changeThemeShade(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('themeShade', target);
    refreshThemes();
  }
  function theming() {
    document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);
    document.querySelectorAll('.ThemeRadio').forEach(addEvent('click', buttonSelectTheme));
    document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
    document.querySelector('#ThemeShade')?.addEventListener('input', changeThemeShade);
  }

  function setupFluid(mode) {
    const chapter = document.querySelector('#Chapter');
    document.querySelector('#Header')?.classList.remove('visible');
    document.querySelector('#menu')?.classList.remove('hide');
    applyZoom('height');
    scrollToElement(chapter);
    chapter?.addEventListener(
      'wheel',
      mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
    );
  }
  function updateViewMode(mode) {
    return () => {
      const chapter = document.querySelector('#Chapter');
      chapter?.classList.remove('Vertical', 'WebComic', 'FluidLTR', 'FluidRTL');
      chapter?.classList.add(mode);
      chapter?.removeEventListener('wheel', transformScrollToHorizontal);
      chapter?.removeEventListener('wheel', transformScrollToHorizontalReverse);
      if (mode === 'FluidLTR' || mode === 'FluidRTL') {
        setupFluid(mode);
      } else {
        const headerClass = getSettingsValue('header');
        const header = document.querySelector('#Header');
        if (header) header.className = headerClass;
        const menu = document.querySelector('#menu');
        if (menu) menu.className = headerClass;
        applyZoom();
      }
    };
  }
  function changeViewMode(event) {
    const mode = event.currentTarget.value;
    updateViewMode(mode)();
  }
  function viewMode$1() {
    document.querySelector('#viewMode')?.addEventListener('change', changeViewMode);
    document.querySelector('#webComic')?.addEventListener('click', updateViewMode('WebComic'));
    document.querySelector('#ltrMode')?.addEventListener('click', updateViewMode('FluidLTR'));
    document.querySelector('#rtlMode')?.addEventListener('click', updateViewMode('FluidRTL'));
    document.querySelector('#verticalMode')?.addEventListener('click', updateViewMode('Vertical'));
    if (
      getSettingsValue('viewMode') === 'FluidLTR' ||
      getSettingsValue('viewMode') === 'FluidRTL'
    ) {
      setupFluid(getSettingsValue('viewMode'));
    }
  }

  function changeGlobalZoom(mode, value = getSettingsValue('defaultZoom')) {
    return () => {
      applyZoom(mode, value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const globalZoom = document.querySelector('#Zoom');
      if (globalZoom) {
        const ratio = parseInt(globalZoom.value, 10) + sign * getSettingsValue('zoomStep');
        globalZoom.value = ratio.toString();
        globalZoom.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('zoomMode', target);
    applyZoom(target);
    const percent = document.querySelector('.DefaultZoom');
    percent?.classList.toggle('show', target === 'percent');
  }
  function changeDefaultZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('defaultZoom', target);
    applyZoom('percent', target);
  }
  function changeZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    applyZoom('percent', target);
    const zoomVal = document.querySelector('#ZoomVal');
    if (zoomVal) zoomVal.textContent = `${target}%`;
  }
  function zoom() {
    document.querySelector('#DefaultZoomMode')?.addEventListener('change', changeDefaultZoomMode);
    document.querySelector('#DefaultZoom')?.addEventListener('input', changeDefaultZoom);
    document.querySelector('#Zoom')?.addEventListener('input', changeZoom);
    document.querySelector('#enlarge')?.addEventListener('click', changeZoomByStep());
    document.querySelector('#reduce')?.addEventListener('click', changeZoomByStep(-1));
    document.querySelector('#restore')?.addEventListener('click', changeGlobalZoom('percent'));
    document.querySelector('#fitWidth')?.addEventListener('click', changeGlobalZoom('width'));
    document.querySelector('#fitHeight')?.addEventListener('click', changeGlobalZoom('height'));
  }

  let setupEvents = false;
  function events() {
    if (!setupEvents) {
      headroom(100);
      keybindings$1();
      individual();
      size();
      window.addEventListener('resize', () => {
        const reader = document.querySelector('#MangaOnlineViewer');
        reader?.classList.remove('mobile', 'tablet', 'desktop');
        reader?.classList.add(getDevice());
      });
      setupEvents = true;
    }
    bookmarks$1();
    globals();
    navigation();
    options();
    panels();
    theming();
    viewMode$1();
    zoom();
    autoscroll();
  }

  const commentsPanel = () => html`
    <div id="CommentsPanel" class="panel">
      <button id="CloseComments" class="closeButton" title="${getLocaleString('CLOSE')}">
        ${IconX}
      </button>
      <h2>${getLocaleString('COMMENTS')}</h2>
      <div id="CommentsArea" class="${getSettingsValue('colorScheme')}"></div>
      <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        ${IconSun} ${IconMoon}
      </button>
    </div>
  `;

  const listOptions = (times, begin) =>
    indexList(times, begin).map(index => html` <option value="${index}">${index}</option>`);
  const Header = manga => html`
    <header id="Header" class="${getSettingsValue('header')} headroom-top">
      <aside id="GlobalFunctions">
        <span>
          <button id="enlarge" title="${getLocaleString('ENLARGE')}" class="ControlButton">
            ${IconZoomInArea}
          </button>
          <button id="restore" title="${getLocaleString('RESTORE')}" class="ControlButton">
            ${IconZoomPan}
          </button>
          <button id="reduce" title="${getLocaleString('REDUCE')}" class="ControlButton">
            ${IconZoomOutArea}
          </button>
          <button id="fitWidth" title="${getLocaleString('FIT_WIDTH')}" class="ControlButton">
            ${IconArrowAutofitWidth}
          </button>
          <button id="fitHeight" title="${getLocaleString('FIT_HEIGHT')}" class="ControlButton">
            ${IconArrowAutofitHeight}
          </button>
          <button id="keybindings" title="${getLocaleString('KEYBINDINGS')}" class="ControlButton">
            ${IconKeyboard}
          </button>
          <button
            id="AutoScroll"
            title="${getLocaleString('SCROLL_START')}"
            class="ControlButton phones"
          >
            ${IconPlayerPlay} ${IconPlayerPause}
          </button>
        </span>
        <span>
          <button id="ltrMode" title="${getLocaleString('VIEW_MODE_LEFT')}" class="ControlButton">
            ${IconArrowAutofitRight}
          </button>
          <button
            id="verticalMode"
            title="${getLocaleString('VIEW_MODE_VERTICAL')}"
            class="ControlButton tablets"
          >
            ${IconArrowAutofitDown}
          </button>
          <button
            id="webComic"
            title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
            class="ControlButton tablets"
          >
            ${IconSpacingVertical}
          </button>
          <button id="rtlMode" title="${getLocaleString('VIEW_MODE_RIGHT')}" class="ControlButton">
            ${IconArrowAutofitLeft}
          </button>
          <button
            id="pageControls"
            title="${getLocaleString('TOGGLE_CONTROLS')}"
            class="ControlButton tablets"
          >
            ${IconListNumbers}
          </button>
          <button
            id="bookmarks"
            title="${getLocaleString('BOOKMARKS')}"
            class="ControlButton tablets"
          >
            ${IconBookmarks}
          </button>
          <button
            id="settings"
            title="${getLocaleString('SETTINGS')}"
            class="ControlButton tablets phones"
          >
            ${IconSettings}
          </button>
        </span>
        <span id="ZoomSlider">
          <output id="ZoomVal" class="RangeValue" for="Zoom">
            ${getSettingsValue('zoomMode') === 'percent'
              ? `${getSettingsValue('defaultZoom')}%`
              : getSettingsValue('zoomMode')}
          </output>
          <input
            type="range"
            value="${getSettingsValue('defaultZoom')}"
            name="Zoom"
            id="Zoom"
            min="1"
            max="200"
          />
        </span>
      </aside>
      <div class="ViewerTitle">
        <h1 id="MangaTitle">${manga.title}</h1>
        <a id="series" href="${manga.series ?? ''}">
          (${getLocaleString('RETURN_CHAPTER_LIST')})
        </a>
      </div>
      <nav id="ChapterNavigation">
        <div id="Counters" class="ControlLabel">
          ${getLocaleString('PAGES_LOADED')}:
          <i>0</i> /
          <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
          <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
          <select id="gotoPage">
            <option selected>#</option>
            ${listOptions(manga.pages, manga.begin ?? 0).join('')}
          </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
          <span>
            <button
              id="CommentsButton"
              class="NavigationControlButton ControlButton ${manga.comments ? '' : 'disabled'}"
              title="${getLocaleString('DISPLAY_COMMENTS')}"
            >
              ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
            </button>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${getLocaleString('DOWNLOAD_ZIP')}"
            >
              ${IconFileDownload} ${IconLoader2} ${getLocaleString('BUTTON_DOWNLOAD')}
            </button></span
          >
          <span>
            <a
              id="prev"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${manga.prev ?? ''}"
              title="${getLocaleString('PREVIOUS_CHAPTER')}"
            >
              ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${manga.next ?? ''}"
              title="${getLocaleString('NEXT_CHAPTER')}"
            >
              ${getLocaleString('BUTTON_NEXT')} ${IconArrowBigRight}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `;

  const listPages = (times, begin) =>
    indexList(times, begin).map(
      index => html`
        <div id="Page${index}" class="MangaPage">
          <div class="PageFunctions">
            <button class="Bookmark ControlButton" title="${getLocaleString('BOOKMARK')}">
              ${IconBookmark} ${IconBookmarkOff}
            </button>
            <button class="ZoomIn ControlButton" title="${getLocaleString('ZOOM_IN')}">
              ${IconZoomIn}
            </button>
            <button class="ZoomRestore ControlButton" title="${getLocaleString('ZOOM_RESET')}">
              ${IconZoomCancel}
            </button>
            <button class="ZoomOut ControlButton" title="${getLocaleString('ZOOM_OUT')}">
              ${IconZoomOut}
            </button>
            <button class="ZoomWidth ControlButton" title="${getLocaleString('ZOOM_WIDTH')}">
              ${IconArrowAutofitWidth}
            </button>
            <button class="ZoomHeight ControlButton" title="${getLocaleString('ZOOM_HEIGHT')}">
              ${IconArrowAutofitHeight}
            </button>
            <button class="Hide ControlButton" title="${getLocaleString('HIDE')}">
              ${IconEye} ${IconEyeOff}
            </button>
            <button class="Reload ControlButton" title="${getLocaleString('RELOAD')}">
              ${IconRefresh}
            </button>
            <span class="PageIndex">${index}</span>
          </div>
          <div class="PageContent">
            <img id="PageImg${index}" alt="" class="PageImg" src="" />
          </div>
        </div>
        <div class="separator">
          [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
        </div>
      `,
    );

  const Reader = manga => html`
    <main
      id="Chapter"
      class="${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}
  ${getSettingsValue('verticalSeparator') ? 'separator' : ''}
  ${getSettingsValue('viewMode')}"
    >
      ${listPages(manga.pages, manga.begin ?? 0).join('')}
    </main>
  `;

  function settingsScope() {
    return html` <div class="ControlLabel">
      ${getLocaleString('SCOPE')}
      <div id="SettingsScope" class="radio-inputs">
        <label class="radio">
          <input
            type="radio"
            id="globalSettings"
            name="settingsScope"
            ${!isSettingsLocal() ? 'checked' : ''}
            value="false"
          />
          <span class="name">${IconWorldCog} ${getLocaleString('GLOBAL')}</span>
        </label>
        <label class="radio">
          <input
            type="radio"
            id="localSettings"
            name="settingsScope"
            ${isSettingsLocal() ? 'checked' : ''}
            value="true"
          />
          <span class="name">${IconLocationCog} ${window.location.hostname}</span>
        </label>
      </div>
    </div>`;
  }
  function localeSelector() {
    return locales
      .map(
        locale => html`
          <option
            value="${locale.ID}"
            ${getSettingsValue('locale') === locale.ID ? 'selected' : ''}
          >
            ${locale.NAME}
          </option>
        `,
      )
      .join('');
  }
  function language() {
    return html` <div class="ControlLabel locale">
      ${getLocaleString('LANGUAGE')}
      <select id="locale">
        ${localeSelector()}
      </select>
    </div>`;
  }
  const SettingsPanelGeneral = () => settingsScope() + language();

  function loadMode() {
    return html`
      <div class="ControlLabel loadMode">
        ${getLocaleString('DEFAULT_LOAD_MODE')}
        <select id="loadMode">
          <option value="wait" ${getSettingsValue('loadMode') === 'wait' ? 'selected' : ''}>
            ${getLocaleString('LOAD_MODE_NORMAL')}
          </option>
          <option value="always" ${getSettingsValue('loadMode') === 'always' ? 'selected' : ''}>
            ${getLocaleString('LOAD_MODE_ALWAYS')}
          </option>
          <option value="never" ${getSettingsValue('loadMode') === 'never' ? 'selected' : ''}>
            ${getLocaleString('LOAD_MODE_NEVER')}
          </option>
        </select>
      </div>
    `;
  }
  function loadSpeed() {
    return html`
      <div class="ControlLabel PagesPerSecond">
        ${getLocaleString('LOAD_SPEED')}
        <select id="PagesPerSecond">
          <option value="3000" ${getSettingsValue('throttlePageLoad') === 3e3 ? 'selected' : ''}>
            0.3(${getLocaleString('SLOWLY')})
          </option>
          <option value="2000" ${getSettingsValue('throttlePageLoad') === 2e3 ? 'selected' : ''}>
            0.5
          </option>
          <option value="1000" ${getSettingsValue('throttlePageLoad') === 1e3 ? 'selected' : ''}>
            01(${getLocaleString('NORMAL')})
          </option>
          <option value="500" ${getSettingsValue('throttlePageLoad') === 500 ? 'selected' : ''}>
            02
          </option>
          <option value="250" ${getSettingsValue('throttlePageLoad') === 250 ? 'selected' : ''}>
            04(${getLocaleString('FAST')})
          </option>
          <option value="125" ${getSettingsValue('throttlePageLoad') === 125 ? 'selected' : ''}>
            08
          </option>
          <option value="100" ${getSettingsValue('throttlePageLoad') === 100 ? 'selected' : ''}>
            10(${getLocaleString('EXTREME')})
          </option>
          <option value="1" ${getSettingsValue('throttlePageLoad') === 1 ? 'selected' : ''}>
            ${getLocaleString('ALL_PAGES')}
          </option>
        </select>
      </div>
    `;
  }
  const SettingsPanelLoading = () => loadMode() + loadSpeed();

  function toggler(name, checked = false) {
    return html`
      <div class="toggler">
        <input
          id="${name}"
          name="${name}"
          type="checkbox"
          value="true"
          ${checked ? 'checked' : ''}
        />
        <label for="${name}"> ${IconCheck} ${IconX} </label>
      </div>
    `;
  }

  function checkboxOptions() {
    return html`
      <div class="ControlLabel verticalSeparator">
        ${getLocaleString('VERTICAL_SEPARATOR')}
        ${toggler('verticalSeparator', getSettingsValue('verticalSeparator'))}
      </div>
      <div class="ControlLabel fitIfOversize">
        ${getLocaleString('FIT_WIDTH_OVERSIZED')}
        ${toggler('fitIfOversize', getSettingsValue('fitWidthIfOversize'))}
      </div>
      <div class="ControlLabel showThumbnails">
        ${getLocaleString('SHOW_THUMBNAILS')}
        ${toggler('showThumbnails', getSettingsValue('showThumbnails'))}
      </div>
      <div class="ControlLabel enableComments">
        ${getLocaleString('ENABLE_COMMENTS')}
        ${toggler('enableComments', getSettingsValue('enableComments'))}
      </div>
      <div class="ControlLabel downloadZip">
        ${getLocaleString('DOWNLOAD_IMAGES')}
        ${toggler('downloadZip', getSettingsValue('downloadZip'))}
      </div>
      <div class="ControlLabel hidePageControls">
        ${getLocaleString('HIDE_CONTROLS')}
        ${toggler('hidePageControls', getSettingsValue('hidePageControls'))}
      </div>
      <div class="ControlLabel lazyLoadImages">
        ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
        ${toggler('lazyLoadImages', getSettingsValue('lazyLoadImages'))}
      </div>
    `;
  }
  function lazyLoad() {
    return html`
      <div
        class="ControlLabel lazyStart ControlLabelItem
    ${getSettingsValue('lazyLoadImages') ? 'show' : ''}"
      >
        <span>
          ${getLocaleString('LAZY_LOAD_IMAGES')}
          <output id="lazyStartVal" for="lazyStart"> ${getSettingsValue('lazyStart')} </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('lazyStart')}"
          name="lazyStart"
          id="lazyStart"
          min="5"
          max="100"
          step="5"
          oninput="lazyStartVal.value = this.value"
        />
      </div>
    `;
  }
  function headerType() {
    return html`
      <div class="ControlLabel headerType">
        ${getLocaleString('HEADER_TYPE')}
        <select id="headerType">
          <option value="hover" ${getSettingsValue('header') === 'hover' ? 'selected' : ''}>
            ${getLocaleString('HEADER_HOVER')}
          </option>
          <option value="scroll" ${getSettingsValue('header') === 'scroll' ? 'selected' : ''}>
            ${getLocaleString('HEADER_SCROLL')}
          </option>
          <option value="click" ${getSettingsValue('header') === 'click' ? 'selected' : ''}>
            ${getLocaleString('HEADER_CLICK')}
          </option>
          <option value="fixed" ${getSettingsValue('header') === 'fixed' ? 'selected' : ''}>
            ${getLocaleString('HEADER_FIXED')}
          </option>
          <option value="simple" ${getSettingsValue('header') === 'simple' ? 'selected' : ''}>
            ${getLocaleString('HEADER_SIMPLE')}
          </option>
        </select>
      </div>
    `;
  }
  function autoScroll() {
    return html`
      <div class="ControlLabel autoScroll">
        <span>
          ${getLocaleString('AUTO_SCROLL_HEIGHT')}
          <output id="scrollHeightVal" for="scrollHeight">
            ${getSettingsValue('scrollHeight')} </output
          >px
        </span>
        <input
          type="range"
          value="${getSettingsValue('scrollHeight')}"
          name="scrollHeight"
          id="scrollHeight"
          min="1"
          max="100"
          step="1"
          oninput="scrollHeightVal.value = this.value"
        />
      </div>
    `;
  }
  const SettingsPanelOthers = () => checkboxOptions() + lazyLoad() + headerType() + autoScroll();

  function themesSelector() {
    return [...Object.keys(colors).map(color => colors[color].name)]
      .map(
        theme2 => html`
          <span
            title="${theme2}"
            class="${theme2} ThemeRadio ${getSettingsValue('theme') === theme2 ? 'selected' : ''}"
          >
            ${IconCheck}
          </span>
        `,
      )
      .join('');
  }
  function theme() {
    return html`
      <div class="ControlLabel ColorSchemeSelector">
        <label>${getLocaleString('COLOR_SCHEME')}</label>
        <button id="ColorScheme" class="ControlButton">${IconSun} ${IconMoon}</button>
      </div>
      <div class="ControlLabel ThemeSelector">
        <label>${getLocaleString('THEME_COLOR')}</label>
        <span
          class="custom ThemeRadio
        ${getSettingsValue('theme') === 'custom' ? 'selected' : ''}"
          title="custom"
        >
          ${IconPalette} ${IconCheck}
        </span>
        ${themesSelector()}
      </div>
      <div
        id="Hue"
        class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? 'show' : ''}"
      >
        <label>${getLocaleString('THEME_HUE')}</label>
        <input
          id="CustomThemeHue"
          type="color"
          value="${getSettingsValue('customTheme')}"
          class="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? '' : 'show'}"
      >
        <span>
          <label>${getLocaleString('THEME_SHADE')}</label>
          <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
            ${getSettingsValue('themeShade')}
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('themeShade')}"
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
          oninput="themeShadeVal.value = this.value"
        />
      </div>
    `;
  }

  function defaultZoomMode() {
    return html` <div class="ControlLabel DefaultZoomMode">
      ${getLocaleString('DEFAULT_ZOOM_MODE')}
      <select id="DefaultZoomMode">
        <option value="percent" ${getSettingsValue('zoomMode') === 'percent' ? 'selected' : ''}>
          ${getLocaleString('PERCENT')}
        </option>
        <option value="width" ${getSettingsValue('zoomMode') === 'width' ? 'selected' : ''}>
          ${getLocaleString('FIT_WIDTH')}
        </option>
        <option value="height" ${getSettingsValue('zoomMode') === 'height' ? 'selected' : ''}>
          ${getLocaleString('FIT_HEIGHT')}
        </option>
      </select>
    </div>`;
  }
  function defaultZoom() {
    return html`
      <div
        class="ControlLabel DefaultZoom ControlLabelItem ${getSettingsValue('zoomMode') ===
        'percent'
          ? 'show'
          : ''}"
      >
        <span>
          ${getLocaleString('DEFAULT_ZOOM')}
          <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
            ${getSettingsValue('defaultZoom')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('defaultZoom')}"
          name="DefaultZoom"
          id="DefaultZoom"
          min="5"
          max="200"
          step="5"
          list="tickmarks"
          oninput='defaultZoomVal.value = this.value + "%"'
        />
        <datalist id="tickmarks">
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="125">125</option>
          <option value="150">150</option>
          <option value="175">175</option>
          <option value="200">200</option>
        </datalist>
      </div>
    `;
  }
  function minZoom() {
    return html`
      <div class="ControlLabel minZoom">
        <span>
          ${getLocaleString('MINIMUM_ZOOM')}
          <output id="minZoomVal" class="RangeValue" for="minZoom">
            ${getSettingsValue('minZoom')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('minZoom')}"
          name="minZoom"
          id="minZoom"
          min="30"
          max="100"
          step="10"
          oninput='minZoomVal.value = this.value + "%"'
        />
      </div>
    `;
  }
  function zoomStep() {
    return html`
      <div class="ControlLabel zoomStep">
        <span>
          ${getLocaleString('ZOOM_STEP')}
          <output id="zoomStepVal" class="RangeValue" for="zoomStep">
            ${getSettingsValue('zoomStep')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('zoomStep')}"
          name="zoomStep"
          id="zoomStep"
          min="5"
          max="50"
          step="5"
          oninput='zoomStepVal.value = this.value + "%"'
        />
      </div>
    `;
  }
  function viewMode() {
    return html`
      <div class="ControlLabel viewMode">
        ${getLocaleString('DEFAULT_VIEW_MODE')}
        <select id="viewMode">
          <option value="Vertical" ${getSettingsValue('viewMode') === 'Vertical' ? 'selected' : ''}>
            ${getLocaleString('VIEW_MODE_VERTICAL')}
          </option>
          <option value="WebComic" ${getSettingsValue('viewMode') === 'WebComic' ? 'selected' : ''}>
            ${getLocaleString('VIEW_MODE_WEBCOMIC')}
          </option>
          <option value="FluidLTR" ${getSettingsValue('viewMode') === 'FluidLTR' ? 'selected' : ''}>
            ${getLocaleString('VIEW_MODE_LEFT')}
          </option>
          <option value="FluidRTL" ${getSettingsValue('viewMode') === 'FluidRTL' ? 'selected' : ''}>
            ${getLocaleString('VIEW_MODE_RIGHT')}
          </option>
        </select>
      </div>
    `;
  }
  const SettingsPanelZoom = () =>
    defaultZoomMode() + defaultZoom() + minZoom() + zoomStep() + viewMode();

  const SettingsPanel = () => html`
    <div id="SettingsPanel" class="panel">
      <h2>${getLocaleString('SETTINGS')}</h2>
      <button id="CloseSettings" class="closeButton" title="${getLocaleString('CLOSE')}">
        ${IconX}
      </button>
      <button id="ResetSettings" class="ControlButton">
        ${IconSettingsOff} ${getLocaleString('BUTTON_RESET_SETTINGS')}
      </button>
      <fieldset>
        <legend>${getLocaleString('GENERAL')}</legend>
        ${SettingsPanelGeneral()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('THEME')}</legend>
        ${theme()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('LOADING')}</legend>
        ${SettingsPanelLoading()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('ZOOM')}</legend>
        ${SettingsPanelZoom()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('OTHERS')}</legend>
        ${SettingsPanelOthers()}
      </fieldset>
    </div>
  `;

  const ThumbnailsPanel = manga => html`
    <nav id="Navigation" class="panel ${getSettingsValue('showThumbnails') ? '' : 'disabled'}">
      <div id="NavigationCounters" class="ControlLabel">
        ${IconCategory}
        <i>0</i> /
        <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        ${getLocaleString('PAGES_LOADED')}
      </div>
      <div id="Thumbnails">
        ${indexList(manga.pages, manga.begin)
          .map(
            index => html`
              <div id="Thumbnail${index}" class="Thumbnail">
                <img id="ThumbnailImg${index}" alt="" class="ThumbnailImg" src="" />
                <span class="ThumbnailIndex">${index}</span>
              </div>
            `,
          )
          .join('')}
      </div>
    </nav>
  `;

  let loadedManga;
  function hydrateApp() {
    showSettings();
    updateViewMode(getSettingsValue('viewMode'))();
    const elements = {
      '#Header': Header(loadedManga),
      '#CommentsPanel': commentsPanel(),
      '#SettingsPanel': SettingsPanel(),
      '#KeybindingsPanel': KeybindingsPanel(),
      '#Bookmarks': BookmarkPanel(),
    };
    const SettingsPanelOpened = document
      .querySelector('#SettingsPanel')
      ?.classList.contains('visible');
    if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
      toggleAutoScroll();
    }
    refreshThemes();
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
    document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
    const outer = document.getElementById('MangaOnlineViewer');
    if (outer) {
      outer.className = `
        ${getSettingsValue('hidePageControls') ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
    }
    const reader = document.querySelector('#Chapter');
    if (reader) {
      reader.className = `${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}  ${getSettingsValue('viewMode')}`;
    }
    Object.entries(elements).forEach(([id, component]) => {
      const tag = document.querySelector(id);
      if (tag) {
        tag.outerHTML = component;
      }
    });
    document
      .querySelector('#Navigation')
      ?.classList.toggle('disabled', !getSettingsValue('showThumbnails'));
    document.querySelector('#Overlay')?.classList.remove('visible');
    events();
    if (SettingsPanelOpened) buttonSettingsOpen();
  }
  const app = manga => {
    loadedManga = manga;
    const main = document.createElement('div');
    main.id = 'MangaOnlineViewer';
    main.className = `
        ${getSettingsValue('hidePageControls') ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
    main.innerHTML = html`
      <div id="menu" class="${getSettingsValue('header')}">${IconMenu2}</div>
      ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
      <div id="Overlay" class="overlay"></div>
      ${commentsPanel()} ${KeybindingsPanel()} ${BookmarkPanel()} ${SettingsPanel()}
    `;
    settings$1.listen(_.debounce(hydrateApp, 600));
    return main.outerHTML;
  };

  const animation =
    '@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n.icon-tabler-loader-2,\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n.animate-spin-reverse {\n  -webkit-animation: spin-reverse 1s linear infinite;\n  animation: spin-reverse 1s linear infinite;\n}\n';

  const bookmarks =
    '#MangaOnlineViewer #BookmarksPanel {\n  position: fixed;\n  top: 10%;\n  width: 50%;\n  left: 25%;\n  right: 25%;\n  text-align: center;\n  max-height: 70%;\n  transition: transform 0.3s ease-in-out;\n  transform: scaleY(0);\n  z-index: 1000;\n}\n\n#MangaOnlineViewer #BookmarksPanel.visible {\n  transform: scaleY(1);\n  display: block;\n}\n\n#MangaOnlineViewer #BookmarksList {\n  padding: 0 15px;\n  overflow: auto;\n  max-height: 60vh;\n}\n\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {\n  flex-basis: 90%;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {\n  width: 90px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkFunctions {\n  width: 75px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-basis: 55%;\n}\n';

  const comments =
    '#MangaOnlineViewer #CommentsPanel {\n  position: static;\n  width: 90%;\n  height: 0;\n  top: 5%;\n  left: 5%;\n  text-align: center;\n  transition: transform 0.3s ease-in-out;\n  transform: scaleY(0);\n  z-index: 1000;\n  overflow-y: initial;\n  background-color: var(--theme-body-background);\n  opacity: 0;\n}\n\n#MangaOnlineViewer #CommentsPanel.visible {\n  position: fixed;\n  height: 90%;\n  transform: scaleY(1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 1;\n}\n\n#MangaOnlineViewer #CommentsArea {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  height: 100%;\n  width: 100%;\n  background-color: var(--theme-body-background);\n}\n';

  const fluid =
    '#MangaOnlineViewer #Chapter.FluidLTR,\n#MangaOnlineViewer #Chapter.FluidRTL {\n  display: flex;\n  overflow-x: auto;\n  min-width: auto;\n\n  .ZoomWidth {\n    display: none;\n  }\n\n  .PageImg {\n    min-width: unset;\n  }\n\n  .MangaPage {\n    width: initial;\n    min-width: fit-content;\n    position: relative;\n    max-height: 100%;\n  }\n\n  .MangaPage.DoublePage {\n    grid-column: span 2;\n  }\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR {\n  flex-direction: row;\n\n  .MangaPage .PageFunctions {\n    right: auto;\n    left: 0;\n    direction: rtl;\n  }\n}\n\n#MangaOnlineViewer #Chapter.FluidRTL {\n  flex-direction: row-reverse;\n}\n';

  const header =
    '#MangaOnlineViewer #gotoPage {\n  min-width: 35px;\n}\n\n#MangaOnlineViewer #Header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row nowrap;\n  transition: transform 0.3s ease-in;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: inherit;\n  z-index: 900;\n}\n\n#MangaOnlineViewer #Header.click {\n  padding-left: 40px;\n}\n\n@keyframes headroom {\n  from {\n    transform: translateY(-100%);\n    position: sticky;\n    top: 0;\n  }\n  to {\n    transform: translateY(0%);\n    position: sticky;\n    top: 0;\n  }\n}\n\n#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {\n  animation: headroom 0.3s ease-in reverse;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\n  position: fixed;\n  padding-left: 40px;\n  top: -100%;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-hide {\n  animation: none;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-show,\n#MangaOnlineViewer #Header.headroom-end,\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\n#MangaOnlineViewer #Header.visible {\n  animation: headroom 0.3s ease-in;\n  transform: translateY(0%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.headroom-top {\n  animation: none;\n}\n\n#MangaOnlineViewer #Header.fixed {\n  position: sticky;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#MangaOnlineViewer #Header.simple {\n  position: static;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#MangaOnlineViewer #menu {\n  position: fixed;\n  z-index: 1;\n  color: var(--theme-body-text-color);\n  height: 40px;\n  width: 40px;\n}\n\n#MangaOnlineViewer #menu .icon-tabler {\n  position: relative;\n  top: 4px;\n  left: 4px;\n  height: 32px;\n  width: 32px;\n  stroke-width: 1.25;\n}\n\n#MangaOnlineViewer #menu:not(.click, .hover),\n#MangaOnlineViewer #menu.hide {\n  display: none;\n}\n\n#MangaOnlineViewer #menu.click {\n  z-index: 901;\n}\n\n#MangaOnlineViewer #MangaTitle {\n  padding: 2px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n#MangaOnlineViewer #GlobalFunctions {\n  display: flex;\n  gap: 3px;\n  padding: 3px 3px 3px 0;\n  flex-wrap: wrap;\n  width: 300px;\n  z-index: 100;\n}\n\n#MangaOnlineViewer .ChapterControl span,\n#MangaOnlineViewer #GlobalFunctions span {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n}\n\n#MangaOnlineViewer .ChapterControl span {\n  flex-grow: 1;\n}\n\n#MangaOnlineViewer .ChapterControl span > * {\n  flex-basis: 50%;\n}\n\n#MangaOnlineViewer #ScrollControl .icon-tabler,\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\n  width: 25px;\n  height: 25px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\n  display: flex;\n  align-items: center;\n}\n\n#MangaOnlineViewer #GlobalFunctions #Zoom {\n  margin: 2px 5px;\n  width: 160px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\n  width: 40px;\n  display: inline-block;\n  color: var(--theme-primary-text-color);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--theme-primary-color);\n  padding: 2px 5px;\n}\n\n#MangaOnlineViewer #ChapterNavigation {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: end;\n  padding: 5px;\n  max-width: 350px;\n}\n\n#MangaOnlineViewer #Counters {\n  padding-right: 5px;\n}\n\n#MangaOnlineViewer #ChapterControl {\n  display: flex;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton {\n  display: inline-flex;\n  margin: 2px;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  gap: 0.5em;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {\n  flex-shrink: 0;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="#"],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=""],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="undefined"] {\n  visibility: hidden;\n}\n\n#MangaOnlineViewer #ChapterControl #download.loading {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {\n  pointer-events: none;\n  filter: grayscale(0.9);\n}\n\n#MangaOnlineViewer .ViewerTitle {\n  text-align: center;\n  min-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n  flex-basis: 60%;\n}\n';

  const icons =
    '.icon-tabler {\n  height: 1rem;\n  width: 1rem;\n  vertical-align: sub;\n}\n\n.icon-tabler-file-download > :nth-child(n + 4) {\n  /* 4, 5 */\n  color: gold;\n}\n\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\n  /* 3,4,5,6 */\n  color: yellow;\n}\n\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\n  /* 3,4,5,6 */\n  color: yellow;\n}\n\n.icon-tabler-zoom-in-area > :nth-child(2),\n.icon-tabler-zoom-in-area > :nth-child(3) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out-area > :nth-child(2) {\n  color: red;\n}\n\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\n  color: #9966ff;\n}\n\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-spacing-vertical > :nth-child(4) {\n  color: fuchsia;\n}\n\n.icon-tabler-list-numbers > :nth-child(n + 5) {\n  color: #e48900;\n}\n\n.icon-tabler-bookmarks > :nth-child(n + 2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark > * {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > * {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-eye-off > :nth-child(4) {\n  color: red;\n}\n\n.icon-tabler-zoom-cancel > :nth-child(3),\n.icon-tabler-zoom-cancel > :nth-child(4) {\n  color: #9966ff;\n}\n\n.icon-tabler-zoom-in > :nth-child(3),\n.icon-tabler-zoom-in > :nth-child(4) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-refresh > :nth-child(n + 2) {\n  color: cyan;\n}\n\n.icon-tabler-photo > * {\n  color: silver;\n}\n\n.icon-tabler-photo-off > * {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(6) {\n  color: orange;\n}\n\n.icon-tabler-message > :nth-child(2),\n.icon-tabler-message > :nth-child(3) {\n  color: greenyellow;\n}\n';

  const keybindings =
    '#MangaOnlineViewer #KeybindingsPanel {\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(100%);\n  line-height: 1.5em;\n  z-index: 1000;\n  overflow-y: auto;\n  width: 360px;\n  max-width: 100vw;\n}\n\n#MangaOnlineViewer #KeybindingsPanel.visible {\n  transform: translateX(0);\n  display: block;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 5px;\n}\n\n#MangaOnlineViewer #KeybindingsPanel .ControlButton {\n  margin-left: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  gap: 0.5em;\n}\n\n#MangaOnlineViewer #KeybindingsPanel label {\n  display: ruby;\n}\n\n#MangaOnlineViewer #KeybindingsPanel input {\n  display: inline-block;\n  width: 100%;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\n  grid-column: span 2;\n}\n';

  const styles =
    ':root:not(.light, .dark) {\n  --theme-body-background: #25262b;\n  --theme-body-text-color: #c1c2c5;\n  --theme-text-color: #c1c2c5;\n  --theme-primary-color: #1a1b1e;\n  --theme-primary-text-color: #c1c2c5;\n  --theme-background-color: #25262b;\n  --theme-hightlight-color: #2c2e33;\n  --theme-border-color: #373a40;\n}\n\n#MangaOnlineViewer {\n  text-decoration: none;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n}\n\n#MangaOnlineViewer #Chapter {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  min-width: 225px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),\n#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\n  padding-bottom: 31px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n#MangaOnlineViewer .closeButton {\n  width: fit-content;\n  height: fit-content;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n#MangaOnlineViewer .overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 950;\n  cursor: pointer;\n}\n\n#MangaOnlineViewer .overlay.visible {\n  display: block;\n}\n\n#MangaOnlineViewer select {\n  height: 20px;\n  /*padding: 0;*/\n  margin: 2px;\n}\n\n#MangaOnlineViewer .ControlButton,\n#MangaOnlineViewer .simpleButton {\n  cursor: pointer;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px;\n  min-height: 32px;\n  color: var(--theme-primary-text-color);\n  background-color: var(--theme-primary-color);\n  border-color: var(--theme-border-color);\n}\n\n#MangaOnlineViewer .ControlButton:active,\n#MangaOnlineViewer .ControlButton:hover {\n  opacity: 0.8;\n}\n\n#MangaOnlineViewer .simpleButton {\n  font-size: initial;\n  min-width: 32px;\n}\n\n#MangaOnlineViewer .panel .simpleButton {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n#MangaOnlineViewer .panel {\n  padding: 5px;\n  position: inherit;\n  border-radius: 5px;\n  background-color: var(--theme-background-color);\n}\n\n#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\n  max-width: 100%;\n  object-fit: contain;\n}\n\n#MangaOnlineViewer .ControlButton.hidden,\n.light #ColorScheme > .icon-tabler-sun,\n.dark #ColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,\n#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\n#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\n#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,\n#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {\n  display: none;\n}\n\n#MangaOnlineViewer.hideControls .PageFunctions {\n  visibility: hidden;\n}\n';

  const media =
    '#MangaOnlineViewer.mobile #Header,\n#MangaOnlineViewer.tablet #Header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle,\n#MangaOnlineViewer.tablet .ViewerTitle {\n  order: 1;\n  min-height: auto;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions,\n#MangaOnlineViewer.tablet #GlobalFunctions {\n  width: auto;\n  order: 2;\n  padding: 5px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation,\n#MangaOnlineViewer.tablet #ChapterNavigation {\n  order: 3;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\n#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\n  display: none;\n}\n\n#MangaOnlineViewer.mobile #Header {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\n  position: sticky;\n}\n\n#MangaOnlineViewer.mobile #MangaTitle {\n  word-wrap: anywhere;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle {\n  order: 1;\n  margin-top: 0;\n  height: auto;\n  padding: 0;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions {\n  order: 2;\n  padding: 0;\n  width: auto;\n  flex-basis: 35px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation {\n  order: 3;\n  width: min-content;\n  min-width: 205px;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {\n  flex-grow: 1;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions {\n  padding: 0;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {\n  opacity: 1;\n}\n\n#MangaOnlineViewer.mobile #Navigation,\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,\n#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,\n#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,\n#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,\n#MangaOnlineViewer.mobile #SettingsPanel .minZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,\n#MangaOnlineViewer.mobile #SettingsPanel .headerType,\n#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,\n#MangaOnlineViewer.mobile #KeybindingsPanel,\n#MangaOnlineViewer.mobile .ChapterControl .download,\n#MangaOnlineViewer.mobile #Counters {\n  display: none;\n}\n';

  const page =
    '#MangaOnlineViewer .MangaPage {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 0;\n  min-height: 22px;\n  min-width: 100%;\n}\n\n#MangaOnlineViewer .PageContent {\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto;\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n#MangaOnlineViewer .MangaPage.hide .PageContent {\n  height: 0;\n}\n\n#MangaOnlineViewer .PageContent .PageImg[src=""],\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageFunctions {\n  font-family: monospace;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  gap: 3px;\n  position: absolute;\n  right: 0;\n}\n\n#MangaOnlineViewer .PageFunctions > .PageIndex {\n  background-color: var(--theme-primary-color);\n  color: var(--theme-primary-text-color);\n  min-width: 20px;\n  text-align: center;\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 1rem;\n  border-radius: 5px;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton {\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-width: 0;\n  min-height: auto;\n  opacity: 0.5;\n}\n\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\n  opacity: 1;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\n  opacity: 0.9;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-style: italic;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator::before,\n#MangaOnlineViewer #Chapter.Vertical .separator::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--theme-text-color);\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {\n  margin-right: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {\n  margin-left: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter:not(.separator) .separator,\n#MangaOnlineViewer #Chapter:not(.Vertical) .separator {\n  display: none;\n}\n';

  const settings =
    '#MangaOnlineViewer #SettingsPanel {\n  color: var(--theme-text-color);\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000;\n  transition:\n    transform 0.3s ease-in,\n    background-color 0.3s linear;\n  transform: translateX(-100%);\n  display: flex;\n  flex-flow: column;\n  gap: 5px;\n  overflow-y: auto;\n  max-width: 100vw;\n  width: 308px;\n}\n\n#MangaOnlineViewer #SettingsPanel.visible {\n  transform: translateX(0);\n}\n\n#MangaOnlineViewer #SettingsPanel fieldset {\n  border: 1px solid var(--theme-body-text-color);\n  padding: 3px;\n  border-radius: 10px;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\n  display: none;\n}\n\n#MangaOnlineViewer #SettingsPanel input[type="range"] {\n  width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel .RangeValue {\n  display: inline-block;\n  color: var(--theme-primary-text-color);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--theme-primary-color);\n  padding: 2px 5px;\n  margin-left: 8px;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  writing-mode: vertical-lr;\n  width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist option {\n  padding: 0;\n}\n\n#MangaOnlineViewer .ThemeRadio {\n  border: 1px solid var(--theme-text-color);\n  color: var(--theme-primary-text-color);\n  background-color: var(--theme-primary-color);\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  padding: 1px;\n  margin: 2px 5px;\n  position: relative;\n}\n\n#MangaOnlineViewer .ThemeRadio svg {\n  position: absolute;\n  top: 15%;\n  right: 15%;\n}\n\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\n  display: inline;\n}\n\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\n  display: none;\n}\n\n#MangaOnlineViewer #ThemeSelector {\n  width: 110px;\n}\n\n#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 0.5rem;\n  background-color: var(--theme-border-color);\n  color: var(--theme-text-color);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);\n  padding: 0.25rem;\n  width: 300px;\n  font-size: 14px;\n}\n\n#MangaOnlineViewer .radio-inputs .radio {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n#MangaOnlineViewer .toggler input {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs .radio input {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs .radio .name .icon {\n  margin: 0 0.5rem;\n}\n\n#MangaOnlineViewer .radio-inputs .radio .name {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  border: none;\n  padding: 0.5rem 0;\n  color: var(--theme-text-color);\n  background-color: var(--theme-border-color);\n  transition: all 0.15s ease-in-out;\n}\n\n#MangaOnlineViewer .radio-inputs .radio input:checked + .name {\n  background-color: var(--theme-primary-color);\n  color: var(--theme-primary-text-color);\n  font-weight: 600;\n}\n\n#MangaOnlineViewer #ColorScheme {\n  padding: 5px;\n  min-height: 28px;\n  min-width: 28px;\n}\n\n#MangaOnlineViewer .toggler {\n  width: 36px;\n  /*margin: 40px auto;*/\n}\n\n#MangaOnlineViewer .toggler label {\n  display: block;\n  position: relative;\n  width: 36px;\n  height: 18px;\n  border: 1px solid #d6d6d6;\n  border-radius: 36px;\n  background: #e4e8e8;\n  cursor: pointer;\n}\n\n#MangaOnlineViewer .toggler label::after {\n  display: block;\n  border-radius: 100%;\n  background-color: #d7062a;\n  content: "";\n  animation-name: toggler-size;\n  animation-duration: 0.15s;\n  animation-timing-function: ease-out;\n  animation-direction: normal;\n  animation-iteration-count: 1;\n  animation-play-state: running;\n}\n\n#MangaOnlineViewer .toggler .toggler-on,\n#MangaOnlineViewer .toggler .toggler-off {\n  opacity: 1;\n  z-index: 2;\n}\n\n#MangaOnlineViewer .toggler label::after,\n#MangaOnlineViewer .toggler label .toggler-on,\n#MangaOnlineViewer .toggler label .toggler-off {\n  position: absolute;\n  /*top: 50%;*/\n  top: 9px;\n  left: 25%;\n  width: 16px;\n  height: 16px;\n  transform: translateY(-50%) translateX(-50%);\n  transition:\n    left 0.15s ease-in-out,\n    background-color 0.2s ease-out,\n    width 0.15s ease-in-out,\n    height 0.15s ease-in-out,\n    opacity 0.15s ease-in-out;\n}\n\n#MangaOnlineViewer .toggler input:checked + label::after,\n#MangaOnlineViewer .toggler input:checked + label .toggler-on,\n#MangaOnlineViewer .toggler input:checked + label .toggler-off {\n  left: 75%;\n}\n\n#MangaOnlineViewer .toggler input:checked + label::after {\n  background-color: #50ac5d;\n  animation-name: toggler-size2;\n}\n\n#MangaOnlineViewer .toggler input:checked + label .toggler-off,\n#MangaOnlineViewer .toggler input:not(:checked) + label .toggler-on {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\n#MangaOnlineViewer .toggler .path {\n  fill: none;\n  stroke: #fefefe;\n  stroke-width: 7px;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n}\n\n@keyframes toggler-size {\n  0%,\n  100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@keyframes toggler-size2 {\n  0%,\n  100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}\n';

  const normalize =
    '/*  Simple Normalizer */\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n  color: var(--theme-body-text-color);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n  vertical-align: middle;\n  border: 0 none;\n}\n';

  const thumbnails =
    '#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\n  width: 100px;\n  height: 150px;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n}\n\n#MangaOnlineViewer #NavigationCounters {\n  margin: 5px;\n  width: 100%;\n  line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  bottom: -180px;\n  height: 185px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  padding-bottom: 20px;\n  position: fixed;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  transition:\n    transform 0.3s ease-in,\n    background-color 0.3s linear;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  line-height: 0;\n}\n\n#MangaOnlineViewer #Navigation #Thumbnails {\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-right: 10px;\n}\n\n#MangaOnlineViewer #Navigation:hover {\n  transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation.disabled {\n  display: none;\n}\n\n#MangaOnlineViewer #Navigation.visible {\n  transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail {\n  display: inline-block;\n  height: 150px;\n  margin: 0 5px;\n  border: 1px solid var(--theme-primary-color);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  display: block;\n  opacity: 0.8;\n  position: relative;\n  bottom: 25%;\n  width: 100%;\n  line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\n  cursor: pointer;\n  display: inline-block;\n  max-height: 150px;\n  min-height: 150px;\n  min-width: 80px;\n  max-width: 160px;\n}\n';

  const cssStyles = css`
    :root,
    .dark {
      --theme-body-background: ${colors.dark['600']};
      --theme-body-text-color: ${colors.dark['50']};
      --theme-text-color: ${colors.dark['50']};
      --theme-primary-color: ${colors.dark['700']};
      --theme-primary-text-color: ${colors.dark['50']};
      --theme-background-color: ${colors.dark['600']};
      --theme-hightlight-color: ${colors.dark['500']};
      --theme-border-color: ${colors.dark['400']};
    }

    .light {
      --theme-body-background: ${colors.gray['50']};
      --theme-body-text-color: ${colors.gray['900']};
      --theme-text-color: ${colors.gray['900']};
      --theme-primary-color: ${colors.gray['300']};
      --theme-primary-text-color: ${colors.gray['900']};
      --theme-background-color: ${colors.gray['50']};
      --theme-hightlight-color: ${colors.gray['500']};
      --theme-border-color: ${colors.gray['100']};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${svgToUrl(IconPhotoOff)}');
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${svgToUrl(IconPalette)}");*/
    }

    ${normalize}
    ${styles}
  ${header}
  ${icons}
  ${keybindings}
  ${page}
  ${fluid}
  ${settings}
  ${thumbnails}
  ${bookmarks}
  ${comments}
  ${media}
  ${animation}
  `;

  function head(manga) {
    return html`
      <title>${manga.title}</title>
      <meta charset="UTF-8" />
      ${wrapStyle('externals', sweetalertStyle)} ${wrapStyle('reader', cssStyles)} ${themesCSS}
      ${wrapStyle(
        'MinZoom',
        `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getSettingsValue('minZoom')}vw;}`,
      )}
    `;
  }

  function display(manga) {
    cleanUpElement(document.documentElement, document.head, document.body);
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
    document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
    window.scrollTo(0, 0);
    logScriptVerbose(`Page Cleaned Up`);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = app(manga);
    events();
    loadManga(manga);
    if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
  }

  async function captureComments() {
    if (!getSettingsValue('enableComments')) return null;
    let comments = document.querySelector('#disqus_thread, #fb-comments');
    if (comments) {
      logScript(`Waiting to Comments to load`, comments);
      window.scrollTo(0, document.body.scrollHeight);
      await waitWithTimeout(
        waitForFunc(() => {
          comments = document.querySelector('#disqus_thread, #fb-comments');
          const iframe = comments?.querySelector('iframe:not(#indicator-north, #indicator-south)');
          return (
            iframe?.contentWindow?.document.readyState === 'complete' &&
            !!iframe?.contentWindow?.document?.body?.textContent?.length
          );
        }),
      );
      if (comments.children.length) {
        logScript(`Got Comments`, comments);
      } else {
        logScript(`Timeout Comments`);
      }
    }
    window.scrollTo(0, 0);
    return comments;
  }
  async function viewer(manga) {
    if (manga.before !== void 0) {
      logScriptVerbose(`Executing Preparation`);
      await manga.before(manga.begin ?? 0);
    }
    if (getSettingsValue('enableComments') && !manga.comments) {
      manga.comments = await captureComments();
    }
    setTimeout(() => {
      try {
        display(manga);
      } catch (e) {
        logScript(e);
      }
    }, 50);
  }

  const fileTypes = [
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
  ];
  const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;
  const orderFiles = (a, b) =>
    a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    });
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  const getImageBlob = content => {
    const buffer = new Uint8Array(content);
    const blob = new Blob([buffer.buffer]);
    return URL.createObjectURL(blob);
  };
  async function loadZipFile(filePath) {
    const zip = await JSZip.loadAsync(filePath);
    const files = zip
      .filter((_, file) => !file.dir && fileImageExt.test(file.name))
      .sort((a, b) => orderFiles(a.name, b.name));
    logScript('Files in zip:', zip.files);
    return Promise.all(files.map(file => file.async('arraybuffer').then(getImageBlob)));
  }
  function displayUploadedFiles(title, listImages) {
    viewer({
      title,
      series: '?reload',
      pages: listImages.length,
      begin: 1,
      prev: '#',
      next: '#',
      lazy: false,
      listImages,
    }).then(() => logScript('Page loaded'));
  }
  async function loadMangaFromZip(zipFile) {
    const listImages = await loadZipFile(zipFile);
    displayUploadedFiles(typeof zipFile === 'string' ? zipFile : zipFile.name, listImages);
  }
  function openFileImages(evt) {
    const input = evt.target;
    const files = Array.from(input.files)
      .filter(validFileType)
      .sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
    logScript(
      'Local Files: ',
      files,
      files.map(f => f.webkitRelativePath || f.name),
    );
    if (input.files?.[0]) {
      displayUploadedFiles(
        input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
        files.map(URL.createObjectURL),
      );
    }
  }
  function allowUpload() {
    if (localhost.url.test(window.location.href)) {
      if (document.querySelector('#MangaOnlineViewer, #LocalTest')) {
        document.querySelector('#LocalTest')?.setAttribute('style', 'display:none');
        document.querySelector('#file')?.addEventListener('change', evt => {
          const input = evt.target;
          if (input.files?.[0]) loadMangaFromZip(input.files[0]);
        });
        document.querySelector('#folder')?.addEventListener('change', openFileImages);
        document.querySelector('#images')?.addEventListener('change', openFileImages);
        logScript(`Waiting for zip/images upload`);
      }
      return true;
    }
    return false;
  }

  function validateMin(valBegin, endPage, rs) {
    let val = valBegin;
    if (Number.isNaN(val) || val < rs.min()) {
      val = rs.min();
    } else if (val > rs.max()) {
      val = rs.max();
    } else if (val > endPage) {
      val = endPage;
    }
    return val;
  }
  function validateMax(valEnd, beginPage, rs) {
    let val = valEnd;
    if (Number.isNaN(val) || val > rs.max()) {
      val = rs.max();
    } else if (val < rs.min()) {
      val = rs.min();
    } else if (val < beginPage) {
      val = beginPage;
    }
    return val;
  }
  async function lateStart(site, begin = 1) {
    const manga = await site.run();
    logScript('LateStart');
    let beginPage = begin;
    let endPage = manga.pages;
    const options = {
      title: getLocaleString('STARTING'),
      html: html`
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${beginPage}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${endPage}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      icon: 'question',
      didOpen() {
        const pageBeginInput = document.querySelector('#pageBegin');
        const pageEndInput = document.querySelector('#pageEnd');
        const inputSlider = document.getElementById('pagesSlider');
        if (inputSlider) {
          let changedInput = function () {
            if (
              (pageBeginInput && pageBeginInput.value === '') ||
              (pageEndInput && pageEndInput.value === '')
            ) {
              return;
            }
            const valBegin = validateMin(
              parseInt(pageBeginInput?.value ?? '0', 10),
              endPage,
              rangeSliderElement,
            );
            const valEnd = validateMax(
              parseInt(pageEndInput?.value ?? '0', 10),
              beginPage,
              rangeSliderElement,
            );
            if (pageBeginInput) pageBeginInput.value = valBegin.toString();
            if (pageEndInput) pageEndInput.value = valEnd.toString();
            beginPage = valBegin;
            endPage = valEnd;
            rangeSliderElement.value([valBegin, valEnd]);
          };
          const rangeSliderElement = rangeSlider(inputSlider, {
            min: 1,
            max: manga.pages,
            value: [beginPage, endPage],
            onInput(value, userInteraction) {
              if (userInteraction) {
                [beginPage, endPage] = value;
                if (pageBeginInput) {
                  pageBeginInput.value = beginPage.toString();
                }
                if (pageEndInput) {
                  pageEndInput.value = endPage.toString();
                }
              }
            },
          });
          const observerEvent = _.debounce(changedInput, 600);
          ['change', 'mouseup', 'keyup', 'touchend'].forEach(event => {
            pageBeginInput?.addEventListener(event, observerEvent);
            pageEndInput?.addEventListener(event, observerEvent);
          });
        }
      },
    };
    Swal.fire(options).then(result => {
      if (result.value) {
        logScript(`Choice: ${beginPage} - ${endPage}`);
        manga.begin = beginPage;
        manga.pages = endPage;
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        logScript(result.dismiss);
      }
    });
  }
  function createLateStartButton(site, beginning) {
    const button = document.createElement('button');
    button.innerText = getLocaleString('BUTTON_START');
    button.id = 'StartMOV';
    button.onclick = () => {
      lateStart(site, beginning).catch(logScript);
    };
    document.body.appendChild(button);
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(startButton + rangeSliderStyles));
    document.head.appendChild(style);
    logScript('Start Button added to page', button);
  }
  function showWaitPopup(site, manga) {
    Swal.fire({
      title: getLocaleString('STARTING'),
      html: html`${manga.begin && manga.begin > 1
        ? `${getLocaleString('RESUME')}${manga.begin}.<br/>`
        : ''}${getLocaleString('WAITING')}`,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      timer: 3e3,
    }).then(result => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        createLateStartButton(site, manga.begin ?? 0);
        logScript(result.dismiss);
      }
    });
  }
  async function preparePage([site, manga]) {
    logScript(`Found Pages: ${manga.pages} in ${site.name}`);
    if (!manga.title) {
      manga.title = document.querySelector('title')?.textContent?.trim();
    }
    manga.begin = isBookmarked() ?? manga.begin ?? 1;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    unsafeWindow.MOV = (startPage, endPage) => {
      if (startPage !== void 0) {
        manga.begin = startPage;
      }
      if (endPage !== void 0) {
        manga.pages = endPage;
      }
      viewer(manga).then(() => logScript('Page loaded'));
    };
    switch (site.start ?? getSettingsValue('loadMode')) {
      case 'never':
        createLateStartButton(site, manga.begin);
        break;
      case 'always':
        viewer(manga).then(() => logScript('Page loaded'));
        break;
      // case 'wait':
      default:
        showWaitPopup(site, manga);
        break;
    }
  }
  async function start(sites) {
    logScript(
      `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getDevice()} ${getBrowser()} with ${getEngine()}`,
    );
    if (allowUpload()) return;
    logScript(sites.length, 'Known Manga Sites:', sites);
    const foundSites = sites.filter(s => s.url.test(window.location.href));
    logScript(foundSites.length, 'Found sites:', foundSites);
    const testedSites = foundSites.map(async site => {
      logScript(`Testing site: ${site.name}`);
      return new Promise((resolve, reject) => {
        Promise.all([
          testTime(site),
          testElement(site),
          testAttribute(site),
          testVariable(site),
          testFunc(site),
        ])
          .then(async () => site.run())
          .then(manga =>
            manga.pages > 0
              ? resolve([site, manga])
              : reject(new Error(`${site.name} found ${manga.pages} pages`)),
          );
      });
    });
    Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
      fastestIndex => {
        testedSites.forEach((_promise, i) => {
          if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
        });
        testedSites[fastestIndex].then(result => {
          preparePage(result);
        });
      },
    );
  }

  start(sites).catch(logScript);
})();
