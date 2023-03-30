// == Imhentai =====================================================================================
function findExt(i: number) {
  const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  const c = W.g_th[i][0];
  if (c === 'p') return '.png';
  if (c === 'b') return '.bmp';
  if (c === 'g') return '.gif';
  return '.jpg';
}

function findServer(cId: number) {
  if (cId > 0 && cId <= 274825) return 'm1.imhentai.xxx';
  if (cId > 274825 && cId <= 403818) return 'm2.imhentai.xxx';
  if (cId > 403818 && cId <= 527143) return 'm3.imhentai.xxx';
  if (cId > 527143 && cId <= 632481) return 'm4.imhentai.xxx';
  if (cId > 632481 && cId <= 816010) return 'm5.imhentai.xxx';
  if (cId > 816010 && cId <= 970098) return 'm6.imhentai.xxx';
  return 'm7.imhentai.xxx'; // id > 970098
}

export default {
  name: 'Imhentai',
  url: /https?:\/\/(www.)?imhentai.xxx\/view\/.+\/.+\//,
  homepage: 'https://imhentai.xxx/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  run() {
    const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
    const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
    const num = parseInt(document.querySelector('#pages')?.getAttribute('value') || '', 10);
    const cId = parseInt(document.querySelector('#u_id')?.getAttribute('value') || '', 10);
    const randomServer = findServer(cId);
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
