// == KLManga ======================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'KLManga',
  url: /https?:\/\/(www\.)?klmanga.com\/.+chapter.+/,
  homepage: 'https://klmanga.com/',
  language: [Language.RAW],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('.chapter-content img')];
    const chapter = document.querySelectorAll('.form-control')[0].querySelector('option:checked');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.navbar-brand')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map(img => img.getAttribute('src')!),
    };
  },
};
export default site;
