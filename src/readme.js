import R from 'ramda';
import adult from './adult';
import main from './main';

const sites = R.concat(main, adult);
const languages = R.compose(R.uniq, R.map(R.prop('languages')))(sites);

const linkSite = (site) => `<a href='${site[1]}'>${site[0]}</a>`;
const normalizeSite = R.ifElse((site) => typeof site.name !== 'string',
  (site) => R.zip(site.name, site.homepage),
  (site) => [R.pair(site.name, site.homepage)]);

function siteListEntry(site) {
  const links = R.compose(R.join(' / '), R.map(linkSite), normalizeSite);
  const lang = site.language === undefined ? '' : ` <i>[${site.language}]</i>`;
  const obs = site.obs === undefined ? '' : ` <b>Obs: ${site.obs}</b>`;
  return `<li>${links(site)}${lang}${obs}</li>`;
}

const sortSites = R.sortWith([
  R.ascend(R.prop('language')),
  R.ascend(R.prop('name')),
]);
const sitesList = R.compose(R.join('\n'), R.map(siteListEntry), sortSites);

const mangaSites = sitesList(R.filter(R.propEq('category', 'manga'), main));
const comicSites = sitesList(R.filter(R.propEq('category', 'comic'), main));
const hentaiSites = sitesList(adult);

export {
  mangaSites,
  comicSites,
  hentaiSites,
  languages,
};
