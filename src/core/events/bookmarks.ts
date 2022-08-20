import Swal from 'sweetalert2';
import { IBookmark } from '../../types';
import { updateSettings, useSettings } from '../settings';
import { reloadBookmarks } from '../components/BookmarksPanel';
import { logScript } from '../../utils/tampermonkey';

function buttonBookmarks() {
  document.querySelector('#BookmarksPanel')?.classList.toggle('visible');
  document.querySelector('#BookmarksOverlay')?.classList.toggle('visible');
}

function eraseBookmarks(elem: Element) {
  elem.addEventListener('click', (event) => {
    const target = (event.currentTarget as HTMLButtonElement).value;
    const marks = useSettings().bookmarks.filter((el) => el.url !== target);
    if (target === window.location.href) {
      document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    }
    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: 'Bookmark Removed',
      timer: 10000,
      icon: 'error',
    });
    updateSettings({ bookmarks: marks });
    reloadBookmarks();
    document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
  });
}

function buttonBookmark(elem: Element) {
  elem.addEventListener('click', (event) => {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    const num = parseInt(
      (event.currentTarget as HTMLElement).parentElement?.querySelector('.PageIndex')
        ?.textContent || '0',
      10,
    );
    const mark: IBookmark = {
      url: window.location.href,
      page: num,
      date: Date.now(),
    };
    const found = useSettings().bookmarks.some((el) => el.url === mark.url);
    if (found) {
      updateSettings({ bookmarks: useSettings().bookmarks.filter((el) => el.url !== mark.url) });
      Swal.fire({
        title: 'Bookmark Removed',
        timer: 10000,
        icon: 'error',
      });
    } else {
      updateSettings({ bookmarks: [...useSettings().bookmarks, mark] });
      Swal.fire({
        title: 'Saved Bookmark',
        html: `Next time you open this chapter it will resume from:<h4>Page ${num}</h4>(Only <i>ONCE</i> per Bookmark, will be removed after a year unused)`,
        icon: 'success',
      });
    }
    reloadBookmarks();
    document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
  });
}

function bookmarks() {
  // List of Bookmarks
  document.querySelector('#bookmarks')?.addEventListener('click', buttonBookmarks);
  document.querySelector('#CloseBookmarks')?.addEventListener('click', buttonBookmarks);
  document.querySelector('#BookmarksOverlay')?.addEventListener('click', buttonBookmarks);
  // Erase Bookmark
  document.querySelectorAll('.BookmarkItem .erase')?.forEach(eraseBookmarks);
  // Bookmark Page to resume reading
  document.querySelectorAll('.Bookmark')?.forEach(buttonBookmark);
}
export default bookmarks;
