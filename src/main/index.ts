/* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
import asurascans from './asurascans.js';
import batoto from './batoto';
import bilibilicomics from './bilibilicomics';
import comicastle from './comicastle';
import dysnatyscans from './dysnatyscans';
import flamecans from './flamecans.js';
import foolslide from './foolslide';
import inkr from './inkr';
import inmanga from './inmanga';
import klmanga from './klmanga';
import leitor from './leitor';
import lhtranslation from './lhtranslation';
import lynxscans from './lynxscans';
import madarawp from './madarawp';
import mangabuddy from './mangabuddy';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangafreak from './mangafreak';
import mangago from './mangago';
import mangahosted from './mangahosted';
import mangahub from './mangahub';
import mangakakalot from './mangakakalot';
import mangapark from './mangapark';
import mangareader from './mangareader';
import mangasee from './mangasee';
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
// import resetscans from './resetscans';
import senmanga from './senmanga';
import tapas from './tapas';
import tenmanga from './tenmanga';
import tmofans from './tmofans';
import unionmangas from './unionmangas';
import webnovel from './webnovel';
import webtoons from './webtoons';
import wpmanga from './wpmanga';
import yugenmangas from './yugenmangas';
import zeroscans from './zeroscans';
import { ISite } from '../types/ISite';

const sites = [
  asurascans,
  batoto,
  bilibilicomics,
  comicastle,
  dysnatyscans,
  flamecans,
  inkr,
  inmanga,
  klmanga,
  leitor,
  lhtranslation,
  lynxscans,
  mangabuddy,
  mangadex,
  mangafox,
  mangafreak,
  mangago,
  mangahosted,
  mangahub,
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
  // resetscans, deprecated
  senmanga,
  tapas,
  tenmanga,
  tmofans,
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
