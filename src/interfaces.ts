export interface ISite {
  name: string | string[];
  url: RegExp;
  homepage: string | string[];
  language: string[];
  obs?:string;
  category: string;
  waitEle?: string;
  waitVar?: string;

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
  img?: string;
  lazy?:boolean;
  bruteForce?(func: never):void;
}
