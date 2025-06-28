// == KingComix ====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: ['KingComix', 'Chochox', 'Comics18'],
  url: /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,
  homepage: ['https://kingcomix.com/', 'https://chochox.com/porno/', 'https://comics18.org/'],
  language: [Language.ENGLISH, Language.SPANISH],
  category: Category.HENTAI,
  run(): IManga {
    const src = [
      ...document.querySelectorAll('figure img, .entry-content img:not(a img), .wp-content img'),
    ];
    return {
      title: document.querySelector('h1.singleTitle-h1')?.textContent?.trim(),
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src.map(
        img =>
          img.getAttribute('data-src') ??
          img.getAttribute('data-full-url') ??
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('src')!,
      ),
    };
  },
};
export default site;
