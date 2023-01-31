// == MReader ======================================================================================
export default {
  name: ['MReader', 'MangaGeko'],
  url: /https?:\/\/(www.)?(mreader|mangageko).com?\/reader\/.*/,
  homepage: ['https://www.mreader.co/', 'https://www.mangageko.com/'],
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
