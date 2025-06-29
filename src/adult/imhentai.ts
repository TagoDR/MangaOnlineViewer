// == Imhentai =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { extensionByCode } from '../utils/urls';
import { waitForVar } from '../utils/waitFor';

const imhentai: ISite = {
  name: 'Imhentai',
  url: /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,
  homepage: 'https://imhentai.xxx/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitVar: 'g_th',
  async run(): Promise<IManga> {
    const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
    const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
    const num = parseInt(document.querySelector('#pages')?.getAttribute('value') ?? '', 10);
    const randomServer = await waitForVar('random_server');
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
export default imhentai;
