// == 8Muses =======================================================================================
export default {
  name: '8Muses',
  url: /https?:\/\/8muses.io\/picture\/.+/,
  homepage: 'https://comics.8muses.com/',
  language: ['English'],
  category: 'hentai',
  async run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    W.link_images.shift();
    return {
      title: document
        .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
        ?.textContent?.trim(),
      series: W.post_id,
      pages: W.link_images.length,
      prev: '#',
      next: '#',
      listImages: W.link_images,
    };
  },
};
