// == MangaTigre ===================================================================================
export default {
  name: 'MangaTigre',
  url: /https?:\/\/(www.)?mangatigre.net\/.+\/.+\/.+/,
  homepage: 'https://www.mangatigre.net/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.chapter-content img')];
    const chapter = document.querySelector('.form-control option:checked');
    return {
      title: document.querySelector('.page-title')?.textContent?.trim(),
      series: document.querySelector('.breadcrumb li:nth-child(3) a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
    };
  },
};
