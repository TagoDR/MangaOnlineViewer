// == PornComicsHD =================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const porncomicshd: ISite = {
  name: 'PornComicsHD',
  url: /https?:\/\/(www\.)?porncomicshd.com\/es.*/,
  homepage: 'https://porncomicshd.com/es',
  language: [Language.SPANISH],
  category: Category.HENTAI,
  waitEle: 'app-comic-reader img',
  async run(): Promise<IManga> {
    const img = [...document.querySelectorAll('app-comic-reader img')];
    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      pages: img.length,
      prev: '#',
      next: '#',
      lazy: false,
      listImages: img.map((i) => i.getAttribute('src') ?? ''),
    };
  },
};
export default porncomicshd;
