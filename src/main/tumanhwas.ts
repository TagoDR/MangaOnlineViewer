// == TuManhwas  ===================================================================================
export default {
  name: 'TuManhwas',
  url: /https?:\/\/(www.)?tumanhwas.com\/view\/.+/,
  homepage: 'https://tumanhwas.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const chapter = Array.from(document.querySelectorAll('.listupd a'));
    const images = [...document.querySelectorAll('#chapter_imgs img')];
    return {
      title: document.querySelector('.releases h1')?.textContent?.trim(),
      series: chapter.find((el) => el.textContent?.includes('Lista'))?.getAttribute('href'),
      pages: images.length,
      prev: chapter.find((el) => el.textContent?.includes('Anterior'))?.getAttribute('href'),
      next: chapter.find((el) => el.textContent?.includes('Siguiente'))?.getAttribute('href'),
      listImages: images.map((item) => $(item).attr('src')),
    };
  },
};
