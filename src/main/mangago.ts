// == Mangago ======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangago: ISite = {
  name: 'Mangago',
  url: /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,
  homepage: 'https://www.mangago.me/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitVar: 'imgsrcs',
  run(): IManga {
    const key = CryptoJS.enc.Hex.parse('e11adc3949ba59abbe56e057f20f883e');
    const iv = CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef');
    const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
    const images = CryptoJS.AES.decrypt(unsafeWindow.imgsrcs, key, opinion)
      .toString(CryptoJS.enc.Utf8)
      .split(',');
    return {
      title: `${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,
      series: unsafeWindow.mid,
      pages: unsafeWindow.total_pages,
      prev: document.querySelector('.recom p:nth-child(5) a')?.getAttribute('href'),
      next: unsafeWindow.next_c_url,
      listImages: images,
      before() {
        if (images.some((s) => s === '')) {
          document.querySelector<HTMLFormElement>('#nform')?.submit();
        }
      },
    };
  },
};
export default mangago;
