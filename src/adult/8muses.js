// == 8Muses =======================================================================================
export default {
  name: '8Muses',
  url: /https?:\/\/(www.)?8muses.com\/comics\/.+/,
  homepage: 'https://www.8muses.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = $('.gallery a')
      .get()
      .map(item => $(item).attr('href'))
      .filter(i => i.match(/\/[0-9]+$/));
    return {
      title: $('.top-menu-breadcrumb li:last a').text(),
      series: $('.top-menu-breadcrumb li:last').prev('li').find('a').attr('href'),
      quant: num.length,
      prev: '#',
      next: '#',
      listPages: num,
      img: '.photo .image',
      /* bruteForce(func, i = 1, url = num[0]) {
        if (i > num.length) return;
        const self = this;
        func.getPage(url).then((html) => {
          func.addImg(i,
            // eslint-disable-next-line prefer-template
            $(html).find('#imageHost').val()
            + $(html).find('#imageDir').val()
            + 'image/fl/'
            + $(html).find('#imageName').val());
          self.bruteForce(func, i + 1, num[i]);
        });
      }, */
    };
  },
};
