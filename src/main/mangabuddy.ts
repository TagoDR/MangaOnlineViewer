// == MangaBuddy ===================================================================================
export default {
  name: 'MangaBuddy',
  url: /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/,
  homepage: 'https://mangabuddy.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'final_images',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const img = [...document.querySelectorAll('.chapter-image.load-first img')].map(
      (img) => img.getAttribute('data-src') || img.getAttribute('src'),
    );
    const images = [...img, ...W.final_images];
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
