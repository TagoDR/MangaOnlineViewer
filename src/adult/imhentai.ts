// == Imhentai =====================================================================================
import { extensionByCode } from '../utils/urls';

function findServer(cId: number) {
  const serverRanges = [
    { min: 0, max: 274825, name: 'm1' },
    { min: 274826, max: 403818, name: 'm2' },
    { min: 403819, max: 527143, name: 'm3' },
    { min: 527144, max: 632481, name: 'm4' },
    { min: 632482, max: 816010, name: 'm5' },
    { min: 816011, max: 970098, name: 'm6' },
    { min: 970099, max: 1121113, name: 'm7' },
    { min: 1121114, max: 1259410, name: 'm8' },
    { min: 1259411, max: Infinity, name: 'm9' },
  ];
  return serverRanges.find((server) => cId >= server.min && cId <= server.max)?.name;
}

export default {
  name: 'Imhentai',
  url: /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,
  homepage: 'https://imhentai.xxx/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  run() {
    const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
    const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
    const num = parseInt(document.querySelector('#pages')?.getAttribute('value') ?? '', 10);
    const cId = parseInt(document.querySelector('#u_id')?.getAttribute('value') ?? '', 10);
    const randomServer = unsafeWindow.random_server ?? `${findServer(cId)}.imhentai.xxx`;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.return_btn')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map(
          (_, i) =>
            `//${randomServer}/${imageDir}/${galleryId}/${i + 1}.${extensionByCode(
              unsafeWindow.g_th[i + 1][0],
            )}`,
        ),
    };
  },
};
