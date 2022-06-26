// == Hentai2Read ==================================================================================
export default {
  name: 'Hentai2Read',
  url: /https?:\/\/(www.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,
  homepage: 'https://hentai2read.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: document.querySelector('.reader-left-text')?.textContent?.trim(),
      series: W.gData.mainURL,
      pages: W.gData.images.length,
      prev: W.gData.previousURL,
      next: W.gData.nextURL,
      listImages: W.gData.images.map((i: string) => `https://static.hentaicdn.com/hentai${i}`),
    };
  },
};
