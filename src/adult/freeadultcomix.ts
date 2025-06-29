// == FreeAdultComix ===============================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const freeadultcomix: ISite = {
  name: 'FreeAdultComix',
  url: /https?:\/\/(www\.)?freeadultcomix.com\/.+/,
  homepage: 'https://www.freeadultcomix.com',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitTime: 5000,
  run(): IManga {
    const images = [...document.querySelectorAll('.foto img')];
    return {
      title: document.querySelector('.post-conteudo h1')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default freeadultcomix;
