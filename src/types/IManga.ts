import { isNothing } from '../utils/checks';

export type IMangaBase = {
  begin: number;
  title?: string;
  series?: string;
  pages: number;
  prev?: string;
  next?: string;
  lazy?: boolean;
  timer?: number;
  comments?: Element | null;

  before?(begin: number): void | Promise<void>;
  reload?(page: number): Promise<string> | string;
};

export type IMangaPages = {
  listPages: string[];
  img: string;
  lazyAttr?: string;
} & IMangaBase;

export type IMangaImages = {
  listImages: string[];
  fetchOptions?: RequestInit;
} & IMangaBase;

type IBruteForceObj = {
  begin: number;
  addImg: (manga: IMangaImages, index: number, imageSrc: string, position: number) => void;
  loadImages: (list: string[]) => void;
  loadPages: (list: string[], img: string, lazyAttr: string | undefined) => void;
  wait: number;
};

export type IMangaForce = {
  bruteForce(obj: IBruteForceObj): void;
} & IMangaBase;

export type IManga = IMangaPages | IMangaImages | IMangaForce;

export function isImagesManga(manga: IManga): manga is IMangaImages {
  return 'listImages' in manga && !isNothing(manga.listImages);
}

export function isPagesManga(manga: IManga): manga is IMangaPages {
  return 'listPages' in manga && !isNothing(manga.listPages);
}

export function isBruteforceManga(manga: IManga): manga is IMangaForce {
  return 'bruteForce' in manga && !isNothing(manga.bruteForce);
}
