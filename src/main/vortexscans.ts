// == VortexScans ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { findClosestByContentEq } from '../utils/find';

const vortexscans: ISite = {
  name: 'Vortex Scans',
  url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
  homepage: 'https://vortexscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: '__next_f',
  waitFunc() {
    return unsafeWindow.__next_f.find((i: [number, string]) => /images/.test(i?.[1]))?.length > 0;
  },
  run(): IManga {
    const data: string = unsafeWindow.__next_f.find((i: [number, string]) =>
      /images/.test(i?.[1]),
    )?.[1];
    const images =
      data.slice(data.indexOf('images')).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g) ?? [];
    return {
      title: document
        .querySelector('time')
        ?.closest('div')
        ?.querySelector('div')
        ?.textContent?.trim(),
      series: document.querySelector('time')?.closest('a')?.getAttribute('href'),
      pages: images?.length,
      prev: findClosestByContentEq('button', 'Prev', 'a')?.getAttribute('href'),
      next: findClosestByContentEq('button', 'Next', 'a')?.getAttribute('href'),
      listImages: images,
    };
  },
};
export default vortexscans;
