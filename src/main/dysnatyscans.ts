// == DynastyScans =================================================================================
export default {
  name: 'Dynasty-Scans',
  url: /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/,
  homepage: 'https://dynasty-scans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: $('#chapter-title').text(),
      series: '#',
      pages: window.pages.length,
      prev: $('#prev_link').attr('href'),
      next: $('#next_link').attr('href'),
      listImages: window.pages.map((x) => x.image),
    };
  },
};
