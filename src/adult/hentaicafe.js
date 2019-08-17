// == HentaiCafe ===================================================================================
export default {
  name: 'HentaiCafe',
  url: /https?:\/\/hentai.cafe\/manga\/read\/.*\/en\/0\/1\/(page\/.+)?/,
  homepage: 'https://hentai.cafe',
  language: ['English'],
  category: 'manga',
  run() {
    const src = $('img.open').attr('src');
    const size = src.match(/([0-9]+)\..+$/)[1].length;
    const ext = src.match(/[0-9]+(\..+)$/)[1];
    const num = $('.topbar_right .dropdown li').length;
    const chapter = $('.topbar_left .dropdown_parent:last ul li a');
    return {
      title: $('title').text().trim().replace(/Page [0-9]+ /, ''),
      series: W.next_chapter,
      quant: num,
      prev: chapter.eq(
        chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) + 1,
      )
        .attr('href'),
      next: chapter.eq(
        chapter.index(chapter.filter(`[href*='${W.location.pathname.replace(/page.+/, '')}']`)) - 1,
      )
        .attr('href'),
      listImages: [...Array(num).keys()].map(
        (i) => src.replace(/[0-9]+.jpg/, String(`00000${i + 1}`).slice(-1 * size) + ext),
      ),
    };
  },
};
