import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';
import {
  getAppStateValue,
  getSettingsValue,
  isBookmarked,
  setAppStateValue,
  settings,
  showSettings,
} from '../../core/settings';
import type { IManga, ISettings } from '../../types';
import renderReplace from '../../utils/renderReplace.ts';
import { getDevice } from '../../utils/tampermonkey';
import events from '../events';
import { toggleAutoScroll } from '../events/autoscroll';
import { buttonBookmarksClose } from '../events/bookmarks.ts';
import { buttonCommentsClose } from '../events/globals.ts';
import {
  buttonHeaderClick,
  buttonKeybindingsClose,
  buttonSettingsClose,
  buttonSettingsOpen,
} from '../events/panels.ts';
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

export function hydrateApp(
  _value: Readonly<ISettings>,
  _oldValue: Readonly<ISettings>,
  changedKey: keyof ISettings,
) {
  showSettings();
  const settingsPanelVisible =
    document.querySelector('#SettingsPanel')?.classList.contains('visible') ?? false;

  if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
    toggleAutoScroll();
  }

  // Apply changes based on the specific setting that was modified
  switch (changedKey) {
    case 'bookmarks':
      document
        .getElementById('MangaOnlineViewer')
        ?.classList.toggle('bookmarked', !!isBookmarked());
      if (document.querySelector('#Bookmarks')?.classList.contains('visible')) {
        renderReplace(BookmarksPanel(), document.querySelector('#Bookmarks')!);
      }
      break;
    case 'hidePageControls':
      document
        .getElementById('MangaOnlineViewer')
        ?.classList.toggle('hideControls', getSettingsValue('hidePageControls'));
      break;
    case 'colorScheme':
    case 'theme':
      refreshThemes();
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(getSettingsValue('colorScheme'));
      document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
      break;
    case 'fitWidthIfOversize':
    case 'viewMode': {
      const reader = document.querySelector('#Chapter');
      if (reader) {
        reader.className = `${
          getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''
        }  ${getSettingsValue('viewMode')}`;
      }
      if (changedKey === 'viewMode') {
        updateViewMode(getSettingsValue('viewMode'))();
      }
      break;
    }
    case 'navbar':
      document
        .querySelector('#Navigation')
        ?.classList.toggle('disabled', getSettingsValue('navbar') === 'disabled');
      break;
    case 'header':
      document.querySelector('#menu')?.setAttribute('class', getSettingsValue('header'));
      renderReplace(Header(getAppStateValue('manga')!), document.querySelector('#Header')!);
      events();
      break;
    default:
    // Any other settings change will be reflected in the settings panel.
    // No need to do anything here if the panel is closed.
    // If it's open, it will be handled below.
  }

  // If the Settings Panel is open, it needs to be re-rendered to reflect any change.
  if (settingsPanelVisible) {
    renderReplace(SettingsPanel(), document.querySelector('#SettingsPanel')!);
    document.querySelector('#Overlay')?.classList.remove('visible');
    events();
    buttonSettingsOpen();
  }
}

const app = (manga: IManga) => {
  setAppStateValue('manga', manga);
  const main = html`
    <div
      id="MangaOnlineViewer"
      class="${classMap({
        hideControls: getSettingsValue('hidePageControls'),
        bookmarked: !!isBookmarked(),
        [getDevice()]: true,
      })}"
    >
      <div
        id="menu"
        class="${getSettingsValue('header')}"
        @click=${buttonHeaderClick}
      >
        ${IconMenu2}
      </div>
      ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
      <div
        id="Overlay"
        class="overlay"
        @click="${() => {
          buttonSettingsClose();
          buttonCommentsClose();
          buttonBookmarksClose();
          buttonKeybindingsClose();
        }}"
      ></div>
      ${CommentsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()} ${SettingsPanel()}
    </div>
  `;

  settings.listen(_.debounce(hydrateApp, 600));
  return main;
};
export default app;
