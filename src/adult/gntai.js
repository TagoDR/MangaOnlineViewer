// == GNTAI ========================================================================================
export default {
  name: 'GNTAI.xyz',
  url: /https?:\/\/(www.)?gntai.xyz\/[0-9]+\/[0-9]+\/.+.html(#[0-9]+)?/,
  homepage: 'http://www.gntai.xyz/',
  language: ['Spanish'],
  category: 'hentai',
  waitVar: 'pages',
  run() {
    return {
      title: W.title_post,
      series: W.HOME,
      quant: W.pages.length,
      prev: '#',
      next: '#',
      listImages: W.pages,
    };
  },
};
