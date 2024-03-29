// == InManga ===================================================================================
/* eslint-disable no-underscore-dangle */
export default {
  name: 'InManga',
  url: /https?:\/\/(www\.)?inmanga.com\/ver\/manga\/.+\/.+/,
  homepage: 'https://inmanga.com//',
  language: ['Spanish'],
  category: 'manga',
  waitVar: 'pageController',
  run() {
    const images = [...document.querySelectorAll('#PageList option')];
    const chapter = document.querySelector('#ChapList option:checked');
    const src = unsafeWindow.pageController._containers.pageUrl;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: `../${unsafeWindow.pageController._containers.mangaIdentification}`,
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img, index) =>
        src.replace('identification', img.getAttribute('value')).replace('pageNumber', index),
      ),
    };
  },
};
