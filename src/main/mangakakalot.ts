// == MangaKakalot =================================================================================
export default {
  name: ['MangaKakalot', 'MangaNelo'],
  url: /https?:\/\/(www.)?(manganelo|mangakakalot).com\/chapter\/.+\/.+/,
  homepage: ['https://mangakakalot.com/page', 'http://www.manganelo.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('#vungdoc img, .container-chapter-reader img').get();
    return {
      title: $('.info-top-chapter h2, .panel-chapter-info-top h1').text().trim(),
      series: $('span a[title]').eq(1).attr('href'),
      pages: images.length,
      prev: $('.navi-change-chapter-btn-prev:first, .next:first').attr('href'),
      next: $('.navi-change-chapter-btn-next:first, .back:first').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
