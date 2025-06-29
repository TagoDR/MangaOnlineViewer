// == MangaDex =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangadex: ISite = {
  name: 'MangaDex',
  url: /https?:\/\/(www\.)?mangadex.org/,
  homepage: 'https://mangadex.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: '#chapter-selector a',
  async run(): Promise<IManga> {
    const chapterId = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1);
    const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const server = await fetch(home).then(async (res) => res.json());
    const images = server.chapter.data;
    const chapters = document.querySelectorAll('#chapter-selector a');
    return {
      title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
      series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'),
      pages: images.length,
      prev: chapters?.item(0)?.getAttribute('href'),
      next: chapters?.item(1)?.getAttribute('href'),
      listImages: images.map(
        (img: string) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`,
      ),
    };
  },
};
export default mangadex;
