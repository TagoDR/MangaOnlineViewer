// == MangaPark ====================================================================================
export default {
  name: 'MangaPark',
  url: /https?:\/\/(www.)?mangapark.me\/manga\/.+\/.+/,
  homepage: 'http://mangapark.me/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const url = location.href + (location.href.lastIndexOf('/') !== location.href.length
      - 1 ? '/' : '');
    const num = $('.info div:eq(1) a').length;
    return {
      title: $('.loc a:first').text().trim(),
      series: `/manga/${location.pathname.split('/')[2]}`,
      quant: num,
      prev: $('.info a:eq(0)').attr('href'),
      next: $('.info a:eq(1)').attr('href'),
      listPages: [...Array(num).keys()].map(i => url + (i + 1)),
      img: '.img',
    };
  },
};
