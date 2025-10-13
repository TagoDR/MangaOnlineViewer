import { requiredScripts } from '../core/externals';
import sites from '../main';

/**
 * Tampermonkey metadata block for the main (SFW) version of the script.
 * This configuration is used by the Tampermonkey extension to manage the script.
 * It includes details like the script's name, author, update/download URLs, permissions,
 * and the sites it runs on. The description and include patterns are dynamically generated.
 * @type {Partial<Tampermonkey.ScriptMetadata>}
 */
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
    .flatMap(s => s.name)
    .map(s => s.trim())
    .join(', ')}`,
  version: new Date()
    .toISOString()
    .slice(0, 16)
    .replaceAll('-', '.')
    .replace('T', '.build-')
    .replace(':', ''),
  license: 'MIT',
  icon: 'https://cdn-icons-png.flaticon.com/32/2281/2281832.png', // https://www.freepik.com/icon/comic_2281832
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
  exclude: [/https?:\/\/(www\.)?tsumino.com\/.+/, /https?:\/\/(www\.)?pururin.io\/.+/],
} as Partial<Tampermonkey.ScriptMetadata>;
