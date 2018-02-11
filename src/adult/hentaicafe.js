// == HentaiCafe ===================================================================================
export default {
  name: 'HentaiCafe',
  url: /https?:\/\/hentai.cafe\/manga\/read\/.*\/en\/0\/1\/page\/.+/,
  homepage: 'https://hentai.cafe',
  language: ['English'],
  category: 'manga',
  run() {
    const temp = `${location.href.substr(0, location.href.lastIndexOf('/'))}/`;
    const url = temp.match(/page\/$/) ? temp : `${temp}page/`;
    const num = $('.topbar_right .dropdown li').length;
    const chapter = $('.topbar_left .dropdown_parent:last ul li a');
    return {
      title: $('title').text().trim().replace(/Page [0-9]+ /, ''),
      series: location.pathname.match(/\/manga\/read\/(.+)\/.+\/.+\/.+\/page\/.+/)[1],
      quant: num,
      prev: chapter.eq(chapter.index(chapter.filter(`[href*='${location.pathname.replace(/page.+/, '')}']`)) + 1).attr('href'),
      next: chapter.eq(chapter.index(chapter.filter(`[href*='${location.pathname.replace(/page.+/, '')}']`)) - 1).attr('href'),
      listPages: [...Array(num).keys()].map(i => url + (i + 1)),
      img: 'img.open',
    };
  },
};
