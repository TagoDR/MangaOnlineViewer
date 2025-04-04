// == Yabai ================================================================================
import { bruteforce } from '../utils/bruteforce.ts';

export default {
  name: 'Yabai',
  url: /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,
  homepage: 'https://yabai.si/',
  language: ['English'],
  category: 'hentai',
  async run() {
    const num = document.querySelectorAll('nav select option').length;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: '../',
      pages: num,
      prev: '#',
      next: '#',
      listImages: [''],
      async before() {
        this.listImages = await bruteforce(
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
  },
};
