import type { IManga } from '../../types';
import { getUserSettings, isBookmarked } from '../../core/settings';
import SettingsPanel from './SettingsPanel';
import KeybindingsPanel from './KeybindingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';
import BookmarksPanel from './BookmarksPanel';
import Header from './Header';
import Reader from './Reader';
import CommentsPanel from './CommentsPanel';
import events from '../events';

let loadedManga: IManga;

export function hydrateApp() {
  const elements = {
    '#Header': Header(loadedManga),
    '#CommentsPanel': CommentsPanel(loadedManga),
    '#SettingsPanel': SettingsPanel(),
    '#KeybindingsPanel': KeybindingsPanel(),
    '#Bookmarks': BookmarksPanel(),
  };
  Object.entries(elements).forEach(([id, html]) => {
    const tag = document.querySelector(id);
    if (tag) {
      tag.outerHTML = html;
    }
  });
  events();
  document.querySelector('#Overlay')?.classList.remove('visible');
}

const app = (manga: IManga) => {
  loadedManga = manga;
  return `
<div id='MangaOnlineViewer' 
    class='${getUserSettings().colorScheme} 
      ${getUserSettings().hidePageControls ? 'hideControls' : ''}
      ${isBookmarked() ? 'bookmarked' : ''}'
    locale='${getUserSettings().locale}'  
    data-theme='${getUserSettings().theme}'>
  ${Header(manga)}
  ${Reader(manga)}
  ${CommentsPanel(manga)}  
  ${ThumbnailsPanel(manga)}
  <div id='Overlay' class='overlay'></div>
  ${SettingsPanel()}
  ${KeybindingsPanel()}
  ${BookmarksPanel()}
</div>`;
};
export default app;
