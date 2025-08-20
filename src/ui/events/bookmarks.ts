import {
  changeSettingsValue,
  getAppStateValue,
  getLocaleString,
  isBookmarked,
  setAppStateValue,
} from '../../core/settings';
import Swal from 'sweetalert2-neutral';
import {
  changeSettingsValue,
  getAppStateValue,
  getLocaleString,
  isBookmarked,
  setAppStateValue,
} from '../../core/settings';
import type { IBookmark } from '../../types';
import { isNothing } from '../../utils/checks';
import { logScript } from '../../utils/tampermonkey';

/**
 * Removes a bookmark from the settings for a given URL.
 * @param {string} [url=window.location.href] - The URL of the bookmark to remove.
 */
export function removeURLBookmark(url: string = window.location.href) {
  if (!isNothing(isBookmarked(url))) {
    logScript(`Bookmark Removed ${url}`);
    changeSettingsValue('bookmarks', b => b.filter(el => el.url !== url));
  }
}

/**
 * Event handler for the button to erase a specific bookmark from the bookmarks panel.
 * @param {Event} event - The click event from the erase button.
 */
export function buttonEraseBookmarks(event: Event) {
  const target = (event.currentTarget as HTMLButtonElement).value;
  logScript(`Bookmark Removed ${target}`);
  Swal.fire({
    title: getLocaleString('BOOKMARK_REMOVED'),
    timer: 10000,
    icon: 'error',
  });
  removeURLBookmark(target);
}

/**
 * Event handler to open the bookmarks panel.
 */
export function buttonBookmarksOpen() {
  setAppStateValue('panel', 'bookmarks');
}

/**
 * Event handler to toggle a bookmark for the current page.
 * If a bookmark exists, it is removed. If not, a new one is created.
 * A confirmation dialog is shown to the user in either case.
 */
export function buttonBookmark() {
  const num = getAppStateValue('currentPage');
  const mark: IBookmark = {
    name: getAppStateValue('manga')?.title ?? window.location.hostname,
    url: window.location.href,
    page: num,
    date: new Date().toISOString().slice(0, 10),
  };
  if (isBookmarked(mark.url)) {
    changeSettingsValue('bookmarks', b => b.filter(el => el.url !== mark.url));
    Swal.fire({
      title: getLocaleString('BOOKMARK_REMOVED'),
      timer: 10000,
      icon: 'error',
    });
  } else {
    changeSettingsValue('bookmarks', b => [...b, mark]);
    Swal.fire({
      title: getLocaleString('BOOKMARK_SAVED'),
      html: getLocaleString('BOOKMARK_MESSAGE').replace('##num##', num.toString()),
      icon: 'success',
    });
  }
}
