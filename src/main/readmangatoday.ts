// == ReadManga.Today ==============================================================================
export default {
  name: ['ReadManga Today', 'Funmanga', 'MangaDoom', 'MangaInn'],
  url: /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/,
  homepage: [
    'https://www.readmng.com/',
    'https://funmanga.com/',
    'https://mngdoom.com/',
    'https://www.mangainn.net/',
  ],
  language: ['English'],
  category: 'manga',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: W.chapter_page_title,
      series: W.manga_url,
      pages: W.images.length,
      prev: W.prev_chapter_url,
      next: W.next_chapter_url,
      listImages: W.images.map((item: { url: string }) => item.url),
    };
  },
};
