// == OmegaScans ===================================================================================
export default {
  name: ['OmegaScans'],
  url: /https?:\/\/(www\.)?(omegascans).(org)\/.+/,
  homepage: ['https://omegascans.org/'],
  language: ['English'],
  category: 'hentai',
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

