# Manga OnlineViewer
### Installation

##### [Main Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js)
##### [Adult Reader](https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js)
##### Official Source: [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

### Supported Browsers
Firefox and Chrome with [Tampermonkey](https://tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
Other Browsers with other add-ons may also work, but not officially supported.
Mobile Bookmarklet (*Settings can't be saved, may require to request for Desktop Page*):
##### Main Reader:
```
javascript:(function(){["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/Manga_OnlineViewer.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```
##### Adult Reader:
```
javascript:(function(){["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/Manga_OnlineViewer_Adult.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

### Description
MangaOnlineViewer helps speed up reading by loading all pages(images) from the current chapter of the manga on one page in a list type structure.
Please note on a few sites, MangaOnlineViewer may use more resources. Only open one tab for each site at a time and wait for the page to completely load.
I will try to keep this script updated, however I hardly-ever visit some of the sites supported. If the script no longer works for a site, then post the problem in the Issues/Feedback area, and have patience.

I allow this script to be posted or used anywhere as long as I am given credit and provided a link to this site. I allow parts of my script to be used freely.

### Supported Manga Sites
<!-- @echo LIST_MANGA_SITES -->

### Supported Comic Sites
<!-- @echo LIST_COMIC_SITES -->

### Supported Hentai Sites
> Adult Script available **_only_** on [Github](https://github.com/TagoDR/MangaOnlineViewer)
<!-- @echo LIST_HENTAI_SITES -->

### HotKeys
- <kbd class='dark'>Numpad 5</kbd> | <kbd class='dark'>X</kbd> | <kbd class='dark'>/</kbd>: Open Settings
- <kbd class='dark'>Numpad +</kbd> | <kbd class='dark'>Q</kbd> | <kbd class='dark'>=</kbd>: Global Zoom in pages (enlarge)
- <kbd class='dark'>Numpad -</kbd> | <kbd class='dark'>E</kbd> | <kbd class='dark'>-</kbd>: Global Zoom out pages (reduce)
- <kbd class='dark'>Numpad /</kbd> | <kbd class='dark'>R</kbd> | <kbd class='dark'>9</kbd>: Global Restore pages to original
- <kbd class='dark'>Numpad *</kbd> | <kbd class='dark'>F</kbd> | <kbd class='dark'>0</kbd>: Global Fit window width
- <kbd class='dark'>Numpad 6</kbd> | <kbd class='dark'>D</kbd> | <kbd class='dark'>.</kbd> | <kbd class="dark">→</kbd>: Next Chapter
- <kbd class='dark'>Numpad 4</kbd> | <kbd class='dark'>A</kbd> | <kbd class='dark'>,</kbd> | x<kbd class="dark">←</kbd>: Previous Chapter
- <kbd class='dark'>Numpad 8</kbd> | <kbd class='dark'>W</kbd>: Scroll Up
- <kbd class='dark'>Numpad 2</kbd> | <kbd class='dark'>S</kbd>: Scroll Down

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
