// == mangahosted
// ===================================================================================
export default {
  name: 'mangahosted',
  url: /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/,
  homepage: 'https://mangahosted.com/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const images = [...document.querySelectorAll('picture img')];
    return {
      title: $('.breadcrumb li:eq(3)').text().trim(),
      series: $('.breadcrumb li:eq(2) a').attr('href'),
      pages: images.length,
      prev: W.$read_prev,
      next: W.$read_next,
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
