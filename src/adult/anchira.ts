// == Anchira ======================================================================================
import { waitFor } from '../utils/waitFor';

export default {
  name: 'Anchira',
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www\.)?(anchira).to\/(archive|g|read)\/\d+\/.+/,
  homepage: 'https://anchira.to/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'nav select option',
  async run() {
    const num = document.querySelectorAll<HTMLOptionElement>('nav select option');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
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

        const select = document.querySelector<HTMLSelectElement>('nav select');
        const src: string[] = [];
        for (let i = this.pages; i >= begin; i -= 1) {
          document
            .querySelector<HTMLDivElement>('main .p div')
            ?.shadowRoot?.querySelector('img')
            ?.removeAttribute('src');
          select!.value = String(i - 1);
          select?.dispatchEvent(new Event('change'));
          // eslint-disable-next-line no-await-in-loop
          src[i - 1] = await waitFor(
            () =>
              document
                ?.querySelector('main .p div')
                ?.shadowRoot?.querySelector('img')
                ?.getAttribute('src'),
          );
        }

        this.listImages = src;
        num.item(0).selected = true;
        select?.dispatchEvent(new Event('change'));
      },
    };
  },
};
