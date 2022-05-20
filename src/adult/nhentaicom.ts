// == nHentai.Com ==================================================================================
export default {
  name: 'nHentai.com',
  url: /https?:\/\/(www.)?nhentai.com\/.+\/comic\/.+/,
  homepage: 'https://nhentai.com/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.pages-selector option',
  run() {
    return {
      title: $('.comic-title').text().trim(),
      series: $('.comic-title a').attr('href'),
      pages: $('.pages-selector option').get().length,
      prev: '#',
      next: '#',
      listImages: $('.reader img')
        .get()
        .map((i) => $(i).attr('data-src')),
    };
  },
};
