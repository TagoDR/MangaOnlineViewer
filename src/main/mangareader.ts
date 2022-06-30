// == Mangareader ==================================================================================
export default {
  name: 'Mangareader',
  url: /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/,
  homepage: 'https://mangareader.to',
  language: ['English'],
  category: 'manga',
  obs: 'Some galleries will not be usable',
  waitEle: '.ds-image, .iv-card',
  run() {
    const chapter = document.querySelector('.chapter-item.active');
    const images = [
      ...document.querySelectorAll(
        '.ds-image:not(.shuffled)[data-url], .iv-card:not(.shuffled)[data-url]',
      ),
    ];
    return {
      title: document.querySelector('.hr-manga h2')?.textContent?.trim(),
      series: document.querySelector('.hr-manga')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
      next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('data-url')),
    };
  },
};
