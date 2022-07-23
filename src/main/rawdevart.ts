// == RawDevart  ===================================================================================
export default {
  name: 'RawDevart',
  url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
  homepage: 'https://rawdevart.com',
  language: ['Raw'],
  category: 'manga',
  waitVar: 'rconfig',
  waitEle: '#chapter-list select',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const chapter = document.querySelector<HTMLOptionElement>('#chapter-list option:checked');
    const images = [...document.querySelectorAll('#img-container img')];
    return {
      title: W.rconfig.chapterTitle,
      series: W.rconfig.prefix,
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map((item) => $(item).attr('data-src') || $(item).attr('src')),
    };
  },
};
