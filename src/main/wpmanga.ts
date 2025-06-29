// == WPManga ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: ['Manga33'],
  url: /https?:\/\/(www\.)?(manga33).com\/manga\/.+/,
  homepage: ['https://manga33.com/'],
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('.chapter-content img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.navbar-brand')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev')?.getAttribute('href'),
      next: document.querySelector('a.next')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src') ?? ''),
      before() {
        if (/all.html$/.exec(window.location.pathname)) {
          return;
        }
        if (/\d+-\d+.html$/.exec(window.location.pathname)) {
          window.location.pathname = window.location.pathname.replace(/-\d+.html$/, '-all.html');
        }
      },
    };
  },
};
export default site;
