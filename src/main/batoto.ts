// == Batoto =======================================================================================
export default {
  name: 'Batoto',
  url: /https?:\/\/(www.)?bato.to\/(chapter|title).*/,
  homepage: 'https://bato.to/',
  language: ['English'],
  category: 'manga',
  waitEle:'div[name="image-item"] img, .page-img',
  run() {
    if (window.location.pathname.startsWith('/title')) {
      if (window.location.search !== '?load=2') {
        window.location.search = '?load=2';
      }
      const images = [...document.querySelectorAll('div[name="image-item"] img')];
      return {
        title: document.querySelector('h6')?.textContent?.trim(),
        series: document.querySelector('h3 a')?.getAttribute('href'),
        pages: images.length,
        prev: [...document.querySelectorAll('span')]
          .find((item) => item.textContent?.endsWith('Prev Chapter'))
          ?.parentElement?.getAttribute('href'),
        next: [...document.querySelectorAll('span')]
          .find((item) => item.textContent?.startsWith('Next Chapter'))
          ?.parentElement?.getAttribute('href'),
        listImages: images.map((img) => img.getAttribute('src')),
      };
    } else {
      const images = [...document.querySelectorAll('.page-img')];
      return {
        title: document.querySelector('.nav-title a')?.textContent?.trim(),
        series: document.querySelector('.nav-title a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
        next: document.querySelector('.nav-next a')?.getAttribute('href'),
        listImages: images.map((img) => img.getAttribute('src')),
      };
    }
  },
};
