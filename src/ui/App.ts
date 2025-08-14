import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  isBookmarked,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings.ts';
import BookmarksPanel from './BookmarkDialog.ts';
import CommentsPanel from './CommentsDialog.ts';
import { buttonPanelsClose } from './events/panels.ts';
import events from './events.ts';
import Header from './Header.ts';
import KeybindingsDialog from './KeybindingsDialog.ts';
import Navbar from './Navbar.ts';
import Reader from './Reader.ts';
import SettingsPanel from './SettingsPanel.ts';
import cssStyles from './styles';
import { themesCSS } from './themes.ts';

@customElement('manga-online-viewer')
@useStores(settings, locale, appState)
export default class App extends LitElement {
  static styles = [css``, unsafeCSS(cssStyles)];

  firstUpdated() {
    events();
    setAppStateValue('render', this.shadowRoot);
  }

  render() {
    const manga = getAppStateValue('manga');
    if (!manga) return html``;
    return html`
      <style>
        ${themesCSS()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${classMap({
          [getSettingsValue('colorScheme')]: true,
          hideControls: getSettingsValue('hidePageControls'),
          bookmarked: !!isBookmarked(),
          [getAppStateValue('device')]: true,
        })}"
        .locale="${getSettingsValue('locale')}"
      >
        ${Header(manga)} ${Reader(manga)} ${Navbar(manga)}
        <div
          id="Overlay"
          class="${classMap({
            overlay: true,
            visible: getAppStateValue('panel') !== 'none',
          })}"
          @click="${buttonPanelsClose}"
        ></div>
        ${CommentsPanel()} ${KeybindingsDialog()} ${BookmarksPanel()} ${SettingsPanel()}
      </div>
    `;
  }
}
