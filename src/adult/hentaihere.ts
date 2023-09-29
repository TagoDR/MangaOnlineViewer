// == HentaIHere ===================================================================================
export default {
  name: 'HentaIHere',
  url: /https?:\/\/(www.)?hentaihere.com\/.+\/.+\/.+/,
  homepage: 'https://www.hentaihere.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'rff_imageList',
  run() {
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
