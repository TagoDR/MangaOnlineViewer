// == Madara WordPress Plugin ======================================================================
// https://themeforest.net/item/madara-wordpress-theme-for-manga/20849828
export default {
  name: ['MangaHaus', 'Isekai Scan', 'Comic Kiba', 'Zinmanga', 'mangatx', 'Toonily', 'Mngazuki', 'ReaperScans'],
  url: /https?:\/\/.+\/(manga|series)\/.+\/.+/,
  homepage: ['https://manhuaus.com', 'https://isekaiscan.com/', 'https://comickiba.com/', 'https://zinmanga.com/', 'https://mangatx.com/', 'https://toonily.net/', 'https://mangazuki.me/', 'https://reaperscans.com/'],
  language: ['English'],
  obs: 'Any Site that uses Madara Wordpress Plugin',
  category: 'manga',
  run() {
    const src = $('.wp-manga-chapter-img, .blocks-gallery-item img').get();
    return {
      title: $('#chapter-heading').text().trim(),
      series: $('.breadcrumb li a:last').attr('href'),
      pages: src.length,
      prev: $('.prev_page:first').attr('href'),
      next: $('.next_page:first').attr('href'),
      listImages: src.map((i) => $(i).attr('src') || $(i).attr('data-src') || $(i)
        .attr('data-full-url')),
    };
  },
};
