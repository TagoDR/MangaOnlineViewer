import sites from './adult/index.js';
import { requiredScripts } from './externals.js';

export default {
  name: 'Manga OnlineViewer Adult',
  author: 'Tago',
  updateURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js',
  downloadURL: 'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js',
  namespace: 'https://github.com/TagoDR',
  description: `Shows all pages at once in online view for these sites: ${sites.map((s) => s.name).join(', ')}`,
  version: new Date().toISOString().slice(0, 10).replace('-', '.'),
  license: 'MIT',
  grant: ['GM_getValue', 'GM_setValue', 'GM_listValues', 'GM_deleteValue', 'GM_xmlhttpRequest'],
  connect: '*',
  require: requiredScripts,
  include: sites.map((s) => s.url),
} as Partial<Tampermonkey.ScriptMetadata>;
