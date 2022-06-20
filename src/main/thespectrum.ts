// == TheSpectrum ==================================================================================
export default {
  name: 'TheSpectrum',
  url: /https?:\/\/view.thespectrum.net\/.+/,
  homepage: 'http://www.thespectrum.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const url = `${window.location.pathname}?${$('form')
      .serialize()
      .substring(0, $('form').serialize().lastIndexOf('='))}`;
    const num = $('.selectpage option').length;
    const chapter = $('.selectchapter option:selected');
    return {
      title: $('.viewerLabel:eq(1)').text(),
      series: '#',
      pages: num,
      prev: `${window.location.pathname}?ch=${chapter.prev().val()}`,
      next: `${window.location.pathname}?ch=${chapter.next().val()}`,
      listPages: Array(num)
        .fill(null)
        .map((_, i) => `${url}=${i + 1}`),
      img: '#imgContainer img',
    };
  },
};
