// == M440 =========================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'M440',
  url: /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,
  homepage: 'https://m440.in/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('#all img')];
    const chapter = document.querySelector('#chapter-list li.active');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('#navbar-collapse-1 ul:nth-child(2) a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.firstElementChild?.getAttribute('href'),
      next: chapter?.previousElementSibling?.firstElementChild?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('data-src') ?? ''),
    };
  },
};
export default site;
