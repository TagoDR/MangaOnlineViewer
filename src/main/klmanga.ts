// == KLManga ======================================================================================
export default {
  name: 'KLManga',
  url: /https?:\/\/(www.)?klmanga.com\/.+chapter.+/,
  homepage: 'https://klmanga.com/',
  language: ['Raw'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.chapter-content img')];
    const chapter = document.querySelectorAll('.form-control')[0].querySelector('option:checked');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.navbar-brand')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
