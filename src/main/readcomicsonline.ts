// == ReadComicsOnline =============================================================================
export default {
  name: 'ReadComicsOnline',
  url: /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/,
  homepage: 'https://readcomicsonline.ru/',
  language: ['English'],
  category: 'comic',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const images = [...document.querySelectorAll('#all img')];
    return {
      title: W.title.replace(/ - Page \d+/, ''),
      series: document.querySelector('div.pager-cnt a')?.getAttribute('href'),
      pages: W.pages.length,
      prev: W.prev_chapter,
      next: W.next_chapter,
      listImages: images.map((img) => img.getAttribute('data-src')),
    };
  },
};
