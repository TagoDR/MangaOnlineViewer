// == ZeroScans ====================================================================================
/* eslint-disable no-underscore-dangle */
export default {
  name: 'ZeroScans',
  url: /https?:\/\/(www.)?zeroscans.com\/comics\/.+/,
  homepage: 'https://zeroscans.com/',
  language: ['English'],
  category: 'manga',
  waitVar: '__ZEROSCANS__',
  run() {
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
