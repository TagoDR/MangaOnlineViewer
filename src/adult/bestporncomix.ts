// == BestPornComix ================================================================================
export default {
  name: 'BestPornComix',
  url: /https?:\/\/(www.)?bestporncomix.com\/gallery\/.+/,
  homepage: 'https://www.bestporncomix.com',
  language: ['English'],
  category: 'hentai',
  timer: 5000,
  run() {
    const images = [...document.querySelectorAll('figure a')];
    return {
      title: document.querySelector('h1.entry-title')?.textContent?.trim(),
      series: '#',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('href')),
    };
  },
};
