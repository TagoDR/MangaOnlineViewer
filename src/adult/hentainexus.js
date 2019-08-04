// == HentaiNexus ==================================================================================
export default {
  name: 'HentaiNexus',
  url: /https?:\/\/(www.)?hentainexus.com\/read\/[0-9]+\/[0-9]+/,
  homepage: 'https://hentainexus.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    return {
      title: W.baseTitle.replace(' :: HentaiNexus', ''),
      series: $('#pageChangeSnap > p > a').attr('href'),
      quant: W.pageData.length,
      prev: '#',
      next: '#',
      listImages: W.pageData,
    };
  },
};
