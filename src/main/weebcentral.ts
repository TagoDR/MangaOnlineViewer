// == WeebCentral ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const weebcentral: ISite = {
  name: 'WeebCentral',
  url: /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,
  homepage: 'https://weebcentral.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'main section .maw-w-full',
  async run(): Promise<IManga> {
    const src = [...document.querySelectorAll('main section .maw-w-full')].map(
      (elem) => elem.getAttribute('src') ?? '',
    );
    const chaptersList = await fetch(
      document.querySelector('main section a + button')?.getAttribute('hx-get') ?? '',
    ).then((res) => res.text());
    const parser = new DOMParser();
    const chapters = parser.parseFromString(chaptersList, 'text/html');
    return {
      title: document.querySelector('title')?.textContent?.replace(/ | .+/, '').trim(),
      series: document.querySelector('main section a')?.getAttribute('href'),
      pages: src.length,
      prev: chapters.querySelector('#selected_chapter')?.nextElementSibling?.getAttribute('href'),
      next: chapters
        .querySelector('#selected_chapter')
        ?.previousElementSibling?.getAttribute('href'),
      listImages: src,
    };
  },
};
export default weebcentral;
