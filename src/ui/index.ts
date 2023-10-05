import type { IManga } from '../types/index.ts';
import head from './reader.ts';
import body from './components/App.ts';
import events from './events.ts';
import { loadManga } from './page.ts';

export default function display(manga: IManga) {
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga);
  events();
  loadManga(manga);
}
