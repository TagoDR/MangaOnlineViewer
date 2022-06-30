// == DisasterScans ================================================================================
export default {
  name: 'DisasterScans',
  url: /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/,
  homepage: 'https://disasterscans.com/',
  language: ['English'],
  category: 'manga',
  waitEle: 'select.single-chapter-select option',
  waitVar: 'mangaNav',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const chapter = document.querySelector('select.single-chapter-select option:checked');
    return {
      title: document.querySelector('#chapter-heading')?.textContent?.trim(),
      series: W.mangaNav.mangaUrl,
      pages: W.chapter_preloaded_images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: W.chapter_preloaded_images,
    };
  },
};
