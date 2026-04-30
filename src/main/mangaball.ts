// == MangaBall ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

interface IMangaBallChapter {
  number_float: number;
  translations: {
    language: string;
    volume: string | number;
    url: string;
  }[];
}

const mangaball: ISite = {
  name: 'MangaBall',
  homepage: 'https://mangaball.net/',
  url: /https?:\/\/mangaball\.net\/chapter-detail\/.+/,
  language: Language.ENGLISH,
  category: Category.MANGA,
  run: async (): Promise<IManga> => {
    const script = [...document.querySelectorAll('script')].find(s =>
      s.textContent?.includes('chapterImages'),
    )?.textContent;
    if (!script) {
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        series:
          document.querySelector('a[href*="/title-detail/"]')?.getAttribute('href') ??
          document.querySelector('a[href*="/manga-detail/"]')?.getAttribute('href'),
        pages: 0,
        listImages: [],
      };
    }

    const titleId = script.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1];
    const chapterNumber = script.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1];
    const chapterVolume = script.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1];
    const chapterLanguage = script.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1];
    const images: string[] = JSON.parse(
      script.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1] ??
        script.match(/chapterImages\s*=.*(\[.*?\])/)?.[1] ??
        '[]',
    );

    const csrfToken =
      document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    const response = await fetch('/api/v1/chapter/chapter-listing-by-title-id/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: `title_id=${titleId}&lang=${chapterLanguage}`,
    });
    const data = await response.json();
    const allChapters: IMangaBallChapter[] = (data.ALL_CHAPTERS || []).sort(
      (a: IMangaBallChapter, b: IMangaBallChapter) => b.number_float - a.number_float,
    );

    const findChapter = (direction: 'prev' | 'next') => {
      const currentNumberFloat = parseFloat(chapterNumber || '0');
      const currentIndex = allChapters.findIndex(chap => chap.number_float === currentNumberFloat);

      if (currentIndex === -1) return undefined;

      const step = direction === 'next' ? -1 : 1;
      const start = currentIndex + step;
      const volumeStr = String(chapterVolume);

      for (let i = start; i >= 0 && i < allChapters.length; i += step) {
        const chapter = allChapters[i];
        const trans = chapter.translations.find(
          t => t.language === chapterLanguage && String(t.volume) === volumeStr,
        );
        if (trans) {
          return trans.url;
        }
      }

      return undefined;
    };

    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      series:
        document.querySelector(`a[href*="${titleId}"]`)?.getAttribute('href') ??
        document.querySelector('a[href*="/title-detail/"]')?.getAttribute('href') ??
        document.querySelector('a[href*="/manga-detail/"]')?.getAttribute('href'),
      pages: images.length,
      prev: findChapter('prev'),
      next: findChapter('next'),
      listImages: images,
    };
  },
};

export default mangaball;
