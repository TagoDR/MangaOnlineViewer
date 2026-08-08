// == Qi Manga =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const qimanga: ISite = {
  name: 'Qi Manga',
  url: /https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/,
  homepage: 'https://qimanga.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'img.r-page-img',
  run(): IManga {
    const images = [...document.querySelectorAll('img.r-page-img')];
    const pageCounter = document.querySelector('.r-page-counter')?.textContent ?? '';
    const total = Number.parseInt(pageCounter.split('/').pop()?.trim() ?? '', 10) || images.length;
    const state = document.querySelector('#ng-state')?.textContent ?? '';
    const nav = /"navigation":\{"prev":\{"slug":"([^"]+)"[\s\S]*?"next":\{"slug":"([^"]+)"/.exec(
      state,
    );
    const series = document.querySelector('.r-back')?.getAttribute('href');
    const chapter = (slug: string) => (series ? `${series}/${slug}` : undefined);
    return {
      title: document.querySelector('h1.sr-only')?.textContent?.trim(),
      series,
      pages: total,
      prev: nav ? chapter(nav[1]) : undefined,
      next: nav ? chapter(nav[2]) : undefined,
      listImages: images.map(img => img.getAttribute('src') ?? ''),
    };
  },
};
export default qimanga;
