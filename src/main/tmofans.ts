// == TMOFans ==================================================================================
export default {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/,
  homepage: 'https://lectortmo.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.img-container img')];
    const pages = [
      ...document.querySelectorAll<HTMLOptionElement>(
        'div.container:nth-child(4) select#viewer-pages-select option',
      ),
    ];
    const num = images.length > 1 ? images.length : pages.length;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[title="Volver"]')?.getAttribute('href'),
      pages: num,
      prev: document.querySelector('.chapter-prev a')?.getAttribute('href'),
      next: document.querySelector('.chapter-next a')?.getAttribute('href'),
      listPages:
        images.length > 1
          ? null
          : Array(num)
            .fill(0)
            .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
      listImages: images.length > 1 ? images.map((item) => $(item).attr('data-src')) : null,
      img: '#viewer-container img, .viewer-page',
    };
  },
};
