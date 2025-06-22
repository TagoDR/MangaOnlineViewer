// == PornComicsHD =================================================================================
export default {
  name: 'PornComicsHD',
  url: /https?:\/\/(www\.)?porncomicshd.com\/es.*/,
  homepage: 'https://porncomicshd.com/es',
  language: ['Spanish'],
  category: 'hentai',
  waitEle: 'app-comic-reader img',
  async run() {
    const img = [...document.querySelectorAll('app-comic-reader img')];
    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      pages: img.length,
      prev: '#',
      next: '#',
      lazy: false,
      listImages: img.map((i) => i.getAttribute('src')),
    };
  },
};
