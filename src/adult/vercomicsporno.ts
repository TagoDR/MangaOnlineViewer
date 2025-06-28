// == Ver Mangas Porno =============================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: ['vermangasporno', 'vercomicsporno'],
  url: /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,
  homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
  language: [Language.SPANISH],
  category: Category.HENTAI,
  waitEle: 'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
  run(): IManga {
    const images = [
      ...document.querySelectorAll(
        'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
      ),
    ];
    return {
      title: document.querySelector('h1.titl, title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(
        img =>
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('data-src') ??
          img.getAttribute('src')!,
      ),
    };
  },
};
export default site;
