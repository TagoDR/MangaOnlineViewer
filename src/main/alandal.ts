// == Alandal ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'Alandal',
  url: /https?:\/\/alandal.com\/chapter\/.+\/\d+/,
  homepage: 'https://alandal.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('img[alt^="Page"]')];
    const chapter = document
      ?.querySelector('[aria-label="chapter list"]')
      ?.parentElement?.parentElement?.parentElement?.parentElement?.querySelectorAll('a');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[href^="/series/"]')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.item(0)?.getAttribute('href'),
      next: chapter?.item(1)?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default site;
