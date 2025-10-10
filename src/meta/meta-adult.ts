import sites from '../adult';
import { requiredScripts } from '../core/externals';

/**
 * Tampermonkey metadata block for the adult (NSFW) version of the script.
 * This configuration is used by the Tampermonkey extension to manage the script.
 * It includes details like the script's name, author, update/download URLs, permissions,
 * and the specific adult sites it runs on. The description and include patterns are dynamically generated.
 * @type {Partial<Tampermonkey.ScriptMetadata>}
 */
export default {
  name: 'Manga OnlineViewer Adult',
  author: 'Tago',
  updateURL:
    'https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer_Adult.meta.js',
  downloadURL:
    'https://cdn.jsdelivr.net/gh/TagoDR/MangaOnlineViewer@latest/dist/Manga_OnlineViewer_Adult.user.js',
  supportURL: 'https://github.com/TagoDR/MangaOnlineViewer/issues',
  namespace: 'https://github.com/TagoDR',
  description: `Shows all pages at once in online view for these sites: ${sites
    .flatMap(s => s.name)
    .map(s => s.trim())
    .join(', ')}`,
  version: new Date().toISOString().slice(0, 10).replaceAll('-', '.'),
  license: 'MIT',
  icon: 'https://cdn-icons-png.flaticon.com/32/9824/9824312.png', // https://www.freepik.com/icon/comic_9824312
  'run-at': 'document-end',
  grant: [
    'unsafeWindow',
    'GM_getValue',
    'GM_setValue',
    'GM_listValues',
    'GM_deleteValue',
    'GM_xmlhttpRequest',
    'GM_addValueChangeListener',
  ],
  noframes: 'on',
  connect: '*',
  require: requiredScripts,
  include: sites.map(s => s.url),
} as Partial<Tampermonkey.ScriptMetadata>;
