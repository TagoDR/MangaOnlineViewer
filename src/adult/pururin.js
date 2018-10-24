// == Pururin ======================================================================================
export default {
  name: 'Pururin',
  url: /https?:\/\/(www.)?pururin.io\/(view|read)\/.+\/.+\/.+/,
  homepage: 'http://pururin.io/',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['.image-holder img', 'src'],
  run() {
    const src = $('.image-holder img').attr('src');
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
