// == nHentai.net ==================================================================================
export default {
  name: 'nHentai.net',
  url: /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/,
  homepage: 'https://nhentai.net/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = parseInt($('.num-pages:first').html(), 10);
    const ext = $('#image-container img').attr('src').match(/\.\w+$/);
    const src = $('#image-container img').attr('src').replace(ext, '');
    return {
      title: $('title').text().split('- Page')[0].trim(),
      series: $('.go-back').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map((i) => `${src}/${i + 1}${ext}`),
    };
  },
};
