// == MangaDemon ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangademon: ISite = {
  name: 'MangaDemon',
  url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
  homepage: 'https://demonicscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  async run(): Promise<IManga> {
    const response = await fetch(location.href);
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, 'text/html');
    const images = [...doc.querySelectorAll('.imgholder')];
    return {
      title: doc.querySelector('title')?.textContent?.trim(),
      series: doc.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: doc.querySelector('.prevchap')?.getAttribute('href'),
      next: doc.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images.map(
        (img) => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
      ),
    };
  },
};
export default mangademon;
