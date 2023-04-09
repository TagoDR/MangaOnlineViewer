// == TMOFans ==================================================================================
const TMODomains = [
  'almtechnews',
  'animalcanine',
  'animalslegacy',
  'animation2you',
  'animationforyou',
  'anisurion',
  'anitirion',
  'anitoc',
  'cook2love',
  'cooker2love',
  'cookermania',
  'cookernice',
  'cookerready',
  'dariusmotor',
  'enginepassion',
  'fanaticmanga',
  'followmanga',
  'gamesnk',
  'gamesxo',
  'infogames2you',
  'infopetworld',
  'lectortmo',
  'mangalong',
  'mistermanga',
  'motorbakery',
  'motornk',
  'motorpi',
  'mygamesinfo',
  'mynewsrecipes',
  'myotakuinfo',
  'otakunice',
  'otakuworldgames',
  'otakworld',
  'paleomotor',
  'panicmanga',
  'recetchef',
  'recipesaniki',
  'recipescoaching',
  'recipesdo',
  'recipesist',
  'recipesnk',
  'sucrecipes',
  'tmofans',
  'vgmotor',
  'vsrecipes',
  'worldmangas',
  'wtechnews',
];

export default {
  name: 'TuMangaOnline',
  url: new RegExp(
    `https?:\\/\\/(www.)?(${TMODomains.join('|')}).com\\/(viewer|news)\\/.+\\/(paginated|cascade)`,
  ),
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
