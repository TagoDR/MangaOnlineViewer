// == FoOlSlide ====================================================================================
export default {
  name: 'FoOlSlide',
  url: /^(?!.*jaiminisbox).*\/read\/.+/,
  homepage: '',
  language: ['English'],
  obs: 'Any Scanlator site that uses FoOLSlide',
  category: 'manga',
  run() {
    const temp = `${W.location.href.slice(0, W.location.href.lastIndexOf('/'))}/`;
    const url = temp.match(/page\/$/) ? temp : `${temp}page/`;
    const num = $('.topbar_right .dropdown li').length;
    const chapter = $('.topbar_left .dropdown_parent:last ul li a');
    return {
      title: $('title').text().trim(),
      series: $('div.tbtitle div.text a:first').attr('href'),
      pages: num,
      prev: chapter.eq(
        chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) + 1,
      )
        .attr('href'),
      next: chapter.eq(
        chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) - 1,
      )
        .attr('href'),
      listPages: [...Array(num).keys()].map((i) => url + (i + 1)),
      img: 'img.open',
    };
  },
};
