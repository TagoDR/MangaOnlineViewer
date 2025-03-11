import asura from './asura';
import batoto from './batoto';
import bilibilicomics from './bilibilicomics';
import comick from './comick';
import dysnatyscans from './dysnatyscans';
import foolslide from './foolslide';
import flamecomics from './flamecomics';
import ikigai from './ikigai';
import kumanga from './kumanga';
import leercapitulo from './leercapitulo';
import lhtranslation from './lhtranslation';
import localhost from './localhost';
import madarawp from './madarawp';
import mangabuddy from './mangabuddy';
import mangademon from './mangademon';
import mangadex from './mangadex';
import mangafox from './mangafox';
import mangago from './mangago';
import mangahub from './mangahub';
import mangakakalot from './mangakakalot';
import mangaoni from './mangaoni';
import mangareader from './mangareader';
import mangastreamwp from './mangastreamwp';
import mangatoon from './mangatoon';
import manhwaweb from './manhwaweb';
import mgeko from './mgeko';
import readcomicsonline from './readcomicsonline';
import reaperscans from './reaperscans';
import tmofans from './tmofans';
import webnovel from './webnovel';
import webtoons from './webtoons';
import weebcentral from './weebcentral';
import vortexscans from './vortexscans';
import zeroscans from './zeroscans';
import { type ISite } from '../types';

const sites = [
  // alandal, // Fixme
  asura,
  batoto,
  bilibilicomics,
  // comicastle, // Fixme
  comick,
  dysnatyscans,
  flamecomics,
  ikigai,
  // inkr, // Fixme
  // inmanga, //Fixme
  // klmanga, // Fixme
  kumanga,
  leercapitulo,
  lhtranslation,
  localhost,
  mangabuddy,
  mangademon,
  mangadex,
  mangafox,
  mangago,
  // mangafreak, // Fixme
  mangahub,
  // mangasin, //Fixme
  mangakakalot,
  mangaoni,
  // mangapark, // Fixme
  mangareader,
  mangatoon,
  manhwaweb,
  // mangatown, // Fixme
  mgeko,
  readcomicsonline,
  // ninemanga, // Fixme
  reaperscans,
  tmofans,
  // senmanga, // Fixme
  // tapas, // Fixme
  // tenmanga, // Fixme
  webnovel,
  webtoons,
  weebcentral,
  // wpmanga, // Archived
  vortexscans,
  zeroscans,
  mangastreamwp, // Must be at the end because is a generic check
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
] as ISite[];
export default sites;
