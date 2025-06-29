// == MultPorn =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'MultPorn',
  url: /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,
  homepage: 'https://multporn.net/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  // WaitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
  async run(): Promise<IManga> {
    const url =
      document.head.textContent
        ?.match(/"configUrl":"(.+?)",/)
        ?.at(1)
        ?.replaceAll('\\', '') ?? '';
    const api = await fetch(url)
      .then(async res => res.text())
      .then(html => new DOMParser().parseFromString(html, 'text/xml'));
    const images = [...api.querySelectorAll('image')];
    return {
      title: document.querySelector('#page-title')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map(img => img.getAttribute('imageURL') ?? ''),
    };
  },
};
export default site;
