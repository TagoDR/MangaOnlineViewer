// == AsuraScans and FlameScans ====================================================================
export default {
  name: ['Asura Scans', 'Flame Scans', 'Realm Scans', 'Alpha-scans'],
  url: /https?:\/\/(www.)?(asura|flamescans|realmscans|alpha-scans).(com|org|gg)\/.+/,
  homepage: [
    'https://www.asura.gg/',
    'https://flamescans.org/',
    'https://realmscans.com/',
    'https://alpha-scans.org/',
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
      listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
    };
  },
};
