/* eslint-disable no-underscore-dangle */
// == MangaPark ====================================================================================
export default {
  name: 'MangaPark',
  url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter)\/.+\/.+/,
  homepage: 'http://mangapark.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const img = $('.img-link img').get();
    return {
      title: $('.loc a:first, h4 a').text().trim(),
      series: $('.loc a:first, h4 a').attr('href'),
      quant: W.pages || img.length,
      prev: W._prev_link || $('span:contains(◀ Prev Chapter):first').parent('a').attr('href'),
      next: W._next_link || $('span:contains(Next Chapter ▶):first').parent('a').attr('href'),
      listImages: W.images || img.map((i) => {
        if ($(i).hasClass('lazy')) {
          return $(i).attr('data-src');
        }
        return $(i).attr('src');
      }),
      before() {
        if (location.href.search(/\/1$/) !== -1) {
          location.href = location.href.replace('/1', '');
        }
      },
    };
  },
};
