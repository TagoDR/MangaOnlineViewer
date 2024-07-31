// == ReaperScans ==================================================================================
export default {
  name: 'ReaperScans',
  url: /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,
  homepage: 'https://reaperscans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#content .container img:not(.rounded)')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('button .fa-house')?.closest('a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.fa-chevron-left')?.closest('a')?.getAttribute('href'),
      next: document.querySelector('.fa-chevron-right')?.closest('a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
    };
  },
};
