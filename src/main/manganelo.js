// == MangaNelo  ===================================================================================
export default {
  name: 'MangaNelo',
  url: /https?:\/\/(www.)?manganelo.com\/chapter\/.+\/.+/,
  homepage: 'http://www.manganelo.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('img.img_content').get();
    return {
      title: $('.info-top-chapter h2').text().trim(),
      series: $('.rdfa-breadcrumb a span[itemprop="title"]').eq(1).parent().attr('href'),
      quant: images.length,
      prev: $('.btn-navigation-chap a:eq(0)').attr('href'),
      next: $('.btn-navigation-chap a:eq(1)').attr('href'),
      listImages: images.map(i => $(i).attr('data')),
    };
  },
};
