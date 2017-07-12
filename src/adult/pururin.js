// == Pururin ======================================================================================
export default {
  name: 'Pururin',
  url: /https?:\/\/(www.)?pururin.us\/(view|read)\/.+\/.+\/.+/,
  homepage: 'http://pururin.us/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.images-holder img',
  waitAttr: 'src',
  run() {
    const src = $('.images-holder img').attr('src');
    const num = $('.form-control option').length;
    return {
      title: $('.title').text().trim(),
      series: $('.control a:eq(3)').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map(i => src.replace(/\/[0-9]+\./, `/${i + 1}.`)),
    };
  },
};
