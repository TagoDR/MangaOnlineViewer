// == MangaHere ====================================================================================
export default {
  name: 'MangaHere',
  url: /https?:\/\/(www.)?mangahere.co\/manga\/.+\/.+/,
  homepage: 'http://www.mangahere.co/',
  language: ['English'],
  category: 'manga',
  run() {
    const num = parseInt($('.right select:first option:last').html(), 10);
    const chapter = $('.reader_tip a');
    return {
      title: $('.title h1').text(),
      series: $('div.title h2 a').attr('href'),
      quant: num,
      prev: chapter.eq(-1).attr('href'),
      next: chapter.eq(-2).attr('href'),
      listPages: [...Array(num).keys()].map(i => `${i + 1}.html`),
      img: 'img#image',
    };
  },
};
