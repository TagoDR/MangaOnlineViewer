// == KingComix ====================================================================================
export default {
  name: 'KingComix',
  url: /https?:\/\/(www.)?kingcomix.com\/.+/,
  homepage: 'https://kingcomix.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = [...document.querySelectorAll('figure img, .entry-content img.lazy')];
    return {
      title: document.querySelector('h1.singleTitle-h1')?.textContent?.trim(),
      series: '#',
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src.map(
        (img) =>
          img.getAttribute('data-src') ||
          img.getAttribute('data-full-url') ||
          img.getAttribute('data-lazy-src') ||
          img.getAttribute('src'),
      ),
    };
  },
};
