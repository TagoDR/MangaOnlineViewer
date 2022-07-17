// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Asura Scans, Flame Scans, Realm Scans, Batoto, ComiCastle, Dynasty-Scans, Leitor, LHTranslation, MangaDex, MangaFox, MangaHere, MangaFreak, mangahosted, MangaHub, MangaKakalot, MangaNelo, MangaNato, MangaPark, Mangareader, MangaSee, Manga4life, MangaTown, NineManga, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, SenManga(Raw), TenManga, TuMangaOnline, UnionMangas, Manga33, FoOlSlide, Kireicake, Yuri-ism, Sense-Scans, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, ReaperScans, JaiminisBox, DisasterScans
// @version 2022.07.17
// @license MIT
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.2/tinycolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.23/sweetalert2.min.js
// @include /https?:\/\/(www.)?(asurascans|flamescans|realmscans).(com|org)\/.+/
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
        name: ['Asura Scans', 'Flame Scans', 'Realm Scans'],
        url: /https?:\/\/(www.)?(asurascans|flamescans|realmscans).(com|org)\/.+/,
        homepage: ['https://www.asurascans.com/', 'https://flamescans.org/', 'https://realmscans.com/'],
        language: ['English'],
        category: 'manga',
        waitEle: '#chapter option:nth-child(2)',
        run() {
            const chapter = document.querySelector('#chapter option:checked');
            const images = [...document.querySelectorAll('#readerarea img')];
            return {
                title: document.querySelector('.entry-title')?.textContent?.trim(),
                series: document.querySelector('.allc a')?.getAttribute('href'),
                pages: images.length,
                prev: chapter?.nextElementSibling?.getAttribute('value'),
                next: chapter?.previousElementSibling?.getAttribute('value'),
                listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
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

    function svgToUrl(str) {
        const cleaned = str
            .replace(/[\t\n\r]/gim, '') // Strip newlines and tabs
            .replace(/\s\s+/g, ' ') // Condense multiple spaces
            .replace(/'/gim, '\\i'); // Normalize quotes
        const encoded = encodeURIComponent(cleaned)
            .replace(/\(/g, '%28') // Encode brackets
            .replace(/\)/g, '%29');
        return `data:image/svg+xml;charset=UTF-8,${encoded}`;
    }

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
   <path color="gold" d="M12 17v-6"></path>
   <path color="gold" d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
</svg>`;
    const IconLoader2 = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2 inverse animate-spin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 3a9 9 0 1 0 9 9"></path>
</svg>`;
    const IconCategory = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4h6v6h-6z"></path>
   <path d="M14 4h6v6h-6z"></path>
   <path d="M4 14h6v6h-6z"></path>
   <circle cx="17" cy="17" r="3"></circle>
</svg>`;
    // Icons for Global Controls
    const IconX = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="18" y1="6" x2="6" y2="18"></line>
   <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;
    const IconMenu2 = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="4" y1="6" x2="20" y2="6"></line>
   <line x1="4" y1="12" x2="20" y2="12"></line>
   <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>`;
    const IconArrowAutofitWidth = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
   <path color="yellow" d="M10 18h-7"></path>
   <path color="yellow" d="M21 18h-7"></path>
   <path color="yellow" d="M6 15l-3 3l3 3"></path>
   <path color="yellow" d="M18 15l3 3l-3 3"></path>
</svg>`;
    const IconArrowAutofitHeight = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
   <path color="yellow" d="M18 14v7"></path>
   <path color="yellow" d="M18 3v7"></path>
   <path color="yellow" d="M15 18l3 3l3 -3"></path>
   <path color="yellow" d="M15 6l3 -3l3 3"></path>
</svg>`;
    const IconZoomInArea = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path color="lime" d="M15 13v4"></path>
   <path color="lime" d="M13 15h4"></path>
   <circle cx="15" cy="15" r="5"></circle>
   <path d="M22 22l-3 -3"></path>
   <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path>
   <path d="M3 11v-1"></path>
   <path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path>
   <path d="M10 3h1"></path>
   <path d="M15 3h1a2 2 0 0 1 2 2v1"></path>
</svg>`;
    const IconZoomOutArea = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path color="red" d="M13 15h4"></path>
   <circle cx="15" cy="15" r="5"></circle>
   <path d="M22 22l-3 -3"></path>
   <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path>
   <path d="M3 11v-1"></path>
   <path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path>
   <path d="M10 3h1"></path>
   <path d="M15 3h1a2 2 0 0 1 2 2v1"></path>
</svg>`;
    const IconZoomPan = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="3"></circle>
   <path d="M17 17l-2.5 -2.5"></path>
   <path color="#9966FF" d="M10 5l2 -2l2 2"></path>
   <path color="#9966FF" d="M19 10l2 2l-2 2"></path>
   <path color="#9966FF" d="M5 10l-2 2l2 2"></path>
   <path color="#9966FF" d="M10 19l2 2l2 -2"></path>
</svg>`;
    const IconArrowAutofitDown = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path>
   <path color="#28FFBF" d="M18 4v17"></path>
   <path color="#28FFBF" d="M15 18l3 3l3 -3"></path>
</svg>`;
    const IconArrowAutofitLeft = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"></path>
   <path color="#28FFBF" d="M20 18h-17"></path>
   <path color="#28FFBF" d="M6 15l-3 3l3 3"></path>
</svg>`;
    const IconArrowAutofitRight = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"></path>
   <path color="#28FFBF" d="M4 18h17"></path>
   <path color="#28FFBF" d="M18 15l3 3l-3 3"></path>
</svg>`;
    const IconSettings = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
   <circle cx="12" cy="12" r="3"></circle>
</svg>`;
    const IconKeyboard = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <rect x="2" y="6" width="20" height="12" rx="2"></rect>
   <line x1="6" y1="10" x2="6" y2="10"></line>
   <line x1="10" y1="10" x2="10" y2="10"></line>
   <line x1="14" y1="10" x2="14" y2="10"></line>
   <line x1="18" y1="10" x2="18" y2="10"></line>
   <line x1="6" y1="14" x2="6" y2="14.01"></line>
   <line x1="18" y1="14" x2="18" y2="14.01"></line>
   <line x1="10" y1="14" x2="14" y2="14"></line>
</svg>`;
    const IconListNumbers = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11 6h9"></path>
   <path d="M11 12h9"></path>
   <path d="M12 18h8"></path>
   <path color="#E48900" d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path>
   <path color="#E48900" d="M6 10v-6l-2 2"></path>
</svg>`;
    const IconBookmarks = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path color="orange" d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z"></path>
   <path color="orange" d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6"></path>
</svg>`;
    const IconExternalLink = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
   <line x1="10" y1="14" x2="20" y2="4"></line>
   <polyline points="15 4 20 4 20 9"></polyline>
</svg>`;
    const IconTrash = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="4" y1="7" x2="20" y2="7"></line>
   <line x1="10" y1="11" x2="10" y2="17"></line>
   <line x1="14" y1="11" x2="14" y2="17"></line>
   <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
   <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>`;
    const IconSun = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="4"></circle>
   <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
</svg>`;
    const IconMoon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon inverse" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
</svg>`;
    const IconCheck = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 12l5 5l10 -10"></path>
</svg>`;
    const IconPalette = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
   <circle cx="7.5" cy="10.5" r=".5" fill="currentColor"></circle>
   <circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle>
   <circle cx="16.5" cy="10.5" r=".5" fill="currentColor"></circle>
</svg>`;
    // Icons for Page Controls
    const IconBookmark = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path color="orange" stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path color="orange" d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
</svg>`;
    const IconBookmarkOff = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off inverse" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path color="orange" stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line color="red" x1="3" y1="3" x2="21" y2="21"></line>
   <path color="orange" d="M17 17v3l-5 -3l-5 3v-13m1.178 -2.818c.252 -.113 .53 -.176 .822 -.176h6a2 2 0 0 1 2 2v7"></path>
</svg>`;
    const IconEye = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="2"></circle>
   <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
</svg>`;
    const IconEyeOff = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off inverse" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line color="red" x1="3" y1="3" x2="21" y2="21"></line>
   <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
   <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
</svg>`;
    const IconZoomCancel = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="10" cy="10" r="7"></circle>
   <line color="#9966FF" x1="8" y1="8" x2="12" y2="12"></line>
   <line color="#9966FF" x1="12" y1="8" x2="8" y2="12"></line>
   <line x1="21" y1="21" x2="15" y2="15"></line>
</svg>`;
    const IconZoomIn = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="10" cy="10" r="7"></circle>
   <line color="lime" x1="7" y1="10" x2="13" y2="10"></line>
   <line color="lime" x1="10" y1="7" x2="10" y2="13"></line>
   <line x1="21" y1="21" x2="15" y2="15"></line>
</svg>`;
    const IconZoomOut = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="10" cy="10" r="7"></circle>
   <line color="red" x1="7" y1="10" x2="13" y2="10"></line>
   <line x1="21" y1="21" x2="15" y2="15"></line>
</svg>`;
    const IconRefresh = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path color='cyan' d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
   <path color='cyan' d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
</svg>`;
    const IconPhoto = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path color="silver" stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line color="silver" x1="15" y1="8" x2="15.01" y2="8"></line>
   <rect color="silver" x="4" y="4" width="16" height="16" rx="3"></rect>
   <path color="silver" d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
   <path color="silver" d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
</svg>`;
    const IconPhotoOff = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path color="silver" stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line color="silver" x1="15" y1="8" x2="15.01" y2="8"></line>
   <path color="silver" d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9"></path>
   <path color="silver" d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5"></path>
   <line color="orange" x1="3" y1="3" x2="21" y2="21"></line>
   <path color="silver" d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2"></path>
</svg>`;

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
        indigo: {
            name: 'purple',
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

    // language=CSS
    var cssStyles = `
:root,
.dark,
.dark .default,
[data-theme='dark'] {
  --theme-body-background: ${colors.dark['600']};
  --theme-body-text-color: ${colors.dark['50']};
  --theme-text-color: ${colors.dark['50']};
  --theme-primary-color: ${colors.dark['700']};
  --theme-primary-text-color: ${colors.dark['50']};
  --theme-background-color: ${colors.dark['600']};
  --theme-hightlight-color: ${colors.dark['500']};
  --theme-border-color: ${colors.dark['400']};
}
.light,
.light .default,
[data-theme='light'] {
  --theme-body-background: ${colors.gray['50']};
  --theme-body-text-color: ${colors.gray['900']};
  --theme-text-color: ${colors.gray['900']};
  --theme-primary-color: ${colors.gray['300']};
  --theme-primary-text-color: ${colors.gray['900']};
  --theme-background-color: ${colors.gray['50']};
  --theme-hightlight-color: ${colors.gray['500']};
  --theme-border-color: ${colors.gray['100']};
}
/*  Simple Normalizer */
html {
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
a,
a:link,
a:visited,
a:active,
a:focus {
  color: var(--theme-body-text-color);
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
  width:100%;
  height:100%;
  text-decoration:none;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
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

#MangaOnlineViewer #Chapter.DoublePage .MangaPage:not(.DoublePage):nth-child(2n) {
  justify-self: flex-start;
}

#MangaOnlineViewer #Chapter.DoublePage .MangaPage:not(.DoublePage):nth-child(2n-1) {
  justify-self: flex-end;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage,
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidLTR {
  direction: ltr;
}

#MangaOnlineViewer #Chapter.FluidRTL {
  direction: rtl;
}

#MangaOnlineViewer #Chapter.FluidLTR .ZoomWidth .icon-tabler,
#MangaOnlineViewer #Chapter.FluidRTL .ZoomWidth .icon-tabler {
  color: red;
}

#MangaOnlineViewer #SettingsPanel {
  color: var(--theme-text-color);
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  transform: translateX(-100%);
  display: flex;
  flex-flow: column;
  gap: 5px;
  height: 100%;
  max-width: 100vw;
  width: 305px;
}

#MangaOnlineViewer #SettingsPanel.visible {
  transform: translateX(0);
}

#MangaOnlineViewer #SettingsPanel .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {
  display: none;
}

#MangaOnlineViewer #ThemeSection{
  border: 1px solid var(--theme-body-text-color);
  border-radius: 10px;
  padding: 10px;
}

#MangaOnlineViewer .closeButton {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 10px;
}

#MangaOnlineViewer .overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 950;
  cursor: pointer;
}
#MangaOnlineViewer .overlay.visible {
  display: block;
}

#MangaOnlineViewer .ThemeRadio {
  border: 1px solid var(--theme-text-color);
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 1px;
  margin: 2px 5px;
  position: relative;
}

#MangaOnlineViewer .ThemeRadio svg{
  position: absolute;
  top: 15%;
  right: 15%;
}

#MangaOnlineViewer .ThemeRadio.custom{
  /*background-image: url("${svgToUrl(IconPalette)}");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: 80%;*/
}

#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {
  display: inline;
}

#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {
  display: none;
}

#MangaOnlineViewer #KeybindingsPanel {
  padding: 8px;
  position: fixed;
  top: 65px;
  right: 0;
  transition: transform 0.3s ease-in-out;;
  transform: translateX(100%);
  /*display: none;*/
  line-height: 1.5em;
}

#MangaOnlineViewer #KeybindingsPanel.visible {
  transform: translateX(0);
  display: block;
}

#MangaOnlineViewer #BookmarksPanel {
  position: fixed;
  top: 10%;
  width: 50%;
  left: 25%;
  right: 25%;
  text-align: center;
  max-height: 70%;
  transition: transform 0.3s ease-in-out;;
  transform: scaleY(0%);
  z-index: 1000;
}

#MangaOnlineViewer #BookmarksPanel.visible {
  transform: scaleY(100%);
  display: block;
}

#MangaOnlineViewer #BookmarksList {
  padding: 0 15px;
  overflow: auto;
  max-height: 60vh;
}

#MangaOnlineViewer #BookmarksList .BookmarkItem {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}

#MangaOnlineViewer #BookmarksList .bookmarkData {
  flex-basis: 15%;
}

#MangaOnlineViewer #BookmarksList .bookmarkURl {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-basis: 55%;
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
  padding: 2px;
  min-height: 32px;
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  border-color: var(--theme-border-color);  
}

#MangaOnlineViewer .ControlButton:hover {
  opacity: 0.8;
}

#MangaOnlineViewer .panel {
  padding: 5px;
  position: inherit;
  border-radius: 5px;
  background-color: var(--theme-background-color);
}

#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  /*transform: translate3d(0, 0, 0);*/
  /*backface-visibility: hidden;*/
  /*perspective: 1000px;*/
  line-height: 0;
  min-height: 22px;
  min-width: 100%;
}

#MangaOnlineViewer .PageContent {
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  height: 100%;
  overflow-y: hidden;
}

#MangaOnlineViewer .MangaPage.hide .PageContent {
  /*display: none;*/
  height: 0;
}

#MangaOnlineViewer .MangaPage.hide .PageFunctions {
  /*position:relative;*/
}

#MangaOnlineViewer .PageContent .PageImg[src=""],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhoto)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageContent .PageImg.imgBroken {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhotoOff)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
  width: 100px;
  height: 150px;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhoto)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
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
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in;
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

#MangaOnlineViewer #Header.mouseOverMenu:hover {
  position: sticky;
}

#MangaOnlineViewer #Header:not(.mouseOverMenu) #menu,
#MangaOnlineViewer #Header.mouseOverMenu:hover #menu {
  display: none;
}

#MangaOnlineViewer #menu {
  position: fixed;
  min-height: 70px;
  width: 100%;
  top: 0;
  z-index: 1;
  color: var(--theme-body-text-color);
}

#MangaOnlineViewer #MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

#MangaOnlineViewer #GlobalFunctions{
  display: flex;
  gap: 3px;
  padding-left:10px;
  flex-wrap: wrap;
  width: 300px;
  z-index: 100;
}

#MangaOnlineViewer #GlobalFunctions .icon-tabler{
  width: 25px;
  height: 25px;
}

#MangaOnlineViewer #ChapterNavigation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
  padding-right: 10px;
  width: 300px;
}

#MangaOnlineViewer .ChapterControl {
  display: flex;
  flex-wrap: nowrap;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton {
  display: inline-flex;
  margin-left: 3px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 0.5em;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton .icon-tabler {
  flex-shrink: 0;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton[href="#"],
#MangaOnlineViewer .ChapterControl .NavigationControlButton[href=""] {
  visibility: hidden;
}

#MangaOnlineViewer .ChapterControl .download.loading{
  cursor: not-allowed;
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  /*max-width: 500px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  flex-basis: 60%;
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
  position: absolute;
  right: 0;
  direction: ltr;
}

#MangaOnlineViewer .PageFunctions > .PageIndex {
  background-color: var(--theme-primary-color);
  color: var(--theme-primary-text-color);
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 3px 5px;
  line-height: 1rem;
  border-radius: 5px;
  border-top-right-radius: 5px;
  border-top-right-radius: 0;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-width: 0;
  min-height: auto;
  opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
  opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
  opacity: 0.9;
}

#MangaOnlineViewer.light #ColorScheme > :not(.inverse),
#MangaOnlineViewer:not(.light) #ColorScheme > .inverse,
#MangaOnlineViewer .ChapterControl .download.loading > :not(.inverse),
#MangaOnlineViewer .ChapterControl .download:not(.loading) > .inverse,
#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide  > .inverse,
#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide  > :not(.inverse),
#MangaOnlineViewer.bookmarked .ControlButton.Bookmark  > :not(.inverse),
#MangaOnlineViewer:not(.bookmarked) .ControlButton.Bookmark  > .inverse {
  display: none;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  visibility: hidden;
}

#MangaOnlineViewer #NavigationCounters {
  margin: 5px;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  bottom: -180px;
  height: 185px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 0rem;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
  margin-right: 10px;
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
  border: 1px solid var(--theme-primary-color);
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  display: block;
  opacity: 0.8;
  position: relative;
  bottom: 25%;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {
  cursor: pointer;
  display: inline-block;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}

#MangaOnlineViewer #menu .icon-tabler {
  position: absolute;
  top: 5px;
  left: 10px;
  height: 32px;
  width: 32px;
}

@media (max-width: 992px) {
  #MangaOnlineViewer #Header {
      flex-direction: column;
  }

  #MangaOnlineViewer #Header.mouseOverMenu {
    position: sticky;
    transition: transform 0.3s ease-in;
  }

  #MangaOnlineViewer #Header.scroll-show {
    transform: translateY(-1%);
  }

  #MangaOnlineViewer #Header.scroll-hide {
    transform: translateY(-100%);
  }
  
  #MangaOnlineViewer .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    min-height: auto;
    padding: 0px;
    margin: 0px;
  }
  
  #MangaOnlineViewer #GlobalFunctions {
    flex-wrap: nowrap;
    padding: 0;
    width: auto;
    order: 3;
    padding: 5px;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 2;
  }
  
  #MangaOnlineViewer #menu {
    display: none;
  }
}
/* Small devices (landscape phones) */
@media (max-width: 600px) {
  #MangaOnlineViewer #Header {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  #MangaOnlineViewer #Header.mouseOverMenu {
    position: sticky;
    transition: transform 0.3s ease-in;
  }
  
  #MangaOnlineViewer #Header.scroll-show {
    transform: translateY(-1%);
  }
  
  #MangaOnlineViewer #Header.scroll-hide {
    transform: translateY(-100%);
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    flex-basis: 100%;
    margin-top: 0px;
  }

  #MangaOnlineViewer #GlobalFunctions {
    order: 2;
    padding: 0;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 3;
    width: auto;
  }

  #MangaOnlineViewer #Navigation {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions {
    padding: 0;
  }

  #MangaOnlineViewer .PageFunctions .ControlButton:not(.Bookmark) {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions .ControlButton.Bookmark {
    opacity: 1;
  }

  #MangaOnlineViewer .PageContent {
    margin: 0;
    width: 100%;
  }

  #MangaOnlineViewer .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer #GlobalFunctions .ControlButton:not(#settings) {
    display: none;
  }

  #MangaOnlineViewer #GlobalFunctions {
    min-width: auto;
  }

  #MangaOnlineViewer #SettingsPanel .DefaultZoom,
  #MangaOnlineViewer #SettingsPanel .viewMode,
  #MangaOnlineViewer #SettingsPanel .fitIfOversize,
  #MangaOnlineViewer #SettingsPanel .showThumbnails,
  #MangaOnlineViewer #SettingsPanel .lazyLoadImages,
  #MangaOnlineViewer #SettingsPanel .downloadZip,
  #MangaOnlineViewer #SettingsPanel .minZoom,
  #MangaOnlineViewer #SettingsPanel .zoomStep,
  #MangaOnlineViewer #SettingsPanel .mouseOverMenu {
    display: none;
  }

  #MangaOnlineViewer #KeybindingsPanel {
    display: none;
  }  

  #MangaOnlineViewer #menu {
    display: none;
  }
  
  #MangaOnlineViewer .ViewerTitle {
    height: auto;
    padding: 0;
  }

  #MangaOnlineViewer .ChapterControl {
  }

  #MangaOnlineViewer .ChapterControl .download {
    display: none;
  }

  #MangaOnlineViewer #Counters {
    display: none;
  }
}

@-webkit-keyframes spin {
  to {
    transform:rotate(360deg)
  }
}
@keyframes spin {
  to {
    transform:rotate(360deg)
  }
}
.animate-spin {
  -webkit-animation:spin 1s linear infinite;
  animation:spin 1s linear infinite
}
@-webkit-keyframes spin-reverse {
  0% {
    transform:rotate(360deg)
  }
  to {
    transform:rotate(0)
  }
}
@keyframes spin-reverse {
  0% {
    transform:rotate(360deg)
  }
  to {
    transform:rotate(0)
  }
}
.animate-spin-reverse {
  -webkit-animation:spin-reverse 1s linear infinite;
  animation:spin-reverse 1s linear infinite
}
`;

    // Configuration
    const settings$1 = {
        theme: getValueGM('Theme', 'darkblue'),
        customTheme: getValueGM('CustomTheme', '#263e3a'),
        themeShade: getValueGM('ThemeShade', 600),
        colorScheme: getValueGM('ColorScheme', 'dark'),
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
        mouseOverMenu: getValueGM('MouseOverMenu', true),
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
    function wrapStyle(id, css) {
        return `<style type='text/css' id='${id}'>${css}</style>`;
    }

    function generateThemeCSS(name, primary, text) {
        // language=CSS
        return `
.${name},
[data-theme='${name}'] {
  --theme-primary-color: ${primary};
  --theme-primary-text-color: ${text};
}
`;
    }
    function getNormalThemeCSS(theme) {
        return generateThemeCSS(theme.name, theme[settings$1.themeShade], settings$1.themeShade < 500 ? theme['900'] : theme['50']);
    }
    function getCustomThemeCSS(hex) {
        return generateThemeCSS('custom', hex, getTextColor(hex));
    }
    // Add custom Themes to the page
    function addTheme(theme) {
        return wrapStyle(theme.name, getNormalThemeCSS(theme));
    }
    function addCustomTheme(hex) {
        replaceStyleSheet('custom', getCustomThemeCSS(hex));
    }
    const themes = () => Object.values(colors);
    // Object.values({ ...colors, custom: customColor(settings.customTheme) });
    const themesSelector = [...Object.keys(colors).map((color) => colors[color].name)].map((theme) => `
<span class='${theme} ThemeRadio ${settings$1.theme === theme ? 'selected' : ''}'
      title='${theme}'      
>
${IconCheck}
</span>
`);
    function refreshThemes() {
        themes().forEach((theme) => replaceStyleSheet(theme.name, getNormalThemeCSS(theme)));
        replaceStyleSheet('custom', getCustomThemeCSS(settings$1.customTheme));
    }
    const themesCSS = themes().map(addTheme).join('') + wrapStyle('custom', getCustomThemeCSS(settings$1.customTheme));

    // https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.20/sweetalert2.css
    // .swal2-title -> #swal2-title
    // language=CSS
    const sweetalert = `.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast #swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}#swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}`;
    // https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css
    // language=CSS
    const normalize = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`;
    // https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css
    // language=CSS
    const nprogress = `#nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
    // https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css
    // language=CSS
    const keycss = `.key,kbd{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:0.3em 0.4em 0.2em 0.3em;font-style:normal;font-family:"Lucida Grande", Lucida, Arial, sans-serif;text-align:center;text-decoration:none;border-radius:0.3em;border:none;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-webkit-box-shadow:inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);box-shadow:inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);font-size:0.85em;line-height:1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.key[title],kbd[title]{cursor:help}.dark-keys .key,.dark-keys kbd,.key.dark,kbd.dark{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:0.3em 0.4em 0.2em 0.3em;font-style:normal;font-family:"Lucida Grande", Lucida, Arial, sans-serif;text-align:center;text-decoration:none;border-radius:0.3em;border:none;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-webkit-box-shadow:inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);box-shadow:inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3)}.key.light,.light-keys .key,.light-keys kbd,kbd.light{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:0.3em 0.4em 0.2em 0.3em;font-style:normal;font-family:"Lucida Grande", Lucida, Arial, sans-serif;text-align:center;text-decoration:none;border-radius:0.3em;border:none;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));color:#323232;text-shadow:0 0 2px #ffffff;-webkit-box-shadow:inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);box-shadow:inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9)}.key.so,.so-keys .key,.so-keys kbd,kbd.so{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:0.3em 0.4em 0.2em 0.3em;font-style:normal;font-family:"Lucida Grande", Lucida, Arial, sans-serif;text-align:center;text-decoration:none;border-radius:0.3em;border:none;margin:0 0.1em;padding:0.1em 0.6em;font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;line-height:1.4;color:#242729;text-shadow:0 1px 0 #FFF;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:0.27272727em;-webkit-box-shadow:0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;box-shadow:0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset}.github-keys .key,.github-keys kbd,.key.github,kbd.github{display:inline;display:inline-block;white-space:nowrap;min-width:1em;padding:0.3em 0.4em 0.2em 0.3em;font-style:normal;font-family:"Lucida Grande", Lucida, Arial, sans-serif;text-align:center;text-decoration:none;border-radius:0.3em;border:none;padding:0.27272727em 0.45454545em;font-size:68.75%;line-height:0.90909091;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:solid 1px #c6cbd1;border-bottom-color:#959da5;border-radius:0.27272727em;-webkit-box-shadow:inset 0 -1px 0 #959da5;box-shadow:inset 0 -1px 0 #959da5;font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;-webkit-box-sizing:border-box;box-sizing:border-box;text-shadow:none}`;
    var sweetalertStyle = [normalize, sweetalert, nprogress, keycss].join('\n');

    function head(manga) {
        return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
  ${wrapStyle('externals', sweetalertStyle)}
  ${wrapStyle('reader', cssStyles)}
  ${themesCSS}
  ${wrapStyle('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${settings$1.minZoom}vw;}`)}
</head>
`;
    }

    const listPages = (times) => Array(times)
        .fill(null)
        .map((_, index) => `
<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <button class='Bookmark ControlButton' title='Bookmark'>
      ${IconBookmark}
      ${IconBookmarkOff}
    </button>
    <button class='ZoomIn ControlButton' title='Zoom In'>
      ${IconZoomIn}
    </button>
    <button class='ZoomRestore ControlButton' title='Zoom Restore'>
      ${IconZoomCancel}
    </button>
    <button class='ZoomOut ControlButton' title='Zoom Out'>
      ${IconZoomOut}
    </button>
    <button class='ZoomWidth ControlButton' title='Zoom to Width'>
      ${IconArrowAutofitWidth}
    </button>
    <button class='ZoomHeight ControlButton' title='Zoom to Height'>
      ${IconArrowAutofitHeight}
    </button>
    <button class='Hide ControlButton' title='Hide'>
      ${IconEye}
      ${IconEyeOff}
    </button>
    <button class='Reload ControlButton' title='Reload'>
      ${IconRefresh}
    </button>
    <span class='PageIndex'>${index + 1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${index + 1}' alt='' class='PageImg' />
  </div>
</div>`);

    // language=html
    const SettingsPanel = `
<div id='SettingsOverlay' class='overlay'></div>
<div id='SettingsPanel' class='panel'>
  <h2>Settings</h2>
  <button id='CloseSettings' class='closeButton'>${IconX}</button>
  <button id='ResetSettings' class='simpleButton'>Reset Settings</button>
  <div id='ThemeSection'>
    <div class='ControlLabel ColorSchemeSelector'>Color Scheme:
      <button id='ColorScheme' class='simpleButton'>      
        ${IconSun}
        ${IconMoon}
      </button>
    </div>
<!-- =========================================================================================== -->
    <div class='ControlLabel ThemeSelector'>Theme:
      <span class='custom ThemeRadio 
            ${settings$1.theme === 'custom' ? 'selected' : ''}'
            title='custom'>
        ${IconPalette}
        ${IconCheck}
      </span>
      ${themesSelector.join('')}      
    </div>
<!-- =========================================================================================== -->
    <div id='Hue' class='ControlLabel CustomTheme ControlLabelItem 
          ${settings$1.theme.startsWith('custom') ? 'show' : ''}'>
          Theme Primary Color Hue:<input id='CustomThemeHue' type='color' value='${settings$1.customTheme}' class='colorpicker CustomTheme'/>
    </div>
<!-- =========================================================================================== -->
    <div id='Shade' class='ControlLabel CustomTheme ControlLabelItem
          ${settings$1.theme.startsWith('custom') ? '' : 'show'}'>
      <span>
        Theme Primary Color Shade:
        <output id='themeShadeVal' for='themeShade'>${settings$1.themeShade}</output>
      </span>
      <input type='range'
            value='${settings$1.themeShade}' 
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
  <div class='ControlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='wait' ${settings$1.loadMode === 'wait' ? 'selected' : ''}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings$1.loadMode === 'always' ? 'selected' : ''}>Always(Immediately)</option>
      <option value='never' ${settings$1.loadMode === 'never' ? 'selected' : ''}>Never(Manually)</option>
    </select>
  </div>
<!-- =========================================================================================== -->
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
<!-- =========================================================================================== -->
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
<!-- =========================================================================================== -->
  <div class='ControlLabel minZoom'>
    <span>
      Minimun Zoom relative to the width of screen (between 30 and 100):
      <output id='minZoomVal' for='minZoom'>${settings$1.minZoom}</output>
    </span>
    <input type='range' 
          value='${settings$1.minZoom}' 
          name='minZoom' 
          id='minZoom' 
          min='30' 
          max='100' 
          step='10' 
          oninput='minZoomVal.value = this.value'
    />
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel zoomStep'>
    <span>
      Zoom Change Step (between 5 and 50):
      <output id='zoomStepVal' for='zoomStep'>${settings$1.zoomStep}</output>
    </span>
    <input type='range' 
          value='${settings$1.zoomStep}' 
          name='zoomStep' 
          id='zoomStep' 
          min='5' 
          max='50' 
          step='5' 
          oninput='zoomStepVal.value = this.value'
    />
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings$1.viewMode !== 'FluidLTR' && settings$1.viewMode !== 'FluidRTL' ? 'selected' : ''}>
      Vertical
      </option>
      <option value='FluidLTR' ${settings$1.viewMode === 'FluidLTR' ? 'selected' : ''}>
      Left to Right
      </option>
      <option value='FluidRTL' ${settings$1.viewMode === 'FluidRTL' ? 'selected' : ''}>
      Right to Left
      </option>
    </select>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${settings$1.fitWidthIfOversize ? 'checked' : ''}/>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${settings$1.showThumbnails ? 'checked' : ''}/>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${settings$1.lazyLoadImages ? 'checked' : ''}/>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel lazyStart'>
    <span>
      Lazy Start From Page (between 5 and 100):
      <output id='lazyStartVal' for='lazyStart'>${settings$1.lazyStart}</output>
    </span>
    <input type='range' value='${settings$1.lazyStart}' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'/>
    
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${settings$1.downloadZip ? 'checked' : ''}/>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${settings$1.hidePageControls ? 'checked' : ''}/>
  </div>
<!-- =========================================================================================== -->
  <div class='ControlLabel mouseOverMenu'>Toggle Sticky Header / MouseOverMenu:
    <input type='checkbox' value='false' name='mouseOverMenu' id='mouseOverMenu' ${settings$1.mouseOverMenu ? 'checked' : ''}/>
  </div>
</div>
`;

    const KeybindingsPanel = `
<div id='KeybindingsPanel' class='panel'>
    <h2>Keybindings</h2>
    <button id='CloseKeybindings' class='closeButton'>${IconX}</button>
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

    const ThumbnailsPanel = (times) => Array(times)
        .fill(null)
        .map((_, index) => `
<div id='Thumbnail${index + 1}' class='Thumbnail'>
  <img id='ThumbnailImg${index + 1}' alt='' class='ThumbnailImg' src=''/>
  <span class='ThumbnailIndex'>${index + 1}</span>
</div>`);

    const listBookmarks = () => {
        if (isEmpty(settings$1.bookmarks))
            return ['List Empty'];
        return settings$1.bookmarks.map((mark, index) => `
<div id='Bookmark${index + 1}' class='BookmarkItem'>
  <span class='bookmarkData bookmarkDate'>
    ${new Date(mark.date).toLocaleDateString()}
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
    <button class='ControlButton erase' title='Delete Bookmark' type='button'
    value='${mark.url}'>
      ${IconTrash}
    </button>
  </pan>
</div>`);
    };
    const BookmarkPanel = `
<div id='BookmarksOverlay' class='overlay'></div>
<div id='BookmarksPanel' class='panel'>
  <button id='CloseBookmarks' class='closeButton'>${IconX}</button>
  <h2>Bookmarks</h2>
  <div id='BookmarksList'>
    ${listBookmarks().join('')}
  </div>
</div>
`;
    function reloadBookmarks() {
        const list = document.getElementById('BookmarksList');
        if (list) {
            list.innerHTML = listBookmarks().join('');
        }
    }

    const listOptions = (times) => Array(times)
        .fill(null)
        .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);
    const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer'
  class="${settings$1.colorScheme} ${settings$1.hidePageControls ? 'hideControls' : ''}"
  data-theme='${settings$1.theme}'>
  <header id="Header" class="${settings$1.mouseOverMenu ? 'mouseOverMenu' : ''}">
    <div id='menu'>
      ${IconMenu2}
    </div>
    <aside id='GlobalFunctions'>
      <span>
        <button id='enlarge' title='Enlarge' class='ControlButton'>${IconZoomInArea}</button>
        <button id='restore' title='Restore' class='ControlButton'>${IconZoomPan}</button>
        <button id='reduce' title='Reduce' class='ControlButton'>${IconZoomOutArea}</button>
        <button id='fitWidth' title='Fit Width' class='ControlButton'>${IconArrowAutofitWidth}</button>
        <button id='fitHeight' title='Fit Height' class='ControlButton'>${IconArrowAutofitHeight}</button>
        <button id='keybindings' title='Keybindings' class='ControlButton'>${IconKeyboard}</button>
      </span>
      <span>
        <button id='ltrMode' title='Left to Right Mode' class='ControlButton'>${IconArrowAutofitRight}</button>
        <button id='verticalMode' title='Vertical Mode' class='ControlButton'>${IconArrowAutofitDown}</button>
        <button id='rtlMode' title='Right to Left Mode' class='ControlButton'>${IconArrowAutofitLeft}</button>
        <button id='pageControls' title='Toggle Page Controls' class='ControlButton'>${IconListNumbers}</button>
        <button id='bookmarks' title='List Bookmarks' class='ControlButton'>${IconBookmarks}</button>
        <button id='settings' title='Settings' class='ControlButton'>${IconSettings}</button>
      </span>
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
        <button class='download NavigationControlButton ControlButton' title='Donwload Images Zip' type='button'>
          ${IconFileDownload}
          ${IconLoader2}
          Download
        </button>
        <button id='prev' class='prev NavigationControlButton ControlButton' title='Previos Chapter' type='button'
        onclick="window.location.href='${manga.prev || ''}';">
          ${IconArrowBigLeft}
          Previous
        </button>
        <button id='next' class='next NavigationControlButton ControlButton' title='Next Chapter' type='button'
        onclick="window.location.href='${manga.next || ''}';">
          Next
          ${IconArrowBigRight}
        </button>
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
      ${ThumbnailsPanel(manga.pages).slice(begin).join('')}
    </div>
  </nav>
  ${SettingsPanel}
  ${KeybindingsPanel}
  ${BookmarkPanel}
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
                            headers: { referer: src, origin: src },
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
                    saveAs(content, zipName);
                    const button = document.querySelector('.download');
                    button.disabled = false;
                    button.classList.remove('loading');
                })
                    .catch(logScript);
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
            document.querySelector('#SettingsPanel')?.classList.toggle('visible');
            document.querySelector('#Navigation')?.classList.toggle('visible');
            document.querySelector('#Header')?.classList.toggle('visible');
            document.querySelector('#SettingsOverlay')?.classList.toggle('visible');
        }
        document.querySelector('#settings')?.addEventListener('click', buttonSettings);
        document.querySelector('#CloseSettings')?.addEventListener('click', buttonSettings);
        document.querySelector('#SettingsOverlay')?.addEventListener('click', buttonSettings);
        // Keybindings list
        function buttonKeybindings() {
            document.querySelector('#KeybindingsPanel')?.classList.toggle('visible');
        }
        document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindings);
        document.querySelector('#CloseKeybindings')?.addEventListener('click', buttonKeybindings);
        // List of Bookmarks
        function buttonBookmarks() {
            document.querySelector('#BookmarksPanel')?.classList.toggle('visible');
            document.querySelector('#BookmarksOverlay')?.classList.toggle('visible');
        }
        document.querySelector('#bookmarks')?.addEventListener('click', buttonBookmarks);
        document.querySelector('#CloseBookmarks')?.addEventListener('click', buttonBookmarks);
        document.querySelector('#BookmarksOverlay')?.addEventListener('click', buttonBookmarks);
        function eraseBookmarks(elem) {
            elem.addEventListener('click', (event) => {
                const target = event.currentTarget.value;
                settings$1.bookmarks = settings$1.bookmarks.filter((el) => el.url !== target);
                if (target === window.location.href) {
                    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
                }
                logScript(`Bookmark Removed ${target}`);
                Swal.fire({
                    title: 'Bookmark Removed',
                    timer: 10000,
                    icon: 'error',
                });
                setValueGM('Bookmarks', JSON.stringify(settings$1.bookmarks));
                logScript(`MangaBookmarks: ${getValueGM('Bookmarks')}`);
                reloadBookmarks();
                document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
            });
        }
        document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
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
        // Fluid LTR View Mode Button
        function buttonLtrMode() {
            document.querySelector('#Chapter')?.classList.add('FluidLTR');
            document.querySelector('#Chapter')?.classList.remove('FluidRTL');
            document.querySelector('#Chapter')?.classList.add('DoublePage');
            applyZoom();
        }
        document.querySelector('#ltrMode')?.addEventListener('click', buttonLtrMode);
        // Fluid RTL View Mode Button
        function buttonRtlMode() {
            document.querySelector('#Chapter')?.classList.remove('FluidLTR');
            document.querySelector('#Chapter')?.classList.add('FluidRTL');
            document.querySelector('#Chapter')?.classList.add('DoublePage');
            applyZoom();
        }
        document.querySelector('#rtlMode')?.addEventListener('click', buttonRtlMode);
        // Vertical View Mode Button
        function buttonVerticalMode() {
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
        document.querySelector('.download')?.addEventListener('click', (event) => {
            const button = event.currentTarget;
            logScript('Downloading Chapter');
            button.disabled = true;
            button.classList.add('loading');
            generateZip();
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
        // ColorScheme Selector
        function changeColorScheme() {
            const isDark = settings$1.colorScheme === 'dark';
            settings$1.colorScheme = isDark ? 'light' : 'dark';
            setValueGM('ColorScheme', settings$1.colorScheme);
            [...document.querySelectorAll('#MangaOnlineViewer , body')].forEach((elem) => {
                elem.classList.remove(isDark ? 'dark' : 'light');
                elem.classList.add(settings$1.colorScheme);
            });
            logScript('ColorScheme', getValueGM('ColorScheme'));
        }
        document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);
        // Theme Control Selector
        function changeTheme(event) {
            const target = event.currentTarget;
            [...document.querySelectorAll('.ThemeRadio')].forEach((elem) => elem.classList.remove('selected'));
            target.classList.add('selected');
            [...document.querySelectorAll('#MangaOnlineViewer , body')].forEach((elem) => {
                elem.setAttribute('data-theme', target.title);
            });
            setValueGM('Theme', target.title);
            logScript('Theme', getValueGM('Theme'));
            const hue = document.querySelector('#Hue');
            const shade = document.querySelector('#Shade');
            if (target.title.startsWith('custom')) {
                hue?.classList.add('show');
                shade?.classList.remove('show');
            }
            else {
                hue?.classList.remove('show');
                shade?.classList.add('show');
            }
        }
        [...document.querySelectorAll('.ThemeRadio')].forEach((elem) => elem.addEventListener('click', changeTheme));
        // Custom theme Color Input
        function changeCustomTheme(event) {
            const target = event.currentTarget.value;
            logScript(`CustomTheme: ${target}`);
            settings$1.customTheme = target;
            addCustomTheme(target);
            setValueGM('CustomTheme', target);
            logScript(`CustomTheme: ${getValueGM('CustomTheme')}`);
        }
        document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
        // Theme Shade Input
        function changeThemeShade(event) {
            const target = parseInt(event.currentTarget.value, 10);
            logScript(`ThemeShade: ${target}`);
            settings$1.themeShade = target;
            refreshThemes();
            setValueGM('ThemeShade', target);
            logScript(`ThemeShade: ${getValueGM('ThemeShade')}`);
        }
        document.querySelector('#ThemeShade')?.addEventListener('change', changeThemeShade);
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
            elem.addEventListener('click', (event) => {
                document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
                const num = parseInt(event.currentTarget.parentElement?.querySelector('.PageIndex')
                    ?.textContent || '0', 10);
                const mark = {
                    url: window.location.href,
                    page: num,
                    date: Date.now(),
                };
                const found = settings$1.bookmarks.filter((el) => el.url === mark.url).length > 0;
                if (found) {
                    settings$1.bookmarks = settings$1.bookmarks.filter((el) => el.url !== mark.url);
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
                reloadBookmarks();
                document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
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
                const img = event.currentTarget.parentElement?.parentElement;
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
