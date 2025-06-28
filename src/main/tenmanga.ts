// == TenManga =====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'TenManga',
  url: /https?:\/\/(www\.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,
  homepage: 'https://www.tenmanga.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: '_pageCtrl',
  run(): IManga {
    const chapter = document.querySelector<HTMLOptionElement>(
      '.mangaread-pagenav select option:checked',
    );

    const images = unsafeWindow._pageCtrl.options.all_imgs_url;
    return {
      title: document.querySelector('.title  h1')?.textContent?.trim(),
      series: document.querySelector('.title  a:nth-child(2)')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images,
    };
  },
};
export default site;
