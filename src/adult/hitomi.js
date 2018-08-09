// == hitomi =======================================================================================
export default {
  name: 'hitomi',
  url: /https?:\/\/hitomi.la\/reader\/.+/,
  homepage: 'https://hitomi.la/',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['#comicImages img', 'src'],
  run() {
    const key = $('#comicImages img').attr('src').split('.')[0];
    const src = $('.img-url').get();
    return {
      title: $('title').text().replace('| Hitomi.la', '').trim(),
      series: $('.brand').attr('href'),
      quant: $('#single-page-select option').length,
      prev: '#',
      next: '#',
      listImages: src.map(item => $(item).text().replace(/\/\/(g|i)/, key)),
    };
  },
};
