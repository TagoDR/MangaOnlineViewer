// == nHentai.net ==================================================================================
export default {
  name: 'nHentai.net',
  url: /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/,
  homepage: 'https://nhentai.net/',
  language: ['English'],
  category: 'hentai',
  waitVar: '_gallery',
  run() {
    const num = parseInt($('.num-pages:first').html(), 10);
    const src = $('#image-container img').attr('src').replace(/\d+.\w\w\w$/, '');
    return {
      title: $('title').text().split('- Page')[0].trim(),
      series: $('.go-back').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num)
        // eslint-disable-next-line no-underscore-dangle
        .keys()].map((i) => `${src}${i + 1}${W._gallery.images.pages[i].t === 'j' ? '.jpg' : '.png'}`),
    };
  },
};
