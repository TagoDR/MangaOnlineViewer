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
javascript:(function(){["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

##### Adult Reader:

```JS
javascript:(function(){["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer_Adult.user.min.js"].map( s => document.body.appendChild(document.createElement('script')).src=s)})();
```

## Supported Manga Sites

<!-- @echo LIST_MANGA_SITES -->

## Supported Comic Sites

<!-- @echo LIST_COMIC_SITES -->

## Supported Hentai Sites

> Adult Script available **_only_** on [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

<!-- @echo LIST_HENTAI_SITES -->

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
