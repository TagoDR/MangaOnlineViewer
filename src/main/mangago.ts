// == Mangago ======================================================================================
declare let CryptoJS: any;
export default {
  name: 'Mangago',
  url: /https?:\/\/(www.)?mangago.me\/.*\/.*\/.*/,
  homepage: 'https://www.mangago.me/',
  language: ['English'],
  category: 'manga',
  waitVar: 'imgsrcs',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const key = CryptoJS.enc.Hex.parse('e11adc3949ba59abbe56e057f20f883e');
    const iv = CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef');
    const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
    const images = CryptoJS.AES.decrypt(W.imgsrcs, key, opinion)
      .toString(CryptoJS.enc.Utf8)
      .split(',');
    return {
      title: `${W.manga_name} ${W.chapter_name}`,
      series: W.mid,
      pages: W.total_pages,
      prev: document.querySelector('.recom p:nth-child(5) a')?.getAttribute('href'),
      next: W.next_c_url,
      listImages: images,
    };
  },
};
