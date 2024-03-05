// == HentaiEra ====================================================================================
export default {
  name: 'HentaiEra',
  url: /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,
  homepage: 'https://hentaiera.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '0', 10);
    return {
      title: document
        .querySelector('h1')
        ?.textContent?.trim()
        .replace(/ - Page .+$/, ''),
      series: document.querySelector('.return_btn ')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listPages: Array(num)
        .fill(0)
        .map((_, i) => window.location.href.replace(/\/\d*\/?$/, `/${i + 1}`)),
      img: '#gimg',
      lazyAttr: 'data-src',
    };
  },
};
