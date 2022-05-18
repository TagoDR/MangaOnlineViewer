// == ReadManga.Today ==============================================================================
export default {
  name: 'ReadManga Today',
  url: /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/,
  homepage: 'http://www.readmng.com/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: W.chapter_page_title.trim(),
      series: W.manga_url,
      pages: W.images.length,
      prev: W.prev_chapter_url,
      next: W.next_chapter_url,
      listImages: W.images.map((i) => i.url),
    };
  },
};
