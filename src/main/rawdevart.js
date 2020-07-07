// == RawDevart  ===================================================================================
export default {
  name: 'RawDevart',
  url: /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,
  homepage: 'https://rawdevart.com',
  language: ['English'],
  category: 'manga',
  waitVar: 'rconfig',
  run() {
    return {
      title: W.rconfig.chapterTitle,
      series: W.rconfig.prefix,
      quant: $('#img-container img').get().length,
      prev: $('.custom-select option:selected').prev().val(),
      next: $('.custom-select option:selected').next().val(),
      listImages: $('#img-container img').get().map((item) => $(item).attr('data-src') || $(item).attr('src')),
    };
  },
};
