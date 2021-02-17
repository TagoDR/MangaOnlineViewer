// == Toonily ======================================================================================
export default {
  name: 'Toonily',
  url: /https?:\/\/(www.)?(toonily).net\/manga\/.+\/.+/,
  homepage: 'https://toonily.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('.wp-manga-chapter-img').get();
    return {
      title: $('#chapter-heading').text().trim(),
      series: $('.breadcrumb li:eq(1) a').attr('href'),
      quant: images.length,
      prev: $('.prev_page').attr('href'),
      next: $('.next_page').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
