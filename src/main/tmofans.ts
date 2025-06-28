// == TMOFans ======================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,
  homepage: 'https://lectortmo.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('.img-container img, .viewer-container img')];
    const pages = [
      ...document.querySelectorAll<HTMLOptionElement>(
        'div.container:nth-child(4) select#viewer-pages-select option',
      ),
    ];
    const num = images.length > 1 ? images.length : pages.length;
    const manga = {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[title="Volver"]')?.getAttribute('href'),
      pages: num,
      prev: document.querySelector('.chapter-prev a')?.getAttribute('href'),
      next: document.querySelector('.chapter-next a')?.getAttribute('href'),
    };
    if (images.length > 1) {
      return { ...manga, listImages: images.map(item => $(item).attr('data-src')!) };
    }
    return {
      ...manga,
      listPages: Array(pages.length)
        .fill(0)
        .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
      img: '#viewer-container img, .viewer-page',
    };
  },
};
export default site;
