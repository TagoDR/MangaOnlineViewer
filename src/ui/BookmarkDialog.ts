import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { isEmpty } from '../utils/checks.ts';
import { buttonBookmark, buttonEraseBookmarks } from './events/bookmarks.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash, IconX } from './icons';

/**
 * Renders the list of saved bookmarks.
 * If no bookmarks are present, it displays a "List Empty" message.
 * Otherwise, it maps over the bookmarks from settings and creates a display element for each.
 *
 * @returns {import('lit').TemplateResult[] | string[]} An array of Lit templates for each bookmark, or a message if the list is empty.
 */
const listBookmarks = () => {
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
};

/**
 * Renders the bookmarks panel as a Lit template.
 * This panel displays a list of saved bookmarks and provides controls to add or close the panel.
 * Its visibility is controlled by the `panel` property in the application state.
 *
 * @returns A Lit `TemplateResult` representing the bookmarks panel.
 */
const BookmarkPanel = () => html`
  <div
    id="BookmarksPanel"
    class="${classMap({
      panel: true,
      visible: getAppStateValue('panel') === 'bookmarks',
    })}"
  >
    <button
      id="CloseBookmarks"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <button
      class="Bookmark simpleButton"
      title="${getLocaleString('BOOKMARK')}"
      @click=${buttonBookmark}
    >
      ${IconBookmark} ${IconBookmarkOff}
    </button>
    <h2>${getLocaleString('BOOKMARKS')}</h2>
    <div id="BookmarksList">${listBookmarks()}</div>
  </div>
`;

export default BookmarkPanel;
