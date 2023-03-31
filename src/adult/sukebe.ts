// == Sukebe.moe ===================================================================================
export default {
  name: ['ksk.moe', 'Sukebe.moe'],
  obs: 'Slow start, bruteforce required',
  url: /https?:\/\/(www.)?(ksk|sukebe).moe\/(archive|g)\/\d+\/.+\/\d+/,
  homepage: ['https://ksk.moe/', 'https://sukebe.moe/'],
  language: ['English'],
  category: 'hentai',
  waitEle: '.main .page img',
  async run() {
    document.querySelector('.first')?.dispatchEvent(new Event('click'));
    const next = document.querySelector('.next');
    const qt = document.querySelectorAll<HTMLSelectElement>('.currentPageNum option')?.length || 0;
    const src = [];
    for (let i = 1; i <= qt; i += 1) {
      while (!document.querySelector('.page img')?.getAttribute('src')) {
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => {
          setTimeout(resolve, 100);
        });
      }
      src.push(document.querySelector('.page img')?.getAttribute('src'));
      next?.dispatchEvent(new Event('click'));
    }
    return {
      title: document.querySelector('header h1 a')?.textContent?.trim(),
      series: document.querySelector('header h1 a')?.getAttribute('href'),
      pages: src.length,
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
