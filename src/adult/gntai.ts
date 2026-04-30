// == GNTAI ========================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const gntai: ISite = {
  name: 'GNTAI.net',
  url: /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,
  homepage: 'https://www.gntai.net/',
  language: [Language.SPANISH],
  category: Category.HENTAI,
  run(): IManga {
    const images =
      document
        .querySelector('#main > script')
        ?.innerHTML.match(/var pages = [^;]+/)
        ?.at(0)
        ?.toString()
        .match(/https?[^"]+/g) ?? [];
    return {
      title: document.querySelector('.entry-header h1')?.textContent?.trim(),
      pages: images?.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
export default gntai;
