// == MangaDoom ====================================================================================
export default {
  name: 'MangaDoom',
  url: /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/,
  homepage: 'https://mngdoom.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const url = $('.selectPage:first option:not(:first)').get();
    const chapter = $('.chapterSelect:first option:selected');
    return {
      title: $('.widget-heading').text().trim(),
      series: $('.widget-heading a').attr('href'),
      quant: url.length,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      listPages: url.map(item => $(item).val()),
      img: 'img.img-responsive',
    };
  },
};
