// == NaniScans ====================================================================================
export default {
  name: 'NaniScans',
  url: /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/,
  homepage: 'https://naniscans.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterListRoute',
  async run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const api = await fetch(W.location.href.replace('read', 'json')).then((res) => res.json());
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[href^="/titles/"]')?.getAttribute('href'),
      pages: api.pages.length,
      prev: W.previousChapterRoute,
      next: W.nextChapterRoute,
      listImages: api.pages.map((i: { number: number; address: string }) => i.address),
    };
  },
};
