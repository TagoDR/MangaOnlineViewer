// == INKR =========================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'INKR',
  url: /https?:\/\/(comics\.)?inkr.com\/title\/.+\/chapter\/.+/,
  homepage: 'https://inkr.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitFunc: () =>
    document.querySelector<HTMLImageElement>('[data-container="file-horizontal-scroll-view"] img')
      ?.naturalWidth !== undefined &&
    document.querySelectorAll('[data-container="file-horizontal-scroll-view"] img').length > 2,
  run(): IManga {
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
      listImages: images.map(img => img.getAttribute('src') ?? ''.replace('/t.', '/p.')),
    };
  },
};
export default site;
