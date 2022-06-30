// == HentaIHere ===================================================================================
export default {
  name: 'HentaIHere',
  url: /https?:\/\/(www.)?hentaihere.com\/.+\/.+\/.+/,
  homepage: 'https://www.hentaihere.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'rff_imageList',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const src = document.querySelector('#arf-reader-img')?.getAttribute('src')?.replace(/\d.+/, '');
    return {
      title: W.rff_pageTitle.replace(/.+\|/, '').trim(),
      series: W.rff_thisManga,
      pages: W.rff_imageList.length,
      prev: W.rff_previousChapter,
      next: W.rff_nextChapter,
      listImages: W.rff_imageList.map((img: string) => src + img),
    };
  },
};
