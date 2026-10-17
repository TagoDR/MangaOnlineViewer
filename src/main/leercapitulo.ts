// == LeerCapitulo =================================================================================
import { Category, type IManga, type ISite, Language } from '../types/index.ts';

const leercapitulo: ISite = {
  name: 'LeerCapitulo',
  url: /https?:\/\/(www\.)?leercapitulo\.co\/leer\/.+/,
  homepage: 'https://www.leercapitulo.co/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  waitEle: '#lcPages img, #page_select',
  run(): IManga {
    const select = document.querySelector<HTMLSelectElement>('#chapterSelect');
    const prevChapter =
      select && select.selectedIndex >= 0 && select.selectedIndex < select.options.length - 1
        ? select.options[select.selectedIndex + 1]?.value
        : undefined;
    const nextChapter =
      select && select.selectedIndex > 0
        ? select.options[select.selectedIndex - 1]?.value
        : undefined;

    const pageImages = [
      ...document.querySelectorAll<HTMLImageElement>('#lcPages img, .lc-pages img'),
    ];
    const pageOptions = [...document.querySelectorAll<HTMLOptionElement>('#page_select option')];
    const listImages =
      pageImages.length > 0
        ? pageImages.map(img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '')
        : pageOptions.map(el => el.getAttribute('value') ?? '');

    return {
      title: (
        document.querySelector('h1')?.textContent ?? document.querySelector('title')?.textContent
      )
        ?.replace(/\|.+/, '')
        .trim(),
      series:
        document
          .querySelector<HTMLAnchorElement>(
            'a.lc-rbtn--title, a[href*="/manga/"], .chapter-title a',
          )
          ?.getAttribute('href') ?? undefined,
      pages: listImages.length,
      prev:
        prevChapter ??
        document.querySelector<HTMLAnchorElement>('.pre')?.getAttribute('href') ??
        undefined,
      next:
        nextChapter ??
        document.querySelector<HTMLAnchorElement>('.next')?.getAttribute('href') ??
        undefined,
      listImages,
    };
  },
};
export default leercapitulo;
