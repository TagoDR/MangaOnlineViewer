// == Madara WordPress Plugin ======================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;

function findImages() {
  return [
    ...document.querySelectorAll(
      '.wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img',
    ),
  ].map(img => {
    const attrs = [...img.attributes].filter(
      attr => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|load).*$/.test(attr.value),
    );
    if (attrs.length === 0) return '';
    return attrs.find(attr => imageRegex.test(attr.value))?.value ?? img?.getAttribute('src') ?? '';
  });
}

const madarawp: ISite = {
  name: [
    'Madara WordPress Plugin',
    'MangaHaus',
    'Isekai Scan',
    'Comic Kiba',
    'Zinmanga',
    'mangatx',
    'Toonily',
    'Mngazuki',
    'JaiminisBox',
    'DisasterScans',
    'ManhuaPlus',
    'TopManhua',
    'NovelMic',
    'Reset-Scans',
    'LeviatanScans',
    'Dragon Tea',
    'SetsuScans',
    'ToonGod',
  ],
  url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,
  homepage: [
    'https://mangabooth.com/',
    'https://manhuaus.com',
    'https://isekaiscan.com/',
    'https://comickiba.com/',
    'https://zinmanga.com/',
    'https://mangatx.com/',
    'https://toonily.net/',
    'https://mangazuki.me/',
    'https://jaiminisbox.net',
    'https://disasterscans.com/',
    'https://manhuaplus.org/',
    'https://www.topmanhua.com/',
    'https://novelmic.com/',
    'https://reset-scans.com/',
    'https://leviatanscans.com/',
    'https://dragontea.ink/',
    'https://setsuscans.com/',
    'https://toongod.org/home/',
  ],
  language: [Language.ENGLISH],
  obs: 'Any Site that uses Madara WordPress Plugin',
  category: Category.MANGA,
  waitFunc: () => {
    const images = findImages();
    return images.length > 0 && images.every(s => s && imageRegex.test(s));
  },
  run(): IManga {
    const images = findImages();
    return {
      title: document.querySelector('#chapter-heading')?.textContent?.trim(),
      series: (
        document.querySelector('.breadcrumb li:nth-child(3) a') ??
        document.querySelector('.breadcrumb li:nth-child(2) a')
      )?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prev_page')?.getAttribute('href'),
      next: document.querySelector('.next_page')?.getAttribute('href'),
      listImages: images,
    };
  },
};
export default madarawp;
