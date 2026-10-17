// == Olympus ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const olympus: ISite = {
  name: 'Olympus',
  url: /https?:\/\/(www\.)?olympusxyz\.com\/(series\/[^/]+\/)?capitulo\/.+/,
  homepage: 'https://olympusxyz.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  waitEle: 'main.strip img, section img.w-full.h-full',
  run(): IManga {
    const images = [
      ...document.querySelectorAll<HTMLImageElement>('main.strip img, section img.w-full.h-full'),
    ];
    return {
      title: (
        document.querySelector('title')?.textContent ??
        document.querySelector('.rback span')?.textContent
      )
        ?.replace(/\|.+/, '')
        .trim(),
      series:
        document
          .querySelector<HTMLAnchorElement>('a.rback, .chnav a[href*="/series/"]')
          ?.getAttribute('href') ??
        document.querySelector('h1')?.closest('a')?.getAttribute('href'),
      pages: images.length,
      prev:
        document
          .querySelector<HTMLAnchorElement>(
            '.chnav-main a.btn-ghost[href*="/capitulo/"], a[name="capitulo anterior"]',
          )
          ?.getAttribute('href') ?? undefined,
      next:
        document
          .querySelector<HTMLAnchorElement>(
            '.chnav-main a.btn-primary[href*="/capitulo/"], a[name="capitulo siguiente"]',
          )
          ?.getAttribute('href') ?? undefined,
      listImages: images.map(img => img.getAttribute('src') ?? img.getAttribute('data-src') ?? ''),
    };
  },
};
export default olympus;
