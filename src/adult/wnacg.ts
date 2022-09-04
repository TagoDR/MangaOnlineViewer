// == wnacg ========================================================================================
export default {
  name: 'wnacg',
  url: /https?:\/\/(www.)?wnacg.com\/photos-view-id-.+/,
  homepage: 'https://wnacg.com/',
  language: ['English', 'Raw', 'Chinese'],
  category: 'hentai',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const pages = [...document.querySelectorAll<HTMLOptionElement>('.pageselect option')];
    return {
      title: document.querySelector('.bread a:last-of-type')?.textContent?.trim(),
      series: '#',
      pages: pages.length,
      prev: '#',
      next: '#',
      listPages: pages.map((page) => W.location.pathname.replace(/\d+/, page.value)),
      img: '#picarea',
    };
  },
};
