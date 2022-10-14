// == MangaKakalot =================================================================================
export default {
  name: ['MangaKakalot', 'MangaNelo', 'MangaNato'],
  url: /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato|chapmanganato).com\/manga-\w\w\d+\/chapter-\d+)/,
  homepage: [
    'https://mangakakalot.com/page',
    'https://www.manganelo.com/',
    'https://www.manganato.com/',
  ],
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#vungdoc img, .container-chapter-reader img')];
    return {
      title: document
        .querySelector(
          '.info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1',
        )
        ?.textContent?.trim(),
      series: document.querySelectorAll('span a[title]').item(1).getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.navi-change-chapter-btn-prev, .next')?.getAttribute('href'),
      next: document.querySelector('.navi-change-chapter-btn-next, .back')?.getAttribute('href'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
