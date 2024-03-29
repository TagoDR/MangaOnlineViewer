// == ManhuaScan ===================================================================================
import { findImages } from './madarawp';

export default {
  name: 'ManhuaScan',
  url: /https?:\/\/(www\.)?manhuascan.com\/manga\/.+\/chapter.+/,
  homepage: 'https://manhuascan.com/',
  language: ['English'],
  category: 'manga',
  waitFunc: () => {
    const images = findImages();
    return (
      images.length > 0 &&
      images.every((s) => s && /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/.test(s))
    );
  },
  run() {
    const images = findImages();
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document
        .querySelector('#breadcrumbs-container div a[title="Plaything"]')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('#chapter-list ~ div li:nth-of-type(2) a')?.getAttribute('href'),
      next: document.querySelector('#chapter-list ~ div li:nth-of-type(3) a')?.getAttribute('href'),
      listImages: images,
    };
  },
};
