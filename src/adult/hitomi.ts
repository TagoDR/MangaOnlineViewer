// == hitomi =======================================================================================
export default {
  name: 'hitomi',
  url: /https?:\/\/hitomi.la\/reader\/.+/,
  homepage: 'https://hitomi.la/',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['#comicImages img', 'src'],
  run() {
    return {
      title: $('title').text().replace('| Hitomi.la', '').trim(),
      series: $('.brand').attr('href'),
      pages: window.galleryinfo.files.length,
      prev: '#',
      next: '#',
      listImages: window.galleryinfo.files.map((file) =>
        window.url_from_url_from_hash(window.galleryinfo, file, 'webp', undefined, 'a'),
      ),
    };
  },
};
