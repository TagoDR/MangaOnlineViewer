// == xyzcomics ====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'xyzcomics',
  url: /https?:\/\/(www\.)?xyzcomics.com\/.+/,
  homepage: 'https://xyzcomics.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    const images = [...document.querySelectorAll('.jig-link')];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(img => img.getAttribute('href')!),
    };
  },
};
export default site;
