// == PornComixOnline ==============================================================================
export default {
  name: 'PornComixOnline',
  url: /https?:\/\/(www.)?porncomixone.net\/comic\/.+/,
  homepage: 'https://www.porncomixone.net',
  language: ['English'],
  category: 'hentai',
  run() {
    const imgs = $('figure a').get();
    return {
      title: $('.post-title').text().trim(),
      series: '#',
      pages: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map((i) => $(i).attr('href')),
    };
  },
};
