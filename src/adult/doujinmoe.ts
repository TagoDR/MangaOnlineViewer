// == Doujin-Moe Non-members =======================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const doujinmoe: ISite = {
  name: 'DoujinMoeNM',
  url: /https?:\/\/(www\.)?doujins.com\/.+/,
  homepage: 'https://doujins.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '.doujin',
  run(): IManga {
    const images = [...document.querySelectorAll('.doujin')];
    return {
      title: document.querySelector('.folder-title a:last-child')?.textContent?.trim(),
      series: document.querySelector('.folder-title a:nth-last-child(2)')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-file') ?? ''),
    };
  },
};
export default doujinmoe;
