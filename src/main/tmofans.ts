// == TMOFans ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

export function runTMO(): IManga {
  const images = [
    ...document.querySelectorAll(
      '.img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page',
    ),
  ];
  const pages = [
    ...document.querySelectorAll<HTMLOptionElement>(
      'div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option',
    ),
  ];
  const num = images.length > 1 ? images.length : pages.length;
  return {
    title: document.querySelector('title')?.textContent?.trim(),
    series: (
      document.querySelector('a[title="Volver"]') ??
      document.querySelector('.breadcrumb-item:nth-child(2) a') ??
      document.querySelector('.book-name a') ??
      document.querySelector('.breadcrumb-item a')
    )?.getAttribute('href'),
    pages: num || 1,
    prev: (
      document.querySelector('.chapter-prev a') ??
      document.querySelector('.prev_page') ??
      document.querySelector('a.prev-chapter') ??
      document.querySelector('.chapter-prev-btn')
    )?.getAttribute('href'),
    next: (
      document.querySelector('.chapter-next a') ??
      document.querySelector('.next_page') ??
      document.querySelector('a.next-chapter') ??
      document.querySelector('.chapter-next-btn')
    )?.getAttribute('href'),
    ...(images.length <= 1 && pages.length > 1
      ? {
          listPages: Array(pages.length)
            .fill(0)
            .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
        }
      : {
          listImages: images.map(
            item =>
              item.getAttribute('data-src') ??
              item.getAttribute('data-original') ??
              item.getAttribute('src') ??
              '',
          ),
        }),
    img: '#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img',
    before() {
      if (window.location.pathname.includes('paginated')) {
        window.location.pathname = window.location.pathname.replace(/paginated.*/, 'cascade');
      }
      if (window.location.pathname.includes('view_uploads')) {
        const btn = document.querySelector<HTMLAnchorElement>(
          'a.btn.btn-primary, .btn-primary a, a.btn-block',
        );
        if (btn) {
          btn.click();
        }
      }
    },
  };
}

const tmofans: ISite = {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www\.)?(.+)\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,
  homepage: 'https://zonatmo.org/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    return runTMO();
  },
};
export default tmofans;
