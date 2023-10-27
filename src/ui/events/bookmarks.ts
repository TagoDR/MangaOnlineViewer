import Swal from 'sweetalert2';
import type { IBookmark } from '../../types';
import {
  getLocaleString,
  getUserSettings,
  isBookmarked,
  updateSettings,
} from '../../core/settings';
import { reloadBookmarks } from '../components/BookmarksPanel';
import { logScript } from '../../utils/tampermonkey';

export function buttonBookmarksOpen() {
  document.querySelector('#BookmarksPanel')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonBookmarksClose() {
  document.querySelector('#BookmarksPanel')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function buttonEraseBookmarks(elem: Element) {
  elem.addEventListener('click', (event) => {
    const target = (event.currentTarget as HTMLButtonElement).value;
    const marks = getUserSettings().bookmarks.filter((el) => el.url !== target);
    if (target === window.location.href) {
      document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    }

    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: getLocaleString('BOOKMARK_REMOVED'),
      timer: 10000,
      icon: 'error',
    });
    updateSettings({ bookmarks: marks });
    reloadBookmarks();
    document.querySelectorAll('.BookmarkItem .erase')?.forEach(buttonEraseBookmarks);
  });
}

export function buttonBookmark(elem: Element) {
  elem.addEventListener('click', (event) => {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    const num = parseInt(
      (event.currentTarget as HTMLElement).parentElement?.querySelector('.PageIndex')
        ?.textContent ?? '0',
      10,
    );
    const mark: IBookmark = {
      url: window.location.href,
      page: num,
      date: new Date().toISOString().slice(0, 10),
    };
    if (isBookmarked(mark.url)) {
      updateSettings({
        bookmarks: getUserSettings().bookmarks.filter((el) => el.url !== mark.url),
      });
      Swal.fire({
        title: getLocaleString('BOOKMARK_REMOVED'),
        timer: 10000,
        icon: 'error',
      });
    } else {
      updateSettings({ bookmarks: [...getUserSettings().bookmarks, mark] });
      Swal.fire({
        title: getLocaleString('BOOKMARK_SAVED'),
        html: getLocaleString('BOOKMARK_SAVED').replace('##NUM##', num.toString()),
        icon: 'success',
      });
    }

    reloadBookmarks();
    document.querySelectorAll('.BookmarkItem .erase')?.forEach(buttonEraseBookmarks);
  });
}

function bookmarks() {
  // List of Bookmarks
  document.querySelector('#bookmarks')?.addEventListener('click', buttonBookmarksOpen);
  document.querySelector('#CloseBookmarks')?.addEventListener('click', buttonBookmarksClose);
  document.querySelector('#Overlay')?.addEventListener('click', buttonBookmarksClose);
  // Erase Bookmark
  document.querySelectorAll('.BookmarkItem .erase')?.forEach(buttonEraseBookmarks);
  // Bookmark Page to resume reading
  document.querySelectorAll('.Bookmark')?.forEach(buttonBookmark);
}

export default bookmarks;
