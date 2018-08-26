// == PornComixOnline ==============================================================================
export default {
  name: 'PornComixOnline',
  url: /https?:\/\/(www.)?(porncomixonline.net|xyzcomics.com)\/.+/,
  homepage: 'https://www.porncomixonline.net',
  language: ['English'],
  category: 'hentai',
  run() {
    const imgs = $('.dgwt-jg-gallery img').get();
    return {
      title: $('.entry-title').text().trim(),
      series: '#',
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map(i => $(i).attr('data-lazy-src') || $(i).attr('src')).map(i => i.replace(/-[0-9]+x[0-9]+\./, '.')),
    };
  },
};
