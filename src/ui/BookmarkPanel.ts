import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  isBookmarked,
  locale,
  settings,
} from '../core/settings.ts';
import { isEmpty } from '../utils/checks.ts';
import { buttonBookmark, buttonEraseBookmarks } from './events/bookmarks.ts';
import { buttonPanelsClose } from './events/panels.ts';
import './components/Panel.ts';
import styles from './styles/bookmarks.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'bookmark-panel': BookmarkPanel;
  }
}

/**
 * Renders the bookmarks panel as a Lit component.
 * This panel displays a list of saved bookmarks and provides controls to add or close the panel.
 * Its visibility is controlled by the `panel` property in the application state.
 */
@customElement('bookmark-panel')
@useStores(settings, locale, appState)
export default class BookmarkPanel extends LitElement {
  static styles = [unsafeCSS(styles)];

  // protected createRenderRoot() {
  //   return this; // No shadow DOM
  // }

  /**
   * Renders the list of saved bookmarks.
   * If no bookmarks are present, it displays a "List Empty" message.
   * Otherwise, it maps over the bookmarks from settings and creates a display element for each.
   *
   * @returns {import('lit').TemplateResult[] | string[]} An array of Lit templates for each bookmark, or a message if the list is empty.
   */
  private listBookmarks() {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }

    return getSettingsValue('bookmarks').map(
      (mark, index) => html`
        <div
          id="Bookmark${index + 1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${mark.name}</div>
            <a
              class="bookmark-url"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(mark.date).toISOString().slice(0, 10)}</div>
            <div class="bookmark-page">Page: ${mark.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${mark.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${mark.url}"
              @click=${buttonEraseBookmarks}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `,
    );
  }

  render() {
    return html`
      <mov-panel
        id="BookmarksPanel"
        ?open=${getAppStateValue('panel') === 'bookmarks'}
        mode="dialog"
        position="center"
        @close=${buttonPanelsClose}
      >
        <mov-button
          class="Bookmark"
          title="${getLocaleString('BOOKMARK')}"
          @click=${buttonBookmark}
          slot="action"
        >
          <mov-icon
            name="${isBookmarked() === undefined ? 'IconBookmark' : 'IconBookmarkOff'}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${getLocaleString('BOOKMARKS')}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-panel>
    `;
  }
}
