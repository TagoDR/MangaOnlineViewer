/* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
import asurasflamecans from './asurasflamecans';
import batoto from './batoto';
import comicastle from './comicastle';
import disasterscans from './disasterscans';
import dysnatyscans from './dysnatyscans';
import foolslide from './foolslide';
import leitor from './leitor';
import lhtranslation from './lhtranslation';
import madarawp from './madarawp';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangafreak from './mangafreak';
import mangahosted from './mangahosted';
import mangahub from './mangahub';
import mangakakalot from './mangakakalot';
import mangapark from './mangapark';
import mangareader from './mangareader';
import mangasee from './mangasee';
import mangatown from './mangatown';
import ninemanga from './ninemanga';
import pandamanga from './pandamanga';
import rawdevart from './rawdevart';
import readcomicsonline from './readcomicsonline';
import readmangatoday from './readmangatoday';
import senmanga from './senmanga';
import tenmanga from './tenmanga';
import tmofans from './tmofans';
import unionmangas from './unionmangas';
import wpmanga from './wpmanga';
import { ISite } from '../types/ISite';

const sites = [
  asurasflamecans,
  batoto,
  comicastle,
  disasterscans,
  dysnatyscans,
  leitor,
  lhtranslation,
  mangadex,
  mangafox,
  mangafreak,
  mangahosted,
  mangahub,
  mangakakalot,
  mangapark,
  mangareader,
  mangasee,
  mangatown,
  ninemanga,
  pandamanga,
  rawdevart,
  readcomicsonline,
  readmangatoday,
  senmanga,
  tenmanga,
  tmofans,
  unionmangas,
  wpmanga,
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
] as ISite[];
export default sites;
