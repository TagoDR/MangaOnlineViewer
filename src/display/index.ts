import type { IManga } from '../types';
import head from './reader';
import body from './components/App';
import events from './events';
import { loadManga } from './page';

export default function display(manga: IManga) {
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga, manga.begin);
  events();
  loadManga(manga, manga.begin);
}
