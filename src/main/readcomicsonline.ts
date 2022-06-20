// == ReadComicsOnline =============================================================================
export default {
  name: 'ReadComicsOnline',
  url: /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/,
  homepage: 'http://readcomicsonline.ru/',
  language: ['English'],
  category: 'comic',
  run() {
    return {
      title: window.title.replace(/ - Page [0-9]+/, ''),
      series: $('div.pager-cnt a:first').attr('href'),
      pages: window.pages.length,
      prev: window.prev_chapter,
      next: window.next_chapter,
      listImages: $('#all img')
        .get()
        .map((i) => $(i).attr('data-src')),
    };
  },
};
