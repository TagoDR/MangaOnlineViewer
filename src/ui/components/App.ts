import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
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
} from '../../core/settings';
import { getDevice } from '../../utils/tampermonkey';
import events from '../events';
import { buttonHeaderClick, buttonPanelsClose } from '../events/panels.ts';
import { IconMenu2 } from '../icons';
import cssStyles from '../styles/styles.ts';
import { themesCSS } from '../themes';
import BookmarksPanel from './BookmarksPanel';
import CommentsPanel from './CommentsPanel';
import Header from './Header';
import KeybindingsPanel from './KeybindingsPanel';
import Reader from './Reader';
import SettingsPanel from './SettingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';

@customElement('manga-online-viewer')
@useStores(settings, locale, appState)
export default class App extends LitElement {
  static styles = [unsafeCSS(cssStyles), unsafeCSS(themesCSS)];

  firstUpdated() {
    events();
    setAppStateValue('render', this.renderRoot);
  }

  render() {
    const manga = getAppStateValue('manga');
    if (!manga) return html``;
    return html`
      <div
        id="MangaOnlineViewer"
        class="${classMap({
          [getSettingsValue('colorScheme')]: true,
          hideControls: getSettingsValue('hidePageControls'),
          bookmarked: !!isBookmarked(),
          [getAppStateValue('device')]: true,
          [getSettingsValue('theme')]: true,
        })}"
        .data-theme="${getSettingsValue('theme')}"
        .locale="${getSettingsValue('locale')}"
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
          class="${classMap({
            overlay: true,
            visible: getAppStateValue('panel') !== 'none',
          })}"
          @click="${buttonPanelsClose}"
        ></div>
        ${CommentsPanel()} ${KeybindingsPanel()} ${BookmarksPanel()} ${SettingsPanel()}
      </div>
    `;
  }
}
