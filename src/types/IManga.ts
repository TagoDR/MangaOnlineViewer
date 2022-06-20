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
