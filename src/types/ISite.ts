import type { IManga } from './IManga';

/**
 * Enumeration of supported content languages.
 */
export enum Language {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  PORTUGUESE = 'Portuguese',
  CHINESE = 'Chinese',
  RAW = 'Raw',
}

/**
 * Enumeration of supported content categories.
 */
export enum Category {
  MANGA = 'manga',
  COMIC = 'comic',
  HENTAI = 'hentai',
}

/**
 * Defines the base structure for a site configuration object.
 * This contains all the core logic and properties needed to handle a specific website.
 */
export type ISiteBase = {
  /**
   * A regular expression that must match the manga chapter URL for the script to activate.
   * @example /https:\/\/mangasite\.com\/manga\/.+\/\d+/
   */
  url: RegExp;
  /** The primary language of the content on the site. */
  language: Language | Language[];
  /**
   * Any notable observations or warnings about the site, such as if it requires a login
   * or has aggressive anti-bot measures. This is for informational purposes.
   */
  obs?: string;
  /** The category of content on the site (e.g., manga, comic, hentai). */
  category: Category | Category[];
  /**
   * Waits for a specific attribute to be present on a DOM element before executing the script.
   * Useful for sites where content is loaded dynamically and indicated by an attribute change.
   * @example ['#image-container', 'data-loaded'] // Waits for the `data-loaded` attribute on the element with id `image-container`.
   */
  waitAttr?: [string, string];
  /**
   * Waits for a specific DOM element to exist before executing the script.
   * This is the most common wait condition, used to ensure the page structure is ready.
   * @example '#chapter-images' // Waits for the element with id `chapter-images`.
   */
  waitEle?: string;
  /**
   * Waits for a specific global JavaScript variable to be defined on the `window` object.
   * Useful for sites that expose chapter data in a global variable.
   * @example '__CHAPTER_DATA__' // Waits for `window.__CHAPTER_DATA__` to be available.
   */
  waitVar?: string;
  /**
   * Waits for a custom function to return `true`.
   * This provides maximum flexibility for complex scenarios where other wait conditions are insufficient.
   * The function is polled until it returns true.
   * @example () => document.querySelectorAll('.page-image').length > 0
   */
  waitFunc?: () => boolean;
  /**
   * A fixed amount of time (in milliseconds) to wait before executing the script.
   * This should be used as a last resort when no other reliable wait condition can be found.
   * @example 5000 // Waits for 5 seconds.
   */
  waitTime?: number;
  /**
   * Overrides the global 'Load Mode' setting for this specific site.
   * - `never`: The script will not run automatically; the user must start it manually via the button.
   * - `always`: The script will run automatically as soon as the page loads.
   */
  start?: 'never' | 'always';
  /**
   * The main function that scrapes the manga data from the page.
   * It must return an `IManga` object or a promise that resolves to one.
   * This function is where the core logic for extracting chapter details and image URLs resides.
   */
  run(): IManga | Promise<IManga>;
};

/**
 * Defines a site configuration for a single website.
 */
export type ISiteSingle = {
  /** The name of the website. */
  name: string;
  /** The homepage URL of the website. */
  homepage: string;
} & ISiteBase;

/**
 * Defines a site configuration for a group of related websites that share the same logic.
 */
export type ISiteGroup = {
  /** An array of names for the websites in the group. */
  name: string[];
  /** An array of homepage URLs corresponding to the names. */
  homepage: string[];
} & ISiteBase;

/**
 * Represents a complete site configuration, which can be for a single site or a group of sites.
 */
export type ISite = ISiteSingle | ISiteGroup;
