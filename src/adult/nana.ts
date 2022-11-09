// == Nana =========================================================================================
export default {
  name: 'Nana',
  url: /https?:\/\/nana.my.id\/reader\/.+/,
  homepage: 'https://nana.my.id/',
  language: ['English'],
  category: 'hentai',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/ - Nana .+/, '')
        .trim(),
      series: '#',
      pages: W.Reader.pages.length,
      prev: '#',
      next: '#',
      listImages: W.Reader.pages,
    };
  },
};
