// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: '.reader-image-wrapper img',
  waitAttr: 'src',
  run() {
    const url = $('.reader-image-wrapper img').attr('src').replace(/\d+.(jpg|png)$/i, '');
    const num = parseInt($('.total-pages').text(), 10);
    return {
      title: $('title').text().replace(' - MangaDex', ''),
      series: $('.manga-link').attr('href'),
      quant: num,
      prev: $('.chapter-link-left').attr('href'),
      next: $('.chapter-link-right').attr('href'),
      listImages: [...Array(num).keys()].map(i => `${url + (i + 1)}.jpg`),
      listImagesAlt: [...Array(num).keys()].map(i => `${url + (i + 1)}.png`),
    };
  },
};
