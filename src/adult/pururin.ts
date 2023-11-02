// == Pururin ======================================================================================
export default {
  name: 'Pururin',
  url: /https?:\/\/(www.)?pururin.to\/(view|read)\/.+\/.+\/.+/,
  homepage: 'https://pururin.to/',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['.img-viewer img', 'src'],
  run() {
    const src = document.querySelector('.img-viewer img')?.getAttribute('src') ?? '';
    const num = [...document.querySelectorAll('.img-select option')];
    return {
      title: document.querySelector('.title')?.textContent?.trim(),
      series: document.querySelector('.breadcrumb-item:nth-child(4) a')?.getAttribute('href'),
      pages: num.length,
      prev: '#',
      next: '#',
      listImages: num.map((_, i) => src.replace(/\/\d+\./, `/${i + 1}.`)),
    };
  },
};
