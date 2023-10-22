// == MangaStream WordPress Plugin =================================================================
export default {
  name: [
    'MangaStream WordPress Plugin',
    'Asura Scans',
    'Flame Scans',
    'Rizzcomic',
    'Voids-Scans',
    'Luminous Scans',
    'Shimada Scans',
    'Night Scans',
    'Manhwa-Freak',
    'OzulScansEn',
    'AzureManga',
  ],
  url: /https?:\/\/(www.)?(asura.*|flamescans|rizzcomic|void-scans|luminousscans|shimascans|nightscans|manhwafreak|manhwa-freak|ozulscansen|azuremanga).(com|org|gg|xyz|to|net)\/.+/,
  homepage: [
    'https://themesia.com/mangastream-wordpress-theme/',
    'https://asura.nacm.xyz/',
    'https://flamescans.org/',
    'https://rizzcomic.com/',
    'https://void-scans.com/',
    'https://luminousscans.com/',
    'https://shimadascans.com/',
    'https://nightscans.net/',
    'https://manhwa-freak.com/',
    'https://ozulscansen.com/',
    'https://azuremanga.com/',
  ],
  language: ['English'],
  category: 'manga',
  // waitTime: 2000,
  waitEle: '#chapter option:nth-child(2)',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('#chapter option:checked');
    const images = [...document.querySelectorAll('#readerarea img:not(.asurascans)')];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      series: document.querySelector('.allc a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src'),
      ),
    };
  },
};
