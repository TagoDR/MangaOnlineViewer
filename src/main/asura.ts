// == AsuraScans ===================================================================================
import { findClosestByContentEq, findOneByContentStarts } from '../utils/find';
import { waitForTimer } from '../utils/waitFor.ts';

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
    const ref = findOneByContentStarts('p', 'All chapters are in');
    return {
      title: ref?.previousSibling?.textContent?.trim(),
      series: ref?.querySelector('a')?.getAttribute('href'),
      pages: images.length,
      prev: findClosestByContentEq('h2', 'Prev', 'a')?.getAttribute('href'),
      next: findClosestByContentEq('h2', 'Next', 'a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
      async before() {
        document
          .querySelectorAll('button.absolute')
          .forEach((e) => e.dispatchEvent(new Event('click', { bubbles: true })));
        await waitForTimer(1000);
      },
    };
  },
};
