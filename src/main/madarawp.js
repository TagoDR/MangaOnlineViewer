// == Madara WordPress Plugin ======================================================================
// https://themeforest.net/item/madara-wordpress-theme-for-manga/20849828
export default {
  name: ['MangaHaus', 'Isekai Scan', 'Comic Kiba'],
  url: /https?:\/\/(www.)?(manhuaus|isekaiscan|comickiba).com\/manga\/.+\/.+/,
  homepage: ['https://manhuaus.com', 'https://isekaiscan.com/', 'https://comickiba.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const src = $('.wp-manga-chapter-img, .blocks-gallery-item img').get();
    return {
      title: $('#chapter-heading').text().trim(),
      series: $('.breadcrumb li a:last').attr('href'),
      quant: src.length,
      prev: $('.prev_page:first').attr('href'),
      next: $('.next_page:first').attr('href'),
      listImages: src.map((i) => $(i).attr('src') || $(i).attr('data-src') || $(i).attr('data-full-url')),
    };
  },
};
