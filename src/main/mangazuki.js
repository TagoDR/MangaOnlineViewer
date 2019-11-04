// == MangaZuki  ===================================================================================
export default {
  name: 'MangaZuki',
  url: /https?:\/\/(www.)?mangazuki.online\/manga\/.+\/.+\//,
  homepage: 'https://www.mangazuki.online/',
  language: ['English'],
  category: 'manga',
  run() {
    const imgs = jQuery('.wp-manga-chapter-img').get().map((i) => jQuery(i).attr('src').trim());
    return {
      title: $('.wp-manga-nav .c-breadcrumb li:last').text().trim(),
      series: $('.wp-manga-nav .c-breadcrumb li:nth(1) a').attr('href'),
      quant: imgs.length,
      prev: $('.nav-previous a').attr('href'),
      next: $('.nav-next a').attr('href'),
      listImages: imgs,
    };
  },
};
