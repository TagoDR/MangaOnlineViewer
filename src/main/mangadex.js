// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: '.menu a:eq(1) , .md--reader a:eq(1)',
  run() {
    let pages = null;
    let server = null;
    const chapterId = W.location.pathname.match(/\/chapter\/([^/]+)(\/[0-9]+)?/)[1];
    const url = `https://api.mangadex.org/chapter/${chapterId}`;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        pages = res;
      },
    });
    const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
    $.ajax({
      type: 'GET',
      url: home,
      async: false,
      success(res) {
        server = res;
      },
    });
    return {
      title: $('title').text().replace(' - MangaDex', ''),
      series: $('.hidden-md-and-down').attr('href'),
      quant: pages.data.attributes.data.length,
      prev: $('.menu a:eq(1)').attr('href'),
      next: $('.md--reader a:eq(1)').attr('href'),
      listImages: pages.data.attributes.data.map((img) => `${server.baseUrl}/data/${pages.data.attributes.hash}/${img}`),
    };
  },
};
