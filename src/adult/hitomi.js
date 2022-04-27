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
      quant: W.galleryinfo.files.length,
      prev: '#',
      next: '#',
      listImages: W.galleryinfo.files.map((file) => W.url_from_url_from_hash(W.galleryinfo, file, 'webp', undefined, 'a')),
    };
  },
};
