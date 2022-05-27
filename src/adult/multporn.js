// == MultPorn =====================================================================================
export default {
  name: 'MultPorn',
  url: /https?:\/\/(www.)?multporn.net\/(comics|hentai_manga)\/.+/,
  homepage: 'https://multporn.net/',
  language: ['English'],
  category: 'hentai',
  // waitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
  run() {
    let api = null;
    const url = $('head')
      .text()
      .match(/"configUrl":"(.+?)",/)[1]
      .replace('\\', '');
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });
    const imgs = $(api)
      .find('image')
      .get()
      .map((i) => $(i).attr('imageURL'));
    return {
      title: $('#page-title').text().trim(),
      series: '#',
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};
