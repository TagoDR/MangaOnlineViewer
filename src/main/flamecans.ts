// == FlameScans ===================================================================================
export default {
  name: [
    'Asura Scans',
    'Flame Scans',
    'Realm Scans',
    'Voids-Scans',
    'Luminous Scans',
    'Shimada Scans',
    'Night Scans',
    'Manhwa-Freak',
    'OzulScansEn',
    'AzureManga',
  ],
  url: /https?:\/\/(www.)?(asura.*|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans|manhwafreak|manhwa-freak|ozulscansen|azuremanga).(com|org|gg|xyz|to|net)\/.+/,
  homepage: [
    'https://asura.nacm.xyz/',
    'https://flamescans.org/',
    'https://realmscans.com/',
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
  waitTime: 2000,
  // WaitEle: '#chapter option:nth-child(2)',
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
