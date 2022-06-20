import { IManga } from './IManga.js';

export interface ISite {
  name: string | string[];
  url: RegExp;
  homepage: string | string[];
  language: string[];
  obs?: string;
  category: string; // 'manga','comic','hentai'
  waitAttr?: string[]; // ['img#XYZ', "data-src"]
  waitEle?: JQuery; // 'img#XYZ'
  waitVar?: string; // gallery
  waitMax?: number; // 5000 = 5s
  waitStep?: number; // 1000 = 1s
  start?: string; // 'never', 'always'
  run(): IManga;
}
