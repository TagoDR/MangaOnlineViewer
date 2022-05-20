// == MangaReader ==================================================================================
export default {
  name: ['MangaReader', 'MangaPanda'],
  url: /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/,
  homepage: ['http://www.mangareader.net/', 'http://www.mangapanda.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const url =
      W.location.href +
      (W.location.href.lastIndexOf('/') !== W.location.href.length - 1 ? '/' : '');
    const num = parseInt($('select#pageMenu option:last').html(), 10);
    const chapter = $('#mangainfo_bas a');
    return {
      title: $('#mangainfo h1').text(),
      series: $('#mangainfo a').attr('href'),
      pages: num,
      prev: chapter.last().attr('href'),
      next: chapter.first().attr('href'),
      listPages: [...Array(num).keys()].map((i) => url + (i + 1), num),
      img: 'img#img',
      before() {
        if (W.location.pathname.match(/\/.+\/.+\/chapter-[0-9]+.*/)) {
          const path = W.location.pathname.split('/');
          W.location.pathname = `/${path[2]}/${path[3].match(/[0-9]+/)}`;
        } else if (W.location.search) {
          W.location.href = W.location.pathname;
        }
      },
    };
  },
};
