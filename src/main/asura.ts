// == AsuraScans ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { findClosestByContentEq } from '../utils/find';

const asura: ISite = {
  name: 'Asura Scans',
  url: /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,
  homepage: 'https://asurascans.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'astro-island[component-url*="ChapterReader"]',
  run(): IManga {
    const island = document.querySelector('astro-island[component-url*="ChapterReader"]');
    const props = JSON.parse(island?.getAttribute('props') || '{}');
    const seriesSlug = props.seriesSlug?.[1];
    const pages = props.pages?.[1] || [];
    const imgUrls = pages.map((p: { url: string[] }[]) => p[1]?.url?.[1]).filter(Boolean);
    return {
      title: `${props.seriesName?.[1]} - Chapter ${props.chapterName?.[1]}`,
      series: `/comics/${seriesSlug}`,
      pages: imgUrls.length,
      prev:
        findClosestByContentEq('span', 'Prev', 'a')?.getAttribute('href') ||
        document.querySelector('link[rel="prev"]')?.getAttribute('href') ||
        undefined,
      next:
        findClosestByContentEq('span', 'Next', 'a')?.getAttribute('href') ||
        document.querySelector('link[rel="next"]')?.getAttribute('href') ||
        undefined,
      listImages: imgUrls,
    };
  },
};
export default asura;
