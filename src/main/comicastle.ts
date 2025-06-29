// == ComiCastle ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'ComiCastle',
  url: /https?:\/\/comic\.nizamkomputer.com\/read\/.+\/\d+.*/,
  homepage: 'https://comic.nizamkomputer.com/',
  language: [Language.ENGLISH],
  category: Category.COMIC,
  waitEle: '.form-control option:nth-child(1)',
  run(): IManga {
    const images = [...document.querySelectorAll('.form-control')[1].querySelectorAll('option')];
    const chapter = document.querySelectorAll('.form-control')[0].querySelector('option:checked');
    return {
      title: chapter?.textContent?.trim(),
      series: document.querySelector('.navbar-header a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map(img => img.getAttribute('alt') ?? ''),
    };
  },
};
export default site;
