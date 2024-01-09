// == FSIComics ====================================================================================
export default {
  name: 'FSIComics',
  url: /https?:\/\/(www\.)?fsicomics.com\/.+/,
  homepage: 'https://fsicomics.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const images = [...document.querySelectorAll('.wp-block-gallery img')];
    return {
      title: document.querySelector('.s-title')?.textContent?.trim(),
      series: '',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-large-file')),
    };
  },
};
