import { html } from '../../utils/code-tag';
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
import { toggleAutoScroll } from '../events/autoscroll';
import { IconMenu2 } from '../icons';
import { getDevice } from '../../utils/tampermonkey';
import { updateViewMode } from '../events/viewmode';

let loadedManga: IManga;

export function hydrateApp() {
  updateViewMode(getUserSettings().viewMode)();
  const elements = {
    '#Header': Header(loadedManga),
    '#CommentsPanel': CommentsPanel(),
    '#SettingsPanel': SettingsPanel(),
    '#KeybindingsPanel': KeybindingsPanel(),
    '#Bookmarks': BookmarksPanel(),
  };
  if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
    toggleAutoScroll();
  }
  const outer = document.querySelector('#MangaOnlineViewer');
  if (outer) {
    outer.className = `${getUserSettings().colorScheme} 
        ${getUserSettings().hidePageControls ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
    outer.setAttribute('data-theme', getUserSettings().theme);
  }
  const reader = document.querySelector('#Chapter');
  if (reader) {
    reader.className = `${getUserSettings().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}  ${getUserSettings().viewMode}`;
  }
  Object.entries(elements).forEach(([id, component]) => {
    const tag = document.querySelector(id);
    if (tag) {
      tag.outerHTML = component;
    }
  });
  document.querySelector('#Overlay')?.dispatchEvent(new Event('click'));
  events();
}

const app = (manga: IManga) => {
  loadedManga = manga;
  const main = document.createElement('div');
  main.id = 'MangaOnlineViewer';
  main.className = `
        ${getUserSettings().colorScheme} 
        ${getUserSettings().hidePageControls ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
  main.setAttribute('data-theme', getUserSettings().theme);

  main.innerHTML = html`
    <div id="menu" class="${getUserSettings().header}">${IconMenu2}</div>
    ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
    <div id="Overlay" class="overlay"></div>
    ${CommentsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()} ${SettingsPanel()}
  `;
  return main.outerHTML;
};
export default app;
