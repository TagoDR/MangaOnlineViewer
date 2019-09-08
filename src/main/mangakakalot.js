// == MangaKakalot =================================================================================
export default {
  name: ['MangaKakalot', 'MangaNelo'],
  url: /https?:\/\/(www.)?(manganelo|mangakakalot).com\/chapter\/.+\/.+/,
  homepage: ['https://mangakakalot.com/page', 'http://www.manganelo.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('#vungdoc img').get();
    return {
      title: $('.info-top-chapter h2').text().trim(),
      series: $('.rdfa-breadcrumb a span[itemprop="title"]').eq(1).parent().attr('href'),
      quant: images.length,
      prev: $('.btn-navigation-chap a:eq(0)').attr('href'),
      next: $('.btn-navigation-chap a:eq(1)').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
