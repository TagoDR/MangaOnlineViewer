// == MangaTown ====================================================================================
export default {
  name: 'MangaTown',
  url: /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/,
  homepage: 'https://www.mangatown.com/',
  language: ['English'],
  category: 'manga',
  waitEle: '#top_chapter_list option',
  waitMax: 5000,
  run() {
    const num = [
      ...document.querySelectorAll<HTMLOptionElement>(
        'div.page_select:nth-child(3) > select:nth-child(5) > option',
      ),
    ].slice(0, -1);
    const chapter = document.querySelector<HTMLOptionElement>('#top_chapter_list option:checked');
    return {
      title: document.querySelector('.title h1')?.textContent,
      series: document.querySelector('.title h2 a')?.getAttribute('href'),
      pages: num.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listPages: num.map((item) => item.value),
      imageSelector: '#image',
    };
  },
};
