// == MangaHost ===================================================================================
export default { // TODO: Check
  name: 'MangaHost',
  url: /https?:\/\/(www.)?mangahost.net\/manga\/.+\/.+/,
  homepage: 'https://mangahost.net/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const url = W.location.href + (W.location.href.lastIndexOf('/') !== W.location.href.length
    - 1 ? '/' : '');
    const chapter = $('.viewerChapter:first option:selected');
    const num = parseInt($('.viewerPage:first option:last').html(), 10);
    const manga = {
      title: $('.breadcrumb li:eq(3)').text().trim(),
      series: $('.breadcrumb li:eq(2) a').attr('href'),
      quant: num,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      img: '.image-content img',
    };
    if ($('.read-slideshow img').get().length === 0) {
      manga.listPages = [...Array(num).keys()].map((i) => url + (i + 1));
    } else {
      manga.listImages = $('.read-slideshow img').get().map((item) => $(item).attr('src'));
    }
    return manga;
  },
};
