// == Doujin-Moe Non-members =======================================================================
export default {
  name: 'DoujinMoeNM',
  url: /https?:\/\/(www.)?doujins.com\/.+/,
  homepage: 'https://doujins.com/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.doujin',
  run() {
    const images = [...document.querySelectorAll('.doujin')];
    return {
      title: document.querySelector('.folder-title a:last-child')?.textContent?.trim(),
      series: document.querySelector('.folder-title a:nth-last-child(2)')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('data-file')),
    };
  },
};
