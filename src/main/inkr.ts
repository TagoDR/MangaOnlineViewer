// == INKR =========================================================================================
export default {
  name: 'INKR',
  url: /https?:\/\/(comics\.)?inkr.com\/title\/.+\/chapter\/.+/,
  homepage: 'https://inkr.com/',
  language: ['English'],
  category: 'manga',
  waitFunc: () =>
    document.querySelector<HTMLImageElement>('[data-container="file-horizontal-scroll-view"] img')
      ?.naturalWidth !== undefined &&
    document.querySelectorAll('[data-container="file-horizontal-scroll-view"] img').length > 2,
  run() {
    const images = [
      ...document.querySelectorAll('[data-container="file-horizontal-scroll-view"] img'),
    ];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document
        .querySelector('[aria-label="Previous Chapter"] + div a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a[aria-label="Previous Chapter"]')?.getAttribute('href'),
      next: document.querySelector('a[aria-label="Next Chapter"]')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')?.replace('/t.', '/p.')),
    };
  },
};
