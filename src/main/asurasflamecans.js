// == AsuraScans and FlameScans ====================================================================
export default {
  name: ['Asura Scans', 'Flame Scans'],
  url: /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/,
  homepage: ['https://www.asurascans.com/', 'https://flamescans.org/'],
  language: ['English'],
  category: 'manga',
  waitEle: '#chapter option:eq(1)',
  waitMax: 5000,
  run() {
    const chapter = $('#chapter option:selected');
    const images = $('#readerarea p img').get();
    return {
      title: $('.entry-title').text().trim(),
      series: $('.allc a').attr('href'),
      quant: images.length,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
