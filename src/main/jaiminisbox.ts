// == JaiminisBox ==================================================================================
export default {
  name: 'JaiminisBox',
  url: /https?:\/\/(www.)?jaiminisbox.com\/reader\/read\/.+/,
  homepage: 'https://jaiminisbox.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = $('.topbar_left .dropdown_parent:last ul li a');
    return {
      title: $('title').text().trim(),
      series: $('div.tbtitle div.text a:first').attr('href'),
      pages: window.pages.length,
      prev: chapter
        .eq(
          chapter.index(
            chapter.filter(`[href*='${window.location.pathname.replace(/page.+/, '')}']`),
          ) + 1,
        )
        .attr('href'),
      next: chapter
        .eq(
          chapter.index(
            chapter.filter(`[href*='${window.location.pathname.replace(/page.+/, '')}']`),
          ) - 1,
        )
        .attr('href'),
      listImages: window.pages.map((i) => i.url),
    };
  },
};
