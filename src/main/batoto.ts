// == Batoto =======================================================================================
export default {
  name: 'Batoto',
  url: /https?:\/\/(www.)?bato.to\/chapter.*/,
  homepage: 'http://bato.to/',
  language: ['English'],
  category: 'manga',
  run() {
    const num = $('#viewer .item').length;
    return {
      title: $('.nav-title a').text(),
      series: $('.nav-title a').attr('href'),
      pages: num,
      prev: $('.nav-prev a').attr('href'),
      next: $('.nav-next a').attr('href'),
      listImages: $('.page-img').get().map((i) => $(i).attr('src')),
    };
  },
};
