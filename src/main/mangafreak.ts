// == MangaFreak ===================================================================================
export default {
  name: 'MangaFreak',
  url: /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/,
  homepage: 'https://mangafreak.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('.mySlides img').get();
    return {
      title: $('title').text().trim(),
      series: $('.title a').attr('href'),
      pages: images.length,
      prev: $('.chapter_list select option:selected').prev().val(),
      next: $('.chapter_list select option:selected').next().val(),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
