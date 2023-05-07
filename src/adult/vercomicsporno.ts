// == Ver Mangas Porno =============================================================================
export default {
  name: ['vermangasporno', 'vercomicsporno'],
  url: /https?:\/\/(www.)?(vermangasporno|vercomicsporno).com\/.+/,
  homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
  language: ['Spanish'],
  category: 'hentai',
  waitEle: 'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
  run() {
    const images = [
      ...document.querySelectorAll(
        'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
      ),
    ];
    return {
      title: document.querySelector('h1.titl, title')?.textContent?.trim(),
      series: '#',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(
        (img) =>
          img.getAttribute('data-lazy-src') ||
          img.getAttribute('data-src') ||
          img.getAttribute('src'),
      ),
    };
  },
};
