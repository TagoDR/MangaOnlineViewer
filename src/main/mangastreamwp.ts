// == MangaStream WordPress Plugin =================================================================
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
  ],
  language: ['English'],
  category: 'manga',
  // waitTime: 2000,
  waitEle: '#chapter option:nth-child(2)',
  run() {
    const chapterSelector = document.querySelector<HTMLOptionElement>('#chapter option:checked');
    const chapter = [...document.querySelectorAll('.nextprev').item(0).querySelectorAll('a')];
    const images = [
      ...document.querySelectorAll('#readerarea img:not(.asurascans):not([src*="loader"])'),
    ];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      series:
        document.querySelector('.allc a')?.getAttribute('href') ??
        document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute('href'),
      pages: images.length,
      prev:
        (chapter.at(0)?.classList.contains('disabled')
          ? undefined
          : chapter.at(0)?.getAttribute('href')) ??
        chapterSelector?.nextElementSibling?.getAttribute('value'),
      next:
        (chapter.at(1)?.classList.contains('disabled')
          ? undefined
          : chapter.at(1)?.getAttribute('href')) ??
        chapterSelector?.previousElementSibling?.getAttribute('value'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src'),
      ),
    };
  },
};
