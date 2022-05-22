// == xyzcomics ====================================================================================
export default {
  name: 'xyzcomics',
  url: /https?:\/\/(www.)?xyzcomics.com\/.+/,
  homepage: 'http://xyzcomics.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const imgs = $('.jig-link').get() as HTMLAnchorElement[];
    return {
      title: $('.entry-title').first().text().trim(),
      series: '#',
      pages: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map((i) => i.href),
    };
  },
};
