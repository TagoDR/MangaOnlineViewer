// == OlympusBiblioteca ============================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'OlympusBiblioteca',
  url: /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,
  homepage: 'https://olympusbiblioteca.com/',
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
      listImages: images.map(img => img.getAttribute('src')!),
    };
  },
};
export default site;
