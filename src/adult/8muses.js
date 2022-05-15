// == 8Muses =======================================================================================
export default {
  name: '8Muses',
  url: /https?:\/\/comics.8muses.com\/comics\/picture\/.+/,
  homepage: 'https://comics.8muses.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    function decode(data) {
      /* eslint-disable no-mixed-operators,no-shadow */
      return (((t) => {
        if (t.charAt(0) !== '!') return t;
        return t.slice(1)
          .replace(/[\x21-\x7e]/g, (s) => String.fromCharCode(33 + (s.charCodeAt(0) + 14) % 94));
      })(data.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&')));
      /* eslint-enable no-mixed-operators,no-shadow */
    }

    let api = null;
    const url = W.location.href;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });
    const dataPublic = JSON.parse(decode($(api).find('#ractive-public').html().trim()));
    const dataShared = JSON.parse(decode($(api).find('#ractive-shared').html().trim()));
    const src = dataShared.options.pictureHost || W.location.host;
    const images = dataPublic.pictures.map((img) => `//${src}/image/fl/${img.publicUri}.jpg`);
    return {
      title: $('.top-menu-breadcrumb li:eq(-2) a').text(),
      series: $('.top-menu-breadcrumb li:last').prev('li').find('a').attr('href'),
      pages: dataPublic.pictures.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
