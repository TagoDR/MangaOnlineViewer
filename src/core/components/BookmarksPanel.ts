import { IconExternalLink, IconTrash, IconX } from './icons';
import { getLocaleString, useSettings } from '../settings';
import { isEmpty } from '../../utils/checks';

const listBookmarks = () => {
  if (isEmpty(useSettings().bookmarks)) return [getLocaleString('LIST_EMPTY')];
  return useSettings().bookmarks.map(
    (mark, index) => `
      <div id='Bookmark${index + 1}' class='BookmarkItem'>
  <span class='bookmarkData bookmarkDate'>
    ${new Date(mark.date).toISOString().slice(0, 10)}
  </span>
        <span class='bookmarkData bookmarkURl'
              title='${mark.url}'>
    ${mark.url}
  </span>
        <span class='bookmarkData bookmarkPage'>Page: ${mark.page}</span>
        <span class='bookmarkData bookmarkFunctions'>
    <button class='ControlButton open' title='Open Bookmark' type='button'
            onclick="window.open('${mark.url}','_blank')">
      ${IconExternalLink}
    </button>
    <button class='ControlButton erase' title='Delete Bookmark' type='button' value='${mark.url}'>
      ${IconTrash}
    </button>
          </pan>
      </div>`,
  );
};
const BookmarkPanel = `
<div id='BookmarksOverlay' class='overlay'></div>
<div id='BookmarksPanel' class='panel'>
  <button id='CloseBookmarks' class='closeButton' title='${getLocaleString('CLOSE')}'>
    ${IconX}
  </button>
  <h2>${getLocaleString('BOOKMARKS')}</h2>
  <div id='BookmarksList'>
    ${listBookmarks().join('')}
  </div>
</div>
`;

export function reloadBookmarks() {
  const list = document.getElementById('BookmarksList');
  if (list) {
    list.innerHTML = listBookmarks().join('');
  }
}

export default BookmarkPanel;
