import type { IManga } from '../types';
import head from './reader';
import body, { hydrateApp } from './components/App';
import events from './events';
import { loadManga } from './page';

export default function display(manga: IManga) {
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga);
  events();
  loadManga(manga);
  document.querySelector('#MangaOnlineViewer')?.addEventListener('hydrate', hydrateApp);
  if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
}
