import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { isEmpty } from '../utils/checks.ts';
import { buttonBookmark, buttonEraseBookmarks } from './events/bookmarks.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash, IconX } from './icons';

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
    <div id="BookmarksList">
      ${listBookmarks()}
    </div>
  </div>
`;

export default BookmarkPanel;
