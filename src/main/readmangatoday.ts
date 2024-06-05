// == ReadManga.Today ==============================================================================
export default {
  name: ['ReadManga Today'],
  url: /https?:\/\/(www\.)?readm.today\/.+\/\d+/,
  homepage: ['https://readm.today/'],
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: document.querySelector('.page-title')?.textContent?.trim(),
      series: document.querySelector('.page-title a')?.getAttribute('href'),
      pages: unsafeWindow.chapter.pages.length,
      prev: unsafeWindow.chapter.prev,
      next: unsafeWindow.chapter.next,
      listImages: unsafeWindow.chapter.pages.map((item: { src: string }) => item.src),
    };
  },
};
