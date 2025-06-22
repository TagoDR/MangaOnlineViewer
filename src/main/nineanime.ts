// == NineAnime ====================================================================================
export default {
  name: 'NineAnime',
  url: /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,
  homepage: 'https://www.nineanime.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const pages = [...document.querySelectorAll('.sl-page option')];
    const chapter = document.querySelector('.mangaread-pagenav select option[selected]');
    return {
      title: `${document.querySelector('.title h1')?.textContent?.trim()}/${document.querySelector('.title h2')?.textContent?.trim()}`,
      series: document.querySelector('.title a:has(h2)')?.getAttribute('href'),
      pages: pages.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listPages: pages.map((o) => o.getAttribute('value')),
      img: '.manga_pic',
    };
  },
};
