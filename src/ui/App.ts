import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import { getDevice } from '../utils/tampermonkey';
import { ResizeController } from './controllers/ResizeController.ts';
import keybindings from './events/keybindings.ts';
import { loadManga } from './Image.ts';
import styles from './styles/App.css?inline';
import animations from './styles/animations.css?inline';
import mediaQueries from './styles/media-queries.css?inline';

@customElement('mov-app')
@useStores(settings, locale, appState)
export default class App extends LitElement {
  static styles = [unsafeCSS(styles), unsafeCSS(animations), unsafeCSS(mediaQueries)];

  constructor() {
    super();
    keybindings();
    window.addEventListener('app-resize', this.updateDeviceType);
    new ResizeController(this);
  }

  protected firstUpdated() {
    setAppStateValue('render', this.renderRoot);
    loadManga();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('app-resize', this.updateDeviceType);
  }

  render() {
    const classes = {
      [getDevice()]: true,
      [getSettingsValue('colorScheme')]: true,
      [getSettingsValue('theme')]: true,
    };

    return html`
      <mov-app-shell
        id="MangaOnlineViewer"
        class=${classMap(classes)}
        .headerMode=${getSettingsValue('header')}
        .viewMode=${getSettingsValue('viewMode')}
        .navbarMode=${getSettingsValue('navbar')}
        .zoomMode=${getSettingsValue('zoomMode')}
        .scrollAmount=${getSettingsValue('scrollHeight')}
        ?autoScroll=${getAppStateValue('autoScroll')}
        @auto-scroll-change=${(e: CustomEvent) => setAppStateValue('autoScroll', e.detail)}
        data-theme="custom"
      >
        ${
          getAppStateValue('device') === 'desktop'
            ? html` <mov-toolbar slot="toolbar-left"></mov-toolbar>`
            : ''
        }
        <mov-header slot="header"></mov-header>
        <mov-menu slot="toolbar-right"></mov-menu>
        <mov-reader
          slot="main"
          .viewMode=${getSettingsValue('viewMode')}
        ></mov-reader>
        <mov-navbar
          slot="nav"
          .mode=${getSettingsValue('navbar')}
        ></mov-navbar>
      </mov-app-shell>
      ${
        getSettingsValue('pagination')
          ? html` <mov-pagination
            .currentPage=${getAppStateValue('currentPage')}
            .totalPages=${getAppStateValue('manga')?.pages ?? 1}
            .startPage=${getAppStateValue('manga')?.begin ?? 1}
            @prev-page=${this.changePage(-1)}
            @next-page=${this.changePage(1)}
            @goto-page=${(e: CustomEvent) => setAppStateValue('scrollToPage', e.detail)}
          ></mov-pagination>`
          : null
      }
      <mov-comments-dialog></mov-comments-dialog>
      <mov-settings-panel></mov-settings-panel>
      <mov-keybindings-dialog></mov-keybindings-dialog>
      <mov-bookmarks-dialog></mov-bookmarks-dialog>
    `;
  }

  changePage(sign: 1 | -1) {
    return () => setAppStateValue('scrollToPage', getAppStateValue('currentPage') + sign);
  }

  private updateDeviceType = () => {
    setAppStateValue('device', getDevice());
  };
}
