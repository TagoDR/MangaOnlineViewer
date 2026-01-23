// == MangaTown ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangatown: ISite = {
  name: 'MangaTown',
  url: /https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,
  homepage: 'https://www.mangatown.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'div.page_select select option, .read_img .image',
  run(): IManga {
    const options = document.querySelector('div.page_select select')?.querySelectorAll('option');
    const images = [...document.querySelectorAll('.read_img .image')].map(
      img => img.getAttribute('src') ?? '',
    );
    const pages = [...(options ?? [])]
      .map(element => (element as HTMLOptionElement).value)
      .filter(url => !url.endsWith('featured.html'))
      .map(url => new URL(url, window.location.href).href);

    return {
      title: document.querySelector('div.title h1')?.textContent?.trim(),
      series: document.querySelector('div.title a')?.getAttribute('href'),
      pages: unsafeWindow.total_pages || pages.length,
      prev: document
        .querySelector('.chapter_select option:checked')
        ?.previousElementSibling?.getAttribute('value'),
      next: document
        .querySelector('.chapter_select option:checked')
        ?.nextElementSibling?.getAttribute('value'),
      ...(images.length > 1 ? { listImages: images } : { listPages: pages, img: '#image' }),
    };
  },
};

export default mangatown;
