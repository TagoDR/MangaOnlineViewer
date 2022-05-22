// == Fakku ========================================================================================
export default {
  name: 'Fakku',
  url: /https?:\/\/(www.)?fakku.net\/.+\/.+/,
  homepage: 'https://www.fakku.net/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = $('#thumbs img, .current-page')
      .attr('src')
      ?.replace('thumbs', 'images')
      .replace(/[0-9]+(\.thumb)?\.jpg$/, '');
    const num = $('.drop option:last').val();
    return {
      title: $('.chapter a:eq(1)').text().trim(),
      series: $('a.a-series-title:first').attr('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${src + String(`000${i + 1}`).slice(-3)}.jpg`),
    };
  },
};
