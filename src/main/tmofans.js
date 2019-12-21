// == TMOFans ==================================================================================
export default {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www.)?tmofans.com\/viewer\/.+\/paginated/,
  homepage: 'https://tmofans.com/',
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
      listPages: [...Array(num).keys()].map((i) => `${W.location.href}/${i + 1}`),
      img: '#viewer-container img',
    };
  },
};
