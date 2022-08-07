// == Tapas ======================================================================================
export default {
  name: 'KLManga',
  url: /https?:\/\/(www.)?tapas.io\/episode\/.+/,
  homepage: 'https://tapas.io/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.viewer__body img.content__img')];
    const chapter = document.querySelector('.js-episodes .body__item--selected');
    return {
      title: document.querySelector('.viewer__header .title')?.textContent?.trim(),
      series: document.querySelector('.vw-nav__left a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('data-href'),
      next: chapter?.nextElementSibling?.getAttribute('data-href'),
      listImages: images.map((img) => img.getAttribute('data-src') || img.getAttribute('src')),
    };
  },
};
