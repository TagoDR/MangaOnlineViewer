import alandal from './alandal';
import batoto from './batoto';
import bilibilicomics from './bilibilicomics';
import comicastle from './comicastle';
import dysnatyscans from './dysnatyscans';
import foolslide from './foolslide';
import inkr from './inkr';
import inmanga from './inmanga';
import klmanga from './klmanga';
import leitor from './leitor';
import lhtranslation from './lhtranslation';
import localhost from './localhost';
import lynxscans from './lynxscans';
import madarawp from './madarawp';
import mangabuddy from './mangabuddy';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangafreak from './mangafreak';
import mangago from './mangago';
import mangahosted from './mangahosted';
import mangahub from './mangahub';
import mangasin from './mangasin';
import mangakakalot from './mangakakalot';
import mangapark from './mangapark';
import mangareader from './mangareader';
import mangasee from './mangasee';
import mangastreamwp from './mangastreamwp';
import mangatigre from './mangatigre';
import mangatoon from './mangatoon';
import mangatown from './mangatown';
import manhuascan from './manhuascan';
import mreader from './mreader';
import naniscans from './naniscans';
import ninemanga from './ninemanga';
import olympusscans from './olympusscans';
import pandamanga from './pandamanga';
import rawdevart from './rawdevart';
import readcomicsonline from './readcomicsonline';
import readmangatoday from './readmangatoday';
import reaperscans from './reaperscans';
import senmanga from './senmanga';
import tapas from './tapas';
import tenmanga from './tenmanga';
import tmofans from './tmofans';
import tumanhwas from './tumanhwas';
import unionmangas from './unionmangas';
import webnovel from './webnovel';
import webtoons from './webtoons';
import wpmanga from './wpmanga';
import yugenmangas from './yugenmangas';
import zeroscans from './zeroscans';
import { type ISite } from '../types/ISite';

const sites = [
  alandal,
  // Asurascans,
  batoto,
  bilibilicomics,
  comicastle,
  dysnatyscans,
  mangastreamwp,
  inkr,
  inmanga,
  klmanga,
  leitor,
  // Leviatanscans,
  lhtranslation,
  localhost,
  lynxscans,
  mangabuddy,
  mangadex,
  mangafox,
  mangafreak,
  mangago,
  mangahosted,
  mangahub,
  mangasin,
  mangakakalot,
  mangapark,
  mangareader,
  mangasee,
  mangatigre,
  mangatoon,
  mangatown,
  manhuascan,
  mreader,
  naniscans,
  ninemanga,
  olympusscans,
  pandamanga,
  rawdevart,
  readcomicsonline,
  readmangatoday,
  reaperscans,
  // Resetscans, deprecated
  senmanga,
  tapas,
  tenmanga,
  tmofans,
  tumanhwas,
  unionmangas,
  webnovel,
  webtoons,
  wpmanga,
  yugenmangas,
  zeroscans,
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
] as ISite[];
export default sites;
