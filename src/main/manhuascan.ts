// == ManhuaScan ===================================================================================
export default {
  name: 'ManhuaScan',
  url: /https?:\/\/(www.)?manhuascan.io\/.+chapter.+/,
  homepage: 'https://manhuascan.io/',
  language: ['English'],
  category: 'manga',
  waitVar: 'imgsrcs',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const key = CryptoJS.enc.Hex.parse('e11adc3949ba59abbe56e057f20f131e');
    const iv = CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef');
    const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
    const images = CryptoJS.AES.decrypt(W.imgsrcs, key, opinion)
      .toString(CryptoJS.enc.Utf8)
      .split(',');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.breadcrumb li:nth-child(3) a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.chapter-select a:first-of-type')?.getAttribute('href'),
      next: document.querySelector('.chapter-select a:last-of-type')?.getAttribute('href'),
      listImages: images,
    };
  },
};
