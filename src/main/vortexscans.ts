// == VortexScans ==================================================================================
import { findClosestByContentEq } from '../utils/find';

export default {
  name: 'Vortex Scans',
  url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
  homepage: 'https://vortexscans.org/',
  language: ['English'],
  category: 'manga',
  waitVar: '__next_f',
  waitFunc() {
    return unsafeWindow.__next_f.find((i: [number, string]) => /images/.test(i?.[1]))?.length > 0;
  },
  run() {
    const data: string = unsafeWindow.__next_f.find((i: [number, string]) =>
      /images/.test(i?.[1]),
    )?.[1];
    const images = data.slice(data.indexOf('images')).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g);
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
