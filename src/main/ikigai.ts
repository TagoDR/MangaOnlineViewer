// == Ikigai Mangas ================================================================================

import { Category, type IManga, type ISite, Language } from '../types';
import { findClosestByContentEq } from '../utils/find';

const site: ISite = {
  name: ['Ikigai Mangas - EltaNews', 'Ikigai Mangas - Ajaco'],
  url: /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/,
  homepage: ['https://visorikigai.eltanews.com/', 'https://visorikigai.ajaco.net/'],
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const images =
      document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi) ??
      [];
    return {
      title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
      pages: images?.length,
      prev: findClosestByContentEq('span', 'Siguiente')?.getAttribute('href'),
      next: findClosestByContentEq('span', 'Anterior')?.getAttribute('href'),
      listImages: images,
    };
  },
};
export default site;
