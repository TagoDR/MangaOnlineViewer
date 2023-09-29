// == nHentai.net ==================================================================================
/* eslint-disable no-underscore-dangle */
export default {
  name: ['nHentai.net', 'nHentai.xxx', 'lhentai'],
  url: /https?:\/\/(www.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/', 'https://nhentai.xxx/', 'https://lhentai.com/'],
  language: ['English'],
  category: 'hentai',
  run() {
    function getExt(extension: string) {
      if (extension === 'g') {
        return 'gif';
      }

      if (extension === 'b') {
        return 'bmp';
      }

      if (extension === 'p') {
        return 'png';
      }

      return 'jpg';
    }

    const num = parseInt(document.querySelector('.num-pages')?.textContent ?? '', 10);
    const src = document
      .querySelector('#image-container img')
      ?.getAttribute('src')
      ?.replace(/\d+.\w\w\w$/, '');

    const ext =
      unsafeWindow.images_ext?.map(getExt) ??
      unsafeWindow._gallery?.images?.pages?.map((i: { t: string }) => getExt(i.t)) ??
      Array(num).fill('jpg');
    return {
      title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
      series: document.querySelector('.go-back')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${src}${i + 1}.${ext[i]}`),
    };
  },
};
