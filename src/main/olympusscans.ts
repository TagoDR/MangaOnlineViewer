// == OlympusScans =================================================================================
/* eslint-disable no-underscore-dangle */
export default {
  name: 'OlympusScans',
  url: /https?:\/\/(www.)?olympusscans.com\/capitulo\/.+\/.+/,
  homepage: 'https://olympusscans.com/',
  language: ['Spanish'],
  category: 'manga',
  waitVar: '__NUXT__',
  run() {
    const images = unsafeWindow.__NUXT__.data[window.location.pathname].chapter.pages;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h1')?.parentElement?.getAttribute('href'),
      pages: images.length,
      prev: document
        .querySelector('.i-heroicons-chevron-left-20-solid')
        ?.parentElement?.getAttribute('href'),
      next: document
        .querySelector('.i-heroicons-chevron-right-20-solid')
        ?.parentElement?.getAttribute('href'),
      listImages: images,
    };
  },
};
