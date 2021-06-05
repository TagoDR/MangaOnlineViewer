// == Ver Mangas Porno =============================================================================
export default {
  name: ['vermangasporno', 'vercomicsporno'],
  url: /https?:\/\/(www.)?(vermangasporno|vercomicsporno).com\/.+/,
  homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const imgs = $('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img').get();
    const src = imgs.map((i) => $(i).attr('data-lazy-src') || $(i).attr('src'));
    return {
      title: $('h1.titl').text().trim() || $('title').text().trim(),
      series: '#',
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
