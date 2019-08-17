// == SenManga =====================================================================================
export default {
  name: 'SenManga(Raw)',
  url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
  homepage: 'http://raw.senmanga.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const url = `/${W.location.pathname.split('/')[1]}/${W.location.pathname.split('/')[2]}`;
    const num = parseInt($('select[name=\'page\'] option:last').val(), 10);
    const chapter = $('select[name="chapter"] option:selected');
    const origin = $('.title a');
    return {
      title: $('.title').text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: origin.attr('href') + chapter.next().val(),
      next: origin.attr('href') + chapter.prev().val(),
      listPages: [...Array(num).keys()].map((i) => `${url}/${i + 1}/`),
      img: '#picture',
      before() {
        $('body').contents().filter(() => this.nodeType === 3).remove();
      },
    };
  },
};
