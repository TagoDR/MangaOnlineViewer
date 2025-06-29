// == ZeroScans ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'ZeroScans',
  url: /https?:\/\/(www\.)?zscans.com\/comics\/.+/,
  homepage: 'https://zscans.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: '__ZEROSCANS__',
  run(): IManga {
    const images = unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality;
    const chapters = document.querySelectorAll('.v-btn--router');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.v-breadcrumbs li:nth-child(2) + a')?.getAttribute('href'),
      pages: images.length,
      prev: chapters[0]?.getAttribute('href'),
      next: chapters[1]?.getAttribute('href'),
      listImages: images,
    };
  },
};
export default site;
