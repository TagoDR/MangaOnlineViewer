// == MangaDemon ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangademon: ISite = {
  name: 'MangaDemon',
  url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
  homepage: 'https://demonicscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('.imgholder')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prevchap')?.getAttribute('href'),
      next: document.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images.map(
        img => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
      ),
    };
  },
};
export default mangademon;
