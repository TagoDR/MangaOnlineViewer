// == MangaGeko ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mgeko: ISite = {
  name: ['MangaGeko.com', 'MangaGeko.cc'],
  url: /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,
  homepage: ['https://www.mgeko.com/', 'https://www.mgeko.cc/'],
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('img[id^="image-"]')];
    return {
      title: document.querySelector('.titles')?.textContent?.trim(),
      series: document.querySelector('.titles a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.chnav.prev')?.getAttribute('href'),
      next: document.querySelector('.chnav.next')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default mgeko;
