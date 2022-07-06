// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Asura Scans, Flame Scans, Batoto, ComiCastle, Dynasty-Scans, Leitor, LHTranslation, MangaDex, MangaFox, MangaHere, MangaFreak, mangahosted, MangaHub, MangaKakalot, MangaNelo, MangaNato, MangaPark, Mangareader, MangaSee, Manga4life, MangaTown, NineManga, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, SenManga(Raw), TenManga, TuMangaOnline, UnionMangas, Manga33, FoOlSlide, Kireicake, Yuri-ism, Sense-Scans, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, ReaperScans, JaiminisBox, DisasterScans
// @version 2022.07.06
// @license MIT
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.0/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.19/sweetalert2.min.js
// @include /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @include /https?:\/\/(www.)?comicastle.org\/read\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+)/
// @include /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/
// @include /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/
// @include /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?(manga33).com\/manga\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/.+\/(manga|series)\/.+\/.+/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==

(function () {
    'use strict';

    // == AsuraScans and FlameScans ====================================================================
    var asurasflamecans = {
        name: ['Asura Scans', 'Flame Scans'],
        url: /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/,
        homepage: ['https://www.asurascans.com/', 'https://flamescans.org/'],
        language: ['English'],
        category: 'manga',
        waitEle: '#chapter option:nth-child(2)',
        run() {
            const chapter = document.querySelector('#chapter option:checked');
            const images = [...document.querySelectorAll('#readerarea p img')];
            return {
                title: document.querySelector('.entry-title')?.textContent?.trim(),
                series: document.querySelector('.allc a')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('src')),
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
            const images = [...document.querySelectorAll('.page-img')];
            return {
                title: document.querySelector('.nav-title a')?.textContent?.trim(),
                series: document.querySelector('.nav-title a')?.getAttribute('href'),
                pages: images.length,
                prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
                next: document.querySelector('.nav-next a')?.getAttribute('href'),
                listImages: images.map((img) => img.getAttribute('src')),
            };
        },
    };

    // == ComiCastle ===================================================================================
    var comicastle = {
        name: 'ComiCastle',
        url: /https?:\/\/(www.)?comicastle.org\/read\/.+\/[0-9]+.*/,
        homepage: 'http://www.comicastle.org/',
        language: ['English'],
        category: 'comic',
        waitEle: '.form-control option:nth-child(1)',
        run() {
            const images = [...document.querySelectorAll('.form-control')[1].querySelectorAll('option')];
            const chapter = document.querySelectorAll('.form-control')[0].querySelector('option:checked');
            return {
                title: chapter?.textContent?.trim(),
                series: document.querySelector('.navbar-header a')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.previousElementSibling?.getAttribute('value'),
                next: chapter?.nextElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('alt')),
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
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            return {
                title: document.querySelector('#chapter-title')?.textContent?.trim(),
                series: document.querySelector('#chapter-title a')?.getAttribute('href'),
                pages: W.pages.length,
                prev: document.querySelector('#prev_link')?.getAttribute('href'),
                next: document.querySelector('#next_link')?.getAttribute('href'),
                listImages: W.pages.map((x) => x.image),
            };
        },
    };

    // == FoOlSlide ====================================================================================
    var foolslide = {
        name: ['FoOlSlide', 'Kireicake', 'Yuri-ism', 'Sense-Scans'],
        url: /^(?!.*jaiminisbox).*\/read\/.+/,
        homepage: [
            '#',
            'https://reader.kireicake.com',
            'https://www.yuri-ism.net',
            'https://sensescans.com/',
        ],
        language: ['English'],
        obs: 'Any Site that uses FoOLSlide',
        category: 'manga',
        waitEle: 'img.open',
        run() {
            const chapter = [...document.querySelectorAll('.topbar_left .dropdown_parent:last-of-type li')];
            const origin = chapter.findIndex((item) => {
                const url = item.querySelector('a')?.getAttribute('href');
                if (url)
                    return window.location.href.startsWith(url);
                return false;
            });
            const pages = [...document.querySelectorAll('.topbar_right .dropdown li')];
            const images = [...document.querySelectorAll('.inner img:not(.open)')];
            const num = images.length > 1 ? images.length : pages.length;
            return {
                title: chapter.at(origin)?.querySelector('a')?.textContent?.trim(),
                series: document.querySelector('div.tbtitle div.text a')?.getAttribute('href'),
                pages: num,
                prev: chapter
                    .at(origin + 1)
                    ?.querySelector('a')
                    ?.getAttribute('href'),
                next: chapter
                    .at(origin - 1)
                    ?.querySelector('a')
                    ?.getAttribute('href'),
                listPages: images.length > 1
                    ? null
                    : Array(num)
                        .fill(0)
                        .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
                listImages: images.length > 1 ? images.map((img) => img.getAttribute('src')) : null,
                img: 'img.open',
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
        async run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const url = `https://leitor.net/leitor/pages/${W.READER_ID_RELEASE}.json?key=${W.READER_TOKEN}`;
            const api = await fetch(url).then((res) => res.json());
            const chapter = document.querySelector('.chapter-list .selected');
            return {
                title: document.querySelector('title')?.textContent?.trim(),
                series: document.querySelector('.series-cover a')?.getAttribute('href'),
                pages: api.images.length,
                prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
                next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
                listImages: api.images.map((img) => img.avif || img.legacy),
            };
        },
    };

    // == LHTranslation ================================================================================
    var lhtranslation = {
        name: 'LHTranslation',
        url: /https?:\/\/(www.)?lhtranslation.net\/read.+/,
        homepage: 'https://lhtranslation.net/',
        language: ['English'],
        category: 'manga',
        run() {
            const chapter = document.querySelector('.form-control option:checked');
            const images = [...document.querySelectorAll('img.chapter-img')];
            return {
                title: document.querySelector('.chapter-img.tieude font')?.textContent?.trim(),
                series: document.querySelector('.navbar-brand.manga-name')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('src')),
            };
        },
    };

    // == Madara WordPress Plugin ======================================================================
    // https://themeforest.net/item/madara-wordpress-theme-for-manga/20849828
    var madarawp = {
        name: [
            'Madara WordPress Plugin',
            'MangaHaus',
            'Isekai Scan',
            'Comic Kiba',
            'Zinmanga',
            'mangatx',
            'Toonily',
            'Mngazuki',
            'ReaperScans',
            'JaiminisBox',
            'DisasterScans',
        ],
        url: /https?:\/\/.+\/(manga|series)\/.+\/.+/,
        homepage: [
            '#',
            'https://manhuaus.com',
            'https://isekaiscan.com/',
            'https://comickiba.com/',
            'https://zinmanga.com/',
            'https://mangatx.com/',
            'https://toonily.net/',
            'https://mangazuki.me/',
            'https://reaperscans.com/',
            'https://jaiminisbox.net',
            'https://disasterscans.com/',
        ],
        language: ['English'],
        obs: 'Any Site that uses Madara Wordpress Plugin',
        category: 'manga',
        run() {
            const images = [
                ...document.querySelectorAll('.wp-manga-chapter-img, .blocks-gallery-item img'),
            ];
            return {
                title: document.querySelector('#chapter-heading')?.textContent?.trim(),
                series: (document.querySelector('.breadcrumb li:nth-child(3) a') ||
                    document.querySelector('.breadcrumb li:nth-child(2) a'))?.getAttribute('href'),
                pages: images.length,
                prev: document.querySelector('.prev_page')?.getAttribute('href'),
                next: document.querySelector('.next_page')?.getAttribute('href'),
                listImages: images.map((img) => img.getAttribute('src') ||
                    img.getAttribute('data-src') ||
                    img.getAttribute('data-full-url')),
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
        async run() {
            const chapterId = window.location.pathname.match(/\/chapter\/([^/]+)(\/\d+)?/)[1];
            const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
            const server = await fetch(home).then((res) => res.json());
            const images = server.chapter.data;
            const chapters = document.querySelectorAll("a[href^='/chapter/']");
            return {
                title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
                series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'),
                pages: images.length,
                prev: chapters[1].getAttribute('href'),
                next: chapters[0].getAttribute('href'),
                listImages: images.map((img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`),
            };
        },
    };

    // == MangaFox =====================================================================================
    var mangafox = {
        name: ['MangaFox', 'MangaHere'],
        url: /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
        homepage: ['https://fanfox.net/', 'https://www.mangahere.cc/'],
        language: ['English'],
        category: 'manga',
        waitVar: 'chapterid',
        async run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const key = document.querySelector('#dm5_key')?.getAttribute('value');
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain',
                },
            };
            const src = Array(W.imagecount)
                .fill(0)
                .map(async (_, i) => {
                const url = `chapterfun.ashx?cid=${W.chapterid || W.chapter_id}&page=${i}&key=${key}`;
                const api = await fetch(url, options).then((res) => res.text());
                // eslint-disable-next-line no-eval
                (0, eval)(api);
                // @ts-ignore
                return d;
            });
            const images = await Promise.all(src);
            return {
                title: document.querySelector('.reader-header-title div')?.textContent?.trim(),
                series: document.querySelector('.reader-header-title a')?.getAttribute('href'),
                pages: W.imagecount,
                prev: W.prechapterurl,
                next: W.nextchapterurl,
                listImages: images.map((img, i) => img[i === 0 ? 0 : 1]),
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
            const chapter = document.querySelector('.chapter_list select option:checked');
            const images = [...document.querySelectorAll('.mySlides img')];
            return {
                title: document.querySelector('title')?.textContent?.trim(),
                series: document.querySelector('.title a')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.previousElementSibling?.getAttribute('value'),
                next: chapter?.nextElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('src')),
            };
        },
    };

    // == mangahosted ===================================================================================
    var mangahosted = {
        name: 'mangahosted',
        url: /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/,
        homepage: 'https://mangahosted.com/',
        language: ['Portuguese'],
        category: 'manga',
        run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const images = [...document.querySelectorAll('picture img')];
            return {
                title: $('.breadcrumb li:eq(3)').text().trim(),
                series: $('.breadcrumb li:eq(2) a').attr('href'),
                pages: images.length,
                prev: W.$read_prev,
                next: W.$read_next,
                listImages: images.map((img) => img.getAttribute('src')),
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
        async run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const slug = W.CURRENT_MANGA_SLUG || window.location.pathname.split('/')[2];
            const number = window.location.pathname.split('/')[3].replace('chapter-', '');
            const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const api = await fetch('https://api.mghubcdn.com/graphql', options).then((res) => res.json());
            const images = Object.values(JSON.parse(api?.data.chapter.pages.toString()));
            return {
                title: document.querySelector('#mangareader h3')?.textContent?.trim(),
                series: document.querySelector('#mangareader a')?.getAttribute('href'),
                pages: images.length,
                prev: document.querySelector('.previous a')?.getAttribute('href'),
                next: document.querySelector('.next a')?.getAttribute('href'),
                listImages: images.map((i) => `https://img.mghubcdn.com/file/imghub/${i}`),
            };
        },
    };

    // == MangaKakalot =================================================================================
    var mangakakalot = {
        name: ['MangaKakalot', 'MangaNelo', 'MangaNato'],
        url: /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+)/,
        homepage: [
            'https://mangakakalot.com/page',
            'https://www.manganelo.com/',
            'https://www.manganato.com/',
        ],
        language: ['English'],
        category: 'manga',
        run() {
            const images = [...document.querySelectorAll('#vungdoc img, .container-chapter-reader img')];
            return {
                title: document
                    .querySelector('.info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1')
                    ?.textContent?.trim(),
                series: document.querySelectorAll('span a[title]').item(1).getAttribute('href'),
                pages: images.length,
                prev: document.querySelector('.navi-change-chapter-btn-prev, .next')?.getAttribute('href'),
                next: document.querySelector('.navi-change-chapter-btn-next, .back')?.getAttribute('href'),
                listImages: images.map((img) => img.getAttribute('src')),
            };
        },
    };

    var mangapark = {
        name: 'MangaPark',
        url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/,
        homepage: 'https://mangapark.net/',
        language: ['English'],
        category: 'manga',
        waitVar: 'CryptoJS',
        run() {
            const pass = JSON.parse(CryptoJS.AES.decrypt(amWord, amPass).toString(CryptoJS.enc.Utf8));
            return {
                title: `${amSub_name} - ${mpEpi_name}`,
                series: currSubUrl,
                pages: imgPathLis.length,
                prev: prevEpiUrl,
                next: nextEpiUrl,
                listImages: imgPathLis.map((i, index) => `${imgCdnHost + i}?${pass[index]}`),
            };
        },
    };

    // == Mangareader ==================================================================================
    var mangareader = {
        name: 'Mangareader',
        url: /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/,
        homepage: 'https://mangareader.to',
        language: ['English'],
        category: 'manga',
        obs: 'Some galleries will not be usable',
        waitEle: '.ds-image, .iv-card',
        run() {
            const chapter = document.querySelector('.chapter-item.active');
            const images = [
                ...document.querySelectorAll('.ds-image:not(.shuffled)[data-url], .iv-card:not(.shuffled)[data-url]'),
            ];
            return {
                title: document.querySelector('.hr-manga h2')?.textContent?.trim(),
                series: document.querySelector('.hr-manga')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
                next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
                listImages: images.map((img) => img.getAttribute('data-url')),
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
            const src = document.querySelector('.img-fluid')?.getAttribute('src') || '';
            const script = [...document.querySelectorAll('body script:not([src])')].at(-1)?.textContent;
            const textCurChapter = script?.match(/CurChapter = ({.+});/) || [];
            const CurChapter = JSON.parse(textCurChapter[1]);
            const textCHAPTERS = script?.match(/CHAPTERS = (\[\{.+}]);/) || [];
            const CHAPTERS = JSON.parse(textCHAPTERS[1]);
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
                return window.location.href.replace(/-chapter-.+/, `-chapter-${Chapter}${Odd}${Index}.html`);
            }
            return {
                title: document
                    .querySelector('title')
                    ?.textContent?.replace(/ Page .+/, '')
                    .trim(),
                series: document.querySelector('.MainContainer a')?.getAttribute('href'),
                pages: parseInt(CurChapter.Page, 10),
                prev: ChapterURLEncode(-1),
                next: ChapterURLEncode(+1),
                listImages: Array(parseInt(CurChapter.Page, 10))
                    .fill(0)
                    .map((_, i) => src.replace(/-\d\d\d.png/, `-${String(`000${i + 1}`).slice(-3)}.png`)),
            };
        },
    };

    // == MangaTown ====================================================================================
    var mangatown = {
        name: 'MangaTown',
        url: /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/,
        homepage: 'https://www.mangatown.com/',
        language: ['English'],
        category: 'manga',
        waitVar: 'chapter_id',
        async run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const key = document.querySelector('#dm5_key')?.getAttribute('value');
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain',
                },
            };
            const src = Array(W.total_pages)
                .fill(0)
                .map(async (_, i) => {
                const url = `chapterfun.ashx?cid=${W.chapter_id}&page=${i}&key=${key}`;
                const api = await fetch(url, options).then((res) => res.text());
                // eslint-disable-next-line no-eval
                (0, eval)(api);
                // @ts-ignore
                return d;
            });
            const images = await Promise.all(src);
            const chapter = document.querySelector('#top_chapter_list option:checked');
            return {
                title: document.querySelector('.title h1')?.textContent,
                series: W.series_url,
                pages: images.length,
                prev: chapter?.previousElementSibling?.getAttribute('value'),
                next: chapter?.nextElementSibling?.getAttribute('value'),
                listImages: images.map((img, i) => img[i === 0 ? 0 : 1]),
            };
        },
    };

    // == NineManga ====================================================================================
    var ninemanga = {
        name: 'NineManga',
        url: /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,
        homepage: 'https://ninemanga.com/',
        language: ['English'],
        category: 'manga',
        run() {
            const chapter = document.querySelector('#chapter option:checked');
            const pages = [...document.querySelector('#page').querySelectorAll('option')];
            return {
                title: document.querySelector('.tip a')?.textContent?.trim(),
                series: document.querySelector('.subgiude > li:nth-child(2) > a')?.getAttribute('href'),
                pages: pages.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listPages: pages.map((item) => $(item).val()),
                img: '.manga_pic',
            };
        },
    };

    // == PandaManga ==================================================================================
    var pandamanga = {
        name: 'PandaManga',
        url: /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/,
        homepage: 'https://www.pandamanga.com/',
        language: ['English'],
        category: 'manga',
        run() {
            const chapter = document.querySelector('.select-chapter option:checked');
            const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
            const images = data.props.pageProps.mangaview.source
                .split(',')
                .filter((url) => url.length > 0);
            return {
                title: data.props.pageProps.mangaview.nameSeoChapter,
                series: document.querySelector('.allc a')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images,
            };
        },
    };

    // == RawDevart  ===================================================================================
    var rawdevart = {
        name: 'RawDevart',
        url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
        homepage: 'https://rawdevart.com',
        language: ['Japanese'],
        category: 'manga',
        waitVar: 'rconfig',
        waitEle: '#chapter-list select',
        run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const chapter = document.querySelector('#chapter-list option:checked');
            const images = [...document.querySelectorAll('#img-container img')];
            return {
                title: W.rconfig.chapterTitle,
                series: W.rconfig.prefix,
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images.map((item) => $(item).attr('data-src') || $(item).attr('src')),
            };
        },
    };

    // == ReadComicsOnline =============================================================================
    var readcomicsonline = {
        name: 'ReadComicsOnline',
        url: /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/,
        homepage: 'https://readcomicsonline.ru/',
        language: ['English'],
        category: 'comic',
        run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const images = [...document.querySelectorAll('#all img')];
            return {
                title: W.title.replace(/ - Page \d+/, ''),
                series: document.querySelector('div.pager-cnt a')?.getAttribute('href'),
                pages: W.pages.length,
                prev: W.prev_chapter,
                next: W.next_chapter,
                listImages: images.map((img) => img.getAttribute('data-src')),
            };
        },
    };

    // == ReadManga.Today ==============================================================================
    var readmangatoday = {
        name: ['ReadManga Today', 'Funmanga', 'MangaDoom', 'MangaInn'],
        url: /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/,
        homepage: [
            'https://www.readmng.com/',
            'https://funmanga.com/',
            'https://mngdoom.com/',
            'https://www.mangainn.net/',
        ],
        language: ['English'],
        category: 'manga',
        run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            return {
                title: W.chapter_page_title,
                series: W.manga_url,
                pages: W.images.length,
                prev: W.prev_chapter_url,
                next: W.next_chapter_url,
                listImages: W.images.map((item) => item.url),
            };
        },
    };

    // == SenManga =====================================================================================
    var senmanga = {
        name: 'SenManga(Raw)',
        url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
        homepage: 'https://raw.senmanga.com/',
        language: ['Original'],
        category: 'manga',
        run() {
            const url = `/${window.location.pathname.split('/')[1]}/${window.location.pathname.split('/')[2]}`;
            const num = parseInt(document.querySelector('.page-list select option:last-child')?.getAttribute('value') || '0', 10);
            const chapter = [...document.querySelectorAll('.dropdown-chapter li')];
            const origin = chapter.findIndex((item) => item.querySelector('a')?.getAttribute('href') === window.location.href);
            return {
                title: $('.title').text().trim(),
                series: document.querySelector('.breadcrumb li:nth-child(2) a')?.getAttribute('href'),
                pages: num,
                prev: chapter
                    .at(origin + 1)
                    ?.querySelector('a')
                    ?.getAttribute('href'),
                next: chapter
                    .at(origin - 1)
                    ?.querySelector('a')
                    ?.getAttribute('href'),
                listPages: Array(num)
                    .fill(0)
                    .map((_, i) => `${url}/${i + 1}/`),
                img: '.picture',
            };
        },
    };

    // == TenManga =====================================================================================
    var tenmanga = {
        name: 'TenManga',
        url: /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,
        homepage: 'https://www.tenmanga.com/',
        language: ['English'],
        category: 'manga',
        waitVar: '_pageCtrl',
        run() {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const chapter = document.querySelector('.mangaread-pagenav select option:checked');
            // eslint-disable-next-line no-underscore-dangle
            const images = W._pageCtrl.options.all_imgs_url;
            return {
                title: document.querySelector('.title  h1')?.textContent?.trim(),
                series: document.querySelector('.title  a:nth-child(2)')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images,
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
            const images = [...document.querySelectorAll('.img-container img')];
            const pages = [
                ...document.querySelectorAll('div.container:nth-child(4) select#viewer-pages-select option'),
            ];
            const num = images.length > 1 ? images.length : pages.length;
            return {
                title: document.querySelector('title')?.textContent?.trim(),
                series: document.querySelector('a[title="Volver"]')?.getAttribute('href'),
                pages: num,
                prev: document.querySelector('.chapter-prev a')?.getAttribute('href'),
                next: document.querySelector('.chapter-next a')?.getAttribute('href'),
                listPages: images.length > 1
                    ? null
                    : Array(num)
                        .fill(0)
                        .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
                listImages: images.length > 1 ? images.map((item) => $(item).attr('data-src')) : null,
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
            const chapter = document.querySelector('#capitulo_trocar option:checked');
            const images = [...document.querySelectorAll('.img-manga')];
            return {
                title: document.querySelector('.titulo-leitura')?.textContent?.trim(),
                series: document.querySelector('.breadcrumbs a:nth-child(3)')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.previousElementSibling?.getAttribute('value'),
                next: chapter?.nextElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('src')),
            };
        },
    };

    // == WPManga ======================================================================================
    var wpmanga = {
        name: ['Manga33'],
        url: /https?:\/\/(www.)?(manga33).com\/manga\/.+/,
        homepage: ['https://manga33.com/'],
        language: ['English'],
        category: 'manga',
        run() {
            const images = [...document.querySelectorAll('.chapter-content img')];
            return {
                title: document.querySelector('title')?.textContent?.trim(),
                series: document.querySelector('.navbar-brand')?.getAttribute('href'),
                pages: images.length,
                prev: document.querySelector('a.prev')?.getAttribute('href'),
                next: document.querySelector('a.next')?.getAttribute('href'),
                listImages: images.map((img) => img.getAttribute('src')),
                before() {
                    if (window.location.pathname.match(/all.html$/))
                        return;
                    if (window.location.pathname.match(/\d+-\d+.html$/))
                        window.location.pathname = window.location.pathname.replace(/-\d+.html$/, '-all.html');
                },
            };
        },
    };

    /* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
    const sites = [
        asurasflamecans,
        batoto,
        comicastle,
        dysnatyscans,
        leitor,
        lhtranslation,
        mangadex,
        mangafox,
        mangafreak,
        mangahosted,
        mangahub,
        mangakakalot,
        mangapark,
        mangareader,
        mangasee,
        mangatown,
        ninemanga,
        pandamanga,
        rawdevart,
        readcomicsonline,
        readmangatoday,
        senmanga,
        tenmanga,
        tmofans,
        unionmangas,
        wpmanga,
        foolslide,
        madarawp, // Must be at the end because is a generic check
    ];

    /* eslint-disable camelcase */
    function logScript(...text) {
        // eslint-disable-next-line no-console
        console.log('MangaOnlineViewer: ', ...text);
        return text;
    }
    // Replacement function for GM_listValues allowing for debugging in console
    function getListGM() {
        return typeof GM_listValues !== 'undefined' ? GM_listValues() : [];
    }
    // Replacement function for GM_listValues allowing for debugging in console
    function removeValueGM(name) {
        return typeof GM_deleteValue !== 'undefined'
            ? GM_deleteValue(name)
            : logScript('Removing: ', name);
    }
    // Replacement function for GM_info allowing for debugging in console
    const getInfoGM = typeof GM_info !== 'undefined'
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
        if (typeof GM_getValue !== 'undefined') {
            // logScript('Getting: ', name, ' = ', defaultValue);
            return GM_getValue(name, defaultValue);
        }
        logScript('Fake Getting: ', name, ' = ', defaultValue);
        return defaultValue;
    }
    // Replacement function for GM_setValue allowing for debugging in console
    function setValueGM(name, value) {
        try {
            GM_setValue(name, value);
            // logScript('Setting: ', name, ' = ', value as any);
            return value.toString();
        }
        catch (e) {
            logScript('Fake Setting: ', name, ' = ', value);
            return String(value);
        }
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
        return getInfoGM.scriptHandler || 'Greasemonkey';
    }
    const isMobile = window.matchMedia('screen and (max-width: 768px)').matches;

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
    function isEmpty(value) {
        return (value === null || // check for null
            typeof value === 'undefined' ||
            value === undefined || // check for undefined
            (typeof value === 'string' && value === '') || // check for empty string
            (Array.isArray(value) && value.length === 0) || // check for empty array
            (typeof value === 'object' && Object.keys(value).length === 0));
    }
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
            isEmpty(value) ||
            (typeof value === 'object' && isEmptyObject(value)));
    }

    // language=CSS
    var cssStyles = `html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #fff;
  padding: 0;
}

a {
  color: #08c;
  text-decoration: none;
}

img {
  height: auto;
  vertical-align: middle;
  border: 0 none;
}

.icon-tabler {
  height: 1rem;
  width: 1rem;
  align-self: center;
  vertical-align: sub;
}

#nprogress .bar {
  background: #29d;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

#MangaOnlineViewer {
  padding-bottom: 40px;
  min-height: 760px;
  min-width: 360px;
}

#MangaOnlineViewer #Chapter {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-width: 225px;
}

#MangaOnlineViewer #Chapter.DoublePage {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#MangaOnlineViewer #Chapter.DoublePage .PageImg {
  min-width: unset;
}

#MangaOnlineViewer #Chapter.DoublePage .MangaPage.DoublePage {
  grid-column: span 2;
}

#MangaOnlineViewer #Chapter.WebComic .PageFunctions {
}

#MangaOnlineViewer #Chapter.WebComic .PageContent {
  margin-bottom: -6px;
  margin-top: -24px;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidLTR {
  direction: ltr;
}

#MangaOnlineViewer #Chapter.FluidRTL {
  direction: rtl;
}

#MangaOnlineViewer #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 405px;
  width: auto;
  z-index: 1000;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  transform: translateY(-100%);
  display: flex;
  flex-flow: column;
  gap: 5px;
  max-width: 300px;
}

#MangaOnlineViewer #ViewerControls.visible {
  transform: translateY(0);
}

#MangaOnlineViewer #ViewerControls .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

#MangaOnlineViewer #ViewerControls .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 40%;
}

#MangaOnlineViewer #ViewerControls .ControlLabelItem:not(.show) {
  display: none;
}

#MangaOnlineViewer #ViewerShortcuts {
  padding: 8px;
  position: fixed;
  top: 65px;
  left: 0;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  transform: translateX(-100%);
}

#MangaOnlineViewer #ViewerShortcuts.visible {
  transform: translateX(0);
}

#MangaOnlineViewer select {
  height: 20px;
  padding: 0;
  margin-bottom: 5px;
}

#MangaOnlineViewer .ControlButton {
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
}

#MangaOnlineViewer .ControlButton:hover {
  opacity: 0.8;
}

#MangaOnlineViewer #ImageOptions {
  left: 0;
  position: absolute;
  top: 0;
  width: 405px;
  z-index: 1000;
}

#MangaOnlineViewer #ImageOptions .panel {
  padding: 5px;
  position: inherit;
}

#MangaOnlineViewer #ImageOptions:hover {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions.settingsOpen {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions #menu {
  position: fixed;
  height: 64px;
  width: 400px;
  top: 0;
}

#MangaOnlineViewer #ImageOptions #Zoom {
  position: absolute;
  left: 18px;
  bottom: -65px;
}

#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#MangaOnlineViewer .PageContent {
  margin: 0 0 15px;
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
}

#MangaOnlineViewer .PageContent.hide {
  display: none;
}

#MangaOnlineViewer .PageContent .PageImg[src=""],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
  width: 500px;
  height: 750px;
  display: inline-block;
}

#MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {
  max-width: 100%;
}

#MangaOnlineViewer #gotoPage {
  width: 35px;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer #Header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: inherit;
  z-index: 900;
}

#MangaOnlineViewer #Header.scroll-hide {
  transform: translateY(-100%);
}

#MangaOnlineViewer #Header.scroll-show {
  transform: translateY(-1%);
}

#MangaOnlineViewer #Header.mouseOverMenu {
  position: static;
  transform: none;
}

#MangaOnlineViewer #Header.scroll-end,
#MangaOnlineViewer #Header.visible {
  transform: translateY(-1%);
  position: sticky;
}

#MangaOnlineViewer #MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

#MangaOnlineViewer #GlobalControls {
  flex-basis: 30%;
}

#MangaOnlineViewer #ChapterNavigation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
}

#MangaOnlineViewer .ChapterControl {
  display: flex;
  flex-wrap: nowrap;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton {
  display: inline-flex;
  margin: 3px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  padding: 5px 10px;
  gap: 0.5em;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton svg {
  flex-shrink: 0;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton[href="#"],
#MangaOnlineViewer .ChapterControl .NavigationControlButton[href=""] {
  visibility: hidden;
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
}

#MangaOnlineViewer #Counters {
}

#MangaOnlineViewer .PageFunctions {
  font-family: monospace;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 3px;
  position: relative;
}

#MangaOnlineViewer .PageFunctions > .PageIndex {
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 2px 10px;
}

#MangaOnlineViewer .PageFunctions > .ControlButton {
  height: 16px;
  width: 16px;
  padding: 0 5px;
  margin: 0;
  border-width: 0;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
  opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
  opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
  opacity: 0.9;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  visibility: hidden;
}

#MangaOnlineViewer #NavigationCounters {
  margin-top: 5px;
  width: 100%;
}

#MangaOnlineViewer #Navigation {
  bottom: -180px;
  height: 190px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
}

#MangaOnlineViewer #Navigation:hover {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation.disabled {
  display: none;
}

#MangaOnlineViewer #Navigation.visible {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation .Thumbnail {
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  position: relative;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
  display: block;
  opacity: 0.8;
  position: relative;
  top: -30px;
  width: 100%;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {
  align-content: center;
  cursor: pointer;
  display: inline-block;
  margin-bottom: -10px;
  margin-top: 10px;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}

#MangaOnlineViewer #Navigation .nav {
  transform: rotate(-90deg);
}

#MangaOnlineViewer #ImageOptions .menuOuterArrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid blue;
  display: inline-block;
  position: absolute;
  bottom: 0;
}

#MangaOnlineViewer #ImageOptions .menuInnerArrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid white;
  left: -10px;
  position: absolute;
  top: -5px;
  display: inline-block;
}

#MangaOnlineViewer #ImageOptions .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#MangaOnlineViewer #ImageOptions .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  /*background: rgba(131, 133, 136, 0.40);*/
}

#MangaOnlineViewer #blob {
  display: none;
}

/* Mobile styles*/
@media (max-width: 768px) {
  #MangaOnlineViewer #Header {
    flex-direction: column;
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    flex-basis: 100%;
  }

  #MangaOnlineViewer #GlobalControls {
    order: 2;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 3;
  }

  #MangaOnlineViewer #Navigation {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions {
    padding: 0;
  }

  #MangaOnlineViewer .PageFunctions a:not(.Bookmark) {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions a.Bookmark {
    opacity: 1;
  }

  #MangaOnlineViewer .PageFunctions span {
    right: 0;
    position: inherit;
    text-align: center;
  }

  #MangaOnlineViewer .PageContent {
    margin: 0;
    width: 100%;
  }

  #MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer #ImageOptions .ControlButton:not(#settings) {
    display: none;
  }

  #MangaOnlineViewer #ViewerControls {
    padding: 8px;
    position: fixed;
    top: 0;
    left: 45px;
    width: auto;
    transition: transform 0.3s ease-in, background-color 0.3s linear;
    display: none;
  }

  #MangaOnlineViewer #ViewerControls.visible {
    display: block;
  }

  #MangaOnlineViewer #ViewerControls .DefaultZoom,
  #MangaOnlineViewer #ViewerControls .viewMode,
  #MangaOnlineViewer #ViewerControls .fitIfOversize,
  #MangaOnlineViewer #ViewerControls .showThumbnails,
  #MangaOnlineViewer #ViewerControls .lazyLoadImages,
  #MangaOnlineViewer #ViewerControls .downloadZip {
    display: none;
  }

  #MangaOnlineViewer #ViewerShortcuts {
    display: none;
  }

  #MangaOnlineViewer #ImageOptions #menu {
    display: none;
  }

  #MangaOnlineViewer #ImageOptions #Zoom {
    display: none;
  }

  #MangaOnlineViewer .ViewerTitle {
    height: auto;
    padding: 0;
  }

  #MangaOnlineViewer .ChapterControl {
    display: block;
    text-align: center;
  }

  #MangaOnlineViewer .ChapterControl .download {
    display: none;
  }

  #MangaOnlineViewer #Counters {
    display: none;
  }

  #MangaOnlineViewer #Chapter {
  }
}

`;

    const externalScripts = [
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" integrity="sha512-kfs3Dt9u9YcOiIt4rNcPUzdyNNO9sVGQPiZsub7ywg6lRW5KuK1m145ImrFHe3LMWXHndoKo2YRXWy8rnOcSKg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.0/jszip.min.js" integrity="sha512-xcHCGC5tQ0SHlRX8Anbz6oy/OullASJkEhb4gjkneVpGE3/QGYejf14CUO5n5q5paiHfRFTa9HKgByxzidw2Bw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.19/sweetalert2.min.js" integrity="sha512-8EbzTdONoihxrKJqQUk1W6Z++PXPHexYlmSfizYg7eUqz8NgScujWLqqSdni6SRxx8wS4Z9CQu0eakmPLtq0HA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    ];
    externalScripts.map((script) => {
        const find = script.match(/src="(.+?)"/);
        return find ? find[1] : '';
    });
    const externalCSS = [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />',
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css" integrity="sha256-a/1ebfXeoX0xLUcQCJLQsm6APQNBwrm03/XFcvW7xAI=" crossorigin="anonymous">',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.19/sweetalert2.css" integrity="sha512-p06JAs/zQhPp/dk821RoSDTtxZ71yaznVju7IHe85CPn9gKpQVzvOXwTkfqCyWRdwo+e6DOkEKOWPmn8VE9Ekg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
    ];
    externalCSS.map((script) => {
        const find = script.match(/href="(.+?)"/);
        return find ? find[1] : '';
    });

    // Configuration
    const settings$1 = {
        theme: getValueGM('Theme', 'Dark'),
        customTheme: getValueGM('CustomTheme', '#263e3a'),
        customThemeBody: getValueGM('CustomThemeBody', '#000000'),
        customThemeText: getValueGM('CustomThemeText', '#ffffff'),
        customThemeLines: getValueGM('CustomThemeLines', '#666666'),
        customThemePanel: getValueGM('CustomThemePanel', '#333333'),
        customThemeButton: getValueGM('CustomThemeButton', '#282828'),
        fitWidthIfOversize: getValueGM('FitWidthIfOversize', true),
        showThumbnails: getValueGM('ShowThumbnails', true),
        downloadZip: getValueGM('DownloadZip', false),
        throttlePageLoad: getValueGM('Timer', 1000),
        zoom: getValueGM('Zoom', 100),
        zoomStep: getValueGM('ZoomStep', 25),
        minZoom: getValueGM('MinZoom', 50),
        loadMode: getValueGM('LoadMode', 'wait'),
        viewMode: getValueGM('ViewMode', ''),
        bookmarks: JSON.parse(getValueGM('Bookmarks', '[]')),
        lazyLoadImages: getValueGM('LazyLoadImages', false),
        lazyStart: getValueGM('LazyStart', 50),
        hidePageControls: getValueGM('HidePageControls', false),
        mouseOverMenu: getValueGM('MouseOverMenu', false),
    };
    // Force Settings for mobile
    if (isMobile) {
        settings$1.lazyLoadImages = true;
        settings$1.lazyStart = 5;
        settings$1.fitWidthIfOversize = true;
        settings$1.showThumbnails = false;
        settings$1.viewMode = '';
    }
    // Clear old Bookmarks
    const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
    settings$1.bookmarks = settings$1.bookmarks.filter((el) => Date.now() - el.date < bookmarkTimeLimit);
    setValueGM('Bookmarks', JSON.stringify(settings$1.bookmarks));
    // Icons in Base64 format
    // Source: http://www.iconarchive.com/show/farm-fresh-icons-by-fatcow.html
    // Source: http://www.iconarchive.com/show/oxygen-icons-by-oxygen-icons.org.7.html
    // Source: http://www.iconarchive.com/show/ivista-2-icons-by-gakuseisean.html
    const icon = {
        enlarge: 'data:image/png;base64,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',
        reduce: 'data:image/png;base64,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%3D%3D',
        restore: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABVZJREFUeNrUl11Mk1ccxn9vS5HWtrBGEJAILNsczq8C2xxDJwkm+7hYDBdkZheyGGgyy42b2+LNErxZvNmGJlUztywzmmzRZWFxtiHgJgPLh4ob2xQtOAuKUD5s18+3/10IqAMVULbsSZ6c9z0X7/m9//OcnHMUEeG/lPK/ALDZbAXjj90Oh2N03gFsNlsiUAlsBl7IysoCYHBwkFAodAX4BtjtcDiuPXIAm832HHBo3bp1T+Tn55OdnU0gECAWi2E0GvH5fLS1teFyuYLADofDseeRAdhstteArzdv3qxfsmQJ9fX19PT0EAyFMZtNJGi1JCcns3HjRgCam5txu917HA6H/aEBqqqqRFEUKisrGRoa4tixY7z+5lZ+Ov4tiTodhYUFZGZmYlmURr3rBBaLhbVr11JXV4fb7Z7RYPv27VOmdIoIIkJVVZW4XC5paGiQA59/KdGYKtMpHhcJRWJy7Lvv5fDhw9LZ2SnV1dUyPDws91NlZaVMjHWnE8ZL/0JOTg5r1qyhpqaGLdt2UNfqo2RlCka9lusjUTou3QQgGhMEiFsK+fH4h+Tl5VFUVMTHn31LzuqXp/3zLaXp96yKZrwtt1qttLS0ULS+hN6hBShAyx9j/OxpoKV/PxHDESKGI8QFENAoGl7dVI7b7WbFihUMe3+bUwYmAAqysrK4cOECTzy1jImJ0ps7GAz/xkh4gJHwIEPB67R5tzMR22DS03g8HsxmM1qiRMOBOQOkm0wmRkZGeMxiAcCy6CxD4d/xBfuIhhMIBzVEQoLRZKK97x0ESEzUMjo6ioiwcOFCoiH/rAESxltVVVW0Wi2xWAzQMl5piJlRJcyoegM1HkJEh0bR3lpCKGi1WuLxOKqqomi0cwa44vP5lqWnp3Otz4vRuByAQHQMEYWAOoxG0RAJJqIB4nEVs1HPgriPtLQ0RAS/38/itHS0usQ5TUFzb28vBQUFtJ5uxmRYwFDkAqpEiEsUFCHsj4HAzbGbCILJoOPSL03k5eUxMDCAwbQIy2Mmko0LpngmAF84nU5yc3OJhUP8+auTJ01voQD+uA8FUICAPwjAG8/vZ+DSz1zs6mTVqlWcO3eOZ/LXkqyPT+sHAjgcDg+A0+mkvLyctuZTnG2qo2jx++jOJ2C66GdRf4iMQQtbivfT0fwDjSe+Y9OmTXR1ddF9uZfi/CcJeNvR65jimWQAEaG7uxudTse2bduor6/nqwO7WbG6BIPJTEyFkZsBDn/+CanmJLZu3UpfXx9Op5O9e/fi8Xhu7Zg97Sxd9uysQwiA3W5nZ812gsEgpaWlrBoYoKuri6vXrwKQlJTEyyUvkpGRQXt7O/UNLt579wM8Hg+5ubl4vV6qq6spKyvjesr5ye9++vaRmQGkpKSQXOqj/byLppomXlr/EtnZ2eh0OjQaDbFYjP7+fk6ePEnfX91kZT7OoUOH2LBhA16vl+LiYmpra7Hb7ZSVlfHXc62zqwCAkiAstI6hXxbA3fM9jR0KqBoQBRRBv1hIzAmRnBohiA/96UIaGxs5evQodrudioqK2xA8GCLhnuk0qBiW+zEsh/6eG5P9USAjNXXyPfh8G8ffuwJAbW0twBQINs4B4E5l5KTeBdHfc4OMnNsQr3y09L4Q99XEvjy+Xz+UrFbrpA8ePCgiIqdOnRKr1Sq7du2a9jxw14noUZxyW1tb71pVFRUVNDU1TQZz586dyrQVeJSeTSXmBWA2EPMGcC8IINlqtcqUDMyX8vPzJwc4c+ZMGnAcSAQKRSSime+7X0dHx52hawSWWK3WlSISmbcQ/tOAHrgMdN5Z/n9lCh6kvwcA86Zk7edk5TEAAAAASUVORK5CYII%3D',
        fitWidth: 'data:image/png;base64,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',
        fitHeight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEV0lEQVR42sWWXWgcVRTHz8zsZj8jWkGw4oNWgghNH6wPLYpJ1hYfFKko+GbriqEiQq0+9MO2vohCqoIvfRAlgi/6oqKI1CbRWm01rUyirUuaZJPdlSSQTfdjZna+djxnNhNnd+98VFEvXObeGeb+f/d/z733cPA/F87dSafTqVgstgnrvyKmaRqYplleW1uTmABYtjZUdUpTVfzCtT52Phlt1kDub06JCALE4/F+hJj2AuivVqtiXZLwX45ZW+O22jMrAH23tEN2Dey8sywgZ1Op1DYEmPIGqNVESZJtAZ5fF3Zm7YJYqnLw1jcWjDzBt4l3CbtKT08PpJJJf4BavS7Ksuw7c+p99BPASQT45ajAXCLW4NFoFJJBAHUCUJRu+90uYFMsAbx/zoLXHhVgU9ojPhgAiUQiAECSRMUDwHbC1X/njAUHHuLZgdrRtygIIxFIxOP+ABIBNBqhAE6dtWD/g8LGIJw7CBkxILR2QQCALIsNH4ANCOyPnrdg707hLzgfcQcAd4I/gEwAeA74ATgQH09a8NR9fJuolzgVnudDACiKqIYAoPr5lAWPbeO7hL0gCAC3oj+AQgB4ZAaJUz19xYLd9/CBwtcH0GiIGssBxrlwbg7g/i1cl7AXCL0PBMAAtB3gfcQnJiY2fpifn4dsNhvKgdAAmq63jmIPgPHxcRgcHLTbY2NjkMlkQjuAh1EAgKqKOsUArhcLggoBDAwM2GtK7aGhIU/hzneBACoBrDvgVBJyBqNKtufzeSisWXD7TVxoB8IDGIan/W6RsVwTMncLoYSvC8BAAFsQZ867hDufX06b8Eh/hCnebDYxBbDsNj2dwysedBDhDrABeI/Zu5+fTBrw5PZImzgJU6UxUGgDhJaREyJw4w29/gDaOoDjQNsd0AHw4Y86PL2zp02c4odyP7pPFKVhty2rCQLehOVqfXXH9nt3mKYxEwjAr+8CzmcJTn2rw/6BnjZxusorlSpg4gm1Wg3oXomieCyRkLPP7NtbLBQ+xZxD9wUg64Lsp/L2aQ1e2h2zLSZoyqTK5TIsFgo2QCqZgs2bb8VbkDeHh4efv3z5ygerq6u6W/BvA+gmwMjXKrzycBx4MG3Lr12rQOmPEhQQ4PE9exBKp7Z18OWDRy5OXhopFot6h54/QOf+d0O8950G757R4PtDaUhEDMBEBpaWlmFhcRFMdGPXrowNcvzE8TcunL9w7OrV2S5xXwAnBrwAzs6Y8PoXKnx1IGkHGqbzKFiE/MICbLnzDujtTVso/ubkzxeP5XI5pjgbQNdFsyMIWetv4BKM/qBD9oEoUP5A9i+g+NLyMvT13WUePnzo6K/Tv52cnZ31FP9HAPQ0mphmcZYNUKlUbPslpaGcePXIi3Nz86OlUslXnAWwlQ4J2lJeGU7niUc7QNUNqNUlmP49V37h2X3PraysfIa7wQgS7wLAWd+M4reF+ZE5GMfJiWQyL0tSKHGWA/95+RN8q4s/S0hajQAAAABJRU5ErkJggg==',
        reload: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4XrXQa0xTdxgG8Pd/es6x2JbL2iINtCQdAkvAuOAwBMKMfiBZJGWMYQIx68plwwEbUfACeIlGyJbQVYMxsjGGZkHDIFZHIBurboOQESgLldaISMu6cmprSi/0cnp6TL8IiSb9tN+H5+OTJw/8r/rHVgCgAr7qmZKoLown7y3rgiMnf4aY2q/roeP6Aio/9RtZc/F33kedMw0lx3WnDzcP88pbhmE7DLb5dcYKc4+cmG2DfXva5D5qecFe0JuD3Wa7T+XYxOp8RNIhQZIfK+8Yeb1gdMEFhDgR1xoDBxxhUuOkUY+XxVq9GPnFBmLzvDhK93B31lu58sxnkAOl6gmIwqNx1eCDD3P2waUHf+Q7gsEOGoWkDArq6YjfhyfFZ0X4vEyaA5gHMfsZv/f9t+z9T6hwLvNqgWnZAicmx/mrNluR3W7+208ZVLRtXpnEed6YmCn6E0Q7vGGOf3bTtXbNaTZO25aMEceKCV4p674Dn3yvEyi6bhfkHW0XjrIsFKon4NPhxYT83qmz0vPa07tqr7ybuL8qLq1uEF4jEUuh9KQaiqubUXF1E6hnLaCZ+5dT1TsWv+ezb8QJB1VkG8tCTDcWKfjBQOHKSUpeol1TFfb99fGe1qtEkfoefD4wB19PPI1v/k4nrzg3QNRotFsnqkaWgAcvsIePPRlOGi9x0JjCFwplRdxhdXZKKpEpyyVJMk5KebwKT4ixUVbTEAMZsHWi1Q5GysE1WV21z9b8lxxr3kN+q18IG/wD/3l3n11YYTSrtsCPLqe7aNNpX/yyryvkWP4HolA0pGf6gSWmMCxYUYloUTfQWDoKM4AAsRiLIlwcC6UIgrNCZLnsNmoncZ4ofP+mZqsgStY0CCzji8ciu08hmtfIBNZXI3TQirGEm2AC8wJ2/Zc485AxCHxGP6+DN5LV3gJZ3VB2uuruT2mV3yoTi6tTxIX1wuR3PiDeazMACTFIlC2QWnOOk1rVWSApOyaXKBoglpfB+En628ogAgAAAABJRU5ErkJggg%3D%3D',
        zoomIn: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZXQu2tTYRjH8e9535OTmDQxaZuYU6NNi9a7CaiQSczmWBGKm0WHLkL9DxTETSkF0YqD1kEUvCJI6yBxUiTVqPUKLa1JJfZiehLTkzQ3h1htQBB/08sLz+e5KKzKmXMXgk1O16lyuRJ0N7cemJv9lpifn0/ksrnhK4NnY/wlcuUxcPn6gKPJeVNv2xhuD24OtrT4aXK1+NfYHeHFbLa3o2uXe/zls9G/AucvXRtwujwnd+/ey7auLvR1PrwtHvR1Xta3BViqOjCM75HOLduD7149f9AAXBy+Ha5Uqtf27Y3Q2R7AqqlIqSAVBVUKbFYNn7eV5HdBcWku3NG14+mHxIupFUDMpJL9fn0D7YH1lCoK+QKUynD07CRCAaFAs8vKntBOmv2bsdrs/asnEJUq4TZdR5UKDiustYMUUDRzmMtQAwTgb3bh14NYNK17NaDmzULYscaGFPXCI6cnKZo5CmaOQ/0jFMwsDy/1oKoKrR4XFovWcEQ19yM/ZWSNoCo3IBW4faYTgP3HRnhy5SDVGmTy9VVUKbBqlgZAmEtLicmpaaSoISWovyYpmFmEAEX582eaBppFJhqAUml5MP7qNV/Ts6gSpKx3G7vVg1CgWoVSBbI/8mTmviAUBhuAu8MXYkZm4f6Ne4+YXcjULy9AAWo1MJdhYdHg8cgdPr2Nk/oYb5hAAmzaFho1DGPr64+TW/PFMlbNSiZXYN4wmfgyw/j4Sz6/f4PHViWdTh+JRqOj8Xg8DfVGv9Nz/GSv2+3pd3s84SanE01KqrVKorxcHNzZ4SOdTl+NxWIUi8VFXdejQ0NDiQbgX+nr6+sNhUK/EbvdHpX/LvuTsbGxRCAQmI5EIt2pVMqWTCYP/xewgvh8vmmv19s9MTFx4ifGBwN4Ure0EAAAAABJRU5ErkJggg%3D%3D',
        zoomOut: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jZWQTUsbURiFz9w7mYmOSfNhYkZjjVJTba0J1EKW8R8IBXEpdOGmoP+gBemuRQJSCV1Uuyhd2C8KhXSVrlqK0bGkrS4MamJNNRonMZmJSSZdxFgHBOmBy3u5cJ733MPgnKYfz3paTOYHlUrVY7G1Bvf3/kiZTEbK5/ILz0KPorhAtHGZCb+YEVpMr8T2q/4uT6/HbnehxWx3NTUJ/qNcbrzbe8sSX/4SuRDwZG5+xmS2Tg0ODqHf64XY5oTDboXY5kBHuxtFTYAsHwZ6rt/w/Fj5+l4HeLqw6K9Wtfk7QwH0dLnBcywoZUAZBiwlMPIcnI5WJA8JSsV9f7f35udf0rfNBoDspJKTLrETXe4OlKsMCipQrgAMA5DTYzPzuO0bgM3VC97YPHk+Aalq8LeLIljKQOCBK80AJUChBCgnQA0AAeCymeESPTBw3Mh5AFtQVL/QZAQldePYwwRKSh6qkkdJOYaq5PBhbhQsy6DVaobBwOlKZPPHhU05J3tY2gnKAIvTPQAArQZoWn1mC/WvsJSA5ww6AFGKRSmxuQVKaqAUYE+TUAYgpN5F401RZHAGKukA5fJJaGllFb/Te2ApQOlpeaQ+NQ0oV4HccQHZ/W0QBiEd4M3CbFTOHrx7+fYj9g6yZ2YGQK1WL/LgSManyGusx5eQWlvSJaAAcK3fF5FluW91LdFXKFXAczyyeRUZWUFiewfx+DLWf36Hjdewu7s7FgwGI7FYLA3UF51p9N7UuMVinbRYrX6TyQQDpdBqValyUgoNdDuRTqefR6NRqKp6JIricDgclnSAyzQxMTHu8/nOIIIgDNPLbf8Ui8Ukt9u9FQgERlKplDGZTN79L0AD4nQ6txwOx8jGxsb9vyYg/nmG24G2AAAAAElFTkSuQmCC',
        zoomRestore: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVR4Xp2SW0iTYRjH/5/fYdtnTc0jrhPW0Dwt7HC3mZBeKF1pbVoO26V3RkK3URcqiLBADRxEXZR2o9LuDAaKeSHOw1ZuRdBhTs3cNL9tbt/29m6gqASBP/jB8168fx6e50FHR0eb1Wp9PjAwMJS0v79/aHBw0NbV1fWiurr6Av5Hc3PzbXKAQCBAnE4nsdvtpLe3N2Qyme7W19fnVVVV8fgXra2t9wglFouR5eVl4nA4SDAYJHvE4/HE1OSkq6WlxczzfAaOkMayrAKUiYn3cLncMBgM8K1vYnbxIz55v2B6doEprdSV9XR399TV1d0CIBwKoChBYdk01NbehNv7FcHtPziVnQ3CKxCJxjDhmMYJdVa+xdL2QBTFs4cCqFw4HIbX+xlqtRo//GvIzc9HFDx2EgK2IMLj/42ZuXkY9IZiGlB8NECIRqNITxeRhBMU8EsEHzeicK2F8TPEYEVi8GP1F3Jy80SO43IAMHsBXLImhCCwGQAt8G1lHf7vEviTWal3PCFDIXA4f7oQ66v+CB327qEOGAYQBAEZGWr4fD6Ua89BlgKAHIHA0/DwDs5nqXCl4hLG39lXJGnHA4DsdwBCwPMcWI7H6OgYzGYz0pUiphY+YXMjhJIzBbhxVY/ZmQ/o6+uTI5HdNBzEct/SGYmEydLiIrHZbOSZ1ZqqSVwmSf5sBcn42Bi5dv06KSoqInTtSwAq9odIQCDLMra2t6DRFILlWLwZHsaDh53JM8fjJ0/hnJ+HrrICoVAoodfrywG8pl7e2wKbHIRWq4VOp0NDQwNMRiOampqojTAa76Rsb2+HJElzHo8HNTU1ZSqV6hWAEoZenkmrvfhIqVTy2IMACUJSBcMwKelneWTk7UvaRalGo7FkZmbC7XY34hiUUa1UG7Ucx0BBzaMWUMW/uh49keTZSXYAAAAASUVORK5CYII%3D',
        zoomWidth: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4XqWSX0hTbRjAn/ecdSbbNJdFK/p3tTAvXI4IwrwJ6vtEqK819abIG1GCYRcFs+FNXdS+z82tP1ARpX7VVUVoYgWl07oItH8KUcHUxf7Y5v667exse3rfEUsxr/rBw3k453l/D895XmI2m3dJkqQGilwuj25YX2FGgFpCuApEhGw2G+QITCdT6QZRFJEQAkvhKisrr1RVVY3Q53OFQjGcTqebjxmObjMYDMqmxkal8djR7YhYX6pSuZhwBQ6HYw4RpcHBAan7v3/ziWQK/7Z7kJFIxPGv7jkMR6LodPRgj912x2KxQFdXVzHAbrfPIqW/rw8XQiFsuu7Djvte9M8H0fPNi6f/n8XDlz0YDC1gZ6f5lc1mY2eKIYOf8DyB9l4vfIqoYMaPYPiaBkYuD5AUJWi9HYfdcqG0rKwMlv6HoiBPC6+d2ARtdxOgKefhwpG1wCY+PxgDd0CCWy2bwWoVI5FIlDbjVgrWCAJEowtgN5bDuScZUClKCp2CyTjcbNkA8ej3rChmwjzJQy6HwCA0iiqtVgsvR8Ygk4rBxQYOovFFiC2mwGlUQSIWgkePB5J0zVU8yZUCEuConOeWCHQ6Hej1ehh1jUE4HCl0RzqX1+eD4eGnyPOykuPG+i0YfO+XcXgij2T5CIgI1dXVLIGhoaHiOyZSq9Ugzb/1ZKWdOw7otspdHyZu5Mr1OSq5y1Yxg4i5TCaDLBhut3tZeDwebG0/ZbW21Uw6THvj7+6dwauW5rSz2/qPDCk5Cr2yhXFoChqN5tdV5TjgeR54QhSX+idrLCf3BJ65RsnB/bXKkenJXiZghwrxG4o75whCKAHgmvi8sU6v9Y9PffGVKDUVMtpBTovWwOoUJIIglLD8ozsND1+/0Tg79o0LXH5AFggEHphMJgUASLAKAmVqauoFyxfFPLQdWgc1dYbaOuNZIGyEP+EHsrF5Hxph5xoAAAAASUVORK5CYII%3D',
        hide: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrUk8FKAlEUhu9oqRQ2JCG0UBgNWijWQkFhiAqaXERLceE21+16A1+gRQshCFy5MGiTCROBguEqzGkVI0kgumihOKQw3f4zOL2Aqw58MHPv+f9zzr0zAuecLRIOtmAsbCAgrIf5KGtgHyggBHzzvC+ggxp4AiNbZxsIMDh1u91niqJs5XI5v6Zpq41Gw0WbsizPIpHIpFQqDWu12vt0Oi1Cd0d1aQQPOE8kEhf1el2uVCrbpmmuBwIB12RiMAIiF63RHuVQLmksrdPpTKPq42AwmBqGwQlVVTlFsXjNZfmAK8oJR1fc3qdc0pB2CS7ZZDLpQ/uu2WxmzVUoFFDZZJeXV9Z7OBxln59vzN6nXNKgUJYMblqt1vpoNNr2IChBkiSmqk2WSh1ZAo/HzZaXpT+DbwQ0H6R1OhyOfrfb/Wk2m2Y8Ht8QRdGLeZmmvbJQaIeJog/VNXZ4uGcZ67rez+fz9ziLW7oVAXPYV5FEA8fpdDqayWSivV5vs91ue6liLBYbB4PBfrlc7lSr1Q4aeMDyM52TbWB/FysgAnaBH3jn62MwBC9AA4b97Qj//19Y2OBXgAEA3HnRUkre/J0AAAAASUVORK5CYII%3D',
        settings: 'data:image/png;base64,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%3D',
        menu: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqUlEQVR4XqWTPWtUQRhGz/vO7HWDYNJaWyz5FSJEgoWlYCGInaClCGpI4geC1mJjIWshqGn9CGwQf4TmJo0/wRRK1Jt7H+eOO8VCsIgHHjjD8MDMy4ydfLD57cfvdqFphZjFAB3mBgM3jldhjxOr73RU5lM3Np0A+Fp/BjcMw62PeL7jXBm1AMlDdil5bayeX6TvRkRmvBsJbikD3CPQUIUDXuwGAConuwTBBYCAyJRLyyOCQYxw7ZHx5KZ4tbnDhaURABuTbS4uLSLBm+QFB8ty/bExDHD1ofH0hqAFU0voyHF1ZFcKohDL7Me3xeVUHt8STQvRyFcaOJni6j0YGUEElaPwckVIEAAPUAVjOCBTHCU3oxCLvp7UuDnBI+4BOGAYnY2tGoBjUxeiKi2AuTtv1fNrmi5l+T5qJT2b1PoppfT+Jft+9m319N0yRM7dNSrg7D3jw4oAMHU45Fin7AHww4a4tSbOrBsf10UHWHmyZDC37ALC7AxUPJcBvGwimHUsl6As/usv9N0413z/NL/2/nTTdnSigP3jO5oZg2D0XQNOAQscjb0/9SM6Il0maJIAAAAASUVORK5CYII%3D',
        webComic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVR42rWXaW4aQRCFayDs4IDZ7Bi83CGHyPLDMDiRZYRygRwmV4hQkCWbYbO5RDhBZMkLJGGzwezrkOo2xIEwhA7tJz0hesT019XV1YUA09KeSFL3wO+Hq+sbEASBehWNRiPq3Z1tOI3F4J0o6nC4N3k++3YbAtwRgGwuByqVaqXJJ5JlGbwezwRgHYcqSgCuEylaOPCL8P1HHgFWW/0jwAi2XmwggIQAATcOFZUBogggilAoFlcO/0RkC9wuF5xKCBBYEqBUvuUK4HTY2QAq1SqXySeyWa1sALVanSvA2pqFDaDRbHIFMJtMbADtdpsrgMFgYAPodvv4dcRpegF0Os2SAJJUIIWIFA9MX07zC7SojQvRYoBoPF4Q9/c5rXxaUiIBAZ9vIYDzczicNpvNL2Wyep4RQDcajcyHUOgNjpSUANbQ22gHWs05AEN0GX2DrikBPEMb0bo5z1YVCWcX3UIPlADUyVTqU38w+Eiv0f+aQ6AvJUkn+nxTV+88zQKYo7FYHX+48nIH/T7EUyly7BZCzAI48BiWyDG8vLqmybPsPtBoYdT2dncgHIlA6OgIer0eJM7O4P0CCMU6kM3mHjoiBgCybV6vB74cH8PbV6/Ban2OBa0LyfNzRQjlhuRnnh4dFpGju7W5AREECJD7pN4Au32dRiKJkZi3HYqlOF9gb0gIwKbbRSMQPDyELk7cbrVpJEhOpNLpvxJTuSEplZkBaOPhdMDXTAa+XVzQl5OtkYdDCAWDgFUWcHv/0ROOAW4rd7B8BjwCGPQGMBoNc58z3YbV+3umyf+EmCfmjqiOCcRFD7UJLBYzG0Cz1eIDMJbJaGQD6HQ6XAH0ej0bQL/f43kbg0ajZQMYDmXFhGIHEECtVrEBEPEEIFoGwIbeG38+hUgBuoQFhUiLNqE1TwRAWm3yh+N3Kf4FvfygMCu2Xp8AAAAASUVORK5CYII%3D',
        bookmark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4T5WTW0iTARiGnzl/TadLnUGpebgRDU2zg2YQmBdBJHYwNUHyhGIFURdaCJnQhUpUF2EoHqE8VZB4E0QlhaampmZZVprzUEpz859u0/3OGFGUaeB3/b4PH+/7fTL+M4dDNyTJgaZeU+1aMtl//LInt1O7sSwQfaZ2J7C8mnZNgL9K2P2m/3EHpimC9ySED2l4tS5AUXZUaU5JbSbGYYqzU8pyaz5mrQegGm0tG/LeFe3G/GfULeUzPsca/QHNSojsYLBzrI+fn4e9naBUubm6OCkULv6+m7bFpJzez+IszI+AtovmurvPh4ZN7+YMyzqNiG5BkomjWmlSlhDpXlRRfj1HEZgMGAAjLImgVYNhDPSfYLYXDG9BFEG0AZmCeZ2Z9OpvxdYQZYEeQlrlzQtFEXEZKvR6MEzBwjSIg6BpA50VYAKjAwjutH+QNGnV47mDk0uVv1twhn038qJvpWYlh9qYjTDT+dNsGAWTGRYdsci9qHph6j1fOXJWL9FqzWNljZ51lyOaE4967kDdAmY9LFpgwR4UPtR3Ob0+WdwZA0z8CvOfO3h61as3KnQmBL0JJDmY7WHRAWxdeDau7DtwpTv0zyb+Amx1JWjgmkuPUjAK4ACuASDZwaQazEuIdq7moLz+sDEtA6tucDxMyLx/TlWK3JavRjfLpdrpmmXkFMZ7nNoi6GyspriSiawHPYayVQHlSRsb0w+5n2h4aXx/sWGq4Mv3pXqr0NddnliYsDk/Ya9DQMUjzb2MO9r41QDKh5nKjqY+qa2qw1AAqFdcnXdquGN+bIgQeaRsNhwQV7bg5GzLdr1EO2BZ40ttnG2J0Ev0A3NWzQ/Exfbo5qJ4cQAAAABJRU5ErkJggg==',
        pictureRight: 'data:image/png;base64,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',
        pictureDown: 'data:image/png;base64,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',
        pictureLeft: 'data:image/png;base64,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',
        controls: 'data:image/png;base64,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',
    };

    // Creates the style element
    function createStyleElement(id, content) {
        const style = document.createElement('style');
        style.id = id;
        style.appendChild(document.createTextNode(content));
        return style;
    }
    // Appends CSS content to the head of the site
    function appendStyleSheet(id, content) {
        if (!document.querySelector(`#${id}`)) {
            const head = document.head || document.querySelector('head');
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

    const scheme = new ColorScheme().scheme('mono').variation('default');
    function generateThemeCSS(theme) {
        // language=CSS
        return `
  .${theme[0]} .ControlLabel, .${theme[0]} .ViewerTitle, .${theme[0]}, .PageFunctions a.visible, .${theme[0]} a, .${theme[0]} a:link, .${theme[0]} a:visited, .${theme[0]} a:active, .${theme[0]} a:focus, .${theme[0]} button{ text-decoration:none; color: ${theme[2]};}
  .${theme[0]} {background-repeat: repeat;background-position: 0 0;background-image: none;background-color: ${theme[1]};background-attachment: scroll;}
  /*.${theme[0]} #ImageOptions #menu .menuOuterArrow {border-left-width: 10px;border-left-style: solid;border-left-color: ${theme[4]};}*/
  /*.${theme[0]} #ImageOptions #menu .menuInnerArrow {border-left-width: 5px;border-left-style: solid;border-left-color: ${theme[1]};}*/
  .${theme[0]} .PageFunctions { border: 1px solid ${theme[3]}; border-bottom: medium none; border-left: medium none; border-right: medium none;}
  /*.${theme[0]} #Chapter { border-bottom: 1px solid ${theme[3]};}*/
  .${theme[0]} .PageFunctions > span, .${theme[0]} .Thumbnail span {background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .panel {background: none repeat scroll 0 0 ${theme[4]}; /*border: thin solid ${theme[3]};*/}
  .${theme[0]} /*.PageContent, .${theme[0]}*/ .Thumbnail img { outline: 2px solid ${theme[3]}; background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .ChapterControl .NavigationControlButton { /*border: 1px solid ${theme[3]};*/ background-color: ${theme[5]};}
  .${theme[0]} #ImageOptions .hamburger-lines .line { background-color: ${theme[3]};}
  `;
    }
    // Add custom Themes to the page
    function addTheme(theme) {
        return `<style type='text/css' id='${theme[0]}'>${generateThemeCSS(theme)}</style>`;
    }
    function swapTheme(theme) {
        replaceStyleSheet(theme[0], generateThemeCSS(theme));
    }
    function addCustomTheme(color) {
        const bg = scheme.from_hex(color.replace('#', '')).colors();
        swapTheme(['Custom_Dark', '#000000', `#${bg[2]}`, `#${bg[3]}`, `#${bg[0]}`, `#${bg[1]}`]);
        swapTheme(['Custom_Light', '#eeeeec', `#${bg[3]}`, `#${bg[2]}`, `#${bg[0]}`, `#${bg[1]}`]);
    }
    function addFullCustomTheme(body, text, lines, panel, buttons) {
        swapTheme(['Full_Custom', body, text, lines, panel, buttons]);
    }
    function loadThemes() {
        const bg = scheme.from_hex(settings$1.customTheme.replace('#', '')).colors();
        return [
            //   1-body       2-text       3-lines     4-imageOptions     5-buttons
            ['Dark', '#000000', '#ffffff', '#666666', '#333333', '#282828'],
            ['Grey', '#1A202C', '#d6d8e3', '#666666', '#535353', '#535353'],
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
                settings$1.customThemeBody,
                settings$1.customThemeText,
                settings$1.customThemeLines,
                settings$1.customThemePanel,
                settings$1.customThemeButton,
            ],
        ];
    }
    const themes = loadThemes();
    const themesSelector = themes.map((theme) => `<option value='${theme[0]}' ${settings$1.theme === theme[0] ? 'selected' : ''}>${theme[0].replace('_', ' ')}</option>`);
    const themesCSS = themes.map(addTheme).join('');

    // Inject CSS for this script
    const readerCSS = `<style id='Reader' type='text/css'>
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
    function head(manga) {
        return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
  ${externalScripts.join('\n')}
  ${externalCSS.join('\n')}
  ${readerCSS}
  ${themesCSS}
  <style id='MinZoom' type='text/css'>
    #MangaOnlineViewer .PageContent .PageImg {min-width: ${settings$1.minZoom}vw;}
  </style>
</head>
`;
    }

    // Add Pages Place-holders
    const listPages = (times) => Array(times)
        .fill(null)
        .map((_, index) => `
<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <button class='Bookmark ControlButton' title='Bookmark'></button>
    <button class='ZoomIn ControlButton' title='Zoom In'></button>
    <button class='ZoomRestore ControlButton' title='Zoom Restore'></button>
    <button class='ZoomOut ControlButton' title='Zoom Out'></button>
    <button class='ZoomWidth ControlButton' title='Zoom to Width'></button>
    <button class='ZoomHeight ControlButton' title='Zoom to Height'></button>
    <button class='Hide ControlButton' title='Hide'></button>
    <button class='Reload ControlButton' title='Reload'></button>
    <span class='PageIndex'>${index + 1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${index + 1}' alt='PageImg${index + 1}' class='PageImg' />
  </div>
</div>`);

    const imageOptions = `<div id='ImageOptions'>
  <div id='menu'>
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
<!--    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>-->
  </div>
  <div class='panel'>
    <img id='enlarge' alt='Enlarge' title='Enlarge' src='${icon.enlarge}' class='ControlButton' />
    <img id='restore' alt='Restore' title='Restore' src='${icon.restore}' class='ControlButton' />
    <img id='reduce' alt='Reduce' title='Reduce' src='${icon.reduce}' class='ControlButton' />
    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='${icon.fitWidth}' class='ControlButton' />
    <img id='fitHeight' alt='Fit Height' title='Fit Height' src='${icon.fitHeight}' class='ControlButton' />
    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='${icon.webComic}' class='ControlButton' />
    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='${icon.pictureLeft}' class='ControlButton'/>
    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='${icon.pictureDown}' class='ControlButton'/>
    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='${icon.pictureRight}' class='ControlButton'/>
    <img id='pageControls' alt='Toggle Page Controls' title='Toggle Page Controls' src='${icon.controls}' class='ControlButton'/>
    <img id='settings' alt='settings' title='settings' src='${icon.settings}' class='ControlButton' />
  </div>
  <div id='Zoom' class='ControlLabel'>Zoom: <b id='ZoomPercent'>${settings$1.zoom}</b> %</div>
</div>`;

    const controls$1 = `
<div id='ViewerControls' class='panel'>
  <button id='ResetSettings'>Reset Settings</button>
  <div class='ControlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <div class='CustomTheme ControlLabelItem ${settings$1.theme === 'Custom_Dark' || settings$1.theme === 'Custom_Light' ? 'show' : ''}'>
        -Base:<input id='CustomThemeHue' type='color' value='${settings$1.customTheme}' class='colorpicker CustomTheme'/>
      </div>
      <div class='FullCustom ControlLabelItem ${settings$1.theme === 'Full_Custom' ? 'show' : ''}' >
        -Body:<input id='CustomThemeHueBody' type='color' value='${settings$1.customThemeBody}' class='colorpicker FullCustom'/>
      </div>
      <div class='FullCustom ControlLabelItem ${settings$1.theme === 'Full_Custom' ? 'show' : ''}' >
        -Text:<input id='CustomThemeHueText' type='color' value='${settings$1.customThemeText}' class='colorpicker FullCustom'/>
      </div>
      <div class='FullCustom ControlLabelItem ${settings$1.theme === 'Full_Custom' ? 'show' : ''}' >
        -Lines:<input id='CustomThemeHueLines' type='color' value='${settings$1.customThemeLines}' class='colorpicker FullCustom'/>
      </div>
      <div class='FullCustom ControlLabelItem ${settings$1.theme === 'Full_Custom' ? 'show' : ''}'>
        -Painels:
        <input id='CustomThemeHuePanel' type='color' value='${settings$1.customThemePanel}' class='colorpicker FullCustom'/>
      </div>
      <div class='FullCustom ControlLabelItem ${settings$1.theme === 'Full_Custom' ? 'show' : ''}'>
        -Buttons:
        <input id='CustomThemeHueButton' type='color' value='${settings$1.customThemeButton}' class='colorpicker FullCustom'/>
      </div>
  </div>
  <div class='ControlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='wait' ${settings$1.loadMode === 'wait' ? 'selected' : ''}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings$1.loadMode === 'always' ? 'selected' : ''}>Always(Immediately)</option>
      <option value='never' ${settings$1.loadMode === 'never' ? 'selected' : ''}>Never(Manually)</option>
    </select>
  </div>
  <div class='ControlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${settings$1.throttlePageLoad === 3000 ? 'selected' : ''}>0.3(Slow)</option>
      <option value='2000' ${settings$1.throttlePageLoad === 2000 ? 'selected' : ''}>0.5</option>
      <option value='1000' ${settings$1.throttlePageLoad === 1000 ? 'selected' : ''}>01(Normal)</option>
      <option value='500' ${settings$1.throttlePageLoad === 500 ? 'selected' : ''}>02</option>
      <option value='250' ${settings$1.throttlePageLoad === 250 ? 'selected' : ''}>04(Fast)</option>
      <option value='125' ${settings$1.throttlePageLoad === 125 ? 'selected' : ''}>08</option>
      <option value='100' ${settings$1.throttlePageLoad === 100 ? 'selected' : ''}>10(Extreme)</option>
    </select>
  </div>
  <div class='ControlLabel DefaultZoom'>Default Zoom:
    <select id='DefaultZoom'>
      <option value='50' ${settings$1.zoom === 50 ? 'selected' : ''}>50%</option>
      <option value='75' ${settings$1.zoom === 75 ? 'selected' : ''}>75%</option>
      <option value='100' ${settings$1.zoom === 100 ? 'selected' : ''}>100%</option>
      <option value='125' ${settings$1.zoom === 125 ? 'selected' : ''}>125%</option>
      <option value='150' ${settings$1.zoom === 150 ? 'selected' : ''}>150%</option>
      <option value='175' ${settings$1.zoom === 175 ? 'selected' : ''}>175%</option>
      <option value='200' ${settings$1.zoom === 200 ? 'selected' : ''}>200%</option>
      <option value='1000' ${settings$1.zoom === 1000 ? 'selected' : ''}>Fit Width</option>
      <option value='-1000' ${settings$1.zoom === -1000 ? 'selected' : ''}>Fit Height</option>
    </select>
  </div>
  <div class='ControlLabel minZoom'>
    <span>
      Minimun Zoom relative to the width of screen (between 30 and 100):
      <output id='minZoomVal' for='minZoom'>${settings$1.minZoom}</output>
    </span>
    <input type='range' value='${settings$1.minZoom}' name='minZoom' id='minZoom' min='30' max='100' step='10' oninput='minZoomVal.value = this.value'/>
  </div>
  <div class='ControlLabel zoomStep'>
    <span>
      Zoom Change Step (between 5 and 50):
      <output id='zoomStepVal' for='zoomStep'>${settings$1.zoomStep}</output>
    </span>
    <input type='range' value='${settings$1.zoomStep}' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'/>
    
  </div>
  <div class='ControlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings$1.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${settings$1.viewMode === 'WebComic' ? 'selected' : ''}>WebComic</option>
      <option value='FluidLTR' ${settings$1.viewMode === 'FluidLTR' ? 'selected' : ''}>Left to Right</option>
      <option value='FluidRTL' ${settings$1.viewMode === 'FluidRTL' ? 'selected' : ''}>Right to Left</option>
    </select>
  </div>
  <div class='ControlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${settings$1.fitWidthIfOversize ? 'checked' : ''}/>
  </div>
  <div class='ControlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${settings$1.showThumbnails ? 'checked' : ''}/>
  </div>
  <div class='ControlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${settings$1.lazyLoadImages ? 'checked' : ''}/>
    </div>
    <div class='ControlLabel lazyStart'>
    <span>
      Lazy Start From Page (between 5 and 100):
      <output id='lazyStartVal' for='lazyStart'>${settings$1.lazyStart}</output>
    </span>
    <input type='range' value='${settings$1.lazyStart}' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'/>
    
  </div>
  <div class='ControlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${settings$1.downloadZip ? 'checked' : ''}/>
  </div>
  <div class='ControlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${settings$1.hidePageControls ? 'checked' : ''}/>
  </div>
  <div class='ControlLabel mouseOverMenu'>Toggle Sticky Header / MouseOverMenu:
    <input type='checkbox' value='false' name='mouseOverMenu' id='mouseOverMenu' ${settings$1.mouseOverMenu ? 'checked' : ''}/>
  </div>
</div>
`;

    const keybindings = `<div id='ViewerShortcuts' class='panel'>
    <kbd class='dark'>Numpad 5</kbd>/<kbd class='dark'>/</kbd>: Open Settings<br/>
    <kbd class='dark'>Numpad +</kbd>/<kbd class='dark'>=</kbd>: Global Zoom in pages (enlarge)<br/>
    <kbd class='dark'>Numpad -</kbd>/<kbd class='dark'>-</kbd>: Global Zoom out pages (reduce)<br/>
    <kbd class='dark'>Numpad /</kbd>/<kbd class='dark'>9</kbd>: Global Restore pages to original<br/>
    <kbd class='dark'>Numpad *</kbd>/<kbd class='dark'>0</kbd>: Global Fit window width<br/>
    <kbd class='dark'>V</kbd>: Vertical Mode<br/>
    <kbd class='dark'>C</kbd>: WebComic Mode<br/>
    <kbd class='dark'>N</kbd>: Right to Left Mode<br/>
    <kbd class='dark'>B</kbd>: Left to Right Mode<br/>
    <kbd class='dark'>→</kbd>/<kbd class='dark'>D</kbd>/<kbd class='dark'>Numpad 6</kbd>/<kbd class='dark'>.</kbd> : Next Chapter<br/>
    <kbd class='dark'>←</kbd>/<kbd class='dark'>A</kbd>/<kbd class='dark'>Numpad 4</kbd>/<kbd class='dark'>,</kbd> : Previous Chapter<br/>
    <kbd class='dark'>↑</kbd>/<kbd class='dark'>W</kbd>/<kbd class='dark'>Numpad 8</kbd>: Scroll Up<br/>
    <kbd class='dark'>↓</kbd>/<kbd class='dark'>S</kbd>/<kbd class='dark'>Numpad 2</kbd>: Scroll Down<br/>
</div>`;

    const listThumbnails = (times) => Array(times)
        .fill(null)
        .map((_, index) => `
<div id='Thumbnail${index + 1}' class='Thumbnail'>
  <img id='ThumbnailImg${index + 1}' alt='ThumbnailImg${index + 1}' class='ThumbnailImg' src=''/>
  <span class='ThumbnailIndex'>${index + 1}</span>
</div>`);

    // Icons from https://tabler-icons.io/
    // Icons for Navigation
    const IconArrowBigRight = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
</svg>`;
    const IconArrowBigLeft = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path>
</svg>`;
    const IconFileDownload = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
   <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
   <path d="M12 17v-6"></path>
   <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
</svg>`;
    const IconCategory = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4h6v6h-6z"></path>
   <path d="M14 4h6v6h-6z"></path>
   <path d="M4 14h6v6h-6z"></path>
   <circle cx="17" cy="17" r="3"></circle>
</svg>`;

    const listOptions = (times) => Array(times)
        .fill(null)
        .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);
    const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer'
  class="${settings$1.theme} ${settings$1.hidePageControls ? 'hideControls' : ''}">
  <header id="Header" class="${settings$1.mouseOverMenu ? 'mouseOverMenu' : ''}">
    <aside id='GlobalControls'>
      ${imageOptions}
      ${controls$1}
      ${keybindings}
    </aside>
    <div class='ViewerTitle'>
      <h1 id='MangaTitle'>${manga.title}</h1>
      <a id='series' href='${manga.series}'>(Return to Chapter List)</a>
    </div>
    <nav id='ChapterNavigation'>
      <div id='Counters' class='ControlLabel'>
        <i>0</i> of <b>${manga.pages}</b> Pages Loaded
        <span class='ControlLabel'>Go to Page:</span>
        <select id='gotoPage'>
          <option selected>#</option>
          ${listOptions(manga.pages).slice(begin).join('')}
        </select>
      </div>
      <div id='ChapterControl' class='ChapterControl'>
        <a href='#' class='download NavigationControlButton ControlButton'>
          ${IconFileDownload}
          Download
        </a>
        <a class='prev NavigationControlButton ControlButton' id='prev' href='${manga.prev || ''}'>
          ${IconArrowBigLeft}
          Previous
        </a>
        <a class='next NavigationControlButton ControlButton' id='next' href='${manga.next || ''}'>
          Next
          ${IconArrowBigRight}
        </a>
      </div>
    </nav>
  </header>  
  <main id='Chapter' class='${settings$1.fitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${settings$1.viewMode}'>
    ${listPages(manga.pages).slice(begin).join('')}
  </main>
  <nav id='Navigation' class='panel ${settings$1.showThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='ControlLabel'>
      ${IconCategory}
      <i>0</i> of <b>${manga.pages}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.pages).slice(begin).join('')}
    </div>
  </nav>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;

    const cache = {
        zip: new JSZip(),
        downloadFiles: 0,
        Data: {},
    };
    const getExtension = (mimeType) => ((/image\/(?<ext>jpe?g|png|webp)/.exec(mimeType) || {}).groups || {}).ext || '' || 'png';
    const getFilename = (name, index, total, ext) => `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace('jpeg', 'jpg')}`;
    // Generate Zip File for download
    function generateZip() {
        // Source:
        // http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
        if (cache.downloadFiles === 0) {
            const filenameRegex = /^(?<name>.*?)(?<index>\d+)\.(?<ext>\w+)$/;
            const images = [...document.querySelectorAll('.PageImg')];
            const filenames = (() => {
                const result = [];
                for (let i = 0; i < images.length; i += 1) {
                    const $img = images[i];
                    const filename = $img.getAttribute('src')?.split(/[?#]/)[0].split('/').pop() ?? '';
                    const match = filenameRegex.exec(filename);
                    if (!match || !match.groups)
                        break;
                    const fixedFilename = getFilename(match.groups.name, parseInt(match.groups.index, 10), images.length, match.groups?.ext);
                    if (result.length > 0 && fixedFilename <= result[result.length - 1])
                        break;
                    result.push(fixedFilename);
                }
                if (result.length < images.length)
                    return [];
                return result;
            })();
            images.forEach((img, index) => {
                const src = img.getAttribute('src') ?? '';
                const base64 = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/.exec(src);
                if (base64 && base64.groups) {
                    const filename = getFilename('Page ', index, images.length, getExtension(base64.groups?.mimeType));
                    cache.zip.file(filename, base64.groups.data, {
                        base64: true,
                        createFolders: true,
                    });
                    logScript(`${filename} Added to Zip from Base64 Image, From: ${src}`);
                    cache.downloadFiles += 1;
                }
                else {
                    try {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: src,
                            overrideMimeType: 'text/plain; charset=x-user-defined',
                            responseType: 'blob',
                            onload(request) {
                                const filename = filenames[index] ||
                                    getFilename('Page ', index, images.length, getExtension(request.response.type));
                                cache.zip.file(filename, request.response, {
                                    base64: true,
                                    createFolders: true,
                                    compression: 'DEFLATE',
                                });
                                logScript(`${filename} Added to Zip as Base64 Image, From: ${src}, Data:`, request.response);
                                cache.downloadFiles += 1;
                            },
                        });
                    }
                    catch (e) {
                        logScript(e);
                    }
                }
            });
        }
        const total = document.querySelectorAll('.PageImg').length;
        if (cache.downloadFiles < total) {
            logScript(`Waiting for Files to Download ${cache.downloadFiles} of ${total}`);
            setTimeout(generateZip, 2000);
        }
        else {
            try {
                logScript('Generating Zip');
                cache.zip
                    .generateAsync({
                    type: 'blob',
                })
                    .then((content) => {
                    logScript('Download Ready');
                    const zipName = `${document.querySelector('#MangaTitle')?.textContent?.trim()}.zip`;
                    FileSaver.saveAs(content, zipName);
                });
            }
            catch (e) {
                logScript(e);
            }
        }
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

    var Language;
    (function (Language) {
        Language["ENGLISH"] = "English";
        Language["SPANISSH"] = "Spanish";
        Language["PORTUGUESE"] = "Portuguese";
        Language["JAPANESE"] = "Japanese";
    })(Language || (Language = {}));
    var Category;
    (function (Category) {
        Category["MANGA"] = "manga";
        Category["COMIC"] = "comic";
        Category["HENTAI"] = "hentai";
    })(Category || (Category = {}));

    function fetchText(url, format) {
        return new Promise((resolve) => {
            logScript('Fetching page: ', url);
            fetch(url)
                .then((response) => 
            // When the page is loaded convert it to text
            response.text())
                .then((html) => {
                // Initialize the DOM parser
                const parser = new DOMParser();
                // Parse the text
                const doc = parser.parseFromString(html, format);
                // You can now even select part of that html as you would in the regular DOM
                // Example:
                // var docArticle = doc.querySelector('article').innerHTML;
                // console.log(doc);
                resolve(doc);
            })
                .catch((err) => {
                logScript('Failed to fetch page: ', err);
            });
        });
    }
    function fetchHtml(url) {
        return fetchText(url, 'text/html');
    }
    function getElementAttribute(url, selector, attribute) {
        return fetchHtml(url).then((doc) => doc.querySelector(selector)?.getAttribute(attribute));
    }

    /**
     * Settings the lazy load will obey
     */
    const settings = {
        threshold: 2000,
        throttle: 500,
        lazyAttribute: 'data-src',
        targetAttribute: 'src',
    };
    /**
     * List of elements that will be lazy loaded
     */
    let listElements = [];
    /**
     * Check if the image ins nearing the viewport, so it needs to load.
     * @param value
     */
    function filterInView(value) {
        const { element } = value;
        if (!element.offsetParent)
            return false;
        const ele = element.offsetParent;
        const top = ele.offsetTop + element.height >= window.scrollY - settings.threshold;
        const bottom = ele.offsetTop <= window.scrollY + window.innerHeight + settings.threshold;
        return top && bottom;
    }
    /**
     * Execute the loading of the image
     * @param item
     */
    function showElement(item) {
        const value = item.element.getAttribute(settings.lazyAttribute);
        if (value)
            item.element.setAttribute(settings.targetAttribute, value);
        item.callback(item.element);
    }
    /**
     * Lookup images that should be loaded, and update the current list
     */
    function executeCheck() {
        const inView = listElements.filter(filterInView);
        listElements = listElements.filter((item) => !filterInView(item));
        inView.forEach(showElement);
    }
    /**
     * Throttle controller
     */
    let wait;
    /**
     * Function responsible for observing the screen move/change
     */
    function observerEvent() {
        if (listElements.length === 0) {
            window.removeEventListener('scroll', observerEvent);
            window.removeEventListener('touchmove', observerEvent);
            window.removeEventListener('resize', observerEvent);
            // console.info('All items lazy loaded');
            return;
        }
        if (wait) {
            return;
        }
        executeCheck();
        wait = setTimeout(() => {
            wait = undefined;
        }, settings.throttle);
    }
    /**
     * Simple lazy loading for images.
     * Add an image element to a list, wait for it to be close to appearing on screen then load its 'src' from 'data-src'
     * then call a callback function.
     * @param element
     * @param callback
     */
    function lazyLoad(element, callback) {
        if (listElements.length === 0) {
            // console.info('Initializing lazy load');
            window.addEventListener('scroll', observerEvent, {
                passive: true,
            });
            window.addEventListener('touchmove', observerEvent, {
                passive: true,
            });
            window.addEventListener('resize', observerEvent, {
                passive: true,
            });
        }
        listElements.push({ element, callback });
    }

    // After pages load apply default Zoom
    function applyZoom(pages = '.PageContent img', zoom = settings$1.zoom) {
        const pg = [...document.querySelectorAll(pages)];
        pg.forEach((value) => {
            const img = value;
            img.removeAttribute('width');
            img.removeAttribute('height');
            img.removeAttribute('style');
            if (zoom === 1000) {
                img.style.width = `${window.innerWidth}px`;
            }
            else if (zoom === -1000) {
                const nav = document.querySelector('#Navigation')?.classList.contains('disabled');
                const chap = document.querySelector('#Chapter')?.classList.contains('WebComic');
                const nextHeight = window.innerHeight + (nav ? 0 : -34) + (chap ? 0 : -35);
                img.style.height = `${nextHeight}px`;
            }
            else {
                img.style.width = `${img.naturalWidth * (zoom / 100)}px`;
            }
        });
    }
    // Force reload the image
    function reloadImage(img) {
        const src = img.getAttribute('src');
        if (src) {
            img.removeAttribute('src');
            setTimeout(() => {
                img.setAttribute('src', src);
            }, 500);
        }
    }
    function onImagesDone() {
        logScript('Images Loading Complete');
        if (!settings$1.lazyLoadImages) {
            document.querySelector('.download')?.setAttribute('href', '#download');
            logScript('Download Available');
            if (settings$1.downloadZip) {
                document.querySelector('#blob')?.dispatchEvent(new Event('click'));
            }
        }
    }
    function updateProgress() {
        const total = document.querySelectorAll('.PageContent .PageImg').length;
        const loaded = document.querySelectorAll('.PageContent .PageImg.imgLoaded').length;
        const percentage = Math.floor((loaded / total) * 100);
        const title = document.querySelector('title');
        if (title) {
            title.innerHTML = `(${percentage}%) ${document.querySelector('#MangaTitle')?.textContent}`;
        }
        document.querySelectorAll('#Counters i, #NavigationCounters i').forEach((ele) => {
            ele.textContent = loaded.toString();
        });
        NProgress.configure({
            showSpinner: false,
        }).set(loaded / total);
        logScript(`Progress: ${percentage}%`);
        if (loaded === total)
            onImagesDone();
    }
    // change class if the image is loaded or broken
    function onImagesProgress(instance, image) {
        if (image) {
            if (image.isLoaded) {
                image.img.classList.add('imgLoaded');
                image.img.classList.remove('imgBroken');
                image.img.getAttribute('id');
                const thumbId = image.img.getAttribute('id').replace('PageImg', 'ThumbnailImg');
                const thumb = document.getElementById(thumbId);
                if (thumb) {
                    thumb.onload = () => applyZoom(`#${image.img.getAttribute('id')}`);
                    thumb.setAttribute('src', image.img.getAttribute('src'));
                }
            }
            else {
                image.img.classList.add('imgBroken');
                reloadImage(image.img);
                const imgLoad = imagesLoaded(image.img.parentElement);
                imgLoad.on('progress', onImagesProgress);
            }
        }
        updateProgress();
    }
    // Corrects urls
    function normalizeUrl(url = '') {
        let uri = url.trim();
        if (uri.startsWith('//')) {
            uri = `https:${uri}`;
        }
        return uri;
    }
    // Adds an image to the place-holder div
    function addImg(index, imageSrc) {
        const src = normalizeUrl(imageSrc);
        const img = document.querySelector(`#PageImg${index}`);
        if (img) {
            if (!settings$1.lazyLoadImages || index < settings$1.lazyStart) {
                img.setAttribute('src', src);
                img.setAttribute('src', src);
                const imgLoad = imagesLoaded(img.parentElement);
                imgLoad.on('progress', onImagesProgress);
                logScript('Loaded Image:', index, 'Source:', src);
            }
            else {
                img.setAttribute('data-src', src);
                lazyLoad(img, () => {
                    const imgLoad = imagesLoaded(img.parentElement);
                    imgLoad.on('progress', onImagesProgress);
                    logScript('Lazy Image: ', index, ' Source: ', img.getAttribute('src'));
                });
            }
        }
    }
    function findPage(manga, index, pageUrl, lazy) {
        return async () => {
            const src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
            const img = document.querySelector(`#PageImg${index}`);
            if (src && img) {
                img.setAttribute('src', src);
                img.style.width = 'auto';
                const imgLoad = imagesLoaded(img.parentElement);
                imgLoad.on('progress', onImagesProgress);
                logScript(`${lazy && 'Lazy '}Page: `, index, ' Source: ', img.getAttribute('src'));
            }
        };
    }
    // Adds a page to the place-holder div
    async function addPage(manga, index, pageUrl) {
        const img = document.querySelector(`#PageImg${index}`);
        if (img) {
            if (!settings$1.lazyLoadImages || index < settings$1.lazyStart) {
                await findPage(manga, index, pageUrl, false)();
            }
            else {
                img.setAttribute('data-src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
                lazyLoad(img, findPage(manga, index, pageUrl, false));
            }
        }
    }
    // daley the use of an url/src
    function delayAdd(src, wait = settings$1.throttlePageLoad) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(src);
            }, wait);
        });
    }
    // use a list of pages to fill the viewer
    function loadMangaPages(begin, manga) {
        return manga.listPages?.map((url, index) => index >= begin
            ? delayAdd(url, (manga.timer || settings$1.throttlePageLoad) * (index - begin)).then((response) => addPage(manga, index + 1, response))
            : null);
    }
    // use a list of images to fill the viewer
    function loadMangaImages(begin, manga) {
        return manga.listImages?.map((src, index) => index >= begin
            ? delayAdd(src, (manga.timer || settings$1.throttlePageLoad) * (index - begin)).then((response) => addImg(index + 1, response))
            : null);
    }
    // Entry point for loading hte Manga pages
    function loadManga(manga, begin = 1) {
        settings$1.lazyLoadImages = manga.lazy || settings$1.lazyLoadImages;
        logScript('Loading Images');
        logScript(`Intervals: ${manga.timer || settings$1.throttlePageLoad || 'Default(1000)'}`);
        logScript(`Lazy: ${settings$1.lazyLoadImages}`);
        if (settings$1.lazyLoadImages) {
            logScript('Download may not work with Lazy Loading Images');
        }
        if (isImagesManga(manga)) {
            logScript('Method: Images:', manga.listImages);
            loadMangaImages(begin - 1, manga);
        }
        else if (isPagesManga(manga)) {
            logScript('Method: Pages:', manga.listPages);
            loadMangaPages(begin - 1, manga);
        }
        else if (isBruteforceManga(manga)) {
            logScript('Method: Brute Force');
            manga.bruteForce({
                begin,
                addImg,
                loadImages: (list) => loadMangaImages(begin - 1, { ...manga, listImages: list }),
                loadPages: (list, img, lazyAttr) => loadMangaPages(begin - 1, {
                    ...manga,
                    listPages: list,
                    img,
                    lazyAttr,
                }),
                wait: settings$1.throttlePageLoad,
            });
        }
    }

    // Goto Page and Thumbnails
    function scrollToElement(ele) {
        window.scroll(0, ele?.offsetTop || 0);
    }
    // Clean key press configurations and set some when specified
    function setKeyDownEvents() {
        try {
            document.onkeydown = null;
            document.onkeypress = null;
            window.onkeydown = null;
            window.onkeypress = null;
            window.onload = null;
            document.body.onload = null;
        }
        catch (e) {
            logScript(`Keybinds error: ${e}`);
        }
        function processKey(e) {
            const a = e.code;
            const usedKeys = [
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
            ];
            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && usedKeys.some((i) => i === a)) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                logScript('Keyboard:', a, ' Event:', e);
                switch (a) {
                    case 'ArrowUp':
                    case 'KeyW':
                    case 'Numpad8':
                        if (settings$1.zoom === -1000) {
                            const next = [...document.querySelectorAll('.MangaPage')].find((element) => element.offsetTop - window.scrollY > 10);
                            scrollToElement(next?.previousElementSibling);
                        }
                        else {
                            window.scrollBy({
                                top: -window.innerHeight / 2,
                                behavior: 'smooth',
                            });
                        }
                        break;
                    case 'ArrowDown':
                    case 'KeyS':
                    case 'Numpad2':
                        if (settings$1.zoom === -1000) {
                            const next = [...document.querySelectorAll('.MangaPage')].find((element) => element.offsetTop - window.scrollY > 10);
                            scrollToElement(next);
                        }
                        else {
                            window.scrollBy({
                                top: window.innerHeight / 2,
                                behavior: 'smooth',
                            });
                        }
                        break;
                    case 'ArrowRight':
                    case 'Period':
                    case 'KeyD':
                    case 'Numpad6':
                        logScript('Click next');
                        document.querySelector('#next')?.click();
                        break;
                    case 'ArrowLeft':
                    case 'Comma':
                    case 'KeyA':
                    case 'Numpad4':
                        document.querySelector('#prev')?.click();
                        break;
                    case 'Equal':
                    case 'NumpadAdd':
                    case 'KeyE':
                        document.querySelector('#enlarge')?.dispatchEvent(new Event('click'));
                        break;
                    case 'Minus':
                    case 'NumpadSubtract':
                    case 'KeyQ':
                        document.querySelector('#reduce')?.dispatchEvent(new Event('click'));
                        break;
                    case 'Digit9':
                    case 'NumpadDivide':
                    case 'KeyR':
                        document.querySelector('#restore')?.dispatchEvent(new Event('click'));
                        break;
                    case 'Digit0':
                    case 'NumpadMultiply':
                    case 'KeyF':
                        document.querySelector('#fitWidth')?.dispatchEvent(new Event('click'));
                        break;
                    case 'Slash':
                    case 'Numpad5':
                    case 'KeyX':
                        document.querySelector('#settings')?.dispatchEvent(new Event('click'));
                        break;
                    case 'KeyC':
                        document.querySelector('#webComic')?.dispatchEvent(new Event('click'));
                        break;
                    case 'KeyV':
                        document.querySelector('#verticalMode')?.dispatchEvent(new Event('click'));
                        break;
                    case 'KeyN':
                        document.querySelector('#rtlMode')?.dispatchEvent(new Event('click'));
                        break;
                    case 'KeyB':
                        document.querySelector('#ltrMode')?.dispatchEvent(new Event('click'));
                        break;
                }
                return false;
            }
            return true;
        }
        document.addEventListener('keydown', processKey);
    }
    function updateZoomPercent(percent = settings$1.zoom) {
        const zoom = document.querySelector('#ZoomPercent');
        if (zoom) {
            zoom.textContent = percent.toString();
        }
    }
    // Controls for the extra features added to the sites
    function controls() {
        // Settings Control
        function buttonSettings() {
            document.querySelector('#ViewerControls')?.classList.toggle('visible');
            document.querySelector('#ViewerShortcuts')?.classList.toggle('visible');
            document.querySelector('#ImageOptions')?.classList.toggle('settingsOpen');
            document.querySelector('#Navigation')?.classList.toggle('visible');
            document.querySelector('#Header')?.classList.toggle('visible');
        }
        document.querySelector('#settings')?.addEventListener('click', buttonSettings);
        // Size Controls
        // Global Zoom In Button
        function buttonGlobalZoomIn() {
            settings$1.zoom += settings$1.zoomStep;
            updateZoomPercent();
            applyZoom();
        }
        document.querySelector('#enlarge')?.addEventListener('click', buttonGlobalZoomIn);
        // Global Zoom Out Button
        function buttonGlobalZoomOut() {
            settings$1.zoom -= settings$1.zoomStep;
            updateZoomPercent();
            applyZoom();
        }
        document.querySelector('#reduce')?.addEventListener('click', buttonGlobalZoomOut);
        // Global Zoom Restore Button
        function buttonGlobalRestoreZoom() {
            settings$1.zoom = 100;
            updateZoomPercent();
            applyZoom();
        }
        document.querySelector('#restore')?.addEventListener('click', buttonGlobalRestoreZoom);
        // Global Fit Width Button
        function buttonGlobalFitWidth() {
            settings$1.zoom = 1000;
            updateZoomPercent();
            applyZoom();
        }
        document.querySelector('#fitWidth')?.addEventListener('click', buttonGlobalFitWidth);
        // Global Fit height Button
        function buttonGlobalFitHeight() {
            settings$1.zoom = -1000;
            updateZoomPercent();
            applyZoom();
        }
        document.querySelector('#fitHeight')?.addEventListener('click', buttonGlobalFitHeight);
        // WebComic View Mode Button
        function buttonWebComicMode() {
            document.querySelector('#Chapter')?.classList.add('WebComic');
            document.querySelector('#Chapter')?.classList.remove('FluidLTR');
            document.querySelector('#Chapter')?.classList.remove('FluidRTL');
            document.querySelector('#Chapter')?.classList.remove('DoublePage');
            applyZoom();
        }
        document.querySelector('#webComic')?.addEventListener('click', buttonWebComicMode);
        // Fluid LTR View Mode Button
        function buttonLtrMode() {
            document.querySelector('#Chapter')?.classList.remove('WebComic');
            document.querySelector('#Chapter')?.classList.add('FluidLTR');
            document.querySelector('#Chapter')?.classList.remove('FluidRTL');
            document.querySelector('#Chapter')?.classList.add('DoublePage');
            applyZoom();
        }
        document.querySelector('#ltrMode')?.addEventListener('click', buttonLtrMode);
        // Fluid RTL View Mode Button
        function buttonRtlMode() {
            document.querySelector('#Chapter')?.classList.remove('WebComic');
            document.querySelector('#Chapter')?.classList.remove('FluidLTR');
            document.querySelector('#Chapter')?.classList.add('FluidRTL');
            document.querySelector('#Chapter')?.classList.add('DoublePage');
            applyZoom();
        }
        document.querySelector('#rtlMode')?.addEventListener('click', buttonRtlMode);
        // Vertical View Mode Button
        function buttonVerticalMode() {
            document.querySelector('#Chapter')?.classList.remove('WebComic');
            document.querySelector('#Chapter')?.classList.remove('FluidLTR');
            document.querySelector('#Chapter')?.classList.remove('FluidRTL');
            document.querySelector('#Chapter')?.classList.remove('DoublePage');
            applyZoom();
        }
        document.querySelector('#verticalMode')?.addEventListener('click', buttonVerticalMode);
        // Image Fit width if Oversize Toggle
        function checkFitWidthOversize(event) {
            document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize');
            if (event.currentTarget.checked) {
                setValueGM('FitWidthIfOversize', true);
            }
            else {
                setValueGM('FitWidthIfOversize', false);
            }
            logScript(`fitIfOversize: ${getValueGM('FitWidthIfOversize')}`);
        }
        document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
        // Default View mode Selector
        function changeViewMode(event) {
            const mode = event.currentTarget.value;
            document.querySelector('#Chapter')?.classList.remove('WebComic');
            document.querySelector('#Chapter')?.classList.remove('FluidLTR');
            document.querySelector('#Chapter')?.classList.remove('FluidRTL');
            document.querySelector('#Chapter')?.classList.add(mode);
            setValueGM('ViewMode', mode);
            logScript(`ViewMode: ${getValueGM('ViewMode')}`);
            applyZoom();
        }
        document.querySelector('#viewMode')?.addEventListener('change', changeViewMode);
        // Start/Load mode Selector
        function changeLoadMode(event) {
            const mode = event.currentTarget.value;
            setValueGM('LoadMode', mode);
            logScript(`MangaLoadMode: ${getValueGM('LoadMode')}`);
        }
        document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
        // Show Thumbnail Toggle
        function checkShowThumbnails(event) {
            document.querySelector('#Navigation')?.classList.toggle('disabled');
            if (event.currentTarget.checked) {
                setValueGM('ShowThumbnails', true);
            }
            else {
                setValueGM('ShowThumbnails', false);
            }
            logScript(`MangaShowThumbnails: ${getValueGM('ShowThumbnails')}`);
            applyZoom();
        }
        document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
        // Download auto start toggle
        function changeAutoDownload(event) {
            if (event.currentTarget.checked) {
                setValueGM('DownloadZip', true);
                Swal.fire({
                    title: 'Attention',
                    text: 'Next time a chapter finish loading you will be prompted to save automatically',
                    timer: 10000,
                    icon: 'info',
                });
            }
            else {
                setValueGM('DownloadZip', false);
            }
            logScript(`MangaDownloadZip: ${getValueGM('DownloadZip')}`);
        }
        document.querySelector('#downloadZip')?.addEventListener('change', changeAutoDownload);
        // Download starter
        document.querySelector('#blob')?.addEventListener('click', generateZip, { once: true });
        document.querySelector('.download')?.addEventListener('click', () => {
            logScript('Downloading Chapter');
            document.querySelector('#blob')?.dispatchEvent(new Event('click'));
        });
        // Lazy load Toggle
        function checkLazyLoad(event) {
            if (event.currentTarget.checked) {
                setValueGM('LazyLoadImages', true);
                Swal.fire({
                    title: 'Warning',
                    html: `Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>
               Suggestion: <span style="color:red;font-weight:bold">Disable Thumbnails</span> to save Bandwidth/Memory.`,
                    icon: 'warning',
                });
            }
            else {
                setValueGM('LazyLoadImages', false);
            }
            logScript(`MangaLazyLoadImages: ${getValueGM('LazyLoadImages')}`);
        }
        document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);
        // Lazy load starting point Slider
        function changeLazyStart(event) {
            const start = event.currentTarget.value;
            setValueGM('LazyStart', start);
            logScript(`lazyStart: ${getValueGM('LazyStart')}`);
        }
        document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);
        // Images load speed Selector
        function changePagesPerSecond(event) {
            setValueGM('Timer', parseInt(event.currentTarget.value, 10));
            logScript(`MangaTimer: ${getValueGM('Timer')}`);
        }
        document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);
        // Global Default Zoom Selector
        function changeDefaultZoom(event) {
            settings$1.zoom = parseInt(event.currentTarget.value, 10);
            updateZoomPercent();
            setValueGM('Zoom', parseInt(settings$1.zoom.toString(), 10));
            logScript(`MangaZoom: ${getValueGM('Zoom')}`);
            applyZoom();
        }
        document.querySelector('#DefaultZoom')?.addEventListener('change', changeDefaultZoom);
        // Zoom Step Slider
        function changeZoomStep(event) {
            const step = event.currentTarget.value;
            setValueGM('ZoomStep', parseInt(step, 10));
            logScript(`ZoomStep: ${getValueGM('ZoomStep')}`);
        }
        document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);
        // Min Zoom Slider
        function changeMinZoom(event) {
            const min = event.currentTarget.value;
            replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
            setValueGM('MinZoom', parseInt(min, 10));
            logScript(`MinZoom: ${getValueGM('MinZoom')}`);
        }
        document.querySelector('#minZoom')?.addEventListener('change', changeMinZoom);
        // Show/hide Image Controls Button
        function globalHideImageControls() {
            document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
        }
        document.querySelector('#pageControls')?.addEventListener('click', globalHideImageControls);
        // Show/hide Image Controls Toggle
        function checkHideImageControls(event) {
            document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls');
            if (event.currentTarget.checked) {
                setValueGM('HidePageControls', true);
            }
            else {
                setValueGM('HidePageControls', false);
            }
            logScript(`MangaHidePageControls: ${getValueGM('HidePageControls')}`);
        }
        document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);
        // Sticky Header or MouseOverMenu Toggle
        function checkMouseOverMenu(event) {
            document.querySelector('#Header')?.classList.toggle('mouseOverMenu');
            if (event.currentTarget.checked) {
                setValueGM('MouseOverMenu', true);
            }
            else {
                setValueGM('MouseOverMenu', false);
            }
            logScript(`MangaHidePageControls: ${getValueGM('MouseOverMenu')}`);
        }
        document.querySelector('#mouseOverMenu')?.addEventListener('change', checkMouseOverMenu);
        // Theme Control Selector
        function changeTheme(event) {
            const target = event.currentTarget.value;
            [...document.querySelectorAll('#MangaOnlineViewer , body')].forEach((elem) => {
                elem.className = '';
                elem.classList.add(event.currentTarget.value);
            });
            logScript('Theme', target);
            setValueGM('Theme', target);
            const ct = [...document.querySelectorAll('.CustomTheme')];
            if (target === 'Custom_Dark' || target === 'Custom_Light') {
                ct.forEach((elem) => {
                    elem.classList.add('show');
                });
            }
            else {
                ct.forEach((elem) => {
                    elem.classList.remove('show');
                });
            }
            const fc = [...document.querySelectorAll('.FullCustom')];
            if (target === 'Full_Custom') {
                fc.forEach((elem) => {
                    elem.classList.add('show');
                });
            }
            else {
                fc.forEach((elem) => {
                    elem.classList.remove('show');
                });
            }
        }
        document.querySelector('#ThemeSelector')?.addEventListener('change', changeTheme);
        // Light/Dark Custom theme Color Input
        function changeCustomTheme(event) {
            const target = event.currentTarget.value;
            logScript(`CustomTheme: ${target}`);
            addCustomTheme(target);
            setValueGM('CustomTheme', target);
            logScript(`MangaCustomTheme: ${getValueGM('CustomTheme')}`);
        }
        document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
        // Full Custom theme Color Input
        function changeFullCustomTheme(input) {
            return input.addEventListener('change', () => {
                logScript('FullCustomTheme: ', document.querySelector('#CustomThemeHueBody')?.value, document.querySelector('#CustomThemeHueText')?.value, document.querySelector('#CustomThemeHueLines')?.value, document.querySelector('#CustomThemeHuePanel')?.value, document.querySelector('#CustomThemeHueButton')?.value);
                addFullCustomTheme(document.querySelector('#CustomThemeHueBody').value, document.querySelector('#CustomThemeHueText').value, document.querySelector('#CustomThemeHueLines').value, document.querySelector('#CustomThemeHuePanel').value, document.querySelector('#CustomThemeHueButton').value);
                setValueGM('CustomThemeBody', document.querySelector('#CustomThemeHueBody').value);
                setValueGM('CustomThemeText', document.querySelector('#CustomThemeHueText').value);
                setValueGM('CustomThemeLines', document.querySelector('#CustomThemeHueLines').value);
                setValueGM('CustomThemePanel', document.querySelector('#CustomThemeHuePanel').value);
                setValueGM('CustomThemeButton', document.querySelector('#CustomThemeHueButton').value);
            });
        }
        document.querySelectorAll('.colorpicker.FullCustom')?.forEach(changeFullCustomTheme);
        // Goto Navigation Selector
        function selectGoToPage(event) {
            applyZoom();
            scrollToElement(document.querySelector(`#Page${event.target.selectedIndex}`));
        }
        document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
        // Thumbnail Navigation
        function clickThumbnail(elem) {
            return elem.addEventListener('click', (event) => {
                applyZoom();
                scrollToElement(document.querySelector(`#Page${event.currentTarget.querySelector('.ThumbnailIndex')?.textContent}`));
            });
        }
        document.querySelectorAll('.Thumbnail')?.forEach(clickThumbnail);
        // Individual Page functions
        // Bookmark Page to resume reading
        function buttonBookmark(elem) {
            return elem.addEventListener('click', (event) => {
                const num = parseInt(event.currentTarget.parentElement?.querySelector('.PageIndex')
                    ?.textContent || '0', 10);
                const mark = {
                    url: window.location.href,
                    page: num,
                    date: Date.now(),
                };
                const found = settings$1.bookmarks.filter((el) => el.url === mark.url).length > 0;
                settings$1.bookmarks = settings$1.bookmarks.filter((el) => el.url !== mark.url);
                if (found) {
                    Swal.fire({
                        title: 'Bookmark Removed',
                        timer: 10000,
                        icon: 'error',
                    });
                }
                else {
                    settings$1.bookmarks.push(mark);
                    Swal.fire({
                        title: 'Saved Bookmark',
                        html: `Next time you open this chapter it will resume from:<h4>Page ${num}</h4>(Only <i>ONCE</i> per Bookmark, will be removed after a year unused)`,
                        icon: 'success',
                    });
                }
                setValueGM('Bookmarks', JSON.stringify(settings$1.bookmarks));
                logScript(`MangaBookmarks: ${getValueGM('Bookmarks')}`);
            });
        }
        document.querySelectorAll('.Bookmark')?.forEach(buttonBookmark);
        // Reload Page
        function buttonReloadPage(elem) {
            return elem.addEventListener('click', (event) => {
                const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
                reloadImage(img);
            });
        }
        document.querySelectorAll('.Reload')?.forEach(buttonReloadPage);
        // ZoomIn
        function buttonZoomIn(elem) {
            return elem.addEventListener('click', (event) => {
                const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
                const ratio = (img.width / img.naturalWidth) * (100 + settings$1.zoomStep);
                applyZoom(`#${img.getAttribute('id')}`, ratio);
            });
        }
        document.querySelectorAll('.ZoomIn')?.forEach(buttonZoomIn);
        // ZoomOut
        function buttonZoomOut(elem) {
            return elem.addEventListener('click', (event) => {
                const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
                const ratio = (img.width / img.naturalWidth) * (100 - settings$1.zoomStep);
                applyZoom(`#${img.getAttribute('id')}`, ratio);
            });
        }
        document.querySelectorAll('.ZoomOut')?.forEach(buttonZoomOut);
        // ZoomRestore
        function buttonRestoreZoom(elem) {
            return elem.addEventListener('click', () => {
                document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
            });
        }
        document.querySelectorAll('.ZoomRestore')?.forEach(buttonRestoreZoom);
        // ZoomWidth
        function buttonZoomWidth(elem) {
            return elem.addEventListener('click', (event) => {
                const page = event.currentTarget.parentElement?.parentElement;
                const img = page?.querySelector('.PageImg');
                applyZoom(`#${img.getAttribute('id')}`, 1000);
                page?.classList.toggle('DoublePage');
            });
        }
        document.querySelectorAll('.ZoomWidth')?.forEach(buttonZoomWidth);
        // ZoomHeight
        function buttonZoomHeight(elem) {
            elem.addEventListener('click', (event) => {
                const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
                applyZoom(`#${img.getAttribute('id')}`, -1000);
            });
        }
        document.querySelectorAll('.ZoomHeight')?.forEach(buttonZoomHeight);
        // Hide
        function buttonHidePage(elem) {
            elem.addEventListener('click', (event) => {
                const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageContent');
                img.classList.toggle('hide');
            });
        }
        document.querySelectorAll('.Hide')?.forEach(buttonHidePage);
        // Reset Reader Settings
        function buttonResetSettings() {
            getListGM().forEach((setting) => removeValueGM(setting));
            Swal.fire({
                title: 'Attention',
                text: 'Settings have been reset, reload the page to take effect',
                timer: 10000,
                icon: 'info',
            });
        }
        document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
        /**
         * Changes header class when scrolling up or down to show/hide it
         * @param showEnd [default 0]px from end of the screen to show header
         */
        function useScrollDirection(showEnd = 0) {
            let prevOffset = 0;
            const header = document.querySelector('#Header');
            const setScrollDirection = (classSuffix) => {
                header.classList.remove('scroll-end');
                header.classList.remove('scroll-hide');
                header.classList.remove('scroll-show');
                if (classSuffix)
                    header.classList.add(`scroll-${classSuffix}`);
            };
            function toggleScrollDirection() {
                const { scrollY } = window;
                if (showEnd && scrollY + window.innerHeight + showEnd > document.body.offsetHeight) {
                    setScrollDirection('end');
                }
                else if (scrollY > prevOffset && scrollY > 50) {
                    setScrollDirection('hide');
                }
                else if (scrollY < prevOffset && scrollY > 50) {
                    setScrollDirection('show');
                }
                else {
                    setScrollDirection('');
                }
                prevOffset = scrollY;
            }
            window.addEventListener('scroll', toggleScrollDirection);
        }
        useScrollDirection(100);
    }

    function display(manga, begin) {
        window.stop();
        if (manga.before !== undefined) {
            manga.before();
        }
        document.head.innerHTML = head(manga);
        document.body.innerHTML = body(manga, begin);
        document.body.className = '';
        document.body.removeAttribute('style');
        // document.documentElement.innerHTML = reader(manga, begin);
        logScript('Rebuilding Site');
        setTimeout(() => {
            try {
                controls();
                setKeyDownEvents();
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    loadManga(manga, begin);
                }, 50);
                // Clear used Bookmarks
                if (!isNothing(settings$1.bookmarks.filter((el) => el.url === window.location.href))) {
                    logScript(`Bookmark Removed ${window.location.href}`);
                    settings$1.bookmarks = settings$1.bookmarks.filter((el) => el.url !== window.location.href);
                    setValueGM('Bookmarks', JSON.stringify(settings$1.bookmarks));
                }
            }
            catch (e) {
                logScript(e);
            }
        }, 50);
        if (manga.after !== undefined) {
            manga.after();
        }
    }

    async function formatPage(manga, begin = 0) {
        display(manga, begin);
    }

    // language=CSS
    var sweetalertStyle = `.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075), 1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075), 2px 4px 16px hsla(0deg, 0%, 0%, 0.075);pointer-events:all}.swal2-popup.swal2-toast > *{grid-column:2}.swal2-popup.swal2-toast #swal2-title{margin:0.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:0.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:0.5em 0 0;padding:0.5em 0 0;font-size:0.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:0.8em;height:0.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:0.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:0.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 0.5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line']{top:0.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left']{left:0.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right']{right:0.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0.5em 0 0;padding:0 0.5em}.swal2-popup.swal2-toast .swal2-styled{margin:0.25em 0.5em;padding:0.4em 0.6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line']{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left']{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right']{top:-0.25em;left:0.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:0.4375em;width:0.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line']{height:0.3125em}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip']{top:1.125em;left:0.1875em;width:0.75em}.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long']{top:0.9375em;right:0.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip 0.75s;animation:swal2-toast-animate-success-line-tip 0.75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long 0.75s;animation:swal2-toast-animate-success-line-long 0.75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show 0.5s;animation:swal2-toast-show 0.5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide 0.1s forwards;animation:swal2-toast-hide 0.1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:'top-start top top-end' 'center-start center center-end' 'bottom-start bottom-center bottom-end';grid-template-rows:minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax( -webkit-min-content, auto );grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax( min-content, auto );height:100%;padding:0.625em;overflow-x:hidden;transition:background-color 0.1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0, 0, 0, 0.4)}.swal2-container.swal2-backdrop-hide{background:0 0 !important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start > .swal2-popup{align-self:start}.swal2-container.swal2-top > .swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end > .swal2-popup,.swal2-container.swal2-top-right > .swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left > .swal2-popup,.swal2-container.swal2-center-start > .swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center > .swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end > .swal2-popup,.swal2-container.swal2-center-right > .swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left > .swal2-popup,.swal2-container.swal2-bottom-start > .swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom > .swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end > .swal2-popup,.swal2-container.swal2-bottom-right > .swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen > .swal2-popup,.swal2-container.swal2-grow-row > .swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column > .swal2-popup,.swal2-container.swal2-grow-fullscreen > .swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}#swal2-title{position:relative;max-width:100%;margin:0;padding:0.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:0.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:0.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:0.3125em;padding:0.625em 1.1em;transition:box-shadow 0.1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:0.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112, 102, 224, 0.5)}.swal2-styled.swal2-deny{border:0;border-radius:0.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220, 55, 65, 0.5)}.swal2-styled.swal2-cancel{border:0;border-radius:0.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110, 120, 129, 0.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100, 150, 200, 0.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:0.25em;background:rgba(0, 0, 0, 0.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color 0.1s, box-shadow 0.1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100, 150, 200, 0.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em 0.3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color 0.1s, box-shadow 0.1s;border:1px solid #d9d9d9;border-radius:0.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 0.75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:0.75em}.swal2-select{min-width:50%;max-width:100%;padding:0.375em 0.625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 0.6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 0.4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:0.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:'!';display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 0.625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto 0.6em;border:0.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^='swal2-x-mark-line']{display:block;position:absolute;top:2.3125em;width:2.9375em;height:0.3125em;border-radius:0.125em;background-color:#f27474}.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left']{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right']{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon 0.5s;animation:swal2-animate-error-icon 0.5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark 0.5s;animation:swal2-animate-error-x-mark 0.5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon 0.5s;animation:swal2-animate-error-icon 0.5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark 0.5s;animation:swal2-animate-i-mark 0.5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon 0.5s;animation:swal2-animate-error-icon 0.5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark 0.8s;animation:swal2-animate-i-mark 0.8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon 0.5s;animation:swal2-animate-error-icon 0.5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark 0.8s;animation:swal2-animate-question-mark 0.8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^='swal2-success-circular-line']{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left']{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right']{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:0.25em solid rgba(165, 220, 134, 0.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:0.5em;left:1.625em;width:0.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^='swal2-success-line']{display:block;position:absolute;z-index:2;height:0.3125em;border-radius:0.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip']{top:2.875em;left:0.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^='swal2-success-line'][class$='long']{top:2.375em;right:0.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip 0.75s;animation:swal2-animate-success-line-tip 0.75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long 0.75s;animation:swal2-animate-success-line-long 0.75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:0.4em;margin:0 -1px;background:#2778c4}[class^='swal2']{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show 0.3s;animation:swal2-show 0.3s}.swal2-hide{-webkit-animation:swal2-hide 0.15s forwards;animation:swal2-hide 0.15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:0.5625em;left:0.0625em;width:0}54%{top:0.125em;left:0.125em;width:0}70%{top:0.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:0.75em;width:0.5em}100%{top:1.125em;left:0.1875em;width:0.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:0.5625em;left:0.0625em;width:0}54%{top:0.125em;left:0.125em;width:0}70%{top:0.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:0.75em;width:0.5em}100%{top:1.125em;left:0.1875em;width:0.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:0.9375em;width:0}84%{top:0.9375em;right:0;width:1.125em}100%{top:0.9375em;right:0.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:0.9375em;width:0}84%{top:0.9375em;right:0;width:1.125em}100%{top:0.9375em;right:0.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:0.0625em;width:0}54%{top:1.0625em;left:0.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:0.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:0.0625em;width:0}54%{top:1.0625em;left:0.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:0.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:0.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:0.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:0.4}50%{transform:rotateZ(15deg);opacity:0.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:0.4}50%{transform:rotateZ(15deg);opacity:0.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:transparent !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0, 0, 0, 0.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true']{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}`;

    async function lateStart(site, begin = 1) {
        const manga = await site.run();
        logScript('LateStart');
        const options = {
            title: 'Starting<br>MangaOnlineViewer',
            input: 'range',
            inputAttributes: {
                min: '1',
                max: manga.pages.toString(),
                step: '1',
            },
            inputValue: begin || 1,
            text: 'Choose the Page to start from:',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            reverseButtons: true,
            icon: 'question',
        };
        Swal.fire(options).then((result) => {
            if (result.value) {
                logScript(`Choice: ${result.value}`);
                formatPage(manga, result.value - 1);
            }
            else {
                logScript(result.dismiss);
            }
        });
    }
    function createLateStartButton(site, beginning) {
        const button = document.createElement('button');
        button.innerText = 'Start MangaOnlineViewer';
        button.id = 'StartMOV';
        button.onclick = () => {
            lateStart(site, beginning);
        };
        document.body.appendChild(button);
        // language=CSS
        const css = `
#StartMOV {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    padding: 10px 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10000;
}

#StartMOV:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
    outline: none;
}

`;
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        logScript('Start Button added to page', button);
    }
    // Organize the site adding place-holders for the manga pages
    function preparePage(site, manga, begin = 0) {
        logScript(`Found Pages: ${manga.pages}`);
        if (manga.pages > 0) {
            let beginning = begin;
            if (beginning === 0) {
                beginning = settings$1?.bookmarks?.find((b) => b.url === window.location.href)?.page || 0;
            }
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(sweetalertStyle));
            document.body.appendChild(style);
            // window.mov = (b: number) => lateStart(site, b || beginning);
            switch (site.start || settings$1?.loadMode) {
                case 'never':
                    createLateStartButton(site, beginning);
                    break;
                case 'always':
                    formatPage(manga, 0);
                    break;
                case 'wait':
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
                        }
                        else {
                            createLateStartButton(site, beginning);
                            logScript(result.dismiss);
                        }
                    });
                    break;
            }
        }
    }
    // Wait for something on the site to be ready before executing the script
    async function waitExec(site, waitElapsed = 0) {
        if (waitElapsed >= (site.waitMax || 5000)) {
            preparePage(site, await site.run());
            return;
        }
        if (site.waitAttr !== undefined) {
            const wait = document.querySelector(site.waitAttr[0])?.getAttribute(site.waitAttr[1]);
            if (isNothing(wait)) {
                logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
                setTimeout(() => {
                    waitExec(site, waitElapsed + (site.waitStep || 1000));
                }, site.waitStep || 1000);
                return;
            }
            logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
        }
        if (site.waitEle !== undefined) {
            const wait = document.querySelector(site.waitEle);
            if (isNothing(wait?.tagName)) {
                logScript(`Waiting for Element ${site.waitEle} = `, wait);
                setTimeout(() => {
                    waitExec(site, waitElapsed + (site.waitStep || 1000));
                }, site.waitStep || 1000);
                return;
            }
            logScript(`Found Element ${site.waitEle} = `, wait);
        }
        if (site.waitVar !== undefined) {
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            const wait = W[site.waitVar];
            if (isNothing(wait)) {
                logScript(`Waiting for Variable ${site.waitVar} = ${wait}`);
                setTimeout(() => {
                    waitExec(site, waitElapsed + (site.waitStep || 1000));
                }, site.waitStep || 1000);
                return;
            }
            logScript(`Found Variable ${site.waitVar} = ${wait}`);
        }
        preparePage(site, await site.run());
    }
    // Script Entry point
    function start(sites) {
        logScript(`Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`);
        // window.InfoGM = getInfoGM;
        logScript(`${sites.length} Known Manga Sites, Looking for a match...`);
        const site = sites.find((s) => s.url.test(window.location.href));
        if (site) {
            logScript(`Found site: ${site.name}`);
            waitExec(site);
        }
        else {
            logScript(`Sorry, didnt find any valid site`);
        }
    }

    start(sites);

})();
