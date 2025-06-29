// == FSIComics ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const fsicomics: ISite = {
  name: 'FSIComics',
  url: /https?:\/\/(www\.)?fsicomics.com\/.+/,
  homepage: 'https://fsicomics.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    const images = [...document.querySelectorAll('.wp-block-gallery img')];
    return {
      title: document.querySelector('.s-title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-large-file') ?? ''),
    };
  },
};
export default fsicomics;
