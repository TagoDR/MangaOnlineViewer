// == MangaGeko ====================================================================================
export default {
  name: ['MangaGeko'],
  url: /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,
  homepage: ['https://www.mgeko.com/', 'https://www.mgeko.cc/'],
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#chapter-reader img')];
    return {
      title: document.querySelector('.titles')?.textContent?.trim(),
      series: document.querySelector('.titles a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.chnav.prev')?.getAttribute('href'),
      next: document.querySelector('.chnav.next')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
