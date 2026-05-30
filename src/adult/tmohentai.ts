// == TMOHentai ====================================================================================

import TMO from '../main/tmofans';
import { Category, type ISite, Language } from '../types';

const tmohhentai: ISite = {
  ...TMO,
  name: 'TMOHentai',
  url: /https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/,
  homepage: 'https://tmohentai.app/',
  language: [Language.SPANISH],
  category: Category.HENTAI,
};
export default tmohhentai;
