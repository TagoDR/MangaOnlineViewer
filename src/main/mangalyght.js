// == MangaLyght ===================================================================================
export default {
  name: 'MangaLyght',
  url: /https?:\/\/manga.lyght.net\/series\/.+\.html/,
  homepage: 'http://manga.lyght.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = $('.selectchapter option:selected');
    const url = `${$("form[name='pageSelector1']").attr('action')}?ch=${chapter
      .val()
      .replace(' ', '+')}&page=`;
    const num = $('.selectpage option').length;
    const origin = $('div.entry h1 a');
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: `${W.location.pathname}?ch=${chapter.prev().val()}`.replace(' ', '+'),
      next: `${W.location.pathname}?ch=${chapter.next().val()}`.replace(' ', '+'),
      listPages: [...Array(num).keys()].map((i) => url + (i + 1)),
      img: '#mainimage',
    };
  },
};
