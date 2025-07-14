import { useStore } from '@nanostores/preact';
import { locale, settings } from '../core/settings.ts';
import {
  buttonBookmark,
  buttonBookmarksClose,
  buttonEraseBookmarks,
} from '../ui/events/bookmarks.ts';
import { isEmpty } from '../utils/checks.ts';
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash, IconX } from './Icons.ts';

function BookmarksPanel() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <div
      id="BookmarksPanel"
      className="panel"
    >
      <button
        id="CloseBookmarks"
        className="closeButton"
        title={l.CLOSE}
        onClick={buttonBookmarksClose}
        type="button"
      >
        <IconX />
      </button>
      <button
        className="Bookmark simpleButton"
        title={l.BOOKMARK}
        type="button"
        onClick={buttonBookmark}
      >
        <IconBookmark />
        <IconBookmarkOff />
      </button>
      <h2>{l.BOOKMARKS}</h2>
      <div id="BookmarksList">
        {isEmpty(s.bookmarks)
          ? l.LIST_EMPTY
          : s.bookmarks.map((mark, index) => (
              <div
                id={`Bookmark${index + 1}`}
                className="BookmarkItem"
                key={mark.url}
              >
                <span className="bookmarkColumnLarge">
                  <span className="bookmarkName">{mark.name}</span>
                  <br />
                  <a
                    className="bookmarkURl"
                    href={mark.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {mark.url}
                  </a>
                </span>
                <span className="bookmarkColumnSmall">
                  <span className="bookmarkDate">
                    {new Date(mark.date).toISOString().slice(0, 10)}
                  </span>
                  <br />
                  <span className="bookmarkPage">Page: {mark.page}</span>
                </span>
                <span className="bookmarkFunctions">
                  <a
                    href={mark.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="ControlButton open"
                      title="Open Bookmark"
                      type="button"
                    >
                      <IconExternalLink />
                    </button>
                  </a>
                  <button
                    className="ControlButton erase"
                    title="Delete Bookmark"
                    type="button"
                    value={mark.url}
                    onClick={buttonEraseBookmarks}
                  >
                    <IconTrash />
                  </button>
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}

export default BookmarksPanel;
