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
      quant: $('figure img').get().length,
      prev: '#',
      next: '#',
      listImages: $('figure a')
        .get()
        .map((i) => $(i).attr('href')),
    };
  },
};
