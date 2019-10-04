import R from 'ramda';
import adult from './adult';
import main from './main';
import { requiredScripts } from './externals';

const sites = R.concat(main, adult);
const languages = R.compose(R.uniq, R.map(R.prop('languages')))(sites);

const linkSite = (site) => `[${site[0]}](${site[1]})`;
const normalizeSite = R.ifElse((site) => typeof site.name !== 'string',
  (site) => R.zip(site.name, site.homepage),
  (site) => [R.pair(site.name, site.homepage)]);

function siteListEntry(site) {
  const links = R.compose(R.join(' / '), R.map(linkSite), normalizeSite);
  const lang = site.language === undefined ? '' : ` _[${site.language}]_`;
  const obs = site.obs === undefined ? '' : ` **Obs: ${site.obs}**`;
  return `- ${links(site)}${lang}${obs}`;
}

const sortSites = R.sortWith([
  R.ascend(R.prop('language')),
  R.ascend(R.prop('name')),
]);
const sitesList = R.compose(R.join('\n'), R.map(siteListEntry), sortSites);

const mangaSites = sitesList(R.filter(R.propEq('category', 'manga'), main));
const comicSites = sitesList(R.filter(R.propEq('category', 'comic'), main));
const hentaiSites = sitesList(adult);
const bookmarklet = `${requiredScripts.join('", "')}`;

export {
  mangaSites,
  comicSites,
  hentaiSites,
  languages,
  bookmarklet,
};
