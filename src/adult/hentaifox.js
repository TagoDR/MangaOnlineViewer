// == HentaiFox ====================================================================================
export default {
  name: 'HentaiFox',
  url: /https?:\/\/(www.)?hentaifox.com\/g\/.+/,
  homepage: 'http://www.hentaifox.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  run() {
    const num = parseInt($('.total_pages:first').text(), 10);
    const src = $('#gimg').attr('src').replace(/\d+.\w+$/, '');

    function findExt(i) {
      const c = W.g_th[i][0];
      if (c === 'p') return '.png';
      if (c === 'b') return '.bmp';
      if (c === 'g') return '.gif';
      return '.jpg';
    }

    return {
      title: $('title').text().trim().replace(/ - Page .+/, ''),
      series: $('.return a').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map((i) => src + (i + 1) + findExt(i + 1)),
    };
  },
};
