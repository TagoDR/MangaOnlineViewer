// == MangaGo ======================================================================================
export default {
  name: 'MangaGo',
  url: /https?:\/\/(www.)?mangago.me\/article\/.+\/.+/,
  homepage: 'http://www.mangago.me/',
  language: ['English'],
  category: 'manga',
  run() {
    const origin = $('#series');
    return {
      title: origin.text(),
      series: origin.attr('href'),
      quant: $('.page a:first').text().replace(/page 1 of /, ''),
      prev: $('.readtips p:eq(4) a:first').attr('href'),
      next: $('.readtips p:eq(3) a:first').attr('href'),
      listPages: $('.page a').get().map((item) => $(item).attr('href')),
      img: '#page1',
    };
  },
};
