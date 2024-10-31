// == MangaStream WordPress Plugin =================================================================
import { findByContentEq } from '../utils/find';

export default {
  name: [
    'MangaStream WordPress Plugin',
    'Flame Comics',
    'Realm Oasis',
    'Voids-Scans',
    'Luminous Scans',
    'Shimada Scans',
    'Night Scans',
    'Manhwa-Freak',
    'OzulScansEn',
    'CypherScans',
    'MangaGalaxy',
    'LuaScans',
    'Drake Scans',
    'Rizzfables',
    'NovatoScans',
  ],
  url: /https?:\/\/[^/]*(scans|comic|realmoasis|hivetoon|rizzfables)[^/]*\/.+/,
  homepage: [
    'https://themesia.com/mangastream-wordpress-theme/',
    'https://flamecomics.com/',
    'https://realmoasis.com/',
    'https://void-scans.com/',
    'https://luminous-scans.com/',
    'https://shimadascans.com/',
    'https://night-scans.com/',
    'https://freakcomic.com/',
    'https://ozulscansen.com/',
    'https://cypherscans.xyz/',
    'https://mangagalaxy.me/',
    'https://luascans.com/',
    'https://drake-scans.com/',
    'https://rizzfables.com/',
    'https://www.novatoscans.top/',
  ],
  language: ['English'],
  category: 'manga',
  // waitTime: 2000,
  waitEle: ':where(#chapter, #nPL_select) option:nth-child(2)',
  run() {
    const images = [
      ...document.querySelectorAll(
        ':where(#readerarea, .check-box) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])',
      ),
    ];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series:
        document.querySelector(':where(.allc, .tac) a')?.getAttribute('href') ??
        document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute('href'),
      pages: images.length,
      prev: findByContentEq(':where(.nextprev, .inner_nPL) a', 'Prev')?.[0]?.getAttribute('href'),
      next: findByContentEq(':where(.nextprev, .inner_nPL) a', 'Next')?.[0]?.getAttribute('href'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src'),
      ),
    };
  },
};
