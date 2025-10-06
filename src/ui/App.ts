import { useStores } from '@nanostores/lit';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  isBookmarked,
  locale,
  navbarSize,
  setAppStateValue,
  settings,
} from '../core/settings.ts';
import events from './events.ts';
import loadImages from './Image.ts';
import Reader from './Reader.ts';
import cssStyles from './styles';
import { themesCSS } from './themes.ts';
import './Startup.ts';
import { choose } from 'lit-html/directives/choose.js';
import type { IManga, LoadMode } from '../types';
import { cleanUpElement } from '../utils/cleanup.ts';

/**
 * The root component for the MangaOnlineViewer application, rendered as `<manga-online-viewer>`.
 * This LitElement component orchestrates the entire UI. It subscribes to the global state stores
 * (`settings`, `locale`, `appState`) and renders the main layout, including the header, reader,
 * navigation, and various dialog panels. It is also responsible for applying the selected theme.
 */
@customElement('manga-online-viewer')
@useStores(settings, locale, appState)
export default class App extends LitElement {
  static readonly styles = [css``, unsafeCSS(cssStyles)];

  @property({ type: String, reflect: true })
  loadMode: LoadMode = 'wait';

  @property({ type: Object })
  manga?: IManga;

  async start(begin?: number, end?: number) {
    if (this.manga) {
      cleanUpElement(document.documentElement, document.head, document.body);
      window.scrollTo(0, 0);
      setAppStateValue('manga', {
        ...this.manga,
        begin: begin ?? this.manga.begin,
        pages: end ?? this.manga.pages,
      });
      document.documentElement.setAttribute('mov', '');
    }
  }

  /**
   * LitElement lifecycle hook, called after the component's first render.
   * It initializes global event listeners and registers the component's `shadowRoot`
   * in the application state, making it accessible to other parts of the application
   * that may need to interact with the DOM.
   */
  firstUpdated() {
    if (this.loadMode === 'always') this.start();
    document.documentElement.classList.add(
      getSettingsValue('colorScheme'),
      `wa-${getSettingsValue('colorScheme')}`,
    );
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
    const dialog = getAppStateValue('dialog');
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
        ${
          manga
            ? html`
              <reader-header .manga=${manga}></reader-header>
              ${Reader(manga)}
              <navbar-thumbnails
                      .mode=${getSettingsValue('navbar')}
                    ></navbar-thumbnails>
              <manga-pagination
                        .mode="${getSettingsValue('pagination')}"
                      .startPage=${manga.begin}
                      .totalPages=${manga.pages}
                      .currentPage=${getAppStateValue('currentPage')}
                      .next=${manga.next}
                      .prev=${manga.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`
            : html` <script-startup
              .mangaPages="${this.manga?.pages}"
              begin="${this.manga?.begin}"
              initialStatus="${choose(this.loadMode, [
                ['wait', () => 'initial-prompt'],
                ['never', () => 'late-start-button'],
              ])}"
              @start=${(e: CustomEvent) => {
                this.start(e.detail?.begin, e.detail?.end);
              }}
            ></script-startup>`
        }
        ${
          dialog
            ? html`
              <wa-dialog
                open
                @wa-hide=${(e: Event) => {
                  if (e.eventPhase !== Event.AT_TARGET) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                  }
                  setAppStateValue('dialog', null);
                }}
              >
                <span slot="label">${dialog.title}</span>
                <div style="display: flex; align-items: center; jutify-contet gap: 1rem;">
                  <wa-icon
                    name="${dialog.icon}"
                    style="font-size: 4rem"
                  ></wa-icon>
                  ${dialog.content}
                </div>
                ${dialog.footer}
              </wa-dialog>
            `
            : nothing
        }
      </div>
    `;
  }
}
