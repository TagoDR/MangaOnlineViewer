// == ReadManga.Today ==============================================================================
export default {
  name: ['ReadManga Today', 'Funmanga', 'MangaDoom', 'MangaInn'],
  url: /https?:\/\/(www\.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/,
  homepage: [
    'https://www.readmng.com/',
    'https://funmanga.com/',
    'https://mngdoom.com/',
    'https://www.mangainn.net/',
  ],
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: unsafeWindow.chapter_page_title,
      series: unsafeWindow.manga_url,
      pages: unsafeWindow.images.length,
      prev: unsafeWindow.prev_chapter_url,
      next: unsafeWindow.next_chapter_url,
      listImages: unsafeWindow.images.map((item: { url: string }) => item.url),
    };
  },
};
