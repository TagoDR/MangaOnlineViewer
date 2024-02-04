// == MangaStream WordPress Plugin =================================================================
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
  ],
  url: /https?:\/\/(www\.)?(asura.*|flamecomics|rizzcomic|void-scans|luminousscans|shimascans|night-scans|manhwafreak|manhwa-freak|ozulscansen|azuremanga|cypherscans).(com|org|gg|xyz|to|net)\/.+/,
  homepage: [
    'https://themesia.com/mangastream-wordpress-theme/',
    'https://asuratoon.com/',
    'https://flamecomics.com/',
    'https://rizzcomic.com/',
    'https://void-scans.com/',
    'https://luminousscans.com/',
    'https://shimadascans.com/',
    'https://night-scans.com/',
    'https://manhwa-freak.com/',
    'https://ozulscansen.com/',
    'https://azuremanga.com/',
    'https://cypherscans.xyz/',
  ],
  language: ['English'],
  category: 'manga',
  // waitTime: 2000,
  waitEle: '#chapter option:nth-child(2)',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('#chapter option:checked');
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
        document.querySelector('.nextprev a:first-child:not(.disabled)')?.getAttribute('href') ??
        chapter?.nextElementSibling?.getAttribute('value'),
      next:
        document.querySelector('.nextprev a:last-child:not(.disabled)')?.getAttribute('href') ??
        chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src'),
      ),
    };
  },
};
