// == HentaiHand ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const hentaihand: ISite = {
  name: ['HentaiHand', 'nHentai.com'],
  url: /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,
  homepage: ['https://hentaihand.com/', 'https://nhentai.com'],
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '.reader img',
  run(): IManga {
    const images = [...document.querySelectorAll('.reader img')];
    return {
      title: document.querySelector('.reader-header h5')?.textContent?.trim(),
      series: document.querySelector('.reader-header h5 a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(
        (img) => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
      ),
    };
  },
};
export default hentaihand;
