// == LynxScans ====================================================================================
export default {
  name: 'LynxScans',
  url: /https?:\/\/(www.)?lynxscans.com\/comics\/.+/,
  homepage: 'https://lynxscans.com/home',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterPages',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.fa-home-alt')?.parentElement?.getAttribute('href'),
      pages: W.chapterPages.length,
      prev: W.previousChapter.number,
      next: W.nextChapter.number,
      listImages: W.chapterPages,
    };
  },
};
