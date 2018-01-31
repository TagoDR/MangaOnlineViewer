// == MangaFox =====================================================================================
export default {
  name: 'MangaFox',
  url: /https?:\/\/(www.)?(mangafox.la|fanfox.net)\/manga\/.+\/.+\//,
  homepage: 'http://mangafox.la/',
  language: ['English'],
  category: 'manga',
  run() {
    const num = parseInt($('select.m:first option:last').prev().val(), 10);
    return {
      title: $('#series .no').text().trim(),
      series: $('#series a:last').attr('href'),
      quant: num,
      prev: $('#chnav p:first a').attr('href'),
      next: $('#chnav p:last a').attr('href'),
      listPages: [...Array(num).keys()].map(i => `${i + 1}.html`),
      img: 'img#image',
    };
  },
};
