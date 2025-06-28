// == MangaToons ===================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'MangaToons',
  url: /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,
  homepage: 'https://mangatoon.mobi/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: '.pictures img:not(.cover)',
  run(): IManga {
    const images = [...document.querySelectorAll('.pictures img:not(.cover)')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.top-left a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.page-icons-prev')?.getAttribute('href'),
      next: document.querySelector('.page-icons-next')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('data-src')!),
    };
  },
};
export default site;
