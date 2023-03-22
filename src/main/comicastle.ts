// == ComiCastle ===================================================================================
export default {
  name: 'ComiCastle',
  url: /https?:\/\/(www.)?comicastle.org\/read\/.+\/\d+.*/,
  homepage: 'http://www.comicastle.org/',
  language: ['English'],
  category: 'comic',
  waitEle: '.form-control option:nth-child(1)',
  run() {
    const images = [...document.querySelectorAll('.form-control')[1].querySelectorAll('option')];
    const chapter = document.querySelectorAll('.form-control')[0].querySelector('option:checked');
    return {
      title: chapter?.textContent?.trim(),
      series: document.querySelector('.navbar-header a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('alt')),
    };
  },
};
