// == Tsumino ======================================================================================
export default {
  name: 'Tsumino',
  url: /https?:\/\/(www.)?tsumino.com\/Read\/View\/.+(\/.+)?/,
  waitVar: 'reader_page_locs',
  homepage: 'http://tsumino.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    return {
      title: $('title').text().trim().match(/(.+: Read )(.+)/)[2],
      series: $('#backToIndex').next('a').attr('href'),
      quant: $('h1').text().match(/[0-9]+$/),
      prev: '#',
      next: '#',
      listImages: W.reader_page_locs.map(x => `${W.reader_baseobj_url}?name=${encodeURIComponent(x)}`),
    };
  },
};
