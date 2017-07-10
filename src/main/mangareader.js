// == MangaReader ==================================================================================
export default {
  name: ['MangaReader', 'MangaPanda'],
  url: /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/,
  homepage: ['http://www.mangareader.net/', 'http://www.mangapanda.com/'],
  lang: ['eng'],
  category: 'manga',
  run() {
    const url = location.href + (location.href.lastIndexOf('/') !== location.href.length - 1 ? '/' : '');
    const num = parseInt($('select#pageMenu option:last').html(), 10);
    const chapter = $('#mangainfo_bas a');
    return {
      title: $('#mangainfo h1').text(),
      series: $('#mangainfo a').attr('href'),
      quant: num,
      prev: chapter.last().attr('href'),
      next: chapter.first().attr('href'),
      listPages: [...Array(num).keys()].map(i => url + (i + 1), num),
      img: 'img#img',
      before() {
        if (location.pathname.match(/\/.+\/.+\/chapter-[0-9]+.*/)) {
          const path = location.pathname.split('/');
          location.pathname = `/${path[2]}/${path[3].match(/[0-9]+/)}`;
        } else if (location.search) {
          location.href = location.pathname;
        }
      },
    };
  },
};
