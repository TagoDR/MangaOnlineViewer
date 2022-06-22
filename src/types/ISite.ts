import { IManga } from './IManga';

export enum Language {
  ENGLISH = 'English',
  SPANISSH = 'Spanish',
  PORTUGUESE = 'Portuguese',
  JAPANESE = 'Japanese',
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
  waitAttr?: string[]; // ['img#XYZ', "data-src"]
  waitEle?: string; // 'img#XYZ'
  waitVar?: string; // gallery
  waitMax?: number; // 5000 = 5s
  waitStep?: number; // 1000 = 1s
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
