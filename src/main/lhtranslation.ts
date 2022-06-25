// == LHTranslation ================================================================================
export default {
  name: 'LHTranslation',
  url: /https?:\/\/(www.)?lhtranslation.net\/read.+/,
  homepage: 'https://lhtranslation.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('.form-control option:checked');
    const images = [...document.querySelectorAll('img.chapter-img')];
    return {
      title: document.querySelector('.chapter-img.tieude font')?.textContent?.trim(),
      series: document.querySelector('.navbar-brand.manga-name')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
