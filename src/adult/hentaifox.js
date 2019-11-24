// == HentaiFox ====================================================================================
export default {
  name: 'HentaiFox',
  url: /https?:\/\/(www.)?hentaifox.com\/g\/.+/,
  homepage: 'http://www.hentaifox.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt($('.total_pages:first').text(), 10);
    return {
      title: $('title').text().trim().replace(/ - Page .+/, ''),
      series: $('.return a').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map((i) => '../'.concat(i + 1, '/')),
      img: '#gimg',
    };
  },
};
