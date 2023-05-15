// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, ComiCastle, Dynasty-Scans, Asura Scans, Flame Scans, Realm Scans, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, INKR, InManga, KLManga, Leitor, LHTranslation, LynxScans, MangaBuddy, MangaDex, MangaFox, MangaHere, MangaFreak, Mangago, mangahosted, MangaHub, MangaKakalot, MangaNelo, MangaNato, MangaPark, Mangareader, MangaSee, Manga4life, MangaTigre, MangaToons, MangaTown, ManhuaScan, MReader, MangaGeko, NaniScans, NineManga, OlympusScans, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, ReaperScans, SenManga(Raw), KLManga, TenManga, TuMangaOnline, UnionMangas, WebNovel, WebToons, Manga33, YugenMangas, ZeroScans, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, LeviatanScans, NovelMic, Reset-Scans
// @version       2023.05.15
// @license       MIT
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.2/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @include       /https?:\/\/beta.asurascans.com\/read\/.+\/.+/
// @include       /https?:\/\/(www.)?bato.to\/chapter.*/
// @include       /https?:\/\/(www.)?(bilibilicomics).com\/.+\/.+/
// @include       /https?:\/\/(www.)?comicastle.org\/read\/.+\/\d+.*/
// @include       /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(asurascans|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans).(com|org|gg)\/.+/
// @include       /https?:\/\/(comics.)?inkr.com\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www.)?inmanga.com\/ver\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?klmanga.com\/.+chapter.+/
// @include       /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include       /https?:\/\/(www.)?lynxscans.com\/comics?\/.+/
// @include       /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include       /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include       /https?:\/\/(www.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato|chapmanganato).com\/manga-\w\w\d+\/chapter-\d+)/
// @include       /https?:\/\/(www.)?mangapark.(com|me|org|net)\/title\/.+\/.+/
// @include       /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include       /https?:\/\/(www.)?mangatigre.net\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?manhuascan.io\/.+chapter.+/
// @include       /https?:\/\/(www.)?(mreader|mangageko).com?\/reader\/.*/
// @include       /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/
// @include       /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include       /https?:\/\/(www.)?olympusscans.com\/capitulo\/.+\/.+/
// @include       /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include       /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/
// @include       /https?:\/\/(www.)?reaperscans.com\/comics\/.+\/chapters\/.+/
// @include       /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include       /https?:\/\/(www.)?tapas.io\/episode\/.+/
// @include       /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include       /https?:\/\/(www.)?(almtechnews|animalcanine|animalslegacy|animation2you|animationforyou|anisurion|anitirion|anitoc|cook2love|cooker2love|cookermania|cookernice|cookerready|dariusmotor|enginepassion|fanaticmanga|followmanga|gamesnk|gamesxo|infogames2you|infopetworld|lectortmo|mangalong|mistermanga|motorbakery|motornk|motorpi|mygamesinfo|mynewsrecipes|myotakuinfo|otakunice|otakuworldgames|otakworld|paleomotor|panicmanga|recetchef|recipesaniki|recipescoaching|recipesdo|recipesist|recipesnk|sucrecipes|tmofans|vgmotor|vsrecipes|worldmangas|wtechnews).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include       /https?:\/\/(www.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www.)?(manga33).com\/manga\/.+/
// @include       /https?:\/\/(www.)?(yugenmangas).com\/series\/.+/
// @include       /https?:\/\/(www.)?zeroscans.com\/comics\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic)\/.+\/.+/
// @exclude       /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==
(function () {
  'use strict';

  const asurascans = {
    name: "Asura Scans",
    url: /https?:\/\/beta.asurascans.com\/read\/.+\/.+/,
    homepage: "https://beta.asurascans.com/",
    language: ["English"],
    category: "manga",
    run() {
      const { chapterID, data } = JSON.parse(
        document.querySelector("#__NEXT_DATA__")?.textContent ?? ""
      ).props.pageProps;
      return {
        title: document.querySelector("span.h2")?.textContent?.trim(),
        series: document.querySelector(".container a.h6")?.getAttribute("href"),
        pages: data.length,
        prev: document.querySelector(".prev:not(.disabled)")?.getAttribute("href"),
        next: document.querySelector(".next:not(.disabled)")?.getAttribute("href"),
        listImages: data.map(
          (img) => `https://img.asurascans.com/pages/${chapterID}/${img.uuid}.jpg`
        )
      };
    }
  };

  const batoto = {
    name: "Batoto",
    url: /https?:\/\/(www.)?bato.to\/chapter.*/,
    homepage: "http://bato.to/",
    language: ["English"],
    category: "manga",
    run() {
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
    url: /https?:\/\/(www.)?(bilibilicomics).com\/.+\/.+/,
    homepage: "https://www.bilibilicomics.com/",
    language: ["English"],
    category: "manga",
    waitEle: ".read-nav",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const api = await fetch(
        "https://www.bilibilicomics.com/twirp/comic.v1.Comic/GetImageIndex?device=pc&platform=web&lang=en&sys_lang=en",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ep_id: W.location.href.split("/").pop(),
            credential: ""
          })
        }
      ).then((res) => res.json()).then(({ data }) => data.images.map((image) => `${image.path}@2000w.webp`)).then(JSON.stringify).then(
        (urls) => fetch(
          "https://www.bilibilicomics.com/twirp/comic.v1.Comic/ImageToken?device=pc&platform=web&lang=en&sys_lang=en",
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ urls })
          }
        )
      ).then((res) => res.json()).then(
        (tokens) => tokens.data.map((i) => `${i.url}?token=${i.token}`)
      );
      return {
        title: document.querySelector(".read-nav")?.textContent?.trim(),
        series: document.querySelector(".manga-title")?.getAttribute("href"),
        pages: api.length,
        prev: document.querySelector(".navigate a button[title=Previous]")?.parentElement?.getAttribute("href"),
        next: document.querySelector(".navigate a button[title=Next]")?.parentElement?.getAttribute("href"),
        listImages: api
      };
    }
  };

  const comicastle = {
    name: "ComiCastle",
    url: /https?:\/\/(www.)?comicastle.org\/read\/.+\/\d+.*/,
    homepage: "http://www.comicastle.org/",
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

  const dysnatyscans = {
    name: "Dynasty-Scans",
    url: /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/,
    homepage: "https://dynasty-scans.com/",
    language: ["English"],
    category: "manga",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      return {
        title: document.querySelector("#chapter-title")?.textContent?.trim(),
        series: document.querySelector("#chapter-title a")?.getAttribute("href"),
        pages: W.pages.length,
        prev: document.querySelector("#prev_link")?.getAttribute("href"),
        next: document.querySelector("#next_link")?.getAttribute("href"),
        listImages: W.pages.map((x) => x.image)
      };
    }
  };

  const flamecans = {
    name: ["Asura Scans", "Flame Scans", "Realm Scans", "Voids-Scans", "Luminous Scans", "Shimada Scans", "Night Scans"],
    url: /https?:\/\/(www.)?(asurascans|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans).(com|org|gg)\/.+/,
    homepage: [
      "https://www.asura.gg/",
      "https://flamescans.org/",
      "https://realmscans.com/",
      "https://void-scans.com/",
      "https://luminousscans.com/",
      "https://shimadascans.com/",
      "https://nightscans.org/"
    ],
    language: ["English"],
    category: "manga",
    waitEle: "#chapter option:nth-child(2)",
    run() {
      const chapter = document.querySelector("#chapter option:checked");
      const images = [...document.querySelectorAll("#readerarea img")];
      return {
        title: document.querySelector(".entry-title")?.textContent?.trim(),
        series: document.querySelector(".allc a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map(
          (img) => img.getAttribute("data-src") || img.getAttribute("data-lazy-src") || img.getAttribute("src")
        )
      };
    }
  };

  const foolslide = {
    name: ["FoOlSlide", "Kireicake"],
    url: /^(?!.*jaiminisbox).*\/read\/.+/,
    homepage: ["#", "https://reader.kireicake.com"],
    language: ["English"],
    obs: "Any Site that uses FoOLSlide",
    category: "manga",
    waitEle: "img.open",
    run() {
      const chapter = [...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")];
      const origin = chapter.findIndex((item) => {
        const url = item.querySelector("a")?.getAttribute("href");
        if (url)
          return window.location.href.startsWith(url);
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

  const inkr = {
    name: "INKR",
    url: /https?:\/\/(comics.)?inkr.com\/title\/.+\/chapter\/.+/,
    homepage: "https://inkr.com/",
    language: ["English"],
    category: "manga",
    waitFunc: () => document.querySelector("#editor-v2-scroll-view-id img")?.style.width !== "",
    run() {
      const images = [...document.querySelectorAll("#editor-v2-scroll-view-id img")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector("#chapter-detail-viewer-page div div div a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector('a[aria-label="Previous Chapter"]')?.getAttribute("href"),
        next: document.querySelector('a[aria-label="Next Chapter"]')?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("src")?.replace("/t.", "/p."))
      };
    }
  };

  const inmanga = {
    name: "InManga",
    url: /https?:\/\/(www.)?inmanga.com\/ver\/manga\/.+\/.+/,
    homepage: "https://inmanga.com//",
    language: ["Spanish"],
    category: "manga",
    waitVar: "pageController",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = [...document.querySelectorAll("#PageList option")];
      const chapter = document.querySelector("#ChapList option:checked");
      const src = W.pageController._containers.pageUrl;
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: `../${W.pageController._containers.mangaIdentification}`,
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
    url: /https?:\/\/(www.)?klmanga.com\/.+chapter.+/,
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
    url: /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/,
    homepage: "https://leitor.net/",
    language: ["Portuguese"],
    category: "manga",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const url = `https://leitor.net/leitor/pages/${W.READER_ID_RELEASE}.json?key=${W.READER_TOKEN}`;
      const api = await fetch(url).then((res) => res.json());
      const chapter = document.querySelector(".chapter-list .selected");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".series-cover a")?.getAttribute("href"),
        pages: api.images.length,
        prev: chapter?.nextElementSibling?.querySelector("a")?.getAttribute("href"),
        next: chapter?.previousElementSibling?.querySelector("a")?.getAttribute("href"),
        listImages: api.images.map(
          (img) => img.avif || img.legacy
        )
      };
    }
  };

  const lhtranslation = {
    name: "LHTranslation",
    url: /https?:\/\/(www.)?lhtranslation.net\/read.+/,
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

  const lynxscans = {
    name: "LynxScans",
    url: /https?:\/\/(www.)?lynxscans.com\/comics?\/.+/,
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
      "LeviatanScans",
      "NovelMic",
      "Reset-Scans"
    ],
    url: /https?:\/\/.+\/(manga|series|manhua|comic)\/.+\/.+/,
    homepage: [
      "#",
      "https://manhuaus.com",
      "https://isekaiscan.com/",
      "https://comickiba.com/",
      "https://zinmanga.com/",
      "https://mangatx.com/",
      "https://toonily.net/",
      "https://mangazuki.me/",
      "https://jaiminisbox.net",
      "https://disasterscans.com/",
      "https://manhuaplus.com/",
      "https://www.topmanhua.com/",
      "https://en.leviatanscans.com/home/",
      "https://novelmic.com/",
      "https://reset-scans.com/"
    ],
    language: ["English"],
    obs: "Any Site that uses Madara Wordpress Plugin",
    category: "manga",
    run() {
      const images = [
        ...document.querySelectorAll(
          ".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img"
        )
      ];
      return {
        title: document.querySelector("#chapter-heading")?.textContent?.trim(),
        series: (document.querySelector(".breadcrumb li:nth-child(3) a") || document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".prev_page")?.getAttribute("href"),
        next: document.querySelector(".next_page")?.getAttribute("href"),
        listImages: images.map(
          (img) => _.without(
            [
              img?.getAttribute("src"),
              img?.getAttribute("data-src"),
              img?.getAttribute("data-full-url")
            ],
            null,
            void 0,
            ""
          ).pop()
        )
      };
    }
  };

  const mangabuddy = {
    name: "MangaBuddy",
    url: /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/,
    homepage: "https://mangabuddy.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapImages",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = W.chapImages.split(",");
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

  const mangadex = {
    name: "MangaDex",
    url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
    homepage: "https://mangadex.org/",
    language: ["English"],
    category: "manga",
    waitEle: ".md--reader-menu a[href^='/chapter/']",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const chapterId = W.location.pathname.match(/\/chapter\/([^/]+)(\/\d+)?/)[1];
      const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
      const server = await fetch(home).then((res) => res.json());
      const images = server.chapter.data;
      const chapters = [...document.querySelectorAll(".md--reader-menu a[href^='/chapter/']")].map(
        (a) => a.getAttribute("href")
      );
      return {
        title: document.querySelector("title")?.text.replace(" - MangaDex", ""),
        series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),
        pages: images.length,
        prev: chapters[0] !== W.location.pathname ? chapters[0] : "#",
        next: chapters[1] !== W.location.pathname ? chapters[1] : "#",
        listImages: images.map((img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`)
      };
    }
  };

  const mangafox = {
    name: ["MangaFox", "MangaHere"],
    url: /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
    homepage: ["https://fanfox.net/", "https://www.mangahere.cc/"],
    language: ["English"],
    category: "manga",
    waitVar: "chapterid",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const key = document.querySelector("#dm5_key")?.getAttribute("value");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "text/plain"
        }
      };
      const src = Array(W.imagecount).fill(0).map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${W.chapterid || W.chapter_id}&page=${i}&key=${key}`;
        const api = await fetch(url, options).then((res) => res.text());
        (0, eval)(api);
        return d;
      });
      const images = await Promise.all(src);
      return {
        title: document.querySelector(".reader-header-title div")?.textContent?.trim(),
        series: document.querySelector(".reader-header-title a")?.getAttribute("href"),
        pages: W.imagecount,
        prev: W.prechapterurl,
        next: W.nextchapterurl,
        listImages: images.map((img, i) => img[i === 0 ? 0 : 1])
      };
    }
  };

  const mangafreak = {
    name: "MangaFreak",
    url: /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/,
    homepage: "https://mangafreak.net/",
    language: ["English"],
    category: "manga",
    run() {
      const chapter = document.querySelector(
        ".chapter_list select option:checked"
      );
      const images = [...document.querySelectorAll(".mySlides img")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".title a")?.getAttribute("href"),
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const mangago = {
    name: "Mangago",
    url: /https?:\/\/(www.)?mangago.me\/.*\/.*\/.*/,
    homepage: "https://www.mangago.me/",
    language: ["English"],
    category: "manga",
    waitVar: "imgsrcs",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const key = CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e");
      const iv = CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef");
      const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
      const images = CryptoJS.AES.decrypt(W.imgsrcs, key, opinion).toString(CryptoJS.enc.Utf8).split(",");
      return {
        title: `${W.manga_name} ${W.chapter_name}`,
        series: W.mid,
        pages: W.total_pages,
        prev: document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),
        next: W.next_c_url,
        listImages: images
      };
    }
  };

  const mangahosted = {
    name: "mangahosted",
    url: /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/,
    homepage: "https://mangahosted.com/",
    language: ["Portuguese"],
    category: "manga",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = [...document.querySelectorAll("picture img")];
      return {
        title: $(".breadcrumb li:eq(3)").text().trim(),
        series: $(".breadcrumb li:eq(2) a").attr("href"),
        pages: images.length,
        prev: W.$read_prev,
        next: W.$read_next,
        listImages: images.map((img) => img.getAttribute("src"))
      };
    }
  };

  const mangahub = {
    name: "MangaHub",
    url: /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/,
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
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const slug = W.CURRENT_MANGA_SLUG || window.location.pathname.split("/")[2];
      const number = window.location.pathname.split("/")[3].replace("chapter-", "");
      const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-mhub-access": getCookie("mhub_access")
        }
      };
      const api = await fetch("https://api.mghubcdn.com/graphql", options).then(
        (res) => res.json()
      );
      const images = JSON.parse(api?.data.chapter.pages.toString());
      return {
        title: document.querySelector("#mangareader h3")?.textContent?.trim(),
        series: document.querySelector("#mangareader a")?.getAttribute("href"),
        pages: images.i.length,
        prev: document.querySelector(".previous a")?.getAttribute("href"),
        next: document.querySelector(".next a")?.getAttribute("href"),
        listImages: images.i.map(
          (i) => `https://img.mghubcdn.com/file/imghub/${images.p + i}`
        )
      };
    }
  };

  const mangakakalot = {
    name: ["MangaKakalot", "MangaNelo", "MangaNato"],
    url: /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato|chapmanganato).com\/manga-\w\w\d+\/chapter-\d+)/,
    homepage: [
      "https://mangakakalot.com/page",
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

  const mangapark = {
    name: "MangaPark",
    url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/title\/.+\/.+/,
    homepage: "https://mangapark.net/",
    language: ["English"],
    category: "manga",
    waitEle: "main div div a.btn-primary",
    run() {
      const json = JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML || "");
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
    url: /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/,
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
    url: /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/,
    homepage: ["https://mangasee123.com/", "https://manga4life.com/"],
    language: ["English"],
    category: "manga",
    waitAttr: [".img-fluid", "src"],
    run() {
      const src = document.querySelector(".img-fluid")?.getAttribute("src") || "";
      const script = [...document.querySelectorAll("body script:not([src])")].at(-1)?.textContent;
      const textCurChapter = script?.match(/CurChapter = ({.+});/) || [];
      const CurChapter = JSON.parse(textCurChapter[1]);
      const textCHAPTERS = script?.match(/CHAPTERS = (\[\{.+}]);/) || [];
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

  const mangatigre = {
    name: "MangaTigre",
    url: /https?:\/\/(www.)?mangatigre.net\/.+\/.+\/.+/,
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
        listImages: images.map((img) => img.getAttribute("data-src") || img.getAttribute("src"))
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
    url: /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/,
    homepage: "https://www.mangatown.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapter_id",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const key = document.querySelector("#dm5_key")?.getAttribute("value");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "text/plain"
        }
      };
      const src = Array(W.total_pages).fill(0).map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${W.chapter_id}&page=${i}&key=${key}`;
        const api = await fetch(url, options).then((res) => res.text());
        (0, eval)(api);
        return d;
      });
      const images = await Promise.all(src);
      const chapter = document.querySelector("#top_chapter_list option:checked");
      return {
        title: document.querySelector(".title h1")?.textContent,
        series: W.series_url,
        pages: images.length,
        prev: chapter?.previousElementSibling?.getAttribute("value"),
        next: chapter?.nextElementSibling?.getAttribute("value"),
        listImages: images.map((img, i) => img[i === 0 ? 0 : 1])
      };
    }
  };

  const manhuascan = {
    name: "ManhuaScan",
    url: /https?:\/\/(www.)?manhuascan.io\/.+chapter.+/,
    homepage: "https://manhuascan.io/",
    language: ["English"],
    category: "manga",
    waitVar: "imgsrcs",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const key = CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f131e");
      const iv = CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef");
      const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
      const images = CryptoJS.AES.decrypt(W.imgsrcs, key, opinion).toString(CryptoJS.enc.Utf8).split(",");
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".breadcrumb li:nth-child(3) a")?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".chapter-select a:first-of-type")?.getAttribute("href"),
        next: document.querySelector(".chapter-select a:last-of-type")?.getAttribute("href"),
        listImages: images
      };
    }
  };

  const mreader = {
    name: ["MReader", "MangaGeko"],
    url: /https?:\/\/(www.)?(mreader|mangageko).com?\/reader\/.*/,
    homepage: ["https://www.mreader.co/", "https://www.mangageko.com/"],
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
    url: /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/,
    homepage: "https://naniscans.com/",
    language: ["English"],
    category: "manga",
    waitVar: "chapterListRoute",
    async run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const api = await fetch(W.location.href.replace("read", "json")).then((res) => res.json());
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector('a[href^="/titles/"]')?.getAttribute("href"),
        pages: api.pages.length,
        prev: W.previousChapterRoute,
        next: W.nextChapterRoute,
        listImages: api.pages.map((i) => i.address)
      };
    }
  };

  const ninemanga = {
    name: "NineManga",
    url: /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,
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
    url: /https?:\/\/(www.)?olympusscans.com\/capitulo\/.+\/.+/,
    homepage: "https://olympusscans.com/",
    language: ["Spanish"],
    category: "manga",
    waitVar: "__NUXT__",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = W.__NUXT__.data[W.location.pathname].chapter.pages;
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
    url: /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/,
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
    url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
    homepage: "https://rawdevart.com",
    language: ["Raw"],
    category: "manga",
    waitVar: "rconfig",
    waitEle: "#chapter-list select",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const chapter = document.querySelector("#chapter-list option:checked");
      const images = [...document.querySelectorAll("#img-container img")];
      return {
        title: W.rconfig.chapterTitle,
        series: W.rconfig.prefix,
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute("value"),
        next: chapter?.previousElementSibling?.getAttribute("value"),
        listImages: images.map((item) => $(item).attr("data-src") || $(item).attr("src"))
      };
    }
  };

  const readcomicsonline = {
    name: "ReadComicsOnline",
    url: /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/,
    homepage: "https://readcomicsonline.ru/",
    language: ["English"],
    category: "comic",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = [...document.querySelectorAll("#all img")];
      return {
        title: W.title.replace(/ - Page \d+/, ""),
        series: document.querySelector("div.pager-cnt a")?.getAttribute("href"),
        pages: W.pages.length,
        prev: W.prev_chapter,
        next: W.next_chapter,
        listImages: images.map((img) => img.getAttribute("data-src"))
      };
    }
  };

  const readmangatoday = {
    name: ["ReadManga Today", "Funmanga", "MangaDoom", "MangaInn"],
    url: /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/,
    homepage: [
      "https://www.readmng.com/",
      "https://funmanga.com/",
      "https://mngdoom.com/",
      "https://www.mangainn.net/"
    ],
    language: ["English"],
    category: "manga",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      return {
        title: W.chapter_page_title,
        series: W.manga_url,
        pages: W.images.length,
        prev: W.prev_chapter_url,
        next: W.next_chapter_url,
        listImages: W.images.map((item) => item.url)
      };
    }
  };

  const reaperscans = {
    name: "ReaperScans",
    url: /https?:\/\/(www.)?reaperscans.com\/comics\/.+\/chapters\/.+/,
    homepage: "https://reaperscans.com/",
    language: ["English"],
    category: "manga",
    run() {
      const images = [...document.querySelectorAll("main img")];
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".fa-list")?.parentElement?.getAttribute("href"),
        pages: images.length,
        prev: document.querySelector(".fa-arrow-left-long")?.parentElement?.getAttribute("href"),
        next: document.querySelector(".fa-arrow-right-long")?.parentElement?.getAttribute("href"),
        listImages: images.map((img) => img.getAttribute("data-src") || img.getAttribute("src"))
      };
    }
  };

  const senmanga = {
    name: "SenManga(Raw)",
    url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
    homepage: "https://raw.senmanga.com/",
    language: ["Raw"],
    category: "manga",
    run() {
      const url = `/${window.location.pathname.split("/")[1]}/${window.location.pathname.split("/")[2]}`;
      const num = parseInt(
        document.querySelector(".page-list select option:last-child")?.getAttribute("value") || "0",
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
    url: /https?:\/\/(www.)?tapas.io\/episode\/.+/,
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
        listImages: images.map((img) => img.getAttribute("data-src") || img.getAttribute("src"))
      };
    }
  };

  const tenmanga = {
    name: "TenManga",
    url: /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,
    homepage: "https://www.tenmanga.com/",
    language: ["English"],
    category: "manga",
    waitVar: "_pageCtrl",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const chapter = document.querySelector(
        ".mangaread-pagenav select option:checked"
      );
      const images = W._pageCtrl.options.all_imgs_url;
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

  const TMODomains = [
    "almtechnews",
    "animalcanine",
    "animalslegacy",
    "animation2you",
    "animationforyou",
    "anisurion",
    "anitirion",
    "anitoc",
    "cook2love",
    "cooker2love",
    "cookermania",
    "cookernice",
    "cookerready",
    "dariusmotor",
    "enginepassion",
    "fanaticmanga",
    "followmanga",
    "gamesnk",
    "gamesxo",
    "infogames2you",
    "infopetworld",
    "lectortmo",
    "mangalong",
    "mistermanga",
    "motorbakery",
    "motornk",
    "motorpi",
    "mygamesinfo",
    "mynewsrecipes",
    "myotakuinfo",
    "otakunice",
    "otakuworldgames",
    "otakworld",
    "paleomotor",
    "panicmanga",
    "recetchef",
    "recipesaniki",
    "recipescoaching",
    "recipesdo",
    "recipesist",
    "recipesnk",
    "sucrecipes",
    "tmofans",
    "vgmotor",
    "vsrecipes",
    "worldmangas",
    "wtechnews"
  ];
  const tmofans = {
    name: "TuMangaOnline",
    url: new RegExp(
      `https?:\\/\\/(www.)?(${TMODomains.join("|")}).com\\/(viewer|news)\\/.+\\/(paginated|cascade)`
    ),
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

  const unionmangas = {
    name: "UnionMangas",
    url: /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/,
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
    url: /https?:\/\/(www.)?webnovel.com\/comic\/.+/,
    homepage: "https://www.webnovel.com/",
    language: ["English"],
    category: "manga",
    waitVar: "g_data",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = W.g_data.chapter.chapterInfo.chapterPage.map((img) => img.url);
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: "./",
        pages: images.length,
        prev: `${W.g_data.chapter.chapterInfo.preChapterName}_${W.g_data.chapter.chapterInfo.preChapterId}`,
        next: `${W.g_data.chapter.chapterInfo.nextChapterName}_${W.g_data.chapter.chapterInfo.nextChapterId}`,
        listImages: images
      };
    }
  };

  const webtoons = {
    name: "WebToons",
    url: /https?:\/\/(www.)?webtoons.com\/.+viewer.+/,
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
          (img) => img.getAttribute("data-url") || img.getAttribute("data-src") || img.getAttribute("src")
        )
      };
    }
  };

  const wpmanga = {
    name: ["Manga33"],
    url: /https?:\/\/(www.)?(manga33).com\/manga\/.+/,
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
          if (window.location.pathname.match(/all.html$/))
            return;
          if (window.location.pathname.match(/\d+-\d+.html$/)) {
            window.location.pathname = window.location.pathname.replace(/-\d+.html$/, "-all.html");
          }
        }
      };
    }
  };

  const yugenmangas = {
    name: "YugenMangas",
    url: /https?:\/\/(www.)?(yugenmangas).com\/series\/.+/,
    homepage: "https://yugenmangas.com/",
    language: ["Spanish"],
    category: "manga",
    async run() {
      const data = JSON.parse(document.querySelector("#__NEXT_DATA__")?.textContent ?? "");
      const { id } = data.props.pageProps.data ?? (await fetch(
        window.location.href.replace("series", `_next/data/${data.buildId}/series`).concat(".json")
      ).then((res) => res.json())).pageProps.data;
      const api = await fetch(`https://api.yugenmangas.com/series/chapter/${id}`).then(
        (res) => res.json()
      );
      return {
        title: document.querySelector("title")?.textContent?.trim(),
        series: document.querySelector(".chapter-heading h5 a")?.getAttribute("href"),
        pages: api.content.images.length,
        prev: document.querySelector(".prev-chap a")?.getAttribute("href"),
        next: document.querySelector(".next-chap a")?.getAttribute("href"),
        listImages: api.content.images.map((url) => `https://api.yugenmangas.com/${url}`)
      };
    }
  };

  const zeroscans = {
    name: "ZeroScans",
    url: /https?:\/\/(www.)?zeroscans.com\/comics\/.+/,
    homepage: "https://zeroscans.com/",
    language: ["English"],
    category: "manga",
    waitVar: "__ZEROSCANS__",
    run() {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const images = W.__ZEROSCANS__.data.at(0).current_chapter.high_quality;
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

  const sites = [
    asurascans,
    batoto,
    bilibilicomics,
    comicastle,
    dysnatyscans,
    flamecans,
    inkr,
    inmanga,
    klmanga,
    leitor,
    lhtranslation,
    lynxscans,
    mangabuddy,
    mangadex,
    mangafox,
    mangafreak,
    mangago,
    mangahosted,
    mangahub,
    mangakakalot,
    mangapark,
    mangareader,
    mangasee,
    mangatigre,
    mangatoon,
    mangatown,
    manhuascan,
    mreader,
    naniscans,
    ninemanga,
    olympusscans,
    pandamanga,
    rawdevart,
    readcomicsonline,
    readmangatoday,
    reaperscans,
    // resetscans, deprecated
    senmanga,
    tapas,
    tenmanga,
    tmofans,
    unionmangas,
    webnovel,
    webtoons,
    wpmanga,
    yugenmangas,
    zeroscans,
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
  function getListGM() {
    return typeof GM_listValues !== "undefined" ? GM_listValues() : [];
  }
  function removeValueGM(name) {
    return typeof GM_deleteValue !== "undefined" ? GM_deleteValue(name) : logScript("Removing: ", name);
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
    if (typeof result === "string")
      return JSON.parse(result);
    return result;
  }
  function getSettings(defaultSettings) {
    return getJsonGM("settings", defaultSettings);
  }
  function setValueGM(name, value) {
    try {
      GM_setValue(name, value);
      return value.toString();
    } catch (e) {
      logScript("Fake Setting: ", name, " = ", value);
      return String(value);
    }
  }
  function setSettings(value) {
    return setValueGM("settings", value);
  }
  function getBrowser() {
    const ua = navigator.userAgent;
    let tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return `IE ${tem[1] || ""}`;
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem !== null) {
        return tem.slice(1).join(" ").replace("OPR", "Opera");
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    tem = ua.match(/version\/(\d+)/i);
    if (tem !== null) {
      M.splice(1, 1, tem[1]);
    }
    return M.join(" ");
  }
  function getEngine() {
    return getInfoGM.scriptHandler || "Greasemonkey";
  }
  const isMobile = window.matchMedia("screen and (max-width: 768px)").matches;

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
  Object.values(colors).map((i) => i["900"]);

  const IconArrowBigRight = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-big-right' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
  <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
  <path d='M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z' />
</svg>`;
  const IconArrowBigLeft = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-big-left' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z'></path>
</svg>`;
  const IconFileDownload = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-file-download' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
   <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'></path>
   <path color='gold' d='M12 17v-6'></path>
   <path color='gold' d='M9.5 14.5l2.5 2.5l2.5 -2.5'></path>
</svg>`;
  const IconLoader2 = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-loader-2 inverse animate-spin' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M12 3a9 9 0 1 0 9 9'></path>
</svg>`;
  const IconCategory = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-category' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M4 4h6v6h-6z'></path>
   <path d='M14 4h6v6h-6z'></path>
   <path d='M4 14h6v6h-6z'></path>
   <circle cx='17' cy='17' r='3'></circle>
</svg>`;
  const IconX = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line x1='18' y1='6' x2='6' y2='18'></line>
   <line x1='6' y1='6' x2='18' y2='18'></line>
</svg>`;
  const IconMenu2 = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-menu-2' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line x1='4' y1='6' x2='20' y2='6'></line>
   <line x1='4' y1='12' x2='20' y2='12'></line>
   <line x1='4' y1='18' x2='20' y2='18'></line>
</svg>`;
  const IconArrowAutofitWidth = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-autofit-width' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6'></path>
   <path color='yellow' d='M10 18h-7'></path>
   <path color='yellow' d='M21 18h-7'></path>
   <path color='yellow' d='M6 15l-3 3l3 3'></path>
   <path color='yellow' d='M18 15l3 3l-3 3'></path>
</svg>`;
  const IconArrowAutofitHeight = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-autofit-height' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6'></path>
   <path color='yellow' d='M18 14v7'></path>
   <path color='yellow' d='M18 3v7'></path>
   <path color='yellow' d='M15 18l3 3l3 -3'></path>
   <path color='yellow' d='M15 6l3 -3l3 3'></path>
</svg>`;
  const IconZoomInArea = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-in-area' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path color='lime' d='M15 13v4'></path>
   <path color='lime' d='M13 15h4'></path>
   <circle cx='15' cy='15' r='5'></circle>
   <path d='M22 22l-3 -3'></path>
   <path d='M6 18h-1a2 2 0 0 1 -2 -2v-1'></path>
   <path d='M3 11v-1'></path>
   <path d='M3 6v-1a2 2 0 0 1 2 -2h1'></path>
   <path d='M10 3h1'></path>
   <path d='M15 3h1a2 2 0 0 1 2 2v1'></path>
</svg>`;
  const IconZoomOutArea = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-out-area' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path color='red' d='M13 15h4'></path>
   <circle cx='15' cy='15' r='5'></circle>
   <path d='M22 22l-3 -3'></path>
   <path d='M6 18h-1a2 2 0 0 1 -2 -2v-1'></path>
   <path d='M3 11v-1'></path>
   <path d='M3 6v-1a2 2 0 0 1 2 -2h1'></path>
   <path d='M10 3h1'></path>
   <path d='M15 3h1a2 2 0 0 1 2 2v1'></path>
</svg>`;
  const IconZoomPan = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-pan' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='12' cy='12' r='3'></circle>
   <path d='M17 17l-2.5 -2.5'></path>
   <path color='#9966FF' d='M10 5l2 -2l2 2'></path>
   <path color='#9966FF' d='M19 10l2 2l-2 2'></path>
   <path color='#9966FF' d='M5 10l-2 2l2 2'></path>
   <path color='#9966FF' d='M10 19l2 2l2 -2'></path>
</svg>`;
  const IconArrowAutofitDown = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-autofit-down' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8'></path>
   <path color='#28FFBF' d='M18 4v17'></path>
   <path color='#28FFBF' d='M15 18l3 3l3 -3'></path>
</svg>`;
  const IconArrowAutofitLeft = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-autofit-left' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8'></path>
   <path color='#28FFBF' d='M20 18h-17'></path>
   <path color='#28FFBF' d='M6 15l-3 3l3 3'></path>
</svg>`;
  const IconArrowAutofitRight = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-autofit-right' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8'></path>
   <path color='#28FFBF' d='M4 18h17'></path>
   <path color='#28FFBF' d='M18 15l3 3l-3 3'></path>
</svg>`;
  const IconSpacingVertical = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-spacing-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2'></path>
   <path d='M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path>
   <path color='fuchsia' d='M16 12h-8'></path>
</svg>`;
  const IconSettings = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-settings' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z'></path>
   <circle cx='12' cy='12' r='3'></circle>
</svg>`;
  const IconKeyboard = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyboard' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <rect x='2' y='6' width='20' height='12' rx='2'></rect>
   <line x1='6' y1='10' x2='6' y2='10'></line>
   <line x1='10' y1='10' x2='10' y2='10'></line>
   <line x1='14' y1='10' x2='14' y2='10'></line>
   <line x1='18' y1='10' x2='18' y2='10'></line>
   <line x1='6' y1='14' x2='6' y2='14.01'></line>
   <line x1='18' y1='14' x2='18' y2='14.01'></line>
   <line x1='10' y1='14' x2='14' y2='14'></line>
</svg>`;
  const IconListNumbers = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-list-numbers' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M11 6h9'></path>
   <path d='M11 12h9'></path>
   <path d='M12 18h8'></path>
   <path color='#E48900' d='M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4'></path>
   <path color='#E48900' d='M6 10v-6l-2 2'></path>
</svg>`;
  const IconBookmarks = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmarks' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path color='orange' d='M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z'></path>
   <path color='orange' d='M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6'></path>
</svg>`;
  const IconExternalLink = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-external-link' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5'></path>
   <line x1='10' y1='14' x2='20' y2='4'></line>
   <polyline points='15 4 20 4 20 9'></polyline>
</svg>`;
  const IconTrash = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line x1='4' y1='7' x2='20' y2='7'></line>
   <line x1='10' y1='11' x2='10' y2='17'></line>
   <line x1='14' y1='11' x2='14' y2='17'></line>
   <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path>
   <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>
</svg>`;
  const IconSun = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-sun' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='12' cy='12' r='4'></circle>
   <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path>
</svg>`;
  const IconMoon = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-moon inverse' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
</svg>`;
  const IconCheck = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-check' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M5 12l5 5l10 -10'></path>
</svg>`;
  const IconPalette = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-palette' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25'></path>
   <circle cx='7.5' cy='10.5' r='.5' fill='currentColor'></circle>
   <circle cx='12' cy='7.5' r='.5' fill='currentColor'></circle>
   <circle cx='16.5' cy='10.5' r='.5' fill='currentColor'></circle>
</svg>`;
  const IconBookmark = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path color='orange' stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path color='orange' d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'></path>
</svg>`;
  const IconBookmarkOff = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark-off inverse' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path color='orange' stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line color='red' x1='3' y1='3' x2='21' y2='21'></line>
   <path color='orange' d='M17 17v3l-5 -3l-5 3v-13m1.178 -2.818c.252 -.113 .53 -.176 .822 -.176h6a2 2 0 0 1 2 2v7'></path>
</svg>`;
  const IconEye = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-eye' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='12' cy='12' r='2'></circle>
   <path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7'></path>
</svg>`;
  const IconEyeOff = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-eye-off inverse' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line color='red' x1='3' y1='3' x2='21' y2='21'></line>
   <path d='M10.584 10.587a2 2 0 0 0 2.828 2.83'></path>
   <path d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341'></path>
</svg>`;
  const IconZoomCancel = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-cancel' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='10' cy='10' r='7'></circle>
   <line color='#9966FF' x1='8' y1='8' x2='12' y2='12'></line>
   <line color='#9966FF' x1='12' y1='8' x2='8' y2='12'></line>
   <line x1='21' y1='21' x2='15' y2='15'></line>
</svg>`;
  const IconZoomIn = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-in' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='10' cy='10' r='7'></circle>
   <line color='lime' x1='7' y1='10' x2='13' y2='10'></line>
   <line color='lime' x1='10' y1='7' x2='10' y2='13'></line>
   <line x1='21' y1='21' x2='15' y2='15'></line>
</svg>`;
  const IconZoomOut = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-zoom-out' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <circle cx='10' cy='10' r='7'></circle>
   <line color='red' x1='7' y1='10' x2='13' y2='10'></line>
   <line x1='21' y1='21' x2='15' y2='15'></line>
</svg>`;
  const IconRefresh = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-refresh' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path color='cyan' d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4'></path>
   <path color='cyan' d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4'></path>
</svg>`;
  const IconPhoto = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-photo' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.25' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path color='silver' stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line color='silver' x1='15' y1='8' x2='15.01' y2='8'></line>
   <rect color='silver' x='4' y='4' width='16' height='16' rx='3'></rect>
   <path color='silver' d='M4 15l4 -4a3 5 0 0 1 3 0l5 5'></path>
   <path color='silver' d='M14 14l1 -1a3 5 0 0 1 3 0l2 2'></path>
</svg>`;
  const IconPhotoOff = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-photo-off' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.25' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path color='silver' stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <line color='silver' x1='15' y1='8' x2='15.01' y2='8'></line>
   <path color='silver' d='M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9'></path>
   <path color='silver' d='M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5'></path>
   <line color='orange' x1='3' y1='3' x2='21' y2='21'></line>
   <path color='silver' d='M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2'></path>
</svg>`;
  const IconPencil = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-pencil' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
   <path d='M13.5 6.5l4 4'></path>
</svg>`;
  const IconDeviceFloppy = `
<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-device-floppy' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2'></path>
   <path d='M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
   <path d='M14 4l0 4l-6 0l0 -4'></path>
</svg>`;

  const styles = ":root {\n    --theme-body-background: #25262b;\n    --theme-body-text-color: #c1c2c5;\n    --theme-text-color: #c1c2c5;\n    --theme-primary-color: #1a1b1e;\n    --theme-primary-text-color: #c1c2c5;\n    --theme-background-color: #25262b;\n    --theme-hightlight-color: #2c2e33;\n    --theme-border-color: #373a40;\n}\n\n/*  Simple Normalizer */\nhtml {\n    font-size: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    color: #333;\n    background-color: #fff;\n    padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n    color: var(--theme-body-text-color);\n    text-decoration: none;\n}\n\nimg {\n    height: auto;\n    vertical-align: middle;\n    border: 0 none;\n}\n\n.icon-tabler {\n    height: 1rem;\n    width: 1rem;\n    align-self: center;\n    vertical-align: sub;\n}\n\n#nprogress .bar {\n    background: #29d;\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4px;\n}\n\n#MangaOnlineViewer {\n    padding-bottom: 40px;\n    min-height: 760px;\n    min-width: 360px;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    color: var(--theme-body-text-color);\n    background-color: var(--theme-body-background);\n}\n\n#MangaOnlineViewer #Chapter {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    min-width: 225px;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR {\n    direction: ltr;\n}\n\n#MangaOnlineViewer #Chapter.FluidRTL {\n    direction: rtl;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR,\n#MangaOnlineViewer #Chapter.FluidRTL {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .PageImg,\n#MangaOnlineViewer #Chapter.FluidRTL .PageImg {\n    min-width: unset;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .MangaPage.DoublePage,\n#MangaOnlineViewer #Chapter.FluidRTL .MangaPage.DoublePage {\n    grid-column: span 2;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .MangaPage:not(.DoublePage):nth-child(2n),\n#MangaOnlineViewer #Chapter.FluidRTL .MangaPage:not(.DoublePage):nth-child(2n) {\n    display: flex;\n    justify-content: start;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .MangaPage:not(.DoublePage):nth-child(2n-1),\n#MangaOnlineViewer #Chapter.FluidRTL .MangaPage:not(.DoublePage):nth-child(2n-1) {\n    display: flex;\n    justify-content: end;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\n    margin-bottom: 15px;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .MangaPage,\n#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {\n    width: auto;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR .ZoomWidth .icon-tabler,\n#MangaOnlineViewer #Chapter.FluidRTL .ZoomWidth .icon-tabler {\n    color: red;\n}\n\n#MangaOnlineViewer #SettingsPanel {\n    color: var(--theme-text-color);\n    padding: 10px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000;\n    transition: transform 0.3s ease-in, background-color 0.3s linear;\n    transform: translateX(-100%);\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    overflow-y: auto;\n    max-width: 100vw;\n    width: 305px;\n}\n\n#MangaOnlineViewer #SettingsPanel.visible {\n    transform: translateX(0);\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\n    display: none;\n}\n\n#MangaOnlineViewer #SettingsPanel input[type='range'] {\n    width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel .RangeValue {\n    display: inline-block;\n    color: var(--theme-primary-text-color);\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: var(--theme-primary-color);\n    padding: 2px 5px;\n    margin-left: 8px;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    writing-mode: vertical-lr;\n    width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist option {\n    padding: 0;\n}\n\n#MangaOnlineViewer #ThemeSection {\n    border: 1px solid var(--theme-body-text-color);\n    border-radius: 10px;\n    padding: 10px;\n}\n\n#MangaOnlineViewer .closeButton {\n    width: fit-content;\n    height: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n#MangaOnlineViewer .overlay {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 950;\n    cursor: pointer;\n}\n\n#MangaOnlineViewer .overlay.visible {\n    display: block;\n}\n\n#MangaOnlineViewer .ThemeRadio {\n    border: 1px solid var(--theme-text-color);\n    color: var(--theme-primary-text-color);\n    background-color: var(--theme-primary-color);\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    padding: 1px;\n    margin: 2px 5px;\n    position: relative;\n}\n\n#MangaOnlineViewer .ThemeRadio svg {\n    position: absolute;\n    top: 15%;\n    right: 15%;\n}\n\n#MangaOnlineViewer .ThemeRadio.custom {\n    /*background-image: url(\"${svgToUrl(IconPalette)}\");*/\n    /*background-position: center;*/\n    /*background-repeat: no-repeat;*/\n    /*background-size: 80%;*/\n}\n\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\n    display: inline;\n}\n\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\n    display: none;\n}\n\n#MangaOnlineViewer #KeybindingsPanel {\n    padding: 10px;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    transition: transform 0.3s ease-in-out;\n    transform: translateX(100%);\n    line-height: 1.5em;\n    z-index: 1000;\n    overflow-y: auto;\n    width: 360px;\n    max-width: 100vw;\n}\n\n#MangaOnlineViewer #KeybindingsPanel.visible {\n    transform: translateX(0);\n    display: block;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 5px;\n}\n\n#MangaOnlineViewer #KeybindingsPanel input {\n    display: inline-block;\n    width: 100%;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\n    grid-column: span 2;\n}\n\n#MangaOnlineViewer #BookmarksPanel {\n    position: fixed;\n    top: 10%;\n    width: 50%;\n    left: 25%;\n    right: 25%;\n    text-align: center;\n    max-height: 70%;\n    transition: transform 0.3s ease-in-out;\n    transform: scaleY(0%);\n    z-index: 1000;\n}\n\n#MangaOnlineViewer #BookmarksPanel.visible {\n    transform: scaleY(100%);\n    display: block;\n}\n\n#MangaOnlineViewer #BookmarksList {\n    padding: 0 15px;\n    overflow: auto;\n    max-height: 60vh;\n}\n\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkData {\n    flex-basis: 15%;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-basis: 55%;\n}\n\n#MangaOnlineViewer select {\n    height: 20px;\n    padding: 0;\n    margin-bottom: 5px;\n}\n\n#MangaOnlineViewer .ControlButton {\n    cursor: pointer;\n    border-radius: 5px;\n    border-width: 1px;\n    padding: 2px;\n    min-height: 32px;\n    color: var(--theme-primary-text-color);\n    background-color: var(--theme-primary-color);\n    border-color: var(--theme-border-color);\n}\n\n#MangaOnlineViewer .ControlButton:hover {\n    opacity: 0.8;\n}\n\n#MangaOnlineViewer .panel {\n    padding: 5px;\n    position: inherit;\n    border-radius: 5px;\n    background-color: var(--theme-background-color);\n}\n\n#MangaOnlineViewer .MangaPage {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    /*transform: translate3d(0, 0, 0);*/\n    /*backface-visibility: hidden;*/\n    /*perspective: 1000px;*/\n    line-height: 0;\n    min-height: 22px;\n    min-width: 100%;\n}\n\n#MangaOnlineViewer .PageContent {\n    text-align: center;\n    display: inline-block;\n    overflow-x: auto;\n    max-width: 100%;\n    transition: all 0.3s ease-in-out;\n    height: 100%;\n    overflow-y: hidden;\n}\n\n#MangaOnlineViewer .MangaPage.hide .PageContent {\n    /*display: none;*/\n    height: 0;\n}\n\n#MangaOnlineViewer .MangaPage.hide .PageFunctions {\n    /*position:relative;*/\n}\n\n#MangaOnlineViewer .PageContent .PageImg[src=''],\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\n    width: 40vw;\n    height: 80vh;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n    background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\n    width: 40vw;\n    height: 80vh;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n    background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\n    width: 100px;\n    height: 150px;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n}\n\n#MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {\n    max-width: 100%;\n}\n\n#MangaOnlineViewer #gotoPage {\n    min-width: 35px;\n}\n\n#MangaOnlineViewer #ThemeSelector {\n    width: 110px;\n}\n\n#MangaOnlineViewer #Header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-flow: row nowrap;\n    transition: transform 0.3s ease-in;\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: inherit;\n    z-index: 900;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-hide {\n    transform: translateY(-100%);\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-show {\n    transform: translateY(-1%);\n}\n\n#MangaOnlineViewer #Header.hover,\n#MangaOnlineViewer #Header.fixed,\n#MangaOnlineViewer #Header.click {\n    position: static;\n    transform: none;\n}\n\n#MangaOnlineViewer #Header.headroom-end,\n#MangaOnlineViewer #Header.visible,\n#MangaOnlineViewer #Header.fixed {\n    transform: translateY(-1%);\n    position: sticky;\n}\n\n#MangaOnlineViewer #Header.hover:hover,\n#MangaOnlineViewer #Header.fixed {\n    position: sticky;\n}\n\n#MangaOnlineViewer #Header.scroll #menu,\n#MangaOnlineViewer #Header.fixed #menu,\n#MangaOnlineViewer #Header.hover:hover #menu,\n#MangaOnlineViewer #Header:not(.click).visible #menu {\n    display: none;\n}\n\n#MangaOnlineViewer #menu {\n    position: fixed;\n    min-height: 70px;\n    width: 100%;\n    top: 0;\n    z-index: 1;\n    color: var(--theme-body-text-color);\n}\n\n#MangaOnlineViewer #Header.click #menu {\n    cursor: pointer;\n}\n\n#MangaOnlineViewer #Header.click:not(.headroom-hide) #menu,\n#MangaOnlineViewer #Header.click.headroom-end #menu,\n#MangaOnlineViewer #Header.click.visible #menu {\n    position: static;\n    width: 50px;\n    min-height: unset;\n}\n\n#MangaOnlineViewer #MangaTitle {\n    padding: 2px;\n    margin: 0;\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n#MangaOnlineViewer #GlobalFunctions {\n    display: flex;\n    gap: 3px;\n    padding-left: 10px;\n    flex-wrap: wrap;\n    width: 300px;\n    z-index: 100;\n}\n\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\n    width: 25px;\n    height: 25px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\n    display: flex;\n    align-items: center;\n}\n\n#MangaOnlineViewer #GlobalFunctions #Zoom {\n    margin-left: 5px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\n    width: 40px;\n    display: inline-block;\n    color: var(--theme-primary-text-color);\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: var(--theme-primary-color);\n    padding: 2px 5px;\n}\n\n#MangaOnlineViewer #ChapterNavigation {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: end;\n    padding-right: 10px;\n    width: 300px;\n}\n\n#MangaOnlineViewer .ChapterControl {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n#MangaOnlineViewer .ChapterControl .NavigationControlButton {\n    display: inline-flex;\n    margin-left: 3px;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 10px;\n    gap: 0.5em;\n}\n\n#MangaOnlineViewer .ChapterControl .NavigationControlButton .icon-tabler {\n    flex-shrink: 0;\n    align-self: center;\n    width: 1rem;\n    height: 1rem;\n}\n\n#MangaOnlineViewer .ChapterControl .NavigationControlButton[href='#'],\n#MangaOnlineViewer .ChapterControl .NavigationControlButton[href=''],\n#MangaOnlineViewer .ChapterControl .NavigationControlButton[href='undefined'] {\n    visibility: hidden;\n}\n\n#MangaOnlineViewer .ChapterControl #download.loading {\n    cursor: not-allowed;\n    pointer-events: none;\n    opacity: 0.6;\n}\n\n#MangaOnlineViewer .ChapterControl #download.disabled {\n    visibility: hidden;\n}\n\n#MangaOnlineViewer .ViewerTitle {\n    text-align: center;\n    min-height: 60px;\n    /*max-width: 500px;*/\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 5px;\n    flex-basis: 60%;\n}\n\n#MangaOnlineViewer .ViewerTitle #series[href='#'],\n#MangaOnlineViewer .ViewerTitle #series[href=''],\n#MangaOnlineViewer .ViewerTitle #series[href='undefined'] {\n    visibility: hidden;\n}\n\n#MangaOnlineViewer .PageFunctions {\n    font-family: monospace;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    gap: 3px;\n    position: absolute;\n    right: 0;\n}\n\n#MangaOnlineViewer .PageFunctions > .PageIndex {\n    background-color: var(--theme-primary-color);\n    color: var(--theme-primary-text-color);\n    min-width: 20px;\n    text-align: center;\n    display: inline-block;\n    padding: 3px 5px;\n    line-height: 1rem;\n    border-radius: 5px;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton {\n    padding: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    border-width: 0;\n    min-height: auto;\n    opacity: 0.5;\n}\n\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\n    opacity: 1;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\n    opacity: 0.9;\n}\n\n#MangaOnlineViewer .ControlButton.hidden,\n#MangaOnlineViewer.light #ColorScheme > :not(.inverse),\n#MangaOnlineViewer:not(.light) #ColorScheme > .inverse,\n#MangaOnlineViewer .ChapterControl #download.loading > :not(.inverse),\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .inverse,\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .inverse,\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > :not(.inverse),\n#MangaOnlineViewer.bookmarked .ControlButton.Bookmark > :not(.inverse),\n#MangaOnlineViewer:not(.bookmarked) .ControlButton.Bookmark > .inverse {\n    display: none;\n}\n\n#MangaOnlineViewer.hideControls .PageFunctions {\n    visibility: hidden;\n}\n\n#MangaOnlineViewer #NavigationCounters {\n    margin: 5px;\n    width: 100%;\n    line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation {\n    color: var(--theme-text-color);\n    background-color: var(--theme-hightlight-color);\n    bottom: -180px;\n    height: 185px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding-bottom: 20px;\n    position: fixed;\n    white-space: nowrap;\n    width: 100%;\n    text-align: center;\n    transition: transform 0.3s ease-in, background-color 0.3s linear;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    line-height: 0;\n}\n\n#MangaOnlineViewer #Navigation #Thumbnails {\n    overflow-x: auto;\n    overflow-y: hidden;\n    margin-right: 10px;\n}\n\n#MangaOnlineViewer #Navigation:hover {\n    transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation.disabled {\n    display: none;\n}\n\n#MangaOnlineViewer #Navigation.visible {\n    transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail {\n    display: inline-block;\n    height: 150px;\n    margin: 0 5px;\n    border: 1px solid var(--theme-primary-color);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\n    color: var(--theme-text-color);\n    background-color: var(--theme-hightlight-color);\n    display: block;\n    opacity: 0.8;\n    position: relative;\n    bottom: 25%;\n    width: 100%;\n    line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\n    cursor: pointer;\n    display: inline-block;\n    max-height: 150px;\n    min-height: 150px;\n    min-width: 80px;\n    max-width: 160px;\n}\n\n#MangaOnlineViewer #menu .icon-tabler {\n    position: absolute;\n    top: 5px;\n    left: 10px;\n    height: 32px;\n    width: 32px;\n}\n\n/* Medium devices (landscape phones, tablets) */\n@media (max-width: 992px) {\n    #MangaOnlineViewer #Header {\n        flex-direction: column;\n    }\n\n    #MangaOnlineViewer .PageContent .PageImg {\n        max-width: 100%;\n    }\n\n    #MangaOnlineViewer .ViewerTitle {\n        order: 1;\n        min-height: auto;\n        padding: 0;\n        margin: 0;\n    }\n\n    #MangaOnlineViewer #GlobalFunctions {\n        flex-wrap: nowrap;\n        width: auto;\n        order: 3;\n        padding: 5px;\n    }\n\n    #MangaOnlineViewer #ChapterNavigation {\n        order: 2;\n    }\n\n    #MangaOnlineViewer #GlobalFunctions #ZoomSlider,\n    #MangaOnlineViewer #GlobalFunctions .ControlButton:not(.tablets, .phones) {\n        display: none;\n    }\n}\n\n/* Small devices (portrait phones) */\n@media (max-width: 600px) {\n    #MangaOnlineViewer #Header {\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #MangaOnlineViewer .ViewerTitle {\n        order: 1;\n        flex-basis: 100%;\n        margin-top: 0;\n        height: auto;\n        padding: 0;\n    }\n\n    #MangaOnlineViewer #GlobalFunctions {\n        order: 2;\n        padding: 0;\n        min-width: auto;\n    }\n\n    #MangaOnlineViewer #ChapterNavigation {\n        order: 3;\n        width: auto;\n    }\n\n    #MangaOnlineViewer #Navigation {\n        display: none;\n    }\n\n    #MangaOnlineViewer .PageFunctions {\n        padding: 0;\n    }\n\n    #MangaOnlineViewer .PageFunctions .ControlButton:not(.Bookmark) {\n        display: none;\n    }\n\n    #MangaOnlineViewer .PageFunctions .ControlButton.Bookmark {\n        opacity: 1;\n    }\n\n    #MangaOnlineViewer .PageContent {\n        margin: 0;\n        width: 100%;\n    }\n\n    #MangaOnlineViewer .PageContent .PageImg {\n        max-width: 100%;\n    }\n\n    #MangaOnlineViewer #GlobalFunctions #ZoomSlider,\n    #MangaOnlineViewer #GlobalFunctions .ControlButton:not(.phones) {\n        display: none;\n    }\n\n    #MangaOnlineViewer #SettingsPanel .DefaultZoomMode,\n    #MangaOnlineViewer #SettingsPanel .DefaultZoom,\n    #MangaOnlineViewer #SettingsPanel .viewMode,\n    #MangaOnlineViewer #SettingsPanel .fitIfOversize,\n    #MangaOnlineViewer #SettingsPanel .showThumbnails,\n    #MangaOnlineViewer #SettingsPanel .lazyLoadImages,\n    #MangaOnlineViewer #SettingsPanel .downloadZip,\n    #MangaOnlineViewer #SettingsPanel .minZoom,\n    #MangaOnlineViewer #SettingsPanel .zoomStep,\n    #MangaOnlineViewer #SettingsPanel .headerType {\n        display: none;\n    }\n\n    #MangaOnlineViewer #KeybindingsPanel {\n        display: none;\n    }\n\n    #MangaOnlineViewer .ChapterControl .download {\n        display: none;\n    }\n\n    #MangaOnlineViewer #Counters {\n        display: none;\n    }\n}\n\n@-webkit-keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.animate-spin {\n    -webkit-animation: spin 1s linear infinite;\n    animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin-reverse {\n    0% {\n        transform: rotate(360deg);\n    }\n    to {\n        transform: rotate(0);\n    }\n}\n\n@keyframes spin-reverse {\n    0% {\n        transform: rotate(360deg);\n    }\n    to {\n        transform: rotate(0);\n    }\n}\n\n.animate-spin-reverse {\n    -webkit-animation: spin-reverse 1s linear infinite;\n    animation: spin-reverse 1s linear infinite;\n}\n";

  const cssStyles = `
  :root,
  .dark,
  .dark .default,
  [data-theme='dark'] {
    --theme-body-background: ${colors.dark["600"]};
    --theme-body-text-color: ${colors.dark["50"]};
    --theme-text-color: ${colors.dark["50"]};
    --theme-primary-color: ${colors.dark["700"]};
    --theme-primary-text-color: ${colors.dark["50"]};
    --theme-background-color: ${colors.dark["600"]};
    --theme-hightlight-color: ${colors.dark["500"]};
    --theme-border-color: ${colors.dark["400"]};
  }

  .light,
  .light .default,
  [data-theme='light'] {
    --theme-body-background: ${colors.gray["50"]};
    --theme-body-text-color: ${colors.gray["900"]};
    --theme-text-color: ${colors.gray["900"]};
    --theme-primary-color: ${colors.gray["300"]};
    --theme-primary-text-color: ${colors.gray["900"]};
    --theme-background-color: ${colors.gray["50"]};
    --theme-hightlight-color: ${colors.gray["500"]};
    --theme-border-color: ${colors.gray["100"]};
  }

  #MangaOnlineViewer .PageContent .PageImg[src=""],
  #MangaOnlineViewer .PageContent .PageImg:not([src]) {
    background-image: url("${svgToUrl(IconPhoto)}");
  }

  #MangaOnlineViewer .PageContent .PageImg.imgBroken {
    background-image: url("${svgToUrl(IconPhotoOff)}");
  }

  #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
  #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
    background-image: url("${svgToUrl(IconPhoto)}");
  }

  #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${svgToUrl(IconPalette)}");*/
  }

  ${styles}
`;

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
      /* omit accumulator */
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
    HIDE_CONTROLS: "Always Hide Page Controls",
    HEADER_TYPE: "Change Header Type",
    HEADER_HOVER: "Hover",
    HEADER_SCROLL: "Scroll",
    HEADER_CLICK: "Click",
    HEADER_FIXED: "Fixed",
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
    SCROLL_UP: "Scroll Up",
    SCROLL_DOWN: "Scroll Down",
    CLOSE: "Close",
    LIST_EMPTY: "List Empty"
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
    HIDE_CONTROLS: "Sempre esconder controles das paginas",
    HEADER_TYPE: "Mudar Tipo de Cabeçalho",
    HEADER_HOVER: "Passar por perto",
    HEADER_SCROLL: "Rolagem do Mouse",
    HEADER_CLICK: "Click",
    HEADER_FIXED: "Fixo",
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
    BUTTON_RESET_SETTINGS: "Limpar Configurações",
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
    SCROLL_UP: "Subir Pagina",
    SCROLL_DOWN: "Descer Pagina",
    CLOSE: "Fechar",
    LIST_EMPTY: "Lista Vazia"
  };

  const zh_CN = {
    ID: "zh_cn",
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
    HIDE_CONTROLS: "始终隐藏页面控件",
    HEADER_TYPE: "更改标题显示方式",
    HEADER_HOVER: "悬停",
    HEADER_SCROLL: "滚动",
    HEADER_CLICK: "点击",
    HEADER_FIXED: "固定",
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
    BUTTON_RESET_SETTINGS: "重置设置",
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
    SCROLL_UP: "向上滚动",
    SCROLL_DOWN: "向下滚动",
    CLOSE: "关闭",
    LIST_EMPTY: "没有收藏书签"
  };

  const locales = [en_US, pt_BR, zh_CN];

  function isEmpty(value) {
    return value === null || // check for null
    typeof value === "undefined" || value === void 0 || // check for undefined
    typeof value === "string" && value === "" || // check for empty string
    Array.isArray(value) && value.length === 0 || // check for empty array
    typeof value === "object" && Object.keys(value).length === 0;
  }
  function isNothing(value) {
    const isEmptyObject = (a) => {
      if (!Array.isArray(a)) {
        const hasNonempty = Object.keys(a).some((element) => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      return !a.some(
        (element) => !isNothing(element)
        //
      );
    };
    return (
      // eslint-disable-next-line eqeqeq
      value == false || value === 0 || isEmpty(value) || typeof value === "object" && isEmptyObject(value)
    );
  }

  const defaultSettings = {
    locale: "en_US",
    theme: "darkblue",
    customTheme: "#263e3a",
    themeShade: 600,
    colorScheme: "dark",
    fitWidthIfOversize: true,
    showThumbnails: true,
    downloadZip: false,
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
      VIEW_MODE_RIGHT: ["B"]
    }
  };
  let settings$1 = _.defaultsDeep(getSettings(defaultSettings), defaultSettings);
  if (isMobile) {
    settings$1.lazyLoadImages = true;
    settings$1.fitWidthIfOversize = true;
    settings$1.showThumbnails = false;
    settings$1.viewMode = "WebComic";
    settings$1.header = "click";
  }
  function useSettings() {
    return settings$1;
  }
  function getLocaleString(name) {
    const locale = locales.find((l) => l.ID === settings$1.locale);
    if (locale && locale[name]) {
      return locale[name];
    }
    if (locales[1] && locales[1][name]) {
      return locales[1][name];
    }
    return "##MISSING_STRING##";
  }
  function updateSettings(newValue) {
    logScript(JSON.stringify(newValue));
    settings$1 = { ...settings$1, ...newValue };
    setSettings(diffObj(settings$1, defaultSettings));
  }
  function resetSettings() {
    getListGM().forEach((setting) => removeValueGM(setting));
    updateSettings(defaultSettings);
  }
  function isBookmarked(url = window.location.href) {
    return settings$1.bookmarks.find((el) => el.url === url)?.page;
  }
  const bookmarkTimeLimit = 1e3 * 60 * 60 * 24 * 30 * 12;
  const refreshedBookmark = settings$1.bookmarks.filter(
    (el) => Date.now() - new Date(el.date).valueOf() < bookmarkTimeLimit
  );
  if (settings$1.bookmarks.length !== refreshedBookmark.length) {
    updateSettings({ bookmarks: refreshedBookmark });
  }
  if (!isNothing(isBookmarked())) {
    logScript(`Bookmark Removed ${window.location.href}`);
    updateSettings({
      bookmarks: settings$1.bookmarks.filter((el) => el.url !== window.location.href)
    });
  }

  function createStyleElement(id, content) {
    const style = document.createElement("style");
    style.id = id;
    style.appendChild(document.createTextNode(content));
    return style;
  }
  function appendStyleSheet(id, content) {
    if (!document.querySelector(`#${id}`)) {
      const head = document.head || document.querySelector("head");
      head.appendChild(createStyleElement(id, content));
    }
  }
  function removeStyleSheet(id) {
    document.querySelectorAll(`style[id="${id}"]`).forEach((elem) => elem.remove());
  }
  function replaceStyleSheet(id, content) {
    removeStyleSheet(id);
    appendStyleSheet(id, content);
  }
  function wrapStyle(id, css) {
    return `<style type='text/css' id='${id}'>${css}</style>`;
  }

  function generateThemeCSS(name, primary, text) {
    return `
    .${name},
    [data-theme='${name}'] {
      --theme-primary-color: ${primary};
      --theme-primary-text-color: ${text};
    }
  `;
  }
  function getNormalThemeCSS(theme) {
    return generateThemeCSS(
      theme.name,
      theme[useSettings().themeShade],
      useSettings().themeShade < 500 ? theme["900"] : theme["50"]
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
  const themesSelector = [...Object.keys(colors).map((color) => colors[color].name)].map(
    (theme) => `
<span class='${theme} ThemeRadio ${useSettings().theme === theme ? "selected" : ""}'
      title='${theme}'      
>
${IconCheck}
</span>
`
  );
  function refreshThemes() {
    themes().forEach((theme) => replaceStyleSheet(theme.name, getNormalThemeCSS(theme)));
    replaceStyleSheet("custom", getCustomThemeCSS(useSettings().customTheme));
  }
  const themesCSS = themes().map(addTheme).join("") + wrapStyle("custom", getCustomThemeCSS(useSettings().customTheme));

  const sweetalert = ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}";

  const normalize = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";

  const nprogress = "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n";

  const keyscss = "/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */";

  const fix = "#pagesSlider {\n    margin: 10px 0;\n}\n\n#pageInputs {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    justify-content: center;\n}\n\n#swal2-html-container .pageInput {\n    border: 1px darkblue dashed;\n    border-radius: 5px;\n    text-align: center;\n    background-color: aliceblue;\n    color: black;\n    max-width: 40%;\n}\n\n#swal2-title {\n    color: navy;\n}\n\nbutton.swal2-styled {\n    position: inherit;\n    transform: inherit;\n}\n";

  const sweetalertStyle = [normalize, sweetalert, fix, nprogress, keyscss].join("\n");

  function head(manga) {
    return `
<title>${manga.title}</title>
<meta charset='UTF-8'>
${wrapStyle("externals", sweetalertStyle)}
${wrapStyle("reader", cssStyles)}
${themesCSS}
${wrapStyle(
    "MinZoom",
    `#MangaOnlineViewer .PageContent .PageImg {min-width: ${useSettings().minZoom}vw;}`
  )}
`;
  }

  function indexList(repeat, begin = 1) {
    return Array(repeat).fill(0).map((_, i) => i + 1).filter((i) => i >= begin);
  }

  const listPages = (times, begin) => indexList(times, begin).map(
    // language=html
    (index) => `
      <div id='Page${index}' class='MangaPage'>
        <div class='PageFunctions'>
          <button class='Bookmark ControlButton' title='${getLocaleString("BOOKMARK")}'>
            ${IconBookmark}
            ${IconBookmarkOff}
          </button>
          <button class='ZoomIn ControlButton' title='${getLocaleString("ZOOM_IN")}'>
            ${IconZoomIn}
          </button>
          <button class='ZoomRestore ControlButton' title='${getLocaleString("ZOOM_RESET")}'>
            ${IconZoomCancel}
          </button>
          <button class='ZoomOut ControlButton' title='${getLocaleString("ZOOM_OUT")}'>
            ${IconZoomOut}
          </button>
          <button class='ZoomWidth ControlButton' title='${getLocaleString("ZOOM_WIDTH")}'>
            ${IconArrowAutofitWidth}
          </button>
          <button class='ZoomHeight ControlButton' title='${getLocaleString("ZOOM_HEIGHT")}'>
            ${IconArrowAutofitHeight}
          </button>
          <button class='Hide ControlButton' title='${getLocaleString("HIDE")}'>
            ${IconEye}
            ${IconEyeOff}
          </button>
          <button class='Reload ControlButton' title='${getLocaleString("RELOAD")}'>
            ${IconRefresh}
          </button>
          <span class='PageIndex'>${index}</span>
        </div>
        <div class='PageContent'>
          <img id='PageImg${index}' alt='' class='PageImg' />
        </div>
      </div>`
  );

  const localeSelector = locales.map(
    (locale) => `<option value='${locale.ID}' ${useSettings().locale === locale.ID ? "selected" : ""}>${locale.NAME}</option>`
  );
  const SettingsPanel = `
  <div id='SettingsOverlay' class='overlay'></div>
  <div id='SettingsPanel' class='panel'>
    <h2>${getLocaleString("SETTINGS")}</h2>
    <button id='CloseSettings' class='closeButton' title='${getLocaleString("CLOSE")}'>
      ${IconX}
    </button>
    <button id='ResetSettings' class='simpleButton'>
      ${getLocaleString("BUTTON_RESET_SETTINGS")}
    </button>
    <!-- =========================================================================================== -->
    <div class='ControlLabel locale'>${getLocaleString("LANGUAGE")}:
      <select id='locale'>
        ${localeSelector.join("")}
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div id='ThemeSection'>
      <div class='ControlLabel ColorSchemeSelector'>${getLocaleString("COLOR_SCHEME")}:
        <button id='ColorScheme' class='simpleButton'>
          ${IconSun}
          ${IconMoon}
        </button>
      </div>
      <!-- =========================================================================================== -->
      <div class='ControlLabel ThemeSelector'>${getLocaleString("THEME")}:
        <span class='custom ThemeRadio 
            ${useSettings().theme === "custom" ? "selected" : ""}'
              title='custom'>
        ${IconPalette}
        ${IconCheck}
      </span>
        ${themesSelector.join("")}
      </div>
      <!-- =========================================================================================== -->
      <div id='Hue' class='ControlLabel CustomTheme ControlLabelItem 
          ${useSettings().theme.startsWith("custom") ? "show" : ""}'>
        ${getLocaleString("THEME_HUE")}:
        <input id='CustomThemeHue' type='color' value='${useSettings().customTheme}'
               class='colorpicker CustomTheme' />
      </div>
      <!-- =========================================================================================== -->
      <div id='Shade' class='ControlLabel CustomTheme ControlLabelItem
          ${useSettings().theme.startsWith("custom") ? "" : "show"}'>
      <span>
        ${getLocaleString("THEME_SHADE")}:
        <output id='themeShadeVal' class='RangeValue' for='themeShade'>${useSettings().themeShade}</output>
      </span>
        <input type='range'
               value='${useSettings().themeShade}'
               name='ThemeShade'
               id='ThemeShade'
               min='100'
               max='900'
               step='100'
               oninput='themeShadeVal.value = this.value'
        />
      </div>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel loadMode'>${getLocaleString("DEFAULT_LOAD_MODE")}:
      <select id='loadMode'>
        <option value='wait' ${useSettings().loadMode === "wait" ? "selected" : ""}>
          ${getLocaleString("LOAD_MODE_NORMAL")}
        </option>
        <option value='always' ${useSettings().loadMode === "always" ? "selected" : ""}>
          ${getLocaleString("LOAD_MODE_ALWAYS")}
        </option>
        <option value='never' ${useSettings().loadMode === "never" ? "selected" : ""}>
          ${getLocaleString("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel PagesPerSecond'>${getLocaleString("LOAD_SPEED")}:
      <select id='PagesPerSecond'>
        <option value='3000' ${useSettings().throttlePageLoad === 3e3 ? "selected" : ""}>
            0.3(${getLocaleString("SLOWLY")})
        </option>
        <option value='2000' ${useSettings().throttlePageLoad === 2e3 ? "selected" : ""}>
          0.5
        </option>
        <option value='1000' ${useSettings().throttlePageLoad === 1e3 ? "selected" : ""}>
            01(${getLocaleString("NORMAL")})
        </option>
        <option value='500' ${useSettings().throttlePageLoad === 500 ? "selected" : ""}>
          02
        </option>
        <option value='250' ${useSettings().throttlePageLoad === 250 ? "selected" : ""}>
            04(${getLocaleString("FAST")})
        </option>
        <option value='125' ${useSettings().throttlePageLoad === 125 ? "selected" : ""}>
          08
        </option>
        <option value='100' ${useSettings().throttlePageLoad === 100 ? "selected" : ""}>
            10(${getLocaleString("EXTREME")})
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel DefaultZoomMode'>
      ${getLocaleString("DEFAULT_ZOOM_MODE")}:
      <select id='DefaultZoomMode'>
        <option value='percent' ${useSettings().zoomMode === "percent" ? "selected" : ""}>
          ${getLocaleString("PERCENT")}
        </option>
        <option value='width' ${useSettings().zoomMode === "width" ? "selected" : ""}>
          ${getLocaleString("FIT_WIDTH")}
        </option>
        <option value='height' ${useSettings().zoomMode === "height" ? "selected" : ""}>
          ${getLocaleString("FIT_HEIGHT")}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel DefaultZoom ControlLabelItem
        ${useSettings().zoomMode === "percent" ? "show" : ""}'>
      <span>
        ${getLocaleString("DEFAULT_ZOOM")}:
        <output id='defaultZoomVal'
                class='RangeValue'
                for='DefaultZoom'>
          ${useSettings().defaultZoom}%
        </output>
      </span>
      <input type='range'
             value='${useSettings().defaultZoom}'
             name='DefaultZoom'
             id='DefaultZoom'
             min='5'
             max='200'
             step='5'
             list='tickmarks'
             oninput='defaultZoomVal.value = this.value + "%"'
      />
      <datalist id='tickmarks'>
        <option value='5'>5</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='75'>75</option>
        <option value='100'>100</option>
        <option value='125'>125</option>
        <option value='150'>150</option>
        <option value='175'>175</option>
        <option value='200'>200</option>
      </datalist>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel minZoom'>
    <span>
      ${getLocaleString("MINIMUM_ZOOM")}:
      <output id='minZoomVal' class='RangeValue' for='minZoom'>${useSettings().minZoom}%</output>
    </span>
      <input type='range'
             value='${useSettings().minZoom}'
             name='minZoom'
             id='minZoom'
             min='30'
             max='100'
             step='10'
             oninput='minZoomVal.value = this.value + "%"'
      />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel zoomStep'>
    <span>
      ${getLocaleString("ZOOM_STEP")}:
      <output id='zoomStepVal' class='RangeValue' for='zoomStep'>${useSettings().zoomStep}%</output>
    </span>
      <input type='range'
             value='${useSettings().zoomStep}'
             name='zoomStep'
             id='zoomStep'
             min='5'
             max='50'
             step='5'
             oninput='zoomStepVal.value = this.value + "%"'
      />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel viewMode'>${getLocaleString("DEFAULT_VIEW_MODE")}:
      <select id='viewMode'>
        <option value='Vertical' ${useSettings().viewMode === "Vertical" ? "selected" : ""}>
          ${getLocaleString("VIEW_MODE_VERTICAL")}
        </option>
        <option value='WebComic' ${useSettings().viewMode === "WebComic" ? "selected" : ""}>
          ${getLocaleString("VIEW_MODE_WEBCOMIC")}
        </option>
        <option value='FluidLTR' ${useSettings().viewMode === "FluidLTR" ? "selected" : ""}>
          ${getLocaleString("VIEW_MODE_LEFT")}
        </option>
        <option value='FluidRTL' ${useSettings().viewMode === "FluidRTL" ? "selected" : ""}>
          ${getLocaleString("VIEW_MODE_RIGHT")}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel fitIfOversize'>${getLocaleString("FIT_WIDTH_OVERSIZED")}:
      <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${useSettings().fitWidthIfOversize ? "checked" : ""} />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel showThumbnails'>${getLocaleString("SHOW_THUMBNAILS")}:
      <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${useSettings().showThumbnails ? "checked" : ""} />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel lazyLoadImages'>${getLocaleString("LAZY_LOAD_IMAGES_ENABLE")}:
      <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${useSettings().lazyLoadImages ? "checked" : ""} />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel lazyStart ControlLabelItem
        ${useSettings().lazyLoadImages ? "show" : ""}'
    '>
    <span>
      ${getLocaleString("LAZY_LOAD_IMAGES")}:
      <output id='lazyStartVal' for='lazyStart'>${useSettings().lazyStart}</output>
    </span>
    <input type='range' value='${useSettings().lazyStart}' name='lazyStart' id='lazyStart' min='5' max='100' step='5'
           oninput='lazyStartVal.value = this.value' />

  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel downloadZip'>${getLocaleString("DOWNLOAD_IMAGES")}:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${useSettings().downloadZip ? "checked" : ""} />
  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel hidePageControls'>${getLocaleString("HIDE_CONTROLS")}:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${useSettings().hidePageControls ? "checked" : ""} />
  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel headerType'>${getLocaleString("HEADER_TYPE")}:
    <select id='headerType'>
      <option value='hover' ${useSettings().header === "hover" ? "selected" : ""}>
        ${getLocaleString("HEADER_HOVER")}
      </option>
      <option value='scroll' ${useSettings().header === "scroll" ? "selected" : ""}>
        ${getLocaleString("HEADER_SCROLL")}
      </option>
      <option value='click' ${useSettings().header === "click" ? "selected" : ""}>
        ${getLocaleString("HEADER_CLICK")}
      </option>
      <option value='fixed' ${useSettings().header === "fixed" ? "selected" : ""}>
        ${getLocaleString("HEADER_FIXED")}
      </option>
    </select>
  </div>
  </div>
`;

  const keybindList = () => Object.keys(useSettings().keybinds).map((kb) => {
    const keys = useSettings().keybinds[kb]?.length ? useSettings().keybinds[kb]?.map((key) => `<kbd class='dark'>${key}</kbd>`).join(" / ") : "";
    return `<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
  const keybindEditor = () => Object.keys(useSettings().keybinds).map(
    // language=html
    (kb) => `<label for='${kb}'>${getLocaleString(kb)}:</label>
        <input type='text' class='KeybindInput' id='${kb}' name='${kb}'
               value='${useSettings().keybinds[kb]?.join(" , ") || ""}'>`
  ).concat(`<div id='HotKeysRules'> ${getLocaleString("KEYBIND_RULES")}</div>`);
  const KeybindingsPanel = `
  <div id='KeybindingsOverlay' class='overlay'></div>
  <div id='KeybindingsPanel' class='panel'>
    <h2>${getLocaleString("KEYBINDINGS")}</h2>
    <button id='CloseKeybindings' class='closeButton' title='${getLocaleString("CLOSE")}'>
      ${IconX}
    </button>
    <div class='controls'>
      <button id='EditKeybindings' class='ControlButton' type='button'
              title='${getLocaleString("EDIT_KEYBINDS")}'>
        ${IconPencil}
        ${getLocaleString("BUTTON_EDIT")}
      </button>
      <button id='SaveKeybindings' class='ControlButton hidden' type='button'
              title='${getLocaleString("SAVE_KEYBINDS")}'>
        ${IconDeviceFloppy}
        ${getLocaleString("BUTTON_SAVE")}
      </button>
    </div>
    <div id='KeybindingsList'>
      ${keybindList().join("\n")}
    </div>
  </div>
`;

  const ThumbnailsPanel = (times, begin) => indexList(times, begin).map(
    // language=html
    (index) => `
      <div id='Thumbnail${index}' class='Thumbnail'>
        <img id='ThumbnailImg${index}' alt='' class='ThumbnailImg' src='' />
        <span class='ThumbnailIndex'>${index}</span>
      </div>`
  );

  const listBookmarks = () => {
    if (isEmpty(useSettings().bookmarks))
      return [getLocaleString("LIST_EMPTY")];
    return useSettings().bookmarks.map(
      (mark, index) => `
      <div id='Bookmark${index + 1}' class='BookmarkItem'>
  <span class='bookmarkData bookmarkDate'>
    ${new Date(mark.date).toISOString().slice(0, 10)}
  </span>
        <span class='bookmarkData bookmarkURl'
              title='${mark.url}'>
    ${mark.url}
  </span>
        <span class='bookmarkData bookmarkPage'>Page: ${mark.page}</span>
        <span class='bookmarkData bookmarkFunctions'>
    <button class='ControlButton open' title='Open Bookmark' type='button'
            onclick="window.open('${mark.url}','_blank')">
      ${IconExternalLink}
    </button>
    <button class='ControlButton erase' title='Delete Bookmark' type='button' value='${mark.url}'>
      ${IconTrash}
    </button>
          </pan>
      </div>`
    );
  };
  const BookmarkPanel = `
<div id='BookmarksOverlay' class='overlay'></div>
<div id='BookmarksPanel' class='panel'>
  <button id='CloseBookmarks' class='closeButton' title='${getLocaleString("CLOSE")}'>
    ${IconX}
  </button>
  <h2>${getLocaleString("BOOKMARKS")}</h2>
  <div id='BookmarksList'>
    ${listBookmarks().join("")}
  </div>
</div>
`;
  function reloadBookmarks() {
    const list = document.getElementById("BookmarksList");
    if (list) {
      list.innerHTML = listBookmarks().join("");
    }
  }

  const listOptions = (times, begin) => indexList(times, begin).map((index) => `<option value='${index}'>${index}</option>`);
  const app = (manga, begin = 1) => `
  <div id='MangaOnlineViewer'
       class='${useSettings().colorScheme} 
    ${useSettings().hidePageControls ? "hideControls" : ""}
    ${isBookmarked() ? "bookmarked" : ""}'
       data-theme='${useSettings().theme}'>
    <header id='Header' class='${useSettings().header}'>
      <div id='menu'>
        ${IconMenu2}
      </div>
      <aside id='GlobalFunctions'>    
      <span>
        <button id='enlarge' title='${getLocaleString("ENLARGE")}' class='ControlButton'>
          ${IconZoomInArea}
        </button>
        <button id='restore' title='${getLocaleString("RESTORE")}' class='ControlButton'>
          ${IconZoomPan}
        </button>
        <button id='reduce' title='${getLocaleString("REDUCE")}' class='ControlButton'>
          ${IconZoomOutArea}
        </button>
        <button id='fitWidth' title='${getLocaleString("FIT_WIDTH")}' class='ControlButton'>
          ${IconArrowAutofitWidth}
        </button>
        <button id='fitHeight' title='${getLocaleString("FIT_HEIGHT")}' class='ControlButton'>
          ${IconArrowAutofitHeight}
        </button>
        <button id='keybindings' title='${getLocaleString("KEYBINDINGS")}' class='ControlButton'>
          ${IconKeyboard}
        </button>
      </span>
        <span>
        <button id='ltrMode' title='${getLocaleString("VIEW_MODE_LEFT")}' class='ControlButton'>
          ${IconArrowAutofitRight}
        </button>
        <button id='verticalMode'
                title='${getLocaleString("VIEW_MODE_VERTICAL")}' class='ControlButton tablets'>
          ${IconArrowAutofitDown}
        </button>
        <button id='webComic'
                title='${getLocaleString("VIEW_MODE_WEBCOMIC")}' class='ControlButton tablets'>
          ${IconSpacingVertical}
        </button>
        <button id='rtlMode' title='${getLocaleString("VIEW_MODE_RIGHT")}' class='ControlButton'>
          ${IconArrowAutofitLeft}
        </button>
        <button id='pageControls'
                title='${getLocaleString("TOGGLE_CONTROLS")}' class='ControlButton tablets'>
          ${IconListNumbers}
        </button>
        <button id='bookmarks' title='${getLocaleString(
  "BOOKMARKS"
)}' class='ControlButton tablets'>
          ${IconBookmarks}
        </button>
        <button id='settings' title='${getLocaleString(
  "SETTINGS"
)}' class='ControlButton tablets phones'>
          ${IconSettings}
        </button>
      </span>
        <span id='ZoomSlider'>
        <output id='ZoomVal'
                class='RangeValue'
                for='Zoom'>
            ${useSettings().defaultZoom}%
        </output>
        <input type='range'
               value='${useSettings().defaultZoom}'
               name='Zoom'
               id='Zoom'
               min='1'
               max='200'
        />
      </span>
      </aside>
      <div class='ViewerTitle'>
        <h1 id='MangaTitle'>${manga.title}</h1>
        <a id='series' href='${manga.series}'>
            (${getLocaleString("RETURN_CHAPTER_LIST")})
        </a>
      </div>
      <nav id='ChapterNavigation'>
        <div id='Counters' class='ControlLabel'>
          ${getLocaleString("PAGES_LOADED")}:
          <i>0</i> / <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b>
          <span class='ControlLabel'>
          ${getLocaleString("GO_TO_PAGE")}:
        </span>
          <select id='gotoPage'>
            <option selected>#</option>
            ${listOptions(manga.pages, begin).join("")}
          </select>
        </div>
        <div id='ChapterControl' class='ChapterControl'>
          <button id='download' class='NavigationControlButton ControlButton disabled' type='button'
                  title='${getLocaleString("DOWNLOAD_ZIP")}'>
            ${IconFileDownload}
            ${IconLoader2}
            ${getLocaleString("BUTTON_DOWNLOAD")}
          </button>
          <a id='prev' class='NavigationControlButton ControlButton' type='button'
             href='${manga.prev || ""}' title='${getLocaleString("PREVIOUS_CHAPTER")}'>
            ${IconArrowBigLeft}
            ${getLocaleString("BUTTON_PREVIOUS")}
          </a>
          <a id='next' class='NavigationControlButton ControlButton' type='button'
             href='${manga.next || ""}' title='${getLocaleString("NEXT_CHAPTER")}'>
            ${getLocaleString("BUTTON_NEXT")}
            ${IconArrowBigRight}
          </a>
        </div>
      </nav>
    </header>
    <main id='Chapter' class='${useSettings().fitWidthIfOversize ? "fitWidthIfOversize" : ""}
      ${useSettings().viewMode}'>
      ${listPages(manga.pages, begin).join("")}
    </main>
    <nav id='Navigation' class='panel ${useSettings().showThumbnails ? "" : "disabled"}'>
      <div id='NavigationCounters' class='ControlLabel'>
        ${IconCategory}
        <i>0</i> / <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b>
        ${getLocaleString("PAGES_LOADED")}
      </div>
      <div id='Thumbnails'>
        ${ThumbnailsPanel(manga.pages, begin).join("")}
      </div>
    </nav>
    ${SettingsPanel}
    ${KeybindingsPanel}
    ${BookmarkPanel}
  </div>`;

  function buttonBookmarks() {
    document.querySelector("#BookmarksPanel")?.classList.toggle("visible");
    document.querySelector("#BookmarksOverlay")?.classList.toggle("visible");
  }
  function eraseBookmarks(elem) {
    elem.addEventListener("click", (event) => {
      const target = event.currentTarget.value;
      const marks = useSettings().bookmarks.filter((el) => el.url !== target);
      if (target === window.location.href) {
        document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");
      }
      logScript(`Bookmark Removed ${target}`);
      Swal.fire({
        title: getLocaleString("BOOKMARK_REMOVED"),
        timer: 1e4,
        icon: "error"
      });
      updateSettings({ bookmarks: marks });
      reloadBookmarks();
      document.querySelectorAll(".BookmarkItem .erase")?.forEach(eraseBookmarks);
    });
  }
  function buttonBookmark(elem) {
    elem.addEventListener("click", (event) => {
      document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");
      const num = parseInt(
        event.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent || "0",
        10
      );
      const mark = {
        url: window.location.href,
        page: num,
        date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
      };
      if (isBookmarked(mark.url)) {
        updateSettings({ bookmarks: useSettings().bookmarks.filter((el) => el.url !== mark.url) });
        Swal.fire({
          title: getLocaleString("BOOKMARK_REMOVED"),
          timer: 1e4,
          icon: "error"
        });
      } else {
        updateSettings({ bookmarks: [...useSettings().bookmarks, mark] });
        Swal.fire({
          title: getLocaleString("BOOKMARK_SAVED"),
          html: getLocaleString("BOOKMARK_SAVED").replace("##NUM##", num.toString()),
          icon: "success"
        });
      }
      reloadBookmarks();
      document.querySelectorAll(".BookmarkItem .erase")?.forEach(eraseBookmarks);
    });
  }
  function bookmarks() {
    document.querySelector("#bookmarks")?.addEventListener("click", buttonBookmarks);
    document.querySelector("#CloseBookmarks")?.addEventListener("click", buttonBookmarks);
    document.querySelector("#BookmarksOverlay")?.addEventListener("click", buttonBookmarks);
    document.querySelectorAll(".BookmarkItem .erase")?.forEach(eraseBookmarks);
    document.querySelectorAll(".Bookmark")?.forEach(buttonBookmark);
  }

  let zip;
  const base64Regex = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/;
  const getExtension = (mimeType) => ((/image\/(?<ext>jpe?g|png|webp)/.exec(mimeType) || {}).groups || {}).ext || "" || "png";
  const getFilename = (name, index, total, ext) => `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, "0")}.${ext.replace(
  "jpeg",
  "jpg"
)}`;
  function getImage(src) {
    return new Promise((resolve) => {
      logScript(`Getting Image data: ${src}`);
      GM_xmlhttpRequest({
        method: "GET",
        url: src,
        headers: { referer: src, origin: src },
        responseType: "blob",
        onload(response) {
          resolve(response);
        }
      });
    });
  }
  function getImageData(img, index, array) {
    const src = img.getAttribute("src") ?? img.getAttribute("data-src");
    if (src == null)
      return Promise.reject(new Error("Image source not specified"));
    const base64 = base64Regex.exec(src);
    if (base64 && base64.groups) {
      return Promise.resolve({
        name: getFilename("Page-", index, array.length, getExtension(base64.groups?.mimeType)),
        data: base64.groups.data
      });
    }
    return new Promise((resolve) => {
      getImage(src).then(
        (res) => resolve({
          name: getFilename("Page-", index, array.length, getExtension(res.response.type)),
          data: res.response
        })
      );
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
    const data = await Promise.all(images.map(getImageData));
    data.forEach(addZip);
    logScript("Generating Zip");
    zip.generateAsync(
      {
        type: "blob"
      }
      // logScript, progress
    ).then((content) => {
      logScript("Download Ready");
      const zipName = `${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;
      saveAs(content, zipName, true);
      document.getElementById("download")?.classList.remove("loading");
    }).catch(logScript);
  }

  function startDownload(event) {
    const button = event.currentTarget;
    if (button.classList.contains("loading"))
      return;
    logScript("Downloading Chapter");
    button.classList.add("loading");
    generateZip();
  }
  function globalHideImageControls() {
    document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls");
  }
  function redirect(event) {
    const element = event.target;
    const url = element.getAttribute("value") || element.getAttribute("href");
    if (url)
      window.location.href = url;
  }
  function globals() {
    document.querySelector("#download")?.addEventListener("click", startDownload);
    document.querySelector("#pageControls")?.addEventListener("click", globalHideImageControls);
    document.querySelector("#next")?.addEventListener("click", redirect);
    document.querySelector("#prev")?.addEventListener("click", redirect);
  }

  function headroom(showEnd = 0) {
    let prevOffset = 0;
    const setScrollDirection = (classSuffix) => {
      const header = document.querySelector("#Header");
      header.classList.remove("headroom-end");
      header.classList.remove("headroom-hide");
      header.classList.remove("headroom-show");
      if (classSuffix)
        header.classList.add(`headroom-${classSuffix}`);
    };
    function toggleScrollDirection() {
      const { scrollY } = window;
      if (showEnd && useSettings().zoomMode !== "height" && scrollY + window.innerHeight + showEnd > document.body.offsetHeight) {
        setScrollDirection("end");
      } else if (scrollY > prevOffset && scrollY > 50) {
        setScrollDirection("hide");
      } else if (scrollY < prevOffset && scrollY > 50) {
        setScrollDirection("show");
      } else {
        setScrollDirection("");
      }
      prevOffset = scrollY;
    }
    window.addEventListener("scroll", _.debounce(toggleScrollDirection, 50));
  }

  function scrollToElement(ele) {
    window.scroll(0, ele?.offsetTop || 0);
  }

  const doClick = (selector) => document.querySelector(selector)?.dispatchEvent(new Event("click"));
  function doScrolling(sign) {
    if (useSettings().zoomMode === "height") {
      const pages = [...document.querySelectorAll(".MangaPage")];
      const distance = pages.map((element) => Math.abs(element.offsetTop - window.scrollY));
      const currentPage = distance.findIndex((d) => d <= 5);
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
    SCROLL_UP: () => {
      doScrolling(-1);
    },
    SCROLL_DOWN: () => {
      doScrolling(1);
    },
    NEXT_CHAPTER: () => {
      doClick("#next");
    },
    PREVIOUS_CHAPTER: () => {
      doClick("#prev");
    },
    ENLARGE: () => {
      doClick("#enlarge");
    },
    REDUCE: () => {
      doClick("#reduce");
    },
    RESTORE: () => {
      doClick("#restore");
    },
    FIT_WIDTH: () => {
      doClick("#fitWidth");
    },
    FIT_HEIGHT: () => {
      doClick("#fitHeight");
    },
    SETTINGS: () => {
      doClick("#settings");
    },
    VIEW_MODE_WEBCOMIC: () => {
      doClick("#webComic");
    },
    VIEW_MODE_VERTICAL: () => {
      doClick("#verticalMode");
    },
    VIEW_MODE_LEFT: () => {
      doClick("#rtlMode");
    },
    VIEW_MODE_RIGHT: () => {
      doClick("#ltrMode");
    }
  };
  function keybindings() {
    const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    document.onkeydown = null;
    document.onkeyup = null;
    document.onkeypress = null;
    W.onkeydown = null;
    W.onkeyup = null;
    W.onkeypress = null;
    W.onload = null;
    document.body.onload = null;
    hotkeys.unbind();
    Object.keys(useSettings().keybinds).forEach((key) => {
      hotkeys(useSettings().keybinds[key]?.join(",") || "", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        actions[key]();
      });
    });
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

  function fetchText(url, format) {
    return new Promise((resolve) => {
      logScript("Fetching page: ", url);
      fetch(url).then(
        (response) => (
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
  function fetchHtml(url) {
    return fetchText(url, "text/html");
  }
  function getElementAttribute(url, selector, attribute) {
    return fetchHtml(url).then((doc) => doc.querySelector(selector)?.getAttribute(attribute));
  }

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
    const viewport = {
      top: 0 - settings.threshold,
      bottom: window.scrollY + window.innerHeight + settings.threshold
    };
    return rect.bottom >= viewport.top && rect.top <= viewport.bottom;
  }
  function showElement(item) {
    const value = item.element.getAttribute(settings.lazyAttribute);
    if (value)
      item.element.setAttribute(settings.targetAttribute, value);
    item.callback(item.element);
  }
  function executeCheck() {
    const inView = listElements.filter(filterInView);
    listElements = listElements.filter((item) => !filterInView(item));
    inView.forEach(showElement);
  }
  const observerEvent = _.throttle(executeCheck, settings.throttle);
  function lazyLoad(element, callback) {
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
    listElements.push({ element, callback });
    observerEvent();
  }

  function applyZoom(zoom = useSettings().zoomMode, pages = ".PageContent img") {
    const pg = [...document.querySelectorAll(pages)];
    pg.forEach((img) => {
      img.removeAttribute("width");
      img.removeAttribute("height");
      img.removeAttribute("style");
      if (zoom === "width") {
        img.style.width = `${window.innerWidth}px`;
      } else if (zoom === "height") {
        const nav = document.querySelector("#Navigation")?.classList.contains("disabled");
        const chap = document.querySelector("#Chapter")?.classList.contains("WebComic");
        const nextHeight = window.innerHeight + (nav ? 0 : -30) + (chap ? 0 : -35);
        img.style.height = `${nextHeight}px`;
        img.style.minWidth = "unset";
      } else if (zoom === "percent") {
        img.style.width = `${img.naturalWidth * (useSettings().defaultZoom / 100)}px`;
      } else {
        img.style.width = `${img.naturalWidth * (zoom / 100)}px`;
      }
    });
  }
  function invalidateImageCache(src, repeat) {
    const url = src.replace(/[?&]cache=\d+$/, "");
    const symbol = url.indexOf("?") === -1 ? "?" : "&";
    return `${url + symbol}cache=${repeat}`;
  }
  function getRepeatValue(src) {
    let repeat = 1;
    const cache = src?.match(/cache=(\d+)$/);
    if (cache && cache[1])
      repeat = parseInt(cache[1], 10) + 1;
    return repeat;
  }
  function reloadImage(img) {
    const src = img.getAttribute("src");
    if (!src)
      return;
    img.removeAttribute("src");
    img.setAttribute("src", invalidateImageCache(src, getRepeatValue(src)));
  }
  function onImagesDone() {
    logScript("Images Loading Complete");
    if (useSettings().downloadZip) {
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
      title.innerHTML = `(${percentage}%) ${document.querySelector("#MangaTitle")?.textContent}`;
    }
    document.querySelectorAll("#Counters i, #NavigationCounters i").forEach((ele) => {
      ele.textContent = loaded.toString();
    });
    NProgress.configure({
      showSpinner: false
    }).set(loaded / total);
    logScript(`Progress: ${percentage}%`);
    if (loaded === total)
      onImagesDone();
  }
  function onImagesSuccess(instance) {
    instance.images.forEach((image) => {
      image.img.classList.add("imgLoaded");
      image.img.classList.remove("imgBroken");
      const thumbId = image.img.id.replace("PageImg", "ThumbnailImg");
      const thumb = document.getElementById(thumbId);
      if (thumb)
        thumb.setAttribute("src", image.img.getAttribute("src"));
      applyZoom(useSettings().zoomMode, `#${image.img.id}`);
      updateProgress();
    });
  }
  function onImagesFail(instance) {
    instance.images.forEach((image) => {
      image.img.classList.add("imgBroken");
      const src = image.img.getAttribute("src");
      if (src && getRepeatValue(src) <= useSettings().maxReload) {
        setTimeout(() => {
          reloadImage(image.img);
          const imgLoad = imagesLoaded(image.img.parentElement);
          imgLoad.on("done", onImagesSuccess);
          imgLoad.on("fail", onImagesFail);
        }, 2e3);
      }
    });
  }
  function normalizeUrl(url = "") {
    let uri = url.trim();
    if (uri.startsWith("//")) {
      uri = `https:${uri}`;
    }
    return uri;
  }
  function addImg(manga, index, imageSrc, position) {
    const src = normalizeUrl(imageSrc);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (!useSettings().lazyLoadImages || position <= useSettings().lazyStart) {
        setTimeout(() => {
          const imgLoad = imagesLoaded(img.parentElement);
          imgLoad.on("done", onImagesSuccess);
          imgLoad.on("fail", onImagesFail);
          img.setAttribute("src", src);
          logScript("Loaded Image:", index, "Source:", src);
        }, (manga.timer || useSettings().throttlePageLoad) * position);
      } else {
        img.setAttribute("data-src", src);
        lazyLoad(img, () => {
          const imgLoad = imagesLoaded(img.parentElement);
          imgLoad.on("done", onImagesSuccess);
          imgLoad.on("fail", onImagesFail);
          logScript("Lazy Image: ", index, " Source: ", img.getAttribute("src"));
        });
      }
    }
  }
  function findPage(manga, index, pageUrl, lazy) {
    return async () => {
      const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? "src");
      const img = document.querySelector(`#PageImg${index}`);
      if (src && img) {
        img.style.width = "auto";
        const imgLoad = imagesLoaded(img.parentElement);
        imgLoad.on("done", onImagesSuccess);
        imgLoad.on("fail", onImagesFail);
        img.setAttribute("src", src);
        logScript(`${lazy && "Lazy "}Page: `, index, " Source: ", img.getAttribute("src"));
      }
    };
  }
  async function addPage(manga, index, pageUrl, position) {
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (!useSettings().lazyLoadImages || position <= useSettings().lazyStart) {
        setTimeout(() => {
          findPage(manga, index, pageUrl, false)();
        }, (manga.timer || useSettings().throttlePageLoad) * position);
      } else {
        img.setAttribute(
          "data-src",
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        );
        lazyLoad(img, findPage(manga, index, pageUrl, true));
      }
    }
  }
  function loadMangaPages(begin, manga) {
    indexList(manga.pages, begin).forEach(
      (index, position) => addPage(manga, index, manga.listPages[index - 1], position)
    );
  }
  function loadMangaImages(begin, manga) {
    indexList(manga.pages, begin).forEach(
      (index, position) => addImg(manga, index, manga.listImages[index - 1], position)
    );
  }
  function loadManga(manga, begin = 1) {
    useSettings().lazyLoadImages = manga.lazy || useSettings().lazyLoadImages;
    logScript("Loading Images");
    logScript(`Intervals: ${manga.timer || useSettings().throttlePageLoad || "Default(1000)"}`);
    logScript(`Lazy: ${useSettings().lazyLoadImages}, Starting from: ${useSettings().lazyStart}`);
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
        loadImages: (list) => loadMangaImages(begin, { ...manga, listImages: list }),
        loadPages: (list, img, lazyAttr) => loadMangaPages(begin, {
          ...manga,
          listPages: list,
          img,
          lazyAttr
        }),
        wait: useSettings().throttlePageLoad
      });
    } else {
      logScript("No Loading Method Found");
    }
  }

  function individual() {
    function buttonReloadPage(elem) {
      return elem.addEventListener("click", (event) => {
        const img = event.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");
        reloadImage(img);
      });
    }
    document.querySelectorAll(".Reload")?.forEach(buttonReloadPage);
    function buttonHidePage(elem) {
      elem.addEventListener("click", (event) => {
        const img = event.currentTarget.parentElement?.parentElement;
        img.classList.toggle("hide");
      });
    }
    document.querySelectorAll(".Hide")?.forEach(buttonHidePage);
  }

  function navigation() {
    function selectGoToPage(event) {
      const target = event.currentTarget.value;
      applyZoom();
      scrollToElement(document.querySelector(`#Page${target}`));
    }
    document.querySelector("#gotoPage")?.addEventListener("change", selectGoToPage);
    function clickThumbnail(elem) {
      return elem.addEventListener("click", (event) => {
        applyZoom();
        scrollToElement(
          document.querySelector(
            `#Page${event.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`
          )
        );
      });
    }
    document.querySelectorAll(".Thumbnail")?.forEach(clickThumbnail);
  }

  function options() {
    function buttonResetSettings() {
      resetSettings();
      Swal.fire({
        title: getLocaleString("ATTENTION"),
        text: getLocaleString("SETTINGS_RESET"),
        timer: 1e4,
        icon: "info"
      });
    }
    document.querySelector("#ResetSettings")?.addEventListener("click", buttonResetSettings);
    function changeLocale(event) {
      const locale = event.currentTarget.value;
      updateSettings({ locale });
      Swal.fire({
        title: getLocaleString("ATTENTION"),
        text: getLocaleString("LANGUAGE_CHANGED"),
        timer: 1e4,
        icon: "info"
      });
    }
    document.querySelector("#locale")?.addEventListener("change", changeLocale);
    function checkFitWidthOversize(event) {
      document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize");
      updateSettings({ fitWidthIfOversize: event.currentTarget.checked });
    }
    document.querySelector("#fitIfOversize")?.addEventListener("change", checkFitWidthOversize);
    function changeLoadMode(event) {
      const mode = event.currentTarget.value;
      updateSettings({ loadMode: mode });
    }
    document.querySelector("#loadMode")?.addEventListener("change", changeLoadMode);
    function checkShowThumbnails(event) {
      document.querySelector("#Navigation")?.classList.toggle("disabled");
      updateSettings({ showThumbnails: event.currentTarget.checked });
      applyZoom();
    }
    document.querySelector("#showThumbnails")?.addEventListener("change", checkShowThumbnails);
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
    document.querySelector("#downloadZip")?.addEventListener("change", changeAutoDownload);
    function checkLazyLoad(event) {
      updateSettings({ lazyLoadImages: event.currentTarget.checked });
      const start = document.querySelector(".lazyStart");
      if (useSettings().lazyLoadImages) {
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
    document.querySelector("#lazyLoadImages")?.addEventListener("change", checkLazyLoad);
    function changeLazyStart(event) {
      const start = event.currentTarget.value;
      updateSettings({ lazyStart: parseInt(start, 10) });
    }
    document.querySelector("#lazyStart")?.addEventListener("change", changeLazyStart);
    function changePagesPerSecond(event) {
      const timer = parseInt(event.currentTarget.value, 10);
      updateSettings({ throttlePageLoad: timer });
    }
    document.querySelector("#PagesPerSecond")?.addEventListener("change", changePagesPerSecond);
    function changeZoomStep(event) {
      const step = event.currentTarget.value;
      updateSettings({ zoomStep: parseInt(step, 10) });
    }
    document.querySelector("#zoomStep")?.addEventListener("change", changeZoomStep);
    function changeMinZoom(event) {
      const min = event.currentTarget.value;
      replaceStyleSheet("MinZoom", `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
      updateSettings({ minZoom: parseInt(min, 10) });
    }
    document.querySelector("#minZoom")?.addEventListener("input", changeMinZoom);
    function checkHideImageControls(event) {
      document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls");
      updateSettings({ hidePageControls: event.currentTarget.checked });
    }
    document.querySelector("#hidePageControls")?.addEventListener("change", checkHideImageControls);
    function changeHeaderType(event) {
      document.querySelector("#Header").className = "";
      const headerType = event.currentTarget.value;
      document.querySelector("#Header")?.classList.add(headerType);
      updateSettings({ header: headerType });
    }
    document.querySelector("#headerType")?.addEventListener("change", changeHeaderType);
  }

  function panels() {
    function buttonHeader() {
      const header = document.querySelector("#Header");
      if (header?.classList.contains("click"))
        header?.classList.toggle("visible");
    }
    document.querySelector("#menu")?.addEventListener("click", buttonHeader);
    function buttonSettingsOpen() {
      document.querySelector("#SettingsPanel")?.classList.add("visible");
      document.querySelector("#Navigation")?.classList.add("visible");
      document.querySelector("#Header")?.classList.add("visible");
      document.querySelector("#SettingsOverlay")?.classList.add("visible");
    }
    function buttonSettingsClose() {
      document.querySelector("#SettingsPanel")?.classList.remove("visible");
      document.querySelector("#Navigation")?.classList.remove("visible");
      document.querySelector("#Header")?.classList.remove("visible");
      document.querySelector("#SettingsOverlay")?.classList.remove("visible");
    }
    document.querySelector("#settings")?.addEventListener("click", buttonSettingsOpen);
    document.querySelector("#CloseSettings")?.addEventListener("click", buttonSettingsClose);
    document.querySelector("#SettingsOverlay")?.addEventListener("click", buttonSettingsClose);
    function buttonKeybindings() {
      document.querySelector("#KeybindingsList").innerHTML = keybindList().join("\n");
      document.querySelector("#SaveKeybindings")?.classList.add("hidden");
      document.querySelector("#EditKeybindings")?.classList.remove("hidden");
      document.querySelector("#KeybindingsPanel")?.classList.toggle("visible");
      document.querySelector("#KeybindingsOverlay")?.classList.toggle("visible");
    }
    function saveKeybindings() {
      const newkeybinds = useSettings().keybinds;
      Object.keys(useSettings().keybinds).forEach((kb) => {
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
    document.querySelector("#keybindings")?.addEventListener("click", buttonKeybindings);
    document.querySelector("#CloseKeybindings")?.addEventListener("click", buttonKeybindings);
    document.querySelector("#KeybindingsOverlay")?.addEventListener("click", buttonKeybindings);
    document.querySelector("#EditKeybindings")?.addEventListener("click", editKeybindings);
    document.querySelector("#SaveKeybindings")?.addEventListener("click", saveKeybindings);
  }

  function size() {
    function buttonZoomIn(elem) {
      return elem.addEventListener("click", (event) => {
        const img = event.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");
        const ratio = img.width / img.naturalWidth * (100 + useSettings().zoomStep);
        applyZoom(ratio, `#${img.getAttribute("id")}`);
      });
    }
    document.querySelectorAll(".ZoomIn")?.forEach(buttonZoomIn);
    function buttonZoomOut(elem) {
      return elem.addEventListener("click", (event) => {
        const img = event.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");
        const ratio = img.width / img.naturalWidth * (100 - useSettings().zoomStep);
        applyZoom(ratio, `#${img.getAttribute("id")}`);
      });
    }
    document.querySelectorAll(".ZoomOut")?.forEach(buttonZoomOut);
    function buttonRestoreZoom(elem) {
      return elem.addEventListener("click", () => {
        document.querySelector(".PageContent .PageImg")?.removeAttribute("width");
      });
    }
    document.querySelectorAll(".ZoomRestore")?.forEach(buttonRestoreZoom);
    function buttonZoomWidth(elem) {
      return elem.addEventListener("click", (event) => {
        const page = event.currentTarget.parentElement?.parentElement;
        const img = page?.querySelector(".PageImg");
        applyZoom("width", `#${img.getAttribute("id")}`);
        page?.classList.toggle("DoublePage");
      });
    }
    document.querySelectorAll(".ZoomWidth")?.forEach(buttonZoomWidth);
    function buttonZoomHeight(elem) {
      elem.addEventListener("click", (event) => {
        const img = event.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");
        applyZoom("height", `#${img.getAttribute("id")}`);
      });
    }
    document.querySelectorAll(".ZoomHeight")?.forEach(buttonZoomHeight);
  }

  function theming() {
    function changeColorScheme() {
      const isDark = useSettings().colorScheme === "dark";
      updateSettings({ colorScheme: isDark ? "light" : "dark" });
      const elem = document.getElementById("MangaOnlineViewer");
      elem?.classList.remove(isDark ? "dark" : "light");
      elem?.classList.add(useSettings().colorScheme);
    }
    document.querySelector("#ColorScheme")?.addEventListener("click", changeColorScheme);
    function changeTheme(event) {
      const target = event.currentTarget;
      [...document.querySelectorAll(".ThemeRadio")].forEach(
        (elem) => elem.classList.remove("selected")
      );
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
    [...document.querySelectorAll(".ThemeRadio")].forEach(
      (elem) => elem.addEventListener("click", changeTheme)
    );
    function changeCustomTheme(event) {
      const target = event.currentTarget.value;
      updateSettings({ customTheme: target });
      addCustomTheme(target);
    }
    document.querySelector("#CustomThemeHue")?.addEventListener("change", changeCustomTheme);
    function changeThemeShade(event) {
      const target = parseInt(event.currentTarget.value, 10);
      updateSettings({ themeShade: target });
      refreshThemes();
    }
    document.querySelector("#ThemeShade")?.addEventListener("change", changeThemeShade);
  }

  function updateViewMode(mode) {
    return () => {
      document.querySelector("#Chapter")?.classList.remove("Vertical");
      document.querySelector("#Chapter")?.classList.remove("WebComic");
      document.querySelector("#Chapter")?.classList.remove("FluidLTR");
      document.querySelector("#Chapter")?.classList.remove("FluidRTL");
      document.querySelector("#Chapter")?.classList.add(mode);
      applyZoom();
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
  }

  function changeGlobalZoom(value) {
    return () => {
      if (typeof value !== "number") {
        useSettings().zoomMode = value;
      } else {
        useSettings().zoomMode = "percent";
      }
      const globalZoomVal = document.querySelector("#ZoomVal");
      globalZoomVal.textContent = Number.isInteger(value) ? `${value}%` : value;
      applyZoom(value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const globalZoom = document.querySelector("#Zoom");
      const ratio = parseInt(globalZoom.value, 10) + sign * useSettings().zoomStep;
      globalZoom.value = ratio.toString();
      globalZoom?.dispatchEvent(new Event("input", { bubbles: true }));
    };
  }
  function zoom() {
    function changeDefaultZoomMode(event) {
      const target = event.currentTarget.value;
      updateSettings({ zoomMode: target });
      changeGlobalZoom(target)();
      const percent = document.querySelector(".DefaultZoom");
      if (useSettings().zoomMode === "percent") {
        percent?.classList.add("show");
      } else {
        percent?.classList.remove("show");
      }
    }
    document.querySelector("#DefaultZoomMode")?.addEventListener("change", changeDefaultZoomMode);
    function changeDefaultZoom(event) {
      const target = parseInt(event.currentTarget.value, 10);
      updateSettings({ defaultZoom: target });
      changeGlobalZoom(target)();
    }
    document.querySelector("#DefaultZoom")?.addEventListener("input", changeDefaultZoom);
    function changeZoom(event) {
      const target = parseInt(event.currentTarget.value, 10);
      changeGlobalZoom(target)();
      document.querySelector("#ZoomVal").textContent = `${target}%`;
    }
    document.querySelector("#Zoom")?.addEventListener("input", changeZoom);
    document.querySelector("#enlarge")?.addEventListener("click", changeZoomByStep());
    document.querySelector("#reduce")?.addEventListener("click", changeZoomByStep(-1));
    document.querySelector("#restore")?.addEventListener("click", changeGlobalZoom(100));
    document.querySelector("#fitWidth")?.addEventListener("click", changeGlobalZoom("width"));
    document.querySelector("#fitHeight")?.addEventListener("click", changeGlobalZoom("height"));
  }

  function events() {
    bookmarks();
    globals();
    headroom(100);
    keybindings();
    individual();
    navigation();
    options();
    panels();
    size();
    theming();
    viewMode();
    zoom();
  }

  async function display(manga) {
    if (manga.before !== void 0) {
      await manga.before(manga.begin);
    }
    [document.documentElement, document.head, document.body].forEach((element) => {
      element.getAttributeNames().forEach((attr) => element.removeAttribute(attr));
    });
    document.head.innerHTML = head(manga);
    document.body.innerHTML = app(manga, manga.begin);
    logScript("Rebuilding Site");
    setTimeout(() => {
      try {
        events();
        setTimeout(() => {
          window.scrollTo(0, 0);
          loadManga(manga, manga.begin);
        }, 50);
      } catch (e) {
        logScript(e);
      }
    }, 50);
  }

  const startButton = "#StartMOV {\n    font-size: 2em;\n    color: #fff;\n    cursor: pointer;\n    margin: 10px auto;\n    padding: 10px 20px;\n    text-align: center;\n    border: none;\n    background-size: 300% 100%;\n    border-radius: 50px;\n    transition: all 0.4s ease-in-out;\n    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n    position: fixed;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 105000;\n    height: 3em;\n    min-height: 50px;\n    width: 80%;\n}\n\n#StartMOV:hover {\n    background-position: 100% 0;\n    transition: all 0.4s ease-in-out;\n}\n\n#StartMOV:focus {\n    outline: none;\n}\n";

  function testAttribute(site) {
    if (site.waitAttr !== void 0) {
      const wait = document.querySelector(site.waitAttr[0])?.getAttribute(site.waitAttr[1]);
      if (isNothing(wait)) {
        logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
        return true;
      }
      logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
    }
    return false;
  }
  function testElement(site) {
    if (site.waitEle !== void 0) {
      const wait = document.querySelector(site.waitEle);
      if (isNothing(wait?.tagName)) {
        logScript(`Waiting for Element ${site.waitEle} = `, wait);
        return true;
      }
      logScript(`Found Element ${site.waitEle} = `, wait);
    }
    return false;
  }
  function testVariable(site) {
    if (site.waitVar !== void 0) {
      const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
      const wait = W[site.waitVar];
      if (isNothing(wait)) {
        logScript(`Waiting for Variable ${site.waitVar} = ${wait}`);
        return true;
      }
      logScript(`Found Variable ${site.waitVar} = ${wait}`);
    }
    return false;
  }
  function testFunc(site) {
    if (site.waitFunc !== void 0) {
      const wait = site.waitFunc();
      if (!wait) {
        logScript(`Waiting to pass Function check ${site.waitFunc} = ${wait}`);
        return true;
      }
      logScript(`Found Function check ${site.waitFunc} = ${wait}`);
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
  function validadeMax(valEnd, beginPage, rs) {
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
    let beginPage = begin || 1;
    let endPage = manga.pages;
    const options = {
      title: getLocaleString("STARTING"),
      // language=html
      html: `
      ${getLocaleString("CHOOSE_BEGINNING")}
      <div id='pageInputGroup'>
        <div id='pageInputs'>
          <input type='number' id='pageBegin' class='pageInput' min='1' inputmode='numeric'
                 pattern='[0-9]*' max='${manga.pages}' value='${beginPage}' />
          - <input type='number' id='pageEnd' class='pageInput' min='1' inputmode='numeric'
                   pattern='[0-9]*' max='${manga.pages}' value='${endPage}' />
        </div>
        <div id='pagesSlider'></div>
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
              if (pageBeginInput)
                pageBeginInput.value = beginPage.toString();
              if (pageEndInput)
                pageEndInput.value = endPage.toString();
            }
          }
        });
        function changedInput() {
          if (pageBeginInput.value === "" || pageEndInput.value === "")
            return;
          const valBegin = validateMin(
            parseInt(pageBeginInput.value, 10),
            endPage,
            rangeSliderElement
          );
          const valEnd = validadeMax(
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
        const observerEvent = _.debounce(changedInput, 300);
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
        display(manga);
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
      lateStart(site, beginning);
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
      html: `${manga.begin > 1 ? `${getLocaleString("RESUME")}${manga.begin}.<br/>` : ""}${getLocaleString("WAITING")}`,
      showCancelButton: true,
      cancelButtonColor: "#d33",
      reverseButtons: true,
      timer: 3e3
    }).then((result) => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        display(manga);
      } else {
        createLateStartButton(site, manga.begin);
        logScript(result.dismiss);
      }
    });
  }
  async function preparePage(site) {
    const manga = await site.run();
    logScript(`Found Pages: ${manga.pages}`);
    if (manga.pages <= 0)
      return;
    manga.begin = isBookmarked() || manga.begin || 1;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    const W = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    W.MOV = (startPage, endPage) => {
      if (startPage !== void 0)
        manga.begin = startPage;
      if (endPage !== void 0)
        manga.pages = endPage;
      display(manga);
    };
    switch (site.start ?? useSettings()?.loadMode) {
      case "never":
        createLateStartButton(site, manga.begin);
        break;
      case "always":
        display(manga);
        break;
      case "wait":
      default:
        showWaitPopup(site, manga);
        break;
    }
  }
  function waitExec(site, waitElapsed = 0) {
    if (waitElapsed < (site.waitMax || 5e3) && (testAttribute(site) || testElement(site) || testVariable(site) || testFunc(site))) {
      setTimeout(() => {
        waitExec(site, waitElapsed + (site.waitStep || 1e3));
      }, site.waitStep || 1e3);
      return;
    }
    preparePage(site);
  }
  function start(sites) {
    logScript(
      `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`
    );
    logScript(`${sites.length} Known Manga Sites, Looking for a match...`);
    const site = sites.find((s) => s.url.test(window.location.href));
    if (site) {
      logScript(`Found site: ${site.name}`);
      waitExec(site);
    } else {
      logScript(`Sorry, didnt find any valid site`);
    }
  }

  start(sites);

})();
