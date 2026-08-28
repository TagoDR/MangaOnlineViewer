// == nHentai.to ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const nhentaito: ISite = {
  name: 'nHentai.to',
  url: /https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/,
  homepage: 'https://nhentai.to/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '#image-container img',
  async run(): Promise<IManga> {
    const seriesUrl =
      document.querySelector<HTMLAnchorElement>('.back_btn, .go-back')?.getAttribute('href') ??
      window.location.pathname.replace(/\/\d+\/?$/, '/');
    const firstImg = document.querySelector<HTMLImageElement>('#image-container img');
    const firstSrc = firstImg?.getAttribute('src') ?? '';
    const numPages = Number(document.querySelector('.num-pages')?.textContent?.trim() ?? 0);

    try {
      const fullSeriesUrl = seriesUrl.startsWith('http')
        ? seriesUrl
        : `${window.location.origin}${seriesUrl}`;
      const galleryHtml = await fetch(fullSeriesUrl).then(async res => res.text());
      const doc = new DOMParser().parseFromString(galleryHtml, 'text/html');
      const containers = [
        ...doc.querySelectorAll<HTMLDivElement>('#thumbnail-container .thumb-container'),
      ];
      if (containers.length > 0) {
        const listImages = containers
          .map(container => {
            const img = container.querySelector<HTMLImageElement>('img');
            const src = img?.getAttribute('data-src') ?? img?.getAttribute('src') ?? '';
            return src.replace(/t\.([a-zA-Z0-9]+)$/, '.$1');
          })
          .filter(src => src.length > 0);
        return {
          title:
            doc.querySelector('#info h1')?.textContent?.trim() ??
            document.querySelector('title')?.textContent?.split('> Page')[0]?.trim(),
          series: seriesUrl,
          pages: listImages.length,
          prev: '#',
          next: '#',
          listImages,
        };
      }
    } catch {
      // fallback if fetch fails
    }

    const match = firstSrc.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/);
    const pages = numPages || 1;
    return {
      title: document.querySelector('title')?.textContent?.split('> Page')[0]?.trim(),
      series: seriesUrl,
      pages,
      prev: '#',
      next: '#',
      listImages: match
        ? Array.from({ length: pages }, (_, i) => `${match[1]}${i + 1}.${match[2]}`)
        : [firstSrc],
    };
  },
};
export default nhentaito;
