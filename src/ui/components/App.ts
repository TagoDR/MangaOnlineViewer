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
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}"
      data-theme="${getUserSettings().theme}"
    >
      <div id="menu" class="${getUserSettings().header}">${IconMenu2}</div>
      ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
      <div id="Overlay" class="overlay"></div>
      ${CommentsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()} ${SettingsPanel()}
    </div>
  `;
};
export default app;
