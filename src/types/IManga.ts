import { isNothing } from '../utils/checks';

/**
 * Defines the base properties that are common to all manga loading strategies.
 */
export type IMangaBase = {
  /** The starting page number, if not starting from the beginning. Defaults to 1. */
  begin?: number;
  /** The title of the manga or chapter. */
  title?: string;
  /** The URL pointing to the series or chapter list page. */
  series?: string | null;
  /** The total number of pages in the manga. */
  pages: number;
  /** The URL for the previous chapter. */
  prev?: string | null;
  /** The URL for the next chapter. */
  next?: string | null;
  /** Overrides the global lazy load setting for this specific manga. */
  lazy?: boolean;
  /** Overrides the global throttle timer (in milliseconds) for loading images. */
  timer?: number;
  /** A reference to the captured comments element from the original page. */
  comments?: Element | null;
  /** An optional function to execute before the viewer starts loading images. */
  before?(begin: number): void | Promise<void>;
  /** An optional function to reload the source for a specific page, returning the new image URL. */
  reload?(page: number): Promise<string> | string;
};

/**
 * Defines the structure for a manga that is loaded by scraping individual pages.
 * The script will visit each URL in `listPages` and extract the image source using the `img` selector.
 */
export type IMangaPages = {
  /** An array of URLs, where each URL is a page containing a single manga image. */
  listPages: string[];
  /** A CSS selector to find the main image element within each page. */
  img: string;
  /** The attribute on the image element that contains the lazy-loaded source URL (e.g., 'data-src'). */
  lazyAttr?: string;
} & IMangaBase;

/**
 * Defines the structure for a manga that is loaded from a direct list of image URLs.
 */
export type IMangaImages = {
  /** An array of direct URLs to the manga images. */
  listImages: string[];
  /** Optional `fetch` options to use when retrieving the images. */
  fetchOptions?: RequestInit;
} & IMangaBase;

/**
 * Defines the structure of the object passed to the `bruteForce` function.
 * @internal
 */
type IBruteForceObj = {
  begin: number;
  addImg: (manga: IMangaImages, index: number, imageSrc: string, position: number) => void;
  loadImages: (list: string[]) => void;
  loadPages: (list: string[], img: string, lazyAttr: string | undefined) => void;
  wait: number;
};

/**
 * Defines the structure for a manga that requires a brute-force loading strategy.
 * This is used when image URLs are not readily available and must be discovered through interaction.
 */
export type IMangaForce = {
  /** A function that implements the site-specific logic for discovering image URLs. */
  bruteForce(obj: IBruteForceObj): void;
} & IMangaBase;

/**
 * A union type representing all possible manga data structures.
 */
export type IManga = IMangaPages | IMangaImages | IMangaForce;

/**
 * A type guard to check if a manga object uses the direct image list strategy.
 * @param {IManga} manga - The manga object to check.
 * @returns {manga is IMangaImages} `true` if the manga object has a `listImages` property.
 */
export function isImagesManga(manga: IManga): manga is IMangaImages {
  return 'listImages' in manga && !isNothing(manga.listImages);
}

/**
 * A type guard to check if a manga object uses the page scraping strategy.
 * @param {IManga} manga - The manga object to check.
 * @returns {manga is IMangaPages} `true` if the manga object has a `listPages` property.
 */
export function isPagesManga(manga: IManga): manga is IMangaPages {
  return 'listPages' in manga && !isNothing(manga.listPages);
}

/**
 * A type guard to check if a manga object uses the brute-force strategy.
 * @param {IManga} manga - The manga object to check.
 * @returns {manga is IMangaForce} `true` if the manga object has a `bruteForce` property.
 */
export function isBruteforceManga(manga: IManga): manga is IMangaForce {
  return 'bruteForce' in manga && !isNothing(manga.bruteForce);
}
