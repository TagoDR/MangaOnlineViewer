import type { ISite } from '../types';
import asura from './asura';
import batoto from './batoto';
import bilibilicomics from './bilibilicomics';
import comick from './comick';
import dysnatyscans from './dysnatyscans';
import flamecomics from './flamecomics';
import foolslide from './foolslide';
import ikigai from './ikigai';
import kumanga from './kumanga';
import leercapitulo from './leercapitulo';
import lhtranslation from './lhtranslation';
import localhost from './localhost';
import m440 from './m440.ts';
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
import nineanime from './nineanime';
import olympusbiblioteca from './olympusbiblioteca';
import readcomicsonline from './readcomicsonline';
import reaperscans from './reaperscans';
import tmofans from './tmofans';
import vortexscans from './vortexscans';
import webnovel from './webnovel';
import webtoons from './webtoons';
import weebcentral from './weebcentral';
import zeroscans from './zeroscans';
import mangapark from './mangapark';

const sites: ISite[] = [
  asura,
  batoto,
  bilibilicomics,
  comick,
  dysnatyscans,
  flamecomics,
  ikigai,
  kumanga,
  leercapitulo,
  lhtranslation,
  localhost,
  m440,
  mangabuddy,
  mangademon,
  mangadex,
  mangafox,
  mangago,
  mangahub,
  mangakakalot,
  mangaoni,
  mangapark,
  mangareader,
  mangatoon,
  manhwaweb,
  mgeko,
  nineanime,
  olympusbiblioteca,
  readcomicsonline,
  reaperscans,
  tmofans,
  webnovel,
  webtoons,
  weebcentral,
  // wpmanga, // Archived
  vortexscans,
  zeroscans,
  mangastreamwp, // Must be at the end because is a generic check
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
];
export default sites;
