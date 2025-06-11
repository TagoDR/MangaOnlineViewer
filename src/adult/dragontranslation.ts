// == Dragon Translation ===============================================================================================
export default {
  name: 'Dragon Translation',
  url: /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,
  homepage: 'https://dragontranslation.net/es',
  language: ['Spanish'],
  category: 'hentai',
  waitEle: '#chapter_imgs img',
  run() {
    const images = [...document.querySelectorAll('#chapter_imgs img')]
      .map((img) => img.getAttribute('src'))
      .filter((src) => src && src !== '/discord2.jpg');
    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      series: document.querySelector('h2 + div a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.fa-chevron-circle-left')?.parentElement?.getAttribute('href'),
      next: document.querySelector('.fa-chevron-circle-right')?.parentElement?.getAttribute('href'),
      listImages: images,
    };
  },
};
