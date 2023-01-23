// == XlecxOne =====================================================================================
export default {
  name: 'XlecxOne',
  url: /https?:\/\/(www.)?xlecx.one\/.+/,
  homepage: 'https://xlecx.one/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = [
      ...new Set(
        [...document.querySelectorAll('article .page__text img , article #content-2 img')].map(
          (img) => img.getAttribute('data-src') || img.getAttribute('src'),
        ),
      ),
    ];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: '#',
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
