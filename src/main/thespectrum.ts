// == TheSpectrum ==================================================================================
export default {
  name: 'TheSpectrum',
  url: /https?:\/\/view.thespectrum.net\/.+/,
  homepage: 'http://www.thespectrum.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const url = `${W.location.pathname}?${$('form')
      .serialize()
      .substring(0, $('form').serialize().lastIndexOf('='))}`;
    const num = $('.selectpage option').length;
    const chapter = $('.selectchapter option:selected');
    return {
      title: $('.viewerLabel:eq(1)').text(),
      series: '#',
      pages: num,
      prev: `${W.location.pathname}?ch=${chapter.prev().val()}`,
      next: `${W.location.pathname}?ch=${chapter.next().val()}`,
      listPages: [...Array(num).keys()].map((i) => `${url}=${i + 1}`),
      img: '#imgContainer img',
    };
  },
};
