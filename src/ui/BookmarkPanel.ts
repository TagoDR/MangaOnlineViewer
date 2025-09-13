import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
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
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash } from './icons';
import './components/Panel.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-bookmark-panel': BookmarkPanel;
  }
}

/**
 * Renders the bookmarks panel as a Lit component.
 * This panel displays a list of saved bookmarks and provides controls to add or close the panel.
 * Its visibility is controlled by the `panel` property in the application state.
 */
@customElement('mov-bookmark-panel')
@useStores(settings, locale, appState)
export default class BookmarkPanel extends LitElement {
  protected createRenderRoot() {
    return this; // No shadow DOM
  }

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
          class="BookmarkItem"
        >
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${mark.name}</span>
            <br />
            <a
              class="bookmarkURl"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(mark.date).toISOString().slice(0, 10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${mark.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a
              class=""
              href="${mark.url}"
              target="_blank"
            >
              <button
                class="ControlButton open"
                title="Open Bookmark"
                type="button"
              >
                ${IconExternalLink}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${mark.url}"
              @click=${buttonEraseBookmarks}
            >
              ${IconTrash}
            </button>
          </span>
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
        <button
          class="Bookmark simpleButton"
          title="${getLocaleString('BOOKMARK')}"
          @click=${buttonBookmark}
          slot="action"
        >
          ${isBookmarked() === undefined ? IconBookmark : IconBookmarkOff}
        </button>
        <h2 slot="header">${getLocaleString('BOOKMARKS')}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-panel>
    `;
  }
}
