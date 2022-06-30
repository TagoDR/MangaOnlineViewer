// == PornComixOnline ==============================================================================
export default {
  name: 'PornComixOnline',
  url: /https?:\/\/(www.)?porncomixone.net\/comic\/.+/,
  homepage: 'https://www.porncomixone.net',
  language: ['English'],
  category: 'hentai',
  run() {
    const images = [...document.querySelectorAll('figure a')];
    return {
      title: document.querySelector('.post-title')?.textContent?.trim(),
      series: '#',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('href')),
    };
  },
};
