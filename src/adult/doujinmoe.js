// == Doujin-Moe Non-members =======================================================================
export default {
  name: 'DoujinMoeNM',
  url: /https?:\/\/(www.)?doujins.com\/.+/,
  homepage: 'https://doujins.com/',
  lang: ['eng'],
  category: 'hentai',
  run() {
    const imgs = $('#gallery > :not(.thumbs)').get();
    return {
      title: $('.title').text(),
      series: $('.title a').eq(-2).attr('href'),
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map(item =>
        $(item).attr('file').replace('static2', 'static')),
    };
  },
};
