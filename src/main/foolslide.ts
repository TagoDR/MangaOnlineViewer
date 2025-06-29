// == FoOlSlide ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: ['FoOlSlide', 'Kireicake'],
  url: /^(?!.*jaiminisbox).*\/read\/.+/,
  homepage: ['https://github.com/saintly2k/FoOlSlideX', 'https://reader.kireicake.com'],
  language: [Language.ENGLISH],
  obs: 'Any Site that uses FoOLSlide',
  category: Category.MANGA,
  waitEle: 'img.open',
  run(): IManga {
    const chapter = [...document.querySelectorAll('.topbar_left .dropdown_parent:last-of-type li')];
    const origin = chapter.findIndex(item => {
      const url = item.querySelector('a')?.getAttribute('href');
      if (url) {
        return window.location.href.startsWith(url);
      }

      return false;
    });
    const pages = [...document.querySelectorAll('.topbar_right .dropdown li')];
    const images = [...document.querySelectorAll('.inner img:not(.open)')];
    const num = images.length > 1 ? images.length : pages.length;
    const manga = {
      title:
        chapter.at(origin)?.querySelector('a')?.textContent?.trim() ??
        document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('div.tbtitle div.text a')?.getAttribute('href'),
      pages: num,
      prev: chapter
        .at(origin + 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
      next: chapter
        .at(origin - 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
    };
    if (images.length > 1) {
      return { ...manga, listImages: images.map(img => img.getAttribute('src') ?? '') };
    }
    return {
      ...manga,
      listPages: Array(num)
        .fill(0)
        .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
      img: 'img.open',
    };
  },
};
export default site;
