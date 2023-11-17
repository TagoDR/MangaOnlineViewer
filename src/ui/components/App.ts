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

let loadedManga: IManga;

export function hydrateApp() {
  const elements = {
    '#Header': Header(loadedManga),
    '#CommentsPanel': CommentsPanel(loadedManga),
    '#SettingsPanel': SettingsPanel(),
    '#KeybindingsPanel': KeybindingsPanel(),
    '#Bookmarks': BookmarksPanel(),
  };
  if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
    toggleAutoScroll();
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
  return html`
    <div
      id="MangaOnlineViewer"
      class="${getUserSettings().colorScheme} 
        ${getUserSettings().hidePageControls ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}"
      data-theme="${getUserSettings().theme}"
    >
      ${Header(manga)} ${Reader(manga)} ${CommentsPanel(manga)} ${ThumbnailsPanel(manga)}
      <div id="Overlay" class="overlay"></div>
      ${SettingsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()}
    </div>
  `;
};
export default app;
