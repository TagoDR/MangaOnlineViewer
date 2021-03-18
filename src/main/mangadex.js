// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: '.total-pages',
  waitAttr: ['.reader-image-wrapper img', 'src'],
  run() {
    let api = null;
    const url = `https://api.mangadex.org/v2/chapter/${W.location.pathname.match(/[0-9]+/)[0]}`;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });
    return {
      title: $('title').text().replace(' - MangaDex', ''),
      series: $('.manga-link').attr('href'),
      quant: api.data.pages.length,
      prev: $('.chapter-link-left').attr('href'),
      next: $('.chapter-link-right').attr('href'),
      listImages: api.data.pages.map((img) => `${api.data.server + api.data.hash}/${img}`),
    };
  },
};
