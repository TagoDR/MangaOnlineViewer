// == nHentai.net ==================================================================================
export default {
  name: ['nHentai.net', 'nHentai.xxx'],
  url: /https?:\/\/(www.)?nhentai.(net|xxx)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/', 'https://nhentai.xxx/'],
  language: ['English'],
  category: 'hentai',
  run() {
    function getExt(ext) {
      if (ext === 'g') return 'gif';
      if (ext === 'p') return 'png';
      return 'jpg';
    }

    const num = parseInt($('.num-pages:first').html(), 10);
    const src = $('#image-container img').attr('src').replace(/\d+.\w\w\w$/, '');
    // eslint-disable-next-line camelcase
    const ext = W?.images_ext?.map(getExt)
      // eslint-disable-next-line no-underscore-dangle
      || W?._gallery?.images?.pages?.map((i) => getExt(i.t))
      || [...Array(num).keys()].map(getExt);
    return {
      title: $('title').text().split('- Page')[0].trim(),
      series: $('.go-back').attr('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: [...Array(num).keys()].map((i) => `${src}${i + 1}.${ext[i]}`),
    };
  },
};
