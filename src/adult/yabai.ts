// == Yabai ========================================================================================
import { Category, IMangaImages, ISite, Language } from '../types';
import { bruteforce } from '../utils/bruteforce';

const site: ISite = {
  name: 'Yabai',
  url: /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,
  homepage: 'https://yabai.si/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  async run(): Promise<IMangaImages> {
    const num = document.querySelectorAll('nav select option').length;
    const manga = {
      title: document.querySelector('title')?.textContent?.trim(),
      series: '../',
      pages: num,
      prev: '#',
      next: '#',
      listImages: [''],
      async before() {
        manga.listImages = await bruteforce(
          () => {
            const item = document.querySelector<HTMLOptionElement>('select option');
            if (item) item.selected = true;
            document.querySelector('select')?.dispatchEvent(new Event('change'));
          },
          num,
          'button[title="Next"]',
          'h1 + div',
          'img.mx-auto',
          'src',
        );
      },
    };
    return manga;
  },
};
export default site;
