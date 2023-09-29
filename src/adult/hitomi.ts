// == hitomi =======================================================================================
export default {
  name: 'hitomi',
  url: /https?:\/\/hitomi.la\/reader\/.+/,
  homepage: 'https://hitomi.la/',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['#comicImages img', 'src'],
  waitVar: 'galleryinfo',
  run() {
    return {
      title: document.querySelector('title')?.textContent?.replace('| Hitomi.la', '').trim(),
      series: document.querySelector('.brand')?.getAttribute('href'),
      pages: unsafeWindow.galleryinfo.files.length,
      prev: '#',
      next: '#',
      listImages: unsafeWindow.galleryinfo.files.map((file: string) =>
        unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo, file, 'webp', undefined, 'a'),
      ),
    };
  },
};
