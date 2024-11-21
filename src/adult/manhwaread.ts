// == ManhwaRead ===================================================================================
import { findClosestByContentEq } from '../utils/find';

export default {
  name: 'ManhwaRead',
  url: /https?:\/\/(www\.)?manhwaread.com\/.+/,
  homepage: 'https://www.manhwaread.com',
  language: ['English'],
  category: 'hentai',
  waitEle: '#readingContent img',
  run() {
    const images = [...document.querySelectorAll('#readingContent img')];
    return {
      title: document
        .querySelector('#readingNavTop div:has(>h1)')
        ?.textContent?.trim()
        .replace(/\n/g, ''),
      series: document.querySelector('#readingNavTop a')?.getAttribute('href'),
      pages: images.length,
      prev: findClosestByContentEq('span', 'Previous')?.getAttribute('href'),
      next: findClosestByContentEq('span', 'Next')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
