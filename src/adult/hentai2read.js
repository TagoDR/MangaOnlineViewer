// == Hentai2Read ==================================================================================
export default {
  name: 'Hentai2Read',
  url: /https?:\/\/(www.)?hentai2read.com\/.+\/.+\//,
  homepage: 'http://hentai2read.com/',
  lang: ['eng'],
  category: 'hentai',
  run() {
    const url = location.pathname.split('/');
    const num = $('.pageDropdown:first li').length;
    const origin = $('.breadcrumb a:eq(2)');
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map(i => `/${url[1]}/${url[2]}/${i + 1}/`),
      img: 'img#arf-reader',
    };
  },
};
