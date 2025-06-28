// == InManga ======================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'InManga',
  url: /https?:\/\/(www\.)?inmanga.com\/ver\/manga\/.+\/.+/,
  homepage: 'https://inmanga.com//',
  language: [Language.SPANISH],
  category: Category.MANGA,
  waitVar: 'pageController',
  run(): IManga {
    const images = [...document.querySelectorAll('#PageList option')];
    const chapter = document.querySelector('#ChapList option:checked');
    const src = unsafeWindow.pageController._containers.pageUrl;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: `../${unsafeWindow.pageController._containers.mangaIdentification}`,
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img, index) =>
        src.replace('identification', img.getAttribute('value')).replace('pageNumber', index),
      ),
    };
  },
};
export default site;
