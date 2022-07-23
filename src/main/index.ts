/* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
import asurasflamecans from './asurasflamecans';
import batoto from './batoto';
import comicastle from './comicastle';
import dysnatyscans from './dysnatyscans';
import inmanga from './inmanga';
import foolslide from './foolslide';
import klmanga from './klmanga';
import leitor from './leitor';
import lhtranslation from './lhtranslation';
import madarawp from './madarawp';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangafreak from './mangafreak';
import mangago from './mangago';
import mangahosted from './mangahosted';
import mangahub from './mangahub';
import mangakakalot from './mangakakalot';
import mangapark from './mangapark';
import mangaraw from './mangaraw';
import mangareader from './mangareader';
import mangasee from './mangasee';
import mangatigre from './mangatigre';
import mangatown from './mangatown';
import manhuascan from './manhuascan';
import ninemanga from './ninemanga';
import pandamanga from './pandamanga';
import rawdevart from './rawdevart';
import readcomicsonline from './readcomicsonline';
import readmangatoday from './readmangatoday';
import senmanga from './senmanga';
import tenmanga from './tenmanga';
import tmofans from './tmofans';
import unionmangas from './unionmangas';
import webtoons from './webtoons';
import wpmanga from './wpmanga';
import { ISite } from '../types/ISite';

const sites = [
  asurasflamecans,
  batoto,
  comicastle,
  dysnatyscans,
  inmanga,
  klmanga,
  leitor,
  lhtranslation,
  mangadex,
  mangafox,
  mangafreak,
  mangago,
  mangahosted,
  mangahub,
  mangakakalot,
  mangapark,
  mangaraw,
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
  senmanga,
  tenmanga,
  tmofans,
  unionmangas,
  webtoons,
  wpmanga,
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
] as ISite[];
export default sites;
