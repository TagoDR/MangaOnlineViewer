// == HentaiNexus ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const hentainexus: ISite = {
  name: 'HentaiNexus',
  url: /https?:\/\/(www\.)?hentainexus.com\/read\/.+/,
  homepage: 'https://hentainexus.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitVar: 'pageData',
  run(): IManga {
    const images = unsafeWindow.pageData?.map(
      (i: { image_avif: string; image_fallback: string; image?: string }) =>
        i.image_avif ?? i.image_fallback ?? i.image,
    );
    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/^\[[\d/]+\]/, '')
        .trim(),
      series: document.querySelector('#returnGalleryFooter a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
export default hentainexus;
