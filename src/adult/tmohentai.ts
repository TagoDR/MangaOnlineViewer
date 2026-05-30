// == TMOHentai ====================================================================================

import { runTMO } from '../main/tmofans';
import { Category, type IManga, type ISite, Language } from '../types';

const tmohhentai: ISite = {
  name: 'TMOHentai',
  url: /https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/,
  homepage: 'https://tmohentai.app/',
  language: [Language.SPANISH],
  category: Category.HENTAI,
  run(): IManga {
    return runTMO();
  },
};
export default tmohhentai;
