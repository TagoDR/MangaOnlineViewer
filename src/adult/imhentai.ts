// == Imhentai =====================================================================================
export default {
  name: 'Imhentai',
  url: /https?:\/\/(www.)?imhentai.xxx\/view\/.+\/.+\//,
  homepage: 'https://imhentai.xxx/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
    const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
    const num = parseInt(document.querySelector('#pages')?.getAttribute('value') || '', 10);
    const cId = parseInt(document.querySelector('#u_id')?.getAttribute('value') || '', 10);
    let randomServer: string = '';
    if (cId > 0 && cId <= 274825) {
      randomServer = 'm1.imhentai.xxx';
    } else if (cId > 274825 && cId <= 403818) {
      randomServer = 'm2.imhentai.xxx';
    } else if (cId > 403818 && cId <= 527143) {
      randomServer = 'm3.imhentai.xxx';
    } else if (cId > 527143 && cId <= 632481) {
      randomServer = 'm4.imhentai.xxx';
    } else if (cId > 632481 && cId <= 816010) {
      randomServer = 'm5.imhentai.xxx';
    } else if (cId > 816010) {
      randomServer = 'm6.imhentai.xxx';
    }

    function findExt(i: number) {
      const c = W.g_th[i][0];
      if (c === 'p') return '.png';
      if (c === 'b') return '.bmp';
      if (c === 'g') return '.gif';
      return '.jpg';
    }

    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.return_btn')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `//${randomServer}/${imageDir}/${galleryId}/${i + 1}${findExt(i + 1)}`),
    };
  },
};
