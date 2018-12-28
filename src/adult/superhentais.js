// == SuperHentais =================================================================================
export default {
  name: 'SuperHentais',
  url: /https?:\/\/(www.)?superhentais.com\/manga\/.+\/.+/,
  homepage: 'http://www.superhentais.com/',
  language: ['Portuguese'],
  category: 'hentai',
  run() {
    const imgs = $('.capListPage option').get();
    const chapter = $('.capList option:selected');
    return {
      title: $('.boxBarraInfo:first').text().trim(),
      series: $('.capList option:first').val(),
      quant: imgs.length,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listImages: imgs.map(i => $(i).attr('data-image-page')),
    };
  },
};
