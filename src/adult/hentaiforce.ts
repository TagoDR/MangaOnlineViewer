// == HentaiForce ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'HentaiForce',
  url: /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,
  homepage: 'https://hentaiforce.net/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    return {
      title: document
        .querySelector('h1')
        ?.textContent?.trim()
        .replace(/ - Page .+$/, ''),
      series: document.querySelector('.reader-go-back ')?.getAttribute('href'),
      pages: unsafeWindow.readerPages.lastPage,
      prev: '#',
      next: '#',
      listImages: Array(unsafeWindow.readerPages.lastPage)
        .fill(0)
        .map((_, i) =>
          unsafeWindow.readerPages.baseUriImg
            .replace('%c', unsafeWindow.readerPages.pages[i + 1].l)
            .replace('%s', unsafeWindow.readerPages.pages[i + 1].f),
        ),
    };
  },
};
export default site;
