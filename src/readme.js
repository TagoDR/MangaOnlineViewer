import R from 'ramda';
import main from './main';
import adult from './adult';

const sortByNameCaseInsensitive = R.sortBy(R.replace(/<[^>]*>/g, ''));
const listSites = (name, homepage) => `<li><a href='${homepage}'>${name}</a></li>`;
const extractSites = R.map(R.ifElse(site => typeof site.name !== 'string',
  site => R.zipWith(listSites, R.prop('name', site), R.prop('homepage', site)),
  site => [listSites(site.name, site.homepage)]));
const sitesList = R.compose(R.join('\n'), sortByNameCaseInsensitive, R.unnest, extractSites);

const mangaSites = sitesList(R.filter(R.propEq('category', 'manga'), main));
const comicSites = sitesList(R.filter(R.propEq('category', 'comic'), main));
const hentaiSites = sitesList(adult);

export {
  mangaSites,
  comicSites,
  hentaiSites,
};
