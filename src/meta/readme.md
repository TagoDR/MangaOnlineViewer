# Manga OnlineViewer

![Manga Icon Adult Script](https://cdn-icons-png.flaticon.com/128/9824/9824312.png)
![Manga Icon Main Script](https://cdn-icons-png.flaticon.com/128/2281/2281832.png)
![Manga Icon Dev Script](https://cdn-icons-png.flaticon.com/128/9824/9824248.png)

## Description

Loads all pages from a chapter in a nice view, allowing for faster and more comfortable reading,
without the need to
wait for pages to load.

:exclamation: **Attention**: Some sites require you to reload the page(F5) or open the chapter in a
new tab for the
script to start.

## Supported Browsers

Firefox and Chrome with [Tampermonkey](https://tampermonkey.net/)
or [Violentmonkey](https://violentmonkey.github.io/).
Other Browsers with other add-ons may also work, but not officially supported.

## Installation

#### [Main Reader](/dist/Manga_OnlineViewer.user.js?raw=1)

#### [Adult Reader](/dist/Manga_OnlineViewer_Adult.user.js?raw=1)

#### Official Source: [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

## Local Files Reader (ZIP, CBZ, CBR..., PNGs, JPGs...)

Download the standalone HTML file from the link below. Open it in your browser to load local comic/manga files.

[Download Local Standalone Reader](/dist/Manga_Local_Viewer.html?raw=1)

## Supported Manga Sites

<!-- @echo LIST_MANGA_SITES -->

## Supported Comic Sites

<!-- @echo LIST_COMIC_SITES -->

## Supported Hentai Sites

> Adult Script available **_only_** on [GitHub](https://github.com/TagoDR/MangaOnlineViewer)

<!-- @echo LIST_HENTAI_SITES -->

## HotKeys

- <span>Auto Scroll:</span> <span><kbd class="dark">space</kbd>
- <span>Scroll Up:</span> <span><kbd class="dark">up</kbd> / <kbd class="dark">
  W</kbd> / <kbd class="dark">
  num_8</kbd></span>
- <span>Scroll Down:</span> <span><kbd class="dark">down</kbd> / <kbd class="dark">
  S</kbd> / <kbd class="dark">
  num_2</kbd></span>
- <span>Next Chapter:</span> <span><kbd class="dark">
  right</kbd> / <kbd class="dark">/</kbd> / <kbd class="dark">
  D</kbd> / <kbd class="dark">num_6</kbd></span>
- <span>Previous Chapter:</span> <span><kbd class="dark">
  left</kbd> / <kbd class="dark">;</kbd> / <kbd class="dark">
  A</kbd> / <kbd class="dark">num_4</kbd></span>
- <span>Enlarge:</span> <span><kbd class="dark">-</kbd> / <kbd class="dark">
  num_add</kbd> / <kbd class="dark">
  E</kbd></span>
- <span>Restore:</span> <span><kbd class="dark">=</kbd> / <kbd class="dark">
  num_subtract</kbd> / <kbd class="dark">
  Q</kbd></span>
- <span>Restore:</span> <span><kbd class="dark">9</kbd> / <kbd class="dark">
  num_divide</kbd> / <kbd class="dark">
  R</kbd></span>
- <span>Fit Width:</span> <span><kbd class="dark">0</kbd> / <kbd class="dark">
  num_multiply</kbd> / <kbd class="dark">
  F</kbd></span>
- <span>Fit Height:</span> <span><kbd class="dark">H</kbd></span>
- <span>Settings:</span> <span><kbd class="dark">num_divide</kbd> / <kbd class="dark">
  num_5</kbd> / <kbd class="dark">
  X</kbd></span>
- <span>WebComic:</span> <span><kbd class="dark">C</kbd></span>
- <span>Vertical:</span> <span><kbd class="dark">V</kbd></span>
- <span>Left to Right:</span> <span><kbd class="dark">N</kbd></span>
- <span>Right to Left:</span> <span><kbd class="dark">B</kbd></span>

## Features

- Auto Scroll
- View Modes:
  - Vertical/WebComic [Default]
  - Fluid Left to Right
  - Fluid Right to Left
- Bookmark Pages (To resume reading)
- Full Themes and Customizable
- Global and Individual images zoom
  - In(Global one may stretch images beyond window width)
  - Out
  - Restore original(Toggle fit width if oversize)
  - Fit width
  - Fit width if oversize[Default on]
  - Fit Height (with scroll pages)
  - Hide
- Auto reload Images
  - Counter for loaded Images
  - Individual image reload, just in case
- HotKeys
- Goto Page
- Image Loading Timer[Default 1s](Some sites require longer timers. e.g.:ExHentai,e-hentai)
- Thumbnails Navigation[Default on]
- Download all images as ZIP File[Automatic Default off]
- Lazy Load Images[Default off]

## Adding new Manga Sites

Fork this project and make a pull request, in the folders "main" or "adult" create a new file .ts
with
The name of the site.
After writing the module like below, import it from the index of the selected folder

Inside the file, gather the information needed using any means, look at other sites for inspiration,
Below is an example with descriptions.

```ts
// == MangaDex =====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'MangaDex', // The name of the to be listed, may be an array of names
  url: /https?:\/\/(www\.)?mangadex.org/, // Regex to detect the site, usually just the reader part of the site, but can be the root if is has a lot of dynamic content
  homepage: 'https://mangadex.org/',
  language: [Language.ENGLISH], // Array of languages the site serve
  category: Category.MANGA, // Category of the site
  waitEle: '#chapter-selector a', // Wait for something before running, some site requires some steps before the information is available
  async run(): Promise<IManga> {
    // Logic for obtaining the required information
    const chapterId = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1);
    const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const server = await fetch(home).then(async res => res.json());
    const images = server.chapter.data;
    const chapters = document.querySelectorAll('#chapter-selector a');
    return {
      title: document.querySelector('title')?.text.replace(' - MangaDex', ''), // Title of the Chapter/Manga
      series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'), // Url for the gallery or chapter list
      pages: images.length, // Quantity of pages
      prev: chapters?.item(0)?.getAttribute('href'), // Previous Chapter
      next: chapters?.item(1)?.getAttribute('href'), // Next Chapter
      listImages: images.map(
        // List of images
        (img: string) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`,
      ),
    };
  },
};
export default site;
```

Look inside the types folder to better understand the structure and valid values.

## Permissions

I allow this script to be posted or used anywhere as long as I am given credit and provided a link
to this site. I allow
parts of my script to be used freely.

## Disclaimer

In case the owner/admin of one of the supported sites does not want my script to run on their site,
I will make it
disabled by default. Forcing users to manually activate it.

## Mobile

It's recommended to use Tampermonkey with Firefox mobile or Kiwi Browser.

### Bookmarklet (Not Recommended)

_Settings can't be saved with Bookmarklet_:

Bookmarklet seems to work only in Chrome, open the chapter then use the search bar to activate your
bookmarklet.

##### Main Reader:

```JS
javascript:(function() {
  if (unsafeWindow === undefined) unsafeWindow = window;
  ["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer.user.min.js"].map(s => document.body.appendChild(document.createElement('script')).src = s)
})();
```

##### Adult Reader:

```JS
javascript:(function() {
  if (unsafeWindow === undefined) unsafeWindow = window;
  ["<!-- @echo BOOKMARKLET -->", "https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer_Adult.user.min.js"].map(s => document.body.appendChild(document.createElement('script')).src = s)
})();
```
