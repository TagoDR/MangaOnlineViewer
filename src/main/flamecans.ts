// == FlameScans ===================================================================================
export default {
  name: ['Asura Scans', 'Flame Scans', 'Realm Scans', 'Voids-Scans', 'Luminous Scans','Shimada Scans', 'Night Scans'],
  url: /https?:\/\/(www.)?(asurascans|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans).(com|org|gg)\/.+/,
  homepage: [
    'https://www.asura.gg/',
    'https://flamescans.org/',
    'https://realmscans.com/',
    'https://void-scans.com/',
    'https://luminousscans.com/',
    'https://shimadascans.com/',
    'https://nightscans.org/',
  ],
  language: ['English'],
  category: 'manga',
  waitEle: '#chapter option:nth-child(2)',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('#chapter option:checked');
    const images = [...document.querySelectorAll('#readerarea img')];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      series: document.querySelector('.allc a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-src') ||
          img.getAttribute('data-lazy-src') ||
          img.getAttribute('src'),
      ),
    };
  },
};
