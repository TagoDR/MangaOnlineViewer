// == TMOHentai ====================================================================================
export default {
  name: 'TMOHentai',
  url: /https?:\/\/(www.)?tmohentai.com\/reader\/.+\/paginated\/[0-9]+/,
  homepage: 'http://tmohentai.com/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const num = $('#select-page option').get().length;
    const src = $('.content-image').attr('data-original');
    const size = src.match(/([0-9]+)\..+/)[1].length;
    const ext = src.match(/[0-9]+(\..+)/)[1];
    return {
      title: $('.reader-title').text().trim(),
      series: $('.nav a:nth(-2)').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map(
        (i) => src.replace(/[0-9]+.jpg/, String(`00000${i + 1}`).slice(-1 * size) + ext),
      ),
    };
  },
};
