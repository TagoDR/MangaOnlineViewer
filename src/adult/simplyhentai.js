// == Simply-Hentai ================================================================================
export default {
  name: 'Simply-Hentai',
  url: /https?:\/\/.*simply-hentai.com\/.+\/page\/.+/,
  homepage: 'http://simply-hentai.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    let api = null;
    $.ajax({
      type: 'GET',
      url: location.href.replace(/\/page\/[0-9]+#?$/, '/all-pages'),
      dataType: 'json',
      async: false,
      success(res) {
        api = res;
      },
    });
    const imgs = Object.values(api).map(i => i.full || i.giant || i.path);
    return {
      title: $('h1 .pu-trigger:first').text().trim(),
      series: $('h1 .pu-trigger:first').attr('href'),
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};

