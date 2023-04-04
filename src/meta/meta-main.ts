import sites from '../main';
import { requiredScripts } from '../core/externals';

export default {
  name: 'Manga OnlineViewer',
  author: 'Tago',
  updateURL:
    'https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js',
  downloadURL:
    'https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js',
  supportURL: 'https://github.com/TagoDR/MangaOnlineViewer/issues',
  namespace: 'https://github.com/TagoDR',
  description: `Shows all pages at once in online view for these sites: ${sites
    .flatMap((s) => s.name)
    .map((s) => s.trim())
    .join(', ')}`,
  version: new Date().toISOString().slice(0, 10).replaceAll('-', '.'),
  license: 'MIT',
  grant: [
    'unsafeWindow',
    'GM_getValue',
    'GM_setValue',
    'GM_listValues',
    'GM_deleteValue',
    'GM_xmlhttpRequest',
  ],
  noframes: 'on',
  connect: '*',
  require: requiredScripts,
  include: sites.map((s) => s.url),
  exclude: [/https?:\/\/(www.)?tsumino.com\/.+/, /https?:\/\/(www.)?pururin.io\/.+/],
} as Partial<Tampermonkey.ScriptMetadata>;
