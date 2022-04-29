// == KingComix ====================================================================================
export default {
  name: 'KingComix',
  url: /https?:\/\/(www.)?kingcomix.com\/.+/,
  homepage: 'https://kingcomix.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = $('figure img, .entry-content img.lazy').get().map((i) => $(i).attr('src') || $(i).attr('data-src') || $(i).attr('data-full-url') || $(i).attr('data-lazy-src'));
    return {
      title: $('h1.singleTitle-h1').text().trim(),
      series: '#',
      quant: src.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
