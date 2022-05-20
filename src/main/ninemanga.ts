// == NineManga ====================================================================================
export default {
  name: 'NineManga',
  url: /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,
  homepage: 'http://ninemanga.com/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: $('.tip a:first').text(),
      series: $('.subgiude a:eq(1)').attr('href'),
      pages: $('#page:first option').length,
      prev: $('.chnav a:first').attr('href'),
      next: $('.chnav a:eq(1)').attr('href'),
      listPages: $('#page:first option')
        .get()
        .map((item) => $(item).val()),
      img: '.manga_pic',
    };
  },
};
