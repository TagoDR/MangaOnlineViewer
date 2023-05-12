// == Sukebe.moe ===================================================================================
import { waitForAtb } from '../utils/waitFor';

export default {
  name: ['ksk.moe', 'Sukebe.moe'],
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www.)?(ksk|sukebe).moe\/(archive|g|read)\/\d+\/.+\/\d+/,
  homepage: ['https://ksk.moe/', 'https://sukebe.moe/'],
  language: ['English'],
  category: 'hentai',
  waitEle: 'main .page img',
  async run() {
    const num = document.querySelectorAll<HTMLOptionElement>('header .currentPageNum option');
    return {
      title: document.querySelector('header h1 a')?.textContent?.trim(),
      series: document.querySelector('header h1 a')?.getAttribute('href'),
      pages: num?.length,
      prev: '#',
      next: '#',
      listImages: [''],
      async before(begin: number = 1) {
        const div = document.createElement('div');
        div.setAttribute(
          'style',
          'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
        );
        document.body.append(div);
        const direction = document.querySelector<HTMLSelectElement>('[name="direction"]');
        if (direction && direction.value !== '1') {
          direction.value = '1';
          direction.dispatchEvent(new Event('change'));
        }
        num.item(begin - 1).selected = true;
        document.querySelector('.currentPageNum select')?.dispatchEvent(new Event('change'));
        const next = document.querySelector('.next');
        const target = document.querySelector<HTMLDivElement>('.main .pages');
        const src = [];
        for (let i = begin; i <= this.pages; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          src[i - 1] = await waitForAtb('.page img', 'src', target ?? document.body);
          target?.querySelector('img')?.removeAttribute('src');
          next?.dispatchEvent(new Event('click'));
        }
        this.listImages = src;
      },
    };
  },
};
