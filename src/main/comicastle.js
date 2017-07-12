// == ComiCastle ===================================================================================
export default {
  name: 'ComiCastle',
  url: /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/,
  homepage: 'http://www.comicastle.org/',
  language: ['English'],
  category: 'comic',
  run() {
    const url = $('.form-control:last option').get();
    const chapter = $('.form-control:first option');
    return {
      title: chapter.find(':selected').text(),
      series: $('.navbar-header a').attr('href'),
      quant: url.length,
      prev: chapter.find(':selected').prev().val(),
      next: chapter.find(':selected').next().val(),
      listPages: url.map(item => $(item).val()),
      img: '.chapter-img',
    };
  },
};
