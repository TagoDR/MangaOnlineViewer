// == TMOFans ==================================================================================
export default {
  name: ['TuMangaOnline'],
  url: /https?:\/\/(www.)?(tmofans|lectortmo).com\/viewer\/.+\/(paginated|cascade)/,
  homepage: ['https://tmofans.com/', 'https://lectortmo.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const num = $('#viewer-pages-select:first option').get().length;
    return {
      title: $('title').text().trim(),
      series: $('a[title="Volver"]').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map((i) => `${W.location.href.replace('cascade', 'paginated')}/${i + 1}`),
      img: '#viewer-container img, .viewer-page',
    };
  },
};
