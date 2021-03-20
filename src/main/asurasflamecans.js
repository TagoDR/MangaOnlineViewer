// == AsuraScans and FlameScans ====================================================================
export default {
  name: ['Asura Scans', 'Flame Scans'],
  url: /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/,
  homepage: ['https://www.asurascans.com/', 'https://flamescans.org/'],
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('#readerarea p img').get();
    return {
      title: $('.entry-title').text().trim(),
      series: $('.allc a').attr('href'),
      quant: images.length,
      prev: $('.ch-prev-btn:first').attr('href'),
      next: $('.ch-next-btn:first').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
