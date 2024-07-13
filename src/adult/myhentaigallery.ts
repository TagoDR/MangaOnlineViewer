// == MyHentaiGallery ==============================================================================
export default {
  name: 'MyHentaiGallery',
  url: /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,
  homepage: 'https://www.myhentaigallery.com',
  language: ['English'],
  category: 'hentai',
  run() {
    const lastPage = document
      .getElementById('js__pagination__next')
      ?.parentElement?.previousElementSibling?.querySelector('a');
    const num = parseInt(lastPage?.textContent ?? '', 10);
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.back-to-gallery a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listPages: Array(num)
        .fill(0)
        .map((_, i) => window.location.href.replace(/\/\d+$/, `/${i + 1}`)),
      img: '.gallery-slide img',
    };
  },
};
