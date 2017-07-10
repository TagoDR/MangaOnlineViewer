// == TheSpectrum ==================================================================================
export default {
  name: 'TheSpectrum',
  url: /https?:\/\/view.thespectrum.net\/.+/,
  homepage: 'http://www.thespectrum.net/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const url = `${location.pathname}?${$('form')
      .serialize()
      .substring(0, $('form').serialize().lastIndexOf('='))}`;
    const num = $('.selectpage option').length;
    const chapter = $('.selectchapter option:selected');
    return {
      title: $('.viewerLabel:eq(1)').text(),
      series: '#',
      quant: num,
      prev: `${location.pathname}?ch=${chapter.prev().val()}`,
      next: `${location.pathname}?ch=${chapter.next().val()}`,
      listPages: [...Array(num).keys()].map(i => `${url}=${i + 1}`),
      img: '#imgContainer img',
    };
  },
};
