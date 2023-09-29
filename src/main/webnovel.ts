// == WebNovel =====================================================================================
export default {
  name: 'WebNovel',
  url: /https?:\/\/(www.)?webnovel.com\/comic\/.+/,
  homepage: 'https://www.webnovel.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'g_data',
  run() {
    const images = unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(
      (img: { url: string }) => img.url,
    );
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: './',
      pages: images.length,
      prev: `${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,
      next: `${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,
      listImages: images,
    };
  },
};
