// == nHentai.xxx =================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const nhentaixxx: ISite = {
  name: 'nHentai.xxx',
  url: /https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/,
  homepage: 'https://nhentai.xxx/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '#pages, #fimg, .reader_wrap',
  run(): IManga {
    const server =
      document.querySelector<HTMLInputElement>('#server_id')?.value ??
      document.querySelector<HTMLInputElement>('#load_server')?.value ??
      '';
    const dir =
      document.querySelector<HTMLInputElement>('#image_dir')?.value ??
      document.querySelector<HTMLInputElement>('#load_dir')?.value ??
      '';
    const id =
      document.querySelector<HTMLInputElement>('#gallery_id')?.value ??
      document.querySelector<HTMLInputElement>('#load_id')?.value ??
      '';
    const pages = Number(
      document.querySelector<HTMLInputElement>('#pages')?.value ??
        document.querySelector<HTMLInputElement>('#load_pages')?.value ??
        document.querySelector('.pages_btn .tp')?.textContent?.trim() ??
        0,
    );
    const firstImg = document.querySelector<HTMLImageElement>('#fimg');
    const firstSrc = firstImg?.getAttribute('data-src') ?? firstImg?.getAttribute('src') ?? '';
    const extMatch = firstSrc.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);
    const ext = extMatch ? extMatch[1] : 'webp';
    const base = firstSrc
      ? firstSrc.replace(/\/\d+\.[a-zA-Z0-9]+(?:\?.*)?$/, '')
      : server && dir && id
        ? `https://i${server}.nhentaimg.com/${dir}/${id}`
        : '';
    return {
      title:
        document.querySelector('title')?.textContent?.split('- Page')[0]?.trim() ??
        firstImg
          ?.getAttribute('alt')
          ?.replace(/\s*page\s*\d+\s*full.*$/i, '')
          ?.trim(),
      series:
        document.querySelector<HTMLAnchorElement>('.back_btn, .go-back')?.getAttribute('href') ??
        window.location.pathname.replace(/\/\d+\/?$/, '/'),
      pages,
      prev: '#',
      next: '#',
      listImages: Array.from({ length: pages }, (_, i) => `${base}/${i + 1}.${ext}`),
    };
  },
};
export default nhentaixxx;
