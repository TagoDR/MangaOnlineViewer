import { IManga } from './IManga';

export enum Language {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  PORTUGUESE = 'Portuguese',
  CHINESE = 'Chinese',
  RAW = 'Raw',
}

export enum Category {
  MANGA = 'manga',
  COMIC = 'comic',
  HENTAI = 'hentai',
}

export interface ISiteBase {
  url: RegExp;
  language: Language | Language[]; // English, Spanish, Portuguese
  obs?: string;
  category: Category | Category[]; // 'manga','comic','hentai'
  waitAttr?: [string, string]; // ['img#XYZ', "data-src"]
  waitEle?: string; // 'img#XYZ'
  waitVar?: string; // gallery
  waitFunc?: () => boolean; // custom validation function
  waitTime?: number;
  start?: 'never' | 'always'; // 'never', 'always'
  run(): IManga;
}

export interface ISiteSingle extends ISiteBase {
  name: string;
  homepage: string;
}

export interface ISiteGroup extends ISiteBase {
  name: string[];
  homepage: string[];
}

export type ISite = ISiteSingle | ISiteGroup;
