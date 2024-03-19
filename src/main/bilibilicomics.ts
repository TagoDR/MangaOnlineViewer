// == BilibiliComics ===============================================================================
export default {
  name: 'BilibiliComics',
  url: /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,
  homepage: 'https://www.bilibilicomics.net/',
  language: ['English'],
  category: 'manga',
  waitEle: '#__NUXT_DATA__',
  async run() {
    const json: [any] = JSON.parse(document.querySelector('#__NUXT_DATA__')?.innerHTML ?? '');
    const images = json.filter(
      (x) => typeof x === 'string' && /.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(x),
    );
    return {
      title: document.querySelector('.chapterTitle')?.textContent?.trim(),
      series: document.querySelector('.book-name')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelectorAll('.pre-next-btns').item(0)?.getAttribute('href'),
      next: document.querySelectorAll('.pre-next-btns').item(2)?.getAttribute('href'),
      listImages: images.map((image) => `https://static.comicfans.io/${image}`),
    };
  },
};
