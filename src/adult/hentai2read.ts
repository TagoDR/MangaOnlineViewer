// == Hentai2Read ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'Hentai2Read',
  url: /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,
  homepage: 'https://hentai2read.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    return {
      title: document.querySelector('.reader-left-text')?.textContent?.trim(),
      series: unsafeWindow.gData.mainURL,
      pages: unsafeWindow.gData.images.length,
      prev: unsafeWindow.gData.previousURL,
      next: unsafeWindow.gData.nextURL,
      listImages: unsafeWindow.gData.images.map(
        (i: string) => `https://static.hentaicdn.com/hentai${i}`,
      ),
    };
  },
};
export default site;
