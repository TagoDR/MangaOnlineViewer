// == 8Muses =======================================================================================
import { bruteforce } from '../utils/bruteforce';

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
          this.listImages = await bruteforce(
            () => {
              const prev = document.querySelector('.page-prev');
              while (
                document.querySelector('.c-dropdown-toggle')?.textContent?.match(/\d+/)?.at(0) !==
                '1'
              ) {
                prev?.dispatchEvent(new Event('click'));
              }
            },
            this.pages,
            '.page-next',
            '.p-picture',
            '.photo img',
            'src',
          );
        }
      },
    };
  },
};
