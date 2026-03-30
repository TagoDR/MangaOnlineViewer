// == nHentai.net ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const nhentainet: ISite = {
  name: ['nHentai.net'],
  url: /https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/'],
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  async run(): Promise<IManga> {
    const cdn = await fetch('https://nhentai.net/api/v2/config').then(async res => res.json());
    const api = await fetch(
      `https://nhentai.net/api/v2/galleries/${window.location.pathname.split('/')[2]}`,
    ).then(async res => res.json());
    return {
      title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
      series: document.querySelector('.go-back')?.getAttribute('href'),
      pages: api.pages.length,
      prev: '#',
      next: '#',
      listImages: api.pages.map(
        (img: { path: string }) =>
          `${cdn.image_servers[Math.floor(Math.random() * cdn.image_servers.length)]}/${img.path}`,
      ),
    };
  },
};
export default nhentainet;
