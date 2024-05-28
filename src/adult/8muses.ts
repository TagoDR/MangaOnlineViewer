// == 8Muses =======================================================================================
import { waitForAtb, waitWithTimer } from '../utils/waitFor';

export default {
  name: ['8Muses.com', '8Muses.io'],
  obs: 'Slow start, bruteforce may be required',
  url: /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,
  homepage: ['https://comics.8muses.com/', 'https://8muses.io/'],
  language: ['English'],
  category: 'hentai',
  async run() {
    const img = unsafeWindow.link_images?.slice(1, unsafeWindow.link_images.length);
    const num =
      img?.length ??
      parseInt(
        document.querySelector('link[rel="last"]')?.getAttribute('href')?.match(/\d+$/)?.at(0) ??
          '',
        10,
      );
    return {
      title: [...document.querySelectorAll('.top-menu-breadcrumb li:not(:last-child)')]
        .map((e) => e?.textContent?.trim())
        .join('/'),
      series: document
        .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
        ?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      lazy: false,
      timer: 10,
      listImages: img,
      async before() {
        if (!unsafeWindow.link_images?.length) {
          const div = document.createElement('div');
          div.setAttribute(
            'style',
            'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
          );
          document.body.append(div);
          const prev = document.querySelector('.page-prev');
          while (
            document.querySelector('.c-dropdown-toggle')?.textContent?.match(/\d+/)?.at(0) !== '1'
          ) {
            prev?.dispatchEvent(new Event('click'));
          }

          const next = document.querySelector('.page-next');
          const target = document.querySelector<HTMLDivElement>('.p-picture');
          const src = [];
          for (let i = 1; i <= this.pages; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            src[i - 1] = await waitWithTimer(
              waitForAtb('.photo img', 'src', target ?? document.body),
              100,
            );
            target?.querySelector('img')?.removeAttribute('src');
            next?.dispatchEvent(new Event('click'));
          }

          this.listImages = src;
        }
      },
    };
  },
};
