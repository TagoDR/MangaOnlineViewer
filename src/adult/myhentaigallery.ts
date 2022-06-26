// == MyHentaiGallery ==============================================================================
export default {
  name: 'MyHentaiGallery',
  url: /https?:\/\/(www.)?myhentaigallery.com\/gallery\/show\/.+\/\d+/,
  homepage: 'https://www.myhentaigallery.com',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = document.querySelector('.gallery-slide img')?.getAttribute('src') || '';
    const num = parseInt(
      document.querySelector('.pagination ul li:nth-last-child(3)')?.textContent || '',
      10,
    );
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.back-to-gallery a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => src.replace(/\d+\./, `${String(`000${i + 1}`).slice(-3)}.`)),
    };
  },
};
