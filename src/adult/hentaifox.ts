// == HentaiFox ====================================================================================
export default {
  name: 'HentaiFox',
  url: /https?:\/\/(www\.)?hentaifox.com\/g\/.+/,
  homepage: 'https://www.hentaifox.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  waitFunc: () => document.querySelector('#gimg')?.classList.contains('loaded'),
  run() {
    const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '', 10);
    const src =
      document
        .querySelector('#gimg')
        ?.getAttribute('src')
        ?.replace(/\d+.\w+$/, '') ?? '';

    function findExt(i: number) {
      const c = unsafeWindow.g_th[i][0];
      if (c === 'p') return '.png';
      if (c === 'b') return '.bmp';
      if (c === 'g') return '.gif';
      if (c === 'w') return '.webp';
      return '.jpg';
    }

    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/ - Page .+/, '')
        .trim(),
      series: document.querySelector('.browse_buttons a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => src + (i + 1) + findExt(i + 1)),
    };
  },
};
