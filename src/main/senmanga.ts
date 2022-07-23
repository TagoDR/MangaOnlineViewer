// == SenManga =====================================================================================
export default {
  name: 'SenManga(Raw)',
  url: /https?:\/\/raw.senmanga.com\/.+\/.+\/?/,
  homepage: 'https://raw.senmanga.com/',
  language: ['Raw'],
  category: 'manga',
  run() {
    const url = `/${window.location.pathname.split('/')[1]}/${
      window.location.pathname.split('/')[2]
    }`;
    const num = parseInt(
      document.querySelector('.page-list select option:last-child')?.getAttribute('value') || '0',
      10,
    );
    const chapter = [...document.querySelectorAll('.dropdown-chapter li')];
    const origin = chapter.findIndex(
      (item) => item.querySelector('a')?.getAttribute('href') === window.location.href,
    );
    return {
      title: $('.title').text().trim(),
      series: document.querySelector('.breadcrumb li:nth-child(2) a')?.getAttribute('href'),
      pages: num,
      prev: chapter
        .at(origin + 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
      next: chapter
        .at(origin - 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
      listPages: Array(num)
        .fill(0)
        .map((_, i) => `${url}/${i + 1}/`),
      img: '.picture',
    };
  },
};
