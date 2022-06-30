// == MangaFreak ===================================================================================
export default {
  name: 'MangaFreak',
  url: /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/,
  homepage: 'https://mangafreak.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>(
      '.chapter_list select option:checked',
    );
    const images = [...document.querySelectorAll('.mySlides img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.title a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
