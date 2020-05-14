// == Luscious =====================================================================================
export default {
  name: 'Luscious',
  url: /https?:\/\/(www.)?luscious.net\/pictures\/.+/,
  homepage: 'https://luscious.net/',
  language: ['English'],
  category: 'hentai',
  run() {
    const origin = $('.three_column_details h3 a');
    const num = parseInt(
      $('li:not(.content_info) div.album_stats > p:nth-child(1)').html()
        .replace(' Pictures.', ''), 10,
    );
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      bruteForce(func, i = 1, url = W.location.pathname) {
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
