import { getLocaleString, getSettingsValue } from '../../core/settings';
import { isEmpty } from '../../utils/checks';
import { html } from '../../utils/code-tag';
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash, IconX } from '../icons';

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
    class="panel"
  >
    <button
      id="CloseBookmarks"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
    >
      ${IconX}
    </button>
    <button
      class="Bookmark simpleButton"
      title="${getLocaleString('BOOKMARK')}"
    >
      ${IconBookmark} ${IconBookmarkOff}
    </button>
    <h2>${getLocaleString('BOOKMARKS')}</h2>
    <div id="BookmarksList"></div>
  </div>
`;

export function reloadBookmarks() {
  const list = document.getElementById('BookmarksList');
  if (list) {
    list.innerHTML = listBookmarks().join('');
  }
}

export default BookmarkPanel;
