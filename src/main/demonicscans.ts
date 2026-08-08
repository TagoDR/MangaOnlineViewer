// == DemonicScans =================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const demonicscans: ISite = {
  name: 'DemonicScans',
  url: /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,
  homepage: 'https://demonicscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'img.imgholder[src*="cdn.demoniclibs.com"]',
  async run(): Promise<IManga> {
    const images = [
      ...document.querySelectorAll<HTMLImageElement>('img.imgholder[src*="cdn.demoniclibs.com"]'),
    ].map(img => img.getAttribute('data-src') || img.getAttribute('src') || '');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prevchap')?.getAttribute('href'),
      next: document.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images,
    };
  },
};

export default demonicscans;
