# Manga OnlineViewer
### Installation

##### [Main Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js)
##### [Adult Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js)
##### Official Source: [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

### Supported Browsers
Firefox and Chrome with [Tampermonkey](https://tampermonkey.net/).
Other Browsers with other add-ons may also work, but not officially supported.
Mobile Bookmarklet (*Settings can't be saved, may require to request for Desktop Page*):
##### Main Reader:
```
javascript:(function(){["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js", "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js", "https://cdn.jsdelivr.net/npm/sweetalert2@8.18.0/dist/sweetalert2.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js", "https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js", "https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/Manga_OnlineViewer.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```
##### Adult Reader:
```
javascript:(function(){["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js", "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js", "https://cdn.jsdelivr.net/npm/sweetalert2@8.18.0/dist/sweetalert2.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js", "https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js", "https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/Manga_OnlineViewer_Adult.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

### Description
MangaOnlineViewer helps speed up reading by loading all pages(images) from the current chapter of the manga on one page in a list type structure.
Please note on a few sites, MangaOnlineViewer may use more resources. Only open one tab for each site at a time and wait for the page to completely load.
I will try to keep this script updated, however I hardly-ever visit some of the sites supported. If the script no longer works for a site, then post the problem in the Issues/Feedback area, and have patience.

I allow this script to be posted or used anywhere as long as I am given credit and provided a link to this site. I allow parts of my script to be used freely.

### Supported Manga Sites
- [Batoto](http://bato.to/) _[English]_
- [DisasterScans](https://disasterscans.com/) _[English]_
- [Dynasty-Scans](https://dynasty-scans.com/) _[English]_
- [FoOlSlide]() _[English]_ **Obs: Any Scanlator site that uses FoOLSlide**
- [Funmanga](http://funmanga.com/) _[English]_
- [HatigarmScans](https://hatigarmscanz.net/home) _[English]_
- [JaiminisBox](https://jaiminisbox.com/) _[English]_
- [KissManga](http://kissmanga.com/) _[English]_
- [LHTranslation](http://lhtranslation.net/) _[English]_
- [MangaDeep](http://mangadeep.com/) _[English]_
- [MangaDex](https://mangadex.org/) _[English]_
- [MangaDoom](https://mngdoom.com/) _[English]_
- [MangaFox](http://fanfox.net/) _[English]_
- [MangaHere](http://www.mangahere.cc/) _[English]_
- [MangaInn](http://www.mangainn.net/) _[English]_
- [MangaKakalot](https://mangakakalot.com/page) / [MangaNelo](http://www.manganelo.com/) _[English]_
- [MangaLyght](http://manga.lyght.net/) _[English]_
- [MangaPark](http://mangapark.net/) _[English]_
- [MangaReader](http://www.mangareader.net/) / [MangaPanda](http://www.mangapanda.com/) _[English]_
- [MangaSee](https://mangaseeonline.us/) _[English]_
- [MangaTown](http://www.mangatown.com/) _[English]_
- [NineManga](http://ninemanga.com/) _[English]_
- [ReadManga Today](http://www.readmng.com/) _[English]_
- [SenManga(Raw)](http://raw.senmanga.com/) _[English]_
- [Leitor](https://leitor.net/) _[Portuguese]_
- [UnionMangas](https://unionleitor.top/xw) _[Portuguese]_
- [TuMangaOnline](https://lectortmo.com/) _[Spanish]_

### Supported Comic Sites
- [ComiCastle](http://www.comicastle.org/) _[English]_
- [ReadComicsOnline](http://readcomicsonline.ru/) _[English]_

### Supported Hentai Sites
> Adult Script available **_only_** on [Github](https://github.com/TagoDR/MangaOnlineViewer)
- [8Muses](https://comics.8muses.com/) _[English]_
- [ASMHentai](https://asmhentai.com/) _[English]_
- [DoujinMoeNM](https://doujins.com/) _[English]_
- [ExHentai](https://exhentai.org/) / [e-Hentai](https://e-hentai.org/) _[English]_ **Obs: May get your IP Banned, use with moderation**
- [HBrowser](http://www.hbrowse.com/) _[English]_
- [HentaIHere](https://www.hentaihere.com/) _[English]_
- [Hentai Comic](https://hentai-comic.com/) _[English]_ **Obs: and similar sites**
- [Hentai2Read](http://hentai2read.com/) _[English]_
- [HentaiCafe](https://hentai.cafe) _[English]_
- [HentaiFox](http://www.hentaifox.com/) _[English]_
- [HentaiHand](https://hentaihand.com/) _[English]_
- [HentaiNexus](https://hentainexus.com/) _[English]_
- [MultPorn](https://multporn.net/) _[English]_
- [PornComixOnline](https://www.porncomixonline.net) _[English]_
- [Pururin](http://pururin.io/) _[English]_
- [Simply-Hentai](http://simply-hentai.com/) _[English]_
- [Tsumino](http://tsumino.com/) _[English]_
- [hitomi](https://hitomi.la/) _[English]_
- [nHentai](https://nhentai.net/) _[English]_
- [xyzcomics](http://xyzcomics.com/) _[English]_
- [TMOHentai](http://tmohentai.com/) _[Spanish]_

### HotKeys
<kbd class='dark'>Numpad 5</kbd>/<kbd class='dark'>X</kbd>/<kbd class='dark'>/</kbd>: Open Settings
<kbd class='dark'>Numpad +</kbd>/<kbd class='dark'>Q</kbd>/<kbd class='dark'>=</kbd>: Global Zoom in pages (enlarge)
<kbd class='dark'>Numpad -</kbd>/<kbd class='dark'>E</kbd>/<kbd class='dark'>-</kbd>: Global Zoom out pages (reduce)
<kbd class='dark'>Numpad /</kbd>/<kbd class='dark'>R</kbd>/<kbd class='dark'>9</kbd>: Global Restore pages to original
<kbd class='dark'>Numpad *</kbd>/<kbd class='dark'>F</kbd>/<kbd class='dark'>0</kbd>: Global Fit window width
<kbd class='dark'>Numpad 6</kbd>/<kbd class='dark'>D</kbd>/<kbd class='dark'>.</kbd>/<kbd class="dark">→</kbd>: Next Chapter
<kbd class='dark'>Numpad 4</kbd>/<kbd class='dark'>A</kbd>/<kbd class='dark'>,</kbd>/<kbd class="dark">←</kbd>: Previous Chapter
<kbd class='dark'>Numpad 8</kbd>/<kbd class='dark'>W</kbd>: Scroll Up
<kbd class='dark'>Numpad 2</kbd>/<kbd class='dark'>S</kbd>: Scroll Down

### Features
- View Modes:
  - Vertical [Default]
  - WebComic
  - Fluid Left to Right
  - Fluid Right to Left
- Bookmarks Pages (To resume reading)
- Full Themes and Customizable
- Global and Individual images zoom
  - In(Global one may stretch images beyond window width)
  - Out
  - Restore original(Toggle fit width if oversized)
  - Fit width
  - Fit width if oversized[Default on]
  - Fit Height (with scroll pages)
  - Hide
- Auto reload Images
  - Counter for loaded Images
  - Individual image reload, just in case
- HotKeys
- Goto Page
- Image Loading Timer[Default 1s](Some sites require longer timers. eg.:ExHentai,e-hentai)
- Thumbnails Navigation[Default on]
- Download all images as ZIP File[Automatic Default off]
- Lazy Load Images[Default off]

### Rules For adding new Manga Sites
1. The site must have rare/unique mangas (Meaning: it's not available in other sites, or is a
 better quality)
2. The site must be strong enough or else my script may crash it
3. The site must not be exclusive to a handful of manga titles (Meaning: no small scanlators)

### Disclaimer
In case the owner/admin of one of the supported sites does not want my script to run on their site, I will make it disabled by default. Forcing users to manually activate it.
