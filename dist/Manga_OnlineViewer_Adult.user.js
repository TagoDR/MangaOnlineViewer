// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2025.10.07
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.5.2/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
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
        /"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll('\\', '') ?? '';
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
    if (typeof result === 'string' && result.trim() !== '') {
      try {
        return JSON.parse(result);
      } catch (e) {
        logScript('Failed to parse JSON from storage', name, e);
        return defaultValue;
      }
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

  const o$d = '@moaqzdev/toast',
    i$6 = {
      _dispatchToast(s, t) {
        Object.assign(t, { type: s });
        const a = new CustomEvent(o$d, { detail: t });
        document.dispatchEvent(a);
      },
      success(s) {
        this._dispatchToast('success', s);
      },
      error(s) {
        this._dispatchToast('error', s);
      },
      warning(s) {
        this._dispatchToast('warning', s);
      },
      info(s) {
        this._dispatchToast('info', s);
      },
      confirm(s) {
        this._dispatchToast('confirm', s);
      },
    };

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

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$4 = globalThis,
    i$5 = t$4.trustedTypes,
    s$3 = i$5 ? i$5.createPolicy('lit-html', { createHTML: t => t }) : void 0,
    e$8 = '$lit$',
    h$3 = `lit$${Math.random().toFixed(9).slice(2)}$`,
    o$c = '?' + h$3,
    n$6 = `<${o$c}>`,
    r$6 = document,
    l$1 = () => r$6.createComment(''),
    c$3 = t => null === t || ('object' != typeof t && 'function' != typeof t),
    a$1 = Array.isArray,
    u$1 = t => a$1(t) || 'function' == typeof t?.[Symbol.iterator],
    d$1 = '[ \t\n\f\r]',
    f$3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _$1 = />/g,
    m = RegExp(`>|${d$1}(?:([^\\s"'>=/]+)(${d$1}*=${d$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, 'g'),
    p$1 = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y$1 =
      t =>
      (i, ...s) => ({ _$litType$: t, strings: i, values: s }),
    x$1 = y$1(1),
    T = Symbol.for('lit-noChange'),
    E = Symbol.for('lit-nothing'),
    A = new WeakMap(),
    C = r$6.createTreeWalker(r$6, 129);
  function P(t, i) {
    if (!a$1(t) || !t.hasOwnProperty('raw')) throw Error('invalid template strings array');
    return void 0 !== s$3 ? s$3.createHTML(i) : i;
  }
  const V = (t, i) => {
    const s = t.length - 1,
      o = [];
    let r,
      l = 2 === i ? '<svg>' : 3 === i ? '<math>' : '',
      c = f$3;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let a,
        u,
        d = -1,
        y = 0;
      for (; y < s.length && ((c.lastIndex = y), (u = c.exec(s)), null !== u); )
        ((y = c.lastIndex),
          c === f$3
            ? '!--' === u[1]
              ? (c = v)
              : void 0 !== u[1]
                ? (c = _$1)
                : void 0 !== u[2]
                  ? ($.test(u[2]) && (r = RegExp('</' + u[2], 'g')), (c = m))
                  : void 0 !== u[3] && (c = m)
            : c === m
              ? '>' === u[0]
                ? ((c = r ?? f$3), (d = -1))
                : void 0 === u[1]
                  ? (d = -2)
                  : ((d = c.lastIndex - u[2].length),
                    (a = u[1]),
                    (c = void 0 === u[3] ? m : '"' === u[3] ? g : p$1))
              : c === g || c === p$1
                ? (c = m)
                : c === v || c === _$1
                  ? (c = f$3)
                  : ((c = m), (r = void 0)));
      const x = c === m && t[i + 1].startsWith('/>') ? ' ' : '';
      l +=
        c === f$3
          ? s + n$6
          : d >= 0
            ? (o.push(a), s.slice(0, d) + e$8 + s.slice(d) + h$3 + x)
            : s + h$3 + (-2 === d ? i : x);
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
              if (t.endsWith(e$8)) {
                const i = v[a++],
                  s = r.getAttribute(t).split(h$3),
                  e = /([.?@])?(.*)/.exec(i);
                (d.push({
                  type: 1,
                  index: c,
                  name: e[2],
                  strings: s,
                  ctor: '.' === e[1] ? H : '?' === e[1] ? I : '@' === e[1] ? L : k,
                }),
                  r.removeAttribute(t));
              } else t.startsWith(h$3) && (d.push({ type: 6, index: c }), r.removeAttribute(t));
          if ($.test(r.tagName)) {
            const t = r.textContent.split(h$3),
              s = t.length - 1;
            if (s > 0) {
              r.textContent = i$5 ? i$5.emptyScript : '';
              for (let i = 0; i < s; i++)
                (r.append(t[i], l$1()), C.nextNode(), d.push({ type: 2, index: ++c }));
              r.append(t[s], l$1());
            }
          }
        } else if (8 === r.nodeType)
          if (r.data === o$c) d.push({ type: 2, index: c });
          else {
            let t = -1;
            for (; -1 !== (t = r.data.indexOf(h$3, t + 1)); )
              (d.push({ type: 7, index: c }), (t += h$3.length - 1));
          }
        c++;
      }
    }
    static createElement(t, i) {
      const s = r$6.createElement('template');
      return ((s.innerHTML = t), s);
    }
  }
  function S$1(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c$3(i) ? void 0 : i._$litDirective$;
    return (
      h?.constructor !== o &&
        (h?._$AO?.(false),
        void 0 === o ? (h = void 0) : ((h = new o(t)), h._$AT(t, s, e)),
        void 0 !== e ? ((s._$Co ??= [])[e] = h) : (s._$Cl = h)),
      void 0 !== h && (i = S$1(t, h._$AS(t, i.values), h, e)),
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
        e = (t?.creationScope ?? r$6).importNode(i, true);
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
      return ((C.currentNode = r$6), e);
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
      ((t = S$1(this, t, i)),
        c$3(t)
          ? t === E || null == t || '' === t
            ? (this._$AH !== E && this._$AR(), (this._$AH = E))
            : t !== this._$AH && t !== T && this._(t)
          : void 0 !== t._$litType$
            ? this.$(t)
            : void 0 !== t.nodeType
              ? this.T(t)
              : u$1(t)
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
      (this._$AH !== E && c$3(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(r$6.createTextNode(t)),
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
      a$1(this._$AH) || ((this._$AH = []), this._$AR());
      const i = this._$AH;
      let s,
        e = 0;
      for (const h of t)
        (e === i.length
          ? i.push((s = new R(this.O(l$1()), this.O(l$1()), this, this.options)))
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
        ((t = S$1(this, t, i, 0)),
          (o = !c$3(t) || (t !== this._$AH && t !== T)),
          o && (this._$AH = t));
      else {
        const e = t;
        let n, r;
        for (t = h[0], n = 0; n < h.length - 1; n++)
          ((r = S$1(this, e[s + n], i, n)),
            r === T && (r = this._$AH[n]),
            (o ||= !c$3(r) || r !== this._$AH[n]),
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
      if ((t = S$1(this, t, i, 0) ?? E) === T) return;
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
      S$1(this, t);
    }
  }
  const j = t$4.litHtmlPolyfillSupport;
  (j?.(N, R), (t$4.litHtmlVersions ??= []).push('3.3.1'));
  const B = (t, i, s) => {
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
      const t = s?.renderBefore ?? null;
      e._$litPart$ = h = new R(i.insertBefore(l$1(), t), t, void 0, s ?? {});
    }
    return (h._$AI(t), h);
  };

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const f$2 = o => void 0 === o.strings;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = { ATTRIBUTE: 1, CHILD: 2 },
    e$7 =
      t =>
      (...e) => ({ _$litDirective$: t, values: e });
  let i$4 = class i {
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
   */ const s$2 = (i, t) => {
      const e = i._$AN;
      if (void 0 === e) return false;
      for (const i of e) (i._$AO?.(t, false), s$2(i, t));
      return true;
    },
    o$b = i => {
      let t, e;
      do {
        if (void 0 === (t = i._$AM)) break;
        ((e = t._$AN), e.delete(i), (i = t));
      } while (0 === e?.size);
    },
    r$5 = i => {
      for (let t; (t = i._$AM); i = t) {
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set();
        else if (e.has(i)) break;
        (e.add(i), c$2(t));
      }
    };
  function h$2(i) {
    void 0 !== this._$AN ? (o$b(this), (this._$AM = i), r$5(this)) : (this._$AM = i);
  }
  function n$5(i, t = false, e = 0) {
    const r = this._$AH,
      h = this._$AN;
    if (void 0 !== h && 0 !== h.size)
      if (t)
        if (Array.isArray(r)) for (let i = e; i < r.length; i++) (s$2(r[i], false), o$b(r[i]));
        else null != r && (s$2(r, false), o$b(r));
      else s$2(this, i);
  }
  const c$2 = i => {
    i.type == t$3.CHILD && ((i._$AP ??= n$5), (i._$AQ ??= h$2));
  };
  let f$1 = class f extends i$4 {
    constructor() {
      (super(...arguments), (this._$AN = void 0));
    }
    _$AT(i, t, e) {
      (super._$AT(i, t, e), r$5(this), (this.isConnected = i._$AU));
    }
    _$AO(i, t = true) {
      (i !== this.isConnected &&
        ((this.isConnected = i), i ? this.reconnected?.() : this.disconnected?.()),
        t && (s$2(this, i), o$b(this)));
    }
    setValue(t) {
      if (f$2(this._$Ct)) this._$Ct._$AI(t, this);
      else {
        const i = [...this._$Ct._$AH];
        ((i[this._$Ci] = t), this._$Ct._$AI(i, this, 0));
      }
    }
    disconnected() {}
    reconnected() {}
  };

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e$6 = () => new h$1();
  let h$1 = class h {};
  const o$a = new WeakMap(),
    n$4 = e$7(
      class extends f$1 {
        render(i) {
          return E;
        }
        update(i, [s]) {
          const e = s !== this.G;
          return (
            e && void 0 !== this.G && this.rt(void 0),
            (e || this.lt !== this.ct) &&
              ((this.G = s), (this.ht = i.options?.host), this.rt((this.ct = i.element))),
            E
          );
        }
        rt(t) {
          if ((this.isConnected || (t = void 0), 'function' == typeof this.G)) {
            const i = this.ht ?? globalThis;
            let s = o$a.get(i);
            (void 0 === s && ((s = new WeakMap()), o$a.set(i, s)),
              void 0 !== s.get(this.G) && this.G.call(this.ht, void 0),
              s.set(this.G, t),
              void 0 !== t && this.G.call(this.ht, t));
          } else this.G.value = t;
        }
        get lt() {
          return 'function' == typeof this.G
            ? o$a.get(this.ht ?? globalThis)?.get(this.G)
            : this.G?.value;
        }
        disconnected() {
          this.lt === this.ct && this.rt(void 0);
        }
        reconnected() {
          this.rt(this.ct);
        }
      },
    );

  const de_DE = {
    ID: 'de_DE',
    NAME: 'Deutsch',
    STARTING: 'Starte Manga OnlineViewer',
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
      'Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)',
    KEYBINDINGS: 'Tastenkürzel',
    EDIT_KEYBINDS: 'Tastenkürzel bearbeiten',
    SAVE_KEYBINDS: 'Tastenkürzel speichern',
    BUTTON_EDIT: 'Bearbeiten',
    BUTTON_SAVE: 'Speichern',
    KEYBIND_RULES: `
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
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
      'Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!',
    SCROLL_UP: 'Nach oben scrollen',
    SCROLL_DOWN: 'Nach unten scrollen',
    CLOSE: 'Schließen',
    LIST_EMPTY: 'Liste leer',
    DISPLAY_COMMENTS: 'Kommentare anzeigen',
    COMMENTS: 'Kommentarbereich',
    SCROLL_START: 'Auto-Scroll umschalten',
    INCREASE_SPEED: 'Scrollgeschwindigkeit erhöhen',
    DECREASE_SPEED: 'Scrollgeschwindigkeit verringern',
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
    ENABLE_PAGINATION: 'Paginierung aktivieren',
    FILE_MENU: 'Hauptmenü',
    VIEW_MENU: 'Menü „Ansicht“',
    ZOOM_MENU: 'Zoom-Menü',
  };

  const en_US = {
    ID: 'en_US',
    NAME: 'English (US)',
    STARTING: 'Starting Manga OnlineViewer',
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
      'Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)',
    KEYBINDINGS: 'Keybindings',
    EDIT_KEYBINDS: 'Edit KeyBindings',
    SAVE_KEYBINDS: 'Save KeyBindings',
    BUTTON_EDIT: 'Edit',
    BUTTON_SAVE: 'Save',
    KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
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
      'This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!',
    SCROLL_UP: 'Scroll Up',
    SCROLL_DOWN: 'Scroll Down',
    CLOSE: 'Close',
    LIST_EMPTY: 'List Empty',
    DISPLAY_COMMENTS: 'Display Comments',
    COMMENTS: 'Comments Section',
    SCROLL_START: 'Toggle Auto Scroll',
    INCREASE_SPEED: 'Increase Scroll Speed',
    DECREASE_SPEED: 'Decrease Scroll Speed',
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
    ENABLE_PAGINATION: 'Enable Pagination',
    FILE_MENU: 'Main Menu',
    VIEW_MENU: 'View Menu',
    ZOOM_MENU: 'Zoom Menu',
  };

  const es_ES = {
    ID: 'es_ES',
    NAME: 'Español (ES)',
    STARTING: 'Iniciando Manga OnlineViewer',
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
      'La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)',
    KEYBINDINGS: 'Atajos de teclado',
    EDIT_KEYBINDS: 'Editar atajos',
    SAVE_KEYBINDS: 'Guardar atajos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Guardar',
    KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
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
      'No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!',
    SCROLL_UP: 'Desplazar arriba',
    SCROLL_DOWN: 'Desplazar abajo',
    CLOSE: 'Cerrar',
    LIST_EMPTY: 'Lista vacía',
    DISPLAY_COMMENTS: 'Mostrar comentarios',
    COMMENTS: 'Sección de comentarios',
    SCROLL_START: 'Alternar desplazamiento automático',
    INCREASE_SPEED: 'Aumentar la velocidad de desplazamiento',
    DECREASE_SPEED: 'Disminuir la velocidad de desplazamiento',
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
    ENABLE_PAGINATION: 'Habilitar paginación',
    FILE_MENU: 'Menú principal',
    VIEW_MENU: 'Ver menú',
    ZOOM_MENU: 'Menú Zoom',
  };

  const fr_FR = {
    ID: 'fr_FR',
    NAME: 'Français (FR)',
    STARTING: 'Démarrage Manga OnlineViewer',
    RESUME: 'Reprise de la lecture à partir de la Page ',
    WAITING: 'Veuillez patienter, 3 secondes...',
    CHOOSE_BEGINNING: 'Choisissez la page par laquelle commencer :',
    BUTTON_START: 'Démarrer Manga OnlineViewer',
    SETTINGS: 'Paramètres',
    LANGUAGE: 'Langue',
    COLOR_SCHEME: 'Palette de couleurs',
    THEME: 'Thème',
    THEME_COLOR: 'Couleur',
    THEME_HUE: 'Teinte de couleur',
    THEME_SHADE: 'Nuance de couleur',
    DEFAULT_LOAD_MODE: 'Mode de chargement par défaut',
    LOAD_MODE_NORMAL: 'Normal (attendre 3 s)',
    LOAD_MODE_ALWAYS: 'Toujours (immédiatement)',
    LOAD_MODE_NEVER: 'Jamais (manuellement)',
    LOAD_SPEED: 'Vitesse de chargement des pages/seconde',
    DEFAULT_ZOOM: 'Zoom par défaut (entre 5 et 200)',
    DEFAULT_ZOOM_MODE: 'Mode de zoom par défaut',
    MINIMUM_ZOOM: "Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",
    ZOOM_STEP: 'Pas de changement de zoom (entre 5 et 50)',
    DEFAULT_VIEW_MODE: "Mode d'affichage par défaut",
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'De gauche à droite',
    VIEW_MODE_RIGHT: 'De droite à gauche',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Ajuster à la largeur si surdimensionné',
    SHOW_THUMBNAILS: 'Afficher les vignettes',
    ENABLE_COMMENTS: 'Capturer les commentaires (si disponibles)',
    HIDE_CONTROLS: 'Toujours masquer les contrôles de page',
    HEADER_TYPE: "Changer le type d'en-tête",
    HEADER_HOVER: 'Survol',
    HEADER_SCROLL: 'Défilement',
    HEADER_CLICK: 'Clic',
    HEADER_FIXED: 'Fixe',
    HEADER_SIMPLE: 'Simple',
    BUTTON_DOWNLOAD: 'Télécharger',
    DOWNLOAD_ZIP: 'Télécharger le fichier Zip',
    DOWNLOAD_IMAGES: 'Télécharger les images en Zip automatiquement',
    BUTTON_NEXT: 'Suivant',
    NEXT_CHAPTER: 'Chapitre suivant',
    BUTTON_PREVIOUS: 'Précédent',
    PREVIOUS_CHAPTER: 'Chapitre précédent',
    BOOKMARKS: 'Favoris',
    BOOKMARK: 'Favori',
    BOOKMARK_REMOVED: 'Favori supprimé',
    BOOKMARK_SAVED: 'Favori enregistré',
    BOOKMARK_MESSAGE:
      'La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)',
    KEYBINDINGS: 'Raccourcis clavier',
    EDIT_KEYBINDS: 'Modifier les raccourcis clavier',
    SAVE_KEYBINDS: 'Enregistrer les raccourcis clavier',
    BUTTON_EDIT: 'Modifier',
    BUTTON_SAVE: 'Enregistrer',
    KEYBIND_RULES: `
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Attention',
    WARNING: 'Avertissement',
    BUTTON_RESET_SETTINGS: 'Réinitialiser les paramètres',
    SETTINGS_RESET: 'Les paramètres ont été réinitialisés, rechargez la page pour prendre effet',
    LANGUAGE_CHANGED: 'La langue a été modifiée, rechargez la page pour prendre effet',
    AUTO_DOWNLOAD:
      "La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",
    LAZY_LOAD:
      "Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",
    LAZY_LOAD_IMAGES_ENABLE: 'Activer le chargement paresseux des images',
    LAZY_LOAD_IMAGES: 'Début du chargement paresseux à partir de la page (entre 5 et 100)',
    RETURN_CHAPTER_LIST: 'Retour à la liste des chapitres',
    PAGES_LOADED: 'Pages chargées',
    GO_TO_PAGE: 'Aller à la page',
    ENLARGE: 'Agrandir',
    RESTORE: 'Restaurer',
    REDUCE: 'Réduire',
    FIT_WIDTH: 'Ajuster à la largeur',
    FIT_HEIGHT: 'Ajuster à la hauteur',
    PERCENT: 'Pourcentage',
    TOGGLE_CONTROLS: 'Basculer les contrôles de page',
    ZOOM_IN: 'Zoom avant',
    ZOOM_OUT: 'Zoom arrière',
    ZOOM_RESET: 'Réinitialiser le zoom',
    ZOOM_WIDTH: 'Zoomer à la largeur',
    ZOOM_HEIGHT: 'Zoomer à la hauteur',
    HIDE: 'Masquer',
    RELOAD: 'Recharger',
    SLOWLY: 'Lentement',
    NORMAL: 'Normal',
    FAST: 'Rapide',
    EXTREME: 'Extrême',
    ALL_PAGES: 'Toutes les pages',
    SPEED_WARNING: 'Vitesse de chargement trop élevée',
    SPEED_WARNING_MESSAGE:
      "Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",
    SCROLL_UP: 'Faire défiler vers le haut',
    SCROLL_DOWN: 'Faire défiler vers le bas',
    CLOSE: 'Fermer',
    LIST_EMPTY: 'Liste vide',
    DISPLAY_COMMENTS: 'Afficher les commentaires',
    COMMENTS: 'Section des commentaires',
    SCROLL_START: 'Basculer le défilement automatique',
    INCREASE_SPEED: 'Augmenter la vitesse de défilement',
    DECREASE_SPEED: 'Diminuer la vitesse de défilement',
    AUTO_SCROLL_HEIGHT: 'Vitesse de défilement automatique en pixels',
    VERTICAL_SEPARATOR: 'Afficher les séparateurs verticaux',
    END: 'Fin',
    SCOPE: 'Portée',
    GLOBAL: 'Global',
    GENERAL: 'Général',
    LOADING: 'Chargement',
    ZOOM: 'Zoom',
    OTHERS: 'Autres',
    NAVBAR_TYPE: 'Changer le type de barre de navigation',
    NAVBAR_BOTTOM: 'Bas',
    NAVBAR_LEFT: 'Gauche',
    NAVBAR_RIGHT: 'Droite',
    NAVBAR_DISABLED: 'Désactivé',
    ENABLE_PAGINATION: 'Activer la pagination',
    FILE_MENU: 'Menu principal',
    VIEW_MENU: 'Menu Affichage',
    ZOOM_MENU: 'Menu Zoom',
  };

  const pt_BR = {
    ID: 'pt_BR',
    NAME: 'Portugues (Brasil)',
    STARTING: 'Iniciando Manga OnlineViewer',
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
      'Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)',
    KEYBINDINGS: 'Atalhos',
    EDIT_KEYBINDS: 'Editar Atalhos',
    SAVE_KEYBINDS: 'Salvar Atalhos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Salvar',
    KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
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
      'Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!',
    SCROLL_UP: 'Subir Pagina',
    SCROLL_DOWN: 'Descer Pagina',
    CLOSE: 'Fechar',
    LIST_EMPTY: 'Lista Vazia',
    DISPLAY_COMMENTS: 'Mostar Comentarios',
    COMMENTS: 'Seção de comentários',
    SCROLL_START: 'Ativar Rolagem Automatica',
    INCREASE_SPEED: 'Aumentar Valocidade da Rolagem',
    DECREASE_SPEED: 'Diminuir Valocidade da Rolagem',
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
    ENABLE_PAGINATION: 'Ligar Paginação',
    FILE_MENU: 'Menu Principal',
    VIEW_MENU: 'Menu de Visualizações',
    ZOOM_MENU: 'Menu de Zoom',
  };

  const zh_CN = {
    ID: 'zh_CN',
    NAME: '中文 (简体)',
    STARTING: '正在启动 Manga OnlineViewer',
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
    BOOKMARK_MESSAGE: '下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)',
    KEYBINDINGS: '快捷键',
    EDIT_KEYBINDS: '编辑键绑定',
    SAVE_KEYBINDS: '保存键绑定',
    BUTTON_EDIT: '编辑',
    BUTTON_SAVE: '救',
    KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
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
      '不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!',
    SCROLL_UP: '向上滚动',
    SCROLL_DOWN: '向下滚动',
    CLOSE: '关闭',
    LIST_EMPTY: '没有收藏书签',
    DISPLAY_COMMENTS: '显示注释',
    COMMENTS: '评论部分',
    SCROLL_START: '切换自动滚动',
    INCREASE_SPEED: '增加滚动速度',
    DECREASE_SPEED: '降低滚动速度',
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
    ENABLE_PAGINATION: '启用分页',
    FILE_MENU: '主菜单',
    VIEW_MENU: '查看菜单',
    ZOOM_MENU: '缩放菜单',
  };

  const locales = [en_US, es_ES, pt_BR, zh_CN, de_DE, fr_FR];

  const diffObj = (changed, original) => {
    const changes = (object, base) =>
      _.transform(
        object,
        (result, value, key) => {
          if (!_.isEqual(value, base[key])) {
            if (_.isObject(value) && _.isObject(base[key]) && !_.isArray(value)) {
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
    enabled: false,
    fitWidthIfOversize: true,
    header: 'scroll',
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
      RETURN_CHAPTER_LIST: ['backspace', 'del'],
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
      INCREASE_SPEED: ['.'],
      DECREASE_SPEED: [','],
    },
  };
  const mobileSettings = {
    lazyLoadImages: true,
    fitWidthIfOversize: true,
    navbar: 'disabled',
    viewMode: 'WebComic',
    header: 'scroll',
    hidePageControls: true,
    pagination: false,
  };
  function getDefault(global = true) {
    return isMobile()
      ? _.defaultsDeep(mobileSettings, {
          ...defaultSettings,
          theme: global ? '#29487D' : '#004526',
        })
      : { ...defaultSettings, theme: global ? '#29487D' : '#004526' };
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
      if (value && typeof value === 'object' && other && typeof other === 'object') {
        const valueKeybinds = value;
        const otherKeybinds = other;
        const keysA = Object.keys(valueKeybinds).sort((a, b) => a.localeCompare(b));
        const keysB = Object.keys(otherKeybinds).sort((a, b) => a.localeCompare(b));
        if (!_.isEqual(keysA, keysB)) {
          return false;
        }
        for (const k of keysA) {
          const sortedArrayA = valueKeybinds[k]
            ? [...valueKeybinds[k]].sort((a, b) => a.localeCompare(b))
            : [];
          const sortedArrayB = otherKeybinds[k]
            ? [...otherKeybinds[k]].sort((a, b) => a.localeCompare(b))
            : [];
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
  const settings$1 = map(
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
    settings$1,
    current => locales.find(l => l.ID === current.locale) ?? locales[1],
  );
  const appState = map({
    autoScroll: false,
    chapter: e$6(),
    currentPage: 0,
    device: getDevice(),
    loaded: 0,
    manga: void 0,
    panel: 'none',
    scrollToPage: void 0,
  });
  function refreshSettings(key) {
    if (key) {
      const newVal = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
      const currentVal = settings$1.get()?.[key];
      if (haveSettingsChanged(currentVal, newVal, key)) {
        settings$1.setKey(key, newVal);
        logScript('Refreshed Settings', key, newVal);
      }
      return;
    }
    for (const key2 in settings$1.get()) {
      const currentObj = settings$1.get()[key2];
      const newObj = isLocalSettingsAllowed(key2) ? localSettings[key2] : globalSettings[key2];
      if (haveSettingsChanged(currentObj, newObj)) {
        settings$1.setKey(key2, newObj);
      }
    }
    logScript('Refreshed All Settings');
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
  settingsChangeListener(_.debounce(syncLocalSettings, 300), location.hostname);
  function getSettingsValue(key) {
    return settings$1.get()?.[key];
  }
  function setSettingsValue(key, value) {
    const current = settings$1.get()?.[key];
    if (!haveSettingsChanged(current, value, key)) return;
    settings$1.setKey(key, value);
  }
  function saveSettingsValue(key, value) {
    const currentEffective = getSettingsValue(key);
    if (!haveSettingsChanged(currentEffective, value, key)) return;
    settings$1.setKey(key, value);
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
  function changeImage(index, fn) {
    changeAppStateValue('images', images => ({
      ...images,
      [index]: { ...images?.[index], ...fn(images?.[index] ?? {}) },
    }));
  }
  function getLocaleString(name) {
    const currentLocale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
    if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
    return `##MISSING_STRING_${name}##`;
  }
  function toggleLocalSettings(activate = false) {
    localSettings.enabled = activate;
    saveLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
    refreshSettings();
    i$6.info({
      title: `Changed Settings to`,
      description: isSettingsLocal() ? 'Local' : 'Global',
      duration: 2e3,
    });
    return isSettingsLocal();
  }
  function resetSettings() {
    if (isSettingsLocal()) {
      removeValueGM(location.hostname);
      localSettings = getDefault(false);
      toggleLocalSettings(false);
    } else {
      removeValueGM('settings');
      globalSettings = getDefault();
      refreshSettings();
    }
    logScript('Settings Reset');
  }
  function isBookmarked(url = location.href) {
    return getSettingsValue('bookmarks').find(el => el.url === url)?.page;
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
      '\nAppState',
      appState.get(),
    );
  }
  giveToWindow('MOVSettings', showSettings);
  const navbarSize = 34;
  const changedSettings = (newSettings, oldSettings, changedKey) => {
    if (changedKey && !['bookmarks', 'zoomValue'].includes(changedKey)) {
      const oldValue = oldSettings[changedKey];
      const newValue = newSettings[changedKey];
      i$6.info({
        title: `${changedKey} Changed`,
        description: `from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`,
        duration: 2e3,
      });
    }
  };
  settings$1.listen(_.debounce(changedSettings, 300));

  const concatenateTemplateLiteralTag = (raw, ...keys) =>
    keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html = concatenateTemplateLiteralTag;
  const css = concatenateTemplateLiteralTag;

  const sample = {
    navy: '#001f3f',
    darkblue: '#1e4f7a',
    blue: '#1A2F4B',
    darkgreen: '#062925',
    green: '#1A3636',
    grass: '#1B3C53',
    teal: '#044A42',
    darkpurple: '#1B0044',
    purple: '#363062',
    grape: '#31326F',
    maroon: '#44000D',
  };
  const colors = {
    dark: {
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
      950: '#000000',
    },
    slate: {
      '50': 'oklch(98.4% 0.003 247.858)',
      '100': 'oklch(96.8% 0.007 247.896)',
      '200': 'oklch(92.9% 0.013 255.508)',
      '300': 'oklch(86.9% 0.022 252.894)',
      '400': 'oklch(70.4% 0.04 256.788)',
      '500': 'oklch(55.4% 0.046 257.417)',
      '600': 'oklch(44.6% 0.043 257.281)',
      '700': 'oklch(37.2% 0.044 257.287)',
      '800': 'oklch(27.9% 0.041 260.031)',
      '900': 'oklch(20.8% 0.042 265.755)',
      '950': 'oklch(12.9% 0.042 264.695)',
    },
    gray: {
      '50': 'oklch(98.5% 0.002 247.839)',
      '100': 'oklch(96.7% 0.003 264.542)',
      '200': 'oklch(92.8% 0.006 264.531)',
      '300': 'oklch(87.2% 0.01 258.338)',
      '400': 'oklch(70.7% 0.022 261.325)',
      '500': 'oklch(55.1% 0.027 264.364)',
      '600': 'oklch(44.6% 0.03 256.802)',
      '700': 'oklch(37.3% 0.034 259.733)',
      '800': 'oklch(27.8% 0.033 256.848)',
      '900': 'oklch(21% 0.034 264.665)',
      '950': 'oklch(13% 0.028 261.692)',
    },
    zinc: {
      '50': 'oklch(98.5% 0 0)',
      '100': 'oklch(96.7% 0.001 286.375)',
      '200': 'oklch(92% 0.004 286.32)',
      '300': 'oklch(87.1% 0.006 286.286)',
      '400': 'oklch(70.5% 0.015 286.067)',
      '500': 'oklch(55.2% 0.016 285.938)',
      '600': 'oklch(44.2% 0.017 285.786)',
      '700': 'oklch(37% 0.013 285.805)',
      '800': 'oklch(27.4% 0.006 286.033)',
      '900': 'oklch(21% 0.006 285.885)',
      '950': 'oklch(14.1% 0.005 285.823)',
    },
    neutral: {
      '50': 'oklch(98.5% 0 0)',
      '100': 'oklch(97% 0 0)',
      '200': 'oklch(92.2% 0 0)',
      '300': 'oklch(87% 0 0)',
      '400': 'oklch(70.8% 0 0)',
      '500': 'oklch(55.6% 0 0)',
      '600': 'oklch(43.9% 0 0)',
      '700': 'oklch(37.1% 0 0)',
      '800': 'oklch(26.9% 0 0)',
      '900': 'oklch(20.5% 0 0)',
      '950': 'oklch(14.5% 0 0)',
    },
    stone: {
      '50': 'oklch(98.5% 0.001 106.423)',
      '100': 'oklch(97% 0.001 106.424)',
      '200': 'oklch(92.3% 0.003 48.717)',
      '300': 'oklch(86.9% 0.005 56.366)',
      '400': 'oklch(70.9% 0.01 56.259)',
      '500': 'oklch(55.3% 0.013 58.071)',
      '600': 'oklch(44.4% 0.011 73.639)',
      '700': 'oklch(37.4% 0.01 67.558)',
      '800': 'oklch(26.8% 0.007 34.298)',
      '900': 'oklch(21.6% 0.006 56.043)',
      '950': 'oklch(14.7% 0.004 49.25)',
    },
    red: {
      '50': 'oklch(97.1% 0.013 17.38)',
      '100': 'oklch(93.6% 0.032 17.717)',
      '200': 'oklch(88.5% 0.062 18.334)',
      '300': 'oklch(80.8% 0.114 19.571)',
      '400': 'oklch(70.4% 0.191 22.216)',
      '500': 'oklch(63.7% 0.237 25.331)',
      '600': 'oklch(57.7% 0.245 27.325)',
      '700': 'oklch(50.5% 0.213 27.518)',
      '800': 'oklch(44.4% 0.177 26.899)',
      '900': 'oklch(39.6% 0.141 25.723)',
      '950': 'oklch(25.8% 0.092 26.042)',
    },
    orange: {
      '50': 'oklch(98% 0.016 73.684)',
      '100': 'oklch(95.4% 0.038 75.164)',
      '200': 'oklch(90.1% 0.076 70.697)',
      '300': 'oklch(83.7% 0.128 66.29)',
      '400': 'oklch(75% 0.183 55.934)',
      '500': 'oklch(70.5% 0.213 47.604)',
      '600': 'oklch(64.6% 0.222 41.116)',
      '700': 'oklch(55.3% 0.195 38.402)',
      '800': 'oklch(47% 0.157 37.304)',
      '900': 'oklch(40.8% 0.123 38.172)',
      '950': 'oklch(26.6% 0.079 36.259)',
    },
    amber: {
      '50': 'oklch(98.7% 0.022 95.277)',
      '100': 'oklch(96.2% 0.059 95.617)',
      '200': 'oklch(92.4% 0.12 95.746)',
      '300': 'oklch(87.9% 0.169 91.605)',
      '400': 'oklch(82.8% 0.189 84.429)',
      '500': 'oklch(76.9% 0.188 70.08)',
      '600': 'oklch(66.6% 0.179 58.318)',
      '700': 'oklch(55.5% 0.163 48.998)',
      '800': 'oklch(47.3% 0.137 46.201)',
      '900': 'oklch(41.4% 0.112 45.904)',
      '950': 'oklch(27.9% 0.077 45.635)',
    },
    yellow: {
      '50': 'oklch(98.7% 0.026 102.212)',
      '100': 'oklch(97.3% 0.071 103.193)',
      '200': 'oklch(94.5% 0.129 101.54)',
      '300': 'oklch(90.5% 0.182 98.111)',
      '400': 'oklch(85.2% 0.199 91.936)',
      '500': 'oklch(79.5% 0.184 86.047)',
      '600': 'oklch(68.1% 0.162 75.834)',
      '700': 'oklch(55.4% 0.135 66.442)',
      '800': 'oklch(47.6% 0.114 61.907)',
      '900': 'oklch(42.1% 0.095 57.708)',
      '950': 'oklch(28.6% 0.066 53.813)',
    },
    lime: {
      '50': 'oklch(98.6% 0.031 120.757)',
      '100': 'oklch(96.7% 0.067 122.328)',
      '200': 'oklch(93.8% 0.127 124.321)',
      '300': 'oklch(89.7% 0.196 126.665)',
      '400': 'oklch(84.1% 0.238 128.85)',
      '500': 'oklch(76.8% 0.233 130.85)',
      '600': 'oklch(64.8% 0.2 131.684)',
      '700': 'oklch(53.2% 0.157 131.589)',
      '800': 'oklch(45.3% 0.124 130.933)',
      '900': 'oklch(40.5% 0.101 131.063)',
      '950': 'oklch(27.4% 0.072 132.109)',
    },
    green: {
      '50': 'oklch(98.2% 0.018 155.826)',
      '100': 'oklch(96.2% 0.044 156.743)',
      '200': 'oklch(92.5% 0.084 155.995)',
      '300': 'oklch(87.1% 0.15 154.449)',
      '400': 'oklch(79.2% 0.209 151.711)',
      '500': 'oklch(72.3% 0.219 149.579)',
      '600': 'oklch(62.7% 0.194 149.214)',
      '700': 'oklch(52.7% 0.154 150.069)',
      '800': 'oklch(44.8% 0.119 151.328)',
      '900': 'oklch(39.3% 0.095 152.535)',
      '950': 'oklch(26.6% 0.065 152.934)',
    },
    emerald: {
      '50': 'oklch(97.9% 0.021 166.113)',
      '100': 'oklch(95% 0.052 163.051)',
      '200': 'oklch(90.5% 0.093 164.15)',
      '300': 'oklch(84.5% 0.143 164.978)',
      '400': 'oklch(76.5% 0.177 163.223)',
      '500': 'oklch(69.6% 0.17 162.48)',
      '600': 'oklch(59.6% 0.145 163.225)',
      '700': 'oklch(50.8% 0.118 165.612)',
      '800': 'oklch(43.2% 0.095 166.913)',
      '900': 'oklch(37.8% 0.077 168.94)',
      '950': 'oklch(26.2% 0.051 172.552)',
    },
    teal: {
      '50': 'oklch(98.4% 0.014 180.72)',
      '100': 'oklch(95.3% 0.051 180.801)',
      '200': 'oklch(91% 0.096 180.426)',
      '300': 'oklch(85.5% 0.138 181.071)',
      '400': 'oklch(77.7% 0.152 181.912)',
      '500': 'oklch(70.4% 0.14 182.503)',
      '600': 'oklch(60% 0.118 184.704)',
      '700': 'oklch(51.1% 0.096 186.391)',
      '800': 'oklch(43.7% 0.078 188.216)',
      '900': 'oklch(38.6% 0.063 188.416)',
      '950': 'oklch(27.7% 0.046 192.524)',
    },
    cyan: {
      '50': 'oklch(98.4% 0.019 200.873)',
      '100': 'oklch(95.6% 0.045 203.388)',
      '200': 'oklch(91.7% 0.08 205.041)',
      '300': 'oklch(86.5% 0.127 207.078)',
      '400': 'oklch(78.9% 0.154 211.53)',
      '500': 'oklch(71.5% 0.143 215.221)',
      '600': 'oklch(60.9% 0.126 221.723)',
      '700': 'oklch(52% 0.105 223.128)',
      '800': 'oklch(45% 0.085 224.283)',
      '900': 'oklch(39.8% 0.07 227.392)',
      '950': 'oklch(30.2% 0.056 229.695)',
    },
    sky: {
      '50': 'oklch(97.7% 0.013 236.62)',
      '100': 'oklch(95.1% 0.026 236.824)',
      '200': 'oklch(90.1% 0.058 230.902)',
      '300': 'oklch(82.8% 0.111 230.318)',
      '400': 'oklch(74.6% 0.16 232.661)',
      '500': 'oklch(68.5% 0.169 237.323)',
      '600': 'oklch(58.8% 0.158 241.966)',
      '700': 'oklch(50% 0.134 242.749)',
      '800': 'oklch(44.3% 0.11 240.79)',
      '900': 'oklch(39.1% 0.09 240.876)',
      '950': 'oklch(29.3% 0.066 243.157)',
    },
    blue: {
      '50': 'oklch(97% 0.014 254.604)',
      '100': 'oklch(93.2% 0.032 255.585)',
      '200': 'oklch(88.2% 0.059 254.128)',
      '300': 'oklch(80.9% 0.105 251.813)',
      '400': 'oklch(70.7% 0.165 254.624)',
      '500': 'oklch(62.3% 0.214 259.815)',
      '600': 'oklch(54.6% 0.245 262.881)',
      '700': 'oklch(48.8% 0.243 264.376)',
      '800': 'oklch(42.4% 0.199 265.638)',
      '900': 'oklch(37.9% 0.146 265.522)',
      '950': 'oklch(28.2% 0.091 267.935)',
    },
    indigo: {
      '50': 'oklch(96.2% 0.018 272.314)',
      '100': 'oklch(93% 0.034 272.788)',
      '200': 'oklch(87% 0.065 274.039)',
      '300': 'oklch(78.5% 0.115 274.713)',
      '400': 'oklch(67.3% 0.182 276.935)',
      '500': 'oklch(58.5% 0.233 277.117)',
      '600': 'oklch(51.1% 0.262 276.966)',
      '700': 'oklch(45.7% 0.24 277.023)',
      '800': 'oklch(39.8% 0.195 277.366)',
      '900': 'oklch(35.9% 0.144 278.697)',
      '950': 'oklch(25.7% 0.09 281.288)',
    },
    violet: {
      '50': 'oklch(96.9% 0.016 293.756)',
      '100': 'oklch(94.3% 0.029 294.588)',
      '200': 'oklch(89.4% 0.057 293.283)',
      '300': 'oklch(81.1% 0.111 293.571)',
      '400': 'oklch(70.2% 0.183 293.541)',
      '500': 'oklch(60.6% 0.25 292.717)',
      '600': 'oklch(54.1% 0.281 293.009)',
      '700': 'oklch(49.1% 0.27 292.581)',
      '800': 'oklch(43.2% 0.232 292.759)',
      '900': 'oklch(38% 0.189 293.745)',
      '950': 'oklch(28.3% 0.141 291.089)',
    },
    purple: {
      '50': 'oklch(97.7% 0.014 308.299)',
      '100': 'oklch(94.6% 0.033 307.174)',
      '200': 'oklch(90.2% 0.063 306.703)',
      '300': 'oklch(82.7% 0.119 306.383)',
      '400': 'oklch(71.4% 0.203 305.504)',
      '500': 'oklch(62.7% 0.265 303.9)',
      '600': 'oklch(55.8% 0.288 302.321)',
      '700': 'oklch(49.6% 0.265 301.924)',
      '800': 'oklch(43.8% 0.218 303.724)',
      '900': 'oklch(38.1% 0.176 304.987)',
      '950': 'oklch(29.1% 0.149 302.717)',
    },
    fuchsia: {
      '50': 'oklch(97.7% 0.017 320.058)',
      '100': 'oklch(95.2% 0.037 318.852)',
      '200': 'oklch(90.3% 0.076 319.62)',
      '300': 'oklch(83.3% 0.145 321.434)',
      '400': 'oklch(74% 0.238 322.16)',
      '500': 'oklch(66.7% 0.295 322.15)',
      '600': 'oklch(59.1% 0.293 322.896)',
      '700': 'oklch(51.8% 0.253 323.949)',
      '800': 'oklch(45.2% 0.211 324.591)',
      '900': 'oklch(40.1% 0.17 325.612)',
      '950': 'oklch(29.3% 0.136 325.661)',
    },
    pink: {
      '50': 'oklch(97.1% 0.014 343.198)',
      '100': 'oklch(94.8% 0.028 342.258)',
      '200': 'oklch(89.9% 0.061 343.231)',
      '300': 'oklch(82.3% 0.12 346.018)',
      '400': 'oklch(71.8% 0.202 349.761)',
      '500': 'oklch(65.6% 0.241 354.308)',
      '600': 'oklch(59.2% 0.249 0.584)',
      '700': 'oklch(52.5% 0.223 3.958)',
      '800': 'oklch(45.9% 0.187 3.815)',
      '900': 'oklch(40.8% 0.153 2.432)',
      '950': 'oklch(28.4% 0.109 3.907)',
    },
    rose: {
      '50': 'oklch(96.9% 0.015 12.422)',
      '100': 'oklch(94.1% 0.03 12.58)',
      '200': 'oklch(89.2% 0.058 10.001)',
      '300': 'oklch(81% 0.117 11.638)',
      '400': 'oklch(71.2% 0.194 13.428)',
      '500': 'oklch(64.5% 0.246 16.439)',
      '600': 'oklch(58.6% 0.253 17.585)',
      '700': 'oklch(51.4% 0.222 16.935)',
      '800': 'oklch(45.5% 0.188 13.697)',
      '900': 'oklch(41% 0.159 10.272)',
      '950': 'oklch(27.1% 0.105 12.094)',
    },
  };
  function isDark(color) {
    if (!Color.parse(color)) {
      return true;
    }
    const contrastWhite = Color.contrast(color, 'white', 'Lstar');
    const contrastBlack = Color.contrast(color, 'black', 'Lstar');
    return contrastWhite > contrastBlack;
  }
  function getTextColor(color) {
    return isDark(color) ? '#FFFFFF' : '#000000';
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
    preparePage([
      void 0,
      {
        title,
        series: '?reload',
        pages: listImages.length,
        begin: 1,
        prev: '#',
        next: '#',
        lazy: false,
        listImages,
      },
    ]).then(() => logScript('Page loaded'));
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

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis,
    e$5 =
      t$2.ShadowRoot &&
      (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) &&
      'adoptedStyleSheets' in Document.prototype &&
      'replace' in CSSStyleSheet.prototype,
    s$1 = Symbol(),
    o$9 = new WeakMap();
  let n$3 = class n {
    constructor(t, e, o) {
      if (((this._$cssResult$ = true), o !== s$1))
        throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      ((this.cssText = t), (this.t = e));
    }
    get styleSheet() {
      let t = this.o;
      const s = this.t;
      if (e$5 && void 0 === t) {
        const e = void 0 !== s && 1 === s.length;
        (e && (t = o$9.get(s)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$9.set(s, t)));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$4 = t => new n$3('string' == typeof t ? t : t + '', void 0, s$1),
    i$3 = (t, ...e) => {
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
      return new n$3(o, t, s$1);
    },
    S = (s, o) => {
      if (e$5) s.adoptedStyleSheets = o.map(t => (t instanceof CSSStyleSheet ? t : t.styleSheet));
      else
        for (const e of o) {
          const o = document.createElement('style'),
            n = t$2.litNonce;
          (void 0 !== n && o.setAttribute('nonce', n),
            (o.textContent = e.cssText),
            s.appendChild(o));
        }
    },
    c$1 = e$5
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
      is: i$2,
      defineProperty: e$4,
      getOwnPropertyDescriptor: h,
      getOwnPropertyNames: r$3,
      getOwnPropertySymbols: o$8,
      getPrototypeOf: n$2,
    } = Object,
    a = globalThis,
    c = a.trustedTypes,
    l = c ? c.emptyScript : '',
    p = a.reactiveElementPolyfillSupport,
    d = (t, s) => t,
    u = {
      toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l : null;
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
    f = (t, s) => !i$2(t, s),
    b = {
      attribute: true,
      type: String,
      converter: u,
      reflect: false,
      useDefault: false,
      hasChanged: f,
    };
  ((Symbol.metadata ??= Symbol('metadata')), (a.litPropertyMetadata ??= new WeakMap()));
  class y extends HTMLElement {
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
        void 0 !== h && e$4(this.prototype, t, h);
      }
    }
    static getPropertyDescriptor(t, s, i) {
      const { get: e, set: r } = h(this.prototype, t) ?? {
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
      if (this.hasOwnProperty(d('elementProperties'))) return;
      const t = n$2(this);
      (t.finalize(),
        void 0 !== t.l && (this.l = [...t.l]),
        (this.elementProperties = new Map(t.elementProperties)));
    }
    static finalize() {
      if (this.hasOwnProperty(d('finalized'))) return;
      if (((this.finalized = true), this._$Ei(), this.hasOwnProperty(d('properties')))) {
        const t = this.properties,
          s = [...r$3(t), ...o$8(t)];
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
        for (const s of e) i.unshift(c$1(s));
      } else void 0 !== s && i.push(c$1(s));
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
      return (S(t, this.constructor.elementStyles), t);
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
        const h = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
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
                : u;
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
            (i.hasChanged ?? f)(h, s) ||
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
  }
  ((y.elementStyles = []),
    (y.shadowRootOptions = { mode: 'open' }),
    (y[d('elementProperties')] = new Map()),
    (y[d('finalized')] = new Map()),
    p?.({ ReactiveElement: y }),
    (a.reactiveElementVersions ??= []).push('2.1.1'));

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const s = globalThis;
  let i$1 = class i extends y {
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
  ((i$1._$litElement$ = true),
    (i$1['finalized'] = true),
    s.litElementHydrateSupport?.({ LitElement: i$1 }));
  const o$7 = s.litElementPolyfillSupport;
  o$7?.({ LitElement: i$1 });
  (s.litElementVersions ??= []).push('4.2.1');

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = t => (e, o) => {
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
   */ const o$6 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f },
    r$2 = (t = o$6, e, r) => {
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
        ? r$2(t, e, o)
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
   */ function r$1(r) {
    return n$1({ ...r, state: true, attribute: false });
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$3 = (e, t, c) => (
    (c.configurable = true),
    (c.enumerable = true),
    Reflect.decorate && 'object' != typeof t && Object.defineProperty(e, t, c),
    c
  );

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$2(e, r) {
    return (n, s, i) => {
      const o = t => t.renderRoot?.querySelector(e) ?? null;
      return e$3(n, s, {
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
   */ let e$1 = class e extends i$4 {
    constructor(i) {
      if ((super(i), (this.it = E), i.type !== t$3.CHILD))
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
  const o$5 = e$7(e$1);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class t extends e$1 {}
  ((t.directiveName = 'unsafeSVG'), (t.resultType = 2));
  const o$4 = e$7(t);

  function toPascalCase(name) {
    if (name.startsWith('Icon') && !name.includes('-') && !name.includes('_')) {
      return name;
    }
    const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;
    const parts = withoutPrefix.split(/[-_]/);
    const pascalCased = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    return `Icon${pascalCased}`;
  }

  const iconsCSS =
    '.icon-tabler-file-download > :nth-child(n + 4) {\n  color: gold;\n}\n\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\n  color: yellow;\n}\n\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\n  color: yellow;\n}\n\n.icon-tabler-zoom-in-area > :nth-child(2),\n.icon-tabler-zoom-in-area > :nth-child(3) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out-area > :nth-child(2) {\n  color: red;\n}\n\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\n  color: #9966ff;\n}\n\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-spacing-vertical > :nth-child(4) {\n  color: fuchsia;\n}\n\n.icon-tabler-list-numbers > :nth-child(n + 5) {\n  color: #e48900;\n}\n\n.icon-tabler-bookmarks > :nth-child(n + 2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark > :nth-child(2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-eye-off > :nth-child(4) {\n  color: red;\n}\n\n.icon-tabler-zoom-cancel > :nth-child(3),\n.icon-tabler-zoom-cancel > :nth-child(4) {\n  color: #9966ff;\n}\n\n.icon-tabler-zoom-in > :nth-child(3),\n.icon-tabler-zoom-in > :nth-child(4) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-refresh > :nth-child(n + 2) {\n  color: cyan;\n}\n\n.icon-tabler-photo > :nth-child(n + 2) {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(n + 2) {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(6) {\n  color: orange;\n}\n\n.icon-tabler-message > :nth-child(2),\n.icon-tabler-message > :nth-child(3) {\n  color: greenyellow;\n}\n\n.icon-tabler-book-return > g {\n  color: greenyellow;\n}\n\n.icon-tabler-file-percent > :nth-child(2),\n.icon-tabler-file-percent > :nth-child(5),\n.icon-tabler-file-percent > :nth-child(6) {\n  color: yellow;\n}\n\n.icon-tabler-settings-off > :nth-child(4) {\n  color: red;\n}\n';

  const alertCircle =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\n  <path d="M12 8v4" />\n  <path d="M12 16h.01" />\n</svg>\n';

  const arrowAutofitDown =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\n  <path d="M18 4v17" />\n  <path d="M15 18l3 3l3 -3" />\n</svg>\n';

  const arrowAutofitHeight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\n  <path d="M18 14v7" />\n  <path d="M18 3v7" />\n  <path d="M15 18l3 3l3 -3" />\n  <path d="M15 6l3 -3l3 3" />\n</svg>\n';

  const arrowAutofitLeft =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\n  <path d="M20 18h-17" />\n  <path d="M6 15l-3 3l3 3" />\n</svg>\n';

  const arrowAutofitRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\n  <path d="M4 18h17" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n';

  const arrowAutofitWidth =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\n  <path d="M10 18h-7" />\n  <path d="M21 18h-7" />\n  <path d="M6 15l-3 3l3 3" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n';

  const arrowBigLeft =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\n  />\n</svg>\n';

  const arrowBigRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\n  />\n</svg>\n';

  const arrowsMove =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 9l3 3l-3 3" />\n  <path d="M15 12h6" />\n  <path d="M6 9l-3 3l3 3" />\n  <path d="M3 12h6" />\n  <path d="M9 18l3 3l3 -3" />\n  <path d="M12 15v6" />\n  <path d="M15 6l-3 -3l-3 3" />\n  <path d="M12 3v6" />\n</svg>\n';

  const arrowsMoveVertical =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M9 18l3 3l3 -3" />\n  <path d="M12 15v6" />\n  <path d="M15 6l-3 -3l-3 3" />\n  <path d="M12 3v6" />\n</svg>\n';

  const arrowsVertical =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 7l4 -4l4 4" />\n  <path d="M8 17l4 4l4 -4" />\n  <path d="M12 3l0 18" />\n</svg>\n';

  const book =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6l0 13" />\n  <path d="M12 6l0 13" />\n  <path d="M21 6l0 13" />\n</svg>\n';

  const bookReturn =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-return"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6l0 13" />\n  <path d="M12 6l0 13" />\n  <path d="M21 6l0 4" />\n  <g transform="rotate(-90, 19, 15)">\n    <path d="M15 16l3 -3l3 3" />\n    <path d="M18 13v9" />\n  </g>\n</svg>\n';

  const bookUpload =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />\n  <path d="M11 16h-5a2 2 0 0 0 -2 2" />\n  <path d="M15 16l3 -3l3 3" />\n  <path d="M18 13v9" />\n</svg>\n';

  const bookmark =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\n</svg>\n';

  const bookmarkOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const bookmarks =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmarks"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\n</svg>\n';

  const boxAlignTop =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />\n  <path d="M4 15.005v-.01" />\n  <path d="M4 20.005v-.01" />\n  <path d="M9 20.005v-.01" />\n  <path d="M15 20.005v-.01" />\n  <path d="M20 20.005v-.01" />\n  <path d="M20 15.005v-.01" />\n</svg>\n';

  const Comic1SpecialFlat =
    '<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n    <path\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"\n      fill="#e1dde1"\n    />\n    <g>\n      <path\n        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"\n        fill="#3ad1e0"\n      />\n      <path\n        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"\n        fill="#22c7db"\n      />\n      <path\n        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\n        fill="#fb33a8"\n      />\n      <path\n        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\n        fill="#fb33a8"\n      />\n      <path\n        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"\n        fill="#fcb44d"\n      />\n      <path\n        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"\n        fill="#fb9927"\n      />\n      <g>\n        <path\n          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"\n          fill="#ae6ad8"\n        />\n        <path\n          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"\n          fill="#975bbb"\n        />\n        <g>\n          <g>\n            <circle\n              cx="319.023"\n              cy="121.497"\n              fill="#f2eff2"\n              r="26.224"\n            />\n          </g>\n        </g>\n      </g>\n      <path\n        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"\n        fill="#23f1a8"\n      />\n      <path\n        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"\n        fill="#27e19d"\n      />\n      <path\n        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"\n        fill="#23f1a8"\n      />\n      <path\n        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"\n        fill="#27e19d"\n      />\n    </g>\n    <g>\n      <path\n        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"\n        fill="#fdef63"\n      />\n      <path\n        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"\n        fill="#f3d730"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"\n          fill="#554e55"\n        />\n      </g>\n      <g>\n        <path\n          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"\n          fill="#554e55"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n      <g>\n        <path\n          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const Comic1SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          style="fill: #f2eff2"\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #e1dde1"\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #3ad1e0"\n        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"\n      />\n      <path\n        style="fill: #22c7db"\n        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"\n      />\n      <path\n        style="fill: #fb33a8"\n        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"\n      />\n      <path\n        style="fill: #ee2d9a"\n        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"\n      />\n      <path\n        style="fill: #fcb44d"\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"\n      />\n      <path\n        style="fill: #fb9927"\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"\n      />\n      <g>\n        <path\n          style="fill: #ae6ad8"\n          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"\n        />\n        <path\n          style="fill: #975bbb"\n          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"\n        />\n        <g>\n          <circle\n            style="fill: #f2eff2"\n            cx="317.179"\n            cy="125.438"\n            r="25.456"\n          />\n\n          <circle\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            cx="317.179"\n            cy="125.438"\n            r="25.456"\n          />\n        </g>\n      </g>\n      <path\n        style="fill: #23f1a8"\n        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"\n      />\n      <path\n        style="fill: #27e19d"\n        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"\n      />\n      <path\n        style="fill: #23f1a8"\n        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"\n      />\n      <path\n        style="fill: #27e19d"\n        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #fdef63"\n        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\n      />\n      <path\n        style="fill: #f3d730"\n        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\n      />\n    </g>\n    <g>\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="230.156"\n        y1="339.714"\n        x2="230.156"\n        y2="311.299"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="230.156"\n        y1="364.644"\n        x2="230.156"\n        y2="366.646"\n      />\n    </g>\n    <g>\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="240.429"\n        y1="83.83"\n        x2="258.124"\n        y2="83.83"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="248.276"\n        y1="107.911"\n        x2="265.97"\n        y2="107.911"\n      />\n    </g>\n  </g>\n</svg>\n';

  const Comic2SpecialFlat =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n\n<svg\n  version="1.1"\n  id="svg3390"\n  xml:space="preserve"\n  width="682.66669"\n  height="682.66669"\n  viewBox="0 0 682.66669 682.66669"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <defs id="defs3394">\n    <clipPath\n      clipPathUnits="userSpaceOnUse"\n      id="clipPath3404"\n    >\n      <path\n        d="M 0,512 H 512 V 0 H 0 Z"\n        id="path3402"\n      />\n    </clipPath>\n  </defs>\n  <g\n    id="g3396"\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\n  >\n    <g id="g3398">\n      <g\n        id="g3400"\n        clip-path="url(#clipPath3404)"\n      >\n        <g\n          id="g3406"\n          transform="translate(451.7344)"\n        >\n          <path\n            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3408"\n          />\n        </g>\n        <g\n          id="g3410"\n          transform="translate(472.3376,41.2072)"\n        >\n          <path\n            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3412"\n          />\n        </g>\n        <g\n          id="g3414"\n          transform="translate(235.3964,198.1382)"\n        >\n          <path\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3416"\n          />\n        </g>\n        <g\n          id="g3418"\n          transform="translate(235.3964,198.1382)"\n        >\n          <path\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3420"\n          />\n        </g>\n        <g\n          id="g3422"\n          transform="translate(80.8692,198.1382)"\n        >\n          <path\n            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3424"\n          />\n        </g>\n        <g\n          id="g3426"\n          transform="translate(80.8692,432.6757)"\n        >\n          <path\n            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3428"\n          />\n        </g>\n        <path\n          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n          id="path3430"\n        />\n        <g\n          id="g3432"\n          transform="translate(194.475,156.931)"\n        >\n          <path\n            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3434"\n          />\n        </g>\n        <g\n          id="g3436"\n          transform="translate(213.2632,94.3332)"\n        >\n          <path\n            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3438"\n          />\n        </g>\n        <g\n          id="g3440"\n          transform="translate(298.7368,94.3332)"\n        >\n          <path\n            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3442"\n          />\n        </g>\n        <g\n          id="g3444"\n          transform="translate(202.8374,123.7057)"\n        >\n          <path\n            d="M 0,0 V -10.216"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3446"\n          />\n        </g>\n        <g\n          id="g3448"\n          transform="translate(309.1625,123.7057)"\n        >\n          <path\n            d="M 0,0 V -10.216"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3450"\n          />\n        </g>\n        <g\n          id="g3452"\n          transform="translate(241.984,113.7942)"\n        >\n          <path\n            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3454"\n          />\n        </g>\n        <g\n          id="g3456"\n          transform="translate(150.0629,447.8862)"\n        >\n          <path\n            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3458"\n          />\n        </g>\n        <g\n          id="g3460"\n          transform="translate(80.8692,432.6757)"\n        >\n          <path\n            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3462"\n          />\n        </g>\n        <g\n          id="g3464"\n          transform="translate(431.1308,271.141)"\n        >\n          <path\n            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3466"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const Comic2SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n\n<svg\n  version="1.1"\n  id="svg5007"\n  xml:space="preserve"\n  width="682.66669"\n  height="682.66669"\n  viewBox="0 0 682.66669 682.66669"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <defs id="defs5011">\n    <clipPath\n      clipPathUnits="userSpaceOnUse"\n      id="clipPath5021"\n    >\n      <path\n        d="M 0,512 H 512 V 0 H 0 Z"\n        id="path5019"\n      />\n    </clipPath>\n  </defs>\n  <g\n    id="g5013"\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\n  >\n    <g id="g5015">\n      <g\n        id="g5017"\n        clip-path="url(#clipPath5021)"\n      >\n        <g\n          id="g5023"\n          transform="translate(446,7.5)"\n        >\n          <path\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5025"\n          />\n        </g>\n        <g\n          id="g5027"\n          transform="translate(465.9996,47.5)"\n        >\n          <path\n            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5029"\n          />\n        </g>\n        <g\n          id="g5031"\n          transform="translate(236,199.8333)"\n        >\n          <path\n            d="M 0,0 H 190 V 264.667 H 80 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5033"\n          />\n        </g>\n        <g\n          id="g5035"\n          transform="translate(236,199.8333)"\n        >\n          <path\n            d="M 0,0 H 190 V 264.667 H 80 Z"\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5037"\n          />\n        </g>\n        <g\n          id="g5039"\n          transform="translate(86,199.8333)"\n        >\n          <path\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5041"\n          />\n        </g>\n        <g\n          id="g5043"\n          transform="translate(86,427.4996)"\n        >\n          <path\n            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5045"\n          />\n        </g>\n        <path\n          d="M 426,47.5 H 86 v 112.333 h 340 z"\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n          id="path5047"\n        />\n        <g\n          id="g5049"\n          transform="translate(196.2775,159.8334)"\n        >\n          <path\n            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5051"\n          />\n        </g>\n        <g\n          id="g5053"\n          transform="translate(214.5152,99.0695)"\n        >\n          <path\n            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5055"\n          />\n        </g>\n        <g\n          id="g5057"\n          transform="translate(297.4848,99.0695)"\n        >\n          <path\n            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5059"\n          />\n        </g>\n        <g\n          id="g5061"\n          transform="translate(204.3949,127.5815)"\n        >\n          <path\n            d="M 0,0 V -9.916"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5063"\n          />\n        </g>\n        <g\n          id="g5065"\n          transform="translate(307.605,127.5815)"\n        >\n          <path\n            d="M 0,0 V -9.916"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5067"\n          />\n        </g>\n        <g\n          id="g5069"\n          transform="translate(242.3946,117.9604)"\n        >\n          <path\n            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5071"\n          />\n        </g>\n        <g\n          id="g5073"\n          transform="translate(153.1665,442.2645)"\n        >\n          <path\n            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5075"\n          />\n        </g>\n        <g\n          id="g5077"\n          transform="translate(86,427.4996)"\n        >\n          <path\n            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5079"\n          />\n        </g>\n        <g\n          id="g5081"\n          transform="translate(426,270.6974)"\n        >\n          <path\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5083"\n          />\n        </g>\n        <g\n          id="g5085"\n          transform="translate(446,7.5)"\n        >\n          <path\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5087"\n          />\n        </g>\n        <g\n          id="g5089"\n          transform="translate(426,346.167)"\n        >\n          <path\n            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5091"\n          />\n        </g>\n        <g\n          id="g5093"\n          transform="translate(86,199.8333)"\n        >\n          <path\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5095"\n          />\n        </g>\n        <g\n          id="g5097"\n          transform="translate(154.0172,159.8334)"\n        >\n          <path\n            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5099"\n          />\n        </g>\n        <g\n          id="g5101"\n          transform="translate(86,307.9314)"\n        >\n          <path\n            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5103"\n          />\n        </g>\n        <g\n          id="g5105"\n          transform="translate(426,270.6974)"\n        >\n          <path\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5107"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const Comic3SpecialFlat =
    '<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n    <path\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"\n      fill="#e1dde1"\n    />\n    <path\n      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"\n      fill="#3ad1e0"\n    />\n    <path\n      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n      fill="#20bfd5"\n    />\n    <path\n      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"\n      fill="#23f1a8"\n    />\n    <path\n      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"\n      fill="#23f1a8"\n    />\n    <g>\n      <path\n        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"\n        fill="#ae6ad8"\n      />\n      <path\n        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"\n        fill="#975bbb"\n      />\n    </g>\n    <path\n      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"\n      fill="#27e19d"\n    />\n    <path\n      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"\n      fill="#ae6ad8"\n    />\n    <path\n      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n      fill="#975bbb"\n    />\n    <g>\n      <path\n        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"\n        fill="#3ad1e0"\n      />\n      <path\n        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n        fill="#20bfd5"\n      />\n    </g>\n    <g>\n      <path\n        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"\n        fill="#fb54b6"\n      />\n    </g>\n    <path\n      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"\n      fill="#fb9927"\n    />\n    <path\n      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"\n      fill="#f98824"\n    />\n    <g>\n      <path\n        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n        fill="#fb33a8"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"\n          fill="#fdef63"\n        />\n        <g>\n          <g id="XMLID_00000127012381744132405410000009872483291948348836_">\n            <path\n              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n          <g id="XMLID_00000080918978500845250090000017315552773041050031_">\n            <path\n              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n          <g id="XMLID_00000140711681861242238370000008769002181148908969_">\n            <path\n              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n        </g>\n        <path\n          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"\n          fill="#f3d730"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <g>\n          <circle\n            cx="187.8"\n            cy="385.284"\n            fill="#d8b2ec"\n            r="25.455"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <g id="XMLID_00000028301319025648580530000009457246182494066313_">\n        <path\n          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"\n          fill="#f2eff2"\n        />\n      </g>\n      <g>\n        <path\n          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const Comic3SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          style="fill: #f2eff2"\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #e1dde1"\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"\n      />\n    </g>\n    <path\n      style="fill: #3ad1e0"\n      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"\n    />\n    <path\n      style="fill: #20bfd5"\n      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"\n    />\n    <path\n      style="fill: #26d192"\n      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"\n    />\n\n    <line\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      x1="280.6"\n      y1="141.49"\n      x2="280.6"\n      y2="47.5"\n    />\n    <path\n      style="fill: #23f1a8"\n      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\n    />\n    <g>\n      <path\n        style="fill: #ae6ad8"\n        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"\n      />\n      <path\n        style="fill: #975bbb"\n        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"\n      />\n    </g>\n    <path\n      style="fill: #27e19d"\n      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"\n    />\n    <path\n      style="fill: #ae6ad8"\n      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"\n    />\n    <path\n      style="fill: #975bbb"\n      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"\n    />\n    <g>\n      <path\n        style="fill: #3ad1e0"\n        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"\n      />\n      <path\n        style="fill: #20bfd5"\n        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #fb54b6"\n        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"\n      />\n    </g>\n    <path\n      style="fill: #fb9927"\n      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"\n    />\n    <path\n      style="fill: #f98824"\n      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"\n    />\n    <g>\n      <path\n        style="fill: #fb33a8"\n        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #fdef63"\n          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"\n        />\n        <g>\n          <line\n            id="XMLID_00000127012381744132405410000009872483291948348836_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="279.433"\n            y1="224.908"\n            x2="279.433"\n            y2="224.805"\n          />\n\n          <line\n            id="XMLID_00000080918978500845250090000017315552773041050031_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="256.002"\n            y1="224.908"\n            x2="256.002"\n            y2="224.805"\n          />\n\n          <line\n            id="XMLID_00000140711681861242238370000008769002181148908969_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="232.572"\n            y1="224.908"\n            x2="232.572"\n            y2="224.805"\n          />\n        </g>\n        <path\n          style="fill: #f3d730"\n          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"\n        />\n      </g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"\n      />\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"\n      />\n    </g>\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"\n    />\n    <g>\n      <g>\n        <g>\n          <circle\n            style="fill: #d8b2ec"\n            cx="189.8"\n            cy="381.497"\n            r="24.709"\n          />\n\n          <circle\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            cx="189.8"\n            cy="381.497"\n            r="24.709"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <line\n        id="XMLID_00000028301319025648580530000009457246182494066313_"\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="314.674"\n        y1="108.185"\n        x2="354.689"\n        y2="108.075"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="333.566"\n        y1="80.805"\n        x2="354.689"\n        y2="80.805"\n      />\n    </g>\n  </g>\n</svg>\n';

  const category =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-category"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4h6v6h-6z" />\n  <path d="M14 4h6v6h-6z" />\n  <path d="M4 14h6v6h-6z" />\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n</svg>\n';

  const check =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-check"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M5 12l5 5l10 -10" />\n</svg>\n';

  const chevronRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M9 6l6 6l-6 6" />\n</svg>\n';

  const circleCheck =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M9 12l2 2l4 -4" />\n</svg>\n';

  const circleX =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M10 10l4 4m0 -4l-4 4" />\n</svg>\n';

  const deviceFloppy =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-device-floppy"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M14 4l0 4l-6 0l0 -4" />\n</svg>\n';

  const dotsVertical =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n';

  const EReader1KawaiiFlat =
    '<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  viewBox="0 0 512 512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <path\n        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"\n        fill="#636978"\n      />\n    </g>\n    <g>\n      <path\n        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"\n        fill="#555a66"\n      />\n    </g>\n    <g>\n      <path\n        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"\n        fill="#96e8ff"\n      />\n    </g>\n    <g>\n      <path\n        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"\n        fill="#80dbff"\n      />\n    </g>\n    <g>\n      <path\n        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"\n        fill="#fff"\n      />\n    </g>\n    <g>\n      <path\n        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"\n        fill="#f5fafc"\n      />\n    </g>\n    <g>\n      <path\n        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"\n        fill="#e1f1fa"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\n          fill="#19cffc"\n        />\n      </g>\n      <g>\n        <path\n          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\n          fill="#19cffc"\n        />\n      </g>\n      <g>\n        <g>\n          <path\n            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"\n            fill="#495560"\n          />\n        </g>\n        <g>\n          <path\n            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"\n            fill="#495560"\n          />\n        </g>\n        <g>\n          <path\n            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"\n            fill="#495560"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n</svg>\n';

  const EReader1KawaiiLinealColor =
    '<svg\n  version="1.1"\n  id="Capa_1"\n  xmlns="http://www.w3.org/2000/svg"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n>\n  <g>\n    <path\n      style="fill: #636978"\n      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"\n    />\n    <path\n      style="fill: #555a66"\n      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"\n    />\n    <path\n      style="fill: #96e8ff"\n      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"\n    />\n    <path\n      style="fill: #80dbff"\n      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"\n    />\n    <path\n      style="fill: #ffffff"\n      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"\n    />\n    <path\n      style="fill: #f5fafc"\n      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"\n    />\n    <path\n      style="fill: #e1f1fa"\n      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"\n    />\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="176"\n        y1="281.01"\n        x2="336"\n        y2="281.01"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="176"\n        y1="321.01"\n        x2="336"\n        y2="321.01"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="256"\n        y1="115.517"\n        x2="256"\n        y2="229.706"\n      />\n      <g>\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="193.551"\n          y1="362.07"\n          x2="193.551"\n          y2="374.07"\n        />\n\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="318.449"\n          y1="362.07"\n          x2="318.449"\n          y2="374.07"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"\n        />\n      </g>\n    </g>\n  </g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n</svg>\n';

  const EReader2KawaiiFlat =
    '<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <path\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"\n      fill="#808fa4"\n    />\n    <path\n      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"\n      fill="#64768e"\n    />\n    <path\n      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"\n      fill="#9ca9ba"\n    />\n    <path\n      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"\n      fill="#64768e"\n    />\n    <path\n      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"\n      fill="#64768e"\n    />\n    <path\n      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"\n      fill="#e8ecf9"\n    />\n    <path\n      d="m93.088 209.451h65.909v31.033h-65.909z"\n      fill="#d7ddf5"\n    />\n    <g>\n      <g>\n        <path\n          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <path\n        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"\n        fill="#495560"\n      />\n    </g>\n  </g>\n</svg>\n';

  const EReader2KawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 511.941 511.941"\n  style="enable-background: new 0 0 511.941 511.941"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <path\n        style="fill: #808fa4"\n        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"\n      />\n      <polygon\n        style="fill: #abb6c4"\n        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="fill: #9ca9ba"\n        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"\n      />\n      <polygon\n        style="fill: #c5ced6"\n        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"\n      />\n      <path\n        style="fill: #e8ecf9"\n        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"\n      />\n      <rect\n        x="97.85"\n        y="210.79"\n        style="fill: #d7ddf5"\n        width="63.97"\n        height="30.12"\n      />\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"\n      />\n      <g>\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="133.2"\n          y1="310.695"\n          x2="133.2"\n          y2="322.695"\n        />\n\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="258.098"\n          y1="310.695"\n          x2="258.098"\n          y2="322.695"\n        />\n        <g>\n          <path\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            "\n            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\n          />\n          <path\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            "\n            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const externalLink =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-external-link"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\n  <path d="M11 13l9 -9" />\n  <path d="M15 4h5v5" />\n</svg>\n';

  const eye =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\n</svg>\n';

  const eyeOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\n  <path\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const fileDownload =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-file-download"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M12 17v-6" />\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\n</svg>\n';

  const filePercent =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 17l4 -4" />\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M10 13h.01" />\n  <path d="M14 17h.01" />\n</svg>\n';

  const handClick =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />\n  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />\n  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />\n  <path\n    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"\n  />\n  <path d="M5 3l-1 -1" />\n  <path d="M4 7h-1" />\n  <path d="M14 3l1 -1" />\n  <path d="M15 6h1" />\n</svg>\n';

  const help =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-help"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M12 17l0 .01" />\n  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />\n</svg>\n';

  const infoCircle =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\n  <path d="M12 9h.01" />\n  <path d="M11 12h1v4h1" />\n</svg>\n';

  const keyboard =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-keyboard"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\n  <path d="M6 10l0 .01" />\n  <path d="M10 10l0 .01" />\n  <path d="M14 10l0 .01" />\n  <path d="M18 10l0 .01" />\n  <path d="M6 14l0 .01" />\n  <path d="M18 14l0 .01" />\n  <path d="M10 14l4 .01" />\n</svg>\n';

  const layoutBottombar =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M4 15l16 0" />\n</svg>\n';

  const layoutBottombarInactive =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M4 15h1" />\n  <path d="M19 15h1" />\n  <path d="M9 15h1" />\n  <path d="M14 15h1" />\n</svg>\n';

  const layoutSidebar =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M9 4l0 16" />\n</svg>\n';

  const layoutSidebarInactive =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M9 4v1" />\n  <path d="M9 9v1" />\n  <path d="M9 14v1" />\n  <path d="M9 19v1" />\n</svg>\n';

  const layoutSidebarRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M15 4l0 16" />\n</svg>\n';

  const layoutSidebarRightInactive =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M15 4v1" />\n  <path d="M15 9v1" />\n  <path d="M15 14v1" />\n  <path d="M15 19v1" />\n</svg>\n';

  const listNumbers =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-list-numbers"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M11 6h9" />\n  <path d="M11 12h9" />\n  <path d="M12 18h8" />\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\n  <path d="M6 10v-6l-2 2" />\n</svg>\n';

  const loader2 =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-loader-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3a9 9 0 1 0 9 9" />\n</svg>\n';

  const locationCog =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n';

  const menu2 =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-menu-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6l16 0" />\n  <path d="M4 12l16 0" />\n  <path d="M4 18l16 0" />\n</svg>\n';

  const menuDeep =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6h16" />\n  <path d="M7 12h13" />\n  <path d="M10 18h10" />\n</svg>\n';

  const message =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-message"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 9h8" />\n  <path d="M8 13h6" />\n  <path\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\n  />\n</svg>\n';

  const moon =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-moon"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\n</svg>\n';

  const PageKawaiiFlat =
    '<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <path\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"\n      fill="#e8ecf9"\n    />\n    <path\n      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"\n      fill="#d7ddf5"\n    />\n    <path\n      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"\n      fill="#808fa4"\n    />\n    <path\n      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"\n      fill="#64768e"\n    />\n    <path\n      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"\n      fill="#808fa4"\n    />\n    <path\n      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"\n      fill="#64768e"\n    />\n    <path\n      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"\n      fill="#808fa4"\n    />\n    <path\n      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"\n      fill="#c5ced6"\n    />\n    <g>\n      <g>\n        <ellipse\n          cx="172.744"\n          cy="147.233"\n          fill="#fff"\n          rx="30.72"\n          ry="24.464"\n        />\n        <ellipse\n          cx="339.256"\n          cy="147.233"\n          fill="#fff"\n          rx="30.72"\n          ry="24.464"\n        />\n        <path\n          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\n          fill="#495560"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const PageKawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 511.94 511.94"\n  style="enable-background: new 0 0 511.94 511.94"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <path\n        style="fill: #e8ecf9"\n        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"\n      />\n      <path\n        style="fill: #d7ddf5"\n        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"\n      />\n      <polygon\n        style="fill: #c5ced6"\n        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"\n      />\n      <polygon\n        style="fill: #abb6c4"\n        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\n      />\n      <g>\n        <g>\n          <ellipse\n            style="fill: #ffffff"\n            cx="175.162"\n            cy="150.402"\n            rx="29.816"\n            ry="23.744"\n          />\n          <ellipse\n            style="fill: #ffffff"\n            cx="336.778"\n            cy="150.402"\n            rx="29.816"\n            ry="23.744"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="264.641"\n        y1="367.54"\n        x2="327.14"\n        y2="324.275"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="335.24"\n        y1="420"\n        x2="317.58"\n        y2="458.04"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="365.42"\n        y1="354.99"\n        x2="349.98"\n        y2="388.25"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"\n      />\n      <g>\n        <g>\n          <g>\n            <path\n              style="\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              "\n              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\n            />\n            <path\n              style="\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              "\n              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\n            />\n          </g>\n        </g>\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n';

  const palette =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-palette"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\n  />\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n';

  const pencil =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-pencil"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n</svg>\n';

  const pencilCog =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n';

  const photo =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\n</svg>\n';

  const photoOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\n  />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\n  <path\n    d="M3 3l18 18"\n    color="orange"\n  />\n</svg>\n';

  const pin =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />\n  <path d="M9 15l-4.5 4.5" />\n  <path d="M14.5 4l5.5 5.5" />\n</svg>\n';

  const playerPause =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-pause"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n</svg>\n';

  const playerPlay =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-play"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M7 4v16l13 -8z" />\n</svg>\n';

  const refresh =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-refresh"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\n</svg>\n';

  const settings =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-settings"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\n  />\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\n</svg>\n';

  const settingsOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\n  />\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const spacingVertical =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-spacing-vertical"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\n  <path d="M16 12h-8" />\n</svg>\n';

  const sun =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-sun"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\n  <path\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\n  />\n</svg>\n';

  const trash =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-trash"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 7l16 0" />\n  <path d="M10 11l0 6" />\n  <path d="M14 11l0 6" />\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\n</svg>\n';

  const worldCog =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\n  <path d="M3.6 9h16.8" />\n  <path d="M3.6 15h8.9" />\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n';

  const x =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-x"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 6l-12 12" />\n  <path d="M6 6l12 12" />\n</svg>\n';

  const zoom =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const zoomCancel =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-cancel"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M8 8l4 4" />\n  <path d="M12 8l-4 4" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const zoomIn =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M10 7l0 6" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const zoomInArea =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 13v4" />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n';

  const zoomOut =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const zoomOutArea =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n';

  const zoomPan =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-pan"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n  <path d="M17 17l-2.5 -2.5" />\n  <path d="M10 5l2 -2l2 2" />\n  <path d="M19 10l2 2l-2 2" />\n  <path d="M5 10l-2 2l2 2" />\n  <path d="M10 19l2 2l2 -2" />\n</svg>\n';

  const rawIcons = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconAlertCircle: alertCircle,
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
        IconBookmarks: bookmarks,
        IconBoxAlignTop: boxAlignTop,
        IconCategory: category,
        IconCheck: check,
        IconChevronRight: chevronRight,
        IconCircleCheck: circleCheck,
        IconCircleX: circleX,
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
        IconHelp: help,
        IconInfoCircle: infoCircle,
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
        IconPencilCog: pencilCog,
        IconPhoto: photo,
        IconPhotoOff: photoOff,
        IconPin: pin,
        IconPlayerPause: playerPause,
        IconPlayerPlay: playerPlay,
        IconRefresh: refresh,
        IconSettings: settings,
        IconSettingsOff: settingsOff,
        IconSpacingVertical: spacingVertical,
        IconSun: sun,
        IconTrash: trash,
        IconWorldCog: worldCog,
        IconX: x,
        IconZoom: zoom,
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
  const colorRules = parseCss(iconsCSS);
  const rulesByClassName = /* @__PURE__ */ new Map();
  for (const rule of colorRules) {
    for (const selector of rule.selectors) {
      const match = selector.match(/^\s*\.([^ ]+)\s*(.*)$/);
      if (!match) {
        continue;
      }
      const [, className, rest] = match;
      let subSelector = rest.trim();
      if (subSelector.startsWith('>')) {
        subSelector = subSelector.substring(1).trim();
      }
      if (subSelector === '') {
        subSelector = '*';
      }
      if (!rulesByClassName.has(className)) {
        rulesByClassName.set(className, []);
      }
      rulesByClassName.get(className)?.push({ subSelector, color: rule.color });
    }
  }
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  function applyColorsToSvg(svgString, className) {
    const rulesForIcon = rulesByClassName.get(className);
    if (!rulesForIcon?.length) {
      return svgString;
    }
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.documentElement;
    if (svg.querySelector('parsererror')) {
      console.error(`Error parsing SVG for ${className}`);
      return svgString;
    }
    for (const { subSelector, color } of rulesForIcon) {
      try {
        const elements = svg.querySelectorAll(subSelector);
        elements.forEach(el => {
          el.setAttribute('stroke', color);
        });
      } catch (e) {
        console.error(`Invalid selector "${subSelector}" for ${className}`, e);
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
      return [iconKey, styledSvg];
    }),
  );
  const {
    IconArrowAutofitDown: IconArrowAutofitDown$1,
    IconArrowAutofitHeight: IconArrowAutofitHeight$1,
    IconArrowAutofitLeft: IconArrowAutofitLeft$1,
    IconArrowAutofitRight: IconArrowAutofitRight$1,
    IconArrowAutofitWidth: IconArrowAutofitWidth$1,
    IconArrowBigLeft: IconArrowBigLeft$1,
    IconArrowBigRight: IconArrowBigRight$1,
    IconArrowsMove: IconArrowsMove$1,
    IconArrowsMoveVertical: IconArrowsMoveVertical$1,
    IconArrowsVertical: IconArrowsVertical$1,
    IconBook: IconBook$1,
    IconBookReturn: IconBookReturn$1,
    IconBookUpload: IconBookUpload$1,
    IconBookmark: IconBookmark$1,
    IconBookmarkOff: IconBookmarkOff$1,
    IconBookmarks: IconBookmarks$1,
    IconBoxAlignTop: IconBoxAlignTop$1,
    IconCategory: IconCategory$1,
    IconCheck: IconCheck$1,
    IconChevronRight: IconChevronRight$1,
    IconAlertCircle: IconAlertCircle$1,
    IconCircleCheck: IconCircleCheck$1,
    IconCircleX: IconCircleX$1,
    IconHelp: IconHelp$1,
    IconInfoCircle: IconInfoCircle$1,
    IconComic1: IconComic1$1,
    IconComic1Flat: IconComic1Flat$1,
    IconComic2: IconComic2$1,
    IconComic2Flat: IconComic2Flat$1,
    IconComic3: IconComic3$1,
    IconComic3Flat: IconComic3Flat$1,
    IconDeviceFloppy: IconDeviceFloppy$1,
    IconDotsVertical: IconDotsVertical$1,
    IconEReader1: IconEReader1$1,
    IconEReader1Flat: IconEReader1Flat$1,
    IconEReader2: IconEReader2$1,
    IconEReader2Flat: IconEReader2Flat$1,
    IconExternalLink: IconExternalLink$1,
    IconEye: IconEye$1,
    IconEyeOff: IconEyeOff$1,
    IconFileDownload: IconFileDownload$1,
    IconFilePercent: IconFilePercent$1,
    IconHandClick: IconHandClick$1,
    IconKeyboard: IconKeyboard$1,
    IconLayoutBottombar: IconLayoutBottombar$1,
    IconLayoutBottombarInactive: IconLayoutBottombarInactive$1,
    IconLayoutSidebar: IconLayoutSidebar$1,
    IconLayoutSidebarInactive: IconLayoutSidebarInactive$1,
    IconLayoutSidebarRight: IconLayoutSidebarRight$1,
    IconLayoutSidebarRightInactive: IconLayoutSidebarRightInactive$1,
    IconListNumbers: IconListNumbers$1,
    IconLoader2: IconLoader2$1,
    IconLocationCog: IconLocationCog$1,
    IconMenu2: IconMenu2$1,
    IconMenuDeep: IconMenuDeep$1,
    IconMessage: IconMessage$1,
    IconMoon: IconMoon$1,
    IconPage: IconPage$1,
    IconPageFlat: IconPageFlat$1,
    IconPalette: IconPalette$1,
    IconPencil: IconPencil$1,
    IconPencilCog: IconPencilCog$1,
    IconPhoto: IconPhoto$1,
    IconPhotoOff: IconPhotoOff$1,
    IconPin: IconPin$1,
    IconPlayerPause: IconPlayerPause$1,
    IconPlayerPlay: IconPlayerPlay$1,
    IconRefresh: IconRefresh$1,
    IconSettings: IconSettings$1,
    IconSettingsOff: IconSettingsOff$1,
    IconSpacingVertical: IconSpacingVertical$1,
    IconSun: IconSun$1,
    IconTrash: IconTrash$1,
    IconWorldCog: IconWorldCog$1,
    IconX: IconX$1,
    IconZoom: IconZoom$1,
    IconZoomCancel: IconZoomCancel$1,
    IconZoomIn: IconZoomIn$1,
    IconZoomInArea: IconZoomInArea$1,
    IconZoomOut: IconZoomOut$1,
    IconZoomOutArea: IconZoomOutArea$1,
    IconZoomPan: IconZoomPan$1,
  } = styledIcons;

  const styledIcons$1 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconAlertCircle: IconAlertCircle$1,
        IconArrowAutofitDown: IconArrowAutofitDown$1,
        IconArrowAutofitHeight: IconArrowAutofitHeight$1,
        IconArrowAutofitLeft: IconArrowAutofitLeft$1,
        IconArrowAutofitRight: IconArrowAutofitRight$1,
        IconArrowAutofitWidth: IconArrowAutofitWidth$1,
        IconArrowBigLeft: IconArrowBigLeft$1,
        IconArrowBigRight: IconArrowBigRight$1,
        IconArrowsMove: IconArrowsMove$1,
        IconArrowsMoveVertical: IconArrowsMoveVertical$1,
        IconArrowsVertical: IconArrowsVertical$1,
        IconBook: IconBook$1,
        IconBookReturn: IconBookReturn$1,
        IconBookUpload: IconBookUpload$1,
        IconBookmark: IconBookmark$1,
        IconBookmarkOff: IconBookmarkOff$1,
        IconBookmarks: IconBookmarks$1,
        IconBoxAlignTop: IconBoxAlignTop$1,
        IconCategory: IconCategory$1,
        IconCheck: IconCheck$1,
        IconChevronRight: IconChevronRight$1,
        IconCircleCheck: IconCircleCheck$1,
        IconCircleX: IconCircleX$1,
        IconComic1: IconComic1$1,
        IconComic1Flat: IconComic1Flat$1,
        IconComic2: IconComic2$1,
        IconComic2Flat: IconComic2Flat$1,
        IconComic3: IconComic3$1,
        IconComic3Flat: IconComic3Flat$1,
        IconDeviceFloppy: IconDeviceFloppy$1,
        IconDotsVertical: IconDotsVertical$1,
        IconEReader1: IconEReader1$1,
        IconEReader1Flat: IconEReader1Flat$1,
        IconEReader2: IconEReader2$1,
        IconEReader2Flat: IconEReader2Flat$1,
        IconExternalLink: IconExternalLink$1,
        IconEye: IconEye$1,
        IconEyeOff: IconEyeOff$1,
        IconFileDownload: IconFileDownload$1,
        IconFilePercent: IconFilePercent$1,
        IconHandClick: IconHandClick$1,
        IconHelp: IconHelp$1,
        IconInfoCircle: IconInfoCircle$1,
        IconKeyboard: IconKeyboard$1,
        IconLayoutBottombar: IconLayoutBottombar$1,
        IconLayoutBottombarInactive: IconLayoutBottombarInactive$1,
        IconLayoutSidebar: IconLayoutSidebar$1,
        IconLayoutSidebarInactive: IconLayoutSidebarInactive$1,
        IconLayoutSidebarRight: IconLayoutSidebarRight$1,
        IconLayoutSidebarRightInactive: IconLayoutSidebarRightInactive$1,
        IconListNumbers: IconListNumbers$1,
        IconLoader2: IconLoader2$1,
        IconLocationCog: IconLocationCog$1,
        IconMenu2: IconMenu2$1,
        IconMenuDeep: IconMenuDeep$1,
        IconMessage: IconMessage$1,
        IconMoon: IconMoon$1,
        IconPage: IconPage$1,
        IconPageFlat: IconPageFlat$1,
        IconPalette: IconPalette$1,
        IconPencil: IconPencil$1,
        IconPencilCog: IconPencilCog$1,
        IconPhoto: IconPhoto$1,
        IconPhotoOff: IconPhotoOff$1,
        IconPin: IconPin$1,
        IconPlayerPause: IconPlayerPause$1,
        IconPlayerPlay: IconPlayerPlay$1,
        IconRefresh: IconRefresh$1,
        IconSettings: IconSettings$1,
        IconSettingsOff: IconSettingsOff$1,
        IconSpacingVertical: IconSpacingVertical$1,
        IconSun: IconSun$1,
        IconTrash: IconTrash$1,
        IconWorldCog: IconWorldCog$1,
        IconX: IconX$1,
        IconZoom: IconZoom$1,
        IconZoomCancel: IconZoomCancel$1,
        IconZoomIn: IconZoomIn$1,
        IconZoomInArea: IconZoomInArea$1,
        IconZoomOut: IconZoomOut$1,
        IconZoomOutArea: IconZoomOutArea$1,
        IconZoomPan: IconZoomPan$1,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );

  var __defProp$h = Object.defineProperty;
  var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
  var __decorateClass$k = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$h(target, key, result);
    return result;
  };
  let Icon = class extends i$1 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.label = '';
      this.size = '';
    }
    render() {
      const key = toPascalCase(this.name);
      const styledSvg = styledIcons$1[key];
      const style = this.size ? `--mov-icon-size: ${this.size};` : '';
      return x$1`<span
      role=${this.label ? 'img' : E}
      aria-label=${this.label || E}
      aria-hidden=${this.label ? E : 'true'}
      style=${style}
      >${o$4(styledSvg)}</span
    >`;
    }
  };
  Icon.styles = i$3`
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
  `;
  __decorateClass$k([n$1({ type: String })], Icon.prototype, 'name', 2);
  __decorateClass$k([n$1({ type: String })], Icon.prototype, 'label', 2);
  __decorateClass$k([n$1({ type: String })], Icon.prototype, 'size', 2);
  Icon = __decorateClass$k([t$1('mov-icon')], Icon);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e = e$7(
    class extends i$4 {
      constructor(t) {
        if ((super(t), t.type !== t$3.ATTRIBUTE || 'class' !== t.name || t.strings?.length > 2))
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

  const styles$7 =
    ':host {\n  display: inline-block;\n  --mov-font-size-scale: 1;\n  --mov-font-size-m: calc(1rem * var(--mov-font-size-scale));\n  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\n  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\n  --mov-border-width-s: 0.0625rem;\n  --mov-border-radius-m: 0.375rem;\n  --mov-border-radius-pill: 9999px;\n  --mov-transition-fast: 75ms;\n  --mov-font-weight-action: 500;\n  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\n  --mov-focus-ring-offset: 0.0625rem;\n  --mov-line-height-condensed: 1.2;\n  --mov-form-control-padding-block: 0.75em;\n  --mov-form-control-padding-inline: 1em;\n  --mov-form-control-height: round(\n    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\n    1px\n  );\n}\n\n:host([size="small"]) {\n  font-size: var(--mov-font-size-s);\n}\n:host([size="medium"]) {\n  font-size: var(--mov-font-size-m);\n}\n:host([size="large"]) {\n  font-size: var(--mov-font-size-l);\n}\n\n.button {\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  user-select: none;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--mov-transition-fast);\n  cursor: pointer;\n  padding: 0 var(--mov-form-control-padding-inline);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--mov-font-weight-action);\n  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\n  height: var(--mov-form-control-height);\n  border-radius: var(--mov-border-radius-m);\n  border-style: solid;\n  border-width: var(--mov-border-width-s);\n  background-color: var(--mov-color-fill-loud);\n  color: var(--mov-color-on-loud);\n  border-color: transparent;\n}\n\n/* Appearance modifiers */\n:host([appearance~="plain"]) {\n  .button {\n    color: var(--mov-color-on-quiet);\n    background-color: transparent;\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-quiet);\n      background-color: var(--mov-color-fill-quiet);\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-quiet);\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\n  }\n}\n\n:host([appearance~="outlined"]) {\n  .button {\n    color: var(--mov-color-on-quiet);\n    background-color: transparent;\n    border-color: var(--mov-color-border-loud);\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-quiet);\n      background-color: var(--mov-color-fill-quiet);\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-quiet);\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\n  }\n}\n\n:host([appearance~="filled"]) {\n  .button {\n    color: var(--mov-color-on-normal);\n    background-color: var(--mov-color-fill-normal);\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-normal);\n      background-color: color-mix(\n        in oklab,\n        var(--mov-color-fill-normal),\n        var(--mov-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-normal);\n    background-color: color-mix(\n      in oklab,\n      var(--mov-color-fill-normal),\n      var(--mov-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~="filled"][appearance~="outlined"]) .button {\n  border-color: var(--mov-color-border-normal);\n}\n\n:host([appearance~="accent"]) {\n  .button {\n    color: var(--mov-color-on-loud);\n    background-color: var(--mov-color-fill-loud);\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\n  }\n}\n/* Focus states */\n.button:focus {\n  outline: none;\n}\n.button:focus-visible {\n  outline: var(--mov-focus-ring);\n  outline-offset: var(--mov-focus-ring-offset);\n}\n\n/* Disabled state */\n.button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button.disabled * {\n  pointer-events: none;\n}\n\n/* Icon buttons */\n.button.is-icon-button {\n  outline-offset: 2px;\n  width: var(--mov-form-control-height);\n  aspect-ratio: 1;\n}\n\n/* Pill modifier */\n:host([pill]) .button {\n  border-radius: var(--mov-border-radius-pill);\n}\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.label {\n  display: inline-block;\n}\n.is-icon-button .label {\n  display: flex;\n}\n\nmov-icon[part~="caret"] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n}\nmov-icon[part~="caret"]::part(svg) {\n  width: 0.875em;\n  height: 0.875em;\n}\n\n.loading {\n  position: relative;\n  cursor: wait;\n}\n.loading .start,\n.loading .label,\n.loading .end,\n.loading .caret {\n  visibility: hidden;\n}\n\n.spinner {\n  --indicator-color: currentColor;\n  --track-color: color-mix(in oklab, currentColor, transparent 90%);\n  position: absolute;\n  font-size: 1em;\n  height: 1em;\n  width: 1em;\n  top: calc(50% - 0.5em);\n  left: calc(50% - 0.5em);\n  border-radius: 50%;\n  border: 2px solid var(--track-color);\n  border-top-color: var(--indicator-color);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nslot[name="start"]::slotted(*) {\n  margin-inline-end: 0.75em;\n}\nslot[name="end"]::slotted(*),\n.button:not(.visually-hidden-label) [part~="caret"] {\n  margin-inline-start: 0.75em;\n}\n';

  var __defProp$g = Object.defineProperty;
  var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
  var __decorateClass$j = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$j(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$g(target, key, result);
    return result;
  };
  let Button = class extends i$1 {
    constructor() {
      super(...arguments);
      this.isIconButton = false;
      this.hasLabel = false;
      this.hasStart = false;
      this.hasEnd = false;
      this.title = '';
      this.appearance = 'accent';
      this.size = 'medium';
      this.withCaret = false;
      this.disabled = false;
      this.loading = false;
      this.pill = false;
      this.type = 'button';
      this.form = null;
    }
    handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (this.type === 'submit' && !this.href) {
        const form = this.closest('form');
        if (form) {
          event.preventDefault();
          const tempButton = document.createElement('button');
          tempButton.type = this.type;
          tempButton.style.display = 'none';
          if (this.name) tempButton.name = this.name;
          if (this.value) tempButton.value = this.value;
          form.appendChild(tempButton);
          tempButton.click();
          form.removeChild(tempButton);
        }
      }
    }
    click() {
      this.button?.click();
    }
    focus(options) {
      this.button?.focus(options);
    }
    blur() {
      this.button?.blur();
    }
    render() {
      const isLink = !!this.href;
      const classes = {
        button: true,
        'with-caret': this.withCaret,
        disabled: this.disabled,
        loading: this.loading,
        pill: this.pill,
        'has-label': this.hasLabel,
        'has-start': this.hasStart,
        'has-end': this.hasEnd,
        'is-icon-button': this.isIconButton,
      };
      const buttonContent = x$1`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${
        this.withCaret
          ? x$1`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`
          : ''
      }
      ${
        this.loading
          ? x$1`<span
            part="spinner"
            class="spinner"
          ></span>`
          : ''
      }
    `;
      if (isLink) {
        return x$1`
        <a
          part="base"
          class=${e(classes)}
          href=${o$3(this.href)}
          target=${o$3(this.target)}
          title=${o$3(this.title)}
          role="button"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          download=${o$3(this.download)}
          @click=${this.handleClick}
        >
          ${buttonContent}
        </a>
      `;
      } else {
        return x$1`
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
          @click=${this.handleClick}
        >
          ${buttonContent}
        </button>
      `;
      }
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
  };
  Button.styles = [r$4(styles$7)];
  __decorateClass$j([e$2('.button')], Button.prototype, 'button', 2);
  __decorateClass$j([e$2('slot:not([name])')], Button.prototype, 'labelSlot', 2);
  __decorateClass$j([r$1()], Button.prototype, 'isIconButton', 2);
  __decorateClass$j([r$1()], Button.prototype, 'hasLabel', 2);
  __decorateClass$j([r$1()], Button.prototype, 'hasStart', 2);
  __decorateClass$j([r$1()], Button.prototype, 'hasEnd', 2);
  __decorateClass$j([n$1()], Button.prototype, 'title', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'appearance', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'size', 2);
  __decorateClass$j(
    [n$1({ attribute: 'with-caret', type: Boolean, reflect: true })],
    Button.prototype,
    'withCaret',
    2,
  );
  __decorateClass$j([n$1({ type: Boolean, reflect: true })], Button.prototype, 'disabled', 2);
  __decorateClass$j([n$1({ type: Boolean, reflect: true })], Button.prototype, 'loading', 2);
  __decorateClass$j([n$1({ type: Boolean, reflect: true })], Button.prototype, 'pill', 2);
  __decorateClass$j([n$1()], Button.prototype, 'type', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'name', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'value', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'href', 2);
  __decorateClass$j([n$1()], Button.prototype, 'target', 2);
  __decorateClass$j([n$1()], Button.prototype, 'rel', 2);
  __decorateClass$j([n$1()], Button.prototype, 'download', 2);
  __decorateClass$j([n$1({ reflect: true })], Button.prototype, 'form', 2);
  Button = __decorateClass$j([t$1('mov-button')], Button);

  var __defProp$f = Object.defineProperty;
  var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
  var __decorateClass$i = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$f(target, key, result);
    return result;
  };
  let ToggleButton = class extends i$1 {
    constructor() {
      super(...arguments);
      this.mode = 'menu';
      this.active = false;
      this.label = '';
      this.icon = '';
      this.activeIcon = '';
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
        class="inactive-icon"
        name=${icons.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${icons.active}
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
  ToggleButton.styles = i$3`
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
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
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
  __decorateClass$i([n$1({ type: String })], ToggleButton.prototype, 'mode', 2);
  __decorateClass$i([n$1({ type: Boolean, reflect: true })], ToggleButton.prototype, 'active', 2);
  __decorateClass$i([n$1({ type: String })], ToggleButton.prototype, 'label', 2);
  __decorateClass$i([n$1({ type: String })], ToggleButton.prototype, 'activeLabel', 2);
  __decorateClass$i([n$1({ type: String })], ToggleButton.prototype, 'icon', 2);
  __decorateClass$i([n$1({ type: String })], ToggleButton.prototype, 'activeIcon', 2);
  __decorateClass$i(
    [n$1({ type: String, reflect: true })],
    ToggleButton.prototype,
    'appearance',
    2,
  );
  __decorateClass$i([n$1({ type: String, reflect: true })], ToggleButton.prototype, 'size', 2);
  __decorateClass$i([n$1({ type: Boolean })], ToggleButton.prototype, 'disabled', 2);
  __decorateClass$i([n$1({ type: Boolean, reflect: true })], ToggleButton.prototype, 'loading', 2);
  ToggleButton = __decorateClass$i([t$1('toggle-button')], ToggleButton);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const n = 'important',
    i = ' !' + n,
    o$2 = e$7(
      class extends i$4 {
        constructor(t) {
          if ((super(t), t.type !== t$3.ATTRIBUTE || 'style' !== t.name || t.strings?.length > 2))
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

  const styledIconsSVG = Object.fromEntries(
    Object.entries(styledIcons$1).map(([iconKey, icon]) => [iconKey, o$4(icon)]),
  );
  const {
    IconArrowAutofitDown,
    IconArrowAutofitHeight,
    IconArrowAutofitLeft,
    IconArrowAutofitRight,
    IconArrowAutofitWidth,
    IconArrowBigLeft,
    IconArrowBigRight,
    IconArrowsMove,
    IconArrowsMoveVertical,
    IconArrowsVertical,
    IconBook,
    IconBookReturn,
    IconBookUpload,
    IconBookmark,
    IconBookmarkOff,
    IconBookmarks,
    IconBoxAlignTop,
    IconCategory,
    IconCheck,
    IconChevronRight,
    IconAlertCircle,
    IconCircleCheck,
    IconCircleX,
    IconHelp,
    IconInfoCircle,
    IconComic1,
    IconComic1Flat,
    IconComic2,
    IconComic2Flat,
    IconComic3,
    IconComic3Flat,
    IconDeviceFloppy,
    IconDotsVertical,
    IconEReader1,
    IconEReader1Flat,
    IconEReader2,
    IconEReader2Flat,
    IconExternalLink,
    IconEye,
    IconEyeOff,
    IconFileDownload,
    IconFilePercent,
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
    IconPage,
    IconPageFlat,
    IconPalette,
    IconPencil,
    IconPencilCog,
    IconPhoto,
    IconPhotoOff,
    IconPin,
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
    IconZoom,
    IconZoomCancel,
    IconZoomIn,
    IconZoomInArea,
    IconZoomOut,
    IconZoomOutArea,
    IconZoomPan,
  } = styledIconsSVG;

  var __defProp$e = Object.defineProperty;
  var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
  var __decorateClass$h = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$e(target, key, result);
    return result;
  };
  let ColorSwatch = class extends i$1 {
    constructor() {
      super(...arguments);
      this.color = '#000000';
      this.size = 26;
      this.radius = '50%';
      this.contrastColor = '#FFFFFF';
      this.checked = false;
    }
    /**
     * Recalculates the contrasting color for the checkmark whenever the swatch color changes.
     * @internal
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('color')) {
        this.contrastColor = getTextColor(this.color);
      }
      if (changedProperties.has('selected')) {
        this.checked = this.color.toLowerCase() === this.selected?.toLowerCase();
      }
    }
    /**
     * Handles the click event on the swatch.
     * Dispatches 'input' and 'change' events with the swatch's color value.
     * @private
     */
    handleClick() {
      this.dispatchEvent(
        new CustomEvent('input', { detail: { value: this.color }, bubbles: true, composed: true }),
      );
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value: this.color }, bubbles: true, composed: true }),
      );
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
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
    }
  };
  ColorSwatch.styles = i$3`
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
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `;
  __decorateClass$h([n$1({ type: String })], ColorSwatch.prototype, 'color', 2);
  __decorateClass$h([n$1({ type: String })], ColorSwatch.prototype, 'selected', 2);
  __decorateClass$h([n$1({ type: Number })], ColorSwatch.prototype, 'size', 2);
  __decorateClass$h([n$1({ type: String })], ColorSwatch.prototype, 'radius', 2);
  __decorateClass$h([n$1({ state: true })], ColorSwatch.prototype, 'contrastColor', 2);
  __decorateClass$h([n$1({ type: Boolean, reflect: true })], ColorSwatch.prototype, 'checked', 2);
  ColorSwatch = __decorateClass$h([t$1('color-swatch')], ColorSwatch);

  function gradientBySteps(baseColor) {
    const baseOklch = baseColor.to('oklch');
    const hue = baseOklch.get('oklch.h');
    const chroma = baseOklch.get('oklch.c');
    const originalLightness = baseOklch.get('oklch.l');
    const lightnessSteps = [0.95, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
    const palette = lightnessSteps.map(l =>
      new Color('oklch', [l, chroma, hue]).toString({ format: 'hex' }),
    );
    let closestIndex = -1;
    let minDiff = Infinity;
    for (let i = 0; i < lightnessSteps.length; i++) {
      const diff = Math.abs(lightnessSteps[i] - originalLightness);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    if (closestIndex !== -1) {
      palette[closestIndex] = baseColor.toString({ format: 'hex' });
    }
    return palette.map(c => c.toUpperCase());
  }
  function gradientBySaturation(baseColor) {
    const baseHsl = baseColor.to('hsl');
    const lightnessScale = [0.97, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
    const colors = [];
    for (const l of lightnessScale) {
      const newColor = baseHsl.clone();
      newColor.set('hsl.l', l * 100);
      if (l > 0.8) {
        newColor.set('hsl.s', s => s * 0.4);
      } else if (l > 0.6) {
        newColor.set('hsl.s', s => s * 0.8);
      } else if (l < 0.3) {
        newColor.set('hsl.s', s => Math.min(100, s * 1.1));
      }
      colors.push(newColor.toString({ format: 'hex' }).toUpperCase());
    }
    return colors;
  }
  function gradientByLightness(baseColor) {
    const colors = [];
    const lightnessSteps = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
    const baseHsl = baseColor.to('hsl');
    for (const lightness of lightnessSteps) {
      colors.push(
        baseHsl.clone().set('hsl.l', lightness).toString({ format: 'hex' }).toUpperCase(),
      );
    }
    return colors;
  }
  function gradientByChakra(baseColor) {
    const palette = new Array(11).fill('');
    const baseHsl = baseColor.to('hsl');
    const config = {
      lightest: { lightness: 95, rotate: -10, saturate: -30 },
      darkest: { lightness: 10, rotate: 10, saturate: 10 },
    };
    const lightStepsCount = 5;
    const darkStepsCount = 5;
    const lightnessStep = (config.lightest.lightness - 50) / lightStepsCount;
    const darknessStep = (50 - config.darkest.lightness) / darkStepsCount;
    const lightRotateStep = config.lightest.rotate / lightStepsCount;
    const darkRotateStep = config.darkest.rotate / darkStepsCount;
    const lightSaturateStep = config.lightest.saturate / lightStepsCount;
    const darkSaturateStep = config.darkest.saturate / darkStepsCount;
    for (let i = 1; i <= lightStepsCount; i++) {
      const step = lightStepsCount - i;
      const color = baseHsl
        .clone()
        .set('hsl.l', l => l + lightnessStep * (i - 0.5))
        .set('hsl.h', h => h + lightRotateStep * i)
        .set('hsl.s', s => s + lightSaturateStep * i);
      palette[step] = color.toString({ format: 'hex' });
    }
    palette[5] = baseHsl.clone().toString({ format: 'hex' });
    for (let i = 1; i <= darkStepsCount; i++) {
      const step = lightStepsCount + i;
      const color = baseHsl
        .clone()
        .set('hsl.l', l => l - darknessStep * (i - 0.5))
        .set('hsl.h', h => h + darkRotateStep * i)
        .set('hsl.s', s => s + darkSaturateStep * i);
      palette[step] = color.toString({ format: 'hex' });
    }
    return palette;
  }
  function gradientByMantine(baseColor) {
    const baseHsl = baseColor.to('hsl');
    const [h, s, l] = baseHsl.coords;
    const palette = new Array(11);
    palette[5] = baseColor.toString({ format: 'hex' });
    for (let i = 0; i < 5; i++) {
      const factor = (5 - i) / 6;
      const newL = l + (100 - l) * factor;
      const newS = s - s * factor;
      palette[i] = new Color({ space: 'hsl', coords: [h, newS, newL] }).toString({ format: 'hex' });
    }
    for (let i = 0; i < 5; i++) {
      const factor = (i + 1) / 6;
      const newL = l - l * factor;
      const newS = s + (100 - s) * factor;
      palette[i + 6] = new Color({ space: 'hsl', coords: [h, newS, newL] }).toString({
        format: 'hex',
      });
    }
    return palette;
  }
  function generateColorGradient(baseHexColor, mode = 'steps') {
    const baseColor = Color.parse(baseHexColor) ? new Color(baseHexColor) : new Color(sample.navy);
    switch (mode) {
      case 'saturation':
        return gradientBySaturation(baseColor);
      case 'lightness':
        return gradientByLightness(baseColor);
      case 'mantine':
        return gradientByMantine(baseColor);
      case 'chakra':
        return gradientByChakra(baseColor);
      default:
        return gradientBySteps(baseColor);
    }
  }

  var __defProp$d = Object.defineProperty;
  var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
  var __decorateClass$g = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$d(target, key, result);
    return result;
  };
  let ColorPalette = class extends i$1 {
    constructor() {
      super(...arguments);
      this.baseColor = '#228be6';
      this.mode = 'steps';
      this.orientation = 'horizontal';
      this.value = '';
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
    handleSwatchClick(color) {
      this.value = color;
      this.dispatchEvent(
        new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
    }
    render() {
      return x$1`
      ${this.gradient.map(color => {
        const isChecked = this.selected && color.toLowerCase() === this.selected.toLowerCase();
        const textColor = getTextColor(color);
        return x$1`
          <div
            class="swatch"
            ?checked=${isChecked}
            title=${color}
            @click=${() => this.handleSwatchClick(color)}
          >
            <div
              class="swatch-inner"
              style="--color: ${color}; --text-color: ${textColor}"
            >
              <span class="checkmark">${IconCheck}</span>
            </div>
          </div>
        `;
      })}
    `;
    }
  };
  ColorPalette.styles = i$3`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `;
  __decorateClass$g([n$1({ type: String })], ColorPalette.prototype, 'baseColor', 2);
  __decorateClass$g([n$1({ type: String })], ColorPalette.prototype, 'mode', 2);
  __decorateClass$g(
    [n$1({ type: String, reflect: true })],
    ColorPalette.prototype,
    'orientation',
    2,
  );
  __decorateClass$g([n$1({ type: String })], ColorPalette.prototype, 'selected', 2);
  __decorateClass$g([n$1({ type: String, reflect: true })], ColorPalette.prototype, 'value', 2);
  __decorateClass$g([r$1()], ColorPalette.prototype, 'gradient', 2);
  ColorPalette = __decorateClass$g([t$1('color-palette')], ColorPalette);

  var __defProp$c = Object.defineProperty;
  var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
  var __decorateClass$f = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$c(target, key, result);
    return result;
  };
  let ColorPanel = class extends i$1 {
    constructor() {
      super(...arguments);
      this.value = '';
    }
    /**
     * Handles the click event on a color swatch.
     * Updates the component's `value` property to the selected color's hex code.
     * Dispatches 'input' and 'change' custom events to notify parent components
     * about the color selection.
     * @param {MouseEvent} event The click event object.
     * @private
     */
    handleColorClick(event) {
      this.value = event.currentTarget.title;
      this.dispatchEvent(
        new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
    }
    /**
     * Renders the grid of color swatches grouped by color family.
     * @internal
     */
    render() {
      const swatchKeys = Object.keys(colors).filter(
        k => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(k),
      );
      const shades = [
        /*50, 100,*/
        200, 300, 400, 500, 600, 700, 800, 900, 950,
      ];
      return swatchKeys.map(key => {
        const swatches = shades.map(shade => {
          const hex = colors[key][shade];
          const text = getTextColor(hex);
          const isSelected = this.selected?.toLowerCase() === hex.toLowerCase();
          return x$1`
          <span
            title="${hex}"
            class="${e({
              ThemeRadio: true,
              selected: isSelected,
            })}"
            style="background-color: ${hex}; color: ${text}"
            @click=${this.handleColorClick}
          >
            ${IconCheck}
          </span>
        `;
        });
        return x$1` <div class="SwatchGroup">
        <span class="ColorName">${key}</span>
        <div class="Swatches">${swatches}</div>
      </div>`;
      });
    }
  };
  ColorPanel.styles = i$3`
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
      color: var(--mov-color-on-loud);
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
  __decorateClass$f([n$1({ type: String, reflect: true })], ColorPanel.prototype, 'value', 2);
  __decorateClass$f([n$1({ type: String })], ColorPanel.prototype, 'selected', 2);
  ColorPanel = __decorateClass$f([t$1('color-panel')], ColorPanel);

  var __defProp$b = Object.defineProperty;
  var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
  var __decorateClass$e = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$b(target, key, result);
    return result;
  };
  let ColorPicker = class extends i$1 {
    constructor() {
      super(...arguments);
      this.value = '#228be6';
      this.swatches = null;
      this.mode = 'popup';
      this.opened = false;
      this.popupDirection = 'left';
      this.sourceSpace = 'srgb';
      this.hsv = { h: 0, s: 0, v: 0 };
      this.saturationThumbPosition = { x: 0, y: 0 };
      this.hueThumbPosition = 0;
      this.isDraggingSaturation = false;
      this.isDraggingHue = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateStateFromValue(this.value);
      window.addEventListener('mousemove', this.handleDrag.bind(this));
      window.addEventListener('mouseup', this.handleDragEnd.bind(this));
      window.addEventListener('touchmove', this.handleDrag.bind(this), { passive: false });
      window.addEventListener('touchend', this.handleDragEnd.bind(this));
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener('mousemove', this.handleDrag.bind(this));
      window.removeEventListener('mouseup', this.handleDragEnd.bind(this));
      window.removeEventListener('touchmove', this.handleDrag.bind(this));
      window.removeEventListener('touchend', this.handleDragEnd.bind(this));
      window.removeEventListener('click', this.handleClickOutside.bind(this));
    }
    updated(changedProperties) {
      if (changedProperties.has('mode')) {
        if (this.mode === 'popup') {
          window.addEventListener('click', this.handleClickOutside.bind(this));
        } else {
          window.removeEventListener('click', this.handleClickOutside.bind(this));
        }
      }
    }
    willUpdate(changedProperties) {
      if (changedProperties.has('value')) {
        this.updateStateFromValue(this.value);
      }
      if (changedProperties.has('mode') && this.mode === 'inline') {
        this.opened = false;
      }
    }
    handleClickOutside(e) {
      if (this.opened && !e.composedPath().includes(this)) {
        this.opened = false;
      }
    }
    togglePopup() {
      if (this.mode === 'popup') {
        if (!this.opened) {
          const triggerRect = this.getBoundingClientRect();
          const pickerWidth = 250;
          let containerRect;
          const drawer = this.closest('mov-drawer');
          if (drawer?.shadowRoot) {
            const dialog = drawer.shadowRoot.querySelector('dialog');
            if (dialog) {
              containerRect = dialog.getBoundingClientRect();
            } else {
              containerRect = { left: 0, right: window.innerWidth };
            }
          } else {
            containerRect = { left: 0, right: window.innerWidth };
          }
          if (triggerRect.left + pickerWidth > containerRect.right) {
            if (triggerRect.right - pickerWidth > containerRect.left) {
              this.popupDirection = 'right';
            } else {
              this.popupDirection = 'left';
            }
          } else {
            this.popupDirection = 'left';
          }
        }
        this.opened = !this.opened;
      }
    }
    isSameColor(color1, color2) {
      if (!color1 || !color2) return false;
      return Color.deltaE(color1, color2, { method: '2000' }) < 1;
    }
    renderCheckIcon(color) {
      return x$1`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${o$2({ stroke: getTextColor(color) })}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `;
    }
    renderPickerBody() {
      const saturationPanelStyle = {
        backgroundColor: `hsl(${this.hsv.h}, 100%, 50%)`,
      };
      const hsv = { h: this.hsv.h, s: this.hsv.s * 100, v: this.hsv.v * 100 };
      const saturationThumbStyle = {
        top: `${this.saturationThumbPosition.y}%`,
        left: `${this.saturationThumbPosition.x}%`,
        backgroundColor: new Color({ space: 'hsv', coords: [hsv.h, hsv.s, hsv.v] }).toString({
          format: 'hex',
        }),
      };
      const hueThumbStyle = {
        left: `${this.hueThumbPosition}%`,
      };
      return x$1`
      <div
        class="saturation-panel"
        style=${o$2(saturationPanelStyle)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
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
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${o$2(hueThumbStyle)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(
          this.swatches ||
          Object.entries(colors)
            .filter(([name]) => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(name))
            .map(([, color]) => color['600'])
        ).map(
          color => x$1`
            <button
              class="swatch"
              title=${color}
              style=${o$2({ backgroundColor: color })}
              @click=${() => this.selectSwatch(color)}
            >
              ${this.isSameColor(this.value, color) ? this.renderCheckIcon(color) : ''}
            </button>
          `,
        )}
      </div>
    `;
    }
    render() {
      const pickerClasses = {
        'picker-container': true,
        popup: this.mode === 'popup',
        right: this.popupDirection === 'right',
      };
      const pickerBody = this.renderPickerBody();
      if (this.mode === 'popup') {
        return x$1`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${o$2({ backgroundColor: this.value })}
          ></div>
        </div>
        ${this.opened ? x$1`<div class=${e(pickerClasses)}>${pickerBody}</div>` : ''}
      `;
      }
      return x$1`<div class=${e(pickerClasses)}>${pickerBody}</div>`;
    }
    updateStateFromValue(color) {
      try {
        const newColor = new Color(color);
        this.sourceSpace = newColor.space.id;
        const srgbColor = newColor.to('srgb');
        const hsvColor = srgbColor.to('hsv');
        let [h, s, v] = hsvColor.coords;
        if (Number.isNaN(h)) {
          h = this.hsv.h || 0;
          s = 0;
        }
        s = Math.max(0, Math.min(100, s));
        v = Math.max(0, Math.min(100, v));
        const newHsv = { h, s: s / 100, v: v / 100 };
        if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
          this.hsv = newHsv;
          this.updateThumbPositions();
        }
      } catch (e) {
        console.error(`[color-picker] Invalid color value: "${color}"`, e);
      }
    }
    dispatchInput() {
      this.dispatchEvent(
        new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
    }
    dispatchChange() {
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
      );
    }
    updateValueFromHsv() {
      const hsv = { h: this.hsv.h, s: this.hsv.s * 100, v: this.hsv.v * 100 };
      const newColorFromHsv = new Color({ space: 'hsv', coords: [hsv.h, hsv.s, hsv.v] });
      let newValue;
      try {
        const hexSpaces = ['srgb', 'hsl', 'hsv'];
        if (!this.sourceSpace || hexSpaces.includes(this.sourceSpace)) {
          newValue = newColorFromHsv.to('srgb').toString({ format: 'hex' });
        } else {
          newValue = newColorFromHsv.to(this.sourceSpace).toString({ precision: 5 });
        }
      } catch (e) {
        console.error(`[color-picker] Could not convert color to space ${this.sourceSpace}`, e);
        newValue = newColorFromHsv.to('srgb').toString({ format: 'hex' });
      }
      if (this.value !== newValue) {
        this.value = newValue;
        this.dispatchInput();
      }
    }
    updateThumbPositions() {
      this.saturationThumbPosition = {
        x: this.hsv.s * 100,
        y: (1 - this.hsv.v) * 100,
      };
      this.hueThumbPosition = (this.hsv.h / 360) * 100;
    }
    handleSaturationDragStart(e) {
      e.preventDefault();
      this.isDraggingSaturation = true;
      this.saturationPanel = this.shadowRoot?.querySelector('.saturation-panel');
      this.updateSaturation(e);
    }
    handleHueDragStart(e) {
      e.preventDefault();
      this.isDraggingHue = true;
      this.hueSlider = this.shadowRoot?.querySelector('.hue-slider');
      this.updateHue(e);
    }
    handleDrag(e) {
      if (this.isDraggingSaturation) {
        this.updateSaturation(e);
      }
      if (this.isDraggingHue) {
        this.updateHue(e);
      }
    }
    handleDragEnd() {
      if (this.isDraggingSaturation || this.isDraggingHue) {
        this.dispatchChange();
      }
      this.isDraggingSaturation = false;
      this.isDraggingHue = false;
    }
    getEventPosition(e) {
      if ('touches' in e) {
        return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
      }
      return { clientX: e.clientX, clientY: e.clientY };
    }
    updateSaturation(e) {
      if (!this.saturationPanel) return;
      const { clientX, clientY } = this.getEventPosition(e);
      const rect = this.saturationPanel.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
      this.hsv.s = x / rect.width;
      this.hsv.v = 1 - y / rect.height;
      this.updateValueFromHsv();
      this.updateThumbPositions();
    }
    updateHue(e) {
      if (!this.hueSlider) return;
      const { clientX } = this.getEventPosition(e);
      const rect = this.hueSlider.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      this.hsv.h = (x / rect.width) * 360;
      this.updateValueFromHsv();
      this.updateThumbPositions();
    }
    selectSwatch(color) {
      this.value = color;
      this.dispatchInput();
      this.dispatchChange();
    }
  };
  ColorPicker.styles = i$3`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
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

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `;
  __decorateClass$e([n$1({ type: String })], ColorPicker.prototype, 'value', 2);
  __decorateClass$e([n$1({ type: Array })], ColorPicker.prototype, 'swatches', 2);
  __decorateClass$e([n$1({ type: String })], ColorPicker.prototype, 'mode', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'opened', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'popupDirection', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'sourceSpace', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'hsv', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'saturationThumbPosition', 2);
  __decorateClass$e([r$1()], ColorPicker.prototype, 'hueThumbPosition', 2);
  ColorPicker = __decorateClass$e([t$1('color-picker')], ColorPicker);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const r = (r, o, t) => {
    for (const t of o) if (t[0] === r) return (0, t[1])();
    return t?.();
  };

  var __defProp$a = Object.defineProperty;
  var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
  var __decorateClass$d = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$a(target, key, result);
    return result;
  };
  let SegmentedControl = class extends i$1 {
    constructor() {
      super(...arguments);
      this.value = '';
      this.labelPosition = 'side';
      this.size = 'medium';
      this._options = [];
      this.resizeObserver = new ResizeObserver(() => this.updateThumbPosition());
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver.observe(this);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.resizeObserver.unobserve(this);
    }
    /**
     * Handles the click event on an option button, updates the component's value,
     * and dispatches a `change` event.
     * @internal
     */
    handleClick(_event, value) {
      this.value = value;
      this.dispatchEvent(
        new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
      );
    }
    /**
     * Gathers option data from the slotted `segmented-control-option` elements.
     * @internal
     */
    handleSlotChange() {
      this._options = this._slotEl
        .assignedNodes({ flatten: true })
        .filter(node => node.nodeName === 'SEGMENTED-CONTROL-OPTION')
        .map(node => ({
          value: node.getAttribute('value') ?? '',
          label: node.getAttribute('label') ?? '',
          icon: node.getAttribute('icon') ?? void 0,
        }));
    }
    firstUpdated() {
      this.handleSlotChange();
      this.updateComplete.then(() => this.updateThumbPosition());
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (
        changedProperties.has('value') ||
        changedProperties.has('_options') ||
        changedProperties.has('labelPosition') ||
        changedProperties.has('size')
      ) {
        Promise.resolve().then(() => this.updateThumbPosition());
      }
    }
    /**
     * Finds the currently selected option button and moves/resizes the thumb element.
     * @internal
     */
    updateThumbPosition() {
      if (!this.thumb) {
        return;
      }
      const selectedButton = this.shadowRoot?.querySelector('.button.selected');
      if (selectedButton) {
        const { offsetWidth, offsetHeight } = selectedButton;
        const buttonRect = selectedButton.getBoundingClientRect();
        const containerRect = this.shadowRoot
          ?.querySelector('.segmented-control')
          ?.getBoundingClientRect();
        const offsetX = buttonRect.left - (containerRect?.left ?? 0);
        const offsetY = buttonRect.top - (containerRect?.top ?? 0);
        this.thumb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        this.thumb.style.width = `${offsetWidth}px`;
        this.thumb.style.height = `${offsetHeight}px`;
      } else {
        this.thumb.style.width = '0px';
        this.thumb.style.height = '0px';
      }
    }
    render() {
      return x$1`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(
          option => x$1`
            <div
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : E}"
            >
              <button
                class="${e({
                  button: true,
                  selected: this.value === option.value,
                  // ✅ Use component state for selection
                  bottom: this.labelPosition === 'bottom',
                  small: this.size === 'small',
                  medium: this.size === 'medium',
                  large: this.size === 'large',
                })}"
                @click=${e => this.handleClick(e, option.value)}
                role="radio"
                aria-checked="${this.value === option.value}"
              >
                ${
                  option.icon
                    ? x$1`<mov-icon
                      name="${option.icon}"
                      .size=${r(
                        this.size,
                        [
                          ['small', () => '16px'],
                          ['medium', () => '24px'],
                          ['large', () => '36px'],
                        ],
                        () => this.size,
                      )}
                    ></mov-icon>`
                    : E
                }
                ${this.labelPosition !== 'tooltip' ? x$1`<span>${option.label}</span>` : E}
              </button>
            </div>
          `,
        )}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
  };
  SegmentedControl.styles = i$3`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `;
  __decorateClass$d([n$1({ type: String, reflect: true })], SegmentedControl.prototype, 'value', 2);
  __decorateClass$d([n$1({ type: String })], SegmentedControl.prototype, 'labelPosition', 2);
  __decorateClass$d([n$1({ type: String })], SegmentedControl.prototype, 'size', 2);
  __decorateClass$d([r$1()], SegmentedControl.prototype, '_options', 2);
  __decorateClass$d([e$2('.thumb')], SegmentedControl.prototype, 'thumb', 2);
  __decorateClass$d([e$2('slot')], SegmentedControl.prototype, '_slotEl', 2);
  SegmentedControl = __decorateClass$d([t$1('segmented-control')], SegmentedControl);
  let SegmentedControlOption = class extends i$1 {
    constructor() {
      super(...arguments);
      this.value = '';
      this.label = '';
    }
    /**
     * This component is a data container and does not need its own shadow DOM.
     * @internal
     */
    createRenderRoot() {
      return this;
    }
  };
  __decorateClass$d(
    [n$1({ type: String, reflect: true })],
    SegmentedControlOption.prototype,
    'value',
    2,
  );
  __decorateClass$d(
    [n$1({ type: String, reflect: true })],
    SegmentedControlOption.prototype,
    'label',
    2,
  );
  __decorateClass$d(
    [n$1({ type: String, reflect: true })],
    SegmentedControlOption.prototype,
    'icon',
    2,
  );
  SegmentedControlOption = __decorateClass$d(
    [t$1('segmented-control-option')],
    SegmentedControlOption,
  );

  var __defProp$9 = Object.defineProperty;
  var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
  var __decorateClass$c = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$9(target, key, result);
    return result;
  };
  let ToggleSwitch = class extends i$1 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.checked = false;
      this.disabled = false;
      this.design = 'graphical';
      this.textOn = 'ON';
      this.textOff = 'OFF';
    }
    toggleChecked() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
      }
    }
    render() {
      let knobContent;
      if (this.design === 'graphical') {
        knobContent = x$1`${this.checked ? IconCheck : IconX}`;
      } else {
        knobContent = x$1`<span class="text">${this.checked ? this.textOn : this.textOff}</span>`;
      }
      return x$1`
      <input
        type="checkbox"
        id="${this.name}"
        name="${this.name}"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.toggleChecked}
      />
      <label
        for="${this.name}"
        class="${e({
          switch: true,
          [this.design]: true,
        })}"
      >
        <div class="knob">${knobContent}</div>
      </label>
    `;
    }
  };
  ToggleSwitch.styles = i$3`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 2px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }
  `;
  __decorateClass$c([n$1({ type: String })], ToggleSwitch.prototype, 'name', 2);
  __decorateClass$c([n$1({ type: Boolean, reflect: true })], ToggleSwitch.prototype, 'checked', 2);
  __decorateClass$c([n$1({ type: Boolean, reflect: true })], ToggleSwitch.prototype, 'disabled', 2);
  __decorateClass$c([n$1({ type: String, reflect: true })], ToggleSwitch.prototype, 'design', 2);
  __decorateClass$c([n$1({ type: String })], ToggleSwitch.prototype, 'textOn', 2);
  __decorateClass$c([n$1({ type: String })], ToggleSwitch.prototype, 'textOff', 2);
  ToggleSwitch = __decorateClass$c([t$1('toggle-switch')], ToggleSwitch);

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
        if (!page?.blob) return;
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

  function scrollToElement(ele) {
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      getAppStateValue('chapter').value?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
  }
  appState.listen((value, _oldValue, changedKey) => {
    if (changedKey === 'scrollToPage' && value.scrollToPage !== void 0) {
      if (value.scrollToPage <= 0) {
        window.scrollTo(0, 0);
      } else {
        scrollToElement(getAppStateValue('images')?.[value.scrollToPage]?.ref?.value);
      }
      setTimeout(() => setAppStateValue('scrollToPage', void 0), 10);
    }
  });
  function selectGoToPage(event) {
    const target = event.currentTarget.value;
    setAppStateValue('scrollToPage', parseInt(target, 10));
  }
  function clickThumbnail(target) {
    setAppStateValue('scrollToPage', target);
  }

  var __defProp$8 = Object.defineProperty;
  var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
  var __decorateClass$b = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$8(target, key, result);
    return result;
  };
  let Pagination = class extends i$1 {
    constructor() {
      super(...arguments);
      this.mode = false;
      this.currentPage = 1;
      this.totalPages = 1;
      this.startPage = 1;
    }
    render() {
      if (!this.mode) return E;
      return x$1`
      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.prev}"
        ?disabled=${isNothing(this.prev) || this.prev === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
        </svg>
        <div class="tooltip">Previous Chapter</div>
      </button>

      <button
        class="pagination-button"
        @click=${this.goToPreviousPage}
        ?disabled=${this.currentPage <= this.startPage}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
        <div class="tooltip">Previous Page</div>
      </button>

      <div class="slider-container">
        <input
          type="range"
          class="pagination-slider"
          min="${this.startPage}"
          max="${this.totalPages}"
          .value="${this.currentPage.toString()}"
          @input="${selectGoToPage}"
        />
        <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
      </div>

      <button
        class="pagination-button"
        @click=${this.goToNextPage}
        ?disabled="${this.currentPage === this.totalPages - (this.startPage - 1)}"
      >
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
        <div class="tooltip">Next Page</div>
      </button>

      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.next}"
        ?disabled=${isNothing(this.next) || this.next === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
        </svg>
        <div class="tooltip">Next Chapter</div>
      </button>
    `;
    }
    goToPreviousPage() {
      this.goToPage(this.currentPage - 1);
    }
    goToNextPage() {
      this.goToPage(this.currentPage + 1);
    }
    goToPage(page) {
      setAppStateValue('scrollToPage', page);
    }
  };
  Pagination.styles = i$3`
    :host {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      max-width: 100%;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--mov-color-fill-loud);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--mov-color-fill-loud);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid var(--mov-color-fill-loud);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }
  `;
  __decorateClass$b([n$1({ type: Boolean })], Pagination.prototype, 'mode', 2);
  __decorateClass$b([n$1({ type: Number })], Pagination.prototype, 'currentPage', 2);
  __decorateClass$b([n$1({ type: Number })], Pagination.prototype, 'totalPages', 2);
  __decorateClass$b([n$1({ type: Number })], Pagination.prototype, 'startPage', 2);
  __decorateClass$b([n$1({ type: String })], Pagination.prototype, 'next', 2);
  __decorateClass$b([n$1({ type: String })], Pagination.prototype, 'prev', 2);
  Pagination = __decorateClass$b([t$1('manga-pagination')], Pagination);

  var __defProp$7 = Object.defineProperty;
  var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
  var __decorateClass$a = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$7(target, key, result);
    return result;
  };
  let Drawer = class extends i$1 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.placement = 'end';
    }
    close() {
      this.open = false;
    }
    handleCancel(e) {
      e.preventDefault();
      this.close();
    }
    handleClick(event) {
      if (event.target === this.dialog) {
        this.close();
      }
    }
    updated(changedProperties) {
      if (changedProperties.has('open')) {
        if (this.open) {
          this.dialog.classList.remove('closing');
          this.dialog.show();
          this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
        } else if (changedProperties.get('open') === true) {
          this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
          this.dialog.classList.add('closing');
          setTimeout(() => {
            this.dialog.classList.remove('closing');
            if (this.dialog.open) {
              this.dialog.close();
            }
          }, 300);
        }
      }
    }
    render() {
      return x$1`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${IconX}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `;
    }
  };
  Drawer.styles = i$3`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `;
  __decorateClass$a([n$1({ type: Boolean, reflect: true })], Drawer.prototype, 'open', 2);
  __decorateClass$a([n$1({ type: String, reflect: true })], Drawer.prototype, 'placement', 2);
  __decorateClass$a([e$2('dialog')], Drawer.prototype, 'dialog', 2);
  Drawer = __decorateClass$a([t$1('mov-drawer')], Drawer);

  var __defProp$6 = Object.defineProperty;
  var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
  var __decorateClass$9 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$6(target, key, result);
    return result;
  };
  let Dialog = class extends i$1 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.mode = 'dialog';
      this.fullscreen = false;
    }
    static getIconName(iconType) {
      switch (iconType) {
        case 'info':
          return 'info-circle';
        case 'warning':
          return 'alert-circle';
        case 'success':
          return 'circle-check';
        case 'error':
          return 'circle-x';
        case 'question':
          return 'help';
        default:
          return '';
      }
    }
    close() {
      this.open = false;
    }
    handleCancel(e) {
      e.preventDefault();
      this.close();
    }
    handleClick(event) {
      if (this.mode !== 'inline' && event.target === this.dialog) {
        this.close();
      }
    }
    updated(changedProperties) {
      if (this.mode === 'inline') {
        return;
      }
      if (changedProperties.has('open')) {
        if (this.open) {
          this.dialog.classList.remove('closing');
          this.dialog.show();
          this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
        } else if (changedProperties.get('open') === true) {
          this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
          this.dialog.classList.add('closing');
          setTimeout(() => {
            this.dialog.classList.remove('closing');
            if (this.dialog.open) {
              this.dialog.close();
            }
          }, 300);
        }
      }
    }
    render() {
      return x$1`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${IconX}
            </button>
          </div>
        </div>
        <div class="content-slot">
          ${
            this.icon
              ? x$1`
                <div class="icon-container">
                  <mov-icon
                    .name=${Dialog.getIconName(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `
              : ''
          }
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `;
    }
  };
  Dialog.styles = i$3`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `;
  __decorateClass$9([n$1({ type: Boolean, reflect: true })], Dialog.prototype, 'open', 2);
  __decorateClass$9([n$1({ type: String, reflect: true })], Dialog.prototype, 'mode', 2);
  __decorateClass$9([n$1({ type: Boolean, reflect: true })], Dialog.prototype, 'fullscreen', 2);
  __decorateClass$9([n$1({ type: String, reflect: true })], Dialog.prototype, 'icon', 2);
  __decorateClass$9([e$2('dialog')], Dialog.prototype, 'dialog', 2);
  Dialog = __decorateClass$9([t$1('mov-dialog')], Dialog);
  function showInfoDialog(options) {
    const closeDialog = () => setAppStateValue('dialog', null);
    if (options.timer) {
      setTimeout(closeDialog, options.timer);
    }
    setAppStateValue('dialog', {
      open: true,
      icon: options.icon,
      title: options.title,
      content: x$1`<div style="padding: 1rem;">${o$5(options.html)}</div>`,
      footer: x$1`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${closeDialog}>OK</mov-button>
      </div>
    `,
    });
  }

  var __defProp$5 = Object.defineProperty;
  var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
  var __decorateClass$8 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$5(target, key, result);
    return result;
  };
  let MovDropdown = class extends i$1 {
    constructor() {
      super();
      this.open = false;
      this.checkable = false;
      this.boundClickHandler = this.handleClickOutside.bind(this);
    }
    connectedCallback() {
      super.connectedCallback();
      document.addEventListener('click', this.boundClickHandler);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener('click', this.boundClickHandler);
    }
    handleClickOutside(event) {
      if (this.open && !event.composedPath().includes(this)) {
        this.open = false;
      }
    }
    toggle() {
      this.open = !this.open;
    }
    render() {
      return x$1`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `;
    }
  };
  MovDropdown.styles = i$3`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `;
  __decorateClass$8([n$1({ type: Boolean, reflect: true })], MovDropdown.prototype, 'open', 2);
  __decorateClass$8([n$1({ type: Boolean, reflect: true })], MovDropdown.prototype, 'checkable', 2);
  MovDropdown = __decorateClass$8([t$1('mov-dropdown')], MovDropdown);
  let MovDropdownItem = class extends i$1 {
    constructor() {
      super(...arguments);
      this.selected = false;
    }
    render() {
      return x$1`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `;
    }
  };
  MovDropdownItem.styles = i$3`
    :host {
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `;
  __decorateClass$8(
    [n$1({ type: Boolean, reflect: true })],
    MovDropdownItem.prototype,
    'selected',
    2,
  );
  MovDropdownItem = __decorateClass$8([t$1('mov-dropdown-item')], MovDropdownItem);

  const keycss =
    '/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */';

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

  const headerHeight = 49;
  const showEnd = 100;
  class HeadroomController {
    constructor(host) {
      this.prevOffset = 0;
      this.headroom = 'top';
      this.headerVisible = true;
      this.handleScroll = _.throttle(() => {
        if (this.isAnyDropdownOpen()) {
          this.prevOffset = window.scrollY;
          return;
        }
        const header = getSettingsValue('header');
        const { scrollY } = window;
        let newHeadroom = 'none';
        if (
          getSettingsValue('zoomMode') !== 'height' &&
          scrollY + window.innerHeight + showEnd > document.body.scrollHeight
        ) {
          newHeadroom = 'end';
        } else if (scrollY > this.prevOffset && scrollY > headerHeight) {
          newHeadroom = 'hide';
        } else if (header === 'scroll' && scrollY < this.prevOffset && scrollY > headerHeight) {
          newHeadroom = 'show';
        } else if (header !== 'click' && scrollY <= headerHeight) {
          newHeadroom = 'top';
        }
        let needsUpdate = false;
        if (this.headroom !== newHeadroom) {
          this.headroom = newHeadroom;
          needsUpdate = true;
        }
        if (header === 'scroll') {
          const newHeaderVisible = newHeadroom !== 'hide';
          if (this.headerVisible !== newHeaderVisible) {
            this.headerVisible = newHeaderVisible;
            needsUpdate = true;
          }
        }
        if (needsUpdate) {
          this.host.requestUpdate();
        }
        this.prevOffset = scrollY;
      }, 300);
      this.handleMouseMove = _.throttle(event => {
        if (this.isAnyDropdownOpen()) {
          if (!this.headerVisible) {
            this.headerVisible = true;
            this.host.requestUpdate();
          }
          return;
        }
        if (['hover', 'scroll'].includes(getSettingsValue('header'))) {
          const newHeaderVisible = HeadroomController.isMouseInsideRegion(
            event,
            window.innerWidth,
            headerHeight * 1.5,
          );
          if (this.headerVisible !== newHeaderVisible) {
            this.headerVisible = newHeaderVisible;
            this.host.requestUpdate();
          }
        }
      }, 300);
      this.toggleHeaderVisibility = () => {
        if (getSettingsValue('header') === 'click') {
          this.headerVisible = !this.headerVisible;
          this.host.requestUpdate();
        }
      };
      this.host = host;
      host.addController(this);
    }
    hostConnected() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('mousemove', this.handleMouseMove);
      this.handleScroll();
    }
    hostDisconnected() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('mousemove', this.handleMouseMove);
    }
    isAnyDropdownOpen() {
      if (!this.host.shadowRoot) return false;
      const allDropdowns = this.host.shadowRoot.querySelectorAll('mov-dropdown');
      for (const dropdown of allDropdowns) {
        if (dropdown.open) {
          return true;
        }
      }
      return false;
    }
    static isMouseInsideRegion(event, headerWidth, headerHeight2) {
      return (
        event.clientX >= 0 &&
        event.clientX <= headerWidth &&
        event.clientY >= 0 &&
        event.clientY <= headerHeight2
      );
    }
  }

  class TitleController {
    constructor(host) {
      this.canvasContext = null;
      this.host = host;
      host.addController(this);
      const canvas = document.createElement('canvas');
      this.canvasContext = canvas.getContext('2d');
      this.resizeObserver = new ResizeObserver(() => this.update());
    }
    hostConnected() {}
    hostDisconnected() {
      this.resizeObserver.disconnect();
    }
    observe(element, text) {
      if (!element || !text) {
        return;
      }
      this.element = element;
      this.text = text;
      this.resizeObserver.disconnect();
      this.resizeObserver.observe(this.element);
      this.update();
    }
    update() {
      if (!this.element || !this.text || !this.canvasContext) {
        this.value = this.text;
        this.host.requestUpdate();
        return;
      }
      const style = window.getComputedStyle(this.element);
      this.canvasContext.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const fullText = this.text;
      const containerWidth = this.element.clientWidth;
      const textWidth = this.canvasContext.measureText(fullText).width;
      if (textWidth <= containerWidth) {
        this.value = fullText;
        this.host.requestUpdate();
        return;
      }
      const ellipsis = '...';
      const ellipsisWidth = this.canvasContext.measureText(ellipsis).width;
      const targetWidth = containerWidth - ellipsisWidth;
      let start = '';
      let end = '';
      for (let i = 1; i < fullText.length; i++) {
        const startCandidate = fullText.substring(0, i);
        const endCandidate = fullText.substring(fullText.length - i);
        if (
          this.canvasContext.measureText(startCandidate).width +
            this.canvasContext.measureText(endCandidate).width >
          targetWidth
        ) {
          break;
        }
        start = startCandidate;
        end = endCandidate;
      }
      this.value = `${start}${ellipsis}${end}`;
      this.host.requestUpdate();
    }
  }

  function scroll() {
    const chapterElement = getAppStateValue('chapter').value;
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      const scrollDirection = getSettingsValue('viewMode') === 'FluidRTL' ? -1 : 1;
      chapterElement?.scrollBy({
        top: 0,
        left: getSettingsValue('scrollHeight') * scrollDirection,
        behavior: 'smooth',
      });
      if (
        chapterElement &&
        chapterElement.scrollLeft + chapterElement.clientWidth >= chapterElement.scrollWidth - 2
      ) {
        setAppStateValue('autoScroll', false);
        logScript('Finished auto scroll');
      }
    } else {
      window.scrollBy({
        top: getSettingsValue('scrollHeight'),
        left: 0,
        behavior: 'smooth',
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setAppStateValue('autoScroll', false);
        logScript('Finished auto scroll');
      }
    }
    if (getAppStateValue('autoScroll')) {
      requestAnimationFrame(scroll);
    }
  }
  function toggleAutoScroll() {
    if (getAppStateValue('autoScroll')) {
      setAppStateValue('autoScroll', false);
      logScript('Stopped auto scroll');
    } else {
      setAppStateValue('autoScroll', true);
      requestAnimationFrame(scroll);
      logScript('Start auto scroll');
    }
  }
  let resume = false;
  const debounceAutoScroll = _.debounce(() => {
    toggleAutoScroll();
    resume = false;
  }, 500);
  function manualScroll() {
    if (!resume && getAppStateValue('autoScroll')) {
      toggleAutoScroll();
      resume = true;
    }
    if (resume && !getAppStateValue('autoScroll')) {
      debounceAutoScroll();
    }
  }
  function autoscroll() {
    window.addEventListener('wheel', _.throttle(manualScroll, 500));
  }

  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      changeSettingsValue('bookmarks', b => [...b.filter(el => el.url !== url)]);
    }
  }
  function buttonEraseBookmarks(event) {
    const target = event.currentTarget.value;
    logScript(`Bookmark Removed ${target}`);
    i$6.error({
      title: getLocaleString('BOOKMARK_REMOVED'),
      duration: 1e4,
    });
    removeURLBookmark(target);
  }
  function buttonBookmarksOpen() {
    setAppStateValue('panel', 'bookmarks');
  }
  function buttonBookmark() {
    const num = getAppStateValue('currentPage');
    const mark = {
      name:
        getAppStateValue('manga')?.title ??
        document.documentElement.title ??
        window.location.hostname,
      url: window.location.href,
      page: num,
      date: /* @__PURE__ */ new Date().toISOString().slice(0, 10),
    };
    if (isBookmarked(mark.url)) {
      changeSettingsValue('bookmarks', b => [...b.filter(el => el.url !== mark.url)]);
      i$6.error({
        title: getLocaleString('BOOKMARK_REMOVED'),
        duration: 1e4,
      });
    } else {
      changeSettingsValue('bookmarks', b => [...b, mark]);
      i$6.success({
        title: getLocaleString('BOOKMARK_SAVED'),
        description: getLocaleString('BOOKMARK_MESSAGE').replace('##num##', num.toString()),
        duration: 1e4,
      });
    }
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
    const checked = event.detail.checked;
    saveSettingsValue('fitWidthIfOversize', checked);
  }
  function changeNavbarType(event) {
    const navbarType = event.currentTarget.value;
    saveSettingsValue('navbar', navbarType);
  }
  function checkEnableComments(event) {
    const checked = event.detail.checked;
    saveSettingsValue('enableComments', checked);
  }
  function checkPagination(event) {
    const checked = event.detail.checked;
    saveSettingsValue('pagination', checked);
  }
  function checkAutoDownload(event) {
    const checked = event.detail.checked;
    saveSettingsValue('downloadZip', checked);
    if (checked) {
      showInfoDialog({
        title: getLocaleString('ATTENTION'),
        html: getLocaleString('AUTO_DOWNLOAD'),
        timer: 1e4,
        icon: 'info',
      });
    }
  }
  function checkLazyLoad(event) {
    const checked = event.detail.checked;
    saveSettingsValue('lazyLoadImages', checked);
    if (checked) {
      showInfoDialog({
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
      showInfoDialog({
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
    const checked = event.detail.checked;
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
  function changeAutoScrollSpeed(sign) {
    changeSettingsValue('scrollHeight', v => {
      const speed = v + sign * 25;
      if (speed <= 0) return 0;
      const max = Math.ceil(window.innerHeight / 200) * 100;
      if (speed >= max) return max;
      return speed;
    });
  }

  function calculatePageZoom(
    page,
    mode = getSettingsValue('zoomMode'),
    value = getSettingsValue('zoomValue'),
  ) {
    const nextWidth =
      window.innerWidth +
      (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
        ? -navbarSize
        : 0);
    const nextHeight =
      window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0);
    if (mode === 'width') {
      page.width = nextWidth;
      page.height = void 0;
    } else if (mode === 'height') {
      page.width = void 0;
      page.height = nextHeight;
    } else if (mode === 'percent') {
      const width = page.naturalWidth ?? page.ref?.value?.naturalWidth;
      page.width = width ? width * (value / 100) : void 0;
      page.height = void 0;
    }
    return page;
  }
  function applyZoom(mode = getSettingsValue('zoomMode'), value = getSettingsValue('zoomValue')) {
    logScript('Zoom', mode, value);
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    if (mode === 'height') {
      setAppStateValue('scrollToPage', getAppStateValue('currentPage'));
    } else {
      refreshSettings('header');
    }
    const images = getAppStateValue('images');
    const manga = getAppStateValue('manga');
    const newImages = {};
    for (let i = manga?.begin ?? 1; i <= (manga?.pages ?? 1); i++) {
      newImages[i] = calculatePageZoom({ ...images?.[i] }, mode, value);
    }
    setAppStateValue('images', newImages);
  }
  function changeGlobalZoom(mode, value = getSettingsValue('zoomValue')) {
    return () => {
      applyZoom(mode, value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
      if (ratio > 0 && ratio < 500) applyZoom('percent', ratio);
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('zoomMode', target);
  }
  function changeDefaultZoomValue(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('zoomValue', target);
    applyZoom('percent', target);
  }
  function changeZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    applyZoom('percent', target);
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
      applyZoom();
    };
  }
  function changeDefaultViewMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('viewMode', mode);
    updateViewMode(mode)();
  }

  function doScrolling(sign) {
    const viewMode = getSettingsValue('viewMode');
    const zoomMode = getSettingsValue('zoomMode');
    logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
    if (viewMode.startsWith('Fluid')) {
      const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
      getAppStateValue('chapter').value?.scrollBy({
        left: 0.8 * window.innerWidth * sign * scrollDirection,
        behavior: 'smooth',
      });
    } else if (zoomMode === 'height') {
      const currentPage = getAppStateValue('currentPage');
      const target = currentPage + sign;
      if (target < 0) {
        setAppStateValue('scrollToPage', 0);
      } else if (target > (getAppStateValue('manga')?.pages ?? 1));
      else {
        setAppStateValue('scrollToPage', target);
      }
    } else {
      window.scrollBy({
        top: 0.8 * window.innerHeight * sign,
        behavior: 'smooth',
      });
    }
  }
  function redirectUrl(type) {
    const url = getAppStateValue('manga')?.[type];
    if (url && url !== '#') {
      location.href = distExports.sanitizeUrl(url);
    } else if (type !== 'next') {
      history.back();
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
      redirectUrl('next');
    },
    PREVIOUS_CHAPTER() {
      redirectUrl('prev');
    },
    RETURN_CHAPTER_LIST() {
      redirectUrl('series');
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
      changeAppStateValue('panel', p => (p === 'none' ? 'settings' : 'none'));
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
    INCREASE_SPEED() {
      changeAutoScrollSpeed(1);
    },
    DECREASE_SPEED() {
      changeAutoScrollSpeed(-1);
    },
  };
  function keybindings() {
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
  function saveKeybindings(keybindsRefs) {
    const newKeybinds = {};
    Object.keys(keybindsRefs).forEach(id => {
      const element = keybindsRefs[id].value;
      if (element) {
        const keys = element.value
          .split(',')
          .map(value => value.trim())
          .filter(key => key !== '');
        newKeybinds[id] = keys.length > 0 ? keys : void 0;
      }
    });
    saveSettingsValue('keybinds', newKeybinds);
    setAppStateValue('panel', 'keybindings');
    keybindings();
  }
  function editKeybindings() {
    setAppStateValue('panel', 'keybindingsEditor');
  }

  const styles$6 =
    '#Header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row nowrap;\n  transition: transform 0.3s ease-in;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--theme-background-color);\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\n  z-index: 900;\n}\n\n#Header.click {\n  padding-left: 40px;\n}\n\n@keyframes headroom {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0%);\n  }\n}\n\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\n  animation: headroom 0.3s ease-in reverse;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.scroll.headroom-hide:not(.visible) {\n  animation: none;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.scroll.headroom-show,\n#Header.headroom-end,\n#Header.visible {\n  animation: headroom 0.3s ease-in;\n  transform: translateY(0%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.headroom-top {\n  animation: none;\n}\n\n#Header.fixed {\n  position: sticky;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#Header.simple {\n  position: static;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#menu {\n  position: fixed;\n  z-index: 1;\n  color: var(--theme-body-text-color);\n  height: 40px;\n  width: 40px;\n}\n\n#menu:not(.click),\n#menu.hide {\n  display: none;\n}\n\n#menu.click {\n  z-index: 901;\n}\n\n#MangaTitle {\n  padding: 2px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n  word-wrap: anywhere;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 200px;\n  max-width: 40vw;\n}\n\n#GlobalFunctions {\n  display: flex;\n  gap: 3px;\n  padding: 3px 3px 3px 0;\n  flex-wrap: wrap;\n  z-index: 100;\n}\n\n#ZoomControl {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 5px;\n}\n';

  const media =
    '#Header.mobile,\n#Header.tablet {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.mobile #ViewerTitle,\n.tablet #ViewerTitle {\n  order: 4;\n  min-height: auto;\n}\n\n.mobile #GlobalFunctions,\n.tablet #GlobalFunctions {\n  order: 2;\n  width: auto;\n  padding: 5px;\n}\n\n.mobile #GlobalFunctions span {\n  flex-direction: column;\n}\n\n.mobile #ZoomControl,\n.tablet #ZoomControl {\n  order: 3;\n}\n\n.mobile #Toolbar,\n.tabler #Toolbar {\n  order: 1;\n}\n\n#Header.mobile {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\n  position: sticky;\n}\n\n.tablet #MangaTitle,\n.mobile #MangaTitle {\n  max-width: 90vw;\n}\n\n.mobile #ViewerTitle {\n  order: 3;\n  margin-top: 0;\n  height: auto;\n  padding: 0;\n}\n\n.mobile #GlobalFunctions {\n  order: 2;\n  padding: 0;\n  width: auto;\n  gap: 0;\n}\n\n.mobile mov-button::part(base) {\n  border-radius: 0;\n}\n\n.mobile #FileDropdown mov-button:first-of-type::part(base) {\n  border-radius: 5px 0 0 5px;\n}\n\n.mobile #GlobalFunctions mov-button:last-of-type::part(base) {\n  border-radius: 0 5px 5px 0;\n}\n\n.mobile .PageFunctions {\n  padding: 0;\n}\n\n.mobile .PageFunctions .PageButton.Bookmark {\n  opacity: 1;\n}\n\n.mobile #GlobalFunctions #ZoomSlider,\n.tablet #GlobalFunctions #ZoomSlider,\n.mobile .PageFunctions .PageButton:not(.Bookmark),\n.tablet #Counters,\n.mobile #ZoomControl,\n.mobile #ZoomDropdown,\n.mobile #ViewDropdown,\n.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)) {\n  display: none;\n}\n';

  var __defProp$4 = Object.defineProperty;
  var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
  var __decorateClass$7 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$4(target, key, result);
    return result;
  };
  let Header = class extends i$1 {
    constructor() {
      super();
      this.headroomController = new HeadroomController(this);
      this.titleController = new TitleController(this);
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has('manga') && this.manga) {
        requestAnimationFrame(() => {
          if (this.manga) {
            this.titleController.observe(
              this.mangaTitleElement,
              this.manga?.title ?? 'Manga Online Viewer',
            );
          }
        });
      }
    }
    render() {
      if (!this.manga) return x$1``;
      const { headroom, headerVisible } = this.headroomController;
      const keybinds = getSettingsValue('keybinds');
      const renderKeybind = action => {
        if (getAppStateValue('device') !== 'desktop') return E;
        const keys = keybinds[action];
        if (!keys || keys.length === 0) {
          return E;
        }
        return keys.map(key => x$1`<kbd slot="details">${key}</kbd>`);
      };
      return x$1`
      <mov-button
        id="menu"
        class="${e({
          [getSettingsValue('header')]: true,
          hide: ['top', 'end'].includes(headroom),
        })}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${e({
          [getSettingsValue('header')]: true,
          [`headroom-${headroom}`]: true,
          visible: headerVisible && ['hide', 'none'].includes(headroom),
          [getAppStateValue('device')]: true,
        })}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${getLocaleString('FILE_MENU')}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${buttonSettingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${getLocaleString('SETTINGS')} ${renderKeybind('SETTINGS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${buttonKeybindingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${getLocaleString('KEYBINDINGS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${e({ running: getAppStateValue('autoScroll') })}"
              @click=${toggleAutoScroll}
            >
              <mov-icon
                slot="icon"
                name="${getAppStateValue('autoScroll') ? 'IconPlayerPause' : 'IconPlayerPlay'}"
              ></mov-icon>
              ${getLocaleString('SCROLL_START')} ${renderKeybind('SCROLL_START')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${buttonBookmarksOpen}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${getLocaleString('BOOKMARKS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue('hidePageControls')}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${getLocaleString('TOGGLE_CONTROLS')}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString('VIEW_MENU')}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${updateViewMode('WebComic')}"
              ?selected=${getSettingsValue('viewMode') === 'WebComic'}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_WEBCOMIC')} ${renderKeybind('VIEW_MODE_WEBCOMIC')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${updateViewMode('Vertical')}"
              ?selected=${getSettingsValue('viewMode') === 'Vertical'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_VERTICAL')} ${renderKeybind('VIEW_MODE_VERTICAL')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${updateViewMode('FluidLTR')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_LEFT')} ${renderKeybind('VIEW_MODE_LEFT')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${updateViewMode('FluidRTL')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_RIGHT')} ${renderKeybind('VIEW_MODE_RIGHT')}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString('ZOOM_MENU')}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${changeZoomByStep()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${getLocaleString('ENLARGE')} ${renderKeybind('ENLARGE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${changeGlobalZoom('percent', 100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${getLocaleString('RESTORE')} ${renderKeybind('RESTORE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${changeZoomByStep(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${getLocaleString('REDUCE')} ${renderKeybind('REDUCE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${changeGlobalZoom('width')}"
              ?selected=${getSettingsValue('zoomMode') === 'width'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${getLocaleString('FIT_WIDTH')} ${renderKeybind('FIT_WIDTH')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${changeGlobalZoom('height')}"
              ?selected=${getSettingsValue('zoomMode') === 'height'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${getLocaleString('FIT_HEIGHT')} ${renderKeybind('FIT_HEIGHT')}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value ?? this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            .value="${getSettingsValue('zoomValue')}"
            min="${getSettingsValue('minZoom')}"
            max="200"
            @input=${changeZoom}
          />
          <span id="ZoomVal">
            Zoom:
            ${getSettingsValue('zoomMode') === 'percent' ? `${getSettingsValue('zoomValue')}%` : getSettingsValue('zoomMode')}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series ?? E}"
            @click=${buttonRedirectURL}
            title="${getLocaleString('RETURN_CHAPTER_LIST')}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="CommentsButton"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
            ?disabled=${!this.manga.comments}
          >
            <mov-icon name="IconMessage"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
            ?disabled=${getAppStateValue('download') !== 'available'}
            ?loading=${getAppStateValue('download') === 'working'}
          >
            <mov-icon
              name="${getAppStateValue('download') === 'working' ? 'IconLoader2' : 'IconFileDownload'}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev ?? E}"
            title="${getLocaleString('PREVIOUS_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next ?? E}"
            title="${getLocaleString('NEXT_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `;
    }
  };
  Header.styles = [r$4(styles$6), r$4(media), r$4(keycss), i$3``];
  __decorateClass$7([e$2('#MangaTitle')], Header.prototype, 'mangaTitleElement', 2);
  __decorateClass$7([n$1({ type: Object })], Header.prototype, 'manga', 2);
  Header = __decorateClass$7(
    [t$1('reader-header'), libExports.useStores(settings$1, locale, appState)],
    Header,
  );

  const styles$5 =
    '#BookmarksPanel {\n  text-align: center;\n  --width: 100vw;\n}\n\n#BookmarksList {\n  padding: 0 5px;\n  overflow: auto;\n  max-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.bookmark-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-radius: 5px;\n  transition: background-color 150ms ease-in-out;\n  text-align: left;\n}\n\n.bookmark-item:hover {\n  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\n}\n\n.bookmark-info {\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.bookmark-name {\n  font-weight: 500;\n}\n\n.bookmark-url {\n  font-size: 0.875rem;\n  text-decoration: none;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\n}\n.bookmark-url:hover {\n  text-decoration: underline;\n}\n\n.bookmark-details {\n  flex-shrink: 0;\n  width: 90px;\n  font-size: 0.875rem;\n  text-align: right;\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\n}\n.bookmark-details > div {\n  padding: 2px 0;\n}\n\n.bookmark-actions {\n  flex-shrink: 0;\n  display: flex;\n  gap: 0.5rem;\n}\n';

  var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
  var __decorateClass$6 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let BookmarkPanel = class extends i$1 {
    /**
     * Renders the list of saved bookmarks.
     * If no bookmarks are present, it displays a "List Empty" message.
     * Otherwise, it maps over the bookmarks from settings and creates a display element for each.
     *
     * @returns {import('lit').TemplateResult[] | string[]} An array of Lit templates for each bookmark, or a message if the list is empty.
     */
    listBookmarks() {
      if (isEmpty(getSettingsValue('bookmarks'))) {
        return [getLocaleString('LIST_EMPTY')];
      }
      return getSettingsValue('bookmarks').map(
        (mark, index) => x$1`
        <div
          id="Bookmark${index + 1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${mark.name}</div>
            <a
              class="bookmark-url"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(mark.date).toISOString().slice(0, 10)}</div>
            <div class="bookmark-page">Page: ${mark.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${mark.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${mark.url}"
              @click=${buttonEraseBookmarks}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `,
      );
    }
    render() {
      return x$1`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${getAppStateValue('panel') === 'bookmarks'}
        @close=${buttonPanelsClose}
      >
        <mov-button
          class="Bookmark"
          title="${getLocaleString('BOOKMARK')}"
          @click=${buttonBookmark}
          slot="header-actions"
        >
          <mov-icon
            name="${isBookmarked() === void 0 ? 'IconBookmark' : 'IconBookmarkOff'}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${getLocaleString('BOOKMARKS')}</h2>
        <h2 slot="label">${getLocaleString('BOOKMARKS')}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `;
    }
  };
  BookmarkPanel.styles = [r$4(styles$5)];
  BookmarkPanel = __decorateClass$6(
    [t$1('bookmark-panel'), libExports.useStores(settings$1, locale, appState)],
    BookmarkPanel,
  );

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o$1(o, t) {
    if (void 0 !== o) {
      let i = -1;
      for (const n of o) (i > -1 && (yield t), i++, yield n);
    }
  }

  const styles$4 =
    '#KeybindingsPanel div {\n  line-height: 1.5em;\n}\n\n#KeybindingsPanel #KeybindingsList {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 5px;\n}\n\n#KeybindingsPanel .ControlButton {\n  margin-left: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  gap: 0.5em;\n}\n\n#KeybindingsPanel label {\n  display: ruby;\n}\n\n#KeybindingsPanel input {\n  display: inline-block;\n  width: 100%;\n}\n\n#KeybindingsPanel #HotKeysRules {\n  grid-column: span 2;\n}\n';

  var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
  var __decorateClass$5 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let KeybindingsPanel = class extends i$1 {
    constructor() {
      super(...arguments);
      this.keybindsRefs = Object.keys(getSettingsValue('keybinds')).reduce((acc, key) => {
        acc[key] = e$6();
        return acc;
      }, {});
    }
    /**
     * Renders a read-only list of the current keybindings.
     * Each keybinding is displayed with its description and the assigned keys.
     *
     * @returns An array of Lit templates, each representing a keybinding entry.
     */
    keybindList() {
      const keybinds = getSettingsValue('keybinds');
      return Object.keys(keybinds).map(kb => {
        const keys = keybinds[kb]?.length
          ? o$1(
              keybinds[kb]?.map(key => x$1`<kbd class="dark">${key}</kbd>`),
              ' / ',
            )
          : '';
        return x$1`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
      });
    }
    /**
     * Renders an editable form for modifying keybindings.
     * It creates a text input for each keybinding action and displays the current assignments.
     * Also includes a section with rules for defining keybindings.
     *
     * @returns An array of Lit templates for the keybinding editor form.
     */
    keybindEditor() {
      const keybinds = getSettingsValue('keybinds');
      return Object.keys(keybinds).map(
        kb => x$1`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${keybinds[kb]?.join(' , ') ?? E}"
            ${n$4(this.keybindsRefs[kb])}
          />`,
      );
    }
    render() {
      return x$1`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${getAppStateValue('panel').startsWith('keybindings')}
        placement="end"
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('KEYBINDINGS')}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${
            getAppStateValue('panel') === 'keybindingsEditor'
              ? x$1` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${getLocaleString('SAVE_KEYBINDS')}"
                @click=${() => saveKeybindings(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString('BUTTON_SAVE')}
              </mov-button>`
              : x$1` <mov-button
                id="EditKeybindings"
                type="button"
                title="${getLocaleString('EDIT_KEYBINDS')}"
                @click=${editKeybindings}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString('BUTTON_EDIT')}
              </mov-button>`
          }
        </div>
        <div id="KeybindingsList">
          ${getAppStateValue('panel') === 'keybindingsEditor' ? this.keybindEditor() : this.keybindList()}
        </div>
        <div id="HotKeysRules">${o$5(getLocaleString('KEYBIND_RULES'))}</div>
      </mov-drawer>
    `;
    }
  };
  KeybindingsPanel.styles = [r$4(styles$4), r$4(keycss)];
  KeybindingsPanel = __decorateClass$5(
    [t$1('keybindings-panel'), libExports.useStores(settings$1, locale, appState)],
    KeybindingsPanel,
  );

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o(o, f) {
    if (void 0 !== o) {
      let i = 0;
      for (const t of o) yield f(t, i++);
    }
  }

  function sequence(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
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

  const styles$3 =
    ':host {\n  --nav-collapsed-size: 34px;\n  --nav-expanded-size: 200px;\n  --header-height: 80px;\n}\n#Navigation {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  overflow: hidden;\n  display: flex;\n  box-sizing: border-box;\n  gap: 5px;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 0;\n  transition: all 0.3s ease;\n  position: fixed;\n  z-index: 1000;\n}\n#Thumbnails {\n  flex-grow: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: flex-start;\n}\n#Navigation.horizontal #Thumbnails {\n  flex-direction: row;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n#Navigation.vertical #Thumbnails {\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n}\n#Navigation.left #Thumbnails {\n  direction: rtl;\n}\n:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\n  display: none;\n}\n#NavigationCounters {\n  flex-shrink: 0; /* Prevent this from shrinking */\n  padding: 5px;\n  line-height: 1rem;\n  text-align: center;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n/* == Horizontal Orientation (for top/bottom position) == */\n#Navigation.horizontal {\n  flex-direction: column;\n  height: var(--nav-collapsed-size);\n  width: 100%;\n  left: 0;\n  right: 0;\n}\n:host([forceExpanded]) #Navigation.horizontal,\n#Navigation.horizontal:hover {\n  height: var(--nav-expanded-size);\n}\n#Navigation.bottom {\n  bottom: 0;\n}\n/* == Vertical Orientation (for left/right position) == */\n#Navigation.vertical {\n  flex-direction: row;\n  width: var(--nav-collapsed-size);\n  height: 100%;\n  bottom: 0;\n  transition:\n    top 0.3s ease,\n    height 0.3s ease,\n    width 0.3s ease;\n}\n:host([forceExpanded]) #Navigation.vertical,\n#Navigation.vertical:hover {\n  width: var(--nav-expanded-size);\n}\n#Navigation.left {\n  left: 0;\n  flex-direction: row-reverse;\n}\n#Navigation.right {\n  right: 0;\n}\n#Navigation.vertical #NavigationCounters {\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n#Navigation.right #NavigationCounters {\n  transform: rotate(0deg);\n}\n/* Adjust for header visibility */\n#Navigation.vertical.header {\n  top: var(--header-height);\n  height: calc(100% - var(--header-height));\n}\n\n#Navigation .Thumbnail {\n  display: inline-flex;\n  height: 150px;\n  width: 150px;\n  margin: 0 5px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n\n.ThumbnailIndex {\n  color: var(--mov-color-on-loud);\n  background-color: var(--mov-color-fill-loud);\n  display: block;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  bottom: 30%;\n  width: 100%;\n  line-height: 1.2rem;\n  text-align: center;\n  font-weight: 600;\n  z-index: 1;\n}\n.ThumbnailImg {\n  cursor: pointer;\n  display: inline-block;\n  max-height: 150px;\n  min-height: 150px;\n  min-width: 80px;\n  max-width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 48px 48px;\n}\n';

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
  let Navbar = class extends i$1 {
    constructor() {
      super(...arguments);
      this.mode = 'bottom';
      this.forceExpanded = false;
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
      if (this.mode === 'disabled') return E;
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
          ${o(
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
                  src=${getAppStateValue('images')?.[index]?.src ?? E}
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
    r$4(styles$3),
    i$3`
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
        background-image: url('${r$4(svgToUrl(IconPhoto$1))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${r$4(svgToUrl(IconPhotoOff$1))}');
      }
    `,
  ];
  __decorateClass$4([n$1({ type: String })], Navbar.prototype, 'mode', 2);
  __decorateClass$4([n$1({ type: Boolean })], Navbar.prototype, 'forceExpanded', 2);
  __decorateClass$4([r$1()], Navbar.prototype, 'isHiding', 2);
  Navbar = __decorateClass$4(
    [t$1('navbar-thumbnails'), libExports.useStores(settings$1, locale, appState)],
    Navbar,
  );

  const styles$2 =
    '#CommentsPanel {\n  text-align: center;\n  --width: 100vw;\n}\n\n#CommentsArea {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  height: 100%;\n  width: 100%;\n  background-color: var(--theme-body-background);\n}\n';

  const themesCSS = (selector = '#MangaOnlineViewer', hex = getSettingsValue('theme')) => {
    const gradient = generateColorGradient(hex);
    const text = getTextColor(hex);
    const secondary = getSettingsValue('colorScheme') === 'dark' ? gradient[8] : gradient[2];
    const secondaryText = getTextColor(secondary);
    return css`
      :where(:root),
      ${selector}, .dark,
      ${selector}.dark {
        --theme-primary-color: ${hex};
        --theme-primary-text-color: ${text};
        --theme-secondary-color: ${secondary};
        --theme-secondary-text-color: ${secondaryText};

        color-scheme: dark;
        --theme-body-background: ${colors.dark['600']};
        --theme-body-text-color: ${colors.dark['50']};
        --theme-text-color: ${colors.dark['50']};
        --theme-background-color: ${colors.dark['600']};
        --theme-hightlight-color: ${colors.dark['500']};
        --theme-border-color: ${colors.dark['400']};

        --mov-color-fill-quiet: ${gradient[9]};
        --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[8]});
        --mov-color-fill-loud: var(--theme-primary-color);
        --mov-color-border-quiet: ${gradient[8]};
        --mov-color-border-normal: ${gradient[7]};
        --mov-color-border-loud: ${gradient[6]};
        --mov-color-on-quiet: ${gradient[4]};
        --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
        --mov-color-on-loud: var(--theme-primary-text-color, white);

        --mov-color-mix-hover: black 8%;
        --mov-color-mix-active: black 16%;
      }

      .light,
      ${selector}.light {
        color-scheme: light;
        --theme-body-background: ${colors.gray['50']};
        --theme-body-text-color: ${colors.gray['900']};
        --theme-text-color: ${colors.gray['900']};
        --theme-background-color: ${colors.gray['50']};
        --theme-hightlight-color: ${colors.gray['500']};
        --theme-border-color: ${colors.gray['100']};

        --mov-color-fill-quiet: ${gradient[0]};
        --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[1]});
        --mov-color-fill-loud: var(--theme-primary-color);
        --mov-color-border-quiet: ${gradient[1]};
        --mov-color-border-normal: ${gradient[2]};
        --mov-color-border-loud: ${gradient[4]};
        --mov-color-on-quiet: ${gradient[6]};
        --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
        --mov-color-on-loud: var(--theme-primary-text-color, white);

        --mov-color-mix-hover: black 10%;
        --mov-color-mix-active: black 20%;
      }
    `;
  };

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
  let CommentsPanel = class extends i$1 {
    constructor() {
      super(...arguments);
      this.colorScheme = getSettingsValue('colorScheme');
    }
    render() {
      return x$1`
      <mov-dialog
        id="CommentsPanel"
        ?open=${getAppStateValue('panel') === 'comments'}
        fullscreen
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('COMMENTS')}</h2>
        <div
          id="CommentsArea"
          class="${this.colorScheme}"
        >
          ${getAppStateValue('manga')?.comments}
        </div>
        <toggle-button
          id="CommentsColorScheme"
          mode="theme"
          @click=${this.changeCommentsColor}
          slot="header-actions"
          ?active=${this.colorScheme === 'dark'}
        >
        </toggle-button>
      </mov-dialog>
    `;
    }
    /**
     * Event handler to toggle the color scheme of the comments panel.
     * It toggles 'light' and 'dark' classes on the parent element of the button.
     */
    changeCommentsColor() {
      this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
    }
  };
  CommentsPanel.styles = [r$4(styles$2), r$4(themesCSS(':host'))];
  __decorateClass$3([r$1()], CommentsPanel.prototype, 'colorScheme', 2);
  CommentsPanel = __decorateClass$3(
    [t$1('comments-panel'), libExports.useStores(settings$1, locale, appState)],
    CommentsPanel,
  );

  function settingsScope() {
    const value = isSettingsLocal() ? 'true' : 'false';
    return x$1` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <segmented-control
      .value=${value}
      @change=${changeSettingsScope}
    >
      <segmented-control-option
        value="false"
        label=${getLocaleString('GLOBAL')}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
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
      <toggle-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue('fitWidthIfOversize')}
        @change=${checkFitWidthOversize}
      ></toggle-switch>
    </div>
    <div class="ControlLabel pagination">
      ${getLocaleString('ENABLE_PAGINATION')}
      <toggle-switch
        name="pagination"
        ?checked=${getSettingsValue('pagination')}
        @change=${checkPagination}
      ></toggle-switch>
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      <toggle-switch
        name="enableComments"
        ?checked=${getSettingsValue('enableComments')}
        @change=${checkEnableComments}
      ></toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      <toggle-switch
        name="downloadZip"
        ?checked=${getSettingsValue('downloadZip')}
        @change=${checkAutoDownload}
      ></toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      <toggle-switch
        name="hidePageControls"
        ?checked=${getSettingsValue('hidePageControls')}
        @change=${checkHideImageControls}
      ></toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      <toggle-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue('lazyLoadImages')}
        @change=${checkLazyLoad}
      ></toggle-switch>
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
    return x$1`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <segmented-control
        .value=${getSettingsValue('header')}
        @change=${changeHeaderType}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${getLocaleString('HEADER_HOVER')}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${getLocaleString('HEADER_SCROLL')}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${getLocaleString('HEADER_CLICK')}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${getLocaleString('HEADER_FIXED')}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${getLocaleString('HEADER_SIMPLE')}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
  }
  function navbarType() {
    return x$1`
    <div class="ControlLabel navbarType">
      ${getLocaleString('NAVBAR_TYPE')}
      <segmented-control
        .value=${getSettingsValue('navbar')}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${getLocaleString('NAVBAR_BOTTOM')}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${getLocaleString('NAVBAR_LEFT')}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${getLocaleString('NAVBAR_RIGHT')}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${getLocaleString('NAVBAR_DISABLED')}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
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
        max="${Math.ceil(window.innerHeight / 200) * 100}"
        step="1"
        @change="${changeScrollHeight}"
      />
    </div>
  `;
  }
  const SettingsPanelOthers = () =>
    x$1`${checkboxOptions()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;

  function changeColorScheme() {
    const isDark = getSettingsValue('colorScheme') === 'dark';
    saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
    document.documentElement.classList.remove(isDark ? 'dark' : 'light');
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
  }
  function changeTheme(event) {
    const value = event instanceof CustomEvent ? event.detail.value : event.currentTarget.value;
    saveSettingsValue('theme', value);
  }

  function theme() {
    return x$1`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${changeColorScheme}
        ?active=${getSettingsValue('colorScheme') === 'dark'}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <color-picker
        id="ThemeHex"
        .value="${getSettingsValue('theme')}"
        title="${getSettingsValue('theme')}"
        @input=${changeTheme}
        .swatches=${Object.values(sample)}
      ></color-picker>
    </div>
    <color-palette
      .baseColor="${getSettingsValue('theme')}"
      mode="steps"
      .selected=${getSettingsValue('theme')}
      @change="${changeTheme}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(sample).map(
        c => x$1`<color-swatch
            .color="${c}"
            .selected=${getSettingsValue('theme')}
            @change=${changeTheme}
          ></color-swatch>`,
      )}
    </span>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <color-panel
        .selected=${getSettingsValue('theme')}
        @change=${changeTheme}
      ></color-panel>
    </details>
  `;
  }

  function defaultZoomMode() {
    return x$1` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <segmented-control
      .value=${getSettingsValue('zoomMode')}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${getLocaleString('PERCENT')}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${getLocaleString('FIT_WIDTH')}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${getLocaleString('FIT_HEIGHT')}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
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
    return x$1`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <segmented-control
        .value=${getSettingsValue('viewMode')}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${getLocaleString('VIEW_MODE_VERTICAL')}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${getLocaleString('VIEW_MODE_WEBCOMIC')}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${getLocaleString('VIEW_MODE_LEFT')}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${getLocaleString('VIEW_MODE_RIGHT')}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
  }
  const SettingsPanelZoom = () =>
    x$1`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;

  const styles$1 =
    '#SettingsPanel {\n  color: var(--theme-text-color);\n}\n\n#SettingsPanel fieldset {\n  border: 1px solid var(--theme-body-text-color);\n  padding: 3px;\n  border-radius: 10px;\n}\n\n#SettingsPanel .ControlLabel {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#SettingsPanel .ControlLabelItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#SettingsPanel .ControlLabelItem:not(.show) {\n  display: none;\n}\n\n#SettingsPanel input[type="range"] {\n  width: 100%;\n}\n\n#SettingsPanel .RangeValue {\n  display: inline-block;\n  color: var(--mov-color-on-loud);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--mov-color-fill-loud);\n  padding: 2px 5px;\n  margin-left: 8px;\n}\n\n#SettingsPanel datalist {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#SettingsPanel datalist option {\n  padding: 0;\n  writing-mode: vertical-lr;\n}\n\n#ThemeSelector {\n  width: 110px;\n}\n\n#ColorRecommendations {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\n  display: none;\n}\n\n#ColorScheme {\n  padding: 5px;\n  min-height: 28px;\n  min-width: 28px;\n}\n\n#ResetSettings,\n#ResetSettings::part(base) {\n  width: 100%;\n}\n';

  var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
  var __decorateClass$2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let SettingsPanel = class extends i$1 {
    render() {
      return x$1`
      <mov-drawer
        id="SettingsPanel"
        ?open=${getAppStateValue('panel') === 'settings'}
        @close=${buttonPanelsClose}
        placement="start"
        class="${getAppStateValue('device')}"
      >
        <h2 slot="label">${getLocaleString('SETTINGS')}</h2>
        <mov-button
          id="ResetSettings"
          @click="${resetSettings}"
          title="${getLocaleString('BUTTON_RESET_SETTINGS')}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${getLocaleString('BUTTON_RESET_SETTINGS')}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${getLocaleString('GENERAL')}</legend>
            ${SettingsPanelGeneral()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${getLocaleString('THEME')}</legend>
            ${theme()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${getLocaleString('LOADING')}</legend>
            ${SettingsPanelLoading()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${getLocaleString('ZOOM')}</legend>
            ${SettingsPanelZoom()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${getLocaleString('OTHERS')}</legend>
            ${SettingsPanelOthers()}
          </fieldset>
        </div>
      </mov-drawer>
    `;
    }
  };
  SettingsPanel.styles = [
    i$3`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,
    r$4(styles$1),
  ];
  SettingsPanel = __decorateClass$2(
    [t$1('settings-panel'), libExports.useStores(settings$1, locale, appState)],
    SettingsPanel,
  );

  function computeCurrentPage() {
    const pages = getAppStateValue('images');
    if (!pages) return null;
    const viewMode = getSettingsValue('viewMode');
    const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
    const isRTL = viewMode === 'FluidRTL';
    const viewportCenterY = window.innerHeight / 2;
    const viewportCenterX = window.innerWidth / 2;
    let best = null;
    for (const index in pages) {
      const image = pages[index].ref?.value;
      if (!image) continue;
      const rect = image?.getBoundingClientRect();
      let edge;
      if (isHorizontal) {
        if (isRTL) {
          edge = rect.right;
        } else {
          edge = rect.left;
        }
      } else {
        edge = rect.top;
      }
      const passed = isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY;
      if (passed) {
        if (!best || edge > best.edge) {
          best = { index: parseInt(index, 10), edge };
        }
      }
    }
    if (!best) {
      return getAppStateValue('manga')?.begin ?? 1;
    }
    return best.index;
  }
  function updateCurrentPage() {
    const page = computeCurrentPage();
    if (page == null) return;
    if (getAppStateValue('currentPage') !== page) {
      setAppStateValue('currentPage', page);
    }
  }
  function attachListeners() {
    const handler = _.throttle(() => {
      requestAnimationFrame(updateCurrentPage);
    }, 100);
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    getAppStateValue('chapter').value?.addEventListener('scroll', handler, {
      passive: true,
    });
    requestAnimationFrame(updateCurrentPage);
  }
  function trackCurrentPage() {
    if (!getAppStateValue('chapter').value) {
      setTimeout(trackCurrentPage, 50);
      return;
    }
    attachListeners();
  }

  async function events() {
    await waitForFunc(() => getAppStateValue('manga') !== void 0);
    keybindings();
    window.addEventListener('resize', () => {
      setAppStateValue('device', getDevice());
    });
    autoscroll();
    trackCurrentPage();
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
          return { ...images, [index]: { ...images?.[index], src } };
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
    applyZoom();
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
          if (value.images?.[i]?.src !== void 0) continue;
          if (isImagesManga(manga)) {
            addImg(manga, i, manga.listImages[i - 1]);
          } else if (isPagesManga(manga)) {
            addPage(manga, i, manga.listPages[i - 1]);
          }
        }
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
    const img = getAppStateValue('images')?.[index]?.ref?.value;
    if (img) {
      reloadImage(index, img);
    }
  }
  function buttonHidePage(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    changeImage(index, image => ({ hide: !image.hide }));
  }
  function imageLoaded(event) {
    const img = event.currentTarget;
    img.classList.add('imgLoaded');
    img.classList.remove('imgBroken');
    const index = parseInt(img.id.replace('PageImg', ''), 10);
    changeImage(index, _image =>
      calculatePageZoom({
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      }),
    );
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (!blob) return;
          changeImage(index, _image => ({ blob }));
        }, 'image/png');
      }
    } catch (e) {
      console.error('Failed to transform image to blob for page', index, e);
    }
    changeAppStateValue('loaded', n => n + 1);
    const total = getAppStateValue('manga')?.pages ?? 1;
    const loaded = getAppStateValue('loaded') ?? 0;
    const percentage = Math.floor((loaded / total) * 100);
    document.title = `(${percentage}%) ${getAppStateValue('manga')?.title}`;
    NProgress.configure({
      showSpinner: false,
    }).set(loaded / total);
    logScript(`Progress: ${percentage}%`);
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
              ? -navbarSize
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
          height: window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0),
        },
      });
    }
  }

  function getImageStyle(index) {
    const image = getAppStateValue('images')?.[index];
    let maxHeight;
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      maxHeight = `${window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0)}px`;
    } else {
      maxHeight = void 0;
    }
    return {
      width: image?.width ? `${image.width}px` : 'auto',
      height: image?.height ? `${image.height}px` : 'auto',
      'max-height': maxHeight,
      'min-width': `${getSettingsValue('minZoom')}vw`,
    };
  }
  const listPages = (times, begin) =>
    sequence(times, begin).map(index => {
      if (!getAppStateValue('images')?.[index]?.ref) {
        changeImage(index, _image => ({ ref: e$6() }));
      }
      return x$1`
      <div
        id="Page${index}"
        class="${e({
          MangaPage: true,
          hide: !!getAppStateValue('images')?.[index].hide,
        })}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${getLocaleString('BOOKMARK')}"
            @click=${buttonBookmark}
            value="${index}"
          >
            ${isBookmarked() ? IconBookmarkOff : IconBookmark}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${getLocaleString('ZOOM_IN')}"
            @click=${buttonZoomIn}
            value="${index}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${getLocaleString('ZOOM_RESET')}"
            @click=${buttonRestoreZoom}
            value="${index}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${getLocaleString('ZOOM_OUT')}"
            @click=${buttonZoomOut}
            value="${index}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
            @click=${buttonZoomWidth}
            value="${index}"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
            @click=${buttonZoomHeight}
            value="${index}"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide PageButton"
            title="${getLocaleString('HIDE')}"
            @click=${buttonHidePage}
            value="${index}"
          >
            ${getAppStateValue('images')?.[index].hide ? IconEye : IconEyeOff}
          </button>
          <button
            class="Reload PageButton"
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
            src=${getAppStateValue('images')?.[index]?.src ?? E}
            style="${o$2(getImageStyle(index))}"
            @load=${imageLoaded}
            @error=${imageLoadError}
            ${n$4(getAppStateValue('images')?.[index].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `;
    });

  const Reader = manga => x$1`
  <main
    id="Chapter"
    ${n$4(getAppStateValue('chapter'))}
    class="${e({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
      separator: getSettingsValue('viewMode') === 'Vertical',
    })}"
    @wheel=${e => {
      if (getSettingsValue('viewMode') === 'FluidLTR') transformScrollToHorizontal(e);
      else if (getSettingsValue('viewMode') === 'FluidRTL') transformScrollToHorizontalReverse(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;

  const styles =
    ':root:not(.light, .dark) {\n  --theme-body-background: #25262b;\n  --theme-body-text-color: #c1c2c5;\n  --theme-text-color: #c1c2c5;\n  --theme-primary-color: #1a1b1e;\n  --theme-primary-text-color: #c1c2c5;\n  --theme-background-color: #25262b;\n  --theme-hightlight-color: #2c2e33;\n  --theme-border-color: #373a40;\n  --theme-secondary-color: #2c2e33;\n  --theme-secondary-text-color: #c1c2c5;\n}\n\n:host {\n  box-sizing: border-box;\n}\n\n#MangaOnlineViewer {\n  text-decoration: none;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n\n#Chapter {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  min-width: 225px;\n  box-sizing: border-box;\n}\n\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\n  padding-bottom: 31px;\n}\n\n#Chapter.Vertical .PageContent {\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n.closeButton {\n  width: fit-content;\n  height: fit-content;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 950;\n  cursor: pointer;\n}\n\n.overlay.visible {\n  display: block;\n}\n\nselect {\n  height: 20px;\n  margin: 2px;\n}\n\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\n  max-width: 100%;\n  object-fit: contain;\n}\n\n.hideControls .PageFunctions {\n  visibility: hidden;\n}\n';

  const animation =
    '@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n.icon-tabler-loader-2,\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n.animate-spin-reverse {\n  -webkit-animation: spin-reverse 1s linear infinite;\n  animation: spin-reverse 1s linear infinite;\n}\n';

  const fluid =
    '#Chapter.FluidLTR,\n#Chapter.FluidRTL {\n  display: flex;\n  overflow-x: auto;\n  min-width: auto;\n\n  .ZoomWidth {\n    display: none;\n  }\n\n  .PageImg {\n    min-width: unset;\n  }\n\n  .MangaPage {\n    width: initial;\n    min-width: fit-content;\n    position: relative;\n  }\n\n  .MangaPage.DoublePage {\n    grid-column: span 2;\n  }\n}\n\n#Chapter.FluidLTR {\n  flex-direction: row;\n\n  .MangaPage .PageFunctions {\n    right: auto;\n    left: 0;\n    direction: rtl;\n  }\n}\n\n#Chapter.FluidRTL {\n  flex-direction: row-reverse;\n}\n';

  const page =
    '.PageButton .icon-tabler {\n  height: 1rem;\n  width: 1rem;\n  vertical-align: sub;\n}\n\n.PageButton,\n.PageButton:visited,\n.PageButton:link {\n  cursor: pointer;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px;\n  min-height: 32px;\n  color: var(--mov-color-on-loud);\n  background-color: var(--mov-color-fill-loud);\n  border-color: var(--theme-border-color);\n  text-decoration: none;\n}\n\n.PageButton:active,\n.PageButton:hover {\n  opacity: 0.8;\n}\n\n.PageButton[selected] {\n  background-color: var(--mov-color-fill-normal);\n  color: var(--mov-color-on-normal);\n  border: 1px solid var(--theme-border-color);\n}\n\n.PageButton.hidden {\n  display: none;\n}\n\n.MangaPage {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 0;\n  min-height: 22px;\n  min-width: 100%;\n}\n\n.PageContent {\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto;\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.MangaPage.hide .PageContent {\n  height: 0;\n}\n\n.PageContent .PageImg[src=""],\n.PageContent .PageImg:not([src]),\n.PageContent .PageImg.imgBroken {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n  position: relative;\n  text-align: center;\n  line-height: 80vh;\n  vertical-align: top;\n  color: var(--theme-text-color);\n  font-size: 1rem;\n  min-width: 40vw;\n  min-height: 50vh;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0;\n}\n\n.PageContent .PageImg[src=""]:before,\n.PageContent .PageImg:not([src]):before,\n.PageContent .PageImg.imgBroken:before {\n  content: attr(alt);\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: pre-wrap;\n  text-align: center;\n  color: var(--theme-text-color);\n  font-size: 1rem;\n}\n\n.PageFunctions {\n  font-family: monospace;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  gap: 3px;\n  position: absolute;\n  right: 0;\n}\n\n.PageFunctions > .PageIndex {\n  background-color: var(--mov-color-fill-loud);\n  color: var(--mov-color-on-loud);\n  min-width: 20px;\n  text-align: center;\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 1rem;\n  border-radius: 5px;\n}\n\n.PageFunctions .PageButton {\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-width: 0;\n  min-height: auto;\n  opacity: 0.5;\n}\n\n.PageFunctions:hover .PageButton {\n  opacity: 1;\n}\n\n.PageFunctions .PageButton:hover {\n  opacity: 0.9;\n}\n\n#Chapter.Vertical .separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-style: italic;\n}\n\n#Chapter.Vertical .separator::before,\n#Chapter.Vertical .separator::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--theme-text-color);\n}\n\n#Chapter.Vertical.separator:not(:empty)::before {\n  margin-right: 0.25em;\n}\n\n#Chapter.Vertical.separator:not(:empty)::after {\n  margin-left: 0.25em;\n}\n\n#Chapter:not(.separator) .separator,\n#Chapter:not(.Vertical) .separator {\n  display: none;\n}\n';

  const normalize$1 =
    '/*  Simple Normalizer */\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n  color: var(--theme-body-text-color);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n  vertical-align: middle;\n  border: 0 none;\n}\n';

  const cssStyles = css`
    .PageContent .PageImg[src=''],
    .PageContent .PageImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto$1)}');
    }

    .PageContent .PageImg.imgBroken {
      background-image: url('${svgToUrl(IconPhotoOff$1)}');
    }

    ${normalize$1}
    ${styles}
  ${page}
  ${fluid}
  ${media}
  ${animation}
  `;

  /* 
  Tool Cool Range Slider - Generated Labels Plugin v1.0.8
  https://github.com/mzusin/toolcool-range-slider 
  MIT License        
  Copyright (c) 2022-present, Miriam Zusin                    
  */
  (() => {
    var E = s =>
      s == null ? false : typeof s == 'boolean' ? s : s.trim().toLowerCase() === 'true';
    window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];
    var F = 'min-label',
      H = 'max-label',
      y = '#1E293B',
      A = () => {
        let s = null,
          b = null,
          i = null,
          L,
          m = false,
          n = y,
          l = '',
          x,
          r = null,
          o = null,
          u = null,
          g = [],
          S = () => {
            var t;
            let e =
              (t = s == null ? void 0 : s.shadowRoot) == null
                ? void 0
                : t.querySelector('.range-slider-box');
            ((r = document.createElement('div')), r.classList.add('labels-row'), e.prepend(r));
          },
          v = e => {
            let t = document.createElement('label');
            return ((t.className = e), t.setAttribute('for', 'range-slider'), t);
          },
          C = () => {
            ((o = v(F)),
              (o.textContent = f(i == null ? void 0 : i.getTextMin(), l)),
              (u = v(H)),
              (u.textContent = f(i == null ? void 0 : i.getTextMax(), l)),
              b == null || b.before(o),
              b == null || b.after(u));
            let e = i == null ? void 0 : i.getValues();
            if (!!e)
              for (let t = 0; t < e.length; t++) {
                let a = v(`value${t + 1}-label generated-label`);
                ((a.textContent = f(e[t], l)), g.push(a), r == null || r.append(a));
              }
          },
          I = () => {
            for (let e of g) !e || e.remove();
            (o == null || o.remove(), u == null || u.remove(), r == null || r.remove(), (g = []));
          },
          M = e => {
            ((m = e), m ? (S(), C()) : I());
          },
          T = e => {
            n = e;
            for (let t of g) !t || (t.style.color = n != null ? n : y);
            (o && (o.style.color = n != null ? n : y), u && (u.style.color = n != null ? n : y));
          },
          h = e => {
            ((l = e), L && L());
          },
          P = () => {
            !i || !r || r.classList.toggle('is-reversed', i.isRightToLeft() || i.isBottomToTop());
          },
          f = (e, t) => {
            let a = `${(e != null ? e : '').toString()}${t}`;
            return !!x && typeof x == 'function' ? x(e) : a;
          };
        return {
          get name() {
            return 'Generated Labels';
          },
          init: (e, t, a, d) => {
            var c, p, w;
            ((s = e),
              (i = d),
              (b = (c = e.shadowRoot) == null ? void 0 : c.getElementById('range-slider')),
              (L = t),
              (n = (p = s.getAttribute('generate-labels-text-color')) != null ? p : y),
              (l = (w = s.getAttribute('generate-labels-units')) != null ? w : ''),
              M(E(s.getAttribute('generate-labels'))),
              P(),
              T(n));
          },
          update: e => {
            if (!(!m || !e.values)) {
              P();
              for (let t = 0; t < e.values.length; t++) {
                let a = e.values[t],
                  d = g[t];
                if (a === void 0 && !!d) {
                  (d.remove(), (g[t] = void 0));
                  continue;
                }
                if (a !== void 0 && !d) {
                  let c = v(`value${t + 1}-label generated-label`);
                  if (((c.textContent = f(a, l)), (g[t] = c), e.values.length <= 0))
                    r == null || r.append(c);
                  else if (t === 0) r == null || r.append(c);
                  else {
                    let p = g[t - 1];
                    p == null || p.after(c);
                  }
                  continue;
                }
                !d || (d.textContent = f(a, l));
              }
              (o && (o.textContent = f(e.textMin, l)),
                u && (u.textContent = f(e.textMax, l)),
                T(n));
            }
          },
          onAttrChange: (e, t) => {
            (e === 'generate-labels' && M(E(t)),
              e === 'generate-labels-text-color' && T(t),
              e === 'generate-labels-units' && h(t));
          },
          gettersAndSetters: [
            {
              name: 'generateLabels',
              attributes: {
                get() {
                  return m != null ? m : false;
                },
                set: e => {
                  M(E(e));
                },
              },
            },
            {
              name: 'textColor',
              attributes: {
                get() {
                  return n != null ? n : '';
                },
                set: e => {
                  T(e);
                },
              },
            },
            {
              name: 'generateLabelsTextColor',
              attributes: {
                get() {
                  return n != null ? n : '';
                },
                set: e => {
                  T(e);
                },
              },
            },
            {
              name: 'units',
              attributes: {
                get() {
                  return l != null ? l : '';
                },
                set: e => {
                  h(e);
                },
              },
            },
            {
              name: 'generateLabelsUnits',
              attributes: {
                get() {
                  return l != null ? l : '';
                },
                set: e => {
                  h(e);
                },
              },
            },
            {
              name: 'generateLabelsFormat',
              attributes: {
                get() {
                  return x;
                },
                set: e => {
                  ((x = e), L && L());
                },
              },
            },
          ],
          css: `
    .labels-row{
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    .is-reversed,
    .is-reversed + .row{
      flex-direction: row-reverse;
    }
    
    .type-vertical{
      position: relative;
    }
    
    .type-vertical .labels-row{
      flex-direction: column;
      position: absolute;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
    }
    
    .type-vertical .is-reversed,
    .type-vertical .is-reversed + .row{
      flex-direction: column-reverse;
    }
    
    .max-label,
    .min-label{
      margin: 0 1rem;
      width: 2rem;
      text-align: center;
      white-space: nowrap;
    }
    
    .generated-label{
      text-align: center;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
    `,
          destroy: I,
        };
      };
    window.tcRangeSliderPlugins.push(A);
  })();

  /* 
  Tool Cool Range Slider - Marks Plugin v1.0.1
  https://github.com/mzusin/toolcool-range-slider 
  MIT License        
  Copyright (c) 2022-present, Miriam Zusin                         
  */
  (() => {
    var R = (r, n, t, c, d) => {
        let a = n - r;
        return a === 0 ? t : ((c - t) * (d - r)) / a + t;
      },
      I = r => !isNaN(parseFloat(r)) && isFinite(r),
      g = (r, n) => (I(r) ? Number(r) : n);
    var h = r =>
      r == null ? false : typeof r == 'boolean' ? r : r.trim().toLowerCase() === 'true';
    window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];
    var p = 11,
      y = 11,
      A = () => {
        let r = null,
          n = null,
          t = null,
          c = null,
          d = null,
          a = false,
          s = p,
          u = y,
          L = () => {
            var l;
            let e =
              (l = r == null ? void 0 : r.shadowRoot) == null
                ? void 0
                : l.querySelector('#range-slider');
            ((t = document.createElement('div')),
              t.classList.add('marks'),
              (c = document.createElement('div')),
              c.classList.add('mark-points'),
              t.append(c),
              (d = document.createElement('div')),
              d.classList.add('mark-values'),
              t.append(d),
              e.append(t));
          },
          P = () => {
            !n || !t || t.classList.toggle('is-reversed', n.isRightToLeft() || n.isBottomToTop());
          },
          S = () => {
            var v;
            if (!t || !n) return;
            let e = n.getMin(),
              l = n.getMax(),
              E = n.getType() === 'vertical',
              f = n.isRightToLeft() || n.isBottomToTop();
            for (let i = 0; i < s; i++) {
              let o = document.createElement('div');
              o.classList.add('mark', `mark-${i}`);
              let m = s === 0 ? 0 : (i * 100) / (s - 1);
              (E
                ? f
                  ? (o.style.top = `${100 - m}%`)
                  : (o.style.top = `${m}%`)
                : f
                  ? (o.style.left = `${100 - m}%`)
                  : (o.style.left = `${m}%`),
                c == null || c.append(o));
            }
            let b = n.getData();
            for (let i = 0; i < u; i++) {
              let o = document.createElement('div');
              o.classList.add('mark-value', `mark-value-${i}`);
              let m = u === 0 ? 0 : (i * 100) / (u - 1),
                w = R(0, u - 1, e, l, i);
              ((o.textContent = (b ? ((v = b[Math.round(w)]) != null ? v : '') : w).toString()),
                E
                  ? f
                    ? (o.style.top = `${100 - m}%`)
                    : (o.style.top = `${m}%`)
                  : f
                    ? (o.style.left = `${100 - m}%`)
                    : (o.style.left = `${m}%`),
                d == null || d.append(o));
            }
          },
          k = (e, l) => {
            (T(), (s = e), (u = l), s <= 0 && (s = p), u <= 0 && (u = y), L(), S(), P());
          },
          C = e => {
            ((a = e), a ? (L(), S(), P()) : T());
          },
          x = e => {
            !t || t.style.setProperty('--marks-color', e);
          },
          M = e => {
            !t || t.style.setProperty('--values-color', e);
          },
          T = () => {
            t == null || t.remove();
          };
        return {
          get name() {
            return 'Marks';
          },
          init: (e, l, E, f) => {
            var b, v;
            ((n = f),
              (r = e),
              (a = h(r.getAttribute('marks'))),
              a &&
                (k(g(r.getAttribute('marks-count'), p), g(r.getAttribute('marks-values-count'), y)),
                x((b = r.getAttribute('marks-color')) != null ? b : '#cbd5e1'),
                M((v = r.getAttribute('marks-values-color')) != null ? v : '#475569')));
          },
          onAttrChange: (e, l) => {
            (e === 'marks' && C(h(l)),
              e === 'marks-count' && k(g(l, p), u),
              e === 'marks-values-count' && k(s, g(l, y)),
              e === 'marks-color' && x(l),
              e === 'marks-values-color' && M(l));
          },
          gettersAndSetters: [
            {
              name: 'marksEnabled',
              attributes: {
                get() {
                  return a != null ? a : false;
                },
                set: e => {
                  C(h(e));
                },
              },
            },
            {
              name: 'marksCount',
              attributes: {
                get() {
                  return s != null ? s : p;
                },
                set: e => {
                  k(g(e, p), u);
                },
              },
            },
            {
              name: 'marksValuesCount',
              attributes: {
                get() {
                  return s != null ? s : p;
                },
                set: e => {
                  k(s, g(e, y));
                },
              },
            },
            {
              name: 'marksColor',
              attributes: {
                get() {
                  return t == null ? void 0 : t.style.getPropertyValue('--marks-color');
                },
                set: e => {
                  x(e);
                },
              },
            },
            {
              name: 'markValuesColor',
              attributes: {
                get() {
                  return t == null ? void 0 : t.style.getPropertyValue('--values-color');
                },
                set: e => {
                  M(e);
                },
              },
            },
          ],
          destroy: T,
          css: `
:root{
  --marks-color: #cbd5e1;
  --values-color: #475569;
}
  
.marks{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  color: var(--values-color, #475569);
}

.type-vertical .marks{
  width: auto;
  height: 100%;
  top: 0;
  left: 100%;
  flex-direction: row;
}
    
.mark-points{
  width: 100%;
  height: 1rem;
  position: relative;
  margin-top: 5px;
}  

.type-vertical .mark-points {
  width: 1rem;
  height: 100%;
  margin-top: 0;
  margin-left: 5px;
}

.mark-values{
  width: 100%;
  height: 1rem;
  position: relative;
}

.type-vertical .mark-values {
  width: 1rem;
  height: 100%;
  margin-left: 0.7rem;
}

.mark{
  background: var(--marks-color, #cbd5e1);
  width: 2px;
  height: 5px;
  position: absolute;
  transform: translateX(-50%);
}  

.type-vertical .mark {
    width: 5px;
    height: 2px;
    transform: translateY(-50%);
}

.mark-value{
  position: absolute;
  transform: translateX(-50%);
}

.type-vertical .mark-value{
    transform: translateY(-50%);
}
    `,
        };
      };
    window.tcRangeSliderPlugins.push(A);
  })();

  /* 
  Tool Cool Range Slider v4.0.28
  https://github.com/mzusin/toolcool-range-slider
  MIT License        
  Copyright (c) 2022-present, Miriam Zusin          
  */
  (() => {
    var jn = Object.defineProperty;
    var Et = Math.pow,
      qn = (r, i, t) =>
        i in r
          ? jn(r, i, { enumerable: true, configurable: true, writable: true, value: t })
          : (r[i] = t);
    var ae = (r, i, t) => (qn(r, typeof i != 'symbol' ? i + '' : i, t), t);
    var St = (r, i) =>
      ` ${i && i.length > 0 ? i.map(t => `<link rel="stylesheet" href="${t}" />`).join('') : ''} <style> ${r} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`;
    var Tt =
      ':host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}';
    var le = 'pointers-overlap',
      ue = 'pointers-min-distance',
      de = 'pointers-max-distance',
      ce = 'range-dragging',
      pe = 'data',
      be = 'min',
      ge = 'max',
      fe = 'step',
      me = 'round',
      he = 'type',
      ve = 'theme',
      ye = 'rtl',
      xe = 'btt',
      Pe = 'disabled',
      Ee = 'keyboard-disabled',
      Se = 'mousewheel-disabled',
      At = 'slider-width',
      Mt = 'slider-height',
      wt = 'slider-radius',
      Dt = 'slider-bg',
      Lt = 'slider-bg-hover',
      Ct = 'slider-bg-fill',
      kt = 'pointer-width',
      Ht = 'pointer-height',
      It = 'pointer-radius',
      Rt = 'pointer-bg',
      Ot = 'pointer-bg-hover',
      Bt = 'pointer-bg-focus',
      Ft = 'pointer-shadow',
      Nt = 'pointer-shadow-hover',
      Vt = 'pointer-shadow-focus',
      Ut = 'pointer-border',
      zt = 'pointer-border-hover',
      Wt = 'pointer-border-focus',
      Te = 'animate-onclick',
      Kt = 'css-links';
    var I = 'vertical',
      V = 'horizontal';
    var we = (r, i, t, n, s) => {
        let d = i - r;
        return d === 0 ? t : ((n - t) * (s - r)) / d + t;
      },
      B = r => !isNaN(parseFloat(r)) && isFinite(r),
      E = (r, i) => (B(r) ? Number(r) : i),
      Qe = (r, i) => (i === 0 ? 0 : Math.round(r / i) * i),
      jt = (r, i = 1 / 0) => {
        if (i === 1 / 0) return r;
        let t = Et(10, i);
        return Math.round(r * t) / t;
      },
      D = r => (r == null ? false : typeof r == 'boolean' ? r : r.trim().toLowerCase() === 'true');
    var qt = (r, i) => {
        r.dispatchEvent(new CustomEvent('onPointerClicked', { detail: { $pointer: i } }));
      },
      Xt = (r, i) => {
        r.dispatchEvent(new CustomEvent('onMouseDown', { detail: { nativeEvent: i } }));
      },
      Gt = (r, i) => {
        r.dispatchEvent(new CustomEvent('onMouseUp', { detail: { nativeEvent: i } }));
      },
      Yt = (r, i) => {
        r.dispatchEvent(new CustomEvent('onKeyDown', { detail: { nativeEvent: i } }));
      },
      Zt = (r, i) => {
        if (!i || i.length <= 0) return;
        let t = i.map(s => (B(s) ? E(s, s) : s)),
          n = { values: t || [] };
        ((n.value = t[0]), (n.value0 = t[0]), (n.value1 = t[0]));
        for (let s = 1; s < t.length; s++) n[`value${s + 1}`] = t[s];
        r.dispatchEvent(new CustomEvent('change', { detail: n }));
      };
    var Y = (r, i, t) => {
      let n = 0,
        s,
        d,
        m,
        l,
        a = false,
        f = (g, S, L, P, A, k) => {
          let F = n;
          (L !== void 0 && g > L && (g = L), S !== void 0 && g < S && (g = S), (n = g));
          let R = n;
          return (
            ((P === I && k) || (P === V && A)) && (R = 100 - R),
            P === I ? (i.style.top = `${R}%`) : (i.style.left = `${R}%`),
            F !== n
          );
        },
        x = g => g === i || i.contains(g),
        p = (g, S, L, P) => {
          ((s = g), (d = S), (m = L), (l = P));
        },
        b = g => {
          ((a = g),
            i.classList.toggle('disabled', a),
            a
              ? i.setAttribute('aria-disabled', 'true')
              : i.hasAttribute('aria-disabled') && i.removeAttribute('aria-disabled'));
        },
        T = (g, S) => {
          S == null ? i.removeAttribute(g) : i.setAttribute(g, S);
        },
        C = g => i.getAttribute(g),
        c = g => {
          if (!a) {
            switch (g.key) {
              case 'ArrowLeft': {
                (g.preventDefault(), typeof s == 'function' && s(t));
                break;
              }
              case 'ArrowRight': {
                (g.preventDefault(), typeof d == 'function' && d(t));
                break;
              }
              case 'ArrowUp': {
                (g.preventDefault(), typeof m == 'function' && m(t));
                break;
              }
              case 'ArrowDown': {
                (g.preventDefault(), typeof l == 'function' && l(t));
                break;
              }
            }
            Yt(r, g);
          }
        },
        h = () => {
          a || qt(r, i);
        };
      return (
        (i.className = `pointer pointer-${t}`),
        i.addEventListener('keydown', c),
        i.addEventListener('click', h),
        {
          $pointer: i,
          get percent() {
            return n;
          },
          get disabled() {
            return a;
          },
          set disabled(g) {
            b(g);
          },
          updatePosition: f,
          isClicked: x,
          setCallbacks: p,
          setAttr: T,
          getAttr: C,
          destroy: () => {
            (i.removeEventListener('keydown', c), i.removeEventListener('click', h), i.remove());
          },
        }
      );
    };
    var Jt = r => {
        if (r == null) return;
        if (Array.isArray(r)) return r;
        if (r.trim() === '') return;
        let t = r.split(','),
          n = [],
          s = true;
        for (let d = 0; d < t.length; d++) {
          let m = t[d].trim();
          m !== '' && (n.push(m), B(m) || (s = false));
        }
        return s ? n.map(d => Number(d)) : n;
      },
      Qt = (r, i) =>
        i ? i.findIndex(t => t === r || t.toString().trim() === r.toString().trim()) : -1;
    var _t = r => ({
      updatePosition: (t, n, s, d) => {
        if (n.length <= 0) return;
        let m = n.length === 1,
          l = n[0],
          a = n[n.length - 1];
        t === I
          ? (r.style.removeProperty('width'),
            r.style.removeProperty('right'),
            r.style.removeProperty('left'),
            m ? (r.style.height = `${l}%`) : (r.style.height = `${Math.abs(l - a)}%`),
            d
              ? ((r.style.bottom = '0%'),
                m ? (r.style.top = 'auto') : (r.style.top = `${Math.min(100 - a, 100 - l)}%`))
              : ((r.style.bottom = 'auto'),
                m ? (r.style.top = '0%') : (r.style.top = `${Math.min(l, a)}%`)))
          : (r.style.removeProperty('height'),
            r.style.removeProperty('top'),
            r.style.removeProperty('bottom'),
            m ? (r.style.width = `${l}%`) : (r.style.width = `${Math.abs(l - a)}%`),
            s
              ? ((r.style.right = '0%'),
                m ? (r.style.left = 'auto') : (r.style.left = `${Math.min(100 - a, 100 - l)}%`))
              : ((r.style.right = 'auto'),
                m ? (r.style.left = '0%') : (r.style.left = `${Math.min(l, a)}%`)));
      },
    });
    var _e = '--animate-onclick',
      $t = '--width',
      en = '--height',
      tn = '--panel-bg-border-radius',
      nn = '--panel-bg',
      rn = '--panel-bg-hover',
      on = '--panel-bg-fill',
      sn = '--pointer-width',
      an = '--pointer-height',
      ln = '--pointer-border-radius',
      un = '--pointer-bg',
      dn = '--pointer-bg-hover',
      cn = '--pointer-bg-focus',
      pn = '--pointer-shadow',
      bn = '--pointer-shadow-hover',
      gn = '--pointer-shadow-focus',
      fn = '--pointer-border',
      mn = '--pointer-border-hover',
      hn = '--pointer-border-focus';
    var q = (r, i, t) => {
        let n = new Map();
        for (let s of r.attributes) {
          let d = s.nodeName.trim().toLowerCase();
          if (!i.test(d)) continue;
          let l = d.replace(/\D/g, '').trim(),
            a = l === '' || l === '0' || l === '1' ? 0 : E(l, 0) - 1,
            f = t && typeof t == 'function' ? t(s.value) : s.value;
          n.set(a, f);
        }
        return n;
      },
      yn = r => {
        if (!r) return null;
        let i = r.getAttribute(Kt);
        if (!i) return null;
        let t = i.split(';'),
          n = [];
        for (let s of t) s.trim() !== '' && n.push(s.trim());
        return n;
      };
    var $e = [
        [$t, At, 'sliderWidth', null],
        [en, Mt, 'sliderHeight', null],
        [tn, wt, 'sliderRadius', null],
        [nn, Dt, 'sliderBg', null],
        [rn, Lt, 'sliderBgHover', null],
        [on, Ct, 'sliderBgFill', null],
        [sn, kt, 'pointer#Width', /^pointer([0-9]*)-width$/],
        [an, Ht, 'pointer#Height', /^pointer([0-9]*)-height$/],
        [ln, It, 'pointer#Radius', /^pointer([0-9]*)-radius$/],
        [un, Rt, 'pointer#Bg', /^pointer([0-9]*)-bg$/],
        [dn, Ot, 'pointer#BgHover', /^pointer([0-9]*)-bg-hover$/],
        [cn, Bt, 'pointer#BgFocus', /^pointer([0-9]*)-bg-focus$/],
        [pn, Ft, 'pointer#Shadow', /^pointer([0-9]*)-shadow$/],
        [bn, Nt, 'pointer#ShadowHover', /^pointer([0-9]*)-shadow-hover$/],
        [gn, Vt, 'pointer#ShadowFocus', /^pointer([0-9]*)-shadow-focus$/],
        [fn, Ut, 'pointer#Border', /^pointer([0-9]*)-border$/],
        [mn, zt, 'pointer#BorderHover', /^pointer([0-9]*)-border-hover$/],
        [hn, Wt, 'pointer#BorderFocus', /^pointer([0-9]*)-border-focus$/],
      ],
      xn = (r, i, t) => {
        let n = null,
          s = [],
          d = new Map(),
          m = (c, h = i) => {
            let w = [...h.classList];
            for (let g of w) g.startsWith(c) && i.classList.remove(g);
          },
          l = () => {
            m('shape');
            let c = i.querySelectorAll('.pointer');
            for (let h of c) m('shape', h);
          },
          a = c => {
            ((n = c), m('theme-'), typeof c == 'string' && i.classList.add(`theme-${c}`));
          },
          f = () => {
            if ((l(), !(s.length <= 0))) {
              i.classList.add('shape', `shape-${s[0]}`);
              for (let c = 1; c < s.length; c++) {
                let h = s[c];
                if (!h) continue;
                let w = i.querySelector(`.pointer-${c}`);
                !w || w.classList.add('shape', `shape-${h}`);
              }
            }
          },
          x = (c, h) => {
            ((s[c] = h), f());
          },
          p = () => {
            l();
            let c = q(r, /^pointer([0-9]*)-shape$/);
            if (!(c.size <= 0)) {
              for (let h of c) {
                let w = h[0];
                s[w] = h[1];
              }
              f();
            }
          },
          b = (c, h) => `${c}-${h}`,
          T = (c, h, w) => {
            let g = t[w];
            if (!g) return;
            let S = w === 0 ? i : g.$pointer;
            if (h == null) {
              (d.has(b(c, w)) && d.delete(b(c, w)), S.style.removeProperty(c));
              return;
            }
            (d.set(b(c, w), h), S.style.setProperty(c, h));
          },
          C = (c, h) => d.get(b(c, h));
        return (
          (() => {
            for (let c of $e) {
              let [h, w, g, S] = c;
              if (S) {
                let P = q(r, S);
                for (let A of P) {
                  let k = A[0],
                    F = A[1];
                  T(h, F, k);
                }
              } else {
                let P = r.getAttribute(w);
                T(h, P, 0);
              }
              let L = [];
              if (g.indexOf('#') === -1) L.push([g, 0]);
              else {
                (L.push([g.replace('#', ''), 0]),
                  L.push([g.replace('#', '0'), 0]),
                  L.push([g.replace('#', '1'), 0]));
                for (let P = 1; P < t.length; P++) L.push([g.replace('#', (P + 1).toString()), P]);
              }
              for (let P of L)
                try {
                  let A = P[0],
                    k = P[1];
                  Object.prototype.hasOwnProperty.call(r, A) ||
                    Object.defineProperty(r, A, {
                      get() {
                        return C(h, k);
                      },
                      set: F => {
                        T(h, F, k);
                      },
                    });
                } catch (A) {
                  console.error(A);
                }
            }
            (a(r.getAttribute(ve)), p());
          })(),
          {
            setStyle: T,
            getStyle: C,
            get theme() {
              return n;
            },
            set theme(c) {
              a(c);
            },
            get pointerShapes() {
              return s;
            },
            setPointerShape: x,
          }
        );
      };
    var K = 'animate-on-click',
      et = 'range-dragging';
    var Pn = (r, i, t, n) => {
      let s = [],
        d = p => {
          for (let b of s) b.update && typeof b.update == 'function' && b.update(p);
        },
        m = () => {
          for (let p of s) p.destroy && typeof p.destroy == 'function' && p.destroy();
        },
        l = (p, b) => {
          for (let T of s)
            T.onAttrChange && typeof T.onAttrChange == 'function' && T.onAttrChange(p, b);
        },
        a = p => {
          if (!!p.gettersAndSetters) {
            for (let b of p.gettersAndSetters)
              if (!(!b.name || !b.attributes))
                try {
                  Object.prototype.hasOwnProperty.call(r, b.name) ||
                    Object.defineProperty(r, b.name, b.attributes);
                } catch (T) {
                  console.error('defineSettersGetters error:', T);
                }
          }
        },
        f = p => {
          var T;
          if (!p.css) return;
          let b = (T = r.shadowRoot) == null ? void 0 : T.querySelector('style');
          !b || (b.innerHTML += p.css);
        };
      return {
        init: () => {
          if (!!window.tcRangeSliderPlugins)
            for (let p of window.tcRangeSliderPlugins) {
              let b = p();
              (s.push(b),
                b.init && typeof b.init == 'function' && (b.init(r, i, t, n), a(b), f(b)));
            }
        },
        update: d,
        onAttrChange: l,
        destroy: m,
      };
    };
    var Yn = 10,
      En = 20,
      Sn = (r, i) => {
        let t = new Map(),
          n = /^value([0-9]*)$/;
        for (let l of r.attributes) {
          let a = l.nodeName.trim().toLowerCase();
          if (!n.test(a)) continue;
          let x = a.replace('value', '').trim(),
            p = x === '' || x === '0' || x === '1' ? 0 : E(x, 0) - 1,
            b = B(l.value) ? E(l.value, 0) : l.value;
          t.set(p, b);
        }
        let s = Math.max(...Array.from(t.keys())),
          d = [];
        d.push([Y(r, i, 0), t.get(0)]);
        let m = i;
        for (let l = 1; l <= s; l++) {
          let a = i.cloneNode(true);
          (m.after(a), (m = a), d.push([Y(r, a, l), t.get(l)]));
        }
        return d;
      },
      tt = (r, i, t, n, s, d, m) => {
        try {
          (Object.defineProperty(r, n, {
            configurable: !0,
            get() {
              if (!i) return;
              let l = i.pointers[t];
              if (!l) return;
              let a = i.getTextValue(l.percent);
              return B(a) ? E(a, a) : a;
            },
            set: l => {
              i.pointers[t] ? i == null || i.setValue(l, t) : i == null || i.addPointer(l);
            },
          }),
            Object.defineProperty(r, s, {
              configurable: !0,
              get() {
                var l, a;
                return (a =
                  (l = i == null ? void 0 : i.pointers[t]) == null
                    ? void 0
                    : l.getAttr('aria-label')) != null
                  ? a
                  : void 0;
              },
              set: l => {
                !i || i.setAriaLabel(t, l);
              },
            }),
            Object.defineProperty(r, d, {
              configurable: !0,
              get() {
                var l, a;
                return (a =
                  (l = i == null ? void 0 : i.styles) == null ? void 0 : l.pointerShapes[t]) != null
                  ? a
                  : null;
              },
              set: l => {
                !i || !i.styles || i.styles.setPointerShape(t, l);
              },
            }),
            Object.defineProperty(r, m, {
              configurable: !0,
              get() {
                var l;
                return (l = i == null ? void 0 : i.pointers[t].disabled) != null ? l : !1;
              },
              set: l => {
                if (!i) return;
                let a = i == null ? void 0 : i.pointers[t];
                !a || (a.disabled = l);
              },
            }));
        } catch (l) {
          console.error(l);
        }
      },
      Tn = (r, i) => {
        let t = [
          ['value', 'ariaLabel', 'pointerShape', 'pointerDisabled', 0],
          ['value0', 'ariaLabel0', 'pointerShape0', 'pointer0Disabled', 0],
          ['value1', 'ariaLabel1', 'pointerShape1', 'pointer1Disabled', 0],
        ];
        for (let n = 2; n < Yn; n++)
          t.push([`value${n}`, `ariaLabel${n}`, `pointer${n}Shape`, `pointer${n}Disabled`, n - 1]);
        for (let n of t) tt(r, i, n[4], n[0], n[1], n[2], n[3]);
      },
      nt = (r, i, t) => {
        var s;
        let n = (s = t.shadowRoot) == null ? void 0 : s.querySelector('.container');
        if (!!n) for (let d of r) i ? n.prepend(d.$pointer) : n.append(d.$pointer);
      },
      An = (r, i) => {
        if (!(!i || r.length <= 1)) {
          for (let t of r) t.$pointer.style.zIndex = En.toString();
          i.$pointer.style.zIndex = (En * 2).toString();
        }
      };
    var rt = 0,
      Z = 100,
      U = 2,
      Mn = '0.3s',
      wn = (r, i, t) => {
        let n = t.map(e => e[0]),
          s = null,
          d = null,
          m = null,
          l = null,
          a = rt,
          f = Z,
          x,
          p,
          b = V,
          T = U,
          C = false,
          c = false,
          h = false,
          w = 0,
          g = 1 / 0,
          S = false,
          L,
          P,
          A = false,
          k = false,
          F = false,
          R = Mn,
          ot = [],
          st = e => {
            A ||
              (e.preventDefault && e.preventDefault(),
              z(e),
              window.addEventListener('mousemove', z),
              window.addEventListener('mouseup', J),
              Xt(r, e));
          },
          J = e => {
            A ||
              ((L = void 0),
              (P = void 0),
              window.removeEventListener('mousemove', z),
              window.removeEventListener('mouseup', J),
              R && i.classList.add(K),
              Gt(r, e));
          },
          Ln = (e, o) => {
            if (n.length <= 0) return;
            if (n.length === 1) return (n[0].isClicked(e) && R && i.classList.remove(K), n[0]);
            let u = kn(e);
            if (S) {
              let v = o,
                O = _(v);
              (O !== void 0 && (v = Qe(v, O)),
                u
                  ? ((L = v), (P = 0), R && i.classList.remove(K))
                  : L !== void 0 && ((P = v - L), (L = v)));
            }
            if (!Cn(e) && !u) {
              for (let v of n)
                if (!(!v.isClicked(e) || v.disabled)) return (R && i.classList.remove(K), v);
              for (let v of n) if (s === v) return v;
            }
            let y = 1 / 0,
              M = null;
            for (let v of n) {
              if (v.disabled) continue;
              let O = Math.abs(o - v.percent);
              O < y && ((y = O), (M = v));
            }
            return M;
          },
          at = () => n.findIndex(e => s === e && !e.disabled),
          z = e => {
            let o;
            if (b === I) {
              let { height: y, top: M } = i.getBoundingClientRect(),
                v = e.type.indexOf('mouse') !== -1 ? e.clientY : e.touches[0].clientY;
              o = (Math.min(Math.max(0, v - M), y) * 100) / y;
            } else {
              let { width: y, left: M } = i.getBoundingClientRect(),
                v = e.type.indexOf('mouse') !== -1 ? e.clientX : e.touches[0].clientX;
              o = (Math.min(Math.max(0, v - M), y) * 100) / y;
            }
            if (
              ((C || c) && (o = 100 - o),
              (s = Ln(e.target, o)),
              s && An(n, s),
              S && n.length > 1 && P !== void 0)
            ) {
              let y = n[0],
                M = n[n.length - 1],
                v = y.percent + P < 0,
                O = M.percent + P > 100;
              if (v || O) return;
              for (let se = 0; se < n.length; se++) H(se, n[se].percent + P);
              return;
            }
            let u = at();
            u !== -1 && (H(u, o), s == null || s.$pointer.focus());
          },
          Q = e => {
            if (A || document.activeElement !== r || (s == null ? void 0 : s.disabled)) return;
            (e.stopPropagation(), e.preventDefault());
            let o = e.deltaY < 0,
              u = C || c,
              y = o ? !u : u,
              M = at();
            M !== -1 && (y ? X(M, n[M].percent) : G(M, n[M].percent));
          },
          lt = e => {
            A ||
              k ||
              (b === I ? (c ? H(e, 100) : H(e, 0)) : C ? G(e, n[e].percent) : X(e, n[e].percent));
          },
          ut = e => {
            A ||
              k ||
              (b === I ? (c ? H(e, 0) : H(e, 100)) : C ? X(e, n[e].percent) : G(e, n[e].percent));
          },
          dt = e => {
            A ||
              k ||
              (b === I ? (c ? G(e, n[e].percent) : X(e, n[e].percent)) : C ? H(e, 100) : H(e, 0));
          },
          ct = e => {
            A ||
              k ||
              (b === I ? (c ? X(e, n[e].percent) : G(e, n[e].percent)) : C ? H(e, 0) : H(e, 100));
          },
          Cn = e => e.classList.contains('panel'),
          kn = e => e.classList.contains('panel-fill'),
          X = (e, o) => {
            if (o === void 0) return;
            let u = _(o);
            (u == null && (u = 1), (o -= u), o < 0 && (o = 0), H(e, o));
          },
          G = (e, o) => {
            if (o === void 0) return;
            let u = _(o);
            (u == null && (u = 1), (o += u), o > 100 && (o = 100), H(e, o));
          },
          W = () => {
            !l ||
              l.update({
                percents: pt(),
                values: bt(),
                $pointers: gt(),
                min: ft(),
                max: mt(),
                data: Ce(),
                step: Le(),
                round: He(),
                type: ke(),
                textMin: $(),
                textMax: ee(),
                rightToLeft: Oe(),
                bottomToTop: Be(),
                pointersOverlap: Ue(),
                pointersMinDistance: Ie(),
                pointersMaxDistance: Re(),
                rangeDragging: ze(),
                disabled: Fe(),
                keyboardDisabled: Ne(),
                mousewheelDisabled: Ve(),
              });
          },
          Hn = () => {
            W();
          },
          In = e => {
            if (!(h || n.length <= 1 || f === a))
              if (e === 0) {
                let o = (g * 100) / (f - a);
                return Math.max(0, n[e + 1].percent - o);
              } else {
                let o = (w * 100) / (f - a);
                return Math.min(n[e - 1].percent + o, 100);
              }
          },
          Rn = e => {
            if (!(h || n.length <= 1 || f === a))
              if (e === n.length - 1) {
                let o = (g * 100) / (f - a);
                return Math.min(n[e - 1].percent + o, 100);
              } else {
                let o = (w * 100) / (f - a);
                return Math.max(0, n[e + 1].percent - o);
              }
          },
          _ = e => {
            let o;
            if (typeof x == 'function') {
              let u = we(0, 100, a, f, e);
              o = x(u, e);
            } else o = x;
            if (B(o)) {
              let u = f - a;
              return ((o = u === 0 ? 0 : (o * 100) / u), o);
            }
          },
          j = e => {
            if (e === void 0) return;
            let o = we(0, 100, a, f, e);
            return p !== void 0 ? p[Math.round(o)] : jt(o, T);
          },
          $ = () => (p !== void 0 ? p[a] : a),
          ee = () => (p !== void 0 ? p[f] : f),
          Le = () => x,
          On = e => {
            var o;
            return e <= 0 || h ? $() : (o = j(n[e - 1].percent)) != null ? o : '';
          },
          Bn = e => {
            var o;
            return n.length <= 1 || e >= n.length - 1 || h
              ? ee()
              : (o = j(n[e + 1].percent)) != null
                ? o
                : '';
          },
          pt = () => n.map(e => e.percent),
          bt = () => n.map(e => j(e.percent)),
          gt = () => n.map(e => e.$pointer),
          ft = () => a,
          mt = () => f,
          Ce = () => p,
          ke = () => b,
          He = () => T,
          Ie = () => w,
          Re = () => g,
          Fn = e => ot[e],
          Oe = () => C,
          Be = () => c,
          Fe = () => A,
          Ne = () => k,
          Ve = () => F,
          Ue = () => h,
          ze = () => S,
          H = (e, o) => {
            if (o === void 0) return;
            let u = _(o);
            u !== void 0 && (o = Qe(o, u));
            let y = n[e];
            if (!y) return;
            let M = y.updatePosition(o, In(e), Rn(e), b, C, c);
            (d == null ||
              d.updatePosition(
                b,
                n.map(v => v.percent),
                C,
                c,
              ),
              W());
            for (let v of n) {
              let O = j(v.percent);
              O !== void 0 &&
                (v.setAttr('aria-valuenow', O.toString()),
                v.setAttr('aria-valuetext', O.toString()));
            }
            (Vn(),
              M &&
                Zt(
                  r,
                  n.map(v => j(v.percent)),
                ));
          },
          N = () => {
            for (let e = 0; e < n.length; e++) H(e, n[e].percent);
          },
          Nn = (e, o) => {
            ((a = p !== void 0 ? 0 : E(e, rt)),
              (f = p !== void 0 ? p.length - 1 : E(o, Z)),
              te(a),
              ne(f));
          },
          Vn = () => {
            var e, o;
            for (let u = 0; u < n.length; u++) {
              let y = n[u];
              (y.setAttr('aria-valuemin', ((e = On(u)) != null ? e : '').toString()),
                y.setAttr('aria-valuemax', ((o = Bn(u)) != null ? o : '').toString()));
            }
          },
          te = e => {
            ((a = E(e, rt)), a > f && (f = a + Z), N());
          },
          ne = e => {
            ((f = E(e, Z)), f < a && (f = a + Z), N());
          },
          ht = e => {
            h = true;
            for (let o = 0; o < e.length; o++) re(e[o], o);
            h = false;
            for (let o = 0; o < e.length; o++) re(e[o], o);
          },
          re = (e, o) => {
            let u;
            p !== void 0
              ? ((u = e == null ? 0 : Qt(e, p)), u === -1 && (u = 0))
              : ((u = E(e, a)), u < a && (u = a), u > f && (u = f));
            let y = we(a, f, 0, 100, u);
            H(o, y);
          },
          ie = e => {
            if (e == null) {
              x = void 0;
              return;
            }
            if (typeof e == 'function') {
              ((x = e), N());
              return;
            }
            if (B(e)) {
              x = E(e, 1);
              let o = Math.abs(f - a);
              (x > o && (x = void 0), N());
              return;
            }
            x = void 0;
          },
          We = e => {
            ((h = e), N());
          },
          Ke = e => {
            ((!B(e) || e < 0) && (e = 0), (w = e));
          },
          je = e => {
            ((!B(e) || e < 0) && (e = 1 / 0), (g = e));
          },
          qe = e => {
            ((A = e),
              i.classList.toggle('disabled', A),
              A
                ? i.setAttribute('aria-disabled', 'true')
                : i.hasAttribute('aria-disabled') && i.removeAttribute('aria-disabled'));
          },
          vt = e => {
            k = e;
          },
          yt = e => {
            ((F = e),
              F
                ? document.removeEventListener('wheel', Q)
                : document.addEventListener('wheel', Q, { passive: false }));
          },
          Xe = e => {
            if (e == null) {
              p = void 0;
              return;
            }
            if (((p = Jt(e)), p === void 0 || p.length <= 0)) {
              p = void 0;
              return;
            }
            (te(0), ne(p.length - 1), x === void 0 && ie(1));
          },
          Ge = e => {
            var y;
            typeof e == 'string' ? (b = e.trim().toLowerCase() === I ? I : V) : (b = V);
            let o = (y = r.shadowRoot) == null ? void 0 : y.querySelector('.range-slider-box');
            if (!o) return;
            ((o.className = `range-slider-box type-${b}`), N());
            let u = b === I ? 'vertical' : 'horizontal';
            for (let M of n) M.setAttr('aria-orientation', u);
          },
          Ye = e => {
            ((C = e), n.length > 1 && nt(n, C, r), N(), W());
          },
          Ze = e => {
            ((c = e), n.length > 1 && nt(n, c, r), N(), W());
          },
          Je = e => {
            ((T = E(e, U)), T < 0 && (T = U), W());
          },
          xt = e => {
            e == null || e.toString().trim().toLowerCase() === 'false'
              ? ((R = void 0), i.style.removeProperty(_e), i.classList.remove(K))
              : ((R = e.toString()), i.style.setProperty(_e, R), i.classList.add(K));
          },
          Pt = (e, o) => {
            let u = n[e];
            !u || (u.setAttr('aria-label', o), (ot[e] = o));
          },
          oe = e => {
            if (((L = void 0), n.length <= 1)) {
              ((S = false), i.classList.remove(et));
              return;
            }
            ((S = e), i.classList.toggle(et, S));
          },
          Un = () => {
            (qe(D(r.getAttribute(Pe))), (k = D(r.getAttribute(Ee))), (F = D(r.getAttribute(Se))));
            let e = q(r, /^pointer([0-9]*)-disabled$/, o => D(o));
            for (let o of e) {
              let u = o[0];
              !n[u] || (n[u].disabled = o[1]);
            }
          },
          zn = () => {
            let e = q(r, /^aria-label([0-9]*)$/);
            for (let o of e) {
              let u = o[0];
              Pt(u, o[1]);
            }
          },
          Wn = e => {
            let o = n.length,
              u = n[o - 1].$pointer,
              y = u.cloneNode(true);
            u.after(y);
            let M = Y(r, y, o);
            return (M.setCallbacks(lt, ut, dt, ct), n.push(M), re(e, o), N(), W(), o);
          },
          Kn = () => {
            let e = n.length,
              o = n[e - 1];
            return o ? (o.destroy(), n.pop(), n.length <= 1 && oe(false), N(), W(), e - 1) : -1;
          };
        return (
          (() => {
            var o, u;
            for (let y of n) y.setCallbacks(lt, ut, dt, ct);
            let e = (o = r.shadowRoot) == null ? void 0 : o.querySelector('.panel-fill');
            (e && (d = _t(e)),
              Ge(r.getAttribute(he)),
              Ye(D(r.getAttribute(ye))),
              Ze(D(r.getAttribute(xe))),
              Nn(r.getAttribute(be), r.getAttribute(ge)),
              ie(r.getAttribute(fe)),
              Xe(r.getAttribute(pe)),
              ht(t.map(y => y[1])),
              We(D(r.getAttribute(le))),
              Ke(E(r.getAttribute(ue), 0)),
              je(E(r.getAttribute(de), 1 / 0)),
              oe(D(r.getAttribute(ce))),
              Je(E(r.getAttribute(me), U)),
              Un(),
              zn(),
              (m = xn(r, i, n)),
              xt((u = r.getAttribute(Te)) != null ? u : Mn),
              i.addEventListener('mousedown', st),
              i.addEventListener('mouseup', J),
              i.addEventListener('touchmove', z),
              i.addEventListener('touchstart', z),
              F || document.addEventListener('wheel', Q, { passive: false }),
              (l = Pn(
                r,
                Hn,
                {
                  setValues: ht,
                  setMin: te,
                  setMax: ne,
                  setStep: ie,
                  setPointersOverlap: We,
                  setPointersMinDistance: Ke,
                  setPointersMaxDistance: je,
                  setDisabled: qe,
                  setType: Ge,
                  setRightToLeft: Ye,
                  setBottomToTop: Ze,
                  setRound: Je,
                  setKeyboardDisabled: vt,
                  setMousewheelDisabled: yt,
                  setRangeDragging: oe,
                  setData: Xe,
                },
                {
                  getPercents: pt,
                  getValues: bt,
                  getPointerElements: gt,
                  getMin: ft,
                  getMax: mt,
                  getStep: Le,
                  getData: Ce,
                  getType: ke,
                  getRound: He,
                  getTextMin: $,
                  getTextMax: ee,
                  isRightToLeft: Oe,
                  isBottomToTop: Be,
                  isDisabled: Fe,
                  isKeyboardDisabled: Ne,
                  isMousewheelDisabled: Ve,
                  isPointersOverlap: Ue,
                  isRangeDraggingEnabled: ze,
                  getPointersMinDistance: Ie,
                  getPointersMaxDistance: Re,
                },
              )),
              l.init());
          })(),
          {
            get pointers() {
              return n;
            },
            get styles() {
              return m;
            },
            get pluginsManager() {
              return l;
            },
            get min() {
              return $();
            },
            get max() {
              return ee();
            },
            get step() {
              return Le();
            },
            get pointersOverlap() {
              return Ue();
            },
            set pointersOverlap(e) {
              We(e);
            },
            get pointersMinDistance() {
              return Ie();
            },
            set pointersMinDistance(e) {
              Ke(e);
            },
            get pointersMaxDistance() {
              return Re();
            },
            set pointersMaxDistance(e) {
              je(e);
            },
            get disabled() {
              return Fe();
            },
            set disabled(e) {
              qe(e);
            },
            get data() {
              return Ce();
            },
            get type() {
              return ke();
            },
            set type(e) {
              Ge(e);
            },
            get rightToLeft() {
              return Oe();
            },
            set rightToLeft(e) {
              Ye(e);
            },
            get bottomToTop() {
              return Be();
            },
            set bottomToTop(e) {
              Ze(e);
            },
            get round() {
              return He();
            },
            set round(e) {
              Je(e);
            },
            get animateOnClick() {
              return R;
            },
            set animateOnClick(e) {
              xt(e);
            },
            get keyboardDisabled() {
              return Ne();
            },
            set keyboardDisabled(e) {
              vt(e);
            },
            get mousewheelDisabled() {
              return Ve();
            },
            set mousewheelDisabled(e) {
              yt(e);
            },
            get rangeDragging() {
              return ze();
            },
            set rangeDragging(e) {
              oe(e);
            },
            setMin: te,
            setMax: ne,
            setValue: re,
            setStep: ie,
            setData: Xe,
            getTextValue: j,
            setAriaLabel: Pt,
            getAriaLabel: Fn,
            addPointer: Wn,
            removePointer: Kn,
            destroy: () => {
              (i.removeEventListener('mousedown', st),
                i.removeEventListener('mouseup', J),
                i.removeEventListener('touchmove', z),
                i.removeEventListener('touchstart', z),
                document.removeEventListener('wheel', Q));
              for (let e of n) e.destroy();
              l == null || l.destroy();
            },
          }
        );
      };
    var Dn = (r, i, t) => {
      let n = $e.find(([l, a, f, x]) => a.replace('#', '') === i.replace(/\d+/g, ''));
      if (n && r.styles) {
        let [l, a, f, x] = n,
          p = i.replace(/\D/g, '').trim(),
          b = p === '' || p === '0' || p === '1' ? 0 : E(p, 0) - 1;
        r.styles.setStyle(l, t, b);
        return;
      }
      switch ((r && r.pluginsManager && r.pluginsManager.onAttrChange(i, t), i)) {
        case be: {
          r.setMin(t);
          break;
        }
        case ge: {
          r.setMax(t);
          break;
        }
        case fe: {
          r.setStep(t);
          break;
        }
        case le: {
          r.pointersOverlap = D(t);
          break;
        }
        case ue: {
          r.pointersMinDistance = E(t, 0);
          break;
        }
        case ce: {
          r.rangeDragging = D(t);
          break;
        }
        case de: {
          r.pointersMaxDistance = E(t, 1 / 0);
          break;
        }
        case Pe: {
          r.disabled = D(t);
          break;
        }
        case Ee: {
          r.keyboardDisabled = D(t);
          break;
        }
        case Se: {
          r.mousewheelDisabled = D(t);
          break;
        }
        case pe: {
          r.setData(t);
          break;
        }
        case he: {
          r.type = t;
          break;
        }
        case ye: {
          r.rightToLeft = D(t);
          break;
        }
        case xe: {
          r.bottomToTop = D(t);
          break;
        }
        case me: {
          r.round = E(t, U);
          break;
        }
        case ve: {
          r.styles && (r.styles.theme = t);
          break;
        }
        case Te: {
          r.animateOnClick = t;
          break;
        }
      }
      let s = null;
      if (
        (/^value([0-9]*)$/.test(i) && (s = 'value'),
        /^pointer([0-9]*)-disabled$/.test(i) && (s = 'pointer-disabled'),
        /^aria-label([0-9]*)$/.test(i) && (s = 'aria-label'),
        /^pointer([0-9]*)-shape$/.test(i) && (s = 'pointer-shape'),
        !s)
      )
        return;
      let d = i.replace(/\D/g, '').trim(),
        m = d === '' || d === '0' || d === '1' ? 0 : E(d, 0) - 1;
      switch (s) {
        case 'value': {
          r.setValue(t, m);
          break;
        }
        case 'pointer-disabled': {
          let l = r == null ? void 0 : r.pointers[m];
          if (!l) return;
          l.disabled = D(t);
          break;
        }
        case 'aria-label': {
          r.setAriaLabel(m, t);
          break;
        }
        case 'pointer-shape': {
          r.styles && r.styles.setPointerShape(m, t);
          break;
        }
      }
    };
    var it = class extends HTMLElement {
        constructor() {
          super();
          ae(this, 'slider');
          ae(this, '_externalCSSList', []);
          ae(this, '_observer', null);
          this.attachShadow({ mode: 'open' });
        }
        set step(t) {
          this.slider && this.slider.setStep(t);
        }
        get step() {
          var t;
          return (t = this.slider) == null ? void 0 : t.step;
        }
        set disabled(t) {
          this.slider && (this.slider.disabled = t);
        }
        get disabled() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.disabled) != null ? n : false;
        }
        set data(t) {
          var n;
          (n = this.slider) == null || n.setData(t);
        }
        get data() {
          var t;
          return (t = this.slider) == null ? void 0 : t.data;
        }
        set min(t) {
          var n;
          (n = this.slider) == null || n.setMin(t);
        }
        get min() {
          var t;
          return (t = this.slider) == null ? void 0 : t.min;
        }
        set max(t) {
          var n;
          (n = this.slider) == null || n.setMax(t);
        }
        get max() {
          var t;
          return (t = this.slider) == null ? void 0 : t.max;
        }
        set round(t) {
          !this.slider || (this.slider.round = t);
        }
        get round() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.round) != null ? n : U;
        }
        set type(t) {
          !this.slider || (this.slider.type = t != null ? t : V);
        }
        get type() {
          var t;
          return ((t = this.slider) == null ? void 0 : t.type) || V;
        }
        set pointersOverlap(t) {
          !this.slider || (this.slider.pointersOverlap = t);
        }
        get pointersOverlap() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.pointersOverlap) != null ? n : false;
        }
        set pointersMinDistance(t) {
          !this.slider || (this.slider.pointersMinDistance = t);
        }
        get pointersMinDistance() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.pointersMinDistance) != null ? n : 0;
        }
        set pointersMaxDistance(t) {
          !this.slider || (this.slider.pointersMaxDistance = t);
        }
        get pointersMaxDistance() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.pointersMaxDistance) != null
            ? n
            : 1 / 0;
        }
        set theme(t) {
          !this.slider || !this.slider.styles || (this.slider.styles.theme = t);
        }
        get theme() {
          var t, n, s;
          return (s =
            (n = (t = this.slider) == null ? void 0 : t.styles) == null ? void 0 : n.theme) != null
            ? s
            : null;
        }
        set rtl(t) {
          !this.slider || (this.slider.rightToLeft = t);
        }
        get rtl() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.rightToLeft) != null ? n : false;
        }
        set btt(t) {
          !this.slider || (this.slider.bottomToTop = t);
        }
        get btt() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.bottomToTop) != null ? n : false;
        }
        set keyboardDisabled(t) {
          !this.slider || (this.slider.keyboardDisabled = t);
        }
        get keyboardDisabled() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.keyboardDisabled) != null ? n : false;
        }
        set mousewheelDisabled(t) {
          !this.slider || (this.slider.mousewheelDisabled = t);
        }
        get mousewheelDisabled() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.mousewheelDisabled) != null
            ? n
            : false;
        }
        set animateOnClick(t) {
          !this.slider || (this.slider.animateOnClick = t);
        }
        get animateOnClick() {
          var t;
          return (t = this.slider) == null ? void 0 : t.animateOnClick;
        }
        get rangeDragging() {
          var t, n;
          return (n = (t = this.slider) == null ? void 0 : t.rangeDragging) != null ? n : false;
        }
        set rangeDragging(t) {
          this.slider && (this.slider.rangeDragging = D(t));
        }
        get externalCSSList() {
          return this._externalCSSList;
        }
        addPointer(t) {
          var s, d;
          if (!this.slider) return;
          let n = (d = (s = this.slider) == null ? void 0 : s.addPointer(t)) != null ? d : 0;
          tt(
            this,
            this.slider,
            n,
            `value${n + 1}`,
            `ariaLabel${n + 1}`,
            `pointerShape${n + 1}`,
            `pointer${n + 1}Disabled`,
          );
        }
        removePointer() {
          var t;
          !this.slider || (t = this.slider) == null || t.removePointer();
        }
        addCSS(t) {
          if (!this.shadowRoot) return;
          let n = document.createElement('style');
          ((n.textContent = t), this.shadowRoot.appendChild(n));
        }
        connectedCallback() {
          var d, m;
          if (!this.shadowRoot) return;
          ((this._externalCSSList = yn(this)),
            (this.shadowRoot.innerHTML = St(Tt, this._externalCSSList)));
          let t = (d = this.shadowRoot) == null ? void 0 : d.querySelector('.pointer');
          if (!t) return;
          let n = (m = this.shadowRoot) == null ? void 0 : m.getElementById('range-slider');
          if (!n) return;
          let s = Sn(this, t);
          ((this.slider = wn(this, n, s)),
            Tn(this, this.slider),
            (this._observer = new MutationObserver(l => {
              l.forEach(a => {
                var x;
                if (!this.slider || a.type !== 'attributes') return;
                let f = a.attributeName;
                !f || Dn(this.slider, f, (x = this.getAttribute(f)) != null ? x : '');
              });
            })),
            this._observer.observe(this, { attributes: true }));
        }
        disconnectedCallback() {
          (this._observer && this._observer.disconnect(), this.slider && this.slider.destroy());
        }
      },
      De = it;
    window.tcRangeSlider = De;
    customElements.get('toolcool-range-slider') ||
      customElements.define('toolcool-range-slider', De);
    customElements.get('tc-range-slider') ||
      customElements.define('tc-range-slider', class extends De {});
  })();

  const startButton =
    '#StartMOV {\n  all: revert;\n  backface-visibility: hidden;\n  font-size: 2rem;\n  color: #fff;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border: none;\n  border-radius: 10px;\n  min-height: 50px;\n  width: 80%;\n  position: fixed;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 105000;\n  transition: all 0.4s ease-in-out;\n  background-size: 300% 100%;\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n}\n\n#StartMOV:hover {\n  background-position: 100% 0;\n  transition: all 0.4s ease-in-out;\n}\n\n#StartMOV:focus {\n  outline: none;\n}\n';

  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
  var __decorateClass$1 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$1(target, key, result);
    return result;
  };
  let MovStartup = class extends i$1 {
    constructor() {
      super(...arguments);
      this.mangaPages = 0;
      this.begin = 1;
      this.timeoutMs = 3e3;
      this.status = 'initial-prompt';
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.status === 'initial-prompt') {
        this.timeoutId = window.setTimeout(() => {
          this.handleStart();
        }, this.timeoutMs);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.clearTimeout(this.timeoutId);
    }
    handleStart() {
      window.clearTimeout(this.timeoutId);
      this.dispatchEvent(new CustomEvent('start', { detail: null }));
    }
    handleLateStart(begin, end) {
      this.dispatchEvent(new CustomEvent('start', { detail: { begin, end } }));
    }
    handleButtonCLick() {
      this.status = 'late-start-prompt';
    }
    handleDialogClose(e) {
      e.stopPropagation();
      window.clearTimeout(this.timeoutId);
      this.status = 'late-start-button';
    }
    render() {
      switch (this.status) {
        case 'late-start-button':
          return this.renderLateStartButton();
        case 'late-start-prompt':
          return this.renderLateStartPrompt();
        default:
          return this.renderInitialPrompt();
      }
    }
    renderInitialPrompt() {
      return x$1`
      <mov-dialog
        ?open=${this.status === 'initial-prompt'}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">${getLocaleString('WAITING')}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `;
    }
    renderLateStartButton() {
      return x$1`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${getLocaleString('BUTTON_START')}
      </button>
    `;
    }
    renderLateStartPrompt() {
      let beginPage = this.begin;
      let endPage = this.mangaPages;
      const onSliderChange = e => {
        [beginPage, endPage] = [e.detail.value1, e.detail.value2];
      };
      return x$1`
      <mov-dialog
        ?open=${this.status === 'late-start-prompt'}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">
          ${getLocaleString('CHOOSE_BEGINNING')}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${beginPage}"
              value2="${endPage}"
              data="${sequence(this.mangaPages).join(', ')}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${onSliderChange}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${() => this.handleLateStart(beginPage, endPage)}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `;
    }
  };
  MovStartup.styles = [r$4(startButton)];
  __decorateClass$1([n$1({ type: Number, reflect: true })], MovStartup.prototype, 'mangaPages', 2);
  __decorateClass$1([n$1({ type: Number, reflect: true })], MovStartup.prototype, 'begin', 2);
  __decorateClass$1([n$1({ type: Number })], MovStartup.prototype, 'timeoutMs', 2);
  __decorateClass$1([n$1({ type: String, reflect: true })], MovStartup.prototype, 'status', 2);
  MovStartup = __decorateClass$1([t$1('script-startup')], MovStartup);

  var __freeze = Object.freeze;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  var __template = (cooked, raw) =>
    __freeze(__defProp(cooked, 'raw', { value: __freeze(cooked.slice()) }));
  var _a;
  let App = class extends i$1 {
    constructor() {
      super(...arguments);
      this.loadMode = 'wait';
    }
    async start(begin, end) {
      if (this.manga) {
        setAppStateValue('manga', {
          ...this.manga,
          begin: begin ?? this.manga.begin,
          pages: end ?? this.manga.pages,
        });
        document.documentElement.setAttribute('mov', '');
      }
    }
    /**
     * LitElement lifecycle hook, called after the component's first render.
     * It initializes global event listeners and registers the component's `shadowRoot`
     * in the application state, making it accessible to other parts of the application
     * that may need to interact with the DOM.
     */
    firstUpdated() {
      if (this.loadMode === 'always') this.start();
      events();
      loadImages();
    }
    /**
     * Renders the application's UI.
     * This includes applying the current theme and rendering the header, reader,
     * navigation bar, overlay, and all dialog panels.
     * @returns The rendered template.
     */
    render() {
      const manga = getAppStateValue('manga');
      const dialog = getAppStateValue('dialog');
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
        style="${o$2({
          [`padding-${getSettingsValue('navbar')}`]: `${navbarSize}px`,
        })}"
        .locale="${getSettingsValue('locale')}"
      >
        ${
          manga
            ? x$1`
              <reader-header .manga=${manga}></reader-header>
              ${Reader(manga)}
              <navbar-thumbnails
                      .mode=${getSettingsValue('navbar')}
                    ></navbar-thumbnails>
              <manga-pagination
                        .mode="${getSettingsValue('pagination')}"
                      .startPage=${manga.begin}
                      .totalPages=${manga.pages}
                      .currentPage=${getAppStateValue('currentPage')}
                      .next=${manga.next}
                      .prev=${manga.prev}
                    ></manga-pagination>
              <comments-panel></comments-panel>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`
            : x$1(
                _a ||
                  (_a = __template([
                    ' <script-startup\n              .mangaPages="',
                    '"\n              begin="',
                    '"\n              initialStatus="',
                    '"\n              @start=',
                    '\n            ><\/script-startup>',
                  ])),
                this.manga?.pages,
                this.manga?.begin,
                r(this.loadMode, [
                  ['wait', () => 'initial-prompt'],
                  ['never', () => 'late-start-button'],
                ]),
                e => {
                  this.start(e.detail?.begin, e.detail?.end);
                },
              )
        }
        ${
          dialog
            ? x$1`
              <mov-dialog
                open
                .icon=${dialog.icon}
                @close=${() => setAppStateValue('dialog', null)}
              >
                <span slot="label">${dialog.title}</span>
                ${dialog.content} ${dialog.footer}
              </mov-dialog>
            `
            : ''
        }
      </div>
    `;
    }
  };
  App.styles = [i$3``, r$4(cssStyles)];
  __decorateClass([n$1({ type: String, reflect: true })], App.prototype, 'loadMode', 2);
  __decorateClass([n$1({ type: Object })], App.prototype, 'manga', 2);
  App = __decorateClass(
    [t$1('manga-online-viewer'), libExports.useStores(settings$1, locale, appState)],
    App,
  );

  const TOAST_EVENT = '@moaqzdev/toast';
  class Toaster extends HTMLElement {
    constructor() {
      (super(), this.attachShadow({ mode: 'open' }));
    }
    async createToast({
      title: o,
      type: r,
      description: c,
      onConfirm: v,
      onCancel: f,
      confirmText: b = '\u2705',
      cancelText: h = '\u274C',
      duration: d = 3e3,
    }) {
      const a = this.shadowRoot.querySelector('#toast-tmpl').content.cloneNode(true),
        t = {
          container: a.querySelector('[data-toast]'),
          title: a.querySelector('[data-title]'),
          description: a.querySelector('[data-description]'),
          actions: a.querySelector('[data-actions]'),
          confirmBtn: a.querySelector("button[data-action-type='confirm']"),
          cancelBtn: a.querySelector("button[data-action-type='cancel']"),
          closeBtn: a.querySelector('[data-close-button]'),
        };
      ((t.title.textContent = o || ''),
        t.container.setAttribute('data-type', r),
        c == null ? t.description?.remove() : (t.description.textContent = c));
      const n = () => this.removeToast(t.container);
      if (
        (r === 'confirm'
          ? ((t.confirmBtn.textContent = b),
            t.confirmBtn.addEventListener(
              'click',
              () => {
                (v?.(), n());
              },
              { once: true },
            ),
            (t.cancelBtn.textContent = h),
            t.cancelBtn.addEventListener(
              'click',
              () => {
                (f?.(), n());
              },
              { once: true },
            ))
          : t.actions?.remove(),
        this.hasAttribute('dismissable')
          ? t.closeBtn.addEventListener('click', n, { once: true })
          : t.closeBtn?.remove(),
        this.shadowRoot.querySelector('[data-toaster]').appendChild(a),
        d !== 'none')
      ) {
        const l = Math.max(Number.parseInt(d, 10) || 0, 3e3),
          i = new AbortController(),
          g = Date.now();
        let e = null,
          p = 0;
        const u = () => {
          (i.abort(), n());
        };
        let m = setTimeout(u, l);
        const y = () => {
            e == null && (clearTimeout(m), (e = Date.now()));
          },
          _ = () => {
            e != null && ((p = e - g), (e = null), (m = setTimeout(u, Math.max(l - p, 0))));
          };
        (['focusin', 'pointerenter', 'mouseenter'].forEach(s => {
          t.container.addEventListener(s, y, { signal: i.signal });
        }),
          ['focusout', 'pointerleave', 'mouseleave'].forEach(s => {
            t.container.addEventListener(s, _, { signal: i.signal });
          }));
      }
    }
    removeToast(o) {
      o.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        easing: 'ease',
        fill: 'forwards',
      }).finished.then(() => o.remove());
    }
    handleEvent(o) {
      if (o instanceof CustomEvent && o.type === TOAST_EVENT) {
        const r = o.detail;
        this.createToast(r);
      }
    }
    connectedCallback() {
      (this.render(), document.addEventListener(TOAST_EVENT, this));
    }
    disconnectedCallback() {
      document.removeEventListener(TOAST_EVENT, this);
    }
    render() {
      this.shadowRoot.innerHTML = `
    <style>${Toaster.STYLES}</style>

    <template id="toast-tmpl">
      <li data-toast tabindex="0">
        <button data-close-button aria-label="Close">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <p data-title></p>
        <p data-description></p>
        <div data-actions>
          <button type="button" data-action-type="confirm"></button>
          <button type="button" data-action-type="cancel"></button>
        </div>
      </li>
    </template>

    <ol data-toaster tabindex="-1"></ol>`;
    }
    static STYLES = `
  * {
    box-sizing: border-box;
  }

  :host {
    --_travel-distance: var(--toast-travel-distance, 5vh);

    --_toast-background: var(--toast-background, #FCFCFC);
    --_toast-border: var(--toast-border, #00000026);
    --_toast-title: var(--toast-title, #000000DF);
    --_toast-description: var(--toast-description, #0000009B);

    --_toast-success: var(--toast-success, #00924BA4);
    --_toast-error: var(--toast-error, #D2000571);
    --_toast-warning: var(--toast-warning, #E35F00AA);
    --_toast-info: var(--toast-info, #0084E6A1);
    --_toast-confirm: var(--toast-confirm, #6600C06C);

    --_toast-actions-direction: var(--toast-actions-direction, row);
    --_toast-actions-justify: var(--toast-actions-justify, flex-end);
    --_toast-actions-gap: var(--toast-actions-gap, 0.25rem);

    --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
    --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #00713FDE);
    --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
    --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #C40006D3);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --_toast-background: var(--toast-background, #111111);
      --_toast-border: var(--toast-border,  #FFFFFF2C);
      --_toast-title: var(--toast-title, #FFFFFFED);
      --_toast-description: var(--toast-description, #FFFFFFAF);
  
      --_toast-success: var(--toast-success, #54FFAD73);
      --_toast-error: var(--toast-error, #FF5D61B0);
      --_toast-warning: var(--toast-warning, #FE84389D);
      --_toast-info: var(--toast-info, #3094FEB9);
      --_toast-confirm: var(--toast-confirm, #C47EFFA4);

      --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
      --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #54FFAD73);
      --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
      --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #FF5D61B0);
    }
  }

  @keyframes slide-in {
    from { 
      transform: translateY(var(--_travel-distance)) 
    }
  }

  @keyframes fade-in {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  [data-toaster] {
    --container-width: 20rem;

    position: fixed;
    z-index: 999;
    width: var(--container-width);
    height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
    top: 0;
    right: 0;
    pointer-events: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  :host([position="bottom-right"]) [data-toaster] {
    top: 0;
    right: 0;
  }
  
  :host([position="bottom-left"]) [data-toaster] {
    top: 0;
    left: 0;
  }

  :host([position="bottom-center"]) [data-toaster] {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([position="top-right"]) [data-toaster] {
    top: 0;
    right: 0;
    flex-direction: column;
  }
  
  :host([position="top-left"]) [data-toaster] {
    top: 0;
    left: 0;
    flex-direction: column;
  }

  :host([position="top-center"]) [data-toaster] {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
  }

  [data-toast] {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;

    pointer-events: none;
    user-select: none;

    list-style: none;
    background-color: var(--_toast-background);
    padding: 1rem;
    border: 1px solid var(--_toast-border);
    border-radius: 0.25rem;
    pointer-events: all;

    will-change: transform;
    animation: fade-in .3s ease, slide-in .3s ease;

    @media (prefers-reduced-motion: reduce){
      --_travel-distance: 0;
    }
  
    &[data-type="success"] {
      border-top: 4px solid var(--_toast-success);
    }
  
    &[data-type="error"] {
      border-top: 4px solid var(--_toast-error);
    }
  
    &[data-type="info"] {
      border-top: 4px solid var(--_toast-info)
    }

    &[data-type="warning"] {
      border-top: 4px solid var(--_toast-warning)
    }

    &[data-type="confirm"] {
      border-top: 4px solid var(--_toast-confirm);
    }
  }

  [data-close-button] {
    --size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--_toast-title);
    background-color: var(--_toast-background);
    border-radius: 50%;
    border: 1px solid var(--_toast-border);
    padding: 0.125rem;
    translate: -35% -35%;
    cursor: pointer;
  }

  [data-actions] {
    display: flex;
    flex-direction: var(--_toast-actions-direction);
    justify-content: var(--_toast-actions-justify);
    gap: var(--_toast-actions-gap);
    margin-top: 0.5rem;
  }

  button[data-action-type="confirm"],
  button[data-action-type="cancel"] {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
      
  button[data-action-type="confirm"] {
    color: var(--_toast-actions-confirm-text-color);
    font-weight: 600;
    background-color: var(--_toast-actions-confirm-background-color);
  }

  button[data-action-type="cancel"] {
    color: var(--_toast-actions-cancel-text-color);
    font-weight: 600;
    background-color:var(--_toast-actions-cancel-background-color);
  }
  
  [data-title], [data-description] {
    margin: 0;
    all: initial; 
    font-family: inherit;
    line-height: 1.5;
  }

  [data-title] {
    font-size: 1rem;
    font-weight: 600;
    color: var(--_toast-title);
  }

  [data-description] {
    font-size: 0.875rem;
    color: var(--_toast-description);
    text-wrap: pretty;
  }`;
  }
  customElements.define('moaqz-toaster', Toaster);

  const normalize =
    '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n';

  const nprogress =
    '/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n';

  const fix =
    '#nprogress .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\nhtml[mov] body > *:not(manga-online-viewer, #nprogress) {\n  /* biome-ignore lint/complexity/noImportantStyles: requirement */\n  display: none !important;\n}\n\nhtml {\n  /* biome-ignore lint/complexity/noImportantStyles: requirement */\n  font-size: 16px !important;\n}\n';

  const externalCSS = [normalize, nprogress, fix].join('\n');

  function removeAllEventListeners(element) {
    if (!element?.parentNode) {
      return element;
    }
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    return newElement;
  }
  const removeAttributes = element => {
    element.getAttributeNames().forEach(attr => {
      element?.removeAttribute(attr);
    });
  };
  const cleanUpElement = (...elements) => {
    elements?.forEach(removeAttributes);
    elements?.forEach(removeAllEventListeners);
  };

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
  async function preparePage([site, manga]) {
    logScript(`Found Pages: ${manga.pages} in ${site?.name}`);
    if (!manga.title) {
      manga.title = document.querySelector('title')?.textContent?.trim();
    }
    manga.begin = isBookmarked() ?? manga.begin ?? 1;
    if (manga.before !== void 0) {
      logScriptVerbose(`Executing Preparation`);
      await manga.before(manga.begin ?? 0);
    }
    if (getSettingsValue('enableComments') && !manga.comments) {
      manga.comments = await captureComments();
    }
    cleanUpElement(document.documentElement, document.head, document.body);
    window.scrollTo(0, 0);
    document.head.innerHTML += wrapStyle('externals', externalCSS);
    const viewer = document.createElement('manga-online-viewer');
    viewer.loadMode = site?.start ?? getSettingsValue('loadMode');
    viewer.manga = manga;
    document.body.appendChild(viewer);
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
