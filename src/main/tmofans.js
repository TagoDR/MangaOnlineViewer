// == TMOFans ==================================================================================
export default {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/,
  homepage: 'https://lectortmo.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const num = $('#viewer-pages-select:first option').get().length || $('.img-container img').get().length;
    return {
      title: $('title').text().trim(),
      series: $('a[title="Volver"]').attr('href'),
      quant: num,
      prev: $('.chapter-prev a').attr('href'),
      next: $('.chapter-next a').attr('href'),
      listPages: [...Array(num).keys()].map((i) => W.location.href.replace(/\/[0-9]+$/, `/${i + 1}`)),
      listImages: $('.img-container img').get().map((item) => $(item).attr('data-src')),
      img: '#viewer-container img, .viewer-page',
    };
  },
};
