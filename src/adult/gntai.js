// == GNTAI ========================================================================================
export default {
  name: 'GNTAI.xyz',
  url: /https?:\/\/(www.)?gntai.net\/.+\/.+/,
  homepage: 'http://www.gntai.net/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    return {
      title: $('h1:last').text().trim(),
      series: '#',
      pages: $('#select-page-list option').get().length,
      prev: '#',
      next: '#',
      listPages: $('#main script').text().match(/https[^"]+/g),
      img: '#img-page img',
    };
  },
};
