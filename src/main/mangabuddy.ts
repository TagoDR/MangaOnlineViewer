// == MangaBuddy ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangabuddy: ISite = {
  name: 'MangaBuddy',
  url: /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,
  homepage: 'https://mangabuddy.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: 'chapImages',
  run(): IManga {
    const images = unsafeWindow.chapImages
      .split(',')
      .map((s: string) => new URL(s).pathname.replace('/res/', 'https://sb.mbcdn.xyz/'));
    return {
      title: document.querySelector('.chapter-info')?.textContent?.trim(),
      series: document
        .querySelector('#breadcrumbs-container div:nth-child(2) a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev')?.getAttribute('href'),
      next: document.querySelector('a.next')?.getAttribute('href'),
      listImages: images,
    };
  },
};
export default mangabuddy;
