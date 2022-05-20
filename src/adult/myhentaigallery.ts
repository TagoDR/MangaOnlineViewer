// == MyHentaiGallery ==============================================================================
export default {
  name: 'MyHentaiGallery',
  url: /https?:\/\/(www.)?myhentaigallery.com\/gallery\/show\/.+\/[0-9]+/,
  homepage: 'https://www.myhentaigallery.com',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = $('.gallery-slide img').attr('src');
    const num = parseInt($('.pagination ul li:not(.next,.last):last').text(), 10);
    return {
      title: $('title').text().trim(),
      series: $('.back-to-gallery a').attr('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map((i) =>
        src.replace(/[0-9]+\./, `${String(`000${i + 1}`).slice(-3)}.`),
      ),
    };
  },
};
