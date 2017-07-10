// == MangaStream ==================================================================================
export default {
  name: 'MangaStream',
  url: /https?:\/\/(www.)?(mangastream|readms)(.net|.com)\/r.*\/.+/,
  homepage: 'http://mangastream.com/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const url = location.href.substring(0, location.href.lastIndexOf('/') + 1);
    const num = parseInt($('div.controls div.btn-group ul.dropdown-menu li:last').text().match(/[0-9]+/), 10);
    const chapter = $('.dropdown-menu:eq(1) a');
    return {
      title: $('.btn:eq(0)').text().trim(),
      series: $('div.controls div.btn-group ul.dropdown-menu:first li a:last').attr('href'),
      quant: num,
      prev: chapter.eq(chapter.index(chapter.filter(`[href*='${location.pathname}']`)) + 1).attr('href'),
      next: chapter.eq(chapter.index(chapter.filter(`[href*='${location.pathname}']`)) - 1).attr('href'),
      listPages: [...Array(num).keys()].map(i => url + (i + 1)),
      img: 'img#manga-page',
    };
  },
};
