// == HentaIHere ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'HentaIHere',
  url: /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,
  homepage: 'https://www.hentaihere.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitVar: 'rff_imageList',
  run(): IManga {
    const src = document.querySelector('#arf-reader-img')?.getAttribute('src')?.replace(/\d.+/, '');
    return {
      title: unsafeWindow.rff_pageTitle.replace(/.+\|/, '').trim(),
      series: unsafeWindow.rff_thisManga,
      pages: unsafeWindow.rff_imageList.length,
      prev: unsafeWindow.rff_previousChapter,
      next: unsafeWindow.rff_nextChapter,
      listImages: unsafeWindow.rff_imageList.map((img: string) => src + img),
    };
  },
};
export default site;
