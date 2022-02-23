// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: 'a[href^=\'/chapter/\']',
  run() {
    let server = null;
    const chapterId = W.location.pathname.match(/\/chapter\/([^/]+)(\/[0-9]+)?/)[1];
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
      series: $("a[href^='/title/']:last").attr('href'),
      quant: server.chapter.data.length,
      prev: $('a[href^=\'/chapter/\']').eq(0).attr('href'),
      next: $('a[href^=\'/chapter/\']').eq(1).attr('href'),
      listImages: server.chapter.data.map((img) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`),
    };
  },
};
