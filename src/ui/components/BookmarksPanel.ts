import { html } from '../../utils/code-tag';
import { IconExternalLink, IconTrash, IconX } from '../icons';
import { getLocaleString, getUserSettings } from '../../core/settings';
import { isEmpty } from '../../utils/checks';

const listBookmarks = () => {
  if (isEmpty(getUserSettings().bookmarks)) {
    return [getLocaleString('LIST_EMPTY')];
  }

  return getUserSettings().bookmarks.map(
    (mark, index) => html`
      <div id="Bookmark${index + 1}" class="BookmarkItem">
        <span class="bookmarkColumnLarge">
          <span class="bookmarkName">${mark.name}</span>
          <br />
          <a class="bookmarkURl" href="${mark.url}" target="_blank">${mark.url}</a>
        </span>
        <span class="bookmarkColumnSmall">
          <span class="bookmarkDate"> ${new Date(mark.date).toISOString().slice(0, 10)}</span>
          <br />
          <span class="bookmarkPage">Page: ${mark.page}</span>
        </span>
        <span class="bookmarkFunctions">
          <a class="" href="${mark.url}" target="_blank">
            <button class="ControlButton open" title="Open Bookmark" type="button">
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
  <div id="BookmarksPanel" class="panel">
    <button id="CloseBookmarks" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
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
