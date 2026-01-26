// == Comix ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const comix: ISite = {
  name: 'Comix.to',
  homepage: 'https://comix.to/',
  url: /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,
  language: Language.ENGLISH,
  category: Category.COMIC,
  run: (): IManga => {
    const content =
      [...document.querySelectorAll('script')].find(
        script =>
          script.textContent?.includes('self.__next_f.push') &&
          script.textContent?.includes('images'),
      )?.textContent || '';
    const jsonStr = content.substring(content.indexOf('"') + 3, content.lastIndexOf('"') - 2);
    const data = JSON.parse(jsonStr.replaceAll(`\\`, ''));
    const src = data[3].chapter.images.map((img: { url: string }) => img.url);

    return {
      title: document.querySelector('h1.page-title')?.textContent?.trim(),
      series: document
        .querySelector('.breadcrumbs a[href*="/title/"], .breadcrumbs a[href*="/comic/"]')
        ?.getAttribute('href'),
      pages: src.length,
      prev: document.querySelector('a.prev-chapter')?.getAttribute('href'),
      next: document.querySelector('a.next-chapter')?.getAttribute('href'),
      listImages: src,
    };
  },
};

export default comix;
