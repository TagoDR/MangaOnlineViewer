// == TuManhwas  ===================================================================================
export default {
  name: 'TuManhwas',
  url: /https?:\/\/(www\.)?tumanhwas.com\/news\/.+/,
  homepage: 'https://tumanhwas.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#chapter_imgs img')];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      series: document.querySelector('.nextprev a:nth-child(2)')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.nextprev a:nth-child(1)')?.getAttribute('href'),
      next: document.querySelector('.nextprev a:nth-child(3)')?.getAttribute('href'),
      listImages: images.map((item) => $(item).attr('src')),
    };
  },
};
