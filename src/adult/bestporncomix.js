// == BestPornComix ================================================================================
export default {
  name: 'BestPornComix',
  url: /https?:\/\/(www.)?bestporncomix.com\/gallery\/.+/,
  homepage: 'https://www.bestporncomix.com',
  language: ['English'],
  category: 'hentai',
  timer: 5000,
  run() {
    return {
      title: $('.post-title:first').text().trim(),
      series: '#',
      quant: $('.attachment-thumbnail').get().length,
      prev: '#',
      next: '#',
      listPages: $('.gallery-item a').get().map((i) => $(i).attr('href')),
      img: '.attachment-image img',
    };
  },
};
