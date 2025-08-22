import adult from '../adult';
import { requiredScripts } from '../core/externals';
import main from '../main';
import type { ISite } from '../types';

const sites = [...main, ...adult];
/**
 * A unique list of all languages supported by the sites.
 * @type {string[]}
 */
const languages: string[] = Array.from(new Set(sites.flatMap(s => s.language)));

/**
 * Formats a site's name and homepage into a Markdown link.
 * @internal
 * @param {[string, string]} site - A tuple containing the site name and its homepage URL.
 * @returns {string} A Markdown-formatted link.
 */
function linkSite(site: [string, string]): string {
  return `[${site[0]}](${site[1]})`;
}

/**
 * Normalizes a site's name and homepage into a consistent array format.
 * Handles cases where a site might have multiple names or homepages.
 * @internal
 * @param {ISite} site - The site object to normalize.
 * @returns {Array<[string, string]>} An array of name/homepage tuples.
 */
function normalizeSite(site: ISite): Array<[string, string]> {
  if (typeof site.name === 'string') {
    return [[site.name, site.homepage as string]];
  }

  return site.name.map((n, i) => [n, site.homepage[i]]);
}

/**
 * Creates a formatted Markdown list entry for a single site, including its name, language, and any observations.
 * @internal
 * @param {ISite} site - The site to create an entry for.
 * @returns {string} A Markdown list item string.
 */
function siteListEntry(site: ISite): string {
  function links(s: ISite) {
    return normalizeSite(s).map(linkSite).join(' / ');
  }

  const lang = site.language === undefined ? '' : ` _[${site.language}]_`;
  const obs = site.obs === undefined ? '' : ` **Obs: ${site.obs}**`;
  return `- ${links(site)}${lang}${obs}`;
}

/**
 * Sorts an array of sites by language.
 * @internal
 * @param {ISite[]} s - The array of sites to sort.
 * @returns {ISite[]} The sorted array of sites.
 */
const sortSites = (s: ISite[]): ISite[] =>
  [...s].sort((a, b) => `${a.language}`.localeCompare(b.language.toString()));

/**
 * Generates a complete Markdown-formatted list of sites.
 * @internal
 * @param {ISite[]} s - The array of sites to list.
 * @returns {string} A string containing the full Markdown list.
 */
const sitesList = (s: ISite[]): string => sortSites(s).map(siteListEntry).join('\n');

/**
 * A Markdown-formatted list of manga sites.
 * @type {string}
 */
const mangaSites = sitesList(main.filter(s => s.category === 'manga'));
/**
 * A Markdown-formatted list of comic sites.
 * @type {string}
 */
const comicSites = sitesList(main.filter(s => s.category === 'comic'));
/**
 * A Markdown-formatted list of hentai sites.
 * @type {string}
 */
const hentaiSites = sitesList(adult);
/**
 * A string containing all the required external scripts for the bookmarklet, formatted for inclusion in the script.
 * @type {string}
 */
const bookmarklet = `${requiredScripts.join('", "')}`;

export { mangaSites, comicSites, hentaiSites, languages, bookmarklet };
