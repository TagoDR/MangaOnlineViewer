// == 3Hentai ======================================================================================
export default {
  name: '3Hentai',
  url: /https?:\/\/(www\.)?3hentai.net\/d\/.+\/.+/,
  homepage: 'https://3hentai.net/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'readerPages',
  run() {
    return {
      title: unsafeWindow.readerPages.title.replace(/- Page.+/, '').trim(),
      series: unsafeWindow.readerPages.baseUri.replace('%s', ''),
      pages: unsafeWindow.readerPages.lastPage,
      prev: '#',
      next: '#',
      listImages: Object.keys(unsafeWindow.readerPages.pages).map((img) =>
        unsafeWindow.readerPages.baseUriImg.replace('%s', unsafeWindow.readerPages.pages[img].f),
      ),
    };
  },
};
