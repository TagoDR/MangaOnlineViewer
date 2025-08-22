// == ExHentai =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const exhentai: ISite = {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  language: [Language.ENGLISH],
  obs: 'May get your IP Banned, use with moderation',
  category: Category.HENTAI,
  async run(): Promise<IManga> {
    const num = parseInt(
      document.querySelector('.sn div span:nth-child(2)')?.textContent ?? '0',
      10,
    );
    const maxGalley = Math.ceil(num / 20);
    const gallery = document
      .querySelector('.sb a')
      ?.getAttribute('href')
      ?.replace(/\?p=\d+/, '');

    const fetchBlocks = Array(maxGalley)
      .fill(0)
      .map(async (_, galleryId) =>
        fetch(`${gallery}?p=${galleryId}`)
          .then(async res => res.text())
          .then(html => new DOMParser().parseFromString(html, 'text/html')),
      );

    const data = await Promise.all(fetchBlocks);
    const pages = data.flatMap(html =>
      [...html.querySelectorAll('#gdt a')].map(item => item.getAttribute('href') ?? ''),
    );

    return {
      title: document.querySelector('#i1 h1')?.textContent?.trim(),
      series: gallery,
      pages: num,
      begin: parseInt(document.querySelector('div#i2 span')?.textContent ?? '1', 10),
      prev: '#',
      next: '#',
      listPages: pages,
      img: '#img',
      lazy: true,
      async reload(page: number) {
        const oldUrl = `${pages[page - 1]}`;
        const slug = await fetch(oldUrl)
          .then(res => res.text())
          .then(html => /nl\('([\d-]+)'\)/.exec(html)?.[1]);
        const newUrl = `${oldUrl}${oldUrl.indexOf('?') ? '&' : '?'}nl=${slug}`;
        return fetch(newUrl)
          .then(res => res.text())
          .then(
            html =>
              new DOMParser()
                ?.parseFromString(html, 'text/html')
                ?.querySelector('#img')
                ?.getAttribute('src') ?? '',
          );
      },
    };
  },
};
export default exhentai;
