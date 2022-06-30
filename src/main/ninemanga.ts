// == NineManga ====================================================================================
export default {
  name: 'NineManga',
  url: /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,
  homepage: 'https://ninemanga.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('#chapter option:checked');
    const pages = [...document.querySelector('#page')!.querySelectorAll('option')];
    return {
      title: document.querySelector('.tip a')?.textContent?.trim(),
      series: document.querySelector('.subgiude > li:nth-child(2) > a')?.getAttribute('href'),
      pages: pages.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listPages: pages.map((item) => $(item).val()),
      img: '.manga_pic',
    };
  },
};
