import { type IManga } from './IManga';

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

export type ISiteBase = {
  url: RegExp;
  language: Language | Language[]; // English, Spanish, Portuguese
  obs?: string;
  category: Category | Category[]; // 'manga','comic','hentai'
  waitAttr?: [string, string]; // ['img#XYZ', "data-src"]
  waitEle?: string; // 'img#XYZ'
  waitVar?: string; // Gallery
  waitFunc?: () => boolean; // Custom validation function
  waitTime?: number;
  start?: 'never' | 'always'; // 'never', 'always'
  run(): IManga | Promise<IManga>;
};

export type ISiteSingle = {
  name: string;
  homepage: string;
} & ISiteBase;

export type ISiteGroup = {
  name: string[];
  homepage: string[];
} & ISiteBase;

export type ISite = ISiteSingle | ISiteGroup;
