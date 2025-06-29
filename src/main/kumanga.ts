// == KuManga ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'KuManga',
  url: /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,
  homepage: 'https://www.kumanga.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const chapter = document.querySelectorAll('select').item(1).querySelector('option[selected]');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h2 a')?.getAttribute('href'),
      pages: unsafeWindow.pUrl.length,
      prev: `/manga/leer/${chapter?.previousElementSibling?.getAttribute('value')}`,
      next: `/manga/leer/${chapter?.nextElementSibling?.getAttribute('value')}`,
      listImages: unsafeWindow.pUrl.map((item: { imgURL: string }) => item.imgURL),
    };
  },
};
export default site;
