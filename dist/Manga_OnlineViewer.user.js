// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Alandal, Asura Scans, Batoto, BilibiliComics, ComiCastle, Comick, Dynasty-Scans, Flame Comics, INKR, InManga, KLManga, Leitor, LHTranslation, Local Files, LynxScans, MangaBuddy, MangaDemon, MangaDex, MangaFox, MangaHere, Mangago, MangaHosted, MangaHub, MangasIn, MangaKakalot, MangaNelo, MangaNato, MangaOni, MangaPark, Mangareader, MangaSee, Manga4life, MangaTigre, MangaToons, MangaTown, ManhuaScan, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NaniScans, NineManga, OlympusScans, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, ReaperScans, SenManga(Raw), KLManga, TenManga, TuMangaOnline, TuManhwas, UnionMangas, WebNovel, WebToons, Manga33, Vortex Scans, YugenMangas, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod
// @version       2024.12.26
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
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
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.9/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.40/src/ua-parser.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/alandal.com\/chapter\/.+\/\d+/
// @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/
// @include       /https?:\/\/(www\.)?bato.to\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/comic\.nizamkomputer.com\/read\/.+\/\d+.*/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(comics\.)?inkr.com\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?inmanga.com\/ver\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?klmanga.com\/.+chapter.+/
// @include       /https?:\/\/(www\.)?leitor.net\/manga\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?lynxscans.com\/comics?\/.+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?mangahosted.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangas.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(read|chap)?(manganelo|mangakakalot|manganato).(com|to).*\/chapter.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?mangapark.(com|me|org|net)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include       /https?:\/\/(www\.)?mangatigre.net\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www\.|m\.)?mangatown.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?manhuascan.com\/manga\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?(naniscans).com\/chapters\/.+\/read/
// @include       /https?:\/\/(www\.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include       /https?:\/\/(www\.)?olympusscans.com\/capitulo\/.+\/.+/
// @include       /https?:\/\/(www\.)?pandamanga.xyz\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?rawdevart.com\/comic\/.+\/.+\//
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?readm.today\/.+\/\d+/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/raw\.senmanga.com\/.+\/.+\/?/
// @include       /https?:\/\/(www\.)?tapas.io\/episode\/.+/
// @include       /https?:\/\/(www\.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www\.)?tumanhwas.com\/news\/.+/
// @include       /https?:\/\/(www\.)?unionleitor.top\/leitor\/.+\/.+/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(manga33).com\/manga\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?(yugenmangas).(com|net|lat)\/series\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realmoasis|hivetoon|rizzfables)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function () {
  'use strict';

  const alandal = {
    name: "Alandal",
    url: /https?:\/\/alandal.com\/chapter\/.+\/\d+/,
    homepage: "https://alandal.com/",
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll('img[alt^="Page"]')];
      const chapter = document?.querySelector('[aria-label="chapter list"]')?.parentElement?.parentElement?.parentElement?.parentElement?.querySelectorAll("a");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('a[href^="/series/"]')?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.item(0)?.getAttribute("href"),
        next: chapter?.item(1)?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  function findByContentEq(selector, content) {
    return [...document.querySelectorAll(selector)].filter(
      (e) => e.textContent?.trim() === content
    );
  }
  function findOneByContentStarts(selector, content) {
    return [...document.querySelectorAll(selector)].filter(
      (e) => e.textContent?.trim()?.startsWith(content)
    )?.[0];
  }
  function findClosestByContentEq(selector, content, ancestor = "a") {
    return [...document.querySelectorAll(selector)]?.filter((e) => e.textContent?.trim() === content)?.[0]?.closest(ancestor);
  }
  function findClosestByContentStarts(selector, content, ancestor = "a") {
    return [...document.querySelectorAll(selector)]?.filter((e) => e.textContent?.trim()?.startsWith(content))?.[0]?.closest(ancestor);
  }
  function findClosestByContentEnds(selector, content, ancestor = "a") {
    return [...document.querySelectorAll(selector)]?.filter((e) => e.textContent?.trim()?.endsWith(content))?.[0]?.closest(ancestor);
  }

  const asura = {
    name: "Asura Scans",
    url: /https?:\/\/(www.)?(asuracomic).(net)\/.+/,
    homepage: "https://asuracomic.net/",
    language: ["English"],
    category: "manga",
    waitEle: 'img[alt*="chapter"]',
    waitTime: 2e3,
    run() {
      const images = [...document.querySelectorAll('img[alt*="chapter"]')];
      return {
        title: document.querySelector("h2")?.textContent?.trim(),
        series: findOneByContentStarts("p", "All chapters are in")?.querySelector("a")?.getAttribute("href"),
        pages: images.length,
        prev: findClosestByContentEq("h2", "Prev", "a")?.getAttribute("href"),
        next: findClosestByContentEq("h2", "Next", "a")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const batoto = {
    name: "Batoto",
    url: /https?:\/\/(www\.)?bato.to\/(chapter|title).*/,
    homepage: "https://bato.to/",
    language: ["English"],
    category: "manga",
    waitEle: 'div[name="image-item"] img, .page-img',
    run() {
      if (window.location.pathname.startsWith("/title")) {
        if (window.location.search !== "?load=2") {
          window.location.search = "?load=2";
        }
        const images2 = [...document.querySelectorAll('div[name="image-item"] img')];
        return {
          title: document.querySelector("h6")?.textContent?.trim(),
          series: document.querySelector("h3 a")?.getAttribute("href"),
          pages: images2.length,
          prev: findClosestByContentEnds("span", "Prev Chapter", "a")?.getAttribute("href"),
          next: findClosestByContentStarts("span", "Next Chapter", "a")?.getAttribute("href"),
          listImages: images2.map((img) => img.getAttribute("src"))
        };
      }
      const images = [...document.querySelectorAll(".page-img")];
      return {
        title: document.querySelector(".nav-title a")?.textContent?.trim(),
        series: document.querySelector(".nav-title a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".nav-prev a")?.getAttribute("href"),
        next: document.querySelector(".nav-next a")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const bilibilicomics = {
    name: "BilibiliComics",
    url: /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,
    homepage: "https://www.bilibilicomics.net/",
    language: ["English"],
    category: "manga",
    waitEle: "#__NUXT_DATA__",
    async run() {
      const json = JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML ?? "");
      const images = json.filter(
        (x) => typeof x === "string" && /.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(x)
      );
      return {
        title: document.querySelector(".chapterTitle")?.textContent?.trim(),
        series: document.querySelector(".book-name")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),
        next: document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),
        listImages: images.map((image) => `https://static.comicfans.io/${image}`)
      };
    }
  };

  const comicastle = {
    name: "ComiCastle",
    url: /https?:\/\/comic\.nizamkomputer.com\/read\/.+\/\d+.*/,
    homepage: "https://comic.nizamkomputer.com/",
    language: ["English"],
    category: "comic",
    waitEle: ".form-control option:nth-child(1)",
    run() {
      const images = [...document.querySelectorAll(".form-control")[1].querySelectorAll("option")];
      const chapter = document.querySelectorAll(".form-control")[0].querySelector("option:checked");
      return {
        title: chapter?.textContent?.trim(),
        series: document.querySelector(".navbar-header a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("alt"))
      };
    }
  };

  const comick = {
    name: "Comick",
    url: /https?:\/\/(www\.)?comick.io\/.+/,
    homepage: "https://comick.io/",
    language: ["English"],
    category: "manga",
    waitFunc() {
      return /\/([^/]+)-chapter.+$/.test(window.location.pathname);
    },
    waitEle: "#__NEXT_DATA__",
    run() {
      const data = JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML ?? "")?.props?.pageProps;
      const pages = data?.chapter?.md_images?.map(
        (image) => `https://meo.comick.pictures/${image?.b2key}`
      );
      return {
        title: data?.seoTitle ?? `${data.chapter?.md_comics?.title} ${data?.chapter?.chap}`,
        series: `/comic/${data?.chapter?.md_comics?.slug}`,
        pages: pages?.length,
        prev: data?.prev?.href,
        next: data?.next?.href,
        listImages: pages
      };
    }
  };

  const dysnatyscans = {
    name: "Dynasty-Scans",
    url: /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,
    homepage: "https://dynasty-scans.com/",
    language: ["English"],
    category: "manga",
    run() {
      return {
        title: document.querySelector("#chapter-title")?.textContent?.trim(),
        series: document.querySelector("#chapter-title a")?.getAttribute("href"),
        pages: unsafeWindow.pages.length,
        prev: document.querySelector("#prev_link")?.getAttribute("href"),
        next: document.querySelector("#next_link")?.getAttribute("href"),
        listImages: unsafeWindow.pages.map((x) => x.image)
      };
    }
  };

  const foolslide = {
    name: ["FoOlSlide", "Kireicake"],
    url: /^(?!.*jaiminisbox).*\/read\/.+/,
    homepage: ["https://github.com/saintly2k/FoOlSlideX", "https://reader.kireicake.com"],
    language: ["English"],
    obs: "Any Site that uses FoOLSlide",
    category: "manga",
    waitEle: "img.open",
    run() {
      const chapter = [...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")];
      const origin = chapter.findIndex((item) => {
        const url = item.querySelector("a")?.getAttribute("href");
        if (url) {
          return window.location.href.startsWith(url);
        }
        return false;
      });
      const pages = [...document.querySelectorAll(".topbar_right .dropdown li")];
      const images = [...document.querySelectorAll(".inner img:not(.open)")];
      const num = images.length > 1 ? images.length : pages.length;
      return {
        title: chapter.at(origin)?.querySelector("a")?.textContent?.trim() ?? document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),
        pages: num,
        prev: chapter.at(origin + 1)?.querySelector("a")?.getAttribute("href"),
        next: chapter.at(origin - 1)?.querySelector("a")?.getAttribute("href"),
        listPages: images.length > 1 ? null : Array(num).fill(0).map((_, i) => `${window.location.href.replace(/\/\d+$/, "")}/${i + 1}`),
        listImages: images.length > 1 ? images.map((img) => img.getAttribute("src")) : null,
        img: "img.open"
      };
    }
  };

  const flamecomics = {
    name: "Flame Comics",
    url: /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,
    homepage: "https://flamecomics.xyz/",
    language: ["English"],
    category: "manga",
    run: function() {
      const cdn = "https://cdn.flamecomics.xyz/series";
      const json = JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML ?? "");
      const chapter = json?.props?.pageProps?.chapter;
      const images = Object.keys(chapter?.images).map(
        (i) => `${cdn}/${chapter?.series_id}/${chapter?.token}/${chapter?.images?.[i]?.name}`
      );
      return {
        title: `${chapter?.title} ${chapter?.chapter}`,
        series: `../${chapter?.series_id}`,
        pages: images.length,
        prev: json?.props?.pageProps?.previous,
        next: json?.props?.pageProps?.next,
        listImages: images
      };
    }
  };

  const inkr = {
    name: "INKR",
    url: /https?:\/\/(comics\.)?inkr.com\/title\/.+\/chapter\/.+/,
    homepage: "https://inkr.com/",
    language: ["English"],
    category: "manga",
    waitFunc: () => document.querySelector('[data-container="file-horizontal-scroll-view"] img')?.naturalWidth !== void 0 && document.querySelectorAll('[data-container="file-horizontal-scroll-view"] img').length > 2,
    run() {
      const images = [
        ...document.querySelectorAll('[data-container="file-horizontal-scroll-view"] img')
      ];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('[aria-label="Previous Chapter"] + div a')?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector('a[aria-label="Previous Chapter"]')?.getAttribute("href"),
        next: document.querySelector('a[aria-label="Next Chapter"]')?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src")?.replace("/t.", "/p."))
      };
    }
  };

  const inmanga = {
    name: "InManga",
    url: /https?:\/\/(www\.)?inmanga.com\/ver\/manga\/.+\/.+/,
    homepage: "https://inmanga.com//",
    language: ["Spanish"],
    category: "manga",
    waitVar: "pageController",
    run() {
      const images = [...document.querySelectorAll("#PageList option")];
      const chapter = document.querySelector("#ChapList option:checked");
      const src = unsafeWindow.pageController._containers.pageUrl;
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: `../${unsafeWindow.pageController._containers.mangaIdentification}`,
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map(
          (img, index) => src.replace("identification", img.getAttribute("value")).replace("pageNumber", index)
        )
      };
    }
  };

  const klmanga = {
    name: "KLManga",
    url: /https?:\/\/(www\.)?klmanga.com\/.+chapter.+/,
    homepage: "https://klmanga.com/",
    language: ["Raw"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".chapter-content img")];
      const chapter = document.querySelectorAll(".form-control")[0].querySelector("option:checked");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".navbar-brand")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const leitor = {
    name: "Leitor",
    url: /https?:\/\/(www\.)?leitor.net\/manga\/.+\/.+\/.+/,
    homepage: "https://leitor.net/",
    language: ["Portuguese"],
    category: "manga",
    async run() {
      const url = `https://leitor.net/leitor/pages/${unsafeWindow.READER_ID_RELEASE}.json?key=${unsafeWindow.READER_TOKEN}`;
      const api = await fetch(url).then(async (res) => res.json());
      const chapter = document.querySelector(".chapter-list .selected");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".series-cover a")?.getAttribute("href"),
        pages: api.images.length,
        prev: chapter?.nextElementSibling?.querySelector("a")?.getAttribute("href"),
        next: chapter?.previousElementSibling?.querySelector("a")?.getAttribute("href"),
        listImages: api.images.map(
          (img) => img.avif ?? img.legacy
        )
      };
    }
  };

  const lhtranslation = {
    name: "LHTranslation",
    url: /https?:\/\/(www\.)?lhtranslation.net\/read.+/,
    homepage: "https://lhtranslation.net/",
    language: ["English"],
    category: "manga",
    run() {
      const chapter = document.querySelector(".form-control option:checked");
      const images = [...document.querySelectorAll("img.chapter-img")];
      return {
        title: document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),
        series: document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const concatenateTemplateLiteralTag = (raw, ...keys) => keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html = concatenateTemplateLiteralTag;
  const css = concatenateTemplateLiteralTag;

  const colors = {
    dark: {
      name: "dark",
      50: "#C1C2C5",
      100: "#A6A7AB",
      200: "#909296",
      300: "#5c5f66",
      400: "#373A40",
      500: "#2C2E33",
      600: "#25262b",
      700: "#1A1B1E",
      800: "#141517",
      900: "#101113"
    },
    gray: {
      name: "gray",
      50: "#f8f9fa",
      100: "#f1f3f5",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#868e96",
      700: "#495057",
      800: "#343a40",
      900: "#212529"
    },
    red: {
      name: "red",
      50: "#fff5f5",
      100: "#ffe3e3",
      200: "#ffc9c9",
      300: "#ffa8a8",
      400: "#ff8787",
      500: "#ff6b6b",
      600: "#fa5252",
      700: "#f03e3e",
      800: "#e03131",
      900: "#c92a2a"
    },
    pink: {
      name: "pink",
      50: "#fff0f6",
      100: "#ffdeeb",
      200: "#fcc2d7",
      300: "#faa2c1",
      400: "#f783ac",
      500: "#f06595",
      600: "#e64980",
      700: "#d6336c",
      800: "#c2255c",
      900: "#a61e4d"
    },
    grape: {
      name: "grape",
      50: "#f8f0fc",
      100: "#f3d9fa",
      200: "#eebefa",
      300: "#e599f7",
      400: "#da77f2",
      500: "#cc5de8",
      600: "#be4bdb",
      700: "#ae3ec9",
      800: "#9c36b5",
      900: "#862e9c"
    },
    violet: {
      name: "violet",
      50: "#f3f0ff",
      100: "#e5dbff",
      200: "#d0bfff",
      300: "#b197fc",
      400: "#9775fa",
      500: "#845ef7",
      600: "#7950f2",
      700: "#7048e8",
      800: "#6741d9",
      900: "#5f3dc4"
    },
    indigo: {
      name: "purple",
      50: "#edf2ff",
      100: "#dbe4ff",
      200: "#bac8ff",
      300: "#91a7ff",
      400: "#748ffc",
      500: "#5c7cfa",
      600: "#4c6ef5",
      700: "#4263eb",
      800: "#3b5bdb",
      900: "#364fc7"
    },
    blue: {
      name: "blue",
      50: "#e7f5ff",
      100: "#d0ebff",
      200: "#a5d8ff",
      300: "#74c0fc",
      400: "#4dabf7",
      500: "#339af0",
      600: "#228be6",
      700: "#1c7ed6",
      800: "#1971c2",
      900: "#1864ab"
    },
    cyan: {
      name: "cyan",
      50: "#e3fafc",
      100: "#c5f6fa",
      200: "#99e9f2",
      300: "#66d9e8",
      400: "#3bc9db",
      500: "#22b8cf",
      600: "#15aabf",
      700: "#1098ad",
      800: "#0c8599",
      900: "#0b7285"
    },
    teal: {
      name: "teal",
      50: "#e6fcf5",
      100: "#c3fae8",
      200: "#96f2d7",
      300: "#63e6be",
      400: "#38d9a9",
      500: "#20c997",
      600: "#12b886",
      700: "#0ca678",
      800: "#099268",
      900: "#087f5b"
    },
    green: {
      name: "green",
      50: "#ebfbee",
      100: "#d3f9d8",
      200: "#b2f2bb",
      300: "#8ce99a",
      400: "#69db7c",
      500: "#51cf66",
      600: "#40c057",
      700: "#37b24d",
      800: "#2f9e44",
      900: "#2b8a3e"
    },
    lime: {
      name: "lime",
      50: "#f4fce3",
      100: "#e9fac8",
      200: "#d8f5a2",
      300: "#c0eb75",
      400: "#a9e34b",
      500: "#94d82d",
      600: "#82c91e",
      700: "#74b816",
      800: "#66a80f",
      900: "#5c940d"
    },
    yellow: {
      name: "yellow",
      50: "#fff9db",
      100: "#fff3bf",
      200: "#ffec99",
      300: "#ffe066",
      400: "#ffd43b",
      500: "#fcc419",
      600: "#fab005",
      700: "#f59f00",
      800: "#f08c00",
      900: "#e67700"
    },
    orange: {
      name: "orange",
      50: "#fff4e6",
      100: "#ffe8cc",
      200: "#ffd8a8",
      300: "#ffc078",
      400: "#ffa94d",
      500: "#ff922b",
      600: "#fd7e14",
      700: "#f76707",
      800: "#e8590c",
      900: "#d9480f"
    },
    darkblue: {
      name: "darkblue",
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B"
    }
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
    const cleaned = str.replace(/[\t\n\r]/gim, "").replace(/\s\s+/g, " ");
    const encoded = encodeURIComponent(cleaned).replace(/\(/g, "%28").replace(/\)/g, "%29");
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
  }
  const rulerMarkerLength = (len) => {
    if (len % 100 === 0) {
      return 15;
    }
    if (len % 50 === 0) {
      return 10;
    }
    if (len % 25 === 0) {
      return 5;
    }
    return 2.5;
  };
  function rectangleRuler(width, height, bgColor, textColor) {
    let markers = "";
    for (let x = 0; x <= width; x += 5) {
      const tick = html` <line x1="${x}" y1="0" x2="${x}" y2="${rulerMarkerLength(x)}" />`;
      markers += tick;
      if (x !== 0 && x % 50 === 0) {
        const label = html` <text
        x="${x}"
        y="25"
        text-anchor="middle"
        font-size="${rulerMarkerLength(x)}px"
      >
        ${x}
      </text>`;
        markers += label;
      }
    }
    for (let y = 0; y <= height; y += 5) {
      const tick = html` <line x1="0" y1="${y}" x2="${rulerMarkerLength(y)}" y2="${y}" />`;
      markers += tick;
      if (y !== 0 && y % 50 === 0) {
        const label = html` <text
        x="25"
        y="${y}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${rulerMarkerLength(y)}px"
      >
        ${y}
      </text>`;
        markers += label;
      }
    }
    return html` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
  >
    <rect width="${width}" height="${height}" fill="${bgColor}" />
    <text
      fill="${textColor}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${width}x${height}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${textColor}"
      stroke="${textColor}"
    >
      ${markers}
    </g>
  </svg>`;
  }
  function placeholder(width, height, bgColor = "#0F1C3F", textColor = "#ECEAD9") {
    const str = rectangleRuler(width, height, bgColor, textColor);
    return svgToUrl(str);
  }
  const backgrounds = Object.values(colors).map((i) => i["900"]);
  const widths = [400, 600, 900, 1200, 1400, 1600, 1970];
  const heights = [600, 800, 1e3, 1200, 1400, 2e3, 2600];
  function randomPlaceholder() {
    const randomWidth = Math.floor(Math.random() * widths.length);
    const randomHeight = Math.floor(Math.random() * heights.length);
    const randomColor = Math.floor(Math.random() * backgrounds.length);
    return placeholder(widths[randomWidth], heights[randomHeight], backgrounds[randomColor]);
  }

  const localhost = {
    name: "Local Files",
    url: /(file:\/\/\/.+(index)?.html)/,
    homepage: "/index.html?raw=1",
    language: ["Raw"],
    category: "manga",
    run() {
      const num = parseInt(/\d+/.exec(window.location.search)?.toString() ?? "5", 10);
      const comments = document.createElement("div");
      comments.innerHTML = Array(100).fill("Testing Comment<br/>").join("");
      return {
        title: "Placeholder Manga Loaded",
        series: "?reload",
        pages: num,
        begin: 1,
        prev: "?pages=50",
        next: "?pages=1",
        listImages: [
          placeholder(1970, 1400, "#2D1657"),
          placeholder(985, 1400, "#152C55"),
          placeholder(985, 1400, "#7A1420"),
          placeholder(985, 1400, "#0F5B30"),
          placeholder(1970, 1400, "#806D15"),
          ...Array(num).fill(0).map(randomPlaceholder)
        ],
        comments
      };
    }
  };

  const lynxscans = {
    name: "LynxScans",
    url: /https?:\/\/(www\.)?lynxscans.com\/comics?\/.+/,
    homepage: "https://lynxscans.com/",
    language: ["English"],
    category: "manga",
    waitAttr: ["#app", "data-page"],
    run() {
      const data = JSON.parse(document.querySelector("#app").getAttribute("data-page"));
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: data.props.home,
        pages: data.props.pages.length,
        prev: data.props.previousChapter,
        next: data.props.nextChapter,
        listImages: data.props.pages.map((img) => img.url)
      };
    }
  };

  const imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;
  function findImages$1() {
    return [
      ...document.querySelectorAll(
        ".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img"
      )
    ].map(
      (img) => [...img.attributes].filter(
        (attr) => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|load).*$/.test(attr.value)
      ).find((attr) => imageRegex.test(attr.value))?.value ?? img?.getAttribute("src")
    );
  }
  const madarawp = {
    name: [
      "Madara WordPress Plugin",
      "MangaHaus",
      "Isekai Scan",
      "Comic Kiba",
      "Zinmanga",
      "mangatx",
      "Toonily",
      "Mngazuki",
      "JaiminisBox",
      "DisasterScans",
      "ManhuaPlus",
      "TopManhua",
      "NovelMic",
      "Reset-Scans",
      "LeviatanScans",
      "Dragon Tea",
      "SetsuScans",
      "ToonGod"
    ],
    url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,
    homepage: [
      "https://mangabooth.com/",
      "https://manhuaus.com",
      "https://isekaiscan.com/",
      "https://comickiba.com/",
      "https://zinmanga.com/",
      "https://mangatx.com/",
      "https://toonily.net/",
      "https://mangazuki.me/",
      "https://jaiminisbox.net",
      "https://disasterscans.com/",
      "https://manhuaplus.org/",
      "https://www.topmanhua.com/",
      "https://novelmic.com/",
      "https://reset-scans.com/",
      "https://leviatanscans.com/",
      "https://dragontea.ink/",
      "https://setsuscans.com/",
      "https://toongod.org/home/"
    ],
    language: ["English"],
    obs: "Any Site that uses Madara Wordpress Plugin",
    category: "manga",
    waitFunc: () => {
      const images = findImages$1();
      return images.length > 0 && images.every((s) => s && imageRegex.test(s));
    },
    run() {
      const images = findImages$1();
      return {
        title: document.querySelector("#chapter-heading")?.textContent?.trim(),
        series: (document.querySelector(".breadcrumb li:nth-child(3) a") ?? document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".prev_page")?.getAttribute("href"),
        next: document.querySelector(".next_page")?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const mangabuddy = {
    name: "MangaBuddy",
    url: /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,
    homepage: "https://mangabuddy.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapImages",
    run() {
      const images = unsafeWindow.chapImages.split(",");
      return {
        title: document.querySelector(".chapter-info")?.textContent?.trim(),
        series: document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector("a.prev")?.getAttribute("href"),
        next: document.querySelector("a.next")?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const mangademon = {
    name: "MangaDemon",
    url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
    homepage: "https://demonicscans.org/",
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".imgholder")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("h1 a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".prevchap")?.getAttribute("href"),
        next: document.querySelector(".nextchap")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("data-src") || img.getAttribute("src"))
      };
    }
  };

  const mangadex = {
    name: "MangaDex",
    url: /https?:\/\/(www\.)?mangadex.org/,
    homepage: "https://mangadex.org/",
    language: ["English"],
    category: "manga",
    waitEle: "#chapter-selector a",
    async run() {
      const chapterId = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1);
      const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
      const server = await fetch(home).then(async (res) => res.json());
      const images = server.chapter.data;
      const chapters = document.querySelectorAll("#chapter-selector a");
      return {
        title: document.querySelector("title")?.text.replace(" - MangaDex", ""),
        series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),
        pages: images.length,
        prev: chapters?.item(0)?.getAttribute("href"),
        next: chapters?.item(1)?.getAttribute("href"),
        listImages: images.map(
          (img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`
        )
      };
    }
  };

  const mangafox = {
    name: ["MangaFox", "MangaHere"],
    url: /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
    homepage: ["https://fanfox.net/", "https://www.mangahere.cc/"],
    language: ["English"],
    category: "manga",
    waitVar: "chapterid",
    async run() {
      const key = document.querySelector("#dm5_key")?.getAttribute("value");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "text/plain"
        }
      };
      const src = Array(unsafeWindow.imagecount).fill(0).map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${unsafeWindow.chapterid ?? unsafeWindow.chapter_id}&page=${i}&key=${key}`;
        const api = await fetch(url, options).then(async (res) => res.text());
        (0, eval)(api);
        return d;
      });
      const images = await Promise.all(src);
      return {
        title: document.querySelector(".reader-header-title div")?.textContent?.trim(),
        series: document.querySelector(".reader-header-title a")?.getAttribute("href"),
        pages: unsafeWindow.imagecount,
        prev: unsafeWindow.prechapterurl,
        next: unsafeWindow.nextchapterurl,
        listImages: images.map((img, i) => img[i === 0 ? 0 : 1])
      };
    }
  };

  const mangago = {
    name: "Mangago",
    url: /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,
    homepage: "https://www.mangago.me/",
    language: ["English"],
    category: "manga",
    waitVar: "imgsrcs",
    run() {
      const key = CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e");
      const iv = CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef");
      const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
      const images = CryptoJS.AES.decrypt(unsafeWindow.imgsrcs, key, opinion).toString(CryptoJS.enc.Utf8).split(",");
      return {
        title: `${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,
        series: unsafeWindow.mid,
        pages: unsafeWindow.total_pages,
        prev: document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),
        next: unsafeWindow.next_c_url,
        listImages: images,
        before() {
          if (images.some((s) => s === "")) {
            document.querySelector("#nform")?.submit();
          }
        }
      };
    }
  };

  const mangahosted = {
    name: "MangaHosted",
    url: /https?:\/\/(www\.)?mangahosted.com\/manga\/.+\/.+/,
    homepage: "https://mangahosted.com/",
    language: ["Portuguese"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("picture img")];
      return {
        title: $(".breadcrumb li:eq(3)").text().trim(),
        series: $(".breadcrumb li:eq(2) a").attr("href"),
        pages: images.length,
        prev: unsafeWindow.$read_prev,
        next: unsafeWindow.$read_next,
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const mangahub = {
    name: "MangaHub",
    url: /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,
    homepage: "https://mangahub.io/",
    language: ["English"],
    category: "manga",
    waitEle: "#select-chapter",
    async run() {
      function getCookie(name) {
        const re = new RegExp(`${name}=([^;]+)`);
        const value = re.exec(document.cookie);
        return value != null ? decodeURIComponent(value[1]) : null;
      }
      const slug = unsafeWindow.CURRENT_MANGA_SLUG ?? window.location.pathname.split("/")[2];
      const number = window.location.pathname.split("/")[3].replace("chapter-", "");
      const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-mhub-access": getCookie("mhub_access") ?? ""
        }
      };
      const api = await fetch("https://api.mghcdn.com/graphql", options).then(
        async (res) => res.json()
      );
      const images = JSON.parse(api?.data.chapter.pages.toString());
      return {
        title: document.querySelector("#mangareader h3")?.textContent?.trim(),
        series: document.querySelector("#mangareader a")?.getAttribute("href"),
        pages: images.i.length,
        prev: document.querySelector(".previous a")?.getAttribute("href"),
        next: document.querySelector(".next a")?.getAttribute("href"),
        listImages: images.i.map((i) => `https://imgx.mghcdn.com/${images.p + i}`)
      };
    }
  };

  const mangasin = {
    name: "MangasIn",
    url: /https?:\/\/(www\.)?mangas.in\/manga\/.+\/.+\/\d+/,
    homepage: "https://mangas.in/",
    language: ["Spanish"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("#all img")];
      const chapter = document.querySelector("#chapter-list li.active");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.firstElementChild?.getAttribute("href"),
        next: chapter?.previousElementSibling?.firstElementChild?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("data-src"))
      };
    }
  };

  const mangakakalot = {
    name: ["MangaKakalot", "MangaNelo", "MangaNato"],
    url: /https?:\/\/(www\.)?(read|chap)?(manganelo|mangakakalot|manganato).(com|to).*\/chapter.+/,
    homepage: [
      "https://mangakakalot.com/",
      "https://www.manganelo.com/",
      "https://www.manganato.com/"
    ],
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];
      return {
        title: document.querySelector(
          ".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1"
        )?.textContent?.trim(),
        series: document.querySelectorAll("span a[title]").item(1).getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),
        next: document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const mangaoni = {
    name: "MangaOni",
    url: /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,
    homepage: "https://manga-oni.com/",
    language: ["Spanish"],
    category: "manga",
    run() {
      document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));
      const chapter = document.querySelector("#c_list option:checked");
      const images = [...document.querySelectorAll("#slider img")];
      return {
        title: document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni", ""),
        pages: images?.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("data-src") ?? img.getAttribute("src"))
      };
    }
  };

  const mangapark = {
    name: "MangaPark",
    url: /https?:\/\/(www\.)?mangapark.(com|me|org|net)\/title\/.+\/.+/,
    homepage: "https://mangapark.net/",
    language: ["English"],
    category: "manga",
    waitEle: "main div div a.btn-primary",
    run() {
      const json = JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML ?? "");
      const data = json.props.pageProps.dehydratedState.queries[0].state.data.data.imageSet;
      const images = data.httpLis.map(
        (img, index) => `${img}?${data.wordLis[index]}`
      );
      return {
        title: [...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map((e) => e.textContent?.trim()).join(" "),
        series: document.querySelector(".comic-detail a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),
        next: document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const mangareader = {
    name: "Mangareader",
    url: /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,
    homepage: "https://mangareader.to",
    language: ["English"],
    category: "manga",
    obs: "Some galleries will not be usable",
    waitEle: ".ds-image, .iv-card",
    async run() {
      const chapter = document.querySelector(".chapter-item.active");
      const images = [...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")];
      const src = images.map(async (img) => {
        const url = img.getAttribute("data-url");
        if (url && img.classList.contains("shuffled")) {
          return (await imgReverser(url)).toDataURL();
        }
        return url;
      });
      return {
        title: document.querySelector(".hr-manga h2")?.textContent?.trim(),
        series: document.querySelector(".hr-manga")?.getAttribute("href"),
        pages: src.length,
        prev: chapter?.nextElementSibling?.querySelector("a")?.getAttribute("href"),
        next: chapter?.previousElementSibling?.querySelector("a")?.getAttribute("href"),
        listImages: await Promise.all(src)
      };
    }
  };

  const mangasee = {
    name: ["MangaSee", "Manga4life"],
    url: /https?:\/\/(www\.)?(mangasee123|manga4life).com\/read-online\/.+/,
    homepage: ["https://mangasee123.com/", "https://manga4life.com/"],
    language: ["English"],
    category: "manga",
    waitAttr: [".img-fluid", "src"],
    run() {
      const src = document.querySelector(".img-fluid")?.getAttribute("src") ?? "";
      const script = [...document.querySelectorAll("body script:not([src])")].at(-1)?.textContent;
      const textCurChapter = script?.match(/CurChapter = ({.+});/) ?? [];
      const CurChapter = JSON.parse(textCurChapter[1]);
      const textCHAPTERS = script?.match(/CHAPTERS = (\[\{.+}]);/) ?? [];
      const CHAPTERS = JSON.parse(textCHAPTERS[1]);
      const CurChapterIndex = CHAPTERS.findIndex(
        (chap) => chap.Chapter === CurChapter.Chapter
      );
      function ChapterURLEncode(reference) {
        let ChapterString = CHAPTERS[CurChapterIndex + reference];
        if (ChapterString === void 0) {
          return "#";
        }
        ChapterString = ChapterString.Chapter;
        let Index = "";
        const IndexString = ChapterString.substring(0, 1);
        if (IndexString !== "1") {
          Index = `-index-${IndexString}`;
        }
        const Chapter = parseInt(ChapterString.slice(1, -1), 10);
        let Odd = "";
        const OddString = ChapterString[ChapterString.length - 1];
        if (OddString !== "0") {
          Odd = `.${OddString}`;
        }
        return window.location.href.replace(/-chapter-.+/, `-chapter-${Chapter}${Odd}${Index}.html`);
      }
      return {
        title: document.querySelector("title")?.textContent?.replace(/ Page .+/, "").trim(),
        series: document.querySelector(".MainContainer a")?.getAttribute("href"),
        pages: parseInt(CurChapter.Page, 10),
        prev: ChapterURLEncode(-1),
        next: ChapterURLEncode(1),
        listImages: Array(parseInt(CurChapter.Page, 10)).fill(0).map(
          (_, i) => src.replace(
            /-\d\d\d.png/,
            `-${String(i + 1).padStart(3, "0").slice(-3)}.png`
          )
        )
      };
    }
  };

  const mangastreamwp = {
    name: [
      "MangaStream WordPress Plugin",
      "Realm Oasis",
      "Voids-Scans",
      "Luminous Scans",
      "Shimada Scans",
      "Night Scans",
      "Manhwa-Freak",
      "OzulScansEn",
      "CypherScans",
      "MangaGalaxy",
      "LuaScans",
      "Drake Scans",
      "Rizzfables",
      "NovatoScans"
    ],
    url: /https?:\/\/[^/]*(scans?|comic|realmoasis|hivetoon|rizzfables)[^/]*\/.+/,
    homepage: [
      "https://themesia.com/mangastream-wordpress-theme/",
      "https://realmoasis.com/",
      "https://void-scans.com/",
      "https://luminous-scans.com/",
      "https://shimadascans.com/",
      "https://night-scans.com/",
      "https://freakcomic.com/",
      "https://ozulscansen.com/",
      "https://cypherscans.xyz/",
      "https://mangagalaxy.me/",
      "https://luascans.com/",
      "https://drake-scans.com/",
      "https://rizzfables.com/",
      "https://www.novatoscans.top/"
    ],
    language: ["English"],
    category: "manga",
    // waitTime: 2000,
    waitEle: ":where(#chapter, #nPL_select) option:nth-child(2)",
    run() {
      const images = [
        ...document.querySelectorAll(
          ':where(#readerarea, .check-box) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])'
        )
      ];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(":where(.allc, .tac) a")?.getAttribute("href") ?? document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),
        pages: images.length,
        prev: findByContentEq(":where(.nextprev, .inner_nPL) a", "Prev")?.[0]?.getAttribute("href"),
        next: findByContentEq(":where(.nextprev, .inner_nPL) a", "Next")?.[0]?.getAttribute("href"),
        listImages: images.map(
          (img) => img.getAttribute("data-src") ?? img.getAttribute("data-lazy-src") ?? img.getAttribute("src")
        )
      };
    }
  };

  const mangatigre = {
    name: "MangaTigre",
    url: /https?:\/\/(www\.)?mangatigre.net\/.+\/.+\/.+/,
    homepage: "https://www.mangatigre.net/",
    language: ["Spanish"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".chapter-content img")];
      const chapter = document.querySelector(".form-control option:checked");
      return {
        title: document.querySelector(".page-title")?.textContent?.trim(),
        series: document.querySelector(".breadcrumb li:nth-child(3) a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("data-src") ?? img.getAttribute("src"))
      };
    }
  };

  const mangatoon = {
    name: "MangaToons",
    url: /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,
    homepage: "https://mangatoon.mobi/",
    language: ["English"],
    category: "manga",
    waitEle: ".pictures img:not(.cover)",
    run() {
      const images = [...document.querySelectorAll(".pictures img:not(.cover)")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".top-left a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".page-icons-prev")?.getAttribute("href"),
        next: document.querySelector(".page-icons-next")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("data-src"))
      };
    }
  };

  const mangatown = {
    name: "MangaTown",
    url: /https?:\/\/(www\.|m\.)?mangatown.com\/manga\/.+\/.+/,
    homepage: "https://www.mangatown.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapter_id",
    async run() {
      const key = document.querySelector("#dm5_key")?.getAttribute("value");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "text/plain"
        }
      };
      const src = Array(unsafeWindow.total_pages).fill(0).map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${unsafeWindow.chapter_id}&page=${i}&key=${key}`;
        const api = await fetch(url, options).then(async (res) => res.text());
        (0, eval)(api);
        return d;
      });
      const images = await Promise.all(src);
      const chapter = document.querySelector("#top_chapter_list option:checked");
      return {
        title: document.querySelector(".title h1")?.textContent,
        series: unsafeWindow.series_url,
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map((img, i) => img[i === 0 ? 0 : 1])
      };
    }
  };

  function findImages() {
    return [...document.querySelectorAll(".chapter-image")].map((div) => div.querySelector("img")).map(
      (img) => img?.getAttribute("src") ?? img?.getAttribute("data-src") ?? img?.getAttribute("data-full-url")
    ).filter((src) => !src?.match(/loading/i));
  }
  const manhuascan = {
    name: "ManhuaScan",
    url: /https?:\/\/(www\.)?manhuascan.com\/manga\/.+\/chapter.+/,
    homepage: "https://manhuascan.com/",
    language: ["English"],
    category: "manga",
    waitFunc: () => {
      const images = findImages();
      return images.length > 0 && images.every((s) => s && /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/.test(s));
    },
    run() {
      const images = findImages();
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('#breadcrumbs-container div a[title="Plaything"]')?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector("#chapter-list ~ div li:nth-of-type(2) a")?.getAttribute("href"),
        next: document.querySelector("#chapter-list ~ div li:nth-of-type(3) a")?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const manhwaweb = {
    name: "ManhwaWeb",
    url: /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,
    homepage: "https://manhwaweb.com/",
    language: ["Spanish"],
    category: "manga",
    async run() {
      const slug = window.location.pathname.replace("/leer", "");
      const api = await fetch(
        `https://manhwawebbackend-production.up.railway.app/chapters/see${slug}`
      ).then(async (res) => res.json());
      const data = await fetch(
        `https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${slug}`
      ).then(async (res) => res.json());
      return {
        title: `${api.name} ${api.chapter.chapter}`,
        series: [...document.querySelectorAll("div")].filter((i) => i.textContent === "Episodios")?.[0]?.parentElement?.getAttribute("href"),
        pages: api.chapter.img.length,
        prev: data.chapterAnterior,
        next: data.chapterSiguiente,
        listImages: api.chapter.img
      };
    }
  };

  const mgeko = {
    name: ["MangaGeko.com", "MangaGeko.cc"],
    url: /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,
    homepage: ["https://www.mgeko.com/", "https://www.mgeko.cc/"],
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("#chapter-reader img")];
      return {
        title: document.querySelector(".titles")?.textContent?.trim(),
        series: document.querySelector(".titles a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".chnav.prev")?.getAttribute("href"),
        next: document.querySelector(".chnav.next")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const naniscans = {
    name: "NaniScans",
    url: /https?:\/\/(www\.)?(naniscans).com\/chapters\/.+\/read/,
    homepage: "https://naniscans.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapterListRoute",
    async run() {
      const api = await fetch(window.location.href.replace("read", "json")).then(
        async (res) => res.json()
      );
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('a[href^="/titles/"]')?.getAttribute("href"),
        pages: api.pages.length,
        prev: unsafeWindow.previousChapterRoute,
        next: unsafeWindow.nextChapterRoute,
        listImages: api.pages.map((i) => i.address)
      };
    }
  };

  const ninemanga = {
    name: "NineManga",
    url: /https?:\/\/(www\.)?ninemanga.com\/chapter\/.+\/.+\.html/,
    homepage: "https://ninemanga.com/",
    language: ["English"],
    category: "manga",
    run() {
      const chapter = document.querySelector("#chapter option:checked");
      const pages = [...document.querySelector("#page").querySelectorAll("option")];
      return {
        title: document.querySelector(".tip a")?.textContent?.trim(),
        series: document.querySelector(".subgiude > li:nth-child(2) > a")?.getAttribute("href"),
        pages: pages.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listPages: pages.map((item) => $(item).val()),
        img: ".manga_pic"
      };
    }
  };

  const olympusscans = {
    name: "OlympusScans",
    url: /https?:\/\/(www\.)?olympusscans.com\/capitulo\/.+\/.+/,
    homepage: "https://olympusscans.com/",
    language: ["Spanish"],
    category: "manga",
    waitVar: "__NUXT__",
    run() {
      const images = unsafeWindow.__NUXT__.data[window.location.pathname].chapter.pages;
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("h1")?.parentElement?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".i-heroicons-chevron-left-20-solid")?.parentElement?.getAttribute("href"),
        next: document.querySelector(".i-heroicons-chevron-right-20-solid")?.parentElement?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const pandamanga = {
    name: "PandaManga",
    url: /https?:\/\/(www\.)?pandamanga.xyz\/.+\/.+\/.+/,
    homepage: "https://www.pandamanga.com/",
    language: ["English"],
    category: "manga",
    run() {
      const chapter = document.querySelector(".select-chapter option:checked");
      const data = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
      const images = data.props.pageProps.mangaview.source.split(",").filter((url) => url.length > 0);
      return {
        title: data.props.pageProps.mangaview.nameSeoChapter,
        series: document.querySelector(".allc a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images
      };
    }
  };

  const rawdevart = {
    name: "RawDevart",
    url: /https?:\/\/(www\.)?rawdevart.com\/comic\/.+\/.+\//,
    homepage: "https://rawdevart.com",
    language: ["Raw"],
    category: "manga",
    waitVar: "rconfig",
    waitEle: "#chapter-list select",
    run() {
      const chapter = document.querySelector("#chapter-list option:checked");
      const images = [...document.querySelectorAll("#img-container img")];
      return {
        title: unsafeWindow.rconfig.chapterTitle,
        series: unsafeWindow.rconfig.prefix,
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((item) => $(item).attr("data-src") ?? $(item).attr("src"))
      };
    }
  };

  const readcomicsonline = {
    name: "ReadComicsOnline",
    url: /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,
    homepage: "https://readcomicsonline.ru/",
    language: ["English"],
    category: "comic",
    run() {
      const images = [...document.querySelectorAll("#all img")];
      return {
        title: unsafeWindow.title.replace(/ - Page \d+/, ""),
        series: document.querySelector("div.pager-cnt a")?.getAttribute("href"),
        pages: unsafeWindow.pages.length,
        prev: unsafeWindow.prev_chapter,
        next: unsafeWindow.next_chapter,
        listImages: images.map((img) => img.getAttribute("data-src"))
      };
    }
  };

  const readmangatoday = {
    name: ["ReadManga Today"],
    url: /https?:\/\/(www\.)?readm.today\/.+\/\d+/,
    homepage: ["https://readm.today/"],
    language: ["English"],
    category: "manga",
    run() {
      return {
        title: document.querySelector(".page-title")?.textContent?.trim(),
        series: document.querySelector(".page-title a")?.getAttribute("href"),
        pages: unsafeWindow.chapter.pages.length,
        prev: unsafeWindow.chapter.prev,
        next: unsafeWindow.chapter.next,
        listImages: unsafeWindow.chapter.pages.map((item) => item.src)
      };
    }
  };

  const reaperscans = {
    name: "ReaperScans",
    url: /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,
    homepage: "https://reaperscans.com/",
    language: ["English"],
    category: "manga",
    waitEle: "#content .container img:not(.rounded)",
    run() {
      const images = [...document.querySelectorAll("#content .container img:not(.rounded)")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),
        next: document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("data-src") || img.getAttribute("src"))
      };
    }
  };

  const senmanga = {
    name: "SenManga(Raw)",
    url: /https?:\/\/raw\.senmanga.com\/.+\/.+\/?/,
    homepage: "https://raw.senmanga.com/",
    language: ["Raw"],
    category: "manga",
    run() {
      const url = `/${window.location.pathname.split("/")[1]}/${window.location.pathname.split("/")[2]}`;
      const num = parseInt(
        document.querySelector(".page-list select option:last-child")?.getAttribute("value") ?? "0",
        10
      );
      const chapter = [...document.querySelectorAll(".dropdown-chapter li")];
      const origin = chapter.findIndex(
        (item) => item.querySelector("a")?.getAttribute("href") === window.location.href
      );
      return {
        title: $(".title").text().trim(),
        series: document.querySelector(".breadcrumb li:nth-child(2) a")?.getAttribute("href"),
        pages: num,
        prev: chapter.at(origin + 1)?.querySelector("a")?.getAttribute("href"),
        next: chapter.at(origin - 1)?.querySelector("a")?.getAttribute("href"),
        listPages: Array(num).fill(0).map((_, i) => `${url}/${i + 1}/`),
        img: ".picture"
      };
    }
  };

  const tapas = {
    name: "KLManga",
    url: /https?:\/\/(www\.)?tapas.io\/episode\/.+/,
    homepage: "https://tapas.io/",
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".viewer__body img.content__img")];
      const chapter = document.querySelector(".js-episodes .body__item--selected");
      return {
        title: document.querySelector(".viewer__header .title")?.textContent?.trim(),
        series: document.querySelector(".vw-nav__left a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("data-href"),
        next: chapter?.nextElementSibling?.getAttribute("data-href"),
        listImages: images.map((img) => img.getAttribute("data-src") ?? img.getAttribute("src"))
      };
    }
  };

  const tenmanga = {
    name: "TenManga",
    url: /https?:\/\/(www\.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,
    homepage: "https://www.tenmanga.com/",
    language: ["English"],
    category: "manga",
    waitVar: "_pageCtrl",
    run() {
      const chapter = document.querySelector(
        ".mangaread-pagenav select option:checked"
      );
      const images = unsafeWindow._pageCtrl.options.all_imgs_url;
      return {
        title: document.querySelector(".title  h1")?.textContent?.trim(),
        series: document.querySelector(".title  a:nth-child(2)")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images
      };
    }
  };

  const tmofans = {
    name: "TuMangaOnline",
    url: /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,
    homepage: "https://lectortmo.com/",
    language: ["Spanish"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".img-container img, .viewer-container img")];
      const pages = [
        ...document.querySelectorAll(
          "div.container:nth-child(4) select#viewer-pages-select option"
        )
      ];
      const num = images.length > 1 ? images.length : pages.length;
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('a[title="Volver"]')?.getAttribute("href"),
        pages: num,
        prev: document.querySelector(".chapter-prev a")?.getAttribute("href"),
        next: document.querySelector(".chapter-next a")?.getAttribute("href"),
        ...images.length > 1 ? {
          listImages: images.map((item) => $(item).attr("data-src"))
        } : {
          listPages: Array(pages.length).fill(0).map((_, i) => `${window.location.href.replace(/\/\d+$/, "")}/${i + 1}`),
          img: "#viewer-container img, .viewer-page"
        }
      };
    }
  };

  const tumanhwas = {
    name: "TuManhwas",
    url: /https?:\/\/(www\.)?tumanhwas.com\/news\/.+/,
    homepage: "https://tumanhwas.com/",
    language: ["Spanish"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("#chapter_imgs img")];
      return {
        title: document.querySelector(".entry-title")?.textContent?.trim(),
        series: document.querySelector(".nextprev a:nth-child(2)")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".nextprev a:nth-child(1)")?.getAttribute("href"),
        next: document.querySelector(".nextprev a:nth-child(3)")?.getAttribute("href"),
        listImages: images.map((item) => $(item).attr("src"))
      };
    }
  };

  const unionmangas = {
    name: "UnionMangas",
    url: /https?:\/\/(www\.)?unionleitor.top\/leitor\/.+\/.+/,
    homepage: "https://unionleitor.top/",
    language: ["Portuguese"],
    category: "manga",
    run() {
      const chapter = document.querySelector("#capitulo_trocar option:checked");
      const images = [...document.querySelectorAll(".img-manga")];
      return {
        title: document.querySelector(".titulo-leitura")?.textContent?.trim(),
        series: document.querySelector(".breadcrumbs a:nth-child(3)")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const webnovel = {
    name: "WebNovel",
    url: /https?:\/\/(www\.)?webnovel.com\/comic\/.+/,
    homepage: "https://www.webnovel.com/",
    language: ["English"],
    category: "manga",
    waitVar: "g_data",
    run() {
      const images = unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(
        (img) => img.url
      );
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: "./",
        pages: images.length,
        prev: `${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,
        next: `${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,
        listImages: images
      };
    }
  };

  const webtoons = {
    name: "WebToons",
    url: /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,
    homepage: "https://www.webtoons.com/",
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("#_imageList img")];
      return {
        title: document.querySelector(".subj_info")?.textContent?.trim(),
        series: document.querySelector(".subj_info a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector("._prevEpisode")?.getAttribute("href"),
        next: document.querySelector("._nextEpisode")?.getAttribute("href"),
        listImages: images.map(
          (img) => img.getAttribute("data-url") ?? img.getAttribute("data-src") ?? img.getAttribute("src")
        )
      };
    }
  };

  const wpmanga = {
    name: ["Manga33"],
    url: /https?:\/\/(www\.)?(manga33).com\/manga\/.+/,
    homepage: ["https://manga33.com/"],
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll(".chapter-content img")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".navbar-brand")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector("a.prev")?.getAttribute("href"),
        next: document.querySelector("a.next")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src")),
        before() {
          if (/all.html$/.exec(window.location.pathname)) {
            return;
          }
          if (/\d+-\d+.html$/.exec(window.location.pathname)) {
            window.location.pathname = window.location.pathname.replace(/-\d+.html$/, "-all.html");
          }
        }
      };
    }
  };

  const vortexscans = {
    name: "Vortex Scans",
    url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
    homepage: "https://vortexscans.org/",
    language: ["English"],
    category: "manga",
    waitEle: 'img[alt*="Chapter"]',
    run() {
      const images = [...document.querySelectorAll('img[alt*="Chapter"]')];
      return {
        title: document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),
        series: document.querySelector("time")?.closest("a")?.getAttribute("href"),
        pages: images.length,
        prev: findClosestByContentEq("button", "Prev", "a")?.getAttribute("href"),
        next: findClosestByContentEq("button", "Next", "a")?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const yugenmangas = {
    name: "YugenMangas",
    url: /https?:\/\/(www\.)?(yugenmangas).(com|net|lat)\/series\/.+/,
    homepage: "https://yugenmangas.lat/",
    language: ["Spanish"],
    category: "manga",
    async run() {
      const images = [...document.querySelectorAll("p.flex > img")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("div.justify-between:nth-child(2) > a:nth-child(2)")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector("div.justify-between:nth-child(2) > a:nth-child(1)")?.getAttribute("href"),
        next: document.querySelector("div.justify-between:nth-child(2) > a:nth-child(3)")?.getAttribute("href"),
        listImages: images.map(
          (img) => img.classList.contains("lazy") ? img.getAttribute("data-src") : img.getAttribute("src")
        )
      };
    }
  };

  const zeroscans = {
    name: "ZeroScans",
    url: /https?:\/\/(www\.)?zscans.com\/comics\/.+/,
    homepage: "https://zscans.com/",
    language: ["English"],
    category: "manga",
    waitVar: "__ZEROSCANS__",
    run() {
      const images = unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality;
      const chapters = document.querySelectorAll(".v-btn--router");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),
        pages: images.length,
        prev: chapters[0]?.getAttribute("href"),
        next: chapters[1]?.getAttribute("href"),
        listImages: images
      };
    }
  };

  function isEmpty(value) {
    return value === null || // Check for null
    typeof value === "undefined" || value === void 0 || // Check for undefined
    typeof value === "string" && value === "" || // Check for empty string
    Array.isArray(value) && value.length === 0 || // Check for empty array
    typeof value === "object" && Object.keys(value).length === 0;
  }
  function isNothing(value) {
    const isEmptyObject = (a) => {
      if (!Array.isArray(a)) {
        const hasNonempty = Object.keys(a).some((element) => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      return !a.some((element) => element instanceof Promise || !isNothing(element));
    };
    return !value || value === 0 || isEmpty(value) || typeof value === "object" && isEmptyObject(value);
  }

  function isImagesManga(manga) {
    return "listImages" in manga && !isNothing(manga.listImages);
  }
  function isPagesManga(manga) {
    return "listPages" in manga && !isNothing(manga.listPages);
  }
  function isBruteforceManga(manga) {
    return "bruteForce" in manga && !isNothing(manga.bruteForce);
  }

  const sites = [
    alandal,
    asura,
    batoto,
    bilibilicomics,
    comicastle,
    comick,
    dysnatyscans,
    flamecomics,
    inkr,
    inmanga,
    klmanga,
    leitor,
    lhtranslation,
    // Leviatanscans,
    localhost,
    lynxscans,
    mangabuddy,
    mangademon,
    mangadex,
    mangafox,
    mangago,
    // mangafreak,
    mangahosted,
    mangahub,
    mangasin,
    mangakakalot,
    mangaoni,
    mangapark,
    mangareader,
    mangasee,
    mangatigre,
    mangatoon,
    mangatown,
    manhuascan,
    manhwaweb,
    mgeko,
    naniscans,
    ninemanga,
    olympusscans,
    pandamanga,
    rawdevart,
    readcomicsonline,
    readmangatoday,
    reaperscans,
    senmanga,
    // Resetscans, deprecated
    tapas,
    tenmanga,
    tmofans,
    tumanhwas,
    unionmangas,
    webnovel,
    webtoons,
    wpmanga,
    vortexscans,
    yugenmangas,
    zeroscans,
    mangastreamwp,
    // Must be at the end because is a generic check
    foolslide,
    // Must be at the end because is a generic check
    madarawp
    // Must be at the end because is a generic check
  ];

  const rangeSliderStyles = ".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}";

  function logScript(...text) {
    console.log("MangaOnlineViewer: ", ...text);
    return text;
  }
  const logScriptC = (x) => (y) => logScript(x, y)[1];
  function getListGM() {
    return typeof GM_listValues !== "undefined" ? GM_listValues() : [];
  }
  function removeValueGM(name) {
    if (typeof GM_deleteValue !== "undefined") {
      GM_deleteValue(name);
    } else {
      logScript("Removing: ", name);
    }
  }
  const getInfoGM = typeof GM_info !== "undefined" ? GM_info : {
    scriptHandler: "Console",
    script: {
      name: "Debug",
      version: "Testing"
    }
  };
  function getValueGM(name, defaultValue = null) {
    if (typeof GM_getValue !== "undefined") {
      return GM_getValue(name, defaultValue);
    }
    logScript("Fake Getting: ", name, " = ", defaultValue);
    return defaultValue;
  }
  function getJsonGM(name, defaultValue = null) {
    const result = getValueGM(name, defaultValue);
    if (typeof result === "string") {
      return JSON.parse(result);
    }
    return result;
  }
  function getSettings(defaultSettings) {
    return getJsonGM("settings", defaultSettings);
  }
  function setValueGM(name, value) {
    if (typeof GM_setValue !== "undefined") {
      GM_setValue(name, value);
      return value.toString();
    } else {
      logScript("Fake Setting: ", name, " = ", value);
      return String(value);
    }
  }
  function setSettings(value) {
    return setValueGM("settings", value);
  }
  function getBrowser() {
    let tem;
    const M = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent) ?? [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(navigator.userAgent) ?? [];
      return `IE ${tem[1] ?? ""}`;
    }
    if (M[1] === "Chrome") {
      tem = /\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent);
      if (tem !== null) {
        return tem.slice(1).join(" ").replace("OPR", "Opera");
      }
    }
    const tempM = [M[1], M[2]];
    tem = /version\/(\d+)/i.exec(navigator.userAgent);
    if (tem !== null) {
      tempM.splice(1, 1, tem[1]);
    }
    return tempM.join(" ");
  }
  function getEngine() {
    return getInfoGM.scriptHandler ?? "Greasemonkey";
  }
  const parser = new UAParser();
  const getDevice = () => {
    const device = parser.getDevice().type;
    if (device !== "mobile" && device !== "tablet") {
      if (window.matchMedia("screen and (max-width: 600px)").matches) return "mobile";
      if (window.matchMedia("screen and (max-width: 992px)").matches) return "tablet";
      return "desktop";
    }
    return device;
  };
  const isMobile = () => getDevice() === "mobile" || getDevice() === "tablet";
  const settingsChangeListener = (fn) => {
    if (typeof GM_addValueChangeListener !== "undefined") {
      return GM_addValueChangeListener(
        "settings",
        (_name, _oldValue, newValue, remote) => {
          if (remote) fn(newValue);
        }
      );
    } else {
      return false;
    }
  };

  const DEV = false;

  // Store the references to globals in case someone tries to monkey patch these, causing the below
  // to de-opt (this occurs often when using popular extensions).
  var is_array = Array.isArray;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var get_prototype_of = Object.getPrototypeOf;

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
  const HEAD_EFFECT = 1 << 19;
  const EFFECT_HAS_DERIVED = 1 << 20;

  const STATE_SYMBOL = Symbol('$state');
  const LOADING_ATTR_SYMBOL = Symbol('');

  let is_micro_task_queued$1 = false;

  /** @type {Array<() => void>} */
  let current_queued_micro_tasks = [];

  function process_micro_tasks() {
  	is_micro_task_queued$1 = false;
  	const tasks = current_queued_micro_tasks.slice();
  	current_queued_micro_tasks = [];
  	run_all(tasks);
  }

  /**
   * @param {() => void} fn
   */
  function queue_micro_task(fn) {
  	if (!is_micro_task_queued$1) {
  		is_micro_task_queued$1 = true;
  		queueMicrotask(process_micro_tasks);
  	}
  	current_queued_micro_tasks.push(fn);
  }

  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  /** See EachBlock interface metadata.is_controlled for an explanation what this is */
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const PROPS_IS_RUNES = 1 << 1;

  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;

  const UNINITIALIZED = Symbol();

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

  /* This file is generated by scripts/process-messages/index.js. Do not edit! */


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
   * Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
   * @returns {never}
   */
  function effect_update_depth_exceeded() {
  	{
  		throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  	}
  }

  /**
   * Cannot do `bind:%key%={undefined}` when `%key%` has a fallback value
   * @param {string} key
   * @returns {never}
   */
  function props_invalid_value(key) {
  	{
  		throw new Error(`https://svelte.dev/e/props_invalid_value`);
  	}
  }

  /**
   * Reading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state
   * @returns {never}
   */
  function state_unsafe_local_read() {
  	{
  		throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
  	}
  }

  /**
   * Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`
   * @returns {never}
   */
  function state_unsafe_mutation() {
  	{
  		throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  	}
  }

  let legacy_mode_flag = false;

  function enable_legacy_mode_flag() {
  	legacy_mode_flag = true;
  }

  /** @import { Derived, Effect, Reaction, Source, Value } from '#client' */

  /**
   * @template V
   * @param {V} v
   * @param {Error | null} [stack]
   * @returns {Source<V>}
   */
  function source(v, stack) {
  	/** @type {Value} */
  	var signal = {
  		f: 0, // TODO ideally we could skip this altogether, but it causes type errors
  		v,
  		reactions: null,
  		equals,
  		version: 0
  	};

  	return signal;
  }

  /**
   * @template V
   * @param {V} v
   */
  function state(v) {
  	return push_derived_source(source(v));
  }

  /**
   * @template V
   * @param {V} initial_value
   * @param {boolean} [immutable]
   * @returns {Source<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function mutable_source(initial_value, immutable = false) {
  	const s = source(initial_value);
  	if (!immutable) {
  		s.equals = safe_equals;
  	}

  	// bind the signal to the component context, in case we need to
  	// track updates to trigger beforeUpdate/afterUpdate callbacks
  	if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
  		(component_context.l.s ??= []).push(s);
  	}

  	return s;
  }

  /**
   * @template V
   * @param {Source<V>} source
   */
  /*#__NO_SIDE_EFFECTS__*/
  function push_derived_source(source) {
  	if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
  		if (derived_sources === null) {
  			set_derived_sources([source]);
  		} else {
  			derived_sources.push(source);
  		}
  	}

  	return source;
  }

  /**
   * @template V
   * @param {Source<V>} source
   * @param {V} value
   * @returns {V}
   */
  function set$1(source, value) {
  	if (
  		active_reaction !== null &&
  		is_runes() &&
  		(active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 &&
  		// If the source was created locally within the current derived, then
  		// we allow the mutation.
  		(derived_sources === null || !derived_sources.includes(source))
  	) {
  		state_unsafe_mutation();
  	}

  	return internal_set(source, value);
  }

  /**
   * @template V
   * @param {Source<V>} source
   * @param {V} value
   * @returns {V}
   */
  function internal_set(source, value) {
  	if (!source.equals(value)) {
  		source.v = value;
  		source.version = increment_version();

  		mark_reactions(source, DIRTY);

  		// If the current signal is running for the first time, it won't have any
  		// reactions as we only allocate and assign the reactions after the signal
  		// has fully executed. So in the case of ensuring it registers the reaction
  		// properly for itself, we need to ensure the current effect actually gets
  		// scheduled. i.e: `$effect(() => x++)`
  		if (
  			is_runes() &&
  			active_effect !== null &&
  			(active_effect.f & CLEAN) !== 0 &&
  			(active_effect.f & BRANCH_EFFECT) === 0
  		) {
  			if (new_deps !== null && new_deps.includes(source)) {
  				set_signal_status(active_effect, DIRTY);
  				schedule_effect(active_effect);
  			} else {
  				if (untracked_writes === null) {
  					set_untracked_writes([source]);
  				} else {
  					untracked_writes.push(source);
  				}
  			}
  		}
  	}

  	return value;
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

  		// Skip any effects that are already dirty
  		if ((flags & DIRTY) !== 0) continue;

  		// In legacy mode, skip the current effect to prevent infinite loops
  		if (!runes && reaction === active_effect) continue;

  		set_signal_status(reaction, status);

  		// If the signal a) was previously clean or b) is an unowned derived, then mark it
  		if ((flags & (CLEAN | UNOWNED)) !== 0) {
  			if ((flags & DERIVED) !== 0) {
  				mark_reactions(/** @type {Derived} */ (reaction), MAYBE_DIRTY);
  			} else {
  				schedule_effect(/** @type {Effect} */ (reaction));
  			}
  		}
  	}
  }

  /** @import { Derived, Effect } from '#client' */

  /**
   * @template V
   * @param {() => V} fn
   * @returns {Derived<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function derived$1(fn) {
  	var flags = DERIVED | DIRTY;

  	if (active_effect === null) {
  		flags |= UNOWNED;
  	} else {
  		// Since deriveds are evaluated lazily, any effects created inside them are
  		// created too late to ensure that the parent effect is added to the tree
  		active_effect.f |= EFFECT_HAS_DERIVED;
  	}

  	var parent_derived =
  		active_reaction !== null && (active_reaction.f & DERIVED) !== 0
  			? /** @type {Derived} */ (active_reaction)
  			: null;

  	/** @type {Derived<V>} */
  	const signal = {
  		children: null,
  		ctx: component_context,
  		deps: null,
  		equals,
  		f: flags,
  		fn,
  		reactions: null,
  		v: /** @type {V} */ (null),
  		version: 0,
  		parent: parent_derived ?? active_effect
  	};

  	if (parent_derived !== null) {
  		(parent_derived.children ??= []).push(signal);
  	}

  	return signal;
  }

  /**
   * @template V
   * @param {() => V} fn
   * @returns {Derived<V>}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function derived_safe_equal(fn) {
  	const signal = derived$1(fn);
  	signal.equals = safe_equals;
  	return signal;
  }

  /**
   * @param {Derived} derived
   * @returns {void}
   */
  function destroy_derived_children(derived) {
  	var children = derived.children;

  	if (children !== null) {
  		derived.children = null;

  		for (var i = 0; i < children.length; i += 1) {
  			var child = children[i];
  			if ((child.f & DERIVED) !== 0) {
  				destroy_derived(/** @type {Derived} */ (child));
  			} else {
  				destroy_effect(/** @type {Effect} */ (child));
  			}
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
  			destroy_derived_children(derived);
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
  	var status =
  		(skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;

  	set_signal_status(derived, status);

  	if (!derived.equals(value)) {
  		derived.v = value;
  		derived.version = increment_version();
  	}
  }

  /**
   * @param {Derived} derived
   * @returns {void}
   */
  function destroy_derived(derived) {
  	destroy_derived_children(derived);
  	remove_reactions(derived, 0);
  	set_signal_status(derived, DESTROYED);

  	derived.v = derived.children = derived.deps = derived.ctx = derived.reactions = null;
  }

  /** @import { ComponentContext, Derived, Effect, Reaction, Signal, Source, Value } from '#client' */
  let is_throwing_error = false;
  // Used for handling scheduling
  let is_micro_task_queued = false;

  /** @type {Effect | null} */
  let last_scheduled_effect = null;

  let is_flushing_effect = false;
  let is_destroying_effect = false;

  /** @param {boolean} value */
  function set_is_flushing_effect(value) {
  	is_flushing_effect = value;
  }

  /** @param {boolean} value */
  function set_is_destroying_effect(value) {
  	is_destroying_effect = value;
  }

  // Handle effect queues

  /** @type {Effect[]} */
  let queued_root_effects = [];

  let flush_count = 0;
  /** @type {Effect[]} Stack of effects, dev only */
  let dev_effect_stack = [];
  // Handle signal reactivity tree dependencies and reactions

  /** @type {null | Reaction} */
  let active_reaction = null;

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
   * When sources are created within a derived, we record them so that we can safely allow
   * local mutations to these sources without the side-effect error being invoked unnecessarily.
   * @type {null | Source[]}
   */
  let derived_sources = null;

  /**
   * @param {Source[] | null} sources
   */
  function set_derived_sources(sources) {
  	derived_sources = sources;
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

  /** @type {number} Used by sources and deriveds for handling updates to unowned deriveds it starts from 1 to differentiate between a created effect and a run one for tracing */
  let current_version = 1;

  // If we are working with a get() chain that has no active container,
  // to prevent memory leaks, we skip adding the reaction.
  let skip_reaction = false;

  // Handling runtime component context
  /** @type {ComponentContext | null} */
  let component_context = null;

  function increment_version() {
  	return ++current_version;
  }

  /** @returns {boolean} */
  function is_runes() {
  	return !legacy_mode_flag || (component_context !== null && component_context.l === null);
  }

  /**
   * Determines whether a derived or effect is dirty.
   * If it is MAYBE_DIRTY, will set the status to CLEAN
   * @param {Reaction} reaction
   * @returns {boolean}
   */
  function check_dirtiness(reaction) {
  	var flags = reaction.f;

  	if ((flags & DIRTY) !== 0) {
  		return true;
  	}

  	if ((flags & MAYBE_DIRTY) !== 0) {
  		var dependencies = reaction.deps;
  		var is_unowned = (flags & UNOWNED) !== 0;

  		if (dependencies !== null) {
  			var i;

  			if ((flags & DISCONNECTED) !== 0) {
  				for (i = 0; i < dependencies.length; i++) {
  					(dependencies[i].reactions ??= []).push(reaction);
  				}

  				reaction.f ^= DISCONNECTED;
  			}

  			for (i = 0; i < dependencies.length; i++) {
  				var dependency = dependencies[i];

  				if (check_dirtiness(/** @type {Derived} */ (dependency))) {
  					update_derived(/** @type {Derived} */ (dependency));
  				}

  				// If we are working with an unowned signal as part of an effect (due to !skip_reaction)
  				// and the version hasn't changed, we still need to check that this reaction
  				// is linked to the dependency source – otherwise future updates will not be caught.
  				if (
  					is_unowned &&
  					active_effect !== null &&
  					!skip_reaction &&
  					!dependency?.reactions?.includes(reaction)
  				) {
  					(dependency.reactions ??= []).push(reaction);
  				}

  				if (dependency.version > reaction.version) {
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
   * @param {unknown} error
   * @param {Effect} effect
   */
  function propagate_error(error, effect) {
  	/** @type {Effect | null} */
  	var current = effect;

  	while (current !== null) {
  		if ((current.f & BOUNDARY_EFFECT) !== 0) {
  			try {
  				// @ts-expect-error
  				current.fn(error);
  				return;
  			} catch {
  				// Remove boundary flag from effect
  				current.f ^= BOUNDARY_EFFECT;
  			}
  		}

  		current = current.parent;
  	}

  	is_throwing_error = false;
  	throw error;
  }

  /**
   * @param {Effect} effect
   */
  function should_rethrow_error(effect) {
  	return (
  		(effect.f & DESTROYED) === 0 &&
  		(effect.parent === null || (effect.parent.f & BOUNDARY_EFFECT) === 0)
  	);
  }

  /**
   * @param {unknown} error
   * @param {Effect} effect
   * @param {Effect | null} previous_effect
   * @param {ComponentContext | null} component_context
   */
  function handle_error(error, effect, previous_effect, component_context) {
  	if (is_throwing_error) {
  		if (previous_effect === null) {
  			is_throwing_error = false;
  		}

  		if (should_rethrow_error(effect)) {
  			throw error;
  		}

  		return;
  	}

  	if (previous_effect !== null) {
  		is_throwing_error = true;
  	}

  	{
  		propagate_error(error, effect);
  		return;
  	}
  }

  /**
   * @template V
   * @param {Reaction} reaction
   * @returns {V}
   */
  function update_reaction(reaction) {
  	var previous_deps = new_deps;
  	var previous_skipped_deps = skipped_deps;
  	var previous_untracked_writes = untracked_writes;
  	var previous_reaction = active_reaction;
  	var previous_skip_reaction = skip_reaction;
  	var prev_derived_sources = derived_sources;
  	var previous_component_context = component_context;
  	var flags = reaction.f;

  	new_deps = /** @type {null | Value[]} */ (null);
  	skipped_deps = 0;
  	untracked_writes = null;
  	active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  	skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
  	derived_sources = null;
  	component_context = reaction.ctx;

  	try {
  		var result = /** @type {Function} */ (0, reaction.fn)();
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

  			if (!skip_reaction) {
  				for (i = skipped_deps; i < deps.length; i++) {
  					(deps[i].reactions ??= []).push(reaction);
  				}
  			}
  		} else if (deps !== null && skipped_deps < deps.length) {
  			remove_reactions(reaction, skipped_deps);
  			deps.length = skipped_deps;
  		}

  		return result;
  	} finally {
  		new_deps = previous_deps;
  		skipped_deps = previous_skipped_deps;
  		untracked_writes = previous_untracked_writes;
  		active_reaction = previous_reaction;
  		skip_reaction = previous_skip_reaction;
  		derived_sources = prev_derived_sources;
  		component_context = previous_component_context;
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
  		var index = reactions.indexOf(signal);
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
  	var previous_component_context = component_context;

  	active_effect = effect;

  	try {
  		if ((flags & BLOCK_EFFECT) !== 0) {
  			destroy_block_effect_children(effect);
  		} else {
  			destroy_effect_children(effect);
  		}
  		destroy_effect_deriveds(effect);

  		execute_effect_teardown(effect);
  		var teardown = update_reaction(effect);
  		effect.teardown = typeof teardown === 'function' ? teardown : null;
  		effect.version = current_version;

  		if (DEV) ;
  	} catch (error) {
  		handle_error(error, effect, previous_effect, previous_component_context || effect.ctx);
  	} finally {
  		active_effect = previous_effect;
  	}
  }

  function infinite_loop_guard() {
  	if (flush_count > 1000) {
  		flush_count = 0;
  		try {
  			effect_update_depth_exceeded();
  		} catch (error) {
  			// Try and handle the error so it can be caught at a boundary, that's
  			// if there's an effect available from when it was last scheduled
  			if (last_scheduled_effect !== null) {
  				{
  					handle_error(error, last_scheduled_effect, null);
  				}
  			} else {
  				throw error;
  			}
  		}
  	}
  	flush_count++;
  }

  /**
   * @param {Array<Effect>} root_effects
   * @returns {void}
   */
  function flush_queued_root_effects(root_effects) {
  	var length = root_effects.length;
  	if (length === 0) {
  		return;
  	}
  	infinite_loop_guard();

  	var previously_flushing_effect = is_flushing_effect;
  	is_flushing_effect = true;

  	try {
  		for (var i = 0; i < length; i++) {
  			var effect = root_effects[i];

  			if ((effect.f & CLEAN) === 0) {
  				effect.f ^= CLEAN;
  			}

  			/** @type {Effect[]} */
  			var collected_effects = [];

  			process_effects(effect, collected_effects);
  			flush_queued_effects(collected_effects);
  		}
  	} finally {
  		is_flushing_effect = previously_flushing_effect;
  	}
  }

  /**
   * @param {Array<Effect>} effects
   * @returns {void}
   */
  function flush_queued_effects(effects) {
  	var length = effects.length;
  	if (length === 0) return;

  	for (var i = 0; i < length; i++) {
  		var effect = effects[i];

  		if ((effect.f & (DESTROYED | INERT)) === 0) {
  			try {
  				if (check_dirtiness(effect)) {
  					update_effect(effect);

  					// Effects with no dependencies or teardown do not get added to the effect tree.
  					// Deferred effects (e.g. `$effect(...)`) _are_ added to the tree because we
  					// don't know if we need to keep them until they are executed. Doing the check
  					// here (rather than in `update_effect`) allows us to skip the work for
  					// immediate effects.
  					if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
  						if (effect.teardown === null) {
  							// remove this effect from the graph
  							unlink_effect(effect);
  						} else {
  							// keep the effect in the graph, but free up some memory
  							effect.fn = null;
  						}
  					}
  				}
  			} catch (error) {
  				handle_error(error, effect, null, effect.ctx);
  			}
  		}
  	}
  }

  function process_deferred() {
  	is_micro_task_queued = false;
  	if (flush_count > 1001) {
  		return;
  	}
  	const previous_queued_root_effects = queued_root_effects;
  	queued_root_effects = [];
  	flush_queued_root_effects(previous_queued_root_effects);

  	if (!is_micro_task_queued) {
  		flush_count = 0;
  		last_scheduled_effect = null;
  	}
  }

  /**
   * @param {Effect} signal
   * @returns {void}
   */
  function schedule_effect(signal) {
  	{
  		if (!is_micro_task_queued) {
  			is_micro_task_queued = true;
  			queueMicrotask(process_deferred);
  		}
  	}

  	last_scheduled_effect = signal;

  	var effect = signal;

  	while (effect.parent !== null) {
  		effect = effect.parent;
  		var flags = effect.f;

  		if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
  			if ((flags & CLEAN) === 0) return;
  			effect.f ^= CLEAN;
  		}
  	}

  	queued_root_effects.push(effect);
  }

  /**
   *
   * This function both runs render effects and collects user effects in topological order
   * from the starting effect passed in. Effects will be collected when they match the filtered
   * bitwise flag passed in only. The collected effects array will be populated with all the user
   * effects to be flushed.
   *
   * @param {Effect} effect
   * @param {Effect[]} collected_effects
   * @returns {void}
   */
  function process_effects(effect, collected_effects) {
  	var current_effect = effect.first;
  	var effects = [];

  	main_loop: while (current_effect !== null) {
  		var flags = current_effect.f;
  		var is_branch = (flags & BRANCH_EFFECT) !== 0;
  		var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
  		var sibling = current_effect.next;

  		if (!is_skippable_branch && (flags & INERT) === 0) {
  			if ((flags & RENDER_EFFECT) !== 0) {
  				if (is_branch) {
  					current_effect.f ^= CLEAN;
  				} else {
  					try {
  						if (check_dirtiness(current_effect)) {
  							update_effect(current_effect);
  						}
  					} catch (error) {
  						handle_error(error, current_effect, null, current_effect.ctx);
  					}
  				}

  				var child = current_effect.first;

  				if (child !== null) {
  					current_effect = child;
  					continue;
  				}
  			} else if ((flags & EFFECT) !== 0) {
  				effects.push(current_effect);
  			}
  		}

  		if (sibling === null) {
  			let parent = current_effect.parent;

  			while (parent !== null) {
  				if (effect === parent) {
  					break main_loop;
  				}
  				var parent_sibling = parent.next;
  				if (parent_sibling !== null) {
  					current_effect = parent_sibling;
  					continue main_loop;
  				}
  				parent = parent.parent;
  			}
  		}

  		current_effect = sibling;
  	}

  	// We might be dealing with many effects here, far more than can be spread into
  	// an array push call (callstack overflow). So let's deal with each effect in a loop.
  	for (var i = 0; i < effects.length; i++) {
  		child = effects[i];
  		collected_effects.push(child);
  		process_effects(child, collected_effects);
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

  	// If the derived is destroyed, just execute it again without retaining
  	// its memoisation properties as the derived is stale
  	if (is_derived && (flags & DESTROYED) !== 0) {
  		var value = execute_derived(/** @type {Derived} */ (signal));
  		// Ensure the derived remains destroyed
  		destroy_derived(/** @type {Derived} */ (signal));
  		return value;
  	}

  	// Register the dependency on the current reaction signal.
  	if (active_reaction !== null) {
  		if (derived_sources !== null && derived_sources.includes(signal)) {
  			state_unsafe_local_read();
  		}
  		var deps = active_reaction.deps;

  		// If the signal is accessing the same dependencies in the same
  		// order as it did last time, increment `skipped_deps`
  		// rather than updating `new_deps`, which creates GC cost
  		if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
  			skipped_deps++;
  		} else if (new_deps === null) {
  			new_deps = [signal];
  		} else {
  			new_deps.push(signal);
  		}

  		if (
  			untracked_writes !== null &&
  			active_effect !== null &&
  			(active_effect.f & CLEAN) !== 0 &&
  			(active_effect.f & BRANCH_EFFECT) === 0 &&
  			untracked_writes.includes(signal)
  		) {
  			set_signal_status(active_effect, DIRTY);
  			schedule_effect(active_effect);
  		}
  	} else if (is_derived && /** @type {Derived} */ (signal).deps === null) {
  		var derived = /** @type {Derived} */ (signal);
  		var parent = derived.parent;
  		var target = derived;

  		while (parent !== null) {
  			// Attach the derived to the nearest parent effect, if there are deriveds
  			// in between then we also need to attach them too
  			if ((parent.f & DERIVED) !== 0) {
  				var parent_derived = /** @type {Derived} */ (parent);

  				target = parent_derived;
  				parent = parent_derived.parent;
  			} else {
  				var parent_effect = /** @type {Effect} */ (parent);

  				if (!parent_effect.deriveds?.includes(target)) {
  					(parent_effect.deriveds ??= []).push(target);
  				}
  				break;
  			}
  		}
  	}

  	if (is_derived) {
  		derived = /** @type {Derived} */ (signal);

  		if (check_dirtiness(derived)) {
  			update_derived(derived);
  		}
  	}

  	return signal.v;
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
  	const previous_reaction = active_reaction;
  	try {
  		active_reaction = null;
  		return fn();
  	} finally {
  		active_reaction = previous_reaction;
  	}
  }

  const STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);

  /**
   * @param {Signal} signal
   * @param {number} status
   * @returns {void}
   */
  function set_signal_status(signal, status) {
  	signal.f = (signal.f & STATUS_MASK) | status;
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
  		m: false,
  		s: props,
  		x: null,
  		l: null
  	};

  	if (legacy_mode_flag && !runes) {
  		component_context.l = {
  			s: null,
  			u: null,
  			r1: [],
  			r2: source(false)
  		};
  	}
  }

  /**
   * @template {Record<string, any>} T
   * @param {T} [component]
   * @returns {T}
   */
  function pop(component) {
  	const context_stack_item = component_context;
  	if (context_stack_item !== null) {
  		const component_effects = context_stack_item.e;
  		if (component_effects !== null) {
  			var previous_effect = active_effect;
  			var previous_reaction = active_reaction;
  			context_stack_item.e = null;
  			try {
  				for (var i = 0; i < component_effects.length; i++) {
  					var component_effect = component_effects[i];
  					set_active_effect(component_effect.effect);
  					set_active_reaction(component_effect.reaction);
  					effect(component_effect.fn);
  				}
  			} finally {
  				set_active_effect(previous_effect);
  				set_active_reaction(previous_reaction);
  			}
  		}
  		component_context = context_stack_item.p;
  		context_stack_item.m = true;
  	}
  	// Micro-optimization: Don't set .a above to the empty object
  	// so it can be garbage-collected when the return here is unused
  	return /** @type {T} */ ({});
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

  /** @import { TemplateNode } from '#client' */


  /**
   * Use this variable to guard everything related to hydration code so it can be treeshaken out
   * if the user doesn't use the `hydrate` method and these code paths are therefore not needed.
   */
  let hydrating = false;

  /** @import { TemplateNode } from '#client' */

  // export these for reference in the compiled code, making global name deduplication unnecessary
  /** @type {Window} */
  var $window;

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

  	var element_prototype = Element.prototype;
  	var node_prototype = Node.prototype;

  	// @ts-ignore
  	first_child_getter = get_descriptor(node_prototype, 'firstChild').get;
  	// @ts-ignore
  	next_sibling_getter = get_descriptor(node_prototype, 'nextSibling').get;

  	// the following assignments improve perf of lookups on DOM nodes
  	// @ts-expect-error
  	element_prototype.__click = undefined;
  	// @ts-expect-error
  	element_prototype.__className = '';
  	// @ts-expect-error
  	element_prototype.__attributes = null;
  	// @ts-expect-error
  	element_prototype.__styles = null;
  	// @ts-expect-error
  	element_prototype.__e = undefined;

  	// @ts-expect-error
  	Text.prototype.__t = undefined;
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

  /** @import { ComponentContext, ComponentContextLegacy, Derived, Effect, TemplateNode, TransitionManager } from '#client' */

  /**
   * @param {'$effect' | '$effect.pre' | '$inspect'} rune
   */
  function validate_effect(rune) {
  	if (active_effect === null && active_reaction === null) {
  		effect_orphan();
  	}

  	if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0) {
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
  	var is_root = (type & ROOT_EFFECT) !== 0;
  	var parent_effect = active_effect;

  	/** @type {Effect} */
  	var effect = {
  		ctx: component_context,
  		deps: null,
  		deriveds: null,
  		nodes_start: null,
  		nodes_end: null,
  		f: type | DIRTY,
  		first: null,
  		fn,
  		last: null,
  		next: null,
  		parent: is_root ? null : parent_effect,
  		prev: null,
  		teardown: null,
  		transitions: null,
  		version: 0
  	};

  	if (sync) {
  		var previously_flushing_effect = is_flushing_effect;

  		try {
  			set_is_flushing_effect(true);
  			update_effect(effect);
  			effect.f |= EFFECT_RAN;
  		} catch (e) {
  			destroy_effect(effect);
  			throw e;
  		} finally {
  			set_is_flushing_effect(previously_flushing_effect);
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
  		(effect.f & EFFECT_HAS_DERIVED) === 0;

  	if (!inert && !is_root && push) {
  		if (parent_effect !== null) {
  			push_effect(effect, parent_effect);
  		}

  		// if we're in a derived, add the effect there too
  		if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
  			var derived = /** @type {Derived} */ (active_reaction);
  			(derived.children ??= []).push(effect);
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
  	var defer =
  		active_effect !== null &&
  		(active_effect.f & BRANCH_EFFECT) !== 0 &&
  		component_context !== null &&
  		!component_context.m;

  	if (defer) {
  		var context = /** @type {ComponentContext} */ (component_context);
  		(context.e ??= []).push({
  			fn,
  			effect: active_effect,
  			reaction: active_reaction
  		});
  	} else {
  		var signal = effect(fn);
  		return signal;
  	}
  }

  /**
   * Internal representation of `$effect.pre(...)`
   * @param {() => void | (() => void)} fn
   * @returns {Effect}
   */
  function user_pre_effect(fn) {
  	validate_effect();
  	return render_effect(fn);
  }

  /**
   * An effect root whose children can transition out
   * @param {() => void} fn
   * @returns {(options?: { outro?: boolean }) => Promise<void>}
   */
  function component_root(fn) {
  	const effect = create_effect(ROOT_EFFECT, fn, true);

  	return (options = {}) => {
  		return new Promise((fulfil) => {
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
  function render_effect(fn) {
  	return create_effect(RENDER_EFFECT, fn, true);
  }

  /**
   * @param {() => void | (() => void)} fn
   * @returns {Effect}
   */
  function template_effect(fn) {
  	return block(fn);
  }

  /**
   * @param {(() => void)} fn
   * @param {number} flags
   */
  function block(fn, flags = 0) {
  	return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }

  /**
   * @param {(() => void)} fn
   * @param {boolean} [push]
   */
  function branch(fn, push = true) {
  	return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push);
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
   * @returns {void}
   */
  function destroy_effect_deriveds(signal) {
  	var deriveds = signal.deriveds;

  	if (deriveds !== null) {
  		signal.deriveds = null;

  		for (var i = 0; i < deriveds.length; i += 1) {
  			destroy_derived(deriveds[i]);
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
  		var next = effect.next;
  		destroy_effect(effect, remove_dom);
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

  	if ((remove_dom || (effect.f & HEAD_EFFECT) !== 0) && effect.nodes_start !== null) {
  		/** @type {TemplateNode | null} */
  		var node = effect.nodes_start;
  		var end = effect.nodes_end;

  		while (node !== null) {
  			/** @type {TemplateNode | null} */
  			var next = node === end ? null : /** @type {TemplateNode} */ (get_next_sibling(node));

  			node.remove();
  			node = next;
  		}

  		removed = true;
  	}

  	destroy_effect_children(effect, remove_dom && !removed);
  	destroy_effect_deriveds(effect);
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
  			null;
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

  	// If a dependency of this effect changed while it was paused,
  	// apply the change now
  	if (check_dirtiness(effect)) {
  		update_effect(effect);
  	}

  	// Ensure we toggle the flag after possibly updating the effect so that
  	// each block logic can correctly operate on inert items
  	effect.f ^= INERT;

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

  let listening_to_form_reset = false;

  function add_form_reset_listener() {
  	if (!listening_to_form_reset) {
  		listening_to_form_reset = true;
  		document.addEventListener(
  			'reset',
  			(evt) => {
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
  			{ capture: true }
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

  /** @import { Location } from 'locate-character' */

  /** @type {Set<string>} */
  const all_registered_events = new Set();

  /** @type {Set<(events: Array<string>) => void>} */
  const root_event_handles = new Set();

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

  	// composedPath contains list of nodes the event has propagated through.
  	// We check __root to skip all nodes below it in case this is a
  	// parent of the __root node, which indicates that there's nested
  	// mounted apps. In this case we don't want to trigger events multiple times.
  	var path_idx = 0;

  	// @ts-expect-error is added below
  	var handled_at = event.__root;

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
  		}
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

  				if (delegated !== undefined && !(/** @type {any} */ (current_target).disabled)) {
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
  	elem.innerHTML = html;
  	return elem.content;
  }

  /** @import { Effect, TemplateNode } from '#client' */

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
  function template(content, flags) {
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
  			use_import_node ? document.importNode(node, true) : node.cloneNode(true)
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
   * @param {string} content
   * @param {number} flags
   * @param {'svg' | 'math'} ns
   * @returns {() => Node | Node[]}
   */
  /*#__NO_SIDE_EFFECTS__*/
  function ns_template(content, flags, ns = 'svg') {
  	/**
  	 * Whether or not the first item is a text/element node. If not, we need to
  	 * create an additional comment node to act as `effect.nodes.start`
  	 */
  	var has_start = !content.startsWith('<!>');
  	var wrapped = `<${ns}>${has_start ? content : '<!>' + content}</${ns}>`;

  	/** @type {Element | DocumentFragment} */
  	var node;

  	return () => {

  		if (!node) {
  			var fragment = /** @type {DocumentFragment} */ (create_fragment_from_html(wrapped));
  			var root = /** @type {Element} */ (get_first_child(fragment));

  			{
  				node = /** @type {Element} */ (get_first_child(root));
  			}
  		}

  		var clone = /** @type {TemplateNode} */ (node.cloneNode(true));

  		{
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
  		text.nodeValue = str == null ? '' : str + '';
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

  	var registered_events = new Set();

  	/** @param {Array<string>} events */
  	var event_handle = (events) => {
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

  	/** @type {UNINITIALIZED | boolean | null} */
  	var condition = UNINITIALIZED;

  	var flags = elseif ? EFFECT_TRANSPARENT : 0;

  	var has_branch = false;

  	const set_branch = (/** @type {(anchor: Node) => void} */ fn, flag = true) => {
  		has_branch = true;
  		update_branch(flag, fn);
  	};

  	const update_branch = (
  		/** @type {boolean | null} */ new_condition,
  		/** @type {null | ((anchor: Node) => void)} */ fn
  	) => {
  		if (condition === (condition = new_condition)) return;

  		if (condition) {
  			if (consequent_effect) {
  				resume_effect(consequent_effect);
  			} else if (fn) {
  				consequent_effect = branch(() => fn(anchor));
  			}

  			if (alternate_effect) {
  				pause_effect(alternate_effect, () => {
  					alternate_effect = null;
  				});
  			}
  		} else {
  			if (alternate_effect) {
  				resume_effect(alternate_effect);
  			} else if (fn) {
  				alternate_effect = branch(() => fn(anchor));
  			}

  			if (consequent_effect) {
  				pause_effect(consequent_effect, () => {
  					consequent_effect = null;
  				});
  			}
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
   * @param {Map<any, EachItem>} items_map
   */
  function pause_effects(state, items, controlled_anchor, items_map) {
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

  	block(() => {
  		var collection = get_collection();

  		var array = is_array(collection)
  			? collection
  			: collection == null
  				? []
  				: array_from(collection);

  		var length = array.length;

  		if (was_empty && length === 0) {
  			// ignore updates if the array is empty,
  			// and it already was empty on previous run
  			return;
  		}
  		was_empty = length === 0;

  		{
  			var effect = /** @type {Effect} */ (active_reaction);
  			reconcile(
  				array,
  				state,
  				anchor,
  				render_fn,
  				flags,
  				(effect.f & INERT) !== 0,
  				get_key);
  		}

  		if (fallback_fn !== null) {
  			if (length === 0) {
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

  		// When we mount the each block for the first time, the collection won't be
  		// connected to this effect as the effect hasn't finished running yet and its deps
  		// won't be assigned. However, it's possible that when reconciling the each block
  		// that a mutation occurred and it's made the collection MAYBE_DIRTY, so reading the
  		// collection again can provide consistency to the reactive graph again as the deriveds
  		// will now be `CLEAN`.
  		get_collection();
  	});
  }

  /**
   * Add, remove, or reorder items output by an each block as its input changes
   * @template V
   * @param {Array<V>} array
   * @param {EachState} state
   * @param {Element | Comment | Text} anchor
   * @param {(anchor: Node, item: MaybeSource<V>, index: number | Source<number>) => void} render_fn
   * @param {number} flags
   * @param {boolean} is_inert
   * @param {(value: V, index: number) => any} get_key
   * @param {() => V[]} get_collection
   * @returns {void}
   */
  function reconcile(array, state, anchor, render_fn, flags, is_inert, get_key, get_collection) {
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
  				flags);

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
  				if (is_inert || (current.e.f & INERT) === 0) {
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
  			if (is_inert || (current.e.f & INERT) === 0) {
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

  			pause_effects(state, to_destroy, controlled_anchor, items);
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

  	/** @type {Effect} */ (active_effect).first = state.first && state.first.e;
  	/** @type {Effect} */ (active_effect).last = prev && prev.e;
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
   * @param {Node} anchor
   * @param {EachState} state
   * @param {EachItem | null} prev
   * @param {EachItem | null} next
   * @param {V} value
   * @param {unknown} key
   * @param {number} index
   * @param {(anchor: Node, item: V | Source<V>, index: number | Value<number>) => void} render_fn
   * @param {number} flags
   * @param {() => V[]} get_collection
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
  	get_collection
  ) {
  	var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  	var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;

  	var v = reactive ? (mutable ? mutable_source(value) : source(value)) : value;
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
  		next
  	};

  	try {
  		item.e = branch(() => render_fn(anchor, v, i), hydrating);

  		item.e.prev = prev && prev.e;
  		item.e.next = next && next.e;

  		if (prev === null) {
  			state.first = item;
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

  	while (node !== end) {
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

  function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

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
   * @param {Element} element
   * @param {any} value
   */
  function set_value(element, value) {
  	// @ts-expect-error
  	var attributes = (element.__attributes ??= {});

  	if (
  		attributes.value ===
  			(attributes.value =
  				// treat null and undefined the same for the initial value
  				value ?? undefined) ||
  		// @ts-expect-error
  		// `progress` elements always need their value set when its `0`
  		(element.value === value && (value !== 0 || element.nodeName !== 'PROGRESS'))
  	) {
  		return;
  	}

  	// @ts-expect-error
  	element.value = value;
  }

  /**
   * @param {Element} element
   * @param {boolean} checked
   */
  function set_checked(element, checked) {
  	// @ts-expect-error
  	var attributes = (element.__attributes ??= {});

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
   * Sets the `selected` attribute on an `option` element.
   * Not set through the property because that doesn't reflect to the DOM,
   * which means it wouldn't be taken into account when a form is reset.
   * @param {HTMLOptionElement} element
   * @param {boolean} selected
   */
  function set_selected(element, selected) {
  	if (selected) {
  		// The selected option could've changed via user selection, and
  		// setting the value without this check would set it back.
  		if (!element.hasAttribute('selected')) {
  			element.setAttribute('selected', '');
  		}
  	} else {
  		element.removeAttribute('selected');
  	}
  }

  /**
   * @param {Element} element
   * @param {string} attribute
   * @param {string | null} value
   * @param {boolean} [skip_warning]
   */
  function set_attribute(element, attribute, value, skip_warning) {
  	// @ts-expect-error
  	var attributes = (element.__attributes ??= {});

  	if (attributes[attribute] === (attributes[attribute] = value)) return;

  	if (attribute === 'style' && '__styles' in element) {
  		// reset styles to force style: directive to update
  		element.__styles = {};
  	}

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

  /**
   * @param {HTMLElement} dom
   * @param {string} value
   * @param {string} [hash]
   * @returns {void}
   */
  function set_class(dom, value, hash) {
  	// @ts-expect-error need to add __className to patched prototype
  	var prev_class_name = dom.__className;
  	var next_class_name = to_class(value, hash);

  	if (
  		prev_class_name !== next_class_name ||
  		(hydrating)
  	) {
  		// Removing the attribute when the value is only an empty string causes
  		// peformance issues vs simply making the className an empty string. So
  		// we should only remove the class if the the value is nullish.
  		if (value == null && !hash) {
  			dom.removeAttribute('class');
  		} else {
  			dom.className = next_class_name;
  		}

  		// @ts-expect-error need to add __className to patched prototype
  		dom.__className = next_class_name;
  	}
  }

  /**
   * @template V
   * @param {V} value
   * @param {string} [hash]
   * @returns {string | V}
   */
  function to_class(value, hash) {
  	return (value == null ? '' : value) + (hash ? ' ' + hash : '');
  }

  /**
   * @param {HTMLInputElement} input
   * @param {() => unknown} get
   * @param {(value: unknown) => void} set
   * @returns {void}
   */
  function bind_value(input, get, set = get) {
  	var runes = is_runes();

  	listen_to_event_and_reset_event(input, 'input', (is_reset) => {

  		/** @type {any} */
  		var value = is_reset ? input.defaultValue : input.value;
  		value = is_numberlike_input(input) ? to_number(value) : value;
  		set(value);

  		// In runes mode, respect any validation in accessors (doesn't apply in legacy mode,
  		// because we use mutable state which ensures the render effect always runs)
  		if (runes && value !== (value = get())) {
  			var start = input.selectionStart;
  			var end = input.selectionEnd;

  			// the value is coerced on assignment
  			input.value = value ?? '';

  			// Restore selection
  			if (end !== null) {
  				input.selectionStart = start;
  				input.selectionEnd = Math.min(end, input.value.length);
  			}
  		}
  	});

  	if (
  		// If we are hydrating and the value has since changed,
  		// then use the updated value from the input instead.
  		// If defaultValue is set, then value == defaultValue
  		// TODO Svelte 6: remove input.value check and set to empty string?
  		(untrack(get) == null && input.value)
  	) {
  		set(is_numberlike_input(input) ? to_number(input.value) : input.value);
  	}

  	render_effect(() => {

  		var value = get();

  		if (is_numberlike_input(input) && value === to_number(input.value)) {
  			// handles 0 vs 00 case (see https://github.com/sveltejs/svelte/issues/9959)
  			return;
  		}

  		if (input.type === 'date' && !value && !input.value) {
  			// Handles the case where a temporarily invalid date is set (while typing, for example with a leading 0 for the day)
  			// and prevents this state from clearing the other parts of the date input (see https://github.com/sveltejs/svelte/issues/7897)
  			return;
  		}

  		// don't set the value of the input if it's the same to allow
  		// minlength to work properly
  		if (value !== input.value) {
  			// @ts-expect-error the value is coerced on assignment
  			input.value = value ?? '';
  		}
  	});
  }

  /**
   * @param {HTMLInputElement} input
   */
  function is_numberlike_input(input) {
  	var type = input.type;
  	return type === 'number' || type === 'range';
  }

  /**
   * @param {string} value
   */
  function to_number(value) {
  	return value === '' ? null : +value;
  }

  /** @import { ComponentContextLegacy } from '#client' */

  /**
   * Legacy-mode only: Call `onMount` callbacks and set up `beforeUpdate`/`afterUpdate` effects
   * @param {boolean} [immutable]
   */
  function init$1(immutable = false) {
  	const context = /** @type {ComponentContextLegacy} */ (component_context);

  	const callbacks = context.l.u;
  	if (!callbacks) return;

  	let props = () => deep_read_state(context.s);

  	if (immutable) {
  		let version = 0;
  		let prev = /** @type {Record<string, any>} */ ({});

  		// In legacy immutable mode, before/afterUpdate only fire if the object identity of a prop changes
  		const d = derived$1(() => {
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

  /** @import { StoreReferencesContainer } from '#client' */
  /** @import { Store } from '#shared' */

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
  		unsubscribe: noop
  	});

  	if (entry.store !== store) {
  		entry.unsubscribe();
  		entry.store = store ?? null;

  		if (store == null) {
  			entry.source.v = undefined; // see synchronous callback comment below
  			entry.unsubscribe = noop;
  		} else {
  			var is_synchronous_callback = true;

  			entry.unsubscribe = subscribe_to_store(store, (v) => {
  				if (is_synchronous_callback) {
  					// If the first updates to the store value (possibly multiple of them) are synchronously
  					// inside a derived, we will hit the `state_unsafe_mutation` error if we `set` the value
  					entry.source.v = v;
  				} else {
  					set$1(entry.source, v);
  				}
  			});

  			is_synchronous_callback = false;
  		}
  	}

  	return get$1(entry.source);
  }

  /**
   * Unsubscribes from all auto-subscribed stores on destroy
   * @returns {StoreReferencesContainer}
   */
  function setup_stores() {
  	/** @type {StoreReferencesContainer} */
  	const stores = {};

  	teardown(() => {
  		for (var store_name in stores) {
  			const ref = stores[store_name];
  			ref.unsubscribe();
  		}
  	});

  	return stores;
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

  /** @import { Source } from './types.js' */

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
  	var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
  	var prop_value;

  	{
  		prop_value = /** @type {V} */ (props[key]);
  	}

  	var setter =
  		get_descriptor(props, key)?.set ??
  		(undefined);

  	var fallback_value = /** @type {V} */ (fallback);
  	var fallback_dirty = true;

  	var get_fallback = () => {
  		if (fallback_dirty) {
  			fallback_dirty = false;
  			{
  				fallback_value = /** @type {V} */ (fallback);
  			}
  		}

  		return fallback_value;
  	};

  	if (prop_value === undefined && fallback !== undefined) {
  		if (setter && runes) {
  			props_invalid_value();
  		}

  		prop_value = get_fallback();
  		if (setter) setter(prop_value);
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

  	// easy mode — prop is never written to
  	{
  		return getter;
  	}
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

  		// @ts-expect-error
  		if (invalidate) invalidate(undefined);

  		return noop;
  	}

  	// Svelte store takes a private second argument
  	// StartStopNotifier could mutate state, and we want to silence the corresponding validation error
  	const unsub = untrack(() =>
  		store.subscribe(
  			run,
  			// @ts-expect-error
  			invalidate
  		)
  	);

  	// Also support RxJS
  	// @ts-expect-error TODO fix this in the types?
  	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }

  /** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
  /** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

  /**
   * @type {Array<SubscribeInvalidateTuple<any> | any>}
   */
  const subscriber_queue = [];

  /**
   * Creates a `Readable` store that allows reading by subscription.
   *
   * @template T
   * @param {T} [value] initial value
   * @param {StartStopNotifier<T>} [start]
   * @returns {Readable<T>}
   */
  function readable(value, start) {
  	return {
  		subscribe: writable(value, start).subscribe
  	};
  }

  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   *
   * @template T
   * @param {T} [value] initial value
   * @param {StartStopNotifier<T>} [start]
   * @returns {Writable<T>}
   */
  function writable(value, start = noop) {
  	/** @type {Unsubscriber | null} */
  	let stop = null;

  	/** @type {Set<SubscribeInvalidateTuple<T>>} */
  	const subscribers = new Set();

  	/**
  	 * @param {T} new_value
  	 * @returns {void}
  	 */
  	function set(new_value) {
  		if (safe_not_equal(value, new_value)) {
  			value = new_value;
  			if (stop) {
  				// store is ready
  				const run_queue = !subscriber_queue.length;
  				for (const subscriber of subscribers) {
  					subscriber[1]();
  					subscriber_queue.push(subscriber, value);
  				}
  				if (run_queue) {
  					for (let i = 0; i < subscriber_queue.length; i += 2) {
  						subscriber_queue[i][0](subscriber_queue[i + 1]);
  					}
  					subscriber_queue.length = 0;
  				}
  			}
  		}
  	}

  	/**
  	 * @param {Updater<T>} fn
  	 * @returns {void}
  	 */
  	function update(fn) {
  		set(fn(/** @type {T} */ (value)));
  	}

  	/**
  	 * @param {Subscriber<T>} run
  	 * @param {() => void} [invalidate]
  	 * @returns {Unsubscriber}
  	 */
  	function subscribe(run, invalidate = noop) {
  		/** @type {SubscribeInvalidateTuple<T>} */
  		const subscriber = [run, invalidate];
  		subscribers.add(subscriber);
  		if (subscribers.size === 1) {
  			stop = start(set, update) || noop;
  		}
  		run(/** @type {T} */ (value));
  		return () => {
  			subscribers.delete(subscriber);
  			if (subscribers.size === 0 && stop) {
  				stop();
  				stop = null;
  			}
  		};
  	}
  	return { set, update, subscribe };
  }

  /**
   * Derived value store by synchronizing one or more readable stores and
   * applying an aggregation function over its input values.
   *
   * @template {Stores} S
   * @template T
   * @overload
   * @param {S} stores
   * @param {(values: StoresValues<S>, set: (value: T) => void, update: (fn: Updater<T>) => void) => Unsubscriber | void} fn
   * @param {T} [initial_value]
   * @returns {Readable<T>}
   */
  /**
   * Derived value store by synchronizing one or more readable stores and
   * applying an aggregation function over its input values.
   *
   * @template {Stores} S
   * @template T
   * @overload
   * @param {S} stores
   * @param {(values: StoresValues<S>) => T} fn
   * @param {T} [initial_value]
   * @returns {Readable<T>}
   */
  /**
   * @template {Stores} S
   * @template T
   * @param {S} stores
   * @param {Function} fn
   * @param {T} [initial_value]
   * @returns {Readable<T>}
   */
  function derived(stores, fn, initial_value) {
  	const single = !Array.isArray(stores);
  	/** @type {Array<Readable<any>>} */
  	const stores_array = single ? [stores] : stores;
  	if (!stores_array.every(Boolean)) {
  		throw new Error('derived() expects stores as input, got a falsy value');
  	}
  	const auto = fn.length < 2;
  	return readable(initial_value, (set, update) => {
  		let started = false;
  		/** @type {T[]} */
  		const values = [];
  		let pending = 0;
  		let cleanup = noop;
  		const sync = () => {
  			if (pending) {
  				return;
  			}
  			cleanup();
  			const result = fn(single ? values[0] : values, set, update);
  			if (auto) {
  				set(result);
  			} else {
  				cleanup = typeof result === 'function' ? result : noop;
  			}
  		};
  		const unsubscribers = stores_array.map((store, i) =>
  			subscribe_to_store(
  				store,
  				(value) => {
  					values[i] = value;
  					pending &= ~(1 << i);
  					if (started) {
  						sync();
  					}
  				},
  				() => {
  					pending |= 1 << i;
  				}
  			)
  		);
  		started = true;
  		sync();
  		return function stop() {
  			run_all(unsubscribers);
  			cleanup();
  			// We need to set this to false because callbacks can still happen despite having unsubscribed:
  			// Callbacks might already be placed in the queue which doesn't know it should no longer
  			// invoke this derived store.
  			started = false;
  		};
  	});
  }

  /**
   * Get the current value from a store by subscribing and immediately unsubscribing.
   *
   * @template T
   * @param {Readable<T>} store
   * @returns {T}
   */
  function get(store) {
  	let value;
  	subscribe_to_store(store, (_) => (value = _))();
  	// @ts-expect-error
  	return value;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var cjs;
  var hasRequiredCjs;

  function requireCjs () {
  	if (hasRequiredCjs) return cjs;
  	hasRequiredCjs = 1;

  	var isMergeableObject = function isMergeableObject(value) {
  		return isNonNullObject(value)
  			&& !isSpecial(value)
  	};

  	function isNonNullObject(value) {
  		return !!value && typeof value === 'object'
  	}

  	function isSpecial(value) {
  		var stringValue = Object.prototype.toString.call(value);

  		return stringValue === '[object RegExp]'
  			|| stringValue === '[object Date]'
  			|| isReactElement(value)
  	}

  	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  	function isReactElement(value) {
  		return value.$$typeof === REACT_ELEMENT_TYPE
  	}

  	function emptyTarget(val) {
  		return Array.isArray(val) ? [] : {}
  	}

  	function cloneUnlessOtherwiseSpecified(value, options) {
  		return (options.clone !== false && options.isMergeableObject(value))
  			? deepmerge(emptyTarget(value), value, options)
  			: value
  	}

  	function defaultArrayMerge(target, source, options) {
  		return target.concat(source).map(function(element) {
  			return cloneUnlessOtherwiseSpecified(element, options)
  		})
  	}

  	function getMergeFunction(key, options) {
  		if (!options.customMerge) {
  			return deepmerge
  		}
  		var customMerge = options.customMerge(key);
  		return typeof customMerge === 'function' ? customMerge : deepmerge
  	}

  	function getEnumerableOwnPropertySymbols(target) {
  		return Object.getOwnPropertySymbols
  			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
  				return Object.propertyIsEnumerable.call(target, symbol)
  			})
  			: []
  	}

  	function getKeys(target) {
  		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
  	}

  	function propertyIsOnObject(object, property) {
  		try {
  			return property in object
  		} catch(_) {
  			return false
  		}
  	}

  	// Protects from prototype poisoning and unexpected merging up the prototype chain.
  	function propertyIsUnsafe(target, key) {
  		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
  	}

  	function mergeObject(target, source, options) {
  		var destination = {};
  		if (options.isMergeableObject(target)) {
  			getKeys(target).forEach(function(key) {
  				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
  			});
  		}
  		getKeys(source).forEach(function(key) {
  			if (propertyIsUnsafe(target, key)) {
  				return
  			}

  			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
  				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
  			} else {
  				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
  			}
  		});
  		return destination
  	}

  	function deepmerge(target, source, options) {
  		options = options || {};
  		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  		// implementations can use it. The caller may not replace it.
  		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

  		var sourceIsArray = Array.isArray(source);
  		var targetIsArray = Array.isArray(target);
  		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  		if (!sourceAndTargetTypesMatch) {
  			return cloneUnlessOtherwiseSpecified(source, options)
  		} else if (sourceIsArray) {
  			return options.arrayMerge(target, source, options)
  		} else {
  			return mergeObject(target, source, options)
  		}
  	}

  	deepmerge.all = function deepmergeAll(array, options) {
  		if (!Array.isArray(array)) {
  			throw new Error('first argument should be an array')
  		}

  		return array.reduce(function(prev, next) {
  			return deepmerge(prev, next, options)
  		}, {})
  	};

  	var deepmerge_1 = deepmerge;

  	cjs = deepmerge_1;
  	return cjs;
  }

  var cjsExports = requireCjs();
  const deepmerge = /*@__PURE__*/getDefaultExportFromCjs(cjsExports);

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
  }

  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  //
  // Main
  //
  function memoize(fn, options) {
      var cache = options && options.cache ? options.cache : cacheDefault;
      var serializer = options && options.serializer ? options.serializer : serializerDefault;
      var strategy = options && options.strategy ? options.strategy : strategyDefault;
      return strategy(fn, {
          cache: cache,
          serializer: serializer,
      });
  }
  //
  // Strategy
  //
  function isPrimitive(value) {
      return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
  }
  function monadic(fn, cache, serializer, arg) {
      var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
      var computedValue = cache.get(cacheKey);
      if (typeof computedValue === 'undefined') {
          computedValue = fn.call(this, arg);
          cache.set(cacheKey, computedValue);
      }
      return computedValue;
  }
  function variadic(fn, cache, serializer) {
      var args = Array.prototype.slice.call(arguments, 3);
      var cacheKey = serializer(args);
      var computedValue = cache.get(cacheKey);
      if (typeof computedValue === 'undefined') {
          computedValue = fn.apply(this, args);
          cache.set(cacheKey, computedValue);
      }
      return computedValue;
  }
  function assemble(fn, context, strategy, cache, serialize) {
      return strategy.bind(context, fn, cache, serialize);
  }
  function strategyDefault(fn, options) {
      var strategy = fn.length === 1 ? monadic : variadic;
      return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }
  function strategyVariadic(fn, options) {
      return assemble(fn, this, variadic, options.cache.create(), options.serializer);
  }
  function strategyMonadic(fn, options) {
      return assemble(fn, this, monadic, options.cache.create(), options.serializer);
  }
  //
  // Serializer
  //
  var serializerDefault = function () {
      return JSON.stringify(arguments);
  };
  //
  // Cache
  //
  var ObjectWithoutPrototypeCache = /** @class */ (function () {
      function ObjectWithoutPrototypeCache() {
          this.cache = Object.create(null);
      }
      ObjectWithoutPrototypeCache.prototype.get = function (key) {
          return this.cache[key];
      };
      ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
          this.cache[key] = value;
      };
      return ObjectWithoutPrototypeCache;
  }());
  var cacheDefault = {
      create: function create() {
          return new ObjectWithoutPrototypeCache();
      },
  };
  var strategies = {
      variadic: strategyVariadic,
      monadic: strategyMonadic,
  };

  var ErrorKind;
  (function (ErrorKind) {
      /** Argument is unclosed (e.g. `{0`) */
      ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
      /** Argument is empty (e.g. `{}`). */
      ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
      /** Argument is malformed (e.g. `{foo!}``) */
      ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
      /** Expect an argument type (e.g. `{foo,}`) */
      ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
      /** Unsupported argument type (e.g. `{foo,foo}`) */
      ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
      /** Expect an argument style (e.g. `{foo, number, }`) */
      ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
      /** The number skeleton is invalid. */
      ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
      /** The date time skeleton is invalid. */
      ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
      /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
      ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
      /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
      ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
      /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
      ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
      /** Missing select argument options (e.g. `{foo, select}`) */
      ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
      /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
      ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
      /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
      ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
      /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
      ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
      /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
      ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
      /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
      ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
      /**
       * Expecting a message fragment after the `plural` or `selectordinal` selector
       * (e.g. `{foo, plural, one}`)
       */
      ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
      /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
      ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
      /**
       * Duplicate selectors in `plural` or `selectordinal` argument.
       * (e.g. {foo, plural, one {#} one {#}})
       */
      ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
      /** Duplicate selectors in `select` argument.
       * (e.g. {foo, select, apple {apple} apple {apple}})
       */
      ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
      /** Plural or select argument option must have `other` clause. */
      ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
      /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
      ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
      /** The tag name is invalid. (e.g. `<123>foo</123>`) */
      ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
      /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
      ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
      /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
      ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
  })(ErrorKind || (ErrorKind = {}));

  var TYPE;
  (function (TYPE) {
      /**
       * Raw text
       */
      TYPE[TYPE["literal"] = 0] = "literal";
      /**
       * Variable w/o any format, e.g `var` in `this is a {var}`
       */
      TYPE[TYPE["argument"] = 1] = "argument";
      /**
       * Variable w/ number format
       */
      TYPE[TYPE["number"] = 2] = "number";
      /**
       * Variable w/ date format
       */
      TYPE[TYPE["date"] = 3] = "date";
      /**
       * Variable w/ time format
       */
      TYPE[TYPE["time"] = 4] = "time";
      /**
       * Variable w/ select format
       */
      TYPE[TYPE["select"] = 5] = "select";
      /**
       * Variable w/ plural format
       */
      TYPE[TYPE["plural"] = 6] = "plural";
      /**
       * Only possible within plural argument.
       * This is the `#` symbol that will be substituted with the count.
       */
      TYPE[TYPE["pound"] = 7] = "pound";
      /**
       * XML-like tag
       */
      TYPE[TYPE["tag"] = 8] = "tag";
  })(TYPE || (TYPE = {}));
  var SKELETON_TYPE;
  (function (SKELETON_TYPE) {
      SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
      SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
  })(SKELETON_TYPE || (SKELETON_TYPE = {}));
  /**
   * Type Guards
   */
  function isLiteralElement(el) {
      return el.type === TYPE.literal;
  }
  function isArgumentElement(el) {
      return el.type === TYPE.argument;
  }
  function isNumberElement(el) {
      return el.type === TYPE.number;
  }
  function isDateElement(el) {
      return el.type === TYPE.date;
  }
  function isTimeElement(el) {
      return el.type === TYPE.time;
  }
  function isSelectElement(el) {
      return el.type === TYPE.select;
  }
  function isPluralElement(el) {
      return el.type === TYPE.plural;
  }
  function isPoundElement(el) {
      return el.type === TYPE.pound;
  }
  function isTagElement(el) {
      return el.type === TYPE.tag;
  }
  function isNumberSkeleton(el) {
      return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
  }
  function isDateTimeSkeleton(el) {
      return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
  }

  // @generated from regex-gen.ts
  var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

  /**
   * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
   * with some tweaks
   */
  var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  /**
   * Parse Date time skeleton into Intl.DateTimeFormatOptions
   * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * @public
   * @param skeleton skeleton string
   */
  function parseDateTimeSkeleton(skeleton) {
      var result = {};
      skeleton.replace(DATE_TIME_REGEX, function (match) {
          var len = match.length;
          switch (match[0]) {
              // Era
              case 'G':
                  result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                  break;
              // Year
              case 'y':
                  result.year = len === 2 ? '2-digit' : 'numeric';
                  break;
              case 'Y':
              case 'u':
              case 'U':
              case 'r':
                  throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
              // Quarter
              case 'q':
              case 'Q':
                  throw new RangeError('`q/Q` (quarter) patterns are not supported');
              // Month
              case 'M':
              case 'L':
                  result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                  break;
              // Week
              case 'w':
              case 'W':
                  throw new RangeError('`w/W` (week) patterns are not supported');
              case 'd':
                  result.day = ['numeric', '2-digit'][len - 1];
                  break;
              case 'D':
              case 'F':
              case 'g':
                  throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
              // Weekday
              case 'E':
                  result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                  break;
              case 'e':
                  if (len < 4) {
                      throw new RangeError('`e..eee` (weekday) patterns are not supported');
                  }
                  result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                  break;
              case 'c':
                  if (len < 4) {
                      throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                  }
                  result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                  break;
              // Period
              case 'a': // AM, PM
                  result.hour12 = true;
                  break;
              case 'b': // am, pm, noon, midnight
              case 'B': // flexible day periods
                  throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
              // Hour
              case 'h':
                  result.hourCycle = 'h12';
                  result.hour = ['numeric', '2-digit'][len - 1];
                  break;
              case 'H':
                  result.hourCycle = 'h23';
                  result.hour = ['numeric', '2-digit'][len - 1];
                  break;
              case 'K':
                  result.hourCycle = 'h11';
                  result.hour = ['numeric', '2-digit'][len - 1];
                  break;
              case 'k':
                  result.hourCycle = 'h24';
                  result.hour = ['numeric', '2-digit'][len - 1];
                  break;
              case 'j':
              case 'J':
              case 'C':
                  throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
              // Minute
              case 'm':
                  result.minute = ['numeric', '2-digit'][len - 1];
                  break;
              // Second
              case 's':
                  result.second = ['numeric', '2-digit'][len - 1];
                  break;
              case 'S':
              case 'A':
                  throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
              // Zone
              case 'z': // 1..3, 4: specific non-location format
                  result.timeZoneName = len < 4 ? 'short' : 'long';
                  break;
              case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
              case 'O': // 1, 4: milliseconds in day short, long
              case 'v': // 1, 4: generic non-location format
              case 'V': // 1, 2, 3, 4: time zone ID or city
              case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
              case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                  throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
          }
          return '';
      });
      return result;
  }

  // @generated from regex-gen.ts
  var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

  function parseNumberSkeletonFromString(skeleton) {
      if (skeleton.length === 0) {
          throw new Error('Number skeleton cannot be empty');
      }
      // Parse the skeleton
      var stringTokens = skeleton
          .split(WHITE_SPACE_REGEX)
          .filter(function (x) { return x.length > 0; });
      var tokens = [];
      for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
          var stringToken = stringTokens_1[_i];
          var stemAndOptions = stringToken.split('/');
          if (stemAndOptions.length === 0) {
              throw new Error('Invalid number skeleton');
          }
          var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
          for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
              var option = options_1[_a];
              if (option.length === 0) {
                  throw new Error('Invalid number skeleton');
              }
          }
          tokens.push({ stem: stem, options: options });
      }
      return tokens;
  }
  function icuUnitToEcma(unit) {
      return unit.replace(/^(.*?)-/, '');
  }
  var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
  var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
  var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
  function parseSignificantPrecision(str) {
      var result = {};
      if (str[str.length - 1] === 'r') {
          result.roundingPriority = 'morePrecision';
      }
      else if (str[str.length - 1] === 's') {
          result.roundingPriority = 'lessPrecision';
      }
      str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
          // @@@ case
          if (typeof g2 !== 'string') {
              result.minimumSignificantDigits = g1.length;
              result.maximumSignificantDigits = g1.length;
          }
          // @@@+ case
          else if (g2 === '+') {
              result.minimumSignificantDigits = g1.length;
          }
          // .### case
          else if (g1[0] === '#') {
              result.maximumSignificantDigits = g1.length;
          }
          // .@@## or .@@@ case
          else {
              result.minimumSignificantDigits = g1.length;
              result.maximumSignificantDigits =
                  g1.length + (typeof g2 === 'string' ? g2.length : 0);
          }
          return '';
      });
      return result;
  }
  function parseSign(str) {
      switch (str) {
          case 'sign-auto':
              return {
                  signDisplay: 'auto',
              };
          case 'sign-accounting':
          case '()':
              return {
                  currencySign: 'accounting',
              };
          case 'sign-always':
          case '+!':
              return {
                  signDisplay: 'always',
              };
          case 'sign-accounting-always':
          case '()!':
              return {
                  signDisplay: 'always',
                  currencySign: 'accounting',
              };
          case 'sign-except-zero':
          case '+?':
              return {
                  signDisplay: 'exceptZero',
              };
          case 'sign-accounting-except-zero':
          case '()?':
              return {
                  signDisplay: 'exceptZero',
                  currencySign: 'accounting',
              };
          case 'sign-never':
          case '+_':
              return {
                  signDisplay: 'never',
              };
      }
  }
  function parseConciseScientificAndEngineeringStem(stem) {
      // Engineering
      var result;
      if (stem[0] === 'E' && stem[1] === 'E') {
          result = {
              notation: 'engineering',
          };
          stem = stem.slice(2);
      }
      else if (stem[0] === 'E') {
          result = {
              notation: 'scientific',
          };
          stem = stem.slice(1);
      }
      if (result) {
          var signDisplay = stem.slice(0, 2);
          if (signDisplay === '+!') {
              result.signDisplay = 'always';
              stem = stem.slice(2);
          }
          else if (signDisplay === '+?') {
              result.signDisplay = 'exceptZero';
              stem = stem.slice(2);
          }
          if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
              throw new Error('Malformed concise eng/scientific notation');
          }
          result.minimumIntegerDigits = stem.length;
      }
      return result;
  }
  function parseNotationOptions(opt) {
      var result = {};
      var signOpts = parseSign(opt);
      if (signOpts) {
          return signOpts;
      }
      return result;
  }
  /**
   * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
   */
  function parseNumberSkeleton(tokens) {
      var result = {};
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
          var token = tokens_1[_i];
          switch (token.stem) {
              case 'percent':
              case '%':
                  result.style = 'percent';
                  continue;
              case '%x100':
                  result.style = 'percent';
                  result.scale = 100;
                  continue;
              case 'currency':
                  result.style = 'currency';
                  result.currency = token.options[0];
                  continue;
              case 'group-off':
              case ',_':
                  result.useGrouping = false;
                  continue;
              case 'precision-integer':
              case '.':
                  result.maximumFractionDigits = 0;
                  continue;
              case 'measure-unit':
              case 'unit':
                  result.style = 'unit';
                  result.unit = icuUnitToEcma(token.options[0]);
                  continue;
              case 'compact-short':
              case 'K':
                  result.notation = 'compact';
                  result.compactDisplay = 'short';
                  continue;
              case 'compact-long':
              case 'KK':
                  result.notation = 'compact';
                  result.compactDisplay = 'long';
                  continue;
              case 'scientific':
                  result = __assign(__assign(__assign({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                  continue;
              case 'engineering':
                  result = __assign(__assign(__assign({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                  continue;
              case 'notation-simple':
                  result.notation = 'standard';
                  continue;
              // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
              case 'unit-width-narrow':
                  result.currencyDisplay = 'narrowSymbol';
                  result.unitDisplay = 'narrow';
                  continue;
              case 'unit-width-short':
                  result.currencyDisplay = 'code';
                  result.unitDisplay = 'short';
                  continue;
              case 'unit-width-full-name':
                  result.currencyDisplay = 'name';
                  result.unitDisplay = 'long';
                  continue;
              case 'unit-width-iso-code':
                  result.currencyDisplay = 'symbol';
                  continue;
              case 'scale':
                  result.scale = parseFloat(token.options[0]);
                  continue;
              case 'rounding-mode-floor':
                  result.roundingMode = 'floor';
                  continue;
              case 'rounding-mode-ceiling':
                  result.roundingMode = 'ceil';
                  continue;
              case 'rounding-mode-down':
                  result.roundingMode = 'trunc';
                  continue;
              case 'rounding-mode-up':
                  result.roundingMode = 'expand';
                  continue;
              case 'rounding-mode-half-even':
                  result.roundingMode = 'halfEven';
                  continue;
              case 'rounding-mode-half-down':
                  result.roundingMode = 'halfTrunc';
                  continue;
              case 'rounding-mode-half-up':
                  result.roundingMode = 'halfExpand';
                  continue;
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
              case 'integer-width':
                  if (token.options.length > 1) {
                      throw new RangeError('integer-width stems only accept a single optional option');
                  }
                  token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                      if (g1) {
                          result.minimumIntegerDigits = g2.length;
                      }
                      else if (g3 && g4) {
                          throw new Error('We currently do not support maximum integer digits');
                      }
                      else if (g5) {
                          throw new Error('We currently do not support exact integer digits');
                      }
                      return '';
                  });
                  continue;
          }
          // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
          if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
              result.minimumIntegerDigits = token.stem.length;
              continue;
          }
          if (FRACTION_PRECISION_REGEX.test(token.stem)) {
              // Precision
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
              // precision-integer case
              if (token.options.length > 1) {
                  throw new RangeError('Fraction-precision stems only accept a single optional option');
              }
              token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                  // .000* case (before ICU67 it was .000+)
                  if (g2 === '*') {
                      result.minimumFractionDigits = g1.length;
                  }
                  // .### case
                  else if (g3 && g3[0] === '#') {
                      result.maximumFractionDigits = g3.length;
                  }
                  // .00## case
                  else if (g4 && g5) {
                      result.minimumFractionDigits = g4.length;
                      result.maximumFractionDigits = g4.length + g5.length;
                  }
                  else {
                      result.minimumFractionDigits = g1.length;
                      result.maximumFractionDigits = g1.length;
                  }
                  return '';
              });
              var opt = token.options[0];
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
              if (opt === 'w') {
                  result = __assign(__assign({}, result), { trailingZeroDisplay: 'stripIfInteger' });
              }
              else if (opt) {
                  result = __assign(__assign({}, result), parseSignificantPrecision(opt));
              }
              continue;
          }
          // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
          if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
              result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
              continue;
          }
          var signOpts = parseSign(token.stem);
          if (signOpts) {
              result = __assign(__assign({}, result), signOpts);
          }
          var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
          if (conciseScientificAndEngineeringOpts) {
              result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
          }
      }
      return result;
  }

  // @generated from time-data-gen.ts
  // prettier-ignore  
  var timeData = {
      "001": [
          "H",
          "h"
      ],
      "419": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "AC": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "AD": [
          "H",
          "hB"
      ],
      "AE": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "AF": [
          "H",
          "hb",
          "hB",
          "h"
      ],
      "AG": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "AI": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "AL": [
          "h",
          "H",
          "hB"
      ],
      "AM": [
          "H",
          "hB"
      ],
      "AO": [
          "H",
          "hB"
      ],
      "AR": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "AS": [
          "h",
          "H"
      ],
      "AT": [
          "H",
          "hB"
      ],
      "AU": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "AW": [
          "H",
          "hB"
      ],
      "AX": [
          "H"
      ],
      "AZ": [
          "H",
          "hB",
          "h"
      ],
      "BA": [
          "H",
          "hB",
          "h"
      ],
      "BB": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "BD": [
          "h",
          "hB",
          "H"
      ],
      "BE": [
          "H",
          "hB"
      ],
      "BF": [
          "H",
          "hB"
      ],
      "BG": [
          "H",
          "hB",
          "h"
      ],
      "BH": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "BI": [
          "H",
          "h"
      ],
      "BJ": [
          "H",
          "hB"
      ],
      "BL": [
          "H",
          "hB"
      ],
      "BM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "BN": [
          "hb",
          "hB",
          "h",
          "H"
      ],
      "BO": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "BQ": [
          "H"
      ],
      "BR": [
          "H",
          "hB"
      ],
      "BS": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "BT": [
          "h",
          "H"
      ],
      "BW": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "BY": [
          "H",
          "h"
      ],
      "BZ": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "CA": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "CC": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "CD": [
          "hB",
          "H"
      ],
      "CF": [
          "H",
          "h",
          "hB"
      ],
      "CG": [
          "H",
          "hB"
      ],
      "CH": [
          "H",
          "hB",
          "h"
      ],
      "CI": [
          "H",
          "hB"
      ],
      "CK": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "CL": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "CM": [
          "H",
          "h",
          "hB"
      ],
      "CN": [
          "H",
          "hB",
          "hb",
          "h"
      ],
      "CO": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "CP": [
          "H"
      ],
      "CR": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "CU": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "CV": [
          "H",
          "hB"
      ],
      "CW": [
          "H",
          "hB"
      ],
      "CX": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "CY": [
          "h",
          "H",
          "hb",
          "hB"
      ],
      "CZ": [
          "H"
      ],
      "DE": [
          "H",
          "hB"
      ],
      "DG": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "DJ": [
          "h",
          "H"
      ],
      "DK": [
          "H"
      ],
      "DM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "DO": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "DZ": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "EA": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "EC": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "EE": [
          "H",
          "hB"
      ],
      "EG": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "EH": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "ER": [
          "h",
          "H"
      ],
      "ES": [
          "H",
          "hB",
          "h",
          "hb"
      ],
      "ET": [
          "hB",
          "hb",
          "h",
          "H"
      ],
      "FI": [
          "H"
      ],
      "FJ": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "FK": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "FM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "FO": [
          "H",
          "h"
      ],
      "FR": [
          "H",
          "hB"
      ],
      "GA": [
          "H",
          "hB"
      ],
      "GB": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "GD": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "GE": [
          "H",
          "hB",
          "h"
      ],
      "GF": [
          "H",
          "hB"
      ],
      "GG": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "GH": [
          "h",
          "H"
      ],
      "GI": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "GL": [
          "H",
          "h"
      ],
      "GM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "GN": [
          "H",
          "hB"
      ],
      "GP": [
          "H",
          "hB"
      ],
      "GQ": [
          "H",
          "hB",
          "h",
          "hb"
      ],
      "GR": [
          "h",
          "H",
          "hb",
          "hB"
      ],
      "GT": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "GU": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "GW": [
          "H",
          "hB"
      ],
      "GY": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "HK": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "HN": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "HR": [
          "H",
          "hB"
      ],
      "HU": [
          "H",
          "h"
      ],
      "IC": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "ID": [
          "H"
      ],
      "IE": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "IL": [
          "H",
          "hB"
      ],
      "IM": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "IN": [
          "h",
          "H"
      ],
      "IO": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "IQ": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "IR": [
          "hB",
          "H"
      ],
      "IS": [
          "H"
      ],
      "IT": [
          "H",
          "hB"
      ],
      "JE": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "JM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "JO": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "JP": [
          "H",
          "K",
          "h"
      ],
      "KE": [
          "hB",
          "hb",
          "H",
          "h"
      ],
      "KG": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "KH": [
          "hB",
          "h",
          "H",
          "hb"
      ],
      "KI": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "KM": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "KN": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "KP": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "KR": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "KW": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "KY": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "KZ": [
          "H",
          "hB"
      ],
      "LA": [
          "H",
          "hb",
          "hB",
          "h"
      ],
      "LB": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "LC": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "LI": [
          "H",
          "hB",
          "h"
      ],
      "LK": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "LR": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "LS": [
          "h",
          "H"
      ],
      "LT": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "LU": [
          "H",
          "h",
          "hB"
      ],
      "LV": [
          "H",
          "hB",
          "hb",
          "h"
      ],
      "LY": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "MA": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "MC": [
          "H",
          "hB"
      ],
      "MD": [
          "H",
          "hB"
      ],
      "ME": [
          "H",
          "hB",
          "h"
      ],
      "MF": [
          "H",
          "hB"
      ],
      "MG": [
          "H",
          "h"
      ],
      "MH": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "MK": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "ML": [
          "H"
      ],
      "MM": [
          "hB",
          "hb",
          "H",
          "h"
      ],
      "MN": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "MO": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "MP": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "MQ": [
          "H",
          "hB"
      ],
      "MR": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "MS": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "MT": [
          "H",
          "h"
      ],
      "MU": [
          "H",
          "h"
      ],
      "MV": [
          "H",
          "h"
      ],
      "MW": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "MX": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "MY": [
          "hb",
          "hB",
          "h",
          "H"
      ],
      "MZ": [
          "H",
          "hB"
      ],
      "NA": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "NC": [
          "H",
          "hB"
      ],
      "NE": [
          "H"
      ],
      "NF": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "NG": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "NI": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "NL": [
          "H",
          "hB"
      ],
      "NO": [
          "H",
          "h"
      ],
      "NP": [
          "H",
          "h",
          "hB"
      ],
      "NR": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "NU": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "NZ": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "OM": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "PA": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "PE": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "PF": [
          "H",
          "h",
          "hB"
      ],
      "PG": [
          "h",
          "H"
      ],
      "PH": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "PK": [
          "h",
          "hB",
          "H"
      ],
      "PL": [
          "H",
          "h"
      ],
      "PM": [
          "H",
          "hB"
      ],
      "PN": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "PR": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "PS": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "PT": [
          "H",
          "hB"
      ],
      "PW": [
          "h",
          "H"
      ],
      "PY": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "QA": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "RE": [
          "H",
          "hB"
      ],
      "RO": [
          "H",
          "hB"
      ],
      "RS": [
          "H",
          "hB",
          "h"
      ],
      "RU": [
          "H"
      ],
      "RW": [
          "H",
          "h"
      ],
      "SA": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "SB": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "SC": [
          "H",
          "h",
          "hB"
      ],
      "SD": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "SE": [
          "H"
      ],
      "SG": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "SH": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "SI": [
          "H",
          "hB"
      ],
      "SJ": [
          "H"
      ],
      "SK": [
          "H"
      ],
      "SL": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "SM": [
          "H",
          "h",
          "hB"
      ],
      "SN": [
          "H",
          "h",
          "hB"
      ],
      "SO": [
          "h",
          "H"
      ],
      "SR": [
          "H",
          "hB"
      ],
      "SS": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "ST": [
          "H",
          "hB"
      ],
      "SV": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "SX": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "SY": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "SZ": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "TA": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "TC": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "TD": [
          "h",
          "H",
          "hB"
      ],
      "TF": [
          "H",
          "h",
          "hB"
      ],
      "TG": [
          "H",
          "hB"
      ],
      "TH": [
          "H",
          "h"
      ],
      "TJ": [
          "H",
          "h"
      ],
      "TL": [
          "H",
          "hB",
          "hb",
          "h"
      ],
      "TM": [
          "H",
          "h"
      ],
      "TN": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "TO": [
          "h",
          "H"
      ],
      "TR": [
          "H",
          "hB"
      ],
      "TT": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "TW": [
          "hB",
          "hb",
          "h",
          "H"
      ],
      "TZ": [
          "hB",
          "hb",
          "H",
          "h"
      ],
      "UA": [
          "H",
          "hB",
          "h"
      ],
      "UG": [
          "hB",
          "hb",
          "H",
          "h"
      ],
      "UM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "US": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "UY": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "UZ": [
          "H",
          "hB",
          "h"
      ],
      "VA": [
          "H",
          "h",
          "hB"
      ],
      "VC": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "VE": [
          "h",
          "H",
          "hB",
          "hb"
      ],
      "VG": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "VI": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "VN": [
          "H",
          "h"
      ],
      "VU": [
          "h",
          "H"
      ],
      "WF": [
          "H",
          "hB"
      ],
      "WS": [
          "h",
          "H"
      ],
      "XK": [
          "H",
          "hB",
          "h"
      ],
      "YE": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "YT": [
          "H",
          "hB"
      ],
      "ZA": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "ZM": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "ZW": [
          "H",
          "h"
      ],
      "af-ZA": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "ar-001": [
          "h",
          "hB",
          "hb",
          "H"
      ],
      "ca-ES": [
          "H",
          "h",
          "hB"
      ],
      "en-001": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "en-HK": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "en-IL": [
          "H",
          "h",
          "hb",
          "hB"
      ],
      "en-MY": [
          "h",
          "hb",
          "H",
          "hB"
      ],
      "es-BR": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "es-ES": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "es-GQ": [
          "H",
          "h",
          "hB",
          "hb"
      ],
      "fr-CA": [
          "H",
          "h",
          "hB"
      ],
      "gl-ES": [
          "H",
          "h",
          "hB"
      ],
      "gu-IN": [
          "hB",
          "hb",
          "h",
          "H"
      ],
      "hi-IN": [
          "hB",
          "h",
          "H"
      ],
      "it-CH": [
          "H",
          "h",
          "hB"
      ],
      "it-IT": [
          "H",
          "h",
          "hB"
      ],
      "kn-IN": [
          "hB",
          "h",
          "H"
      ],
      "ml-IN": [
          "hB",
          "h",
          "H"
      ],
      "mr-IN": [
          "hB",
          "hb",
          "h",
          "H"
      ],
      "pa-IN": [
          "hB",
          "hb",
          "h",
          "H"
      ],
      "ta-IN": [
          "hB",
          "h",
          "hb",
          "H"
      ],
      "te-IN": [
          "hB",
          "h",
          "H"
      ],
      "zu-ZA": [
          "H",
          "hB",
          "hb",
          "h"
      ]
  };

  /**
   * Returns the best matching date time pattern if a date time skeleton
   * pattern is provided with a locale. Follows the Unicode specification:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
   * @param skeleton date time skeleton pattern that possibly includes j, J or C
   * @param locale
   */
  function getBestPattern(skeleton, locale) {
      var skeletonCopy = '';
      for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
          var patternChar = skeleton.charAt(patternPos);
          if (patternChar === 'j') {
              var extraLength = 0;
              while (patternPos + 1 < skeleton.length &&
                  skeleton.charAt(patternPos + 1) === patternChar) {
                  extraLength++;
                  patternPos++;
              }
              var hourLen = 1 + (extraLength & 1);
              var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
              var dayPeriodChar = 'a';
              var hourChar = getDefaultHourSymbolFromLocale(locale);
              if (hourChar == 'H' || hourChar == 'k') {
                  dayPeriodLen = 0;
              }
              while (dayPeriodLen-- > 0) {
                  skeletonCopy += dayPeriodChar;
              }
              while (hourLen-- > 0) {
                  skeletonCopy = hourChar + skeletonCopy;
              }
          }
          else if (patternChar === 'J') {
              skeletonCopy += 'H';
          }
          else {
              skeletonCopy += patternChar;
          }
      }
      return skeletonCopy;
  }
  /**
   * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
   * of the given `locale` to the corresponding time pattern.
   * @param locale
   */
  function getDefaultHourSymbolFromLocale(locale) {
      var hourCycle = locale.hourCycle;
      if (hourCycle === undefined &&
          // @ts-ignore hourCycle(s) is not identified yet
          locale.hourCycles &&
          // @ts-ignore
          locale.hourCycles.length) {
          // @ts-ignore
          hourCycle = locale.hourCycles[0];
      }
      if (hourCycle) {
          switch (hourCycle) {
              case 'h24':
                  return 'k';
              case 'h23':
                  return 'H';
              case 'h12':
                  return 'h';
              case 'h11':
                  return 'K';
              default:
                  throw new Error('Invalid hourCycle');
          }
      }
      // TODO: Once hourCycle is fully supported remove the following with data generation
      var languageTag = locale.language;
      var regionTag;
      if (languageTag !== 'root') {
          regionTag = locale.maximize().region;
      }
      var hourCycles = timeData[regionTag || ''] ||
          timeData[languageTag || ''] ||
          timeData["".concat(languageTag, "-001")] ||
          timeData['001'];
      return hourCycles[0];
  }

  var _a;
  var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
  var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
  function createLocation(start, end) {
      return { start: start, end: end };
  }
  // #region Ponyfills
  // Consolidate these variables up top for easier toggling during debugging
  var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
  var hasNativeFromCodePoint = !!String.fromCodePoint;
  var hasNativeFromEntries = !!Object.fromEntries;
  var hasNativeCodePointAt = !!String.prototype.codePointAt;
  var hasTrimStart = !!String.prototype.trimStart;
  var hasTrimEnd = !!String.prototype.trimEnd;
  var hasNativeIsSafeInteger = !!Number.isSafeInteger;
  var isSafeInteger = hasNativeIsSafeInteger
      ? Number.isSafeInteger
      : function (n) {
          return (typeof n === 'number' &&
              isFinite(n) &&
              Math.floor(n) === n &&
              Math.abs(n) <= 0x1fffffffffffff);
      };
  // IE11 does not support y and u.
  var REGEX_SUPPORTS_U_AND_Y = true;
  try {
      var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
      /**
       * legacy Edge or Xbox One browser
       * Unicode flag support: supported
       * Pattern_Syntax support: not supported
       * See https://github.com/formatjs/formatjs/issues/2822
       */
      REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
  }
  catch (_) {
      REGEX_SUPPORTS_U_AND_Y = false;
  }
  var startsWith = hasNativeStartsWith
      ? // Native
          function startsWith(s, search, position) {
              return s.startsWith(search, position);
          }
      : // For IE11
          function startsWith(s, search, position) {
              return s.slice(position, position + search.length) === search;
          };
  var fromCodePoint = hasNativeFromCodePoint
      ? String.fromCodePoint
      : // IE11
          function fromCodePoint() {
              var codePoints = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  codePoints[_i] = arguments[_i];
              }
              var elements = '';
              var length = codePoints.length;
              var i = 0;
              var code;
              while (length > i) {
                  code = codePoints[i++];
                  if (code > 0x10ffff)
                      throw RangeError(code + ' is not a valid code point');
                  elements +=
                      code < 0x10000
                          ? String.fromCharCode(code)
                          : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
              }
              return elements;
          };
  var fromEntries = 
  // native
  hasNativeFromEntries
      ? Object.fromEntries
      : // Ponyfill
          function fromEntries(entries) {
              var obj = {};
              for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                  var _a = entries_1[_i], k = _a[0], v = _a[1];
                  obj[k] = v;
              }
              return obj;
          };
  var codePointAt = hasNativeCodePointAt
      ? // Native
          function codePointAt(s, index) {
              return s.codePointAt(index);
          }
      : // IE 11
          function codePointAt(s, index) {
              var size = s.length;
              if (index < 0 || index >= size) {
                  return undefined;
              }
              var first = s.charCodeAt(index);
              var second;
              return first < 0xd800 ||
                  first > 0xdbff ||
                  index + 1 === size ||
                  (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                  second > 0xdfff
                  ? first
                  : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
          };
  var trimStart = hasTrimStart
      ? // Native
          function trimStart(s) {
              return s.trimStart();
          }
      : // Ponyfill
          function trimStart(s) {
              return s.replace(SPACE_SEPARATOR_START_REGEX, '');
          };
  var trimEnd = hasTrimEnd
      ? // Native
          function trimEnd(s) {
              return s.trimEnd();
          }
      : // Ponyfill
          function trimEnd(s) {
              return s.replace(SPACE_SEPARATOR_END_REGEX, '');
          };
  // Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
  function RE(s, flag) {
      return new RegExp(s, flag);
  }
  // #endregion
  var matchIdentifierAtIndex;
  if (REGEX_SUPPORTS_U_AND_Y) {
      // Native
      var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
      matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
          var _a;
          IDENTIFIER_PREFIX_RE_1.lastIndex = index;
          var match = IDENTIFIER_PREFIX_RE_1.exec(s);
          return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
      };
  }
  else {
      // IE11
      matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
          var match = [];
          while (true) {
              var c = codePointAt(s, index);
              if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                  break;
              }
              match.push(c);
              index += c >= 0x10000 ? 2 : 1;
          }
          return fromCodePoint.apply(void 0, match);
      };
  }
  var Parser = /** @class */ (function () {
      function Parser(message, options) {
          if (options === void 0) { options = {}; }
          this.message = message;
          this.position = { offset: 0, line: 1, column: 1 };
          this.ignoreTag = !!options.ignoreTag;
          this.locale = options.locale;
          this.requiresOtherClause = !!options.requiresOtherClause;
          this.shouldParseSkeletons = !!options.shouldParseSkeletons;
      }
      Parser.prototype.parse = function () {
          if (this.offset() !== 0) {
              throw Error('parser can only be used once');
          }
          return this.parseMessage(0, '', false);
      };
      Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
          var elements = [];
          while (!this.isEOF()) {
              var char = this.char();
              if (char === 123 /* `{` */) {
                  var result = this.parseArgument(nestingLevel, expectingCloseTag);
                  if (result.err) {
                      return result;
                  }
                  elements.push(result.val);
              }
              else if (char === 125 /* `}` */ && nestingLevel > 0) {
                  break;
              }
              else if (char === 35 /* `#` */ &&
                  (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                  var position = this.clonePosition();
                  this.bump();
                  elements.push({
                      type: TYPE.pound,
                      location: createLocation(position, this.clonePosition()),
                  });
              }
              else if (char === 60 /* `<` */ &&
                  !this.ignoreTag &&
                  this.peek() === 47 // char code for '/'
              ) {
                  if (expectingCloseTag) {
                      break;
                  }
                  else {
                      return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                  }
              }
              else if (char === 60 /* `<` */ &&
                  !this.ignoreTag &&
                  _isAlpha(this.peek() || 0)) {
                  var result = this.parseTag(nestingLevel, parentArgType);
                  if (result.err) {
                      return result;
                  }
                  elements.push(result.val);
              }
              else {
                  var result = this.parseLiteral(nestingLevel, parentArgType);
                  if (result.err) {
                      return result;
                  }
                  elements.push(result.val);
              }
          }
          return { val: elements, err: null };
      };
      /**
       * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
       * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
       * are accepted:
       *
       * ```
       * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
       * tagName ::= [a-z] (PENChar)*
       * PENChar ::=
       *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
       *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
       *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
       * ```
       *
       * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
       * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
       * since other tag-based engines like React allow it
       */
      Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
          var startPosition = this.clonePosition();
          this.bump(); // `<`
          var tagName = this.parseTagName();
          this.bumpSpace();
          if (this.bumpIf('/>')) {
              // Self closing tag
              return {
                  val: {
                      type: TYPE.literal,
                      value: "<".concat(tagName, "/>"),
                      location: createLocation(startPosition, this.clonePosition()),
                  },
                  err: null,
              };
          }
          else if (this.bumpIf('>')) {
              var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
              if (childrenResult.err) {
                  return childrenResult;
              }
              var children = childrenResult.val;
              // Expecting a close tag
              var endTagStartPosition = this.clonePosition();
              if (this.bumpIf('</')) {
                  if (this.isEOF() || !_isAlpha(this.char())) {
                      return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                  }
                  var closingTagNameStartPosition = this.clonePosition();
                  var closingTagName = this.parseTagName();
                  if (tagName !== closingTagName) {
                      return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                  }
                  this.bumpSpace();
                  if (!this.bumpIf('>')) {
                      return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                  }
                  return {
                      val: {
                          type: TYPE.tag,
                          value: tagName,
                          children: children,
                          location: createLocation(startPosition, this.clonePosition()),
                      },
                      err: null,
                  };
              }
              else {
                  return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
              }
          }
          else {
              return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
          }
      };
      /**
       * This method assumes that the caller has peeked ahead for the first tag character.
       */
      Parser.prototype.parseTagName = function () {
          var startOffset = this.offset();
          this.bump(); // the first tag name character
          while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
              this.bump();
          }
          return this.message.slice(startOffset, this.offset());
      };
      Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
          var start = this.clonePosition();
          var value = '';
          while (true) {
              var parseQuoteResult = this.tryParseQuote(parentArgType);
              if (parseQuoteResult) {
                  value += parseQuoteResult;
                  continue;
              }
              var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
              if (parseUnquotedResult) {
                  value += parseUnquotedResult;
                  continue;
              }
              var parseLeftAngleResult = this.tryParseLeftAngleBracket();
              if (parseLeftAngleResult) {
                  value += parseLeftAngleResult;
                  continue;
              }
              break;
          }
          var location = createLocation(start, this.clonePosition());
          return {
              val: { type: TYPE.literal, value: value, location: location },
              err: null,
          };
      };
      Parser.prototype.tryParseLeftAngleBracket = function () {
          if (!this.isEOF() &&
              this.char() === 60 /* `<` */ &&
              (this.ignoreTag ||
                  // If at the opening tag or closing tag position, bail.
                  !_isAlphaOrSlash(this.peek() || 0))) {
              this.bump(); // `<`
              return '<';
          }
          return null;
      };
      /**
       * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
       * a character that requires quoting (that is, "only where needed"), and works the same in
       * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
       */
      Parser.prototype.tryParseQuote = function (parentArgType) {
          if (this.isEOF() || this.char() !== 39 /* `'` */) {
              return null;
          }
          // Parse escaped char following the apostrophe, or early return if there is no escaped char.
          // Check if is valid escaped character
          switch (this.peek()) {
              case 39 /* `'` */:
                  // double quote, should return as a single quote.
                  this.bump();
                  this.bump();
                  return "'";
              // '{', '<', '>', '}'
              case 123:
              case 60:
              case 62:
              case 125:
                  break;
              case 35: // '#'
                  if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                      break;
                  }
                  return null;
              default:
                  return null;
          }
          this.bump(); // apostrophe
          var codePoints = [this.char()]; // escaped char
          this.bump();
          // read chars until the optional closing apostrophe is found
          while (!this.isEOF()) {
              var ch = this.char();
              if (ch === 39 /* `'` */) {
                  if (this.peek() === 39 /* `'` */) {
                      codePoints.push(39);
                      // Bump one more time because we need to skip 2 characters.
                      this.bump();
                  }
                  else {
                      // Optional closing apostrophe.
                      this.bump();
                      break;
                  }
              }
              else {
                  codePoints.push(ch);
              }
              this.bump();
          }
          return fromCodePoint.apply(void 0, codePoints);
      };
      Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
          if (this.isEOF()) {
              return null;
          }
          var ch = this.char();
          if (ch === 60 /* `<` */ ||
              ch === 123 /* `{` */ ||
              (ch === 35 /* `#` */ &&
                  (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
              (ch === 125 /* `}` */ && nestingLevel > 0)) {
              return null;
          }
          else {
              this.bump();
              return fromCodePoint(ch);
          }
      };
      Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
          var openingBracePosition = this.clonePosition();
          this.bump(); // `{`
          this.bumpSpace();
          if (this.isEOF()) {
              return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          if (this.char() === 125 /* `}` */) {
              this.bump();
              return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
          }
          // argument name
          var value = this.parseIdentifierIfPossible().value;
          if (!value) {
              return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
          }
          this.bumpSpace();
          if (this.isEOF()) {
              return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          switch (this.char()) {
              // Simple argument: `{name}`
              case 125 /* `}` */: {
                  this.bump(); // `}`
                  return {
                      val: {
                          type: TYPE.argument,
                          // value does not include the opening and closing braces.
                          value: value,
                          location: createLocation(openingBracePosition, this.clonePosition()),
                      },
                      err: null,
                  };
              }
              // Argument with options: `{name, format, ...}`
              case 44 /* `,` */: {
                  this.bump(); // `,`
                  this.bumpSpace();
                  if (this.isEOF()) {
                      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                  }
                  return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
              }
              default:
                  return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
          }
      };
      /**
       * Advance the parser until the end of the identifier, if it is currently on
       * an identifier character. Return an empty string otherwise.
       */
      Parser.prototype.parseIdentifierIfPossible = function () {
          var startingPosition = this.clonePosition();
          var startOffset = this.offset();
          var value = matchIdentifierAtIndex(this.message, startOffset);
          var endOffset = startOffset + value.length;
          this.bumpTo(endOffset);
          var endPosition = this.clonePosition();
          var location = createLocation(startingPosition, endPosition);
          return { value: value, location: location };
      };
      Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
          var _a;
          // Parse this range:
          // {name, type, style}
          //        ^---^
          var typeStartPosition = this.clonePosition();
          var argType = this.parseIdentifierIfPossible().value;
          var typeEndPosition = this.clonePosition();
          switch (argType) {
              case '':
                  // Expecting a style string number, date, time, plural, selectordinal, or select.
                  return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
              case 'number':
              case 'date':
              case 'time': {
                  // Parse this range:
                  // {name, number, style}
                  //              ^-------^
                  this.bumpSpace();
                  var styleAndLocation = null;
                  if (this.bumpIf(',')) {
                      this.bumpSpace();
                      var styleStartPosition = this.clonePosition();
                      var result = this.parseSimpleArgStyleIfPossible();
                      if (result.err) {
                          return result;
                      }
                      var style = trimEnd(result.val);
                      if (style.length === 0) {
                          return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                      }
                      var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                      styleAndLocation = { style: style, styleLocation: styleLocation };
                  }
                  var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                  if (argCloseResult.err) {
                      return argCloseResult;
                  }
                  var location_1 = createLocation(openingBracePosition, this.clonePosition());
                  // Extract style or skeleton
                  if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                      // Skeleton starts with `::`.
                      var skeleton = trimStart(styleAndLocation.style.slice(2));
                      if (argType === 'number') {
                          var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                          if (result.err) {
                              return result;
                          }
                          return {
                              val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                              err: null,
                          };
                      }
                      else {
                          if (skeleton.length === 0) {
                              return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                          }
                          var dateTimePattern = skeleton;
                          // Get "best match" pattern only if locale is passed, if not, let it
                          // pass as-is where `parseDateTimeSkeleton()` will throw an error
                          // for unsupported patterns.
                          if (this.locale) {
                              dateTimePattern = getBestPattern(skeleton, this.locale);
                          }
                          var style = {
                              type: SKELETON_TYPE.dateTime,
                              pattern: dateTimePattern,
                              location: styleAndLocation.styleLocation,
                              parsedOptions: this.shouldParseSkeletons
                                  ? parseDateTimeSkeleton(dateTimePattern)
                                  : {},
                          };
                          var type = argType === 'date' ? TYPE.date : TYPE.time;
                          return {
                              val: { type: type, value: value, location: location_1, style: style },
                              err: null,
                          };
                      }
                  }
                  // Regular style or no style.
                  return {
                      val: {
                          type: argType === 'number'
                              ? TYPE.number
                              : argType === 'date'
                                  ? TYPE.date
                                  : TYPE.time,
                          value: value,
                          location: location_1,
                          style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                      },
                      err: null,
                  };
              }
              case 'plural':
              case 'selectordinal':
              case 'select': {
                  // Parse this range:
                  // {name, plural, options}
                  //              ^---------^
                  var typeEndPosition_1 = this.clonePosition();
                  this.bumpSpace();
                  if (!this.bumpIf(',')) {
                      return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
                  }
                  this.bumpSpace();
                  // Parse offset:
                  // {name, plural, offset:1, options}
                  //                ^-----^
                  //
                  // or the first option:
                  //
                  // {name, plural, one {...} other {...}}
                  //                ^--^
                  var identifierAndLocation = this.parseIdentifierIfPossible();
                  var pluralOffset = 0;
                  if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                      if (!this.bumpIf(':')) {
                          return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                      }
                      this.bumpSpace();
                      var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                      if (result.err) {
                          return result;
                      }
                      // Parse another identifier for option parsing
                      this.bumpSpace();
                      identifierAndLocation = this.parseIdentifierIfPossible();
                      pluralOffset = result.val;
                  }
                  var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                  if (optionsResult.err) {
                      return optionsResult;
                  }
                  var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                  if (argCloseResult.err) {
                      return argCloseResult;
                  }
                  var location_2 = createLocation(openingBracePosition, this.clonePosition());
                  if (argType === 'select') {
                      return {
                          val: {
                              type: TYPE.select,
                              value: value,
                              options: fromEntries(optionsResult.val),
                              location: location_2,
                          },
                          err: null,
                      };
                  }
                  else {
                      return {
                          val: {
                              type: TYPE.plural,
                              value: value,
                              options: fromEntries(optionsResult.val),
                              offset: pluralOffset,
                              pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                              location: location_2,
                          },
                          err: null,
                      };
                  }
              }
              default:
                  return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
          }
      };
      Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
          // Parse: {value, number, ::currency/GBP }
          //
          if (this.isEOF() || this.char() !== 125 /* `}` */) {
              return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          this.bump(); // `}`
          return { val: true, err: null };
      };
      /**
       * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
       */
      Parser.prototype.parseSimpleArgStyleIfPossible = function () {
          var nestedBraces = 0;
          var startPosition = this.clonePosition();
          while (!this.isEOF()) {
              var ch = this.char();
              switch (ch) {
                  case 39 /* `'` */: {
                      // Treat apostrophe as quoting but include it in the style part.
                      // Find the end of the quoted literal text.
                      this.bump();
                      var apostrophePosition = this.clonePosition();
                      if (!this.bumpUntil("'")) {
                          return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                      }
                      this.bump();
                      break;
                  }
                  case 123 /* `{` */: {
                      nestedBraces += 1;
                      this.bump();
                      break;
                  }
                  case 125 /* `}` */: {
                      if (nestedBraces > 0) {
                          nestedBraces -= 1;
                      }
                      else {
                          return {
                              val: this.message.slice(startPosition.offset, this.offset()),
                              err: null,
                          };
                      }
                      break;
                  }
                  default:
                      this.bump();
                      break;
              }
          }
          return {
              val: this.message.slice(startPosition.offset, this.offset()),
              err: null,
          };
      };
      Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
          var tokens = [];
          try {
              tokens = parseNumberSkeletonFromString(skeleton);
          }
          catch (e) {
              return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
          }
          return {
              val: {
                  type: SKELETON_TYPE.number,
                  tokens: tokens,
                  location: location,
                  parsedOptions: this.shouldParseSkeletons
                      ? parseNumberSkeleton(tokens)
                      : {},
              },
              err: null,
          };
      };
      /**
       * @param nesting_level The current nesting level of messages.
       *     This can be positive when parsing message fragment in select or plural argument options.
       * @param parent_arg_type The parent argument's type.
       * @param parsed_first_identifier If provided, this is the first identifier-like selector of
       *     the argument. It is a by-product of a previous parsing attempt.
       * @param expecting_close_tag If true, this message is directly or indirectly nested inside
       *     between a pair of opening and closing tags. The nested message will not parse beyond
       *     the closing tag boundary.
       */
      Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
          var _a;
          var hasOtherClause = false;
          var options = [];
          var parsedSelectors = new Set();
          var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
          // Parse:
          // one {one apple}
          // ^--^
          while (true) {
              if (selector.length === 0) {
                  var startPosition = this.clonePosition();
                  if (parentArgType !== 'select' && this.bumpIf('=')) {
                      // Try parse `={number}` selector
                      var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                      if (result.err) {
                          return result;
                      }
                      selectorLocation = createLocation(startPosition, this.clonePosition());
                      selector = this.message.slice(startPosition.offset, this.offset());
                  }
                  else {
                      break;
                  }
              }
              // Duplicate selector clauses
              if (parsedSelectors.has(selector)) {
                  return this.error(parentArgType === 'select'
                      ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                      : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
              }
              if (selector === 'other') {
                  hasOtherClause = true;
              }
              // Parse:
              // one {one apple}
              //     ^----------^
              this.bumpSpace();
              var openingBracePosition = this.clonePosition();
              if (!this.bumpIf('{')) {
                  return this.error(parentArgType === 'select'
                      ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                      : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
              }
              var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
              if (fragmentResult.err) {
                  return fragmentResult;
              }
              var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
              if (argCloseResult.err) {
                  return argCloseResult;
              }
              options.push([
                  selector,
                  {
                      value: fragmentResult.val,
                      location: createLocation(openingBracePosition, this.clonePosition()),
                  },
              ]);
              // Keep track of the existing selectors
              parsedSelectors.add(selector);
              // Prep next selector clause.
              this.bumpSpace();
              (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
          }
          if (options.length === 0) {
              return this.error(parentArgType === 'select'
                  ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                  : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
          }
          if (this.requiresOtherClause && !hasOtherClause) {
              return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
          }
          return { val: options, err: null };
      };
      Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
          var sign = 1;
          var startingPosition = this.clonePosition();
          if (this.bumpIf('+')) ;
          else if (this.bumpIf('-')) {
              sign = -1;
          }
          var hasDigits = false;
          var decimal = 0;
          while (!this.isEOF()) {
              var ch = this.char();
              if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                  hasDigits = true;
                  decimal = decimal * 10 + (ch - 48);
                  this.bump();
              }
              else {
                  break;
              }
          }
          var location = createLocation(startingPosition, this.clonePosition());
          if (!hasDigits) {
              return this.error(expectNumberError, location);
          }
          decimal *= sign;
          if (!isSafeInteger(decimal)) {
              return this.error(invalidNumberError, location);
          }
          return { val: decimal, err: null };
      };
      Parser.prototype.offset = function () {
          return this.position.offset;
      };
      Parser.prototype.isEOF = function () {
          return this.offset() === this.message.length;
      };
      Parser.prototype.clonePosition = function () {
          // This is much faster than `Object.assign` or spread.
          return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
          };
      };
      /**
       * Return the code point at the current position of the parser.
       * Throws if the index is out of bound.
       */
      Parser.prototype.char = function () {
          var offset = this.position.offset;
          if (offset >= this.message.length) {
              throw Error('out of bound');
          }
          var code = codePointAt(this.message, offset);
          if (code === undefined) {
              throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
          }
          return code;
      };
      Parser.prototype.error = function (kind, location) {
          return {
              val: null,
              err: {
                  kind: kind,
                  message: this.message,
                  location: location,
              },
          };
      };
      /** Bump the parser to the next UTF-16 code unit. */
      Parser.prototype.bump = function () {
          if (this.isEOF()) {
              return;
          }
          var code = this.char();
          if (code === 10 /* '\n' */) {
              this.position.line += 1;
              this.position.column = 1;
              this.position.offset += 1;
          }
          else {
              this.position.column += 1;
              // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
              this.position.offset += code < 0x10000 ? 1 : 2;
          }
      };
      /**
       * If the substring starting at the current position of the parser has
       * the given prefix, then bump the parser to the character immediately
       * following the prefix and return true. Otherwise, don't bump the parser
       * and return false.
       */
      Parser.prototype.bumpIf = function (prefix) {
          if (startsWith(this.message, prefix, this.offset())) {
              for (var i = 0; i < prefix.length; i++) {
                  this.bump();
              }
              return true;
          }
          return false;
      };
      /**
       * Bump the parser until the pattern character is found and return `true`.
       * Otherwise bump to the end of the file and return `false`.
       */
      Parser.prototype.bumpUntil = function (pattern) {
          var currentOffset = this.offset();
          var index = this.message.indexOf(pattern, currentOffset);
          if (index >= 0) {
              this.bumpTo(index);
              return true;
          }
          else {
              this.bumpTo(this.message.length);
              return false;
          }
      };
      /**
       * Bump the parser to the target offset.
       * If target offset is beyond the end of the input, bump the parser to the end of the input.
       */
      Parser.prototype.bumpTo = function (targetOffset) {
          if (this.offset() > targetOffset) {
              throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
          }
          targetOffset = Math.min(targetOffset, this.message.length);
          while (true) {
              var offset = this.offset();
              if (offset === targetOffset) {
                  break;
              }
              if (offset > targetOffset) {
                  throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
              }
              this.bump();
              if (this.isEOF()) {
                  break;
              }
          }
      };
      /** advance the parser through all whitespace to the next non-whitespace code unit. */
      Parser.prototype.bumpSpace = function () {
          while (!this.isEOF() && _isWhiteSpace(this.char())) {
              this.bump();
          }
      };
      /**
       * Peek at the *next* Unicode codepoint in the input without advancing the parser.
       * If the input has been exhausted, then this returns null.
       */
      Parser.prototype.peek = function () {
          if (this.isEOF()) {
              return null;
          }
          var code = this.char();
          var offset = this.offset();
          var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
          return nextCode !== null && nextCode !== void 0 ? nextCode : null;
      };
      return Parser;
  }());
  /**
   * This check if codepoint is alphabet (lower & uppercase)
   * @param codepoint
   * @returns
   */
  function _isAlpha(codepoint) {
      return ((codepoint >= 97 && codepoint <= 122) ||
          (codepoint >= 65 && codepoint <= 90));
  }
  function _isAlphaOrSlash(codepoint) {
      return _isAlpha(codepoint) || codepoint === 47; /* '/' */
  }
  /** See `parseTag` function docs. */
  function _isPotentialElementNameChar(c) {
      return (c === 45 /* '-' */ ||
          c === 46 /* '.' */ ||
          (c >= 48 && c <= 57) /* 0..9 */ ||
          c === 95 /* '_' */ ||
          (c >= 97 && c <= 122) /** a..z */ ||
          (c >= 65 && c <= 90) /* A..Z */ ||
          c == 0xb7 ||
          (c >= 0xc0 && c <= 0xd6) ||
          (c >= 0xd8 && c <= 0xf6) ||
          (c >= 0xf8 && c <= 0x37d) ||
          (c >= 0x37f && c <= 0x1fff) ||
          (c >= 0x200c && c <= 0x200d) ||
          (c >= 0x203f && c <= 0x2040) ||
          (c >= 0x2070 && c <= 0x218f) ||
          (c >= 0x2c00 && c <= 0x2fef) ||
          (c >= 0x3001 && c <= 0xd7ff) ||
          (c >= 0xf900 && c <= 0xfdcf) ||
          (c >= 0xfdf0 && c <= 0xfffd) ||
          (c >= 0x10000 && c <= 0xeffff));
  }
  /**
   * Code point equivalent of regex `\p{White_Space}`.
   * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
   */
  function _isWhiteSpace(c) {
      return ((c >= 0x0009 && c <= 0x000d) ||
          c === 0x0020 ||
          c === 0x0085 ||
          (c >= 0x200e && c <= 0x200f) ||
          c === 0x2028 ||
          c === 0x2029);
  }
  /**
   * Code point equivalent of regex `\p{Pattern_Syntax}`.
   * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
   */
  function _isPatternSyntax(c) {
      return ((c >= 0x0021 && c <= 0x0023) ||
          c === 0x0024 ||
          (c >= 0x0025 && c <= 0x0027) ||
          c === 0x0028 ||
          c === 0x0029 ||
          c === 0x002a ||
          c === 0x002b ||
          c === 0x002c ||
          c === 0x002d ||
          (c >= 0x002e && c <= 0x002f) ||
          (c >= 0x003a && c <= 0x003b) ||
          (c >= 0x003c && c <= 0x003e) ||
          (c >= 0x003f && c <= 0x0040) ||
          c === 0x005b ||
          c === 0x005c ||
          c === 0x005d ||
          c === 0x005e ||
          c === 0x0060 ||
          c === 0x007b ||
          c === 0x007c ||
          c === 0x007d ||
          c === 0x007e ||
          c === 0x00a1 ||
          (c >= 0x00a2 && c <= 0x00a5) ||
          c === 0x00a6 ||
          c === 0x00a7 ||
          c === 0x00a9 ||
          c === 0x00ab ||
          c === 0x00ac ||
          c === 0x00ae ||
          c === 0x00b0 ||
          c === 0x00b1 ||
          c === 0x00b6 ||
          c === 0x00bb ||
          c === 0x00bf ||
          c === 0x00d7 ||
          c === 0x00f7 ||
          (c >= 0x2010 && c <= 0x2015) ||
          (c >= 0x2016 && c <= 0x2017) ||
          c === 0x2018 ||
          c === 0x2019 ||
          c === 0x201a ||
          (c >= 0x201b && c <= 0x201c) ||
          c === 0x201d ||
          c === 0x201e ||
          c === 0x201f ||
          (c >= 0x2020 && c <= 0x2027) ||
          (c >= 0x2030 && c <= 0x2038) ||
          c === 0x2039 ||
          c === 0x203a ||
          (c >= 0x203b && c <= 0x203e) ||
          (c >= 0x2041 && c <= 0x2043) ||
          c === 0x2044 ||
          c === 0x2045 ||
          c === 0x2046 ||
          (c >= 0x2047 && c <= 0x2051) ||
          c === 0x2052 ||
          c === 0x2053 ||
          (c >= 0x2055 && c <= 0x205e) ||
          (c >= 0x2190 && c <= 0x2194) ||
          (c >= 0x2195 && c <= 0x2199) ||
          (c >= 0x219a && c <= 0x219b) ||
          (c >= 0x219c && c <= 0x219f) ||
          c === 0x21a0 ||
          (c >= 0x21a1 && c <= 0x21a2) ||
          c === 0x21a3 ||
          (c >= 0x21a4 && c <= 0x21a5) ||
          c === 0x21a6 ||
          (c >= 0x21a7 && c <= 0x21ad) ||
          c === 0x21ae ||
          (c >= 0x21af && c <= 0x21cd) ||
          (c >= 0x21ce && c <= 0x21cf) ||
          (c >= 0x21d0 && c <= 0x21d1) ||
          c === 0x21d2 ||
          c === 0x21d3 ||
          c === 0x21d4 ||
          (c >= 0x21d5 && c <= 0x21f3) ||
          (c >= 0x21f4 && c <= 0x22ff) ||
          (c >= 0x2300 && c <= 0x2307) ||
          c === 0x2308 ||
          c === 0x2309 ||
          c === 0x230a ||
          c === 0x230b ||
          (c >= 0x230c && c <= 0x231f) ||
          (c >= 0x2320 && c <= 0x2321) ||
          (c >= 0x2322 && c <= 0x2328) ||
          c === 0x2329 ||
          c === 0x232a ||
          (c >= 0x232b && c <= 0x237b) ||
          c === 0x237c ||
          (c >= 0x237d && c <= 0x239a) ||
          (c >= 0x239b && c <= 0x23b3) ||
          (c >= 0x23b4 && c <= 0x23db) ||
          (c >= 0x23dc && c <= 0x23e1) ||
          (c >= 0x23e2 && c <= 0x2426) ||
          (c >= 0x2427 && c <= 0x243f) ||
          (c >= 0x2440 && c <= 0x244a) ||
          (c >= 0x244b && c <= 0x245f) ||
          (c >= 0x2500 && c <= 0x25b6) ||
          c === 0x25b7 ||
          (c >= 0x25b8 && c <= 0x25c0) ||
          c === 0x25c1 ||
          (c >= 0x25c2 && c <= 0x25f7) ||
          (c >= 0x25f8 && c <= 0x25ff) ||
          (c >= 0x2600 && c <= 0x266e) ||
          c === 0x266f ||
          (c >= 0x2670 && c <= 0x2767) ||
          c === 0x2768 ||
          c === 0x2769 ||
          c === 0x276a ||
          c === 0x276b ||
          c === 0x276c ||
          c === 0x276d ||
          c === 0x276e ||
          c === 0x276f ||
          c === 0x2770 ||
          c === 0x2771 ||
          c === 0x2772 ||
          c === 0x2773 ||
          c === 0x2774 ||
          c === 0x2775 ||
          (c >= 0x2794 && c <= 0x27bf) ||
          (c >= 0x27c0 && c <= 0x27c4) ||
          c === 0x27c5 ||
          c === 0x27c6 ||
          (c >= 0x27c7 && c <= 0x27e5) ||
          c === 0x27e6 ||
          c === 0x27e7 ||
          c === 0x27e8 ||
          c === 0x27e9 ||
          c === 0x27ea ||
          c === 0x27eb ||
          c === 0x27ec ||
          c === 0x27ed ||
          c === 0x27ee ||
          c === 0x27ef ||
          (c >= 0x27f0 && c <= 0x27ff) ||
          (c >= 0x2800 && c <= 0x28ff) ||
          (c >= 0x2900 && c <= 0x2982) ||
          c === 0x2983 ||
          c === 0x2984 ||
          c === 0x2985 ||
          c === 0x2986 ||
          c === 0x2987 ||
          c === 0x2988 ||
          c === 0x2989 ||
          c === 0x298a ||
          c === 0x298b ||
          c === 0x298c ||
          c === 0x298d ||
          c === 0x298e ||
          c === 0x298f ||
          c === 0x2990 ||
          c === 0x2991 ||
          c === 0x2992 ||
          c === 0x2993 ||
          c === 0x2994 ||
          c === 0x2995 ||
          c === 0x2996 ||
          c === 0x2997 ||
          c === 0x2998 ||
          (c >= 0x2999 && c <= 0x29d7) ||
          c === 0x29d8 ||
          c === 0x29d9 ||
          c === 0x29da ||
          c === 0x29db ||
          (c >= 0x29dc && c <= 0x29fb) ||
          c === 0x29fc ||
          c === 0x29fd ||
          (c >= 0x29fe && c <= 0x2aff) ||
          (c >= 0x2b00 && c <= 0x2b2f) ||
          (c >= 0x2b30 && c <= 0x2b44) ||
          (c >= 0x2b45 && c <= 0x2b46) ||
          (c >= 0x2b47 && c <= 0x2b4c) ||
          (c >= 0x2b4d && c <= 0x2b73) ||
          (c >= 0x2b74 && c <= 0x2b75) ||
          (c >= 0x2b76 && c <= 0x2b95) ||
          c === 0x2b96 ||
          (c >= 0x2b97 && c <= 0x2bff) ||
          (c >= 0x2e00 && c <= 0x2e01) ||
          c === 0x2e02 ||
          c === 0x2e03 ||
          c === 0x2e04 ||
          c === 0x2e05 ||
          (c >= 0x2e06 && c <= 0x2e08) ||
          c === 0x2e09 ||
          c === 0x2e0a ||
          c === 0x2e0b ||
          c === 0x2e0c ||
          c === 0x2e0d ||
          (c >= 0x2e0e && c <= 0x2e16) ||
          c === 0x2e17 ||
          (c >= 0x2e18 && c <= 0x2e19) ||
          c === 0x2e1a ||
          c === 0x2e1b ||
          c === 0x2e1c ||
          c === 0x2e1d ||
          (c >= 0x2e1e && c <= 0x2e1f) ||
          c === 0x2e20 ||
          c === 0x2e21 ||
          c === 0x2e22 ||
          c === 0x2e23 ||
          c === 0x2e24 ||
          c === 0x2e25 ||
          c === 0x2e26 ||
          c === 0x2e27 ||
          c === 0x2e28 ||
          c === 0x2e29 ||
          (c >= 0x2e2a && c <= 0x2e2e) ||
          c === 0x2e2f ||
          (c >= 0x2e30 && c <= 0x2e39) ||
          (c >= 0x2e3a && c <= 0x2e3b) ||
          (c >= 0x2e3c && c <= 0x2e3f) ||
          c === 0x2e40 ||
          c === 0x2e41 ||
          c === 0x2e42 ||
          (c >= 0x2e43 && c <= 0x2e4f) ||
          (c >= 0x2e50 && c <= 0x2e51) ||
          c === 0x2e52 ||
          (c >= 0x2e53 && c <= 0x2e7f) ||
          (c >= 0x3001 && c <= 0x3003) ||
          c === 0x3008 ||
          c === 0x3009 ||
          c === 0x300a ||
          c === 0x300b ||
          c === 0x300c ||
          c === 0x300d ||
          c === 0x300e ||
          c === 0x300f ||
          c === 0x3010 ||
          c === 0x3011 ||
          (c >= 0x3012 && c <= 0x3013) ||
          c === 0x3014 ||
          c === 0x3015 ||
          c === 0x3016 ||
          c === 0x3017 ||
          c === 0x3018 ||
          c === 0x3019 ||
          c === 0x301a ||
          c === 0x301b ||
          c === 0x301c ||
          c === 0x301d ||
          (c >= 0x301e && c <= 0x301f) ||
          c === 0x3020 ||
          c === 0x3030 ||
          c === 0xfd3e ||
          c === 0xfd3f ||
          (c >= 0xfe45 && c <= 0xfe46));
  }

  function pruneLocation(els) {
      els.forEach(function (el) {
          delete el.location;
          if (isSelectElement(el) || isPluralElement(el)) {
              for (var k in el.options) {
                  delete el.options[k].location;
                  pruneLocation(el.options[k].value);
              }
          }
          else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
              delete el.style.location;
          }
          else if ((isDateElement(el) || isTimeElement(el)) &&
              isDateTimeSkeleton(el.style)) {
              delete el.style.location;
          }
          else if (isTagElement(el)) {
              pruneLocation(el.children);
          }
      });
  }
  function parse(message, opts) {
      if (opts === void 0) { opts = {}; }
      opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
      var result = new Parser(message, opts).parse();
      if (result.err) {
          var error = SyntaxError(ErrorKind[result.err.kind]);
          // @ts-expect-error Assign to error object
          error.location = result.err.location;
          // @ts-expect-error Assign to error object
          error.originalMessage = result.err.message;
          throw error;
      }
      if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
          pruneLocation(result.val);
      }
      return result.val;
  }

  var ErrorCode;
  (function (ErrorCode) {
      // When we have a placeholder but no value to format
      ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
      // When value supplied is invalid
      ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
      // When we need specific Intl API but it's not available
      ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
  })(ErrorCode || (ErrorCode = {}));
  var FormatError = /** @class */ (function (_super) {
      __extends(FormatError, _super);
      function FormatError(msg, code, originalMessage) {
          var _this = _super.call(this, msg) || this;
          _this.code = code;
          _this.originalMessage = originalMessage;
          return _this;
      }
      FormatError.prototype.toString = function () {
          return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
      };
      return FormatError;
  }(Error));
  var InvalidValueError = /** @class */ (function (_super) {
      __extends(InvalidValueError, _super);
      function InvalidValueError(variableId, value, options, originalMessage) {
          return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
      }
      return InvalidValueError;
  }(FormatError));
  var InvalidValueTypeError = /** @class */ (function (_super) {
      __extends(InvalidValueTypeError, _super);
      function InvalidValueTypeError(value, type, originalMessage) {
          return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
      }
      return InvalidValueTypeError;
  }(FormatError));
  var MissingValueError = /** @class */ (function (_super) {
      __extends(MissingValueError, _super);
      function MissingValueError(variableId, originalMessage) {
          return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
      }
      return MissingValueError;
  }(FormatError));

  var PART_TYPE;
  (function (PART_TYPE) {
      PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
      PART_TYPE[PART_TYPE["object"] = 1] = "object";
  })(PART_TYPE || (PART_TYPE = {}));
  function mergeLiteral(parts) {
      if (parts.length < 2) {
          return parts;
      }
      return parts.reduce(function (all, part) {
          var lastPart = all[all.length - 1];
          if (!lastPart ||
              lastPart.type !== PART_TYPE.literal ||
              part.type !== PART_TYPE.literal) {
              all.push(part);
          }
          else {
              lastPart.value += part.value;
          }
          return all;
      }, []);
  }
  function isFormatXMLElementFn(el) {
      return typeof el === 'function';
  }
  // TODO(skeleton): add skeleton support
  function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
  // For debugging
  originalMessage) {
      // Hot path for straight simple msg translations
      if (els.length === 1 && isLiteralElement(els[0])) {
          return [
              {
                  type: PART_TYPE.literal,
                  value: els[0].value,
              },
          ];
      }
      var result = [];
      for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
          var el = els_1[_i];
          // Exit early for string parts.
          if (isLiteralElement(el)) {
              result.push({
                  type: PART_TYPE.literal,
                  value: el.value,
              });
              continue;
          }
          // TODO: should this part be literal type?
          // Replace `#` in plural rules with the actual numeric value.
          if (isPoundElement(el)) {
              if (typeof currentPluralValue === 'number') {
                  result.push({
                      type: PART_TYPE.literal,
                      value: formatters.getNumberFormat(locales).format(currentPluralValue),
                  });
              }
              continue;
          }
          var varName = el.value;
          // Enforce that all required values are provided by the caller.
          if (!(values && varName in values)) {
              throw new MissingValueError(varName, originalMessage);
          }
          var value = values[varName];
          if (isArgumentElement(el)) {
              if (!value || typeof value === 'string' || typeof value === 'number') {
                  value =
                      typeof value === 'string' || typeof value === 'number'
                          ? String(value)
                          : '';
              }
              result.push({
                  type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                  value: value,
              });
              continue;
          }
          // Recursively format plural and select parts' option — which can be a
          // nested pattern structure. The choosing of the option to use is
          // abstracted-by and delegated-to the part helper object.
          if (isDateElement(el)) {
              var style = typeof el.style === 'string'
                  ? formats.date[el.style]
                  : isDateTimeSkeleton(el.style)
                      ? el.style.parsedOptions
                      : undefined;
              result.push({
                  type: PART_TYPE.literal,
                  value: formatters
                      .getDateTimeFormat(locales, style)
                      .format(value),
              });
              continue;
          }
          if (isTimeElement(el)) {
              var style = typeof el.style === 'string'
                  ? formats.time[el.style]
                  : isDateTimeSkeleton(el.style)
                      ? el.style.parsedOptions
                      : formats.time.medium;
              result.push({
                  type: PART_TYPE.literal,
                  value: formatters
                      .getDateTimeFormat(locales, style)
                      .format(value),
              });
              continue;
          }
          if (isNumberElement(el)) {
              var style = typeof el.style === 'string'
                  ? formats.number[el.style]
                  : isNumberSkeleton(el.style)
                      ? el.style.parsedOptions
                      : undefined;
              if (style && style.scale) {
                  value =
                      value *
                          (style.scale || 1);
              }
              result.push({
                  type: PART_TYPE.literal,
                  value: formatters
                      .getNumberFormat(locales, style)
                      .format(value),
              });
              continue;
          }
          if (isTagElement(el)) {
              var children = el.children, value_1 = el.value;
              var formatFn = values[value_1];
              if (!isFormatXMLElementFn(formatFn)) {
                  throw new InvalidValueTypeError(value_1, 'function', originalMessage);
              }
              var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
              var chunks = formatFn(parts.map(function (p) { return p.value; }));
              if (!Array.isArray(chunks)) {
                  chunks = [chunks];
              }
              result.push.apply(result, chunks.map(function (c) {
                  return {
                      type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                      value: c,
                  };
              }));
          }
          if (isSelectElement(el)) {
              var opt = el.options[value] || el.options.other;
              if (!opt) {
                  throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
              }
              result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
              continue;
          }
          if (isPluralElement(el)) {
              var opt = el.options["=".concat(value)];
              if (!opt) {
                  if (!Intl.PluralRules) {
                      throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                  }
                  var rule = formatters
                      .getPluralRules(locales, { type: el.pluralType })
                      .select(value - (el.offset || 0));
                  opt = el.options[rule] || el.options.other;
              }
              if (!opt) {
                  throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
              }
              result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
              continue;
          }
      }
      return mergeLiteral(result);
  }

  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */
  // -- MessageFormat --------------------------------------------------------
  function mergeConfig(c1, c2) {
      if (!c2) {
          return c1;
      }
      return __assign(__assign(__assign({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
          all[k] = __assign(__assign({}, c1[k]), (c2[k] || {}));
          return all;
      }, {}));
  }
  function mergeConfigs(defaultConfig, configs) {
      if (!configs) {
          return defaultConfig;
      }
      return Object.keys(defaultConfig).reduce(function (all, k) {
          all[k] = mergeConfig(defaultConfig[k], configs[k]);
          return all;
      }, __assign({}, defaultConfig));
  }
  function createFastMemoizeCache(store) {
      return {
          create: function () {
              return {
                  get: function (key) {
                      return store[key];
                  },
                  set: function (key, value) {
                      store[key] = value;
                  },
              };
          },
      };
  }
  function createDefaultFormatters(cache) {
      if (cache === void 0) { cache = {
          number: {},
          dateTime: {},
          pluralRules: {},
      }; }
      return {
          getNumberFormat: memoize(function () {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
          }, {
              cache: createFastMemoizeCache(cache.number),
              strategy: strategies.variadic,
          }),
          getDateTimeFormat: memoize(function () {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
          }, {
              cache: createFastMemoizeCache(cache.dateTime),
              strategy: strategies.variadic,
          }),
          getPluralRules: memoize(function () {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
          }, {
              cache: createFastMemoizeCache(cache.pluralRules),
              strategy: strategies.variadic,
          }),
      };
  }
  var IntlMessageFormat = /** @class */ (function () {
      function IntlMessageFormat(message, locales, overrideFormats, opts) {
          if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
          var _this = this;
          this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
          };
          this.format = function (values) {
              var parts = _this.formatToParts(values);
              // Hot path for straight simple msg translations
              if (parts.length === 1) {
                  return parts[0].value;
              }
              var result = parts.reduce(function (all, part) {
                  if (!all.length ||
                      part.type !== PART_TYPE.literal ||
                      typeof all[all.length - 1] !== 'string') {
                      all.push(part.value);
                  }
                  else {
                      all[all.length - 1] += part.value;
                  }
                  return all;
              }, []);
              if (result.length <= 1) {
                  return result[0] || '';
              }
              return result;
          };
          this.formatToParts = function (values) {
              return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
          };
          this.resolvedOptions = function () {
              var _a;
              return ({
                  locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) ||
                      Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
              });
          };
          this.getAst = function () { return _this.ast; };
          // Defined first because it's used to build the format pattern.
          this.locales = locales;
          this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
          if (typeof message === 'string') {
              this.message = message;
              if (!IntlMessageFormat.__parse) {
                  throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
              }
              var _a = opts || {}; _a.formatters; var parseOpts = __rest(_a, ["formatters"]);
              // Parse string messages into an AST.
              this.ast = IntlMessageFormat.__parse(message, __assign(__assign({}, parseOpts), { locale: this.resolvedLocale }));
          }
          else {
              this.ast = message;
          }
          if (!Array.isArray(this.ast)) {
              throw new TypeError('A message must be provided as a String or AST.');
          }
          // Creates a new object with the specified `formats` merged with the default
          // formats.
          this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
          this.formatters =
              (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
      }
      Object.defineProperty(IntlMessageFormat, "defaultLocale", {
          get: function () {
              if (!IntlMessageFormat.memoizedDefaultLocale) {
                  IntlMessageFormat.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale;
              }
              return IntlMessageFormat.memoizedDefaultLocale;
          },
          enumerable: false,
          configurable: true
      });
      IntlMessageFormat.memoizedDefaultLocale = null;
      IntlMessageFormat.resolveLocale = function (locales) {
          if (typeof Intl.Locale === 'undefined') {
              return;
          }
          var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
          if (supportedLocales.length > 0) {
              return new Intl.Locale(supportedLocales[0]);
          }
          return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
      };
      IntlMessageFormat.__parse = parse;
      // Default format options used as the prototype of the `formats` provided to the
      // constructor. These are used when constructing the internal Intl.NumberFormat
      // and Intl.DateTimeFormat instances.
      IntlMessageFormat.formats = {
          number: {
              integer: {
                  maximumFractionDigits: 0,
              },
              currency: {
                  style: 'currency',
              },
              percent: {
                  style: 'percent',
              },
          },
          date: {
              short: {
                  month: 'numeric',
                  day: 'numeric',
                  year: '2-digit',
              },
              medium: {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
              },
              long: {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
              },
              full: {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
              },
          },
          time: {
              short: {
                  hour: 'numeric',
                  minute: 'numeric',
              },
              medium: {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
              },
              long: {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  timeZoneName: 'short',
              },
              full: {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  timeZoneName: 'short',
              },
          },
      };
      return IntlMessageFormat;
  }());

  function delve(obj, fullKey) {
    if (fullKey == null)
      return void 0;
    if (fullKey in obj) {
      return obj[fullKey];
    }
    const keys = fullKey.split(".");
    let result = obj;
    for (let p = 0; p < keys.length; p++) {
      if (typeof result === "object") {
        if (p > 0) {
          const partialKey = keys.slice(p, keys.length).join(".");
          if (partialKey in result) {
            result = result[partialKey];
            break;
          }
        }
        result = result[keys[p]];
      } else {
        result = void 0;
      }
    }
    return result;
  }

  const lookupCache = {};
  const addToCache = (path, locale, message) => {
    if (!message)
      return message;
    if (!(locale in lookupCache))
      lookupCache[locale] = {};
    if (!(path in lookupCache[locale]))
      lookupCache[locale][path] = message;
    return message;
  };
  const lookup = (path, refLocale) => {
    if (refLocale == null)
      return void 0;
    if (refLocale in lookupCache && path in lookupCache[refLocale]) {
      return lookupCache[refLocale][path];
    }
    const locales = getPossibleLocales(refLocale);
    for (let i = 0; i < locales.length; i++) {
      const locale = locales[i];
      const message = getMessageFromDictionary(locale, path);
      if (message) {
        return addToCache(path, refLocale, message);
      }
    }
    return void 0;
  };

  let dictionary;
  const $dictionary = writable({});
  function getLocaleDictionary(locale) {
    return dictionary[locale] || null;
  }
  function hasLocaleDictionary(locale) {
    return locale in dictionary;
  }
  function getMessageFromDictionary(locale, id) {
    if (!hasLocaleDictionary(locale)) {
      return null;
    }
    const localeDictionary = getLocaleDictionary(locale);
    const match = delve(localeDictionary, id);
    return match;
  }
  function getClosestAvailableLocale(refLocale) {
    if (refLocale == null)
      return void 0;
    const relatedLocales = getPossibleLocales(refLocale);
    for (let i = 0; i < relatedLocales.length; i++) {
      const locale = relatedLocales[i];
      if (hasLocaleDictionary(locale)) {
        return locale;
      }
    }
    return void 0;
  }
  function addMessages(locale, ...partials) {
    delete lookupCache[locale];
    $dictionary.update((d) => {
      d[locale] = deepmerge.all([d[locale] || {}, ...partials]);
      return d;
    });
  }
  derived(
    [$dictionary],
    ([dictionary2]) => Object.keys(dictionary2)
  );
  $dictionary.subscribe((newDictionary) => dictionary = newDictionary);

  const queue = {};
  function removeLoaderFromQueue(locale, loader) {
    queue[locale].delete(loader);
    if (queue[locale].size === 0) {
      delete queue[locale];
    }
  }
  function getLocaleQueue(locale) {
    return queue[locale];
  }
  function getLocalesQueues(locale) {
    return getPossibleLocales(locale).map((localeItem) => {
      const localeQueue = getLocaleQueue(localeItem);
      return [localeItem, localeQueue ? [...localeQueue] : []];
    }).filter(([, localeQueue]) => localeQueue.length > 0);
  }
  function hasLocaleQueue(locale) {
    if (locale == null)
      return false;
    return getPossibleLocales(locale).some(
      (localeQueue) => {
        var _a;
        return (_a = getLocaleQueue(localeQueue)) == null ? void 0 : _a.size;
      }
    );
  }
  function loadLocaleQueue(locale, localeQueue) {
    const allLoadersPromise = Promise.all(
      localeQueue.map((loader) => {
        removeLoaderFromQueue(locale, loader);
        return loader().then((partial) => partial.default || partial);
      })
    );
    return allLoadersPromise.then((partials) => addMessages(locale, ...partials));
  }
  const activeFlushes = {};
  function flush(locale) {
    if (!hasLocaleQueue(locale)) {
      if (locale in activeFlushes) {
        return activeFlushes[locale];
      }
      return Promise.resolve();
    }
    const queues = getLocalesQueues(locale);
    activeFlushes[locale] = Promise.all(
      queues.map(
        ([localeName, localeQueue]) => loadLocaleQueue(localeName, localeQueue)
      )
    ).then(() => {
      if (hasLocaleQueue(locale)) {
        return flush(locale);
      }
      delete activeFlushes[locale];
    });
    return activeFlushes[locale];
  }

  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __objRest$1 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const defaultFormats = {
    number: {
      scientific: { notation: "scientific" },
      engineering: { notation: "engineering" },
      compactLong: { notation: "compact", compactDisplay: "long" },
      compactShort: { notation: "compact", compactDisplay: "short" }
    },
    date: {
      short: { month: "numeric", day: "numeric", year: "2-digit" },
      medium: { month: "short", day: "numeric", year: "numeric" },
      long: { month: "long", day: "numeric", year: "numeric" },
      full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
    },
    time: {
      short: { hour: "numeric", minute: "numeric" },
      medium: { hour: "numeric", minute: "numeric", second: "numeric" },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  };
  function defaultMissingKeyHandler({ locale, id }) {
    console.warn(
      `[svelte-i18n] The message "${id}" was not found in "${getPossibleLocales(
      locale
    ).join('", "')}".${hasLocaleQueue(getCurrentLocale()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
    );
  }
  const defaultOptions = {
    fallbackLocale: null,
    loadingDelay: 200,
    formats: defaultFormats,
    warnOnMissingMessages: true,
    handleMissingMessage: void 0,
    ignoreTag: true
  };
  const options$1 = defaultOptions;
  function getOptions() {
    return options$1;
  }
  function init(opts) {
    const _a = opts, { formats } = _a, rest = __objRest$1(_a, ["formats"]);
    let initialLocale = opts.fallbackLocale;
    if (opts.initialLocale) {
      try {
        if (IntlMessageFormat.resolveLocale(opts.initialLocale)) {
          initialLocale = opts.initialLocale;
        }
      } catch (e) {
        console.warn(
          `[svelte-i18n] The initial locale "${opts.initialLocale}" is not a valid locale.`
        );
      }
    }
    if (rest.warnOnMissingMessages) {
      delete rest.warnOnMissingMessages;
      if (rest.handleMissingMessage == null) {
        rest.handleMissingMessage = defaultMissingKeyHandler;
      } else {
        console.warn(
          '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
        );
      }
    }
    Object.assign(options$1, rest, { initialLocale });
    if (formats) {
      if ("number" in formats) {
        Object.assign(options$1.formats.number, formats.number);
      }
      if ("date" in formats) {
        Object.assign(options$1.formats.date, formats.date);
      }
      if ("time" in formats) {
        Object.assign(options$1.formats.time, formats.time);
      }
    }
    return $locale.set(initialLocale);
  }

  const $isLoading = writable(false);

  var __defProp$1 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b)
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  let current;
  const internalLocale = writable(null);
  function getSubLocales(refLocale) {
    return refLocale.split("-").map((_, i, arr) => arr.slice(0, i + 1).join("-")).reverse();
  }
  function getPossibleLocales(refLocale, fallbackLocale = getOptions().fallbackLocale) {
    const locales = getSubLocales(refLocale);
    if (fallbackLocale) {
      return [.../* @__PURE__ */ new Set([...locales, ...getSubLocales(fallbackLocale)])];
    }
    return locales;
  }
  function getCurrentLocale() {
    return current != null ? current : void 0;
  }
  internalLocale.subscribe((newLocale) => {
    current = newLocale != null ? newLocale : void 0;
    if (typeof window !== "undefined" && newLocale != null) {
      document.documentElement.setAttribute("lang", newLocale);
    }
  });
  const set = (newLocale) => {
    if (newLocale && getClosestAvailableLocale(newLocale) && hasLocaleQueue(newLocale)) {
      const { loadingDelay } = getOptions();
      let loadingTimer;
      if (typeof window !== "undefined" && getCurrentLocale() != null && loadingDelay) {
        loadingTimer = window.setTimeout(
          () => $isLoading.set(true),
          loadingDelay
        );
      } else {
        $isLoading.set(true);
      }
      return flush(newLocale).then(() => {
        internalLocale.set(newLocale);
      }).finally(() => {
        clearTimeout(loadingTimer);
        $isLoading.set(false);
      });
    }
    return internalLocale.set(newLocale);
  };
  const $locale = __spreadProps(__spreadValues$1({}, internalLocale), {
    set
  });

  const monadicMemoize = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    const memoizedFn = (arg) => {
      const cacheKey = JSON.stringify(arg);
      if (cacheKey in cache) {
        return cache[cacheKey];
      }
      return cache[cacheKey] = fn(arg);
    };
    return memoizedFn;
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const getIntlFormatterOptions = (type, name) => {
    const { formats } = getOptions();
    if (type in formats && name in formats[type]) {
      return formats[type][name];
    }
    throw new Error(`[svelte-i18n] Unknown "${name}" ${type} format.`);
  };
  const createNumberFormatter = monadicMemoize(
    (_a) => {
      var _b = _a, { locale, format } = _b, options = __objRest(_b, ["locale", "format"]);
      if (locale == null) {
        throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
      }
      if (format) {
        options = getIntlFormatterOptions("number", format);
      }
      return new Intl.NumberFormat(locale, options);
    }
  );
  const createDateFormatter = monadicMemoize(
    (_c) => {
      var _d = _c, { locale, format } = _d, options = __objRest(_d, ["locale", "format"]);
      if (locale == null) {
        throw new Error('[svelte-i18n] A "locale" must be set to format dates');
      }
      if (format) {
        options = getIntlFormatterOptions("date", format);
      } else if (Object.keys(options).length === 0) {
        options = getIntlFormatterOptions("date", "short");
      }
      return new Intl.DateTimeFormat(locale, options);
    }
  );
  const createTimeFormatter = monadicMemoize(
    (_e) => {
      var _f = _e, { locale, format } = _f, options = __objRest(_f, ["locale", "format"]);
      if (locale == null) {
        throw new Error(
          '[svelte-i18n] A "locale" must be set to format time values'
        );
      }
      if (format) {
        options = getIntlFormatterOptions("time", format);
      } else if (Object.keys(options).length === 0) {
        options = getIntlFormatterOptions("time", "short");
      }
      return new Intl.DateTimeFormat(locale, options);
    }
  );
  const getNumberFormatter = (_g = {}) => {
    var _h = _g, {
      locale = getCurrentLocale()
    } = _h, args = __objRest(_h, [
      "locale"
    ]);
    return createNumberFormatter(__spreadValues({ locale }, args));
  };
  const getDateFormatter = (_i = {}) => {
    var _j = _i, {
      locale = getCurrentLocale()
    } = _j, args = __objRest(_j, [
      "locale"
    ]);
    return createDateFormatter(__spreadValues({ locale }, args));
  };
  const getTimeFormatter = (_k = {}) => {
    var _l = _k, {
      locale = getCurrentLocale()
    } = _l, args = __objRest(_l, [
      "locale"
    ]);
    return createTimeFormatter(__spreadValues({ locale }, args));
  };
  const getMessageFormatter = monadicMemoize(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (message, locale = getCurrentLocale()) => new IntlMessageFormat(message, locale, getOptions().formats, {
      ignoreTag: getOptions().ignoreTag
    })
  );

  const formatMessage = (id, options = {}) => {
    var _a, _b, _c, _d;
    let messageObj = options;
    if (typeof id === "object") {
      messageObj = id;
      id = messageObj.id;
    }
    const {
      values,
      locale = getCurrentLocale(),
      default: defaultValue
    } = messageObj;
    if (locale == null) {
      throw new Error(
        "[svelte-i18n] Cannot format a message without first setting the initial locale."
      );
    }
    let message = lookup(id, locale);
    if (!message) {
      message = (_d = (_c = (_b = (_a = getOptions()).handleMissingMessage) == null ? void 0 : _b.call(_a, { locale, id, defaultValue })) != null ? _c : defaultValue) != null ? _d : id;
    } else if (typeof message !== "string") {
      console.warn(
        `[svelte-i18n] Message with id "${id}" must be of type "string", found: "${typeof message}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
      );
      return message;
    }
    if (!values) {
      return message;
    }
    let result = message;
    try {
      result = getMessageFormatter(message, locale).format(values);
    } catch (e) {
      if (e instanceof Error) {
        console.warn(
          `[svelte-i18n] Message "${id}" has syntax error:`,
          e.message
        );
      }
    }
    return result;
  };
  const formatTime = (t, options) => {
    return getTimeFormatter(options).format(t);
  };
  const formatDate = (d, options) => {
    return getDateFormatter(options).format(d);
  };
  const formatNumber = (n, options) => {
    return getNumberFormatter(options).format(n);
  };
  const getJSON = (id, locale = getCurrentLocale()) => {
    return lookup(id, locale);
  };
  const $format = derived([$locale, $dictionary], () => formatMessage);
  derived([$locale], () => formatTime);
  derived([$locale], () => formatDate);
  derived([$locale], () => formatNumber);
  derived([$locale, $dictionary], () => getJSON);

  const diffObj = (changed, original) => {
    const changes = (object, base) => _.transform(
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
      }
      /* Omit accumulator */
    );
    return changes(changed, original);
  };

  const en_US = {
    ID: "en_US",
    NAME: "English (US)",
    STARTING: "Starting<br>Manga OnlineViewer",
    RESUME: "Resuming reading from Page ",
    WAITING: "Please wait, 3 seconds...",
    CHOOSE_BEGINNING: "Choose the Page to start from:",
    BUTTON_START: "Start Manga OnlineViewer",
    SETTINGS: "Settings",
    LANGUAGE: "Language",
    COLOR_SCHEME: "Color Scheme",
    THEME: "Theme",
    THEME_HUE: "Theme Primary Color Hue",
    THEME_SHADE: "Theme Primary Color Shade",
    DEFAULT_LOAD_MODE: "Default Load Mode",
    LOAD_MODE_NORMAL: "Normal(Wait 3 sec)",
    LOAD_MODE_ALWAYS: "Always(Immediately)",
    LOAD_MODE_NEVER: "Never(Manually)",
    LOAD_SPEED: "Load Speed Pages/Second",
    DEFAULT_ZOOM: "Default Zoom (between 5 and 200)",
    DEFAULT_ZOOM_MODE: "Default Zoom Mode",
    MINIMUM_ZOOM: "Minimum Zoom relative to the width of screen (between 30 and 100)",
    ZOOM_STEP: "Zoom Change Step (between 5 and 50)",
    DEFAULT_VIEW_MODE: "Default View Mode",
    VIEW_MODE_VERTICAL: "Vertical",
    VIEW_MODE_LEFT: "Left to Right",
    VIEW_MODE_RIGHT: "Right to Left",
    VIEW_MODE_WEBCOMIC: "WebComic",
    FIT_WIDTH_OVERSIZED: "Fit Width if Oversized",
    SHOW_THUMBNAILS: "Show Thumbnails",
    ENABLE_COMMENTS: "Capture Comments (When available)",
    HIDE_CONTROLS: "Always Hide Page Controls",
    HEADER_TYPE: "Change Header Type",
    HEADER_HOVER: "Hover",
    HEADER_SCROLL: "Scroll",
    HEADER_CLICK: "Click",
    HEADER_FIXED: "Fixed",
    HEADER_SIMPLE: "Simple",
    BUTTON_DOWNLOAD: "Download",
    DOWNLOAD_ZIP: "Download Zip file",
    DOWNLOAD_IMAGES: "Download Images as Zip Automatically",
    BUTTON_NEXT: "Next",
    NEXT_CHAPTER: "Next Chapter",
    BUTTON_PREVIOUS: "Previous",
    PREVIOUS_CHAPTER: "Previous Chapter",
    BOOKMARKS: "Bookmarks",
    BOOKMARK: "Bookmark",
    BOOKMARK_REMOVED: "Bookmark Removed",
    BOOKMARK_SAVED: "Bookmark Saved",
    BOOKMARK_MESSAGE: "Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)",
    KEYBINDINGS: "Keybindings",
    EDIT_KEYBINDS: "Edit KeyBindings",
    SAVE_KEYBINDS: "Save KeyBindings",
    BUTTON_EDIT: "Edit",
    BUTTON_SAVE: "Save",
    KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,
    ATTENTION: "Attention",
    WARNING: "Warning",
    BUTTON_RESET_SETTINGS: "Reset Settings",
    SETTINGS_RESET: "Settings have been reset, reload the page to take effect",
    LANGUAGE_CHANGED: "Language has been changed, reload the page to take effect",
    AUTO_DOWNLOAD: "Next time a chapter finish loading you will be prompted to save automatically",
    LAZY_LOAD: "Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",
    LAZY_LOAD_IMAGES_ENABLE: "Enable Lazy Load Images",
    LAZY_LOAD_IMAGES: "Lazy Start From Page (between 5 and 100)",
    RETURN_CHAPTER_LIST: "Return to Chapter List",
    PAGES_LOADED: "Pages Loaded",
    GO_TO_PAGE: "Go to Page",
    ENLARGE: "Enlarge",
    RESTORE: "Restore",
    REDUCE: "Restore",
    FIT_WIDTH: "Fit Width",
    FIT_HEIGHT: "Fit Height",
    PERCENT: "Percent",
    TOGGLE_CONTROLS: "Toggle page controls",
    ZOOM_IN: "Zoom In",
    ZOOM_OUT: "Zoom Out",
    ZOOM_RESET: "Zoom Reset",
    ZOOM_WIDTH: "Zoom to Width",
    ZOOM_HEIGHT: "Zoom to Height",
    HIDE: "Hide",
    RELOAD: "Reload",
    SLOWLY: "Slowly",
    NORMAL: "Normal",
    FAST: "Fast",
    EXTREME: "Extreme",
    ALL_PAGES: "All Pages",
    SPEED_WARNING: "Loading Speed too High",
    SPEED_WARNING_MESSAGE: "This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!",
    SCROLL_UP: "Scroll Up",
    SCROLL_DOWN: "Scroll Down",
    CLOSE: "Close",
    LIST_EMPTY: "List Empty",
    DISPLAY_COMMENTS: "Display Comments",
    COMMENTS: "Comments Section",
    SCROLL_START: "Toggle Auto Scroll",
    AUTO_SCROLL_HEIGHT: "Auto Scroll Speed in Pixels",
    VERTICAL_SEPARATOR: "Show Vertical Separators",
    END: "End"
  };

  const pt_BR = {
    ID: "pt_BR",
    NAME: "Portugues (Brasil)",
    STARTING: "Iniciando<br>Manga OnlineViewer",
    RESUME: "Continuando leitura na Pagina ",
    WAITING: "Por Favor espere, 3 segundos...",
    CHOOSE_BEGINNING: "Escolha a pagina de onde começar:",
    BUTTON_START: "Iniciar Manga OnlineViewer",
    SETTINGS: "Configurações",
    LANGUAGE: "Idioma",
    COLOR_SCHEME: "Esquema de Color",
    THEME: "Tema",
    THEME_HUE: "Coloração primaria",
    THEME_SHADE: "Saturação de Cor",
    DEFAULT_LOAD_MODE: "Forma de Carregamento Padrão",
    LOAD_MODE_NORMAL: "Normal(Esperando 3 sec)",
    LOAD_MODE_ALWAYS: "Sempre(Imediatamente)",
    LOAD_MODE_NEVER: "Nunca(Manualmente)",
    LOAD_SPEED: "Velocidade de Carregamento Paginas/Segundo",
    DEFAULT_ZOOM: "Zoom padrão (entre 5 e 200)",
    DEFAULT_ZOOM_MODE: "Modo de Zoom padrão",
    MINIMUM_ZOOM: "Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",
    ZOOM_STEP: "Precisão da Mudança do Zoom (entre 5 e 50)",
    DEFAULT_VIEW_MODE: "Modo de Visualização Padrão",
    VIEW_MODE_VERTICAL: "Vertical",
    VIEW_MODE_LEFT: "Esquerda para Direita",
    VIEW_MODE_RIGHT: "Direita para Esquerda",
    VIEW_MODE_WEBCOMIC: "WebComic",
    FIT_WIDTH_OVERSIZED: "Encher a tela se grande demais",
    SHOW_THUMBNAILS: "Mostra Miniaturas",
    ENABLE_COMMENTS: "Capturar comentários (quando disponível)",
    HIDE_CONTROLS: "Sempre esconder controles das paginas",
    HEADER_TYPE: "Mudar Tipo de Cabeçalho",
    HEADER_HOVER: "Passar por perto",
    HEADER_SCROLL: "Rolagem do Mouse",
    HEADER_CLICK: "Click",
    HEADER_FIXED: "Fixo",
    HEADER_SIMPLE: "Simples",
    BUTTON_DOWNLOAD: "Download",
    DOWNLOAD_ZIP: "Baixar arquivo Zip",
    DOWNLOAD_IMAGES: "Download das Imagens como Zip Automaticamente",
    BUTTON_NEXT: "Proximo",
    NEXT_CHAPTER: "Proximo Capitulo",
    BUTTON_PREVIOUS: "Anterior",
    PREVIOUS_CHAPTER: "Capitulo Anterior",
    BOOKMARKS: "Marca paginas",
    BOOKMARK: "Marcar pagina",
    BOOKMARK_REMOVED: "Marca pagina Removido",
    BOOKMARK_SAVED: "Marca pagina Salvo",
    BOOKMARK_MESSAGE: "Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)",
    KEYBINDINGS: "Atalhos",
    EDIT_KEYBINDS: "Editar Atalhos",
    SAVE_KEYBINDS: "Salvar Atalhos",
    BUTTON_EDIT: "Editar",
    BUTTON_SAVE: "Salvar",
    KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,
    ATTENTION: "Atenção",
    WARNING: "Alerta",
    BUTTON_RESET_SETTINGS: "Limpar Configurações(Reset Settings)",
    SETTINGS_RESET: "Configurações foram limpas, recarregue o site para efetivar a alteração",
    LANGUAGE_CHANGED: "Idioma foi alterado, recarregue o site para efetivar a alteração",
    AUTO_DOWNLOAD: "Proxima vez que abrir um capitulo download iniciara automaticamente",
    LAZY_LOAD: "Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",
    LAZY_LOAD_IMAGES_ENABLE: "Ativar Carregamento de imagens preguiçoso",
    LAZY_LOAD_IMAGES: "Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",
    RETURN_CHAPTER_LIST: "Voltar a lista de Capitulos",
    PAGES_LOADED: "Paginas Carregadas",
    GO_TO_PAGE: "Pular para",
    ENLARGE: "Aumentar",
    RESTORE: "Restaurar",
    REDUCE: "Diminuir",
    FIT_WIDTH: "Preencher Largura",
    FIT_HEIGHT: "Preencher Altura ",
    PERCENT: "Percentual",
    TOGGLE_CONTROLS: "Mostar controles de pagina",
    ZOOM_IN: "Mais Zoom",
    ZOOM_OUT: "Menos Zoom",
    ZOOM_RESET: "Resetar Zoom",
    ZOOM_WIDTH: "Zoom para Largura",
    ZOOM_HEIGHT: "Zoom para Altura",
    HIDE: "Esconder",
    RELOAD: "Recarregar",
    SLOWLY: "Devagar",
    NORMAL: "Normal",
    FAST: "Rapido",
    EXTREME: "Extremo",
    ALL_PAGES: "Todas as Paginas",
    SPEED_WARNING: "Velocidade de Carregamento muito alta",
    SPEED_WARNING_MESSAGE: "Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!",
    SCROLL_UP: "Subir Pagina",
    SCROLL_DOWN: "Descer Pagina",
    CLOSE: "Fechar",
    LIST_EMPTY: "Lista Vazia",
    DISPLAY_COMMENTS: "Mostar Comentarios",
    COMMENTS: "Seção de comentários",
    SCROLL_START: "Ativar Rolagem Automatica",
    AUTO_SCROLL_HEIGHT: "Velocidade da Rolagem Automatica em Pixels",
    VERTICAL_SEPARATOR: "Mostrar Separadores Verticais",
    END: "Fin"
  };

  const zh_CN = {
    ID: "zh_CN",
    NAME: "中文 (简体)",
    STARTING: "正在启动<br>Manga OnlineViewer",
    RESUME: "从页面继续阅读 ",
    WAITING: "请等待3秒钟...",
    CHOOSE_BEGINNING: "选择要开始的页数:",
    BUTTON_START: "启动Manga OnlineViewer",
    SETTINGS: "设置",
    LANGUAGE: "语言",
    COLOR_SCHEME: "配色方案",
    THEME: "主题",
    THEME_HUE: "主题色调",
    THEME_SHADE: "主题阴影",
    DEFAULT_LOAD_MODE: "默认加载模式",
    LOAD_MODE_NORMAL: "等待模式(等待3秒自动加载 )",
    LOAD_MODE_ALWAYS: "自动模式(无需等待)",
    LOAD_MODE_NEVER: "手动模式(点击启动)",
    LOAD_SPEED: "加载速度页数/秒",
    DEFAULT_ZOOM: "默认缩放 (最小 5 最大 200)",
    DEFAULT_ZOOM_MODE: "默认缩放模式",
    MINIMUM_ZOOM: "相对于屏幕宽度的最小缩放 (最小 30 最大 100)",
    ZOOM_STEP: "缩放级别 (最小 5 最大 50)",
    DEFAULT_VIEW_MODE: "默认视图模式",
    VIEW_MODE_VERTICAL: "垂直有缝",
    VIEW_MODE_LEFT: "从左到右",
    VIEW_MODE_RIGHT: "从右到左",
    VIEW_MODE_WEBCOMIC: "垂直无缝",
    FIT_WIDTH_OVERSIZED: "如果尺寸过大、则适合宽度",
    SHOW_THUMBNAILS: "显示缩略图",
    ENABLE_COMMENTS: "捕获评论（如果可用）",
    HIDE_CONTROLS: "始终隐藏页面控件",
    HEADER_TYPE: "更改标题显示方式",
    HEADER_HOVER: "悬停",
    HEADER_SCROLL: "滚动",
    HEADER_CLICK: "点击",
    HEADER_FIXED: "固定",
    HEADER_SIMPLE: "简单",
    BUTTON_DOWNLOAD: "下载",
    DOWNLOAD_ZIP: "下载压缩文件",
    DOWNLOAD_IMAGES: "自动将图片下载成ZIP",
    BUTTON_NEXT: "下一页",
    NEXT_CHAPTER: "下一章",
    BUTTON_PREVIOUS: "上一页",
    PREVIOUS_CHAPTER: "上一章",
    BOOKMARKS: "书签",
    BOOKMARK: "Bookmark",
    BOOKMARK_REMOVED: "删除书签",
    BOOKMARK_SAVED: "保存书签",
    BOOKMARK_MESSAGE: "下次打开本章时，将从:<h4>页码 ##num##</h4>(<i>仅一次</i> 每个书签)",
    KEYBINDINGS: "快捷键",
    EDIT_KEYBINDS: "编辑键绑定",
    SAVE_KEYBINDS: "保存键绑定",
    BUTTON_EDIT: "编辑",
    BUTTON_SAVE: "救",
    KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. </br>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,
    ATTENTION: "注意",
    WARNING: "警告",
    BUTTON_RESET_SETTINGS: "重置设置(Reset Settings)",
    SETTINGS_RESET: "设置已重置、重新加载页面才能生效",
    LANGUAGE_CHANGED: "语言已更改、重新加载页面才能生效",
    AUTO_DOWNLOAD: "下次章节加载完成时、系统将提示您自动保存",
    LAZY_LOAD: "延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",
    LAZY_LOAD_IMAGES_ENABLE: "启用延迟加载图像",
    LAZY_LOAD_IMAGES: "惰性加载从页面 (最小 5 最大 100)",
    RETURN_CHAPTER_LIST: "返回章节列表",
    PAGES_LOADED: "已加载的页数",
    GO_TO_PAGE: "转到页数",
    ENLARGE: "放大",
    RESTORE: "还原",
    REDUCE: "缩小",
    FIT_WIDTH: "适合宽度",
    FIT_HEIGHT: "适合高度",
    PERCENT: "百分之",
    TOGGLE_CONTROLS: "显示隐藏页面控件",
    ZOOM_IN: "放大",
    ZOOM_OUT: "缩小",
    ZOOM_RESET: "还原",
    ZOOM_WIDTH: "适合宽度",
    ZOOM_HEIGHT: "适合高度",
    HIDE: "显示隐藏页面控件",
    RELOAD: "重新加载",
    SLOWLY: "慢速",
    NORMAL: "正常",
    FAST: "快速",
    EXTREME: "极端",
    ALL_PAGES: "所有页面",
    SPEED_WARNING: "加载速度过高",
    SPEED_WARNING_MESSAGE: "不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!",
    SCROLL_UP: "向上滚动",
    SCROLL_DOWN: "向下滚动",
    CLOSE: "关闭",
    LIST_EMPTY: "没有收藏书签",
    DISPLAY_COMMENTS: "显示注释",
    COMMENTS: "评论部分",
    SCROLL_START: "切换自动滚动",
    AUTO_SCROLL_HEIGHT: "自动滚动速度（以像素为单位）",
    VERTICAL_SEPARATOR: "显示垂直分隔符",
    END: "结尾"
  };

  const es_ES = {
    ID: "es_ES",
    NAME: "Español (ES)",
    STARTING: "Iniciando<br>Manga OnlineViewer",
    RESUME: "Continuando lectura desde la Página ",
    WAITING: "Por favor espere, 3 segundos...",
    CHOOSE_BEGINNING: "Elija la página en la que comenzar:",
    BUTTON_START: "Iniciar Manga OnlineViewer",
    SETTINGS: "Ajustes",
    LANGUAGE: "Idioma",
    COLOR_SCHEME: "Esquema de color",
    THEME: "Tema",
    THEME_HUE: "Matiz del color primario",
    THEME_SHADE: "Saturación del color primario",
    DEFAULT_LOAD_MODE: "Modo de carga por defecto",
    LOAD_MODE_NORMAL: "Normal (Espera 3s)",
    LOAD_MODE_ALWAYS: "Siempre (Inmediatamente)",
    LOAD_MODE_NEVER: "Nunca (Manualmente)",
    LOAD_SPEED: "Velocidad carga página/segundo",
    DEFAULT_ZOOM: "Zoom por defecto (entre 5 y 200)",
    DEFAULT_ZOOM_MODE: "Modo de zoom por defecto",
    MINIMUM_ZOOM: "Zoom mínimo relativo al ancho de la pantalla",
    ZOOM_STEP: "Paso entre cambios de zoom (entre 5 y 50)",
    DEFAULT_VIEW_MODE: "Modo de visualización por defecto",
    VIEW_MODE_VERTICAL: "Vertical",
    VIEW_MODE_LEFT: "Izquierda a derecha",
    VIEW_MODE_RIGHT: "Derecha a izquierda",
    VIEW_MODE_WEBCOMIC: "WebComic",
    FIT_WIDTH_OVERSIZED: "Ajustar ancho si es demasiado grande",
    SHOW_THUMBNAILS: "Mostrar miniaturas",
    ENABLE_COMMENTS: "Capturar comentarios (cuando esté disponible)",
    HIDE_CONTROLS: "Ocultar siempre la barra de controles",
    HEADER_TYPE: "Cambiar tipo de cabecera",
    HEADER_HOVER: "Pasar por encima",
    HEADER_SCROLL: "Desplazamiento",
    HEADER_CLICK: "Hacer click",
    HEADER_FIXED: "Fijo",
    HEADER_SIMPLE: "Sencillo",
    BUTTON_DOWNLOAD: "Descargar",
    DOWNLOAD_ZIP: "Descargar fichero Zip",
    DOWNLOAD_IMAGES: "Autodescargar imágenes como Zip",
    BUTTON_NEXT: "Siguiente",
    NEXT_CHAPTER: "Siguiente capítulo",
    BUTTON_PREVIOUS: "Anterior",
    PREVIOUS_CHAPTER: "Capítulo anterior",
    BOOKMARKS: "Marcadores",
    BOOKMARK: "Marcador",
    BOOKMARK_REMOVED: "Marcador eliminado",
    BOOKMARK_SAVED: "Marcador guardado",
    BOOKMARK_MESSAGE: "La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)",
    KEYBINDINGS: "Atajos de teclado",
    EDIT_KEYBINDS: "Editar atajos",
    SAVE_KEYBINDS: "Guardar atajos",
    BUTTON_EDIT: "Editar",
    BUTTON_SAVE: "Guardar",
    KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,
    ATTENTION: "Atención",
    WARNING: "Alerta",
    BUTTON_RESET_SETTINGS: "Reiniciar ajustes(Reset Settings)",
    SETTINGS_RESET: "Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",
    LANGUAGE_CHANGED: "Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",
    AUTO_DOWNLOAD: "La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",
    LAZY_LOAD: "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
    LAZY_LOAD_IMAGES_ENABLE: "Habilitar carga de imágenes diferida",
    LAZY_LOAD_IMAGES: "Empezar carga diferida a partir de la página (entre 5 y 100)",
    RETURN_CHAPTER_LIST: "Regresar a la lista de capítulos",
    PAGES_LOADED: "Páginas cargadas",
    GO_TO_PAGE: "Ir a página",
    ENLARGE: "Agrandar",
    RESTORE: "Restaurar",
    REDUCE: "Reducir",
    FIT_WIDTH: "Ajustar al ancho",
    FIT_HEIGHT: "Ajustar al alto",
    PERCENT: "Porcentual",
    TOGGLE_CONTROLS: "Alternar controles de página",
    ZOOM_IN: "Acercar",
    ZOOM_OUT: "Alejar",
    ZOOM_RESET: "Restablecer zoom",
    ZOOM_WIDTH: "Zoom al ancho",
    ZOOM_HEIGHT: "Zoom al alto",
    HIDE: "Ocultar",
    RELOAD: "Recargar",
    SLOWLY: "Lento",
    NORMAL: "Normal",
    FAST: "Rápido",
    EXTREME: "Extremo",
    ALL_PAGES: "Todas las páginas",
    SPEED_WARNING: "Velocidad de carga muy alta",
    SPEED_WARNING_MESSAGE: "No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!",
    SCROLL_UP: "Desplazar arriba",
    SCROLL_DOWN: "Desplazar abajo",
    CLOSE: "Cerrar",
    LIST_EMPTY: "Lista vacía",
    DISPLAY_COMMENTS: "Mostrar comentarios",
    COMMENTS: "Sección de comentarios",
    SCROLL_START: "Alternar desplazamiento automático",
    AUTO_SCROLL_HEIGHT: "Velocidad de desplazamiento automático en píxeles",
    VERTICAL_SEPARATOR: "Mostrar separadores verticales",
    END: "Fin"
  };

  const locales = [en_US, es_ES, pt_BR, zh_CN];

  const defaultSettings = {
    locale: "en_US",
    theme: "darkblue",
    customTheme: "#263e3a",
    themeShade: 600,
    colorScheme: "dark",
    fitWidthIfOversize: true,
    showThumbnails: true,
    enableComments: true,
    downloadZip: false,
    verticalSeparator: false,
    throttlePageLoad: 1e3,
    zoomMode: "percent",
    defaultZoom: 100,
    zoomStep: 25,
    minZoom: 30,
    loadMode: "wait",
    viewMode: "WebComic",
    bookmarks: [],
    lazyLoadImages: false,
    lazyStart: 50,
    hidePageControls: false,
    header: "hover",
    maxReload: 5,
    scrollHeight: 20,
    keybinds: {
      SCROLL_UP: ["up", "W", "num_8"],
      SCROLL_DOWN: ["down", "S", "num_2"],
      NEXT_CHAPTER: ["right", "/", "D", "num_6"],
      PREVIOUS_CHAPTER: ["left", ";", "A", "num_4"],
      ENLARGE: ["-", "num_add", "E"],
      REDUCE: ["=", "num_subtract", "Q"],
      RESTORE: ["9", "num_divide", "R"],
      FIT_WIDTH: ["0", "num_multiply", "F"],
      FIT_HEIGHT: ["H"],
      SETTINGS: ["num_divide", "num_5", "X"],
      VIEW_MODE_WEBCOMIC: ["C"],
      VIEW_MODE_VERTICAL: ["V"],
      VIEW_MODE_LEFT: ["N"],
      VIEW_MODE_RIGHT: ["B"],
      SCROLL_START: ["space"]
    }
  };
  const getDefault = () => !isMobile() ? defaultSettings : _.defaultsDeep(
    {
      lazyLoadImages: true,
      fitWidthIfOversize: true,
      showThumbnails: false,
      viewMode: "WebComic",
      header: "click"
    },
    defaultSettings
  );
  const settings$2 = writable(
    _.defaultsDeep(getSettings(defaultSettings), defaultSettings)
  );
  locales.forEach((locale) => addMessages(locale.ID, locale));
  init({
    fallbackLocale: "en_US",
    initialLocale: get(settings$2).locale
  });
  settingsChangeListener((newValue) => {
    const newSettings = _.defaultsDeep(newValue, getDefault());
    const diff = diffObj(newSettings, get(settings$2));
    if (!isNothing(diff)) {
      logScript("Imported Settings", diff);
      settings$2.set(newSettings);
      document.getElementById("MangaOnlineViewer")?.dispatchEvent(new Event("hydrate"));
    }
  });
  function getUserSettings() {
    return get(settings$2);
  }
  function getLocaleString(name) {
    const locale = locales.find((l) => l.ID === get(settings$2).locale);
    if (locale?.[name]) {
      return locale[name];
    }
    if (locales?.at(1)?.[name]) {
      return locales[1][name];
    }
    return "##MISSING_STRING##";
  }
  function updateSettings(newValue) {
    logScript(JSON.stringify(newValue));
    settings$2.update((_settings) => ({ ..._settings, ...newValue }));
    setSettings(diffObj(get(settings$2), getDefault()));
  }
  function resetSettings() {
    getListGM().forEach((setting) => {
      removeValueGM(setting);
    });
    updateSettings(getDefault());
  }
  function isBookmarked(url = window.location.href) {
    return get(settings$2).bookmarks.find((el) => el.url === url)?.page;
  }
  const bookmarkTimeLimit = 1e3 * 60 * 60 * 24 * 30 * 12;
  const refreshedBookmark = get(settings$2).bookmarks.filter(
    (el) => Date.now() - new Date(el.date).valueOf() < bookmarkTimeLimit
  );
  if (get(settings$2).bookmarks.length !== refreshedBookmark.length) {
    updateSettings({ bookmarks: refreshedBookmark });
  }

  // generated during release, do not modify

  const PUBLIC_VERSION = '5';

  if (typeof window !== 'undefined')
  	// @ts-ignore
  	(window.__svelte ||= { v: new Set() }).v.add(PUBLIC_VERSION);

  enable_legacy_mode_flag();

  var root$M = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path><path d="M18 14v7"></path><path d="M18 3v7"></path><path d="M15 18l3 3l3 -3"></path><path d="M15 6l3 -3l3 3"></path></svg>`);

  function Arrow_autofit_height($$anchor) {
  	var svg = root$M();

  	append($$anchor, svg);
  }

  var root$L = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path><path d="M10 18h-7"></path><path d="M21 18h-7"></path><path d="M6 15l-3 3l3 3"></path><path d="M18 15l3 3l-3 3"></path></svg>`);

  function Arrow_autofit_width($$anchor) {
  	var svg = root$L();

  	append($$anchor, svg);
  }

  var root$K = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"></path></svg>`);

  function Bookmark($$anchor) {
  	var svg = root$K();

  	append($$anchor, svg);
  }

  var root$J = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"></path><path d="M3 3l18 18"></path></svg>`);

  function Bookmark_off($$anchor) {
  	var svg = root$J();

  	append($$anchor, svg);
  }

  var root$I = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>`);

  function Eye($$anchor) {
  	var svg = root$I();

  	append($$anchor, svg);
  }

  var root$H = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path><path d="M3 3l18 18"></path></svg>`);

  function Eye_off($$anchor) {
  	var svg = root$H();

  	append($$anchor, svg);
  }

  var root$G = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path></svg>`);

  function Refresh($$anchor) {
  	var svg = root$G();

  	append($$anchor, svg);
  }

  var root$F = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M8 8l4 4"></path><path d="M12 8l-4 4"></path><path d="M21 21l-6 -6"></path></svg>`);

  function Zoom_cancel($$anchor) {
  	var svg = root$F();

  	append($$anchor, svg);
  }

  var root$E = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M7 10l6 0"></path><path d="M10 7l0 6"></path><path d="M21 21l-6 -6"></path></svg>`);

  function Zoom_in($$anchor) {
  	var svg = root$E();

  	append($$anchor, svg);
  }

  var root$D = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M7 10l6 0"></path><path d="M21 21l-6 -6"></path></svg>`);

  function Zoom_out($$anchor) {
  	var svg = root$D();

  	append($$anchor, svg);
  }

  var root$C = template(`<div class="MangaPage"><div class="PageFunctions"><button class="Bookmark ControlButton"><!> <!></button> <button class="ZoomIn ControlButton"><!></button> <button class="ZoomRestore ControlButton"><!></button> <button class="ZoomOut ControlButton"><!></button> <button class="ZoomWidth ControlButton"><!></button> <button class="ZoomHeight ControlButton"><!></button> <button class="Hide ControlButton"><!> <!></button> <button class="Reload ControlButton"><!></button> <span class="PageIndex"> </span></div> <div class="PageContent"><img alt="" class="PageImg"></div></div>`);

  function MangaPage($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	const src = prop($$props, "src", 3, '');
  	var div = root$C();
  	var div_1 = child(div);
  	var button = child(div_1);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('BOOKMARK')));

  	var node = child(button);

  	Bookmark(node);

  	var node_1 = sibling(node, 2);

  	Bookmark_off(node_1);

  	var button_1 = sibling(button, 2);

  	template_effect(() => set_attribute(button_1, "title", $getLocaleString()('ZOOM_IN')));

  	var node_2 = child(button_1);

  	Zoom_in(node_2);

  	var button_2 = sibling(button_1, 2);

  	template_effect(() => set_attribute(button_2, "title", $getLocaleString()('ZOOM_RESET')));

  	var node_3 = child(button_2);

  	Zoom_cancel(node_3);

  	var button_3 = sibling(button_2, 2);

  	template_effect(() => set_attribute(button_3, "title", $getLocaleString()('ZOOM_OUT')));

  	var node_4 = child(button_3);

  	Zoom_out(node_4);

  	var button_4 = sibling(button_3, 2);

  	template_effect(() => set_attribute(button_4, "title", $getLocaleString()('ZOOM_WIDTH')));

  	var node_5 = child(button_4);

  	Arrow_autofit_width(node_5);

  	var button_5 = sibling(button_4, 2);

  	template_effect(() => set_attribute(button_5, "title", $getLocaleString()('ZOOM_HEIGHT')));

  	var node_6 = child(button_5);

  	Arrow_autofit_height(node_6);

  	var button_6 = sibling(button_5, 2);

  	template_effect(() => set_attribute(button_6, "title", $getLocaleString()('HIDE')));

  	var node_7 = child(button_6);

  	Eye(node_7);

  	var node_8 = sibling(node_7, 2);

  	Eye_off(node_8);

  	var button_7 = sibling(button_6, 2);

  	template_effect(() => set_attribute(button_7, "title", $getLocaleString()('RELOAD')));

  	var node_9 = child(button_7);

  	Refresh(node_9);

  	var span = sibling(button_7, 2);
  	var text = child(span);

  	var div_2 = sibling(div_1, 2);
  	var img = child(div_2);

  	template_effect(() => {
  		set_attribute(div, "id", `Page${$$props.index ?? ""}`);
  		set_text(text, $$props.index);
  		set_attribute(img, "id", `PageImg${$$props.index ?? ""}`);
  		set_attribute(img, "src", src());
  	});

  	append($$anchor, div);
  	pop();
  }

  var root$B = template(`<main id="Chapter"></main>`);

  function Reader($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	var main = root$B();

  	each(main, 21, () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin), index, ($$anchor, index) => {
  		MangaPage($$anchor, {
  			get index() {
  				return get$1(index);
  			}
  		});
  	});

  	template_effect(() => set_class(main, `${($settings().fitWidthIfOversize ? 'fitWidthIfOversize' : '') ?? ""}
      ${$settings().viewMode ?? ""}`));

  	append($$anchor, main);
  	pop();
  }

  var root$A = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path><path d="M18 4v17"></path><path d="M15 18l3 3l3 -3"></path></svg>`);

  function Arrow_autofit_down($$anchor) {
  	var svg = root$A();

  	append($$anchor, svg);
  }

  var root$z = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"></path><path d="M20 18h-17"></path><path d="M6 15l-3 3l3 3"></path></svg>`);

  function Arrow_autofit_left($$anchor) {
  	var svg = root$z();

  	append($$anchor, svg);
  }

  var root$y = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"></path><path d="M4 18h17"></path><path d="M18 15l3 3l-3 3"></path></svg>`);

  function Arrow_autofit_right($$anchor) {
  	var svg = root$y();

  	append($$anchor, svg);
  }

  var root$x = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path></svg>`);

  function Arrow_big_left($$anchor) {
  	var svg = root$x();

  	append($$anchor, svg);
  }

  var root$w = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path></svg>`);

  function Arrow_big_right($$anchor) {
  	var svg = root$w();

  	append($$anchor, svg);
  }

  var root$v = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"></path><path d="M11 3h5a3 3 0 0 1 3 3v11"></path></svg>`);

  function Bookmarks($$anchor) {
  	var svg = root$v();

  	append($$anchor, svg);
  }

  var root$u = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M12 17v-6"></path><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path></svg>`);

  function File_download($$anchor) {
  	var svg = root$u();

  	append($$anchor, svg);
  }

  var root$t = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M6 10l0 .01"></path><path d="M10 10l0 .01"></path><path d="M14 10l0 .01"></path><path d="M18 10l0 .01"></path><path d="M6 14l0 .01"></path><path d="M18 14l0 .01"></path><path d="M10 14l4 .01"></path></svg>`);

  function Keyboard($$anchor) {
  	var svg = root$t();

  	append($$anchor, svg);
  }

  var root$s = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 6h9"></path><path d="M11 12h9"></path><path d="M12 18h8"></path><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path><path d="M6 10v-6l-2 2"></path></svg>`);

  function List_numbers($$anchor) {
  	var svg = root$s();

  	append($$anchor, svg);
  }

  var root$r = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3a9 9 0 1 0 9 9"></path></svg>`);

  function Loader_2($$anchor) {
  	var svg = root$r();

  	append($$anchor, svg);
  }

  var root$q = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`);

  function Menu_2($$anchor) {
  	var svg = root$q();

  	append($$anchor, svg);
  }

  var root$p = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path></svg>`);

  function Settings($$anchor) {
  	var svg = root$p();

  	append($$anchor, svg);
  }

  var root$o = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 13v4"></path><path d="M13 15h4"></path><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M22 22l-3 -3"></path><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M3 11v-1"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path><path d="M10 3h1"></path><path d="M15 3h1a2 2 0 0 1 2 2v1"></path></svg>`);

  function Zoom_in_area($$anchor) {
  	var svg = root$o();

  	append($$anchor, svg);
  }

  var root$n = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 17l-2.5 -2.5"></path><path d="M10 5l2 -2l2 2"></path><path d="M19 10l2 2l-2 2"></path><path d="M5 10l-2 2l2 2"></path><path d="M10 19l2 2l2 -2"></path></svg>`);

  function Zoom_pan($$anchor) {
  	var svg = root$n();

  	append($$anchor, svg);
  }

  var root$m = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 15h4"></path><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M22 22l-3 -3"></path><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M3 11v-1"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path><path d="M10 3h1"></path><path d="M15 3h1a2 2 0 0 1 2 2v1"></path></svg>`);

  function Zoom_out_area($$anchor) {
  	var svg = root$m();

  	append($$anchor, svg);
  }

  var root$l = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"></path><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M16 12h-8"></path></svg>`);

  function Spacing_vertical($$anchor) {
  	var svg = root$l();

  	append($$anchor, svg);
  }

  var root$k = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path></svg>`);

  function Player_pause($$anchor) {
  	var svg = root$k();

  	append($$anchor, svg);
  }

  var root$j = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>`);

  function Player_play($$anchor) {
  	var svg = root$j();

  	append($$anchor, svg);
  }

  var root$i = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>`);

  function Message($$anchor) {
  	var svg = root$i();

  	append($$anchor, svg);
  }

  var root_1$1 = template(`<option> </option>`);
  var root$h = template(`<div id="menu"><!></div> <header id="Header"><aside id="GlobalFunctions"><span><button id="enlarge" class="ControlButton"><!></button> <button id="restore" class="ControlButton"><!></button> <button id="reduce" class="ControlButton"><!></button> <button id="fitWidth" class="ControlButton"><!></button> <button id="fitHeight" class="ControlButton"><!></button> <button id="keybindings" class="ControlButton"><!></button> <button id="AutoScroll" class="ControlButton phones"><!> <!></button></span> <span><button id="ltrMode" class="ControlButton"><!></button> <button id="verticalMode" class="ControlButton tablets"><!></button> <button id="webComic" class="ControlButton tablets"><!></button> <button id="rtlMode" class="ControlButton"><!></button> <button id="pageControls" class="ControlButton tablets"><!></button> <button id="bookmarks" class="ControlButton tablets"><!></button> <button id="settings" class="ControlButton tablets phones"><!></button></span> <span id="ZoomSlider"><output id="ZoomVal" class="RangeValue" for="Zoom"> </output> <input type="range" name="Zoom" id="Zoom" min="1" max="200"></span></aside> <div class="ViewerTitle"><h1 id="MangaTitle"> </h1> <a id="series"> </a></div> <nav id="ChapterNavigation"><div id="Counters" class="ControlLabel"> <i>0</i> / <b> </b> <span class="ControlLabel"> </span> <select id="gotoPage"><option selected>#</option><!></select></div> <div id="ChapterControl" class="ChapterControl"><button id="CommentsButton"><!> </button> <button id="download" class="NavigationControlButton ControlButton disabled" type="button"><!> <!> </button> <a id="prev" class="NavigationControlButton ControlButton" type="button"><!> </a> <a id="next" class="NavigationControlButton ControlButton" type="button"> <!></a></div></nav></header>`, 1);

  function Header($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	var fragment = root$h();
  	var div = first_child(fragment);
  	var node = child(div);

  	Menu_2(node);

  	var header = sibling(div, 2);
  	var aside = child(header);
  	var span = child(aside);
  	var button = child(span);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('ENLARGE')));

  	var node_1 = child(button);

  	Zoom_in_area(node_1);

  	var button_1 = sibling(button, 2);

  	template_effect(() => set_attribute(button_1, "title", $getLocaleString()('RESTORE')));

  	var node_2 = child(button_1);

  	Zoom_pan(node_2);

  	var button_2 = sibling(button_1, 2);

  	template_effect(() => set_attribute(button_2, "title", $getLocaleString()('REDUCE')));

  	var node_3 = child(button_2);

  	Zoom_out_area(node_3);

  	var button_3 = sibling(button_2, 2);

  	template_effect(() => set_attribute(button_3, "title", $getLocaleString()('FIT_WIDTH')));

  	var node_4 = child(button_3);

  	Arrow_autofit_width(node_4);

  	var button_4 = sibling(button_3, 2);

  	template_effect(() => set_attribute(button_4, "title", $getLocaleString()('FIT_HEIGHT')));

  	var node_5 = child(button_4);

  	Arrow_autofit_height(node_5);

  	var button_5 = sibling(button_4, 2);

  	template_effect(() => set_attribute(button_5, "title", $getLocaleString()('KEYBINDINGS')));

  	var node_6 = child(button_5);

  	Keyboard(node_6);

  	var button_6 = sibling(button_5, 2);

  	template_effect(() => set_attribute(button_6, "title", $getLocaleString()('SCROLL_START')));

  	var node_7 = child(button_6);

  	Player_play(node_7);

  	var node_8 = sibling(node_7, 2);

  	Player_pause(node_8);

  	var span_1 = sibling(span, 2);
  	var button_7 = child(span_1);

  	template_effect(() => set_attribute(button_7, "title", $getLocaleString()('VIEW_MODE_LEFT')));

  	var node_9 = child(button_7);

  	Arrow_autofit_right(node_9);

  	var button_8 = sibling(button_7, 2);

  	template_effect(() => set_attribute(button_8, "title", $getLocaleString()('VIEW_MODE_VERTICAL')));

  	var node_10 = child(button_8);

  	Arrow_autofit_down(node_10);

  	var button_9 = sibling(button_8, 2);

  	template_effect(() => set_attribute(button_9, "title", $getLocaleString()('VIEW_MODE_WEBCOMIC')));

  	var node_11 = child(button_9);

  	Spacing_vertical(node_11);

  	var button_10 = sibling(button_9, 2);

  	template_effect(() => set_attribute(button_10, "title", $getLocaleString()('VIEW_MODE_RIGHT')));

  	var node_12 = child(button_10);

  	Arrow_autofit_left(node_12);

  	var button_11 = sibling(button_10, 2);

  	template_effect(() => set_attribute(button_11, "title", $getLocaleString()('TOGGLE_CONTROLS')));

  	var node_13 = child(button_11);

  	List_numbers(node_13);

  	var button_12 = sibling(button_11, 2);

  	template_effect(() => set_attribute(button_12, "title", $getLocaleString()('BOOKMARKS')));

  	var node_14 = child(button_12);

  	Bookmarks(node_14);

  	var button_13 = sibling(button_12, 2);

  	template_effect(() => set_attribute(button_13, "title", $getLocaleString()('SETTINGS')));

  	var node_15 = child(button_13);

  	Settings(node_15);

  	var span_2 = sibling(span_1, 2);
  	var output = child(span_2);
  	var text = child(output);

  	var input = sibling(output, 2);

  	var div_1 = sibling(aside, 2);
  	var h1 = child(div_1);
  	var text_1 = child(h1);

  	var a = sibling(h1, 2);
  	var text_2 = child(a);

  	template_effect(() => set_text(text_2, `(${$getLocaleString()('RETURN_CHAPTER_LIST') ?? ""})`));

  	var nav = sibling(div_1, 2);
  	var div_2 = child(nav);
  	var text_3 = child(div_2);

  	template_effect(() => set_text(text_3, `${$getLocaleString()('PAGES_LOADED') ?? ""}: `));

  	var b = sibling(text_3, 3);
  	var text_4 = child(b);

  	var span_3 = sibling(b, 2);
  	var text_5 = child(span_3);

  	template_effect(() => set_text(text_5, `${$getLocaleString()('GO_TO_PAGE') ?? ""}:`));

  	var select = sibling(span_3, 2);
  	var node_16 = sibling(child(select));

  	each(node_16, 17, () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin), index, ($$anchor, index) => {
  		var option = root_1$1();
  		var option_value = {};
  		var text_6 = child(option);

  		template_effect(() => {
  			if (option_value !== (option_value = get$1(index))) {
  				option.value = null == (option.__value = get$1(index)) ? "" : get$1(index);
  			}

  			set_text(text_6, get$1(index));
  		});

  		append($$anchor, option);
  	});

  	var div_3 = sibling(div_2, 2);
  	var button_14 = child(div_3);

  	template_effect(() => set_attribute(button_14, "title", $getLocaleString()('DISPLAY_COMMENTS')));

  	var node_17 = child(button_14);

  	Message(node_17);

  	var text_7 = sibling(node_17);

  	template_effect(() => set_text(text_7, ` ${$getLocaleString()('DISPLAY_COMMENTS') ?? ""}`));

  	var button_15 = sibling(button_14, 2);

  	template_effect(() => set_attribute(button_15, "title", $getLocaleString()('DOWNLOAD_ZIP')));

  	var node_18 = child(button_15);

  	File_download(node_18);

  	var node_19 = sibling(node_18, 2);

  	Loader_2(node_19);

  	var text_8 = sibling(node_19);

  	template_effect(() => set_text(text_8, ` ${$getLocaleString()('BUTTON_DOWNLOAD') ?? ""}`));

  	var a_1 = sibling(button_15, 2);

  	template_effect(() => set_attribute(a_1, "title", $getLocaleString()('PREVIOUS_CHAPTER')));

  	var node_20 = child(a_1);

  	Arrow_big_left(node_20);

  	var text_9 = sibling(node_20);

  	template_effect(() => set_text(text_9, ` ${$getLocaleString()('BUTTON_PREVIOUS') ?? ""}`));

  	var a_2 = sibling(a_1, 2);

  	template_effect(() => set_attribute(a_2, "title", $getLocaleString()('NEXT_CHAPTER')));

  	var text_10 = child(a_2);

  	template_effect(() => set_text(text_10, `${$getLocaleString()('BUTTON_NEXT') ?? ""} `));

  	var node_21 = sibling(text_10);

  	Arrow_big_right(node_21);

  	template_effect(() => {
  		set_class(header, `${$settings().header ?? ""} headroom-top`);
  		set_text(text, `${$settings().defaultZoom ?? ""}%`);
  		set_value(input, $settings().defaultZoom);
  		set_text(text_1, $$props.manga.title);
  		set_attribute(a, "href", $$props.manga.series);
  		set_text(text_4, $$props.manga.begin > 1 ? $$props.manga.pages - ($$props.manga.begin - 1) : $$props.manga.pages);
  		set_class(button_14, `NavigationControlButton ControlButton ${($$props.manga.comments ? '' : 'disabled') ?? ""}`);
  		set_attribute(a_1, "href", $$props.manga.prev ?? '');
  		set_attribute(a_2, "href", $$props.manga.next ?? '');
  	});

  	append($$anchor, fragment);
  	pop();
  }

  var root$g = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`);

  function X($$anchor) {
  	var svg = root$g();

  	append($$anchor, svg);
  }

  var root$f = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>`);

  function External_link($$anchor) {
  	var svg = root$f();

  	append($$anchor, svg);
  }

  var root$e = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>`);

  function Trash($$anchor) {
  	var svg = root$e();

  	append($$anchor, svg);
  }

  var root_3 = template(`<div class="BookmarkItem"><span class="bookmarkColumnLarge"><span class="bookmarkName"> </span> <br> <a class="bookmarkURl" target="_blank"> </a></span> <span class="bookmarkColumnSmall"><span class="bookmarkDate"> </span> <br> <span class="bookmarkPage"> </span></span> <span class="bookmarkFunctions"><a target="_blank"><button class="ControlButton open" title="Open Bookmark" type="button"><!></button></a> <button class="ControlButton erase" title="Delete Bookmark" type="button"><!></button></span></div>`);
  var root$d = template(`<div id="BookmarksPanel" class="panel"><button id="CloseBookmarks" class="closeButton"><!></button> <button class="Bookmark simpleButton"><!> <!></button> <h2> </h2> <div id="BookmarksList"><!></div></div>`);

  function BookmarksPanel($$anchor, $$props) {
  	push($$props, false);

  	const $$stores = setup_stores();
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	const $settings = () => store_get(settings$2, "$settings", $$stores);

  	init$1();

  	var div = root$d();
  	var button = child(div);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('CLOSE')));

  	var node = child(button);

  	X(node);

  	var button_1 = sibling(button, 2);

  	template_effect(() => set_attribute(button_1, "title", `$${$getLocaleString()('BOOKMARK') ?? ""}`));

  	var node_1 = child(button_1);

  	Bookmark(node_1);

  	var node_2 = sibling(node_1, 2);

  	Bookmark_off(node_2);

  	var h2 = sibling(button_1, 2);
  	var text$1 = child(h2);

  	template_effect(() => set_text(text$1, $getLocaleString()('BOOKMARKS')));

  	var div_1 = sibling(h2, 2);
  	var node_3 = child(div_1);

  	{
  		var consequent = ($$anchor) => {
  			var text_1 = text();

  			template_effect(() => set_text(text_1, $getLocaleString()('LIST_EMPTY')));
  			append($$anchor, text_1);
  		};

  		var alternate = ($$anchor) => {
  			var fragment_1 = comment();
  			var node_4 = first_child(fragment_1);

  			each(node_4, 1, () => $settings().bookmarks, index, ($$anchor, mark, index) => {
  				var div_2 = root_3();

  				set_attribute(div_2, "id", `Bookmark${index + 1 ?? ""}`);

  				var span = child(div_2);
  				var span_1 = child(span);
  				var text_2 = child(span_1);

  				var a = sibling(span_1, 4);
  				var text_3 = child(a);

  				var span_2 = sibling(span, 2);
  				var span_3 = child(span_2);
  				var text_4 = child(span_3);

  				template_effect(() => set_text(text_4, new Date(get$1(mark).date).toISOString().slice(0, 10)));

  				var span_4 = sibling(span_3, 4);
  				var text_5 = child(span_4);

  				var span_5 = sibling(span_2, 2);
  				var a_1 = child(span_5);
  				var button_2 = child(a_1);
  				var node_5 = child(button_2);

  				External_link(node_5);

  				var button_3 = sibling(a_1, 2);
  				var node_6 = child(button_3);

  				Trash(node_6);

  				template_effect(() => {
  					set_text(text_2, get$1(mark).name);
  					set_attribute(a, "href", get$1(mark).url);
  					set_text(text_3, get$1(mark).url);
  					set_text(text_5, `Page: ${get$1(mark).page ?? ""}`);
  					set_attribute(a_1, "href", get$1(mark).url);
  					set_value(button_3, get$1(mark).url);
  				});

  				append($$anchor, div_2);
  			});

  			append($$anchor, fragment_1);
  		};

  		if_block(node_3, ($$render) => {
  			if (isEmpty($settings().bookmarks)) $$render(consequent); else $$render(alternate, false);
  		});
  	}
  	append($$anchor, div);
  	pop();
  }

  var root$c = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>`);

  function Sun($$anchor) {
  	var svg = root$c();

  	append($$anchor, svg);
  }

  var root$b = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>`);

  function Moon($$anchor) {
  	var svg = root$b();

  	append($$anchor, svg);
  }

  var root$a = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`);

  function Palette($$anchor) {
  	var svg = root$a();

  	append($$anchor, svg);
  }

  var root$9 = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>`);

  function Check($$anchor) {
  	var svg = root$9();

  	append($$anchor, svg);
  }

  function changeLocale$1(event) {
  	$locale.set(event.target.value);
  }

  var root_1 = template(`<option> </option>`);
  var root_2$1 = template(`<span><!></span>`);
  var root$8 = template(`<div id="SettingsPanel" class="panel"><h2> </h2> <button id="CloseSettings" class="closeButton"><!></button> <button id="ResetSettings" class="ControlButton"> </button> <div class="ControlLabel locale"> <select id="locale"></select></div> <div id="ThemeSection"><div class="ControlLabel ColorSchemeSelector"> <button id="ColorScheme" class="ControlButton"><!> <!></button></div> <div class="ControlLabel ThemeSelector"> <span title="custom"><!> <!></span> <!></div> <div id="Hue"> <input id="CustomThemeHue" type="color" class="colorpicker CustomTheme"></div> <div id="Shade"><span> <output id="themeShadeVal" class="RangeValue" for="themeShade"> </output></span> <input type="range" name="ThemeShade" id="ThemeShade" min="100" max="900" step="100"></div></div> <div class="ControlLabel loadMode"> <select id="loadMode"><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel PagesPerSecond"> <select id="PagesPerSecond"><option> </option><option>0.5</option><option> </option><option>02</option><option> </option><option>08</option><option> </option><option> </option></select></div> <div class="ControlLabel DefaultZoomMode"> <select id="DefaultZoomMode"><option> </option><option> </option><option> </option></select></div> <div><span> <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom"> </output></span> <input type="range" name="DefaultZoom" id="DefaultZoom" min="5" max="200" step="5" list="tickmarks"> <datalist id="tickmarks"><option>5</option><option>25</option><option>50</option><option>75</option><option>100</option><option>125</option><option>150</option><option>175</option><option>200</option></datalist></div> <div class="ControlLabel minZoom"><span> <output id="minZoomVal" class="RangeValue" for="minZoom"> </output></span> <input type="range" name="minZoom" id="minZoom" min="30" max="100" step="10"></div> <div class="ControlLabel zoomStep"><span> <output id="zoomStepVal" class="RangeValue" for="zoomStep"> </output></span> <input type="range" name="zoomStep" id="zoomStep" min="5" max="50" step="5"></div> <div class="ControlLabel viewMode"> <select id="viewMode"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel fitIfOversize"> <input type="checkbox" value="true" name="fitIfOversize" id="fitIfOversize"></div> <div class="ControlLabel showThumbnails"> <input type="checkbox" value="true" name="showThumbnails" id="showThumbnails"></div> <div class="ControlLabel lazyLoadImages"> <input type="checkbox" value="true" name="lazyLoadImages" id="lazyLoadImages"></div> <div><span> <output id="lazyStartVal" for="lazyStart"> </output></span> <input type="range" name="lazyStart" id="lazyStart" min="5" max="100" step="5"></div> <div class="ControlLabel downloadZip"> <input type="checkbox" value="false" name="downloadZip" id="downloadZip"></div> <div class="ControlLabel hidePageControls"> <input type="checkbox" value="false" name="hidePageControls" id="hidePageControls"></div> <div class="ControlLabel headerType"> <select id="headerType"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="ControlLabel autoScroll"><span> <output id="scrollHeightVal" for="scrollHeight"> </output>px</span> <input type="range" name="scrollHeight" id="scrollHeight" min="1" max="100" step="1"></div></div>`);

  function SettingsPanel($$anchor, $$props) {
  	push($$props, false);

  	const $$stores = setup_stores();
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	const $settings = () => store_get(settings$2, "$settings", $$stores);

  	init$1();

  	var div = root$8();
  	var h2 = child(div);
  	var text = child(h2);

  	template_effect(() => set_text(text, $getLocaleString()('SETTINGS')));

  	var button = sibling(h2, 2);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('CLOSE')));

  	var node = child(button);

  	X(node);

  	var button_1 = sibling(button, 2);
  	var text_1 = child(button_1);

  	template_effect(() => set_text(text_1, $getLocaleString()('BUTTON_RESET_SETTINGS')));

  	var div_1 = sibling(button_1, 2);
  	var text_2 = child(div_1);

  	template_effect(() => set_text(text_2, `${$getLocaleString()('LANGUAGE') ?? ""} `));

  	var select = sibling(text_2);

  	select.__change = [changeLocale$1];

  	each(select, 5, () => locales, index, ($$anchor, l) => {
  		var option = root_1();
  		var option_value = {};
  		var text_3 = child(option);

  		template_effect(() => {
  			if (option_value !== (option_value = get$1(l).ID)) {
  				option.value = null == (option.__value = get$1(l).ID) ? "" : get$1(l).ID;
  			}

  			set_selected(option, $settings().locale === get$1(l).ID);
  			set_text(text_3, get$1(l).NAME);
  		});

  		append($$anchor, option);
  	});

  	var div_2 = sibling(div_1, 2);
  	var div_3 = child(div_2);
  	var text_4 = child(div_3);

  	template_effect(() => set_text(text_4, `${$getLocaleString()('COLOR_SCHEME') ?? ""} `));

  	var button_2 = sibling(text_4);
  	var node_1 = child(button_2);

  	Sun(node_1);

  	var node_2 = sibling(node_1, 2);

  	Moon(node_2);

  	var div_4 = sibling(div_3, 2);
  	var text_5 = child(div_4);

  	template_effect(() => set_text(text_5, `${$getLocaleString()('THEME') ?? ""} `));

  	var span = sibling(text_5);
  	var node_3 = child(span);

  	Palette(node_3);

  	var node_4 = sibling(node_3, 2);

  	Check(node_4);

  	var node_5 = sibling(span, 2);

  	each(
  		node_5,
  		1,
  		() => [
  			...Object.keys(colors).map((color) => colors[color].name)
  		],
  		index,
  		($$anchor, theme) => {
  			var span_1 = root_2$1();
  			var node_6 = child(span_1);

  			Check(node_6);

  			template_effect(() => {
  				set_class(span_1, `${get$1(theme) ?? ""} ThemeRadio ${($settings().theme === get$1(theme) ? 'selected' : '') ?? ""}`);
  				set_attribute(span_1, "title", get$1(theme));
  			});

  			append($$anchor, span_1);
  		}
  	);

  	var div_5 = sibling(div_4, 2);

  	const class_derived = derived_safe_equal(() => `ControlLabel CustomTheme ControlLabelItem
          ${($settings().theme.startsWith('custom') ? 'show' : '') ?? ""}`);

  	var text_6 = child(div_5);

  	template_effect(() => set_text(text_6, `${$getLocaleString()('THEME_HUE') ?? ""} `));

  	var input = sibling(text_6);

  	var div_6 = sibling(div_5, 2);

  	const class_derived_1 = derived_safe_equal(() => `ControlLabel CustomTheme ControlLabelItem
          ${($settings().theme.startsWith('custom') ? '' : 'show') ?? ""}`);

  	var span_2 = child(div_6);
  	var text_7 = child(span_2);

  	template_effect(() => set_text(text_7, `${$getLocaleString()('THEME_SHADE') ?? ""} `));

  	var output = sibling(text_7);
  	var text_8 = child(output);

  	var input_1 = sibling(span_2, 2);

  	var div_7 = sibling(div_2, 2);
  	var text_9 = child(div_7);

  	template_effect(() => set_text(text_9, `${$getLocaleString()('DEFAULT_LOAD_MODE') ?? ""} `));

  	var select_1 = sibling(text_9);
  	var option_1 = child(select_1);

  	option_1.value = null == (option_1.__value = "wait") ? "" : "wait";

  	var text_10 = child(option_1);

  	template_effect(() => set_text(text_10, $getLocaleString()('LOAD_MODE_NORMAL')));

  	var option_2 = sibling(option_1);

  	option_2.value = null == (option_2.__value = "always") ? "" : "always";

  	var text_11 = child(option_2);

  	template_effect(() => set_text(text_11, $getLocaleString()('LOAD_MODE_ALWAYS')));

  	var option_3 = sibling(option_2);

  	option_3.value = null == (option_3.__value = "never") ? "" : "never";

  	var text_12 = child(option_3);

  	template_effect(() => set_text(text_12, $getLocaleString()('LOAD_MODE_NEVER')));

  	var div_8 = sibling(div_7, 2);
  	var text_13 = child(div_8);

  	template_effect(() => set_text(text_13, `${$getLocaleString()('LOAD_SPEED') ?? ""} `));

  	var select_2 = sibling(text_13);
  	var option_4 = child(select_2);

  	option_4.value = null == (option_4.__value = "3000") ? "" : "3000";

  	var text_14 = child(option_4);

  	template_effect(() => set_text(text_14, `0.3(${$getLocaleString()('SLOWLY') ?? ""})`));

  	var option_5 = sibling(option_4);

  	option_5.value = null == (option_5.__value = "2000") ? "" : "2000";

  	var option_6 = sibling(option_5);

  	option_6.value = null == (option_6.__value = "1000") ? "" : "1000";

  	var text_15 = child(option_6);

  	template_effect(() => set_text(text_15, `01(${$getLocaleString()('NORMAL') ?? ""})`));

  	var option_7 = sibling(option_6);

  	option_7.value = null == (option_7.__value = "500") ? "" : "500";

  	var option_8 = sibling(option_7);

  	option_8.value = null == (option_8.__value = "250") ? "" : "250";

  	var text_16 = child(option_8);

  	template_effect(() => set_text(text_16, `04(${$getLocaleString()('FAST') ?? ""})`));

  	var option_9 = sibling(option_8);

  	option_9.value = null == (option_9.__value = "125") ? "" : "125";

  	var option_10 = sibling(option_9);

  	option_10.value = null == (option_10.__value = "100") ? "" : "100";

  	var text_17 = child(option_10);

  	template_effect(() => set_text(text_17, `10(${$getLocaleString()('EXTREME') ?? ""})`));

  	var option_11 = sibling(option_10);

  	option_11.value = null == (option_11.__value = "1") ? "" : "1";

  	var text_18 = child(option_11);

  	template_effect(() => set_text(text_18, $getLocaleString()('ALL_PAGES')));

  	var div_9 = sibling(div_8, 2);
  	var text_19 = child(div_9);

  	template_effect(() => set_text(text_19, `${$getLocaleString()('DEFAULT_ZOOM_MODE') ?? ""} `));

  	var select_3 = sibling(text_19);
  	var option_12 = child(select_3);

  	option_12.value = null == (option_12.__value = "percent") ? "" : "percent";

  	var text_20 = child(option_12);

  	template_effect(() => set_text(text_20, $getLocaleString()('PERCENT')));

  	var option_13 = sibling(option_12);

  	option_13.value = null == (option_13.__value = "width") ? "" : "width";

  	var text_21 = child(option_13);

  	template_effect(() => set_text(text_21, $getLocaleString()('FIT_WIDTH')));

  	var option_14 = sibling(option_13);

  	option_14.value = null == (option_14.__value = "height") ? "" : "height";

  	var text_22 = child(option_14);

  	template_effect(() => set_text(text_22, $getLocaleString()('FIT_HEIGHT')));

  	var div_10 = sibling(div_9, 2);
  	var span_3 = child(div_10);
  	var text_23 = child(span_3);

  	template_effect(() => set_text(text_23, `${$getLocaleString()('DEFAULT_ZOOM') ?? ""} `));

  	var output_1 = sibling(text_23);
  	var text_24 = child(output_1);

  	var input_2 = sibling(span_3, 2);

  	var datalist = sibling(input_2, 2);
  	var option_15 = child(datalist);

  	option_15.value = null == (option_15.__value = "5") ? "" : "5";

  	var option_16 = sibling(option_15);

  	option_16.value = null == (option_16.__value = "25") ? "" : "25";

  	var option_17 = sibling(option_16);

  	option_17.value = null == (option_17.__value = "50") ? "" : "50";

  	var option_18 = sibling(option_17);

  	option_18.value = null == (option_18.__value = "75") ? "" : "75";

  	var option_19 = sibling(option_18);

  	option_19.value = null == (option_19.__value = "100") ? "" : "100";

  	var option_20 = sibling(option_19);

  	option_20.value = null == (option_20.__value = "125") ? "" : "125";

  	var option_21 = sibling(option_20);

  	option_21.value = null == (option_21.__value = "150") ? "" : "150";

  	var option_22 = sibling(option_21);

  	option_22.value = null == (option_22.__value = "175") ? "" : "175";

  	var option_23 = sibling(option_22);

  	option_23.value = null == (option_23.__value = "200") ? "" : "200";

  	var div_11 = sibling(div_10, 2);
  	var span_4 = child(div_11);
  	var text_25 = child(span_4);

  	template_effect(() => set_text(text_25, `${$getLocaleString()('MINIMUM_ZOOM') ?? ""} `));

  	var output_2 = sibling(text_25);
  	var text_26 = child(output_2);

  	var input_3 = sibling(span_4, 2);

  	var div_12 = sibling(div_11, 2);
  	var span_5 = child(div_12);
  	var text_27 = child(span_5);

  	template_effect(() => set_text(text_27, `${$getLocaleString()('ZOOM_STEP') ?? ""} `));

  	var output_3 = sibling(text_27);
  	var text_28 = child(output_3);

  	var input_4 = sibling(span_5, 2);

  	var div_13 = sibling(div_12, 2);
  	var text_29 = child(div_13);

  	template_effect(() => set_text(text_29, `${$getLocaleString()('DEFAULT_VIEW_MODE') ?? ""} `));

  	var select_4 = sibling(text_29);
  	var option_24 = child(select_4);

  	option_24.value = null == (option_24.__value = "Vertical") ? "" : "Vertical";

  	var text_30 = child(option_24);

  	template_effect(() => set_text(text_30, $getLocaleString()('VIEW_MODE_VERTICAL')));

  	var option_25 = sibling(option_24);

  	option_25.value = null == (option_25.__value = "WebComic") ? "" : "WebComic";

  	var text_31 = child(option_25);

  	template_effect(() => set_text(text_31, $getLocaleString()('VIEW_MODE_WEBCOMIC')));

  	var option_26 = sibling(option_25);

  	option_26.value = null == (option_26.__value = "FluidLTR") ? "" : "FluidLTR";

  	var text_32 = child(option_26);

  	template_effect(() => set_text(text_32, $getLocaleString()('VIEW_MODE_LEFT')));

  	var option_27 = sibling(option_26);

  	option_27.value = null == (option_27.__value = "FluidRTL") ? "" : "FluidRTL";

  	var text_33 = child(option_27);

  	template_effect(() => set_text(text_33, $getLocaleString()('VIEW_MODE_RIGHT')));

  	var div_14 = sibling(div_13, 2);
  	var text_34 = child(div_14);

  	template_effect(() => set_text(text_34, `${$getLocaleString()('FIT_WIDTH_OVERSIZED') ?? ""} `));

  	var input_5 = sibling(text_34);

  	var div_15 = sibling(div_14, 2);
  	var text_35 = child(div_15);

  	template_effect(() => set_text(text_35, `${$getLocaleString()('SHOW_THUMBNAILS') ?? ""} `));

  	var input_6 = sibling(text_35);

  	var div_16 = sibling(div_15, 2);
  	var text_36 = child(div_16);

  	template_effect(() => set_text(text_36, `${$getLocaleString()('LAZY_LOAD_IMAGES_ENABLE') ?? ""} `));

  	var input_7 = sibling(text_36);

  	var div_17 = sibling(div_16, 2);
  	var span_6 = child(div_17);
  	var text_37 = child(span_6);

  	template_effect(() => set_text(text_37, `${$getLocaleString()('LAZY_LOAD_IMAGES') ?? ""} `));

  	var output_4 = sibling(text_37);
  	var text_38 = child(output_4);

  	var input_8 = sibling(span_6, 2);

  	var div_18 = sibling(div_17, 2);
  	var text_39 = child(div_18);

  	template_effect(() => set_text(text_39, `${$getLocaleString()('DOWNLOAD_IMAGES') ?? ""} `));

  	var input_9 = sibling(text_39);

  	var div_19 = sibling(div_18, 2);
  	var text_40 = child(div_19);

  	template_effect(() => set_text(text_40, `${$getLocaleString()('HIDE_CONTROLS') ?? ""} `));

  	var input_10 = sibling(text_40);

  	var div_20 = sibling(div_19, 2);
  	var text_41 = child(div_20);

  	template_effect(() => set_text(text_41, `${$getLocaleString()('HEADER_TYPE') ?? ""} `));

  	var select_5 = sibling(text_41);
  	var option_28 = child(select_5);

  	option_28.value = null == (option_28.__value = "hover") ? "" : "hover";

  	var text_42 = child(option_28);

  	template_effect(() => set_text(text_42, $getLocaleString()('HEADER_HOVER')));

  	var option_29 = sibling(option_28);

  	option_29.value = null == (option_29.__value = "scroll") ? "" : "scroll";

  	var text_43 = child(option_29);

  	template_effect(() => set_text(text_43, $getLocaleString()('HEADER_SCROLL')));

  	var option_30 = sibling(option_29);

  	option_30.value = null == (option_30.__value = "click") ? "" : "click";

  	var text_44 = child(option_30);

  	template_effect(() => set_text(text_44, $getLocaleString()('HEADER_CLICK')));

  	var option_31 = sibling(option_30);

  	option_31.value = null == (option_31.__value = "fixed") ? "" : "fixed";

  	var text_45 = child(option_31);

  	template_effect(() => set_text(text_45, $getLocaleString()('HEADER_FIXED')));

  	var div_21 = sibling(div_20, 2);
  	var span_7 = child(div_21);
  	var text_46 = child(span_7);

  	template_effect(() => set_text(text_46, `${$getLocaleString()('AUTO_SCROLL_HEIGHT') ?? ""} `));

  	var output_5 = sibling(text_46);
  	var text_47 = child(output_5);

  	var input_11 = sibling(span_7, 2);

  	template_effect(() => {
  		set_class(span, `custom ThemeRadio ${($settings().theme === 'custom' ? 'selected' : '') ?? ""}`);
  		set_class(div_5, get$1(class_derived));
  		set_value(input, $settings().customTheme);
  		set_class(div_6, get$1(class_derived_1));
  		set_text(text_8, $settings().themeShade);
  		set_selected(option_1, $settings().loadMode === 'wait');
  		set_selected(option_2, $settings().loadMode === 'always');
  		set_selected(option_3, $settings().loadMode === 'never');
  		set_selected(option_4, $settings().throttlePageLoad === 3000);
  		set_selected(option_5, $settings().throttlePageLoad === 2000);
  		set_selected(option_6, $settings().throttlePageLoad === 1000);
  		set_selected(option_7, $settings().throttlePageLoad === 500);
  		set_selected(option_8, $settings().throttlePageLoad === 250);
  		set_selected(option_9, $settings().throttlePageLoad === 125);
  		set_selected(option_10, $settings().throttlePageLoad === 100);
  		set_selected(option_11, $settings().throttlePageLoad === 1);
  		set_selected(option_12, $settings().zoomMode === 'percent');
  		set_selected(option_13, $settings().zoomMode === 'width');
  		set_selected(option_14, $settings().zoomMode === 'height');

  		set_class(div_10, `ControlLabel DefaultZoom ControlLabelItem
        ${($settings().zoomMode === 'percent' ? 'show' : '') ?? ""}`);

  		set_text(text_24, `${$settings().defaultZoom ?? ""}%`);
  		set_text(text_26, `${$settings().minZoom ?? ""}%`);
  		set_text(text_28, `${$settings().zoomStep ?? ""}%`);
  		set_selected(option_24, $settings().viewMode === 'Vertical');
  		set_selected(option_25, $settings().viewMode === 'WebComic');
  		set_selected(option_26, $settings().viewMode === 'FluidLTR');
  		set_selected(option_27, $settings().viewMode === 'FluidRTL');
  		set_checked(input_5, $settings().fitWidthIfOversize);
  		set_checked(input_6, $settings().showThumbnails);
  		set_checked(input_7, $settings().lazyLoadImages);

  		set_class(div_17, `ControlLabel lazyStart ControlLabelItem
        ${($settings().lazyLoadImages ? 'show' : '') ?? ""}
    `);

  		set_text(text_38, $settings().lazyStart);
  		set_checked(input_9, $settings().downloadZip);
  		set_checked(input_10, $settings().hidePageControls);
  		set_selected(option_28, $settings().header === 'hover');
  		set_selected(option_29, $settings().header === 'scroll');
  		set_selected(option_30, $settings().header === 'click');
  		set_selected(option_31, $settings().header === 'fixed');
  		set_text(text_47, $settings().scrollHeight);
  	});

  	bind_value(input_1, () => $settings().themeShade, ($$value) => store_mutate(settings$2, untrack($settings).themeShade = $$value, untrack($settings)));
  	bind_value(input_2, () => $settings().defaultZoom, ($$value) => store_mutate(settings$2, untrack($settings).defaultZoom = $$value, untrack($settings)));
  	bind_value(input_3, () => $settings().minZoom, ($$value) => store_mutate(settings$2, untrack($settings).minZoom = $$value, untrack($settings)));
  	bind_value(input_4, () => $settings().zoomStep, ($$value) => store_mutate(settings$2, untrack($settings).zoomStep = $$value, untrack($settings)));
  	bind_value(input_8, () => $settings().lazyStart, ($$value) => store_mutate(settings$2, untrack($settings).lazyStart = $$value, untrack($settings)));
  	bind_value(input_11, () => $settings().scrollHeight, ($$value) => store_mutate(settings$2, untrack($settings).scrollHeight = $$value, untrack($settings)));
  	append($$anchor, div);
  	pop();
  }

  delegate(["change"]);

  var root$7 = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path></svg>`);

  function Pencil($$anchor) {
  	var svg = root$7();

  	append($$anchor, svg);
  }

  var root$6 = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M14 4l0 4l-6 0l0 -4"></path></svg>`);

  function Device_floppy($$anchor) {
  	var svg = root$6();

  	append($$anchor, svg);
  }

  function toggle(_, editor) {
  	set$1(editor, !get$1(editor));
  }

  var root_4 = template(`<kbd class="dark"> </kbd>`);
  var root_2 = template(`<span> </span> <span><!></span>`, 1);
  var root_6 = template(`<label> </label> <input type="text" class="KeybindInput">`, 1);
  var root_5 = template(`<!> <div id="HotKeysRules"> </div>`, 1);
  var root$5 = template(`<div id="KeybindingsPanel" class="panel"><h2> </h2> <button id="CloseKeybindings" class="closeButton"><!></button> <div class="controls"><button id="EditKeybindings" class="ControlButton" type="button"><!> </button> <button id="SaveKeybindings" class="ControlButton hidden" type="button"><!> </button></div> <div id="KeybindingsList"><!></div></div>`);

  function KeybindingsPanel($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	let editor = state(false);
  	var div = root$5();
  	var h2 = child(div);
  	var text = child(h2);

  	template_effect(() => set_text(text, $getLocaleString()('KEYBINDINGS')));

  	var button = sibling(h2, 2);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('CLOSE')));

  	var node = child(button);

  	X(node);

  	var div_1 = sibling(button, 2);
  	var button_1 = child(div_1);

  	template_effect(() => set_attribute(button_1, "title", $getLocaleString()('EDIT_KEYBINDS')));
  	button_1.__click = [toggle, editor];

  	var node_1 = child(button_1);

  	Pencil(node_1);

  	var text_1 = sibling(node_1);

  	template_effect(() => set_text(text_1, ` ${$getLocaleString()('BUTTON_EDIT') ?? ""}`));

  	var button_2 = sibling(button_1, 2);

  	template_effect(() => set_attribute(button_2, "title", $getLocaleString()('SAVE_KEYBINDS')));
  	button_2.__click = [toggle, editor];

  	var node_2 = child(button_2);

  	Device_floppy(node_2);

  	var text_2 = sibling(node_2);

  	template_effect(() => set_text(text_2, ` ${$getLocaleString()('BUTTON_SAVE') ?? ""}`));

  	var div_2 = sibling(div_1, 2);
  	var node_3 = child(div_2);

  	{
  		var consequent_1 = ($$anchor) => {
  			var fragment = comment();
  			var node_4 = first_child(fragment);

  			each(node_4, 1, () => Object.keys($settings().keybinds), index, ($$anchor, kb) => {
  				var fragment_1 = root_2();
  				var span = first_child(fragment_1);
  				var text_3 = child(span);

  				template_effect(() => set_text(text_3, `${$getLocaleString()(get$1(kb)) ?? ""}:`));

  				var span_1 = sibling(span, 2);
  				var node_5 = child(span_1);

  				{
  					var consequent = ($$anchor) => {
  						var fragment_2 = comment();
  						var node_6 = first_child(fragment_2);

  						each(node_6, 1, () => $settings().keybinds[get$1(kb)] || [], index, ($$anchor, key) => {
  							var kbd = root_4();
  							var text_4 = child(kbd);
  							template_effect(() => set_text(text_4, get$1(key)));
  							append($$anchor, kbd);
  						});

  						append($$anchor, fragment_2);
  					};

  					if_block(node_5, ($$render) => {
  						if ($settings().keybinds[get$1(kb)]) $$render(consequent);
  					});
  				}
  				append($$anchor, fragment_1);
  			});

  			append($$anchor, fragment);
  		};

  		var alternate = ($$anchor) => {
  			var fragment_3 = root_5();
  			var node_7 = first_child(fragment_3);

  			each(node_7, 1, () => Object.keys($settings().keybinds), index, ($$anchor, kb) => {
  				var fragment_4 = root_6();
  				var label = first_child(fragment_4);
  				var text_5 = child(label);

  				template_effect(() => set_text(text_5, `${$getLocaleString()(get$1(kb)) ?? ""}:`));

  				var input = sibling(label, 2);
  				template_effect(() => set_value(input, $settings().keybinds[get$1(kb)]?.join(' , ') ?? ''));

  				template_effect(() => {
  					set_attribute(label, "for", get$1(kb));
  					set_attribute(input, "id", get$1(kb));
  					set_attribute(input, "name", get$1(kb));
  				});

  				append($$anchor, fragment_4);
  			});

  			var div_3 = sibling(node_7, 2);
  			var text_6 = child(div_3);

  			template_effect(() => set_text(text_6, $getLocaleString()('KEYBIND_RULES')));
  			append($$anchor, fragment_3);
  		};

  		if_block(node_3, ($$render) => {
  			if (!get$1(editor)) $$render(consequent_1); else $$render(alternate, false);
  		});
  	}
  	append($$anchor, div);
  	pop();
  }

  delegate(["click"]);

  var root$4 = template(`<div class="Thumbnail"><img alt="" class="ThumbnailImg"> <span class="ThumbnailIndex"> </span></div>`);

  function Thumnail($$anchor, $$props) {
  	const src = prop($$props, "src", 3, '');
  	var div = root$4();
  	var img = child(div);
  	var span = sibling(img, 2);
  	var text = child(span);

  	template_effect(() => {
  		set_attribute(div, "id", `Thumbnail${$$props.index ?? ""}`);
  		set_attribute(img, "id", `ThumbnailImg${$$props.index ?? ""}`);
  		set_attribute(img, "src", src());
  		set_text(text, $$props.index);
  	});

  	append($$anchor, div);
  }

  var root$3 = ns_template(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>`);

  function Category($$anchor) {
  	var svg = root$3();

  	append($$anchor, svg);
  }

  var root$2 = template(`<nav id="Navigation"><div id="NavigationCounters" class="ControlLabel"><!> <i>0</i> / <b> </b> </div> <div id="Thumbnails"></div></nav>`);

  function ThumbnailPanel($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	var nav = root$2();
  	var div = child(nav);
  	var node = child(div);

  	Category(node);

  	var b = sibling(node, 4);
  	var text = child(b);

  	var text_1 = sibling(b);

  	template_effect(() => set_text(text_1, ` ${$getLocaleString()('PAGES_LOADED') ?? ""}`));

  	var div_1 = sibling(div, 2);

  	each(div_1, 21, () => Array.from(Array($$props.manga.pages + 1).keys()).slice($$props.manga.begin), index, ($$anchor, index) => {
  		Thumnail($$anchor, {
  			get index() {
  				return get$1(index);
  			}
  		});
  	});

  	template_effect(() => {
  		set_class(nav, `panel ${($settings().showThumbnails ? '' : 'disabled') ?? ""}`);
  		set_text(text, $$props.manga.begin > 1 ? $$props.manga.pages - ($$props.manga.begin - 1) : $$props.manga.pages);
  	});

  	append($$anchor, nav);
  	pop();
  }

  var root$1 = template(`<section id="CommentsPanel" class="panel"><button id="CloseComments" class="closeButton"><!></button> <h2> </h2> <div id="CommentsArea"></div> <button id="CommentsColorScheme" class="simpleButton ColorScheme"><!> <!></button></section>`);

  function CommentsPanel($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $getLocaleString = () => store_get($format, "$getLocaleString", $$stores);
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	var section = root$1();
  	var button = child(section);

  	template_effect(() => set_attribute(button, "title", $getLocaleString()('CLOSE')));

  	var node = child(button);

  	X(node);

  	var h2 = sibling(button, 2);
  	var text = child(h2);

  	template_effect(() => set_text(text, $getLocaleString()('COMMENTS')));

  	var div = sibling(h2, 2);
  	var button_1 = sibling(div, 2);
  	var node_1 = child(button_1);

  	Sun(node_1);

  	var node_2 = sibling(node_1, 2);

  	Moon(node_2);
  	template_effect(() => set_class(div, clsx($settings().colorScheme), ""));
  	append($$anchor, section);
  	pop();
  }

  var root = template(`<div id="MangaOnlineViewer"><!> <!> <!> <!> <div id="Overlay" class="overlay"></div> <!> <!> <!></div>`);

  function App($$anchor, $$props) {
  	push($$props, true);

  	const $$stores = setup_stores();
  	const $settings = () => store_get(settings$2, "$settings", $$stores);
  	var div = root();
  	const stringified_text = derived$1(() => $settings().colorScheme ?? "");
  	const stringified_text_1 = derived$1(() => ($settings().hidePageControls ? 'hideControls' : '') ?? "");
  	const stringified_text_2 = derived$1(() => (isBookmarked() ? 'bookmarked' : '') ?? "");
  	const stringified_text_3 = derived$1(() => getDevice() ?? "");

  	const class_derived = derived$1(() => `${get$1(stringified_text)}
        ${get$1(stringified_text_1)}
        ${get$1(stringified_text_2)}
        ${get$1(stringified_text_3)}`);

  	var node = child(div);

  	Header(node, {
  		get manga() {
  			return $$props.manga;
  		}
  	});

  	var node_1 = sibling(node, 2);

  	Reader(node_1, {
  		get manga() {
  			return $$props.manga;
  		}
  	});

  	var node_2 = sibling(node_1, 2);

  	CommentsPanel(node_2, {
  		get manga() {
  			return $$props.manga;
  		}
  	});

  	var node_3 = sibling(node_2, 2);

  	ThumbnailPanel(node_3, {
  		get manga() {
  			return $$props.manga;
  		}
  	});

  	var node_4 = sibling(node_3, 4);

  	SettingsPanel(node_4, {});

  	var node_5 = sibling(node_4, 2);

  	KeybindingsPanel(node_5, {});

  	var node_6 = sibling(node_5, 2);

  	BookmarksPanel(node_6, {});

  	template_effect(() => {
  		set_class(div, get$1(class_derived));
  		set_attribute(div, "data-theme", $settings().theme);
  	});

  	append($$anchor, div);
  	pop();
  }

  const IconExternalLink = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-external-link\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\" />\r\n  <path d=\"M11 13l9 -9\" />\r\n  <path d=\"M15 4h5v5\" />\r\n</svg>\r\n\r\n\r\n";

  const IconPalette = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-palette\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25\" />\r\n  <path d=\"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />\r\n  <path d=\"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />\r\n  <path d=\"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />\r\n</svg>\r\n\r\n\r\n";

  const IconPhoto = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-photo\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M15 8h.01\" />\r\n  <path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z\" />\r\n  <path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\" />\r\n  <path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\" />\r\n</svg>\r\n\r\n\r\n";

  const IconPhotoOff = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-photo-off\" width=\"24\"\r\n     height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\"\r\n     stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n    <path d=\"M15 8h.01\"/>\r\n    <path d=\"M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153\"/>\r\n    <path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\"/>\r\n    <path d=\"M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3\"/>\r\n    <path d=\"M3 3l18 18\" color=\"orange\"/>\r\n</svg>\r\n\r\n\r\n";

  const IconTrash = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-trash\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M4 7l16 0\" />\r\n  <path d=\"M10 11l0 6\" />\r\n  <path d=\"M14 11l0 6\" />\r\n  <path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" />\r\n  <path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />\r\n</svg>\r\n\r\n\r\n";

  const styles = ":root {\r\n    --theme-body-background: #25262b;\r\n    --theme-body-text-color: #c1c2c5;\r\n    --theme-text-color: #c1c2c5;\r\n    --theme-primary-color: #1a1b1e;\r\n    --theme-primary-text-color: #c1c2c5;\r\n    --theme-background-color: #25262b;\r\n    --theme-hightlight-color: #2c2e33;\r\n    --theme-border-color: #373a40;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n    text-decoration: none;\r\n    color: var(--theme-body-text-color);\r\n    background-color: var(--theme-body-background);\r\n}\r\n\r\n#MangaOnlineViewer #Chapter {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    min-width: 225px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n    padding-bottom: 31px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\r\n    margin-bottom: 8px;\r\n    margin-top: 8px;\r\n}\r\n\r\n#MangaOnlineViewer .closeButton {\r\n    width: fit-content;\r\n    height: fit-content;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n}\r\n\r\n#MangaOnlineViewer .overlay {\r\n    position: fixed;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 950;\r\n    cursor: pointer;\r\n}\r\n\r\n#MangaOnlineViewer .overlay.visible {\r\n    display: block;\r\n}\r\n\r\n#MangaOnlineViewer select {\r\n    height: 20px;\r\n    padding: 0;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton,\r\n#MangaOnlineViewer .simpleButton {\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    padding: 2px;\r\n    min-height: 32px;\r\n    color: var(--theme-primary-text-color);\r\n    background-color: var(--theme-primary-color);\r\n    border-color: var(--theme-border-color);\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton:active,\r\n#MangaOnlineViewer .ControlButton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n#MangaOnlineViewer .simpleButton {\r\n    font-size: initial;\r\n    min-width: 32px;\r\n}\r\n\r\n#MangaOnlineViewer .panel .simpleButton {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n}\r\n\r\n#MangaOnlineViewer .panel {\r\n    padding: 5px;\r\n    position: inherit;\r\n    border-radius: 5px;\r\n    background-color: var(--theme-background-color);\r\n}\r\n\r\n#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n    max-width: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n#MangaOnlineViewer .ControlButton.hidden,\r\n#MangaOnlineViewer.light #ColorScheme > .icon-tabler-sun,\r\n#MangaOnlineViewer.dark #ColorScheme > .icon-tabler-moon,\r\n#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,\r\n#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,\r\n#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,\r\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\r\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\r\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\r\n#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,\r\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\r\n#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,\r\n#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer.hideControls .PageFunctions {\r\n    visibility: hidden;\r\n}\r\n";

  const icons = ".icon-tabler {\r\n    height: 1rem;\r\n    width: 1rem;\r\n    vertical-align: sub;\r\n}\r\n\r\n.icon-tabler-file-download > :nth-child(n + 4) {\r\n    /* 4, 5 */\r\n    color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n    /* 3,4,5,6 */\r\n    color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n    /* 3,4,5,6 */\r\n    color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n    color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n    color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n    color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n    color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n    color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n    color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n    color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n    color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n    color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > * {\r\n    color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > * {\r\n    color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n    color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n    color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n    color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n    color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n    color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n    color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > * {\r\n    color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > * {\r\n    color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n    color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n    color: greenyellow;\r\n}\r\n";

  const normalize$1 = "/*  Simple Normalizer */\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: var(--theme-body-text-color);\r\n    background-color: var(--theme-body-background);\r\n    padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n    color: var(--theme-body-text-color);\r\n    text-decoration: none;\r\n}\r\n\r\nimg {\r\n    height: auto;\r\n    vertical-align: middle;\r\n    border: 0 none;\r\n}\r\n";

  const media = "#MangaOnlineViewer.mobile #Header,\r\n#MangaOnlineViewer.tablet #Header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ViewerTitle,\r\n#MangaOnlineViewer.tablet .ViewerTitle {\r\n    order: 1;\r\n    min-height: auto;\r\n    padding: 0;\r\n    margin: 0;\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    flex-basis: 100%;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions,\r\n#MangaOnlineViewer.tablet #GlobalFunctions {\r\n    width: auto;\r\n    order: 2;\r\n    padding: 5px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #ChapterNavigation,\r\n#MangaOnlineViewer.tablet #ChapterNavigation {\r\n    order: 3;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\r\n#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Header {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\r\n    position: sticky;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #MangaTitle {\r\n    word-wrap: anywhere;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ViewerTitle {\r\n    order: 1;\r\n    margin-top: 0;\r\n    height: auto;\r\n    padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #GlobalFunctions {\r\n    order: 2;\r\n    padding: 0;\r\n    width: auto;\r\n    flex-basis: 35px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #ChapterNavigation {\r\n    order: 3;\r\n    width: min-content;\r\n    min-width: 205px;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ChapterControl {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {\r\n    flex-grow: 1;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .PageFunctions {\r\n    padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {\r\n    opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer.mobile #Navigation,\r\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\r\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),\r\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),\r\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,\r\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,\r\n#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,\r\n#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,\r\n#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,\r\n#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,\r\n#MangaOnlineViewer.mobile #SettingsPanel .minZoom,\r\n#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,\r\n#MangaOnlineViewer.mobile #SettingsPanel .headerType,\r\n#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,\r\n#MangaOnlineViewer.mobile #KeybindingsPanel,\r\n#MangaOnlineViewer.mobile .ChapterControl .download,\r\n#MangaOnlineViewer.mobile #Counters {\r\n    display: none;\r\n}\r\n";

  const animation = "@-webkit-keyframes spin {\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n    0% {\r\n        transform: rotate(360deg);\r\n    }\r\n\r\n    to {\r\n        transform: rotate(0);\r\n    }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n    0% {\r\n        transform: rotate(360deg);\r\n    }\r\n\r\n    to {\r\n        transform: rotate(0);\r\n    }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n    -webkit-animation: spin 1s linear infinite;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n    -webkit-animation: spin-reverse 1s linear infinite;\r\n    animation: spin-reverse 1s linear infinite;\r\n}\r\n";

  const header = "#MangaOnlineViewer #gotoPage {\r\n    min-width: 35px;\r\n}\r\n\r\n#MangaOnlineViewer #Header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-flow: row nowrap;\r\n    transition: transform 0.3s ease-in;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: inherit;\r\n    z-index: 900;\r\n}\r\n\r\n#MangaOnlineViewer #Header.click {\r\n    padding-left: 40px;\r\n}\r\n\r\n@keyframes headroom {\r\n    from {\r\n        transform: translateY(-100%);\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n    to {\r\n        transform: translateY(0%);\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n}\r\n\r\n#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n    animation: headroom 0.3s ease-in reverse;\r\n    transform: translateY(-100%);\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\r\n    position: fixed;\r\n    padding-left: 40px;\r\n    top: -100%;\r\n}\r\n\r\n#MangaOnlineViewer #Header.scroll.headroom-hide {\r\n    animation: none;\r\n    transform: translateY(-100%);\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.scroll.headroom-show,\r\n#MangaOnlineViewer #Header.headroom-end,\r\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\r\n#MangaOnlineViewer #Header.visible {\r\n    animation: headroom 0.3s ease-in;\r\n    transform: translateY(0%);\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Header.headroom-top {\r\n    animation: none;\r\n}\r\n\r\n#MangaOnlineViewer #Header.fixed {\r\n    position: sticky;\r\n    animation: none;\r\n    top: 0;\r\n    transform: translateY(0%);\r\n}\r\n\r\n#MangaOnlineViewer #Header.simple {\r\n    position: static;\r\n    animation: none;\r\n    top: 0;\r\n    transform: translateY(0%);\r\n}\r\n\r\n#MangaOnlineViewer #menu {\r\n    position: fixed;\r\n    z-index: 1;\r\n    color: var(--theme-body-text-color);\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n#MangaOnlineViewer #menu .icon-tabler {\r\n    position: relative;\r\n    top: 4px;\r\n    left: 4px;\r\n    height: 32px;\r\n    width: 32px;\r\n    stroke-width: 1.25;\r\n}\r\n\r\n#MangaOnlineViewer #menu:not(.click, .hover),\r\n#MangaOnlineViewer #menu.hide {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer #menu.click {\r\n    z-index: 901;\r\n}\r\n\r\n#MangaOnlineViewer #MangaTitle {\r\n    padding: 2px;\r\n    margin: 0;\r\n    font-size: 1.2rem;\r\n    font-weight: 400;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions {\r\n    display: flex;\r\n    gap: 3px;\r\n    padding: 3px 3px 3px 0;\r\n    flex-wrap: wrap;\r\n    width: 300px;\r\n    z-index: 100;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions span,\r\n#MangaOnlineViewer .ChapterControl span {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#MangaOnlineViewer .ChapterControl span {\r\n    flex-grow: 1;\r\n}\r\n\r\n#MangaOnlineViewer .ChapterControl span > * {\r\n    flex-basis: 50%;\r\n}\r\n\r\n#MangaOnlineViewer #ScrollControl .icon-tabler,\r\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #Zoom {\r\n    margin: 2px 5px;\r\n    width: 160px;\r\n}\r\n\r\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\r\n    width: 40px;\r\n    display: inline-block;\r\n    color: var(--theme-primary-text-color);\r\n    line-height: 20px;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    background: var(--theme-primary-color);\r\n    padding: 2px 5px;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterNavigation {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: center;\r\n    align-items: end;\r\n    padding: 5px;\r\n    max-width: 350px;\r\n}\r\n\r\n#MangaOnlineViewer #Counters {\r\n    padding-right: 5px;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl {\r\n    display: flex;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton {\r\n    display: inline-flex;\r\n    margin: 2px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 3px;\r\n    gap: 0.5em;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {\r\n    flex-shrink: 0;\r\n    align-self: center;\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='#'],\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=''],\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='undefined'] {\r\n    visibility: hidden;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl #download.loading {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n}\r\n\r\n#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {\r\n    pointer-events: none;\r\n    filter: grayscale(0.9);\r\n}\r\n\r\n#MangaOnlineViewer .ViewerTitle {\r\n    text-align: center;\r\n    min-height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    flex-basis: 60%;\r\n}\r\n";

  const keybindings$1 = "#MangaOnlineViewer #KeybindingsPanel {\r\n    padding: 10px;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: transform 0.3s ease-in-out;\r\n    transform: translateX(100%);\r\n    line-height: 1.5em;\r\n    z-index: 1000;\r\n    overflow-y: auto;\r\n    width: 360px;\r\n    max-width: 100vw;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel.visible {\r\n    transform: translateX(0);\r\n    display: block;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    gap: 5px;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel .ControlButton {\r\n    margin-left: 3px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px 10px;\r\n    gap: 0.5em;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel label {\r\n    display: ruby;\r\n}\r\n#MangaOnlineViewer #KeybindingsPanel input {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\r\n    grid-column: span 2;\r\n}\r\n";

  const page = "#MangaOnlineViewer .MangaPage {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    line-height: 0;\r\n    min-height: 22px;\r\n    min-width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer .PageContent {\r\n    text-align: center;\r\n    display: inline-block;\r\n    overflow-x: auto;\r\n    max-width: 100%;\r\n    transition: all 0.3s ease-in-out;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}\r\n\r\n#MangaOnlineViewer .MangaPage.hide .PageContent {\r\n    height: 0;\r\n}\r\n\r\n#MangaOnlineViewer .PageContent .PageImg[src=''],\r\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\r\n    width: 40vw;\r\n    height: 80vh;\r\n    display: inline-block;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 20%;\r\n    background-color: var(--theme-hightlight-color);\r\n}\r\n\r\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\r\n    width: 40vw;\r\n    height: 80vh;\r\n    display: inline-block;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 20%;\r\n    background-color: var(--theme-hightlight-color);\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions {\r\n    font-family: monospace;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    gap: 3px;\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions > .PageIndex {\r\n    background-color: var(--theme-primary-color);\r\n    color: var(--theme-primary-text-color);\r\n    min-width: 20px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding: 3px 5px;\r\n    line-height: 1rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions .ControlButton {\r\n    padding: 3px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\r\n    border-width: 0;\r\n    min-height: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\r\n    opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\r\n    opacity: 0.9;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .separator {\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical .separator::before,\r\n#MangaOnlineViewer #Chapter.Vertical .separator::after {\r\n    content: '';\r\n    flex: 1;\r\n    border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {\r\n    margin-right: 0.25em;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {\r\n    margin-left: 0.25em;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter:not(.separator) .separator,\r\n#MangaOnlineViewer #Chapter:not(.Vertical) .separator {\r\n    display: none;\r\n}\r\n";

  const fluid = "#MangaOnlineViewer #Chapter.FluidLTR,\r\n#MangaOnlineViewer #Chapter.FluidRTL {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    min-width: auto;\r\n\r\n    .ZoomWidth {\r\n        display: none;\r\n    }\r\n\r\n    .PageImg {\r\n        min-width: unset;\r\n    }\r\n\r\n    .MangaPage {\r\n        width: initial;\r\n        min-width: fit-content;\r\n        position: relative;\r\n        max-height: 100%;\r\n    }\r\n\r\n    .MangaPage.DoublePage {\r\n        grid-column: span 2;\r\n    }\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.FluidLTR {\r\n    flex-direction: row;\r\n\r\n    .MangaPage .PageFunctions {\r\n        right: auto;\r\n        left: 0;\r\n        direction: rtl;\r\n    }\r\n}\r\n\r\n#MangaOnlineViewer #Chapter.FluidRTL {\r\n    flex-direction: row-reverse;\r\n}\r\n";

  const settings$1 = "#MangaOnlineViewer #SettingsPanel {\r\n    color: var(--theme-text-color);\r\n    padding: 10px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    z-index: 1000;\r\n    transition: transform 0.3s ease-in,\r\n    background-color 0.3s linear;\r\n    transform: translateX(-100%);\r\n    display: flex;\r\n    flex-flow: column;\r\n    gap: 5px;\r\n    overflow-y: auto;\r\n    max-width: 100vw;\r\n    width: 305px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel.visible {\r\n    transform: translateX(0);\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel input[type='range'] {\r\n    width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel .RangeValue {\r\n    display: inline-block;\r\n    color: var(--theme-primary-text-color);\r\n    line-height: 20px;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    background: var(--theme-primary-color);\r\n    padding: 2px 5px;\r\n    margin-left: 8px;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel datalist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    writing-mode: vertical-lr;\r\n    width: 100%;\r\n}\r\n\r\n#MangaOnlineViewer #SettingsPanel datalist option {\r\n    padding: 0;\r\n}\r\n\r\n#MangaOnlineViewer #ThemeSection {\r\n    border: 1px solid var(--theme-body-text-color);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio {\r\n    border: 1px solid var(--theme-text-color);\r\n    color: var(--theme-primary-text-color);\r\n    background-color: var(--theme-primary-color);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    padding: 1px;\r\n    margin: 2px 5px;\r\n    position: relative;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio svg {\r\n    position: absolute;\r\n    top: 15%;\r\n    right: 15%;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\r\n    display: inline;\r\n}\r\n\r\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer #ThemeSelector {\r\n    width: 110px;\r\n}\r\n\r\n#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n    display: none;\r\n}\r\n";

  const thumbnails = "#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],\r\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\r\n    width: 100px;\r\n    height: 150px;\r\n    display: inline-block;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 20%;\r\n}\r\n\r\n#MangaOnlineViewer #NavigationCounters {\r\n    margin: 5px;\r\n    width: 100%;\r\n    line-height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation {\r\n    color: var(--theme-text-color);\r\n    background-color: var(--theme-hightlight-color);\r\n    bottom: -180px;\r\n    height: 185px;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding-bottom: 20px;\r\n    position: fixed;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition:\r\n        transform 0.3s ease-in,\r\n        background-color 0.3s linear;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    line-height: 0;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation #Thumbnails {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    margin-right: 10px;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation:hover {\r\n    transform: translateY(-180px);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation.disabled {\r\n    display: none;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation.visible {\r\n    transform: translateY(-180px);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail {\r\n    display: inline-block;\r\n    height: 150px;\r\n    margin: 0 5px;\r\n    border: 1px solid var(--theme-primary-color);\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\r\n    color: var(--theme-text-color);\r\n    background-color: var(--theme-hightlight-color);\r\n    display: block;\r\n    opacity: 0.8;\r\n    position: relative;\r\n    bottom: 25%;\r\n    width: 100%;\r\n    line-height: 1rem;\r\n}\r\n\r\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    max-height: 150px;\r\n    min-height: 150px;\r\n    min-width: 80px;\r\n    max-width: 160px;\r\n}\r\n";

  const bookmarks$1 = "#MangaOnlineViewer #BookmarksPanel {\r\n    position: fixed;\r\n    top: 10%;\r\n    width: 50%;\r\n    left: 25%;\r\n    right: 25%;\r\n    text-align: center;\r\n    max-height: 70%;\r\n    transition: transform 0.3s ease-in-out;\r\n    transform: scaleY(0);\r\n    z-index: 1000;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksPanel.visible {\r\n    transform: scaleY(1);\r\n    display: block;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList {\r\n    padding: 0 15px;\r\n    overflow: auto;\r\n    max-height: 60vh;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 2px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {\r\n    flex-basis: 90%;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {\r\n    width: 90px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkFunctions {\r\n    width: 75px;\r\n}\r\n\r\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    flex-basis: 55%;\r\n}\r\n";

  const comments = "#MangaOnlineViewer #CommentsPanel {\r\n    position: static;\r\n    width: 90%;\r\n    height: 0;\r\n    top: 5%;\r\n    left: 5%;\r\n    text-align: center;\r\n    transition: transform 0.3s ease-in-out;\r\n    transform: scaleY(0);\r\n    z-index: 1000;\r\n    overflow-y: initial;\r\n    background-color: var(--theme-body-background);\r\n    opacity: 0;\r\n}\r\n\r\n#MangaOnlineViewer #CommentsPanel.visible {\r\n    position: fixed;\r\n    height: 90%;\r\n    transform: scaleY(1);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    opacity: 1;\r\n}\r\n\r\n#MangaOnlineViewer #CommentsArea {\r\n    overflow-y: auto;\r\n    overscroll-behavior: contain;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--theme-body-background);\r\n}\r\n";

  const cssStyles = css`
  :root,
  .dark {
    --theme-body-background: ${colors.dark["600"]};
    --theme-body-text-color: ${colors.dark["50"]};
    --theme-text-color: ${colors.dark["50"]};
    --theme-primary-color: ${colors.dark["700"]};
    --theme-primary-text-color: ${colors.dark["50"]};
    --theme-background-color: ${colors.dark["600"]};
    --theme-hightlight-color: ${colors.dark["500"]};
    --theme-border-color: ${colors.dark["400"]};
  }

  .light {
    --theme-body-background: ${colors.gray["50"]};
    --theme-body-text-color: ${colors.gray["900"]};
    --theme-text-color: ${colors.gray["900"]};
    --theme-primary-color: ${colors.gray["300"]};
    --theme-primary-text-color: ${colors.gray["900"]};
    --theme-background-color: ${colors.gray["50"]};
    --theme-hightlight-color: ${colors.gray["500"]};
    --theme-border-color: ${colors.gray["100"]};
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

  ${normalize$1}
  ${styles}
  ${header}
  ${icons}
  ${keybindings$1}
  ${page}
  ${fluid}
  ${settings$1}
  ${thumbnails}
  ${bookmarks$1}
  ${comments}
  ${media}
  ${animation}
`;

  function createStyleElement(id, content) {
    const style = document.createElement("style");
    style.id = id;
    style.appendChild(document.createTextNode(content));
    return style;
  }
  function appendStyleSheet(id, content) {
    if (!document.querySelector(`#${id}`)) {
      const head = document.head ?? document.querySelector("head");
      head.appendChild(createStyleElement(id, content));
    }
  }
  function removeStyleSheet(id) {
    document.querySelectorAll(`style[id="${id}"]`).forEach((elem) => {
      elem.remove();
    });
  }
  function replaceStyleSheet(id, content) {
    removeStyleSheet(id);
    appendStyleSheet(id, content);
  }
  function wrapStyle(id, css) {
    return html`
    <style type="text/css" id="${id}">
      ${css}
    </style>
  `;
  }

  function generateThemeCSS(name, primary, text) {
    return css`
    .ThemeRadio.${name}, #MangaOnlineViewer[data-theme='${name}'] {
      --theme-primary-color: ${primary};
      --theme-primary-text-color: ${text};
    }
  `;
  }
  function getNormalThemeCSS(theme) {
    return generateThemeCSS(
      theme.name,
      theme[getUserSettings().themeShade],
      getUserSettings().themeShade < 500 ? theme["900"] : theme["50"]
    );
  }
  function getCustomThemeCSS(hex) {
    return generateThemeCSS("custom", hex, getTextColor(hex));
  }
  function addTheme(theme) {
    return wrapStyle(theme.name, getNormalThemeCSS(theme));
  }
  function addCustomTheme(hex) {
    replaceStyleSheet("custom", getCustomThemeCSS(hex));
  }
  const themes = () => Object.values(colors);
  function refreshThemes() {
    themes().forEach((theme) => {
      replaceStyleSheet(theme.name, getNormalThemeCSS(theme));
    });
    replaceStyleSheet("custom", getCustomThemeCSS(getUserSettings().customTheme));
  }
  const themesCSS = themes().map(addTheme).join("") + wrapStyle("custom", getCustomThemeCSS(getUserSettings().customTheme));

  const sweetalert = ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}";

  const normalize = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";

  const nprogress = "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n";

  const keyscss = "/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */";

  const fix = "#nprogress .bar {\r\n    background: #29d;\r\n    position: fixed;\r\n    z-index: 1031;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 4px;\r\n}\r\n\r\n#pagesSlider {\r\n    margin: 10px 0;\r\n}\r\n\r\n#pageInputs {\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#swal2-html-container .pageInput {\r\n    border: 1px darkblue dashed;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    background-color: aliceblue;\r\n    color: black;\r\n    max-width: 40%;\r\n}\r\n\r\n#swal2-title {\r\n    color: navy;\r\n}\r\n\r\nbutton.swal2-styled {\r\n    position: inherit;\r\n    transform: inherit;\r\n}\r\n";

  const sweetalertStyle = [normalize, sweetalert, fix, nprogress, keyscss].join("\n");

  function head(manga) {
    return html`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle("externals", sweetalertStyle)} ${wrapStyle("reader", cssStyles)} ${themesCSS}
    ${wrapStyle(
    "MinZoom",
    `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getUserSettings().minZoom}vw;}`
  )}
  `;
  }

  async function fetchText(url, format) {
    return new Promise((resolve) => {
      logScript("Fetching page: ", url);
      fetch(url).then(
        async (response) => (
          // When the page is loaded convert it to text
          response.text()
        )
      ).then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, format);
        resolve(doc);
      }).catch((err) => {
        logScript("Failed to fetch page: ", err);
      });
    });
  }
  async function fetchHtml(url) {
    return fetchText(url, "text/html");
  }
  async function getElementAttribute(url, selector, attribute) {
    return fetchHtml(url).then((doc) => doc.querySelector(selector)?.getAttribute(attribute));
  }

  const objectURLRegex = /^blob:(.+?)\/(.+)$/;
  function getDataFromBase64(src) {
    return src.slice(src.indexOf(";base64,") + 8);
  }
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif);base64,/;
    return base64Pattern.test(imageUrl);
  }
  function isObjectURL(url) {
    return objectURLRegex.test(url);
  }
  function getExtension(url) {
    const parts = url.split("?");
    const filename = parts[0].split("/").pop();
    const extensionMatch = filename?.match(/\.[A-Za-z]{2,4}$/);
    return extensionMatch ? extensionMatch[0].slice(1) : "";
  }
  const getExtensionBase64 = (base64) => {
    const c = base64.substring(base64.indexOf("/") + 1, base64.indexOf(";base64"));
    switch (c) {
      case "/":
        return "jpg";
      case "R":
        return "gif";
      case "U":
        return "webp";
      case "i":
      default:
        return "png";
    }
  };

  const settings = {
    threshold: 2e3,
    throttle: 500,
    lazyAttribute: "data-src",
    targetAttribute: "src"
  };
  let listElements = [];
  let setup = false;
  function filterInView(value) {
    const { element } = value;
    const rect = element.getBoundingClientRect();
    const target = (window.innerHeight || document.documentElement.clientHeight) + settings.threshold;
    return rect.top <= target || rect.bottom <= target;
  }
  async function showElement(item) {
    let value = item.element.getAttribute(settings.lazyAttribute) ?? "";
    if (value) {
      if (!isObjectURL(value) && !isBase64ImageUrl(value) && item.fetchOptions) {
        value = await fetch(value, item.fetchOptions).then((resp) => resp.blob()).then((blob) => blobUtil.blobToDataURL(blob));
      }
      item.element.setAttribute(settings.targetAttribute, value);
    }
    item.callback(item.element)?.catch(logScript);
  }
  function executeCheck() {
    const inView = listElements.filter(filterInView);
    listElements = listElements.filter((item) => !filterInView(item));
    inView.forEach(showElement);
  }
  const observerEvent = _.throttle(executeCheck, settings.throttle);
  function lazyLoad(element, callback, fetchOptions) {
    if (!setup) {
      window.addEventListener("scroll", observerEvent, {
        passive: true
      });
      window.addEventListener("touchmove", observerEvent, {
        passive: true
      });
      window.addEventListener("resize", observerEvent, {
        passive: true
      });
      setup = true;
    }
    listElements.push({ element, callback, fetchOptions });
    observerEvent();
  }

  function indexList(repeat, begin = 1) {
    return Array(repeat).fill(0).map((_, i) => i + 1).filter((i) => i >= begin);
  }

  const listBookmarks = () => {
    if (isEmpty(getUserSettings().bookmarks)) {
      return [getLocaleString("LIST_EMPTY")];
    }
    return getUserSettings().bookmarks.map(
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
    `
    );
  };
  function reloadBookmarks() {
    const list = document.getElementById("BookmarksList");
    if (list) {
      list.innerHTML = listBookmarks().join("");
    }
  }

  function scrollToElement(ele) {
    const chapter = document.querySelector("#Chapter");
    if (chapter?.classList.contains("FluidLTR") || chapter?.classList.contains("FluidRTL")) {
      chapter?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
  }
  function addEvent(ev, fn) {
    return (elem) => elem.addEventListener(ev, fn);
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
    document.querySelector("#BookmarksPanel")?.classList.remove("visible");
    document.querySelector("#Overlay")?.classList.remove("visible");
  }
  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      updateSettings({
        bookmarks: getUserSettings().bookmarks.filter((el) => el.url !== url)
      });
      if (url === window.location.href) {
        document.querySelector("#MangaOnlineViewer")?.classList.remove("bookmarked");
      }
    }
  }
  function buttonEraseBookmarks(event) {
    const target = event.currentTarget.value;
    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: getLocaleString("BOOKMARK_REMOVED"),
      timer: 1e4,
      icon: "error"
    });
    removeURLBookmark(target);
    reloadBookmarks();
    document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(addEvent("click", buttonEraseBookmarks));
  }
  function buttonBookmarksOpen() {
    reloadBookmarks();
    document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(addEvent("click", buttonEraseBookmarks));
    document.querySelector("#BookmarksPanel")?.classList.add("visible");
    document.querySelector("#Overlay")?.classList.add("visible");
  }
  function buttonBookmark(event) {
    document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");
    const pagesDistance = [...document.querySelectorAll(".MangaPage")].map(
      (element) => Math.abs(element.offsetTop - window.scrollY)
    );
    const currentPage = parseInt(
      event.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent ?? "0",
      10
    );
    const num = currentPage || pagesDistance.indexOf(Math.min(...pagesDistance)) + 1;
    const mark = {
      name: document.querySelector("title")?.textContent?.trim().replace(/^\(\d+%\) */, "") ?? "",
      url: window.location.href,
      page: num,
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    };
    if (isBookmarked(mark.url)) {
      updateSettings({
        bookmarks: getUserSettings().bookmarks.filter((el) => el.url !== mark.url)
      });
      Swal.fire({
        title: getLocaleString("BOOKMARK_REMOVED"),
        timer: 1e4,
        icon: "error"
      });
    } else {
      updateSettings({ bookmarks: [...getUserSettings().bookmarks, mark] });
      Swal.fire({
        title: getLocaleString("BOOKMARK_SAVED"),
        html: getLocaleString("BOOKMARK_SAVED").replace("##NUM##", num.toString()),
        icon: "success"
      });
    }
    reloadBookmarks();
    document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(addEvent("click", buttonEraseBookmarks));
  }
  function bookmarks() {
    document.querySelector("#bookmarks")?.addEventListener("click", buttonBookmarksOpen);
    document.querySelectorAll(".closeButton")?.forEach(addEvent("click", buttonBookmarksClose));
    document.querySelector("#Overlay")?.addEventListener("click", buttonBookmarksClose);
    document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(addEvent("click", buttonEraseBookmarks));
    document.querySelectorAll(".Bookmark")?.forEach(addEvent("click", buttonBookmark));
    document.querySelector(".AddBookmark")?.addEventListener("click", buttonBookmark);
  }

  function applyZoom(zoom = getUserSettings().zoomMode, pages = ".PageContent img") {
    const pg = [...document.querySelectorAll(pages)];
    pg.forEach((img) => {
      img.removeAttribute("width");
      img.removeAttribute("height");
      img.removeAttribute("style");
      if (zoom === "width") {
        img.style.width = `${window.innerWidth}px`;
      } else if (zoom === "height") {
        const nextHeight = window.innerHeight + (getUserSettings().showThumbnails ? -29 : 0);
        img.style.height = `${nextHeight}px`;
        img.style.minWidth = "unset";
      } else if (zoom === "percent") {
        img.style.width = `${img.naturalWidth * (getUserSettings().defaultZoom / 100)}px`;
      } else if (zoom >= 0 && zoom !== 100) {
        img.style.width = `${img.naturalWidth * (zoom / 100)}px`;
      }
    });
  }
  function invalidateImageCache(src, repeat) {
    const url = src.replace(/[?&]forceReload=\d+$/, "");
    const symbol = !url.includes("?") ? "?" : "&";
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
    const src = img.getAttribute("src");
    if (!src) {
      return;
    }
    img.removeAttribute("src");
    if (isBase64ImageUrl(src) || isObjectURL(src)) {
      img.setAttribute("src", src);
    } else {
      img.setAttribute("src", invalidateImageCache(src, getRepeatValue(src)));
    }
  }
  function onImagesDone() {
    logScript("Images Loading Complete");
    if (getUserSettings().downloadZip) {
      document.getElementById("download")?.dispatchEvent(new Event("click"));
    }
    document.getElementById("download")?.classList.remove("disabled");
  }
  function updateProgress() {
    const total = document.querySelectorAll(".PageContent .PageImg").length;
    const loaded = document.querySelectorAll(".PageContent .PageImg.imgLoaded").length;
    const percentage = Math.floor(loaded / total * 100);
    const title = document.querySelector("title");
    if (title) {
      title.innerHTML = html`(${percentage}%) ${document.querySelector("#MangaTitle")?.textContent}`;
    }
    document.querySelectorAll("#Counters i, #NavigationCounters i").forEach((ele) => {
      ele.textContent = loaded.toString();
    });
    NProgress.configure({
      showSpinner: false
    }).set(loaded / total);
    logScript(`Progress: ${percentage}%`);
    if (loaded === total) {
      onImagesDone();
    }
  }
  const applyLastGlobalZoom = (pages = ".PageContent img") => {
    const zoomVal = document.querySelector("#ZoomVal")?.textContent?.trim();
    if (zoomVal?.match(/^\d+%$/)) {
      applyZoom(parseInt(zoomVal, 10), pages);
    } else {
      applyZoom(zoomVal, pages);
    }
  };
  function onImagesSuccess() {
    return (instance) => {
      instance.images.forEach((image) => {
        image.img.classList.add("imgLoaded");
        image.img.classList.remove("imgBroken");
        const thumbId = image.img.id.replace("PageImg", "ThumbnailImg");
        const thumb = document.getElementById(thumbId);
        thumb?.classList.remove("imgBroken");
        if (thumb) {
          thumb.setAttribute("src", image.img.getAttribute("src"));
        }
        applyLastGlobalZoom(`#${image.img.id}`);
        updateProgress();
      });
    };
  }
  function onImagesFail(manga) {
    return (instance) => {
      instance.images.forEach((image) => {
        image.img.classList.add("imgBroken");
        const thumbId = image.img.id.replace("PageImg", "ThumbnailImg");
        const thumb = document.getElementById(thumbId);
        thumb?.classList.add("imgBroken");
        const src = image.img.getAttribute("src");
        if (src && getRepeatValue(src) <= getUserSettings().maxReload) {
          setTimeout(async () => {
            if (manga.reload) {
              const id = parseInt(`0${/\d+/.exec(image.img.id)}`, 10);
              const alt = await manga.reload(id);
              image.img.setAttribute("src", alt);
            } else {
              reloadImage(image.img);
            }
            const imgLoad = imagesLoaded(image.img.parentElement);
            imgLoad.on("done", onImagesSuccess());
            imgLoad.on("fail", onImagesFail(manga));
          }, 2e3);
        }
      });
    };
  }
  function normalizeUrl(url) {
    if (url) {
      let uri = url.trim();
      if (uri.startsWith("//")) {
        uri = `https:${uri}`;
      }
      return uri;
    }
    return "";
  }
  function addImg(manga, index, imageSrc, position) {
    const relativePosition = position - manga.begin;
    let src = normalizeUrl(imageSrc);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (!getUserSettings().lazyLoadImages || relativePosition <= getUserSettings().lazyStart) {
        setTimeout(
          async () => {
            if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
              src = await fetch(src, manga.fetchOptions).then((resp) => resp.blob()).then((blob) => blobUtil.blobToDataURL(blob));
            }
            const imgLoad = imagesLoaded(img.parentElement);
            imgLoad.on("done", onImagesSuccess());
            imgLoad.on("fail", onImagesFail(manga));
            img.setAttribute("src", src);
            logScript("Loaded Image:", index, "Source:", src);
          },
          (manga.timer ?? getUserSettings().throttlePageLoad) * relativePosition
        );
      } else {
        img.setAttribute("data-src", normalizeUrl(src));
        lazyLoad(
          img,
          () => {
            const imgLoad = imagesLoaded(img.parentElement);
            imgLoad.on("done", onImagesSuccess());
            imgLoad.on("fail", onImagesFail(manga));
            logScript("Lazy Image: ", index, " Source: ", img.getAttribute("src"));
          },
          manga.fetchOptions
        );
      }
      if (manga.pages === position) removeURLBookmark();
    }
  }
  function findPage(manga, index, pageUrl, lazy) {
    return async () => {
      const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? "src");
      const img = document.querySelector(`#PageImg${index}`);
      if (src && img) {
        img.style.width = "auto";
        const imgLoad = imagesLoaded(img.parentElement);
        imgLoad.on("done", onImagesSuccess());
        imgLoad.on("fail", onImagesFail(manga));
        img.setAttribute("src", src);
        logScript(`${lazy && "Lazy "}Page: `, index, " Source: ", img.getAttribute("src"));
      }
    };
  }
  async function addPage(manga, index, pageUrl, position) {
    const relativePosition = position - manga.begin;
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (!getUserSettings().lazyLoadImages || relativePosition <= getUserSettings().lazyStart) {
        setTimeout(
          () => {
            findPage(manga, index, pageUrl, false)().catch(logScript);
          },
          (manga.timer ?? getUserSettings().throttlePageLoad) * relativePosition
        );
      } else {
        img.setAttribute(
          "data-src",
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        );
        lazyLoad(img, findPage(manga, index, pageUrl, true));
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
    getUserSettings().lazyLoadImages = manga.lazy ?? getUserSettings().lazyLoadImages;
    logScript("Loading Images");
    logScript(`Intervals: ${manga.timer ?? getUserSettings().throttlePageLoad ?? "Default(1000)"}`);
    logScript(
      `Lazy: ${getUserSettings().lazyLoadImages}, Starting from: ${getUserSettings().lazyStart}`
    );
    if (isImagesManga(manga)) {
      logScript("Method: Images:", manga.listImages);
      loadMangaImages(begin, manga);
    } else if (isPagesManga(manga)) {
      logScript("Method: Pages:", manga.listPages);
      loadMangaPages(begin, manga);
    } else if (isBruteforceManga(manga)) {
      logScript("Method: Brute Force");
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
            lazyAttr
          });
        },
        wait: getUserSettings().throttlePageLoad
      });
    } else {
      logScript("No Loading Method Found");
    }
  }

  var FileSaver_min$1 = {exports: {}};

  var FileSaver_min = FileSaver_min$1.exports;

  var hasRequiredFileSaver_min;

  function requireFileSaver_min () {
  	if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
  	hasRequiredFileSaver_min = 1;
  	(function (module, exports) {
  		(function(a,b){b();})(FileSaver_min,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

  		
  	} (FileSaver_min$1));
  	return FileSaver_min$1.exports;
  }

  var FileSaver_minExports = requireFileSaver_min();

  let zip;
  const getFilename = (name, index, total, ext) => `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, "0")}.${ext.replace(
  "jpeg",
  "jpg"
)}`;
  async function getImage(src) {
    return new Promise((resolve, reject) => {
      logScript(`Getting Image data: ${src}`);
      GM_xmlhttpRequest({
        method: "GET",
        url: src,
        headers: { referer: window.location.host, origin: window.location.host },
        responseType: "blob",
        onload(response) {
          if (response.status !== 200) {
            reject(response);
          }
          resolve(response);
        }
      });
    });
  }
  async function getImageData(img, index, array) {
    const src = img.getAttribute("src") ?? img.getAttribute("data-src") ?? "";
    if (isObjectURL(src)) {
      throw new Error("Image source unusable");
    }
    if (isBase64ImageUrl(src)) {
      return Promise.resolve({
        name: getFilename("Page-", index, array.length, getExtensionBase64(src)),
        data: getDataFromBase64(src) ?? ""
      });
    }
    return new Promise((resolve) => {
      getImage(src).then((res) => {
        resolve({
          name: getFilename("Page-", index, array.length, getExtension(src)),
          data: res.response
        });
      }).catch(logScriptC("Image not Available"));
    });
  }
  function addZip(img) {
    logScript(`${img.name} Added to Zip from Base64 Image`);
    zip.file(img.name, img.data, {
      base64: true,
      createFolders: true,
      compression: "DEFLATE"
    });
  }
  async function generateZip() {
    zip = new JSZip();
    const images = [...document.querySelectorAll(".PageImg")];
    Promise.all(images.map(getImageData)).then((data) => {
      data.forEach(addZip);
      logScript("Generating Zip");
      zip.generateAsync(
        {
          type: "blob"
        }
        // LogScript, progress
      ).then((content) => {
        logScript("Download Ready");
        const zipName = `${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;
        FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
        document.getElementById("download")?.classList.remove("loading");
      }).catch(logScript);
    }).catch((msg) => logScript("One or more images couldn't be Downloaded", msg));
  }

  function buttonStartDownload(event) {
    const button = event.currentTarget;
    if (button.classList.contains("loading")) {
      return;
    }
    logScript("Downloading Chapter");
    button.classList.add("loading");
    generateZip().catch((err) => logScript("Error downloading chapter", err));
  }
  function buttonGlobalHideImageControls() {
    document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls");
  }
  function buttonRedirectURL(event) {
    const element = event.target;
    const url = element.getAttribute("value") ?? element.getAttribute("href");
    if (event.button !== 1 && !event.ctrlKey) {
      if (url && url !== "#") {
        window.location.href = url;
      } else if (element.id === "series") {
        window.history.back();
      }
    }
  }
  function buttonCommentsOpen() {
    document.querySelector("#CommentsPanel")?.classList.add("visible");
    document.querySelector("#Overlay")?.classList.add("visible");
  }
  function buttonCommentsClose() {
    document.querySelector("#CommentsPanel")?.classList.remove("visible");
    document.querySelector("#Overlay")?.classList.remove("visible");
  }
  function changeCommentsColor() {
    const elem = document.querySelector("#CommentsArea");
    elem?.classList.toggle("light");
    elem?.classList.toggle("dark");
  }
  function globals() {
    document.querySelector("#download")?.addEventListener("click", buttonStartDownload);
    document.querySelector("#pageControls")?.addEventListener("click", buttonGlobalHideImageControls);
    document.querySelector("#next")?.addEventListener("click", buttonRedirectURL);
    document.querySelector("#prev")?.addEventListener("click", buttonRedirectURL);
    document.querySelector("#series")?.addEventListener("click", buttonRedirectURL);
    document.querySelector("#CommentsButton")?.addEventListener("click", buttonCommentsOpen);
    document.querySelector("#CommentsColorScheme")?.addEventListener("click", changeCommentsColor);
    document.querySelectorAll(".closeButton")?.forEach(addEvent("click", buttonCommentsClose));
    document.querySelector("#Overlay")?.addEventListener("click", buttonCommentsClose);
  }

  function headroom(showEnd = 0) {
    let prevOffset = 0;
    const setScrollDirection = (classSuffix) => {
      const header = document.querySelector("#Header");
      header.classList.remove("headroom-end", "headroom-hide", "headroom-show", "headroom-top");
      if (classSuffix) {
        header.classList.add(`headroom-${classSuffix}`);
      }
    };
    function toggleScrollDirection() {
      const { scrollY } = window;
      if (showEnd && getUserSettings().zoomMode !== "height" && scrollY + window.innerHeight + showEnd > document.body.scrollHeight) {
        setScrollDirection("end");
      } else if (scrollY > prevOffset && scrollY > 50) {
        setScrollDirection("hide");
      } else if (scrollY < prevOffset && scrollY > 50) {
        setScrollDirection("show");
      } else if (scrollY <= 100) {
        setScrollDirection("top");
      } else {
        setScrollDirection("");
      }
      prevOffset = scrollY;
    }
    window.addEventListener("scroll", _.debounce(toggleScrollDirection, 50));
  }

  const doClick = (selector) => document.querySelector(selector)?.dispatchEvent(new Event("click"));
  function doScrolling(sign) {
    const chapter = document.querySelector("#Chapter");
    if (chapter?.classList.contains("FluidLTR") || chapter?.classList.contains("FluidRTL")) {
      chapter.scrollBy({
        left: window.innerWidth / 2 * sign * (chapter?.classList.contains("FluidRTL") ? -1 : 1),
        behavior: "smooth"
      });
    } else if (getUserSettings().zoomMode === "height") {
      const pages = [...document.querySelectorAll(".MangaPage")];
      const distance = pages.map((element) => Math.abs(element.offsetTop - window.scrollY));
      const currentPage = _.indexOf(distance, _.min(distance));
      const target = currentPage + sign;
      const header = document.querySelector("#Header");
      if (target < 0) {
        scrollToElement(header);
      } else if (target >= pages.length) {
        header.classList.add("headroom-end");
      } else {
        logScript(`Current array page ${currentPage},`, `Scrolling to page ${target}`);
        scrollToElement(pages.at(target));
      }
    } else {
      window.scrollBy({
        top: sign * window.innerHeight / 2,
        behavior: "smooth"
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
      doClick("#next");
    },
    PREVIOUS_CHAPTER() {
      doClick("#prev");
    },
    ENLARGE() {
      doClick("#enlarge");
    },
    REDUCE() {
      doClick("#reduce");
    },
    RESTORE() {
      doClick("#restore");
    },
    FIT_WIDTH() {
      doClick("#fitWidth");
    },
    FIT_HEIGHT() {
      doClick("#fitHeight");
    },
    SETTINGS() {
      doClick("#settings");
    },
    VIEW_MODE_WEBCOMIC() {
      doClick("#webComic");
    },
    VIEW_MODE_VERTICAL() {
      doClick("#verticalMode");
    },
    VIEW_MODE_LEFT() {
      doClick("#rtlMode");
    },
    VIEW_MODE_RIGHT() {
      doClick("#ltrMode");
    },
    SCROLL_START() {
      doClick("#AutoScroll");
    }
  };
  function keybindings() {
    document.onkeydown = null;
    document.onkeyup = null;
    window.onkeydown = null;
    window.onkeyup = null;
    window.onload = null;
    document.body.onload = null;
    hotkeys.unbind();
    Object.keys(getUserSettings().keybinds).forEach((key) => {
      hotkeys(
        getUserSettings().keybinds[key]?.join(",") ?? "",
        _.throttle((event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          actions[key]();
        }, 100)
      );
    });
  }

  function buttonReloadPage(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector(
      ".PageImg"
    );
    reloadImage(img);
  }
  function buttonHidePage(event) {
    const img = event.currentTarget.parentElement?.parentElement;
    img.classList.toggle("hide");
  }
  function individual() {
    document.querySelectorAll(".Reload")?.forEach(addEvent("click", buttonReloadPage));
    document.querySelectorAll(".Hide")?.forEach(addEvent("click", buttonHidePage));
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
        `#Page${event.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`
      )
    );
  }
  function navigation() {
    document.querySelector("#gotoPage")?.addEventListener("change", selectGoToPage);
    document.querySelectorAll(".Thumbnail")?.forEach(addEvent("click", clickThumbnail));
    document.querySelector("#Thumbnails")?.addEventListener("wheel", transformScrollToHorizontal);
  }

  function buttonResetSettings() {
    resetSettings();
    const elem = document.getElementById("MangaOnlineViewer");
    elem?.removeAttribute("locale");
    elem?.dispatchEvent(new Event("hydrate"));
  }
  function changeLocale(event) {
    const locale = event.currentTarget.value;
    updateSettings({ locale });
    const elem = document.getElementById("MangaOnlineViewer");
    elem?.setAttribute("locale", locale);
    elem?.dispatchEvent(new Event("hydrate"));
  }
  function changeLoadMode(event) {
    const mode = event.currentTarget.value;
    updateSettings({ loadMode: mode });
  }
  function checkFitWidthOversize(event) {
    document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize");
    updateSettings({ fitWidthIfOversize: event.currentTarget.checked });
  }
  function checkVerticalSeparator(event) {
    document.querySelector("#Chapter")?.classList.toggle("separator");
    updateSettings({ verticalSeparator: event.currentTarget.checked });
  }
  function checkShowThumbnails(event) {
    document.querySelector("#Navigation")?.classList.toggle("disabled");
    updateSettings({ showThumbnails: event.currentTarget.checked });
    applyZoom();
  }
  function checkEnableComments(event) {
    document.querySelector("#CommentsButton")?.classList.toggle("disabled");
    updateSettings({ enableComments: event.currentTarget.checked });
    applyZoom();
  }
  function changeAutoDownload(event) {
    updateSettings({ downloadZip: event.currentTarget.checked });
    if (event.currentTarget.checked) {
      Swal.fire({
        title: getLocaleString("ATTENTION"),
        text: getLocaleString("AUTO_DOWNLOAD"),
        timer: 1e4,
        icon: "info"
      });
    }
  }
  function checkLazyLoad(event) {
    updateSettings({ lazyLoadImages: event.currentTarget.checked });
    const start = document.querySelector(".lazyStart");
    if (getUserSettings().lazyLoadImages) {
      start?.classList.add("show");
    } else {
      start?.classList.remove("show");
    }
    if (event.currentTarget.checked) {
      Swal.fire({
        title: getLocaleString("WARNING"),
        html: getLocaleString("LAZY_LOAD"),
        icon: "warning"
      });
    }
  }
  function changeLazyStart(event) {
    const start = event.currentTarget.value;
    updateSettings({ lazyStart: parseInt(start, 10) });
  }
  function changePagesPerSecond(event) {
    const timer = parseInt(event.currentTarget.value, 10);
    updateSettings({ throttlePageLoad: timer });
    if (timer < 100) {
      Swal.fire({
        title: getLocaleString("SPEED_WARNING"),
        html: getLocaleString("SPEED_WARNING_MESSAGE"),
        icon: "warning"
      });
    }
  }
  function changeZoomStep(event) {
    const step = event.currentTarget.value;
    updateSettings({ zoomStep: parseInt(step, 10) });
  }
  function changeMinZoom(event) {
    const min = event.currentTarget.value;
    replaceStyleSheet("MinZoom", `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    updateSettings({ minZoom: parseInt(min, 10) });
  }
  function checkHideImageControls(event) {
    document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls");
    updateSettings({ hidePageControls: event.currentTarget.checked });
  }
  function updateHeaderType(mode) {
    const header = document.querySelector("#Header");
    if (!header?.classList.contains(mode)) {
      const menu = document.querySelector("#menu");
      header?.classList.remove("scroll", "click", "hover", "fixed", "simple", "visible");
      menu?.classList.remove("scroll", "click", "hover", "fixed", "simple", "hide");
      header?.classList.add(mode);
      menu?.classList.add(mode);
    }
  }
  function changeHeaderType(event) {
    const headerType = event.currentTarget.value;
    updateHeaderType(headerType);
    updateSettings({ header: headerType });
  }
  function changeScrollHeight(event) {
    const { value } = event.currentTarget;
    updateSettings({ scrollHeight: parseInt(value, 10) });
  }
  function options() {
    document.querySelector("#ResetSettings")?.addEventListener("click", buttonResetSettings);
    document.querySelector("#locale")?.addEventListener("change", changeLocale);
    document.querySelector("#fitIfOversize")?.addEventListener("change", checkFitWidthOversize);
    document.querySelector("#verticalSeparator")?.addEventListener("change", checkVerticalSeparator);
    document.querySelector("#loadMode")?.addEventListener("change", changeLoadMode);
    document.querySelector("#showThumbnails")?.addEventListener("change", checkShowThumbnails);
    document.querySelector("#enableComments")?.addEventListener("change", checkEnableComments);
    document.querySelector("#downloadZip")?.addEventListener("change", changeAutoDownload);
    document.querySelector("#lazyLoadImages")?.addEventListener("change", checkLazyLoad);
    document.querySelector("#lazyStart")?.addEventListener("change", changeLazyStart);
    document.querySelector("#PagesPerSecond")?.addEventListener("change", changePagesPerSecond);
    document.querySelector("#zoomStep")?.addEventListener("change", changeZoomStep);
    document.querySelector("#minZoom")?.addEventListener("input", changeMinZoom);
    document.querySelector("#hidePageControls")?.addEventListener("change", checkHideImageControls);
    document.querySelector("#headerType")?.addEventListener("change", changeHeaderType);
    document.querySelector("#scrollHeight")?.addEventListener("change", changeScrollHeight);
  }

  const keybindList = () => Object.keys(getUserSettings().keybinds).map((kb) => {
    const keys = getUserSettings().keybinds[kb]?.length ? getUserSettings().keybinds[kb]?.map((key) => html`<kbd class="dark">${key}</kbd>`).join(" / ") : "";
    return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
  const keybindEditor = () => Object.keys(getUserSettings().keybinds).map(
    // Language=html
    (kb) => html`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getUserSettings().keybinds[kb]?.join(" , ") ?? ""}"
          />`
  ).concat(html`<div id="HotKeysRules">${getLocaleString("KEYBIND_RULES")}</div>`);

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
    const header = document.querySelector("#Header");
    if (header?.classList.contains("click")) {
      header?.classList.toggle("visible");
    }
  }
  function isMouseInsideRegion(event, headerWidth, headerHeight) {
    return event.clientX >= 0 && event.clientX <= headerWidth && event.clientY >= 0 && event.clientY <= headerHeight;
  }
  function headerHover(event) {
    const header = document.querySelector("#Header");
    if (header?.classList.contains("hover")) {
      if (isMouseInsideRegion(event, header.clientWidth, header.clientHeight)) {
        document.querySelector("#menu")?.classList.add("hide");
        header?.classList.add("visible");
      } else {
        document.querySelector("#menu")?.classList.remove("hide");
        header?.classList.remove("visible");
      }
    }
  }
  function buttonSettingsOpen() {
    document.querySelector("#SettingsPanel")?.classList.add("visible");
    document.querySelector("#Navigation")?.classList.add("visible");
    document.querySelector("#Header")?.classList.add("visible");
    document.querySelector("#Overlay")?.classList.add("visible");
  }
  function buttonSettingsClose() {
    document.querySelector("#SettingsPanel")?.classList.remove("visible");
    document.querySelector("#Navigation")?.classList.remove("visible");
    document.querySelector("#Header")?.classList.remove("visible");
    document.querySelector("#Overlay")?.classList.remove("visible");
  }
  function buttonKeybindingsOpen() {
    document.querySelector("#KeybindingsList").innerHTML = keybindList().join("\n");
    document.querySelector("#SaveKeybindings")?.classList.add("hidden");
    document.querySelector("#EditKeybindings")?.classList.remove("hidden");
    document.querySelector("#KeybindingsPanel")?.classList.add("visible");
    document.querySelector("#Overlay")?.classList.add("visible");
  }
  function buttonKeybindingsClose() {
    document.querySelector("#SaveKeybindings")?.classList.add("hidden");
    document.querySelector("#EditKeybindings")?.classList.remove("hidden");
    document.querySelector("#KeybindingsPanel")?.classList.remove("visible");
    document.querySelector("#Overlay")?.classList.remove("visible");
  }
  function saveKeybindings() {
    const newkeybinds = getUserSettings().keybinds;
    Object.keys(getUserSettings().keybinds).forEach((kb) => {
      const keys = document.querySelector(`#${kb}`)?.value.split(",")?.map((value) => value.trim());
      newkeybinds[kb] = isNothing(keys) ? void 0 : keys;
    });
    updateSettings({ keybinds: newkeybinds });
    document.querySelector("#KeybindingsList").innerHTML = keybindList().join("\n");
    document.querySelector("#SaveKeybindings")?.classList.add("hidden");
    document.querySelector("#EditKeybindings")?.classList.remove("hidden");
    keybindings();
  }
  function editKeybindings() {
    document.querySelector("#KeybindingsList").innerHTML = keybindEditor().join("\n");
    document.querySelector("#SaveKeybindings")?.classList.remove("hidden");
    document.querySelector("#EditKeybindings")?.classList.add("hidden");
  }
  function panels() {
    document.querySelector("#menu")?.addEventListener("click", buttonHeaderClick);
    document.addEventListener("mousemove", _.throttle(headerHover, 300));
    document.querySelector("#settings")?.addEventListener(
      "click",
      toggleFunction("#SettingsPanel", "visible", buttonSettingsOpen, buttonSettingsClose)
    );
    document.querySelectorAll(".closeButton")?.forEach(addEvent("click", buttonSettingsClose));
    document.querySelector("#Overlay")?.addEventListener("click", buttonSettingsClose);
    document.querySelector("#keybindings")?.addEventListener("click", buttonKeybindingsOpen);
    document.querySelectorAll(".closeButton")?.forEach(addEvent("click", buttonKeybindingsClose));
    document.querySelector("#Overlay")?.addEventListener("click", buttonKeybindingsClose);
    document.querySelector("#EditKeybindings")?.addEventListener("click", editKeybindings);
    document.querySelector("#SaveKeybindings")?.addEventListener("click", saveKeybindings);
  }

  function buttonZoomIn(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector(
      ".PageImg"
    );
    const ratio = img.width / img.naturalWidth * (100 + getUserSettings().zoomStep);
    applyZoom(ratio, `#${img.getAttribute("id")}`);
  }
  function buttonZoomOut(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector(
      ".PageImg"
    );
    const ratio = img.width / img.naturalWidth * (100 - getUserSettings().zoomStep);
    applyZoom(ratio, `#${img.getAttribute("id")}`);
  }
  function buttonRestoreZoom() {
    document.querySelector(".PageContent .PageImg")?.removeAttribute("width");
  }
  function buttonZoomWidth(event) {
    const page = event.currentTarget.parentElement?.parentElement;
    const img = page?.querySelector(".PageImg");
    applyZoom("width", `#${img.getAttribute("id")}`);
    page?.classList.toggle("DoublePage");
  }
  function buttonZoomHeight(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector(
      ".PageImg"
    );
    applyZoom("height", `#${img.getAttribute("id")}`);
  }
  function size() {
    document.querySelectorAll(".ZoomIn")?.forEach(addEvent("click", buttonZoomIn));
    document.querySelectorAll(".ZoomOut")?.forEach(addEvent("click", buttonZoomOut));
    document.querySelectorAll(".ZoomRestore")?.forEach(addEvent("click", buttonRestoreZoom));
    document.querySelectorAll(".ZoomWidth")?.forEach(addEvent("click", buttonZoomWidth));
    document.querySelectorAll(".ZoomHeight")?.forEach(addEvent("click", buttonZoomHeight));
  }

  function changeColorScheme() {
    const isDark = getUserSettings().colorScheme === "dark";
    updateSettings({ colorScheme: isDark ? "light" : "dark" });
    const elem = document.getElementById("MangaOnlineViewer");
    elem?.classList.remove(isDark ? "dark" : "light");
    elem?.classList.add(getUserSettings().colorScheme);
  }
  function buttonSelectTheme(event) {
    const target = event.currentTarget;
    [...document.querySelectorAll(".ThemeRadio")].forEach((theme) => {
      theme.classList.remove("selected");
    });
    target.classList.add("selected");
    document.getElementById("MangaOnlineViewer")?.setAttribute("data-theme", target.title);
    updateSettings({ theme: target.title });
    const hue = document.querySelector("#Hue");
    const shade = document.querySelector("#Shade");
    if (target.title.startsWith("custom")) {
      hue?.classList.add("show");
      shade?.classList.remove("show");
    } else {
      hue?.classList.remove("show");
      shade?.classList.add("show");
    }
  }
  function changeCustomTheme(event) {
    const target = event.currentTarget.value;
    updateSettings({ customTheme: target });
    addCustomTheme(target);
  }
  function changeThemeShade(event) {
    const target = parseInt(event.currentTarget.value, 10);
    updateSettings({ themeShade: target });
    refreshThemes();
  }
  function theming() {
    document.querySelector("#ColorScheme")?.addEventListener("click", changeColorScheme);
    document.querySelectorAll(".ThemeRadio").forEach(addEvent("click", buttonSelectTheme));
    document.querySelector("#CustomThemeHue")?.addEventListener("change", changeCustomTheme);
    document.querySelector("#ThemeShade")?.addEventListener("input", changeThemeShade);
  }

  function changeGlobalZoom(value) {
    return () => {
      if (typeof value !== "number") {
        getUserSettings().zoomMode = value;
      } else {
        getUserSettings().zoomMode = "percent";
      }
      if (value === "height") {
        updateHeaderType("click");
      } else {
        updateHeaderType(getUserSettings().header);
      }
      const globalZoomVal = document.querySelector("#ZoomVal");
      if (Number.isInteger(value)) {
        globalZoomVal.textContent = `${value}%`;
        document.querySelector("#Zoom").value = value.toString();
      } else {
        globalZoomVal.textContent = value;
      }
      applyZoom(value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const globalZoom = document.querySelector("#Zoom");
      const ratio = parseInt(globalZoom.value, 10) + sign * getUserSettings().zoomStep;
      globalZoom.value = ratio.toString();
      globalZoom?.dispatchEvent(new Event("input", { bubbles: true }));
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    updateSettings({ zoomMode: target });
    changeGlobalZoom(target)();
    const percent = document.querySelector(".DefaultZoom");
    if (getUserSettings().zoomMode === "percent") {
      percent?.classList.add("show");
    } else {
      percent?.classList.remove("show");
    }
  }
  function changeDefaultZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    updateSettings({ defaultZoom: target });
    changeGlobalZoom(target)();
  }
  function changeZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    changeGlobalZoom(target)();
    document.querySelector("#ZoomVal").textContent = `${target}%`;
  }
  function zoom() {
    document.querySelector("#DefaultZoomMode")?.addEventListener("change", changeDefaultZoomMode);
    document.querySelector("#DefaultZoom")?.addEventListener("input", changeDefaultZoom);
    document.querySelector("#Zoom")?.addEventListener("input", changeZoom);
    document.querySelector("#enlarge")?.addEventListener("click", changeZoomByStep());
    document.querySelector("#reduce")?.addEventListener("click", changeZoomByStep(-1));
    document.querySelector("#restore")?.addEventListener("click", changeGlobalZoom(100));
    document.querySelector("#fitWidth")?.addEventListener("click", changeGlobalZoom("width"));
    document.querySelector("#fitHeight")?.addEventListener("click", changeGlobalZoom("height"));
  }

  function setupFluid(mode) {
    const chapter = document.querySelector("#Chapter");
    document.querySelector("#Header")?.classList.remove("visible");
    document.querySelector("#menu")?.classList.remove("hide");
    changeGlobalZoom("height")();
    scrollToElement(chapter);
    chapter?.addEventListener(
      "wheel",
      mode === "FluidLTR" ? transformScrollToHorizontal : transformScrollToHorizontalReverse
    );
  }
  function updateViewMode(mode) {
    return () => {
      const chapter = document.querySelector("#Chapter");
      chapter?.classList.remove("Vertical", "WebComic", "FluidLTR", "FluidRTL");
      chapter?.classList.add(mode);
      chapter?.removeEventListener("wheel", transformScrollToHorizontal);
      chapter?.removeEventListener("wheel", transformScrollToHorizontalReverse);
      if (mode === "FluidLTR" || mode === "FluidRTL") {
        setupFluid(mode);
      } else {
        document.querySelector("#Header").className = getUserSettings().header;
        document.querySelector("#menu").className = getUserSettings().header;
        changeGlobalZoom(100)();
      }
    };
  }
  function changeViewMode(event) {
    const mode = event.currentTarget.value;
    updateViewMode(mode)();
    updateSettings({ viewMode: mode });
  }
  function viewMode() {
    document.querySelector("#viewMode")?.addEventListener("change", changeViewMode);
    document.querySelector("#webComic")?.addEventListener("click", updateViewMode("WebComic"));
    document.querySelector("#ltrMode")?.addEventListener("click", updateViewMode("FluidLTR"));
    document.querySelector("#rtlMode")?.addEventListener("click", updateViewMode("FluidRTL"));
    document.querySelector("#verticalMode")?.addEventListener("click", updateViewMode("Vertical"));
    if (getUserSettings().viewMode === "FluidLTR" || getUserSettings().viewMode === "FluidRTL") {
      setupFluid(getUserSettings().viewMode);
    }
  }

  let scrollInterval;
  function scroll() {
    const chapter = document.querySelector("#Chapter");
    if (chapter?.classList.contains("FluidLTR") || chapter?.classList.contains("FluidRTL")) {
      chapter?.scrollBy({
        top: 0,
        left: getUserSettings().scrollHeight * (chapter?.classList.contains("FluidRTL") ? -1 : 1),
        behavior: "smooth"
      });
    } else {
      window.scrollBy({
        top: getUserSettings().scrollHeight,
        left: 0,
        behavior: "smooth"
      });
    }
    if (document.querySelector("#Header")?.classList.contains("headroom-end")) {
      clearInterval(scrollInterval);
      scrollInterval = void 0;
      document.querySelector("#ScrollControl")?.classList.remove("running");
      logScript("Finished auto scroll");
    }
  }
  function toggleAutoScroll() {
    const control = document.querySelector("#AutoScroll");
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = void 0;
      control?.classList.remove("running");
      logScript("Stopped auto scroll");
    } else {
      scroll();
      scrollInterval = setInterval(scroll, 1e3 / 60);
      control?.classList.add("running");
      logScript("Start auto scroll");
    }
  }
  let resume = false;
  const debounceAutoScroll = _.debounce(() => {
    toggleAutoScroll();
    resume = false;
  }, 500);
  function manualScroll() {
    if (!resume && scrollInterval) {
      toggleAutoScroll();
      resume = true;
    }
    if (resume && !scrollInterval) {
      debounceAutoScroll();
    }
  }
  function autoscroll() {
    window.addEventListener("wheel", _.throttle(manualScroll, 500));
    document.querySelector("#AutoScroll")?.addEventListener("click", toggleAutoScroll);
  }

  let setupEvents = false;
  function events() {
    if (!setupEvents) {
      headroom(100);
      keybindings();
      individual();
      size();
      window.addEventListener("resize", () => {
        const reader = document.querySelector("#MangaOnlineViewer");
        reader?.classList.remove("mobile", "tablet", "desktop");
        reader?.classList.add(getDevice());
      });
      setupEvents = true;
    }
    bookmarks();
    globals();
    navigation();
    options();
    panels();
    theming();
    viewMode();
    zoom();
    autoscroll();
  }

  const cleanUpElement = (...ele) => ele.forEach((element) => {
    element.getAttributeNames().forEach((attr) => {
      element.removeAttribute(attr);
    });
  });

  function loadReader(manga) {
    cleanUpElement(document.documentElement, document.head, document.body);
    window.scrollTo(0, 0);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = '<div id="MOV"></div>';
    mount(App, {
      target: document.getElementById("MOV"),
      props: {
        manga
      }
    });
    events();
    loadManga(manga, 0);
    if (manga.comments) document.querySelector("#CommentsArea")?.append(manga.comments);
  }

  function waitForElm(selector, target = document.body) {
    return new Promise((resolve) => {
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
        attributes: true
      });
    });
  }
  function waitForFunc(fn, timer = 250) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (fn()) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, timer);
    });
  }
  function waitForAtb(selector, attribute, target = document.body) {
    return new Promise((resolve) => {
      if (target.querySelector(selector)?.getAttribute(attribute)) {
        resolve(target.querySelector(selector)?.getAttribute(attribute) ?? "");
        return;
      }
      const observer = new MutationObserver(() => {
        if (target.querySelector(selector)?.getAttribute(attribute)) {
          resolve(target.querySelector(selector)?.getAttribute(attribute) ?? "");
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [attribute]
      });
    });
  }
  function waitForVar(name, target = document.body) {
    return new Promise((resolve) => {
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
        attributes: true
      });
    });
  }
  function waitForTimer(millis = 1e3, result = true) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), millis);
    });
  }
  async function waitWithTimeout(promise, timeout = 5e3) {
    return Promise.race([promise, waitForTimer(timeout, false)]);
  }

  async function captureComments() {
    if (!getUserSettings().enableComments) return null;
    let comments = document.querySelector("#disqus_thread, #fb-comments");
    if (comments) {
      logScript(`Waiting to Comments to load`, comments);
      window.scrollTo(0, document.body.scrollHeight);
      await waitWithTimeout(
        waitForFunc(() => {
          comments = document.querySelector("#disqus_thread, #fb-comments");
          const iframe = comments?.querySelector(
            "iframe:not(#indicator-north, #indicator-south)"
          );
          return iframe?.contentWindow?.document.readyState === "complete" && iframe?.contentWindow?.document?.body?.textContent?.length;
        })
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
      await manga.before(manga.begin);
    }
    if (getUserSettings().enableComments && !manga.comments) {
      manga.comments = await captureComments();
    }
    setTimeout(() => {
      try {
        loadReader(manga);
      } catch (e) {
        logScript(e);
      }
    }, 50);
  }

  const startButton = "#StartMOV {\r\n    all: revert;\r\n    backface-visibility: hidden;\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n    padding: 0.5rem 1rem;\r\n    text-align: center;\r\n    border: none;\r\n    border-radius: 10px;\r\n    min-height: 50px;\r\n    width: 80%;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    z-index: 105000;\r\n    transition: all 0.4s ease-in-out;\r\n    background-size: 300% 100%;\r\n    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n    background-position: 100% 0;\r\n    transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n    outline: none;\r\n}\r\n";

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
      await new Promise((resolve) => {
        setTimeout(resolve, site.waitTime);
      });
      logScript("Continuing after timer");
    }
  }

  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;
  const orderFiles = (a, b) => a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true
  });
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  const getImageBlob = (content) => {
    const buffer = new Uint8Array(content);
    const blob = new Blob([buffer.buffer]);
    return URL.createObjectURL(blob);
  };
  async function loadZipFile(filePath) {
    const zip = await JSZip.loadAsync(filePath);
    const files = zip.filter((_, file) => !file.dir && fileImageExt.test(file.name)).sort((a, b) => orderFiles(a.name, b.name));
    logScript("Files in zip:", zip.files);
    return Promise.all(files.map((file) => file.async("arraybuffer").then(getImageBlob)));
  }
  function displayUploadedFiles(title, listImages) {
    viewer({
      title,
      series: "?reload",
      pages: listImages.length,
      begin: 1,
      prev: "#",
      next: "#",
      lazy: false,
      listImages
    }).then(() => logScript("Page loaded"));
  }
  async function loadMangaFromZip(zipFile) {
    const listImages = await loadZipFile(zipFile);
    displayUploadedFiles(typeof zipFile === "string" ? zipFile : zipFile.name, listImages);
  }
  function openFileImages(evt) {
    const input = evt.target;
    const files = Array.from(input.files).filter(validFileType).sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
    logScript(
      "Local Files: ",
      files,
      files.map((f) => f.webkitRelativePath || f.name)
    );
    if (input.files?.[0]) {
      displayUploadedFiles(
        input.files[0].webkitRelativePath.split("/")[0] || "Local Images",
        files.map(URL.createObjectURL)
      );
    }
  }
  function allowUpload() {
    if (localhost.url.test(window.location.href)) {
      if (document.querySelector("#MangaOnlineViewer, #LocalTest")) {
        document.querySelector("#LocalTest")?.setAttribute("style", "display:none");
        document.querySelector("#file")?.addEventListener("change", (evt) => {
          const input = evt.target;
          if (input.files?.[0]) loadMangaFromZip(input.files[0]);
        });
        document.querySelector("#folder")?.addEventListener("change", openFileImages);
        document.querySelector("#images")?.addEventListener("change", openFileImages);
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
    logScript("LateStart");
    let beginPage = begin;
    let endPage = manga.pages;
    const options = {
      title: getLocaleString("STARTING"),
      // Language=html
      html: html`
      ${getLocaleString("CHOOSE_BEGINNING")}
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
      cancelButtonColor: "#d33",
      reverseButtons: true,
      icon: "question",
      didOpen() {
        const pageBeginInput = document.querySelector("#pageBegin");
        const pageEndInput = document.querySelector("#pageEnd");
        const rangeSliderElement = rangeSlider(document.getElementById("pagesSlider"), {
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
          }
        });
        function changedInput() {
          if (pageBeginInput.value === "" || pageEndInput.value === "") {
            return;
          }
          const valBegin = validateMin(
            parseInt(pageBeginInput.value, 10),
            endPage,
            rangeSliderElement
          );
          const valEnd = validateMax(
            parseInt(pageEndInput.value, 10),
            beginPage,
            rangeSliderElement
          );
          pageBeginInput.value = valBegin.toString();
          pageEndInput.value = valEnd.toString();
          beginPage = valBegin;
          endPage = valEnd;
          rangeSliderElement.value([valBegin, valEnd]);
        }
        const observerEvent = _.debounce(changedInput, 600);
        ["change", "mouseup", "keyup", "touchend"].forEach((event) => {
          pageBeginInput?.addEventListener(event, observerEvent);
          pageEndInput?.addEventListener(event, observerEvent);
        });
      }
    };
    Swal.fire(options).then((result) => {
      if (result.value) {
        logScript(`Choice: ${beginPage} - ${endPage}`);
        manga.begin = beginPage;
        manga.pages = endPage;
        viewer(manga).then(() => logScript("Page loaded"));
      } else {
        logScript(result.dismiss);
      }
    });
  }
  function createLateStartButton(site, beginning) {
    const button = document.createElement("button");
    button.innerText = getLocaleString("BUTTON_START");
    button.id = "StartMOV";
    button.onclick = () => {
      lateStart(site, beginning).catch(logScript);
    };
    document.body.appendChild(button);
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(startButton + rangeSliderStyles));
    document.head.appendChild(style);
    logScript("Start Button added to page", button);
  }
  function showWaitPopup(site, manga) {
    Swal.fire({
      title: getLocaleString("STARTING"),
      html: html`${manga.begin > 1 ? `${getLocaleString("RESUME")}${manga.begin}.<br/>` : ""}${getLocaleString("WAITING")}`,
      showCancelButton: true,
      cancelButtonColor: "#d33",
      reverseButtons: true,
      timer: 3e3
    }).then((result) => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        viewer(manga).then(() => logScript("Page loaded"));
      } else {
        createLateStartButton(site, manga.begin);
        logScript(result.dismiss);
      }
    });
  }
  async function preparePage([site, manga]) {
    logScript(`Found Pages: ${manga.pages} in ${site.name}`);
    if (!manga.title) {
      manga.title = document.querySelector("title")?.textContent?.trim();
    }
    manga.begin = isBookmarked() ?? manga.begin ?? 1;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    unsafeWindow.MOV = (startPage, endPage) => {
      if (startPage !== void 0) {
        manga.begin = startPage;
      }
      if (endPage !== void 0) {
        manga.pages = endPage;
      }
      viewer(manga).then(() => logScript("Page loaded"));
    };
    switch (site.start ?? getUserSettings()?.loadMode) {
      case "never":
        createLateStartButton(site, manga.begin);
        break;
      case "always":
        viewer(manga).then(() => logScript("Page loaded"));
        break;
      case "wait":
      default:
        showWaitPopup(site, manga);
        break;
    }
  }
  async function start(sites) {
    logScript(
      `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`
    );
    if (allowUpload()) return;
    logScript(sites.length, "Known Manga Sites:", sites);
    const foundSites = sites.filter((s) => s.url.test(window.location.href));
    logScript(foundSites.length, "Found sites:", foundSites);
    const testedSites = foundSites.map(async (site) => {
      logScript(`Testing site: ${site.name}`);
      return new Promise((resolve, reject) => {
        Promise.all([
          testTime(site),
          testElement(site),
          testAttribute(site),
          testVariable(site),
          testFunc(site)
        ]).then(async () => site.run()).then(
          (manga) => manga.pages > 0 ? resolve([site, manga]) : reject(new Error(`${site.name} found ${manga.pages} pages`))
        );
      });
    });
    Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
      (fastestIndex) => {
        testedSites.forEach((_promise, i) => {
          if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
        });
        testedSites[fastestIndex].then((result) => {
          preparePage(result);
        });
      }
    );
  }

  start(sites).catch(logScript);

})();
