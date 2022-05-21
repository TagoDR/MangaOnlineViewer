// == MangaInn  ====================================================================================
export default {
  name: 'MangaInn',
  url: /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/,
  homepage: 'http://www.mangainn.net/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: W.chapter_page_title.trim(),
      series: W.manga_url,
      pages: W.images!.length,
      prev: W.prev_chapter_url,
      next: W.next_chapter_url,
      listImages: W.images!.map((i) => i.url),
    };
  },
};
