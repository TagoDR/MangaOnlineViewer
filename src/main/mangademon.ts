// == MangaDemon ===================================================================================
export default {
  name: 'MangaDemon',
  url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
  homepage: 'https://demonicscans.org/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.imgholder')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prevchap')?.getAttribute('href'),
      next: document.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
    };
  },
};
