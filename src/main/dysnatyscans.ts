// == DynastyScans =================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'Dynasty-Scans',
  url: /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,
  homepage: 'https://dynasty-scans.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    return {
      title: document.querySelector('#chapter-title')?.textContent?.trim(),
      series: document.querySelector('#chapter-title a')?.getAttribute('href'),
      pages: unsafeWindow.pages.length,
      prev: document.querySelector('#prev_link')?.getAttribute('href'),
      next: document.querySelector('#next_link')?.getAttribute('href'),
      listImages: unsafeWindow.pages.map((x: { image: string }) => x.image),
    };
  },
};
export default site;
