// == Sukebe.moe ===================================================================================
import { waitForAtb } from '../utils/waitFor';

export default {
  name: ['ksk.moe', 'Sukebe.moe'],
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www.)?(ksk|sukebe).moe\/(archive|g)\/\d+\/.+\/\d+/,
  homepage: ['https://ksk.moe/', 'https://sukebe.moe/'],
  language: ['English'],
  category: 'hentai',
  waitEle: '.main .page img',
  async run() {
    const direction = document.querySelector<HTMLSelectElement>('[name="direction"]');
    if (direction) {
      direction.value = '1';
      direction.dispatchEvent(new Event('change'));
    }
    document.querySelector('.first')?.dispatchEvent(new Event('click'));
    const next = document.querySelector('.next');
    const num = document.querySelectorAll<HTMLSelectElement>('.currentPageNum option');
    const target = document.querySelector<HTMLDivElement>('.main .pages');
    const src = [];
    for (let i = 1; i <= num?.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      src.push(await waitForAtb('.page img', 'src', target ?? document.body));
      target?.querySelector('img')?.removeAttribute('src');
      next?.dispatchEvent(new Event('click'));
    }
    return {
      title: document.querySelector('header h1 a')?.textContent?.trim(),
      series: document.querySelector('header h1 a')?.getAttribute('href'),
      pages: num?.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
