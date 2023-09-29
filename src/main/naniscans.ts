// == NaniScans ====================================================================================
export default {
  name: 'NaniScans',
  url: /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/,
  homepage: 'https://naniscans.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterListRoute',
  async run() {
    const api = await fetch(window.location.href.replace('read', 'json')).then(async (res) =>
      res.json(),
    );
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[href^="/titles/"]')?.getAttribute('href'),
      pages: api.pages.length,
      prev: unsafeWindow.previousChapterRoute,
      next: unsafeWindow.nextChapterRoute,
      listImages: api.pages.map((i: { number: number; address: string }) => i.address),
    };
  },
};
