// == SuperHentais =================================================================================
export default {
  name: 'SuperHentais',
  url: /https?:\/\/(www.)?superhentais.com\/.+\/.+\/[0-9]+/,
  homepage: 'http://www.superhentais.com/',
  language: ['Portuguese'],
  category: 'hentai',
  run() {
    const url = $('.capLoad').attr('data-cdn');
    const num = $('.capListPage option').get().length;
    const chapter = $('.capList option:selected');
    return {
      title: $('.conteudoBox .boxBarraInfo:first').text().trim(),
      series: $('.capList option:nth(2)').val(),
      quant: num,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listImages: [...Array(num).keys()].map(i => `${url}/${i + 1}.jpg`),
    };
  },
};
