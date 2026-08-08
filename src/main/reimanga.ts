// == ReiManga =====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const reimanga: ISite = {
  name: 'ReiManga',
  url: /https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/,
  homepage: 'https://reimanga.com/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitEle: 'img',
  run(): IManga {
    const nextData = document.getElementById('__NEXT_DATA__');
    const data = nextData
      ? (JSON.parse(nextData.textContent ?? '{}')?.props?.pageProps ?? null)
      : null;
    const images = data?.chapter?.images ?? data?.chapter?.img ?? null;
    const listImages = Array.isArray(images)
      ? images.map((img: string | { url?: string; src?: string }) =>
          typeof img === 'string' ? img : (img?.url ?? img?.src ?? ''),
        )
      : [...document.querySelectorAll('img')]
          .filter(img => {
            const src = img.getAttribute('src') ?? '';
            return (
              /\/(manga|chapter|uploads?|files?|images?)\//i.test(src) ||
              /(cdn|media|img|static)/i.test(src)
            );
          })
          .map(img => img.getAttribute('src') ?? '')
          .filter(src => src.startsWith('http'));
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathParts.length > 1 ? `/${pathParts.slice(0, 2).join('/')}` : undefined;
    const series =
      data?.series?.slug !== undefined
        ? `/manga/${data.series.slug}`
        : (document.querySelector('a[href*="/manga/"]')?.getAttribute('href') ?? basePath);
    const select = document.querySelector<HTMLSelectElement>(
      'select[aria-label="Jump to chapter"]',
    );
    const options = select ? [...select.options] : [];
    const index = select?.selectedIndex ?? -1;
    const prev = index + 1 < options.length ? options[index + 1]?.value : undefined;
    const next = index - 1 >= 0 ? options[index - 1]?.value : undefined;
    const chapterUrl = (id: string | undefined) => (id && series ? `${series}/${id}` : undefined);
    return {
      title:
        data?.title ??
        (`${data?.chapters?.[0]?.series_name ?? data?.manga?.name ?? data?.series?.name ?? ''} ${
          data?.chapters?.[0]?.name ?? data?.chapter?.name ?? data?.chapter?.number ?? ''
        }`?.trim() ||
          document.title.replace(/ –.*| -.*| \|.*/, '').trim()),
      series,
      pages: listImages.length,
      prev: chapterUrl(prev),
      next: chapterUrl(next),
      listImages,
    };
  },
};
export default reimanga;
