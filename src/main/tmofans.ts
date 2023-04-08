// == TMOFans ==================================================================================
export default {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www.)?(almtechnews|animalslegacy|anisurion|cookernice|dariusmotor|followmanga|gamesxo|lectortmo|motorbakery|otakunice|paleomotor|recetchef|recipescoaching|recipesist|sucrecipes|tmofans).com\/.+\/.+\/(paginated|cascade)/,
  homepage: 'https://lectortmo.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.img-container img, .viewer-container img')];
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
      ...(images.length > 1
        ? {
            listImages: images.map((item) => $(item).attr('data-src')),
          }
        : {
            listPages: Array(pages.length)
              .fill(0)
              .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
            img: '#viewer-container img, .viewer-page',
          }),
    };
  },
};
