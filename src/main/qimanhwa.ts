// == QiManhwa ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { findClosestByContentEq } from '../utils/find';

const qimanhwa: ISite = {
  name: 'QiManhwa',
  url: /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,
  homepage: 'https://qimanhwa.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'img[alt*="Chapter"]',
  run(): IManga {
    const images = [...document.querySelectorAll('img[alt*="Chapter"]')];
    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      series: findClosestByContentEq('button', 'Home', 'a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.lucide-chevron-left')?.closest('a')?.getAttribute('href'),
      next: document.querySelector('.lucide-chevron-right')?.closest('a')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default qimanhwa;
