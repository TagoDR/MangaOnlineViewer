# Manga OnlineViewer

## Description

Loads all pages from a chapter in a nice view, allowing for faster and more comfortable reading, without the need to wait for pages to load.

:exclamation: **Attention**: Some sites require you to reload the page(F5) or open the chapter in a new tab for the script to start.

## Installation

#### [Main Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js)

#### [Adult Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js)

#### Official Source: [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

## Supported Browsers

Firefox and Chrome with [Tampermonkey](https://tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). Other Browsers with other add-ons may also work, but not officially supported.

### Mobile Bookmarklet

_Settings can't be saved, may require to request for Desktop Page_:

Bookmarklet seems to work only in Chrome, open the chapter then use the searchbar to activate your bookmarklet.

##### Main Reader:

```JS
javascript:(function(){["https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js", "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js", "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js", "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", "https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.2/dist/hotkeys.min.js", "https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

##### Adult Reader:

```JS
javascript:(function(){["https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js", "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js", "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js", "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", "https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.2/dist/hotkeys.min.js", "https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer_Adult.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

## Supported Manga Sites

- [Asura Scans](https://beta.asurascans.com/) _[English]_
- [Batoto](http://bato.to/) _[English]_
- [BilibiliComics](https://www.bilibilicomics.com/) _[English]_
- [Dynasty-Scans](https://dynasty-scans.com/) _[English]_
- [Asura Scans](https://www.asura.gg/) / [Flame Scans](https://flamescans.org/) / [Realm Scans](https://realmscans.com/) / [Voids-Scans](https://void-scans.com/) / [Luminous Scans](https://luminousscans.com/) / [Shimada Scans](https://shimadascans.com/) / [Night Scans](https://nightscans.org/) _[English]_
- [INKR](https://inkr.com/) _[English]_
- [LHTranslation](https://lhtranslation.net/) _[English]_
- [LynxScans](https://lynxscans.com/) _[English]_
- [MangaBuddy](https://mangabuddy.com/) _[English]_
- [MangaDex](https://mangadex.org/) _[English]_
- [MangaFox](https://fanfox.net/) / [MangaHere](https://www.mangahere.cc/) _[English]_
- [MangaFreak](https://mangafreak.net/) _[English]_
- [Mangago](https://www.mangago.me/) _[English]_
- [MangaHub](https://mangahub.io/) _[English]_
- [MangaKakalot](https://mangakakalot.com/page) / [MangaNelo](https://www.manganelo.com/) / [MangaNato](https://www.manganato.com/) _[English]_
- [MangaPark](https://mangapark.net/) _[English]_
- [Mangareader](https://mangareader.to) _[English]_ **Obs: Some galleries will not be usable**
- [MangaSee](https://mangasee123.com/) / [Manga4life](https://manga4life.com/) _[English]_
- [MangaToons](https://mangatoon.mobi/) _[English]_
- [MangaTown](https://www.mangatown.com/) _[English]_
- [ManhuaScan](https://manhuascan.io/) _[English]_
- [MReader](https://www.mreader.co/) / [MangaGeko](https://www.mangageko.com/) _[English]_
- [NaniScans](https://naniscans.com/) _[English]_
- [NineManga](https://ninemanga.com/) _[English]_
- [PandaManga](https://www.pandamanga.com/) _[English]_
- [ReadManga Today](https://www.readmng.com/) / [Funmanga](https://funmanga.com/) / [MangaDoom](https://mngdoom.com/) / [MangaInn](https://www.mangainn.net/) _[English]_
- [ReaperScans](https://reaperscans.com/) _[English]_
- [KLManga](https://tapas.io/) _[English]_
- [TenManga](https://www.tenmanga.com/) _[English]_
- [WebNovel](https://www.webnovel.com/) _[English]_
- [WebToons](https://www.webtoons.com/) _[English]_
- [Manga33](https://manga33.com/) _[English]_
- [ZeroScans](https://zeroscans.com/) _[English]_
- [FoOlSlide](#) / [Kireicake](https://reader.kireicake.com) _[English]_ **Obs: Any Site that uses FoOLSlide**
- [Madara WordPress Plugin](#) / [MangaHaus](https://manhuaus.com) / [Isekai Scan](https://isekaiscan.com/) / [Comic Kiba](https://comickiba.com/) / [Zinmanga](https://zinmanga.com/) / [mangatx](https://mangatx.com/) / [Toonily](https://toonily.net/) / [Mngazuki](https://mangazuki.me/) / [JaiminisBox](https://jaiminisbox.net) / [DisasterScans](https://disasterscans.com/) / [ManhuaPlus](https://manhuaplus.com/) / [TopManhua](https://www.topmanhua.com/) / [LeviatanScans](https://en.leviatanscans.com/home/) / [NovelMic](https://novelmic.com/) / [Reset-Scans](https://reset-scans.com/) _[English]_ **Obs: Any Site that uses Madara Wordpress Plugin**
- [Leitor](https://leitor.net/) _[Portuguese]_
- [mangahosted](https://mangahosted.com/) _[Portuguese]_
- [UnionMangas](https://unionleitor.top/) _[Portuguese]_
- [KLManga](https://klmanga.com/) _[Raw]_
- [RawDevart](https://rawdevart.com) _[Raw]_
- [SenManga(Raw)](https://raw.senmanga.com/) _[Raw]_
- [InManga](https://inmanga.com//) _[Spanish]_
- [MangaTigre](https://www.mangatigre.net/) _[Spanish]_
- [OlympusScans](https://olympusscans.com/) _[Spanish]_
- [TuMangaOnline](https://lectortmo.com/) _[Spanish]_
- [YugenMangas](https://yugenmangas.com/) _[Spanish]_

## Supported Comic Sites

- [ComiCastle](http://www.comicastle.org/) _[English]_
- [ReadComicsOnline](https://readcomicsonline.ru/) _[English]_

## Supported Hentai Sites

> Adult Script available **_only_** on [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

- [BestPornComix](https://www.bestporncomix.com) _[English]_
- [DoujinMoeNM](https://doujins.com/) _[English]_
- [8Muses](https://comics.8muses.com/) _[English]_
- [ExHentai](https://exhentai.org/) / [e-Hentai](https://e-hentai.org/) _[English]_ **Obs: May get your IP Banned, use with moderation**
- [HBrowser](https://www.hbrowse.com/) _[English]_
- [Hentai2Read](https://hentai2read.com/) _[English]_
- [HentaiFox](https://www.hentaifox.com/) _[English]_
- [HentaiHand](https://hentaihand.com/) / [nHentai.com](https://nhentai.com) _[English]_
- [HentaIHere](https://www.hentaihere.com/) _[English]_
- [hitomi](https://hitomi.la/) _[English]_
- [Imhentai](https://imhentai.xxx/) _[English]_
- [KingComix](https://kingcomix.com/) _[English]_
- [Luscious](https://luscious.net/) _[English]_
- [MultPorn](https://multporn.net/) _[English]_
- [MyHentaiGallery](https://www.myhentaigallery.com) _[English]_
- [Nana](https://nana.my.id/) _[English]_
- [nHentai.net](https://nhentai.net/) / [nHentai.xxx](https://nhentai.xxx/) / [lhentai](https://lhentai.com/) _[English]_
- [9Hentai](https://9hentai.to) _[English]_
- [OmegaScans](https://omegascans.org/) _[English]_
- [PornComixOnline](https://www.porncomixone.net) _[English]_
- [Pururin](https://pururin.to/) _[English]_
- [Simply-Hentai](https://simply-hentai.com/) _[English]_
- [ksk.moe](https://ksk.moe/) / [Sukebe.moe](https://sukebe.moe/) _[English]_ **Obs: Slow start, bruteforce required**
- [3Hentai](https://3hentai.net/) _[English]_
- [Tsumino](http://tsumino.com/) _[English]_
- [XlecxOne](https://xlecx.one/) _[English]_
- [xyzcomics](https://xyzcomics.com/) _[English]_
- [Madara WordPress Plugin](#) / [AllPornComic](https://allporncomic.com/) _[English]_ **Obs: Any Site that uses Madara Wordpress Plugin**
- [wnacg](https://wnacg.com/) _[English,Raw,Chinese]_
- [GNTAI.net](https://www.gntai.net/) _[Spanish]_
- [TMOHentai](https://tmohentai.com/) _[Spanish]_
- [vermangasporno](https://vermangasporno.com/) / [vercomicsporno](https://vercomicsporno.com/) _[Spanish]_

## HotKeys

-   <span>Scroll Up:</span> <span><kbd class="dark">up</kbd> / <kbd class="dark">W</kbd> / <kbd class="dark">num_8</kbd></span>
-   <span>Scroll Down:</span> <span><kbd class="dark">down</kbd> / <kbd class="dark">S</kbd> / <kbd class="dark">num_2</kbd></span>
-   <span>Next Chapter:</span> <span><kbd class="dark">right</kbd> / <kbd class="dark">/</kbd> / <kbd class="dark">D</kbd> / <kbd class="dark">num_6</kbd></span>
-   <span>Previous Chapter:</span> <span><kbd class="dark">left</kbd> / <kbd class="dark">;</kbd> / <kbd class="dark">A</kbd> / <kbd class="dark">num_4</kbd></span>
-   <span>Enlarge:</span> <span><kbd class="dark">-</kbd> / <kbd class="dark">num_add</kbd> / <kbd class="dark">E</kbd></span>
-   <span>Restore:</span> <span><kbd class="dark">=</kbd> / <kbd class="dark">num_subtract</kbd> / <kbd class="dark">Q</kbd></span>
-   <span>Restore:</span> <span><kbd class="dark">9</kbd> / <kbd class="dark">num_divide</kbd> / <kbd class="dark">R</kbd></span>
-   <span>Fit Width:</span> <span><kbd class="dark">0</kbd> / <kbd class="dark">num_multiply</kbd> / <kbd class="dark">F</kbd></span>
-   <span>Fit Height:</span> <span><kbd class="dark">H</kbd></span>
-   <span>Settings:</span> <span><kbd class="dark">num_divide</kbd> / <kbd class="dark">num_5</kbd> / <kbd class="dark">X</kbd></span>
-   <span>WebComic:</span> <span><kbd class="dark">C</kbd></span>
-   <span>Vertical:</span> <span><kbd class="dark">V</kbd></span>
-   <span>Left to Right:</span> <span><kbd class="dark">N</kbd></span>
-   <span>Right to Left:</span> <span><kbd class="dark">B</kbd></span>

## Features

-   View Modes:
    -   Vertical/WebComic [Default]
    -   Fluid Left to Right
    -   Fluid Right to Left
-   Bookmark Pages (To resume reading)
-   Full Themes and Customizable
-   Global and Individual images zoom
    -   In(Global one may stretch images beyond window width)
    -   Out
    -   Restore original(Toggle fit width if oversize)
    -   Fit width
    -   Fit width if oversize[Default on]
    -   Fit Height (with scroll pages)
    -   Hide
-   Auto reload Images
    -   Counter for loaded Images
    -   Individual image reload, just in case
-   HotKeys
-   Goto Page
-   Image Loading Timer[Default 1s](Some sites require longer timers. eg.:ExHentai,e-hentai)
-   Thumbnails Navigation[Default on]
-   Download all images as ZIP File[Automatic Default off]
-   Lazy Load Images[Default off]

## Rules For adding new Manga Sites

1. The site must have rare/unique mangas (Meaning: it's not available in other sites, or is of better quality)
2. The site must be strong enough or else my script may crash it
3. The site must not be exclusive to a handful of manga titles (Meaning: no small Scanlators)

## Permissions

I allow this script to be posted or used anywhere as long as I am given credit and provided a link to this site. I allow parts of my script to be used freely.

## Disclaimer

In case the owner/admin of one of the supported sites does not want my script to run on their site, I will make it disabled by default. Forcing users to manually activate it.
