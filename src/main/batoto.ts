// == Batoto =======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { findClosestByContentEnds, findClosestByContentStarts } from '../utils/find';

const batoto: ISite = {
  name: 'Batoto',
  url: /https?:\/\/(www\.)?(\w(ba)?to|readtoto|batocomic|comiko|battwo|batotoo|batotwo).(to|com|net|org)\/(chapter|title).*/,
  homepage: 'https://rentry.co/batoto',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'div[name="image-item"] img, .page-img',
  run(): IManga {
    if (window.location.pathname.startsWith('/title')) {
      if (window.location.search !== '?load=2') {
        window.location.search = '?load=2';
      }
      const images = [...document.querySelectorAll('div[name="image-item"] img')];
      return {
        title: document.querySelector('h6')?.textContent?.trim(),
        series: document.querySelector('h3 a')?.getAttribute('href'),
        pages: images.length,
        prev: findClosestByContentEnds('span', 'Prev Chapter', 'a')?.getAttribute('href'),
        next: findClosestByContentStarts('span', 'Next Chapter', 'a')?.getAttribute('href'),
        listImages: images.map((img) => img.getAttribute('src') ?? ''),
      };
    }
    const images = [...document.querySelectorAll('.page-img')];
    return {
      title: document.querySelector('.nav-title a')?.textContent?.trim(),
      series: document.querySelector('.nav-title a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
      next: document.querySelector('.nav-next a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src') ?? ''),
    };
  },
};
export default batoto;
