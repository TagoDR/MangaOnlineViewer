// == nHentai.net ==================================================================================
/* eslint-disable no-underscore-dangle */
import { extensionByCode } from '../utils/urls';

export default {
  name: ['nHentai.net', 'nHentai.xxx', 'lhentai'],
  url: /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/', 'https://nhentai.xxx/', 'https://lhentai.com/'],
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt(document.querySelector('.num-pages')?.textContent ?? '', 10);
    const src = document
      .querySelector('#image-container img')
      ?.getAttribute('src')
      ?.replace(/\d+.\w+$/, '');

    const ext = unsafeWindow._gallery?.images?.pages?.map((i: { t: string }) =>
      extensionByCode(i.t),
    );
    return {
      title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
      series: document.querySelector('.go-back')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${src}${i + 1}.${ext[i]}`),
    };
  },
};
