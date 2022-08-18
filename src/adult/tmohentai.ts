// == TMOHentai ====================================================================================
export default {
  name: 'TMOHentai',
  url: /https?:\/\/(www.)?tmohentai.com\/reader\/.+\/paginated\/\d+/,
  homepage: 'https://tmohentai.com/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const num = parseInt(
      document.querySelector('#select-page option:last-child')?.getAttribute('value') || '',
      10,
    );
    return {
      title: document.querySelector('.reader-title')?.textContent?.trim(),
      series: document.querySelector('.nav-justified li a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listPages: Array(num)
        .fill(0)
        .map((_, i) => window.location.href.replace(/\/\d*$/, `/${i + 1}`)),
      img: '.content-image',
      lazyAttr: 'data-original',
    };
  },
};
