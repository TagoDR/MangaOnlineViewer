// == YugenMangas ==================================================================================
export default {
  name: 'YugenMangas',
  url: /https?:\/\/(www\.)?(yugenmangas).(com|net|lat)\/series\/.+/,
  homepage: 'https://yugenmangas.lat/',
  language: ['Spanish'],
  category: 'manga',
  async run() {
    const images = [...document.querySelectorAll('p.flex > img')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document
        .querySelector('div.justify-between:nth-child(2) > a:nth-child(2)')
        ?.getAttribute('href'),
      pages: images.length,
      prev: document
        .querySelector('div.justify-between:nth-child(2) > a:nth-child(1)')
        ?.getAttribute('href'),
      next: document
        .querySelector('div.justify-between:nth-child(2) > a:nth-child(3)')
        ?.getAttribute('href'),
      listImages: images.map((img) =>
        img.classList.contains('lazy') ? img.getAttribute('data-src') : img.getAttribute('src'),
      ),
    };
  },
};
