// == VortexScans ==================================================================================
import { findClosestByContentEq } from '../utils/find';

export default {
  name: 'Vortex Scans',
  url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
  homepage: 'https://vortexscans.org/',
  language: ['English'],
  category: 'manga',
  waitEle: 'img[alt*="Chapter"]',
  run() {
    const images = [...document.querySelectorAll('img[alt*="Chapter"]')];
    return {
      title: document
        .querySelector('time')
        ?.closest('div')
        ?.querySelector('div')
        ?.textContent?.trim(),
      series: document.querySelector('time')?.closest('a')?.getAttribute('href'),
      pages: images.length,
      prev: findClosestByContentEq('button', 'Prev', 'a')?.getAttribute('href'),
      next: findClosestByContentEq('button', 'Next', 'a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
