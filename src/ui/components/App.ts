import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import _ from 'lodash';
import { getSettingsValue, isBookmarked, settings, showSettings } from '../../core/settings';
import type { IManga } from '../../types';
import renderReplace from '../../utils/renderReplace.ts';
import { getDevice } from '../../utils/tampermonkey';
import events from '../events';
import { toggleAutoScroll } from '../events/autoscroll';
import { buttonSettingsOpen } from '../events/panels.ts';
import { updateViewMode } from '../events/viewmode';
import { IconMenu2 } from '../icons';
import { refreshThemes } from '../themes';
import BookmarksPanel from './BookmarksPanel';
import CommentsPanel from './CommentsPanel';
import Header from './Header';
import KeybindingsPanel from './KeybindingsPanel';
import Reader from './Reader';
import SettingsPanel from './SettingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';

let loadedManga: IManga;

export function hydrateApp() {
  showSettings();
  updateViewMode(getSettingsValue('viewMode'))();
  const elements = {
    '#Header': Header(loadedManga),
    '#CommentsPanel': CommentsPanel(),
    '#SettingsPanel': SettingsPanel(),
    '#KeybindingsPanel': KeybindingsPanel(),
    '#Bookmarks': BookmarksPanel(),
  };
  const SettingsPanelOpened = document
    .querySelector('#SettingsPanel')
    ?.classList.contains('visible');
  if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
    toggleAutoScroll();
  }
  refreshThemes();
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(getSettingsValue('colorScheme'));
  document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
  const outer = document.getElementById('MangaOnlineViewer');
  if (outer) {
    outer.className = `
        ${getSettingsValue('hidePageControls') ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
  }
  const reader = document.querySelector('#Chapter');
  if (reader) {
    reader.className = `${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}  ${getSettingsValue('viewMode')}`;
  }
  Object.entries(elements).forEach(([id, component]) => {
    const tag = document.querySelector<HTMLElement>(id);
    if (tag) {
      renderReplace(component, tag);
    }
  });
  document
    .querySelector('#Navigation')
    ?.classList.toggle('disabled', !getSettingsValue('showThumbnails'));
  document.querySelector('#Overlay')?.classList.remove('visible');
  events();
  if (SettingsPanelOpened) buttonSettingsOpen();
}

const app = (manga: IManga) => {
  loadedManga = manga;
  const main = html`
    <div
      id="MangaOnlineViewer"
      class="${classMap({
        hideControls: getSettingsValue('hidePageControls'),
        bookmarked: !!isBookmarked(),
        [getDevice()]: true,
      })}"
    >
      <div id="menu" class="${getSettingsValue('header')}">${IconMenu2}</div>
      ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
      <div id="Overlay" class="overlay"></div>
      ${CommentsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()} ${SettingsPanel()}
    </div>
  `;

  settings.listen(_.debounce(hydrateApp, 600));
  return main;
};
export default app;
