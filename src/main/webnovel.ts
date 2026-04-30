// == WebNovel =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const webnovel: ISite = {
  name: 'WebNovel',
  url: /https?:\/\/(www\.)?webnovel.com\/comic\/.+/,
  homepage: 'https://www.webnovel.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: 'g_data',
  run(): IManga {
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
export default webnovel;
