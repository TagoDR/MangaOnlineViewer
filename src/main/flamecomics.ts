// == Flame Comics =================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const flamecomics: ISite = {
  name: 'Flame Comics',
  url: /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,
  homepage: 'https://flamecomics.xyz/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const cdn = 'https://cdn.flamecomics.xyz/uploads/images/series';
    const json = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? '');
    const chapter = json?.props?.pageProps?.chapter;
    const images = Object.keys(chapter?.images).map(
      i =>
        `${cdn}/${chapter?.series_id}/${chapter?.token}/${chapter?.images?.[i]?.name}?${chapter?.unix_timestamp}`,
    );
    return {
      title: `${chapter?.title} ${chapter?.chapter}`,
      series: `../${chapter?.series_id}`,
      pages: images.length,
      prev: json?.props?.pageProps?.previous,
      next: json?.props?.pageProps?.next,
      listImages: images,
    };
  },
};
export default flamecomics;
