import Swal from 'sweetalert2';
import {
  changeSettingsValue,
  getAppStateValue,
  getLocaleString,
  isBookmarked,
} from '../../core/settings';
import type { IBookmark } from '../../types';
import { isNothing } from '../../utils/checks';
import { logScript } from '../../utils/tampermonkey';

export function removeURLBookmark(url: string = window.location.href) {
  if (!isNothing(isBookmarked(url))) {
    logScript(`Bookmark Removed ${url}`);
    changeSettingsValue('bookmarks', b => b.filter(el => el.url !== url));
  }
}

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

export function buttonBookmark() {
  const currentPage = getAppStateValue('currentPage') ?? 1;
  const mark: IBookmark = {
    name:
      document
        .querySelector('title')
        ?.textContent?.trim()
        .replace(/^\(\d+%\) */, '') ?? '',
    url: window.location.href,
    page: currentPage,
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
      html: getLocaleString('BOOKMARK_SAVED').replace('##NUM##', currentPage.toString()),
      icon: 'success',
    });
  }
}
