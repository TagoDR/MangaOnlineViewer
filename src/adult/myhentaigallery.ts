// == MyHentaiGallery ==============================================================================
export default {
  name: 'MyHentaiGallery',
  url: /https?:\/\/(www.)?myhentaigallery.com\/gallery\/show\/.+\/\d+/,
  homepage: 'https://www.myhentaigallery.com',
  language: ['English'],
  category: 'hentai',
  run() {
    const src = document.querySelector('.gallery-slide img')?.getAttribute('src') || '';
    const lastPage = document
      .getElementById('js__pagination__next')
      ?.parentElement?.previousElementSibling?.querySelector('a');
    const num = parseInt(lastPage?.textContent || '', 10);
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.back-to-gallery a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) =>
          src.replace(
            /\d+\./,
            `${String(i + 1)
              .padStart(3, '0')
              .slice(-3)}.`,
          ),
        ),
    };
  },
};
