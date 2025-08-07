import Swal from 'sweetalert2';
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

export function buttonBookmarksOpen() {
  setAppStateValue('panel', 'bookmarks');
}

export function buttonBookmark(event: Event) {
  const pagesDistance = [
    ...(getAppStateValue('render')?.querySelectorAll<HTMLElement>('.MangaPage') ?? []),
  ].map(element => Math.abs(element.offsetTop - window.scrollY));
  const currentPage = parseInt(
    (event.currentTarget as HTMLElement).parentElement?.querySelector('.PageIndex')?.textContent ??
      '0',
    10,
  );
  const num = currentPage || pagesDistance.indexOf(Math.min(...pagesDistance)) + 1;
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
      html: getLocaleString('BOOKMARK_SAVED').replace('##NUM##', num.toString()),
      icon: 'success',
    });
  }
}
