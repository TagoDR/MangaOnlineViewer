// == HentaiHand ==================================================================================
export default {
  name: ['HentaiHand', 'nHentai.com'],
  url: /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,
  homepage: ['https://hentaihand.com/', 'https://nhentai.com'],
  language: ['English'],
  category: 'hentai',
  waitEle: '.reader img',
  run() {
    const images = [...document.querySelectorAll('.reader img')];
    return {
      title: document.querySelector('.reader-header h5')?.textContent?.trim(),
      series: document.querySelector('.reader-header h5 a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-src') ?? img.getAttribute('src')),
    };
  },
};
