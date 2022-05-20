// == RawDevart  ===================================================================================
export default {
  name: 'RawDevart',
  url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
  homepage: 'https://rawdevart.com',
  language: ['Original'],
  category: 'manga',
  waitVar: 'rconfig',
  waitEle: '#chapter-list select',
  run() {
    return {
      title: W.rconfig.chapterTitle,
      series: W.rconfig.prefix,
      pages: $('#img-container img').get().length,
      prev: $('#chapter-list option:selected').next().val(),
      next: $('#chapter-list option:selected').prev().val(),
      listImages: $('#img-container img')
        .get()
        .map((item) => $(item).attr('data-src') || $(item).attr('src')),
    };
  },
};
