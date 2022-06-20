// == HentaiMimi ==================================================================================
export default {
  name: 'HentaiMimi',
  url: /https?:\/\/(www.)?hentaimimi.com\/view\/.+/,
  homepage: 'https://hentaimimi.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'previewImages',
  // start: 'never',
  run() {
    return {
      title: $('h3:first').text().trim(),
      series: window.location.pathname,
      pages: window.previewImages.length,
      prev: '#',
      next: '#',
      listImages: window.previewImages.map((i) => `https://hentaimimi.com//${i}`),
    };
  },
};
