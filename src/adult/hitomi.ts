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
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: document.querySelector('title')?.textContent?.replace('| Hitomi.la', '').trim(),
      series: document.querySelector('.brand')?.getAttribute('href'),
      pages: W.galleryinfo.files.length,
      prev: '#',
      next: '#',
      listImages: W.galleryinfo.files.map((file: string) =>
        W.url_from_url_from_hash(W.galleryinfo, file, 'webp', undefined, 'a'),
      ),
    };
  },
};
