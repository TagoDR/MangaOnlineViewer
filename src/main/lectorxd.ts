// == LectorXD ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';
import { findClosestByContentStarts } from '../utils/find.ts';

const lectorxd: ISite = {
  name: 'LectorXD',
  url: /https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/,
  homepage: 'https://lectorxd.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  waitEle: '.page-container img, img.page-image, .page-container, astro-island',
  run(): IManga {
    let images = [
      ...document.querySelectorAll<HTMLImageElement>(
        '.page-container img, img.page-image, .page-image img, div[class*="page-container"] img',
      ),
    ]
      .map(img => img.getAttribute('data-src') || img.getAttribute('src') || '')
      .filter(src => src.trim().length > 0)
      .map(src => (src.startsWith('http') ? src : new URL(src, window.location.href).href));

    if (images.length === 0) {
      const island = document.querySelector('astro-island');
      const props = island?.getAttribute('props');
      if (props) {
        const matches = props.match(/https?:\/\/[^"'\s\\]+\.(jpg|jpeg|png|webp|avif)[^"'\s\\]*/gi);
        if (matches) {
          images = matches;
        }
      }
    }

    return {
      title:
        document.querySelector('h1')?.textContent?.trim() ||
        document.title?.replace(/\s*[-|]\s*Lector\s*XD.*$/i, '')?.trim() ||
        undefined,
      series:
        document
          .querySelector<HTMLAnchorElement>(
            'a[href*="/manga/"], a[href*="/manhwa/"], a[href*="/manhua/"], a[href*="/comic/"], a[href*="/series/"]',
          )
          ?.getAttribute('href') || window.location.pathname.replace(/\/leer\/.*/, ''),
      pages: images.length,
      prev:
        document
          .querySelector<HTMLAnchorElement>(
            'a[title*="Anterior" i], a[aria-label*="Anterior" i], a[name*="anterior" i]',
          )
          ?.getAttribute('href') ||
        findClosestByContentStarts('a, span, button', 'Anterior')?.getAttribute('href') ||
        document.querySelector<HTMLLinkElement>('link[rel="prev"]')?.getAttribute('href') ||
        undefined,
      next:
        document
          .querySelector<HTMLAnchorElement>(
            'a[title*="Siguiente" i], a[aria-label*="Siguiente" i], a[name*="siguiente" i]',
          )
          ?.getAttribute('href') ||
        findClosestByContentStarts('a, span, button', 'Siguiente')?.getAttribute('href') ||
        document.querySelector<HTMLLinkElement>('link[rel="next"]')?.getAttribute('href') ||
        undefined,
      listImages: images,
    };
  },
};
export default lectorxd;
