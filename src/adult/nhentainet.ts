// == nHentai.net ==================================================================================
export default {
  name: ['nHentai.net', 'nHentai.xxx', 'lhentai'],
  url: /https?:\/\/(www.)?(nhentai|lhentai).(net|xxx|com)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/', 'https://nhentai.xxx/', 'https://lhentai.com/'],
  language: ['English'],
  category: 'hentai',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

    function getExt(extension: string) {
      if (extension === 'g') return 'gif';
      if (extension === 'b') return 'bmp';
      if (extension === 'p') return 'png';
      return 'jpg';
    }

    const num = parseInt(document.querySelector('.num-pages')?.textContent || '', 10);
    const src = document
      .querySelector('#image-container img')
      ?.getAttribute('src')
      ?.replace(/\d+.\w\w\w$/, '');
    // eslint-disable-next-line camelcase
    const ext =
      W.images_ext?.map(getExt) ||
      // eslint-disable-next-line no-underscore-dangle
      W._gallery?.images?.pages?.map((i: { t: string }) => getExt(i.t)) ||
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
