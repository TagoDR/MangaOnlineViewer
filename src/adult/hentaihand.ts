// == HentaiHand ==================================================================================
export default {
  name: ['HentaiHand', 'nHentai.com'],
  url: /https?:\/\/(www.)?(hentaihand|nhentai).com\/.+\/reader\/\d+/,
  homepage: ['https://hentaihand.com/', 'https://nhentai.com'],
  language: ['English'],
  category: 'hentai',
  waitEle: '.vertical-image',
  run() {
    const images = [...document.querySelectorAll('.vertical-image img')];
    return {
      title: document.querySelector('.reader-header h5')?.textContent?.trim(),
      series: document.querySelector('.reader-header h5 a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-src')),
    };
  },
};
