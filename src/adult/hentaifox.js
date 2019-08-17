// == HentaiFox ====================================================================================
export default {
  name: 'HentaiFox',
  url: /https?:\/\/(www.)?hentaifox.com\/g\/.+/,
  homepage: 'http://www.hentaifox.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = $('.pag_info option').length - 2;
    return {
      title: $('title').text().trim().match(/.+\| (.+) - HentaiFox$/)[1],
      series: $('.return a').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map((i) => `../${i + 1}/`),
      img: '.gallery_content img.lazy',
    };
  },
};
