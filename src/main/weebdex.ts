// == WeebDex ======================================================================================

import _ from 'lodash';
import { Category, type IManga, type ISite, Language } from '../types';

const weebdex: ISite = {
  name: 'WeebDex',
  url: /https?:\/\/(www\.)?weebdex\.org\/.+/,
  homepage: 'https://weebdex.org/',
  language: Language.ENGLISH,
  category: Category.MANGA,
  waitEle: 'a[href^="/title/"]',
  async run(): Promise<IManga> {
    const chapterId = /\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1);
    const chapterApi = `https://api.weebdex.org/chapter/${chapterId}`;
    const chapterData = await fetch(chapterApi).then(async res => res.json());
    const mangaLink = document.querySelector('a[href^="/title/"]');
    const mangaId = chapterData.relationships.manga.id;
    const chaptersApi = `https://api.weebdex.org/manga/${mangaId}/aggregate?lang=${chapterData.language}`;
    const chaptersData = await fetch(chaptersApi).then(async res => res.json());
    const chapters = chaptersData.chapters || [];
    const currentIndex = chapters.findIndex(
      (c: { chapter: string }) => c.chapter === chapterData.chapter,
    );

    return {
      title: document
        .querySelector('title')
        ?.textContent?.trim()
        .replace(/Page \d+:/, ''),
      series: mangaLink?.getAttribute('href'),
      pages: chapterData.data.length,
      prev: chapters[currentIndex + 1]
        ? `/chapter/${_.keys(chapters[currentIndex + 1].entries)[0]}`
        : undefined,
      next: chapters[currentIndex - 1]
        ? `/chapter/${_.keys(chapters[currentIndex - 1].entries)[0]}`
        : undefined,
      listImages: chapterData.data.map(
        (img: { name: string }) => `${chapterData.node}/data/${chapterId}/${img.name}`,
      ),
    };
  },
};

export default weebdex;
