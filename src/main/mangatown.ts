// == MangaTown ====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'MangaTown',
  url: /https?:\/\/(www\.|m\.)?mangatown.com\/manga\/.+\/.+/,
  homepage: 'https://www.mangatown.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: 'chapter_id',
  async run(): Promise<IManga> {
    const key = document.querySelector('#dm5_key')?.getAttribute('value');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    };
    const src = Array(unsafeWindow.total_pages)
      .fill(0)
      .map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${unsafeWindow.chapter_id}&page=${i}&key=${key}`;
        const api: string = await fetch(url, options).then(async res => res.text());

        (0, eval)(api);
        /* eslint @typescript-eslint/ban-ts-comment: "off" */
        // @ts-ignore
        return d;
      });
    const images = await Promise.all(src);
    const chapter = document.querySelector<HTMLOptionElement>('#top_chapter_list option:checked');
    return {
      title: document.querySelector('.title h1')?.textContent?.trim(),
      series: unsafeWindow.series_url,
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img: string[], i: number) => img[i === 0 ? 0 : 1]),
    };
  },
};
export default site;
