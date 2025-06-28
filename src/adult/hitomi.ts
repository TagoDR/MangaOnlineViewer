// == Hitomi =======================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'Hitomi',
  url: /https?:\/\/hitomi.la\/reader\/.+/,
  homepage: 'https://hitomi.la/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitAttr: ['#comicImages img', 'src'],
  waitVar: 'galleryinfo',
  run(): IManga {
    return {
      title: document.querySelector('title')?.textContent?.replace('| Hitomi.la', '').trim(),
      series: document.querySelector('.brand')?.getAttribute('href'),
      pages: unsafeWindow.galleryinfo.files.length,
      prev: '#',
      next: '#',
      listImages: unsafeWindow.galleryinfo.files.map((file: string) =>
        unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo, file, 'webp'),
      ),
    };
  },
};
export default site;
