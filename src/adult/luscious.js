// == Luscious =====================================================================================
export default {
  name: ['Luscious', 'Wondersluts'],
  url: /https?:\/\/(www.)?(luscious.net|wondersluts.com)\/c\/.+/,
  homepage: ['https://luscious.net/', 'https://www.wondersluts.com/'],
  language: ['English'],
  category: 'hentai',
  run() {
    const origin = $('.three_column_details h3 a');
    const num = parseInt($('#pj_no_pictures').html().trim(), 10);
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      bruteForce(func, i = 1, url = location.pathname) {
        if (i > num) return;
        const self = this;
        func.getPage(url).then((html) => {
          func.addImg(i, $(html).find('img#single_picture').attr('src'));
          self.bruteForce(func, i + 1, $(html).find('#next').attr('href'));
        });
      },
    };
  },
};
