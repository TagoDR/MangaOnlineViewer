import adult from '../adult';
import { requiredScripts } from '../core/externals';
import main from '../main';
import { ISite } from '../types';

const sites = [...main, ...adult];
const languages: string[] = Array.from(new Set(sites.flatMap((s) => s.language)));

function linkSite(site: [string, string]) {
  return `[${site[0]}](${site[1]})`;
}

function normalizeSite(site: ISite): [string, string][] {
  if (typeof site.name === 'string') return [[site.name, site.homepage as string]];
  return site.name.map((n, i) => [n, site.homepage[i]]);
}

function siteListEntry(site: ISite) {
  function links(s: ISite) {
    return normalizeSite(s).map(linkSite).join(' / ');
  }

  const lang = site.language === undefined ? '' : ` _[${site.language}]_`;
  const obs = site.obs === undefined ? '' : ` **Obs: ${site.obs}**`;
  return `- ${links(site)}${lang}${obs}`;
}

const sortSites = (s: ISite[]) =>
  [...s].sort((a, b) => `${a.language}`.localeCompare(b.language.toString()));
const sitesList = (s: ISite[]) => sortSites(s).map(siteListEntry).join('\n');

const mangaSites = sitesList(main.filter((s) => s.category === 'manga'));
const comicSites = sitesList(main.filter((s) => s.category === 'comic'));
const hentaiSites = sitesList(adult);
const bookmarklet = `${requiredScripts.join('", "')}`;

export { mangaSites, comicSites, hentaiSites, languages, bookmarklet };
