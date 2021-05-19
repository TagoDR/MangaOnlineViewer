// == HentaiMimi ==================================================================================
export default {
  name: 'HentaiMimi',
  url: /https?:\/\/(www.)?hentaimimi.com\/view\/.+/,
  homepage: 'https://hentaimimi.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'previewImages',
  run() {
    return {
      title: $('h3').text().trim(),
      series: W.location.pathname,
      quant: W.previewImages.length,
      prev: '#',
      next: '#',
      listImages: W.previewImages.map((i) => `https://hentaimimi.com//${i}`),
    };
  },
};
