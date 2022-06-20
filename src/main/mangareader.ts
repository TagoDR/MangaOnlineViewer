// == MangaReader ==================================================================================
export default {
  name: ['MangaReader', 'MangaPanda'],
  url: /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/,
  homepage: ['http://www.mangareader.net/', 'http://www.mangapanda.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const url =
      window.location.href +
      (window.location.href.lastIndexOf('/') !== window.location.href.length - 1 ? '/' : '');
    const num = parseInt($('select#pageMenu option:last').html(), 10);
    const chapter = $('#mangainfo_bas a');
    return {
      title: $('#mangainfo h1').text(),
      series: $('#mangainfo a').attr('href'),
      pages: num,
      prev: chapter.last().attr('href'),
      next: chapter.first().attr('href'),
      listPages: Array(num)
        .fill(null)
        .map((_, i) => url + (i + 1), num),
      img: 'img#img',
      before() {
        if (window.location.pathname.match(/\/.+\/.+\/chapter-[0-9]+.*/)) {
          const path = window.location.pathname.split('/');
          window.location.pathname = `/${path[2]}/${path[3].match(/[0-9]+/)}`;
        } else if (window.location.search) {
          window.location.href = window.location.pathname;
        }
      },
    };
  },
};
