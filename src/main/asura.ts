// == AsuraScans and FlameScans ====================================================================
import { findClosestByContentEq, findOneByContentStarts } from '../utils/find';

export default {
  name: 'Asura Scans',
  url: /https?:\/\/(www.)?(asuracomic).(net)\/.+/,
  homepage: 'https://asuracomic.net/',
  language: ['English'],
  category: 'manga',
  waitEle: 'img[alt="chapter"]',
  run() {
    const images = [...document.querySelectorAll('img[alt="chapter"]')];
    return {
      title: document.querySelector('h2')?.textContent?.trim(),
      series: findOneByContentStarts('p a', 'All chapters are in')?.getAttribute('href'),
      pages: images.length,
      prev: findClosestByContentEq('h2', 'Prev', 'a')?.getAttribute('href'),
      next: findClosestByContentEq('h2', 'Next', 'a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
