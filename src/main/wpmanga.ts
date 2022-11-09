// == WPManga ======================================================================================
export default {
  name: ['Manga33'],
  url: /https?:\/\/(www.)?(manga33).com\/manga\/.+/,
  homepage: ['https://manga33.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.chapter-content img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.navbar-brand')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev')?.getAttribute('href'),
      next: document.querySelector('a.next')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
      before() {
        if (window.location.pathname.match(/all.html$/)) return;
        if (window.location.pathname.match(/\d+-\d+.html$/)) {
          window.location.pathname = window.location.pathname.replace(/-\d+.html$/, '-all.html');
        }
      },
    };
  },
};
