// == ReaperScans ==================================================================================
export default {
  name: 'Reaper Scans',
  url: /https?:\/\/(www.)?(reaperscans).com\/comics\/.+\/.+/,
  homepage: 'https://reaperscans.com/home',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterPages',
  run() {
    return {
      title: $('title').text().trim(),
      series: $('a:has(.fa-home-alt):first').attr('href'),
      quant: W.chapterPages.length,
      prev: $('a:has(.fa-arrow-left):first').attr('href'),
      next: $('a:has(.fa-arrow-right):first').attr('href'),
      listImages: W.chapterPages,
    };
  },
};
