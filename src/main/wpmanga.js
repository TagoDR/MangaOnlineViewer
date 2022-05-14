// == WPManga ======================================================================================
export default {
  name: ['Manga33'],
  url: /https?:\/\/(www.)?(manga33).com\/chapter\/.+\/[0-9]+/,
  homepage: ['http://manga33.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const src = $('select.sl-page:first option').get();
    return {
      title: $('title').text().trim(),
      series: $('a.manga-name:last').attr('href'),
      pages: src.length,
      prev: $('a.prev').attr('href'),
      next: $('a.next').attr('href'),
      listPages: src.map((i) => $(i).val()),
      img: '.chapter-content img',
    };
  },
};
