import type { ISite } from '../types/index.ts';
import asura from './asura.ts';
import batoto from './batoto.ts';
import bilibilicomics from './bilibilicomics.ts';
import comick from './comick.ts';
import comix from './comix.ts';
import demonicscans from './demonicscans.ts';
import dysnatyscans from './dysnatyscans.ts';
import flamecomics from './flamecomics.ts';
import foolslide from './foolslide.ts';
import ikigai from './ikigai.ts';
import kagane from './kagane.ts';
import kumanga from './kumanga.ts';
import leercapitulo from './leercapitulo.ts';
import lhtranslation from './lhtranslation.ts';
import localhost from './localhost.ts';
import m440 from './m440.ts';
import madarawp from './madarawp.ts';
import mangaball from './mangaball.ts';
import mangabuddy from './mangabuddy.ts';
import mangadex from './mangadex.ts';
import mangafox from './mangafox.ts';
import mangago from './mangago.ts';
import mangahub from './mangahub.ts';
import mangakakalot from './mangakakalot.ts';
import mangaoni from './mangaoni.ts';
import mangapark from './mangapark.ts';
import mangareader from './mangareader.ts';
import mangastreamwp from './mangastreamwp.ts';
import mangatoon from './mangatoon.ts';
import mangatown from './mangatown.ts';
import manhwaweb from './manhwaweb.ts';
import mgeko from './mgeko.ts';
import nineanime from './nineanime.ts';
import olympus from './olympus.ts';
import qimanga from './qimanga.ts';
import qimanhwa from './qimanhwa.ts';
import readcomicsonline from './readcomicsonline.ts';
import reaperscans from './reaperscans.ts';
import reimanga from './reimanga.ts';
import tmofans from './tmofans.ts';
import vortexscans from './vortexscans.ts';
import webnovel from './webnovel.ts';
import webtoons from './webtoons.ts';
import weebcentral from './weebcentral.ts';
import weebdex from './weebdex.ts';
import zeroscans from './zeroscans.ts';

const sites: ISite[] = [
  asura,
  batoto,
  bilibilicomics,
  comick,
  comix,
  demonicscans,
  dysnatyscans,
  flamecomics,
  ikigai,
  kagane,
  kumanga,
  leercapitulo,
  lhtranslation,
  localhost,
  m440,
  mangabuddy,
  mangadex,
  mangafox,
  mangago,
  mangahub,
  mangakakalot,
  mangaball,
  mangaoni,
  mangapark,
  mangareader,
  mangatoon,
  mangatown,
  manhwaweb,
  mgeko,
  nineanime,
  olympus,
  qimanga,
  qimanhwa,
  readcomicsonline,
  reaperscans,
  reimanga,
  tmofans,
  webnovel,
  webtoons,
  weebcentral,
  weebdex,
  // wpmanga, // Archived
  vortexscans,
  zeroscans,
  mangastreamwp, // Must be at the end because is a generic check
  foolslide, // Must be at the end because is a generic check
  madarawp, // Must be at the end because is a generic check
];
export default sites;
