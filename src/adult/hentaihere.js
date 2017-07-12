// == HentaIHere ===================================================================================
export default {
  name: 'HentaIHere',
  url: /https?:\/\/(www.)?hentaihere.com\/.+\/.+\//,
  homepage: 'https://www.hentaihere.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = $('#reader-content img').attr('src');
    const size = src.match(/([0-9]+)\..+/)[1].length;
    const ext = src.match(/[0-9]+(\..+)/)[1];
    const num = $('#pageDropdown li').length;
    const origin = $('.breadcrumb a:eq(2)');
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map(i =>
        src.replace(/[0-9]+.jpg/, String(`00000${i + 1}`).slice(-1 * size) + ext)),
    };
  },
};
