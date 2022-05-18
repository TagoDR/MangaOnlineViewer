// == HatigarmScans  ===============================================================================
export default {
  name: 'HatigarmScans',
  url: /https?:\/\/(www.)?hatigarmscanz.net\/comics\/.+\/.+\/.+/,
  homepage: 'https://hatigarmscanz.net/home',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterPages',
  run() {
    return {
      title: $('.page-section-title').text().trim(),
      series: $('div.heading + a').attr('href'),
      pages: W.chapterPages.length,
      prev: $('.container div div a:eq(0)').attr('href'),
      next: $('.container div div a:eq(1)').attr('href'),
      listImages: W.chapterPages,
    };
  },
};
