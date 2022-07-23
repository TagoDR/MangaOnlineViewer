// == ShimadaScans =================================================================================
export default {
  name: 'ShimadaScans',
  url: /https?:\/\/(www.)?shimadascans.com\/.+series.+/,
  homepage: 'https://shimadascans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('.reading-content img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.breadcrumb li:nth-child(2) a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('a.prev_page')?.getAttribute('href'),
      next: document.querySelector('a.next_page')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
