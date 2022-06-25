// == Batoto =======================================================================================
export default {
  name: 'Batoto',
  url: /https?:\/\/(www.)?bato.to\/chapter.*/,
  homepage: 'http://bato.to/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.page-img')];
    return {
      title: document.querySelector('.nav-title a')?.textContent?.trim(),
      series: document.querySelector('.nav-title a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
      next: document.querySelector('.nav-next a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
