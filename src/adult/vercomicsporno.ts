// == Ver Mangas Porno =============================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const vercomicsporno: ISite = {
  name: ['vermangasporno', 'vercomicsporno'],
  url: /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,
  homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
  language: [Language.SPANISH],
  category: Category.HENTAI,
  waitEle: '.pp-comic-content img',
  run(): IManga {
    const images = [...document.querySelectorAll('.pp-comic-content img')];
    return {
      title: document.querySelector('h1.titl, title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(
        img =>
          img.getAttribute('data-lazy-src') ??
          img.getAttribute('data-src') ??
          img.getAttribute('src') ??
          '',
      ),
    };
  },
};
export default vercomicsporno;
