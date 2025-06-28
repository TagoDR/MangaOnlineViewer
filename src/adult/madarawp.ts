// == Madara WordPress Plugin ======================================================================
import { Category, ISite } from '../types';
import madarawp from '../main/madarawp';

const site: ISite = {
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
export default site;
