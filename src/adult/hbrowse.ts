// == HBrowser =====================================================================================
export default {
  name: 'HBrowser',
  url: /https?:\/\/(www.)?hbrowse.com\/.+/,
  homepage: 'https://www.hbrowse.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const url = W.location.href + (W.location.href.endsWith('/') ? '' : '/');
    const num = parseInt(document.querySelector('#jsPageList a:last-child')?.textContent ?? '', 10);
    const chapter = [...document.querySelectorAll('#chapters + table a.listLink')];
    const origin = chapter.findIndex((chp) =>
      W.location.href.endsWith(chp.getAttribute('href') ?? 'undefined'),
    );
    return {
      title: document.querySelector('.listTable td.listLong')?.textContent?.trim(),
      series: /.+\/\d+\//.exec(W.location.href)?.at(0),
      pages: num,
      prev: chapter.at(origin - 1)?.getAttribute('href'),
      next: chapter.at(origin + 1)?.getAttribute('href'),
      listPages: Array(num)
        .fill(0)
        .map((_, i) => url + String(`0000${i + 1}`).slice(-5)),
      img: 'td.pageImage a img',
    };
  },
};
