// == WeebCentral ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const weebcentral: ISite = {
  name: 'WeebCentral',
  url: /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,
  homepage: 'https://weebcentral.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'section[hx-get*="/images"]',
  async run(): Promise<IManga> {
    if (document.documentElement.hasAttribute('mov')) {
      return { pages: 0, listImages: [] };
    }

    const imagesSection = document.querySelector('section[hx-get*="/images"]');
    const imagesUrlBase = imagesSection?.getAttribute('hx-get');
    if (!imagesUrlBase) {
      throw new Error('Images HTMX endpoint not found');
    }
    const imagesUrl = `${imagesUrlBase.replace(/&amp;/g, '&')}&reading_style=long_strip`;

    const imagesHtml = await fetch(imagesUrl, {
      headers: { 'HX-Request': 'true' },
    }).then(res => res.text());

    const parser = new DOMParser();
    const imagesDoc = parser.parseFromString(imagesHtml, 'text/html');
    const src = [...imagesDoc.querySelectorAll('img')]
      .map(img => img.getAttribute('src') || img.getAttribute('data-src') || '')
      .filter(s => s && !s.includes('broken_image'))
      .map(s => (s.startsWith('http') ? s : new URL(s, window.location.origin).href));

    // Deduplicate and sort by filename number
    const uniqueImages = [...new Set(src)].sort((a, b) => {
      const ma = a.match(/-(\d+)\.[^.]+$/);
      const mb = b.match(/-(\d+)\.[^.]+$/);
      return (ma ? parseInt(ma[1], 10) : 0) - (mb ? parseInt(mb[1], 10) : 0);
    });

    const chapterSelectUrl = document
      .querySelector('button[hx-get*="chapter-select"]')
      ?.getAttribute('hx-get');
    const chaptersList = await fetch(chapterSelectUrl ?? '', {
      headers: { 'HX-Request': 'true' },
    }).then(res => res.text());

    const chapters = parser.parseFromString(chaptersList, 'text/html');
    const selectedChapter = chapters.querySelector('#selected_chapter');
    const getAbsUrl = (path: string | null | undefined) =>
      path ? (path.startsWith('http') ? path : new URL(path, window.location.origin).href) : null;

    return {
      title: document.title.split(' - ')[0].trim(),
      series: getAbsUrl(document.querySelector('main section a.btn-ghost')?.getAttribute('href')),
      pages: uniqueImages.length,
      prev: getAbsUrl(selectedChapter?.nextElementSibling?.getAttribute('href')),
      next: getAbsUrl(selectedChapter?.previousElementSibling?.getAttribute('href')),
      listImages: uniqueImages,
      fetchOptions: {
        headers: {
          'HX-Request': 'true',
          Referer: window.location.href,
        },
      },
    };
  },
};
export default weebcentral;
