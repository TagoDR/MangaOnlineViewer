// == MangaKakalot =================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: ['MangaKakalot', 'NeloManga ', 'MangaNato', 'NatoManga', 'MangaBats'],
  url: /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,
  homepage: [
    'https://mangakakalot.gg/',
    'https://www.nelomanga.com/',
    'https://www.manganato.gg/',
    'https://www.natomanga.com/',
    'https://www.mangabats.com/',
  ],
  language: [Language.SPANISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('#vungdoc img, .container-chapter-reader img')];
    return {
      title: document
        .querySelector(
          '.info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1',
        )
        ?.textContent?.trim(),
      series: document.querySelectorAll('span a[title]').item(1).getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.navi-change-chapter-btn-prev, .next')?.getAttribute('href'),
      next: document.querySelector('.navi-change-chapter-btn-next, .back')?.getAttribute('href'),
      listImages: images.map(img => img.getAttribute('src')!),
    };
  },
};
export default site;
