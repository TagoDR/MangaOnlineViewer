// == Hentai2Read ==================================================================================
export default {
  name: 'Hentai2Read',
  url: /https?:\/\/(www.)?hentai2read.com\/[^/]+\/[0-9]+\//,
  homepage: 'http://hentai2read.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    return {
      title: $('.reader-left-text').text().trim(),
      series: W.gData.mainURL,
      quant: W.gData.images.length,
      prev: W.gData.previousURL,
      next: W.gData.nextURL,
      listImages: W.gData.images.map((i) => `https://static.hentaicdn.com/hentai${i}`),
    };
  },
};
