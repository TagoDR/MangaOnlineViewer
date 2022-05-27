import pkg from '../package.json';
import sites from './main';
import { requiredScripts } from './externals';

export default {
  name: 'Manga OnlineViewer',
  author: 'Tago',
  updateURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js',
  downloadURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js',
  namespace: 'https://github.com/TagoDR',
  description: `Shows all pages at once in online view for these sites: ${sites
    .map((s) => s.name)
    .join(', ')}`,
  version: new Date().toISOString().slice(0, 10),
  license: pkg.license,
  grant: ['GM_getValue', 'GM_setValue', 'GM_listValues', 'GM_deleteValue', 'GM_xmlhttpRequest'],
  connect: '*',
  require: requiredScripts,
  include: sites.map((s) => s.url),
  exclude: [/https?:\/\/(www.)?tsumino.com\/.+/, /https?:\/\/(www.)?pururin.io\/.+/],
};
