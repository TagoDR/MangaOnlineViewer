// == MangaPark ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangapark: ISite = {
  name: 'MangaPark',
  url: /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,
  homepage: 'https://mangapark.net/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'main div div a.btn-primary',
  run(): IManga {
    const images = [...document.querySelectorAll('main div div > img.w-full')]
    return {
      title: [...document.querySelectorAll('.comic-detail h3 a, .comic-detail h6 span')]
        .map(e => e.textContent?.trim())
        .join(' '),
      series: document.querySelector('.comic-detail a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelectorAll('main div div a.btn-primary')?.item(0)?.getAttribute('href'),
      next: document.querySelectorAll('main div div a.btn-primary')?.item(1)?.getAttribute('href'),
      listImages: images.map(src => src.getAttribute("src") ?? ''),
    };
  },
};
export default mangapark;
