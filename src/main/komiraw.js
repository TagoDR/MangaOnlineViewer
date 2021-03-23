// == KomiRaw ===================================================================================
export default {
  name: 'KomiRaw',
  url: /https?:\/\/(www.)?(komiraw).com\/.+\/.+/,
  homepage: 'https://komiraw.com/',
  language: ['English'],
  category: 'manga',
  timer: 4000,
  run() {
    const images = $('img.chapter-img').get();
    return {
      title: $('.chapter-title').attr('title').trim(),
      series: $('#boxtopchap a').attr('href'),
      quant: images.length,
      prev: $('#chapter-nav-bot #prev_chap').attr('href'),
      next: $('#chapter-nav-bot #next_chap').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
