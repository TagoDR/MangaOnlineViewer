// == LHTranslation ================================================================================
export default {
  name: 'LHTranslation',
  url: /https?:\/\/(www.)?lhtranslation.net\/read.+/,
  homepage: 'http://lhtranslation.net/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: $('.chapter-img.tieude font').text(),
      series: $('.navbar-brand.manga-name').attr('href'),
      pages: $('img.chapter-img').length,
      prev: $('.form-control option:selected').next().val(),
      next: $('.form-control option:selected').prev().val(),
      listImages: $('img.chapter-img').get().map((item) => $(item).attr('src')),
    };
  },
};
