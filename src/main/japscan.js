// == JapScan.To ===================================================================================
export default {
  name: 'JapScan.To',
  url: /https?:\/\/(www.)?japscan.co\/lecture-en-ligne\/.+\/.+/,
  homepage: 'https://www.japscan.co/',
  language: ['French'],
  category: 'manga',
  waitAttr: ['#image img', 'src'],
  run() {
    const src = $('#image img').attr('src').replace(/\/[0-9]+\.[a-z]+$/, '/');
    return {
      title: $('.container h1').text(),
      series: $('.breadcrumb a:last').attr('href'),
      quant: $('#pages option').get().length,
      prev: $('.card-body span + a:first').attr('href'),
      next: $('.card-body span + a:last').attr('href'),
      listImages: $('#pages option').get().map((item) => src + $(item).attr('data-img')),
    };
  },
};
