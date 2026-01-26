// == MangaBall ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangaball: ISite = {
  name: 'MangaBall',
  homepage: 'https://mangaball.net/',
  url: /https?:\/\/mangaball\.net\/chapter-detail\/.+/,
  language: Language.ENGLISH,
  category: Category.MANGA,
  run: (): IManga => {
    const images: string[] = JSON.parse(
      [...document.querySelectorAll('script')]
        .find(s => s.textContent?.includes('chapterImages'))
        ?.textContent.match(/chapterImages\s*=.*(\[.*?\])/)?.[1] ?? '',
    );

    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      series: document.querySelector('a[href*="/manga-detail/"]')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev')?.getAttribute('href'),
      next: document.querySelector('a.next')?.getAttribute('href'),
      listImages: images,
    };
  },
};

export default mangaball;
