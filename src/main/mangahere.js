// == MangaHere ====================================================================================
export default {
  name: 'MangaHere',
  url: /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/,
  homepage: 'http://www.mangahere.cc/',
  language: ['English'],
  category: 'manga',
  run() {
    const num = $('.right select:first option').length - 1;
    const chapter = $('.reader_tip a');
    return {
      title: $('.title h1').text(),
      series: $('div.title h2 a').attr('href'),
      quant: num,
      prev: chapter.eq(-1).attr('href'),
      next: chapter.eq(-2).attr('href'),
      listPages: [''].concat([...Array(num - 1).keys()].map((i) => `${i + 2}.html`)),
      img: 'img#image',
    };
  },
};
