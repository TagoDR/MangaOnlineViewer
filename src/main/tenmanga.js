// == TenManga =====================================================================================
export default {
  name: 'TenManga',
  url: /https?:\/\/(www.)?tenmanga.com\/chapter\/.+/,
  homepage: 'http://www.tenmanga.com/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const url = $('.sl-page:first option').get();
    const chapter = $('.sl-chap:first option:selected');
    return {
      title: $('.read-page  a:eq(2)').text().replace('»', '').trim(),
      series: $('.read-page a:eq(1)').attr('href'),
      quant: url.length,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      listPages: url.map(item => $(item).val()),
      img: '.manga_pic',
    };
  },
};
