// == Alandal ======================================================================================
export default {
  name: 'Alandal',
  url: /https?:\/\/alandal.com\/chapter\/.+\/\d+/,
  homepage: 'https://alandal.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('img[alt^="Page"]')];
    const chapter = document
      ?.querySelector('[aria-label="chapter list"]')
      ?.parentElement?.parentElement?.parentElement?.parentElement?.querySelectorAll('a');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('a[href^="/series/"]')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.item(0)?.getAttribute('href'),
      next: chapter?.item(1)?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
