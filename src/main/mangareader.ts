// == MangaReader ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

declare let imgReverser: (url: string) => Promise<HTMLCanvasElement>;

const mangareader: ISite = {
  name: 'MangaReader',
  url: /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,
  homepage: 'https://mangareader.to',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  obs: 'Some galleries will not be usable',
  waitEle: '.ds-image, .iv-card',
  async run(): Promise<IManga> {
    const chapter = document.querySelector('.chapter-item.active');
    const images = [...document.querySelectorAll('.ds-image[data-url], .iv-card[data-url]')];
    const src = images.map(async (img) => {
      const url = img.getAttribute('data-url') ?? '';
      if (url && img.classList.contains('shuffled')) {
        return (await imgReverser(url)).toDataURL();
      }
      return url;
    });

    return {
      title: document.querySelector('.hr-manga h2')?.textContent?.trim(),
      series: document.querySelector('.hr-manga')?.getAttribute('href'),
      pages: src.length,
      prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
      next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
      listImages: await Promise.all(src),
    };
  },
};
export default mangareader;
