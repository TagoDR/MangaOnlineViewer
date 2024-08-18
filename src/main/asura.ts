// == AsuraScans ===================================================================================
import { findClosestByContentEq, findOneByContentStarts } from '../utils/find';

export default {
  name: 'Asura Scans',
  url: /https?:\/\/(www.)?(asuracomic).(net)\/.+/,
  homepage: 'https://asuracomic.net/',
  language: ['English'],
  category: 'manga',
  waitEle: 'img[alt*="chapter"]',
  waitTime: 2000,
  run() {
    const images = [...document.querySelectorAll('img[alt*="chapter"]')];
    return {
      title: document.querySelector('h2')?.textContent?.trim(),
      series: findOneByContentStarts('p', 'All chapters are in')
        ?.querySelector('a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: findClosestByContentEq('h2', 'Prev', 'a')?.getAttribute('href'),
      next: findClosestByContentEq('h2', 'Next', 'a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
