// == Localhost ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { placeholder, randomPlaceholder } from '../utils/svgs';

const localhost: ISite = {
  name: 'Local Files',
  url: /(file:\/\/\/.+(index)?.html)/,
  homepage: '/index.html?raw=1',
  language: [Language.RAW],
  category: Category.MANGA,
  run(count?: number): IManga {
    const num: number =
      count ?? parseInt(/\d+/.exec(window.location.search)?.toString() ?? '5', 10);
    return {
      title: 'Placeholder Manga Loaded',
      series: '?reload',
      pages: num,
      begin: 1,
      prev: '?pages=50',
      next: '?pages=1',
      listImages: [
        placeholder(1970, 1400, '#2D1657'),
        placeholder(985, 1400, '#152C55'),
        placeholder(985, 1400, '#7A1420'),
        placeholder(1970, 1400, '#806D15'),
        placeholder(985, 1400, '#0F5B30'),
        placeholder(1970, 1400, '#1a3e3c'),
        placeholder(985, 1400, '#480f5b'),
        placeholder(985, 1400, '#a9bf7a'),
        placeholder(985, 1400, '#147a56'),
        placeholder(1970, 1400, '#190343'),
        placeholder(985, 1400, '#d5b91e'),
        placeholder(985, 1400, '#836ecd'),
        placeholder(985, 1400, '#bf19b2'),
        placeholder(985, 1400, '#152055'),
        ...Array(num).fill(0).map(randomPlaceholder),
      ],
    };
  },
};
export default localhost;
