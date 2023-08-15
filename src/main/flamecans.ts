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
    'ManhwaFreak',
    'OzulScansEn',
  ],
  url: /https?:\/\/(www.)?(asura.nacm|asurascans|asura|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans|manhwafreak|ozulscansen).(com|org|gg|xyz|to)\/.+/,
  homepage: [
    'https://asura.nacm.xyz/',
    'https://flamescans.org/',
    'https://realmscans.com/',
    'https://void-scans.com/',
    'https://luminousscans.com/',
    'https://shimadascans.com/',
    'https://nightscans.org/',
    'https://manhwafreak.com/',
    'https://ozulscansen.com/',
  ],
  language: ['English'],
  category: 'manga',
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
