// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2025.08.23
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
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/sweetalert2-neutral@11.22.2-neutral/dist/sweetalert2.all.min.js
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
  function getDataFromBase64(src) {
    return src.slice(src.indexOf(';base64,') + 8);
  }
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif|svg)/;
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
    ':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-hover-transform: none}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}\n';

  const fix =
    '#nprogress .bar {\r\n  background: #29d;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\n#pagesSlider {\r\n  margin: 10px 0;\r\n}\r\n\r\n#pageInputs {\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#swal2-html-container .pageInput {\r\n  border: 1px darkblue dashed;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  background-color: aliceblue;\r\n  color: black;\r\n  max-width: 40%;\r\n}\r\n\r\n#swal2-title {\r\n  color: navy;\r\n}\r\n\r\nbutton.swal2-styled {\r\n  position: inherit;\r\n  transform: inherit;\r\n}\r\n';

  const sweetalertStyle = [normalize$1, sweetalert, fix, nprogress, keyscss].join('\n');

  const startButton =
    '#StartMOV {\r\n  all: revert;\r\n  backface-visibility: hidden;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  padding: 0.5rem 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n  min-height: 50px;\r\n  width: 80%;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 105000;\r\n  transition: all 0.4s ease-in-out;\r\n  background-size: 300% 100%;\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n  background-position: 100% 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n  outline: none;\r\n}\r\n';

  const concatenateTemplateLiteralTag = (raw, ...keys) =>
    keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html$1 = concatenateTemplateLiteralTag;
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
  const logScriptC =
    x =>
    (...y) =>
      logScript(x, ...y);
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
    listElements = listElements.filter(item => !inView.includes(item));
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

  function sequence(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
  }

  const IconArrowAutofitDown =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\r\n  <path d="M18 4v17" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n</svg>\r\n';

  const IconArrowAutofitHeight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\r\n  <path d="M18 14v7" />\r\n  <path d="M18 3v7" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n  <path d="M15 6l3 -3l3 3" />\r\n</svg>\r\n';

  const IconArrowAutofitLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\r\n  <path d="M20 18h-17" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n</svg>\r\n';

  const IconArrowAutofitRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\r\n  <path d="M4 18h17" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const IconArrowAutofitWidth =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\r\n  <path d="M10 18h-7" />\r\n  <path d="M21 18h-7" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const IconArrowBigLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\r\n  />\r\n</svg>\r\n';

  const IconArrowBigRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\r\n  />\r\n</svg>\r\n';

  const IconBookmark =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\r\n</svg>\r\n';

  const IconBookmarkOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const IconBookmarks =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmarks"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\r\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\r\n</svg>\r\n';

  const IconCategory =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-category"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4h6v6h-6z" />\r\n  <path d="M14 4h6v6h-6z" />\r\n  <path d="M4 14h6v6h-6z" />\r\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n</svg>\r\n';

  const IconCheck =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-check toggler-on"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M5 12l5 5l10 -10" />\r\n</svg>\r\n';

  const IconDeviceFloppy =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-device-floppy"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\r\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M14 4l0 4l-6 0l0 -4" />\r\n</svg>\r\n';

  const IconExternalLink =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-external-link"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\r\n  <path d="M11 13l9 -9" />\r\n  <path d="M15 4h5v5" />\r\n</svg>\r\n';

  const IconEye =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\r\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\r\n</svg>\r\n';

  const IconEyeOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\r\n  <path\r\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const IconFileDownload =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-file-download"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r\n  <path d="M12 17v-6" />\r\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\r\n</svg>\r\n';

  const IconKeyboard =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-keyboard"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\r\n  <path d="M6 10l0 .01" />\r\n  <path d="M10 10l0 .01" />\r\n  <path d="M14 10l0 .01" />\r\n  <path d="M18 10l0 .01" />\r\n  <path d="M6 14l0 .01" />\r\n  <path d="M18 14l0 .01" />\r\n  <path d="M10 14l4 .01" />\r\n</svg>\r\n';

  const IconListNumbers =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-list-numbers"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M11 6h9" />\r\n  <path d="M11 12h9" />\r\n  <path d="M12 18h8" />\r\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\r\n  <path d="M6 10v-6l-2 2" />\r\n</svg>\r\n';

  const IconLoader2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-loader-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3a9 9 0 1 0 9 9" />\r\n</svg>\r\n';

  const IconLocationCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const IconMenu2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-menu-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6l16 0" />\r\n  <path d="M4 12l16 0" />\r\n  <path d="M4 18l16 0" />\r\n</svg>\r\n';

  const IconMessage =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-message"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 9h8" />\r\n  <path d="M8 13h6" />\r\n  <path\r\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r\n  />\r\n</svg>\r\n';

  const IconMoon =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-moon"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\r\n</svg>\r\n';

  const IconPalette =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-palette"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\r\n  />\r\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n';

  const IconPencil =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-pencil"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r\n  <path d="M13.5 6.5l4 4" />\r\n</svg>\r\n';

  const IconPhoto =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\r\n</svg>\r\n';

  const IconPhotoOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path\r\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\r\n  />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\r\n  <path\r\n    d="M3 3l18 18"\r\n    color="orange"\r\n  />\r\n</svg>\r\n';

  const IconPlayerPause =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-pause"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n</svg>\r\n';

  const IconPlayerPlay =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-play"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M7 4v16l13 -8z" />\r\n</svg>\r\n';

  const IconRefresh =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-refresh"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\r\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\r\n</svg>\r\n';

  const IconSettings =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-settings"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\r\n  />\r\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\r\n</svg>\r\n';

  const IconSettingsOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\r\n  />\r\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const IconSpacingVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-spacing-vertical"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\r\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\r\n  <path d="M16 12h-8" />\r\n</svg>\r\n';

  const IconSun =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-sun"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\r\n  <path\r\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\r\n  />\r\n</svg>\r\n';

  const IconTrash =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-trash"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 7l16 0" />\r\n  <path d="M10 11l0 6" />\r\n  <path d="M14 11l0 6" />\r\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\r\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\r\n</svg>\r\n';

  const IconWorldCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\r\n  <path d="M3.6 9h16.8" />\r\n  <path d="M3.6 15h8.9" />\r\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\r\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const IconX =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-x toggler-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 6l-12 12" />\r\n  <path d="M6 6l12 12" />\r\n</svg>\r\n';

  const IconZoomCancel =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-cancel"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M8 8l4 4" />\r\n  <path d="M12 8l-4 4" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const IconZoomIn =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M10 7l0 6" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const IconZoomInArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 13v4" />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const IconZoomOut =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const IconZoomOutArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const IconZoomPan =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-pan"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n  <path d="M17 17l-2.5 -2.5" />\r\n  <path d="M10 5l2 -2l2 2" />\r\n  <path d="M19 10l2 2l-2 2" />\r\n  <path d="M5 10l-2 2l2 2" />\r\n  <path d="M10 19l2 2l2 -2" />\r\n</svg>\r\n';

  const listBookmarks = () => {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }
    return getSettingsValue('bookmarks').map(
      (mark, index) => html$1`
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
          >
            ${IconTrash}
          </button>
        </span>
      </div>
    `,
    );
  };
  const BookmarkPanel = () => html$1`
  <div
    id="BookmarksPanel"
    class="panel"
  >
    <button
      id="CloseBookmarks"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
    >
      ${IconX}
    </button>
    <button
      class="Bookmark simpleButton"
      title="${getLocaleString('BOOKMARK')}"
    >
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
    return html$1`
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
      title.innerHTML = html$1`(${percentage}%) ${document.querySelector('#MangaTitle')?.textContent}`;
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
    sequence(manga.pages, begin).forEach((index, position) => {
      addPage(manga, index, manga.listPages[index - 1], position).catch(logScript);
    });
  }
  function loadMangaImages(begin, manga) {
    sequence(manga.pages, begin).forEach((index, position) => {
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
  const settings$1 = map(
    isSettingsLocal() ? { ...localSettings, locale: globalSettings.locale } : globalSettings,
  );
  const locale = computed(
    settings$1,
    current => locales.find(l => l.ID === current.locale) ?? locales[1],
  );
  function refreshSettings(key) {
    const newObj = isSettingsLocal()
      ? { ...localSettings, locale: globalSettings.locale }
      : { ...globalSettings };
    const currentObj = settings$1.get();
    if (!_.isEqual(currentObj, newObj)) {
      settings$1.set(newObj);
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
      refreshSettings();
      applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
    }
  }
  settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);
  function getSettingsValue(key) {
    return settings$1.get()?.[key];
  }
  function setSettingsValue(key, value) {
    const current = settings$1.get()?.[key];
    if (_.isEqual(current, value)) return;
    settings$1.setKey(key, value);
  }
  function saveSettingsValue(key, value) {
    const currentEffective = getSettingsValue(key);
    if (_.isEqual(currentEffective, value)) return;
    setSettingsValue(key, value);
    if (isSettingsLocal() && key !== 'locale') {
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
    hsl.l = lightness / 100;
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

  const DEV = false;

  // Store the references to globals in case someone tries to monkey patch these, causing the below
  // to de-opt (this occurs often when using popular extensions).
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;

  const noop = () => {};

  /** @param {Function} fn */
  function run(fn) {
    return fn();
  }

  /** @param {Array<() => void>} arr */
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }

  /**
   * TODO replace with Promise.withResolvers once supported widely enough
   * @template T
   */
  function deferred() {
    /** @type {(value: T) => void} */
    var resolve;

    /** @type {(reason: any) => void} */
    var reject;

    /** @type {Promise<T>} */
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

    // @ts-expect-error
    return { promise, resolve, reject };
  }

  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  /** 'Transparent' effects do not create a transition boundary */
  const EFFECT_TRANSPARENT = 1 << 16;
  const INSPECT_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;

  // Flags used for async
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;

  const ERROR_VALUE = 1 << 23;

  const STATE_SYMBOL = Symbol('$state');
  const LOADING_ATTR_SYMBOL = Symbol('');

  /** allow users to ignore aborted signal errors if `reason.name === 'StaleReactionError` */
  const STALE_REACTION = new (class StaleReactionError extends Error {
    name = 'StaleReactionError';
    message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
  })();

  /* This file is generated by scripts/process-messages/index.js. Do not edit! */

  /**
   * Cannot await outside a `<svelte:boundary>` with a `pending` snippet
   * @returns {never}
   */
  function await_outside_boundary() {
    {
      throw new Error(`https://svelte.dev/e/await_outside_boundary`);
    }
  }

  /* This file is generated by scripts/process-messages/index.js. Do not edit! */

  /**
   * Cannot create a `$derived(...)` with an `await` expression outside of an effect tree
   * @returns {never}
   */
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }

  /**
   * `%rune%` cannot be used inside an effect cleanup function
   * @param {string} rune
   * @returns {never}
   */
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }

  /**
   * Effect cannot be created inside a `$derived` value that was not itself created inside an effect
   * @returns {never}
   */
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }

  /**
   * `%rune%` can only be used inside an effect (e.g. during component initialisation)
   * @param {string} rune
   * @returns {never}
   */
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }

  /**
   * Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
   * @returns {never}
   */
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }

  /**
   * Property descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.
   * @returns {never}
   */
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }

  /**
   * Cannot set prototype of `$state` object
   * @returns {never}
   */
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }

  /**
   * Updating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`
   * @returns {never}
   */
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }

  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  /** See EachBlock interface metadata.is_controlled for an explanation what this is */
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;

  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;

  const UNINITIALIZED = Symbol();

  const NAMESPACE_HTML = 'http://www.w3.org/1999/xhtml';

  /* This file is generated by scripts/process-messages/index.js. Do not edit! */

  /**
   * The `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.
   */
  function select_multiple_invalid_value() {
    {
      console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
    }
  }

  /** @import { TemplateNode } from '#client' */

  /**
   * Use this variable to guard everything related to hydration code so it can be treeshaken out
   * if the user doesn't use the `hydrate` method and these code paths are therefore not needed.
   */
  let hydrating = false;

  /** @import { Equals } from '#client' */

  /** @type {Equals} */
  function equals(value) {
    return value === this.v;
  }

  /**
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  function safe_not_equal(a, b) {
    return a != a
      ? b == b
      : a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
  }

  /** @type {Equals} */
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }

  let legacy_mode_flag = false;
  let tracing_mode_flag = false;

  function enable_legacy_mode_flag() {
    legacy_mode_flag = true;
  }

  /** @import { ComponentContext, DevStackEntry, Effect } from '#client' */

  /** @type {ComponentContext | null} */
  let component_context = null;

  /** @param {ComponentContext | null} context */
  function set_component_context(context) {
    component_context = context;
  }

  /**
   * @param {Record<string, unknown>} props
   * @param {any} runes
   * @param {Function} [fn]
   * @returns {void}
   */
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      s: props,
      x: null,
      l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null,
    };
  }

  /**
   * @template {Record<string, any>} T
   * @param {T} [component]
   * @returns {T}
   */
  function pop(component) {
    var context = /** @type {ComponentContext} */ (component_context);
    var effects = context.e;

    if (effects !== null) {
      context.e = null;

      for (var fn of effects) {
        create_user_effect(fn);
      }
    }

    component_context = context.p;

    return /** @type {T} */ ({});
  }

  /** @returns {boolean} */
  function is_runes() {
    return !legacy_mode_flag || (component_context !== null && component_context.l === null);
  }

  /** @import { Derived, Effect } from '#client' */
  /** @import { Boundary } from './dom/blocks/boundary.js' */

  const adjustments = new WeakMap();

  /**
   * @param {unknown} error
   */
  function handle_error(error) {
    var effect = active_effect;

    // for unowned deriveds, don't throw until we read the value
    if (effect === null) {
      /** @type {Derived} */ (active_reaction).f |= ERROR_VALUE;
      return error;
    }

    if ((effect.f & EFFECT_RAN) === 0) {
      // if the error occurred while creating this subtree, we let it
      // bubble up until it hits a boundary that can handle it
      if ((effect.f & BOUNDARY_EFFECT) === 0) {
        if (!effect.parent && error instanceof Error) {
          apply_adjustments(error);
        }

        throw error;
      }

      /** @type {Boundary} */ (effect.b).error(error);
    } else {
      // otherwise we bubble up the effect tree ourselves
      invoke_error_boundary(error, effect);
    }
  }

  /**
   * @param {unknown} error
   * @param {Effect | null} effect
   */
  function invoke_error_boundary(error, effect) {
    while (effect !== null) {
      if ((effect.f & BOUNDARY_EFFECT) !== 0) {
        try {
          /** @type {Boundary} */ (effect.b).error(error);
          return;
        } catch (e) {
          error = e;
        }
      }

      effect = effect.parent;
    }

    if (error instanceof Error) {
      apply_adjustments(error);
    }

    throw error;
  }

  /**
   * @param {Error} error
   */
  function apply_adjustments(error) {
    const adjusted = adjustments.get(error);

    if (adjusted) {
      define_property(error, 'message', {
        value: adjusted.message,
      });

      define_property(error, 'stack', {
        value: adjusted.stack,
      });
    }
  }

  /** @type {Array<() => void>} */
  let micro_tasks = [];

  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }

  /**
   * @param {() => void} fn
   */
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0) {
      queueMicrotask(run_micro_tasks);
    }

    micro_tasks.push(fn);
  }

  /** @import { Effect, Source, TemplateNode, } from '#client' */

  function get_pending_boundary() {
    var boundary = /** @type {Effect} */ (active_effect).b;

    while (boundary !== null && !boundary.has_pending_snippet()) {
      boundary = boundary.parent;
    }

    if (boundary === null) {
      await_outside_boundary();
    }

    return boundary;
  }

  /** @import { Derived, Effect, Source } from '#client' */
  /** @import { Batch } from './batch.js'; */

  /**
   * @template V
   * @param {() => V} fn
   * @returns {Derived<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    var parent_derived =
      active_reaction !== null && (active_reaction.f & DERIVED) !== 0
        ? /** @type {Derived} */ (active_reaction)
        : null;

    if (active_effect === null || (parent_derived !== null && (parent_derived.f & UNOWNED) !== 0)) {
      flags |= UNOWNED;
    } else {
      // Since deriveds are evaluated lazily, any effects created inside them are
      // created too late to ensure that the parent effect is added to the tree
      active_effect.f |= EFFECT_PRESERVED;
    }

    /** @type {Derived<V>} */
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: /** @type {V} */ (UNINITIALIZED),
      wv: 0,
      parent: parent_derived ?? active_effect,
      ac: null,
    };

    return signal;
  }

  /**
   * @template V
   * @param {() => V | Promise<V>} fn
   * @param {string} [location] If provided, print a warning if the value is not read immediately after update
   * @returns {Promise<Source<V>>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function async_derived(fn, location) {
    let parent = /** @type {Effect | null} */ (active_effect);

    if (parent === null) {
      async_derived_orphan();
    }

    var boundary = /** @type {Boundary} */ (parent.b);

    var promise = /** @type {Promise<V>} */ (/** @type {unknown} */ (undefined));
    var signal = source(/** @type {V} */ (UNINITIALIZED));

    /** @type {Promise<V> | null} */
    var prev = null;

    // only suspend in async deriveds created on initialisation
    var should_suspend = !active_reaction;

    async_effect(() => {
      try {
        var p = fn();
      } catch (error) {
        p = Promise.reject(error);
      }

      var r = () => p;
      promise = prev?.then(r, r) ?? Promise.resolve(p);

      prev = promise;

      var batch = /** @type {Batch} */ (current_batch);
      var pending = boundary.pending;

      if (should_suspend) {
        boundary.update_pending_count(1);
        if (!pending) batch.increment();
      }

      /**
       * @param {any} value
       * @param {unknown} error
       */
      const handler = (value, error = undefined) => {
        prev = null;

        if (!pending) batch.activate();

        if (error) {
          if (error !== STALE_REACTION) {
            signal.f |= ERROR_VALUE;

            // @ts-expect-error the error is the wrong type, but we don't care
            internal_set(signal, error);
          }
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }

          internal_set(signal, value);
        }

        if (should_suspend) {
          boundary.update_pending_count(-1);
          if (!pending) batch.decrement();
        }

        unset_context();
      };

      promise.then(handler, e => handler(null, e || 'unknown'));

      if (batch) {
        return () => {
          queueMicrotask(() => batch.neuter());
        };
      }
    });

    return new Promise(fulfil => {
      /** @param {Promise<V>} p */
      function next(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            // if the effect re-runs before the initial promise
            // resolves, delay resolution until we have a value
            next(promise);
          }
        }

        p.then(go, go);
      }

      next(promise);
    });
  }

  /**
   * @template V
   * @param {() => V} fn
   * @returns {Derived<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function user_derived(fn) {
    const d = derived(fn);

    push_reaction_value(d);

    return d;
  }

  /**
   * @template V
   * @param {() => V} fn
   * @returns {Derived<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function derived_safe_equal(fn) {
    const signal = derived(fn);
    signal.equals = safe_equals;
    return signal;
  }

  /**
   * @param {Derived} derived
   * @returns {void}
   */
  function destroy_derived_effects(derived) {
    var effects = derived.effects;

    if (effects !== null) {
      derived.effects = null;

      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(/** @type {Effect} */ (effects[i]));
      }
    }
  }

  /**
   * @param {Derived} derived
   * @returns {Effect | null}
   */
  function get_derived_parent_effect(derived) {
    var parent = derived.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return /** @type {Effect} */ (parent);
      }
      parent = parent.parent;
    }
    return null;
  }

  /**
   * @template T
   * @param {Derived} derived
   * @returns {T}
   */
  function execute_derived(derived) {
    var value;
    var prev_active_effect = active_effect;

    set_active_effect(get_derived_parent_effect(derived));

    {
      try {
        destroy_derived_effects(derived);
        value = update_reaction(derived);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }

    return value;
  }

  /**
   * @param {Derived} derived
   * @returns {void}
   */
  function update_derived(derived) {
    var value = execute_derived(derived);

    if (!derived.equals(value)) {
      derived.v = value;
      derived.wv = increment_write_version();
    }

    // don't mark derived clean if we're reading it inside a
    // cleanup function, or it will cache a stale value
    if (is_destroying_effect) {
      return;
    }

    if (batch_deriveds !== null) {
      batch_deriveds.set(derived, derived.v);
    } else {
      var status =
        (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null
          ? MAYBE_DIRTY
          : CLEAN;

      set_signal_status(derived, status);
    }
  }

  /** @import { Effect, Value } from '#client' */

  /**
   *
   * @param {Array<() => any>} sync
   * @param {Array<() => Promise<any>>} async
   * @param {(values: Value[]) => any} fn
   */
  function flatten(sync, async, fn) {
    const d = is_runes() ? derived : derived_safe_equal;

    if (async.length === 0) {
      fn(sync.map(d));
      return;
    }

    var batch = current_batch;
    var parent = /** @type {Effect} */ (active_effect);

    var restore = capture();
    var boundary = get_pending_boundary();

    Promise.all(async.map(expression => async_derived(expression)))
      .then(result => {
        batch?.activate();

        restore();

        try {
          fn([...sync.map(d), ...result]);
        } catch (error) {
          // ignore errors in blocks that have already been destroyed
          if ((parent.f & DESTROYED) === 0) {
            invoke_error_boundary(error, parent);
          }
        }

        batch?.deactivate();
        unset_context();
      })
      .catch(error => {
        boundary.error(error);
      });
  }

  /**
   * Captures the current effect context so that we can restore it after
   * some asynchronous work has happened (so that e.g. `await a + b`
   * causes `b` to be registered as a dependency).
   */
  function capture() {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;

    return function restore() {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
    };
  }

  function unset_context() {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
  }

  /** @import { Derived, Effect, Source } from '#client' */

  /** @type {Set<Batch>} */
  const batches = new Set();

  /** @type {Batch | null} */
  let current_batch = null;

  /**
   * When time travelling, we re-evaluate deriveds based on the temporary
   * values of their dependencies rather than their actual values, and cache
   * the results in this map rather than on the deriveds themselves
   * @type {Map<Derived, any> | null}
   */
  let batch_deriveds = null;

  /** @type {Set<() => void>} */
  let effect_pending_updates = new Set();

  /** @type {Array<() => void>} */
  let tasks = [];

  function dequeue() {
    const task = /** @type {() => void} */ (tasks.shift());

    if (tasks.length > 0) {
      queueMicrotask(dequeue);
    }

    task();
  }

  /** @type {Effect[]} */
  let queued_root_effects = [];

  /** @type {Effect | null} */
  let last_scheduled_effect = null;

  let is_flushing = false;
  class Batch {
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    current = new Map();

    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    #previous = new Map();

    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    #callbacks = new Set();

    /**
     * The number of async effects that are currently in flight
     */
    #pending = 0;

    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    #deferred = null;

    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    #neutered = false;

    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    #async_effects = [];

    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    #boundary_async_effects = [];

    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    #render_effects = [];

    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    #effects = [];

    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    #block_effects = [];

    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    #dirty_effects = [];

    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    #maybe_dirty_effects = [];

    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    skipped_effects = new Set();

    /**
     *
     * @param {Effect[]} root_effects
     */
    process(root_effects) {
      queued_root_effects = [];

      /** @type {Map<Source, { v: unknown, wv: number }> | null} */
      var current_values = null;

      // if there are multiple batches, we are 'time travelling' —
      // we need to undo the changes belonging to any batch
      // other than the current one
      if (batches.size > 1) {
        current_values = new Map();
        batch_deriveds = new Map();

        for (const [source, current] of this.current) {
          current_values.set(source, { v: source.v, wv: source.wv });
          source.v = current;
        }

        for (const batch of batches) {
          if (batch === this) continue;

          for (const [source, previous] of batch.#previous) {
            if (!current_values.has(source)) {
              current_values.set(source, { v: source.v, wv: source.wv });
              source.v = previous;
            }
          }
        }
      }

      for (const root of root_effects) {
        this.#traverse_effect_tree(root);
      }

      // if we didn't start any new async work, and no async work
      // is outstanding from a previous flush, commit
      if (this.#async_effects.length === 0 && this.#pending === 0) {
        this.#commit();

        var render_effects = this.#render_effects;
        var effects = this.#effects;

        this.#render_effects = [];
        this.#effects = [];
        this.#block_effects = [];
        current_batch = null;

        flush_queued_effects(render_effects);
        flush_queued_effects(effects);

        // Reinstate the current batch if there was no new one created, as `process()` runs in a loop in `flush_effects()`.
        // That method expects `current_batch` to be set, and could run the loop again if effects result in new effects
        // being scheduled but without writes happening in which case no new batch is created.
        if (current_batch === null) {
          current_batch = this;
        } else {
          batches.delete(this);
        }

        this.#deferred?.resolve();
      } else {
        this.#defer_effects(this.#render_effects);
        this.#defer_effects(this.#effects);
        this.#defer_effects(this.#block_effects);
      }

      if (current_values) {
        for (const [source, { v, wv }] of current_values) {
          // reset the source to the current value (unless
          // it got a newer value as a result of effects running)
          if (source.wv <= wv) {
            source.v = v;
          }
        }

        batch_deriveds = null;
      }

      for (const effect of this.#async_effects) {
        update_effect(effect);
      }

      for (const effect of this.#boundary_async_effects) {
        update_effect(effect);
      }

      this.#async_effects = [];
      this.#boundary_async_effects = [];
    }

    /**
     * Traverse the effect tree, executing effects or stashing
     * them for later execution as appropriate
     * @param {Effect} root
     */
    #traverse_effect_tree(root) {
      root.f ^= CLEAN;

      var effect = root.first;

      while (effect !== null) {
        var flags = effect.f;
        var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
        var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;

        var skip = is_skippable_branch || (flags & INERT) !== 0 || this.skipped_effects.has(effect);

        if (!skip && effect.fn !== null) {
          if (is_branch) {
            effect.f ^= CLEAN;
          } else if ((flags & EFFECT) !== 0) {
            this.#effects.push(effect);
          } else if ((flags & CLEAN) === 0) {
            if ((flags & ASYNC) !== 0) {
              var effects = effect.b?.pending ? this.#boundary_async_effects : this.#async_effects;
              effects.push(effect);
            } else if (is_dirty(effect)) {
              if ((effect.f & BLOCK_EFFECT) !== 0) this.#block_effects.push(effect);
              update_effect(effect);
            }
          }

          var child = effect.first;

          if (child !== null) {
            effect = child;
            continue;
          }
        }

        var parent = effect.parent;
        effect = effect.next;

        while (effect === null && parent !== null) {
          effect = parent.next;
          parent = parent.parent;
        }
      }
    }

    /**
     * @param {Effect[]} effects
     */
    #defer_effects(effects) {
      for (const e of effects) {
        const target = (e.f & DIRTY) !== 0 ? this.#dirty_effects : this.#maybe_dirty_effects;
        target.push(e);

        // mark as clean so they get scheduled if they depend on pending async state
        set_signal_status(e, CLEAN);
      }

      effects.length = 0;
    }

    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Source} source
     * @param {any} value
     */
    capture(source, value) {
      if (!this.#previous.has(source)) {
        this.#previous.set(source, value);
      }

      this.current.set(source, source.v);
    }

    activate() {
      current_batch = this;
    }

    deactivate() {
      current_batch = null;

      for (const update of effect_pending_updates) {
        effect_pending_updates.delete(update);
        update();

        if (current_batch !== null) {
          // only do one at a time
          break;
        }
      }
    }

    neuter() {
      this.#neutered = true;
    }

    flush() {
      if (queued_root_effects.length > 0) {
        flush_effects();
      } else {
        this.#commit();
      }

      if (current_batch !== this) {
        // this can happen if a `flushSync` occurred during `flush_effects()`,
        // which is permitted in legacy mode despite being a terrible idea
        return;
      }

      if (this.#pending === 0) {
        batches.delete(this);
      }

      this.deactivate();
    }

    /**
     * Append and remove branches to/from the DOM
     */
    #commit() {
      if (!this.#neutered) {
        for (const fn of this.#callbacks) {
          fn();
        }
      }

      this.#callbacks.clear();
    }

    increment() {
      this.#pending += 1;
    }

    decrement() {
      this.#pending -= 1;

      if (this.#pending === 0) {
        for (const e of this.#dirty_effects) {
          set_signal_status(e, DIRTY);
          schedule_effect(e);
        }

        for (const e of this.#maybe_dirty_effects) {
          set_signal_status(e, MAYBE_DIRTY);
          schedule_effect(e);
        }

        this.#render_effects = [];
        this.#effects = [];

        this.flush();
      } else {
        this.deactivate();
      }
    }

    /** @param {() => void} fn */
    add_callback(fn) {
      this.#callbacks.add(fn);
    }

    settled() {
      return (this.#deferred ??= deferred()).promise;
    }

    static ensure() {
      if (current_batch === null) {
        const batch = (current_batch = new Batch());
        batches.add(current_batch);

        {
          Batch.enqueue(() => {
            if (current_batch !== batch) {
              // a flushSync happened in the meantime
              return;
            }

            batch.flush();
          });
        }
      }

      return current_batch;
    }

    /** @param {() => void} task */
    static enqueue(task) {
      if (tasks.length === 0) {
        queueMicrotask(dequeue);
      }

      tasks.unshift(task);
    }
  }

  function flush_effects() {
    var was_updating_effect = is_updating_effect;
    is_flushing = true;

    try {
      var flush_count = 0;
      set_is_updating_effect(true);

      while (queued_root_effects.length > 0) {
        var batch = Batch.ensure();

        if (flush_count++ > 1000) {
          var updates, entry;
          if (DEV);

          infinite_loop_guard();
        }

        batch.process(queued_root_effects);
        old_values.clear();
      }
    } finally {
      is_flushing = false;
      set_is_updating_effect(was_updating_effect);

      last_scheduled_effect = null;
    }
  }

  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      // Best effort: invoke the boundary nearest the most recent
      // effect and hope that it's relevant to the infinite loop
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }

  /** @type {Effect[] | null} */
  let eager_block_effects = null;

  /**
   * @param {Array<Effect>} effects
   * @returns {void}
   */
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;

    var i = 0;

    while (i < length) {
      var effect = effects[i++];

      if ((effect.f & (DESTROYED | INERT)) === 0 && is_dirty(effect)) {
        eager_block_effects = [];

        update_effect(effect);

        // Effects with no dependencies or teardown do not get added to the effect tree.
        // Deferred effects (e.g. `$effect(...)`) _are_ added to the tree because we
        // don't know if we need to keep them until they are executed. Doing the check
        // here (rather than in `update_effect`) allows us to skip the work for
        // immediate effects.
        if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
          // if there's no teardown or abort controller we completely unlink
          // the effect from the graph
          if (effect.teardown === null && effect.ac === null) {
            // remove this effect from the graph
            unlink_effect(effect);
          } else {
            // keep the effect in the graph, but free up some memory
            effect.fn = null;
          }
        }

        if (eager_block_effects.length > 0) {
          // TODO this feels incorrect! it gets the tests passing
          old_values.clear();

          for (const e of eager_block_effects) {
            update_effect(e);
          }

          eager_block_effects = [];
        }
      }
    }

    eager_block_effects = null;
  }

  /**
   * @param {Effect} signal
   * @returns {void}
   */
  function schedule_effect(signal) {
    var effect = (last_scheduled_effect = signal);

    while (effect.parent !== null) {
      effect = effect.parent;
      var flags = effect.f;

      // if the effect is being scheduled because a parent (each/await/etc) block
      // updated an internal source, bail out or we'll cause a second flush
      if (is_flushing && effect === active_effect && (flags & BLOCK_EFFECT) !== 0) {
        return;
      }

      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect.f ^= CLEAN;
      }
    }

    queued_root_effects.push(effect);
  }

  /** @import { Derived, Effect, Source, Value } from '#client' */

  /** @type {Map<Source, any>} */
  const old_values = new Map();

  /**
   * @template V
   * @param {V} v
   * @param {Error | null} [stack]
   * @returns {Source<V>}
   */
  // TODO rename this to `state` throughout the codebase
  function source(v, stack) {
    /** @type {Value} */
    var signal = {
      f: 0, // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0,
    };

    return signal;
  }

  /**
   * @template V
   * @param {V} v
   * @param {Error | null} [stack]
   */
  /*#__NO_SIDE_EFFECTS__*/
  function state(v, stack) {
    const s = source(v);

    push_reaction_value(s);

    return s;
  }

  /**
   * @template V
   * @param {V} initial_value
   * @param {boolean} [immutable]
   * @returns {Source<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }

    // bind the signal to the component context, in case we need to
    // track updates to trigger beforeUpdate/afterUpdate callbacks
    if (
      legacy_mode_flag &&
      trackable &&
      component_context !== null &&
      component_context.l !== null
    ) {
      (component_context.l.s ??= []).push(s);
    }

    return s;
  }

  /**
   * @template V
   * @param {Source<V>} source
   * @param {V} value
   * @param {boolean} [should_proxy]
   * @returns {V}
   */
  function set(source, value, should_proxy = false) {
    if (
      active_reaction !== null &&
      // since we are untracking the function inside `$inspect.with` we need to add this check
      // to ensure we error if state is set inside an inspect effect
      (!untracking || (active_reaction.f & INSPECT_EFFECT) !== 0) &&
      is_runes() &&
      (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | INSPECT_EFFECT)) !== 0 &&
      !current_sources?.includes(source)
    ) {
      state_unsafe_mutation();
    }

    let new_value = should_proxy ? proxy(value) : value;

    return internal_set(source, new_value);
  }

  /**
   * @template V
   * @param {Source<V>} source
   * @param {V} value
   * @returns {V}
   */
  function internal_set(source, value) {
    if (!source.equals(value)) {
      var old_value = source.v;

      if (is_destroying_effect) {
        old_values.set(source, value);
      } else {
        old_values.set(source, old_value);
      }

      source.v = value;

      var batch = Batch.ensure();
      batch.capture(source, old_value);

      if ((source.f & DERIVED) !== 0) {
        // if we are assigning to a dirty derived we set it to clean/maybe dirty but we also eagerly execute it to track the dependencies
        if ((source.f & DIRTY) !== 0) {
          execute_derived(/** @type {Derived} */ (source));
        }
        set_signal_status(source, (source.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
      }

      source.wv = increment_write_version();

      mark_reactions(source, DIRTY);

      // It's possible that the current reaction might not have up-to-date dependencies
      // whilst it's actively running. So in the case of ensuring it registers the reaction
      // properly for itself, we need to ensure the current effect actually gets
      // scheduled. i.e: `$effect(() => x++)`
      if (
        is_runes() &&
        active_effect !== null &&
        (active_effect.f & CLEAN) !== 0 &&
        (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0
      ) {
        if (untracked_writes === null) {
          set_untracked_writes([source]);
        } else {
          untracked_writes.push(source);
        }
      }
    }

    return value;
  }

  /**
   * Silently (without using `get`) increment a source
   * @param {Source<number>} source
   */
  function increment(source) {
    set(source, source.v + 1);
  }

  /**
   * @param {Value} signal
   * @param {number} status should be DIRTY or MAYBE_DIRTY
   * @returns {void}
   */
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;

    var runes = is_runes();
    var length = reactions.length;

    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;

      // In legacy mode, skip the current effect to prevent infinite loops
      if (!runes && reaction === active_effect) continue;

      var not_dirty = (flags & DIRTY) === 0;

      // don't set a DIRTY reaction to MAYBE_DIRTY
      if (not_dirty) {
        set_signal_status(reaction, status);
      }

      if ((flags & DERIVED) !== 0) {
        mark_reactions(/** @type {Derived} */ (reaction), MAYBE_DIRTY);
      } else if (not_dirty) {
        if ((flags & BLOCK_EFFECT) !== 0) {
          if (eager_block_effects !== null) {
            eager_block_effects.push(/** @type {Effect} */ (reaction));
          }
        }

        schedule_effect(/** @type {Effect} */ (reaction));
      }
    }
  }

  /** @import { Source } from '#client' */

  /**
   * @template T
   * @param {T} value
   * @returns {T}
   */
  function proxy(value) {
    // if non-proxyable, or is already a proxy, return `value`
    if (typeof value !== 'object' || value === null || STATE_SYMBOL in value) {
      return value;
    }

    const prototype = get_prototype_of(value);

    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }

    /** @type {Map<any, Source<any>>} */
    var sources = new Map();
    var is_proxied_array = is_array(value);
    var version = state(0);
    var parent_version = update_version;

    /**
     * Executes the proxy in the context of the reaction it was originally created in, if any
     * @template T
     * @param {() => T} fn
     */
    var with_parent = fn => {
      if (update_version === parent_version) {
        return fn();
      }

      // child source is being created after the initial proxy —
      // prevent it from being associated with the current reaction
      var reaction = active_reaction;
      var version = update_version;

      set_active_reaction(null);
      set_update_version(parent_version);

      var result = fn();

      set_active_reaction(reaction);
      set_update_version(version);

      return result;
    };

    if (is_proxied_array) {
      // We need to create the length source eagerly to ensure that
      // mutations to the array are properly synced with our proxy
      sources.set('length', state(/** @type {any[]} */ (value).length));
    }

    return new Proxy(/** @type {any} */ (value), {
      defineProperty(_, prop, descriptor) {
        if (
          !('value' in descriptor) ||
          descriptor.configurable === false ||
          descriptor.enumerable === false ||
          descriptor.writable === false
        ) {
          // we disallow non-basic descriptors, because unless they are applied to the
          // target object — which we avoid, so that state can be forked — we will run
          // afoul of the various invariants
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor#invariants
          state_descriptors_fixed();
        }
        var s = sources.get(prop);
        if (s === undefined) {
          s = with_parent(() => {
            var s = state(descriptor.value);
            sources.set(prop, s);
            return s;
          });
        } else {
          set(s, descriptor.value, true);
        }

        return true;
      },

      deleteProperty(target, prop) {
        var s = sources.get(prop);

        if (s === undefined) {
          if (prop in target) {
            const s = with_parent(() => state(UNINITIALIZED));
            sources.set(prop, s);
            increment(version);
          }
        } else {
          set(s, UNINITIALIZED);
          increment(version);
        }

        return true;
      },

      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }

        var s = sources.get(prop);
        var exists = prop in target;

        // create a source, but only if it's an own property and not a prototype property
        if (s === undefined && (!exists || get_descriptor(target, prop)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop] : UNINITIALIZED);
            var s = state(p);

            return s;
          });

          sources.set(prop, s);
        }

        if (s !== undefined) {
          var v = get$1(s);
          return v === UNINITIALIZED ? undefined : v;
        }

        return Reflect.get(target, prop, receiver);
      },

      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);

        if (descriptor && 'value' in descriptor) {
          var s = sources.get(prop);
          if (s) descriptor.value = get$1(s);
        } else if (descriptor === undefined) {
          var source = sources.get(prop);
          var value = source?.v;

          if (source !== undefined && value !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value,
              writable: true,
            };
          }
        }

        return descriptor;
      },

      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }

        var s = sources.get(prop);
        var has = (s !== undefined && s.v !== UNINITIALIZED) || Reflect.has(target, prop);

        if (
          s !== undefined ||
          (active_effect !== null && (!has || get_descriptor(target, prop)?.writable))
        ) {
          if (s === undefined) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop]) : UNINITIALIZED;
              var s = state(p);

              return s;
            });

            sources.set(prop, s);
          }

          var value = get$1(s);
          if (value === UNINITIALIZED) {
            return false;
          }
        }

        return has;
      },

      set(target, prop, value, receiver) {
        var s = sources.get(prop);
        var has = prop in target;

        // variable.length = value -> clear all signals with index >= value
        if (is_proxied_array && prop === 'length') {
          for (var i = value; i < /** @type {Source<number>} */ (s).v; i += 1) {
            var other_s = sources.get(i + '');
            if (other_s !== undefined) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              // If the item exists in the original, we need to create a uninitialized source,
              // else a later read of the property would result in a source being created with
              // the value of the original item at that index.
              other_s = with_parent(() => state(UNINITIALIZED));
              sources.set(i + '', other_s);
            }
          }
        }

        // If we haven't yet created a source for this property, we need to ensure
        // we do so otherwise if we read it later, then the write won't be tracked and
        // the heuristics of effects will be different vs if we had read the proxied
        // object property before writing to that property.
        if (s === undefined) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s = with_parent(() => state(undefined));
            set(s, proxy(value));

            sources.set(prop, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;

          var p = with_parent(() => proxy(value));
          set(s, p);
        }

        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);

        // Set the new value before updating any signals so that any listeners get the new value
        if (descriptor?.set) {
          descriptor.set.call(receiver, value);
        }

        if (!has) {
          // If we have mutated an array directly, we might need to
          // signal that length has also changed. Do it before updating metadata
          // to ensure that iterating over the array as a result of a metadata update
          // will not cause the length to be out of sync.
          if (is_proxied_array && typeof prop === 'string') {
            var ls = /** @type {Source<number>} */ (sources.get('length'));
            var n = Number(prop);

            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }

          increment(version);
        }

        return true;
      },

      ownKeys(target) {
        get$1(version);

        var own_keys = Reflect.ownKeys(target).filter(key => {
          var source = sources.get(key);
          return source === undefined || source.v !== UNINITIALIZED;
        });

        for (var [key, source] of sources) {
          if (source.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }

        return own_keys;
      },

      setPrototypeOf() {
        state_prototype_fixed();
      },
    });
  }

  /**
   * @param {any} value
   */
  function get_proxied_value(value) {
    try {
      if (value !== null && typeof value === 'object' && STATE_SYMBOL in value) {
        return value[STATE_SYMBOL];
      }
    } catch {
      // the above if check can throw an error if the value in question
      // is the contentWindow of an iframe on another domain, in which
      // case we want to just return the value (because it's definitely
      // not a proxied value) so we don't break any JavaScript interacting
      // with that iframe (such as various payment companies client side
      // JavaScript libraries interacting with their iframes on the same
      // domain)
    }

    return value;
  }

  /**
   * @param {any} a
   * @param {any} b
   */
  function is(a, b) {
    return Object.is(get_proxied_value(a), get_proxied_value(b));
  }

  /** @import { Effect, TemplateNode } from '#client' */

  // export these for reference in the compiled code, making global name deduplication unnecessary
  /** @type {Window} */
  var $window;

  /** @type {boolean} */
  var is_firefox;

  /** @type {() => Node | null} */
  var first_child_getter;
  /** @type {() => Node | null} */
  var next_sibling_getter;

  /**
   * Initialize these lazily to avoid issues when using the runtime in a server context
   * where these globals are not available while avoiding a separate server entry point
   */
  function init_operations() {
    if ($window !== undefined) {
      return;
    }

    $window = window;
    is_firefox = /Firefox/.test(navigator.userAgent);

    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;

    // @ts-ignore
    first_child_getter = get_descriptor(node_prototype, 'firstChild').get;
    // @ts-ignore
    next_sibling_getter = get_descriptor(node_prototype, 'nextSibling').get;

    if (is_extensible(element_prototype)) {
      // the following assignments improve perf of lookups on DOM nodes
      // @ts-expect-error
      element_prototype.__click = undefined;
      // @ts-expect-error
      element_prototype.__className = undefined;
      // @ts-expect-error
      element_prototype.__attributes = null;
      // @ts-expect-error
      element_prototype.__style = undefined;
      // @ts-expect-error
      element_prototype.__e = undefined;
    }

    if (is_extensible(text_prototype)) {
      // @ts-expect-error
      text_prototype.__t = undefined;
    }
  }

  /**
   * @param {string} value
   * @returns {Text}
   */
  function create_text(value = '') {
    return document.createTextNode(value);
  }

  /**
   * @template {Node} N
   * @param {N} node
   * @returns {Node | null}
   */
  /*@__NO_SIDE_EFFECTS__*/
  function get_first_child(node) {
    return first_child_getter.call(node);
  }

  /**
   * @template {Node} N
   * @param {N} node
   * @returns {Node | null}
   */
  /*@__NO_SIDE_EFFECTS__*/
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }

  /**
   * Don't mark this as side-effect-free, hydration needs to walk all nodes
   * @template {Node} N
   * @param {N} node
   * @param {boolean} is_text
   * @returns {Node | null}
   */
  function child(node, is_text) {
    {
      return get_first_child(node);
    }
  }

  /**
   * Don't mark this as side-effect-free, hydration needs to walk all nodes
   * @param {DocumentFragment | TemplateNode[]} fragment
   * @param {boolean} is_text
   * @returns {Node | null}
   */
  function first_child(fragment, is_text) {
    {
      // when not hydrating, `fragment` is a `DocumentFragment` (the result of calling `open_frag`)
      var first = /** @type {DocumentFragment} */ (get_first_child(/** @type {Node} */ (fragment)));

      // TODO prevent user comments with the empty string when preserveComments is true
      if (first instanceof Comment && first.data === '') return get_next_sibling(first);

      return first;
    }
  }

  /**
   * Don't mark this as side-effect-free, hydration needs to walk all nodes
   * @param {TemplateNode} node
   * @param {number} count
   * @param {boolean} is_text
   * @returns {Node | null}
   */
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;

    while (count--) {
      next_sibling = /** @type {TemplateNode} */ (get_next_sibling(next_sibling));
    }

    {
      return next_sibling;
    }
  }

  /**
   * @template {Node} N
   * @param {N} node
   * @returns {void}
   */
  function clear_text_content(node) {
    node.textContent = '';
  }

  /**
   * Returns `true` if we're updating the current block, for example `condition` in
   * an `{#if condition}` block just changed. In this case, the branch should be
   * appended (or removed) at the same time as other updates within the
   * current `<svelte:boundary>`
   */
  function should_defer_append() {
    return false;
  }

  let listening_to_form_reset = false;

  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        'reset',
        evt => {
          // Needs to happen one tick later or else the dom properties of the form
          // elements have not updated to their reset values yet
          Promise.resolve().then(() => {
            if (!evt.defaultPrevented) {
              for (const e of /**@type {HTMLFormElement} */ (evt.target).elements) {
                // @ts-expect-error
                e.__on_r?.();
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
        { capture: true },
      );
    }
  }

  /**
   * @template T
   * @param {() => T} fn
   */
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }

  /**
   * Listen to the given event, and then instantiate a global form reset listener if not already done,
   * to notify all bindings when the form is reset
   * @param {HTMLElement} element
   * @param {string} event
   * @param {(is_reset?: true) => void} handler
   * @param {(is_reset?: true) => void} [on_reset]
   */
  function listen_to_event_and_reset_event(element, event, handler, on_reset = handler) {
    element.addEventListener(event, () => without_reactive_context(handler));
    // @ts-expect-error
    const prev = element.__on_r;
    if (prev) {
      // special case for checkbox that can have multiple binds (group & checked)
      // @ts-expect-error
      element.__on_r = () => {
        prev();
        on_reset(true);
      };
    } else {
      // @ts-expect-error
      element.__on_r = () => on_reset(true);
    }

    add_form_reset_listener();
  }

  /** @import { ComponentContext, ComponentContextLegacy, Derived, Effect, TemplateNode, TransitionManager } from '#client' */

  /**
   * @param {'$effect' | '$effect.pre' | '$inspect'} rune
   */
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan();
    }

    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
      effect_in_unowned_derived();
    }

    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }

  /**
   * @param {Effect} effect
   * @param {Effect} parent_effect
   */
  function push_effect(effect, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect;
    } else {
      parent_last.next = effect;
      effect.prev = parent_last;
      parent_effect.last = effect;
    }
  }

  /**
   * @param {number} type
   * @param {null | (() => void | (() => void))} fn
   * @param {boolean} sync
   * @param {boolean} push
   * @returns {Effect}
   */
  function create_effect(type, fn, sync, push = true) {
    var parent = active_effect;

    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }

    /** @type {Effect} */
    var effect = {
      ctx: component_context,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
      ac: null,
    };

    if (sync) {
      try {
        update_effect(effect);
        effect.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect);
        throw e;
      }
    } else if (fn !== null) {
      schedule_effect(effect);
    }

    // if an effect has no dependencies, no DOM and no teardown function,
    // don't bother adding it to the effect tree
    var inert =
      sync &&
      effect.deps === null &&
      effect.first === null &&
      effect.nodes_start === null &&
      effect.teardown === null &&
      (effect.f & EFFECT_PRESERVED) === 0;

    if (!inert && push) {
      if (parent !== null) {
        push_effect(effect, parent);
      }

      // if we're in a derived, add the effect there too
      if (
        active_reaction !== null &&
        (active_reaction.f & DERIVED) !== 0 &&
        (type & ROOT_EFFECT) === 0
      ) {
        var derived = /** @type {Derived} */ (active_reaction);
        (derived.effects ??= []).push(effect);
      }
    }

    return effect;
  }

  /**
   * @param {() => void} fn
   */
  function teardown(fn) {
    const effect = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect, CLEAN);
    effect.teardown = fn;
    return effect;
  }

  /**
   * Internal representation of `$effect(...)`
   * @param {() => void | (() => void)} fn
   */
  function user_effect(fn) {
    validate_effect();

    // Non-nested `$effect(...)` in a component should be deferred
    // until the component is mounted
    var flags = /** @type {Effect} */ (active_effect).f;
    var defer = !active_reaction && (flags & BRANCH_EFFECT) !== 0 && (flags & EFFECT_RAN) === 0;

    if (defer) {
      // Top-level `$effect(...)` in an unmounted component — defer until mount
      var context = /** @type {ComponentContext} */ (component_context);
      (context.e ??= []).push(fn);
    } else {
      // Everything else — create immediately
      return create_user_effect(fn);
    }
  }

  /**
   * @param {() => void | (() => void)} fn
   */
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn, false);
  }

  /**
   * Internal representation of `$effect.pre(...)`
   * @param {() => void | (() => void)} fn
   * @returns {Effect}
   */
  function user_pre_effect(fn) {
    validate_effect();
    return create_effect(RENDER_EFFECT | USER_EFFECT, fn, true);
  }

  /**
   * An effect root whose children can transition out
   * @param {() => void} fn
   * @returns {(options?: { outro?: boolean }) => Promise<void>}
   */
  function component_root(fn) {
    Batch.ensure();
    const effect = create_effect(ROOT_EFFECT, fn, true);

    return (options = {}) => {
      return new Promise(fulfil => {
        if (options.outro) {
          pause_effect(effect, () => {
            destroy_effect(effect);
            fulfil(undefined);
          });
        } else {
          destroy_effect(effect);
          fulfil(undefined);
        }
      });
    };
  }

  /**
   * @param {() => void | (() => void)} fn
   * @returns {Effect}
   */
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }

  /**
   * @param {() => void | (() => void)} fn
   * @returns {Effect}
   */
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn, true);
  }

  /**
   * @param {(...expressions: any) => void | (() => void)} fn
   * @param {Array<() => any>} sync
   * @param {Array<() => Promise<any>>} async
   */
  function template_effect(fn, sync = [], async = []) {
    flatten(sync, async, values => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get$1)), true);
    });
  }

  /**
   * @param {(() => void)} fn
   * @param {number} flags
   */
  function block(fn, flags = 0) {
    var effect = create_effect(BLOCK_EFFECT | flags, fn, true);
    return effect;
  }

  /**
   * @param {(() => void)} fn
   * @param {boolean} [push]
   */
  function branch(fn, push = true) {
    return create_effect(BRANCH_EFFECT, fn, true, push);
  }

  /**
   * @param {Effect} effect
   */
  function execute_effect_teardown(effect) {
    var teardown = effect.teardown;
    if (teardown !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }

  /**
   * @param {Effect} signal
   * @param {boolean} remove_dom
   * @returns {void}
   */
  function destroy_effect_children(signal, remove_dom = false) {
    var effect = signal.first;
    signal.first = signal.last = null;

    while (effect !== null) {
      const controller = effect.ac;

      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }

      var next = effect.next;

      if ((effect.f & ROOT_EFFECT) !== 0) {
        // this is now an independent root
        effect.parent = null;
      } else {
        destroy_effect(effect, remove_dom);
      }

      effect = next;
    }
  }

  /**
   * @param {Effect} signal
   * @returns {void}
   */
  function destroy_block_effect_children(signal) {
    var effect = signal.first;

    while (effect !== null) {
      var next = effect.next;
      if ((effect.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect);
      }
      effect = next;
    }
  }

  /**
   * @param {Effect} effect
   * @param {boolean} [remove_dom]
   * @returns {void}
   */
  function destroy_effect(effect, remove_dom = true) {
    var removed = false;

    if (
      (remove_dom || (effect.f & HEAD_EFFECT) !== 0) &&
      effect.nodes_start !== null &&
      effect.nodes_end !== null
    ) {
      remove_effect_dom(effect.nodes_start, /** @type {TemplateNode} */ (effect.nodes_end));
      removed = true;
    }

    destroy_effect_children(effect, remove_dom && !removed);
    remove_reactions(effect, 0);
    set_signal_status(effect, DESTROYED);

    var transitions = effect.transitions;

    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }

    execute_effect_teardown(effect);

    var parent = effect.parent;

    // If the parent doesn't have any children, then skip this work altogether
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect);
    }

    // `first` and `child` are nulled out in destroy_effect_children
    // we don't null out `parent` so that error propagation can work correctly
    effect.next =
      effect.prev =
      effect.teardown =
      effect.ctx =
      effect.deps =
      effect.fn =
      effect.nodes_start =
      effect.nodes_end =
      effect.ac =
        null;
  }

  /**
   *
   * @param {TemplateNode | null} node
   * @param {TemplateNode} end
   */
  function remove_effect_dom(node, end) {
    while (node !== null) {
      /** @type {TemplateNode | null} */
      var next = node === end ? null : /** @type {TemplateNode} */ (get_next_sibling(node));

      node.remove();
      node = next;
    }
  }

  /**
   * Detach an effect from the effect tree, freeing up memory and
   * reducing the amount of work that happens on subsequent traversals
   * @param {Effect} effect
   */
  function unlink_effect(effect) {
    var parent = effect.parent;
    var prev = effect.prev;
    var next = effect.next;

    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;

    if (parent !== null) {
      if (parent.first === effect) parent.first = next;
      if (parent.last === effect) parent.last = prev;
    }
  }

  /**
   * When a block effect is removed, we don't immediately destroy it or yank it
   * out of the DOM, because it might have transitions. Instead, we 'pause' it.
   * It stays around (in memory, and in the DOM) until outro transitions have
   * completed, and if the state change is reversed then we _resume_ it.
   * A paused effect does not update, and the DOM subtree becomes inert.
   * @param {Effect} effect
   * @param {() => void} [callback]
   */
  function pause_effect(effect, callback) {
    /** @type {TransitionManager[]} */
    var transitions = [];

    pause_children(effect, transitions, true);

    run_out_transitions(transitions, () => {
      destroy_effect(effect);
      if (callback) callback();
    });
  }

  /**
   * @param {TransitionManager[]} transitions
   * @param {() => void} fn
   */
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }

  /**
   * @param {Effect} effect
   * @param {TransitionManager[]} transitions
   * @param {boolean} local
   */
  function pause_children(effect, transitions, local) {
    if ((effect.f & INERT) !== 0) return;
    effect.f ^= INERT;

    if (effect.transitions !== null) {
      for (const transition of effect.transitions) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }

    var child = effect.first;

    while (child !== null) {
      var sibling = child.next;
      var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
      // TODO we don't need to call pause_children recursively with a linked list in place
      // it's slightly more involved though as we have to account for `transparent` changing
      // through the tree.
      pause_children(child, transitions, transparent ? local : false);
      child = sibling;
    }
  }

  /**
   * The opposite of `pause_effect`. We call this if (for example)
   * `x` becomes falsy then truthy: `{#if x}...{/if}`
   * @param {Effect} effect
   */
  function resume_effect(effect) {
    resume_children(effect, true);
  }

  /**
   * @param {Effect} effect
   * @param {boolean} local
   */
  function resume_children(effect, local) {
    if ((effect.f & INERT) === 0) return;
    effect.f ^= INERT;

    // If a dependency of this effect changed while it was paused,
    // schedule the effect to update. we don't use `is_dirty`
    // here because we don't want to eagerly recompute a derived like
    // `{#if foo}{foo.bar()}{/if}` if `foo` is now `undefined
    if ((effect.f & CLEAN) === 0) {
      set_signal_status(effect, DIRTY);
      schedule_effect(effect);
    }

    var child = effect.first;

    while (child !== null) {
      var sibling = child.next;
      var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
      // TODO we don't need to call resume_children recursively with a linked list in place
      // it's slightly more involved though as we have to account for `transparent` changing
      // through the tree.
      resume_children(child, transparent ? local : false);
      child = sibling;
    }

    if (effect.transitions !== null) {
      for (const transition of effect.transitions) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }

  /** @import { Value } from '#client' */

  /**
   * @type {Set<Value> | null}
   * @deprecated
   */
  let captured_signals = null;

  /**
   * Capture an array of all the signals that are read when `fn` is called
   * @template T
   * @param {() => T} fn
   */
  function capture_signals(fn) {
    var previous_captured_signals = captured_signals;

    try {
      captured_signals = new Set();

      untrack(fn);

      if (previous_captured_signals !== null) {
        for (var signal of captured_signals) {
          previous_captured_signals.add(signal);
        }
      }

      return captured_signals;
    } finally {
      captured_signals = previous_captured_signals;
    }
  }

  /**
   * Invokes a function and captures all signals that are read during the invocation,
   * then invalidates them.
   * @param {() => any} fn
   * @deprecated
   */
  function invalidate_inner_signals(fn) {
    for (var signal of capture_signals(fn)) {
      internal_set(signal, signal.v);
    }
  }

  /** @import { Derived, Effect, Reaction, Signal, Source, Value } from '#client' */

  let is_updating_effect = false;

  /** @param {boolean} value */
  function set_is_updating_effect(value) {
    is_updating_effect = value;
  }

  let is_destroying_effect = false;

  /** @param {boolean} value */
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }

  /** @type {null | Reaction} */
  let active_reaction = null;

  let untracking = false;

  /** @param {null | Reaction} reaction */
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }

  /** @type {null | Effect} */
  let active_effect = null;

  /** @param {null | Effect} effect */
  function set_active_effect(effect) {
    active_effect = effect;
  }

  /**
   * When sources are created within a reaction, reading and writing
   * them within that reaction should not cause a re-run
   * @type {null | Source[]}
   */
  let current_sources = null;

  /** @param {Value} value */
  function push_reaction_value(value) {
    if (active_reaction !== null && true) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }

  /**
   * The dependencies of the reaction that is currently being executed. In many cases,
   * the dependencies are unchanged between runs, and so this will be `null` unless
   * and until a new dependency is accessed — we track this via `skipped_deps`
   * @type {null | Value[]}
   */
  let new_deps = null;

  let skipped_deps = 0;

  /**
   * Tracks writes that the effect it's executed in doesn't listen to yet,
   * so that the dependency can be added to the effect later on if it then reads it
   * @type {null | Source[]}
   */
  let untracked_writes = null;

  /** @param {null | Source[]} value */
  function set_untracked_writes(value) {
    untracked_writes = value;
  }

  /**
   * @type {number} Used by sources and deriveds for handling updates.
   * Version starts from 1 so that unowned deriveds differentiate between a created effect and a run one for tracing
   **/
  let write_version = 1;

  /** @type {number} Used to version each read of a source of derived to avoid duplicating depedencies inside a reaction */
  let read_version = 0;

  let update_version = read_version;

  /** @param {number} value */
  function set_update_version(value) {
    update_version = value;
  }

  // If we are working with a get() chain that has no active container,
  // to prevent memory leaks, we skip adding the reaction.
  let skip_reaction = false;

  function increment_write_version() {
    return ++write_version;
  }

  /**
   * Determines whether a derived or effect is dirty.
   * If it is MAYBE_DIRTY, will set the status to CLEAN
   * @param {Reaction} reaction
   * @returns {boolean}
   */
  function is_dirty(reaction) {
    var flags = reaction.f;

    if ((flags & DIRTY) !== 0) {
      return true;
    }

    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;

      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;

        // If we are working with a disconnected or an unowned signal that is now connected (due to an active effect)
        // then we need to re-connect the reaction to the dependency, unless the effect has already been destroyed
        // (which can happen if the derived is read by an async derived)
        if (
          (is_disconnected || is_unowned_connected) &&
          (active_effect === null || (active_effect.f & DESTROYED) === 0)
        ) {
          var derived = /** @type {Derived} */ (reaction);
          var parent = derived.parent;

          for (i = 0; i < length; i++) {
            dependency = dependencies[i];

            // We always re-add all reactions (even duplicates) if the derived was
            // previously disconnected, however we don't if it was unowned as we
            // de-duplicate dependencies in that case
            if (is_disconnected || !dependency?.reactions?.includes(derived)) {
              (dependency.reactions ??= []).push(derived);
            }
          }

          if (is_disconnected) {
            derived.f ^= DISCONNECTED;
          }
          // If the unowned derived is now fully connected to the graph again (it's unowned and reconnected, has a parent
          // and the parent is not unowned), then we can mark it as connected again, removing the need for the unowned
          // flag
          if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
            derived.f ^= UNOWNED;
          }
        }

        for (i = 0; i < length; i++) {
          dependency = dependencies[i];

          if (is_dirty(/** @type {Derived} */ (dependency))) {
            update_derived(/** @type {Derived} */ (dependency));
          }

          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }

      // Unowned signals should never be marked as clean unless they
      // are used within an active_effect without skip_reaction
      if (!is_unowned || (active_effect !== null && !skip_reaction)) {
        set_signal_status(reaction, CLEAN);
      }
    }

    return false;
  }

  /**
   * @param {Value} signal
   * @param {Effect} effect
   * @param {boolean} [root]
   */
  function schedule_possible_effect_self_invalidation(signal, effect, root = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;

    if (current_sources?.includes(signal)) {
      return;
    }

    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];

      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */ (reaction),
          effect,
          false,
        );
      } else if (effect === reaction) {
        if (root) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(/** @type {Effect} */ (reaction));
      }
    }
  }

  /** @param {Reaction} reaction */
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;

    var flags = reaction.f;

    new_deps = /** @type {null | Value[]} */ (null);
    skipped_deps = 0;
    untracked_writes = null;
    skip_reaction =
      (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;

    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;

    if (reaction.ac !== null) {
      without_reactive_context(() => {
        /** @type {AbortController} */ (reaction.ac).abort(STALE_REACTION);
      });

      reaction.ac = null;
    }

    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = /** @type {Function} */ (reaction.fn);
      var result = fn();
      var deps = reaction.deps;

      if (new_deps !== null) {
        var i;

        remove_reactions(reaction, skipped_deps);

        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }

        if (
          !skip_reaction ||
          // Deriveds that already have reactions can cleanup, so we still add them as reactions
          ((flags & DERIVED) !== 0 &&
            /** @type {import('#client').Derived} */ (reaction).reactions !== null)
        ) {
          for (i = skipped_deps; i < deps.length; i++) {
            (deps[i].reactions ??= []).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }

      // If we're inside an effect and we have untracked writes, then we need to
      // ensure that if any of those untracked writes result in re-invalidation
      // of the current effect, then that happens accordingly
      if (
        is_runes() &&
        untracked_writes !== null &&
        !untracking &&
        deps !== null &&
        (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0
      ) {
        for (i = 0; i < /** @type {Source[]} */ (untracked_writes).length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */ (reaction),
          );
        }
      }

      // If we are returning to an previous reaction then
      // we need to increment the read version to ensure that
      // any dependencies in this reaction aren't marked with
      // the same version
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;

        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */ (untracked_writes));
          }
        }
      }

      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }

      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }

  /**
   * @template V
   * @param {Reaction} signal
   * @param {Value<V>} dependency
   * @returns {void}
   */
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index = index_of.call(reactions, signal);
      if (index !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          // Swap with last element and then remove.
          reactions[index] = reactions[new_length];
          reactions.pop();
        }
      }
    }

    // If the derived has no reactions, then we can disconnect it from the graph,
    // allowing it to either reconnect in the future, or be GC'd by the VM.
    if (
      reactions === null &&
      (dependency.f & DERIVED) !== 0 &&
      // Destroying a child effect while updating a parent effect can cause a dependency to appear
      // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
      // allows us to skip the expensive work of disconnecting and immediately reconnecting it
      (new_deps === null || !new_deps.includes(dependency))
    ) {
      set_signal_status(dependency, MAYBE_DIRTY);
      // If we are working with a derived that is owned by an effect, then mark it as being
      // disconnected.
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      // Disconnect any reactions owned by this reaction
      destroy_derived_effects(/** @type {Derived} **/ (dependency));
      remove_reactions(/** @type {Derived} **/ (dependency), 0);
    }
  }

  /**
   * @param {Reaction} signal
   * @param {number} start_index
   * @returns {void}
   */
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;

    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }

  /**
   * @param {Effect} effect
   * @returns {void}
   */
  function update_effect(effect) {
    var flags = effect.f;

    if ((flags & DESTROYED) !== 0) {
      return;
    }

    set_signal_status(effect, CLEAN);

    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;

    active_effect = effect;
    is_updating_effect = true;

    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect);
      } else {
        destroy_effect_children(effect);
      }

      execute_effect_teardown(effect);
      var teardown = update_reaction(effect);
      effect.teardown = typeof teardown === 'function' ? teardown : null;
      effect.wv = write_version;

      // In DEV, increment versions of any sources that were written to during the effect,
      // so that they are correctly marked as dirty when the effect re-runs
      var dep;
      if (DEV && tracing_mode_flag && (effect.f & DIRTY) !== 0 && effect.deps !== null);
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
    }
  }

  /**
   * @template V
   * @param {Value<V>} signal
   * @returns {V}
   */
  function get$1(signal) {
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;

    captured_signals?.add(signal);

    // Register the dependency on the current reaction signal.
    if (active_reaction !== null && !untracking) {
      // if we're in a derived that is being read inside an _async_ derived,
      // it's possible that the effect was already destroyed. In this case,
      // we don't add the dependency, because that would create a memory leak
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;

      if (!destroyed && !current_sources?.includes(signal)) {
        var deps = active_reaction.deps;

        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          // we're in the effect init/update cycle
          if (signal.rv < read_version) {
            signal.rv = read_version;

            // If the signal is accessing the same dependencies in the same
            // order as it did last time, increment `skipped_deps`
            // rather than updating `new_deps`, which creates GC cost
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else if (!skip_reaction || !new_deps.includes(signal)) {
              // Normally we can push duplicated dependencies to `new_deps`, but if we're inside
              // an unowned derived because skip_reaction is true, then we need to ensure that
              // we don't have duplicates
              new_deps.push(signal);
            }
          }
        } else {
          // we're adding a dependency outside the init/update cycle
          // (i.e. after an `await`)
          (active_reaction.deps ??= []).push(signal);

          var reactions = signal.reactions;

          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!reactions.includes(active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    } else if (
      is_derived &&
      /** @type {Derived} */ (signal).deps === null &&
      /** @type {Derived} */ (signal).effects === null
    ) {
      var derived = /** @type {Derived} */ (signal);
      var parent = derived.parent;

      if (parent !== null && (parent.f & UNOWNED) === 0) {
        // If the derived is owned by another derived then mark it as unowned
        // as the derived value might have been referenced in a different context
        // since and thus its parent might not be its true owner anymore
        derived.f ^= UNOWNED;
      }
    }

    if (is_destroying_effect) {
      if (old_values.has(signal)) {
        return old_values.get(signal);
      }

      if (is_derived) {
        derived = /** @type {Derived} */ (signal);

        var value = derived.v;

        // if the derived is dirty and has reactions, or depends on the values that just changed, re-execute
        // (a derived can be maybe_dirty due to the effect destroy removing its last reaction)
        if (
          ((derived.f & CLEAN) === 0 && derived.reactions !== null) ||
          depends_on_old_values(derived)
        ) {
          value = execute_derived(derived);
        }

        old_values.set(derived, value);

        return value;
      }
    } else if (is_derived) {
      derived = /** @type {Derived} */ (signal);

      if (batch_deriveds?.has(derived)) {
        return batch_deriveds.get(derived);
      }

      if (is_dirty(derived)) {
        update_derived(derived);
      }
    }

    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }

    return signal.v;
  }

  /** @param {Derived} derived */
  function depends_on_old_values(derived) {
    if (derived.v === UNINITIALIZED) return true; // we don't know, so assume the worst
    if (derived.deps === null) return false;

    for (const dep of derived.deps) {
      if (old_values.has(dep)) {
        return true;
      }

      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(/** @type {Derived} */ (dep))) {
        return true;
      }
    }

    return false;
  }

  /**
   * When used inside a [`$derived`](https://svelte.dev/docs/svelte/$derived) or [`$effect`](https://svelte.dev/docs/svelte/$effect),
   * any state read inside `fn` will not be treated as a dependency.
   *
   * ```ts
   * $effect(() => {
   *   // this will run when `data` changes, but not when `time` changes
   *   save(data, {
   *     timestamp: untrack(() => time)
   *   });
   * });
   * ```
   * @template T
   * @param {() => T} fn
   * @returns {T}
   */
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }

  const STATUS_MASK = -7169;

  /**
   * @param {Signal} signal
   * @param {number} status
   * @returns {void}
   */
  function set_signal_status(signal, status) {
    signal.f = (signal.f & STATUS_MASK) | status;
  }

  /**
   * Possibly traverse an object and read all its properties so that they're all reactive in case this is `$state`.
   * Does only check first level of an object for performance reasons (heuristic should be good for 99% of all cases).
   * @param {any} value
   * @returns {void}
   */
  function deep_read_state(value) {
    if (typeof value !== 'object' || !value || value instanceof EventTarget) {
      return;
    }

    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key in value) {
        const prop = value[key];
        if (typeof prop === 'object' && prop && STATE_SYMBOL in prop) {
          deep_read(prop);
        }
      }
    }
  }

  /**
   * Deeply traverse an object and read all its properties
   * so that they're all reactive in case this is `$state`
   * @param {any} value
   * @param {Set<any>} visited
   * @returns {void}
   */
  function deep_read(value, visited = new Set()) {
    if (
      typeof value === 'object' &&
      value !== null &&
      // We don't want to traverse DOM elements
      !(value instanceof EventTarget) &&
      !visited.has(value)
    ) {
      visited.add(value);
      // When working with a possible SvelteDate, this
      // will ensure we capture changes to it.
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key in value) {
        try {
          deep_read(value[key], visited);
        } catch (e) {
          // continue
        }
      }
      const proto = get_prototype_of(value);
      if (
        proto !== Object.prototype &&
        proto !== Array.prototype &&
        proto !== Map.prototype &&
        proto !== Set.prototype &&
        proto !== Date.prototype
      ) {
        const descriptors = get_descriptors(proto);
        for (let key in descriptors) {
          const get = descriptors[key].get;
          if (get) {
            try {
              get.call(value);
            } catch (e) {
              // continue
            }
          }
        }
      }
    }
  }

  /**
   * Subset of delegated events which should be passive by default.
   * These two are already passive via browser defaults on window, document and body.
   * But since
   * - we're delegating them
   * - they happen often
   * - they apply to mobile which is generally less performant
   * we're marking them as passive by default for other elements, too.
   */
  const PASSIVE_EVENTS = ['touchstart', 'touchmove'];

  /**
   * Returns `true` if `name` is a passive event
   * @param {string} name
   */
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }

  /** @type {Set<string>} */
  const all_registered_events = new Set();

  /** @type {Set<(events: Array<string>) => void>} */
  const root_event_handles = new Set();

  /**
   * @param {string} event_name
   * @param {EventTarget} dom
   * @param {EventListener} [handler]
   * @param {AddEventListenerOptions} [options]
   */
  function create_event(event_name, dom, handler, options = {}) {
    /**
     * @this {EventTarget}
     */
    function target_handler(/** @type {Event} */ event) {
      if (!options.capture) {
        // Only call in the bubble phase, else delegated events would be called before the capturing events
        handle_event_propagation.call(dom, event);
      }
      if (!event.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event);
        });
      }
    }

    // Chrome has a bug where pointer events don't work when attached to a DOM element that has been cloned
    // with cloneNode() and the DOM element is disconnected from the document. To ensure the event works, we
    // defer the attachment till after it's been appended to the document. TODO: remove this once Chrome fixes
    // this bug. The same applies to wheel events and touch events.
    if (
      event_name.startsWith('pointer') ||
      event_name.startsWith('touch') ||
      event_name === 'wheel'
    ) {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }

    return target_handler;
  }

  /**
   * @param {string} event_name
   * @param {Element} dom
   * @param {EventListener} [handler]
   * @param {boolean} [capture]
   * @param {boolean} [passive]
   * @returns {void}
   */
  function event(event_name, dom, handler, capture, passive) {
    var options = { capture, passive };
    var target_handler = create_event(event_name, dom, handler, options);

    if (
      dom === document.body ||
      // @ts-ignore
      dom === window ||
      // @ts-ignore
      dom === document ||
      // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
      dom instanceof HTMLMediaElement
    ) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }

  /**
   * @param {Array<string>} events
   * @returns {void}
   */
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }

    for (var fn of root_event_handles) {
      fn(events);
    }
  }

  // used to store the reference to the currently propagated event
  // to prevent garbage collection between microtasks in Firefox
  // If the event object is GCed too early, the expando __root property
  // set on the event object is lost, causing the event delegation
  // to process the event twice
  let last_propagated_event = null;

  /**
   * @this {EventTarget}
   * @param {Event} event
   * @returns {void}
   */
  function handle_event_propagation(event) {
    var handler_element = this;
    var owner_document = /** @type {Node} */ (handler_element).ownerDocument;
    var event_name = event.type;
    var path = event.composedPath?.() || [];
    var current_target = /** @type {null | Element} */ (path[0] || event.target);

    last_propagated_event = event;

    // composedPath contains list of nodes the event has propagated through.
    // We check __root to skip all nodes below it in case this is a
    // parent of the __root node, which indicates that there's nested
    // mounted apps. In this case we don't want to trigger events multiple times.
    var path_idx = 0;

    // the `last_propagated_event === event` check is redundant, but
    // without it the variable will be DCE'd and things will
    // fail mysteriously in Firefox
    // @ts-expect-error is added below
    var handled_at = last_propagated_event === event && event.__root;

    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (
        at_idx !== -1 &&
        (handler_element === document || handler_element === /** @type {any} */ (window))
      ) {
        // This is the fallback document listener or a window listener, but the event was already handled
        // -> ignore, but set handle_at to document/window so that we're resetting the event
        // chain in case someone manually dispatches the same event object again.
        // @ts-expect-error
        event.__root = handler_element;
        return;
      }

      // We're deliberately not skipping if the index is higher, because
      // someone could create an event programmatically and emit it multiple times,
      // in which case we want to handle the whole propagation chain properly each time.
      // (this will only be a false negative if the event is dispatched multiple times and
      // the fallback document listener isn't reached in between, but that's super rare)
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        // handle_idx can theoretically be -1 (happened in some JSDOM testing scenarios with an event listener on the window object)
        // so guard against that, too, and assume that everything was handled at this point.
        return;
      }

      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }

    current_target = /** @type {Element} */ (path[path_idx] || event.target);
    // there can only be one delegated event per element, and we either already handled the current target,
    // or this is the very first target in the chain which has a non-delegated listener, in which case it's safe
    // to handle a possible delegated event on it later (through the root delegation listener for example).
    if (current_target === handler_element) return;

    // Proxy currentTarget to correct target
    define_property(event, 'currentTarget', {
      configurable: true,
      get() {
        return current_target || owner_document;
      },
    });

    // This started because of Chromium issue https://chromestatus.com/feature/5128696823545856,
    // where removal or moving of of the DOM can cause sync `blur` events to fire, which can cause logic
    // to run inside the current `active_reaction`, which isn't what we want at all. However, on reflection,
    // it's probably best that all event handled by Svelte have this behaviour, as we don't really want
    // an event handler to run in the context of another reaction or effect.
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);

    try {
      /**
       * @type {unknown}
       */
      var throw_error;
      /**
       * @type {unknown[]}
       */
      var other_errors = [];

      while (current_target !== null) {
        /** @type {null | Element} */
        var parent_element =
          current_target.assignedSlot ||
          current_target.parentNode ||
          /** @type {any} */ (current_target).host ||
          null;

        try {
          // @ts-expect-error
          var delegated = current_target['__' + event_name];

          if (
            delegated != null &&
            (!(/** @type {any} */ (current_target).disabled) ||
              // DOM could've been updated already by the time this is reached, so we check this as well
              // -> the target could not have been disabled because it emits the event in the first place
              event.target === current_target)
          ) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event, ...data]);
            } else {
              delegated.call(current_target, event);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }

      if (throw_error) {
        for (let error of other_errors) {
          // Throw the rest of the errors, one-by-one on a microtask
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      // @ts-expect-error is used above
      event.__root = handler_element;
      // @ts-ignore remove proxy on currentTarget
      delete event.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }

  /** @param {string} html */
  function create_fragment_from_html(html) {
    var elem = document.createElement('template');
    elem.innerHTML = html.replaceAll('<!>', '<!---->'); // XHTML compliance
    return elem.content;
  }

  /** @import { Effect, TemplateNode } from '#client' */
  /** @import { TemplateStructure } from './types' */

  /**
   * @param {TemplateNode} start
   * @param {TemplateNode | null} end
   */
  function assign_nodes(start, end) {
    var effect = /** @type {Effect} */ (active_effect);
    if (effect.nodes_start === null) {
      effect.nodes_start = start;
      effect.nodes_end = end;
    }
  }

  /**
   * @param {string} content
   * @param {number} flags
   * @returns {() => Node | Node[]}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function from_html(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;

    /** @type {Node} */
    var node;

    /**
     * Whether or not the first item is a text/element node. If not, we need to
     * create an additional comment node to act as `effect.nodes.start`
     */
    var has_start = !content.startsWith('<!>');

    return () => {
      if (node === undefined) {
        node = create_fragment_from_html(has_start ? content : '<!>' + content);
        if (!is_fragment) node = /** @type {Node} */ (get_first_child(node));
      }

      var clone = /** @type {TemplateNode} */ (
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );

      if (is_fragment) {
        var start = /** @type {TemplateNode} */ (get_first_child(clone));
        var end = /** @type {TemplateNode} */ (clone.lastChild);

        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }

      return clone;
    };
  }

  /**
   * Don't mark this as side-effect-free, hydration needs to walk all nodes
   * @param {any} value
   */
  function text(value = '') {
    {
      var t = create_text(value + '');
      assign_nodes(t, t);
      return t;
    }
  }

  function comment() {
    var frag = document.createDocumentFragment();
    var start = document.createComment('');
    var anchor = create_text();
    frag.append(start, anchor);

    assign_nodes(start, anchor);

    return frag;
  }

  /**
   * Assign the created (or in hydration mode, traversed) dom elements to the current block
   * and insert the elements into the dom (in client mode).
   * @param {Text | Comment | Element} anchor
   * @param {DocumentFragment | Element} dom
   */
  function append(anchor, dom) {
    if (anchor === null) {
      // edge case — void `<svelte:element>` with content
      return;
    }

    anchor.before(/** @type {Node} */ (dom));
  }

  /** @import { ComponentContext, Effect, TemplateNode } from '#client' */
  /** @import { Component, ComponentType, SvelteComponent, MountOptions } from '../../index.js' */

  /**
   * @param {Element} text
   * @param {string} value
   * @returns {void}
   */
  function set_text(text, value) {
    // For objects, we apply string coercion (which might make things like $state array references in the template reactive) before diffing
    var str = value == null ? '' : typeof value === 'object' ? value + '' : value;
    // @ts-expect-error
    if (str !== (text.__t ??= text.nodeValue)) {
      // @ts-expect-error
      text.__t = str;
      text.nodeValue = str + '';
    }
  }

  /**
   * Mounts a component to the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component.
   * Transitions will play during the initial render unless the `intro` option is set to `false`.
   *
   * @template {Record<string, any>} Props
   * @template {Record<string, any>} Exports
   * @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
   * @param {MountOptions<Props>} options
   * @returns {Exports}
   */
  function mount(component, options) {
    return _mount(component, options);
  }

  /** @type {Map<string, number>} */
  const document_listeners = new Map();

  /**
   * @template {Record<string, any>} Exports
   * @param {ComponentType<SvelteComponent<any>> | Component<any>} Component
   * @param {MountOptions} options
   * @returns {Exports}
   */
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();

    /** @type {Set<string>} */
    var registered_events = new Set();

    /** @param {Array<string>} events */
    var event_handle = events => {
      for (var i = 0; i < events.length; i++) {
        var event_name = events[i];

        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);

        var passive = is_passive_event(event_name);

        // Add the event listener to both the container and the document.
        // The container listener ensures we catch events from within in case
        // the outer content stops propagation of the event.
        target.addEventListener(event_name, handle_event_propagation, { passive });

        var n = document_listeners.get(event_name);

        if (n === undefined) {
          // The document listener ensures we catch events that originate from elements that were
          // manually moved outside of the container (e.g. via manual portals).
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };

    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);

    /** @type {Exports} */
    // @ts-expect-error will be defined because the render effect runs synchronously
    var component = undefined;

    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());

      branch(() => {
        if (context) {
          push({});
          var ctx = /** @type {ComponentContext} */ (component_context);
          ctx.c = context;
        }

        if (events) {
          // We can't spread the object or else we'd lose the state proxy stuff, if it is one
          /** @type {any} */ (props).$$events = events;
        }
        // @ts-expect-error the public typings are not what the actual function looks like
        component = Component(anchor_node, props) || {};

        if (context) {
          pop();
        }
      });

      return () => {
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);

          var n = /** @type {number} */ (document_listeners.get(event_name));

          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }

        root_event_handles.delete(event_handle);

        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });

    mounted_components.set(component, unmount);
    return component;
  }

  /**
   * References of the components that were mounted or hydrated.
   * Uses a `WeakMap` to avoid memory leaks.
   */
  let mounted_components = new WeakMap();

  /** @import { Effect, TemplateNode } from '#client' */
  /** @import { Batch } from '../../reactivity/batch.js'; */

  // TODO reinstate https://github.com/sveltejs/svelte/pull/15250

  /**
   * @param {TemplateNode} node
   * @param {(branch: (fn: (anchor: Node) => void, flag?: boolean) => void) => void} fn
   * @param {boolean} [elseif] True if this is an `{:else if ...}` block rather than an `{#if ...}`, as that affects which transitions are considered 'local'
   * @returns {void}
   */
  function if_block(node, fn, elseif = false) {
    var anchor = node;

    /** @type {Effect | null} */
    var consequent_effect = null;

    /** @type {Effect | null} */
    var alternate_effect = null;

    /** @type {typeof UNINITIALIZED | boolean | null} */
    var condition = UNINITIALIZED;

    var flags = elseif ? EFFECT_TRANSPARENT : 0;

    var has_branch = false;

    const set_branch = (/** @type {(anchor: Node) => void} */ fn, flag = true) => {
      has_branch = true;
      update_branch(flag, fn);
    };

    /** @type {DocumentFragment | null} */
    var offscreen_fragment = null;

    function commit() {
      if (offscreen_fragment !== null) {
        // remove the anchor
        /** @type {Text} */ (offscreen_fragment.lastChild).remove();

        anchor.before(offscreen_fragment);
        offscreen_fragment = null;
      }

      var active = condition ? consequent_effect : alternate_effect;
      var inactive = condition ? alternate_effect : consequent_effect;

      if (active) {
        resume_effect(active);
      }

      if (inactive) {
        pause_effect(inactive, () => {
          if (condition) {
            alternate_effect = null;
          } else {
            consequent_effect = null;
          }
        });
      }
    }

    const update_branch = (
      /** @type {boolean | null} */ new_condition,
      /** @type {null | ((anchor: Node) => void)} */ fn,
    ) => {
      if (condition === (condition = new_condition)) return;

      var defer = should_defer_append();
      var target = anchor;

      if (defer) {
        offscreen_fragment = document.createDocumentFragment();
        offscreen_fragment.append((target = create_text()));
      }

      if (condition) {
        consequent_effect ??= fn && branch(() => fn(target));
      } else {
        alternate_effect ??= fn && branch(() => fn(target));
      }

      if (defer) {
        var batch = /** @type {Batch} */ (current_batch);

        var active = condition ? consequent_effect : alternate_effect;
        var inactive = condition ? alternate_effect : consequent_effect;

        if (active) batch.skipped_effects.delete(active);
        if (inactive) batch.skipped_effects.add(inactive);

        batch.add_callback(commit);
      } else {
        commit();
      }
    };

    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
  }

  /** @import { EachItem, EachState, Effect, MaybeSource, Source, TemplateNode, TransitionManager, Value } from '#client' */
  /** @import { Batch } from '../../reactivity/batch.js'; */

  /**
   * @param {any} _
   * @param {number} i
   */
  function index(_, i) {
    return i;
  }

  /**
   * Pause multiple effects simultaneously, and coordinate their
   * subsequent destruction. Used in each blocks
   * @param {EachState} state
   * @param {EachItem[]} items
   * @param {null | Node} controlled_anchor
   */
  function pause_effects(state, items, controlled_anchor) {
    var items_map = state.items;

    /** @type {TransitionManager[]} */
    var transitions = [];
    var length = items.length;

    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }

    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    // If we have a controlled anchor, it means that the each block is inside a single
    // DOM element, so we can apply a fast-path for clearing the contents of the element.
    if (is_controlled) {
      var parent_node = /** @type {Element} */ (
        /** @type {Element} */ (controlled_anchor).parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(/** @type {Element} */ (controlled_anchor));
      items_map.clear();
      link(state, items[0].prev, items[length - 1].next);
    }

    run_out_transitions(transitions, () => {
      for (var i = 0; i < length; i++) {
        var item = items[i];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }

  /**
   * @template V
   * @param {Element | Comment} node The next sibling node, or the parent node if this is a 'controlled' block
   * @param {number} flags
   * @param {() => V[]} get_collection
   * @param {(value: V, index: number) => any} get_key
   * @param {(anchor: Node, item: MaybeSource<V>, index: MaybeSource<number>) => void} render_fn
   * @param {null | ((anchor: Node) => void)} fallback_fn
   * @returns {void}
   */
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;

    /** @type {EachState} */
    var state = { flags, items: new Map(), first: null };

    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;

    if (is_controlled) {
      var parent_node = /** @type {Element} */ (node);

      anchor = parent_node.appendChild(create_text());
    }

    /** @type {Effect | null} */
    var fallback = null;

    var was_empty = false;

    /** @type {Map<any, EachItem>} */
    var offscreen_items = new Map();

    // TODO: ideally we could use derived for runes mode but because of the ability
    // to use a store which can be mutated, we can't do that here as mutating a store
    // will still result in the collection array being the same from the store
    var each_array = derived_safe_equal(() => {
      var collection = get_collection();

      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });

    /** @type {V[]} */
    var array;

    /** @type {Effect} */
    var each_effect;

    function commit() {
      reconcile(
        each_effect,
        array,
        state,
        offscreen_items,
        anchor,
        render_fn,
        flags,
        get_key,
        get_collection,
      );

      if (fallback_fn !== null) {
        if (array.length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
    }

    block(() => {
      // store a reference to the effect so that we can update the start/end nodes in reconciliation
      each_effect ??= /** @type {Effect} */ (active_effect);

      array = /** @type {V[]} */ (get$1(each_array));
      var length = array.length;

      if (was_empty && length === 0) {
        // ignore updates if the array is empty,
        // and it already was empty on previous run
        return;
      }
      was_empty = length === 0;

      // this is separate to the previous block because `hydrating` might change
      var item, i, value, key;

      {
        if (should_defer_append()) {
          var keys = new Set();
          var batch = /** @type {Batch} */ (current_batch);

          for (i = 0; i < length; i += 1) {
            value = array[i];
            key = get_key(value, i);

            var existing = state.items.get(key) ?? offscreen_items.get(key);

            if (existing) {
              // update before reconciliation, to trigger any async updates
              if ((flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0) {
                update_item(existing, value, i, flags);
              }
            } else {
              item = create_item(
                null,
                state,
                null,
                null,
                value,
                key,
                i,
                render_fn,
                flags,
                get_collection,
                true,
              );

              offscreen_items.set(key, item);
            }

            keys.add(key);
          }

          for (const [key, item] of state.items) {
            if (!keys.has(key)) {
              batch.skipped_effects.add(item.e);
            }
          }

          batch.add_callback(commit);
        } else {
          commit();
        }
      }

      // When we mount the each block for the first time, the collection won't be
      // connected to this effect as the effect hasn't finished running yet and its deps
      // won't be assigned. However, it's possible that when reconciling the each block
      // that a mutation occurred and it's made the collection MAYBE_DIRTY, so reading the
      // collection again can provide consistency to the reactive graph again as the deriveds
      // will now be `CLEAN`.
      get$1(each_array);
    });
  }

  /**
   * Add, remove, or reorder items output by an each block as its input changes
   * @template V
   * @param {Effect} each_effect
   * @param {Array<V>} array
   * @param {EachState} state
   * @param {Map<any, EachItem>} offscreen_items
   * @param {Element | Comment | Text} anchor
   * @param {(anchor: Node, item: MaybeSource<V>, index: number | Source<number>, collection: () => V[]) => void} render_fn
   * @param {number} flags
   * @param {(value: V, index: number) => any} get_key
   * @param {() => V[]} get_collection
   * @returns {void}
   */
  function reconcile(
    each_effect,
    array,
    state,
    offscreen_items,
    anchor,
    render_fn,
    flags,
    get_key,
    get_collection,
  ) {
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;

    var length = array.length;
    var items = state.items;
    var first = state.first;
    var current = first;

    /** @type {undefined | Set<EachItem>} */
    var seen;

    /** @type {EachItem | null} */
    var prev = null;

    /** @type {undefined | Set<EachItem>} */
    var to_animate;

    /** @type {EachItem[]} */
    var matched = [];

    /** @type {EachItem[]} */
    var stashed = [];

    /** @type {V} */
    var value;

    /** @type {any} */
    var key;

    /** @type {EachItem | undefined} */
    var item;

    /** @type {number} */
    var i;

    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);

        if (item !== undefined) {
          item.a?.measure();
          (to_animate ??= new Set()).add(item);
        }
      }
    }

    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);

      item = items.get(key);

      if (item === undefined) {
        var pending = offscreen_items.get(key);

        if (pending !== undefined) {
          offscreen_items.delete(key);
          items.set(key, pending);

          var next = prev ? prev.next : current;

          link(state, prev, pending);
          link(state, pending, next);

          move(pending, next, anchor);
          prev = pending;
        } else {
          var child_anchor = current ? /** @type {TemplateNode} */ (current.e.nodes_start) : anchor;

          prev = create_item(
            child_anchor,
            state,
            prev,
            prev === null ? state.first : prev.next,
            value,
            key,
            i,
            render_fn,
            flags,
            get_collection,
          );
        }

        items.set(key, prev);

        matched = [];
        stashed = [];

        current = prev.next;
        continue;
      }

      if (should_update) {
        update_item(item, value, i, flags);
      }

      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          item.a?.unfix();
          (to_animate ??= new Set()).delete(item);
        }
      }

      if (item !== current) {
        if (seen !== undefined && seen.has(item)) {
          if (matched.length < stashed.length) {
            // more efficient to move later items to the front
            var start = stashed[0];
            var j;

            prev = start.prev;

            var a = matched[0];
            var b = matched[matched.length - 1];

            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }

            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }

            link(state, a.prev, b.next);
            link(state, prev, a);
            link(state, b, start);

            current = start;
            prev = b;
            i -= 1;

            matched = [];
            stashed = [];
          } else {
            // more efficient to move earlier items to the back
            seen.delete(item);
            move(item, current, anchor);

            link(state, item.prev, item.next);
            link(state, item, prev === null ? state.first : prev.next);
            link(state, prev, item);

            prev = item;
          }

          continue;
        }

        matched = [];
        stashed = [];

        while (current !== null && current.k !== key) {
          // If the each block isn't inert and an item has an effect that is already inert,
          // skip over adding it to our seen Set as the item is already being handled
          if ((current.e.f & INERT) === 0) {
            (seen ??= new Set()).add(current);
          }
          stashed.push(current);
          current = current.next;
        }

        if (current === null) {
          continue;
        }

        item = current;
      }

      matched.push(item);
      prev = item;
      current = item.next;
    }

    if (current !== null || seen !== undefined) {
      var to_destroy = seen === undefined ? [] : array_from(seen);

      while (current !== null) {
        // If the each block isn't inert, then inert effects are currently outroing and will be removed once the transition is finished
        if ((current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }

      var destroy_length = to_destroy.length;

      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;

        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].a?.measure();
          }

          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].a?.fix();
          }
        }

        pause_effects(state, to_destroy, controlled_anchor);
      }
    }

    if (is_animated) {
      queue_micro_task(() => {
        if (to_animate === undefined) return;
        for (item of to_animate) {
          item.a?.apply();
        }
      });
    }

    each_effect.first = state.first && state.first.e;
    each_effect.last = prev && prev.e;

    for (var unused of offscreen_items.values()) {
      destroy_effect(unused.e);
    }

    offscreen_items.clear();
  }

  /**
   * @param {EachItem} item
   * @param {any} value
   * @param {number} index
   * @param {number} type
   * @returns {void}
   */
  function update_item(item, value, index, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }

    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(/** @type {Value<number>} */ (item.i), index);
    } else {
      item.i = index;
    }
  }

  /**
   * @template V
   * @param {Node | null} anchor
   * @param {EachState} state
   * @param {EachItem | null} prev
   * @param {EachItem | null} next
   * @param {V} value
   * @param {unknown} key
   * @param {number} index
   * @param {(anchor: Node, item: V | Source<V>, index: number | Value<number>, collection: () => V[]) => void} render_fn
   * @param {number} flags
   * @param {() => V[]} get_collection
   * @param {boolean} [deferred]
   * @returns {EachItem}
   */
  function create_item(
    anchor,
    state,
    prev,
    next,
    value,
    key,
    index,
    render_fn,
    flags,
    get_collection,
    deferred,
  ) {
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;

    var v = reactive ? (mutable ? mutable_source(value, false, false) : source(value)) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index : source(index);

    /** @type {EachItem} */
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next,
    };

    try {
      if (anchor === null) {
        var fragment = document.createDocumentFragment();
        fragment.append((anchor = create_text()));
      }

      item.e = branch(
        () => render_fn(/** @type {Node} */ (anchor), v, i, get_collection),
        hydrating,
      );

      item.e.prev = prev && prev.e;
      item.e.next = next && next.e;

      if (prev === null) {
        if (!deferred) {
          state.first = item;
        }
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }

      if (next !== null) {
        next.prev = item;
        next.e.prev = item.e;
      }

      return item;
    } finally {
    }
  }

  /**
   * @param {EachItem} item
   * @param {EachItem | null} next
   * @param {Text | Element | Comment} anchor
   */
  function move(item, next, anchor) {
    var end = item.next ? /** @type {TemplateNode} */ (item.next.e.nodes_start) : anchor;

    var dest = next ? /** @type {TemplateNode} */ (next.e.nodes_start) : anchor;
    var node = /** @type {TemplateNode} */ (item.e.nodes_start);

    while (node !== null && node !== end) {
      var next_node = /** @type {TemplateNode} */ (get_next_sibling(node));
      dest.before(node);
      node = next_node;
    }
  }

  /**
   * @param {EachState} state
   * @param {EachItem | null} prev
   * @param {EachItem | null} next
   */
  function link(state, prev, next) {
    if (prev === null) {
      state.first = next;
    } else {
      prev.next = next;
      prev.e.next = next && next.e;
    }

    if (next !== null) {
      next.prev = prev;
      next.e.prev = prev && prev.e;
    }
  }

  /** @import { Effect, TemplateNode } from '#client' */

  /**
   * @param {Element | Text | Comment} node
   * @param {() => string} get_value
   * @param {boolean} [svg]
   * @param {boolean} [mathml]
   * @param {boolean} [skip_warning]
   * @returns {void}
   */
  function html(node, get_value, svg = false, mathml = false, skip_warning = false) {
    var anchor = node;

    var value = '';

    template_effect(() => {
      var effect = /** @type {Effect} */ (active_effect);

      if (value === (value = get_value() ?? '')) {
        return;
      }

      if (effect.nodes_start !== null) {
        remove_effect_dom(effect.nodes_start, /** @type {TemplateNode} */ (effect.nodes_end));
        effect.nodes_start = effect.nodes_end = null;
      }

      if (value === '') return;

      var html = value + '';
      if (svg) html = `<svg>${html}</svg>`;
      else if (mathml) html = `<math>${html}</math>`;

      // Don't use create_fragment_with_script_from_html here because that would mean script tags are executed.
      // @html is basically `.innerHTML = ...` and that doesn't execute scripts either due to security reasons.
      /** @type {DocumentFragment | Element} */
      var node = create_fragment_from_html(html);

      if (svg || mathml) {
        node = /** @type {Element} */ (get_first_child(node));
      }

      assign_nodes(
        /** @type {TemplateNode} */ (get_first_child(node)),
        /** @type {TemplateNode} */ (node.lastChild),
      );

      if (svg || mathml) {
        while (get_first_child(node)) {
          anchor.before(/** @type {Node} */ (get_first_child(node)));
        }
      } else {
        anchor.before(node);
      }
    });
  }

  function r(e) {
    var t,
      f,
      n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
      } else for (f in e) e[f] && (n && (n += ' '), (n += f));
    return n;
  }
  function clsx$1() {
    for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++)
      (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
    return n;
  }

  /**
   * Small wrapper around clsx to preserve Svelte's (weird) handling of falsy values.
   * TODO Svelte 6 revisit this, and likely turn all falsy values into the empty string (what clsx also does)
   * @param  {any} value
   */
  function clsx(value) {
    if (typeof value === 'object') {
      return clsx$1(value);
    } else {
      return value ?? '';
    }
  }

  /**
   * @param {any} value
   * @param {string | null} [hash]
   * @param {Record<string, boolean>} [directives]
   * @returns {string | null}
   */
  function to_class(value, hash, directives) {
    var classname = value == null ? '' : '' + value;

    return classname === '' ? null : classname;
  }

  /**
   * @param {Element} dom
   * @param {boolean | number} is_html
   * @param {string | null} value
   * @param {string} [hash]
   * @param {Record<string, any>} [prev_classes]
   * @param {Record<string, any>} [next_classes]
   * @returns {Record<string, boolean> | undefined}
   */
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    // @ts-expect-error need to add __className to patched prototype
    var prev = dom.__className;

    if (
      prev !== value ||
      prev === undefined // for edge case of `class={undefined}`
    ) {
      var next_class_name = to_class(value);

      {
        // Removing the attribute when the value is only an empty string causes
        // performance issues vs simply making the className an empty string. So
        // we should only remove the class if the value is nullish
        // and there no hash/directives :
        if (next_class_name == null) {
          dom.removeAttribute('class');
        } else {
          dom.className = next_class_name;
        }
      }

      // @ts-expect-error need to add __className to patched prototype
      dom.__className = value;
    }

    return next_classes;
  }

  /**
   * Selects the correct option(s) (depending on whether this is a multiple select)
   * @template V
   * @param {HTMLSelectElement} select
   * @param {V} value
   * @param {boolean} mounting
   */
  function select_option(select, value, mounting = false) {
    if (select.multiple) {
      // If value is null or undefined, keep the selection as is
      if (value == undefined) {
        return;
      }

      // If not an array, warn and keep the selection as is
      if (!is_array(value)) {
        return select_multiple_invalid_value();
      }

      // Otherwise, update the selection
      for (var option of select.options) {
        option.selected = value.includes(get_option_value(option));
      }

      return;
    }

    for (option of select.options) {
      var option_value = get_option_value(option);
      if (is(option_value, value)) {
        option.selected = true;
        return;
      }
    }

    if (!mounting || value !== undefined) {
      select.selectedIndex = -1; // no option should be selected
    }
  }

  /**
   * Selects the correct option(s) if `value` is given,
   * and then sets up a mutation observer to sync the
   * current selection to the dom when it changes. Such
   * changes could for example occur when options are
   * inside an `#each` block.
   * @param {HTMLSelectElement} select
   */
  function init_select(select) {
    var observer = new MutationObserver(() => {
      // @ts-ignore
      select_option(select, select.__value);
      // Deliberately don't update the potential binding value,
      // the model should be preserved unless explicitly changed
    });

    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true, // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ['value'],
    });

    teardown(() => {
      observer.disconnect();
    });
  }

  /**
   * @param {HTMLSelectElement} select
   * @param {() => unknown} get
   * @param {(value: unknown) => void} set
   * @returns {void}
   */
  function bind_select_value(select, get, set = get) {
    var mounting = true;

    listen_to_event_and_reset_event(select, 'change', is_reset => {
      var query = is_reset ? '[selected]' : ':checked';
      /** @type {unknown} */
      var value;

      if (select.multiple) {
        value = [].map.call(select.querySelectorAll(query), get_option_value);
      } else {
        /** @type {HTMLOptionElement | null} */
        var selected_option =
          select.querySelector(query) ??
          // will fall back to first non-disabled option if no option is selected
          select.querySelector('option:not([disabled])');
        value = selected_option && get_option_value(selected_option);
      }

      set(value);
    });

    // Needs to be an effect, not a render_effect, so that in case of each loops the logic runs after the each block has updated
    effect(() => {
      var value = get();
      select_option(select, value, mounting);

      // Mounting and value undefined -> take selection from dom
      if (mounting && value === undefined) {
        /** @type {HTMLOptionElement | null} */
        var selected_option = select.querySelector(':checked');
        if (selected_option !== null) {
          value = get_option_value(selected_option);
          set(value);
        }
      }

      // @ts-ignore
      select.__value = value;
      mounting = false;
    });

    init_select(select);
  }

  /** @param {HTMLOptionElement} option */
  function get_option_value(option) {
    // __value only exists if the <option> has a value attribute
    if ('__value' in option) {
      return option.__value;
    } else {
      return option.value;
    }
  }

  /** @import { Effect } from '#client' */

  const IS_CUSTOM_ELEMENT = Symbol('is custom element');
  const IS_HTML = Symbol('is html');

  /**
   * @param {Element} element
   * @param {any} value
   */
  function set_value(element, value) {
    var attributes = get_attributes(element);

    if (
      attributes.value ===
        (attributes.value =
          // treat null and undefined the same for the initial value
          value ?? undefined) ||
      // @ts-expect-error
      // `progress` elements always need their value set when it's `0`
      (element.value === value && (value !== 0 || element.nodeName !== 'PROGRESS'))
    ) {
      return;
    }

    // @ts-expect-error
    element.value = value ?? '';
  }

  /**
   * @param {Element} element
   * @param {boolean} checked
   */
  function set_checked(element, checked) {
    var attributes = get_attributes(element);

    if (
      attributes.checked ===
      (attributes.checked =
        // treat null and undefined the same for the initial value
        checked ?? undefined)
    ) {
      return;
    }

    // @ts-expect-error
    element.checked = checked;
  }

  /**
   * @param {Element} element
   * @param {string} attribute
   * @param {string | null} value
   * @param {boolean} [skip_warning]
   */
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = get_attributes(element);

    if (attributes[attribute] === (attributes[attribute] = value)) return;

    if (attribute === 'loading') {
      // @ts-expect-error
      element[LOADING_ATTR_SYMBOL] = value;
    }

    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== 'string' && get_setters(element).includes(attribute)) {
      // @ts-ignore
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }

  /**
   *
   * @param {Element} element
   */
  function get_attributes(element) {
    return /** @type {Record<string | symbol, unknown>} **/ (
      // @ts-expect-error
      element.__attributes ??= {
        [IS_CUSTOM_ELEMENT]: element.nodeName.includes('-'),
        [IS_HTML]: element.namespaceURI === NAMESPACE_HTML,
      }
    );
  }

  /** @type {Map<string, string[]>} */
  var setters_cache = new Map();

  /** @param {Element} element */
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, (setters = []));

    var descriptors;
    var proto = element; // In the case of custom elements there might be setters on the instance
    var element_proto = Element.prototype;

    // Stop at Element, from there on there's only unnecessary setters we're not interested in
    // Do not use contructor.name here as that's unreliable in some browser environments
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);

      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }

      proto = get_prototype_of(proto);
    }

    return setters;
  }

  /** @import { ComponentContextLegacy } from '#client' */

  /**
   * Legacy-mode only: Call `onMount` callbacks and set up `beforeUpdate`/`afterUpdate` effects
   * @param {boolean} [immutable]
   */
  function init(immutable = false) {
    const context = /** @type {ComponentContextLegacy} */ (component_context);

    const callbacks = context.l.u;
    if (!callbacks) return;

    let props = () => deep_read_state(context.s);

    if (immutable) {
      let version = 0;
      let prev = /** @type {Record<string, any>} */ ({});

      // In legacy immutable mode, before/afterUpdate only fire if the object identity of a prop changes
      const d = derived(() => {
        let changed = false;
        const props = context.s;
        for (const key in props) {
          if (props[key] !== prev[key]) {
            prev[key] = props[key];
            changed = true;
          }
        }
        if (changed) version++;
        return version;
      });

      props = () => get$1(d);
    }

    // beforeUpdate
    if (callbacks.b.length) {
      user_pre_effect(() => {
        observe_all(context, props);
        run_all(callbacks.b);
      });
    }

    // onMount (must run before afterUpdate)
    user_effect(() => {
      const fns = untrack(() => callbacks.m.map(run));
      return () => {
        for (const fn of fns) {
          if (typeof fn === 'function') {
            fn();
          }
        }
      };
    });

    // afterUpdate
    if (callbacks.a.length) {
      user_effect(() => {
        observe_all(context, props);
        run_all(callbacks.a);
      });
    }
  }

  /**
   * Invoke the getter of all signals associated with a component
   * so they can be registered to the effect this function is called in.
   * @param {ComponentContextLegacy} context
   * @param {(() => void)} props
   */
  function observe_all(context, props) {
    if (context.l.s) {
      for (const signal of context.l.s) get$1(signal);
    }

    props();
  }

  /** @import { Readable } from './public' */

  /**
   * @template T
   * @param {Readable<T> | null | undefined} store
   * @param {(value: T) => void} run
   * @param {(value: T) => void} [invalidate]
   * @returns {() => void}
   */
  function subscribe_to_store(store, run, invalidate) {
    if (store == null) {
      // @ts-expect-error
      run(undefined);

      return noop;
    }

    // Svelte store takes a private second argument
    // StartStopNotifier could mutate state, and we want to silence the corresponding validation error
    const unsub = untrack(() =>
      store.subscribe(
        run,
        // @ts-expect-error
        invalidate,
      ),
    );

    // Also support RxJS
    // @ts-expect-error TODO fix this in the types?
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }

  /** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
  /** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

  /**
   * Get the current value from a store by subscribing and immediately unsubscribing.
   *
   * @template T
   * @param {Readable<T>} store
   * @returns {T}
   */
  function get(store) {
    let value;
    subscribe_to_store(store, _ => (value = _))();
    // @ts-expect-error
    return value;
  }

  /** @import { StoreReferencesContainer } from '#client' */
  /** @import { Store } from '#shared' */

  let IS_UNMOUNTED = Symbol();

  /**
   * Gets the current value of a store. If the store isn't subscribed to yet, it will create a proxy
   * signal that will be updated when the store is. The store references container is needed to
   * track reassignments to stores and to track the correct component context.
   * @template V
   * @param {Store<V> | null | undefined} store
   * @param {string} store_name
   * @param {StoreReferencesContainer} stores
   * @returns {V}
   */
  function store_get(store, store_name, stores) {
    const entry = (stores[store_name] ??= {
      store: null,
      source: mutable_source(undefined),
      unsubscribe: noop,
    });

    // if the component that setup this is already unmounted we don't want to register a subscription
    if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
      entry.unsubscribe();
      entry.store = store ?? null;

      if (store == null) {
        entry.source.v = undefined; // see synchronous callback comment below
        entry.unsubscribe = noop;
      } else {
        var is_synchronous_callback = true;

        entry.unsubscribe = subscribe_to_store(store, v => {
          if (is_synchronous_callback) {
            // If the first updates to the store value (possibly multiple of them) are synchronously
            // inside a derived, we will hit the `state_unsafe_mutation` error if we `set` the value
            entry.source.v = v;
          } else {
            set(entry.source, v);
          }
        });

        is_synchronous_callback = false;
      }
    }

    // if the component that setup this stores is already unmounted the source will be out of sync
    // so we just use the `get` for the stores, less performant but it avoids to create a memory leak
    // and it will keep the value consistent
    if (store && IS_UNMOUNTED in stores) {
      return get(store);
    }

    return get$1(entry.source);
  }

  /**
   * Unsubscribes from all auto-subscribed stores on destroy
   * @returns {[StoreReferencesContainer, ()=>void]}
   */
  function setup_stores() {
    /** @type {StoreReferencesContainer} */
    const stores = {};

    function cleanup() {
      teardown(() => {
        for (var store_name in stores) {
          const ref = stores[store_name];
          ref.unsubscribe();
        }
        define_property(stores, IS_UNMOUNTED, {
          enumerable: false,
          value: true,
        });
      });
    }

    return [stores, cleanup];
  }

  /**
   * Updates a store with a new value.
   * @param {Store<V>} store  the store to update
   * @param {any} expression  the expression that mutates the store
   * @param {V} new_value  the new store value
   * @template V
   */
  function store_mutate(store, expression, new_value) {
    store.set(new_value);
    return expression;
  }

  /** @import { Effect, Source } from './types.js' */

  /**
   * This function is responsible for synchronizing a possibly bound prop with the inner component state.
   * It is used whenever the compiler sees that the component writes to the prop, or when it has a default prop_value.
   * @template V
   * @param {Record<string, unknown>} props
   * @param {string} key
   * @param {number} flags
   * @param {V | (() => V)} [fallback]
   * @returns {(() => V | ((arg: V) => V) | ((arg: V, mutation: boolean) => V))}
   */
  function prop(props, key, flags, fallback) {
    var fallback_value = /** @type {V} */ (fallback);
    var fallback_dirty = true;

    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;

        fallback_value = /** @type {V} */ (fallback);
      }

      return fallback_value;
    };

    var initial_value;

    {
      initial_value = /** @type {V} */ (props[key]);
    }

    if (initial_value === undefined && fallback !== undefined) {
      initial_value = get_fallback();
    }

    /** @type {() => V} */
    var getter;

    {
      getter = () => {
        var value = /** @type {V} */ (props[key]);
        if (value === undefined) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    }

    // prop is never written to — we only need a getter
    {
      return getter;
    }
  }

  const animation =
    '@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n  -webkit-animation: spin-reverse 1s linear infinite;\r\n  animation: spin-reverse 1s linear infinite;\r\n}\r\n';

  const bookmarks =
    '#MangaOnlineViewer #BookmarksPanel {\r\n  position: fixed;\r\n  top: 10%;\r\n  width: 50%;\r\n  left: 25%;\r\n  right: 25%;\r\n  text-align: center;\r\n  max-height: 70%;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: scaleY(0);\r\n  z-index: 1000;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksPanel.visible {\r\n  transform: scaleY(1);\r\n  display: block;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList {\r\n  padding: 0 15px;\r\n  overflow: auto;\r\n  max-height: 60vh;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {\r\n  flex-basis: 90%;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {\r\n  width: 90px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkFunctions {\r\n  width: 75px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  flex-basis: 55%;\r\n}\r\n';

  const comments =
    '#MangaOnlineViewer #CommentsPanel {\r\n  position: static;\r\n  width: 90%;\r\n  height: 0;\r\n  top: 5%;\r\n  left: 5%;\r\n  text-align: center;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: scaleY(0);\r\n  z-index: 1000;\r\n  overflow-y: initial;\r\n  background-color: var(--theme-body-background);\r\n  opacity: 0;\r\n}\r\n\r\n#MangaOnlineViewer #CommentsPanel.visible {\r\n  position: fixed;\r\n  height: 90%;\r\n  transform: scaleY(1);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer #CommentsArea {\r\n  overflow-y: auto;\r\n  overscroll-behavior: contain;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--theme-body-background);\r\n}\r\n';

  const fluid =
    '#MangaOnlineViewer #Chapter.FluidLTR,\r\n#MangaOnlineViewer #Chapter.FluidRTL {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  min-width: auto;\r\n\r\n  .ZoomWidth {\r\n    display: none;\r\n  }\r\n\r\n  .PageImg {\r\n    min-width: unset;\r\n  }\r\n\r\n  .MangaPage {\r\n    width: initial;\r\n    min-width: fit-content;\r\n    position: relative;\r\n    max-height: 100%;\r\n  }\r\n\r\n  .MangaPage.DoublePage {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.FluidLTR {\r\n  flex-direction: row;\r\n\r\n  .MangaPage .PageFunctions {\r\n    right: auto;\r\n    left: 0;\r\n    direction: rtl;\r\n  }\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.FluidRTL {\r\n  flex-direction: row-reverse;\r\n}\r\n';

  const header =
    '#MangaOnlineViewer #gotoPage {\r\n  min-width: 35px;\r\n}\r\n\r\n#MangaOnlineViewer #Header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row nowrap;\r\n  transition: transform 0.3s ease-in;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: inherit;\r\n  z-index: 900;\r\n}\r\n\r\n#MangaOnlineViewer #Header.click {\r\n  padding-left: 40px;\r\n}\r\n\r\n@keyframes headroom {\r\n  from {\r\n    transform: translateY(-100%);\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0%);\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n  animation: headroom 0.3s ease-in reverse;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\r\n  position: fixed;\r\n  padding-left: 40px;\r\n  top: -100%;\r\n}\r\n\r\n#MangaOnlineViewer #Header.scroll.headroom-hide {\r\n  animation: none;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.scroll.headroom-show,\r\n#MangaOnlineViewer #Header.headroom-end,\r\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\r\n#MangaOnlineViewer #Header.visible {\r\n  animation: headroom 0.3s ease-in;\r\n  transform: translateY(0%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.headroom-top {\r\n  animation: none;\r\n}\r\n\r\n#MangaOnlineViewer #Header.fixed {\r\n  position: sticky;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#MangaOnlineViewer #Header.simple {\r\n  position: static;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#MangaOnlineViewer #menu {\r\n  position: fixed;\r\n  z-index: 1;\r\n  color: var(--theme-body-text-color);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#MangaOnlineViewer #menu .icon-tabler {\r\n  position: relative;\r\n  top: 4px;\r\n  left: 4px;\r\n  height: 32px;\r\n  width: 32px;\r\n  stroke-width: 1.25;\r\n}\r\n\r\n#MangaOnlineViewer #menu:not(.click, .hover),\r\n#MangaOnlineViewer #menu.hide {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer #menu.click {\r\n  z-index: 901;\r\n}\r\n\r\n#MangaOnlineViewer #MangaTitle {\r\n  padding: 2px;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions {\r\n  display: flex;\r\n  gap: 3px;\r\n  padding: 3px 3px 3px 0;\r\n  flex-wrap: wrap;\r\n  width: 300px;\r\n  z-index: 100;\r\n}\r\n\r\n#MangaOnlineViewer .ChapterControl span,\r\n#MangaOnlineViewer #GlobalFunctions span {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n#MangaOnlineViewer .ChapterControl span {\r\n  flex-grow: 1;\r\n}\r\n\r\n#MangaOnlineViewer .ChapterControl span > * {\r\n  flex-basis: 50%;\r\n}\r\n\r\n#MangaOnlineViewer #ScrollControl .icon-tabler,\r\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #Zoom {\r\n  margin: 2px 5px;\r\n  width: 160px;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\r\n  width: 40px;\r\n  display: inline-block;\r\n  color: var(--theme-primary-text-color);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--theme-primary-color);\r\n  padding: 2px 5px;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterNavigation {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: end;\r\n  padding: 5px;\r\n  max-width: 350px;\r\n}\r\n\r\n#MangaOnlineViewer #Counters {\r\n  padding-right: 5px;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl {\r\n  display: flex;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton {\r\n  display: inline-flex;\r\n  margin: 2px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 3px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {\r\n  flex-shrink: 0;\r\n  align-self: center;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="#"],\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=""],\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="undefined"] {\r\n  visibility: hidden;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl #download.loading {\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n  opacity: 0.6;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {\r\n  pointer-events: none;\r\n  filter: grayscale(0.9);\r\n}\r\n\r\n#MangaOnlineViewer .ViewerTitle {\r\n  text-align: center;\r\n  min-height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  flex-basis: 60%;\r\n}\r\n';

  const icons =
    '.icon-tabler {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  vertical-align: sub;\r\n}\r\n\r\n.icon-tabler-file-download > :nth-child(n + 4) {\r\n  /* 4, 5 */\r\n  color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n  /* 3,4,5,6 */\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n  /* 3,4,5,6 */\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n  color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > * {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > * {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n  color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > * {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > * {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n  color: greenyellow;\r\n}\r\n';

  const keybindings$1 =
    '#MangaOnlineViewer #KeybindingsPanel {\r\n  padding: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: transform 0.3s ease-in-out;\r\n  transform: translateX(100%);\r\n  line-height: 1.5em;\r\n  z-index: 1000;\r\n  overflow-y: auto;\r\n  width: 360px;\r\n  max-width: 100vw;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel.visible {\r\n  transform: translateX(0);\r\n  display: block;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 5px;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel .ControlButton {\r\n  margin-left: 3px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel label {\r\n  display: ruby;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\r\n  grid-column: span 2;\r\n}\r\n';

  const styles =
    ':root:not(.light, .dark) {\r\n  --theme-body-background: #25262b;\r\n  --theme-body-text-color: #c1c2c5;\r\n  --theme-text-color: #c1c2c5;\r\n  --theme-primary-color: #1a1b1e;\r\n  --theme-primary-text-color: #c1c2c5;\r\n  --theme-background-color: #25262b;\r\n  --theme-hightlight-color: #2c2e33;\r\n  --theme-border-color: #373a40;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n  text-decoration: none;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n}\r\n\r\n#MangaOnlineViewer #Chapter {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  min-width: 225px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n#MangaOnlineViewer .closeButton {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n}\r\n\r\n#MangaOnlineViewer .overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 950;\r\n  cursor: pointer;\r\n}\r\n\r\n#MangaOnlineViewer .overlay.visible {\r\n  display: block;\r\n}\r\n\r\n#MangaOnlineViewer select {\r\n  height: 20px;\r\n  /*padding: 0;*/\r\n  margin: 2px;\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton,\r\n#MangaOnlineViewer .simpleButton {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px;\r\n  min-height: 32px;\r\n  color: var(--theme-primary-text-color);\r\n  background-color: var(--theme-primary-color);\r\n  border-color: var(--theme-border-color);\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton:active,\r\n#MangaOnlineViewer .ControlButton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n#MangaOnlineViewer .simpleButton {\r\n  font-size: initial;\r\n  min-width: 32px;\r\n}\r\n\r\n#MangaOnlineViewer .panel .simpleButton {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n}\r\n\r\n#MangaOnlineViewer .panel {\r\n  padding: 5px;\r\n  position: inherit;\r\n  border-radius: 5px;\r\n  background-color: var(--theme-background-color);\r\n}\r\n\r\n#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n  max-width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton.hidden,\r\n.light #ColorScheme > .icon-tabler-sun,\r\n.dark #ColorScheme > .icon-tabler-moon,\r\n#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,\r\n#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,\r\n#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,\r\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\r\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\r\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\r\n#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,\r\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\r\n#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,\r\n#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer.hideControls .PageFunctions {\r\n  visibility: hidden;\r\n}\r\n';

  const media =
    '#MangaOnlineViewer.mobile #Header,\r\n#MangaOnlineViewer.tablet #Header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ViewerTitle,\r\n#MangaOnlineViewer.tablet .ViewerTitle {\r\n  order: 1;\r\n  min-height: auto;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  flex-basis: 100%;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions,\r\n#MangaOnlineViewer.tablet #GlobalFunctions {\r\n  width: auto;\r\n  order: 2;\r\n  padding: 5px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #ChapterNavigation,\r\n#MangaOnlineViewer.tablet #ChapterNavigation {\r\n  order: 3;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\r\n#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Header {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\r\n  position: sticky;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #MangaTitle {\r\n  word-wrap: anywhere;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ViewerTitle {\r\n  order: 1;\r\n  margin-top: 0;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions {\r\n  order: 2;\r\n  padding: 0;\r\n  width: auto;\r\n  flex-basis: 35px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #ChapterNavigation {\r\n  order: 3;\r\n  width: min-content;\r\n  min-width: 205px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ChapterControl {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {\r\n  flex-grow: 1;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .PageFunctions {\r\n  padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {\r\n  opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Navigation,\r\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),\r\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),\r\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,\r\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,\r\n#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,\r\n#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,\r\n#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,\r\n#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,\r\n#MangaOnlineViewer.mobile #SettingsPanel .minZoom,\r\n#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,\r\n#MangaOnlineViewer.mobile #SettingsPanel .headerType,\r\n#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,\r\n#MangaOnlineViewer.mobile #KeybindingsPanel,\r\n#MangaOnlineViewer.mobile .ChapterControl .download,\r\n#MangaOnlineViewer.mobile #Counters {\r\n  display: none;\r\n}\r\n';

  const page =
    '#MangaOnlineViewer .MangaPage {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  line-height: 0;\r\n  min-height: 22px;\r\n  min-width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer .PageContent {\r\n  text-align: center;\r\n  display: inline-block;\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#MangaOnlineViewer .MangaPage.hide .PageContent {\r\n  height: 0;\r\n}\r\n\r\n#MangaOnlineViewer .PageContent .PageImg[src=""],\r\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n}\r\n\r\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions {\r\n  font-family: monospace;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  gap: 3px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions > .PageIndex {\r\n  background-color: var(--theme-primary-color);\r\n  color: var(--theme-primary-text-color);\r\n  min-width: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  line-height: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions .ControlButton {\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  border-width: 0;\r\n  min-height: auto;\r\n  opacity: 0.5;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\r\n  opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .separator {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .separator::before,\r\n#MangaOnlineViewer #Chapter.Vertical .separator::after {\r\n  content: "";\r\n  flex: 1;\r\n  border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter:not(.separator) .separator,\r\n#MangaOnlineViewer #Chapter:not(.Vertical) .separator {\r\n  display: none;\r\n}\r\n';

  const settings =
    '#MangaOnlineViewer #SettingsPanel {\r\n  color: var(--theme-text-color);\r\n  padding: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 1000;\r\n  transition:\r\n    transform 0.3s ease-in,\r\n    background-color 0.3s linear;\r\n  transform: translateX(-100%);\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 5px;\r\n  overflow-y: auto;\r\n  max-width: 100vw;\r\n  width: 308px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel.visible {\r\n  transform: translateX(0);\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel fieldset {\r\n  border: 1px solid var(--theme-body-text-color);\r\n  padding: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel input[type="range"] {\r\n  width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .RangeValue {\r\n  display: inline-block;\r\n  color: var(--theme-primary-text-color);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--theme-primary-color);\r\n  padding: 2px 5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel datalist {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  writing-mode: vertical-lr;\r\n  width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel datalist option {\r\n  padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio {\r\n  border: 1px solid var(--theme-text-color);\r\n  color: var(--theme-primary-text-color);\r\n  background-color: var(--theme-primary-color);\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 50%;\r\n  padding: 1px;\r\n  margin: 2px 5px;\r\n  position: relative;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio svg {\r\n  position: absolute;\r\n  top: 15%;\r\n  right: 15%;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\r\n  display: inline;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer #ThemeSelector {\r\n  width: 110px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--theme-border-color);\r\n  color: var(--theme-text-color);\r\n  box-sizing: border-box;\r\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);\r\n  padding: 0.25rem;\r\n  width: 300px;\r\n  font-size: 14px;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs .radio {\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n#MangaOnlineViewer .toggler input {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs .radio input {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs .radio .name .icon {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs .radio .name {\r\n  display: flex;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  padding: 0.5rem 0;\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-border-color);\r\n  transition: all 0.15s ease-in-out;\r\n}\r\n\r\n#MangaOnlineViewer .radio-inputs .radio input:checked + .name {\r\n  background-color: var(--theme-primary-color);\r\n  color: var(--theme-primary-text-color);\r\n  font-weight: 600;\r\n}\r\n\r\n#MangaOnlineViewer #ColorScheme {\r\n  padding: 5px;\r\n  min-height: 28px;\r\n  min-width: 28px;\r\n}\r\n\r\n#MangaOnlineViewer .toggler {\r\n  width: 36px;\r\n  /*margin: 40px auto;*/\r\n}\r\n\r\n#MangaOnlineViewer .toggler label {\r\n  display: block;\r\n  position: relative;\r\n  width: 36px;\r\n  height: 18px;\r\n  border: 1px solid #d6d6d6;\r\n  border-radius: 36px;\r\n  background: #e4e8e8;\r\n  cursor: pointer;\r\n}\r\n\r\n#MangaOnlineViewer .toggler label::after {\r\n  display: block;\r\n  border-radius: 100%;\r\n  background-color: #d7062a;\r\n  content: "";\r\n  animation-name: toggler-size;\r\n  animation-duration: 0.15s;\r\n  animation-timing-function: ease-out;\r\n  animation-direction: normal;\r\n  animation-iteration-count: 1;\r\n  animation-play-state: running;\r\n}\r\n\r\n#MangaOnlineViewer .toggler .toggler-on,\r\n#MangaOnlineViewer .toggler .toggler-off {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n#MangaOnlineViewer .toggler label::after,\r\n#MangaOnlineViewer .toggler label .toggler-on,\r\n#MangaOnlineViewer .toggler label .toggler-off {\r\n  position: absolute;\r\n  /*top: 50%;*/\r\n  top: 9px;\r\n  left: 25%;\r\n  width: 16px;\r\n  height: 16px;\r\n  transform: translateY(-50%) translateX(-50%);\r\n  transition:\r\n    left 0.15s ease-in-out,\r\n    background-color 0.2s ease-out,\r\n    width 0.15s ease-in-out,\r\n    height 0.15s ease-in-out,\r\n    opacity 0.15s ease-in-out;\r\n}\r\n\r\n#MangaOnlineViewer .toggler input:checked + label::after,\r\n#MangaOnlineViewer .toggler input:checked + label .toggler-on,\r\n#MangaOnlineViewer .toggler input:checked + label .toggler-off {\r\n  left: 75%;\r\n}\r\n\r\n#MangaOnlineViewer .toggler input:checked + label::after {\r\n  background-color: #50ac5d;\r\n  animation-name: toggler-size2;\r\n}\r\n\r\n#MangaOnlineViewer .toggler input:checked + label .toggler-off,\r\n#MangaOnlineViewer .toggler input:not(:checked) + label .toggler-on {\r\n  width: 0;\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n\r\n#MangaOnlineViewer .toggler .path {\r\n  fill: none;\r\n  stroke: #fefefe;\r\n  stroke-width: 7px;\r\n  stroke-linecap: round;\r\n  stroke-miterlimit: 10;\r\n}\r\n\r\n@keyframes toggler-size {\r\n  0%,\r\n  100% {\r\n    width: 26px;\r\n    height: 26px;\r\n  }\r\n\r\n  50% {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n}\r\n\r\n@keyframes toggler-size2 {\r\n  0%,\r\n  100% {\r\n    width: 26px;\r\n    height: 26px;\r\n  }\r\n\r\n  50% {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n}\r\n';

  const normalize =
    '/*  Simple Normalizer */\r\nhtml {\r\n  font-size: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n  color: var(--theme-body-text-color);\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  height: auto;\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n}\r\n';

  const thumbnails =
    '#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],\r\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\r\n  width: 100px;\r\n  height: 150px;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n}\r\n\r\n#MangaOnlineViewer #NavigationCounters {\r\n  margin: 5px;\r\n  width: 100%;\r\n  line-height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  bottom: -180px;\r\n  height: 185px;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  padding-bottom: 20px;\r\n  position: fixed;\r\n  white-space: nowrap;\r\n  width: 100%;\r\n  text-align: center;\r\n  transition:\r\n    transform 0.3s ease-in,\r\n    background-color 0.3s linear;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n  line-height: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation #Thumbnails {\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  margin-right: 10px;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation:hover {\r\n  transform: translateY(-180px);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation.disabled {\r\n  display: none;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation.visible {\r\n  transform: translateY(-180px);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail {\r\n  display: inline-block;\r\n  height: 150px;\r\n  margin: 0 5px;\r\n  border: 1px solid var(--theme-primary-color);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  display: block;\r\n  opacity: 0.8;\r\n  position: relative;\r\n  bottom: 25%;\r\n  width: 100%;\r\n  line-height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  max-height: 150px;\r\n  min-height: 150px;\r\n  min-width: 80px;\r\n  max-width: 160px;\r\n}\r\n';

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
  ${keybindings$1}
  ${page}
  ${fluid}
  ${settings}
  ${thumbnails}
  ${bookmarks}
  ${comments}
  ${media}
  ${animation}
  `;

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

  function head(manga) {
    return html$1`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle('externals', sweetalertStyle)} ${wrapStyle('reader', cssStyles)} ${themesCSS}
    ${wrapStyle(
      'MinZoom',
      `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getSettingsValue('minZoom')}vw;}`,
    )}
  `;
  }

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

  // generated during release, do not modify

  const PUBLIC_VERSION = '5';

  if (typeof window !== 'undefined') {
    // @ts-expect-error
    ((window.__svelte ??= {}).v ??= new Set()).add(PUBLIC_VERSION);
  }

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

  const keybindList = () => {
    const keybinds = getSettingsValue('keybinds');
    return Object.keys(keybinds).map(kb => {
      const keys = keybinds[kb]?.length
        ? keybinds[kb]?.map(key => html$1`<kbd class="dark">${key}</kbd>`).join(' / ')
        : '';
      return html$1`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
    });
  };
  const keybindEditor = () =>
    Object.keys(getSettingsValue('keybinds'))
      .map(
        kb => html$1`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
          />`,
      )
      .concat(html$1` <div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);
  const KeybindingsPanel$1 = () => html$1`
  <div
    id="KeybindingsPanel"
    class="panel"
  >
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button
      id="CloseKeybindings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
    >
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
    keybindings();
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

  enable_legacy_mode_flag();

  var root_3 = from_html(
    `<div class="BookmarkItem"><span class="bookmarkColumnLarge"><span class="bookmarkName"> </span> <br/> <a class="bookmarkURl" target="_blank"> </a></span> <span class="bookmarkColumnSmall"><span class="bookmarkDate"> </span> <br/> <span class="bookmarkPage"> </span></span> <span class="bookmarkFunctions"><a target="_blank"><button class="ControlButton open" title="Open Bookmark" type="button"><!></button></a> <button class="ControlButton erase" title="Delete Bookmark" type="button"><!></button></span></div>`,
  );
  var root$f = from_html(
    `<div class="panel" id="BookmarksPanel"><button class="closeButton" id="CloseBookmarks"><!></button> <button class="Bookmark simpleButton"><!> <!></button> <h2> </h2> <div id="BookmarksList"><!></div></div>`,
  );

  function BookmarksPanel($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var div = root$f();
    var button = child(div);

    button.__click = function (...$$args) {
      buttonBookmarksClose?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconX);

    var button_1 = sibling(button, 2);
    var node_1 = child(button_1);

    html(node_1, () => IconBookmark);

    var node_2 = sibling(node_1, 2);

    html(node_2, () => IconBookmarkOff);

    var h2 = sibling(button_1, 2);
    var text$1 = child(h2);

    var div_1 = sibling(h2, 2);
    var node_3 = child(div_1);

    {
      var consequent = $$anchor => {
        var text_1 = text();

        template_effect(() => set_text(text_1, $locale().LIST_EMPTY));
        append($$anchor, text_1);
      };

      var alternate = $$anchor => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);

        each(
          node_4,
          1,
          () => $settings().bookmarks,
          index,
          ($$anchor, mark, index) => {
            var div_2 = root_3();

            set_attribute(div_2, 'id', `Bookmark${index + 1}`);

            var span = child(div_2);
            var span_1 = child(span);
            var text_2 = child(span_1);

            var a = sibling(span_1, 4);
            var text_3 = child(a);

            var span_2 = sibling(span, 2);
            var span_3 = child(span_2);
            var text_4 = child(span_3);

            var span_4 = sibling(span_3, 4);
            var text_5 = child(span_4);

            var span_5 = sibling(span_2, 2);
            var a_1 = child(span_5);
            var button_2 = child(a_1);
            var node_5 = child(button_2);

            html(node_5, () => IconExternalLink);

            var button_3 = sibling(a_1, 2);

            button_3.__click = function (...$$args) {
              buttonEraseBookmarks?.apply(this, $$args);
            };

            var node_6 = child(button_3);

            html(node_6, () => IconTrash);

            template_effect(
              $0 => {
                set_text(text_2, get$1(mark).name);
                set_attribute(a, 'href', get$1(mark).url);
                set_text(text_3, get$1(mark).url);
                set_text(text_4, $0);
                set_text(text_5, `Page: ${get$1(mark).page ?? ''}`);
                set_attribute(a_1, 'href', get$1(mark).url);
                set_value(button_3, get$1(mark).url);
              },
              [() => new Date(get$1(mark).date).toISOString().slice(0, 10)],
            );

            append($$anchor, div_2);
          },
        );

        append($$anchor, fragment_1);
      };

      if_block(node_3, $$render => {
        if (isEmpty($settings().bookmarks)) $$render(consequent);
        else $$render(alternate, false);
      });
    }

    template_effect(() => {
      set_attribute(button, 'title', $locale().CLOSE);
      set_attribute(button_1, 'title', `$${$locale().BOOKMARK ?? ''}`);
      set_text(text$1, $locale().BOOKMARKS);
    });

    append($$anchor, div);
    pop();
    $$cleanup();
  }

  delegate(['click']);

  var root$e = from_html(
    `<section class="panel" id="CommentsPanel"><button class="closeButton" id="CloseComments"><!></button> <h2> </h2> <div id="CommentsArea"></div> <button class="simpleButton ColorScheme" id="CommentsColorScheme"><!> <!></button></section>`,
  );

  function CommentsPanel($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var section = root$e();
    var button = child(section);

    button.__click = function (...$$args) {
      buttonCommentsClose?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconX);

    var h2 = sibling(button, 2);
    var text = child(h2);

    var div = sibling(h2, 2);
    var button_1 = sibling(div, 2);
    var node_1 = child(button_1);

    html(node_1, () => IconSun);

    var node_2 = sibling(node_1, 2);

    html(node_2, () => IconMoon);

    template_effect(() => {
      set_attribute(button, 'title', $locale().CLOSE);
      set_text(text, $locale().COMMENTS);
      set_class(div, 1, clsx($settings().colorScheme));
    });

    append($$anchor, section);
    pop();
    $$cleanup();
  }

  delegate(['click']);

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
  function changeDefaultViewMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('viewMode', mode);
    updateViewMode(mode)();
  }
  function viewMode$1() {
    document.querySelector('#viewMode')?.addEventListener('change', changeDefaultViewMode);
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

  var root_1$2 = from_html(`<option> </option>`);
  var root$d = from_html(
    `<div id="menu"><!></div> <header id="Header"><aside id="GlobalFunctions"><span><button class="ControlButton" id="enlarge"><!></button> <button class="ControlButton" id="restore"><!></button> <button class="ControlButton" id="reduce"><!></button> <button class="ControlButton" id="fitWidth"><!></button> <button class="ControlButton" id="fitHeight"><!></button> <button class="ControlButton" id="keybindings"><!></button> <button class="ControlButton phones" id="AutoScroll"><!> <!></button></span> <span><button class="ControlButton" id="ltrMode"><!></button> <button class="ControlButton tablets" id="verticalMode"><!></button> <button class="ControlButton tablets" id="webComic"><!></button> <button class="ControlButton" id="rtlMode"><!></button> <button class="ControlButton tablets" id="pageControls"><!></button> <button class="ControlButton tablets" id="bookmarks"><!></button> <button class="ControlButton tablets phones" id="settings"><!></button></span> <span id="ZoomSlider"><output class="RangeValue" for="Zoom" id="ZoomVal"> </output> <input id="Zoom" max="200" min="1" name="Zoom" type="range"/></span></aside> <div class="ViewerTitle"><h1 id="MangaTitle"> </h1> <a id="series"> </a></div> <nav id="ChapterNavigation"><div class="ControlLabel" id="Counters"> <i>0</i> / <b> </b> <span class="ControlLabel"> </span> <select id="gotoPage"><option selected>#</option><!></select></div> <div class="ChapterControl" id="ChapterControl"><button id="CommentsButton"><!> </button> <button class="NavigationControlButton ControlButton disabled" id="download" type="button"><!> <!> </button> <a class="NavigationControlButton ControlButton" id="prev" type="button"><!> </a> <a class="NavigationControlButton ControlButton" id="next" type="button"> <!></a></div></nav></header>`,
    1,
  );

  function Header$1($$anchor, $$props) {
    push($$props, true);

    const [$$stores, $$cleanup] = setup_stores();
    const $settings = () => store_get(settings$1, '$settings', $$stores);
    const $locale = () => store_get(locale, '$locale', $$stores);
    var fragment = root$d();
    var div = first_child(fragment);
    var node = child(div);

    html(node, () => IconMenu2);

    var header = sibling(div, 2);
    var aside = child(header);
    var span = child(aside);
    var button = child(span);
    var event_handler = user_derived(() => changeZoomByStep(1));

    button.__click = function (...$$args) {
      get$1(event_handler)?.apply(this, $$args);
    };

    var node_1 = child(button);

    html(node_1, () => IconZoomInArea);

    var button_1 = sibling(button, 2);
    var event_handler_1 = user_derived(() => changeGlobalZoom('percent'));

    button_1.__click = function (...$$args) {
      get$1(event_handler_1)?.apply(this, $$args);
    };

    var node_2 = child(button_1);

    html(node_2, () => IconZoomPan);

    var button_2 = sibling(button_1, 2);
    var event_handler_2 = user_derived(() => changeZoomByStep(-1));

    button_2.__click = function (...$$args) {
      get$1(event_handler_2)?.apply(this, $$args);
    };

    var node_3 = child(button_2);

    html(node_3, () => IconZoomOutArea);

    var button_3 = sibling(button_2, 2);
    var event_handler_3 = user_derived(() => changeGlobalZoom('width'));

    button_3.__click = function (...$$args) {
      get$1(event_handler_3)?.apply(this, $$args);
    };

    var node_4 = child(button_3);

    html(node_4, () => IconArrowAutofitWidth);

    var button_4 = sibling(button_3, 2);
    var event_handler_4 = user_derived(() => changeGlobalZoom('height'));

    button_4.__click = function (...$$args) {
      get$1(event_handler_4)?.apply(this, $$args);
    };

    var node_5 = child(button_4);

    html(node_5, () => IconArrowAutofitHeight);

    var button_5 = sibling(button_4, 2);

    button_5.__click = function (...$$args) {
      buttonKeybindingsOpen?.apply(this, $$args);
    };

    var node_6 = child(button_5);

    html(node_6, () => IconKeyboard);

    var button_6 = sibling(button_5, 2);

    button_6.__click = function (...$$args) {
      toggleAutoScroll?.apply(this, $$args);
    };

    var node_7 = child(button_6);

    html(node_7, () => IconPlayerPlay);

    var node_8 = sibling(node_7, 2);

    html(node_8, () => IconPlayerPause);

    var span_1 = sibling(span, 2);
    var button_7 = child(span_1);
    var event_handler_5 = user_derived(() => updateViewMode('FluidLTR'));

    button_7.__click = function (...$$args) {
      get$1(event_handler_5)?.apply(this, $$args);
    };

    var node_9 = child(button_7);

    html(node_9, () => IconArrowAutofitRight);

    var button_8 = sibling(button_7, 2);
    var event_handler_6 = user_derived(() => updateViewMode('Vertical'));

    button_8.__click = function (...$$args) {
      get$1(event_handler_6)?.apply(this, $$args);
    };

    var node_10 = child(button_8);

    html(node_10, () => IconArrowAutofitDown);

    var button_9 = sibling(button_8, 2);
    var event_handler_7 = user_derived(() => updateViewMode('WebComic'));

    button_9.__click = function (...$$args) {
      get$1(event_handler_7)?.apply(this, $$args);
    };

    var node_11 = child(button_9);

    html(node_11, () => IconSpacingVertical);

    var button_10 = sibling(button_9, 2);
    var event_handler_8 = user_derived(() => updateViewMode('FluidRTL'));

    button_10.__click = function (...$$args) {
      get$1(event_handler_8)?.apply(this, $$args);
    };

    var node_12 = child(button_10);

    html(node_12, () => IconArrowAutofitLeft);

    var button_11 = sibling(button_10, 2);

    button_11.__click = function (...$$args) {
      buttonGlobalHideImageControls?.apply(this, $$args);
    };

    var node_13 = child(button_11);

    html(node_13, () => IconListNumbers);

    var button_12 = sibling(button_11, 2);

    button_12.__click = function (...$$args) {
      buttonBookmarksOpen?.apply(this, $$args);
    };

    var node_14 = child(button_12);

    html(node_14, () => IconBookmarks);

    var button_13 = sibling(button_12, 2);

    button_13.__click = function (...$$args) {
      buttonSettingsOpen?.apply(this, $$args);
    };

    var node_15 = child(button_13);

    html(node_15, () => IconSettings);

    var span_2 = sibling(span_1, 2);
    var output = child(span_2);
    var text = child(output);

    var input = sibling(output, 2);

    input.__input = function (...$$args) {
      changeZoom?.apply(this, $$args);
    };

    var div_1 = sibling(aside, 2);
    var h1 = child(div_1);
    var text_1 = child(h1);

    var a = sibling(h1, 2);

    a.__click = function (...$$args) {
      buttonRedirectURL?.apply(this, $$args);
    };

    var text_2 = child(a);

    var nav = sibling(div_1, 2);
    var div_2 = child(nav);
    var text_3 = child(div_2);
    var b = sibling(text_3, 3);
    var text_4 = child(b);

    var span_3 = sibling(b, 2);
    var text_5 = child(span_3);

    var select = sibling(span_3, 2);

    select.__change = function (...$$args) {
      selectGoToPage?.apply(this, $$args);
    };

    var node_16 = sibling(child(select));

    each(
      node_16,
      17,
      () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin),
      index,
      ($$anchor, index) => {
        var option = root_1$2();
        var text_6 = child(option);

        var option_value = {};

        template_effect(() => {
          set_text(text_6, get$1(index));

          if (option_value !== (option_value = get$1(index))) {
            option.value = (option.__value = get$1(index)) ?? '';
          }
        });

        append($$anchor, option);
      },
    );

    var div_3 = sibling(div_2, 2);
    var button_14 = child(div_3);

    button_14.__click = function (...$$args) {
      buttonCommentsOpen?.apply(this, $$args);
    };

    var node_17 = child(button_14);

    html(node_17, () => IconMessage);

    var text_7 = sibling(node_17);

    var button_15 = sibling(button_14, 2);

    button_15.__click = function (...$$args) {
      buttonStartDownload?.apply(this, $$args);
    };

    var node_18 = child(button_15);

    html(node_18, () => IconFileDownload);

    var node_19 = sibling(node_18, 2);

    html(node_19, () => IconLoader2);

    var text_8 = sibling(node_19);

    var a_1 = sibling(button_15, 2);

    a_1.__click = function (...$$args) {
      buttonRedirectURL?.apply(this, $$args);
    };

    var node_20 = child(a_1);

    html(node_20, () => IconArrowBigLeft);

    var text_9 = sibling(node_20);

    var a_2 = sibling(a_1, 2);

    a_2.__click = function (...$$args) {
      buttonRedirectURL?.apply(this, $$args);
    };

    var text_10 = child(a_2);
    var node_21 = sibling(text_10);

    html(node_21, () => IconArrowBigRight);

    template_effect(() => {
      set_class(header, 1, `${$settings().header ?? ''} headroom-top`);
      set_attribute(button, 'title', $locale().ENLARGE);
      set_attribute(button_1, 'title', $locale().RESTORE);
      set_attribute(button_2, 'title', $locale().REDUCE);
      set_attribute(button_3, 'title', $locale().FIT_WIDTH);
      set_attribute(button_4, 'title', $locale().FIT_HEIGHT);
      set_attribute(button_5, 'title', $locale().KEYBINDINGS);
      set_attribute(button_6, 'title', $locale().SCROLL_START);
      set_attribute(button_7, 'title', $locale().VIEW_MODE_LEFT);
      set_attribute(button_8, 'title', $locale().VIEW_MODE_VERTICAL);
      set_attribute(button_9, 'title', $locale().VIEW_MODE_WEBCOMIC);
      set_attribute(button_10, 'title', $locale().VIEW_MODE_RIGHT);
      set_attribute(button_11, 'title', $locale().TOGGLE_CONTROLS);
      set_attribute(button_12, 'title', $locale().BOOKMARKS);
      set_attribute(button_13, 'title', $locale().SETTINGS);
      set_text(
        text,
        $settings().zoomMode === 'percent' ? $settings().defaultZoom + '%' : $settings().zoomMode,
      );
      set_value(input, $settings().defaultZoom);
      set_text(text_1, $$props.manga.title);
      set_attribute(a, 'href', $$props.manga.series);
      set_text(text_2, `(${$locale().RETURN_CHAPTER_LIST ?? ''})`);
      set_text(text_3, `${$locale().PAGES_LOADED ?? ''}: `);

      set_text(
        text_4,
        $$props.manga.begin && $$props.manga.begin > 1
          ? $$props.manga.pages - ($$props.manga.begin - 1)
          : $$props.manga.pages,
      );

      set_text(text_5, `${$locale().GO_TO_PAGE ?? ''}:`);
      set_class(
        button_14,
        1,
        `NavigationControlButton ControlButton ${$$props.manga.comments ? '' : 'disabled'}`,
      );
      set_attribute(button_14, 'title', $locale().DISPLAY_COMMENTS);
      set_text(text_7, ` ${$locale().DISPLAY_COMMENTS ?? ''}`);
      set_attribute(button_15, 'title', $locale().DOWNLOAD_ZIP);
      set_text(text_8, ` ${$locale().BUTTON_DOWNLOAD ?? ''}`);
      set_attribute(a_1, 'href', $$props.manga.prev ?? '');
      set_attribute(a_1, 'title', $locale().PREVIOUS_CHAPTER);
      set_text(text_9, ` ${$locale().BUTTON_PREVIOUS ?? ''}`);
      set_attribute(a_2, 'href', $$props.manga.next ?? '');
      set_attribute(a_2, 'title', $locale().NEXT_CHAPTER);
      set_text(text_10, `${$locale().BUTTON_NEXT ?? ''} `);
    });

    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['click', 'input', 'change']);

  var root$c = from_html(
    `<div class="panel" id="KeybindingsPanel"><h2> </h2> <button class="closeButton" id="CloseKeybindings"><!></button> <div class="controls"><button class="ControlButton" id="EditKeybindings" type="button"><!> </button> <button class="ControlButton hidden" id="SaveKeybindings" type="button"><!> </button></div> <div id="KeybindingsList"></div> <div id="HotKeysRules"> </div></div>`,
  );

  function KeybindingsPanel($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);

    init();

    var div = root$c();
    var h2 = child(div);
    var text = child(h2);

    var button = sibling(h2, 2);

    button.__click = function (...$$args) {
      buttonKeybindingsClose?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconX);

    var div_1 = sibling(button, 2);
    var button_1 = child(div_1);

    button_1.__click = function (...$$args) {
      editKeybindings?.apply(this, $$args);
    };

    var node_1 = child(button_1);

    html(node_1, () => IconPencil);

    var text_1 = sibling(node_1);

    var button_2 = sibling(button_1, 2);

    button_2.__click = function (...$$args) {
      saveKeybindings?.apply(this, $$args);
    };

    var node_2 = child(button_2);

    html(node_2, () => IconDeviceFloppy);

    var text_2 = sibling(node_2);

    var div_2 = sibling(div_1, 4);
    var text_3 = child(div_2);

    template_effect(() => {
      set_text(text, $locale().KEYBINDINGS);
      set_attribute(button, 'title', $locale().CLOSE);
      set_attribute(button_1, 'title', $locale().EDIT_KEYBINDS);
      set_text(text_1, ` ${$locale().BUTTON_EDIT ?? ''}`);
      set_attribute(button_2, 'title', $locale().SAVE_KEYBINDS);
      set_text(text_2, ` ${$locale().BUTTON_SAVE ?? ''}`);
      set_text(text_3, $locale().KEYBIND_RULES);
    });

    append($$anchor, div);
    pop();
    $$cleanup();
  }

  delegate(['click']);

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

  var root$b = from_html(
    `<div class="MangaPage"><div class="PageFunctions"><button class="Bookmark ControlButton"><!> <!></button> <button class="ZoomIn ControlButton"><!></button> <button class="ZoomRestore ControlButton"><!></button> <button class="ZoomOut ControlButton"><!></button> <button class="ZoomWidth ControlButton"><!></button> <button class="ZoomHeight ControlButton"><!></button> <button class="Hide ControlButton"><!> <!></button> <button class="Reload ControlButton"><!></button> <span class="PageIndex"> </span></div> <div class="PageContent"><img alt="" class="PageImg"/></div></div>`,
  );

  function MangaPage($$anchor, $$props) {
    push($$props, true);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const src = prop($$props, 'src', 3, '');
    var div = root$b();
    var div_1 = child(div);
    var button = child(div_1);

    button.__click = function (...$$args) {
      buttonBookmark?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconBookmark);

    var node_1 = sibling(node, 2);

    html(node_1, () => IconBookmarkOff);

    var button_1 = sibling(button, 2);

    button_1.__click = function (...$$args) {
      buttonZoomIn?.apply(this, $$args);
    };

    var node_2 = child(button_1);

    html(node_2, () => IconZoomIn);

    var button_2 = sibling(button_1, 2);

    button_2.__click = function (...$$args) {
      buttonRestoreZoom?.apply(this, $$args);
    };

    var node_3 = child(button_2);

    html(node_3, () => IconZoomCancel);

    var button_3 = sibling(button_2, 2);

    button_3.__click = function (...$$args) {
      buttonZoomOut?.apply(this, $$args);
    };

    var node_4 = child(button_3);

    html(node_4, () => IconZoomOut);

    var button_4 = sibling(button_3, 2);

    button_4.__click = function (...$$args) {
      buttonZoomWidth?.apply(this, $$args);
    };

    var node_5 = child(button_4);

    html(node_5, () => IconArrowAutofitWidth);

    var button_5 = sibling(button_4, 2);

    button_5.__click = function (...$$args) {
      buttonZoomHeight?.apply(this, $$args);
    };

    var node_6 = child(button_5);

    html(node_6, () => IconArrowAutofitHeight);

    var button_6 = sibling(button_5, 2);

    button_6.__click = function (...$$args) {
      buttonHidePage?.apply(this, $$args);
    };

    var node_7 = child(button_6);

    html(node_7, () => IconEye);

    var node_8 = sibling(node_7, 2);

    html(node_8, () => IconEyeOff);

    var button_7 = sibling(button_6, 2);

    button_7.__click = function (...$$args) {
      buttonReloadPage?.apply(this, $$args);
    };

    var node_9 = child(button_7);

    html(node_9, () => IconRefresh);

    var span = sibling(button_7, 2);
    var text = child(span);

    var div_2 = sibling(div_1, 2);
    var img = child(div_2);

    template_effect(() => {
      set_attribute(div, 'id', `Page${$$props.index ?? ''}`);
      set_attribute(button, 'title', $locale().BOOKMARK);
      set_attribute(button_1, 'title', $locale().ZOOM_IN);
      set_attribute(button_2, 'title', $locale().ZOOM_RESET);
      set_attribute(button_3, 'title', $locale().ZOOM_OUT);
      set_attribute(button_4, 'title', $locale().ZOOM_WIDTH);
      set_attribute(button_5, 'title', $locale().ZOOM_HEIGHT);
      set_attribute(button_6, 'title', $locale().HIDE);
      set_attribute(button_7, 'title', $locale().RELOAD);
      set_text(text, $$props.index);
      set_attribute(img, 'id', `PageImg${$$props.index ?? ''}`);
      set_attribute(img, 'src', src());
    });

    append($$anchor, div);
    pop();
    $$cleanup();
  }

  delegate(['click']);

  var root$a = from_html(`<main id="Chapter"></main>`);

  function Reader$1($$anchor, $$props) {
    push($$props, true);

    const [$$stores, $$cleanup] = setup_stores();
    const $settings = () => store_get(settings$1, '$settings', $$stores);
    var main = root$a();

    each(
      main,
      21,
      () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin),
      index,
      ($$anchor, index) => {
        MangaPage($$anchor, {
          get index() {
            return get$1(index);
          },
        });
      },
    );

    template_effect(() =>
      set_class(
        main,
        1,
        `${$settings().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
      ${$settings().viewMode ?? ''}`,
      ),
    );

    append($$anchor, main);
    pop();
    $$cleanup();
  }

  var root_1$1 = from_html(`<option> </option>`);
  var root$9 = from_html(
    `<div class="ControlLabel"> <div class="radio-inputs" id="SettingsScope"><label class="radio"><input id="globalSettings" name="settingsScope" type="radio" value="false"/> <span class="name"><!> </span></label> <label class="radio"><input id="localSettings" name="settingsScope" type="radio" value="true"/> <span class="name"><!> </span></label></div></div> <div class="ControlLabel locale"> <select id="locale"></select></div>`,
    1,
  );

  function SettingsPanel_General($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var fragment = root$9();
    var div = first_child(fragment);
    var text = child(div);
    var div_1 = sibling(text);
    var label = child(div_1);
    var input = child(label);

    input.__change = function (...$$args) {
      changeSettingsScope?.apply(this, $$args);
    };

    var span = sibling(input, 2);
    var node = child(span);

    html(node, () => IconWorldCog);

    var text_1 = sibling(node);

    var label_1 = sibling(label, 2);
    var input_1 = child(label_1);

    input_1.__change = function (...$$args) {
      changeSettingsScope?.apply(this, $$args);
    };

    var span_1 = sibling(input_1, 2);
    var node_1 = child(span_1);

    html(node_1, () => IconLocationCog);

    var text_2 = sibling(node_1);

    text_2.nodeValue = ` ${window.location.hostname ?? ''}`;

    var div_2 = sibling(div, 2);
    var text_3 = child(div_2);
    var select = sibling(text_3);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {});
    });

    select.__change = function (...$$args) {
      changeLocale?.apply(this, $$args);
    };

    each(
      select,
      5,
      () => locales,
      index,
      ($$anchor, locale, $$index, $$array) => {
        var option = root_1$1();
        var text_4 = child(option);

        var option_value = {};

        template_effect(() => {
          set_text(text_4, get$1(locale).NAME);

          if (option_value !== (option_value = `$${get$1(locale).ID ?? ''}`)) {
            option.value = option.__value = `$${get$1(locale).ID ?? ''}`;
          }
        });

        append($$anchor, option);
      },
    );

    template_effect(
      ($0, $1) => {
        set_text(text, `${$locale().SCOPE ?? ''} `);
        set_checked(input, $0);
        set_text(text_1, ` ${$locale().GLOBAL ?? ''}`);
        set_checked(input_1, $1);
        set_text(text_3, `${$locale().LANGUAGE ?? ''} `);
      },
      [() => !isSettingsLocal(), isSettingsLocal],
    );

    bind_select_value(
      select,
      () => $settings().locale,
      $$value =>
        store_mutate(settings$1, (untrack($settings).locale = $$value), untrack($settings)),
    );
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['change']);

  var root$8 = from_html(
    `<div class="ControlLabel loadMode"> <select id="loadMode"><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel PagesPerSecond"> <select id="PagesPerSecond"><option> </option><option>0.5</option><option> </option><option>02</option><option> </option><option>08</option><option> </option><option> </option></select></div>`,
    1,
  );

  function SettingsPanel_Loading($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var fragment = root$8();
    var div = first_child(fragment);
    var text = child(div);
    var select = sibling(text);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {
        $locale();
      });
    });

    select.__change = function (...$$args) {
      changeLoadMode?.apply(this, $$args);
    };

    var option = child(select);
    var text_1 = child(option);
    option.value = option.__value = 'wait';

    var option_1 = sibling(option);
    var text_2 = child(option_1);
    option_1.value = option_1.__value = 'always';

    var option_2 = sibling(option_1);
    var text_3 = child(option_2);
    option_2.value = option_2.__value = 'never';

    var div_1 = sibling(div, 2);
    var text_4 = child(div_1);
    var select_1 = sibling(text_4);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {
        $locale();
      });
    });

    select_1.__change = function (...$$args) {
      changePagesPerSecond?.apply(this, $$args);
    };

    var option_3 = child(select_1);
    var text_5 = child(option_3);
    option_3.value = option_3.__value = '3000';

    var option_4 = sibling(option_3);

    option_4.value = option_4.__value = '2000';

    var option_5 = sibling(option_4);
    var text_6 = child(option_5);
    option_5.value = option_5.__value = '1000';

    var option_6 = sibling(option_5);

    option_6.value = option_6.__value = '500';

    var option_7 = sibling(option_6);
    var text_7 = child(option_7);
    option_7.value = option_7.__value = '250';

    var option_8 = sibling(option_7);

    option_8.value = option_8.__value = '125';

    var option_9 = sibling(option_8);
    var text_8 = child(option_9);
    option_9.value = option_9.__value = '100';

    var option_10 = sibling(option_9);
    var text_9 = child(option_10);
    option_10.value = option_10.__value = '1';

    template_effect(() => {
      set_text(text, `${$locale().DEFAULT_LOAD_MODE ?? ''} `);
      set_text(text_1, $locale().LOAD_MODE_NORMAL);
      set_text(text_2, $locale().LOAD_MODE_ALWAYS);
      set_text(text_3, $locale().LOAD_MODE_NEVER);
      set_text(text_4, `${$locale().LOAD_SPEED ?? ''} `);
      set_text(text_5, `0.3(${$locale().SLOWLY ?? ''})`);
      set_text(text_6, `01(${$locale().NORMAL ?? ''})`);
      set_text(text_7, `04(${$locale().FAST ?? ''})`);
      set_text(text_8, `10(${$locale().EXTREME ?? ''})`);
      set_text(text_9, $locale().ALL_PAGES);
    });

    bind_select_value(
      select,
      () => $settings().loadMode,
      $$value =>
        store_mutate(settings$1, (untrack($settings).loadMode = $$value), untrack($settings)),
    );
    bind_select_value(
      select_1,
      () => $settings().throttlePageLoad,
      $$value =>
        store_mutate(
          settings$1,
          (untrack($settings).throttlePageLoad = $$value),
          untrack($settings),
        ),
    );
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['change']);

  var root$7 = from_html(
    `<div class="toggler"><input type="checkbox" value="true"/> <label><!> <!></label></div>`,
  );

  function Toggler($$anchor, $$props) {
    let checked = prop($$props, 'checked', 3, false);
    var div = root$7();
    var input = child(div);

    input.__change = function (...$$args) {
      $$props.onchange?.apply(this, $$args);
    };

    var label = sibling(input, 2);
    var node = child(label);

    html(node, () => IconCheck);

    var node_1 = sibling(node, 2);

    html(node_1, () => IconX);

    template_effect(() => {
      set_checked(input, checked());
      set_attribute(input, 'id', $$props.name);
      set_attribute(input, 'name', $$props.name);
      set_attribute(label, 'for', $$props.name);
    });

    append($$anchor, div);
  }

  delegate(['change']);

  var root$6 = from_html(
    `<div class="ControlLabel verticalSeparator"> <!></div> <div class="ControlLabel fitIfOversize"> <!></div> <div class="ControlLabel showThumbnails"> <!></div> <div class="ControlLabel enableComments"> <!></div> <div class="ControlLabel downloadZip"> <!></div> <div class="ControlLabel hidePageControls"> <!></div> <div class="ControlLabel lazyLoadImages"> <!></div> <div><span> <output for="lazyStart" id="lazyStartVal"> </output></span> <input id="lazyStart" max="100" min="5" name="lazyStart" step="5" type="range"/></div> <div class="ControlLabel autoScroll"><span> <output for="scrollHeight" id="scrollHeightVal"> </output>px</span> <input id="scrollHeight" max="100" min="1" name="scrollHeight" step="1" type="range"/></div> <div class="ControlLabel headerType"> <select id="headerType"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div>`,
    1,
  );

  function SettingsPanel_Others($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var fragment = root$6();
    var div = first_child(fragment);
    var text = child(div);
    var node = sibling(text);

    Toggler(node, {
      get checked() {
        return $settings().verticalSeparator;
      },

      name: 'verticalSeparator',

      get onchange() {
        return checkVerticalSeparator;
      },
    });

    var div_1 = sibling(div, 2);
    var text_1 = child(div_1);
    var node_1 = sibling(text_1);

    Toggler(node_1, {
      get checked() {
        return $settings().fitWidthIfOversize;
      },

      name: 'fitIfOversize',

      get onchange() {
        return checkFitWidthOversize;
      },
    });

    var div_2 = sibling(div_1, 2);
    var text_2 = child(div_2);
    var node_2 = sibling(text_2);

    Toggler(node_2, {
      get checked() {
        return $settings().showThumbnails;
      },

      name: 'showThumbnails',

      get onchange() {
        return checkShowThumbnails;
      },
    });

    var div_3 = sibling(div_2, 2);
    var text_3 = child(div_3);
    var node_3 = sibling(text_3);

    Toggler(node_3, {
      get checked() {
        return $settings().enableComments;
      },

      name: 'enableComments',

      get onchange() {
        return checkEnableComments;
      },
    });

    var div_4 = sibling(div_3, 2);
    var text_4 = child(div_4);
    var node_4 = sibling(text_4);

    Toggler(node_4, {
      get checked() {
        return $settings().downloadZip;
      },

      name: 'downloadZip',

      get onchange() {
        return checkAutoDownload;
      },
    });

    var div_5 = sibling(div_4, 2);
    var text_5 = child(div_5);
    var node_5 = sibling(text_5);

    Toggler(node_5, {
      get checked() {
        return $settings().hidePageControls;
      },

      name: 'hidePageControls',

      get onchange() {
        return checkHideImageControls;
      },
    });

    var div_6 = sibling(div_5, 2);
    var text_6 = child(div_6);
    var node_6 = sibling(text_6);

    Toggler(node_6, {
      get checked() {
        return $settings().lazyLoadImages;
      },

      name: 'lazyLoadImages',

      get onchange() {
        return checkLazyLoad;
      },
    });

    var div_7 = sibling(div_6, 2);
    var span = child(div_7);
    var text_7 = child(span);
    var output = sibling(text_7);
    var text_8 = child(output);

    var input = sibling(span, 2);

    input.__input = function (...$$args) {
      changeLazyStart?.apply(this, $$args);
    };

    var div_8 = sibling(div_7, 2);
    var span_1 = child(div_8);
    var text_9 = child(span_1);
    var output_1 = sibling(text_9);
    var text_10 = child(output_1);

    var input_1 = sibling(span_1, 2);

    input_1.__input = function (...$$args) {
      changeScrollHeight?.apply(this, $$args);
    };

    var div_9 = sibling(div_8, 2);
    var text_11 = child(div_9);
    var select = sibling(text_11);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {
        $locale();
      });
    });

    select.__change = function (...$$args) {
      changeHeaderType?.apply(this, $$args);
    };

    var option = child(select);
    var text_12 = child(option);
    option.value = option.__value = 'hover';

    var option_1 = sibling(option);
    var text_13 = child(option_1);
    option_1.value = option_1.__value = 'scroll';

    var option_2 = sibling(option_1);
    var text_14 = child(option_2);
    option_2.value = option_2.__value = 'click';

    var option_3 = sibling(option_2);
    var text_15 = child(option_3);
    option_3.value = option_3.__value = 'fixed';

    var option_4 = sibling(option_3);
    var text_16 = child(option_4);
    option_4.value = option_4.__value = 'simple';

    template_effect(() => {
      set_text(text, `${$locale().VERTICAL_SEPARATOR ?? ''} `);
      set_text(text_1, `${$locale().FIT_WIDTH_OVERSIZED ?? ''} `);
      set_text(text_2, `${$locale().SHOW_THUMBNAILS ?? ''} `);
      set_text(text_3, `${$locale().ENABLE_COMMENTS ?? ''} `);
      set_text(text_4, `${$locale().DOWNLOAD_IMAGES ?? ''} `);
      set_text(text_5, `${$locale().HIDE_CONTROLS ?? ''} `);
      set_text(text_6, `${$locale().LAZY_LOAD_IMAGES_ENABLE ?? ''} `);

      set_class(
        div_7,
        1,
        `ControlLabel lazyStart ControlLabelItem
    ${$settings().lazyLoadImages ? 'show' : ''}`,
      );

      set_text(text_7, `${$locale().LAZY_LOAD_IMAGES ?? ''} `);
      set_text(text_8, $settings().lazyStart);
      set_value(input, $settings().lazyStart);
      set_text(text_9, `${$locale().AUTO_SCROLL_HEIGHT ?? ''} `);
      set_text(text_10, $settings().scrollHeight);
      set_value(input_1, $settings().scrollHeight);
      set_text(text_11, `${$locale().HEADER_TYPE ?? ''} `);
      set_text(text_12, $locale().HEADER_HOVER);
      set_text(text_13, $locale().HEADER_SCROLL);
      set_text(text_14, $locale().HEADER_CLICK);
      set_text(text_15, $locale().HEADER_FIXED);
      set_text(text_16, $locale().HEADER_SIMPLE);
    });

    bind_select_value(
      select,
      () => $settings().header,
      $$value =>
        store_mutate(settings$1, (untrack($settings).header = $$value), untrack($settings)),
    );
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['input', 'change']);

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

  var root_1 = from_html(`<span><!></span>`);
  var root$5 = from_html(
    `<div class="ControlLabel ColorSchemeSelector"> <button class="ControlButton" id="ColorScheme"><!> <!></button></div> <div class="ControlLabel ThemeSelector"> <span title="custom"><!> <!></span> <!></div> <div id="Hue"> <input class="colorpicker CustomTheme" id="CustomThemeHue" type="color"/></div> <div id="Shade"><span> <output class="RangeValue" for="ThemeShade" id="themeShadeVal"> </output></span> <input id="ThemeShade" max="900" min="100" name="ThemeShade" step="100" type="range"/></div>`,
    1,
  );

  function SettingsPanel_Theme($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var fragment = root$5();
    var div = first_child(fragment);
    var text = child(div);
    var button = sibling(text);

    button.__click = function (...$$args) {
      changeColorScheme?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconSun);

    var node_1 = sibling(node, 2);

    html(node_1, () => IconMoon);

    var div_1 = sibling(div, 2);
    var text_1 = child(div_1);
    var span = sibling(text_1);

    span.__click = function (...$$args) {
      buttonSelectTheme?.apply(this, $$args);
    };

    var node_2 = child(span);

    html(node_2, () => IconPalette);

    var node_3 = sibling(node_2, 2);

    html(node_3, () => IconCheck);

    var node_4 = sibling(span, 2);

    each(
      node_4,
      1,
      () => Object.keys(colors).map(color => colors[color].name),
      index,
      ($$anchor, theme) => {
        var span_1 = root_1();

        span_1.__click = function (...$$args) {
          buttonSelectTheme?.apply(this, $$args);
        };

        var node_5 = child(span_1);

        html(node_5, () => IconCheck);

        template_effect(() => {
          set_attribute(span_1, 'title', get$1(theme));
          set_class(
            span_1,
            1,
            `${get$1(theme) ?? ''} ThemeRadio ${$settings().theme === get$1(theme) ? 'selected' : ''}`,
          );
        });

        append($$anchor, span_1);
      },
    );

    var div_2 = sibling(div_1, 2);
    var text_2 = child(div_2);
    var input = sibling(text_2);

    input.__change = function (...$$args) {
      changeCustomTheme?.apply(this, $$args);
    };

    var div_3 = sibling(div_2, 2);
    var span_2 = child(div_3);
    var text_3 = child(span_2);
    var output = sibling(text_3);
    var text_4 = child(output);

    var input_1 = sibling(span_2, 2);

    input_1.__input = function (...$$args) {
      changeThemeShade?.apply(this, $$args);
    };

    template_effect(
      ($0, $1) => {
        set_text(text, `${$locale().COLOR_SCHEME ?? ''} `);
        set_text(text_1, `${$locale().THEME_COLOR ?? ''} `);

        set_class(
          span,
          1,
          `custom ThemeRadio
        ${$settings().theme === 'custom' ? 'selected' : ''}`,
        );

        set_class(
          div_2,
          1,
          `ControlLabel CustomTheme ControlLabelItem
      ${$0 ?? ''}`,
        );

        set_text(text_2, `${$locale().THEME_HUE ?? ''} `);
        set_value(input, $settings().customTheme);

        set_class(
          div_3,
          1,
          `ControlLabel CustomTheme ControlLabelItem
      ${$1 ?? ''}`,
        );

        set_text(text_3, `${$locale().THEME_SHADE ?? ''} `);
        set_text(text_4, $settings().themeShade);
        set_value(input_1, $settings().themeShade);
      },
      [
        () => ($settings().theme.startsWith('custom') ? 'show' : ''),
        () => ($settings().theme.startsWith('custom') ? '' : 'show'),
      ],
    );

    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['click', 'change', 'input']);

  var root$4 = from_html(
    `<div class="ControlLabel DefaultZoomMode"> <select id="DefaultZoomMode"><option> </option><option> </option><option> </option></select></div> <div><span> <output class="RangeValue" for="DefaultZoom" id="defaultZoomVal"> </output></span> <input id="DefaultZoom" list="tickmarks" max="200" min="5" name="DefaultZoom" step="5" type="range"/> <datalist id="tickmarks"><option>5</option><option>25</option><option>50</option><option>75</option><option>100</option><option>125</option><option>150</option><option>175</option><option>200</option></datalist></div> <div class="ControlLabel minZoom"><span> <output class="RangeValue" for="minZoom" id="minZoomVal"> </output></span> <input id="minZoom" max="100" min="30" name="minZoom" step="10" type="range"/></div> <div class="ControlLabel zoomStep"><span> <output class="RangeValue" for="zoomStep" id="zoomStepVal"> </output></span> <input id="zoomStep" max="50" min="5" name="zoomStep" step="5" type="range"/></div> <div class="ControlLabel viewMode"> <select id="viewMode"><option> </option><option> </option><option> </option><option> </option></select></div>`,
    1,
  );

  function SettingsPanel_Zoom($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);
    const $settings = () => store_get(settings$1, '$settings', $$stores);

    init();

    var fragment = root$4();
    var div = first_child(fragment);
    var text = child(div);
    var select = sibling(text);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {
        $locale();
      });
    });

    select.__change = function (...$$args) {
      changeDefaultZoomMode?.apply(this, $$args);
    };

    var option = child(select);
    var text_1 = child(option);
    option.value = option.__value = 'percent';

    var option_1 = sibling(option);
    var text_2 = child(option_1);
    option_1.value = option_1.__value = 'width';

    var option_2 = sibling(option_1);
    var text_3 = child(option_2);
    option_2.value = option_2.__value = 'height';

    var div_1 = sibling(div, 2);
    var span = child(div_1);
    var text_4 = child(span);
    var output = sibling(text_4);
    var text_5 = child(output);

    var input = sibling(span, 2);

    input.__input = function (...$$args) {
      changeDefaultZoom?.apply(this, $$args);
    };

    var datalist = sibling(input, 2);
    var option_3 = child(datalist);

    option_3.value = option_3.__value = '5';

    var option_4 = sibling(option_3);

    option_4.value = option_4.__value = '25';

    var option_5 = sibling(option_4);

    option_5.value = option_5.__value = '50';

    var option_6 = sibling(option_5);

    option_6.value = option_6.__value = '75';

    var option_7 = sibling(option_6);

    option_7.value = option_7.__value = '100';

    var option_8 = sibling(option_7);

    option_8.value = option_8.__value = '125';

    var option_9 = sibling(option_8);

    option_9.value = option_9.__value = '150';

    var option_10 = sibling(option_9);

    option_10.value = option_10.__value = '175';

    var option_11 = sibling(option_10);

    option_11.value = option_11.__value = '200';

    var div_2 = sibling(div_1, 2);
    var span_1 = child(div_2);
    var text_6 = child(span_1);
    var output_1 = sibling(text_6);
    var text_7 = child(output_1);

    var input_1 = sibling(span_1, 2);

    input_1.__input = function (...$$args) {
      changeMinZoom?.apply(this, $$args);
    };

    var div_3 = sibling(div_2, 2);
    var span_2 = child(div_3);
    var text_8 = child(span_2);
    var output_2 = sibling(text_8);
    var text_9 = child(output_2);

    var input_2 = sibling(span_2, 2);

    input_2.__input = function (...$$args) {
      changeZoomStep?.apply(this, $$args);
    };

    var div_4 = sibling(div_3, 2);
    var text_10 = child(div_4);
    var select_1 = sibling(text_10);

    template_effect(() => {
      $settings();

      invalidate_inner_signals(() => {
        $locale();
      });
    });

    select_1.__change = function (...$$args) {
      changeDefaultViewMode?.apply(this, $$args);
    };

    var option_12 = child(select_1);
    var text_11 = child(option_12);
    option_12.value = option_12.__value = 'Vertical';

    var option_13 = sibling(option_12);
    var text_12 = child(option_13);
    option_13.value = option_13.__value = 'WebComic';

    var option_14 = sibling(option_13);
    var text_13 = child(option_14);
    option_14.value = option_14.__value = 'FluidLTR';

    var option_15 = sibling(option_14);
    var text_14 = child(option_15);
    option_15.value = option_15.__value = 'FluidRTL';

    template_effect(() => {
      set_text(text, `${$locale().DEFAULT_ZOOM_MODE ?? ''} `);

      set_text(
        text_1,
        `>
      ${$locale().PERCENT ?? ''}`,
      );

      set_text(text_2, $locale().FIT_WIDTH);
      set_text(text_3, $locale().FIT_HEIGHT);
      set_class(
        div_1,
        1,
        `ControlLabel DefaultZoom ControlLabelItem ${$settings().zoomMode === 'percent' ? 'show' : ''}`,
      );
      set_text(text_4, `${$locale().DEFAULT_ZOOM ?? ''} `);
      set_text(text_5, `${$settings().defaultZoom ?? ''}%`);
      set_value(input, $settings().defaultZoom);
      set_text(text_6, `${$locale().MINIMUM_ZOOM ?? ''} `);
      set_text(text_7, `${$settings().minZoom ?? ''}%`);
      set_value(input_1, $settings().minZoom);
      set_text(text_8, `${$locale().ZOOM_STEP ?? ''} `);
      set_text(text_9, `${$settings().zoomStep ?? ''}%`);
      set_value(input_2, $settings().zoomStep);
      set_text(text_10, `${$locale().DEFAULT_VIEW_MODE ?? ''} `);
      set_text(text_11, $locale().VIEW_MODE_VERTICAL);
      set_text(text_12, $locale().VIEW_MODE_WEBCOMIC);
      set_text(text_13, $locale().VIEW_MODE_LEFT);
      set_text(text_14, $locale().VIEW_MODE_RIGHT);
    });

    bind_select_value(
      select,
      () => $settings().zoomMode,
      $$value =>
        store_mutate(settings$1, (untrack($settings).zoomMode = $$value), untrack($settings)),
    );
    bind_select_value(
      select_1,
      () => $settings().viewMode,
      $$value =>
        store_mutate(settings$1, (untrack($settings).viewMode = $$value), untrack($settings)),
    );
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }

  delegate(['change', 'input']);

  var root$3 = from_html(
    `<div class="panel" id="SettingsPanel"><h2> </h2> <button class="closeButton" id="CloseSettings"><!></button> <button class="ControlButton" id="ResetSettings"><!> </button> <fieldset><legend> </legend> <!></fieldset> <fieldset><legend> </legend> <!></fieldset> <fieldset><legend> </legend> <!></fieldset> <fieldset><legend> </legend> <!></fieldset> <fieldset><legend> </legend> <!></fieldset></div>`,
  );

  function SettingsPanel$1($$anchor, $$props) {
    push($$props, false);

    const [$$stores, $$cleanup] = setup_stores();
    const $locale = () => store_get(locale, '$locale', $$stores);

    init();

    var div = root$3();
    var h2 = child(div);
    var text = child(h2);

    var button = sibling(h2, 2);

    button.__click = function (...$$args) {
      buttonSettingsClose?.apply(this, $$args);
    };

    var node = child(button);

    html(node, () => IconX);

    var button_1 = sibling(button, 2);

    button_1.__click = function (...$$args) {
      buttonResetSettings?.apply(this, $$args);
    };

    var node_1 = child(button_1);

    html(node_1, () => IconSettingsOff);

    var text_1 = sibling(node_1);

    var fieldset = sibling(button_1, 2);
    var legend = child(fieldset);
    var text_2 = child(legend);

    var node_2 = sibling(legend, 2);

    SettingsPanel_General(node_2, {});

    var fieldset_1 = sibling(fieldset, 2);
    var legend_1 = child(fieldset_1);
    var text_3 = child(legend_1);

    var node_3 = sibling(legend_1, 2);

    SettingsPanel_Theme(node_3, {});

    var fieldset_2 = sibling(fieldset_1, 2);
    var legend_2 = child(fieldset_2);
    var text_4 = child(legend_2);

    var node_4 = sibling(legend_2, 2);

    SettingsPanel_Loading(node_4, {});

    var fieldset_3 = sibling(fieldset_2, 2);
    var legend_3 = child(fieldset_3);
    var text_5 = child(legend_3);

    var node_5 = sibling(legend_3, 2);

    SettingsPanel_Zoom(node_5, {});

    var fieldset_4 = sibling(fieldset_3, 2);
    var legend_4 = child(fieldset_4);
    var text_6 = child(legend_4);

    var node_6 = sibling(legend_4, 2);

    SettingsPanel_Others(node_6, {});

    template_effect(() => {
      set_text(text, $locale().SETTINGS);
      set_attribute(button, 'title', $locale().CLOSE);
      set_text(text_1, ` ${$locale().BUTTON_RESET_SETTINGS ?? ''}`);
      set_text(text_2, $locale().GENERAL);
      set_text(text_3, $locale().THEME);
      set_text(text_4, $locale().LOADING);
      set_text(text_5, $locale().ZOOM);
      set_text(text_6, $locale().OTHERS);
    });

    append($$anchor, div);
    pop();
    $$cleanup();
  }

  delegate(['click']);

  var root$2 = from_html(
    `<div class="Thumbnail"><img alt="" class="ThumbnailImg"/> <span class="ThumbnailIndex"> </span></div>`,
  );

  function Thumbnail($$anchor, $$props) {
    const src = prop($$props, 'src', 3, '');
    var div = root$2();

    div.__click = function (...$$args) {
      clickThumbnail?.apply(this, $$args);
    };

    var img = child(div);
    var span = sibling(img, 2);
    var text = child(span);

    template_effect(() => {
      set_attribute(div, 'id', `Thumbnail${$$props.index ?? ''}`);
      set_attribute(img, 'id', `ThumbnailImg${$$props.index ?? ''}`);
      set_attribute(img, 'src', src());
      set_text(text, $$props.index);
    });

    append($$anchor, div);
  }

  delegate(['click']);

  var root$1 = from_html(
    `<nav id="Navigation"><div class="ControlLabel" id="NavigationCounters"><!> <i>0</i> / <b> </b> </div> <div id="Thumbnails"></div></nav>`,
  );

  function ThumbnailPanel($$anchor, $$props) {
    push($$props, true);

    const [$$stores, $$cleanup] = setup_stores();
    const $settings = () => store_get(settings$1, '$settings', $$stores);
    const $locale = () => store_get(locale, '$locale', $$stores);
    var nav = root$1();
    var div = child(nav);
    var node = child(div);

    html(node, () => IconCategory);

    var b = sibling(node, 4);
    var text = child(b);

    var text_1 = sibling(b);

    var div_1 = sibling(div, 2);

    each(
      div_1,
      21,
      () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin),
      index,
      ($$anchor, index) => {
        Thumbnail($$anchor, {
          get index() {
            return get$1(index);
          },
        });
      },
    );

    template_effect(() => {
      set_class(nav, 1, `panel ${$settings().showThumbnails ? '' : 'disabled'}`);

      set_text(
        text,
        $$props.manga.begin && $$props.manga.begin > 1
          ? $$props.manga.pages - ($$props.manga.begin - 1)
          : $$props.manga.pages,
      );

      set_text(text_1, ` ${$locale().PAGES_LOADED ?? ''}`);
    });

    event('wheel', div_1, function (...$$args) {
      transformScrollToHorizontal?.apply(this, $$args);
    });

    append($$anchor, nav);
    pop();
    $$cleanup();
  }

  function buttonOverlay() {
    buttonSettingsClose();
    buttonCommentsClose();
    buttonBookmarksClose();
    buttonKeybindingsClose();
  }

  var root = from_html(
    `<div id="MangaOnlineViewer"><div id="menu"><!></div> <!> <!> <!> <div class="overlay" id="Overlay"></div> <!> <!> <!> <!></div>`,
  );

  function App($$anchor, $$props) {
    push($$props, true);

    const [$$stores, $$cleanup] = setup_stores();
    const $settings = () => store_get(settings$1, '$settings', $$stores);
    var div = root();
    var event_handler = user_derived(() => _.throttle(headerHover, 300));

    event('mouseover', $window, function (...$$args) {
      get$1(event_handler)?.apply(this, $$args);
    });

    var event_handler_1 = user_derived(() => _.debounce(toggleScrollDirection, 50));

    event('scroll', $window, function (...$$args) {
      get$1(event_handler_1)?.apply(this, $$args);
    });

    var event_handler_2 = user_derived(() => _.throttle(manualScroll, 500));

    event('wheel', $window, function (...$$args) {
      get$1(event_handler_2)?.apply(this, $$args);
    });

    var div_1 = child(div);

    div_1.__click = function (...$$args) {
      buttonHeaderClick?.apply(this, $$args);
    };

    var node = child(div_1);

    html(node, () => IconMenu2);

    var node_1 = sibling(div_1, 2);

    Header$1(node_1, {
      get manga() {
        return $$props.manga;
      },
    });

    var node_2 = sibling(node_1, 2);

    Reader$1(node_2, {
      get manga() {
        return $$props.manga;
      },
    });

    var node_3 = sibling(node_2, 2);

    ThumbnailPanel(node_3, {
      get manga() {
        return $$props.manga;
      },
    });

    var div_2 = sibling(node_3, 2);

    div_2.__click = [buttonOverlay];

    var node_4 = sibling(div_2, 2);

    CommentsPanel(node_4, {});

    var node_5 = sibling(node_4, 2);

    KeybindingsPanel(node_5, {});

    var node_6 = sibling(node_5, 2);

    BookmarksPanel(node_6, {});

    var node_7 = sibling(node_6, 2);

    SettingsPanel$1(node_7, {});

    template_effect(
      ($0, $1) => {
        set_class(
          div,
          1,
          `${$settings().colorScheme ?? ''}
        ${$settings().hidePageControls ? 'hideControls' : ''}
        ${$0 ?? ''}
        ${$1 ?? ''}`,
        );

        set_attribute(div, 'data-theme', $settings().theme);
        set_class(div_1, 1, clsx($settings().header));
      },
      [() => (isBookmarked() ? 'bookmarked' : ''), getDevice],
    );

    append($$anchor, div);
    pop();
    $$cleanup();
  }

  delegate(['click']);

  function loadReader(manga) {
    console.warn('Using Svelte');
    cleanUpElement(document.documentElement, document.head, document.body);
    window.scrollTo(0, 0);
    logScriptVerbose(`Page Cleaned Up`);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = '<div id="MOV"></div>';
    mount(App, {
      target: document.body,
      props: {
        manga,
      },
    });
    loadManga(manga, 0);
    if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
  }

  let setupEvents = false;
  function events() {
    if (!setupEvents) {
      headroom(100);
      keybindings();
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

  const commentsPanel = () => html$1`
  <div
    id="CommentsPanel"
    class="panel"
  >
    <button
      id="CloseComments"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
    >
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div
      id="CommentsArea"
      class="${getSettingsValue('colorScheme')}"
    ></div>
    <button
      id="CommentsColorScheme"
      class="simpleButton ColorScheme"
    >
      ${IconSun} ${IconMoon}
    </button>
  </div>
`;

  const listOptions = (times, begin) =>
    sequence(times, begin).map(index => html$1` <option value="${index}">${index}</option>`);
  const Header = manga => html$1`
  <header
    id="Header"
    class="${getSettingsValue('header')} headroom-top"
  >
    <aside id="GlobalFunctions">
      <span>
        <button
          id="enlarge"
          title="${getLocaleString('ENLARGE')}"
          class="ControlButton"
        >
          ${IconZoomInArea}
        </button>
        <button
          id="restore"
          title="${getLocaleString('RESTORE')}"
          class="ControlButton"
        >
          ${IconZoomPan}
        </button>
        <button
          id="reduce"
          title="${getLocaleString('REDUCE')}"
          class="ControlButton"
        >
          ${IconZoomOutArea}
        </button>
        <button
          id="fitWidth"
          title="${getLocaleString('FIT_WIDTH')}"
          class="ControlButton"
        >
          ${IconArrowAutofitWidth}
        </button>
        <button
          id="fitHeight"
          title="${getLocaleString('FIT_HEIGHT')}"
          class="ControlButton"
        >
          ${IconArrowAutofitHeight}
        </button>
        <button
          id="keybindings"
          title="${getLocaleString('KEYBINDINGS')}"
          class="ControlButton"
        >
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
        <button
          id="ltrMode"
          title="${getLocaleString('VIEW_MODE_LEFT')}"
          class="ControlButton"
        >
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
        <button
          id="rtlMode"
          title="${getLocaleString('VIEW_MODE_RIGHT')}"
          class="ControlButton"
        >
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
        <output
          id="ZoomVal"
          class="RangeValue"
          for="Zoom"
        >
          ${getSettingsValue('zoomMode') === 'percent' ? `${getSettingsValue('defaultZoom')}%` : getSettingsValue('zoomMode')}
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
      <a
        id="series"
        href="${manga.series ?? ''}"
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
        <i>0</i> /
        <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
        <select id="gotoPage">
          <option selected>#</option>
          ${listOptions(manga.pages, manga.begin ?? 0).join('')}
        </select>
      </div>
      <div
        id="ChapterControl"
        class="ChapterControl"
      >
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
    sequence(times, begin).map(
      index => html$1`
      <div
        id="Page${index}"
        class="MangaPage"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark ControlButton"
            title="${getLocaleString('BOOKMARK')}"
          >
            ${IconBookmark} ${IconBookmarkOff}
          </button>
          <button
            class="ZoomIn ControlButton"
            title="${getLocaleString('ZOOM_IN')}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore ControlButton"
            title="${getLocaleString('ZOOM_RESET')}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut ControlButton"
            title="${getLocaleString('ZOOM_OUT')}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth ControlButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight ControlButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide ControlButton"
            title="${getLocaleString('HIDE')}"
          >
            ${IconEye} ${IconEyeOff}
          </button>
          <button
            class="Reload ControlButton"
            title="${getLocaleString('RELOAD')}"
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt=""
            class="PageImg"
            src=""
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `,
    );

  const Reader = manga => html$1`
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
    return html$1` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <div
      id="SettingsScope"
      class="radio-inputs"
    >
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
        locale => html$1`
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
    return html$1` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select id="locale">
      ${localeSelector()}
    </select>
  </div>`;
  }
  const SettingsPanelGeneral = () => settingsScope() + language();

  function loadMode() {
    return html$1`
    <div class="ControlLabel loadMode">
      ${getLocaleString('DEFAULT_LOAD_MODE')}
      <select id="loadMode">
        <option
          value="wait"
          ${getSettingsValue('loadMode') === 'wait' ? 'selected' : ''}
        >
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option
          value="always"
          ${getSettingsValue('loadMode') === 'always' ? 'selected' : ''}
        >
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option
          value="never"
          ${getSettingsValue('loadMode') === 'never' ? 'selected' : ''}
        >
          ${getLocaleString('LOAD_MODE_NEVER')}
        </option>
      </select>
    </div>
  `;
  }
  function loadSpeed() {
    return html$1`
    <div class="ControlLabel PagesPerSecond">
      ${getLocaleString('LOAD_SPEED')}
      <select id="PagesPerSecond">
        <option
          value="3000"
          ${getSettingsValue('throttlePageLoad') === 3e3 ? 'selected' : ''}
        >
          0.3(${getLocaleString('SLOWLY')})
        </option>
        <option
          value="2000"
          ${getSettingsValue('throttlePageLoad') === 2e3 ? 'selected' : ''}
        >
          0.5
        </option>
        <option
          value="1000"
          ${getSettingsValue('throttlePageLoad') === 1e3 ? 'selected' : ''}
        >
          01(${getLocaleString('NORMAL')})
        </option>
        <option
          value="500"
          ${getSettingsValue('throttlePageLoad') === 500 ? 'selected' : ''}
        >
          02
        </option>
        <option
          value="250"
          ${getSettingsValue('throttlePageLoad') === 250 ? 'selected' : ''}
        >
          04(${getLocaleString('FAST')})
        </option>
        <option
          value="125"
          ${getSettingsValue('throttlePageLoad') === 125 ? 'selected' : ''}
        >
          08
        </option>
        <option
          value="100"
          ${getSettingsValue('throttlePageLoad') === 100 ? 'selected' : ''}
        >
          10(${getLocaleString('EXTREME')})
        </option>
        <option
          value="1"
          ${getSettingsValue('throttlePageLoad') === 1 ? 'selected' : ''}
        >
          ${getLocaleString('ALL_PAGES')}
        </option>
      </select>
    </div>
  `;
  }
  const SettingsPanelLoading = () => loadMode() + loadSpeed();

  function toggler(name, checked = false) {
    return html$1`
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
    return html$1`
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
    return html$1`
    <div
      class="ControlLabel lazyStart ControlLabelItem
    ${getSettingsValue('lazyLoadImages') ? 'show' : ''}"
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
      />
    </div>
  `;
  }
  function headerType() {
    return html$1`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <select id="headerType">
        <option
          value="hover"
          ${getSettingsValue('header') === 'hover' ? 'selected' : ''}
        >
          ${getLocaleString('HEADER_HOVER')}
        </option>
        <option
          value="scroll"
          ${getSettingsValue('header') === 'scroll' ? 'selected' : ''}
        >
          ${getLocaleString('HEADER_SCROLL')}
        </option>
        <option
          value="click"
          ${getSettingsValue('header') === 'click' ? 'selected' : ''}
        >
          ${getLocaleString('HEADER_CLICK')}
        </option>
        <option
          value="fixed"
          ${getSettingsValue('header') === 'fixed' ? 'selected' : ''}
        >
          ${getLocaleString('HEADER_FIXED')}
        </option>
        <option
          value="simple"
          ${getSettingsValue('header') === 'simple' ? 'selected' : ''}
        >
          ${getLocaleString('HEADER_SIMPLE')}
        </option>
      </select>
    </div>
  `;
  }
  function autoScroll() {
    return html$1`
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
        oninput="scrollHeightVal.value = this.value"
      />
    </div>
  `;
  }
  const SettingsPanelOthers = () => checkboxOptions() + lazyLoad() + headerType() + autoScroll();

  function themesSelector() {
    return [...Object.keys(colors).map(color => colors[color].name)]
      .map(
        theme2 => html$1`
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
    return html$1`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <button
        id="ColorScheme"
        class="ControlButton"
      >
        ${IconSun} ${IconMoon}
      </button>
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
        <output
          id="themeShadeVal"
          class="RangeValue"
          for="ThemeShade"
        >
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
    return html$1` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <select id="DefaultZoomMode">
      <option
        value="percent"
        ${getSettingsValue('zoomMode') === 'percent' ? 'selected' : ''}
      >
        ${getLocaleString('PERCENT')}
      </option>
      <option
        value="width"
        ${getSettingsValue('zoomMode') === 'width' ? 'selected' : ''}
      >
        ${getLocaleString('FIT_WIDTH')}
      </option>
      <option
        value="height"
        ${getSettingsValue('zoomMode') === 'height' ? 'selected' : ''}
      >
        ${getLocaleString('FIT_HEIGHT')}
      </option>
    </select>
  </div>`;
  }
  function defaultZoom() {
    return html$1`
    <div
      class="ControlLabel DefaultZoom ControlLabelItem ${getSettingsValue('zoomMode') === 'percent' ? 'show' : ''}"
    >
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}
        <output
          id="defaultZoomVal"
          class="RangeValue"
          for="DefaultZoom"
        >
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
    return html$1`
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
        min="30"
        max="100"
        step="10"
        oninput='minZoomVal.value = this.value + "%"'
      />
    </div>
  `;
  }
  function zoomStep() {
    return html$1`
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
        min="5"
        max="50"
        step="5"
        oninput='zoomStepVal.value = this.value + "%"'
      />
    </div>
  `;
  }
  function viewMode() {
    return html$1`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <select id="viewMode">
        <option
          value="Vertical"
          ${getSettingsValue('viewMode') === 'Vertical' ? 'selected' : ''}
        >
          ${getLocaleString('VIEW_MODE_VERTICAL')}
        </option>
        <option
          value="WebComic"
          ${getSettingsValue('viewMode') === 'WebComic' ? 'selected' : ''}
        >
          ${getLocaleString('VIEW_MODE_WEBCOMIC')}
        </option>
        <option
          value="FluidLTR"
          ${getSettingsValue('viewMode') === 'FluidLTR' ? 'selected' : ''}
        >
          ${getLocaleString('VIEW_MODE_LEFT')}
        </option>
        <option
          value="FluidRTL"
          ${getSettingsValue('viewMode') === 'FluidRTL' ? 'selected' : ''}
        >
          ${getLocaleString('VIEW_MODE_RIGHT')}
        </option>
      </select>
    </div>
  `;
  }
  const SettingsPanelZoom = () =>
    defaultZoomMode() + defaultZoom() + minZoom() + zoomStep() + viewMode();

  const SettingsPanel = () => html$1`
  <div
    id="SettingsPanel"
    class="panel"
  >
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button
      id="CloseSettings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
    >
      ${IconX}
    </button>
    <button
      id="ResetSettings"
      class="ControlButton"
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

  const ThumbnailsPanel = manga => html$1`
  <nav
    id="Navigation"
    class="panel ${getSettingsValue('showThumbnails') ? '' : 'disabled'}"
  >
    <div
      id="NavigationCounters"
      class="ControlLabel"
    >
      ${IconCategory}
      <i>0</i> /
      <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
      ${getLocaleString('PAGES_LOADED')}
    </div>
    <div id="Thumbnails">
      ${sequence(manga.pages, manga.begin)
        .map(
          index => html$1`
            <div
              id="Thumbnail${index}"
              class="Thumbnail"
            >
              <img
                id="ThumbnailImg${index}"
                alt=""
                class="ThumbnailImg"
                src=""
              />
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
      '#KeybindingsPanel': KeybindingsPanel$1(),
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
      reader.className = `${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''} ${getSettingsValue('verticalSeparator') ? 'separator' : ''} ${getSettingsValue('viewMode')}`;
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
    main.innerHTML = html$1`
    <div
      id="menu"
      class="${getSettingsValue('header')}"
    >
      ${IconMenu2}
    </div>
    ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
    <div
      id="Overlay"
      class="overlay"
    ></div>
    ${commentsPanel()} ${KeybindingsPanel$1()} ${BookmarkPanel()} ${SettingsPanel()}
  `;
    settings$1.listen(_.debounce(hydrateApp, 600));
    return main.outerHTML;
  };

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
        loadReader(manga);
        (unsafeWindow ?? window).MOVLegacy = () => display(manga);
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
      html: html$1`
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
      html: html$1`${manga.begin && manga.begin > 1 ? `${getLocaleString('RESUME')}${manga.begin}.<br/>` : ''}${getLocaleString('WAITING')}`,
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
