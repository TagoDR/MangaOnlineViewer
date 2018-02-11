// == Hoc Vien Truyen Tranh =======================================================================
export default {
  name: 'Hoc Vien Truyen Tranh',
  url: /https?:\/\/(www.)?hocvientruyentranh.com\/chapter\/.+\/.+/,
  homepage: 'http://hocvientruyentranh.com/',
  language: ['Vietnamese'],
  category: 'manga',
  run() {
    const src = $('.manga-container img').get();
    return {
      title: $('.chapters-dropdown option:selected').text().trim(),
      series: $('.theNavi a').attr('href'),
      quant: src.length,
      prev: $('.top-nav a:first').attr('href'),
      next: $('.top-nav a:last').attr('href'),
      listImages: src.map(item => $(item).attr('src')),
    };
  },
};
