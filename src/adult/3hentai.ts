// == 3Hentai ======================================================================================
export default {
  name: '3Hentai',
  url: /https?:\/\/(www.)?3hentai.net\/d\/.+\/.+/,
  homepage: 'https://3hentai.net/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'readerPages',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: W.readerPages.title.replace(/- Page.+/, '').trim(),
      series: W.readerPages.baseUri.replace('%s', ''),
      pages: W.readerPages.lastPage,
      prev: '#',
      next: '#',
      listImages: Object.keys(W.readerPages.pages).map((img) =>
        W.readerPages.baseUriImg.replace('%s', W.readerPages.pages[img].f),
      ),
    };
  },
};
