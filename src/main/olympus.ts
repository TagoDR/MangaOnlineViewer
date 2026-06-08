// == Olympus ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const olympus: ISite = {
  name: 'Olympus',
  url: /https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,
  homepage: 'https://olympusxyz.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('section img.w-full.h-full')];
    return {
      title: document.querySelector('title')?.textContent?.replace(/\|.+/, '').trim(),
      series: document.querySelector('h1')?.closest('a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a[name="capitulo anterior"]')?.getAttribute('href'),
      next: document.querySelector('a[name="capitulo siguiente"]')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default olympus;
