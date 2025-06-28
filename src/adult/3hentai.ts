// == 3Hentai ======================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: ['3Hentai', 'HentaiVox'],
  url: /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,
  homepage: ['https://3hentai.net/', 'https://hentaivox.com/'],
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitVar: 'readerPages',
  run(): IManga {
    return {
      title: unsafeWindow.readerPages.title.replace(/- Page.+/, '').trim(),
      series: unsafeWindow.readerPages.baseUri.replace('%s', ''),
      pages: unsafeWindow.readerPages.lastPage,
      prev: '#',
      next: '#',
      listImages: Object.keys(unsafeWindow.readerPages.pages).map(img =>
        unsafeWindow.readerPages.baseUriImg.replace('%s', unsafeWindow.readerPages.pages[img].f),
      ),
    };
  },
};
export default site;
