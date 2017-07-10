// == MangaHere ====================================================================================
export default {
  name: 'MangaHere',
  url: /https?:\/\/(www.)?mangahere.co\/manga\/.+\/.+/,
  homepage: 'http://www.mangahere.co/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const num = parseInt($('.right select:first option:last').html(), 10);
    const chapter = $('#top_chapter_list option:selected');
    return {
      title: $('.title h1').text(),
      series: $('div.title h2 a').attr('href'),
      quant: num,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listPages: [...Array(num).keys()].map(i => `${i + 1}.html`),
      img: 'img#image',
    };
  },
};
