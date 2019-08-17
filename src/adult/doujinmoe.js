// == Doujin-Moe Non-members =======================================================================
export default {
  name: 'DoujinMoeNM',
  url: /https?:\/\/(www.)?doujins.com\/.+/,
  homepage: 'https://doujins.com/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.doujin',
  run() {
    const imgs = $('.doujin').get();
    return {
      title: $('.title').text(),
      series: $('.title a').eq(-2).attr('href'),
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map((i) => $(i).attr('data-file')),
    };
  },
};
