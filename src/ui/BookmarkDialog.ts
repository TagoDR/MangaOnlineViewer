import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  isBookmarked,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import { isEmpty } from '../utils/checks';
import { buttonBookmark, buttonEraseBookmarks } from './events/bookmarks.ts';
import styles from './styles/BookmarkDialog.css?inline';

@customElement('mov-bookmarks-dialog')
@useStores(settings, locale, appState)
export default class BookmarkDialog extends LitElement {
  static styles = [unsafeCSS(styles)];
  @property({ reflect: true })
  visible = false;

  listBookmarks() {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }

    return map(
      getSettingsValue('bookmarks'),
      (mark, index) =>
        html` <div
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
            <wa-button
              class="open"
              title="Open Bookmark"
              href="${mark.url}"
              target="_blank"
              variant="brand"
              appearance="outlined"
            >
              <wa-icon
                library="mov"
                name="external-link"
                label="Open Bookmark"
              ></wa-icon>
            </wa-button>
            <wa-button
              class="ControlButton erase"
              title="Delete Bookmark"
              value="${mark.url}"
              variant="danger"
              appearance="outlined"
              @click=${buttonEraseBookmarks}
            >
              <wa-icon
                library="mov"
                name="trash"
                label="Delete Bookmark"
              ></wa-icon>
            </wa-button>
          </span>
        </div>`,
    );
  }

  render() {
    const isVisible = getAppStateValue('panel') === 'bookmarks';
    return html` <wa-dialog
      id="BookmarksPanel"
      style="--width: 50vw;"
      ?open="${isVisible}"
      light-dismiss
      @wa-after-hide=${() => setAppStateValue('panel', 'none')}
    >
      <wa-button
        slot="header-actions"
        class="Bookmark"
        title="${getLocaleString('BOOKMARK')}"
        variant="brand"
        appearance="outlined"
        @click=${buttonBookmark}
      >
        <wa-icon
          name="${isBookmarked() ? 'bookmark-off' : 'bookmark'}"
          label="${getLocaleString('BOOKMARK')}"
        ></wa-icon>
      </wa-button>
      <h2 slot="label">${getLocaleString('BOOKMARKS')}</h2>
      <div id="BookmarksList">${this.listBookmarks()}</div>
    </wa-dialog>`;
  }
}
