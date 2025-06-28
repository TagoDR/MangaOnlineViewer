// == PornComixOnline ==============================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'PornComixOnline',
  url: /https?:\/\/(www\.)?porncomixone.net\/comic\/.+/,
  homepage: 'https://www.porncomixone.net',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    const images = [...document.querySelectorAll('figure a')];
    return {
      title: document.querySelector('.post-title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(img => img.getAttribute('href')!),
    };
  },
};
export default site;
