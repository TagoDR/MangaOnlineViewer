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
import Reader from './Reader.ts';
import SettingsPanel from './SettingsPanel.ts';
import cssStyles from './styles';
import { themesCSS } from './themes.ts';

/**
 * The root component for the MangaOnlineViewer application, rendered as `<manga-online-viewer>`.
 * This LitElement component orchestrates the entire UI. It subscribes to the global state stores
 * (`settings`, `locale`, `appState`) and renders the main layout, including the header, reader,
 * navigation, and various dialog panels. It is also responsible for applying the selected theme.
 */
@customElement('manga-online-viewer')
@useStores(settings, locale, appState)
export default class App extends LitElement {
  static styles = [css``, unsafeCSS(cssStyles)];

  /**
   * LitElement lifecycle hook, called after the component's first render.
   * It initializes global event listeners and registers the component's `shadowRoot`
   * in the application state, making it accessible to other parts of the application
   * that may need to interact with the DOM.
   */
  firstUpdated() {
    events();
    setAppStateValue('render', this.shadowRoot);
  }

  /**
   * Renders the application's UI.
   * This includes applying the current theme, and rendering the header, reader,
   * navigation bar, overlay, and all dialog panels.
   * @returns The rendered template.
   */
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
        ${Header(manga)} ${Reader(manga)}
        <mov-navbar .mode=${getSettingsValue('navbar')}></mov-navbar>
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
