// == Sukebe.moe ===================================================================================
import { waitForAtb } from '../utils/waitFor.js';

export default {
  name: ['ksk.moe', 'Sukebe.moe'],
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www.)?(ksk|sukebe).moe\/(archive|g)\/\d+\/.+\/\d+/,
  homepage: ['https://ksk.moe/', 'https://sukebe.moe/'],
  language: ['English'],
  category: 'hentai',
  waitEle: '.main .page img',
  async run() {
    document.querySelector('.first')?.dispatchEvent(new Event('click'));
    const next = document.querySelector('.next');
    const num = document.querySelectorAll<HTMLSelectElement>('.currentPageNum option');
    const src = [];
    for (let i = 1; i <= num?.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      src.push(await waitForAtb('.page img', 'src'));
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
