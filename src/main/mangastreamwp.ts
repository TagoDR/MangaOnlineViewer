// == MangaStream WordPress Plugin =================================================================
const domains = [
  'asura.*',
  'flamecomics',
  'rizz.*',
  'void-scans',
  'luminousscans',
  'shimascans',
  'night-scans',
  'manhwafreak',
  'freakcomic',
  'ozulscansen',
  'azuremanga',
  'cypherscans',
  'mangagalaxy',
  'luascans',
  'manhwa-freak',
];
export default {
  name: [
    'MangaStream WordPress Plugin',
    'Asura Scans',
    'Flame Comics',
    'Rizzcomic',
    'Voids-Scans',
    'Luminous Scans',
    'Shimada Scans',
    'Night Scans',
    'Manhwa-Freak',
    'OzulScansEn',
    'AzureManga',
    'CypherScans',
    'MangaGalaxy',
    'LuaScans',
  ],
  url: new RegExp(`https?:\\/\\/(www.)?(${domains.join('|')}).(com|org|gg|xyz|to|net|me)\\/.+`),
  homepage: [
    'https://themesia.com/mangastream-wordpress-theme/',
    'https://asuratoon.com/',
    'https://flamecomics.com/',
    'https://rizzcomic.com/',
    'https://void-scans.com/',
    'https://luminousscans.com/',
    'https://shimadascans.com/',
    'https://night-scans.com/',
    'https://freakcomic.com/',
    'https://ozulscansen.com/',
    'https://azuremanga.com/',
    'https://cypherscans.xyz/',
    'https://mangagalaxy.me/',
    'https://luascans.com/',
    'https://manhwa-freak.org/',
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
