// == MangaTown ====================================================================================
export default {
  name: 'MangaTown',
  url: /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/,
  homepage: 'http://www.mangatown.com/',
  lang: ['eng'],
  category: 'manga',
  waitEle: '#top_chapter_list option',
  run() {
    const num = $('.page_select select:first option').get();
    const chapter = $('#top_chapter_list option:selected');
    return {
      title: $('.title h1').text(),
      series: $('.title h2 a').attr('href'),
      quant: num.length,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listPages: num.map(item => $(item).val()),
      img: '#image',
    };
  },
};
