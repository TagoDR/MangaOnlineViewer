/* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
import asurascans from './asurascans.js';
import batoto from './batoto';
import comicastle from './comicastle';
import dysnatyscans from './dysnatyscans';
import flamecans from './flamecans.js';
import foolslide from './foolslide';
import inmanga from './inmanga';
import klmanga from './klmanga';
import leitor from './leitor';
// import leviatanscans from './leviatanscans';
import lhtranslation from './lhtranslation';
import madarawp from './madarawp';
import mangabuddy from './mangabuddy';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangafreak from './mangafreak';
// import mangago from './mangago';
import mangahosted from './mangahosted';
import mangahub from './mangahub';
import mangakakalot from './mangakakalot';
// import mangapark from './mangapark';
import mangareader from './mangareader';
import mangasee from './mangasee';
import mangatigre from './mangatigre';
import mangatown from './mangatown';
import manhuascan from './manhuascan';
import mreader from './mreader';
import ninemanga from './ninemanga';
import pandamanga from './pandamanga';
import rawdevart from './rawdevart';
import readcomicsonline from './readcomicsonline';
import readmangatoday from './readmangatoday';
import reaperscans from './reaperscans';
import senmanga from './senmanga';
import shimadascans from './shimadascans';
import tapas from './tapas';
import tenmanga from './tenmanga';
import tmofans from './tmofans';
import unionmangas from './unionmangas';
import webtoons from './webtoons';
import wpmanga from './wpmanga';
import zeroscans from './zeroscans';
import { ISite } from '../types/ISite';

const sites = [
  asurascans,
  batoto,
  comicastle,
  dysnatyscans,
  flamecans,
  inmanga,
  klmanga,
  leitor,
  // leviatanscans, depricated
  lhtranslation,
  mangabuddy,
  mangadex,
  mangafox,
  mangafreak,
  // mangago, fixme
  mangahosted,
  mangahub,
  mangakakalot,
  // mangapark, fixme
  mreader,
  mangareader,
  mangasee,
  mangatigre,
  mangatown,
  manhuascan,
  ninemanga,
  pandamanga,
  rawdevart,
  readcomicsonline,
  readmangatoday,
  reaperscans,
  senmanga,
  shimadascans,
  tapas,
  tenmanga,
  tmofans,
  unionmangas,
  webtoons,
  wpmanga,
  zeroscans,
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
] as ISite[];
export default sites;
