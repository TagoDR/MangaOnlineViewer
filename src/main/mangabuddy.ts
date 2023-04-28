// == MangaBuddy ===================================================================================
export default {
  name: 'MangaBuddy',
  url: /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/,
  homepage: 'https://mangabuddy.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapImages',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const images = W.chapImages.split(',');
    return {
      title: document.querySelector('.chapter-info')?.textContent?.trim(),
      series: document
        .querySelector('#breadcrumbs-container div:nth-child(2) a')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev')?.getAttribute('href'),
      next: document.querySelector('a.next')?.getAttribute('href'),
      listImages: images,
    };
  },
};
