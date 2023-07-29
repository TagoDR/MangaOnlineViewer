// == MangasIn ===================================================================================
export default {
  name: 'MangasIn',
  url: /https?:\/\/(www.)?mangas.in\/manga\/.+\/.+\/\d+/,
  homepage: 'https://mangas.in/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#all img')];
    const chapter = document.querySelector('#chapter-list li.active');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('#navbar-collapse-1 ul:nth-child(2) a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.firstElementChild?.getAttribute('href'),
      next: chapter?.previousElementSibling?.firstElementChild?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('data-src')),
    };
  },
};
