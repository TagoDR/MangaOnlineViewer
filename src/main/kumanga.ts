// == KuManga ======================================================================================
export default {
  name: 'KuManga',
  url: /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,
  homepage: 'https://www.kumanga.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const chapter = document.querySelectorAll('select').item(1).querySelector('option[selected]');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h2 a')?.getAttribute('href'),
      pages: unsafeWindow.pUrl.length,
      prev: `/manga/leer/${chapter?.previousElementSibling?.getAttribute('value')}`,
      next: `/manga/leer/${chapter?.nextElementSibling?.getAttribute('value')}`,
      listImages: unsafeWindow.pUrl.map((item: { imgURL: string }) => item.imgURL),
    };
  },
};
