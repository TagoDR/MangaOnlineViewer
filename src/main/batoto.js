// == Batoto =======================================================================================
export default { // TODO: Webtoon support
  name: 'Batoto',
  url: /https?:\/\/(www.)?bato.to\/reader.*/,
  waitEle: 'select#page_select:first option',
  homepage: 'http://bato.to/',
  language: ['English'],
  category: 'manga',
  run() {
    const num = $('select#page_select:first option').length;
    return {
      title: $('.moderation_bar li:first').text(),
      series: $('div.moderation_bar a:first').attr('href'),
      quant: num,
      prev: $('img[src$=\'pprev.png\']:first').parent().attr('href'),
      next: $('img[src$=\'nnext.png\']:first').parent().attr('href'),
      listPages: [...Array(num).keys()].map(i => `${location.hash.replace('#', '/areader?id=')}&p=${i + 1}`),
      img: '#comic_page',
    };
  },
};
