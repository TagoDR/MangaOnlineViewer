// == XlecxOne =====================================================================================
export default {
  name: 'XlecxOne',
  url: /https?:\/\/(www\.)?xlecx.one\/.+/,
  homepage: 'https://xlecx.one/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = [
      ...new Set(
        [...document.querySelectorAll('article .page__text img , article #content-2 img')].map(
          (img) =>
            img.getAttribute('data-src') ??
            img.getAttribute('data-srce') ??
            img.closest('a')?.getAttribute('href') ??
            img.getAttribute('src'),
        ),
      ),
    ];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
