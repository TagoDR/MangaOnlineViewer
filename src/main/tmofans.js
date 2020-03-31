// == TMOFans ==================================================================================
export default {
  name: ['TuMangaOnline', 'LectorManga'],
  url: /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/,
  homepage: ['https://tmofans.com/', 'https://lectortmo.com/'],
  language: ['Spanish'],
  category: 'manga',
  run() {
    const num = $('#viewer-pages-select:first option').get().length;
    const src = $('#viewer-container img, .viewer-page').get();
    return {
      title: $('title').text().trim(),
      series: $('a[title="Volver"]').attr('href'),
      quant: num || src.length,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map((i) => W.location.href.replace(/\/[0-9]+$/, `/${i + 1}`)),
      listImages: src.map((item) => $(item).attr('src')),
      img: '#viewer-container img, .viewer-page',
    };
  },
};
