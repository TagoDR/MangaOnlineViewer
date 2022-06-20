// == HentaiNexus ==================================================================================
export default {
  name: 'HentaiNexus',
  url: /https?:\/\/(www.)?hentainexus.com\/read\/.+/,
  homepage: 'https://hentainexus.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'baseTitle',
  run() {
    return {
      title: window.baseTitle.replace(' :: HentaiNexus', ''),
      series: $('#pageChangeSnap > p > a').attr('href'),
      pages: window.pageData.length,
      prev: '#',
      next: '#',
      listImages: window.pageData,
    };
  },
};
