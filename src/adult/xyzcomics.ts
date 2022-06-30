// == xyzcomics ====================================================================================
export default {
  name: 'xyzcomics',
  url: /https?:\/\/(www.)?xyzcomics.com\/.+/,
  homepage: 'https://xyzcomics.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const images = [...document.querySelectorAll('.jig-link')];
    return {
      title: document.querySelector('.entry-title')?.textContent?.trim(),
      series: '#',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('href')),
    };
  },
};
