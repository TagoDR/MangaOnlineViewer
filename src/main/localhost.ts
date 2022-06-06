// == Localhost =====================================================================================
export default {
  name: 'Localhost',
  url: /http:\/\/127.0.0.1:8080\/index.htm/,
  homepage: 'http://127.0.0.1:8080/index.html',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    return {
      title: 'Manga Loaded',
      series: '',
      pages: 2,
      begin: 0,
      prev: '',
      next: '?next',
      listPages: [
        // 'http://127.0.0.1:3000/images/920x600-Ad-Page.png',
        'http://127.0.0.1:3000/images/985x1400-Normal-Page.png',
        'http://127.0.0.1:3000/images/1970x1400-Double-Page.png',
        // 'http://127.0.0.1:3000/images/500x700-Small-Page.png',
        // 'http://127.0.0.1:3000/images/300x500-Tiny-Page.png',
        // 'http://127.0.0.1:3000/images/100x150-Thumbnail.png',
        // 'http://127.0.0.1:3000/images/800x11755-WebComic.png',
      ],
    };
  },
};
