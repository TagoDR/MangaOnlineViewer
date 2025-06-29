// == HentaiEra ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'HentaiEra',
  url: /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,
  homepage: 'https://hentaiera.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  run(): IManga {
    const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '0', 10);
    return {
      title: document
        .querySelector('h1')
        ?.textContent?.trim()
        .replace(/ - Page .+$/, ''),
      series: document.querySelector('.return_btn ')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listPages: Array(num)
        .fill(0)
        .map((_, i) => window.location.href.replace(/\/\d*\/?$/, `/${i + 1}`)),
      img: '#gimg',
      lazyAttr: 'data-src',
    };
  },
};
export default site;
