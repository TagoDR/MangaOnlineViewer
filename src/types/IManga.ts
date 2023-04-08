import { isNothing } from '../utils/checks';

export interface IMangaBase {
  begin: number;
  title?: string;
  series?: string;
  pages: number;
  prev?: string;
  next?: string;
  lazy?: boolean;
  timer?: number;

  before?(begin: number): void | Promise<void>;
}

export interface IMangaPages extends IMangaBase {
  listPages: string[];
  img: string;
  lazyAttr?: string;
}

export interface IMangaImages extends IMangaBase {
  listImages: string[];
}

interface IBruteForceObj {
  begin: number;
  addImg: (manga: IMangaImages, index: number, imageSrc: string, position: number) => void;
  loadImages: (list: string[]) => void;
  loadPages: (list: string[], img: string, lazyAttr: string | undefined) => void;
  wait: number;
}

export interface IMangaForce extends IMangaBase {
  bruteForce(obj: IBruteForceObj): void;
}

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
