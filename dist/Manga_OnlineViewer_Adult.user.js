// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2025.08.25
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
// @require       https://cdn.jsdelivr.net/npm/tinycolor2@1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/sweetalert2-neutral@11.22.2-neutral/dist/sweetalert2.all.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.12.1/bundled.js
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
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = document.querySelector(selector);
        if (observedElement) {
          resolve(observedElement);
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
      const element = target.querySelector(selector);
      if (element?.getAttribute(attribute)) {
        resolve(element.getAttribute(attribute) ?? '');
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = target.querySelector(selector);
        if (observedElement?.getAttribute(attribute)) {
          resolve(observedElement.getAttribute(attribute) ?? '');
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
  function waitForTimer(millis = 1e3, result) {
    return new Promise(resolve => {
      setTimeout(() => resolve(result), millis);
    });
  }
  async function waitWithTimer(promise, timer = 1e3) {
    const [result] = await Promise.all([promise, waitForTimer(timer)]);
    return result;
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
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif|svg)/;
    return base64Pattern.test(imageUrl);
  }
  function isObjectURL(url) {
    return objectURLRegex.test(url);
  }
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
    ':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-hover-transform: none}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}\n';

  const fix =
    '#nprogress .bar {\r\n  background: #29d;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\n#pagesSlider {\r\n  margin: 10px 0;\r\n}\r\n\r\n#pageInputs {\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#swal2-html-container .pageInput {\r\n  border: 1px darkblue dashed;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  background-color: aliceblue;\r\n  color: black;\r\n  max-width: 40%;\r\n}\r\n\r\n#swal2-title {\r\n  color: navy;\r\n}\r\n\r\nbutton.swal2-styled {\r\n  position: inherit;\r\n  transform: inherit;\r\n}\r\n';

  const sweetalertStyle = [normalize$1, sweetalert, fix, nprogress, keyscss].join('\n');

  const startButton =
    '#StartMOV {\r\n  all: revert;\r\n  backface-visibility: hidden;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  padding: 0.5rem 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n  min-height: 50px;\r\n  width: 80%;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 105000;\r\n  transition: all 0.4s ease-in-out;\r\n  background-size: 300% 100%;\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n  background-position: 100% 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n  outline: none;\r\n}\r\n';

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
    }
    logScriptVerbose('Fake Setting: ', name, ' = ', value);
    return String(value);
  }
  function saveGlobalSettings(value) {
    return setValueGM('settings', value);
  }
  function saveLocalSettings(value) {
    return setValueGM(window.location.hostname, value);
  }
  function getBrowser() {
    const result = bowser.getParser(window.navigator.userAgent).getBrowser();
    return `${result.name} ${result.version}`;
  }
  function getEngine() {
    return getInfoGM.scriptHandler ?? 'Greasemonkey';
  }
  const getDevice = () => {
    const parser = bowser.getParser(window.navigator.userAgent);
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
      } catch (e) {
        logScript('Failed to add settings listener', e);
      }
    }
    return void 0;
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

  let map = (initial = {}) => {
    let $map = atom(initial);

    $map.setKey = function (key, value) {
      let oldMap = $map.value;
      if (typeof value === 'undefined' && key in $map.value) {
        $map.value = { ...$map.value };
        delete $map.value[key];
        $map.notify(oldMap, key);
      } else if ($map.value[key] !== value) {
        $map.value = {
          ...$map.value,
          [key]: value,
        };
        $map.notify(oldMap, key);
      }
    };

    return $map;
  };

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
    NAVBAR_TYPE: 'Navigationsleistentyp ändern',
    NAVBAR_BOTTOM: 'Unten',
    NAVBAR_LEFT: 'Links',
    NAVBAR_RIGHT: 'Rechts',
    NAVBAR_DISABLED: 'Deaktiviert',
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
    REDUCE: 'Reduce',
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
    NAVBAR_TYPE: 'Change Navbar Type',
    NAVBAR_BOTTOM: 'Bottom',
    NAVBAR_LEFT: 'Left',
    NAVBAR_RIGHT: 'Right',
    NAVBAR_DISABLED: 'Disabled',
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
    NAVBAR_TYPE: 'Cambiar el tipo de barra de navegación',
    NAVBAR_BOTTOM: 'Abajo',
    NAVBAR_LEFT: 'Izquierda',
    NAVBAR_RIGHT: 'Derecha',
    NAVBAR_DISABLED: 'Desactivado',
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
    NAVBAR_TYPE: 'Mudar barra de navegação',
    NAVBAR_BOTTOM: 'Embaixo',
    NAVBAR_LEFT: 'Esquerda',
    NAVBAR_RIGHT: 'Direita',
    NAVBAR_DISABLED: 'Desativado',
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
    NAVBAR_TYPE: '更改导航栏类型',
    NAVBAR_BOTTOM: '底部',
    NAVBAR_LEFT: '左边',
    NAVBAR_RIGHT: '正确的',
    NAVBAR_DISABLED: '已禁用',
  };

  const locales = [en_US, es_ES, pt_BR, zh_CN, de_DE];

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
    bookmarks: [],
    colorScheme: 'dark',
    downloadZip: false,
    enableComments: true,
    enabled: true,
    fitWidthIfOversize: true,
    header: 'hover',
    hidePageControls: false,
    lazyLoadImages: false,
    lazyStart: 50,
    loadMode: 'wait',
    locale: 'en_US',
    maxReload: 5,
    minZoom: 30,
    navbar: 'bottom',
    pagination: false,
    scrollHeight: 25,
    theme: '#29487D',
    throttlePageLoad: 1e3,
    viewMode: 'WebComic',
    zoomMode: 'percent',
    zoomStep: 30,
    zoomValue: 100,
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
    navbar: 'disabled',
    viewMode: 'WebComic',
    header: 'click',
    hidePageControls: true,
    pagination: true,
  };
  function getDefault(global = true) {
    return !isMobile()
      ? { ...defaultSettings, enabled: global, theme: global ? '#29487D' : '#004526' }
      : _.defaultsDeep(mobileSettings, {
          ...defaultSettings,
          enabled: global,
          theme: global ? '#29487D' : '#004526',
        });
  }
  function compareSettingsCustomizer(value, other, key) {
    if (key === 'bookmarks') {
      if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
          return false;
        }
        const getBookmarkSortKey = b => `${b.url}-${b.date}`;
        const sortedValue = [...value].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        const sortedOther = [...other].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        return _.isEqual(sortedValue, sortedOther);
      }
    }
    if (key === 'keybinds') {
      if (typeof value === 'object' && typeof other === 'object') {
        const keysA = Object.keys(value).sort();
        const keysB = Object.keys(other).sort();
        if (!_.isEqual(keysA, keysB)) {
          return false;
        }
        for (const k of keysA) {
          const sortedArrayA = value[k] ? [...value[k]].sort() : [];
          const sortedArrayB = other[k] ? [...other[k]].sort() : [];
          if (!_.isEqual(sortedArrayA, sortedArrayB)) {
            return false;
          }
        }
        return true;
      }
    }
    return void 0;
  }
  function haveSettingsChanged(newSettings, oldSettings, key) {
    if (newSettings === oldSettings) {
      return false;
    }
    if (key) {
      const tempA = { [key]: newSettings };
      const tempB = { [key]: oldSettings };
      return !_.isEqualWith(tempA, tempB, compareSettingsCustomizer);
    }
    return !_.isEqualWith(newSettings, oldSettings, compareSettingsCustomizer);
  }
  let globalSettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
  let localSettings = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
  const isSettingsLocal = () => localSettings?.enabled === true;
  const isLocalSettingsAllowed = key =>
    isSettingsLocal() && !['locale', 'bookmarks', 'keybinds'].includes(key);
  const settings$2 = map(
    isSettingsLocal()
      ? {
          ...localSettings,
          locale: globalSettings.locale,
          keybinds: globalSettings.keybinds,
          bookmarks: globalSettings.bookmarks,
        }
      : globalSettings,
  );
  const locale = computed(
    settings$2,
    current => locales.find(l => l.ID === current.locale) ?? locales[1],
  );
  const appState = map({
    autoScroll: false,
    currentPage: 0,
    loaded: 0,
    manga: void 0,
    panel: 'none',
    scrollToPage: void 0,
    device: getDevice(),
    images: {},
    headerVisible: true,
  });
  function refreshSettings(key) {
    if (key) {
      const newVal = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
      const currentVal = settings$2.get()?.[key];
      if (haveSettingsChanged(currentVal, newVal, key)) {
        settings$2.setKey(key, newVal);
        logScript('Refreshed Settings', key, newVal);
      }
      return;
    }
    const newObj = isSettingsLocal()
      ? {
          ...localSettings,
          locale: globalSettings.locale,
          keybinds: globalSettings.keybinds,
          bookmarks: globalSettings.bookmarks,
        }
      : { ...globalSettings };
    const currentObj = settings$2.get();
    if (haveSettingsChanged(currentObj, newObj)) {
      settings$2.set(newObj);
      logScript('Refreshed Settings', key, null);
    }
  }
  function syncGlobalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault());
    const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Global Settings', diff);
      globalSettings = newSettings;
      refreshSettings();
    }
  }
  settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');
  function syncLocalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault(false));
    const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Local Settings', diff);
      localSettings = newSettings;
      refreshSettings();
    }
  }
  settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);
  function getSettingsValue(key) {
    return settings$2.get()?.[key];
  }
  function setSettingsValue(key, value) {
    const current = settings$2.get()?.[key];
    if (!haveSettingsChanged(current, value, key)) return;
    settings$2.setKey(key, value);
  }
  function saveSettingsValue(key, value) {
    const currentEffective = getSettingsValue(key);
    if (!haveSettingsChanged(currentEffective, value, key)) return;
    settings$2.setKey(key, value);
    if (isLocalSettingsAllowed(key)) {
      localSettings[key] = value;
      saveLocalSettings(diffObj(localSettings, getDefault(false)));
    } else {
      globalSettings[key] = value;
      saveGlobalSettings(diffObj(globalSettings, getDefault()));
    }
  }
  function changeSettingsValue(key, fn) {
    const oldValue = getSettingsValue(key);
    const newValue = fn(oldValue);
    setSettingsValue(key, newValue);
  }
  function getAppStateValue(key) {
    return appState.get()[key];
  }
  function setAppStateValue(key, value) {
    const current = appState.get()[key];
    if (_.isEqual(current, value)) return;
    appState.setKey(key, value);
  }
  function changeAppStateValue(key, fn) {
    const oldVal = appState.get()[key];
    const newVal = fn(oldVal);
    if (_.isEqual(oldVal, newVal)) return;
    appState.setKey(key, newVal);
  }
  function getLocaleString(name) {
    const currentLocale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
    if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
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
    refreshSettings();
  }
  function toggleLocalSettings(activate = false) {
    localSettings.enabled = activate;
    saveLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
    refreshSettings();
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
      key ? settings$2.get()[key] : settings$2.get(),
      '\nGlobal Settings',
      key ? globalSettings[key] : globalSettings,
      '\nLocal Settings',
      key ? localSettings[key] : localSettings,
      '\nAppState',
      appState.get(),
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
  const darkest$1 = 10;
  const lightest$1 = 95;
  function setLightness$1(hsl, lightness) {
    hsl.l = lightness / 100;
    return tinycolor(hsl).toHexString();
  }
  function getTextColor(hex) {
    const color = tinycolor(hex);
    const hsl = color.toHsl();
    return setLightness$1(hsl, color.isDark() ? lightest$1 : darkest$1);
  }
  function sortColors(a, b) {
    const sampleShades = [600, 700, 800, 900];
    const metrics = key => {
      const hsls = sampleShades.map(sh => tinycolor(colors[key][sh]).toHsl());
      let sumX = 0,
        sumY = 0,
        count = 0;
      let sAcc = 0,
        lAcc = 0;
      for (const hsl of hsls) {
        const h = hsl.h;
        if (Number.isFinite(h)) {
          const rad = (h * Math.PI) / 180;
          sumX += Math.cos(rad);
          sumY += Math.sin(rad);
          count++;
        }
        sAcc += hsl.s;
        lAcc += hsl.l;
      }
      const hue = count > 0 ? ((Math.atan2(sumY, sumX) * 180) / Math.PI + 360) % 360 : 9999;
      const sat = sAcc / hsls.length;
      const light = lAcc / hsls.length;
      return { hue, sat, light };
    };
    const A = metrics(a);
    const B = metrics(b);
    if (A.hue === B.hue) {
      if (A.sat === B.sat) {
        if (A.light === B.light) return colors[a].name.localeCompare(colors[b].name);
        return A.light - B.light;
      }
      return B.sat - A.sat;
    }
    return A.hue - B.hue;
  }
  const LIGHTNESS_MAP = [0.96, 0.907, 0.805, 0.697, 0.605, 0.547, 0.518, 0.445, 0.395, 0.34];
  const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];
  function getClosestLightness(colorObject) {
    const lightnessGoal = colorObject.getLuminance();
    return LIGHTNESS_MAP.reduce((prev, curr) =>
      Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev,
    );
  }
  function generateColorsMap(color) {
    const colorObject = tinycolor(color);
    const closestLightness = getClosestLightness(colorObject);
    const baseColorIndex = LIGHTNESS_MAP.indexOf(closestLightness);
    const colors2 = LIGHTNESS_MAP.map(l =>
      tinycolor({
        h: colorObject.toHsl().h,
        s: colorObject.toHsl().s,
        l,
      }),
    ).map((c, i) => {
      const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
      return saturationDelta >= 0
        ? c.saturate(saturationDelta * 100)
        : c.desaturate(Math.abs(saturationDelta * 100));
    });
    colors2[baseColorIndex] = tinycolor(color);
    return { baseColorIndex, colors: colors2 };
  }
  function generateColors(color) {
    return generateColorsMap(color).colors.map(c => c.toHexString());
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

  function head(manga) {
    return html`
      <title>${manga.title}</title>
      <meta charset="UTF-8" />
      ${wrapStyle('externals', sweetalertStyle)}
    `;
  }

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$4 = globalThis,
    e$7 =
      t$4.ShadowRoot &&
      (void 0 === t$4.ShadyCSS || t$4.ShadyCSS.nativeShadow) &&
      'adoptedStyleSheets' in Document.prototype &&
      'replace' in CSSStyleSheet.prototype,
    s$2 = Symbol(),
    o$a = new WeakMap();
  let n$4 = class n {
    constructor(t, e, o) {
      if (((this._$cssResult$ = true), o !== s$2))
        throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      ((this.cssText = t), (this.t = e));
    }
    get styleSheet() {
      let t = this.o;
      const s = this.t;
      if (e$7 && void 0 === t) {
        const e = void 0 !== s && 1 === s.length;
        (e && (t = o$a.get(s)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$a.set(s, t)));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$4 = t => new n$4('string' == typeof t ? t : t + '', void 0, s$2),
    i$5 = (t, ...e) => {
      const o =
        1 === t.length
          ? t[0]
          : e.reduce(
              (e, s, o) =>
                e +
                (t => {
                  if (true === t._$cssResult$) return t.cssText;
                  if ('number' == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                  );
                })(s) +
                t[o + 1],
              t[0],
            );
      return new n$4(o, t, s$2);
    },
    S$1 = (s, o) => {
      if (e$7) s.adoptedStyleSheets = o.map(t => (t instanceof CSSStyleSheet ? t : t.styleSheet));
      else
        for (const e of o) {
          const o = document.createElement('style'),
            n = t$4.litNonce;
          (void 0 !== n && o.setAttribute('nonce', n),
            (o.textContent = e.cssText),
            s.appendChild(o));
        }
    },
    c$2 = e$7
      ? t => t
      : t =>
          t instanceof CSSStyleSheet
            ? (t => {
                let e = '';
                for (const s of t.cssRules) e += s.cssText;
                return r$4(e);
              })(t)
            : t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const {
      is: i$4,
      defineProperty: e$6,
      getOwnPropertyDescriptor: h$1,
      getOwnPropertyNames: r$3,
      getOwnPropertySymbols: o$9,
      getPrototypeOf: n$3,
    } = Object,
    a$1 = globalThis,
    c$1 = a$1.trustedTypes,
    l$1 = c$1 ? c$1.emptyScript : '',
    p$1 = a$1.reactiveElementPolyfillSupport,
    d$1 = (t, s) => t,
    u$1 = {
      toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, s) {
        let i = t;
        switch (s) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      },
    },
    f$1 = (t, s) => !i$4(t, s),
    b = {
      attribute: true,
      type: String,
      converter: u$1,
      reflect: false,
      useDefault: false,
      hasChanged: f$1,
    };
  ((Symbol.metadata ??= Symbol('metadata')), (a$1.litPropertyMetadata ??= new WeakMap()));
  let y$1 = class y extends HTMLElement {
    static addInitializer(t) {
      (this._$Ei(), (this.l ??= []).push(t));
    }
    static get observedAttributes() {
      return (this.finalize(), this._$Eh && [...this._$Eh.keys()]);
    }
    static createProperty(t, s = b) {
      if (
        (s.state && (s.attribute = false),
        this._$Ei(),
        this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = true),
        this.elementProperties.set(t, s),
        !s.noAccessor)
      ) {
        const i = Symbol(),
          h = this.getPropertyDescriptor(t, i, s);
        void 0 !== h && e$6(this.prototype, t, h);
      }
    }
    static getPropertyDescriptor(t, s, i) {
      const { get: e, set: r } = h$1(this.prototype, t) ?? {
        get() {
          return this[s];
        },
        set(t) {
          this[s] = t;
        },
      };
      return {
        get: e,
        set(s) {
          const h = e?.call(this);
          (r?.call(this, s), this.requestUpdate(t, h, i));
        },
        configurable: true,
        enumerable: true,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1('elementProperties'))) return;
      const t = n$3(this);
      (t.finalize(),
        void 0 !== t.l && (this.l = [...t.l]),
        (this.elementProperties = new Map(t.elementProperties)));
    }
    static finalize() {
      if (this.hasOwnProperty(d$1('finalized'))) return;
      if (((this.finalized = true), this._$Ei(), this.hasOwnProperty(d$1('properties')))) {
        const t = this.properties,
          s = [...r$3(t), ...o$9(t)];
        for (const i of s) this.createProperty(i, t[i]);
      }
      const t = this[Symbol.metadata];
      if (null !== t) {
        const s = litPropertyMetadata.get(t);
        if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
      }
      this._$Eh = new Map();
      for (const [t, s] of this.elementProperties) {
        const i = this._$Eu(t, s);
        void 0 !== i && this._$Eh.set(i, t);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
      const i = [];
      if (Array.isArray(s)) {
        const e = new Set(s.flat(1 / 0).reverse());
        for (const s of e) i.unshift(c$2(s));
      } else void 0 !== s && i.push(c$2(s));
      return i;
    }
    static _$Eu(t, s) {
      const i = s.attribute;
      return false === i
        ? void 0
        : 'string' == typeof i
          ? i
          : 'string' == typeof t
            ? t.toLowerCase()
            : void 0;
    }
    constructor() {
      (super(),
        (this._$Ep = void 0),
        (this.isUpdatePending = false),
        (this.hasUpdated = false),
        (this._$Em = null),
        this._$Ev());
    }
    _$Ev() {
      ((this._$ES = new Promise(t => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach(t => t(this)));
    }
    addController(t) {
      ((this._$EO ??= new Set()).add(t),
        void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.());
    }
    removeController(t) {
      this._$EO?.delete(t);
    }
    _$E_() {
      const t = new Map(),
        s = this.constructor.elementProperties;
      for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return (S$1(t, this.constructor.elementStyles), t);
    }
    connectedCallback() {
      ((this.renderRoot ??= this.createRenderRoot()),
        this.enableUpdating(true),
        this._$EO?.forEach(t => t.hostConnected?.()));
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      this._$EO?.forEach(t => t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
    _$ET(t, s) {
      const i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (void 0 !== e && true === i.reflect) {
        const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
        ((this._$Em = t),
          null == h ? this.removeAttribute(e) : this.setAttribute(e, h),
          (this._$Em = null));
      }
    }
    _$AK(t, s) {
      const i = this.constructor,
        e = i._$Eh.get(t);
      if (void 0 !== e && this._$Em !== e) {
        const t = i.getPropertyOptions(e),
          h =
            'function' == typeof t.converter
              ? { fromAttribute: t.converter }
              : void 0 !== t.converter?.fromAttribute
                ? t.converter
                : u$1;
        this._$Em = e;
        const r = h.fromAttribute(s, t.type);
        ((this[e] = r ?? this._$Ej?.get(e) ?? r), (this._$Em = null));
      }
    }
    requestUpdate(t, s, i) {
      if (void 0 !== t) {
        const e = this.constructor,
          h = this[t];
        if (
          ((i ??= e.getPropertyOptions(t)),
          !(
            (i.hasChanged ?? f$1)(h, s) ||
            (i.useDefault &&
              i.reflect &&
              h === this._$Ej?.get(t) &&
              !this.hasAttribute(e._$Eu(t, i)))
          ))
        )
          return;
        this.C(t, s, i);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
      (i &&
        !(this._$Ej ??= new Map()).has(t) &&
        (this._$Ej.set(t, r ?? s ?? this[t]), true !== h || void 0 !== r)) ||
        (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)),
        true === e && this._$Em !== t && (this._$Eq ??= new Set()).add(t));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return (null != t && (await t), !this.isUpdatePending);
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
          for (const [t, s] of this._$Ep) this[t] = s;
          this._$Ep = void 0;
        }
        const t = this.constructor.elementProperties;
        if (t.size > 0)
          for (const [s, i] of t) {
            const { wrapped: t } = i,
              e = this[s];
            true !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
          }
      }
      let t = false;
      const s = this._$AL;
      try {
        ((t = this.shouldUpdate(s)),
          t
            ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s))
            : this._$EM());
      } catch (s) {
        throw ((t = false), this._$EM(), s);
      }
      t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
      (this._$EO?.forEach(t => t.hostUpdated?.()),
        this.hasUpdated || ((this.hasUpdated = true), this.firstUpdated(t)),
        this.updated(t));
    }
    _$EM() {
      ((this._$AL = new Map()), (this.isUpdatePending = false));
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      ((this._$Eq &&= this._$Eq.forEach(t => this._$ET(t, this[t]))), this._$EM());
    }
    updated(t) {}
    firstUpdated(t) {}
  };
  ((y$1.elementStyles = []),
    (y$1.shadowRootOptions = { mode: 'open' }),
    (y$1[d$1('elementProperties')] = new Map()),
    (y$1[d$1('finalized')] = new Map()),
    p$1?.({ ReactiveElement: y$1 }),
    (a$1.reactiveElementVersions ??= []).push('2.1.1'));

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = globalThis,
    i$3 = t$3.trustedTypes,
    s$1 = i$3 ? i$3.createPolicy('lit-html', { createHTML: t => t }) : void 0,
    e$5 = '$lit$',
    h = `lit$${Math.random().toFixed(9).slice(2)}$`,
    o$8 = '?' + h,
    n$2 = `<${o$8}>`,
    r$2 = document,
    l = () => r$2.createComment(''),
    c = t => null === t || ('object' != typeof t && 'function' != typeof t),
    a = Array.isArray,
    u = t => a(t) || 'function' == typeof t?.[Symbol.iterator],
    d = '[ \t\n\f\r]',
    f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _$1 = />/g,
    m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, 'g'),
    p = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y =
      t =>
      (i, ...s) => ({ _$litType$: t, strings: i, values: s }),
    x$1 = y(1),
    T = Symbol.for('lit-noChange'),
    E = Symbol.for('lit-nothing'),
    A = new WeakMap(),
    C = r$2.createTreeWalker(r$2, 129);
  function P(t, i) {
    if (!a(t) || !t.hasOwnProperty('raw')) throw Error('invalid template strings array');
    return void 0 !== s$1 ? s$1.createHTML(i) : i;
  }
  const V = (t, i) => {
    const s = t.length - 1,
      o = [];
    let r,
      l = 2 === i ? '<svg>' : 3 === i ? '<math>' : '',
      c = f;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let a,
        u,
        d = -1,
        y = 0;
      for (; y < s.length && ((c.lastIndex = y), (u = c.exec(s)), null !== u); )
        ((y = c.lastIndex),
          c === f
            ? '!--' === u[1]
              ? (c = v)
              : void 0 !== u[1]
                ? (c = _$1)
                : void 0 !== u[2]
                  ? ($.test(u[2]) && (r = RegExp('</' + u[2], 'g')), (c = m))
                  : void 0 !== u[3] && (c = m)
            : c === m
              ? '>' === u[0]
                ? ((c = r ?? f), (d = -1))
                : void 0 === u[1]
                  ? (d = -2)
                  : ((d = c.lastIndex - u[2].length),
                    (a = u[1]),
                    (c = void 0 === u[3] ? m : '"' === u[3] ? g : p))
              : c === g || c === p
                ? (c = m)
                : c === v || c === _$1
                  ? (c = f)
                  : ((c = m), (r = void 0)));
      const x = c === m && t[i + 1].startsWith('/>') ? ' ' : '';
      l +=
        c === f
          ? s + n$2
          : d >= 0
            ? (o.push(a), s.slice(0, d) + e$5 + s.slice(d) + h + x)
            : s + h + (-2 === d ? i : x);
    }
    return [P(t, l + (t[s] || '<?>') + (2 === i ? '</svg>' : 3 === i ? '</math>' : '')), o];
  };
  class N {
    constructor({ strings: t, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let c = 0,
        a = 0;
      const u = t.length - 1,
        d = this.parts,
        [f, v] = V(t, s);
      if (
        ((this.el = N.createElement(f, n)), (C.currentNode = this.el.content), 2 === s || 3 === s)
      ) {
        const t = this.el.content.firstChild;
        t.replaceWith(...t.childNodes);
      }
      for (; null !== (r = C.nextNode()) && d.length < u; ) {
        if (1 === r.nodeType) {
          if (r.hasAttributes())
            for (const t of r.getAttributeNames())
              if (t.endsWith(e$5)) {
                const i = v[a++],
                  s = r.getAttribute(t).split(h),
                  e = /([.?@])?(.*)/.exec(i);
                (d.push({
                  type: 1,
                  index: c,
                  name: e[2],
                  strings: s,
                  ctor: '.' === e[1] ? H : '?' === e[1] ? I : '@' === e[1] ? L : k,
                }),
                  r.removeAttribute(t));
              } else t.startsWith(h) && (d.push({ type: 6, index: c }), r.removeAttribute(t));
          if ($.test(r.tagName)) {
            const t = r.textContent.split(h),
              s = t.length - 1;
            if (s > 0) {
              r.textContent = i$3 ? i$3.emptyScript : '';
              for (let i = 0; i < s; i++)
                (r.append(t[i], l()), C.nextNode(), d.push({ type: 2, index: ++c }));
              r.append(t[s], l());
            }
          }
        } else if (8 === r.nodeType)
          if (r.data === o$8) d.push({ type: 2, index: c });
          else {
            let t = -1;
            for (; -1 !== (t = r.data.indexOf(h, t + 1)); )
              (d.push({ type: 7, index: c }), (t += h.length - 1));
          }
        c++;
      }
    }
    static createElement(t, i) {
      const s = r$2.createElement('template');
      return ((s.innerHTML = t), s);
    }
  }
  function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return (
      h?.constructor !== o &&
        (h?._$AO?.(false),
        void 0 === o ? (h = void 0) : ((h = new o(t)), h._$AT(t, s, e)),
        void 0 !== e ? ((s._$Co ??= [])[e] = h) : (s._$Cl = h)),
      void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)),
      i
    );
  }
  class M {
    constructor(t, i) {
      ((this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i));
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const {
          el: { content: i },
          parts: s,
        } = this._$AD,
        e = (t?.creationScope ?? r$2).importNode(i, true);
      C.currentNode = e;
      let h = C.nextNode(),
        o = 0,
        n = 0,
        l = s[0];
      for (; void 0 !== l; ) {
        if (o === l.index) {
          let i;
          (2 === l.type
            ? (i = new R(h, h.nextSibling, this, t))
            : 1 === l.type
              ? (i = new l.ctor(h, l.name, l.strings, this, t))
              : 6 === l.type && (i = new z(h, this, t)),
            this._$AV.push(i),
            (l = s[++n]));
        }
        o !== l?.index && ((h = C.nextNode()), o++);
      }
      return ((C.currentNode = r$2), e);
    }
    p(t) {
      let i = 0;
      for (const s of this._$AV)
        (void 0 !== s &&
          (void 0 !== s.strings ? (s._$AI(t, s, i), (i += s.strings.length - 2)) : s._$AI(t[i])),
          i++);
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e) {
      ((this.type = 2),
        (this._$AH = E),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = i),
        (this._$AM = s),
        (this.options = e),
        (this._$Cv = e?.isConnected ?? true));
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const i = this._$AM;
      return (void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t);
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, i = this) {
      ((t = S(this, t, i)),
        c(t)
          ? t === E || null == t || '' === t
            ? (this._$AH !== E && this._$AR(), (this._$AH = E))
            : t !== this._$AH && t !== T && this._(t)
          : void 0 !== t._$litType$
            ? this.$(t)
            : void 0 !== t.nodeType
              ? this.T(t)
              : u(t)
                ? this.k(t)
                : this._(t));
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
    }
    _(t) {
      (this._$AH !== E && c(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(r$2.createTextNode(t)),
        (this._$AH = t));
    }
    $(t) {
      const { values: i, _$litType$: s } = t,
        e =
          'number' == typeof s
            ? this._$AC(t)
            : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
      if (this._$AH?._$AD === e) this._$AH.p(i);
      else {
        const t = new M(e, this),
          s = t.u(this.options);
        (t.p(i), this.T(s), (this._$AH = t));
      }
    }
    _$AC(t) {
      let i = A.get(t.strings);
      return (void 0 === i && A.set(t.strings, (i = new N(t))), i);
    }
    k(t) {
      a(this._$AH) || ((this._$AH = []), this._$AR());
      const i = this._$AH;
      let s,
        e = 0;
      for (const h of t)
        (e === i.length
          ? i.push((s = new R(this.O(l()), this.O(l()), this, this.options)))
          : (s = i[e]),
          s._$AI(h),
          e++);
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
    }
    _$AR(t = this._$AA.nextSibling, i) {
      for (this._$AP?.(false, true, i); t !== this._$AB; ) {
        const i = t.nextSibling;
        (t.remove(), (t = i));
      }
    }
    setConnected(t) {
      void 0 === this._$AM && ((this._$Cv = t), this._$AP?.(t));
    }
  }
  class k {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, i, s, e, h) {
      ((this.type = 1),
        (this._$AH = E),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = i),
        (this._$AM = e),
        (this.options = h),
        s.length > 2 || '' !== s[0] || '' !== s[1]
          ? ((this._$AH = Array(s.length - 1).fill(new String())), (this.strings = s))
          : (this._$AH = E));
    }
    _$AI(t, i = this, s, e) {
      const h = this.strings;
      let o = false;
      if (void 0 === h)
        ((t = S(this, t, i, 0)), (o = !c(t) || (t !== this._$AH && t !== T)), o && (this._$AH = t));
      else {
        const e = t;
        let n, r;
        for (t = h[0], n = 0; n < h.length - 1; n++)
          ((r = S(this, e[s + n], i, n)),
            r === T && (r = this._$AH[n]),
            (o ||= !c(r) || r !== this._$AH[n]),
            r === E ? (t = E) : t !== E && (t += (r ?? '') + h[n + 1]),
            (this._$AH[n] = r));
      }
      o && !e && this.j(t);
    }
    j(t) {
      t === E
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, t ?? '');
    }
  }
  class H extends k {
    constructor() {
      (super(...arguments), (this.type = 3));
    }
    j(t) {
      this.element[this.name] = t === E ? void 0 : t;
    }
  }
  class I extends k {
    constructor() {
      (super(...arguments), (this.type = 4));
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== E);
    }
  }
  class L extends k {
    constructor(t, i, s, e, h) {
      (super(t, i, s, e, h), (this.type = 5));
    }
    _$AI(t, i = this) {
      if ((t = S(this, t, i, 0) ?? E) === T) return;
      const s = this._$AH,
        e =
          (t === E && s !== E) ||
          t.capture !== s.capture ||
          t.once !== s.once ||
          t.passive !== s.passive,
        h = t !== E && (s === E || e);
      (e && this.element.removeEventListener(this.name, this, s),
        h && this.element.addEventListener(this.name, this, t),
        (this._$AH = t));
    }
    handleEvent(t) {
      'function' == typeof this._$AH
        ? this._$AH.call(this.options?.host ?? this.element, t)
        : this._$AH.handleEvent(t);
    }
  }
  class z {
    constructor(t, i, s) {
      ((this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = i),
        (this.options = s));
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      S(this, t);
    }
  }
  const j = t$3.litHtmlPolyfillSupport;
  (j?.(N, R), (t$3.litHtmlVersions ??= []).push('3.3.1'));
  const B = (t, i, s) => {
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
      const t = s?.renderBefore ?? null;
      e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return (h._$AI(t), h);
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const s = globalThis;
  let i$2 = class i extends y$1 {
    constructor() {
      (super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0));
    }
    createRenderRoot() {
      const t = super.createRenderRoot();
      return ((this.renderOptions.renderBefore ??= t.firstChild), t);
    }
    update(t) {
      const r = this.render();
      (this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Do = B(r, this.renderRoot, this.renderOptions)));
    }
    connectedCallback() {
      (super.connectedCallback(), this._$Do?.setConnected(true));
    }
    disconnectedCallback() {
      (super.disconnectedCallback(), this._$Do?.setConnected(false));
    }
    render() {
      return T;
    }
  };
  ((i$2._$litElement$ = true),
    (i$2['finalized'] = true),
    s.litElementHydrateSupport?.({ LitElement: i$2 }));
  const o$7 = s.litElementPolyfillSupport;
  o$7?.({ LitElement: i$2 });
  (s.litElementVersions ??= []).push('4.2.1');

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = t => (e, o) => {
    void 0 !== o
      ? o.addInitializer(() => {
          customElements.define(t, e);
        })
      : customElements.define(t, e);
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const o$6 = {
      attribute: true,
      type: String,
      converter: u$1,
      reflect: false,
      hasChanged: f$1,
    },
    r$1 = (t = o$6, e, r) => {
      const { kind: n, metadata: i } = r;
      let s = globalThis.litPropertyMetadata.get(i);
      if (
        (void 0 === s && globalThis.litPropertyMetadata.set(i, (s = new Map())),
        'setter' === n && ((t = Object.create(t)).wrapped = true),
        s.set(r.name, t),
        'accessor' === n)
      ) {
        const { name: o } = r;
        return {
          set(r) {
            const n = e.get.call(this);
            (e.set.call(this, r), this.requestUpdate(o, n, t));
          },
          init(e) {
            return (void 0 !== e && this.C(o, void 0, t, e), e);
          },
        };
      }
      if ('setter' === n) {
        const { name: o } = r;
        return function (r) {
          const n = this[o];
          (e.call(this, r), this.requestUpdate(o, n, t));
        };
      }
      throw Error('Unsupported decorator location: ' + n);
    };
  function n$1(t) {
    return (e, o) =>
      'object' == typeof o
        ? r$1(t, e, o)
        : ((t, e, o) => {
            const r = e.hasOwnProperty(o);
            return (
              e.constructor.createProperty(o, t),
              r ? Object.getOwnPropertyDescriptor(e, o) : void 0
            );
          })(t, e, o);
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function r(r) {
    return n$1({ ...r, state: true, attribute: false });
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$4 = (e, t, c) => (
    (c.configurable = true),
    (c.enumerable = true),
    Reflect.decorate && 'object' != typeof t && Object.defineProperty(e, t, c),
    c
  );

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$3(e, r) {
    return (n, s, i) => {
      const o = t => t.renderRoot?.querySelector(e) ?? null;
      return e$4(n, s, {
        get() {
          return o(this);
        },
      });
    };
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = { ATTRIBUTE: 1, CHILD: 2 },
    e$2 =
      t =>
      (...e) => ({ _$litDirective$: t, values: e });
  let i$1 = class i {
    constructor(t) {}
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t, e, i) {
      ((this._$Ct = t), (this._$AM = e), (this._$Ci = i));
    }
    _$AS(t, e) {
      return this.update(t, e);
    }
    update(t, e) {
      return this.render(...e);
    }
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ let e$1 = class e extends i$1 {
    constructor(i) {
      if ((super(i), (this.it = E), i.type !== t$1.CHILD))
        throw Error(this.constructor.directiveName + '() can only be used in child bindings');
    }
    render(r) {
      if (r === E || null == r) return ((this._t = void 0), (this.it = r));
      if (r === T) return r;
      if ('string' != typeof r)
        throw Error(this.constructor.directiveName + '() called with a non-string value');
      if (r === this.it) return this._t;
      this.it = r;
      const s = [r];
      return (
        (s.raw = s),
        (this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] })
      );
    }
  };
  ((e$1.directiveName = 'unsafeHTML'), (e$1.resultType = 1));
  const o$5 = e$2(e$1);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class t extends e$1 {}
  ((t.directiveName = 'unsafeSVG'), (t.resultType = 2));
  const o$4 = e$2(t);

  function toPascalCase(name) {
    if (name.startsWith('Icon') && !name.includes('-') && !name.includes('_')) {
      return name;
    }
    const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;
    const parts = withoutPrefix.split(/[-_]/);
    const pascalCased = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    return `Icon${pascalCased}`;
  }

  const icons =
    '.icon-tabler {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  vertical-align: sub;\r\n}\r\n\r\n.icon-tabler-file-download > :nth-child(n + 4) {\r\n  /* 4, 5 */\r\n  color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n  /* 3,4,5,6 */\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n  /* 3,4,5,6 */\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n  color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n  color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-book-return > g {\r\n  color: greenyellow;\r\n}\r\n';

  const arrowAutofitDown =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\r\n  <path d="M18 4v17" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n</svg>\r\n';

  const arrowAutofitHeight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\r\n  <path d="M18 14v7" />\r\n  <path d="M18 3v7" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n  <path d="M15 6l3 -3l3 3" />\r\n</svg>\r\n';

  const arrowAutofitLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\r\n  <path d="M20 18h-17" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n</svg>\r\n';

  const arrowAutofitRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\r\n  <path d="M4 18h17" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const arrowAutofitWidth =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\r\n  <path d="M10 18h-7" />\r\n  <path d="M21 18h-7" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const arrowBigLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\r\n  />\r\n</svg>\r\n';

  const arrowBigRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\r\n  />\r\n</svg>\r\n';

  const arrowsMove =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 9l3 3l-3 3" />\r\n  <path d="M15 12h6" />\r\n  <path d="M6 9l-3 3l3 3" />\r\n  <path d="M3 12h6" />\r\n  <path d="M9 18l3 3l3 -3" />\r\n  <path d="M12 15v6" />\r\n  <path d="M15 6l-3 -3l-3 3" />\r\n  <path d="M12 3v6" />\r\n</svg>\r\n';

  const arrowsMoveVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M9 18l3 3l3 -3" />\r\n  <path d="M12 15v6" />\r\n  <path d="M15 6l-3 -3l-3 3" />\r\n  <path d="M12 3v6" />\r\n</svg>\r\n';

  const arrowsVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 7l4 -4l4 4" />\r\n  <path d="M8 17l4 4l4 -4" />\r\n  <path d="M12 3l0 18" />\r\n</svg>\r\n';

  const book =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6l0 13" />\r\n  <path d="M12 6l0 13" />\r\n  <path d="M21 6l0 13" />\r\n</svg>\r\n';

  const bookReturn =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-return"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />\r\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6l0 13" />\r\n  <path d="M12 6l0 13" />\r\n  <path d="M21 6l0 4" />\r\n  <g transform="rotate(-90, 19, 15)">\r\n    <path d="M15 16l3 -3l3 3" />\r\n    <path d="M18 13v9" />\r\n  </g>\r\n</svg>\r\n';

  const bookUpload =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />\r\n  <path d="M11 16h-5a2 2 0 0 0 -2 2" />\r\n  <path d="M15 16l3 -3l3 3" />\r\n  <path d="M18 13v9" />\r\n</svg>\r\n';

  const bookmark =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\r\n</svg>\r\n';

  const bookmarkOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const bookmarks$1 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmarks"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\r\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\r\n</svg>\r\n';

  const boxAlignTop =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />\r\n  <path d="M4 15.005v-.01" />\r\n  <path d="M4 20.005v-.01" />\r\n  <path d="M9 20.005v-.01" />\r\n  <path d="M15 20.005v-.01" />\r\n  <path d="M20 20.005v-.01" />\r\n  <path d="M20 15.005v-.01" />\r\n</svg>\r\n';

  const Comic1SpecialFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n    <path\r\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"\r\n      fill="#e1dde1"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r\n        fill="#3ad1e0"\r\n      />\r\n      <path\r\n        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r\n        fill="#22c7db"\r\n      />\r\n      <path\r\n        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r\n        fill="#fb33a8"\r\n      />\r\n      <path\r\n        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r\n        fill="#fb33a8"\r\n      />\r\n      <path\r\n        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"\r\n        fill="#fcb44d"\r\n      />\r\n      <path\r\n        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"\r\n        fill="#fb9927"\r\n      />\r\n      <g>\r\n        <path\r\n          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"\r\n          fill="#ae6ad8"\r\n        />\r\n        <path\r\n          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"\r\n          fill="#975bbb"\r\n        />\r\n        <g>\r\n          <g>\r\n            <circle\r\n              cx="319.023"\r\n              cy="121.497"\r\n              fill="#f2eff2"\r\n              r="26.224"\r\n            />\r\n          </g>\r\n        </g>\r\n      </g>\r\n      <path\r\n        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"\r\n        fill="#23f1a8"\r\n      />\r\n      <path\r\n        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"\r\n        fill="#27e19d"\r\n      />\r\n      <path\r\n        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"\r\n        fill="#23f1a8"\r\n      />\r\n      <path\r\n        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"\r\n        fill="#27e19d"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"\r\n        fill="#fdef63"\r\n      />\r\n      <path\r\n        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"\r\n        fill="#f3d730"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"\r\n          fill="#554e55"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"\r\n          fill="#554e55"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic1SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #f2eff2"\r\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #e1dde1"\r\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #3ad1e0"\r\n        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"\r\n      />\r\n      <path\r\n        style="fill: #22c7db"\r\n        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"\r\n      />\r\n      <path\r\n        style="fill: #fb33a8"\r\n        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"\r\n      />\r\n      <path\r\n        style="fill: #ee2d9a"\r\n        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"\r\n      />\r\n      <path\r\n        style="fill: #fcb44d"\r\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"\r\n      />\r\n      <path\r\n        style="fill: #fb9927"\r\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"\r\n      />\r\n      <g>\r\n        <path\r\n          style="fill: #ae6ad8"\r\n          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"\r\n        />\r\n        <path\r\n          style="fill: #975bbb"\r\n          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"\r\n        />\r\n        <g>\r\n          <circle\r\n            style="fill: #f2eff2"\r\n            cx="317.179"\r\n            cy="125.438"\r\n            r="25.456"\r\n          />\r\n\r\n          <circle\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            cx="317.179"\r\n            cy="125.438"\r\n            r="25.456"\r\n          />\r\n        </g>\r\n      </g>\r\n      <path\r\n        style="fill: #23f1a8"\r\n        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"\r\n      />\r\n      <path\r\n        style="fill: #27e19d"\r\n        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"\r\n      />\r\n      <path\r\n        style="fill: #23f1a8"\r\n        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"\r\n      />\r\n      <path\r\n        style="fill: #27e19d"\r\n        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #fdef63"\r\n        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r\n      />\r\n      <path\r\n        style="fill: #f3d730"\r\n        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="230.156"\r\n        y1="339.714"\r\n        x2="230.156"\r\n        y2="311.299"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="230.156"\r\n        y1="364.644"\r\n        x2="230.156"\r\n        y2="366.646"\r\n      />\r\n    </g>\r\n    <g>\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="240.429"\r\n        y1="83.83"\r\n        x2="258.124"\r\n        y2="83.83"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="248.276"\r\n        y1="107.911"\r\n        x2="265.97"\r\n        y2="107.911"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic2SpecialFlat =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\r\n\r\n<svg\r\n  version="1.1"\r\n  id="svg3390"\r\n  xml:space="preserve"\r\n  width="682.66669"\r\n  height="682.66669"\r\n  viewBox="0 0 682.66669 682.66669"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <defs id="defs3394">\r\n    <clipPath\r\n      clipPathUnits="userSpaceOnUse"\r\n      id="clipPath3404"\r\n    >\r\n      <path\r\n        d="M 0,512 H 512 V 0 H 0 Z"\r\n        id="path3402"\r\n      />\r\n    </clipPath>\r\n  </defs>\r\n  <g\r\n    id="g3396"\r\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r\n  >\r\n    <g id="g3398">\r\n      <g\r\n        id="g3400"\r\n        clip-path="url(#clipPath3404)"\r\n      >\r\n        <g\r\n          id="g3406"\r\n          transform="translate(451.7344)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"\r\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3408"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3410"\r\n          transform="translate(472.3376,41.2072)"\r\n        >\r\n          <path\r\n            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"\r\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3412"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3414"\r\n          transform="translate(235.3964,198.1382)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3416"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3418"\r\n          transform="translate(235.3964,198.1382)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3420"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3422"\r\n          transform="translate(80.8692,198.1382)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"\r\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3424"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3426"\r\n          transform="translate(80.8692,432.6757)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"\r\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3428"\r\n          />\r\n        </g>\r\n        <path\r\n          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"\r\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n          id="path3430"\r\n        />\r\n        <g\r\n          id="g3432"\r\n          transform="translate(194.475,156.931)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"\r\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3434"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3436"\r\n          transform="translate(213.2632,94.3332)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3438"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3440"\r\n          transform="translate(298.7368,94.3332)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3442"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3444"\r\n          transform="translate(202.8374,123.7057)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -10.216"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3446"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3448"\r\n          transform="translate(309.1625,123.7057)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -10.216"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3450"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3452"\r\n          transform="translate(241.984,113.7942)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3454"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3456"\r\n          transform="translate(150.0629,447.8862)"\r\n        >\r\n          <path\r\n            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"\r\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3458"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3460"\r\n          transform="translate(80.8692,432.6757)"\r\n        >\r\n          <path\r\n            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"\r\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3462"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3464"\r\n          transform="translate(431.1308,271.141)"\r\n        >\r\n          <path\r\n            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3466"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic2SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\r\n\r\n<svg\r\n  version="1.1"\r\n  id="svg5007"\r\n  xml:space="preserve"\r\n  width="682.66669"\r\n  height="682.66669"\r\n  viewBox="0 0 682.66669 682.66669"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <defs id="defs5011">\r\n    <clipPath\r\n      clipPathUnits="userSpaceOnUse"\r\n      id="clipPath5021"\r\n    >\r\n      <path\r\n        d="M 0,512 H 512 V 0 H 0 Z"\r\n        id="path5019"\r\n      />\r\n    </clipPath>\r\n  </defs>\r\n  <g\r\n    id="g5013"\r\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r\n  >\r\n    <g id="g5015">\r\n      <g\r\n        id="g5017"\r\n        clip-path="url(#clipPath5021)"\r\n      >\r\n        <g\r\n          id="g5023"\r\n          transform="translate(446,7.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"\r\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5025"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5027"\r\n          transform="translate(465.9996,47.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"\r\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5029"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5031"\r\n          transform="translate(236,199.8333)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 190 V 264.667 H 80 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5033"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5035"\r\n          transform="translate(236,199.8333)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 190 V 264.667 H 80 Z"\r\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5037"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5039"\r\n          transform="translate(86,199.8333)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5041"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5043"\r\n          transform="translate(86,427.4996)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"\r\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5045"\r\n          />\r\n        </g>\r\n        <path\r\n          d="M 426,47.5 H 86 v 112.333 h 340 z"\r\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n          id="path5047"\r\n        />\r\n        <g\r\n          id="g5049"\r\n          transform="translate(196.2775,159.8334)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"\r\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5051"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5053"\r\n          transform="translate(214.5152,99.0695)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5055"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5057"\r\n          transform="translate(297.4848,99.0695)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5059"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5061"\r\n          transform="translate(204.3949,127.5815)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -9.916"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5063"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5065"\r\n          transform="translate(307.605,127.5815)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -9.916"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5067"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5069"\r\n          transform="translate(242.3946,117.9604)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5071"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5073"\r\n          transform="translate(153.1665,442.2645)"\r\n        >\r\n          <path\r\n            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"\r\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5075"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5077"\r\n          transform="translate(86,427.4996)"\r\n        >\r\n          <path\r\n            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"\r\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5079"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5081"\r\n          transform="translate(426,270.6974)"\r\n        >\r\n          <path\r\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5083"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5085"\r\n          transform="translate(446,7.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5087"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5089"\r\n          transform="translate(426,346.167)"\r\n        >\r\n          <path\r\n            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5091"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5093"\r\n          transform="translate(86,199.8333)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5095"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5097"\r\n          transform="translate(154.0172,159.8334)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5099"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5101"\r\n          transform="translate(86,307.9314)"\r\n        >\r\n          <path\r\n            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5103"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5105"\r\n          transform="translate(426,270.6974)"\r\n        >\r\n          <path\r\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5107"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic3SpecialFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n    <path\r\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"\r\n      fill="#e1dde1"\r\n    />\r\n    <path\r\n      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"\r\n      fill="#3ad1e0"\r\n    />\r\n    <path\r\n      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n      fill="#20bfd5"\r\n    />\r\n    <path\r\n      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"\r\n      fill="#23f1a8"\r\n    />\r\n    <path\r\n      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"\r\n      fill="#23f1a8"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"\r\n        fill="#ae6ad8"\r\n      />\r\n      <path\r\n        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"\r\n        fill="#975bbb"\r\n      />\r\n    </g>\r\n    <path\r\n      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"\r\n      fill="#27e19d"\r\n    />\r\n    <path\r\n      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"\r\n      fill="#ae6ad8"\r\n    />\r\n    <path\r\n      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n      fill="#975bbb"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"\r\n        fill="#3ad1e0"\r\n      />\r\n      <path\r\n        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n        fill="#20bfd5"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"\r\n        fill="#fb54b6"\r\n      />\r\n    </g>\r\n    <path\r\n      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"\r\n      fill="#fb9927"\r\n    />\r\n    <path\r\n      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"\r\n      fill="#f98824"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n        fill="#fb33a8"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"\r\n          fill="#fdef63"\r\n        />\r\n        <g>\r\n          <g id="XMLID_00000127012381744132405410000009872483291948348836_">\r\n            <path\r\n              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n          <g id="XMLID_00000080918978500845250090000017315552773041050031_">\r\n            <path\r\n              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n          <g id="XMLID_00000140711681861242238370000008769002181148908969_">\r\n            <path\r\n              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n        </g>\r\n        <path\r\n          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"\r\n          fill="#f3d730"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <g>\r\n          <circle\r\n            cx="187.8"\r\n            cy="385.284"\r\n            fill="#d8b2ec"\r\n            r="25.455"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g id="XMLID_00000028301319025648580530000009457246182494066313_">\r\n        <path\r\n          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic3SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #f2eff2"\r\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #e1dde1"\r\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #3ad1e0"\r\n      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"\r\n    />\r\n    <path\r\n      style="fill: #20bfd5"\r\n      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"\r\n    />\r\n    <path\r\n      style="fill: #26d192"\r\n      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"\r\n    />\r\n\r\n    <line\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      x1="280.6"\r\n      y1="141.49"\r\n      x2="280.6"\r\n      y2="47.5"\r\n    />\r\n    <path\r\n      style="fill: #23f1a8"\r\n      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #ae6ad8"\r\n        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"\r\n      />\r\n      <path\r\n        style="fill: #975bbb"\r\n        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #27e19d"\r\n      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"\r\n    />\r\n    <path\r\n      style="fill: #ae6ad8"\r\n      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"\r\n    />\r\n    <path\r\n      style="fill: #975bbb"\r\n      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #3ad1e0"\r\n        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"\r\n      />\r\n      <path\r\n        style="fill: #20bfd5"\r\n        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #fb54b6"\r\n        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #fb9927"\r\n      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"\r\n    />\r\n    <path\r\n      style="fill: #f98824"\r\n      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #fb33a8"\r\n        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #fdef63"\r\n          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"\r\n        />\r\n        <g>\r\n          <line\r\n            id="XMLID_00000127012381744132405410000009872483291948348836_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="279.433"\r\n            y1="224.908"\r\n            x2="279.433"\r\n            y2="224.805"\r\n          />\r\n\r\n          <line\r\n            id="XMLID_00000080918978500845250090000017315552773041050031_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="256.002"\r\n            y1="224.908"\r\n            x2="256.002"\r\n            y2="224.805"\r\n          />\r\n\r\n          <line\r\n            id="XMLID_00000140711681861242238370000008769002181148908969_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="232.572"\r\n            y1="224.908"\r\n            x2="232.572"\r\n            y2="224.805"\r\n          />\r\n        </g>\r\n        <path\r\n          style="fill: #f3d730"\r\n          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"\r\n        />\r\n      </g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"\r\n      />\r\n    </g>\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"\r\n    />\r\n    <g>\r\n      <g>\r\n        <g>\r\n          <circle\r\n            style="fill: #d8b2ec"\r\n            cx="189.8"\r\n            cy="381.497"\r\n            r="24.709"\r\n          />\r\n\r\n          <circle\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            cx="189.8"\r\n            cy="381.497"\r\n            r="24.709"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <line\r\n        id="XMLID_00000028301319025648580530000009457246182494066313_"\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="314.674"\r\n        y1="108.185"\r\n        x2="354.689"\r\n        y2="108.075"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="333.566"\r\n        y1="80.805"\r\n        x2="354.689"\r\n        y2="80.805"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const category =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-category"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4h6v6h-6z" />\r\n  <path d="M14 4h6v6h-6z" />\r\n  <path d="M4 14h6v6h-6z" />\r\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n</svg>\r\n';

  const check =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-check"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M5 12l5 5l10 -10" />\r\n</svg>\r\n';

  const chevronRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M9 6l6 6l-6 6" />\r\n</svg>\r\n';

  const deviceFloppy =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-device-floppy"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\r\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M14 4l0 4l-6 0l0 -4" />\r\n</svg>\r\n';

  const dotsVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n';

  const EReader1KawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  viewBox="0 0 512 512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"\r\n        fill="#636978"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"\r\n        fill="#555a66"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"\r\n        fill="#96e8ff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"\r\n        fill="#80dbff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"\r\n        fill="#fff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"\r\n        fill="#f5fafc"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"\r\n        fill="#e1f1fa"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r\n          fill="#19cffc"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r\n          fill="#19cffc"\r\n        />\r\n      </g>\r\n      <g>\r\n        <g>\r\n          <path\r\n            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n        <g>\r\n          <path\r\n            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n        <g>\r\n          <path\r\n            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n</svg>\r\n';

  const EReader1KawaiiLinealColor =
    '<svg\r\n  version="1.1"\r\n  id="Capa_1"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n>\r\n  <g>\r\n    <path\r\n      style="fill: #636978"\r\n      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"\r\n    />\r\n    <path\r\n      style="fill: #555a66"\r\n      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"\r\n    />\r\n    <path\r\n      style="fill: #96e8ff"\r\n      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"\r\n    />\r\n    <path\r\n      style="fill: #80dbff"\r\n      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"\r\n    />\r\n    <path\r\n      style="fill: #ffffff"\r\n      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"\r\n    />\r\n    <path\r\n      style="fill: #f5fafc"\r\n      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"\r\n    />\r\n    <path\r\n      style="fill: #e1f1fa"\r\n      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="176"\r\n        y1="281.01"\r\n        x2="336"\r\n        y2="281.01"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="176"\r\n        y1="321.01"\r\n        x2="336"\r\n        y2="321.01"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="256"\r\n        y1="115.517"\r\n        x2="256"\r\n        y2="229.706"\r\n      />\r\n      <g>\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="193.551"\r\n          y1="362.07"\r\n          x2="193.551"\r\n          y2="374.07"\r\n        />\r\n\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="318.449"\r\n          y1="362.07"\r\n          x2="318.449"\r\n          y2="374.07"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n</svg>\r\n';

  const EReader2KawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <path\r\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"\r\n      fill="#9ca9ba"\r\n    />\r\n    <path\r\n      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"\r\n      fill="#e8ecf9"\r\n    />\r\n    <path\r\n      d="m93.088 209.451h65.909v31.033h-65.909z"\r\n      fill="#d7ddf5"\r\n    />\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <path\r\n        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"\r\n        fill="#495560"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const EReader2KawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 511.941 511.941"\r\n  style="enable-background: new 0 0 511.941 511.941"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"\r\n      />\r\n      <polygon\r\n        style="fill: #abb6c4"\r\n        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #9ca9ba"\r\n        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"\r\n      />\r\n      <polygon\r\n        style="fill: #c5ced6"\r\n        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"\r\n      />\r\n      <path\r\n        style="fill: #e8ecf9"\r\n        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"\r\n      />\r\n      <rect\r\n        x="97.85"\r\n        y="210.79"\r\n        style="fill: #d7ddf5"\r\n        width="63.97"\r\n        height="30.12"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"\r\n      />\r\n      <g>\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="133.2"\r\n          y1="310.695"\r\n          x2="133.2"\r\n          y2="322.695"\r\n        />\r\n\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="258.098"\r\n          y1="310.695"\r\n          x2="258.098"\r\n          y2="322.695"\r\n        />\r\n        <g>\r\n          <path\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r\n          />\r\n          <path\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const externalLink =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-external-link"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\r\n  <path d="M11 13l9 -9" />\r\n  <path d="M15 4h5v5" />\r\n</svg>\r\n';

  const eye =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\r\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\r\n</svg>\r\n';

  const eyeOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\r\n  <path\r\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const fileDownload =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-file-download"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r\n  <path d="M12 17v-6" />\r\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\r\n</svg>\r\n';

  const filePercent =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 17l4 -4" />\r\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r\n  <path d="M10 13h.01" />\r\n  <path d="M14 17h.01" />\r\n</svg>\r\n';

  const handClick =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />\r\n  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />\r\n  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />\r\n  <path\r\n    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"\r\n  />\r\n  <path d="M5 3l-1 -1" />\r\n  <path d="M4 7h-1" />\r\n  <path d="M14 3l1 -1" />\r\n  <path d="M15 6h1" />\r\n</svg>\r\n';

  const keyboard =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-keyboard"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\r\n  <path d="M6 10l0 .01" />\r\n  <path d="M10 10l0 .01" />\r\n  <path d="M14 10l0 .01" />\r\n  <path d="M18 10l0 .01" />\r\n  <path d="M6 14l0 .01" />\r\n  <path d="M18 14l0 .01" />\r\n  <path d="M10 14l4 .01" />\r\n</svg>\r\n';

  const layoutBottombar =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M4 15l16 0" />\r\n</svg>\r\n';

  const layoutBottombarInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M4 15h1" />\r\n  <path d="M19 15h1" />\r\n  <path d="M9 15h1" />\r\n  <path d="M14 15h1" />\r\n</svg>\r\n';

  const layoutSidebar =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M9 4l0 16" />\r\n</svg>\r\n';

  const layoutSidebarInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M9 4v1" />\r\n  <path d="M9 9v1" />\r\n  <path d="M9 14v1" />\r\n  <path d="M9 19v1" />\r\n</svg>\r\n';

  const layoutSidebarRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M15 4l0 16" />\r\n</svg>\r\n';

  const layoutSidebarRightInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M15 4v1" />\r\n  <path d="M15 9v1" />\r\n  <path d="M15 14v1" />\r\n  <path d="M15 19v1" />\r\n</svg>\r\n';

  const listNumbers =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-list-numbers"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M11 6h9" />\r\n  <path d="M11 12h9" />\r\n  <path d="M12 18h8" />\r\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\r\n  <path d="M6 10v-6l-2 2" />\r\n</svg>\r\n';

  const loader2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-loader-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3a9 9 0 1 0 9 9" />\r\n</svg>\r\n';

  const locationCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const menu2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-menu-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6l16 0" />\r\n  <path d="M4 12l16 0" />\r\n  <path d="M4 18l16 0" />\r\n</svg>\r\n';

  const menuDeep =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6h16" />\r\n  <path d="M7 12h13" />\r\n  <path d="M10 18h10" />\r\n</svg>\r\n';

  const message =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-message"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 9h8" />\r\n  <path d="M8 13h6" />\r\n  <path\r\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r\n  />\r\n</svg>\r\n';

  const moon =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-moon"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\r\n</svg>\r\n';

  const PageKawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <path\r\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"\r\n      fill="#e8ecf9"\r\n    />\r\n    <path\r\n      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"\r\n      fill="#d7ddf5"\r\n    />\r\n    <path\r\n      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"\r\n      fill="#c5ced6"\r\n    />\r\n    <g>\r\n      <g>\r\n        <ellipse\r\n          cx="172.744"\r\n          cy="147.233"\r\n          fill="#fff"\r\n          rx="30.72"\r\n          ry="24.464"\r\n        />\r\n        <ellipse\r\n          cx="339.256"\r\n          cy="147.233"\r\n          fill="#fff"\r\n          rx="30.72"\r\n          ry="24.464"\r\n        />\r\n        <path\r\n          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const PageKawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 511.94 511.94"\r\n  style="enable-background: new 0 0 511.94 511.94"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        style="fill: #e8ecf9"\r\n        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"\r\n      />\r\n      <path\r\n        style="fill: #d7ddf5"\r\n        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"\r\n      />\r\n      <polygon\r\n        style="fill: #c5ced6"\r\n        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"\r\n      />\r\n      <polygon\r\n        style="fill: #abb6c4"\r\n        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r\n      />\r\n      <g>\r\n        <g>\r\n          <ellipse\r\n            style="fill: #ffffff"\r\n            cx="175.162"\r\n            cy="150.402"\r\n            rx="29.816"\r\n            ry="23.744"\r\n          />\r\n          <ellipse\r\n            style="fill: #ffffff"\r\n            cx="336.778"\r\n            cy="150.402"\r\n            rx="29.816"\r\n            ry="23.744"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="264.641"\r\n        y1="367.54"\r\n        x2="327.14"\r\n        y2="324.275"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="335.24"\r\n        y1="420"\r\n        x2="317.58"\r\n        y2="458.04"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="365.42"\r\n        y1="354.99"\r\n        x2="349.98"\r\n        y2="388.25"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"\r\n      />\r\n      <g>\r\n        <g>\r\n          <g>\r\n            <path\r\n              style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              "\r\n              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r\n            />\r\n            <path\r\n              style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              "\r\n              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r\n            />\r\n          </g>\r\n        </g>\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const palette =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-palette"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\r\n  />\r\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n';

  const pencil =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-pencil"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r\n  <path d="M13.5 6.5l4 4" />\r\n</svg>\r\n';

  const photo =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\r\n</svg>\r\n';

  const photoOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path\r\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\r\n  />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\r\n  <path\r\n    d="M3 3l18 18"\r\n    color="orange"\r\n  />\r\n</svg>\r\n';

  const pin =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />\r\n  <path d="M9 15l-4.5 4.5" />\r\n  <path d="M14.5 4l5.5 5.5" />\r\n</svg>\r\n';

  const playerPause =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-pause"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n</svg>\r\n';

  const playerPlay =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-play"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M7 4v16l13 -8z" />\r\n</svg>\r\n';

  const refresh =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-refresh"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\r\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\r\n</svg>\r\n';

  const settings$1 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-settings"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\r\n  />\r\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\r\n</svg>\r\n';

  const settingsOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\r\n  />\r\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const spacingVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-spacing-vertical"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\r\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\r\n  <path d="M16 12h-8" />\r\n</svg>\r\n';

  const sun =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-sun"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\r\n  <path\r\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\r\n  />\r\n</svg>\r\n';

  const trash =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-trash"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 7l16 0" />\r\n  <path d="M10 11l0 6" />\r\n  <path d="M14 11l0 6" />\r\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\r\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\r\n</svg>\r\n';

  const worldCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\r\n  <path d="M3.6 9h16.8" />\r\n  <path d="M3.6 15h8.9" />\r\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\r\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const x =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-x"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 6l-12 12" />\r\n  <path d="M6 6l12 12" />\r\n</svg>\r\n';

  const zoomCancel =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-cancel"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M8 8l4 4" />\r\n  <path d="M12 8l-4 4" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomIn =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M10 7l0 6" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomInArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 13v4" />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const zoomOut =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomOutArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const zoomPan =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-pan"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n  <path d="M17 17l-2.5 -2.5" />\r\n  <path d="M10 5l2 -2l2 2" />\r\n  <path d="M19 10l2 2l-2 2" />\r\n  <path d="M5 10l-2 2l2 2" />\r\n  <path d="M10 19l2 2l2 -2" />\r\n</svg>\r\n';

  const rawIcons = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconArrowAutofitDown: arrowAutofitDown,
        IconArrowAutofitHeight: arrowAutofitHeight,
        IconArrowAutofitLeft: arrowAutofitLeft,
        IconArrowAutofitRight: arrowAutofitRight,
        IconArrowAutofitWidth: arrowAutofitWidth,
        IconArrowBigLeft: arrowBigLeft,
        IconArrowBigRight: arrowBigRight,
        IconArrowsMove: arrowsMove,
        IconArrowsMoveVertical: arrowsMoveVertical,
        IconArrowsVertical: arrowsVertical,
        IconBook: book,
        IconBookReturn: bookReturn,
        IconBookUpload: bookUpload,
        IconBookmark: bookmark,
        IconBookmarkOff: bookmarkOff,
        IconBookmarks: bookmarks$1,
        IconBoxAlignTop: boxAlignTop,
        IconCategory: category,
        IconCheck: check,
        IconChevronRight: chevronRight,
        IconComic1: Comic1SpecialLinealColor,
        IconComic1Flat: Comic1SpecialFlat,
        IconComic2: Comic2SpecialLinealColor,
        IconComic2Flat: Comic2SpecialFlat,
        IconComic3: Comic3SpecialLinealColor,
        IconComic3Flat: Comic3SpecialFlat,
        IconDeviceFloppy: deviceFloppy,
        IconDotsVertical: dotsVertical,
        IconEReader1: EReader1KawaiiLinealColor,
        IconEReader1Flat: EReader1KawaiiFlat,
        IconEReader2: EReader2KawaiiLinealColor,
        IconEReader2Flat: EReader2KawaiiFlat,
        IconExternalLink: externalLink,
        IconEye: eye,
        IconEyeOff: eyeOff,
        IconFileDownload: fileDownload,
        IconFilePercent: filePercent,
        IconHandClick: handClick,
        IconKeyboard: keyboard,
        IconLayoutBottombar: layoutBottombar,
        IconLayoutBottombarInactive: layoutBottombarInactive,
        IconLayoutSidebar: layoutSidebar,
        IconLayoutSidebarInactive: layoutSidebarInactive,
        IconLayoutSidebarRight: layoutSidebarRight,
        IconLayoutSidebarRightInactive: layoutSidebarRightInactive,
        IconListNumbers: listNumbers,
        IconLoader2: loader2,
        IconLocationCog: locationCog,
        IconMenu2: menu2,
        IconMenuDeep: menuDeep,
        IconMessage: message,
        IconMoon: moon,
        IconPage: PageKawaiiLinealColor,
        IconPageFlat: PageKawaiiFlat,
        IconPalette: palette,
        IconPencil: pencil,
        IconPhoto: photo,
        IconPhotoOff: photoOff,
        IconPin: pin,
        IconPlayerPause: playerPause,
        IconPlayerPlay: playerPlay,
        IconRefresh: refresh,
        IconSettings: settings$1,
        IconSettingsOff: settingsOff,
        IconSpacingVertical: spacingVertical,
        IconSun: sun,
        IconTrash: trash,
        IconWorldCog: worldCog,
        IconX: x,
        IconZoomCancel: zoomCancel,
        IconZoomIn: zoomIn,
        IconZoomInArea: zoomInArea,
        IconZoomOut: zoomOut,
        IconZoomOutArea: zoomOutArea,
        IconZoomPan: zoomPan,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );

  function parseCss(css) {
    const ruleRegex = /([^{}]+)\s*\{([^}]+)\}/g;
    return [...css.matchAll(ruleRegex)]
      .map(match => {
        const selectorsBlock = match[1].trim();
        const properties = match[2];
        const colorMatch = /color:\s*([^;]+)/.exec(properties);
        if (colorMatch) {
          const color = colorMatch[1].trim();
          const selectors = selectorsBlock.split(',').map(s => s.trim().replace(/\s\s+/g, ' '));
          return { selectors, color };
        }
        return null;
      })
      .filter(rule => rule !== null);
  }
  const colorRules = parseCss(icons);
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  function applyColorsToSvg(svgString, className) {
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.documentElement;
    if (svg.querySelector('parsererror')) {
      console.error(`Error parsing SVG for ${className}`);
      return svgString;
    }
    for (const rule of colorRules) {
      for (const selector of rule.selectors) {
        if (selector.startsWith(`.${className}`)) {
          const selectorMatch = selector.match(new RegExp(`^\\.${className}\\s*(.*)$`));
          if (selectorMatch) {
            let subSelector = selectorMatch[1].trim() || '*';
            if (subSelector.startsWith('>')) {
              subSelector = subSelector.substring(1).trim();
            }
            try {
              const elements = svg.querySelectorAll(subSelector);
              elements.forEach(el => {
                el.setAttribute('stroke', rule.color);
              });
            } catch (e) {
              console.error(`Invalid selector "${subSelector}" for ${className}`, e);
            }
          }
        }
      }
    }
    return serializer.serializeToString(svg);
  }
  const styledIcons = Object.fromEntries(
    Object.keys(rawIcons).map(iconKey => {
      const kebabCaseName = iconKey
        .replace(/^Icon/, '')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase();
      const rawSvg = rawIcons[iconKey];
      const className = `icon-tabler-${kebabCaseName}`;
      const styledSvg = applyColorsToSvg(rawSvg, className);
      return [`${iconKey}Raw`, styledSvg];
    }),
  );
  const styledIconsSVG = Object.fromEntries(
    Object.keys(styledIcons).map(iconKey => [
      iconKey.replace('Raw', ''),
      o$4(styledIcons[iconKey]),
    ]),
  );
  const {
    IconArrowAutofitDown,
    IconArrowAutofitHeight,
    IconArrowAutofitLeft,
    IconArrowAutofitRight,
    IconArrowAutofitWidth,
    IconArrowBigLeft,
    IconArrowBigRight,
    IconBook,
    IconBookmark,
    IconBookmarkOff,
    IconBookmarks,
    IconBookReturn,
    IconBookUpload,
    IconCategory,
    IconCheck,
    IconChevronRight,
    IconDeviceFloppy,
    IconDotsVertical,
    IconEye,
    IconEyeOff,
    IconExternalLink,
    IconFileDownload,
    IconFilePercent,
    IconPin,
    IconArrowsMove,
    IconBoxAlignTop,
    IconArrowsVertical,
    IconHandClick,
    IconKeyboard,
    IconLayoutBottombar,
    IconLayoutBottombarInactive,
    IconLayoutSidebar,
    IconLayoutSidebarInactive,
    IconLayoutSidebarRight,
    IconLayoutSidebarRightInactive,
    IconListNumbers,
    IconLoader2,
    IconLocationCog,
    IconMenu2,
    IconMenuDeep,
    IconMessage,
    IconMoon,
    IconPalette,
    IconPencil,
    IconPencilCog,
    IconPhoto,
    IconPhotoOff,
    IconPlayerPause,
    IconPlayerPlay,
    IconRefresh,
    IconSettings,
    IconSettingsOff,
    IconSpacingVertical,
    IconSun,
    IconTrash,
    IconWorldCog,
    IconX,
    IconZoomCancel,
    IconZoomIn,
    IconZoomInArea,
    IconZoomOut,
    IconZoomOutArea,
    IconZoomPan,
    IconPageFlat,
    IconComic1Flat,
    IconComic2Flat,
    IconComic3Flat,
    IconEReader1Flat,
    IconEReader2Flat,
    IconPage,
    IconComic1,
    IconComic2,
    IconComic3,
    IconEReader1,
    IconEReader2,
  } = styledIconsSVG;
  const {
    IconArrowAutofitDownRaw,
    IconArrowAutofitHeightRaw,
    IconArrowAutofitLeftRaw,
    IconArrowAutofitRightRaw,
    IconArrowAutofitWidthRaw,
    IconArrowBigLeftRaw,
    IconArrowBigRightRaw,
    IconArrowsMoveRaw,
    IconArrowsVerticalRaw,
    IconArrowsMoveVerticalRaw,
    IconBookRaw,
    IconBookmarkRaw,
    IconBookmarkOffRaw,
    IconBookmarksRaw,
    IconBookReturnRaw,
    IconBookUploadRaw,
    IconBoxAlignTopRaw,
    IconCategoryRaw,
    IconCheckRaw,
    IconChevronRightRaw,
    IconDeviceFloppyRaw,
    IconDotsVerticalRaw,
    IconEyeRaw,
    IconEyeOffRaw,
    IconExternalLinkRaw,
    IconFileDownloadRaw,
    IconFilePercentRaw,
    IconHandClickRaw,
    IconKeyboardRaw,
    IconLayoutBottombarRaw,
    IconLayoutBottombarInactiveRaw,
    IconLayoutSidebarRaw,
    IconLayoutSidebarInactiveRaw,
    IconLayoutSidebarRightRaw,
    IconLayoutSidebarRightInactiveRaw,
    IconListNumbersRaw,
    IconLoader2Raw,
    IconLocationCogRaw,
    IconMenu2Raw,
    IconMenuDeepRaw,
    IconMessageRaw,
    IconMoonRaw,
    IconPaletteRaw,
    IconPencilRaw,
    IconPencilCogRaw,
    IconPhotoRaw,
    IconPhotoOffRaw,
    IconPinRaw,
    IconPlayerPauseRaw,
    IconPlayerPlayRaw,
    IconRefreshRaw,
    IconSettingsRaw,
    IconSettingsOffRaw,
    IconSpacingVerticalRaw,
    IconSunRaw,
    IconTrashRaw,
    IconWorldCogRaw,
    IconXRaw,
    IconZoomCancelRaw,
    IconZoomInRaw,
    IconZoomInAreaRaw,
    IconZoomOutRaw,
    IconZoomOutAreaRaw,
    IconZoomPanRaw,
    IconPageFlatRaw,
    IconComic1FlatRaw,
    IconComic2FlatRaw,
    IconComic3FlatRaw,
    IconEReader1FlatRaw,
    IconEReader2FlatRaw,
    IconPageRaw,
    IconComic1Raw,
    IconComic2Raw,
    IconComic3Raw,
    IconEReader1Raw,
    IconEReader2Raw,
  } = styledIcons;

  const styledIcons$1 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconArrowAutofitDown,
        IconArrowAutofitDownRaw,
        IconArrowAutofitHeight,
        IconArrowAutofitHeightRaw,
        IconArrowAutofitLeft,
        IconArrowAutofitLeftRaw,
        IconArrowAutofitRight,
        IconArrowAutofitRightRaw,
        IconArrowAutofitWidth,
        IconArrowAutofitWidthRaw,
        IconArrowBigLeft,
        IconArrowBigLeftRaw,
        IconArrowBigRight,
        IconArrowBigRightRaw,
        IconArrowsMove,
        IconArrowsMoveRaw,
        IconArrowsMoveVerticalRaw,
        IconArrowsVertical,
        IconArrowsVerticalRaw,
        IconBook,
        IconBookRaw,
        IconBookReturn,
        IconBookReturnRaw,
        IconBookUpload,
        IconBookUploadRaw,
        IconBookmark,
        IconBookmarkOff,
        IconBookmarkOffRaw,
        IconBookmarkRaw,
        IconBookmarks,
        IconBookmarksRaw,
        IconBoxAlignTop,
        IconBoxAlignTopRaw,
        IconCategory,
        IconCategoryRaw,
        IconCheck,
        IconCheckRaw,
        IconChevronRight,
        IconChevronRightRaw,
        IconComic1,
        IconComic1Flat,
        IconComic1FlatRaw,
        IconComic1Raw,
        IconComic2,
        IconComic2Flat,
        IconComic2FlatRaw,
        IconComic2Raw,
        IconComic3,
        IconComic3Flat,
        IconComic3FlatRaw,
        IconComic3Raw,
        IconDeviceFloppy,
        IconDeviceFloppyRaw,
        IconDotsVertical,
        IconDotsVerticalRaw,
        IconEReader1,
        IconEReader1Flat,
        IconEReader1FlatRaw,
        IconEReader1Raw,
        IconEReader2,
        IconEReader2Flat,
        IconEReader2FlatRaw,
        IconEReader2Raw,
        IconExternalLink,
        IconExternalLinkRaw,
        IconEye,
        IconEyeOff,
        IconEyeOffRaw,
        IconEyeRaw,
        IconFileDownload,
        IconFileDownloadRaw,
        IconFilePercent,
        IconFilePercentRaw,
        IconHandClick,
        IconHandClickRaw,
        IconKeyboard,
        IconKeyboardRaw,
        IconLayoutBottombar,
        IconLayoutBottombarInactive,
        IconLayoutBottombarInactiveRaw,
        IconLayoutBottombarRaw,
        IconLayoutSidebar,
        IconLayoutSidebarInactive,
        IconLayoutSidebarInactiveRaw,
        IconLayoutSidebarRaw,
        IconLayoutSidebarRight,
        IconLayoutSidebarRightInactive,
        IconLayoutSidebarRightInactiveRaw,
        IconLayoutSidebarRightRaw,
        IconListNumbers,
        IconListNumbersRaw,
        IconLoader2,
        IconLoader2Raw,
        IconLocationCog,
        IconLocationCogRaw,
        IconMenu2,
        IconMenu2Raw,
        IconMenuDeep,
        IconMenuDeepRaw,
        IconMessage,
        IconMessageRaw,
        IconMoon,
        IconMoonRaw,
        IconPage,
        IconPageFlat,
        IconPageFlatRaw,
        IconPageRaw,
        IconPalette,
        IconPaletteRaw,
        IconPencil,
        IconPencilCog,
        IconPencilCogRaw,
        IconPencilRaw,
        IconPhoto,
        IconPhotoOff,
        IconPhotoOffRaw,
        IconPhotoRaw,
        IconPin,
        IconPinRaw,
        IconPlayerPause,
        IconPlayerPauseRaw,
        IconPlayerPlay,
        IconPlayerPlayRaw,
        IconRefresh,
        IconRefreshRaw,
        IconSettings,
        IconSettingsOff,
        IconSettingsOffRaw,
        IconSettingsRaw,
        IconSpacingVertical,
        IconSpacingVerticalRaw,
        IconSun,
        IconSunRaw,
        IconTrash,
        IconTrashRaw,
        IconWorldCog,
        IconWorldCogRaw,
        IconX,
        IconXRaw,
        IconZoomCancel,
        IconZoomCancelRaw,
        IconZoomIn,
        IconZoomInArea,
        IconZoomInAreaRaw,
        IconZoomInRaw,
        IconZoomOut,
        IconZoomOutArea,
        IconZoomOutAreaRaw,
        IconZoomOutRaw,
        IconZoomPan,
        IconZoomPanRaw,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );

  var __defProp$9 = Object.defineProperty;
  var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
  var __decorateClass$a = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$9(target, key, result);
    return result;
  };
  let Icon = class extends i$2 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.label = '';
      this.size = '';
    }
    render() {
      const pascal = toPascalCase(this.name);
      const key = `${pascal}Raw`;
      const styledSvg = styledIcons$1[key];
      const style = this.size ? `--mov-icon-size: ${this.size};` : '';
      if (!styledSvg) {
        return x$1`<span
        role=${this.label ? 'img' : E}
        aria-label=${this.label || E}
        aria-hidden=${this.label ? E : 'true'}
        style=${style}
      ></span>`;
      }
      return x$1`<span
      role=${this.label ? 'img' : E}
      aria-label=${this.label || E}
      aria-hidden=${this.label ? E : 'true'}
      style=${style}
      >${o$4(styledSvg)}</span
    >`;
    }
  };
  Icon.styles = i$5`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
    /* Fallback if no color is set */
    :host(:not([style*='color'])) svg {
      color: var(--theme-primary-text-color);
    }
  `;
  __decorateClass$a([n$1({ type: String })], Icon.prototype, 'name', 2);
  __decorateClass$a([n$1({ type: String })], Icon.prototype, 'label', 2);
  __decorateClass$a([n$1({ type: String })], Icon.prototype, 'size', 2);
  Icon = __decorateClass$a([t$2('mov-icon')], Icon);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e = e$2(
    class extends i$1 {
      constructor(t) {
        if ((super(t), t.type !== t$1.ATTRIBUTE || 'class' !== t.name || t.strings?.length > 2))
          throw Error(
            '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.',
          );
      }
      render(t) {
        return (
          ' ' +
          Object.keys(t)
            .filter(s => t[s])
            .join(' ') +
          ' '
        );
      }
      update(s, [i]) {
        if (void 0 === this.st) {
          ((this.st = new Set()),
            void 0 !== s.strings &&
              (this.nt = new Set(
                s.strings
                  .join(' ')
                  .split(/\s/)
                  .filter(t => '' !== t),
              )));
          for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t);
          return this.render(i);
        }
        const r = s.element.classList;
        for (const t of this.st) t in i || (r.remove(t), this.st.delete(t));
        for (const t in i) {
          const s = !!i[t];
          s === this.st.has(t) ||
            this.nt?.has(t) ||
            (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
        }
        return T;
      }
    },
  );

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const o$3 = o => o ?? E;

  const styles$2 =
    ':host {\r\n  display: inline-flex;\r\n  position: relative;\r\n  width: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n:host([disabled]) {\r\n  cursor: not-allowed;\r\n}\r\n\r\n:host([hidden]) {\r\n  display: none;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  border-radius: var(--wa-border-radius-m);\r\n  cursor: inherit;\r\n  display: inline-flex;\r\n  align-items: stretch;\r\n  justify-content: center;\r\n  width: 100%;\r\n  line-height: 1;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  padding: 0;\r\n  transition:\r\n    var(--wa-transition-fast) background-color,\r\n    var(--wa-transition-fast) color,\r\n    var(--wa-transition-fast) border,\r\n    var(--wa-transition-fast) box-shadow;\r\n  text-decoration: none;\r\n  font-family: var(--wa-font-family-body), sans-serif;\r\n  font-weight: var(--wa-font-weight-semibold);\r\n  outline-offset: var(--wa-focus-ring-offset);\r\n  color: var(--theme-primary-text-color);\r\n  background-color: var(--theme-primary-color);\r\n  border-color: var(--theme-border-color);\r\n}\r\n\r\n.button::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n\r\n.button:focus {\r\n  outline: none;\r\n}\r\n\r\n.button:focus-visible {\r\n  outline: var(--wa-focus-ring);\r\n  outline-offset: var(--wa-focus-ring-offset);\r\n}\r\n\r\n.button--disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.button--disabled * {\r\n  pointer-events: none;\r\n}\r\n\r\n/* When we detect an icon-only button, make it square */\r\n:host(.icon-button) .button {\r\n  width: var(--wa-form-control-height);\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n/* Sizes */\r\n.button--small {\r\n  font-size: var(--wa-font-size-s);\r\n  height: var(--wa-form-control-height);\r\n  line-height: calc(\r\n    var(--wa-form-control-value-line-height) -\r\n    var(--wa-form-control-border-width) *\r\n    2\r\n  );\r\n  border-radius: var(--wa-border-radius-s);\r\n}\r\n\r\n.button--medium {\r\n  font-size: var(--wa-font-size-m);\r\n  height: var(--wa-form-control-height);\r\n  line-height: calc(\r\n    var(--wa-form-control-value-line-height) -\r\n    var(--wa-form-control-border-width) *\r\n    2\r\n  );\r\n  border-radius: var(--wa-border-radius-m);\r\n}\r\n\r\n.button--large {\r\n  font-size: var(--wa-font-size-l);\r\n  height: var(--wa-form-control-height);\r\n  line-height: calc(\r\n    var(--wa-form-control-value-line-height) -\r\n    var(--wa-form-control-border-width) *\r\n    2\r\n  );\r\n  border-radius: var(--wa-border-radius-l);\r\n}\r\n\r\n/* Pill modifier */\r\n.button--pill.button--small {\r\n  border-radius: var(--wa-border-radius-pill);\r\n}\r\n\r\n.button--pill.button--medium {\r\n  border-radius: var(--wa-border-radius-pill);\r\n}\r\n\r\n.button--pill.button--large {\r\n  border-radius: var(--wa-border-radius-pill);\r\n}\r\n\r\n/* Button content */\r\n.button__content {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: var(--wa-space-s);\r\n  padding: 0 var(--wa-space-m);\r\n}\r\n\r\n.button--small .button__content {\r\n  padding: 0 var(--wa-space-s);\r\n}\r\n\r\n.button--large .button__content {\r\n  padding: 0 var(--wa-space-l);\r\n}\r\n\r\n/* Icon-only buttons get smaller horizontal padding */\r\n:host(.icon-button) .button__content {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n/* Loading spinner */\r\n.button__spinner {\r\n  flex: 0 0 auto;\r\n  height: 1em;\r\n  width: 1em;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.button__spinner svg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* Hide label when loading */\r\n.button--loading .button__label,\r\n.button--loading ::slotted(*:not([slot])) {\r\n  visibility: hidden;\r\n}\r\n\r\n/* Variant styles using your palette system */\r\n/* Brand */\r\n.button--brand.button--accent {\r\n  background-color: var(--wa-color-brand-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-brand-60);\r\n  color: var(--wa-color-brand-on-loud);\r\n}\r\n\r\n.button--brand.button--accent:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-50);\r\n  border-color: var(--wa-color-brand-50);\r\n  color: var(--wa-color-brand-on-loud);\r\n}\r\n\r\n.button--brand.button--accent:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-70);\r\n  border-color: var(--wa-color-brand-70);\r\n  color: var(--wa-color-brand-on-loud);\r\n}\r\n\r\n.button--brand.button--filled {\r\n  background-color: var(--wa-color-brand-fill-loud);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-brand-border-loud);\r\n  color: var(--wa-color-brand-on-loud);\r\n}\r\n\r\n.button--brand.button--filled:hover:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-brand-fill-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n  border-color: color-mix(in srgb, var(--wa-color-brand-border-loud) 90%, var(--wa-color-mix-hover));\r\n}\r\n\r\n.button--brand.button--filled:active:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-brand-fill-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-brand-border-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n}\r\n\r\n.button--brand.button--outlined {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-brand-border-loud);\r\n  color: var(--wa-color-brand-on-normal);\r\n}\r\n\r\n.button--brand.button--outlined:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-fill-quiet);\r\n  color: var(--wa-color-brand-on-quiet);\r\n}\r\n\r\n.button--brand.button--outlined:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-fill-normal);\r\n  color: var(--wa-color-brand-on-normal);\r\n}\r\n\r\n.button--brand.button--light {\r\n  background-color: var(--wa-color-brand-fill-quiet);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-brand-border-quiet);\r\n  color: var(--wa-color-brand-on-quiet);\r\n}\r\n\r\n.button--brand.button--light:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-fill-normal);\r\n  border-color: var(--wa-color-brand-border-normal);\r\n  color: var(--wa-color-brand-on-normal);\r\n}\r\n\r\n.button--brand.button--light:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-80);\r\n  border-color: var(--wa-color-brand-70);\r\n}\r\n\r\n.button--brand.button--subtle {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) transparent;\r\n  color: var(--wa-color-brand-on-quiet);\r\n}\r\n\r\n.button--brand.button--subtle:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-fill-quiet);\r\n  color: var(--wa-color-brand-on-quiet);\r\n}\r\n\r\n.button--brand.button--subtle:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-brand-fill-normal);\r\n  color: var(--wa-color-brand-on-normal);\r\n}\r\n\r\n.button--brand.button--plain {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--wa-color-brand-on-quiet);\r\n}\r\n\r\n.button--brand.button--plain:hover:not(.button--disabled) {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Neutral */\r\n.button--neutral.button--accent {\r\n  background-color: var(--wa-color-neutral-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-neutral-60);\r\n  color: var(--wa-color-neutral-95);\r\n}\r\n\r\n.button--neutral.button--accent:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-50);\r\n  border-color: var(--wa-color-neutral-50);\r\n}\r\n\r\n.button--neutral.button--accent:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-70);\r\n  border-color: var(--wa-color-neutral-70);\r\n}\r\n\r\n.button--neutral.button--filled {\r\n  background-color: var(--wa-color-neutral-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-neutral-60);\r\n  color: var(--wa-color-neutral-95);\r\n}\r\n\r\n.button--neutral.button--filled:hover:not(.button--disabled) {\r\n  background-color: color-mix(in srgb, var(--wa-color-neutral-60) 90%, var(--wa-color-mix-hover));\r\n  border-color: color-mix(in srgb, var(--wa-color-neutral-60) 90%, var(--wa-color-mix-hover));\r\n}\r\n\r\n.button--neutral.button--filled:active:not(.button--disabled) {\r\n  background-color: color-mix(in srgb, var(--wa-color-neutral-60) 80%, var(--wa-color-mix-active));\r\n  border-color: color-mix(in srgb, var(--wa-color-neutral-60) 80%, var(--wa-color-mix-active));\r\n}\r\n\r\n.button--neutral.button--outlined {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-neutral-60);\r\n  color: var(--wa-color-neutral-30);\r\n}\r\n\r\n.button--neutral.button--outlined:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-95);\r\n  color: var(--wa-color-neutral-40);\r\n}\r\n\r\n.button--neutral.button--outlined:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-90);\r\n  color: var(--wa-color-neutral-30);\r\n}\r\n\r\n.button--neutral.button--light {\r\n  background-color: var(--wa-color-neutral-95);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-neutral-90);\r\n  color: var(--wa-color-neutral-30);\r\n}\r\n\r\n.button--neutral.button--light:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-90);\r\n  border-color: var(--wa-color-neutral-80);\r\n  color: var(--wa-color-neutral-20);\r\n}\r\n\r\n.button--neutral.button--light:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-80);\r\n  border-color: var(--wa-color-neutral-70);\r\n}\r\n\r\n.button--neutral.button--subtle {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) transparent;\r\n  color: var(--wa-color-neutral-40);\r\n}\r\n\r\n.button--neutral.button--subtle:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-95);\r\n  color: var(--wa-color-neutral-30);\r\n}\r\n\r\n.button--neutral.button--subtle:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-neutral-90);\r\n  color: var(--wa-color-neutral-20);\r\n}\r\n\r\n.button--neutral.button--plain {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--wa-color-neutral-40);\r\n}\r\n\r\n.button--neutral.button--plain:hover:not(.button--disabled) {\r\n  text-decoration: underline;\r\n  color: var(--wa-color-neutral-30);\r\n}\r\n\r\n/* Success */\r\n.button--success.button--accent {\r\n  background-color: var(--wa-color-success-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-success-60);\r\n  color: var(--wa-color-success-on-loud);\r\n}\r\n\r\n.button--success.button--accent:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-50);\r\n  border-color: var(--wa-color-success-50);\r\n}\r\n\r\n.button--success.button--accent:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-70);\r\n  border-color: var(--wa-color-success-70);\r\n}\r\n\r\n.button--success.button--filled {\r\n  background-color: var(--wa-color-success-fill-loud);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-success-border-loud);\r\n  color: var(--wa-color-success-on-loud);\r\n}\r\n\r\n.button--success.button--filled:hover:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-success-fill-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-success-border-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n}\r\n\r\n.button--success.button--filled:active:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-success-fill-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-success-border-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n}\r\n\r\n.button--success.button--outlined {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-success-border-loud);\r\n  color: var(--wa-color-success-on-normal);\r\n}\r\n\r\n.button--success.button--outlined:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-fill-quiet);\r\n  color: var(--wa-color-success-on-quiet);\r\n}\r\n\r\n.button--success.button--outlined:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-fill-normal);\r\n  color: var(--wa-color-success-on-normal);\r\n}\r\n\r\n.button--success.button--light {\r\n  background-color: var(--wa-color-success-fill-quiet);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-success-border-quiet);\r\n  color: var(--wa-color-success-on-quiet);\r\n}\r\n\r\n.button--success.button--light:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-fill-normal);\r\n  border-color: var(--wa-color-success-border-normal);\r\n  color: var(--wa-color-success-on-normal);\r\n}\r\n\r\n.button--success.button--light:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-80);\r\n  border-color: var(--wa-color-success-70);\r\n}\r\n\r\n.button--success.button--subtle {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) transparent;\r\n  color: var(--wa-color-success-on-quiet);\r\n}\r\n\r\n.button--success.button--subtle:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-fill-quiet);\r\n  color: var(--wa-color-success-on-quiet);\r\n}\r\n\r\n.button--success.button--subtle:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-success-fill-normal);\r\n  color: var(--wa-color-success-on-normal);\r\n}\r\n\r\n.button--success.button--plain {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--wa-color-success-on-quiet);\r\n}\r\n\r\n.button--success.button--plain:hover:not(.button--disabled) {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Warning */\r\n.button--warning.button--accent {\r\n  background-color: var(--wa-color-warning-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-warning-60);\r\n  color: var(--wa-color-warning-on-loud);\r\n}\r\n\r\n.button--warning.button--accent:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-50);\r\n  border-color: var(--wa-color-warning-50);\r\n}\r\n\r\n.button--warning.button--accent:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-70);\r\n  border-color: var(--wa-color-warning-70);\r\n}\r\n\r\n.button--warning.button--filled {\r\n  background-color: var(--wa-color-warning-fill-loud);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-warning-border-loud);\r\n  color: var(--wa-color-warning-on-loud);\r\n}\r\n\r\n.button--warning.button--filled:hover:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-warning-fill-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-warning-border-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n}\r\n\r\n.button--warning.button--filled:active:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-warning-fill-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-warning-border-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n}\r\n\r\n.button--warning.button--outlined {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-warning-border-loud);\r\n  color: var(--wa-color-warning-on-normal);\r\n}\r\n\r\n.button--warning.button--outlined:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-fill-quiet);\r\n  color: var(--wa-color-warning-on-quiet);\r\n}\r\n\r\n.button--warning.button--outlined:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-fill-normal);\r\n  color: var(--wa-color-warning-on-normal);\r\n}\r\n\r\n.button--warning.button--light {\r\n  background-color: var(--wa-color-warning-fill-quiet);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-warning-border-quiet);\r\n  color: var(--wa-color-warning-on-quiet);\r\n}\r\n\r\n.button--warning.button--light:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-fill-normal);\r\n  border-color: var(--wa-color-warning-border-normal);\r\n  color: var(--wa-color-warning-on-normal);\r\n}\r\n\r\n.button--warning.button--light:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-80);\r\n  border-color: var(--wa-color-warning-70);\r\n}\r\n\r\n.button--warning.button--subtle {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) transparent;\r\n  color: var(--wa-color-warning-on-quiet);\r\n}\r\n\r\n.button--warning.button--subtle:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-fill-quiet);\r\n  color: var(--wa-color-warning-on-quiet);\r\n}\r\n\r\n.button--warning.button--subtle:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-warning-fill-normal);\r\n  color: var(--wa-color-warning-on-normal);\r\n}\r\n\r\n.button--warning.button--plain {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--wa-color-warning-on-quiet);\r\n}\r\n\r\n.button--warning.button--plain:hover:not(.button--disabled) {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Danger */\r\n.button--danger.button--accent {\r\n  background-color: var(--wa-color-danger-60);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-danger-60);\r\n  color: var(--wa-color-danger-on-loud);\r\n}\r\n\r\n.button--danger.button--accent:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-50);\r\n  border-color: var(--wa-color-danger-50);\r\n}\r\n\r\n.button--danger.button--accent:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-70);\r\n  border-color: var(--wa-color-danger-70);\r\n}\r\n\r\n.button--danger.button--filled {\r\n  background-color: var(--wa-color-danger-fill-loud);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-danger-border-loud);\r\n  color: var(--wa-color-danger-on-loud);\r\n}\r\n\r\n.button--danger.button--filled:hover:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-danger-fill-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-danger-border-loud) 90%,\r\n    var(--wa-color-mix-hover)\r\n  );\r\n}\r\n\r\n.button--danger.button--filled:active:not(.button--disabled) {\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-danger-fill-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n  border-color: color-mix(\r\n    in srgb,\r\n    var(--wa-color-danger-border-loud) 80%,\r\n    var(--wa-color-mix-active)\r\n  );\r\n}\r\n\r\n.button--danger.button--outlined {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-danger-border-loud);\r\n  color: var(--wa-color-danger-on-normal);\r\n}\r\n\r\n.button--danger.button--outlined:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-fill-quiet);\r\n  color: var(--wa-color-danger-on-quiet);\r\n}\r\n\r\n.button--danger.button--outlined:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-fill-normal);\r\n  color: var(--wa-color-danger-on-normal);\r\n}\r\n\r\n.button--danger.button--light {\r\n  background-color: var(--wa-color-danger-fill-quiet);\r\n  border: solid var(--wa-form-control-border-width) var(--wa-color-danger-border-quiet);\r\n  color: var(--wa-color-danger-on-quiet);\r\n}\r\n\r\n.button--danger.button--light:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-fill-normal);\r\n  border-color: var(--wa-color-danger-border-normal);\r\n  color: var(--wa-color-danger-on-normal);\r\n}\r\n\r\n.button--danger.button--light:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-80);\r\n  border-color: var(--wa-color-danger-70);\r\n}\r\n\r\n.button--danger.button--subtle {\r\n  background-color: transparent;\r\n  border: solid var(--wa-form-control-border-width) transparent;\r\n  color: var(--wa-color-danger-on-quiet);\r\n}\r\n\r\n.button--danger.button--subtle:hover:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-fill-quiet);\r\n  color: var(--wa-color-danger-on-quiet);\r\n}\r\n\r\n.button--danger.button--subtle:active:not(.button--disabled) {\r\n  background-color: var(--wa-color-danger-fill-normal);\r\n  color: var(--wa-color-danger-on-normal);\r\n}\r\n\r\n.button--danger.button--plain {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--wa-color-danger-on-quiet);\r\n}\r\n\r\n.button--danger.button--plain:hover:not(.button--disabled) {\r\n  text-decoration: underline;\r\n}\r\n';

  var __defProp$8 = Object.defineProperty;
  var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
  var __decorateClass$9 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$8(target, key, result);
    return result;
  };
  let Button = class extends i$2 {
    constructor() {
      super(...arguments);
      this.isIconButton = false;
      this.size = 'medium';
      this.disabled = false;
      this.loading = false;
      this.title = '';
      this.type = 'button';
    }
    /**
     * Renders the component as either an `<a>` or a `<button>` element based on the `href` property.
     * @internal
     */
    render() {
      const isLink = this.href ? true : false;
      const classes = {
        button: true,
        [`button--${this.variant}`]: !!this.variant,
        [`button--${this.appearance}`]: !!this.appearance,
        [`button--${this.size}`]: !!this.size,
        'button--disabled': !!(this.disabled || this.loading),
        'button--loading': !!this.loading,
        'button--pill': !!this.pill,
      };
      if (this.isIconButton) {
        this.classList.add('icon-button');
      } else {
        this.classList.remove('icon-button');
      }
      const buttonContent = x$1`
      <span
        part="content"
        class="button__content"
      >
        <slot
          name="start"
          part="start"
          class="start"
        ></slot>
        <slot
          part="label"
          class="label"
          @slotchange=${this.handleLabelSlotChange}
        ></slot>
        <slot
          name="end"
          part="end"
          class="end"
        ></slot>
        ${
          this.loading
            ? x$1`<mov-icon
              class="button__spinner"
              part="spinner"
              name="IconLoader2"
            ></mov-icon>`
            : ''
        }
      </span>
    `;
      return isLink
        ? x$1`
          <a
            part="base"
            class=${e(classes)}
            href=${o$3(this.href)}
            target=${o$3(this.target)}
            title=${o$3(this.title)}
            role="button"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
          >
            ${buttonContent}
          </a>
        `
        : x$1`
          <button
            part="base"
            class=${e(classes)}
            ?disabled=${this.disabled || this.loading}
            type=${o$3(this.type)}
            title=${o$3(this.title)}
            name=${o$3(this.name)}
            value=${o$3(this.value)}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
          >
            ${buttonContent}
          </button>
        `;
    }
    handleLabelSlotChange() {
      const isIconEl = el => {
        if (!el) return false;
        const name = el.localName;
        return name === 'wa-icon' || name === 'mov-icon' || name === 'svg';
      };
      const nodes = this.labelSlot?.assignedNodes({ flatten: true }) ?? [];
      let hasIconLabel = false;
      let hasIcon = false;
      let text = '';
      [...nodes].forEach((node, index) => {
        if (node.nodeType === Node.ELEMENT_NODE && isIconEl(node)) {
          hasIcon = true;
          if (!hasIconLabel) hasIconLabel = node.hasAttribute('label');
        }
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
        if (index === 0 && isIconEl(node)) {
          node.setAttribute('slot', 'start');
        }
        if (index === nodes.length - 1 && isIconEl(node)) {
          node.setAttribute('slot', 'end');
        }
      });
      this.isIconButton = text.trim() === '' && hasIcon;
    }
    /**
     * Clicks the button.
     * @public
     */
    click() {
      const button = this.renderRoot.querySelector('.button');
      button?.click();
    }
    /**
     * Sets focus on the button.
     * @public
     */
    focus(options) {
      const button = this.renderRoot.querySelector('.button');
      button?.focus(options);
    }
    /**
     * Removes focus from the button.
     * @public
     */
    blur() {
      const button = this.renderRoot.querySelector('.button');
      button?.blur();
    }
  };
  Button.styles = [r$4(styles$2), i$5``];
  __decorateClass$9([e$3('slot:not([name])')], Button.prototype, 'labelSlot', 2);
  __decorateClass$9([r()], Button.prototype, 'isIconButton', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'variant', 2);
  __decorateClass$9([n$1({ type: String, reflect: true })], Button.prototype, 'appearance', 2);
  __decorateClass$9([n$1({ type: String, reflect: true })], Button.prototype, 'size', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'href', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'target', 2);
  __decorateClass$9([n$1({ type: Boolean, reflect: true })], Button.prototype, 'disabled', 2);
  __decorateClass$9([n$1({ type: Boolean, reflect: true })], Button.prototype, 'loading', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'title', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'value', 2);
  __decorateClass$9([n$1({ type: Boolean })], Button.prototype, 'pill', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'name', 2);
  __decorateClass$9([n$1({ type: String })], Button.prototype, 'type', 2);
  Button = __decorateClass$9([t$2('mov-button')], Button);

  var __defProp$7 = Object.defineProperty;
  var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
  var __decorateClass$8 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$7(target, key, result);
    return result;
  };
  let ToggleButton = class extends i$2 {
    constructor() {
      super(...arguments);
      this.mode = 'menu';
      this.active = false;
      this.label = '';
      this.icon = '';
      this.activeIcon = '';
      this.variant = 'brand';
      this.appearance = 'accent';
      this.size = 'medium';
      this.disabled = false;
      this.loading = false;
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.label) {
        this.label = this._getDefaultLabel();
      }
    }
    render() {
      const currentLabel = this.active ? (this.activeLabel ?? this.label) : this.label;
      const classes = {
        'two-icon-mode': ['menu', 'custom', 'theme'].includes(this.mode),
        'single-icon-mode': ['chevron', 'expand', 'play-pause'].includes(this.mode),
      };
      return x$1`
      <mov-button
        @click=${this._onClick}
        .variant=${o$3(this.variant)}
        .appearance=${o$3(this.appearance)}
        .size=${o$3(this.size)}
        ?disabled=${o$3(this.disabled)}
        ?loading=${o$3(this.loading)}
        .title=${o$3(this.title)}
        class=${e(classes)}
        title=${currentLabel}
        aria-label=${currentLabel}
        aria-pressed=${this.active ? 'true' : 'false'}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `;
    }
    _getDefaultLabel() {
      switch (this.mode) {
        case 'menu':
          return 'Toggle menu';
        case 'chevron':
          return 'Toggle expand';
        case 'theme':
          return 'Toggle theme';
        case 'play-pause':
          return 'Toggle play';
        case 'expand':
          return 'Toggle expand';
        case 'custom':
          return 'Toggle';
        default:
          return 'Toggle';
      }
    }
    _getIcons() {
      switch (this.mode) {
        case 'menu':
          return { inactive: 'menu-2', active: 'x' };
        case 'chevron':
          return { inactive: 'chevron-right', active: 'chevron-right' };
        case 'theme':
          return { inactive: 'moon', active: 'sun' };
        case 'play-pause':
          return { inactive: 'player-play', active: 'player-pause' };
        case 'expand':
          return { inactive: 'arrow-autofit-down', active: 'arrow-autofit-down' };
        case 'custom':
          return { inactive: this.icon, active: this.activeIcon };
        default:
          return { inactive: '', active: '' };
      }
    }
    _renderIcons() {
      const icons = this._getIcons();
      if (!icons.inactive) return E;
      if (this.mode === 'chevron') {
        return x$1`<mov-icon
        class="chevron-icon"
        name=${icons.inactive}
      ></mov-icon>`;
      }
      if (this.mode === 'expand') {
        return x$1`<mov-icon
        class="expand-icon"
        name=${icons.inactive}
      ></mov-icon>`;
      }
      if (this.mode === 'play-pause') {
        return x$1`<mov-icon
        class="play-pause-icon"
        name=${this.active ? icons.active : icons.inactive}
      ></mov-icon>`;
      }
      return x$1`
      <mov-icon
        class=${this.active ? 'active-icon' : 'inactive-icon'}
        name=${this.active ? icons.active : icons.inactive}
      ></mov-icon>
    `;
    }
    _onClick() {
      if (this.disabled || this.loading) return;
      const oldActive = this.active;
      this.active = !this.active;
      this.dispatchEvent(
        new CustomEvent('toggle', {
          detail: {
            value: this.active,
            oldValue: oldActive,
            mode: this.mode,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }
    /** Programmatically triggers the toggle action. */
    toggle() {
      this._onClick();
    }
    /**
     * Sets the active state of the button without dispatching a `toggle` event.
     * @param {boolean} active - The new active state.
     */
    setActive(active) {
      this.active = active;
    }
  };
  ToggleButton.styles = i$5`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--theme-primary-color, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `;
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'mode', 2);
  __decorateClass$8([n$1({ type: Boolean, reflect: true })], ToggleButton.prototype, 'active', 2);
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'label', 2);
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'activeLabel', 2);
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'icon', 2);
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'activeIcon', 2);
  __decorateClass$8([n$1({ type: String })], ToggleButton.prototype, 'variant', 2);
  __decorateClass$8(
    [n$1({ type: String, reflect: true })],
    ToggleButton.prototype,
    'appearance',
    2,
  );
  __decorateClass$8([n$1({ type: String, reflect: true })], ToggleButton.prototype, 'size', 2);
  __decorateClass$8([n$1({ type: Boolean })], ToggleButton.prototype, 'disabled', 2);
  __decorateClass$8([n$1({ type: Boolean, reflect: true })], ToggleButton.prototype, 'loading', 2);
  ToggleButton = __decorateClass$8([t$2('mov-toggle-button')], ToggleButton);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const n = 'important',
    i = ' !' + n,
    o$2 = e$2(
      class extends i$1 {
        constructor(t) {
          if ((super(t), t.type !== t$1.ATTRIBUTE || 'style' !== t.name || t.strings?.length > 2))
            throw Error(
              'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.',
            );
        }
        render(t) {
          return Object.keys(t).reduce((e, r) => {
            const s = t[r];
            return null == s
              ? e
              : e +
                  `${(r = r.includes('-') ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase())}:${s};`;
          }, '');
        }
        update(e, [r]) {
          const { style: s } = e.element;
          if (void 0 === this.ft) return ((this.ft = new Set(Object.keys(r))), this.render(r));
          for (const t of this.ft)
            null == r[t] &&
              (this.ft.delete(t), t.includes('-') ? s.removeProperty(t) : (s[t] = null));
          for (const t in r) {
            const e = r[t];
            if (null != e) {
              this.ft.add(t);
              const r = 'string' == typeof e && e.endsWith(i);
              t.includes('-') || r
                ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : '')
                : (s[t] = e);
            }
          }
          return T;
        }
      },
    );

  var __defProp$6 = Object.defineProperty;
  var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
  var __decorateClass$7 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$6(target, key, result);
    return result;
  };
  let ColorSwatch = class extends i$2 {
    constructor() {
      super(...arguments);
      this.color = '#228be6';
      this.selected = false;
      this.size = 26;
      this.radius = '50%';
      this.contrastColor = '#FFFFFF';
    }
    /**
     * Recalculates the contrasting color for the checkmark whenever the swatch color changes.
     * @internal
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('color')) {
        this.contrastColor = tinycolor(this.color).isLight() ? '#000000' : '#FFFFFF';
      }
    }
    render() {
      const hostStyles = {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
      const swatchStyles = {
        '--radius': typeof this.radius === 'number' ? `${this.radius}px` : this.radius,
        '--color': this.color,
        '--contrast-color': this.contrastColor,
      };
      return x$1`
      <div style=${o$2(hostStyles)}>
        <div
          class="swatch"
          style=${o$2(swatchStyles)}
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
    }
  };
  ColorSwatch.styles = i$5`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([selected]) .check-icon {
      opacity: 1;
    }
  `;
  __decorateClass$7([n$1({ type: String })], ColorSwatch.prototype, 'color', 2);
  __decorateClass$7([n$1({ type: Boolean, reflect: true })], ColorSwatch.prototype, 'selected', 2);
  __decorateClass$7([n$1({ type: Number })], ColorSwatch.prototype, 'size', 2);
  __decorateClass$7([n$1({ type: String })], ColorSwatch.prototype, 'radius', 2);
  __decorateClass$7([n$1({ state: true })], ColorSwatch.prototype, 'contrastColor', 2);
  ColorSwatch = __decorateClass$7([t$2('mov-color-swatch')], ColorSwatch);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o$1(o, f) {
    if (void 0 !== o) {
      let i = 0;
      for (const t of o) yield f(t, i++);
    }
  }

  const darkest = 10;
  const lightest = 95;
  const darkSteps = 4;
  const lightSteps = 5;
  const lightnessStep = (lightest - 50) / lightSteps;
  const darknessStep = (50 - darkest) / darkSteps;
  function setLightness(hsl, lightness) {
    hsl.l = lightness / 100;
    return tinycolor(hsl).toHexString();
  }
  function gradientBySteps(baseColor) {
    const baseHsl = baseColor.toHsl();
    return [
      setLightness(baseHsl, 50 + lightnessStep * 5),
      setLightness(baseHsl, 50 + lightnessStep * 4),
      setLightness(baseHsl, 50 + lightnessStep * 3),
      setLightness(baseHsl, 50 + lightnessStep * 2),
      setLightness(baseHsl, 50 + lightnessStep),
      setLightness(baseHsl, 50),
      setLightness(baseHsl, 50 - darknessStep),
      setLightness(baseHsl, 50 - darknessStep * 2),
      setLightness(baseHsl, 50 - darknessStep * 3),
      setLightness(baseHsl, 50 - darknessStep * 4),
      setLightness(baseHsl, 50 - darknessStep * 5),
    ];
  }
  function gradientBySaturation(baseColor) {
    const baseHsl = baseColor.toHsl();
    const lightnessScale = [0.97, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
    const colors = [];
    for (const l of lightnessScale) {
      const newHsl = { ...baseHsl };
      newHsl.l = l;
      if (l > 0.8) {
        newHsl.s *= 0.4;
      } else if (l > 0.6) {
        newHsl.s *= 0.8;
      } else if (l < 0.3) {
        newHsl.s = Math.min(1, newHsl.s * 1.1);
      }
      colors.push(tinycolor(newHsl).toHexString().toUpperCase());
    }
    return colors;
  }
  function gradinetByLightness(baseColor) {
    const colors = [];
    const lightnessSteps = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
    for (const lightness of lightnessSteps) {
      const newHsl = baseColor.toHsl();
      newHsl.l = lightness / 100;
      colors.push(tinycolor(newHsl).toHexString().toUpperCase());
    }
    return colors;
  }
  function generateColorGradient(baseHexColor, mode = 'base') {
    const baseColor = tinycolor(baseHexColor);
    if (!baseColor.isValid()) {
      console.error('Invalid base hex color provided.');
      return null;
    }
    switch (mode) {
      case 'saturation':
        return gradientBySaturation(baseColor);
      case 'lightness':
        return gradinetByLightness(baseColor);
      case 'mantine':
        return [...generateColors(baseHexColor)];
      default:
        return gradientBySteps(baseColor);
    }
  }

  var __defProp$5 = Object.defineProperty;
  var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
  var __decorateClass$6 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$5(target, key, result);
    return result;
  };
  let ColorPalette = class extends i$2 {
    constructor() {
      super(...arguments);
      this.baseColor = '#228be6';
      this.mode = 'base';
      this.gradient = [];
    }
    /**
     * Re-generates the color gradient whenever the `baseColor` or `mode` property changes.
     * @internal
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('baseColor') || changedProperties.has('mode')) {
        this.gradient = generateColorGradient(this.baseColor, this.mode) ?? [];
      }
    }
    render() {
      return x$1`
      ${o$1(
        this.gradient,
        color => x$1`<mov-color-swatch
            .color=${color}
            radius="4px"
            size="22"
          ></mov-color-swatch>`,
      )}
    `;
    }
  };
  ColorPalette.styles = i$5`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }
  `;
  __decorateClass$6([n$1({ type: String })], ColorPalette.prototype, 'baseColor', 2);
  __decorateClass$6([n$1({ type: String })], ColorPalette.prototype, 'mode', 2);
  __decorateClass$6([r()], ColorPalette.prototype, 'gradient', 2);
  ColorPalette = __decorateClass$6([t$2('mov-color-palette')], ColorPalette);

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
  function changeThemeHex(event) {
    const value = event.currentTarget.value;
    saveSettingsValue('theme', value);
  }

  var __defProp$4 = Object.defineProperty;
  var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
  var __decorateClass$5 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$4(target, key, result);
    return result;
  };
  let ColorPanel = class extends i$2 {
    constructor() {
      super(...arguments);
      this.selectedTheme = '';
    }
    /**
     * Renders the grid of color swatches grouped by color family.
     * @internal
     */
    render() {
      const swatchKeys = Object.keys(colors)
        .filter(k => !['dark', 'gray'].includes(k))
        .sort(sortColors);
      const shades = [
        /*50,*/
        100, 200, 300, 400, 500, 600, 700, 800, 900,
      ];
      return swatchKeys.map(key => {
        const name = colors[key].name;
        const swatches = shades.map(shade => {
          const hex = colors[key][shade];
          const text = getTextColor(hex);
          return x$1`
          <span
            title="${hex}"
            class="${e({
              ThemeRadio: true,
              selected: this.selectedTheme === hex,
            })}"
            style="background-color: ${hex}; color: ${text}"
            @click=${buttonSelectTheme}
          >
            ${IconCheck}
          </span>
        `;
        });
        return x$1` <div class="SwatchGroup">
        <span class="ColorName">${name}</span>
        <div class="Swatches">${swatches}</div>
      </div>`;
      });
    }
  };
  ColorPanel.styles = i$5`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--theme-primary-text-color);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `;
  __decorateClass$5([n$1({ type: String })], ColorPanel.prototype, 'selectedTheme', 2);
  ColorPanel = __decorateClass$5([t$2('mov-color-panel')], ColorPanel);

  var __defProp$3 = Object.defineProperty;
  var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
  var __decorateClass$4 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$3(target, key, result);
    return result;
  };
  let ColorPicker = class extends i$2 {
    constructor() {
      super(...arguments);
      this.value = '#228be6';
      this.swatches = null;
      this.hsv = { h: 0, s: 0, v: 0 };
      this.saturationThumbPosition = { x: 0, y: 0 };
      this.hueThumbPosition = 0;
      this.isDraggingSaturation = false;
      this.isDraggingHue = false;
      /**
       * Initiates a drag operation on the saturation/value panel.
       * @internal
       */
      this.handleSaturationDragStart = e => {
        e.preventDefault();
        this.isDraggingSaturation = true;
        this.saturationPanel = this.shadowRoot?.querySelector('.saturation-panel');
        this.updateSaturation(e);
      };
      /**
       * Initiates a drag operation on the hue slider.
       * @internal
       */
      this.handleHueDragStart = e => {
        e.preventDefault();
        this.isDraggingHue = true;
        this.hueSlider = this.shadowRoot?.querySelector('.hue-slider');
        this.updateHue(e);
      };
      /**
       * Handles the movement during a drag operation on either the saturation panel or hue slider.
       * @internal
       */
      this.handleDrag = e => {
        if (this.isDraggingSaturation) {
          this.updateSaturation(e);
        }
        if (this.isDraggingHue) {
          this.updateHue(e);
        }
      };
      /**
       * Ends the current drag operation.
       * @internal
       */
      this.handleDragEnd = () => {
        this.isDraggingSaturation = false;
        this.isDraggingHue = false;
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateStateFromValue(this.value);
      window.addEventListener('mousemove', this.handleDrag);
      window.addEventListener('mouseup', this.handleDragEnd);
      window.addEventListener('touchmove', this.handleDrag);
      window.addEventListener('touchend', this.handleDragEnd);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener('mousemove', this.handleDrag);
      window.removeEventListener('mouseup', this.handleDragEnd);
      window.removeEventListener('touchmove', this.handleDrag);
      window.removeEventListener('touchend', this.handleDragEnd);
    }
    willUpdate(changedProperties) {
      if (changedProperties.has('value')) {
        this.updateStateFromValue(this.value);
      }
    }
    render() {
      const saturationPanelStyle = {
        backgroundColor: `hsl(${this.hsv.h}, 100%, 50%)`,
      };
      const saturationThumbStyle = {
        top: `${this.saturationThumbPosition.y}%`,
        left: `${this.saturationThumbPosition.x}%`,
        backgroundColor: tinycolor(this.hsv).toHexString(),
      };
      const hueThumbStyle = {
        left: `${this.hueThumbPosition}%`,
      };
      return x$1`
      <div
        class="saturation-panel"
        style=${o$2(saturationPanelStyle)}
        @mousedown=${this.handleSaturationDragStart}
        @touchstart=${this.handleSaturationDragStart}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${o$2(saturationThumbStyle)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart}
          @touchstart=${this.handleHueDragStart}
        >
          <div
            class="hue-thumb"
            style=${o$2(hueThumbStyle)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${
          this.swatches
            ? this.swatches.map(
                color => x$1`
                <mov-color-swatch
                  .color=${color}
                  title=${color}
                  ?selected=${tinycolor.equals(this.value, color)}
                  @click=${() => this.selectSwatch(color)}
                ></mov-color-swatch>
              `,
              )
            : Object.values(colors).map(
                color => x$1`
                <mov-color-swatch
                  .color=${color['600']}
                  title=${color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                  ?selected=${tinycolor.equals(this.value, color['600'])}
                  @click=${() => this.selectSwatch(color['600'])}
                ></mov-color-swatch>
              `,
              )
        }
      </div>
    `;
    }
    /**
     * Updates the internal HSV state from a hex color value.
     * @internal
     */
    updateStateFromValue(color) {
      const newHsv = tinycolor(color).toHsv();
      if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
        this.hsv = newHsv;
        this.updateThumbPositions();
      }
    }
    /**
     * Updates the public `value` property from the internal HSV state and dispatches a change event.
     * @internal
     */
    updateValueFromHsv() {
      const newValue = tinycolor(this.hsv).toHexString();
      if (this.value !== newValue) {
        this.value = newValue;
        this.dispatchEvent(
          new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
          }),
        );
      }
    }
    /**
     * Recalculates the thumb positions based on the current HSV state.
     * @internal
     */
    updateThumbPositions() {
      this.saturationThumbPosition = {
        x: this.hsv.s * 100,
        y: (1 - this.hsv.v) * 100,
      };
      this.hueThumbPosition = (this.hsv.h / 360) * 100;
    }
    /**
     * Gets the client coordinates from a mouse or touch event.
     * @internal
     */
    getEventPosition(e) {
      if ('touches' in e) {
        return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
      }
      return { clientX: e.clientX, clientY: e.clientY };
    }
    /**
     * Updates the saturation and value based on the user's interaction with the saturation panel.
     * @internal
     */
    updateSaturation(e) {
      if (!this.saturationPanel) return;
      const { clientX, clientY } = this.getEventPosition(e);
      const rect = this.saturationPanel.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
      this.hsv.s = x / rect.width;
      this.hsv.v = 1 - y / rect.height;
      this.updateValueFromHsv();
    }
    /**
     * Updates the hue based on the user's interaction with the hue slider.
     * @internal
     */
    updateHue(e) {
      if (!this.hueSlider) return;
      const { clientX } = this.getEventPosition(e);
      const rect = this.hueSlider.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      this.hsv.h = (x / rect.width) * 360;
      this.updateValueFromHsv();
    }
    /**
     * Sets the color value based on a clicked swatch and dispatches a change event.
     * @internal
     */
    selectSwatch(color) {
      this.value = color;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      );
    }
  };
  ColorPicker.styles = i$5`
    :host {
      display: block;
      width: 250px;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: var(--wa-border-radius-lg);
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }
  `;
  __decorateClass$4([n$1({ type: String })], ColorPicker.prototype, 'value', 2);
  __decorateClass$4([n$1({ type: Array })], ColorPicker.prototype, 'swatches', 2);
  __decorateClass$4([r()], ColorPicker.prototype, 'hsv', 2);
  __decorateClass$4([r()], ColorPicker.prototype, 'saturationThumbPosition', 2);
  __decorateClass$4([r()], ColorPicker.prototype, 'hueThumbPosition', 2);
  ColorPicker = __decorateClass$4([t$2('mov-color-picker')], ColorPicker);

  var __defProp$2 = Object.defineProperty;
  var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
  var __decorateClass$3 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$2(target, key, result);
    return result;
  };
  let SegmentedControl = class extends i$2 {
    constructor() {
      super(...arguments);
      this.options = [];
      this.value = '';
      this.labelPosition = 'side';
    }
    /**
     * Handles the change event from the internal radio inputs, updates the component's value,
     * and dispatches a `change` event.
     * @internal
     */
    handleChange(event) {
      const target = event.currentTarget;
      this.value = target.value;
      this.dispatchEvent(
        new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
      );
    }
    /**
     * @internal
     */
    render() {
      return x$1`
      <div class="segmented-control">
        ${this.options.map(
          option => x$1`
            <label
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : ''}"
            >
              <input
                type="radio"
                name="segmented-control"
                .value=${option.value}
                ?checked=${this.value === option.value}
                @change=${this.handleChange}
              />
              <span
                class="${e({
                  label: true,
                  bottom: this.labelPosition === 'bottom',
                })}"
              >
                ${option.icon}
                ${this.labelPosition !== 'tooltip' ? x$1`<span>${option.label}</span>` : ''}
              </span>
            </label>
          `,
        )}
      </div>
    `;
    }
  };
  SegmentedControl.styles = i$5`
    :host {
      width: 100%;
    }
    .segmented-control {
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
    }
    .option {
      flex: 1;
      text-align: center;
    }
    input {
      display: none;
    }
    .label {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0;
      color: var(--theme-text-color);
      background-color: var(--theme-border-color);
      transition: all 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
    }
    .label.bottom {
      flex-direction: column;
    }
    input:checked + .label {
      background-color: var(--theme-primary-color);
      color: var(--theme-primary-text-color);
      font-weight: 600;
    }
  `;
  __decorateClass$3([n$1({ type: Array })], SegmentedControl.prototype, 'options', 2);
  __decorateClass$3([n$1({ type: String })], SegmentedControl.prototype, 'value', 2);
  __decorateClass$3([n$1({ type: String })], SegmentedControl.prototype, 'labelPosition', 2);
  SegmentedControl = __decorateClass$3([t$2('mov-segmented-control')], SegmentedControl);

  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
  var __decorateClass$2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$1(target, key, result);
    return result;
  };
  let ToggleSwitch = class extends i$2 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.checked = false;
    }
    render() {
      return x$1`
      <div class="toggler">
        <input
          id="${this.name}"
          name="${this.name}"
          type="checkbox"
          value="true"
          ?checked=${this.checked}
          @change=${this.onChange}
        />
        <label for="${this.name}">
          <span class="toggler-on">${IconCheck}</span>
          <span class="toggler-off">${IconX}</span>
        </label>
      </div>
    `;
    }
  };
  ToggleSwitch.styles = i$5`
    /* From Uiverse.io by mobinkakei */
    :host {
      --toggler-size: 2em;
    }

    .toggler input {
      display: none;
    }

    .toggler label {
      display: block;
      position: relative;
      width: var(--toggler-size);
      height: calc(var(--toggler-size) / 2);
      border: 1px solid #d6d6d6;
      border-radius: 36px;
      background: #e4e8e8;
      cursor: pointer;
    }

    .toggler label::after {
      display: block;
      border-radius: 100%;
      background-color: #d7062a;
      content: '';
      animation-name: toggler-size;
      animation-duration: 0.15s;
      animation-timing-function: ease-out;
      animation-direction: normal;
      animation-iteration-count: 1;
      animation-play-state: running;
    }

    .toggler label::after,
    .toggler label .toggler-on .icon,
    .toggler label .toggler-off .icon {
      position: absolute;
      top: 50%;
      left: 25%;
      width: calc(var(--toggler-size) * 0.4);
      height: calc(var(--toggler-size) * 0.4);
      transform: translateY(-50%) translateX(-50%);
      transition:
        left 0.15s ease-in-out,
        background-color 0.2s ease-out,
        width 0.15s ease-in-out,
        height 0.15s ease-in-out,
        opacity 0.15s ease-in-out;
    }

    .toggler input:checked + label::after,
    .toggler input:checked + label .toggler-on .icon,
    .toggler input:checked + label .toggler-off .icon {
      left: 75%;
    }

    .toggler input:checked + label::after {
      background-color: #50ac5d;
      animation-name: toggler-size2;
    }

    .toggler .toggler-on .icon,
    .toggler .toggler-off .icon {
      opacity: 1;
      z-index: 2;
      color: #fefefe;
      fill: none;
    }

    .toggler input:checked + label .toggler-off .icon,
    .toggler input:not(:checked) + label .toggler-on .icon {
      width: 0;
      height: 0;
      opacity: 0;
    }

    @keyframes toggler-size {
      0%,
      100% {
        width: calc(var(--toggler-size) * 0.4);
        height: calc(var(--toggler-size) * 0.4);
      }

      50% {
        width: calc(var(--toggler-size) * 0.3);
        height: calc(var(--toggler-size) * 0.3);
      }
    }

    @keyframes toggler-size2 {
      0%,
      100% {
        width: calc(var(--toggler-size) * 0.4);
        height: calc(var(--toggler-size) * 0.4);
      }

      50% {
        width: calc(var(--toggler-size) * 0.3);
        height: calc(var(--toggler-size) * 0.3);
      }
    }
  `;
  __decorateClass$2([n$1({ type: String })], ToggleSwitch.prototype, 'name', 2);
  __decorateClass$2([n$1({ type: Boolean, reflect: true })], ToggleSwitch.prototype, 'checked', 2);
  __decorateClass$2([n$1({ attribute: false })], ToggleSwitch.prototype, 'onChange', 2);
  ToggleSwitch = __decorateClass$2([t$2('mov-toggle-switch')], ToggleSwitch);

  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      changeSettingsValue('bookmarks', b => b.filter(el => el.url !== url));
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
  }
  function buttonBookmarksOpen() {
    setAppStateValue('panel', 'bookmarks');
  }
  function buttonBookmark() {
    const num = getAppStateValue('currentPage');
    const mark = {
      name: getAppStateValue('manga')?.title ?? window.location.hostname,
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
        html: getLocaleString('BOOKMARK_MESSAGE').replace('##num##', num.toString()),
        icon: 'success',
      });
    }
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

  let scrollActive = false;
  function scroll() {
    const chapter = getAppStateValue('render')?.querySelector('#Chapter');
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
    if (getAppStateValue('render')?.querySelector('#Header')?.classList.contains('headroom-end')) {
      scrollActive = false;
      getAppStateValue('render')?.querySelector('#ScrollControl')?.classList.remove('running');
      logScript('Finished auto scroll');
    }
    if (scrollActive) {
      requestAnimationFrame(scroll);
    }
  }
  function toggleAutoScroll() {
    const control = getAppStateValue('render')?.querySelector('#AutoScroll');
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
  }

  function scrollToElement(ele) {
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      getAppStateValue('render')
        ?.querySelector('#Chapter')
        ?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
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
    event.currentTarget.scrollLeft -= event.deltaY - event.deltaX;
    event.preventDefault();
  }

  function updateViewMode(mode) {
    return () => {
      setSettingsValue('viewMode', mode);
      if (mode.startsWith('Fluid')) {
        setSettingsValue('zoomMode', 'height');
        setSettingsValue('header', 'click');
      } else {
        refreshSettings('zoomMode');
        refreshSettings('zoomValue');
        refreshSettings('header');
      }
    };
  }
  function changeDefaultViewMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('viewMode', mode);
    updateViewMode(mode)();
  }

  function applyZoom(mode = getSettingsValue('zoomMode'), value = getSettingsValue('zoomValue')) {
    logScript('Zoom', mode, value);
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    if (mode === 'height') {
      setSettingsValue('header', 'click');
      setAppStateValue('headerVisible', false);
    } else {
      refreshSettings('header');
    }
  }
  function changeGlobalZoom(mode, value = getSettingsValue('zoomValue')) {
    return () => {
      applyZoom(mode, value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
      applyZoom('percent', ratio);
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('zoomMode', target);
  }
  function changeDefaultZoomValue(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('zoomValue', target);
  }
  function changeZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    applyZoom('percent', target);
  }

  function doScrolling(sign) {
    const viewMode = getSettingsValue('viewMode');
    const zoomMode = getSettingsValue('zoomMode');
    logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
    if (viewMode.startsWith('Fluid')) {
      const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
      getAppStateValue('render')
        ?.querySelector('#Chapter')
        ?.scrollBy({
          left: 0.8 * window.innerWidth * sign * scrollDirection,
          behavior: 'smooth',
        });
    } else if (zoomMode === 'height') {
      const pages = [...(getAppStateValue('render')?.querySelectorAll('.MangaPage') ?? [])];
      const distance = pages.map(element => Math.abs(element.offsetTop - window.scrollY));
      const currentPage = _.indexOf(distance, _.min(distance));
      const target = currentPage + sign;
      const header = getAppStateValue('render')?.querySelector('#Header');
      if (header && target < 0) {
        scrollToElement(header);
      } else if (target >= pages.length);
      else {
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
      const url = getAppStateValue('manga')?.next;
      if (url && url !== '#') {
        window.location.href = distExports.sanitizeUrl(url);
      } else {
        window.history.back();
      }
    },
    PREVIOUS_CHAPTER() {
      const url = getAppStateValue('manga')?.prev;
      if (url && url !== '#') {
        window.location.href = distExports.sanitizeUrl(url);
      } else {
        window.history.back();
      }
    },
    ENLARGE() {
      changeZoomByStep(1)();
    },
    REDUCE() {
      changeZoomByStep(-1)();
    },
    RESTORE() {
      changeGlobalZoom('percent', 100)();
    },
    FIT_WIDTH() {
      changeGlobalZoom('width')();
    },
    FIT_HEIGHT() {
      changeGlobalZoom('height')();
    },
    SETTINGS() {
      setAppStateValue('panel', 'settings');
    },
    VIEW_MODE_WEBCOMIC() {
      updateViewMode('WebComic')();
    },
    VIEW_MODE_VERTICAL() {
      updateViewMode('Vertical')();
    },
    VIEW_MODE_LEFT() {
      updateViewMode('FluidRTL')();
    },
    VIEW_MODE_RIGHT() {
      updateViewMode('FluidLTR')();
    },
    SCROLL_START() {
      toggleAutoScroll();
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

  function buttonPanelsClose() {
    setAppStateValue('panel', 'none');
  }
  function buttonSettingsOpen() {
    setAppStateValue('panel', 'settings');
  }
  function buttonKeybindingsOpen() {
    setAppStateValue('panel', 'keybindings');
  }
  function saveKeybindings() {
    const newKeybinds = {};
    getAppStateValue('render')
      ?.querySelectorAll('.KeybindInput')
      .forEach(element => {
        const keys = element.value.split(',').map(value => value.trim());
        newKeybinds[element.id] = isNothing(keys) ? void 0 : keys;
      });
    saveSettingsValue('keybinds', newKeybinds);
    setAppStateValue('panel', 'keybindings');
    keybindings$1();
  }
  function editKeybindings() {
    setAppStateValue('panel', 'keybindingsEditor');
  }

  const listBookmarks = () => {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }
    return getSettingsValue('bookmarks').map(
      (mark, index) => x$1`
      <div
        id="Bookmark${index + 1}"
        class="BookmarkItem"
      >
        <span class="bookmarkColumnLarge">
          <span class="bookmarkName">${mark.name}</span>
          <br />
          <a
            class="bookmarkURl"
            href="${mark.url}"
            target="_blank"
            >${mark.url}</a
          >
        </span>
        <span class="bookmarkColumnSmall">
          <span class="bookmarkDate"> ${new Date(mark.date).toISOString().slice(0, 10)}</span>
          <br />
          <span class="bookmarkPage">Page: ${mark.page}</span>
        </span>
        <span class="bookmarkFunctions">
          <a
            class=""
            href="${mark.url}"
            target="_blank"
          >
            <button
              class="ControlButton open"
              title="Open Bookmark"
              type="button"
            >
              ${IconExternalLink}
            </button>
          </a>
          <button
            class="ControlButton erase"
            title="Delete Bookmark"
            type="button"
            value="${mark.url}"
            @click=${buttonEraseBookmarks}
          >
            ${IconTrash}
          </button>
        </span>
      </div>
    `,
    );
  };
  const BookmarkPanel = () => x$1`
  <div
    id="BookmarksPanel"
    class="${e({
      panel: true,
      visible: getAppStateValue('panel') === 'bookmarks',
    })}"
  >
    <button
      id="CloseBookmarks"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <button
      class="Bookmark simpleButton"
      title="${getLocaleString('BOOKMARK')}"
      @click=${buttonBookmark}
    >
      ${IconBookmark} ${IconBookmarkOff}
    </button>
    <h2>${getLocaleString('BOOKMARKS')}</h2>
    <div id="BookmarksList">${listBookmarks()}</div>
  </div>
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o(o, t) {
    if (void 0 !== o) {
      let i = -1;
      for (const n of o) (i > -1 && (yield t), i++, yield n);
    }
  }

  const keybindList = () => {
    const keybinds = getSettingsValue('keybinds');
    return Object.keys(keybinds).map(kb => {
      const keys = keybinds[kb]?.length
        ? o(
            keybinds[kb]?.map(key => x$1`<kbd class="dark">${key}</kbd>`),
            ' / ',
          )
        : '';
      return x$1`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
    });
  };
  const keybindEditor = () =>
    Object.keys(getSettingsValue('keybinds'))
      .map(
        kb => x$1`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
          />`,
      )
      .concat(x$1` <div id="HotKeysRules">${o$5(getLocaleString('KEYBIND_RULES'))}</div>`);
  const KeybindingsDialog = () => x$1`
  <div
    id="KeybindingsPanel"
    class="${e({
      panel: true,
      visible: getAppStateValue('panel').startsWith('keybindings'),
    })}"
  >
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button
      id="CloseKeybindings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <div class="controls">
      ${
        getAppStateValue('panel') === 'keybindingsEditor'
          ? x$1` <button
            id="SaveKeybindings"
            class="ControlButton"
            type="button"
            title="${getLocaleString('SAVE_KEYBINDS')}"
            @click=${saveKeybindings}
          >
            ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
          </button>`
          : x$1` <button
            id="EditKeybindings"
            class="ControlButton"
            type="button"
            title="${getLocaleString('EDIT_KEYBINDS')}"
            @click=${editKeybindings}
          >
            ${IconPencil} ${getLocaleString('BUTTON_EDIT')}
          </button>`
      }
    </div>
    <div id="KeybindingsList">
      ${getAppStateValue('panel') === 'keybindingsEditor' ? keybindEditor() : keybindList()}
    </div>
  </div>
`;

  var lib = {};

  var StoreController = {};

  var hasRequiredStoreController;

  function requireStoreController() {
    if (hasRequiredStoreController) return StoreController;
    hasRequiredStoreController = 1;
    Object.defineProperty(StoreController, '__esModule', { value: true });
    StoreController.StoreController = void 0;
    /**
     * A `ReactiveController` that subscribes a `LitElement` to a `nanostores` atom and updates the host element when the atom changes.
     *
     * @example
     * ```ts
     * import { atom } from 'nanostores';
     * import { StoreController } from '@nanostores/lit';
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends LitElement {
     * private controller = new StoreController(this, count);
     *  render() {
     *   const $count = this.controller.value;
     *   return html\`Count: \${$count}\`;
     *  }
     * }
     * ```
     */
    let StoreController$1 = class StoreController {
      constructor(host, atom) {
        this.host = host;
        this.atom = atom;
        host.addController(this);
      }
      // Subscribe to the atom when the host connects
      hostConnected() {
        this.unsubscribe = this.atom.subscribe(() => {
          this.host.requestUpdate();
        });
      }
      // Unsubscribe from the atom when the host disconnects
      hostDisconnected() {
        var _a;
        (_a = this.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(this);
      }
      /**
       * The current value of the atom.
       * @readonly
       */
      get value() {
        return this.atom.get();
      }
    };
    StoreController.StoreController = StoreController$1;
    return StoreController;
  }

  var MultiStoreController = {};

  var hasRequiredMultiStoreController;

  function requireMultiStoreController() {
    if (hasRequiredMultiStoreController) return MultiStoreController;
    hasRequiredMultiStoreController = 1;
    Object.defineProperty(MultiStoreController, '__esModule', { value: true });
    MultiStoreController.MultiStoreController = void 0;
    /**
     * A `ReactiveController` that subscribes a `LitElement` to several `nanostores` atoms and updates the host element when any of the atoms changes.
     *
     * @example
     * ```ts
     * import { atom } from 'nanostores';
     * import { StoreController } from '@nanostores/lit';
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     *
     * const count1 = atom(0);
     * const count2 = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends LitElement {
     * private controller = new MultiStoreController(this, [count1, count2]);
     *  render() {
     *   const [$count1, $count2] = controller.values;
     *   return html\`Count 1: \${count1}\, Count 2: \${count2}\`;
     *  }
     * }
     * ```
     */
    let MultiStoreController$1 = class MultiStoreController {
      constructor(host, atoms) {
        this.host = host;
        this.atoms = atoms;
        host.addController(this);
      }
      // Subscribe to the atom when the host connects
      hostConnected() {
        this.unsubscribes = this.atoms.map(atom => atom.subscribe(() => this.host.requestUpdate()));
      }
      // Unsubscribe from the atom when the host disconnects
      hostDisconnected() {
        var _a;
        (_a = this.unsubscribes) === null || _a === void 0
          ? void 0
          : _a.forEach(unsubscribe => unsubscribe());
      }
      /**
       * The current values of the atoms.
       * @readonly
       */
      get values() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.atoms.map(atom => atom.get());
      }
    };
    MultiStoreController.MultiStoreController = MultiStoreController$1;
    return MultiStoreController;
  }

  var useStores = {};

  var hasRequiredUseStores;

  function requireUseStores() {
    if (hasRequiredUseStores) return useStores;
    hasRequiredUseStores = 1;
    Object.defineProperty(useStores, '__esModule', { value: true });
    useStores.useStores = void 0;
    const MultiStoreController_1 = requireMultiStoreController();
    /**
     * A TypeScript decorator that creates a new `MultiStoreController` for the atoms
     * @decorator `withStores(atoms)`
     * @param atoms The atoms to subscribe to.
     *
     * @example
     * ```ts
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     * import { atom } from 'nanostores';
     * import { useStores } from '@nanostores/lit';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * @useStores(count)
     * class MyElement extends LitElement {
     *  render() {
     *   return html\`Count: \${count.get()}\`;
     *   }
     * }
     * ```
     */
    function useStores$1(...atoms) {
      return constructor => {
        return class extends constructor {
          constructor(...args) {
            super(...args);
            new MultiStoreController_1.MultiStoreController(this, atoms);
          }
        };
      };
    }
    useStores.useStores = useStores$1;
    return useStores;
  }

  var withStores = {};

  var hasRequiredWithStores;

  function requireWithStores() {
    if (hasRequiredWithStores) return withStores;
    hasRequiredWithStores = 1;
    Object.defineProperty(withStores, '__esModule', { value: true });
    withStores.withStores = void 0;
    const MultiStoreController_1 = requireMultiStoreController();
    /**
     * A mixin that subscribes a LitElement to a list of atoms.
     * @mixin `withStores`
     * @param LitElementClass The LitElement class to extend.
     * @param atoms The atoms to subscribe to.
     *
     * @example
     * ```ts
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     * import { atom } from 'nanostores';
     * import { withStores } from '@nanostores/lit';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends withStores(LitElement, [count]) {
     *  render() {
     *   return html\`Count: \${count.get()}\`;
     *  }
     * }
     * ```
     */
    const withStores$1 = (LitElementClass, atoms) => {
      return class LitElementWithStores extends LitElementClass {
        constructor(...args) {
          super(...args);
          new MultiStoreController_1.MultiStoreController(this, atoms);
        }
      };
    };
    withStores.withStores = withStores$1;
    return withStores;
  }

  var hasRequiredLib;

  function requireLib() {
    if (hasRequiredLib) return lib;
    hasRequiredLib = 1;
    (function (exports) {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.withStores =
        exports.useStores =
        exports.MultiStoreController =
        exports.StoreController =
          void 0;
      var StoreController_1 = requireStoreController();
      Object.defineProperty(exports, 'StoreController', {
        enumerable: true,
        get: function () {
          return StoreController_1.StoreController;
        },
      });
      var MultiStoreController_1 = requireMultiStoreController();
      Object.defineProperty(exports, 'MultiStoreController', {
        enumerable: true,
        get: function () {
          return MultiStoreController_1.MultiStoreController;
        },
      });
      var useStores_1 = requireUseStores();
      Object.defineProperty(exports, 'useStores', {
        enumerable: true,
        get: function () {
          return useStores_1.useStores;
        },
      });
      var withStores_1 = requireWithStores();
      Object.defineProperty(exports, 'withStores', {
        enumerable: true,
        get: function () {
          return withStores_1.withStores;
        },
      });
    })(lib);
    return lib;
  }

  var libExports = requireLib();

  function sequence(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
  }

  function selectGoToPage(event) {
    const target = event.currentTarget.value;
    scrollToElement(getAppStateValue('render')?.querySelector(`#Page${target}`));
  }
  function clickThumbnail(target) {
    scrollToElement(getAppStateValue('render')?.querySelector(`#Page${target}`));
  }

  const styles$1 =
    ':host {\r\n  /* Define sizes for the navigation bar for easy customization */\r\n  --nav-collapsed-size: 34px;\r\n  --nav-expanded-size: 200px;\r\n  --header-height: 80px; /* Adjust as needed */\r\n}\r\n#Navigation {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  gap: 5px;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  line-height: 0;\r\n  transition: all 0.3s ease;\r\n  position: fixed;\r\n}\r\n#Navigation:not(:hover) #Thumbnails {\r\n  display: none;\r\n}\r\n#NavigationCounters {\r\n  flex-shrink: 0; /* Prevent this from shrinking */\r\n  padding: 5px;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n#Thumbnails {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: flex-start;\r\n}\r\n/* == Horizontal Orientation (for top/bottom position) == */\r\n#Navigation.horizontal {\r\n  flex-direction: column;\r\n  height: var(--nav-collapsed-size);\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n#Navigation.horizontal:hover {\r\n  height: var(--nav-expanded-size);\r\n}\r\n#Navigation.bottom {\r\n  bottom: 0;\r\n}\r\n#Navigation.horizontal #Thumbnails {\r\n  flex-direction: row;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n/* == Vertical Orientation (for left/right position) == */\r\n#Navigation.vertical {\r\n  flex-direction: row;\r\n  width: var(--nav-collapsed-size);\r\n  height: 100%;\r\n  bottom: 0;\r\n  transition:\r\n    top 0.3s ease,\r\n    height 0.3s ease,\r\n    width 0.3s ease;\r\n}\r\n#Navigation.vertical:hover {\r\n  width: var(--nav-expanded-size);\r\n}\r\n#Navigation.left {\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n}\r\n#Navigation.right {\r\n  right: 0;\r\n}\r\n#Navigation.vertical #NavigationCounters {\r\n  writing-mode: vertical-rl;\r\n  transform: rotate(180deg);\r\n}\r\n#Navigation.right #NavigationCounters {\r\n  transform: rotate(0deg);\r\n}\r\n#Navigation.vertical #Thumbnails {\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#Navigation.left #Thumbnails {\r\n  direction: rtl;\r\n}\r\n/* Adjust for header visibility */\r\n#Navigation.vertical.header {\r\n  top: var(--header-height);\r\n  height: calc(100% - var(--header-height));\r\n}\r\n\r\n#Navigation .Thumbnail {\r\n  display: inline-flex;\r\n  height: 150px;\r\n  width: 150px;\r\n  margin: 0 5px;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /*border: 1px solid var(--theme-primary-color);*/\r\n}\r\n#Navigation.vertical .Thumbnail {\r\n  /*border: 1px solid var(--theme-primary-color);*/\r\n}\r\n.ThumbnailIndex {\r\n  color: var(--theme-primary-text-color);\r\n  background-color: var(--theme-primary-color);\r\n  display: block;\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 30%;\r\n  width: 100%;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  z-index: 1;\r\n}\r\n.ThumbnailImg {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  max-height: 150px;\r\n  min-height: 150px;\r\n  min-width: 80px;\r\n  max-width: 150px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 48px 48px;\r\n}\r\n';

  var __defProp = Object.defineProperty;
  var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
  var __decorateClass$1 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  let Navbar = class extends i$2 {
    constructor() {
      super(...arguments);
      this.mode = 'bottom';
      this.isHiding = false;
    }
    /**
     * Lit-element lifecycle method.
     * Hides the navbar just before its position is about to change.
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('mode')) {
        this.isHiding = true;
      }
    }
    /**
     * Lit-element lifecycle method.
     * Fades the navbar back in after it has been re-rendered in the new position.
     */
    updated(changedProperties) {
      if (changedProperties.has('mode') && this.isHiding) {
        setTimeout(() => {
          this.isHiding = false;
        }, 50);
      }
    }
    /**
     * Renders the navigation bar, including page counters and thumbnails.
     * @returns The rendered template.
     */
    render() {
      if (this.mode === 'disabled') return x$1``;
      const manga = getAppStateValue('manga');
      const navClasses = {
        horizontal: this.mode === 'bottom',
        vertical: this.mode !== 'bottom',
        left: this.mode === 'left',
        right: this.mode === 'right',
        bottom: this.mode === 'bottom',
        hiding: this.isHiding,
      };
      return x$1`
      <nav
        id="Navigation"
        class="${e(navClasses)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${IconCategory}
          <i>${getAppStateValue('loaded')}</i> /
          <b> ${(manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1)} </b>
          ${getLocaleString('PAGES_LOADED')}
          <span>: ${getAppStateValue('currentPage')}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode === 'bottom' ? transformScrollToHorizontal : null}
        >
          ${o$1(
            sequence(manga?.pages ?? 1, manga?.begin ?? 1),
            index => x$1` <figure
                id="Thumbnail${index}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${index}"
                @click=${() => clickThumbnail(index)}
              >
                <img
                  id="ThumbnailImg${index}"
                  alt=""
                  class="ThumbnailImg"
                  src=${getAppStateValue('images')?.[index]?.src ?? ''}
                />
                <figcaption class="ThumbnailIndex">${index}</figcaption>
              </figure>`,
          )}
        </div>
      </nav>
    `;
    }
  };
  /**
   * The component's styles, including imported CSS and dynamic styles for image placeholders.
   */
  Navbar.styles = [
    r$4(styles$1),
    i$5`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${r$4(svgToUrl(IconPhotoRaw))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${r$4(svgToUrl(IconPhotoOffRaw))}');
      }
    `,
  ];
  __decorateClass$1([n$1({ type: String })], Navbar.prototype, 'mode', 2);
  __decorateClass$1([r()], Navbar.prototype, 'isHiding', 2);
  Navbar = __decorateClass$1(
    [t$2('mov-navbar'), libExports.useStores(settings$2, locale, appState)],
    Navbar,
  );

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

  function extFromMime(mime) {
    switch (mime) {
      case 'image/jpeg':
        return 'jpg';
      case 'image/png':
        return 'png';
      case 'image/webp':
        return 'webp';
      case 'image/gif':
        return 'gif';
      case 'image/bmp':
        return 'bmp';
      default:
        return 'png';
    }
  }
  async function generateZip() {
    setAppStateValue('download', 'working');
    const zip = new JSZip();
    const images = getAppStateValue('images') ?? {};
    const manga = getAppStateValue('manga');
    const digits = Math.floor(Math.log10(manga?.pages ?? 1)) + 1;
    Object.entries(images)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .forEach(([key, page]) => {
        if (!page || !page.blob) return;
        const blob = page.blob;
        const ext = extFromMime(blob.type);
        const name = `Page-${Number(key).toString().padStart(digits, '0')}.${ext}`;
        logScript(`${name} Added to Zip from Blob`);
        zip.file(name, blob, {
          createFolders: true,
          compression: 'DEFLATE',
        });
      });
    logScript('Generating Zip');
    zip
      .generateAsync({ type: 'blob' })
      .then(content => {
        logScript('Download Ready');
        const zipName = `${manga?.title ?? document.title}.zip`;
        FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
      })
      .catch(err => {
        logScript('Error generating zip', err);
      })
      .finally(() => {
        setAppStateValue('download', void 0);
      });
  }

  function buttonStartDownload() {
    if (getAppStateValue('download') === 'working') return;
    logScript('Downloading Chapter');
    generateZip().catch(err => logScript('Error downloading chapter', err));
  }
  function buttonGlobalHideImageControls() {
    changeSettingsValue('hidePageControls', b => !b);
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
    setAppStateValue('panel', 'comments');
  }
  function changeCommentsColor(e) {
    const elem = e.currentTarget.parentElement;
    elem?.classList.toggle('light');
    elem?.classList.toggle('dark');
  }

  const commentsDialog = () => x$1`
  <div
    id="CommentsPanel"
    class="${e({
      panel: true,
      visible: getAppStateValue('panel') === 'comments',
      [getSettingsValue('colorScheme')]: true,
    })}"
  >
    <button
      id="CloseComments"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div id="CommentsArea">${getAppStateValue('manga')?.comments}</div>
    <button
      id="CommentsColorScheme"
      class="simpleButton ColorScheme"
      @click=${changeCommentsColor}
    >
      ${IconSun} ${IconMoon}
    </button>
  </div>
`;

  function extractIndex(id) {
    if (!id) return null;
    const m = id.match(/Page(\d+)/);
    return m ? parseInt(m[1], 10) : null;
  }
  function computeCurrentPage() {
    const root = getAppStateValue('render');
    if (!root) return null;
    const chapter = root.querySelector('#Chapter');
    if (!chapter) return null;
    const pages = [...(root.querySelectorAll('.MangaPage') ?? [])];
    if (!pages.length) return null;
    const viewMode = getSettingsValue('viewMode');
    const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
    const isRTL = viewMode === 'FluidRTL';
    const viewportCenterY = window.innerHeight / 2;
    const viewportCenterX = window.innerWidth / 2;
    let best = null;
    for (const el of pages) {
      const rect = el.getBoundingClientRect();
      const edge = isHorizontal ? (isRTL ? rect.right : rect.left) : rect.top;
      const passed = isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY;
      if (passed) {
        const idx = extractIndex(el.id);
        if (idx != null) {
          if (!best || edge > best.edge) {
            best = { idx, edge };
          }
        }
      }
    }
    if (!best) {
      const firstIdx = extractIndex(pages[0]?.id);
      return firstIdx ?? null;
    }
    return best.idx;
  }
  function updateCurrentPage() {
    const page = computeCurrentPage();
    if (page == null) return;
    if (getAppStateValue('currentPage') !== page) {
      setAppStateValue('currentPage', page);
    }
  }
  function attachListeners() {
    const root = getAppStateValue('render');
    const chapter = root?.querySelector('#Chapter');
    const handler = _.throttle(() => {
      requestAnimationFrame(updateCurrentPage);
    }, 100);
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    chapter?.addEventListener('scroll', handler, { passive: true });
    requestAnimationFrame(updateCurrentPage);
  }
  function trackCurrentPage() {
    if (!getAppStateValue('render')) {
      setTimeout(trackCurrentPage, 50);
      return;
    }
    attachListeners();
  }

  function buttonHeaderClick() {
    if (getSettingsValue('header') === 'click') {
      changeAppStateValue('headerVisible', v => !v);
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
    if (getSettingsValue('header') === 'hover') {
      setAppStateValue(
        'headerVisible',
        isMouseInsideRegion(event, window.innerWidth, 150) || window.scrollY <= 100,
      );
    }
  }
  let prevOffset = 0;
  const showEnd = 100;
  function toggleScrollDirection() {
    const header = getSettingsValue('header');
    const { scrollY } = window;
    if (
      getSettingsValue('zoomMode') !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.scrollHeight
    ) {
      setAppStateValue('headroom', 'end');
    } else if (scrollY > prevOffset && scrollY > 50) {
      setAppStateValue('headroom', 'hide');
    } else if (header === 'scroll' && scrollY < prevOffset && scrollY > 50) {
      setAppStateValue('headroom', 'show');
    } else if (header !== 'click' && scrollY <= 65) {
      setAppStateValue('headroom', 'top');
    } else {
      setAppStateValue('headroom', 'none');
    }
    prevOffset = scrollY;
  }
  function headroom() {
    window.addEventListener('scroll', _.throttle(toggleScrollDirection, 300));
    window.addEventListener('mousemove', _.throttle(headerHover, 300));
  }

  function events() {
    headroom();
    keybindings$1();
    window.addEventListener('resize', () => {
      setAppStateValue('device', getDevice());
    });
    autoscroll();
    trackCurrentPage();
  }

  const listOptions = (times, begin = 1) =>
    sequence(times, begin).map(index => x$1` <option value="${index}">${index}</option>`);
  const Header = manga => x$1`
  <div
    id="menu"
    class="${e({
      [getSettingsValue('header')]: true,
    })}"
    @click=${buttonHeaderClick}
  >
    ${IconMenu2}
  </div>
  <header
    id="Header"
    class="${e({
      [getSettingsValue('header')]: true,
      [`headroom-${getAppStateValue('headroom')}`]: true,
      visible: getAppStateValue('headerVisible'),
    })}"
  >
    <aside id="GlobalFunctions">
      <span>
        <button
          id="enlarge"
          title="${getLocaleString('ENLARGE')}"
          class="ControlButton"
          @click="${changeZoomByStep()}"
        >
          ${IconZoomInArea}
        </button>
        <button
          id="restore"
          title="${getLocaleString('RESTORE')}"
          class="ControlButton"
          @click="${changeGlobalZoom('percent', 100)}"
        >
          ${IconZoomPan}
        </button>
        <button
          id="reduce"
          title="${getLocaleString('REDUCE')}"
          class="ControlButton"
          @click="${changeZoomByStep(-1)}"
        >
          ${IconZoomOutArea}
        </button>
        <button
          id="fitWidth"
          title="${getLocaleString('FIT_WIDTH')}"
          class="ControlButton"
          @click="${changeGlobalZoom('width')}"
        >
          ${IconArrowAutofitWidth}
        </button>
        <button
          id="fitHeight"
          title="${getLocaleString('FIT_HEIGHT')}"
          class="ControlButton"
          @click="${changeGlobalZoom('height')}"
        >
          ${IconArrowAutofitHeight}
        </button>
        <button
          id="keybindings"
          title="${getLocaleString('KEYBINDINGS')}"
          class="ControlButton"
          @click=${buttonKeybindingsOpen}
        >
          ${IconKeyboard}
        </button>
        <button
          id="AutoScroll"
          title="${getLocaleString('SCROLL_START')}"
          class="ControlButton phones"
          @click=${toggleAutoScroll}
        >
          ${IconPlayerPlay} ${IconPlayerPause}
        </button>
      </span>
      <span>
        <button
          id="ltrMode"
          title="${getLocaleString('VIEW_MODE_LEFT')}"
          class="ControlButton"
          @click="${updateViewMode('FluidLTR')}"
        >
          ${IconArrowAutofitRight}
        </button>
        <button
          id="verticalMode"
          title="${getLocaleString('VIEW_MODE_VERTICAL')}"
          class="ControlButton tablets"
          @click="${updateViewMode('Vertical')}"
        >
          ${IconArrowAutofitDown}
        </button>
        <button
          id="webComic"
          title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
          class="ControlButton tablets"
          @click="${updateViewMode('WebComic')}"
        >
          ${IconSpacingVertical}
        </button>
        <button
          id="rtlMode"
          title="${getLocaleString('VIEW_MODE_RIGHT')}"
          class="ControlButton"
          @click="${updateViewMode('FluidRTL')}"
        >
          ${IconArrowAutofitLeft}
        </button>
        <button
          id="pageControls"
          title="${getLocaleString('TOGGLE_CONTROLS')}"
          class="ControlButton tablets"
          @click="${buttonGlobalHideImageControls}"
        >
          ${IconListNumbers}
        </button>
        <button
          id="bookmarks"
          title="${getLocaleString('BOOKMARKS')}"
          class="ControlButton tablets"
          @click=${buttonBookmarksOpen}
        >
          ${IconBookmarks}
        </button>
        <button
          id="settings"
          title="${getLocaleString('SETTINGS')}"
          class="ControlButton tablets phones"
          @click=${buttonSettingsOpen}
        >
          ${IconSettings}
        </button>
      </span>
      <span id="ZoomSlider">
        <output
          id="ZoomVal"
          class="RangeValue"
          for="Zoom"
        >
          ${getSettingsValue('zoomMode') === 'percent' ? `${getSettingsValue('zoomValue')}%` : getSettingsValue('zoomMode')}
        </output>
        <input
          type="range"
          value="${getSettingsValue('zoomValue')}"
          name="Zoom"
          id="Zoom"
          min="1"
          max="200"
          @input="${changeZoom}"
        />
      </span>
    </aside>
    <div class="ViewerTitle">
      <h1 id="MangaTitle">${manga.title}</h1>
      <a
        id="series"
        href="${manga.series ?? ''}"
        @click=${buttonRedirectURL}
      >
        (${getLocaleString('RETURN_CHAPTER_LIST')})
      </a>
    </div>
    <nav id="ChapterNavigation">
      <div
        id="Counters"
        class="ControlLabel"
      >
        ${getLocaleString('PAGES_LOADED')}:
        <i>${getAppStateValue('loaded') ?? 0}</i> /
        <b>
          ${(getAppStateValue('manga')?.pages ?? 0) - ((getAppStateValue('manga')?.begin ?? 1) - 1)}
        </b>
        <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
        <select
          id="gotoPage"
          @change=${selectGoToPage}
        >
          <option selected>#</option>
          ${listOptions(manga.pages, manga.begin)}
        </select>
        <span>: ${getAppStateValue('currentPage')}</span>
      </div>
      <div
        id="ChapterControl"
        class="ChapterControl"
      >
        <span>
          <button
            id="CommentsButton"
            class="${e({
              NavigationControlButton: true,
              ControlButton: true,
              disabled: !manga.comments,
            })}"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
          >
            ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
          </button>
          <button
            id="download"
            class="${e({
              NavigationControlButton: true,
              ControlButton: true,
              disabled: getAppStateValue('download') !== 'available',
              loading: getAppStateValue('download') === 'working',
            })}"
            type="button"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
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
            @click=${buttonRedirectURL}
          >
            ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
          </a>
          <a
            id="next"
            class="NavigationControlButton ControlButton"
            type="button"
            href="${manga.next ?? ''}"
            title="${getLocaleString('NEXT_CHAPTER')}"
            @click=${buttonRedirectURL}
          >
            ${getLocaleString('BUTTON_NEXT')} ${IconArrowBigRight}
          </a>
        </span>
      </div>
    </nav>
  </header>
`;

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
  function reloadImage(index, img) {
    logScript(`Reloading Page ${index}`, img);
    const src = getAppStateValue('images')?.[index]?.src;
    if (!src) return;
    const repeat = getRepeatValue(src);
    if (repeat > getSettingsValue('maxReload')) return;
    img?.removeAttribute('src');
    if (isBase64ImageUrl(src) || isObjectURL(src)) {
      img?.setAttribute('src', src);
    } else {
      img?.setAttribute('src', invalidateImageCache(src, repeat));
    }
  }
  function buttonReloadPage(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const img = button.closest('.MangaPage')?.querySelector('.PageImg');
    reloadImage(index, img);
  }
  function buttonHidePage(event) {
    const img = event.currentTarget.parentElement?.parentElement;
    img.classList.toggle('hide');
  }
  function imageLoaded(event) {
    const img = event.currentTarget;
    img.classList.add('imgLoaded');
    img.classList.remove('imgBroken');
    const index = parseInt(img.id.replace('PageImg', ''), 10);
    const image = getAppStateValue('images')?.[index];
    if (image) {
      setAppStateValue('images', {
        ...getAppStateValue('images'),
        [index]: {
          ...image,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        },
      });
    }
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (!blob) return;
          const current = getAppStateValue('images')?.[index];
          if (current) {
            setAppStateValue('images', {
              ...getAppStateValue('images'),
              [index]: {
                ...current,
                blob,
              },
            });
          }
        }, 'image/png');
      }
    } catch (e) {}
    changeAppStateValue('loaded', n => n + 1);
    const loaded = getAppStateValue('loaded') ?? 0;
    const total =
      (getAppStateValue('manga')?.pages ?? 1) - ((getAppStateValue('manga')?.begin ?? 1) - 1);
    const percentage = loaded / total;
    NProgress.configure({
      showSpinner: false,
    }).set(percentage);
    if (loaded === total) {
      logScript('Images Loading Complete');
      if (getSettingsValue('downloadZip')) buttonStartDownload();
    }
  }
  function imageLoadError(event) {
    const img = event.currentTarget;
    if (isEmpty(img.getAttribute('src'))) return;
    img.classList.add('imgBroken');
    const index = parseInt(img.id.replace('PageImg', ''), 10);
    reloadImage(index, img);
  }

  function buttonZoomIn(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img?.naturalWidth) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: (img?.width || img?.naturalWidth) * (1 + getSettingsValue('zoomStep') / 100),
          height: void 0,
        },
      });
    }
  }
  function buttonZoomOut(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img?.naturalWidth) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: (img?.width || img?.naturalWidth) * (1 - getSettingsValue('zoomStep') / 100),
          height: void 0,
        },
      });
    }
  }
  function buttonRestoreZoom(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: void 0,
          height: void 0,
        },
      });
    }
  }
  function buttonZoomWidth(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width:
            window.innerWidth +
            (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
              ? -34
              : 0),
          height: void 0,
        },
      });
    }
  }
  function buttonZoomHeight(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: void 0,
          height: window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -34 : 0),
        },
      });
    }
  }

  function getImageStyle(index) {
    const image = getAppStateValue('images')?.[index];
    const mode = getSettingsValue('zoomMode');
    const value = getSettingsValue('zoomValue');
    const imageStyles = {
      width: 'auto',
      height: 'auto',
      'min-width': `${getSettingsValue('minZoom')}vw`,
    };
    if (image?.width) {
      imageStyles.width = `${image.width}px`;
      imageStyles.height = 'auto';
      return imageStyles;
    }
    if (image?.height) {
      imageStyles.height = `${image.height}px`;
      imageStyles.width = 'auto';
      return imageStyles;
    }
    if (image?.naturalWidth) {
      if (mode === 'width') {
        const nextWidth =
          window.innerWidth +
          (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
            ? -34
            : 0);
        imageStyles.width = `${nextWidth}px`;
        imageStyles.height = 'auto';
      } else if (mode === 'height') {
        const nextHeight = window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -34 : 0);
        imageStyles.height = `${nextHeight}px`;
        imageStyles.maxHeight = `${nextHeight}px`;
        imageStyles.minWidth = 'unset';
        imageStyles.width = 'auto';
      } else if (mode === 'percent') {
        if (value === 100) {
          imageStyles.width = 'auto';
        } else {
          imageStyles.width = `${image.naturalWidth * ((image.width || value) / 100)}px`;
        }
        imageStyles.height = 'auto';
        imageStyles.minWidth = `${getSettingsValue('minZoom')}vw`;
      }
    }
    return imageStyles;
  }
  const listPages = (times, begin) =>
    sequence(times, begin).map(
      index => x$1`
      <div
        id="Page${index}"
        class="MangaPage"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark ControlButton"
            title="${getLocaleString('BOOKMARK')}"
            @click=${buttonBookmark}
            value="${index}"
          >
            ${IconBookmark} ${IconBookmarkOff}
          </button>
          <button
            class="ZoomIn ControlButton"
            title="${getLocaleString('ZOOM_IN')}"
            @click=${buttonZoomIn}
            value="${index}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore ControlButton"
            title="${getLocaleString('ZOOM_RESET')}"
            @click=${buttonRestoreZoom}
            value="${index}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut ControlButton"
            title="${getLocaleString('ZOOM_OUT')}"
            @click=${buttonZoomOut}
            value="${index}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth ControlButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
            @click=${buttonZoomWidth}
            value="${index}"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight ControlButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
            @click=${buttonZoomHeight}
            value="${index}"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide ControlButton"
            title="${getLocaleString('HIDE')}"
            @click=${buttonHidePage}
            value="${index}"
          >
            ${IconEye} ${IconEyeOff}
          </button>
          <button
            class="Reload ControlButton"
            title="${getLocaleString('RELOAD')}"
            @click=${buttonReloadPage}
            value="${index}"
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt="Page ${index}"
            class="PageImg"
            src=${getAppStateValue('images')?.[index]?.src ?? ''}
            style="${o$2(getImageStyle(index))}"
            @load=${imageLoaded}
            @error=${imageLoadError}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `,
    );

  const Reader = manga => x$1`
  <main
    id="Chapter"
    class="${e({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
      separator: getSettingsValue('viewMode') === 'Vertical',
    })}"
    style="${o$2({
      [`margin-${getSettingsValue('navbar')}`]: '34px',
    })}"
    @wheel=${e => {
      if (getSettingsValue('viewMode') === 'FluidLTR') transformScrollToHorizontal(e);
      else if (getSettingsValue('viewMode') === 'FluidRTL') transformScrollToHorizontalReverse(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;

  function changeSettingsScope(event) {
    const scope = event.currentTarget.value;
    toggleLocalSettings(scope === 'true');
  }
  function changeLocale(event) {
    const locale = event.currentTarget.value;
    saveSettingsValue('locale', locale);
  }
  function changeLoadMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('loadMode', mode);
  }
  function checkFitWidthOversize(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('fitWidthIfOversize', checked);
  }
  function changeNavbarType(event) {
    const navbarType = event.currentTarget.value;
    saveSettingsValue('navbar', navbarType);
  }
  function checkEnableComments(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('enableComments', checked);
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
    saveSettingsValue('hidePageControls', checked);
  }
  function changeHeaderType(event) {
    const headerType = event.currentTarget.value;
    saveSettingsValue('header', headerType);
  }
  function changeScrollHeight(event) {
    const { value } = event.currentTarget;
    saveSettingsValue('scrollHeight', parseInt(value, 10));
  }

  function settingsScope() {
    const options = [
      {
        value: 'false',
        label: getLocaleString('GLOBAL'),
        icon: IconWorldCog,
      },
      {
        value: 'true',
        label: window.location.hostname,
        icon: IconLocationCog,
      },
    ];
    const value = isSettingsLocal() ? 'true' : 'false';
    return x$1` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <mov-segmented-control
      .options=${options}
      .value=${value}
      @change=${changeSettingsScope}
    ></mov-segmented-control>
  </div>`;
  }
  function localeSelector() {
    return locales.map(
      locale => x$1`
      <option
        value="${locale.ID}"
        ?selected=${getSettingsValue('locale') === locale.ID}
      >
        ${locale.NAME}
      </option>
    `,
    );
  }
  function language() {
    return x$1` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select
      id="locale"
      @change="${changeLocale}"
    >
      ${localeSelector()}
    </select>
  </div>`;
  }
  const SettingsPanelGeneral = () => x$1`${settingsScope()} ${language()}`;

  function loadMode() {
    return x$1`
    <div class="ControlLabel loadMode">
      ${getLocaleString('DEFAULT_LOAD_MODE')}
      <select
        id="loadMode"
        @change="${changeLoadMode}"
      >
        <option
          value="wait"
          ?selected=${getSettingsValue('loadMode') === 'wait'}
        >
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option
          value="always"
          ?selected=${getSettingsValue('loadMode') === 'always'}
        >
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option
          value="never"
          ?selected=${getSettingsValue('loadMode') === 'never'}
        >
          ${getLocaleString('LOAD_MODE_NEVER')}
        </option>
      </select>
    </div>
  `;
  }
  function loadSpeed() {
    return x$1`
    <div class="ControlLabel PagesPerSecond">
      ${getLocaleString('LOAD_SPEED')}
      <select
        id="PagesPerSecond"
        @change="${changePagesPerSecond}"
      >
        <option
          value="3000"
          ?selected=${getSettingsValue('throttlePageLoad') === 3e3}
        >
          0.3(${getLocaleString('SLOWLY')})
        </option>
        <option
          value="2000"
          ?selected=${getSettingsValue('throttlePageLoad') === 2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${getSettingsValue('throttlePageLoad') === 1e3}
        >
          01(${getLocaleString('NORMAL')})
        </option>
        <option
          value="500"
          ?selected=${getSettingsValue('throttlePageLoad') === 500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${getSettingsValue('throttlePageLoad') === 250}
        >
          04(${getLocaleString('FAST')})
        </option>
        <option
          value="125"
          ?selected=${getSettingsValue('throttlePageLoad') === 125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${getSettingsValue('throttlePageLoad') === 100}
        >
          10(${getLocaleString('EXTREME')})
        </option>
        <option
          value="1"
          ?selected=${getSettingsValue('throttlePageLoad') === 1}
        >
          ${getLocaleString('ALL_PAGES')}
        </option>
      </select>
    </div>
  `;
  }
  const SettingsPanelLoading = () => x$1`${loadMode()} ${loadSpeed()}`;

  function checkboxOptions() {
    return x$1`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      <mov-toggle-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue('fitWidthIfOversize')}
        .onChange=${checkFitWidthOversize}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      <mov-toggle-switch
        name="enableComments"
        ?checked=${getSettingsValue('enableComments')}
        .onChange=${checkEnableComments}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      <mov-toggle-switch
        name="downloadZip"
        ?checked=${getSettingsValue('downloadZip')}
        .onChange=${checkAutoDownload}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      <mov-toggle-switch
        name="hidePageControls"
        ?checked=${getSettingsValue('hidePageControls')}
        .onChange=${checkHideImageControls}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      <mov-toggle-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue('lazyLoadImages')}
        .onChange=${checkLazyLoad}
      ></mov-toggle-switch>
    </div>
  `;
  }
  function lazyLoad() {
    return x$1`
    <div
      class="${e({
        ControlLabel: true,
        lazyStart: true,
        ControlLabelItem: true,
        show: getSettingsValue('lazyLoadImages'),
      })}"
    >
      <span>
        ${getLocaleString('LAZY_LOAD_IMAGES')}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${getSettingsValue('lazyStart')}
        </output>
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
        @change="${changeLazyStart}"
      />
    </div>
  `;
  }
  function headerType() {
    const headerOptions = [
      { value: 'hover', label: getLocaleString('HEADER_HOVER'), icon: IconArrowsMove },
      { value: 'scroll', label: getLocaleString('HEADER_SCROLL'), icon: IconArrowsVertical },
      { value: 'click', label: getLocaleString('HEADER_CLICK'), icon: IconHandClick },
      { value: 'fixed', label: getLocaleString('HEADER_FIXED'), icon: IconPin },
      { value: 'simple', label: getLocaleString('HEADER_SIMPLE'), icon: IconBoxAlignTop },
    ];
    return x$1`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <mov-segmented-control
        .options=${headerOptions}
        .value=${getSettingsValue('header')}
        @change=${changeHeaderType}
        labelPosition="bottom"
      ></mov-segmented-control>
    </div>
  `;
  }
  function navbarType() {
    const navbarOptions = [
      { value: 'bottom', label: getLocaleString('NAVBAR_BOTTOM'), icon: IconLayoutBottombar },
      { value: 'left', label: getLocaleString('NAVBAR_LEFT'), icon: IconLayoutSidebar },
      { value: 'right', label: getLocaleString('NAVBAR_RIGHT'), icon: IconLayoutSidebarRight },
      { value: 'disabled', label: getLocaleString('NAVBAR_DISABLED'), icon: IconX },
    ];
    return x$1`
    <div class="ControlLabel navbarType">
      ${getLocaleString('NAVBAR_TYPE')}
      <mov-segmented-control
        .options=${navbarOptions}
        .value=${getSettingsValue('navbar')}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      ></mov-segmented-control>
    </div>
  `;
  }
  function autoScroll() {
    return x$1`
    <div class="ControlLabel autoScroll">
      <span>
        ${getLocaleString('AUTO_SCROLL_HEIGHT')}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
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
        @change="${changeScrollHeight}"
      />
    </div>
  `;
  }
  const SettingsPanelOthers = () =>
    x$1`${checkboxOptions()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;

  function theme() {
    return x$1`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <button
        id="ColorScheme"
        class="ControlButton"
        @click=${changeColorScheme}
      >
        ${IconSun} ${IconMoon}
      </button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <input
        id="ThemeHex"
        type="color"
        value="${getSettingsValue('theme')}"
        class="colorpicker"
        title="${getSettingsValue('theme')}"
        @change=${changeThemeHex}
      />
    </div>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <mov-color-panel .selectedTheme=${getSettingsValue('theme')}></mov-color-panel>
    </details>
  `;
  }

  function defaultZoomMode() {
    const zoomOptions = [
      { value: 'percent', label: getLocaleString('PERCENT'), icon: IconFilePercent },
      { value: 'width', label: getLocaleString('FIT_WIDTH'), icon: IconArrowAutofitWidth },
      { value: 'height', label: getLocaleString('FIT_HEIGHT'), icon: IconArrowAutofitHeight },
    ];
    return x$1` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <mov-segmented-control
      .options=${zoomOptions}
      .value=${getSettingsValue('zoomMode')}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    ></mov-segmented-control>
  </div>`;
  }
  function zoomValue() {
    return x$1`
    <div
      class="${e({
        ControlLabel: true,
        zoomValue: true,
        ControlLabelItem: true,
        show: getSettingsValue('zoomMode') === 'percent',
      })}"
    >
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${getSettingsValue('zoomValue')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('zoomValue')}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${changeDefaultZoomValue}"
      />
      <datalist id="zoomValueList">
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
    return x$1`
    <div class="ControlLabel minZoom">
      <span>
        ${getLocaleString('MINIMUM_ZOOM')}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${getSettingsValue('minZoom')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('minZoom')}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${changeMinZoom}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `;
  }
  function zoomStep() {
    return x$1`
    <div class="ControlLabel zoomStep">
      <span>
        ${getLocaleString('ZOOM_STEP')}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${getSettingsValue('zoomStep')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('zoomStep')}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${changeZoomStep}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `;
  }
  function viewMode() {
    const viewModeOptions = [
      {
        value: 'Vertical',
        label: getLocaleString('VIEW_MODE_VERTICAL'),
        icon: IconArrowAutofitDown,
      },
      {
        value: 'WebComic',
        label: getLocaleString('VIEW_MODE_WEBCOMIC'),
        icon: IconSpacingVertical,
      },
      { value: 'FluidLTR', label: getLocaleString('VIEW_MODE_LEFT'), icon: IconArrowAutofitRight },
      { value: 'FluidRTL', label: getLocaleString('VIEW_MODE_RIGHT'), icon: IconArrowAutofitLeft },
    ];
    return x$1`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <mov-segmented-control
        .options=${viewModeOptions}
        .value=${getSettingsValue('viewMode')}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      ></mov-segmented-control>
    </div>
  `;
  }
  const SettingsPanelZoom = () =>
    x$1`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;

  const SettingsPanel = () => x$1`
  <div
    id="SettingsPanel"
    class="${e({
      panel: true,
      visible: getAppStateValue('panel') === 'settings',
    })}"
  >
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button
      id="CloseSettings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click="${buttonPanelsClose}"
    >
      ${IconX}
    </button>
    <button
      id="ResetSettings"
      class="ControlButton"
      @click="${resetSettings}"
    >
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

  const styles =
    ':root:not(.light, .dark) {\r\n  --theme-body-background: #25262b;\r\n  --theme-body-text-color: #c1c2c5;\r\n  --theme-text-color: #c1c2c5;\r\n  --theme-primary-color: #1a1b1e;\r\n  --theme-primary-text-color: #c1c2c5;\r\n  --theme-background-color: #25262b;\r\n  --theme-hightlight-color: #2c2e33;\r\n  --theme-border-color: #373a40;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n  text-decoration: none;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n}\r\n\r\n#Chapter {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  min-width: 225px;\r\n}\r\n\r\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n#Chapter.Vertical .PageContent {\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 950;\r\n  cursor: pointer;\r\n}\r\n\r\n.overlay.visible {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  height: 20px;\r\n  /*padding: 0;*/\r\n  margin: 2px;\r\n}\r\n\r\n.ControlButton,\r\n.ControlButton:visited,\r\n.ControlButton:link,\r\n.simpleButton {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px;\r\n  min-height: 32px;\r\n  color: var(--theme-primary-text-color);\r\n  background-color: var(--theme-primary-color);\r\n  border-color: var(--theme-border-color);\r\n}\r\n\r\n.ControlButton:active,\r\n.ControlButton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.simpleButton {\r\n  font-size: initial;\r\n  min-width: 32px;\r\n}\r\n\r\n.panel .simpleButton {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n}\r\n\r\n.panel {\r\n  padding: 5px;\r\n  position: inherit;\r\n  border-radius: 5px;\r\n  background-color: var(--theme-background-color);\r\n}\r\n\r\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n  max-width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.ControlButton.hidden,\r\n.light #ColorScheme > .icon-tabler-sun,\r\n.dark #ColorScheme > .icon-tabler-moon,\r\n.light #CommentsColorScheme > .icon-tabler-sun,\r\n.dark #CommentsColorScheme > .icon-tabler-moon,\r\n.ChapterControl #download.loading > .icon-tabler-file-download,\r\n.ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\r\n.MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\r\n.MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\r\n.bookmarked .Bookmark > .icon-tabler-bookmark,\r\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\r\n#AutoScroll.running > .icon-tabler-player-play,\r\n#AutoScroll:not(.running) > .icon-tabler-player-pause {\r\n  display: none;\r\n}\r\n\r\n.hideControls .PageFunctions {\r\n  visibility: hidden;\r\n}\r\n';

  const animation =
    '@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n  -webkit-animation: spin-reverse 1s linear infinite;\r\n  animation: spin-reverse 1s linear infinite;\r\n}\r\n';

  const bookmarks =
    '#BookmarksPanel {\r\n  position: fixed;\r\n  top: 10%;\r\n  width: 50%;\r\n  left: 25%;\r\n  right: 25%;\r\n  text-align: center;\r\n  max-height: 70%;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: scaleY(0);\r\n  z-index: 1000;\r\n}\r\n\r\n#BookmarksPanel.visible {\r\n  transform: scaleY(1);\r\n  display: block;\r\n}\r\n\r\n#BookmarksList {\r\n  padding: 0 15px;\r\n  overflow: auto;\r\n  max-height: 60vh;\r\n}\r\n\r\n#BookmarksList .BookmarkItem {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#BookmarksList .bookmarkColumnLarge {\r\n  flex-basis: 90%;\r\n}\r\n\r\n#BookmarksList .bookmarkColumnSmall {\r\n  width: 90px;\r\n}\r\n\r\n#BookmarksList .bookmarkFunctions {\r\n  width: 75px;\r\n}\r\n\r\n#BookmarksList .bookmarkURl {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  flex-basis: 55%;\r\n}\r\n';

  const comments =
    '#CommentsPanel {\r\n  position: static;\r\n  width: 90%;\r\n  height: 0;\r\n  top: 5%;\r\n  left: 5%;\r\n  text-align: center;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: scaleY(0);\r\n  z-index: 1000;\r\n  overflow-y: initial;\r\n  background-color: var(--theme-body-background);\r\n  opacity: 0;\r\n}\r\n\r\n#CommentsPanel.visible {\r\n  position: fixed;\r\n  height: 90%;\r\n  transform: scaleY(1);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  opacity: 1;\r\n}\r\n\r\n#CommentsArea {\r\n  overflow-y: auto;\r\n  overscroll-behavior: contain;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--theme-body-background);\r\n}\r\n';

  const fluid =
    '#Chapter.FluidLTR,\r\n#Chapter.FluidRTL {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  min-width: auto;\r\n\r\n  .ZoomWidth {\r\n    display: none;\r\n  }\r\n\r\n  .PageImg {\r\n    min-width: unset;\r\n  }\r\n\r\n  .MangaPage {\r\n    width: initial;\r\n    min-width: fit-content;\r\n    position: relative;\r\n    max-height: 100%;\r\n  }\r\n\r\n  .MangaPage.DoublePage {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n#Chapter.FluidLTR {\r\n  flex-direction: row;\r\n\r\n  .MangaPage .PageFunctions {\r\n    right: auto;\r\n    left: 0;\r\n    direction: rtl;\r\n  }\r\n}\r\n\r\n#Chapter.FluidRTL {\r\n  flex-direction: row-reverse;\r\n}\r\n';

  const header =
    '#gotoPage {\r\n  min-width: 35px;\r\n}\r\n\r\n#Header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row nowrap;\r\n  transition: transform 0.3s ease-in;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: inherit;\r\n  z-index: 900;\r\n}\r\n\r\n#Header.click {\r\n  padding-left: 40px;\r\n}\r\n\r\n@keyframes headroom {\r\n  from {\r\n    transform: translateY(-100%);\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0%);\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n  animation: headroom 0.3s ease-in reverse;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\r\n  position: fixed;\r\n  padding-left: 40px;\r\n  top: -100%;\r\n}\r\n\r\n#Header.scroll.headroom-hide {\r\n  animation: none;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-show,\r\n#Header.headroom-end,\r\n#Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\r\n#Header.visible {\r\n  animation: headroom 0.3s ease-in;\r\n  transform: translateY(0%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.headroom-top {\r\n  animation: none;\r\n}\r\n\r\n#Header.fixed {\r\n  position: sticky;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#Header.simple {\r\n  position: static;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#menu {\r\n  position: fixed;\r\n  z-index: 1;\r\n  color: var(--theme-body-text-color);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#menu .icon-tabler {\r\n  position: relative;\r\n  top: 4px;\r\n  left: 4px;\r\n  height: 32px;\r\n  width: 32px;\r\n  stroke-width: 1.25;\r\n}\r\n\r\n#menu:not(.click, .hover),\r\n#menu.hide {\r\n  display: none;\r\n}\r\n\r\n#menu.click {\r\n  z-index: 901;\r\n}\r\n\r\n#MangaTitle {\r\n  padding: 2px;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n}\r\n\r\n#GlobalFunctions {\r\n  display: flex;\r\n  gap: 3px;\r\n  padding: 3px 3px 3px 0;\r\n  flex-wrap: wrap;\r\n  width: 300px;\r\n  z-index: 100;\r\n}\r\n\r\n.ChapterControl span,\r\n#GlobalFunctions span {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.ChapterControl span {\r\n  flex-grow: 1;\r\n}\r\n\r\n.ChapterControl span > * {\r\n  flex-basis: 50%;\r\n}\r\n\r\n#ScrollControl .icon-tabler,\r\n#GlobalFunctions .icon-tabler {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n#GlobalFunctions #ZoomSlider {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#GlobalFunctions #Zoom {\r\n  margin: 2px 5px;\r\n  width: 160px;\r\n}\r\n\r\n#GlobalFunctions #ZoomVal {\r\n  width: 40px;\r\n  display: inline-block;\r\n  color: var(--theme-primary-text-color);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--theme-primary-color);\r\n  padding: 2px 5px;\r\n}\r\n\r\n#ChapterNavigation {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: end;\r\n  padding: 5px;\r\n  max-width: 350px;\r\n}\r\n\r\n#Counters {\r\n  padding-right: 5px;\r\n}\r\n\r\n#ChapterControl {\r\n  display: flex;\r\n}\r\n\r\n#ChapterControl .NavigationControlButton {\r\n  display: inline-flex;\r\n  margin: 2px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 3px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#ChapterControl .NavigationControlButton .icon-tabler {\r\n  flex-shrink: 0;\r\n  align-self: center;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\n#ChapterControl .NavigationControlButton[href="#"],\r\n#ChapterControl .NavigationControlButton[href=""],\r\n#ChapterControl .NavigationControlButton[href="undefined"] {\r\n  visibility: hidden;\r\n}\r\n\r\n#ChapterControl #download.loading {\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n  opacity: 0.6;\r\n}\r\n\r\n#ChapterControl .NavigationControlButton.disabled {\r\n  pointer-events: none;\r\n  filter: grayscale(0.9);\r\n}\r\n\r\n.ViewerTitle {\r\n  text-align: center;\r\n  min-height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  flex-basis: 60%;\r\n}\r\n';

  const keybindings =
    '#KeybindingsPanel {\r\n  padding: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: translateX(100%);\r\n  line-height: 1.5em;\r\n  z-index: 1000;\r\n  overflow-y: auto;\r\n  width: 360px;\r\n  max-width: 100vw;\r\n}\r\n\r\n#KeybindingsPanel.visible {\r\n  transform: translateX(0);\r\n  display: block;\r\n}\r\n\r\n#KeybindingsPanel #KeybindingsList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 5px;\r\n}\r\n\r\n#KeybindingsPanel .ControlButton {\r\n  margin-left: 3px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#KeybindingsPanel label {\r\n  display: ruby;\r\n}\r\n\r\n#KeybindingsPanel input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#KeybindingsPanel #HotKeysRules {\r\n  grid-column: span 2;\r\n}\r\n';

  const media =
    '.mobile #Header,\r\n.tablet #Header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.mobile .ViewerTitle,\r\n.tablet .ViewerTitle {\r\n  order: 1;\r\n  min-height: auto;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  width: auto;\r\n  order: 2;\r\n  padding: 5px;\r\n}\r\n\r\n.mobile #ChapterNavigation,\r\n.tablet #ChapterNavigation {\r\n  order: 3;\r\n}\r\n\r\n.mobile #GlobalFunctions #ZoomSlider,\r\n.tablet #GlobalFunctions #ZoomSlider,\r\n.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\r\n.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\r\n  display: none;\r\n}\r\n\r\n.mobile #Header {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\r\n  position: sticky;\r\n}\r\n\r\n.mobile #MangaTitle {\r\n  word-wrap: anywhere;\r\n}\r\n\r\n.mobile .ViewerTitle {\r\n  order: 1;\r\n  margin-top: 0;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n.mobile #GlobalFunctions {\r\n  order: 2;\r\n  padding: 0;\r\n  width: auto;\r\n  flex-basis: 35px;\r\n}\r\n\r\n.mobile #ChapterNavigation {\r\n  order: 3;\r\n  width: min-content;\r\n  min-width: 205px;\r\n}\r\n\r\n.mobile .ChapterControl {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.mobile .ChapterControl .NavigationControlButton {\r\n  flex-grow: 1;\r\n}\r\n\r\n.mobile .PageFunctions {\r\n  padding: 0;\r\n}\r\n\r\n.mobile .PageFunctions .ControlButton.Bookmark {\r\n  opacity: 1;\r\n}\r\n\r\n.mobile #Navigation,\r\n.mobile #GlobalFunctions #ZoomSlider,\r\n.mobile #GlobalFunctions .ControlButton:not(.phones),\r\n.mobile .PageFunctions .ControlButton:not(.Bookmark),\r\n.mobile #SettingsPanel .DefaultZoomMode,\r\n.mobile #SettingsPanel .zoomValue,\r\n.mobile #SettingsPanel .fitIfOversize,\r\n.mobile #SettingsPanel .showThumbnails,\r\n.mobile #SettingsPanel .lazyLoadImages,\r\n.mobile #SettingsPanel .downloadZip,\r\n.mobile #SettingsPanel .minZoom,\r\n.mobile #SettingsPanel .zoomStep,\r\n.mobile #SettingsPanel .headerType,\r\n.mobile #SettingsPanel .navbarType,\r\n.mobile #SettingsPanel .autoScroll,\r\n.mobile #KeybindingsPanel,\r\n.mobile .ChapterControl .download,\r\n.mobile #Counters {\r\n  display: none;\r\n}\r\n';

  const page =
    '.MangaPage {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  line-height: 0;\r\n  min-height: 22px;\r\n  min-width: 100%;\r\n}\r\n\r\n.PageContent {\r\n  text-align: center;\r\n  display: inline-block;\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.MangaPage.hide .PageContent {\r\n  height: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""],\r\n.PageContent .PageImg:not([src]),\r\n.PageContent .PageImg.imgBroken {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n  position: relative;\r\n  text-align: center;\r\n  line-height: 80vh;\r\n  vertical-align: top;\r\n  color: var(--theme-text-color);\r\n  font-size: 1rem;\r\n  min-width: 40vw;\r\n  min-height: 50vh;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""]:before,\r\n.PageContent .PageImg:not([src]):before,\r\n.PageContent .PageImg.imgBroken:before {\r\n  content: attr(alt);\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  white-space: pre-wrap;\r\n  text-align: center;\r\n  color: var(--theme-text-color);\r\n  font-size: 1rem;\r\n}\r\n\r\n.PageFunctions {\r\n  font-family: monospace;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  gap: 3px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.PageFunctions > .PageIndex {\r\n  background-color: var(--theme-primary-color);\r\n  color: var(--theme-primary-text-color);\r\n  min-width: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  line-height: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.PageFunctions .ControlButton {\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  border-width: 0;\r\n  min-height: auto;\r\n  opacity: 0.5;\r\n}\r\n\r\n.PageFunctions:hover .ControlButton {\r\n  opacity: 1;\r\n}\r\n\r\n.PageFunctions .ControlButton:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n#Chapter.Vertical .separator {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n#Chapter.Vertical .separator::before,\r\n#Chapter.Vertical .separator::after {\r\n  content: "";\r\n  flex: 1;\r\n  border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::before {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::after {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n#Chapter:not(.separator) .separator,\r\n#Chapter:not(.Vertical) .separator {\r\n  display: none;\r\n}\r\n';

  const settings =
    '#SettingsPanel {\r\n  color: var(--theme-text-color);\r\n  padding: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 1000;\r\n  transition:\r\n    transform 0.3s ease-in,\r\n    background-color 0.3s linear;\r\n  transform: translateX(-100%);\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 5px;\r\n  overflow-y: auto;\r\n  max-width: 100vw;\r\n  width: 308px;\r\n}\r\n\r\n#SettingsPanel.visible {\r\n  transform: translateX(0);\r\n}\r\n\r\n#SettingsPanel fieldset {\r\n  border: 1px solid var(--theme-body-text-color);\r\n  padding: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#SettingsPanel .ControlLabel {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem:not(.show) {\r\n  display: none;\r\n}\r\n\r\n#SettingsPanel input[type="range"] {\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel .RangeValue {\r\n  display: inline-block;\r\n  color: var(--theme-primary-text-color);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--theme-primary-color);\r\n  padding: 2px 5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n#SettingsPanel datalist {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel datalist option {\r\n  padding: 0;\r\n  writing-mode: vertical-lr;\r\n}\r\n\r\n#ThemeSelector {\r\n  width: 110px;\r\n}\r\n\r\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n  display: none;\r\n}\r\n\r\n#ColorScheme {\r\n  padding: 5px;\r\n  min-height: 28px;\r\n  min-width: 28px;\r\n}\r\n';

  const normalize =
    '/*  Simple Normalizer */\r\nhtml {\r\n  font-size: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n  color: var(--theme-body-text-color);\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  height: auto;\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n}\r\n';

  const cssStyles = css`
    .PageContent .PageImg[src=''],
    .PageContent .PageImg:not([src]) {
      background-image: url('${svgToUrl(IconPhotoRaw)}');
    }

    .PageContent .PageImg.imgBroken {
      background-image: url('${svgToUrl(IconPhotoOffRaw)}');
    }

    ${normalize}
    ${styles}
  ${header}
  ${icons}
  ${keybindings}
  ${page}
  ${fluid}
  ${settings}
  ${bookmarks}
  ${comments}
  ${media}
  ${animation}
  `;

  const themesCSS = (selector = '#MangaOnlineViewer', hex = getSettingsValue('theme')) => {
    const gradient = generateColorGradient(hex, 'base');
    const text = getTextColor(hex);
    if (!gradient) return '';
    const name = 'custom';
    return css`
    :where(:root),
    ${selector} {
      --mov-color-${name}-95: ${gradient[0]};
      --mov-color-${name}-90: ${gradient[1]};
      --mov-color-${name}-80: ${gradient[2]};
      --mov-color-${name}-70: ${gradient[3]};
      --mov-color-${name}-60: ${gradient[4]};
      --mov-color-${name}-50: ${gradient[5]};
      --mov-color-${name}-40: ${gradient[6]};
      --mov-color-${name}-30: ${gradient[7]};
      --mov-color-${name}-20: ${gradient[8]};
      --mov-color-${name}-10: ${gradient[9]};
      --mov-color-${name}-05: ${gradient[10]};
      --mov-color-${name}: var(--mov-color-${name}-60);
      --mov-color-${name}-key: 60;
      --mov-color-${name}-gte-60: calc(100% - (clamp(0, 60 - var(--mov-color-${name}-key), 1) * 100%));
      --mov-color-${name}-on: color-mix(in oklab, var(--mov-color-${name}-10) var(--mov-color-${name}-gte-60), white);
    }

    .light,
    .dark .invert {
      --theme-body-background: ${colors.gray['50']};
      --theme-body-text-color: ${colors.gray['900']};
      --theme-text-color: ${colors.gray['900']};
      --theme-background-color: ${colors.gray['50']};
      --theme-hightlight-color: ${colors.gray['500']};
      --theme-border-color: ${colors.gray['100']};
      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      color-scheme: light;
    }

    .dark,
    .light .invert{
      --theme-body-background: ${colors.dark['600']};
      --theme-body-text-color: ${colors.dark['50']};
      --theme-text-color: ${colors.dark['50']};
      --theme-background-color: ${colors.dark['600']};
      --theme-hightlight-color: ${colors.dark['500']};
      --theme-border-color: ${colors.dark['400']};
      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      color-scheme: dark;
    }
  `;
  };

  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let App = class extends i$2 {
    /**
     * LitElement lifecycle hook, called after the component's first render.
     * It initializes global event listeners and registers the component's `shadowRoot`
     * in the application state, making it accessible to other parts of the application
     * that may need to interact with the DOM.
     */
    firstUpdated() {
      events();
      setAppStateValue('render', this.shadowRoot);
    }
    /**
     * Renders the application's UI.
     * This includes applying the current theme and rendering the header, reader,
     * navigation bar, overlay, and all dialog panels.
     * @returns The rendered template.
     */
    render() {
      const manga = getAppStateValue('manga');
      if (!manga) return x$1``;
      return x$1`
      <style>
        ${themesCSS()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${e({
          [getSettingsValue('colorScheme')]: true,
          hideControls: getSettingsValue('hidePageControls'),
          bookmarked: !!isBookmarked(),
          [getAppStateValue('device')]: true,
        })}"
        .locale="${getSettingsValue('locale')}"
      >
        ${Header(manga)} ${Reader(manga)}
        <mov-navbar .mode=${getSettingsValue('navbar')}></mov-navbar>
        <div
          id="Overlay"
          class="${e({
            overlay: true,
            visible: getAppStateValue('panel') !== 'none',
          })}"
          @click="${buttonPanelsClose}"
        ></div>
        ${commentsDialog()} ${KeybindingsDialog()} ${BookmarkPanel()} ${SettingsPanel()}
      </div>
    `;
    }
  };
  App.styles = [i$5``, r$4(cssStyles)];
  App = __decorateClass(
    [t$2('manga-online-viewer'), libExports.useStores(settings$2, locale, appState)],
    App,
  );

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
  async function addImg(manga, index, imageSrc, position = 0) {
    setTimeout(
      async () => {
        let src = normalizeUrl(imageSrc);
        if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
          src = await fetch(src, manga.fetchOptions)
            .then(resp => resp.blob())
            .then(blob => blobUtil.blobToDataURL(blob));
        }
        changeAppStateValue('images', images => {
          return { ...images, [index]: { src } };
        });
        logScriptVerbose('Loaded Image:', index, 'Source:', src);
      },
      (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
    );
    if (manga.pages === index) removeURLBookmark();
  }
  async function addPage(manga, index, pageUrl, position = 0) {
    setTimeout(
      async () => {
        const imageSrc = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
        if (imageSrc) {
          const src = normalizeUrl(imageSrc);
          changeAppStateValue('images', images => {
            return { ...images, [index]: { src } };
          });
          logScript(`Loaded Page: `, index, ' Source: ', src);
        }
      },
      (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
    );
    if (manga.pages === position) removeURLBookmark();
  }
  function loadMangaPages(begin, manga) {
    sequence(manga.pages, begin)
      .filter(
        (_index, position) =>
          !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
          position <= getSettingsValue('lazyStart'),
      )
      .forEach((index, position) => {
        addPage(manga, index, manga.listPages[index - 1], position);
      });
  }
  function loadMangaImages(begin, manga) {
    sequence(manga.pages, begin)
      .filter(
        (_index, position) =>
          !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
          position <= getSettingsValue('lazyStart'),
      )
      .forEach((index, position) => {
        addImg(manga, index, manga.listImages[index - 1], position);
      });
  }
  async function loadImages() {
    await waitForFunc(() => getAppStateValue('manga') !== void 0);
    const manga = getAppStateValue('manga');
    const begin = manga.begin ?? 1;
    logScriptVerbose('Loading Images');
    logScriptVerbose(
      `Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`,
    );
    logScriptVerbose(
      `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
    );
    if (isImagesManga(manga)) {
      logScriptVerbose('Method: Images:', manga.listImages);
      loadMangaImages(begin, manga);
    } else if (isPagesManga(manga)) {
      logScriptVerbose('Method: Pages:', manga.listPages);
      loadMangaPages(begin, manga);
    } else if (isBruteforceManga(manga)) {
      logScriptVerbose('Method: Brute Force');
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
    appState.listen((value, oldValue, changedKey) => {
      if (changedKey === 'currentPage' && value.currentPage > oldValue.currentPage) {
        for (let i = value.currentPage; i < value.currentPage + 5; i++) {
          if (value.images[i] !== void 0) continue;
          if (isImagesManga(manga)) {
            addImg(manga, i, manga.listImages[i - 1]);
          } else if (isPagesManga(manga)) {
            addPage(manga, i, manga.listPages[i - 1]);
          }
        }
      }
    });
  }

  function display(manga) {
    console.warn('Running Lit-ts');
    cleanUpElement(document.documentElement, document.head, document.body);
    window.scrollTo(0, 0);
    logScriptVerbose(`Page Cleaned Up`);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = `<manga-online-viewer></manga-online-viewer>`;
    setAppStateValue('manga', manga);
    loadImages();
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
    giveToWindow('MOV', (startPage, endPage) => {
      if (startPage !== void 0) {
        manga.begin = startPage;
      }
      if (endPage !== void 0) {
        manga.pages = endPage;
      }
      viewer(manga).then(() => logScript('Page loaded'));
    });
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
