// == Ikigai Mangas ================================================================================
import { findClosestByContentEq } from '../utils/find';

export default {
  name: ['Ikigai Mangas - EltaNews', 'Ikigai Mangas - Ajaco'],
  url: /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/,
  homepage: ['https://visorikigai.eltanews.com/', 'https://visorikigai.ajaco.net/'],
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = document
      .querySelector('script[type="qwik/json"]')
      ?.textContent?.match(/http[^'"]+webp/gi);
    return {
      title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
      pages: images?.length,
      prev: findClosestByContentEq('span','Siguiente')?.getAttribute('href'),
      next: findClosestByContentEq('span','Anterior')?.getAttribute('href'),
      listImages: images,
    };
  },
};
