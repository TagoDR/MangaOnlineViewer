// == WebNovel =====================================================================================
export default {
  name: 'WebNovel',
  url: /https?:\/\/(www.)?webnovel.com\/comic\/.+/,
  homepage: 'https://www.webnovel.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'g_data',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const images = W.g_data.chapter.chapterInfo.chapterPage.map((img: any) => img.url);
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: './',
      pages: images.length,
      prev: `${W.g_data.chapter.chapterInfo.preChapterName}_${W.g_data.chapter.chapterInfo.preChapterId}`,
      next: `${W.g_data.chapter.chapterInfo.nextChapterName}_${W.g_data.chapter.chapterInfo.nextChapterId}`,
      listImages: images,
    };
  },
};
