// == INKR =========================================================================================
export default {
  name: 'INKR',
  url: /https?:\/\/(comics.)?inkr.com\/title\/.+\/chapter\/.+/,
  homepage: 'https://inkr.com/',
  language: ['English'],
  category: 'manga',
  waitFunc: () =>
    document.querySelector<HTMLImageElement>('#editor-v2-scroll-view-id img')?.style.width !== '',
  run() {
    const images = [...document.querySelectorAll('#editor-v2-scroll-view-id img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document
        .querySelector('#chapter-detail-viewer-page div div div a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a[aria-label="Previous Chapter"]')?.getAttribute('href'),
      next: document.querySelector('a[aria-label="Next Chapter"]')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')?.replace('/t.', '/p.')),
    };
  },
};
