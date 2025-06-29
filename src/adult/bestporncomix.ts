// == BestPornComix ================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'BestPornComix',
  url: /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,
  homepage: 'https://www.bestporncomix.com',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitTime: 5000,
  run(): IManga {
    const images = [...document.querySelectorAll('figure a')];
    return {
      title: document.querySelector('h1.entry-title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(img => img.getAttribute('href') ?? ''),
    };
  },
};
export default site;
