// == MangaHost ===================================================================================
export default { // TODO: Check
  name: 'MangaHost',
  url: /mangahost/,
  homepage: 'https://mangahost.net/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const url = location.href + (location.href.lastIndexOf('/') !== location.href.length -
      1 ? '/' : '');
    const chapter = $('.viewerChapter:first option:selected');
    const num = parseInt($('.viewerPage:first option:last').html(), 10);
    return {
      title: $('.breadcrumb li:nth(3)').text().trim(),
      series: $('.breadcrumb li:nth(2) a').attr('href'),
      quant: num,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      listPages: [...Array(num).keys()].map(i => url + (i + 1)),
      img: '.image-content img',
    };
  },
};
