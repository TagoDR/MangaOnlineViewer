// == TenManga =====================================================================================
/* eslint-disable no-underscore-dangle */
export default {
  name: 'TenManga',
  url: /https?:\/\/(www\.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,
  homepage: 'https://www.tenmanga.com/',
  language: ['English'],
  category: 'manga',
  waitVar: '_pageCtrl',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>(
      '.mangaread-pagenav select option:checked',
    );

    const images = unsafeWindow._pageCtrl.options.all_imgs_url;
    return {
      title: document.querySelector('.title  h1')?.textContent?.trim(),
      series: document.querySelector('.title  a:nth-child(2)')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images,
    };
  },
};
