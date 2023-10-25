// == Anchira ======================================================================================
import { waitForAtb } from '../utils/waitFor';

export default {
  name: 'Anchira',
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www.)?(anchira).to\/(archive|g|read)\/\d+\/.+/,
  homepage: 'https://anchira.to/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'main .p img',
  async run() {
    const num = document.querySelectorAll<HTMLOptionElement>('nav select option');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a.back')?.getAttribute('href'),
      pages: num?.length,
      prev: '#',
      next: '#',
      listImages: [''],
      async before(begin = 1) {
        const div = document.createElement('div');
        div.setAttribute(
          'style',
          'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
        );
        document.body.append(div);

        num.item(begin - 1).selected = true;
        const select = document.querySelector('nav select');
        select?.dispatchEvent(new Event('change'));

        const next = document.querySelector('button[aria-label="Go to the next page"]');
        const target = document.querySelector<HTMLDivElement>('main');
        const src: string[] = [];
        for (let i = begin; i <= this.pages; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          src[i - 1] = await waitForAtb('.p img', 'src', target ?? document.body);
          target?.querySelector('.p img')?.removeAttribute('src');
          next?.dispatchEvent(new Event('click'));
        }

        this.listImages = src;
        num.item(0).selected = true;
        select?.dispatchEvent(new Event('change'));
      },
    };
  },
};
