// == DynastyScans =================================================================================
export default {
  name: 'Dynasty-Scans',
  url: /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/,
  homepage: 'https://dynasty-scans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: document.querySelector('#chapter-title')?.textContent?.trim(),
      series: document.querySelector('#chapter-title a')?.getAttribute('href'),
      pages: unsafeWindow.pages.length,
      prev: document.querySelector('#prev_link')?.getAttribute('href'),
      next: document.querySelector('#next_link')?.getAttribute('href'),
      listImages: unsafeWindow.pages.map((x: { image: string }) => x.image),
    };
  },
};
