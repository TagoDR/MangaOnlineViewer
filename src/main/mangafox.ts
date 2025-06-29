// == MangaFox =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangafox: ISite = {
  name: ['MangaFox', 'MangaHere'],
  url: /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
  homepage: ['https://fanfox.net/', 'https://www.mangahere.cc/'],
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: 'chapterid',
  async run(): Promise<IManga> {
    const key = document.querySelector('#dm5_key')?.getAttribute('value');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    };
    const src = Array(unsafeWindow.imagecount)
      .fill(0)
      .map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${
          unsafeWindow.chapterid ?? unsafeWindow.chapter_id
        }&page=${i}&key=${key}`;
        const api: string = await fetch(url, options).then(async res => res.text());

        (0, eval)(api);
        /* eslint @typescript-eslint/ban-ts-comment: "off" */
        // @ts-ignore
        return d;
      });
    const images = await Promise.all(src);
    return {
      title: document.querySelector('.reader-header-title div')?.textContent?.trim(),
      series: document.querySelector('.reader-header-title a')?.getAttribute('href'),
      pages: unsafeWindow.imagecount,
      prev: unsafeWindow.prechapterurl,
      next: unsafeWindow.nextchapterurl,
      listImages: images.map((img: string[], i: number) => img[i === 0 ? 0 : 1]),
    };
  },
};
export default mangafox;
