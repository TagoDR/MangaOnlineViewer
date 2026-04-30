// == Madara WordPress Plugin ======================================================================
import madarawp from '../main/madarawp';
import { Category, type ISite } from '../types';

const madarawph: ISite = {
  ...madarawp,
  name: ['Madara WordPress Plugin', 'AllPornComic', 'Manytoon', 'Manga District'],
  url: /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,
  homepage: [
    '#',
    'https://allporncomic.com/',
    'https://manytoon.com/',
    'https://mangadistrict.com/',
  ],
  category: Category.HENTAI,
};
export default madarawph;
