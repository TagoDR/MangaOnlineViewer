// == MangaTown ====================================================================================
export default {
  name: 'MangaTown',
  url: /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/,
  homepage: 'http://www.mangatown.com/',
  language: ['English'],
  category: 'manga',
  waitEle: '#top_chapter_list option',
  waitMax: 5000,
  run() {
    const num = $('.page_select select:first option').get().slice(0, -1);
    const chapter = $('#top_chapter_list option').eq(W.current_chapter_index);
    return {
      title: $('.title h1').text(),
      series: $('.title h2 a').attr('href'),
      quant: num.length,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listPages: num.map((item) => $(item).val()),
      img: '#image',
    };
  },
};
