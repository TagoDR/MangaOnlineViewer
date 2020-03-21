// == TMOHentai ====================================================================================
export default {
  name: 'TMOHentai',
  url: /https?:\/\/(www.)?tmohentai.com\/reader\/.+\/paginated\/[0-9]+/,
  homepage: 'http://tmohentai.com/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const num = $('#select-page option').get().length;
    return {
      title: $('.reader-title').text().trim(),
      series: $('.nav a:nth(-2)').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num)
        .keys()].map((i) => W.location.href.replace(/\/[0-9]+?$/, `/${i + 1}`)),
      img: '.content-image',
      lazyAttr: 'data-original',
    };
  },
};
