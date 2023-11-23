// == MangaHosted ===================================================================================
export default {
  name: 'MangaHosted',
  url: /https?:\/\/(www\.)?mangahosted.com\/manga\/.+\/.+/,
  homepage: 'https://mangahosted.com/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('picture img')];
    return {
      title: $('.breadcrumb li:eq(3)').text().trim(),
      series: $('.breadcrumb li:eq(2) a').attr('href'),
      pages: images.length,
      prev: unsafeWindow.$read_prev,
      next: unsafeWindow.$read_next,
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
