// == MangaHost2 ===================================================================================
import { IManga } from '../interfaces.js';

export default {
  name: 'MangaHost2',
  url: /https?:\/\/(www.)?mangahost2.com\/manga\/.+\/.+/,
  homepage: 'https://mangahost2.com/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const url =
      W.location.href +
      (W.location.href.lastIndexOf('/') !== W.location.href.length - 1 ? '/' : '');
    const chapter = $('.viewerChapter:first option:selected');
    const num = parseInt($('.viewerPage:first option:last').html(), 10);
    const manga = {
      title: $('.breadcrumb li:eq(3)').text().trim(),
      series: $('.breadcrumb li:eq(2) a').attr('href'),
      pages: num,
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      img: '.image-content img',
    } as IManga;
    if ($('.read-slideshow img').get().length === 0) {
      manga.listPages = [...Array(num).keys()].map((i) => url + (i + 1));
    } else {
      manga.listImages = $('.read-slideshow img')
        .get()
        .map((item) => $(item).attr('src')) as string[];
    }
    return manga;
  },
};
