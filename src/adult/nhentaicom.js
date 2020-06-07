// == nHentai.Com ==================================================================================
export default {
  name: 'nHentai.com',
  url: /https?:\/\/(www.)?nhentai.com\/.+\/reader\/[0-9]+/,
  homepage: 'https://nhentai.com/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.pages-selector option',
  run() {
    return {
      title: $('.comic-title').text().trim(),
      series: $('.comic-title a').attr('href'),
      quant: $('.pages-selector option').get().length,
      prev: '#',
      next: '#',
      listImages: $('.reader img').get().map((i) => $(i).attr('data-src')),
    };
  },
};
