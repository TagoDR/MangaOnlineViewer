// == nHentai ======================================================================================
export default {
  name: 'nHentai',
  url: /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/,
  homepage: 'https://nhentai.net/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt($('.num-pages:first').html(), 10);
    return {
      title: $('title').text().split('- Page')[0].trim(),
      series: $('div#page-container div a').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num).keys()].map((i) => `../${i + 1}/`),
      img: '#image-container img',
    };
  },
};
