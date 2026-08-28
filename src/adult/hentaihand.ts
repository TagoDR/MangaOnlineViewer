// == HentaiHand ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const hentaihand: ISite = {
  name: ['HentaiHand', 'nHentai.com'],
  url: /https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/,
  homepage: ['https://hentaihand.com/', 'https://nhentai.com/'],
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle:
    '.reader img, #reader img, .comic-page img, .page-image img, #image-container img, .pages-selector, .comic-title',
  async run(): Promise<IManga> {
    const series =
      document
        .querySelector<HTMLAnchorElement>(
          '.reader-header h5 a, .comic-title a, a.back-to-gallery, a.go-back, a[href*="/comic/"]',
        )
        ?.getAttribute('href') ?? window.location.href.replace(/\/\d+\/?$/, '');

    const title =
      document
        .querySelector('.reader-header h5, .comic-title, h1.title, h1')
        ?.textContent?.trim() ??
      document
        .querySelector('title')
        ?.textContent?.replace(/\s*-\s*Page.*$/i, '')
        ?.trim();

    const domImages = [
      ...document.querySelectorAll<HTMLImageElement>(
        '.reader img, #reader img, .comic-page img, .page-image img, .reader-images img',
      ),
    ];

    if (domImages.length > 1) {
      return {
        title,
        series,
        pages: domImages.length,
        prev: '#',
        next: '#',
        listImages: domImages.map(
          img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
        ),
      };
    }

    // Try fetching gallery page to get list of all pages/thumbnails
    try {
      const fullSeriesUrl = series.startsWith('http')
        ? series
        : `${window.location.origin}${series}`;
      const galleryHtml = await fetch(fullSeriesUrl).then(async res => res.text());
      const doc = new DOMParser().parseFromString(galleryHtml, 'text/html');
      const containers = [
        ...doc.querySelectorAll<HTMLDivElement>(
          '.comic-thumb, .gallery-thumb, .thumbnails > div, #thumbnail-container .thumb-container, .thumbs > div, .grid > div',
        ),
      ];
      if (containers.length > 0) {
        const listImages = containers
          .map(container => {
            const img = container.querySelector<HTMLImageElement>('img');
            const src = img?.getAttribute('data-src') ?? img?.getAttribute('src') ?? '';
            return src.replace(/\/thumb\//, '/image/').replace(/t\.([a-zA-Z0-9]+)$/, '.$1');
          })
          .filter(src => src.length > 0);
        return {
          title: doc.querySelector('h1.title, h1, .comic-title')?.textContent?.trim() ?? title,
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

    // Fallback using single image and page options/pattern
    const options = document.querySelectorAll(
      'select.pages-selector option, select.page-select option, .page-dropdown option',
    );
    const pages = options.length || domImages.length || 1;
    const firstSrc =
      domImages[0]?.getAttribute('data-src') ??
      domImages[0]?.getAttribute('src') ??
      document
        .querySelector<HTMLImageElement>('#image-container img, .reader img')
        ?.getAttribute('src') ??
      '';
    const match = firstSrc.match(/^(.*\/)(0*1)(\.[a-zA-Z0-9]+)(?:\?.*)?$/);

    if (match && pages > 1) {
      const [, prefix, numStr, ext] = match;
      const pad = numStr.length;
      return {
        title,
        series,
        pages,
        prev: '#',
        next: '#',
        listImages: Array.from(
          { length: pages },
          (_, i) => `${prefix}${String(i + 1).padStart(pad, '0')}${ext}`,
        ),
      };
    }

    return {
      title,
      series,
      pages,
      prev: '#',
      next: '#',
      listImages: domImages.map(
        img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
      ),
    };
  },
};
export default hentaihand;
