// == HBrowser =====================================================================================
export default {
  name: 'HBrowser',
  url: /https?:\/\/(www.)?hbrowse.com\/.+/,
  homepage: 'http://www.hbrowse.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const url = W.location.href + (W.location.href.slice(-1) === '/' ? '' : '/');
    const num = $('td.pageList a, td.pageList strong').length - 1;
    const chapter = $('#chapters + table a.listLink');
    return {
      title: $('.listTable td.listLong:first').text().trim(),
      series: W.location.href.match(/.+\/[0-9]+\//),
      quant: num,
      prev: chapter.eq(chapter.index(chapter.filter(`[href='${W.location.href}']`)) - 1)
        .attr('href'),
      next: chapter.eq(chapter.index(chapter.filter(`[href='${W.location.href}']`)) + 1)
        .attr('href'),
      listPages: [...Array(num).keys()].map((i) => url + String(`000${i + 1}`).slice(-4)),
      img: 'td.pageImage a img',
    };
  },
};
