// == WebToons =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'WebToons',
  url: /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,
  homepage: 'https://www.webtoons.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('#_imageList img')];
    return {
      title: document.querySelector('.subj_info')?.textContent?.trim(),
      series: document.querySelector('.subj_info a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('._prevEpisode')?.getAttribute('href'),
      next: document.querySelector('._nextEpisode')?.getAttribute('href'),
      listImages: images.map(
        img =>
          img.getAttribute('data-url') ??
          img.getAttribute('data-src') ??
          img.getAttribute('src') ??
          '',
      ),
    };
  },
};
export default site;
