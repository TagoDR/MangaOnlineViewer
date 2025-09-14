import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  isBookmarked,
  locale,
  navbarSize,
  settings,
} from '../core/settings.ts';
import events from './events.ts';
import loadImages from './Image.ts';
import Reader from './Reader.ts';
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
    loadImages();
  }

  /**
   * Renders the application's UI.
   * This includes applying the current theme and rendering the header, reader,
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
        style="${styleMap({
          [`padding-${getSettingsValue('navbar')}`]: `${navbarSize}px`,
        })}"
        .locale="${getSettingsValue('locale')}"
      >
        <mov-header .manga=${manga}></mov-header>
        ${Reader(manga)}
        ${
          getSettingsValue('navbar') === 'disabled'
            ? ''
            : html`<mov-navbar .mode=${getSettingsValue('navbar')}></mov-navbar>`
        }
        ${
          !getSettingsValue('pagination')
            ? ''
            : html` <mov-pagination
              .startPage=${manga.begin}
              .totalPages=${manga.pages}
              .currentPage=${getAppStateValue('currentPage')}
              .next=${manga.next}
              .prev=${manga.prev}
            ></mov-pagination>`
        }
        <mov-comments-panel></mov-comments-panel>
        <mov-keybindings-panel></mov-keybindings-panel>
        <mov-bookmark-panel></mov-bookmark-panel>
        <mov-settings-panel></mov-settings-panel>
      </div>
    `;
  }
}
