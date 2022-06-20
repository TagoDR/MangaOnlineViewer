// == MangaInn  ====================================================================================
export default {
  name: 'MangaInn',
  url: /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/,
  homepage: 'http://www.mangainn.net/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: window.chapter_page_title.trim(),
      series: window.manga_url,
      pages: window.images!.length,
      prev: window.prev_chapter_url,
      next: window.next_chapter_url,
      listImages: window.images!.map((i) => i.url),
    };
  },
};
