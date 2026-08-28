// == nHentai.net ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const extMap: Record<string, string> = {
  j: 'jpg',
  p: 'png',
  w: 'webp',
  g: 'gif',
};

const nhentainet: ISite = {
  name: 'nHentai.net',
  url: /https?:\/\/(www\.)?nhentai\.net\/g\/.+/,
  homepage: 'https://nhentai.net/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '#image-container img',
  async run(): Promise<IManga> {
    const galleryId = window.location.pathname.split('/')[2];
    const series =
      document.querySelector<HTMLAnchorElement>('.go-back, .back_btn')?.getAttribute('href') ??
      `/g/${galleryId}/`;
    const title = document.querySelector('title')?.textContent?.split('- Page')[0]?.trim() ?? '';

    // Strategy 1: nhentai.net v1 API
    try {
      const api = await fetch(`https://nhentai.net/api/gallery/${galleryId}`).then(async res =>
        res.json(),
      );
      if (api?.media_id && Array.isArray(api.images?.pages)) {
        return {
          title: api.title?.pretty ?? api.title?.english ?? title,
          series,
          pages: api.images.pages.length,
          prev: '#',
          next: '#',
          listImages: api.images.pages.map(
            (page: { t: string }, i: number) =>
              `https://i.nhentai.net/galleries/${api.media_id}/${i + 1}.${extMap[page.t] || 'jpg'}`,
          ),
        };
      }
    } catch {
      // Continue to next strategy
    }

    // Strategy 2: nhentai.net v2 API
    try {
      const cdn = await fetch('https://nhentai.net/api/v2/config').then(async res => res.json());
      const api = await fetch(`https://nhentai.net/api/v2/galleries/${galleryId}`).then(async res =>
        res.json(),
      );
      if (Array.isArray(api?.pages) && Array.isArray(cdn?.image_servers)) {
        return {
          title,
          series,
          pages: api.pages.length,
          prev: '#',
          next: '#',
          listImages: api.pages.map(
            (img: { path: string }) =>
              `${cdn.image_servers[Math.floor(Math.random() * cdn.image_servers.length)]}/${img.path}`,
          ),
        };
      }
    } catch {
      // Continue to next strategy
    }

    // Strategy 3: Fetch gallery HTML thumbnails
    try {
      const galleryHtml = await fetch(`https://nhentai.net/g/${galleryId}/`).then(async res =>
        res.text(),
      );
      const doc = new DOMParser().parseFromString(galleryHtml, 'text/html');
      const containers = [
        ...doc.querySelectorAll<HTMLDivElement>('#thumbnail-container .thumb-container'),
      ];
      if (containers.length > 0) {
        const listImages = containers
          .map(container => {
            const img = container.querySelector<HTMLImageElement>('img');
            const src = img?.getAttribute('data-src') ?? img?.getAttribute('src') ?? '';
            return src
              .replace(/\/\/t(\d*)\.nhentai\.net/, '//i$1.nhentai.net')
              .replace(/t\.([a-zA-Z0-9]+)$/, '.$1');
          })
          .filter(src => src.length > 0);
        return {
          title: doc.querySelector('#info h1')?.textContent?.trim() ?? title,
          series,
          pages: listImages.length,
          prev: '#',
          next: '#',
          listImages,
        };
      }
    } catch {
      // Continue to fallback
    }

    // Strategy 4: Fallback to reader page DOM
    const firstImg = document.querySelector<HTMLImageElement>('#image-container img');
    const firstSrc = firstImg?.getAttribute('src') ?? '';
    const match = firstSrc.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/);
    const numPages = Number(document.querySelector('.num-pages')?.textContent?.trim() ?? 0) || 1;

    return {
      title,
      series,
      pages: numPages,
      prev: '#',
      next: '#',
      listImages: match
        ? Array.from({ length: numPages }, (_, i) => `${match[1]}${i + 1}.${match[2]}`)
        : [firstSrc],
    };
  },
};
export default nhentainet;
