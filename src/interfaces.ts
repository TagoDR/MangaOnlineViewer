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

export interface IManga {
  title: string;
  series: string;
  pages: number;
  prev: string;
  next: string;
  listImages?: string[];
  listPages?: string[];
  img?: JQuery.Selector;
  lazy?: boolean;
  timer?: number;
  lazyAttr?: string;

  bruteForce?(func: object): void;

  before?(): void;

  after?(): void;
}

export interface IBookmark {
  url: string;
  page: number;
  date: number;
}
