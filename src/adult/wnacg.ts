// == wnacg ========================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'wnacg',
  url: /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,
  homepage: 'https://wnacg.com/',
  language: [Language.ENGLISH, Language.RAW, Language.CHINESE],
  category: Category.HENTAI,
  run(): IManga {
    const pages = [...document.querySelectorAll<HTMLOptionElement>('.pageselect option')];
    return {
      title: document.querySelector('.bread a:last-of-type')?.textContent?.trim(),
      pages: pages.length,
      prev: '#',
      next: '#',
      listPages: pages.map(page => window.location.pathname.replace(/\d+/, page.value)),
      img: '#picarea',
    };
  },
};
export default site;
