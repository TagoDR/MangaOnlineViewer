// == MangaStream WordPress Plugin =================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { findByContentEq } from '../utils/find';

const mangastreamwp: ISite = {
  name: [
    'MangaStream WordPress Plugin',
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
    'TresDaos',
    'Lectormiau',
    'NTRGod',
    'Threedaos',
  ],
  url: /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,
  homepage: [
    'https://themesia.com/mangastream-wordpress-theme/',
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
    'https://tresdaos.com',
    'https://zonamiau.com/',
    'https://ntrgod.com/',
    'https://threedaos.zdrz.xyz/',
  ],
  language: [Language.ENGLISH, Language.SPANISH],
  category: Category.MANGA,
  // waitTime: 2000,
  waitEle:
    ':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])',
  run(): IManga {
    const images = [...document.querySelectorAll(this.waitEle ?? '')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series:
        document.querySelector(':where(.allc, .tac) a')?.getAttribute('href') ??
        document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute('href'),
      pages: images.length,
      prev: findByContentEq(':where(.nextprev, .inner_nPL) a', [
        'Prev',
        'Anterior',
      ])?.[0]?.getAttribute('href'),
      next: findByContentEq(':where(.nextprev, .inner_nPL) a', [
        'Next',
        'Siguiente',
      ])?.[0]?.getAttribute('href'),
      listImages: images.map(
        img =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src') ??
          '',
      ),
    };
  },
};
export default mangastreamwp;
