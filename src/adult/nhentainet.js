// == nHentai.net ==================================================================================
export default {
  name: 'nHentai.net',
  url: /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/,
  homepage: 'https://nhentai.net/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt($('.num-pages:first').html(), 10);
    const src = $('#image-container img').attr('src').replace(/\d+.jpg/, '');
    return {
      title: $('title').text().split('- Page')[0].trim(),
      series: $('.go-back').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map((i) => `${src}/${i + 1}.jpg`),
    };
  },
};
