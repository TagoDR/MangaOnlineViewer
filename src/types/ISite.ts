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
  /** A regular expression to match the URLs where the script should run. */
  url: RegExp;
  /** The language(s) of the content on the site. */
  language: Language | Language[];
  /** Any notable observations or warnings about the site. */
  obs?: string;
  /** The category or categories of content on the site. */
  category: Category | Category[];
  /** Specifies an attribute to wait for on a specific element before proceeding. `[selector, attribute]` */
  waitAttr?: [string, string];
  /** A CSS selector for an element to wait for before proceeding. */
  waitEle?: string;
  /** The name of a global variable to wait for before proceeding. */
  waitVar?: string;
  /** A custom function that must return `true` before proceeding. */
  waitFunc?: () => boolean;
  /** A fixed amount of time (in milliseconds) to wait before proceeding. */
  waitTime?: number;
  /** Overrides the global load mode setting. 'never' requires manual start, 'always' starts immediately. */
  start?: 'never' | 'always';
  /** The main function that executes to scrape the manga data from the page. */
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
