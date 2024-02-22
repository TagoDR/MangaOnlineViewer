// == Comick =======================================================================================
export default {
  name: 'Comick',
  url: /https?:\/\/(www\.)?comick.io\/comic\/.+\/.+/,
  homepage: 'https://comick.io/home',
  language: ['English'],
  category: 'manga',
  waitEle: '#images-reader-container img',
  run() {
    const images = [...document.querySelectorAll('#images-reader-container img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document
        .querySelector('main div div div div div div div div a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a:first-child button')?.parentElement?.getAttribute('href'),
      next: document.querySelector('a:last-child button')?.parentElement?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
