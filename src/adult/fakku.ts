// == Fakku.cc =====================================================================================
export default {
  name: 'Fakku.cc',
  url: /https?:\/\/spy.fakku.cc\/archive\/\d+\/.+\/\d+/,
  homepage: 'https://spy.fakku.cc/',
  language: ['English'],
  category: 'hentai',
  run() {
    const cdn = 'https://cdn.fakku.cc';
    const num = parseInt(document.body.dataset.totalPages ?? '0', 10);
    return {
      title: document.querySelector('.title')?.textContent?.trim(),
      series: document.querySelector('a.back')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${cdn}/data/${document.body.dataset.id}/${i + 1}.jpg`),
    };
  },
};
