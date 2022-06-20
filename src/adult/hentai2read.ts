// == Hentai2Read ==================================================================================
export default {
  name: 'Hentai2Read',
  url: /https?:\/\/(www.)?hentai2read.com\/[^/]+\/[0-9]+(.[0-9]+)?\//,
  homepage: 'http://hentai2read.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    return {
      title: $('.reader-left-text').text().trim(),
      series: window.gData.mainURL,
      pages: window.gData.images.length,
      prev: window.gData.previousURL,
      next: window.gData.nextURL,
      listImages: window.gData.images.map((i) => `https://static.hentaicdn.com/hentai${i}`),
    };
  },
};
